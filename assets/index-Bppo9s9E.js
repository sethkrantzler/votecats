(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();var nm={};/**
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
 */const z_=function(i){const t=[];let e=0;for(let n=0;n<i.length;n++){let r=i.charCodeAt(n);r<128?t[e++]=r:r<2048?(t[e++]=r>>6|192,t[e++]=r&63|128):(r&64512)===55296&&n+1<i.length&&(i.charCodeAt(n+1)&64512)===56320?(r=65536+((r&1023)<<10)+(i.charCodeAt(++n)&1023),t[e++]=r>>18|240,t[e++]=r>>12&63|128,t[e++]=r>>6&63|128,t[e++]=r&63|128):(t[e++]=r>>12|224,t[e++]=r>>6&63|128,t[e++]=r&63|128)}return t},pE=function(i){const t=[];let e=0,n=0;for(;e<i.length;){const r=i[e++];if(r<128)t[n++]=String.fromCharCode(r);else if(r>191&&r<224){const s=i[e++];t[n++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=i[e++],o=i[e++],a=i[e++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;t[n++]=String.fromCharCode(55296+(l>>10)),t[n++]=String.fromCharCode(56320+(l&1023))}else{const s=i[e++],o=i[e++];t[n++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return t.join("")},H_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,t){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<i.length;r+=3){const s=i[r],o=r+1<i.length,a=o?i[r+1]:0,l=r+2<i.length,c=l?i[r+2]:0,h=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),n.push(e[h],e[d],e[f],e[p])}return n.join("")},encodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(i):this.encodeByteArray(z_(i),t)},decodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(i):pE(this.decodeStringToByteArray(i,t))},decodeStringToByteArray(i,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<i.length;){const s=e[i.charAt(r++)],a=r<i.length?e[i.charAt(r)]:0;++r;const c=r<i.length?e[i.charAt(r)]:64;++r;const d=r<i.length?e[i.charAt(r)]:64;if(++r,s==null||a==null||c==null||d==null)throw new mE;const f=s<<2|a>>4;if(n.push(f),c!==64){const p=a<<4&240|c>>2;if(n.push(p),d!==64){const y=c<<6&192|d;n.push(y)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class mE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gE=function(i){const t=z_(i);return H_.encodeByteArray(t,!0)},Lc=function(i){return gE(i).replace(/\./g,"")},_E=function(i){try{return H_.decodeString(i,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function vE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yE=()=>vE().__FIREBASE_DEFAULTS__,xE=()=>{if(typeof process>"u"||typeof nm>"u")return;const i=nm.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},EE=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=i&&_E(i[1]);return t&&JSON.parse(t)},sf=()=>{try{return yE()||xE()||EE()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},SE=i=>{var t,e;return(e=(t=sf())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[i]},TE=i=>{const t=SE(i);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const n=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),n]:[t.substring(0,e),n]},G_=()=>{var i;return(i=sf())===null||i===void 0?void 0:i.config};/**
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
 */class wE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,n))}}}/**
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
 */function ME(i,t){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},n=t||"demo-project",r=i.iat||0,s=i.sub||i.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},i);return[Lc(JSON.stringify(e)),Lc(JSON.stringify(o)),""].join(".")}/**
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
 */function AE(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bE(){var i;const t=(i=sf())===null||i===void 0?void 0:i.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function RE(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function CE(){return!bE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function W_(){try{return typeof indexedDB=="object"}catch{return!1}}function q_(){return new Promise((i,t)=>{try{let e=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),e||self.indexedDB.deleteDatabase(n),i(!0)},r.onupgradeneeded=()=>{e=!1},r.onerror=()=>{var s;t(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(e){t(e)}})}function IE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const PE="FirebaseError";class Yr extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=PE,Object.setPrototypeOf(this,Yr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,au.prototype.create)}}class au{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,s=this.errors[t],o=s?DE(s,n):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Yr(r,a,n)}}function DE(i,t){return i.replace(LE,(e,n)=>{const r=t[n];return r!=null?String(r):`<${n}?>`})}const LE=/\{\$([^}]+)}/g;function Nc(i,t){if(i===t)return!0;const e=Object.keys(i),n=Object.keys(t);for(const r of e){if(!n.includes(r))return!1;const s=i[r],o=t[r];if(im(s)&&im(o)){if(!Nc(s,o))return!1}else if(s!==o)return!1}for(const r of n)if(!e.includes(r))return!1;return!0}function im(i){return i!==null&&typeof i=="object"}/**
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
 */const NE=1e3,OE=2,UE=4*60*60*1e3,FE=.5;function rm(i,t=NE,e=OE){const n=t*Math.pow(e,i),r=Math.round(FE*n*(Math.random()-.5)*2);return Math.min(UE,n+r)}/**
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
 */function Br(i){return i&&i._delegate?i._delegate:i}class cr{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const us="[DEFAULT]";/**
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
 */class VE{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const n=new wE;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:e});r&&n.resolve(r)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(BE(t))try{this.getOrInitializeService({instanceIdentifier:us})}catch{}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const s=this.getOrInitializeService({instanceIdentifier:r});n.resolve(s)}catch{}}}}clearInstance(t=us){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=us){return this.instances.has(t)}getOptions(t=us){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);n===a&&o.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),s=(n=this.onInitCallbacks.get(r))!==null&&n!==void 0?n:new Set;s.add(t),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&t(o,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:kE(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=us){return this.component?this.component.multipleInstances?t:us:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kE(i){return i===us?void 0:i}function BE(i){return i.instantiationMode==="EAGER"}/**
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
 */class zE{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new VE(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var pe;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(pe||(pe={}));const HE={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},GE=pe.INFO,WE={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},qE=(i,t,...e)=>{if(t<i.logLevel)return;const n=new Date().toISOString(),r=WE[t];if(r)console[r](`[${n}]  ${i.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class of{constructor(t){this.name=t,this._logLevel=GE,this._logHandler=qE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in pe))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?HE[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...t),this._logHandler(this,pe.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...t),this._logHandler(this,pe.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...t),this._logHandler(this,pe.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...t),this._logHandler(this,pe.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...t),this._logHandler(this,pe.ERROR,...t)}}const $E=(i,t)=>t.some(e=>i instanceof e);let sm,om;function XE(){return sm||(sm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jE(){return om||(om=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $_=new WeakMap,Vh=new WeakMap,X_=new WeakMap,Vu=new WeakMap,af=new WeakMap;function YE(i){const t=new Promise((e,n)=>{const r=()=>{i.removeEventListener("success",s),i.removeEventListener("error",o)},s=()=>{e(Dr(i.result)),r()},o=()=>{n(i.error),r()};i.addEventListener("success",s),i.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&$_.set(e,i)}).catch(()=>{}),af.set(t,i),t}function KE(i){if(Vh.has(i))return;const t=new Promise((e,n)=>{const r=()=>{i.removeEventListener("complete",s),i.removeEventListener("error",o),i.removeEventListener("abort",o)},s=()=>{e(),r()},o=()=>{n(i.error||new DOMException("AbortError","AbortError")),r()};i.addEventListener("complete",s),i.addEventListener("error",o),i.addEventListener("abort",o)});Vh.set(i,t)}let kh={get(i,t,e){if(i instanceof IDBTransaction){if(t==="done")return Vh.get(i);if(t==="objectStoreNames")return i.objectStoreNames||X_.get(i);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return Dr(i[t])},set(i,t,e){return i[t]=e,!0},has(i,t){return i instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in i}};function QE(i){kh=i(kh)}function JE(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const n=i.call(ku(this),t,...e);return X_.set(n,t.sort?t.sort():[t]),Dr(n)}:jE().includes(i)?function(...t){return i.apply(ku(this),t),Dr($_.get(this))}:function(...t){return Dr(i.apply(ku(this),t))}}function ZE(i){return typeof i=="function"?JE(i):(i instanceof IDBTransaction&&KE(i),$E(i,XE())?new Proxy(i,kh):i)}function Dr(i){if(i instanceof IDBRequest)return YE(i);if(Vu.has(i))return Vu.get(i);const t=ZE(i);return t!==i&&(Vu.set(i,t),af.set(t,i)),t}const ku=i=>af.get(i);function j_(i,t,{blocked:e,upgrade:n,blocking:r,terminated:s}={}){const o=indexedDB.open(i,t),a=Dr(o);return n&&o.addEventListener("upgradeneeded",l=>{n(Dr(o.result),l.oldVersion,l.newVersion,Dr(o.transaction),l)}),e&&o.addEventListener("blocked",l=>e(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const tS=["get","getKey","getAll","getAllKeys","count"],eS=["put","add","delete","clear"],Bu=new Map;function am(i,t){if(!(i instanceof IDBDatabase&&!(t in i)&&typeof t=="string"))return;if(Bu.get(t))return Bu.get(t);const e=t.replace(/FromIndex$/,""),n=t!==e,r=eS.includes(e);if(!(e in(n?IDBIndex:IDBObjectStore).prototype)||!(r||tS.includes(e)))return;const s=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let c=l.store;return n&&(c=c.index(a.shift())),(await Promise.all([c[e](...a),r&&l.done]))[0]};return Bu.set(t,s),s}QE(i=>({...i,get:(t,e,n)=>am(t,e)||i.get(t,e,n),has:(t,e)=>!!am(t,e)||i.has(t,e)}));/**
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
 */class nS{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(iS(e)){const n=e.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(e=>e).join(" ")}}function iS(i){const t=i.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Bh="@firebase/app",lm="0.10.8";/**
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
 */const Cs=new of("@firebase/app"),rS="@firebase/app-compat",sS="@firebase/analytics-compat",oS="@firebase/analytics",aS="@firebase/app-check-compat",lS="@firebase/app-check",cS="@firebase/auth",uS="@firebase/auth-compat",hS="@firebase/database",dS="@firebase/database-compat",fS="@firebase/functions",pS="@firebase/functions-compat",mS="@firebase/installations",gS="@firebase/installations-compat",_S="@firebase/messaging",vS="@firebase/messaging-compat",yS="@firebase/performance",xS="@firebase/performance-compat",ES="@firebase/remote-config",SS="@firebase/remote-config-compat",TS="@firebase/storage",wS="@firebase/storage-compat",MS="@firebase/firestore",AS="@firebase/vertexai-preview",bS="@firebase/firestore-compat",RS="firebase",CS="10.12.5";/**
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
 */const zh="[DEFAULT]",IS={[Bh]:"fire-core",[rS]:"fire-core-compat",[oS]:"fire-analytics",[sS]:"fire-analytics-compat",[lS]:"fire-app-check",[aS]:"fire-app-check-compat",[cS]:"fire-auth",[uS]:"fire-auth-compat",[hS]:"fire-rtdb",[dS]:"fire-rtdb-compat",[fS]:"fire-fn",[pS]:"fire-fn-compat",[mS]:"fire-iid",[gS]:"fire-iid-compat",[_S]:"fire-fcm",[vS]:"fire-fcm-compat",[yS]:"fire-perf",[xS]:"fire-perf-compat",[ES]:"fire-rc",[SS]:"fire-rc-compat",[TS]:"fire-gcs",[wS]:"fire-gcs-compat",[MS]:"fire-fst",[bS]:"fire-fst-compat",[AS]:"fire-vertex","fire-js":"fire-js",[RS]:"fire-js-all"};/**
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
 */const Oc=new Map,PS=new Map,Hh=new Map;function cm(i,t){try{i.container.addComponent(t)}catch(e){Cs.debug(`Component ${t.name} failed to register with FirebaseApp ${i.name}`,e)}}function zr(i){const t=i.name;if(Hh.has(t))return Cs.debug(`There were multiple attempts to register component ${t}.`),!1;Hh.set(t,i);for(const e of Oc.values())cm(e,i);for(const e of PS.values())cm(e,i);return!0}function gl(i,t){const e=i.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),i.container.getProvider(t)}/**
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
 */const DS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Lr=new au("app","Firebase",DS);/**
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
 */class LS{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new cr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Lr.create("app-deleted",{appName:this._name})}}/**
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
 */const NS=CS;function Y_(i,t={}){let e=i;typeof t!="object"&&(t={name:t});const n=Object.assign({name:zh,automaticDataCollectionEnabled:!1},t),r=n.name;if(typeof r!="string"||!r)throw Lr.create("bad-app-name",{appName:String(r)});if(e||(e=G_()),!e)throw Lr.create("no-options");const s=Oc.get(r);if(s){if(Nc(e,s.options)&&Nc(n,s.config))return s;throw Lr.create("duplicate-app",{appName:r})}const o=new zE(r);for(const l of Hh.values())o.addComponent(l);const a=new LS(e,n,o);return Oc.set(r,a),a}function K_(i=zh){const t=Oc.get(i);if(!t&&i===zh&&G_())return Y_();if(!t)throw Lr.create("no-app",{appName:i});return t}function Oi(i,t,e){var n;let r=(n=IS[i])!==null&&n!==void 0?n:i;e&&(r+=`-${e}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Cs.warn(a.join(" "));return}zr(new cr(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const OS="firebase-heartbeat-database",US=1,Ya="firebase-heartbeat-store";let zu=null;function Q_(){return zu||(zu=j_(OS,US,{upgrade:(i,t)=>{switch(t){case 0:try{i.createObjectStore(Ya)}catch(e){console.warn(e)}}}}).catch(i=>{throw Lr.create("idb-open",{originalErrorMessage:i.message})})),zu}async function FS(i){try{const e=(await Q_()).transaction(Ya),n=await e.objectStore(Ya).get(J_(i));return await e.done,n}catch(t){if(t instanceof Yr)Cs.warn(t.message);else{const e=Lr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Cs.warn(e.message)}}}async function um(i,t){try{const n=(await Q_()).transaction(Ya,"readwrite");await n.objectStore(Ya).put(t,J_(i)),await n.done}catch(e){if(e instanceof Yr)Cs.warn(e.message);else{const n=Lr.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Cs.warn(n.message)}}}function J_(i){return`${i.name}!${i.options.appId}`}/**
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
 */const VS=1024,kS=30*24*60*60*1e3;class BS{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new HS(e),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var t,e;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=hm();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=kS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=hm(),{heartbeatsToSend:n,unsentEntries:r}=zS(this._heartbeatsCache.heartbeats),s=Lc(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function hm(){return new Date().toISOString().substring(0,10)}function zS(i,t=VS){const e=[];let n=i.slice();for(const r of i){const s=e.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),dm(e)>t){s.dates.pop();break}}else if(e.push({agent:r.agent,dates:[r.date]}),dm(e)>t){e.pop();break}n=n.slice(1)}return{heartbeatsToSend:e,unsentEntries:n}}class HS{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return W_()?q_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await FS(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const r=await this.read();return um(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const r=await this.read();return um(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function dm(i){return Lc(JSON.stringify({version:2,heartbeats:i})).length}/**
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
 */function GS(i){zr(new cr("platform-logger",t=>new nS(t),"PRIVATE")),zr(new cr("heartbeat",t=>new BS(t),"PRIVATE")),Oi(Bh,lm,i),Oi(Bh,lm,"esm2017"),Oi("fire-js","")}GS("");var WS="firebase",qS="10.12.5";/**
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
 */Oi(WS,qS,"app");const Z_="@firebase/installations",lf="0.6.8";/**
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
 */const t0=1e4,e0=`w:${lf}`,n0="FIS_v2",$S="https://firebaseinstallations.googleapis.com/v1",XS=60*60*1e3,jS="installations",YS="Installations";/**
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
 */const KS={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Is=new au(jS,YS,KS);function i0(i){return i instanceof Yr&&i.code.includes("request-failed")}/**
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
 */function r0({projectId:i}){return`${$S}/projects/${i}/installations`}function s0(i){return{token:i.token,requestStatus:2,expiresIn:JS(i.expiresIn),creationTime:Date.now()}}async function o0(i,t){const n=(await t.json()).error;return Is.create("request-failed",{requestName:i,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function a0({apiKey:i}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":i})}function QS(i,{refreshToken:t}){const e=a0(i);return e.append("Authorization",ZS(t)),e}async function l0(i){const t=await i();return t.status>=500&&t.status<600?i():t}function JS(i){return Number(i.replace("s","000"))}function ZS(i){return`${n0} ${i}`}/**
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
 */async function tT({appConfig:i,heartbeatServiceProvider:t},{fid:e}){const n=r0(i),r=a0(i),s=t.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const o={fid:e,authVersion:n0,appId:i.appId,sdkVersion:e0},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await l0(()=>fetch(n,a));if(l.ok){const c=await l.json();return{fid:c.fid||e,registrationStatus:2,refreshToken:c.refreshToken,authToken:s0(c.authToken)}}else throw await o0("Create Installation",l)}/**
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
 */function c0(i){return new Promise(t=>{setTimeout(t,i)})}/**
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
 */function eT(i){return btoa(String.fromCharCode(...i)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const nT=/^[cdef][\w-]{21}$/,Gh="";function iT(){try{const i=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(i),i[0]=112+i[0]%16;const e=rT(i);return nT.test(e)?e:Gh}catch{return Gh}}function rT(i){return eT(i).substr(0,22)}/**
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
 */function lu(i){return`${i.appName}!${i.appId}`}/**
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
 */const u0=new Map;function h0(i,t){const e=lu(i);d0(e,t),sT(e,t)}function d0(i,t){const e=u0.get(i);if(e)for(const n of e)n(t)}function sT(i,t){const e=oT();e&&e.postMessage({key:i,fid:t}),aT()}let _s=null;function oT(){return!_s&&"BroadcastChannel"in self&&(_s=new BroadcastChannel("[Firebase] FID Change"),_s.onmessage=i=>{d0(i.data.key,i.data.fid)}),_s}function aT(){u0.size===0&&_s&&(_s.close(),_s=null)}/**
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
 */const lT="firebase-installations-database",cT=1,Ps="firebase-installations-store";let Hu=null;function cf(){return Hu||(Hu=j_(lT,cT,{upgrade:(i,t)=>{switch(t){case 0:i.createObjectStore(Ps)}}})),Hu}async function Uc(i,t){const e=lu(i),r=(await cf()).transaction(Ps,"readwrite"),s=r.objectStore(Ps),o=await s.get(e);return await s.put(t,e),await r.done,(!o||o.fid!==t.fid)&&h0(i,t.fid),t}async function f0(i){const t=lu(i),n=(await cf()).transaction(Ps,"readwrite");await n.objectStore(Ps).delete(t),await n.done}async function cu(i,t){const e=lu(i),r=(await cf()).transaction(Ps,"readwrite"),s=r.objectStore(Ps),o=await s.get(e),a=t(o);return a===void 0?await s.delete(e):await s.put(a,e),await r.done,a&&(!o||o.fid!==a.fid)&&h0(i,a.fid),a}/**
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
 */async function uf(i){let t;const e=await cu(i.appConfig,n=>{const r=uT(n),s=hT(i,r);return t=s.registrationPromise,s.installationEntry});return e.fid===Gh?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function uT(i){const t=i||{fid:iT(),registrationStatus:0};return p0(t)}function hT(i,t){if(t.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(Is.create("app-offline"));return{installationEntry:t,registrationPromise:r}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},n=dT(i,e);return{installationEntry:e,registrationPromise:n}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:fT(i)}:{installationEntry:t}}async function dT(i,t){try{const e=await tT(i,t);return Uc(i.appConfig,e)}catch(e){throw i0(e)&&e.customData.serverCode===409?await f0(i.appConfig):await Uc(i.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function fT(i){let t=await fm(i.appConfig);for(;t.registrationStatus===1;)await c0(100),t=await fm(i.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:n}=await uf(i);return n||e}return t}function fm(i){return cu(i,t=>{if(!t)throw Is.create("installation-not-found");return p0(t)})}function p0(i){return pT(i)?{fid:i.fid,registrationStatus:0}:i}function pT(i){return i.registrationStatus===1&&i.registrationTime+t0<Date.now()}/**
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
 */async function mT({appConfig:i,heartbeatServiceProvider:t},e){const n=gT(i,e),r=QS(i,e),s=t.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&r.append("x-firebase-client",c)}const o={installation:{sdkVersion:e0,appId:i.appId}},a={method:"POST",headers:r,body:JSON.stringify(o)},l=await l0(()=>fetch(n,a));if(l.ok){const c=await l.json();return s0(c)}else throw await o0("Generate Auth Token",l)}function gT(i,{fid:t}){return`${r0(i)}/${t}/authTokens:generate`}/**
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
 */async function hf(i,t=!1){let e;const n=await cu(i.appConfig,s=>{if(!m0(s))throw Is.create("not-registered");const o=s.authToken;if(!t&&yT(o))return s;if(o.requestStatus===1)return e=_T(i,t),s;{if(!navigator.onLine)throw Is.create("app-offline");const a=ET(s);return e=vT(i,a),a}});return e?await e:n.authToken}async function _T(i,t){let e=await pm(i.appConfig);for(;e.authToken.requestStatus===1;)await c0(100),e=await pm(i.appConfig);const n=e.authToken;return n.requestStatus===0?hf(i,t):n}function pm(i){return cu(i,t=>{if(!m0(t))throw Is.create("not-registered");const e=t.authToken;return ST(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function vT(i,t){try{const e=await mT(i,t),n=Object.assign(Object.assign({},t),{authToken:e});return await Uc(i.appConfig,n),e}catch(e){if(i0(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await f0(i.appConfig);else{const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Uc(i.appConfig,n)}throw e}}function m0(i){return i!==void 0&&i.registrationStatus===2}function yT(i){return i.requestStatus===2&&!xT(i)}function xT(i){const t=Date.now();return t<i.creationTime||i.creationTime+i.expiresIn<t+XS}function ET(i){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},i),{authToken:t})}function ST(i){return i.requestStatus===1&&i.requestTime+t0<Date.now()}/**
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
 */async function TT(i){const t=i,{installationEntry:e,registrationPromise:n}=await uf(t);return n?n.catch(console.error):hf(t).catch(console.error),e.fid}/**
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
 */async function wT(i,t=!1){const e=i;return await MT(e),(await hf(e,t)).token}async function MT(i){const{registrationPromise:t}=await uf(i);t&&await t}/**
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
 */function AT(i){if(!i||!i.options)throw Gu("App Configuration");if(!i.name)throw Gu("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!i.options[e])throw Gu(e);return{appName:i.name,projectId:i.options.projectId,apiKey:i.options.apiKey,appId:i.options.appId}}function Gu(i){return Is.create("missing-app-config-values",{valueName:i})}/**
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
 */const g0="installations",bT="installations-internal",RT=i=>{const t=i.getProvider("app").getImmediate(),e=AT(t),n=gl(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},CT=i=>{const t=i.getProvider("app").getImmediate(),e=gl(t,g0).getImmediate();return{getId:()=>TT(e),getToken:r=>wT(e,r)}};function IT(){zr(new cr(g0,RT,"PUBLIC")),zr(new cr(bT,CT,"PRIVATE"))}IT();Oi(Z_,lf);Oi(Z_,lf,"esm2017");/**
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
 */const Fc="analytics",PT="firebase_id",DT="origin",LT=60*1e3,NT="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",df="https://www.googletagmanager.com/gtag/js";/**
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
 */const kn=new of("@firebase/analytics");/**
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
 */const OT={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ti=new au("analytics","Analytics",OT);/**
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
 */function UT(i){if(!i.startsWith(df)){const t=ti.create("invalid-gtag-resource",{gtagURL:i});return kn.warn(t.message),""}return i}function _0(i){return Promise.all(i.map(t=>t.catch(e=>e)))}function FT(i,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(i,t)),e}function VT(i,t){const e=FT("firebase-js-sdk-policy",{createScriptURL:UT}),n=document.createElement("script"),r=`${df}?l=${i}&id=${t}`;n.src=e?e==null?void 0:e.createScriptURL(r):r,n.async=!0,document.head.appendChild(n)}function kT(i){let t=[];return Array.isArray(window[i])?t=window[i]:window[i]=t,t}async function BT(i,t,e,n,r,s){const o=n[r];try{if(o)await t[o];else{const l=(await _0(e)).find(c=>c.measurementId===r);l&&await t[l.appId]}}catch(a){kn.error(a)}i("config",r,s)}async function zT(i,t,e,n,r){try{let s=[];if(r&&r.send_to){let o=r.send_to;Array.isArray(o)||(o=[o]);const a=await _0(e);for(const l of o){const c=a.find(d=>d.measurementId===l),h=c&&t[c.appId];if(h)s.push(h);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),i("event",n,r||{})}catch(s){kn.error(s)}}function HT(i,t,e,n){async function r(s,...o){try{if(s==="event"){const[a,l]=o;await zT(i,t,e,a,l)}else if(s==="config"){const[a,l]=o;await BT(i,t,e,n,a,l)}else if(s==="consent"){const[a,l]=o;i("consent",a,l)}else if(s==="get"){const[a,l,c]=o;i("get",a,l,c)}else if(s==="set"){const[a]=o;i("set",a)}else i(s,...o)}catch(a){kn.error(a)}}return r}function GT(i,t,e,n,r){let s=function(...o){window[n].push(arguments)};return window[r]&&typeof window[r]=="function"&&(s=window[r]),window[r]=HT(s,i,t,e),{gtagCore:s,wrappedGtag:window[r]}}function WT(i){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(df)&&e.src.includes(i))return e;return null}/**
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
 */const qT=30,$T=1e3;class XT{constructor(t={},e=$T){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const v0=new XT;function jT(i){return new Headers({Accept:"application/json","x-goog-api-key":i})}async function YT(i){var t;const{appId:e,apiKey:n}=i,r={method:"GET",headers:jT(n)},s=NT.replace("{app-id}",e),o=await fetch(s,r);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw ti.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function KT(i,t=v0,e){const{appId:n,apiKey:r,measurementId:s}=i.options;if(!n)throw ti.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:n};throw ti.create("no-api-key")}const o=t.getThrottleMetadata(n)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new ZT;return setTimeout(async()=>{a.abort()},LT),y0({appId:n,apiKey:r,measurementId:s},o,a,t)}async function y0(i,{throttleEndTimeMillis:t,backoffCount:e},n,r=v0){var s;const{appId:o,measurementId:a}=i;try{await QT(n,t)}catch(l){if(a)return kn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await YT(i);return r.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!JT(c)){if(r.deleteThrottleMetadata(o),a)return kn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const h=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?rm(e,r.intervalMillis,qT):rm(e,r.intervalMillis),d={throttleEndTimeMillis:Date.now()+h,backoffCount:e+1};return r.setThrottleMetadata(o,d),kn.debug(`Calling attemptFetch again in ${h} millis`),y0(i,d,n,r)}}function QT(i,t){return new Promise((e,n)=>{const r=Math.max(t-Date.now(),0),s=setTimeout(e,r);i.addEventListener(()=>{clearTimeout(s),n(ti.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function JT(i){if(!(i instanceof Yr)||!i.customData)return!1;const t=Number(i.customData.httpStatus);return t===429||t===500||t===503||t===504}class ZT{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function tw(i,t,e,n,r){if(r&&r.global){i("event",e,n);return}else{const s=await t,o=Object.assign(Object.assign({},n),{send_to:s});i("event",e,o)}}/**
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
 */async function ew(){if(W_())try{await q_()}catch(i){return kn.warn(ti.create("indexeddb-unavailable",{errorInfo:i==null?void 0:i.toString()}).message),!1}else return kn.warn(ti.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function nw(i,t,e,n,r,s,o){var a;const l=KT(i);l.then(p=>{e[p.measurementId]=p.appId,i.options.measurementId&&p.measurementId!==i.options.measurementId&&kn.warn(`The measurement ID in the local Firebase config (${i.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>kn.error(p)),t.push(l);const c=ew().then(p=>{if(p)return n.getId()}),[h,d]=await Promise.all([l,c]);WT(s)||VT(s,h.measurementId),r("js",new Date);const f=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return f[DT]="firebase",f.update=!0,d!=null&&(f[PT]=d),r("config",h.measurementId,f),h.measurementId}/**
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
 */class iw{constructor(t){this.app=t}_delete(){return delete Ua[this.app.options.appId],Promise.resolve()}}let Ua={},mm=[];const gm={};let Wu="dataLayer",rw="gtag",_m,x0,vm=!1;function sw(){const i=[];if(RE()&&i.push("This is a browser extension environment."),IE()||i.push("Cookies are not available."),i.length>0){const t=i.map((n,r)=>`(${r+1}) ${n}`).join(" "),e=ti.create("invalid-analytics-context",{errorInfo:t});kn.warn(e.message)}}function ow(i,t,e){sw();const n=i.options.appId;if(!n)throw ti.create("no-app-id");if(!i.options.apiKey)if(i.options.measurementId)kn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${i.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ti.create("no-api-key");if(Ua[n]!=null)throw ti.create("already-exists",{id:n});if(!vm){kT(Wu);const{wrappedGtag:s,gtagCore:o}=GT(Ua,mm,gm,Wu,rw);x0=s,_m=o,vm=!0}return Ua[n]=nw(i,mm,gm,t,_m,Wu,e),new iw(i)}function aw(i=K_()){i=Br(i);const t=gl(i,Fc);return t.isInitialized()?t.getImmediate():lw(i)}function lw(i,t={}){const e=gl(i,Fc);if(e.isInitialized()){const r=e.getImmediate();if(Nc(t,e.getOptions()))return r;throw ti.create("already-initialized")}return e.initialize({options:t})}function cw(i,t,e,n){i=Br(i),tw(x0,Ua[i.app.options.appId],t,e,n).catch(r=>kn.error(r))}const ym="@firebase/analytics",xm="0.10.7";function uw(){zr(new cr(Fc,(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();return ow(n,r,e)},"PUBLIC")),zr(new cr("analytics-internal",i,"PRIVATE")),Oi(ym,xm),Oi(ym,xm,"esm2017");function i(t){try{const e=t.getProvider(Fc).getImmediate();return{logEvent:(n,r,s)=>cw(e,n,r,s)}}catch(e){throw ti.create("interop-component-reg-failed",{reason:e})}}}uw();var Em=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ws,E0;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(S,T){function x(){}x.prototype=T.prototype,S.D=T.prototype,S.prototype=new x,S.prototype.constructor=S,S.C=function(E,b,L){for(var C=Array(arguments.length-2),G=2;G<arguments.length;G++)C[G-2]=arguments[G];return T.prototype[b].apply(E,C)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(S,T,x){x||(x=0);var E=Array(16);if(typeof T=="string")for(var b=0;16>b;++b)E[b]=T.charCodeAt(x++)|T.charCodeAt(x++)<<8|T.charCodeAt(x++)<<16|T.charCodeAt(x++)<<24;else for(b=0;16>b;++b)E[b]=T[x++]|T[x++]<<8|T[x++]<<16|T[x++]<<24;T=S.g[0],x=S.g[1],b=S.g[2];var L=S.g[3],C=T+(L^x&(b^L))+E[0]+3614090360&4294967295;T=x+(C<<7&4294967295|C>>>25),C=L+(b^T&(x^b))+E[1]+3905402710&4294967295,L=T+(C<<12&4294967295|C>>>20),C=b+(x^L&(T^x))+E[2]+606105819&4294967295,b=L+(C<<17&4294967295|C>>>15),C=x+(T^b&(L^T))+E[3]+3250441966&4294967295,x=b+(C<<22&4294967295|C>>>10),C=T+(L^x&(b^L))+E[4]+4118548399&4294967295,T=x+(C<<7&4294967295|C>>>25),C=L+(b^T&(x^b))+E[5]+1200080426&4294967295,L=T+(C<<12&4294967295|C>>>20),C=b+(x^L&(T^x))+E[6]+2821735955&4294967295,b=L+(C<<17&4294967295|C>>>15),C=x+(T^b&(L^T))+E[7]+4249261313&4294967295,x=b+(C<<22&4294967295|C>>>10),C=T+(L^x&(b^L))+E[8]+1770035416&4294967295,T=x+(C<<7&4294967295|C>>>25),C=L+(b^T&(x^b))+E[9]+2336552879&4294967295,L=T+(C<<12&4294967295|C>>>20),C=b+(x^L&(T^x))+E[10]+4294925233&4294967295,b=L+(C<<17&4294967295|C>>>15),C=x+(T^b&(L^T))+E[11]+2304563134&4294967295,x=b+(C<<22&4294967295|C>>>10),C=T+(L^x&(b^L))+E[12]+1804603682&4294967295,T=x+(C<<7&4294967295|C>>>25),C=L+(b^T&(x^b))+E[13]+4254626195&4294967295,L=T+(C<<12&4294967295|C>>>20),C=b+(x^L&(T^x))+E[14]+2792965006&4294967295,b=L+(C<<17&4294967295|C>>>15),C=x+(T^b&(L^T))+E[15]+1236535329&4294967295,x=b+(C<<22&4294967295|C>>>10),C=T+(b^L&(x^b))+E[1]+4129170786&4294967295,T=x+(C<<5&4294967295|C>>>27),C=L+(x^b&(T^x))+E[6]+3225465664&4294967295,L=T+(C<<9&4294967295|C>>>23),C=b+(T^x&(L^T))+E[11]+643717713&4294967295,b=L+(C<<14&4294967295|C>>>18),C=x+(L^T&(b^L))+E[0]+3921069994&4294967295,x=b+(C<<20&4294967295|C>>>12),C=T+(b^L&(x^b))+E[5]+3593408605&4294967295,T=x+(C<<5&4294967295|C>>>27),C=L+(x^b&(T^x))+E[10]+38016083&4294967295,L=T+(C<<9&4294967295|C>>>23),C=b+(T^x&(L^T))+E[15]+3634488961&4294967295,b=L+(C<<14&4294967295|C>>>18),C=x+(L^T&(b^L))+E[4]+3889429448&4294967295,x=b+(C<<20&4294967295|C>>>12),C=T+(b^L&(x^b))+E[9]+568446438&4294967295,T=x+(C<<5&4294967295|C>>>27),C=L+(x^b&(T^x))+E[14]+3275163606&4294967295,L=T+(C<<9&4294967295|C>>>23),C=b+(T^x&(L^T))+E[3]+4107603335&4294967295,b=L+(C<<14&4294967295|C>>>18),C=x+(L^T&(b^L))+E[8]+1163531501&4294967295,x=b+(C<<20&4294967295|C>>>12),C=T+(b^L&(x^b))+E[13]+2850285829&4294967295,T=x+(C<<5&4294967295|C>>>27),C=L+(x^b&(T^x))+E[2]+4243563512&4294967295,L=T+(C<<9&4294967295|C>>>23),C=b+(T^x&(L^T))+E[7]+1735328473&4294967295,b=L+(C<<14&4294967295|C>>>18),C=x+(L^T&(b^L))+E[12]+2368359562&4294967295,x=b+(C<<20&4294967295|C>>>12),C=T+(x^b^L)+E[5]+4294588738&4294967295,T=x+(C<<4&4294967295|C>>>28),C=L+(T^x^b)+E[8]+2272392833&4294967295,L=T+(C<<11&4294967295|C>>>21),C=b+(L^T^x)+E[11]+1839030562&4294967295,b=L+(C<<16&4294967295|C>>>16),C=x+(b^L^T)+E[14]+4259657740&4294967295,x=b+(C<<23&4294967295|C>>>9),C=T+(x^b^L)+E[1]+2763975236&4294967295,T=x+(C<<4&4294967295|C>>>28),C=L+(T^x^b)+E[4]+1272893353&4294967295,L=T+(C<<11&4294967295|C>>>21),C=b+(L^T^x)+E[7]+4139469664&4294967295,b=L+(C<<16&4294967295|C>>>16),C=x+(b^L^T)+E[10]+3200236656&4294967295,x=b+(C<<23&4294967295|C>>>9),C=T+(x^b^L)+E[13]+681279174&4294967295,T=x+(C<<4&4294967295|C>>>28),C=L+(T^x^b)+E[0]+3936430074&4294967295,L=T+(C<<11&4294967295|C>>>21),C=b+(L^T^x)+E[3]+3572445317&4294967295,b=L+(C<<16&4294967295|C>>>16),C=x+(b^L^T)+E[6]+76029189&4294967295,x=b+(C<<23&4294967295|C>>>9),C=T+(x^b^L)+E[9]+3654602809&4294967295,T=x+(C<<4&4294967295|C>>>28),C=L+(T^x^b)+E[12]+3873151461&4294967295,L=T+(C<<11&4294967295|C>>>21),C=b+(L^T^x)+E[15]+530742520&4294967295,b=L+(C<<16&4294967295|C>>>16),C=x+(b^L^T)+E[2]+3299628645&4294967295,x=b+(C<<23&4294967295|C>>>9),C=T+(b^(x|~L))+E[0]+4096336452&4294967295,T=x+(C<<6&4294967295|C>>>26),C=L+(x^(T|~b))+E[7]+1126891415&4294967295,L=T+(C<<10&4294967295|C>>>22),C=b+(T^(L|~x))+E[14]+2878612391&4294967295,b=L+(C<<15&4294967295|C>>>17),C=x+(L^(b|~T))+E[5]+4237533241&4294967295,x=b+(C<<21&4294967295|C>>>11),C=T+(b^(x|~L))+E[12]+1700485571&4294967295,T=x+(C<<6&4294967295|C>>>26),C=L+(x^(T|~b))+E[3]+2399980690&4294967295,L=T+(C<<10&4294967295|C>>>22),C=b+(T^(L|~x))+E[10]+4293915773&4294967295,b=L+(C<<15&4294967295|C>>>17),C=x+(L^(b|~T))+E[1]+2240044497&4294967295,x=b+(C<<21&4294967295|C>>>11),C=T+(b^(x|~L))+E[8]+1873313359&4294967295,T=x+(C<<6&4294967295|C>>>26),C=L+(x^(T|~b))+E[15]+4264355552&4294967295,L=T+(C<<10&4294967295|C>>>22),C=b+(T^(L|~x))+E[6]+2734768916&4294967295,b=L+(C<<15&4294967295|C>>>17),C=x+(L^(b|~T))+E[13]+1309151649&4294967295,x=b+(C<<21&4294967295|C>>>11),C=T+(b^(x|~L))+E[4]+4149444226&4294967295,T=x+(C<<6&4294967295|C>>>26),C=L+(x^(T|~b))+E[11]+3174756917&4294967295,L=T+(C<<10&4294967295|C>>>22),C=b+(T^(L|~x))+E[2]+718787259&4294967295,b=L+(C<<15&4294967295|C>>>17),C=x+(L^(b|~T))+E[9]+3951481745&4294967295,S.g[0]=S.g[0]+T&4294967295,S.g[1]=S.g[1]+(b+(C<<21&4294967295|C>>>11))&4294967295,S.g[2]=S.g[2]+b&4294967295,S.g[3]=S.g[3]+L&4294967295}n.prototype.u=function(S,T){T===void 0&&(T=S.length);for(var x=T-this.blockSize,E=this.B,b=this.h,L=0;L<T;){if(b==0)for(;L<=x;)r(this,S,L),L+=this.blockSize;if(typeof S=="string"){for(;L<T;)if(E[b++]=S.charCodeAt(L++),b==this.blockSize){r(this,E),b=0;break}}else for(;L<T;)if(E[b++]=S[L++],b==this.blockSize){r(this,E),b=0;break}}this.h=b,this.o+=T},n.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var T=1;T<S.length-8;++T)S[T]=0;var x=8*this.o;for(T=S.length-8;T<S.length;++T)S[T]=x&255,x/=256;for(this.u(S),S=Array(16),T=x=0;4>T;++T)for(var E=0;32>E;E+=8)S[x++]=this.g[T]>>>E&255;return S};function s(S,T){var x=a;return Object.prototype.hasOwnProperty.call(x,S)?x[S]:x[S]=T(S)}function o(S,T){this.h=T;for(var x=[],E=!0,b=S.length-1;0<=b;b--){var L=S[b]|0;E&&L==T||(x[b]=L,E=!1)}this.g=x}var a={};function l(S){return-128<=S&&128>S?s(S,function(T){return new o([T|0],0>T?-1:0)}):new o([S|0],0>S?-1:0)}function c(S){if(isNaN(S)||!isFinite(S))return d;if(0>S)return m(c(-S));for(var T=[],x=1,E=0;S>=x;E++)T[E]=S/x|0,x*=4294967296;return new o(T,0)}function h(S,T){if(S.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(S.charAt(0)=="-")return m(h(S.substring(1),T));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var x=c(Math.pow(T,8)),E=d,b=0;b<S.length;b+=8){var L=Math.min(8,S.length-b),C=parseInt(S.substring(b,b+L),T);8>L?(L=c(Math.pow(T,L)),E=E.j(L).add(c(C))):(E=E.j(x),E=E.add(c(C)))}return E}var d=l(0),f=l(1),p=l(16777216);i=o.prototype,i.m=function(){if(_(this))return-m(this).m();for(var S=0,T=1,x=0;x<this.g.length;x++){var E=this.i(x);S+=(0<=E?E:4294967296+E)*T,T*=4294967296}return S},i.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(y(this))return"0";if(_(this))return"-"+m(this).toString(S);for(var T=c(Math.pow(S,6)),x=this,E="";;){var b=R(x,T).g;x=g(x,b.j(T));var L=((0<x.g.length?x.g[0]:x.h)>>>0).toString(S);if(x=b,y(x))return L+E;for(;6>L.length;)L="0"+L;E=L+E}},i.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function y(S){if(S.h!=0)return!1;for(var T=0;T<S.g.length;T++)if(S.g[T]!=0)return!1;return!0}function _(S){return S.h==-1}i.l=function(S){return S=g(this,S),_(S)?-1:y(S)?0:1};function m(S){for(var T=S.g.length,x=[],E=0;E<T;E++)x[E]=~S.g[E];return new o(x,~S.h).add(f)}i.abs=function(){return _(this)?m(this):this},i.add=function(S){for(var T=Math.max(this.g.length,S.g.length),x=[],E=0,b=0;b<=T;b++){var L=E+(this.i(b)&65535)+(S.i(b)&65535),C=(L>>>16)+(this.i(b)>>>16)+(S.i(b)>>>16);E=C>>>16,L&=65535,C&=65535,x[b]=C<<16|L}return new o(x,x[x.length-1]&-2147483648?-1:0)};function g(S,T){return S.add(m(T))}i.j=function(S){if(y(this)||y(S))return d;if(_(this))return _(S)?m(this).j(m(S)):m(m(this).j(S));if(_(S))return m(this.j(m(S)));if(0>this.l(p)&&0>S.l(p))return c(this.m()*S.m());for(var T=this.g.length+S.g.length,x=[],E=0;E<2*T;E++)x[E]=0;for(E=0;E<this.g.length;E++)for(var b=0;b<S.g.length;b++){var L=this.i(E)>>>16,C=this.i(E)&65535,G=S.i(b)>>>16,K=S.i(b)&65535;x[2*E+2*b]+=C*K,A(x,2*E+2*b),x[2*E+2*b+1]+=L*K,A(x,2*E+2*b+1),x[2*E+2*b+1]+=C*G,A(x,2*E+2*b+1),x[2*E+2*b+2]+=L*G,A(x,2*E+2*b+2)}for(E=0;E<T;E++)x[E]=x[2*E+1]<<16|x[2*E];for(E=T;E<2*T;E++)x[E]=0;return new o(x,0)};function A(S,T){for(;(S[T]&65535)!=S[T];)S[T+1]+=S[T]>>>16,S[T]&=65535,T++}function M(S,T){this.g=S,this.h=T}function R(S,T){if(y(T))throw Error("division by zero");if(y(S))return new M(d,d);if(_(S))return T=R(m(S),T),new M(m(T.g),m(T.h));if(_(T))return T=R(S,m(T)),new M(m(T.g),T.h);if(30<S.g.length){if(_(S)||_(T))throw Error("slowDivide_ only works with positive integers.");for(var x=f,E=T;0>=E.l(S);)x=F(x),E=F(E);var b=D(x,1),L=D(E,1);for(E=D(E,2),x=D(x,2);!y(E);){var C=L.add(E);0>=C.l(S)&&(b=b.add(x),L=C),E=D(E,1),x=D(x,1)}return T=g(S,b.j(T)),new M(b,T)}for(b=d;0<=S.l(T);){for(x=Math.max(1,Math.floor(S.m()/T.m())),E=Math.ceil(Math.log(x)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),L=c(x),C=L.j(T);_(C)||0<C.l(S);)x-=E,L=c(x),C=L.j(T);y(L)&&(L=f),b=b.add(L),S=g(S,C)}return new M(b,S)}i.A=function(S){return R(this,S).h},i.and=function(S){for(var T=Math.max(this.g.length,S.g.length),x=[],E=0;E<T;E++)x[E]=this.i(E)&S.i(E);return new o(x,this.h&S.h)},i.or=function(S){for(var T=Math.max(this.g.length,S.g.length),x=[],E=0;E<T;E++)x[E]=this.i(E)|S.i(E);return new o(x,this.h|S.h)},i.xor=function(S){for(var T=Math.max(this.g.length,S.g.length),x=[],E=0;E<T;E++)x[E]=this.i(E)^S.i(E);return new o(x,this.h^S.h)};function F(S){for(var T=S.g.length+1,x=[],E=0;E<T;E++)x[E]=S.i(E)<<1|S.i(E-1)>>>31;return new o(x,S.h)}function D(S,T){var x=T>>5;T%=32;for(var E=S.g.length-x,b=[],L=0;L<E;L++)b[L]=0<T?S.i(L+x)>>>T|S.i(L+x+1)<<32-T:S.i(L+x);return new o(b,S.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,E0=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,ws=o}).apply(typeof Em<"u"?Em:typeof self<"u"?self:typeof window<"u"?window:{});var Vl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var S0,T0,Ra,w0,gc,Wh,M0,A0,b0;(function(){var i,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,v,w){return u==Array.prototype||u==Object.prototype||(u[v]=w.value),u};function e(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vl=="object"&&Vl];for(var v=0;v<u.length;++v){var w=u[v];if(w&&w.Math==Math)return w}throw Error("Cannot find global object")}var n=e(this);function r(u,v){if(v)t:{var w=n;u=u.split(".");for(var O=0;O<u.length-1;O++){var H=u[O];if(!(H in w))break t;w=w[H]}u=u[u.length-1],O=w[u],v=v(O),v!=O&&v!=null&&t(w,u,{configurable:!0,writable:!0,value:v})}}function s(u,v){u instanceof String&&(u+="");var w=0,O=!1,H={next:function(){if(!O&&w<u.length){var Z=w++;return{value:v(Z,u[Z]),done:!1}}return O=!0,{done:!0,value:void 0}}};return H[Symbol.iterator]=function(){return H},H}r("Array.prototype.values",function(u){return u||function(){return s(this,function(v,w){return w})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(u){var v=typeof u;return v=v!="object"?v:u?Array.isArray(u)?"array":v:"null",v=="array"||v=="object"&&typeof u.length=="number"}function c(u){var v=typeof u;return v=="object"&&u!=null||v=="function"}function h(u,v,w){return u.call.apply(u.bind,arguments)}function d(u,v,w){if(!u)throw Error();if(2<arguments.length){var O=Array.prototype.slice.call(arguments,2);return function(){var H=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(H,O),u.apply(v,H)}}return function(){return u.apply(v,arguments)}}function f(u,v,w){return f=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,f.apply(null,arguments)}function p(u,v){var w=Array.prototype.slice.call(arguments,1);return function(){var O=w.slice();return O.push.apply(O,arguments),u.apply(this,O)}}function y(u,v){function w(){}w.prototype=v.prototype,u.aa=v.prototype,u.prototype=new w,u.prototype.constructor=u,u.Qb=function(O,H,Z){for(var vt=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)vt[ye-2]=arguments[ye];return v.prototype[H].apply(O,vt)}}function _(u){const v=u.length;if(0<v){const w=Array(v);for(let O=0;O<v;O++)w[O]=u[O];return w}return[]}function m(u,v){for(let w=1;w<arguments.length;w++){const O=arguments[w];if(l(O)){const H=u.length||0,Z=O.length||0;u.length=H+Z;for(let vt=0;vt<Z;vt++)u[H+vt]=O[vt]}else u.push(O)}}class g{constructor(v,w){this.i=v,this.j=w,this.h=0,this.g=null}get(){let v;return 0<this.h?(this.h--,v=this.g,this.g=v.next,v.next=null):v=this.i(),v}}function A(u){return/^[\s\xa0]*$/.test(u)}function M(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function R(u){return R[" "](u),u}R[" "]=function(){};var F=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function D(u,v,w){for(const O in u)v.call(w,u[O],O,u)}function S(u,v){for(const w in u)v.call(void 0,u[w],w,u)}function T(u){const v={};for(const w in u)v[w]=u[w];return v}const x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(u,v){let w,O;for(let H=1;H<arguments.length;H++){O=arguments[H];for(w in O)u[w]=O[w];for(let Z=0;Z<x.length;Z++)w=x[Z],Object.prototype.hasOwnProperty.call(O,w)&&(u[w]=O[w])}}function b(u){var v=1;u=u.split(":");const w=[];for(;0<v&&u.length;)w.push(u.shift()),v--;return u.length&&w.push(u.join(":")),w}function L(u){a.setTimeout(()=>{throw u},0)}function C(){var u=gt;let v=null;return u.g&&(v=u.g,u.g=u.g.next,u.g||(u.h=null),v.next=null),v}class G{constructor(){this.h=this.g=null}add(v,w){const O=K.get();O.set(v,w),this.h?this.h.next=O:this.g=O,this.h=O}}var K=new g(()=>new W,u=>u.reset());class W{constructor(){this.next=this.g=this.h=null}set(v,w){this.h=v,this.g=w,this.next=null}reset(){this.next=this.g=this.h=null}}let tt,Q=!1,gt=new G,St=()=>{const u=a.Promise.resolve(void 0);tt=()=>{u.then(xt)}};var xt=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(w){L(w)}var v=K;v.j(u),100>v.h&&(v.h++,u.next=v.g,v.g=u)}Q=!1};function Ut(){this.s=this.s,this.C=this.C}Ut.prototype.s=!1,Ut.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ut.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Bt(u,v){this.type=u,this.g=this.target=v,this.defaultPrevented=!1}Bt.prototype.h=function(){this.defaultPrevented=!0};var et=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,v=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const w=()=>{};a.addEventListener("test",w,v),a.removeEventListener("test",w,v)}catch{}return u}();function at(u,v){if(Bt.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var w=this.type=u.type,O=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=v,v=u.relatedTarget){if(F){t:{try{R(v.nodeName);var H=!0;break t}catch{}H=!1}H||(v=null)}}else w=="mouseover"?v=u.fromElement:w=="mouseout"&&(v=u.toElement);this.relatedTarget=v,O?(this.clientX=O.clientX!==void 0?O.clientX:O.pageX,this.clientY=O.clientY!==void 0?O.clientY:O.pageY,this.screenX=O.screenX||0,this.screenY=O.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Ct[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&at.aa.h.call(this)}}y(at,Bt);var Ct={2:"touch",3:"pen",4:"mouse"};at.prototype.h=function(){at.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var _t="closure_listenable_"+(1e6*Math.random()|0),Wt=0;function Jt(u,v,w,O,H){this.listener=u,this.proxy=null,this.src=v,this.type=w,this.capture=!!O,this.ha=H,this.key=++Wt,this.da=this.fa=!1}function zt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function ne(u){this.src=u,this.g={},this.h=0}ne.prototype.add=function(u,v,w,O,H){var Z=u.toString();u=this.g[Z],u||(u=this.g[Z]=[],this.h++);var vt=pt(u,v,O,H);return-1<vt?(v=u[vt],w||(v.fa=!1)):(v=new Jt(v,this.src,Z,!!O,H),v.fa=w,u.push(v)),v};function U(u,v){var w=v.type;if(w in u.g){var O=u.g[w],H=Array.prototype.indexOf.call(O,v,void 0),Z;(Z=0<=H)&&Array.prototype.splice.call(O,H,1),Z&&(zt(v),u.g[w].length==0&&(delete u.g[w],u.h--))}}function pt(u,v,w,O){for(var H=0;H<u.length;++H){var Z=u[H];if(!Z.da&&Z.listener==v&&Z.capture==!!w&&Z.ha==O)return H}return-1}var lt="closure_lm_"+(1e6*Math.random()|0),yt={};function nt(u,v,w,O,H){if(Array.isArray(v)){for(var Z=0;Z<v.length;Z++)nt(u,v[Z],w,O,H);return null}return w=rt(w),u&&u[_t]?u.K(v,w,c(O)?!!O.capture:!!O,H):kt(u,v,w,!1,O,H)}function kt(u,v,w,O,H,Z){if(!v)throw Error("Invalid event type");var vt=c(H)?!!H.capture:!!H,ye=ot(u);if(ye||(u[lt]=ye=new ne(u)),w=ye.add(v,w,O,vt,Z),w.proxy)return w;if(O=Et(),w.proxy=O,O.src=u,O.listener=w,u.addEventListener)et||(H=vt),H===void 0&&(H=!1),u.addEventListener(v.toString(),O,H);else if(u.attachEvent)u.attachEvent(P(v.toString()),O);else if(u.addListener&&u.removeListener)u.addListener(O);else throw Error("addEventListener and attachEvent are unavailable.");return w}function Et(){function u(w){return v.call(u.src,u.listener,w)}const v=X;return u}function Rt(u,v,w,O,H){if(Array.isArray(v))for(var Z=0;Z<v.length;Z++)Rt(u,v[Z],w,O,H);else O=c(O)?!!O.capture:!!O,w=rt(w),u&&u[_t]?(u=u.i,v=String(v).toString(),v in u.g&&(Z=u.g[v],w=pt(Z,w,O,H),-1<w&&(zt(Z[w]),Array.prototype.splice.call(Z,w,1),Z.length==0&&(delete u.g[v],u.h--)))):u&&(u=ot(u))&&(v=u.g[v.toString()],u=-1,v&&(u=pt(v,w,O,H)),(w=-1<u?v[u]:null)&&V(w))}function V(u){if(typeof u!="number"&&u&&!u.da){var v=u.src;if(v&&v[_t])U(v.i,u);else{var w=u.type,O=u.proxy;v.removeEventListener?v.removeEventListener(w,O,u.capture):v.detachEvent?v.detachEvent(P(w),O):v.addListener&&v.removeListener&&v.removeListener(O),(w=ot(v))?(U(w,u),w.h==0&&(w.src=null,v[lt]=null)):zt(u)}}}function P(u){return u in yt?yt[u]:yt[u]="on"+u}function X(u,v){if(u.da)u=!0;else{v=new at(v,this);var w=u.listener,O=u.ha||u.src;u.fa&&V(u),u=w.call(O,v)}return u}function ot(u){return u=u[lt],u instanceof ne?u:null}var it="__closure_events_fn_"+(1e9*Math.random()>>>0);function rt(u){return typeof u=="function"?u:(u[it]||(u[it]=function(v){return u.handleEvent(v)}),u[it])}function Mt(){Ut.call(this),this.i=new ne(this),this.M=this,this.F=null}y(Mt,Ut),Mt.prototype[_t]=!0,Mt.prototype.removeEventListener=function(u,v,w,O){Rt(this,u,v,w,O)};function ht(u,v){var w,O=u.F;if(O)for(w=[];O;O=O.F)w.push(O);if(u=u.M,O=v.type||v,typeof v=="string")v=new Bt(v,u);else if(v instanceof Bt)v.target=v.target||u;else{var H=v;v=new Bt(O,u),E(v,H)}if(H=!0,w)for(var Z=w.length-1;0<=Z;Z--){var vt=v.g=w[Z];H=Tt(vt,O,!0,v)&&H}if(vt=v.g=u,H=Tt(vt,O,!0,v)&&H,H=Tt(vt,O,!1,v)&&H,w)for(Z=0;Z<w.length;Z++)vt=v.g=w[Z],H=Tt(vt,O,!1,v)&&H}Mt.prototype.N=function(){if(Mt.aa.N.call(this),this.i){var u=this.i,v;for(v in u.g){for(var w=u.g[v],O=0;O<w.length;O++)zt(w[O]);delete u.g[v],u.h--}}this.F=null},Mt.prototype.K=function(u,v,w,O){return this.i.add(String(u),v,!1,w,O)},Mt.prototype.L=function(u,v,w,O){return this.i.add(String(u),v,!0,w,O)};function Tt(u,v,w,O){if(v=u.i.g[String(v)],!v)return!0;v=v.concat();for(var H=!0,Z=0;Z<v.length;++Z){var vt=v[Z];if(vt&&!vt.da&&vt.capture==w){var ye=vt.listener,fn=vt.ha||vt.src;vt.fa&&U(u.i,vt),H=ye.call(fn,O)!==!1&&H}}return H&&!O.defaultPrevented}function Yt(u,v,w){if(typeof u=="function")w&&(u=f(u,w));else if(u&&typeof u.handleEvent=="function")u=f(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(v)?-1:a.setTimeout(u,v||0)}function ft(u){u.g=Yt(()=>{u.g=null,u.i&&(u.i=!1,ft(u))},u.l);const v=u.h;u.h=null,u.m.apply(null,v)}class At extends Ut{constructor(v,w){super(),this.m=v,this.l=w,this.h=null,this.i=!1,this.g=null}j(v){this.h=arguments,this.g?this.i=!0:ft(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ee(u){Ut.call(this),this.h=u,this.g={}}y(ee,Ut);var qt=[];function It(u){D(u.g,function(v,w){this.g.hasOwnProperty(w)&&V(v)},u),u.g={}}ee.prototype.N=function(){ee.aa.N.call(this),It(this)},ee.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $t=a.JSON.stringify,Kt=a.JSON.parse,Se=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function I(){}I.prototype.h=null;function q(u){return u.h||(u.h=u.i())}function $(){}var J={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ct(){Bt.call(this,"d")}y(ct,Bt);function Ot(){Bt.call(this,"c")}y(Ot,Bt);var Ht={},Ce=null;function Ie(){return Ce=Ce||new Mt}Ht.La="serverreachability";function ae(u){Bt.call(this,Ht.La,u)}y(ae,Bt);function Me(u){const v=Ie();ht(v,new ae(v))}Ht.STAT_EVENT="statevent";function Ne(u,v){Bt.call(this,Ht.STAT_EVENT,u),this.stat=v}y(Ne,Bt);function Pe(u){const v=Ie();ht(v,new Ne(v,u))}Ht.Ma="timingevent";function Xe(u,v){Bt.call(this,Ht.Ma,u),this.size=v}y(Xe,Bt);function Dn(u,v){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},v)}function $n(){this.g=!0}$n.prototype.xa=function(){this.g=!1};function Jr(u,v,w,O,H,Z){u.info(function(){if(u.g)if(Z)for(var vt="",ye=Z.split("&"),fn=0;fn<ye.length;fn++){var me=ye[fn].split("=");if(1<me.length){var xn=me[0];me=me[1];var En=xn.split("_");vt=2<=En.length&&En[1]=="type"?vt+(xn+"="+me+"&"):vt+(xn+"=redacted&")}}else vt=null;else vt=Z;return"XMLHTTP REQ ("+O+") [attempt "+H+"]: "+v+`
`+w+`
`+vt})}function $s(u,v,w,O,H,Z,vt){u.info(function(){return"XMLHTTP RESP ("+O+") [ attempt "+H+"]: "+v+`
`+w+`
`+Z+" "+vt})}function qi(u,v,w,O){u.info(function(){return"XMLHTTP TEXT ("+v+"): "+Rl(u,w)+(O?" "+O:"")})}function Xs(u,v){u.info(function(){return"TIMEOUT: "+v})}$n.prototype.info=function(){};function Rl(u,v){if(!u.g)return v;if(!v)return null;try{var w=JSON.parse(v);if(w){for(u=0;u<w.length;u++)if(Array.isArray(w[u])){var O=w[u];if(!(2>O.length)){var H=O[1];if(Array.isArray(H)&&!(1>H.length)){var Z=H[0];if(Z!="noop"&&Z!="stop"&&Z!="close")for(var vt=1;vt<H.length;vt++)H[vt]=""}}}}return $t(w)}catch{return v}}var Zr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Cl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ua;function js(){}y(js,I),js.prototype.g=function(){return new XMLHttpRequest},js.prototype.i=function(){return{}},ua=new js;function N(u,v,w,O){this.j=u,this.i=v,this.l=w,this.R=O||1,this.U=new ee(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new B}function B(){this.i=null,this.g="",this.h=!1}var j={},Y={};function z(u,v,w){u.L=1,u.v=Il(Xn(v)),u.m=w,u.P=!0,mt(u,null)}function mt(u,v){u.F=Date.now(),Pt(u),u.A=Xn(u.v);var w=u.A,O=u.R;Array.isArray(O)||(O=[String(O)]),Np(w.i,"t",O),u.C=0,w=u.j.J,u.h=new B,u.g=Jp(u.j,w?v:null,!u.m),0<u.O&&(u.M=new At(f(u.Y,u,u.g),u.O)),v=u.U,w=u.g,O=u.ca;var H="readystatechange";Array.isArray(H)||(H&&(qt[0]=H.toString()),H=qt);for(var Z=0;Z<H.length;Z++){var vt=nt(w,H[Z],O||v.handleEvent,!1,v.h||v);if(!vt)break;v.g[vt.key]=vt}v=u.H?T(u.H):{},u.m?(u.u||(u.u="POST"),v["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,v)):(u.u="GET",u.g.ea(u.A,u.u,null,v)),Me(),Jr(u.i,u.u,u.A,u.l,u.R,u.m)}N.prototype.ca=function(u){u=u.target;const v=this.M;v&&Xi(u)==3?v.j():this.Y(u)},N.prototype.Y=function(u){try{if(u==this.g)t:{const En=Xi(this.g);var v=this.g.Ba();const Js=this.g.Z();if(!(3>En)&&(En!=3||this.g&&(this.h.h||this.g.oa()||zp(this.g)))){this.J||En!=4||v==7||(v==8||0>=Js?Me(3):Me(2)),jt(this);var w=this.g.Z();this.X=w;e:if(bt(this)){var O=zp(this.g);u="";var H=O.length,Z=Xi(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){oe(this),Vt(this);var vt="";break e}this.h.i=new a.TextDecoder}for(v=0;v<H;v++)this.h.h=!0,u+=this.h.i.decode(O[v],{stream:!(Z&&v==H-1)});O.length=0,this.h.g+=u,this.C=0,vt=this.h.g}else vt=this.g.oa();if(this.o=w==200,$s(this.i,this.u,this.A,this.l,this.R,En,w),this.o){if(this.T&&!this.K){e:{if(this.g){var ye,fn=this.g;if((ye=fn.g?fn.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(ye)){var me=ye;break e}}me=null}if(w=me)qi(this.i,this.l,w,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Te(this,w);else{this.o=!1,this.s=3,Pe(12),oe(this),Vt(this);break t}}if(this.P){w=!0;let pi;for(;!this.J&&this.C<vt.length;)if(pi=Dt(this,vt),pi==Y){En==4&&(this.s=4,Pe(14),w=!1),qi(this.i,this.l,null,"[Incomplete Response]");break}else if(pi==j){this.s=4,Pe(15),qi(this.i,this.l,vt,"[Invalid Chunk]"),w=!1;break}else qi(this.i,this.l,pi,null),Te(this,pi);if(bt(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),En!=4||vt.length!=0||this.h.h||(this.s=1,Pe(16),w=!1),this.o=this.o&&w,!w)qi(this.i,this.l,vt,"[Invalid Chunked Response]"),oe(this),Vt(this);else if(0<vt.length&&!this.W){this.W=!0;var xn=this.j;xn.g==this&&xn.ba&&!xn.M&&(xn.j.info("Great, no buffering proxy detected. Bytes received: "+vt.length),Uu(xn),xn.M=!0,Pe(11))}}else qi(this.i,this.l,vt,null),Te(this,vt);En==4&&oe(this),this.o&&!this.J&&(En==4?jp(this.j,this):(this.o=!1,Pt(this)))}else dE(this.g),w==400&&0<vt.indexOf("Unknown SID")?(this.s=3,Pe(12)):(this.s=0,Pe(13)),oe(this),Vt(this)}}}catch{}finally{}};function bt(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Dt(u,v){var w=u.C,O=v.indexOf(`
`,w);return O==-1?Y:(w=Number(v.substring(w,O)),isNaN(w)?j:(O+=1,O+w>v.length?Y:(v=v.slice(O,O+w),u.C=O+w,v)))}N.prototype.cancel=function(){this.J=!0,oe(this)};function Pt(u){u.S=Date.now()+u.I,Xt(u,u.I)}function Xt(u,v){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Dn(f(u.ba,u),v)}function jt(u){u.B&&(a.clearTimeout(u.B),u.B=null)}N.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Xs(this.i,this.A),this.L!=2&&(Me(),Pe(17)),oe(this),this.s=2,Vt(this)):Xt(this,this.S-u)};function Vt(u){u.j.G==0||u.J||jp(u.j,u)}function oe(u){jt(u);var v=u.M;v&&typeof v.ma=="function"&&v.ma(),u.M=null,It(u.U),u.g&&(v=u.g,u.g=null,v.abort(),v.ma())}function Te(u,v){try{var w=u.j;if(w.G!=0&&(w.g==u||qe(w.h,u))){if(!u.K&&qe(w.h,u)&&w.G==3){try{var O=w.Da.g.parse(v)}catch{O=null}if(Array.isArray(O)&&O.length==3){var H=O;if(H[0]==0){t:if(!w.u){if(w.g)if(w.g.F+3e3<u.F)Ol(w),Ll(w);else break t;Ou(w),Pe(18)}}else w.za=H[1],0<w.za-w.T&&37500>H[2]&&w.F&&w.v==0&&!w.C&&(w.C=Dn(f(w.Za,w),6e3));if(1>=Ft(w.h)&&w.ca){try{w.ca()}catch{}w.ca=void 0}}else es(w,11)}else if((u.K||w.g==u)&&Ol(w),!A(v))for(H=w.Da.g.parse(v),v=0;v<H.length;v++){let me=H[v];if(w.T=me[0],me=me[1],w.G==2)if(me[0]=="c"){w.K=me[1],w.ia=me[2];const xn=me[3];xn!=null&&(w.la=xn,w.j.info("VER="+w.la));const En=me[4];En!=null&&(w.Aa=En,w.j.info("SVER="+w.Aa));const Js=me[5];Js!=null&&typeof Js=="number"&&0<Js&&(O=1.5*Js,w.L=O,w.j.info("backChannelRequestTimeoutMs_="+O)),O=w;const pi=u.g;if(pi){const Fl=pi.g?pi.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fl){var Z=O.h;Z.g||Fl.indexOf("spdy")==-1&&Fl.indexOf("quic")==-1&&Fl.indexOf("h2")==-1||(Z.j=Z.l,Z.g=new Set,Z.h&&(ue(Z,Z.h),Z.h=null))}if(O.D){const Fu=pi.g?pi.g.getResponseHeader("X-HTTP-Session-Id"):null;Fu&&(O.ya=Fu,Ae(O.I,O.D,Fu))}}w.G=3,w.l&&w.l.ua(),w.ba&&(w.R=Date.now()-u.F,w.j.info("Handshake RTT: "+w.R+"ms")),O=w;var vt=u;if(O.qa=Qp(O,O.J?O.ia:null,O.W),vt.K){Vn(O.h,vt);var ye=vt,fn=O.L;fn&&(ye.I=fn),ye.B&&(jt(ye),Pt(ye)),O.g=vt}else $p(O);0<w.i.length&&Nl(w)}else me[0]!="stop"&&me[0]!="close"||es(w,7);else w.G==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?es(w,7):Nu(w):me[0]!="noop"&&w.l&&w.l.ta(me),w.v=0)}}Me(4)}catch{}}var De=class{constructor(u,v){this.g=u,this.map=v}};function yn(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function de(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Ft(u){return u.h?1:u.g?u.g.size:0}function qe(u,v){return u.h?u.h==v:u.g?u.g.has(v):!1}function ue(u,v){u.g?u.g.add(v):u.h=v}function Vn(u,v){u.h&&u.h==v?u.h=null:u.g&&u.g.has(v)&&u.g.delete(v)}yn.prototype.cancel=function(){if(this.i=$i(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function $i(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let v=u.i;for(const w of u.g.values())v=v.concat(w.D);return v}return _(u.i)}function Ln(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var v=[],w=u.length,O=0;O<w;O++)v.push(u[O]);return v}v=[],w=0;for(O in u)v[w++]=u[O];return v}function ha(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var v=[];u=u.length;for(var w=0;w<u;w++)v.push(w);return v}v=[],w=0;for(const O in u)v[w++]=O;return v}}}function Oe(u,v){if(u.forEach&&typeof u.forEach=="function")u.forEach(v,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,v,void 0);else for(var w=ha(u),O=Ln(u),H=O.length,Z=0;Z<H;Z++)v.call(void 0,O[Z],w&&w[Z],u)}var fi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function da(u,v){if(u){u=u.split("&");for(var w=0;w<u.length;w++){var O=u[w].indexOf("="),H=null;if(0<=O){var Z=u[w].substring(0,O);H=u[w].substring(O+1)}else Z=u[w];v(Z,H?decodeURIComponent(H.replace(/\+/g," ")):"")}}}function je(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof je){this.h=u.h,Ys(this,u.j),this.o=u.o,this.g=u.g,ts(this,u.s),this.l=u.l;var v=u.i,w=new ma;w.i=v.i,v.g&&(w.g=new Map(v.g),w.h=v.h),Ip(this,w),this.m=u.m}else u&&(v=String(u).match(fi))?(this.h=!1,Ys(this,v[1]||"",!0),this.o=fa(v[2]||""),this.g=fa(v[3]||"",!0),ts(this,v[4]),this.l=fa(v[5]||"",!0),Ip(this,v[6]||"",!0),this.m=fa(v[7]||"")):(this.h=!1,this.i=new ma(null,this.h))}je.prototype.toString=function(){var u=[],v=this.j;v&&u.push(pa(v,Pp,!0),":");var w=this.g;return(w||v=="file")&&(u.push("//"),(v=this.o)&&u.push(pa(v,Pp,!0),"@"),u.push(encodeURIComponent(String(w)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),w=this.s,w!=null&&u.push(":",String(w))),(w=this.l)&&(this.g&&w.charAt(0)!="/"&&u.push("/"),u.push(pa(w,w.charAt(0)=="/"?nE:eE,!0))),(w=this.i.toString())&&u.push("?",w),(w=this.m)&&u.push("#",pa(w,rE)),u.join("")};function Xn(u){return new je(u)}function Ys(u,v,w){u.j=w?fa(v,!0):v,u.j&&(u.j=u.j.replace(/:$/,""))}function ts(u,v){if(v){if(v=Number(v),isNaN(v)||0>v)throw Error("Bad port number "+v);u.s=v}else u.s=null}function Ip(u,v,w){v instanceof ma?(u.i=v,sE(u.i,u.h)):(w||(v=pa(v,iE)),u.i=new ma(v,u.h))}function Ae(u,v,w){u.i.set(v,w)}function Il(u){return Ae(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function fa(u,v){return u?v?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function pa(u,v,w){return typeof u=="string"?(u=encodeURI(u).replace(v,tE),w&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function tE(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Pp=/[#\/\?@]/g,eE=/[#\?:]/g,nE=/[#\?]/g,iE=/[#\?@]/g,rE=/#/g;function ma(u,v){this.h=this.g=null,this.i=u||null,this.j=!!v}function gr(u){u.g||(u.g=new Map,u.h=0,u.i&&da(u.i,function(v,w){u.add(decodeURIComponent(v.replace(/\+/g," ")),w)}))}i=ma.prototype,i.add=function(u,v){gr(this),this.i=null,u=Ks(this,u);var w=this.g.get(u);return w||this.g.set(u,w=[]),w.push(v),this.h+=1,this};function Dp(u,v){gr(u),v=Ks(u,v),u.g.has(v)&&(u.i=null,u.h-=u.g.get(v).length,u.g.delete(v))}function Lp(u,v){return gr(u),v=Ks(u,v),u.g.has(v)}i.forEach=function(u,v){gr(this),this.g.forEach(function(w,O){w.forEach(function(H){u.call(v,H,O,this)},this)},this)},i.na=function(){gr(this);const u=Array.from(this.g.values()),v=Array.from(this.g.keys()),w=[];for(let O=0;O<v.length;O++){const H=u[O];for(let Z=0;Z<H.length;Z++)w.push(v[O])}return w},i.V=function(u){gr(this);let v=[];if(typeof u=="string")Lp(this,u)&&(v=v.concat(this.g.get(Ks(this,u))));else{u=Array.from(this.g.values());for(let w=0;w<u.length;w++)v=v.concat(u[w])}return v},i.set=function(u,v){return gr(this),this.i=null,u=Ks(this,u),Lp(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[v]),this.h+=1,this},i.get=function(u,v){return u?(u=this.V(u),0<u.length?String(u[0]):v):v};function Np(u,v,w){Dp(u,v),0<w.length&&(u.i=null,u.g.set(Ks(u,v),_(w)),u.h+=w.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],v=Array.from(this.g.keys());for(var w=0;w<v.length;w++){var O=v[w];const Z=encodeURIComponent(String(O)),vt=this.V(O);for(O=0;O<vt.length;O++){var H=Z;vt[O]!==""&&(H+="="+encodeURIComponent(String(vt[O]))),u.push(H)}}return this.i=u.join("&")};function Ks(u,v){return v=String(v),u.j&&(v=v.toLowerCase()),v}function sE(u,v){v&&!u.j&&(gr(u),u.i=null,u.g.forEach(function(w,O){var H=O.toLowerCase();O!=H&&(Dp(this,O),Np(this,H,w))},u)),u.j=v}function oE(u,v){const w=new $n;if(a.Image){const O=new Image;O.onload=p(_r,w,"TestLoadImage: loaded",!0,v,O),O.onerror=p(_r,w,"TestLoadImage: error",!1,v,O),O.onabort=p(_r,w,"TestLoadImage: abort",!1,v,O),O.ontimeout=p(_r,w,"TestLoadImage: timeout",!1,v,O),a.setTimeout(function(){O.ontimeout&&O.ontimeout()},1e4),O.src=u}else v(!1)}function aE(u,v){const w=new $n,O=new AbortController,H=setTimeout(()=>{O.abort(),_r(w,"TestPingServer: timeout",!1,v)},1e4);fetch(u,{signal:O.signal}).then(Z=>{clearTimeout(H),Z.ok?_r(w,"TestPingServer: ok",!0,v):_r(w,"TestPingServer: server error",!1,v)}).catch(()=>{clearTimeout(H),_r(w,"TestPingServer: error",!1,v)})}function _r(u,v,w,O,H){try{H&&(H.onload=null,H.onerror=null,H.onabort=null,H.ontimeout=null),O(w)}catch{}}function lE(){this.g=new Se}function cE(u,v,w){const O=w||"";try{Oe(u,function(H,Z){let vt=H;c(H)&&(vt=$t(H)),v.push(O+Z+"="+encodeURIComponent(vt))})}catch(H){throw v.push(O+"type="+encodeURIComponent("_badmap")),H}}function ga(u){this.l=u.Ub||null,this.j=u.eb||!1}y(ga,I),ga.prototype.g=function(){return new Pl(this.l,this.j)},ga.prototype.i=function(u){return function(){return u}}({});function Pl(u,v){Mt.call(this),this.D=u,this.o=v,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}y(Pl,Mt),i=Pl.prototype,i.open=function(u,v){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=v,this.readyState=1,va(this)},i.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const v={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(v.body=u),(this.D||a).fetch(new Request(this.A,v)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_a(this)),this.readyState=0},i.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,va(this)),this.g&&(this.readyState=3,va(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Op(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Op(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}i.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var v=u.value?u.value:new Uint8Array(0);(v=this.v.decode(v,{stream:!u.done}))&&(this.response=this.responseText+=v)}u.done?_a(this):va(this),this.readyState==3&&Op(this)}},i.Ra=function(u){this.g&&(this.response=this.responseText=u,_a(this))},i.Qa=function(u){this.g&&(this.response=u,_a(this))},i.ga=function(){this.g&&_a(this)};function _a(u){u.readyState=4,u.l=null,u.j=null,u.v=null,va(u)}i.setRequestHeader=function(u,v){this.u.append(u,v)},i.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],v=this.h.entries();for(var w=v.next();!w.done;)w=w.value,u.push(w[0]+": "+w[1]),w=v.next();return u.join(`\r
`)};function va(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Pl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Up(u){let v="";return D(u,function(w,O){v+=O,v+=":",v+=w,v+=`\r
`}),v}function Lu(u,v,w){t:{for(O in w){var O=!1;break t}O=!0}O||(w=Up(w),typeof u=="string"?w!=null&&encodeURIComponent(String(w)):Ae(u,v,w))}function ze(u){Mt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}y(ze,Mt);var uE=/^https?$/i,hE=["POST","PUT"];i=ze.prototype,i.Ha=function(u){this.J=u},i.ea=function(u,v,w,O){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);v=v?v.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ua.g(),this.v=this.o?q(this.o):q(ua),this.g.onreadystatechange=f(this.Ea,this);try{this.B=!0,this.g.open(v,String(u),!0),this.B=!1}catch(Z){Fp(this,Z);return}if(u=w||"",w=new Map(this.headers),O)if(Object.getPrototypeOf(O)===Object.prototype)for(var H in O)w.set(H,O[H]);else if(typeof O.keys=="function"&&typeof O.get=="function")for(const Z of O.keys())w.set(Z,O.get(Z));else throw Error("Unknown input type for opt_headers: "+String(O));O=Array.from(w.keys()).find(Z=>Z.toLowerCase()=="content-type"),H=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(hE,v,void 0))||O||H||w.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Z,vt]of w)this.g.setRequestHeader(Z,vt);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Bp(this),this.u=!0,this.g.send(u),this.u=!1}catch(Z){Fp(this,Z)}};function Fp(u,v){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=v,u.m=5,Vp(u),Dl(u)}function Vp(u){u.A||(u.A=!0,ht(u,"complete"),ht(u,"error"))}i.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ht(this,"complete"),ht(this,"abort"),Dl(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Dl(this,!0)),ze.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?kp(this):this.bb())},i.bb=function(){kp(this)};function kp(u){if(u.h&&typeof o<"u"&&(!u.v[1]||Xi(u)!=4||u.Z()!=2)){if(u.u&&Xi(u)==4)Yt(u.Ea,0,u);else if(ht(u,"readystatechange"),Xi(u)==4){u.h=!1;try{const vt=u.Z();t:switch(vt){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var v=!0;break t;default:v=!1}var w;if(!(w=v)){var O;if(O=vt===0){var H=String(u.D).match(fi)[1]||null;!H&&a.self&&a.self.location&&(H=a.self.location.protocol.slice(0,-1)),O=!uE.test(H?H.toLowerCase():"")}w=O}if(w)ht(u,"complete"),ht(u,"success");else{u.m=6;try{var Z=2<Xi(u)?u.g.statusText:""}catch{Z=""}u.l=Z+" ["+u.Z()+"]",Vp(u)}}finally{Dl(u)}}}}function Dl(u,v){if(u.g){Bp(u);const w=u.g,O=u.v[0]?()=>{}:null;u.g=null,u.v=null,v||ht(u,"ready");try{w.onreadystatechange=O}catch{}}}function Bp(u){u.I&&(a.clearTimeout(u.I),u.I=null)}i.isActive=function(){return!!this.g};function Xi(u){return u.g?u.g.readyState:0}i.Z=function(){try{return 2<Xi(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(u){if(this.g){var v=this.g.responseText;return u&&v.indexOf(u)==0&&(v=v.substring(u.length)),Kt(v)}};function zp(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function dE(u){const v={};u=(u.g&&2<=Xi(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let O=0;O<u.length;O++){if(A(u[O]))continue;var w=b(u[O]);const H=w[0];if(w=w[1],typeof w!="string")continue;w=w.trim();const Z=v[H]||[];v[H]=Z,Z.push(w)}S(v,function(O){return O.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ya(u,v,w){return w&&w.internalChannelParams&&w.internalChannelParams[u]||v}function Hp(u){this.Aa=0,this.i=[],this.j=new $n,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ya("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ya("baseRetryDelayMs",5e3,u),this.cb=ya("retryDelaySeedMs",1e4,u),this.Wa=ya("forwardChannelMaxRetries",2,u),this.wa=ya("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new yn(u&&u.concurrentRequestLimit),this.Da=new lE,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Hp.prototype,i.la=8,i.G=1,i.connect=function(u,v,w,O){Pe(0),this.W=u,this.H=v||{},w&&O!==void 0&&(this.H.OSID=w,this.H.OAID=O),this.F=this.X,this.I=Qp(this,null,this.W),Nl(this)};function Nu(u){if(Gp(u),u.G==3){var v=u.U++,w=Xn(u.I);if(Ae(w,"SID",u.K),Ae(w,"RID",v),Ae(w,"TYPE","terminate"),xa(u,w),v=new N(u,u.j,v),v.L=2,v.v=Il(Xn(w)),w=!1,a.navigator&&a.navigator.sendBeacon)try{w=a.navigator.sendBeacon(v.v.toString(),"")}catch{}!w&&a.Image&&(new Image().src=v.v,w=!0),w||(v.g=Jp(v.j,null),v.g.ea(v.v)),v.F=Date.now(),Pt(v)}Kp(u)}function Ll(u){u.g&&(Uu(u),u.g.cancel(),u.g=null)}function Gp(u){Ll(u),u.u&&(a.clearTimeout(u.u),u.u=null),Ol(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function Nl(u){if(!de(u.h)&&!u.s){u.s=!0;var v=u.Ga;tt||St(),Q||(tt(),Q=!0),gt.add(v,u),u.B=0}}function fE(u,v){return Ft(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=v.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Dn(f(u.Ga,u,v),Yp(u,u.B)),u.B++,!0)}i.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const H=new N(this,this.j,u);let Z=this.o;if(this.S&&(Z?(Z=T(Z),E(Z,this.S)):Z=this.S),this.m!==null||this.O||(H.H=Z,Z=null),this.P)t:{for(var v=0,w=0;w<this.i.length;w++){e:{var O=this.i[w];if("__data__"in O.map&&(O=O.map.__data__,typeof O=="string")){O=O.length;break e}O=void 0}if(O===void 0)break;if(v+=O,4096<v){v=w;break t}if(v===4096||w===this.i.length-1){v=w+1;break t}}v=1e3}else v=1e3;v=qp(this,H,v),w=Xn(this.I),Ae(w,"RID",u),Ae(w,"CVER",22),this.D&&Ae(w,"X-HTTP-Session-Id",this.D),xa(this,w),Z&&(this.O?v="headers="+encodeURIComponent(String(Up(Z)))+"&"+v:this.m&&Lu(w,this.m,Z)),ue(this.h,H),this.Ua&&Ae(w,"TYPE","init"),this.P?(Ae(w,"$req",v),Ae(w,"SID","null"),H.T=!0,z(H,w,null)):z(H,w,v),this.G=2}}else this.G==3&&(u?Wp(this,u):this.i.length==0||de(this.h)||Wp(this))};function Wp(u,v){var w;v?w=v.l:w=u.U++;const O=Xn(u.I);Ae(O,"SID",u.K),Ae(O,"RID",w),Ae(O,"AID",u.T),xa(u,O),u.m&&u.o&&Lu(O,u.m,u.o),w=new N(u,u.j,w,u.B+1),u.m===null&&(w.H=u.o),v&&(u.i=v.D.concat(u.i)),v=qp(u,w,1e3),w.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),ue(u.h,w),z(w,O,v)}function xa(u,v){u.H&&D(u.H,function(w,O){Ae(v,O,w)}),u.l&&Oe({},function(w,O){Ae(v,O,w)})}function qp(u,v,w){w=Math.min(u.i.length,w);var O=u.l?f(u.l.Na,u.l,u):null;t:{var H=u.i;let Z=-1;for(;;){const vt=["count="+w];Z==-1?0<w?(Z=H[0].g,vt.push("ofs="+Z)):Z=0:vt.push("ofs="+Z);let ye=!0;for(let fn=0;fn<w;fn++){let me=H[fn].g;const xn=H[fn].map;if(me-=Z,0>me)Z=Math.max(0,H[fn].g-100),ye=!1;else try{cE(xn,vt,"req"+me+"_")}catch{O&&O(xn)}}if(ye){O=vt.join("&");break t}}}return u=u.i.splice(0,w),v.D=u,O}function $p(u){if(!u.g&&!u.u){u.Y=1;var v=u.Fa;tt||St(),Q||(tt(),Q=!0),gt.add(v,u),u.v=0}}function Ou(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Dn(f(u.Fa,u),Yp(u,u.v)),u.v++,!0)}i.Fa=function(){if(this.u=null,Xp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Dn(f(this.ab,this),u)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pe(10),Ll(this),Xp(this))};function Uu(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function Xp(u){u.g=new N(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var v=Xn(u.qa);Ae(v,"RID","rpc"),Ae(v,"SID",u.K),Ae(v,"AID",u.T),Ae(v,"CI",u.F?"0":"1"),!u.F&&u.ja&&Ae(v,"TO",u.ja),Ae(v,"TYPE","xmlhttp"),xa(u,v),u.m&&u.o&&Lu(v,u.m,u.o),u.L&&(u.g.I=u.L);var w=u.g;u=u.ia,w.L=1,w.v=Il(Xn(v)),w.m=null,w.P=!0,mt(w,u)}i.Za=function(){this.C!=null&&(this.C=null,Ll(this),Ou(this),Pe(19))};function Ol(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function jp(u,v){var w=null;if(u.g==v){Ol(u),Uu(u),u.g=null;var O=2}else if(qe(u.h,v))w=v.D,Vn(u.h,v),O=1;else return;if(u.G!=0){if(v.o)if(O==1){w=v.m?v.m.length:0,v=Date.now()-v.F;var H=u.B;O=Ie(),ht(O,new Xe(O,w)),Nl(u)}else $p(u);else if(H=v.s,H==3||H==0&&0<v.X||!(O==1&&fE(u,v)||O==2&&Ou(u)))switch(w&&0<w.length&&(v=u.h,v.i=v.i.concat(w)),H){case 1:es(u,5);break;case 4:es(u,10);break;case 3:es(u,6);break;default:es(u,2)}}}function Yp(u,v){let w=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(w*=2),w*v}function es(u,v){if(u.j.info("Error code "+v),v==2){var w=f(u.fb,u),O=u.Xa;const H=!O;O=new je(O||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ys(O,"https"),Il(O),H?oE(O.toString(),w):aE(O.toString(),w)}else Pe(2);u.G=0,u.l&&u.l.sa(v),Kp(u),Gp(u)}i.fb=function(u){u?(this.j.info("Successfully pinged google.com"),Pe(2)):(this.j.info("Failed to ping google.com"),Pe(1))};function Kp(u){if(u.G=0,u.ka=[],u.l){const v=$i(u.h);(v.length!=0||u.i.length!=0)&&(m(u.ka,v),m(u.ka,u.i),u.h.i.length=0,_(u.i),u.i.length=0),u.l.ra()}}function Qp(u,v,w){var O=w instanceof je?Xn(w):new je(w);if(O.g!="")v&&(O.g=v+"."+O.g),ts(O,O.s);else{var H=a.location;O=H.protocol,v=v?v+"."+H.hostname:H.hostname,H=+H.port;var Z=new je(null);O&&Ys(Z,O),v&&(Z.g=v),H&&ts(Z,H),w&&(Z.l=w),O=Z}return w=u.D,v=u.ya,w&&v&&Ae(O,w,v),Ae(O,"VER",u.la),xa(u,O),O}function Jp(u,v,w){if(v&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return v=u.Ca&&!u.pa?new ze(new ga({eb:w})):new ze(u.pa),v.Ha(u.J),v}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Zp(){}i=Zp.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function Ul(){}Ul.prototype.g=function(u,v){return new jn(u,v)};function jn(u,v){Mt.call(this),this.g=new Hp(v),this.l=u,this.h=v&&v.messageUrlParams||null,u=v&&v.messageHeaders||null,v&&v.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=v&&v.initMessageHeaders||null,v&&v.messageContentType&&(u?u["X-WebChannel-Content-Type"]=v.messageContentType:u={"X-WebChannel-Content-Type":v.messageContentType}),v&&v.va&&(u?u["X-WebChannel-Client-Profile"]=v.va:u={"X-WebChannel-Client-Profile":v.va}),this.g.S=u,(u=v&&v.Sb)&&!A(u)&&(this.g.m=u),this.v=v&&v.supportsCrossDomainXhr||!1,this.u=v&&v.sendRawJson||!1,(v=v&&v.httpSessionIdParam)&&!A(v)&&(this.g.D=v,u=this.h,u!==null&&v in u&&(u=this.h,v in u&&delete u[v])),this.j=new Qs(this)}y(jn,Mt),jn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},jn.prototype.close=function(){Nu(this.g)},jn.prototype.o=function(u){var v=this.g;if(typeof u=="string"){var w={};w.__data__=u,u=w}else this.u&&(w={},w.__data__=$t(u),u=w);v.i.push(new De(v.Ya++,u)),v.G==3&&Nl(v)},jn.prototype.N=function(){this.g.l=null,delete this.j,Nu(this.g),delete this.g,jn.aa.N.call(this)};function tm(u){ct.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var v=u.__sm__;if(v){t:{for(const w in v){u=w;break t}u=void 0}(this.i=u)&&(u=this.i,v=v!==null&&u in v?v[u]:void 0),this.data=v}else this.data=u}y(tm,ct);function em(){Ot.call(this),this.status=1}y(em,Ot);function Qs(u){this.g=u}y(Qs,Zp),Qs.prototype.ua=function(){ht(this.g,"a")},Qs.prototype.ta=function(u){ht(this.g,new tm(u))},Qs.prototype.sa=function(u){ht(this.g,new em)},Qs.prototype.ra=function(){ht(this.g,"b")},Ul.prototype.createWebChannel=Ul.prototype.g,jn.prototype.send=jn.prototype.o,jn.prototype.open=jn.prototype.m,jn.prototype.close=jn.prototype.close,b0=function(){return new Ul},A0=function(){return Ie()},M0=Ht,Wh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Zr.NO_ERROR=0,Zr.TIMEOUT=8,Zr.HTTP_ERROR=6,gc=Zr,Cl.COMPLETE="complete",w0=Cl,$.EventType=J,J.OPEN="a",J.CLOSE="b",J.ERROR="c",J.MESSAGE="d",Mt.prototype.listen=Mt.prototype.K,Ra=$,T0=ga,ze.prototype.listenOnce=ze.prototype.L,ze.prototype.getLastError=ze.prototype.Ka,ze.prototype.getLastErrorCode=ze.prototype.Ba,ze.prototype.getStatus=ze.prototype.Z,ze.prototype.getResponseJson=ze.prototype.Oa,ze.prototype.getResponseText=ze.prototype.oa,ze.prototype.send=ze.prototype.ea,ze.prototype.setWithCredentials=ze.prototype.Ha,S0=ze}).apply(typeof Vl<"u"?Vl:typeof self<"u"?self:typeof window<"u"?window:{});const Sm="@firebase/firestore";/**
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
 */class Mn{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Mn.UNAUTHENTICATED=new Mn(null),Mn.GOOGLE_CREDENTIALS=new Mn("google-credentials-uid"),Mn.FIRST_PARTY=new Mn("first-party-uid"),Mn.MOCK_USER=new Mn("mock-user");/**
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
 */let na="10.12.5";/**
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
 */const Ds=new of("@firebase/firestore");function Ea(){return Ds.logLevel}function Nt(i,...t){if(Ds.logLevel<=pe.DEBUG){const e=t.map(ff);Ds.debug(`Firestore (${na}): ${i}`,...e)}}function ur(i,...t){if(Ds.logLevel<=pe.ERROR){const e=t.map(ff);Ds.error(`Firestore (${na}): ${i}`,...e)}}function Vo(i,...t){if(Ds.logLevel<=pe.WARN){const e=t.map(ff);Ds.warn(`Firestore (${na}): ${i}`,...e)}}function ff(i){if(typeof i=="string")return i;try{/**
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
 */function Qt(i="Unexpected state"){const t=`FIRESTORE (${na}) INTERNAL ASSERTION FAILED: `+i;throw ur(t),new Error(t)}function Ee(i,t){i||Qt()}function te(i,t){return i}/**
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
 */const st={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Lt extends Yr{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Nr{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class R0{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class hw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Mn.UNAUTHENTICATED))}shutdown(){}}class dw{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class fw{constructor(t){this.t=t,this.currentUser=Mn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=l=>this.i!==n?(n=this.i,e(l)):Promise.resolve();let s=new Nr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Nr,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=s;t.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{Nt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(Nt("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Nr)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(Nt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(Ee(typeof n.accessToken=="string"),new R0(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ee(t===null||typeof t=="string"),new Mn(t)}}class pw{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=Mn.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class mw{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new pw(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Mn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gw{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _w{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=s=>{s.error!=null&&Nt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,Nt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>n(s))};const r=s=>{Nt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?r(s):Nt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Ee(typeof e.token=="string"),this.R=e.token,new gw(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function vw(i){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(i);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<i;n++)e[n]=Math.floor(256*Math.random());return e}/**
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
 */class C0{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=vw(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<e&&(n+=t.charAt(r[s]%t.length))}return n}}function ge(i,t){return i<t?-1:i>t?1:0}function ko(i,t,e){return i.length===t.length&&i.every((n,r)=>e(n,t[r]))}/**
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
 */class rn{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Lt(st.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Lt(st.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Lt(st.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Lt(st.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return rn.fromMillis(Date.now())}static fromDate(t){return rn.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new rn(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ge(this.nanoseconds,t.nanoseconds):ge(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Zt{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Zt(t)}static min(){return new Zt(new rn(0,0))}static max(){return new Zt(new rn(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ka{constructor(t,e,n){e===void 0?e=0:e>t.length&&Qt(),n===void 0?n=t.length-e:n>t.length-e&&Qt(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Ka.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ka?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.get(r),o=e.get(r);if(s<o)return-1;if(s>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Re extends Ka{construct(t,e,n){return new Re(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Lt(st.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(r=>r.length>0))}return new Re(e)}static emptyPath(){return new Re([])}}const yw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gn extends Ka{construct(t,e,n){return new gn(t,e,n)}static isValidIdentifier(t){return yw.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gn.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new gn(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const s=()=>{if(n.length===0)throw new Lt(st.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new Lt(st.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Lt(st.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(n+=a,r++):(s(),r++)}if(s(),o)throw new Lt(st.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new gn(e)}static emptyPath(){return new gn([])}}/**
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
 */class Gt{constructor(t){this.path=t}static fromPath(t){return new Gt(Re.fromString(t))}static fromName(t){return new Gt(Re.fromString(t).popFirst(5))}static empty(){return new Gt(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Re.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Re.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Gt(new Re(t.slice()))}}function xw(i,t){const e=i.toTimestamp().seconds,n=i.toTimestamp().nanoseconds+1,r=Zt.fromTimestamp(n===1e9?new rn(e+1,0):new rn(e,n));return new Hr(r,Gt.empty(),t)}function Ew(i){return new Hr(i.readTime,i.key,-1)}class Hr{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Hr(Zt.min(),Gt.empty(),-1)}static max(){return new Hr(Zt.max(),Gt.empty(),-1)}}function Sw(i,t){let e=i.readTime.compareTo(t.readTime);return e!==0?e:(e=Gt.comparator(i.documentKey,t.documentKey),e!==0?e:ge(i.largestBatchId,t.largestBatchId))}/**
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
 */const Tw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ww{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function _l(i){if(i.code!==st.FAILED_PRECONDITION||i.message!==Tw)throw i;Nt("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ut{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Qt(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new ut((n,r)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(n,r)},this.catchCallback=s=>{this.wrapFailure(e,s).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof ut?e:ut.resolve(e)}catch(e){return ut.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):ut.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):ut.reject(e)}static resolve(t){return new ut((e,n)=>{e(t)})}static reject(t){return new ut((e,n)=>{n(t)})}static waitFor(t){return new ut((e,n)=>{let r=0,s=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++s,o&&s===r&&e()},l=>n(l))}),o=!0,s===r&&e()})}static or(t){let e=ut.resolve(!1);for(const n of t)e=e.next(r=>r?ut.resolve(r):n());return e}static forEach(t,e){const n=[];return t.forEach((r,s)=>{n.push(e.call(this,r,s))}),this.waitFor(n)}static mapArray(t,e){return new ut((n,r)=>{const s=t.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;e(t[c]).next(h=>{o[c]=h,++a,a===s&&n(o)},h=>r(h))}})}static doWhile(t,e){return new ut((n,r)=>{const s=()=>{t()===!0?e().next(()=>{s()},r):n()};s()})}}function Mw(i){const t=i.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function vl(i){return i.name==="IndexedDbTransactionError"}/**
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
 */class pf{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ie(n),this.se=n=>e.writeSequenceNumber(n))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}pf.oe=-1;function uu(i){return i==null}function Vc(i){return i===0&&1/i==-1/0}function Aw(i){return typeof i=="number"&&Number.isInteger(i)&&!Vc(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */function Tm(i){let t=0;for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&t++;return t}function ia(i,t){for(const e in i)Object.prototype.hasOwnProperty.call(i,e)&&t(e,i[e])}function I0(i){for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t))return!1;return!0}/**
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
 */class Be{constructor(t,e){this.comparator=t,this.root=e||pn.EMPTY}insert(t,e){return new Be(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,pn.BLACK,null,null))}remove(t){return new Be(this.comparator,this.root.remove(t,this.comparator).copy(null,null,pn.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new kl(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new kl(this.root,t,this.comparator,!1)}getReverseIterator(){return new kl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new kl(this.root,t,this.comparator,!0)}}class kl{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class pn{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=n??pn.RED,this.left=r??pn.EMPTY,this.right=s??pn.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new pn(t??this.key,e??this.value,n??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const s=n(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):s===0?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return pn.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),e(t,r.key)===0){if(r.right.isEmpty())return pn.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,pn.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,pn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Qt();const t=this.left.check();if(t!==this.right.check())throw Qt();return t+(this.isRed()?0:1)}}pn.EMPTY=null,pn.RED=!0,pn.BLACK=!1;pn.EMPTY=new class{constructor(){this.size=0}get key(){throw Qt()}get value(){throw Qt()}get color(){throw Qt()}get left(){throw Qt()}get right(){throw Qt()}copy(t,e,n,r,s){return this}insert(t,e,n){return new pn(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class _n{constructor(t){this.comparator=t,this.data=new Be(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new wm(this.data.getIterator())}getIteratorFrom(t){return new wm(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof _n)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const r=e.getNext().key,s=n.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new _n(this.comparator);return e.data=t,e}}class wm{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class yi{constructor(t){this.fields=t,t.sort(gn.comparator)}static empty(){return new yi([])}unionWith(t){let e=new _n(gn.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new yi(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ko(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
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
 */class P0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class vn{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new P0("Invalid base64 string: "+s):s}}(t);return new vn(e)}static fromUint8Array(t){const e=function(r){let s="";for(let o=0;o<r.length;++o)s+=String.fromCharCode(r[o]);return s}(t);return new vn(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ge(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}vn.EMPTY_BYTE_STRING=new vn("");const bw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gr(i){if(Ee(!!i),typeof i=="string"){let t=0;const e=bw.exec(i);if(Ee(!!e),e[1]){let r=e[1];r=(r+"000000000").substr(0,9),t=Number(r)}const n=new Date(i);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:Qe(i.seconds),nanos:Qe(i.nanos)}}function Qe(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Ls(i){return typeof i=="string"?vn.fromBase64String(i):vn.fromUint8Array(i)}/**
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
 */function mf(i){var t,e;return((e=(((t=i==null?void 0:i.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function gf(i){const t=i.mapValue.fields.__previous_value__;return mf(t)?gf(t):t}function Qa(i){const t=Gr(i.mapValue.fields.__local_write_time__.timestampValue);return new rn(t.seconds,t.nanos)}/**
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
 */class Rw{constructor(t,e,n,r,s,o,a,l,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Ja{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Ja("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ja&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const Bl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ns(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?mf(i)?4:Cw(i)?9007199254740991:10:Qt()}function Hi(i,t){if(i===t)return!0;const e=Ns(i);if(e!==Ns(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===t.booleanValue;case 4:return Qa(i).isEqual(Qa(t));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const o=Gr(r.timestampValue),a=Gr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(i,t);case 5:return i.stringValue===t.stringValue;case 6:return function(r,s){return Ls(r.bytesValue).isEqual(Ls(s.bytesValue))}(i,t);case 7:return i.referenceValue===t.referenceValue;case 8:return function(r,s){return Qe(r.geoPointValue.latitude)===Qe(s.geoPointValue.latitude)&&Qe(r.geoPointValue.longitude)===Qe(s.geoPointValue.longitude)}(i,t);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Qe(r.integerValue)===Qe(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const o=Qe(r.doubleValue),a=Qe(s.doubleValue);return o===a?Vc(o)===Vc(a):isNaN(o)&&isNaN(a)}return!1}(i,t);case 9:return ko(i.arrayValue.values||[],t.arrayValue.values||[],Hi);case 10:return function(r,s){const o=r.mapValue.fields||{},a=s.mapValue.fields||{};if(Tm(o)!==Tm(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Hi(o[l],a[l])))return!1;return!0}(i,t);default:return Qt()}}function Za(i,t){return(i.values||[]).find(e=>Hi(e,t))!==void 0}function Bo(i,t){if(i===t)return 0;const e=Ns(i),n=Ns(t);if(e!==n)return ge(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return ge(i.booleanValue,t.booleanValue);case 2:return function(s,o){const a=Qe(s.integerValue||s.doubleValue),l=Qe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(i,t);case 3:return Mm(i.timestampValue,t.timestampValue);case 4:return Mm(Qa(i),Qa(t));case 5:return ge(i.stringValue,t.stringValue);case 6:return function(s,o){const a=Ls(s),l=Ls(o);return a.compareTo(l)}(i.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const h=ge(a[c],l[c]);if(h!==0)return h}return ge(a.length,l.length)}(i.referenceValue,t.referenceValue);case 8:return function(s,o){const a=ge(Qe(s.latitude),Qe(o.latitude));return a!==0?a:ge(Qe(s.longitude),Qe(o.longitude))}(i.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const h=Bo(a[c],l[c]);if(h)return h}return ge(a.length,l.length)}(i.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===Bl.mapValue&&o===Bl.mapValue)return 0;if(s===Bl.mapValue)return 1;if(o===Bl.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},h=Object.keys(c);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const f=ge(l[d],h[d]);if(f!==0)return f;const p=Bo(a[l[d]],c[h[d]]);if(p!==0)return p}return ge(l.length,h.length)}(i.mapValue,t.mapValue);default:throw Qt()}}function Mm(i,t){if(typeof i=="string"&&typeof t=="string"&&i.length===t.length)return ge(i,t);const e=Gr(i),n=Gr(t),r=ge(e.seconds,n.seconds);return r!==0?r:ge(e.nanos,n.nanos)}function zo(i){return qh(i)}function qh(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(e){const n=Gr(e);return`time(${n.seconds},${n.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(e){return Ls(e).toBase64()}(i.bytesValue):"referenceValue"in i?function(e){return Gt.fromName(e).toString()}(i.referenceValue):"geoPointValue"in i?function(e){return`geo(${e.latitude},${e.longitude})`}(i.geoPointValue):"arrayValue"in i?function(e){let n="[",r=!0;for(const s of e.values||[])r?r=!1:n+=",",n+=qh(s);return n+"]"}(i.arrayValue):"mapValue"in i?function(e){const n=Object.keys(e.fields||{}).sort();let r="{",s=!0;for(const o of n)s?s=!1:r+=",",r+=`${o}:${qh(e.fields[o])}`;return r+"}"}(i.mapValue):Qt()}function Am(i,t){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${t.path.canonicalString()}`}}function $h(i){return!!i&&"integerValue"in i}function _f(i){return!!i&&"arrayValue"in i}function bm(i){return!!i&&"nullValue"in i}function Rm(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function _c(i){return!!i&&"mapValue"in i}function Fa(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const t={mapValue:{fields:{}}};return ia(i.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Fa(n)),t}if(i.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(i.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Fa(i.arrayValue.values[e]);return t}return Object.assign({},i)}function Cw(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class oi{constructor(t){this.value=t}static empty(){return new oi({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!_c(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Fa(e)}setAll(t){let e=gn.emptyPath(),n={},r=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const l=this.getFieldsMap(e);this.applyChanges(l,n,r),n={},r=[],e=a.popLast()}o?n[a.lastSegment()]=Fa(o):r.push(a.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,n,r)}delete(t){const e=this.field(t.popLast());_c(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Hi(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];_c(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){ia(e,(r,s)=>t[r]=s);for(const r of n)delete t[r]}clone(){return new oi(Fa(this.value))}}function D0(i){const t=[];return ia(i.fields,(e,n)=>{const r=new gn([e]);if(_c(n)){const s=D0(n.mapValue).fields;if(s.length===0)t.push(r);else for(const o of s)t.push(r.child(o))}else t.push(r)}),new yi(t)}/**
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
 */class An{constructor(t,e,n,r,s,o,a){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new An(t,0,Zt.min(),Zt.min(),Zt.min(),oi.empty(),0)}static newFoundDocument(t,e,n,r){return new An(t,1,e,Zt.min(),n,r,0)}static newNoDocument(t,e){return new An(t,2,e,Zt.min(),Zt.min(),oi.empty(),0)}static newUnknownDocument(t,e){return new An(t,3,e,Zt.min(),Zt.min(),oi.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Zt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=oi.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=oi.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Zt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof An&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new An(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class kc{constructor(t,e){this.position=t,this.inclusive=e}}function Cm(i,t,e){let n=0;for(let r=0;r<i.position.length;r++){const s=t[r],o=i.position[r];if(s.field.isKeyField()?n=Gt.comparator(Gt.fromName(o.referenceValue),e.key):n=Bo(o,e.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function Im(i,t){if(i===null)return t===null;if(t===null||i.inclusive!==t.inclusive||i.position.length!==t.position.length)return!1;for(let e=0;e<i.position.length;e++)if(!Hi(i.position[e],t.position[e]))return!1;return!0}/**
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
 */class Bc{constructor(t,e="asc"){this.field=t,this.dir=e}}function Iw(i,t){return i.dir===t.dir&&i.field.isEqual(t.field)}/**
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
 */class L0{}class en extends L0{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Dw(t,e,n):e==="array-contains"?new Ow(t,n):e==="in"?new Uw(t,n):e==="not-in"?new Fw(t,n):e==="array-contains-any"?new Vw(t,n):new en(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new Lw(t,n):new Nw(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(Bo(e,this.value)):e!==null&&Ns(this.value)===Ns(e)&&this.matchesComparison(Bo(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Qt()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ti extends L0{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Ti(t,e)}matches(t){return N0(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function N0(i){return i.op==="and"}function O0(i){return Pw(i)&&N0(i)}function Pw(i){for(const t of i.filters)if(t instanceof Ti)return!1;return!0}function Xh(i){if(i instanceof en)return i.field.canonicalString()+i.op.toString()+zo(i.value);if(O0(i))return i.filters.map(t=>Xh(t)).join(",");{const t=i.filters.map(e=>Xh(e)).join(",");return`${i.op}(${t})`}}function U0(i,t){return i instanceof en?function(n,r){return r instanceof en&&n.op===r.op&&n.field.isEqual(r.field)&&Hi(n.value,r.value)}(i,t):i instanceof Ti?function(n,r){return r instanceof Ti&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((s,o,a)=>s&&U0(o,r.filters[a]),!0):!1}(i,t):void Qt()}function F0(i){return i instanceof en?function(e){return`${e.field.canonicalString()} ${e.op} ${zo(e.value)}`}(i):i instanceof Ti?function(e){return e.op.toString()+" {"+e.getFilters().map(F0).join(" ,")+"}"}(i):"Filter"}class Dw extends en{constructor(t,e,n){super(t,e,n),this.key=Gt.fromName(n.referenceValue)}matches(t){const e=Gt.comparator(t.key,this.key);return this.matchesComparison(e)}}class Lw extends en{constructor(t,e){super(t,"in",e),this.keys=V0("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Nw extends en{constructor(t,e){super(t,"not-in",e),this.keys=V0("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function V0(i,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>Gt.fromName(n.referenceValue))}class Ow extends en{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return _f(e)&&Za(e.arrayValue,this.value)}}class Uw extends en{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Za(this.value.arrayValue,e)}}class Fw extends en{constructor(t,e){super(t,"not-in",e)}matches(t){if(Za(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Za(this.value.arrayValue,e)}}class Vw extends en{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!_f(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>Za(this.value.arrayValue,n))}}/**
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
 */class kw{constructor(t,e=null,n=[],r=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function Pm(i,t=null,e=[],n=[],r=null,s=null,o=null){return new kw(i,t,e,n,r,s,o)}function vf(i){const t=te(i);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>Xh(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(s){return s.field.canonicalString()+s.dir}(n)).join(","),uu(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>zo(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>zo(n)).join(",")),t.ue=e}return t.ue}function yf(i,t){if(i.limit!==t.limit||i.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<i.orderBy.length;e++)if(!Iw(i.orderBy[e],t.orderBy[e]))return!1;if(i.filters.length!==t.filters.length)return!1;for(let e=0;e<i.filters.length;e++)if(!U0(i.filters[e],t.filters[e]))return!1;return i.collectionGroup===t.collectionGroup&&!!i.path.isEqual(t.path)&&!!Im(i.startAt,t.startAt)&&Im(i.endAt,t.endAt)}function jh(i){return Gt.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
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
 */class yl{constructor(t,e=null,n=[],r=[],s=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Bw(i,t,e,n,r,s,o,a){return new yl(i,t,e,n,r,s,o,a)}function k0(i){return new yl(i)}function Dm(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function B0(i){return i.collectionGroup!==null}function Va(i){const t=te(i);if(t.ce===null){t.ce=[];const e=new Set;for(const s of t.explicitOrderBy)t.ce.push(s),e.add(s.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new _n(gn.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.ce.push(new Bc(s,n))}),e.has(gn.keyField().canonicalString())||t.ce.push(new Bc(gn.keyField(),n))}return t.ce}function Ui(i){const t=te(i);return t.le||(t.le=zw(t,Va(i))),t.le}function zw(i,t){if(i.limitType==="F")return Pm(i.path,i.collectionGroup,t,i.filters,i.limit,i.startAt,i.endAt);{t=t.map(r=>{const s=r.dir==="desc"?"asc":"desc";return new Bc(r.field,s)});const e=i.endAt?new kc(i.endAt.position,i.endAt.inclusive):null,n=i.startAt?new kc(i.startAt.position,i.startAt.inclusive):null;return Pm(i.path,i.collectionGroup,t,i.filters,i.limit,e,n)}}function Yh(i,t){const e=i.filters.concat([t]);return new yl(i.path,i.collectionGroup,i.explicitOrderBy.slice(),e,i.limit,i.limitType,i.startAt,i.endAt)}function Kh(i,t,e){return new yl(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),t,e,i.startAt,i.endAt)}function hu(i,t){return yf(Ui(i),Ui(t))&&i.limitType===t.limitType}function z0(i){return`${vf(Ui(i))}|lt:${i.limitType}`}function xo(i){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>F0(r)).join(", ")}]`),uu(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>zo(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>zo(r)).join(",")),`Target(${n})`}(Ui(i))}; limitType=${i.limitType})`}function du(i,t){return t.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):Gt.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(i,t)&&function(n,r){for(const s of Va(n))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(i,t)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(i,t)&&function(n,r){return!(n.startAt&&!function(o,a,l){const c=Cm(o,a,l);return o.inclusive?c<=0:c<0}(n.startAt,Va(n),r)||n.endAt&&!function(o,a,l){const c=Cm(o,a,l);return o.inclusive?c>=0:c>0}(n.endAt,Va(n),r))}(i,t)}function Hw(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function H0(i){return(t,e)=>{let n=!1;for(const r of Va(i)){const s=Gw(r,t,e);if(s!==0)return s;n=n||r.field.isKeyField()}return 0}}function Gw(i,t,e){const n=i.field.isKeyField()?Gt.comparator(t.key,e.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?Bo(l,c):Qt()}(i.field,t,e);switch(i.dir){case"asc":return n;case"desc":return-1*n;default:return Qt()}}/**
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
 */class ra{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[r,s]of n)if(this.equalsFn(r,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return n.length===1?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){ia(this.inner,(e,n)=>{for(const[r,s]of n)t(r,s)})}isEmpty(){return I0(this.inner)}size(){return this.innerSize}}/**
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
 */const Ww=new Be(Gt.comparator);function hr(){return Ww}const G0=new Be(Gt.comparator);function Ca(...i){let t=G0;for(const e of i)t=t.insert(e.key,e);return t}function W0(i){let t=G0;return i.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function vs(){return ka()}function q0(){return ka()}function ka(){return new ra(i=>i.toString(),(i,t)=>i.isEqual(t))}const qw=new Be(Gt.comparator),$w=new _n(Gt.comparator);function le(...i){let t=$w;for(const e of i)t=t.add(e);return t}const Xw=new _n(ge);function jw(){return Xw}/**
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
 */function $0(i,t){if(i.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vc(t)?"-0":t}}function X0(i){return{integerValue:""+i}}function Yw(i,t){return Aw(t)?X0(t):$0(i,t)}/**
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
 */class fu{constructor(){this._=void 0}}function Kw(i,t,e){return i instanceof zc?function(r,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&mf(s)&&(s=gf(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(e,t):i instanceof tl?Y0(i,t):i instanceof el?K0(i,t):function(r,s){const o=j0(r,s),a=Lm(o)+Lm(r.Pe);return $h(o)&&$h(r.Pe)?X0(a):$0(r.serializer,a)}(i,t)}function Qw(i,t,e){return i instanceof tl?Y0(i,t):i instanceof el?K0(i,t):e}function j0(i,t){return i instanceof Hc?function(n){return $h(n)||function(s){return!!s&&"doubleValue"in s}(n)}(t)?t:{integerValue:0}:null}class zc extends fu{}class tl extends fu{constructor(t){super(),this.elements=t}}function Y0(i,t){const e=Q0(t);for(const n of i.elements)e.some(r=>Hi(r,n))||e.push(n);return{arrayValue:{values:e}}}class el extends fu{constructor(t){super(),this.elements=t}}function K0(i,t){let e=Q0(t);for(const n of i.elements)e=e.filter(r=>!Hi(r,n));return{arrayValue:{values:e}}}class Hc extends fu{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Lm(i){return Qe(i.integerValue||i.doubleValue)}function Q0(i){return _f(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}function Jw(i,t){return i.field.isEqual(t.field)&&function(n,r){return n instanceof tl&&r instanceof tl||n instanceof el&&r instanceof el?ko(n.elements,r.elements,Hi):n instanceof Hc&&r instanceof Hc?Hi(n.Pe,r.Pe):n instanceof zc&&r instanceof zc}(i.transform,t.transform)}class Zw{constructor(t,e){this.version=t,this.transformResults=e}}class ar{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new ar}static exists(t){return new ar(void 0,t)}static updateTime(t){return new ar(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function vc(i,t){return i.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(i.updateTime):i.exists===void 0||i.exists===t.isFoundDocument()}class pu{}function J0(i,t){if(!i.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return i.isNoDocument()?new tv(i.key,ar.none()):new xl(i.key,i.data,ar.none());{const e=i.data,n=oi.empty();let r=new _n(gn.comparator);for(let s of t.fields)if(!r.has(s)){let o=e.field(s);o===null&&s.length>1&&(s=s.popLast(),o=e.field(s)),o===null?n.delete(s):n.set(s,o),r=r.add(s)}return new zs(i.key,n,new yi(r.toArray()),ar.none())}}function tM(i,t,e){i instanceof xl?function(r,s,o){const a=r.value.clone(),l=Om(r.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(i,t,e):i instanceof zs?function(r,s,o){if(!vc(r.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Om(r.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Z0(r)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(i,t,e):function(r,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function Ba(i,t,e,n){return i instanceof xl?function(s,o,a,l){if(!vc(s.precondition,o))return a;const c=s.value.clone(),h=Um(s.fieldTransforms,l,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(i,t,e,n):i instanceof zs?function(s,o,a,l){if(!vc(s.precondition,o))return a;const c=Um(s.fieldTransforms,l,o),h=o.data;return h.setAll(Z0(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(i,t,e,n):function(s,o,a){return vc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(i,t,e)}function eM(i,t){let e=null;for(const n of i.fieldTransforms){const r=t.data.field(n.field),s=j0(n.transform,r||null);s!=null&&(e===null&&(e=oi.empty()),e.set(n.field,s))}return e||null}function Nm(i,t){return i.type===t.type&&!!i.key.isEqual(t.key)&&!!i.precondition.isEqual(t.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ko(n,r,(s,o)=>Jw(s,o))}(i.fieldTransforms,t.fieldTransforms)&&(i.type===0?i.value.isEqual(t.value):i.type!==1||i.data.isEqual(t.data)&&i.fieldMask.isEqual(t.fieldMask))}class xl extends pu{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class zs extends pu{constructor(t,e,n,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Z0(i){const t=new Map;return i.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=i.data.field(e);t.set(e,n)}}),t}function Om(i,t,e){const n=new Map;Ee(i.length===e.length);for(let r=0;r<e.length;r++){const s=i[r],o=s.transform,a=t.data.field(s.field);n.set(s.field,Qw(o,a,e[r]))}return n}function Um(i,t,e){const n=new Map;for(const r of i){const s=r.transform,o=e.data.field(r.field);n.set(r.field,Kw(s,o,t))}return n}class tv extends pu{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nM extends pu{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class iM{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(t.key)&&tM(s,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Ba(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Ba(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=q0();return this.mutations.forEach(r=>{const s=t.get(r.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=e.has(r.key)?null:a;const l=J0(o,a);l!==null&&n.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(Zt.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),le())}isEqual(t){return this.batchId===t.batchId&&ko(this.mutations,t.mutations,(e,n)=>Nm(e,n))&&ko(this.baseMutations,t.baseMutations,(e,n)=>Nm(e,n))}}class xf{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){Ee(t.mutations.length===n.length);let r=function(){return qw}();const s=t.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,n[o].version);return new xf(t,e,n,r)}}/**
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
 */class rM{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class sM{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var Ke,he;function oM(i){switch(i){default:return Qt();case st.CANCELLED:case st.UNKNOWN:case st.DEADLINE_EXCEEDED:case st.RESOURCE_EXHAUSTED:case st.INTERNAL:case st.UNAVAILABLE:case st.UNAUTHENTICATED:return!1;case st.INVALID_ARGUMENT:case st.NOT_FOUND:case st.ALREADY_EXISTS:case st.PERMISSION_DENIED:case st.FAILED_PRECONDITION:case st.ABORTED:case st.OUT_OF_RANGE:case st.UNIMPLEMENTED:case st.DATA_LOSS:return!0}}function ev(i){if(i===void 0)return ur("GRPC error has no .code"),st.UNKNOWN;switch(i){case Ke.OK:return st.OK;case Ke.CANCELLED:return st.CANCELLED;case Ke.UNKNOWN:return st.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return st.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return st.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return st.INTERNAL;case Ke.UNAVAILABLE:return st.UNAVAILABLE;case Ke.UNAUTHENTICATED:return st.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return st.INVALID_ARGUMENT;case Ke.NOT_FOUND:return st.NOT_FOUND;case Ke.ALREADY_EXISTS:return st.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return st.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return st.FAILED_PRECONDITION;case Ke.ABORTED:return st.ABORTED;case Ke.OUT_OF_RANGE:return st.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return st.UNIMPLEMENTED;case Ke.DATA_LOSS:return st.DATA_LOSS;default:return Qt()}}(he=Ke||(Ke={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function aM(){return new TextEncoder}/**
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
 */const lM=new ws([4294967295,4294967295],0);function Fm(i){const t=aM().encode(i),e=new E0;return e.update(t),new Uint8Array(e.digest())}function Vm(i){const t=new DataView(i.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),r=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new ws([e,n],0),new ws([r,s],0)]}class Ef{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new Ia(`Invalid padding: ${e}`);if(n<0)throw new Ia(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new Ia(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new Ia(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=ws.fromNumber(this.Ie)}Ee(t,e,n){let r=t.add(e.multiply(ws.fromNumber(n)));return r.compare(lM)===1&&(r=new ws([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Fm(t),[n,r]=Vm(e);for(let s=0;s<this.hashCount;s++){const o=this.Ee(n,r,s);if(!this.de(o))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new Ef(s,r,e);return n.forEach(a=>o.insert(a)),o}insert(t){if(this.Ie===0)return;const e=Fm(t),[n,r]=Vm(e);for(let s=0;s<this.hashCount;s++){const o=this.Ee(n,r,s);this.Ae(o)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class Ia extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class mu{constructor(t,e,n,r,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,El.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new mu(Zt.min(),r,new Be(ge),hr(),le())}}class El{constructor(t,e,n,r,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new El(n,e,le(),le(),le())}}/**
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
 */class yc{constructor(t,e,n,r){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=r}}class nv{constructor(t,e){this.targetId=t,this.me=e}}class iv{constructor(t,e,n=vn.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class km{constructor(){this.fe=0,this.ge=zm(),this.pe=vn.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=le(),e=le(),n=le();return this.ge.forEach((r,s)=>{switch(s){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:Qt()}}),new El(this.pe,this.ye,t,e,n)}ve(){this.we=!1,this.ge=zm()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,Ee(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class cM{constructor(t){this.Le=t,this.Be=new Map,this.ke=hr(),this.qe=Bm(),this.Qe=new Be(ge)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const n=this.Ge(e);switch(t.state){case 0:this.ze(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.ve(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),n.De(t.resumeToken));break;default:Qt()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((n,r)=>{this.ze(r)&&e(r)})}He(t){const e=t.targetId,n=t.me.count,r=this.Je(e);if(r){const s=r.target;if(jh(s))if(n===0){const o=new Gt(s.path);this.Ue(e,o,An.newNoDocument(o,Zt.min()))}else Ee(n===1);else{const o=this.Ye(e);if(o!==n){const a=this.Ze(t),l=a?this.Xe(a,t,o):1;if(l!==0){this.je(e);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,c)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:s=0}=e;let o,a;try{o=Ls(n).toUint8Array()}catch(l){if(l instanceof P0)return Vo("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Ef(o,r,s)}catch(l){return Vo(l instanceof Ia?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(t,e,n){return e.me.count===n-this.nt(t,e.targetId)?0:2}nt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let r=0;return n.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.Ue(e,s,null),r++)}),r}rt(t){const e=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&jh(a.target)){const l=new Gt(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,An.newNoDocument(l,t))}s.be&&(e.set(o,s.Ce()),s.ve())}});let n=le();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(n=n.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(t));const r=new mu(t,e,this.Qe,this.ke,n);return this.ke=hr(),this.qe=Bm(),this.Qe=new Be(ge),r}$e(t,e){if(!this.ze(t))return;const n=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,n){if(!this.ze(t))return;const r=this.Ge(t);this.it(t,e)?r.Fe(e,1):r.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new km,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new _n(ge),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||Nt("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new km),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Bm(){return new Be(Gt.comparator)}function zm(){return new Be(Gt.comparator)}const uM={asc:"ASCENDING",desc:"DESCENDING"},hM={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},dM={and:"AND",or:"OR"};class fM{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Qh(i,t){return i.useProto3Json||uu(t)?t:{value:t}}function Gc(i,t){return i.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function rv(i,t){return i.useProto3Json?t.toBase64():t.toUint8Array()}function pM(i,t){return Gc(i,t.toTimestamp())}function Fi(i){return Ee(!!i),Zt.fromTimestamp(function(e){const n=Gr(e);return new rn(n.seconds,n.nanos)}(i))}function Sf(i,t){return Jh(i,t).canonicalString()}function Jh(i,t){const e=function(r){return new Re(["projects",r.projectId,"databases",r.database])}(i).child("documents");return t===void 0?e:e.child(t)}function sv(i){const t=Re.fromString(i);return Ee(uv(t)),t}function Zh(i,t){return Sf(i.databaseId,t.path)}function qu(i,t){const e=sv(t);if(e.get(1)!==i.databaseId.projectId)throw new Lt(st.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+i.databaseId.projectId);if(e.get(3)!==i.databaseId.database)throw new Lt(st.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+i.databaseId.database);return new Gt(av(e))}function ov(i,t){return Sf(i.databaseId,t)}function mM(i){const t=sv(i);return t.length===4?Re.emptyPath():av(t)}function td(i){return new Re(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function av(i){return Ee(i.length>4&&i.get(4)==="documents"),i.popFirst(5)}function Hm(i,t,e){return{name:Zh(i,t),fields:e.value.mapValue.fields}}function gM(i,t){let e;if("targetChange"in t){t.targetChange;const n=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Qt()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(Ee(h===void 0||typeof h=="string"),vn.fromBase64String(h||"")):(Ee(h===void 0||h instanceof Buffer||h instanceof Uint8Array),vn.fromUint8Array(h||new Uint8Array))}(i,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const h=c.code===void 0?st.UNKNOWN:ev(c.code);return new Lt(h,c.message||"")}(o);e=new iv(n,r,s,a||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const r=qu(i,n.document.name),s=Fi(n.document.updateTime),o=n.document.createTime?Fi(n.document.createTime):Zt.min(),a=new oi({mapValue:{fields:n.document.fields}}),l=An.newFoundDocument(r,s,o,a),c=n.targetIds||[],h=n.removedTargetIds||[];e=new yc(c,h,l.key,l)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const r=qu(i,n.document),s=n.readTime?Fi(n.readTime):Zt.min(),o=An.newNoDocument(r,s),a=n.removedTargetIds||[];e=new yc([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const r=qu(i,n.document),s=n.removedTargetIds||[];e=new yc([],s,r,null)}else{if(!("filter"in t))return Qt();{t.filter;const n=t.filter;n.targetId;const{count:r=0,unchangedNames:s}=n,o=new sM(r,s),a=n.targetId;e=new nv(a,o)}}return e}function _M(i,t){let e;if(t instanceof xl)e={update:Hm(i,t.key,t.value)};else if(t instanceof tv)e={delete:Zh(i,t.key)};else if(t instanceof zs)e={update:Hm(i,t.key,t.data),updateMask:AM(t.fieldMask)};else{if(!(t instanceof nM))return Qt();e={verify:Zh(i,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(s,o){const a=o.transform;if(a instanceof zc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof tl)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof el)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Hc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Qt()}(0,n))),t.precondition.isNone||(e.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:pM(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Qt()}(i,t.precondition)),e}function vM(i,t){return i&&i.length>0?(Ee(t!==void 0),i.map(e=>function(r,s){let o=r.updateTime?Fi(r.updateTime):Fi(s);return o.isEqual(Zt.min())&&(o=Fi(s)),new Zw(o,r.transformResults||[])}(e,t))):[]}function yM(i,t){return{documents:[ov(i,t.path)]}}function xM(i,t){const e={structuredQuery:{}},n=t.path;let r;t.collectionGroup!==null?(r=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(r=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=ov(i,r);const s=function(c){if(c.length!==0)return cv(Ti.create(c,"and"))}(t.filters);s&&(e.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(f){return{field:Eo(f.field),direction:TM(f.dir)}}(h))}(t.orderBy);o&&(e.structuredQuery.orderBy=o);const a=Qh(i,t.limit);return a!==null&&(e.structuredQuery.limit=a),t.startAt&&(e.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),{_t:e,parent:r}}function EM(i){let t=mM(i.parent);const e=i.structuredQuery,n=e.from?e.from.length:0;let r=null;if(n>0){Ee(n===1);const h=e.from[0];h.allDescendants?r=h.collectionId:t=t.child(h.collectionId)}let s=[];e.where&&(s=function(d){const f=lv(d);return f instanceof Ti&&O0(f)?f.getFilters():[f]}(e.where));let o=[];e.orderBy&&(o=function(d){return d.map(f=>function(y){return new Bc(So(y.field),function(m){switch(m){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(f))}(e.orderBy));let a=null;e.limit&&(a=function(d){let f;return f=typeof d=="object"?d.value:d,uu(f)?null:f}(e.limit));let l=null;e.startAt&&(l=function(d){const f=!!d.before,p=d.values||[];return new kc(p,f)}(e.startAt));let c=null;return e.endAt&&(c=function(d){const f=!d.before,p=d.values||[];return new kc(p,f)}(e.endAt)),Bw(t,r,o,s,a,"F",l,c)}function SM(i,t){const e=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Qt()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function lv(i){return i.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=So(e.unaryFilter.field);return en.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=So(e.unaryFilter.field);return en.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=So(e.unaryFilter.field);return en.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=So(e.unaryFilter.field);return en.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Qt()}}(i):i.fieldFilter!==void 0?function(e){return en.create(So(e.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Qt()}}(e.fieldFilter.op),e.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(e){return Ti.create(e.compositeFilter.filters.map(n=>lv(n)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return Qt()}}(e.compositeFilter.op))}(i):Qt()}function TM(i){return uM[i]}function wM(i){return hM[i]}function MM(i){return dM[i]}function Eo(i){return{fieldPath:i.canonicalString()}}function So(i){return gn.fromServerFormat(i.fieldPath)}function cv(i){return i instanceof en?function(e){if(e.op==="=="){if(Rm(e.value))return{unaryFilter:{field:Eo(e.field),op:"IS_NAN"}};if(bm(e.value))return{unaryFilter:{field:Eo(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Rm(e.value))return{unaryFilter:{field:Eo(e.field),op:"IS_NOT_NAN"}};if(bm(e.value))return{unaryFilter:{field:Eo(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Eo(e.field),op:wM(e.op),value:e.value}}}(i):i instanceof Ti?function(e){const n=e.getFilters().map(r=>cv(r));return n.length===1?n[0]:{compositeFilter:{op:MM(e.op),filters:n}}}(i):Qt()}function AM(i){const t=[];return i.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function uv(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class br{constructor(t,e,n,r,s=Zt.min(),o=Zt.min(),a=vn.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new br(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new br(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class bM{constructor(t){this.ct=t}}function RM(i){const t=EM({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?Kh(t,t.limit,"L"):t}/**
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
 */class CM{constructor(){this.an=new IM}addToCollectionParentIndex(t,e){return this.an.add(e),ut.resolve()}getCollectionParents(t,e){return ut.resolve(this.an.getEntries(e))}addFieldIndex(t,e){return ut.resolve()}deleteFieldIndex(t,e){return ut.resolve()}deleteAllFieldIndexes(t){return ut.resolve()}createTargetIndexes(t,e){return ut.resolve()}getDocumentsMatchingTarget(t,e){return ut.resolve(null)}getIndexType(t,e){return ut.resolve(0)}getFieldIndexes(t,e){return ut.resolve([])}getNextCollectionGroupToUpdate(t){return ut.resolve(null)}getMinOffset(t,e){return ut.resolve(Hr.min())}getMinOffsetFromCollectionGroup(t,e){return ut.resolve(Hr.min())}updateCollectionGroup(t,e,n){return ut.resolve()}updateIndexEntries(t,e){return ut.resolve()}}class IM{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new _n(Re.comparator),s=!r.has(n);return this.index[e]=r.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new _n(Re.comparator)).toArray()}}/**
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
 */class Ho{constructor(t){this.Nn=t}next(){return this.Nn+=2,this.Nn}static Ln(){return new Ho(0)}static Bn(){return new Ho(-1)}}/**
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
 */class PM{constructor(){this.changes=new ra(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,An.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?ut.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class DM{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class LM{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(n=r,this.remoteDocumentCache.getEntry(t,e))).next(r=>(n!==null&&Ba(n.mutation,r,yi.empty(),rn.now()),r))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,le()).next(()=>n))}getLocalViewOfDocuments(t,e,n=le()){const r=vs();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,n).next(s=>{let o=Ca();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const n=vs();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,le()))}populateOverlays(t,e,n){const r=[];return n.forEach(s=>{e.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(t,r).next(s=>{s.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,n,r){let s=hr();const o=ka(),a=function(){return ka()}();return e.forEach((l,c)=>{const h=n.get(c.key);r.has(c.key)&&(h===void 0||h.mutation instanceof zs)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Ba(h.mutation,c,h.mutation.getFieldMask(),rn.now())):o.set(c.key,yi.empty())}),this.recalculateAndSaveOverlays(t,s).next(l=>(l.forEach((c,h)=>o.set(c,h)),e.forEach((c,h)=>{var d;return a.set(c,new DM(h,(d=o.get(c))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(t,e){const n=ka();let r=new Be((o,a)=>o-a),s=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=e.get(l);if(c===null)return;let h=n.get(l)||yi.empty();h=a.applyToLocalView(c,h),n.set(l,h);const d=(r.get(a.batchId)||le()).add(l);r=r.insert(a.batchId,d)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,d=q0();h.forEach(f=>{if(!s.has(f)){const p=J0(e.get(f),n.get(f));p!==null&&d.set(f,p),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,d))}return ut.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,r){return function(o){return Gt.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):B0(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next(s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-s.size):ut.resolve(vs());let a=-1,l=s;return o.next(c=>ut.forEach(c,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(h)?ut.resolve():this.remoteDocumentCache.getEntry(t,h).next(f=>{l=l.insert(h,f)}))).next(()=>this.populateOverlays(t,c,s)).next(()=>this.computeViews(t,l,c,le())).next(h=>({batchId:a,changes:W0(h)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Gt(e)).next(n=>{let r=Ca();return n.isFoundDocument()&&(r=r.insert(n.key,n)),r})}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const s=e.collectionGroup;let o=Ca();return this.indexManager.getCollectionParents(t,s).next(a=>ut.forEach(a,l=>{const c=function(d,f){return new yl(f,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(e,l.child(s));return this.getDocumentsMatchingCollectionQuery(t,c,n,r).next(h=>{h.forEach((d,f)=>{o=o.insert(d,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,s,r))).next(o=>{s.forEach((l,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,An.newInvalidDocument(h)))});let a=Ca();return o.forEach((l,c)=>{const h=s.get(l);h!==void 0&&Ba(h.mutation,c,yi.empty(),rn.now()),du(e,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class NM{constructor(t){this.serializer=t,this.lr=new Map,this.hr=new Map}getBundleMetadata(t,e){return ut.resolve(this.lr.get(e))}saveBundleMetadata(t,e){return this.lr.set(e.id,function(r){return{id:r.id,version:r.version,createTime:Fi(r.createTime)}}(e)),ut.resolve()}getNamedQuery(t,e){return ut.resolve(this.hr.get(e))}saveNamedQuery(t,e){return this.hr.set(e.name,function(r){return{name:r.name,query:RM(r.bundledQuery),readTime:Fi(r.readTime)}}(e)),ut.resolve()}}/**
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
 */class OM{constructor(){this.overlays=new Be(Gt.comparator),this.Pr=new Map}getOverlay(t,e){return ut.resolve(this.overlays.get(e))}getOverlays(t,e){const n=vs();return ut.forEach(e,r=>this.getOverlay(t,r).next(s=>{s!==null&&n.set(r,s)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((r,s)=>{this.ht(t,e,s)}),ut.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Pr.get(n);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(n)),ut.resolve()}getOverlaysForCollection(t,e,n){const r=vs(),s=e.length+1,o=new Gt(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!e.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>n&&r.set(l.getKey(),l)}return ut.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let s=new Be((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===e&&c.largestBatchId>n){let h=s.get(c.largestBatchId);h===null&&(h=vs(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=vs(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=r)););return ut.resolve(a)}ht(t,e,n){const r=this.overlays.get(n.key);if(r!==null){const o=this.Pr.get(r.largestBatchId).delete(n.key);this.Pr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new rM(e,n));let s=this.Pr.get(e);s===void 0&&(s=le(),this.Pr.set(e,s)),this.Pr.set(e,s.add(n.key))}}/**
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
 */class UM{constructor(){this.sessionToken=vn.EMPTY_BYTE_STRING}getSessionToken(t){return ut.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,ut.resolve()}}/**
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
 */class Tf{constructor(){this.Ir=new _n(cn.Tr),this.Er=new _n(cn.dr)}isEmpty(){return this.Ir.isEmpty()}addReference(t,e){const n=new cn(t,e);this.Ir=this.Ir.add(n),this.Er=this.Er.add(n)}Ar(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Rr(new cn(t,e))}Vr(t,e){t.forEach(n=>this.removeReference(n,e))}mr(t){const e=new Gt(new Re([])),n=new cn(e,t),r=new cn(e,t+1),s=[];return this.Er.forEachInRange([n,r],o=>{this.Rr(o),s.push(o.key)}),s}gr(){this.Ir.forEach(t=>this.Rr(t))}Rr(t){this.Ir=this.Ir.delete(t),this.Er=this.Er.delete(t)}pr(t){const e=new Gt(new Re([])),n=new cn(e,t),r=new cn(e,t+1);let s=le();return this.Er.forEachInRange([n,r],o=>{s=s.add(o.key)}),s}containsKey(t){const e=new cn(t,0),n=this.Ir.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class cn{constructor(t,e){this.key=t,this.yr=e}static Tr(t,e){return Gt.comparator(t.key,e.key)||ge(t.yr,e.yr)}static dr(t,e){return ge(t.yr,e.yr)||Gt.comparator(t.key,e.key)}}/**
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
 */class FM{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.wr=1,this.Sr=new _n(cn.Tr)}checkEmpty(t){return ut.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,r){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new iM(s,e,n,r);this.mutationQueue.push(o);for(const a of r)this.Sr=this.Sr.add(new cn(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return ut.resolve(o)}lookupMutationBatch(t,e){return ut.resolve(this.br(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Dr(n),s=r<0?0:r;return ut.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return ut.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(t){return ut.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new cn(e,0),r=new cn(e,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([n,r],o=>{const a=this.br(o.yr);s.push(a)}),ut.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new _n(ge);return e.forEach(r=>{const s=new cn(r,0),o=new cn(r,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,o],a=>{n=n.add(a.yr)})}),ut.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let s=n;Gt.isDocumentKey(s)||(s=s.child(""));const o=new cn(new Gt(s),0);let a=new _n(ge);return this.Sr.forEachWhile(l=>{const c=l.key.path;return!!n.isPrefixOf(c)&&(c.length===r&&(a=a.add(l.yr)),!0)},o),ut.resolve(this.Cr(a))}Cr(t){const e=[];return t.forEach(n=>{const r=this.br(n);r!==null&&e.push(r)}),e}removeMutationBatch(t,e){Ee(this.vr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.Sr;return ut.forEach(e.mutations,r=>{const s=new cn(r.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.Sr=n})}xn(t){}containsKey(t,e){const n=new cn(e,0),r=this.Sr.firstAfterOrEqual(n);return ut.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,ut.resolve()}vr(t,e){return this.Dr(t)}Dr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}br(t){const e=this.Dr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class VM{constructor(t){this.Fr=t,this.docs=function(){return new Be(Gt.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),s=r?r.size:0,o=this.Fr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return ut.resolve(n?n.document.mutableCopy():An.newInvalidDocument(e))}getEntries(t,e){let n=hr();return e.forEach(r=>{const s=this.docs.get(r);n=n.insert(r,s?s.document.mutableCopy():An.newInvalidDocument(r))}),ut.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let s=hr();const o=e.path,a=new Gt(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:h}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Sw(Ew(h),n)<=0||(r.has(h.key)||du(e,h))&&(s=s.insert(h.key,h.mutableCopy()))}return ut.resolve(s)}getAllFromCollectionGroup(t,e,n,r){Qt()}Mr(t,e){return ut.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new kM(this)}getSize(t){return ut.resolve(this.size)}}class kM extends PM{constructor(t){super(),this.ur=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?e.push(this.ur.addEntry(t,r)):this.ur.removeEntry(n)}),ut.waitFor(e)}getFromCache(t,e){return this.ur.getEntry(t,e)}getAllFromCache(t,e){return this.ur.getEntries(t,e)}}/**
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
 */class BM{constructor(t){this.persistence=t,this.Or=new ra(e=>vf(e),yf),this.lastRemoteSnapshotVersion=Zt.min(),this.highestTargetId=0,this.Nr=0,this.Lr=new Tf,this.targetCount=0,this.Br=Ho.Ln()}forEachTarget(t,e){return this.Or.forEach((n,r)=>e(r)),ut.resolve()}getLastRemoteSnapshotVersion(t){return ut.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return ut.resolve(this.Nr)}allocateTargetId(t){return this.highestTargetId=this.Br.next(),ut.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Nr&&(this.Nr=e),ut.resolve()}Qn(t){this.Or.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Br=new Ho(e),this.highestTargetId=e),t.sequenceNumber>this.Nr&&(this.Nr=t.sequenceNumber)}addTargetData(t,e){return this.Qn(e),this.targetCount+=1,ut.resolve()}updateTargetData(t,e){return this.Qn(e),ut.resolve()}removeTargetData(t,e){return this.Or.delete(e.target),this.Lr.mr(e.targetId),this.targetCount-=1,ut.resolve()}removeTargets(t,e,n){let r=0;const s=[];return this.Or.forEach((o,a)=>{a.sequenceNumber<=e&&n.get(a.targetId)===null&&(this.Or.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),ut.waitFor(s).next(()=>r)}getTargetCount(t){return ut.resolve(this.targetCount)}getTargetData(t,e){const n=this.Or.get(e)||null;return ut.resolve(n)}addMatchingKeys(t,e,n){return this.Lr.Ar(e,n),ut.resolve()}removeMatchingKeys(t,e,n){this.Lr.Vr(e,n);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach(o=>{s.push(r.markPotentiallyOrphaned(t,o))}),ut.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Lr.mr(e),ut.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Lr.pr(e);return ut.resolve(n)}containsKey(t,e){return ut.resolve(this.Lr.containsKey(e))}}/**
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
 */class zM{constructor(t,e){this.kr={},this.overlays={},this.qr=new pf(0),this.Qr=!1,this.Qr=!0,this.Kr=new UM,this.referenceDelegate=t(this),this.$r=new BM(this),this.indexManager=new CM,this.remoteDocumentCache=function(r){return new VM(r)}(n=>this.referenceDelegate.Ur(n)),this.serializer=new bM(e),this.Wr=new NM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new OM,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.kr[t.toKey()];return n||(n=new FM(e,this.referenceDelegate),this.kr[t.toKey()]=n),n}getGlobalsCache(){return this.Kr}getTargetCache(){return this.$r}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Wr}runTransaction(t,e,n){Nt("MemoryPersistence","Starting transaction:",t);const r=new HM(this.qr.next());return this.referenceDelegate.Gr(),n(r).next(s=>this.referenceDelegate.zr(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}jr(t,e){return ut.or(Object.values(this.kr).map(n=>()=>n.containsKey(t,e)))}}class HM extends ww{constructor(t){super(),this.currentSequenceNumber=t}}class wf{constructor(t){this.persistence=t,this.Hr=new Tf,this.Jr=null}static Yr(t){return new wf(t)}get Zr(){if(this.Jr)return this.Jr;throw Qt()}addReference(t,e,n){return this.Hr.addReference(n,e),this.Zr.delete(n.toString()),ut.resolve()}removeReference(t,e,n){return this.Hr.removeReference(n,e),this.Zr.add(n.toString()),ut.resolve()}markPotentiallyOrphaned(t,e){return this.Zr.add(e.toString()),ut.resolve()}removeTarget(t,e){this.Hr.mr(e.targetId).forEach(r=>this.Zr.add(r.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(r=>{r.forEach(s=>this.Zr.add(s.toString()))}).next(()=>n.removeTargetData(t,e))}Gr(){this.Jr=new Set}zr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ut.forEach(this.Zr,n=>{const r=Gt.fromPath(n);return this.Xr(t,r).next(s=>{s||e.removeEntry(r,Zt.min())})}).next(()=>(this.Jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Xr(t,e).next(n=>{n?this.Zr.delete(e.toString()):this.Zr.add(e.toString())})}Ur(t){return 0}Xr(t,e){return ut.or([()=>ut.resolve(this.Hr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.jr(t,e)])}}/**
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
 */class Mf{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Ki=n,this.$i=r}static Ui(t,e){let n=le(),r=le();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Mf(t,e.fromCache,n,r)}}/**
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
 */class GM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class WM{constructor(){this.Wi=!1,this.Gi=!1,this.zi=100,this.ji=function(){return CE()?8:Mw(AE())>0?6:4}()}initialize(t,e){this.Hi=t,this.indexManager=e,this.Wi=!0}getDocumentsMatchingQuery(t,e,n,r){const s={result:null};return this.Ji(t,e).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Yi(t,e,r,n).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new GM;return this.Zi(t,e,o).next(a=>{if(s.result=a,this.Gi)return this.Xi(t,e,o,a.size)})}).next(()=>s.result)}Xi(t,e,n,r){return n.documentReadCount<this.zi?(Ea()<=pe.DEBUG&&Nt("QueryEngine","SDK will not create cache indexes for query:",xo(e),"since it only creates cache indexes for collection contains","more than or equal to",this.zi,"documents"),ut.resolve()):(Ea()<=pe.DEBUG&&Nt("QueryEngine","Query:",xo(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ji*r?(Ea()<=pe.DEBUG&&Nt("QueryEngine","The SDK decides to create cache indexes for query:",xo(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ui(e))):ut.resolve())}Ji(t,e){if(Dm(e))return ut.resolve(null);let n=Ui(e);return this.indexManager.getIndexType(t,n).next(r=>r===0?null:(e.limit!==null&&r===1&&(e=Kh(e,null,"F"),n=Ui(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(s=>{const o=le(...s);return this.Hi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,n).next(l=>{const c=this.es(e,a);return this.ts(e,c,o,l.readTime)?this.Ji(t,Kh(e,null,"F")):this.ns(t,c,e,l)}))})))}Yi(t,e,n,r){return Dm(e)||r.isEqual(Zt.min())?ut.resolve(null):this.Hi.getDocuments(t,n).next(s=>{const o=this.es(e,s);return this.ts(e,o,n,r)?ut.resolve(null):(Ea()<=pe.DEBUG&&Nt("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),xo(e)),this.ns(t,o,e,xw(r,-1)).next(a=>a))})}es(t,e){let n=new _n(H0(t));return e.forEach((r,s)=>{du(t,s)&&(n=n.add(s))}),n}ts(t,e,n,r){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Zi(t,e,n){return Ea()<=pe.DEBUG&&Nt("QueryEngine","Using full collection scan to execute query:",xo(e)),this.Hi.getDocumentsMatchingQuery(t,e,Hr.min(),n)}ns(t,e,n,r){return this.Hi.getDocumentsMatchingQuery(t,n,r).next(s=>(e.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class qM{constructor(t,e,n,r){this.persistence=t,this.rs=e,this.serializer=r,this.ss=new Be(ge),this.os=new ra(s=>vf(s),yf),this._s=new Map,this.us=t.getRemoteDocumentCache(),this.$r=t.getTargetCache(),this.Wr=t.getBundleCache(),this.cs(n)}cs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new LM(this.us,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.us.setIndexManager(this.indexManager),this.rs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ss))}}function $M(i,t,e,n){return new qM(i,t,e,n)}async function hv(i,t){const e=te(i);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(s=>(r=s,e.cs(t),e.mutationQueue.getAllMutationBatches(n))).next(s=>{const o=[],a=[];let l=le();for(const c of r){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return e.localDocuments.getDocuments(n,l).next(c=>({ls:c,removedBatchIds:o,addedBatchIds:a}))})})}function XM(i,t){const e=te(i);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const r=t.batch.keys(),s=e.us.newChangeBuffer({trackRemovals:!0});return function(a,l,c,h){const d=c.batch,f=d.keys();let p=ut.resolve();return f.forEach(y=>{p=p.next(()=>h.getEntry(l,y)).next(_=>{const m=c.docVersions.get(y);Ee(m!==null),_.version.compareTo(m)<0&&(d.applyToRemoteDocument(_,c),_.isValidDocument()&&(_.setReadTime(c.commitVersion),h.addEntry(_)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(e,n,t,s).next(()=>s.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,r,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(a){let l=le();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(t))).next(()=>e.localDocuments.getDocuments(n,r))})}function dv(i){const t=te(i);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.$r.getLastRemoteSnapshotVersion(e))}function jM(i,t){const e=te(i),n=t.snapshotVersion;let r=e.ss;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=e.us.newChangeBuffer({trackRemovals:!0});r=e.ss;const a=[];t.targetChanges.forEach((h,d)=>{const f=r.get(d);if(!f)return;a.push(e.$r.removeMatchingKeys(s,h.removedDocuments,d).next(()=>e.$r.addMatchingKeys(s,h.addedDocuments,d)));let p=f.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(d)!==null?p=p.withResumeToken(vn.EMPTY_BYTE_STRING,Zt.min()).withLastLimboFreeSnapshotVersion(Zt.min()):h.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(h.resumeToken,n)),r=r.insert(d,p),function(_,m,g){return _.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(f,p,h)&&a.push(e.$r.updateTargetData(s,p))});let l=hr(),c=le();if(t.documentUpdates.forEach(h=>{t.resolvedLimboDocuments.has(h)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(YM(s,o,t.documentUpdates).next(h=>{l=h.hs,c=h.Ps})),!n.isEqual(Zt.min())){const h=e.$r.getLastRemoteSnapshotVersion(s).next(d=>e.$r.setTargetsMetadata(s,s.currentSequenceNumber,n));a.push(h)}return ut.waitFor(a).next(()=>o.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(e.ss=r,s))}function YM(i,t,e){let n=le(),r=le();return e.forEach(s=>n=n.add(s)),t.getEntries(i,n).next(s=>{let o=hr();return e.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(a)),l.isNoDocument()&&l.version.isEqual(Zt.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):Nt("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{hs:o,Ps:r}})}function KM(i,t){const e=te(i);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function QM(i,t){const e=te(i);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let r;return e.$r.getTargetData(n,t).next(s=>s?(r=s,ut.resolve(r)):e.$r.allocateTargetId(n).next(o=>(r=new br(t,o,"TargetPurposeListen",n.currentSequenceNumber),e.$r.addTargetData(n,r).next(()=>r))))}).then(n=>{const r=e.ss.get(n.targetId);return(r===null||n.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(e.ss=e.ss.insert(n.targetId,n),e.os.set(t,n.targetId)),n})}async function ed(i,t,e){const n=te(i),r=n.ss.get(t),s=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",s,o=>n.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!vl(o))throw o;Nt("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}n.ss=n.ss.remove(t),n.os.delete(r.target)}function Gm(i,t,e){const n=te(i);let r=Zt.min(),s=le();return n.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,h){const d=te(l),f=d.os.get(h);return f!==void 0?ut.resolve(d.ss.get(f)):d.$r.getTargetData(c,h)}(n,o,Ui(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,n.$r.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>n.rs.getDocumentsMatchingQuery(o,t,e?r:Zt.min(),e?s:le())).next(a=>(JM(n,Hw(t),a),{documents:a,Is:s})))}function JM(i,t,e){let n=i._s.get(t)||Zt.min();e.forEach((r,s)=>{s.readTime.compareTo(n)>0&&(n=s.readTime)}),i._s.set(t,n)}class Wm{constructor(){this.activeTargetIds=jw()}Vs(t){this.activeTargetIds=this.activeTargetIds.add(t)}fs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Rs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class ZM{constructor(){this.io=new Wm,this.so={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.io.Vs(t),this.so[t]||"not-current"}updateQueryState(t,e,n){this.so[t]=e}removeLocalQueryTarget(t){this.io.fs(t)}isLocalQueryTarget(t){return this.io.activeTargetIds.has(t)}clearQueryState(t){delete this.so[t]}getAllActiveQueryTargets(){return this.io.activeTargetIds}isActiveQueryTarget(t){return this.io.activeTargetIds.has(t)}start(){return this.io=new Wm,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class tA{oo(t){}shutdown(){}}/**
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
 */class qm{constructor(){this._o=()=>this.ao(),this.uo=()=>this.co(),this.lo=[],this.ho()}oo(t){this.lo.push(t)}shutdown(){window.removeEventListener("online",this._o),window.removeEventListener("offline",this.uo)}ho(){window.addEventListener("online",this._o),window.addEventListener("offline",this.uo)}ao(){Nt("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.lo)t(0)}co(){Nt("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.lo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let zl=null;function $u(){return zl===null?zl=function(){return 268435456+Math.round(2147483648*Math.random())}():zl++,"0x"+zl.toString(16)}/**
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
 */const eA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class nA{constructor(t){this.Po=t.Po,this.Io=t.Io}To(t){this.Eo=t}Ao(t){this.Ro=t}Vo(t){this.mo=t}onMessage(t){this.fo=t}close(){this.Io()}send(t){this.Po(t)}po(){this.Eo()}yo(){this.Ro()}wo(t){this.mo(t)}So(t){this.fo(t)}}/**
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
 */const Sn="WebChannelConnection";class iA extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.bo=n+"://"+e.host,this.Do=`projects/${r}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${s}`}get vo(){return!1}Fo(e,n,r,s,o){const a=$u(),l=this.Mo(e,n.toUriEncodedString());Nt("RestConnection",`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Do,"x-goog-request-params":this.Co};return this.xo(c,s,o),this.Oo(e,l,c,r).then(h=>(Nt("RestConnection",`Received RPC '${e}' ${a}: `,h),h),h=>{throw Vo("RestConnection",`RPC '${e}' ${a} failed with error: `,h,"url: ",l,"request:",r),h})}No(e,n,r,s,o,a){return this.Fo(e,n,r,s,o)}xo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+na}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,o)=>e[o]=s),r&&r.headers.forEach((s,o)=>e[o]=s)}Mo(e,n){const r=eA[e];return`${this.bo}/v1/${n}:${r}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Oo(t,e,n,r){const s=$u();return new Promise((o,a)=>{const l=new S0;l.setWithCredentials(!0),l.listenOnce(w0.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case gc.NO_ERROR:const h=l.getResponseJson();Nt(Sn,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(h)),o(h);break;case gc.TIMEOUT:Nt(Sn,`RPC '${t}' ${s} timed out`),a(new Lt(st.DEADLINE_EXCEEDED,"Request time out"));break;case gc.HTTP_ERROR:const d=l.getStatus();if(Nt(Sn,`RPC '${t}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const p=f==null?void 0:f.error;if(p&&p.status&&p.message){const y=function(m){const g=m.toLowerCase().replace(/_/g,"-");return Object.values(st).indexOf(g)>=0?g:st.UNKNOWN}(p.status);a(new Lt(y,p.message))}else a(new Lt(st.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new Lt(st.UNAVAILABLE,"Connection failed."));break;default:Qt()}}finally{Nt(Sn,`RPC '${t}' ${s} completed.`)}});const c=JSON.stringify(r);Nt(Sn,`RPC '${t}' ${s} sending request:`,r),l.send(e,"POST",c,n,15)})}Lo(t,e,n){const r=$u(),s=[this.bo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=b0(),a=A0(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new T0({})),this.xo(l.initMessageHeaders,e,n),l.encodeInitMessageHeaders=!0;const h=s.join("");Nt(Sn,`Creating RPC '${t}' stream ${r}: ${h}`,l);const d=o.createWebChannel(h,l);let f=!1,p=!1;const y=new nA({Po:m=>{p?Nt(Sn,`Not sending because RPC '${t}' stream ${r} is closed:`,m):(f||(Nt(Sn,`Opening RPC '${t}' stream ${r} transport.`),d.open(),f=!0),Nt(Sn,`RPC '${t}' stream ${r} sending:`,m),d.send(m))},Io:()=>d.close()}),_=(m,g,A)=>{m.listen(g,M=>{try{A(M)}catch(R){setTimeout(()=>{throw R},0)}})};return _(d,Ra.EventType.OPEN,()=>{p||(Nt(Sn,`RPC '${t}' stream ${r} transport opened.`),y.po())}),_(d,Ra.EventType.CLOSE,()=>{p||(p=!0,Nt(Sn,`RPC '${t}' stream ${r} transport closed`),y.wo())}),_(d,Ra.EventType.ERROR,m=>{p||(p=!0,Vo(Sn,`RPC '${t}' stream ${r} transport errored:`,m),y.wo(new Lt(st.UNAVAILABLE,"The operation could not be completed")))}),_(d,Ra.EventType.MESSAGE,m=>{var g;if(!p){const A=m.data[0];Ee(!!A);const M=A,R=M.error||((g=M[0])===null||g===void 0?void 0:g.error);if(R){Nt(Sn,`RPC '${t}' stream ${r} received error:`,R);const F=R.status;let D=function(x){const E=Ke[x];if(E!==void 0)return ev(E)}(F),S=R.message;D===void 0&&(D=st.INTERNAL,S="Unknown error status: "+F+" with message "+R.message),p=!0,y.wo(new Lt(D,S)),d.close()}else Nt(Sn,`RPC '${t}' stream ${r} received:`,A),y.So(A)}}),_(a,M0.STAT_EVENT,m=>{m.stat===Wh.PROXY?Nt(Sn,`RPC '${t}' stream ${r} detected buffering proxy`):m.stat===Wh.NOPROXY&&Nt(Sn,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{y.yo()},0),y}}function Xu(){return typeof document<"u"?document:null}/**
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
 */function gu(i){return new fM(i,!0)}/**
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
 */class fv{constructor(t,e,n=1e3,r=1.5,s=6e4){this.ai=t,this.timerId=e,this.Bo=n,this.ko=r,this.qo=s,this.Qo=0,this.Ko=null,this.$o=Date.now(),this.reset()}reset(){this.Qo=0}Uo(){this.Qo=this.qo}Wo(t){this.cancel();const e=Math.floor(this.Qo+this.Go()),n=Math.max(0,Date.now()-this.$o),r=Math.max(0,e-n);r>0&&Nt("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Qo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Ko=this.ai.enqueueAfterDelay(this.timerId,r,()=>(this.$o=Date.now(),t())),this.Qo*=this.ko,this.Qo<this.Bo&&(this.Qo=this.Bo),this.Qo>this.qo&&(this.Qo=this.qo)}zo(){this.Ko!==null&&(this.Ko.skipDelay(),this.Ko=null)}cancel(){this.Ko!==null&&(this.Ko.cancel(),this.Ko=null)}Go(){return(Math.random()-.5)*this.Qo}}/**
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
 */class pv{constructor(t,e,n,r,s,o,a,l){this.ai=t,this.jo=n,this.Ho=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Jo=0,this.Yo=null,this.Zo=null,this.stream=null,this.Xo=0,this.e_=new fv(t,e)}t_(){return this.state===1||this.state===5||this.n_()}n_(){return this.state===2||this.state===3}start(){this.Xo=0,this.state!==4?this.auth():this.r_()}async stop(){this.t_()&&await this.close(0)}i_(){this.state=0,this.e_.reset()}s_(){this.n_()&&this.Yo===null&&(this.Yo=this.ai.enqueueAfterDelay(this.jo,6e4,()=>this.o_()))}__(t){this.a_(),this.stream.send(t)}async o_(){if(this.n_())return this.close(0)}a_(){this.Yo&&(this.Yo.cancel(),this.Yo=null)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}async close(t,e){this.a_(),this.u_(),this.e_.cancel(),this.Jo++,t!==4?this.e_.reset():e&&e.code===st.RESOURCE_EXHAUSTED?(ur(e.toString()),ur("Using maximum backoff delay to prevent overloading the backend."),this.e_.Uo()):e&&e.code===st.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.c_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Vo(e)}c_(){}auth(){this.state=1;const t=this.l_(this.Jo),e=this.Jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,r])=>{this.Jo===e&&this.h_(n,r)},n=>{t(()=>{const r=new Lt(st.UNKNOWN,"Fetching auth token failed: "+n.message);return this.P_(r)})})}h_(t,e){const n=this.l_(this.Jo);this.stream=this.I_(t,e),this.stream.To(()=>{n(()=>this.listener.To())}),this.stream.Ao(()=>{n(()=>(this.state=2,this.Zo=this.ai.enqueueAfterDelay(this.Ho,1e4,()=>(this.n_()&&(this.state=3),Promise.resolve())),this.listener.Ao()))}),this.stream.Vo(r=>{n(()=>this.P_(r))}),this.stream.onMessage(r=>{n(()=>++this.Xo==1?this.T_(r):this.onNext(r))})}r_(){this.state=5,this.e_.Wo(async()=>{this.state=0,this.start()})}P_(t){return Nt("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}l_(t){return e=>{this.ai.enqueueAndForget(()=>this.Jo===t?e():(Nt("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rA extends pv{constructor(t,e,n,r,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,o),this.serializer=s}I_(t,e){return this.connection.Lo("Listen",t,e)}T_(t){return this.onNext(t)}onNext(t){this.e_.reset();const e=gM(this.serializer,t),n=function(s){if(!("targetChange"in s))return Zt.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Zt.min():o.readTime?Fi(o.readTime):Zt.min()}(t);return this.listener.E_(e,n)}d_(t){const e={};e.database=td(this.serializer),e.addTarget=function(s,o){let a;const l=o.target;if(a=jh(l)?{documents:yM(s,l)}:{query:xM(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=rv(s,o.resumeToken);const c=Qh(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(Zt.min())>0){a.readTime=Gc(s,o.snapshotVersion.toTimestamp());const c=Qh(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,t);const n=SM(this.serializer,t);n&&(e.labels=n),this.__(e)}A_(t){const e={};e.database=td(this.serializer),e.removeTarget=t,this.__(e)}}class sA extends pv{constructor(t,e,n,r,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,o),this.serializer=s}get R_(){return this.Xo>0}start(){this.lastStreamToken=void 0,super.start()}c_(){this.R_&&this.V_([])}I_(t,e){return this.connection.Lo("Write",t,e)}T_(t){return Ee(!!t.streamToken),this.lastStreamToken=t.streamToken,Ee(!t.writeResults||t.writeResults.length===0),this.listener.m_()}onNext(t){Ee(!!t.streamToken),this.lastStreamToken=t.streamToken,this.e_.reset();const e=vM(t.writeResults,t.commitTime),n=Fi(t.commitTime);return this.listener.f_(n,e)}g_(){const t={};t.database=td(this.serializer),this.__(t)}V_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>_M(this.serializer,n))};this.__(e)}}/**
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
 */class oA extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.p_=!1}y_(){if(this.p_)throw new Lt(st.FAILED_PRECONDITION,"The client has already been terminated.")}Fo(t,e,n,r){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Fo(t,Jh(e,n),r,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===st.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Lt(st.UNKNOWN,s.toString())})}No(t,e,n,r,s){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.No(t,Jh(e,n),r,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===st.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Lt(st.UNKNOWN,o.toString())})}terminate(){this.p_=!0,this.connection.terminate()}}class aA{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.w_=0,this.S_=null,this.b_=!0}D_(){this.w_===0&&(this.C_("Unknown"),this.S_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.S_=null,this.v_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}F_(t){this.state==="Online"?this.C_("Unknown"):(this.w_++,this.w_>=1&&(this.M_(),this.v_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.M_(),this.w_=0,t==="Online"&&(this.b_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}v_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.b_?(ur(e),this.b_=!1):Nt("OnlineStateTracker",e)}M_(){this.S_!==null&&(this.S_.cancel(),this.S_=null)}}/**
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
 */class lA{constructor(t,e,n,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.x_=[],this.O_=new Map,this.N_=new Set,this.L_=[],this.B_=s,this.B_.oo(o=>{n.enqueueAndForget(async()=>{Hs(this)&&(Nt("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=te(l);c.N_.add(4),await Sl(c),c.k_.set("Unknown"),c.N_.delete(4),await _u(c)}(this))})}),this.k_=new aA(n,r)}}async function _u(i){if(Hs(i))for(const t of i.L_)await t(!0)}async function Sl(i){for(const t of i.L_)await t(!1)}function mv(i,t){const e=te(i);e.O_.has(t.targetId)||(e.O_.set(t.targetId,t),Cf(e)?Rf(e):sa(e).n_()&&bf(e,t))}function Af(i,t){const e=te(i),n=sa(e);e.O_.delete(t),n.n_()&&gv(e,t),e.O_.size===0&&(n.n_()?n.s_():Hs(e)&&e.k_.set("Unknown"))}function bf(i,t){if(i.q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Zt.min())>0){const e=i.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}sa(i).d_(t)}function gv(i,t){i.q_.xe(t),sa(i).A_(t)}function Rf(i){i.q_=new cM({getRemoteKeysForTarget:t=>i.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>i.O_.get(t)||null,tt:()=>i.datastore.serializer.databaseId}),sa(i).start(),i.k_.D_()}function Cf(i){return Hs(i)&&!sa(i).t_()&&i.O_.size>0}function Hs(i){return te(i).N_.size===0}function _v(i){i.q_=void 0}async function cA(i){i.k_.set("Online")}async function uA(i){i.O_.forEach((t,e)=>{bf(i,t)})}async function hA(i,t){_v(i),Cf(i)?(i.k_.F_(t),Rf(i)):i.k_.set("Unknown")}async function dA(i,t,e){if(i.k_.set("Online"),t instanceof iv&&t.state===2&&t.cause)try{await async function(r,s){const o=s.cause;for(const a of s.targetIds)r.O_.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.O_.delete(a),r.q_.removeTarget(a))}(i,t)}catch(n){Nt("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Wc(i,n)}else if(t instanceof yc?i.q_.Ke(t):t instanceof nv?i.q_.He(t):i.q_.We(t),!e.isEqual(Zt.min()))try{const n=await dv(i.localStore);e.compareTo(n)>=0&&await function(s,o){const a=s.q_.rt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.O_.get(c);h&&s.O_.set(c,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const h=s.O_.get(l);if(!h)return;s.O_.set(l,h.withResumeToken(vn.EMPTY_BYTE_STRING,h.snapshotVersion)),gv(s,l);const d=new br(h.target,l,c,h.sequenceNumber);bf(s,d)}),s.remoteSyncer.applyRemoteEvent(a)}(i,e)}catch(n){Nt("RemoteStore","Failed to raise snapshot:",n),await Wc(i,n)}}async function Wc(i,t,e){if(!vl(t))throw t;i.N_.add(1),await Sl(i),i.k_.set("Offline"),e||(e=()=>dv(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{Nt("RemoteStore","Retrying IndexedDB access"),await e(),i.N_.delete(1),await _u(i)})}function vv(i,t){return t().catch(e=>Wc(i,e,t))}async function vu(i){const t=te(i),e=Wr(t);let n=t.x_.length>0?t.x_[t.x_.length-1].batchId:-1;for(;fA(t);)try{const r=await KM(t.localStore,n);if(r===null){t.x_.length===0&&e.s_();break}n=r.batchId,pA(t,r)}catch(r){await Wc(t,r)}yv(t)&&xv(t)}function fA(i){return Hs(i)&&i.x_.length<10}function pA(i,t){i.x_.push(t);const e=Wr(i);e.n_()&&e.R_&&e.V_(t.mutations)}function yv(i){return Hs(i)&&!Wr(i).t_()&&i.x_.length>0}function xv(i){Wr(i).start()}async function mA(i){Wr(i).g_()}async function gA(i){const t=Wr(i);for(const e of i.x_)t.V_(e.mutations)}async function _A(i,t,e){const n=i.x_.shift(),r=xf.from(n,t,e);await vv(i,()=>i.remoteSyncer.applySuccessfulWrite(r)),await vu(i)}async function vA(i,t){t&&Wr(i).R_&&await async function(n,r){if(function(o){return oM(o)&&o!==st.ABORTED}(r.code)){const s=n.x_.shift();Wr(n).i_(),await vv(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await vu(n)}}(i,t),yv(i)&&xv(i)}async function $m(i,t){const e=te(i);e.asyncQueue.verifyOperationInProgress(),Nt("RemoteStore","RemoteStore received new credentials");const n=Hs(e);e.N_.add(3),await Sl(e),n&&e.k_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.N_.delete(3),await _u(e)}async function yA(i,t){const e=te(i);t?(e.N_.delete(2),await _u(e)):t||(e.N_.add(2),await Sl(e),e.k_.set("Unknown"))}function sa(i){return i.Q_||(i.Q_=function(e,n,r){const s=te(e);return s.y_(),new rA(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(i.datastore,i.asyncQueue,{To:cA.bind(null,i),Ao:uA.bind(null,i),Vo:hA.bind(null,i),E_:dA.bind(null,i)}),i.L_.push(async t=>{t?(i.Q_.i_(),Cf(i)?Rf(i):i.k_.set("Unknown")):(await i.Q_.stop(),_v(i))})),i.Q_}function Wr(i){return i.K_||(i.K_=function(e,n,r){const s=te(e);return s.y_(),new sA(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(i.datastore,i.asyncQueue,{To:()=>Promise.resolve(),Ao:mA.bind(null,i),Vo:vA.bind(null,i),m_:gA.bind(null,i),f_:_A.bind(null,i)}),i.L_.push(async t=>{t?(i.K_.i_(),await vu(i)):(await i.K_.stop(),i.x_.length>0&&(Nt("RemoteStore",`Stopping write stream with ${i.x_.length} pending writes`),i.x_=[]))})),i.K_}/**
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
 */class If{constructor(t,e,n,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new Nr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,s){const o=Date.now()+n,a=new If(t,e,o,r,s);return a.start(n),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Lt(st.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Pf(i,t){if(ur("AsyncQueue",`${t}: ${i}`),vl(i))return new Lt(st.UNAVAILABLE,`${t}: ${i}`);throw i}/**
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
 */class Io{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Gt.comparator(e.key,n.key):(e,n)=>Gt.comparator(e.key,n.key),this.keyedMap=Ca(),this.sortedSet=new Be(this.comparator)}static emptySet(t){return new Io(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Io)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const r=e.getNext().key,s=n.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new Io;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
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
 */class Xm{constructor(){this.U_=new Be(Gt.comparator)}track(t){const e=t.doc.key,n=this.U_.get(e);n?t.type!==0&&n.type===3?this.U_=this.U_.insert(e,t):t.type===3&&n.type!==1?this.U_=this.U_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.U_=this.U_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.U_=this.U_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.U_=this.U_.remove(e):t.type===1&&n.type===2?this.U_=this.U_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.U_=this.U_.insert(e,{type:2,doc:t.doc}):Qt():this.U_=this.U_.insert(e,t)}W_(){const t=[];return this.U_.inorderTraversal((e,n)=>{t.push(n)}),t}}class Go{constructor(t,e,n,r,s,o,a,l,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,s){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new Go(t,e,Io.emptySet(e),o,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&hu(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}/**
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
 */class xA{constructor(){this.G_=void 0,this.z_=[]}j_(){return this.z_.some(t=>t.H_())}}class EA{constructor(){this.queries=jm(),this.onlineState="Unknown",this.J_=new Set}terminate(){(function(e,n){const r=te(e),s=r.queries;r.queries=jm(),s.forEach((o,a)=>{for(const l of a.z_)l.onError(n)})})(this,new Lt(st.ABORTED,"Firestore shutting down"))}}function jm(){return new ra(i=>z0(i),hu)}async function SA(i,t){const e=te(i);let n=3;const r=t.query;let s=e.queries.get(r);s?!s.j_()&&t.H_()&&(n=2):(s=new xA,n=t.H_()?0:1);try{switch(n){case 0:s.G_=await e.onListen(r,!0);break;case 1:s.G_=await e.onListen(r,!1);break;case 2:await e.onFirstRemoteStoreListen(r)}}catch(o){const a=Pf(o,`Initialization of query '${xo(t.query)}' failed`);return void t.onError(a)}e.queries.set(r,s),s.z_.push(t),t.Y_(e.onlineState),s.G_&&t.Z_(s.G_)&&Df(e)}async function TA(i,t){const e=te(i),n=t.query;let r=3;const s=e.queries.get(n);if(s){const o=s.z_.indexOf(t);o>=0&&(s.z_.splice(o,1),s.z_.length===0?r=t.H_()?0:1:!s.j_()&&t.H_()&&(r=2))}switch(r){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function wA(i,t){const e=te(i);let n=!1;for(const r of t){const s=r.query,o=e.queries.get(s);if(o){for(const a of o.z_)a.Z_(r)&&(n=!0);o.G_=r}}n&&Df(e)}function MA(i,t,e){const n=te(i),r=n.queries.get(t);if(r)for(const s of r.z_)s.onError(e);n.queries.delete(t)}function Df(i){i.J_.forEach(t=>{t.next()})}var nd,Ym;(Ym=nd||(nd={})).X_="default",Ym.Cache="cache";class AA{constructor(t,e,n){this.query=t,this.ea=e,this.ta=!1,this.na=null,this.onlineState="Unknown",this.options=n||{}}Z_(t){if(!this.options.includeMetadataChanges){const n=[];for(const r of t.docChanges)r.type!==3&&n.push(r);t=new Go(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.ta?this.ra(t)&&(this.ea.next(t),e=!0):this.ia(t,this.onlineState)&&(this.sa(t),e=!0),this.na=t,e}onError(t){this.ea.error(t)}Y_(t){this.onlineState=t;let e=!1;return this.na&&!this.ta&&this.ia(this.na,t)&&(this.sa(this.na),e=!0),e}ia(t,e){if(!t.fromCache||!this.H_())return!0;const n=e!=="Offline";return(!this.options.oa||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ra(t){if(t.docChanges.length>0)return!0;const e=this.na&&this.na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}sa(t){t=Go.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.ta=!0,this.ea.next(t)}H_(){return this.options.source!==nd.Cache}}/**
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
 */class Ev{constructor(t){this.key=t}}class Sv{constructor(t){this.key=t}}class bA{constructor(t,e){this.query=t,this.Ia=e,this.Ta=null,this.hasCachedResults=!1,this.current=!1,this.Ea=le(),this.mutatedKeys=le(),this.da=H0(t),this.Aa=new Io(this.da)}get Ra(){return this.Ia}Va(t,e){const n=e?e.ma:new Xm,r=e?e.Aa:this.Aa;let s=e?e.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((h,d)=>{const f=r.get(h),p=du(this.query,d)?d:null,y=!!f&&this.mutatedKeys.has(f.key),_=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let m=!1;f&&p?f.data.isEqual(p.data)?y!==_&&(n.track({type:3,doc:p}),m=!0):this.fa(f,p)||(n.track({type:2,doc:p}),m=!0,(l&&this.da(p,l)>0||c&&this.da(p,c)<0)&&(a=!0)):!f&&p?(n.track({type:0,doc:p}),m=!0):f&&!p&&(n.track({type:1,doc:f}),m=!0,(l||c)&&(a=!0)),m&&(p?(o=o.add(p),s=_?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),n.track({type:1,doc:h})}return{Aa:o,ma:n,ts:a,mutatedKeys:s}}fa(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,r){const s=this.Aa;this.Aa=t.Aa,this.mutatedKeys=t.mutatedKeys;const o=t.ma.W_();o.sort((h,d)=>function(p,y){const _=m=>{switch(m){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Qt()}};return _(p)-_(y)}(h.type,d.type)||this.da(h.doc,d.doc)),this.ga(n),r=r!=null&&r;const a=e&&!r?this.pa():[],l=this.Ea.size===0&&this.current&&!r?1:0,c=l!==this.Ta;return this.Ta=l,o.length!==0||c?{snapshot:new Go(this.query,t.Aa,s,o,t.mutatedKeys,l===0,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),ya:a}:{ya:a}}Y_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Aa:this.Aa,ma:new Xm,mutatedKeys:this.mutatedKeys,ts:!1},!1)):{ya:[]}}wa(t){return!this.Ia.has(t)&&!!this.Aa.has(t)&&!this.Aa.get(t).hasLocalMutations}ga(t){t&&(t.addedDocuments.forEach(e=>this.Ia=this.Ia.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ia=this.Ia.delete(e)),this.current=t.current)}pa(){if(!this.current)return[];const t=this.Ea;this.Ea=le(),this.Aa.forEach(n=>{this.wa(n.key)&&(this.Ea=this.Ea.add(n.key))});const e=[];return t.forEach(n=>{this.Ea.has(n)||e.push(new Sv(n))}),this.Ea.forEach(n=>{t.has(n)||e.push(new Ev(n))}),e}Sa(t){this.Ia=t.Is,this.Ea=le();const e=this.Va(t.documents);return this.applyChanges(e,!0)}ba(){return Go.fromInitialDocuments(this.query,this.Aa,this.mutatedKeys,this.Ta===0,this.hasCachedResults)}}class RA{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class CA{constructor(t){this.key=t,this.Da=!1}}class IA{constructor(t,e,n,r,s,o){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.va=new ra(a=>z0(a),hu),this.Fa=new Map,this.Ma=new Set,this.xa=new Be(Gt.comparator),this.Oa=new Map,this.Na=new Tf,this.La={},this.Ba=new Map,this.ka=Ho.Bn(),this.onlineState="Unknown",this.qa=void 0}get isPrimaryClient(){return this.qa===!0}}async function PA(i,t,e=!0){const n=Rv(i);let r;const s=n.va.get(t);return s?(n.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.ba()):r=await Tv(n,t,e,!0),r}async function DA(i,t){const e=Rv(i);await Tv(e,t,!0,!1)}async function Tv(i,t,e,n){const r=await QM(i.localStore,Ui(t)),s=r.targetId,o=e?i.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return n&&(a=await LA(i,t,s,o==="current",r.resumeToken)),i.isPrimaryClient&&e&&mv(i.remoteStore,r),a}async function LA(i,t,e,n,r){i.Qa=(d,f,p)=>async function(_,m,g,A){let M=m.view.Va(g);M.ts&&(M=await Gm(_.localStore,m.query,!1).then(({documents:S})=>m.view.Va(S,M)));const R=A&&A.targetChanges.get(m.targetId),F=A&&A.targetMismatches.get(m.targetId)!=null,D=m.view.applyChanges(M,_.isPrimaryClient,R,F);return Qm(_,m.targetId,D.ya),D.snapshot}(i,d,f,p);const s=await Gm(i.localStore,t,!0),o=new bA(t,s.Is),a=o.Va(s.documents),l=El.createSynthesizedTargetChangeForCurrentChange(e,n&&i.onlineState!=="Offline",r),c=o.applyChanges(a,i.isPrimaryClient,l);Qm(i,e,c.ya);const h=new RA(t,e,o);return i.va.set(t,h),i.Fa.has(e)?i.Fa.get(e).push(t):i.Fa.set(e,[t]),c.snapshot}async function NA(i,t,e){const n=te(i),r=n.va.get(t),s=n.Fa.get(r.targetId);if(s.length>1)return n.Fa.set(r.targetId,s.filter(o=>!hu(o,t))),void n.va.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await ed(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),e&&Af(n.remoteStore,r.targetId),id(n,r.targetId)}).catch(_l)):(id(n,r.targetId),await ed(n.localStore,r.targetId,!0))}async function OA(i,t){const e=te(i),n=e.va.get(t),r=e.Fa.get(n.targetId);e.isPrimaryClient&&r.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Af(e.remoteStore,n.targetId))}async function UA(i,t,e){const n=GA(i);try{const r=await function(o,a){const l=te(o),c=rn.now(),h=a.reduce((p,y)=>p.add(y.key),le());let d,f;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let y=hr(),_=le();return l.us.getEntries(p,h).next(m=>{y=m,y.forEach((g,A)=>{A.isValidDocument()||(_=_.add(g))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,y)).next(m=>{d=m;const g=[];for(const A of a){const M=eM(A,d.get(A.key).overlayedDocument);M!=null&&g.push(new zs(A.key,M,D0(M.value.mapValue),ar.exists(!0)))}return l.mutationQueue.addMutationBatch(p,c,g,a)}).next(m=>{f=m;const g=m.applyToLocalDocumentSet(d,_);return l.documentOverlayCache.saveOverlays(p,m.batchId,g)})}).then(()=>({batchId:f.batchId,changes:W0(d)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(r.batchId),function(o,a,l){let c=o.La[o.currentUser.toKey()];c||(c=new Be(ge)),c=c.insert(a,l),o.La[o.currentUser.toKey()]=c}(n,r.batchId,e),await Tl(n,r.changes),await vu(n.remoteStore)}catch(r){const s=Pf(r,"Failed to persist write");e.reject(s)}}async function wv(i,t){const e=te(i);try{const n=await jM(e.localStore,t);t.targetChanges.forEach((r,s)=>{const o=e.Oa.get(s);o&&(Ee(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Da=!0:r.modifiedDocuments.size>0?Ee(o.Da):r.removedDocuments.size>0&&(Ee(o.Da),o.Da=!1))}),await Tl(e,n,t)}catch(n){await _l(n)}}function Km(i,t,e){const n=te(i);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const r=[];n.va.forEach((s,o)=>{const a=o.view.Y_(t);a.snapshot&&r.push(a.snapshot)}),function(o,a){const l=te(o);l.onlineState=a;let c=!1;l.queries.forEach((h,d)=>{for(const f of d.z_)f.Y_(a)&&(c=!0)}),c&&Df(l)}(n.eventManager,t),r.length&&n.Ca.E_(r),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function FA(i,t,e){const n=te(i);n.sharedClientState.updateQueryState(t,"rejected",e);const r=n.Oa.get(t),s=r&&r.key;if(s){let o=new Be(Gt.comparator);o=o.insert(s,An.newNoDocument(s,Zt.min()));const a=le().add(s),l=new mu(Zt.min(),new Map,new Be(ge),o,a);await wv(n,l),n.xa=n.xa.remove(s),n.Oa.delete(t),Lf(n)}else await ed(n.localStore,t,!1).then(()=>id(n,t,e)).catch(_l)}async function VA(i,t){const e=te(i),n=t.batch.batchId;try{const r=await XM(e.localStore,t);Av(e,n,null),Mv(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await Tl(e,r)}catch(r){await _l(r)}}async function kA(i,t,e){const n=te(i);try{const r=await function(o,a){const l=te(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return l.mutationQueue.lookupMutationBatch(c,a).next(d=>(Ee(d!==null),h=d.keys(),l.mutationQueue.removeMutationBatch(c,d))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>l.localDocuments.getDocuments(c,h))})}(n.localStore,t);Av(n,t,e),Mv(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await Tl(n,r)}catch(r){await _l(r)}}function Mv(i,t){(i.Ba.get(t)||[]).forEach(e=>{e.resolve()}),i.Ba.delete(t)}function Av(i,t,e){const n=te(i);let r=n.La[n.currentUser.toKey()];if(r){const s=r.get(t);s&&(e?s.reject(e):s.resolve(),r=r.remove(t)),n.La[n.currentUser.toKey()]=r}}function id(i,t,e=null){i.sharedClientState.removeLocalQueryTarget(t);for(const n of i.Fa.get(t))i.va.delete(n),e&&i.Ca.Ka(n,e);i.Fa.delete(t),i.isPrimaryClient&&i.Na.mr(t).forEach(n=>{i.Na.containsKey(n)||bv(i,n)})}function bv(i,t){i.Ma.delete(t.path.canonicalString());const e=i.xa.get(t);e!==null&&(Af(i.remoteStore,e),i.xa=i.xa.remove(t),i.Oa.delete(e),Lf(i))}function Qm(i,t,e){for(const n of e)n instanceof Ev?(i.Na.addReference(n.key,t),BA(i,n)):n instanceof Sv?(Nt("SyncEngine","Document no longer in limbo: "+n.key),i.Na.removeReference(n.key,t),i.Na.containsKey(n.key)||bv(i,n.key)):Qt()}function BA(i,t){const e=t.key,n=e.path.canonicalString();i.xa.get(e)||i.Ma.has(n)||(Nt("SyncEngine","New document in limbo: "+e),i.Ma.add(n),Lf(i))}function Lf(i){for(;i.Ma.size>0&&i.xa.size<i.maxConcurrentLimboResolutions;){const t=i.Ma.values().next().value;i.Ma.delete(t);const e=new Gt(Re.fromString(t)),n=i.ka.next();i.Oa.set(n,new CA(e)),i.xa=i.xa.insert(e,n),mv(i.remoteStore,new br(Ui(k0(e.path)),n,"TargetPurposeLimboResolution",pf.oe))}}async function Tl(i,t,e){const n=te(i),r=[],s=[],o=[];n.va.isEmpty()||(n.va.forEach((a,l)=>{o.push(n.Qa(l,t,e).then(c=>{var h;if((c||e)&&n.isPrimaryClient){const d=c?!c.fromCache:(h=e==null?void 0:e.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;n.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(c){r.push(c);const d=Mf.Ui(l.targetId,c);s.push(d)}}))}),await Promise.all(o),n.Ca.E_(r),await async function(l,c){const h=te(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>ut.forEach(c,f=>ut.forEach(f.Ki,p=>h.persistence.referenceDelegate.addReference(d,f.targetId,p)).next(()=>ut.forEach(f.$i,p=>h.persistence.referenceDelegate.removeReference(d,f.targetId,p)))))}catch(d){if(!vl(d))throw d;Nt("LocalStore","Failed to update sequence numbers: "+d)}for(const d of c){const f=d.targetId;if(!d.fromCache){const p=h.ss.get(f),y=p.snapshotVersion,_=p.withLastLimboFreeSnapshotVersion(y);h.ss=h.ss.insert(f,_)}}}(n.localStore,s))}async function zA(i,t){const e=te(i);if(!e.currentUser.isEqual(t)){Nt("SyncEngine","User change. New user:",t.toKey());const n=await hv(e.localStore,t);e.currentUser=t,function(s,o){s.Ba.forEach(a=>{a.forEach(l=>{l.reject(new Lt(st.CANCELLED,o))})}),s.Ba.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await Tl(e,n.ls)}}function HA(i,t){const e=te(i),n=e.Oa.get(t);if(n&&n.Da)return le().add(n.key);{let r=le();const s=e.Fa.get(t);if(!s)return r;for(const o of s){const a=e.va.get(o);r=r.unionWith(a.view.Ra)}return r}}function Rv(i){const t=te(i);return t.remoteStore.remoteSyncer.applyRemoteEvent=wv.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=HA.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=FA.bind(null,t),t.Ca.E_=wA.bind(null,t.eventManager),t.Ca.Ka=MA.bind(null,t.eventManager),t}function GA(i){const t=te(i);return t.remoteStore.remoteSyncer.applySuccessfulWrite=VA.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=kA.bind(null,t),t}class Jm{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=gu(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return $M(this.persistence,new WM,t.initialUser,this.serializer)}createPersistence(t){return new zM(wf.Yr,this.serializer)}createSharedClientState(t){return new ZM}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class WA{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Km(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=zA.bind(null,this.syncEngine),await yA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new EA}()}createDatastore(t){const e=gu(t.databaseInfo.databaseId),n=function(s){return new iA(s)}(t.databaseInfo);return function(s,o,a,l){return new oA(s,o,a,l)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,r,s,o,a){return new lA(n,r,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>Km(this.syncEngine,e,0),function(){return qm.D()?new qm:new tA}())}createSyncEngine(t,e){return function(r,s,o,a,l,c,h){const d=new IA(r,s,o,a,l,c);return h&&(d.qa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(r){const s=te(r);Nt("RemoteStore","RemoteStore shutting down."),s.N_.add(5),await Sl(s),s.B_.shutdown(),s.k_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}/**
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
 *//**
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
 */class qA{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Wa(this.observer.next,t)}error(t){this.observer.error?this.Wa(this.observer.error,t):ur("Uncaught Error in snapshot listener:",t.toString())}Ga(){this.muted=!0}Wa(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */class $A{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Mn.UNAUTHENTICATED,this.clientId=C0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async s=>{Nt("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(n,s=>(Nt("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Lt(st.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Nr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Pf(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function ju(i,t){i.asyncQueue.verifyOperationInProgress(),Nt("FirestoreClient","Initializing OfflineComponentProvider");const e=i.configuration;await t.initialize(e);let n=e.initialUser;i.setCredentialChangeListener(async r=>{n.isEqual(r)||(await hv(t.localStore,r),n=r)}),t.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=t}async function Zm(i,t){i.asyncQueue.verifyOperationInProgress();const e=await jA(i);Nt("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,i.configuration),i.setCredentialChangeListener(n=>$m(t.remoteStore,n)),i.setAppCheckTokenChangeListener((n,r)=>$m(t.remoteStore,r)),i._onlineComponents=t}function XA(i){return i.name==="FirebaseError"?i.code===st.FAILED_PRECONDITION||i.code===st.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}async function jA(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){Nt("FirestoreClient","Using user provided OfflineComponentProvider");try{await ju(i,i._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!XA(e))throw e;Vo("Error using user provided cache. Falling back to memory cache: "+e),await ju(i,new Jm)}}else Nt("FirestoreClient","Using default OfflineComponentProvider"),await ju(i,new Jm);return i._offlineComponents}async function Cv(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(Nt("FirestoreClient","Using user provided OnlineComponentProvider"),await Zm(i,i._uninitializedComponentsProvider._online)):(Nt("FirestoreClient","Using default OnlineComponentProvider"),await Zm(i,new WA))),i._onlineComponents}function YA(i){return Cv(i).then(t=>t.syncEngine)}async function KA(i){const t=await Cv(i),e=t.eventManager;return e.onListen=PA.bind(null,t.syncEngine),e.onUnlisten=NA.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=DA.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=OA.bind(null,t.syncEngine),e}function QA(i,t,e={}){const n=new Nr;return i.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new qA({next:f=>{o.enqueueAndForget(()=>TA(s,d)),f.fromCache&&l.source==="server"?c.reject(new Lt(st.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(f)},error:f=>c.reject(f)}),d=new AA(a,h,{includeMetadataChanges:!0,oa:!0});return SA(s,d)}(await KA(i),i.asyncQueue,t,e,n)),n.promise}/**
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
 */function Iv(i){const t={};return i.timeoutSeconds!==void 0&&(t.timeoutSeconds=i.timeoutSeconds),t}/**
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
 */const tg=new Map;/**
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
 */function Pv(i,t,e){if(!e)throw new Lt(st.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${t}.`)}function JA(i,t,e,n){if(t===!0&&n===!0)throw new Lt(st.INVALID_ARGUMENT,`${i} and ${e} cannot be used together.`)}function eg(i){if(!Gt.isDocumentKey(i))throw new Lt(st.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function ng(i){if(Gt.isDocumentKey(i))throw new Lt(st.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function yu(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(i);return t?`a custom ${t} object`:"an object"}}return typeof i=="function"?"a function":Qt()}function qc(i,t){if("_delegate"in i&&(i=i._delegate),!(i instanceof t)){if(t.name===i.constructor.name)throw new Lt(st.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=yu(i);throw new Lt(st.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return i}/**
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
 */class ig{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new Lt(st.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new Lt(st.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}JA("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Iv((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Lt(st.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Lt(st.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Lt(st.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,r){return n.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class xu{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ig({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Lt(st.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new Lt(st.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ig(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new hw;switch(n.type){case"firstParty":return new mw(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Lt(st.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=tg.get(e);n&&(Nt("ComponentProvider","Removing Datastore"),tg.delete(e),n.terminate())}(this),Promise.resolve()}}function ZA(i,t,e,n={}){var r;const s=(i=qc(i,xu))._getSettings(),o=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Vo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),n.mockUserToken){let a,l;if(typeof n.mockUserToken=="string")a=n.mockUserToken,l=Mn.MOCK_USER;else{a=ME(n.mockUserToken,(r=i._app)===null||r===void 0?void 0:r.options.projectId);const c=n.mockUserToken.sub||n.mockUserToken.user_id;if(!c)throw new Lt(st.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Mn(c)}i._authCredentials=new dw(new R0(a,l))}}/**
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
 */class oa{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new oa(this.firestore,t,this._query)}}class ui{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Or(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ui(this.firestore,t,this._key)}}class Or extends oa{constructor(t,e,n){super(t,e,k0(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ui(this.firestore,null,new Gt(t))}withConverter(t){return new Or(this.firestore,t,this._path)}}function Dv(i,t,...e){if(i=Br(i),Pv("collection","path",t),i instanceof xu){const n=Re.fromString(t,...e);return ng(n),new Or(i,null,n)}{if(!(i instanceof ui||i instanceof Or))throw new Lt(st.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=i._path.child(Re.fromString(t,...e));return ng(n),new Or(i.firestore,null,n)}}function tb(i,t,...e){if(i=Br(i),arguments.length===1&&(t=C0.newId()),Pv("doc","path",t),i instanceof xu){const n=Re.fromString(t,...e);return eg(n),new ui(i,null,new Gt(n))}{if(!(i instanceof ui||i instanceof Or))throw new Lt(st.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=i._path.child(Re.fromString(t,...e));return eg(n),new ui(i.firestore,i instanceof Or?i.converter:null,new Gt(n))}}/**
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
 */class eb{constructor(){this._u=Promise.resolve(),this.au=[],this.uu=!1,this.cu=[],this.lu=null,this.hu=!1,this.Pu=!1,this.Iu=[],this.e_=new fv(this,"async_queue_retry"),this.Tu=()=>{const e=Xu();e&&Nt("AsyncQueue","Visibility state changed to "+e.visibilityState),this.e_.zo()};const t=Xu();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Tu)}get isShuttingDown(){return this.uu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Eu(),this.du(t)}enterRestrictedMode(t){if(!this.uu){this.uu=!0,this.Pu=t||!1;const e=Xu();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Tu)}}enqueue(t){if(this.Eu(),this.uu)return new Promise(()=>{});const e=new Nr;return this.du(()=>this.uu&&this.Pu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.au.push(t),this.Au()))}async Au(){if(this.au.length!==0){try{await this.au[0](),this.au.shift(),this.e_.reset()}catch(t){if(!vl(t))throw t;Nt("AsyncQueue","Operation failed with retryable error: "+t)}this.au.length>0&&this.e_.Wo(()=>this.Au())}}du(t){const e=this._u.then(()=>(this.hu=!0,t().catch(n=>{this.lu=n,this.hu=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(n);throw ur("INTERNAL UNHANDLED ERROR: ",r),n}).then(n=>(this.hu=!1,n))));return this._u=e,e}enqueueAfterDelay(t,e,n){this.Eu(),this.Iu.indexOf(t)>-1&&(e=0);const r=If.createAndSchedule(this,t,e,n,s=>this.Ru(s));return this.cu.push(r),r}Eu(){this.lu&&Qt()}verifyOperationInProgress(){}async Vu(){let t;do t=this._u,await t;while(t!==this._u)}mu(t){for(const e of this.cu)if(e.timerId===t)return!0;return!1}fu(t){return this.Vu().then(()=>{this.cu.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this.cu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Vu()})}gu(t){this.Iu.push(t)}Ru(t){const e=this.cu.indexOf(t);this.cu.splice(e,1)}}class Nf extends xu{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=function(){return new eb}(),this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Nv(this),this._firestoreClient.terminate()}}function nb(i,t){const e=typeof i=="object"?i:K_(),n=typeof i=="string"?i:"(default)",r=gl(e,"firestore").getImmediate({identifier:n});if(!r._initialized){const s=TE("firestore");s&&ZA(r,...s)}return r}function Lv(i){return i._firestoreClient||Nv(i),i._firestoreClient.verifyNotTerminated(),i._firestoreClient}function Nv(i){var t,e,n;const r=i._freezeSettings(),s=function(a,l,c,h){return new Rw(a,l,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Iv(h.experimentalLongPollingOptions),h.useFetchStreams)}(i._databaseId,((t=i._app)===null||t===void 0?void 0:t.options.appId)||"",i._persistenceKey,r);i._firestoreClient=new $A(i._authCredentials,i._appCheckCredentials,i._queue,s),!((e=r.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=r.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(i._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}/**
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
 */class Wo{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Wo(vn.fromBase64String(t))}catch(e){throw new Lt(st.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Wo(vn.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
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
 */class Of{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new Lt(st.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gn(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Ov{constructor(t){this._methodName=t}}/**
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
 */class Uf{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Lt(st.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Lt(st.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ge(this._lat,t._lat)||ge(this._long,t._long)}}/**
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
 */const ib=/^__.*__$/;class rb{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new zs(t,this.data,this.fieldMask,e,this.fieldTransforms):new xl(t,this.data,e,this.fieldTransforms)}}function Uv(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Qt()}}class Ff{constructor(t,e,n,r,s,o){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,s===void 0&&this.pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get yu(){return this.settings.yu}wu(t){return new Ff(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Su(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),r=this.wu({path:n,bu:!1});return r.Du(t),r}Cu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),r=this.wu({path:n,bu:!1});return r.pu(),r}vu(t){return this.wu({path:void 0,bu:!0})}Fu(t){return $c(t,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.xu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Du(this.path.get(t))}Du(t){if(t.length===0)throw this.Fu("Document fields must not be empty");if(Uv(this.yu)&&ib.test(t))throw this.Fu('Document fields cannot begin and end with "__"')}}class sb{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||gu(t)}Ou(t,e,n,r=!1){return new Ff({yu:t,methodName:e,xu:n,path:gn.emptyPath(),bu:!1,Mu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Fv(i){const t=i._freezeSettings(),e=gu(i._databaseId);return new sb(i._databaseId,!!t.ignoreUndefinedProperties,e)}function ob(i,t,e,n,r,s={}){const o=i.Ou(s.merge||s.mergeFields?2:0,t,e,r);Bv("Data must be an object, but it was:",o,n);const a=Vv(n,o);let l,c;if(s.merge)l=new yi(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const d of s.mergeFields){const f=lb(t,d,e);if(!o.contains(f))throw new Lt(st.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);ub(h,f)||h.push(f)}l=new yi(h),c=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,c=o.fieldTransforms;return new rb(new oi(a),l,c)}function ab(i,t,e,n=!1){return Vf(e,i.Ou(n?4:3,t))}function Vf(i,t){if(kv(i=Br(i)))return Bv("Unsupported field value:",t,i),Vv(i,t);if(i instanceof Ov)return function(n,r){if(!Uv(r.yu))throw r.Fu(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Fu(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(i,t),null;if(i===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),i instanceof Array){if(t.settings.bu&&t.yu!==4)throw t.Fu("Nested arrays are not supported");return function(n,r){const s=[];let o=0;for(const a of n){let l=Vf(a,r.vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(i,t)}return function(n,r){if((n=Br(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Yw(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=rn.fromDate(n);return{timestampValue:Gc(r.serializer,s)}}if(n instanceof rn){const s=new rn(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Gc(r.serializer,s)}}if(n instanceof Uf)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Wo)return{bytesValue:rv(r.serializer,n._byteString)};if(n instanceof ui){const s=r.databaseId,o=n.firestore._databaseId;if(!o.isEqual(s))throw r.Fu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Sf(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.Fu(`Unsupported field value: ${yu(n)}`)}(i,t)}function Vv(i,t){const e={};return I0(i)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ia(i,(n,r)=>{const s=Vf(r,t.Su(n));s!=null&&(e[n]=s)}),{mapValue:{fields:e}}}function kv(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof rn||i instanceof Uf||i instanceof Wo||i instanceof ui||i instanceof Ov)}function Bv(i,t,e){if(!kv(e)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(e)){const n=yu(e);throw n==="an object"?t.Fu(i+" a custom object"):t.Fu(i+" "+n)}}function lb(i,t,e){if((t=Br(t))instanceof Of)return t._internalPath;if(typeof t=="string")return zv(i,t);throw $c("Field path arguments must be of type string or ",i,!1,void 0,e)}const cb=new RegExp("[~\\*/\\[\\]]");function zv(i,t,e){if(t.search(cb)>=0)throw $c(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,e);try{return new Of(...t.split("."))._internalPath}catch{throw $c(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,e)}}function $c(i,t,e,n,r){const s=n&&!n.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${n}`),o&&(l+=` in document ${r}`),l+=")"),new Lt(st.INVALID_ARGUMENT,a+i+l)}function ub(i,t){return i.some(e=>e.isEqual(t))}/**
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
 */class Hv{constructor(t,e,n,r,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ui(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new hb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(kf("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class hb extends Hv{data(){return super.data()}}function kf(i,t){return typeof t=="string"?zv(i,t):t instanceof Of?t._internalPath:t._delegate._internalPath}/**
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
 */function db(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new Lt(st.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bf{}class fb extends Bf{}function rg(i,t,...e){let n=[];t instanceof Bf&&n.push(t),n=n.concat(e),function(s){const o=s.filter(l=>l instanceof zf).length,a=s.filter(l=>l instanceof Eu).length;if(o>1||o>0&&a>0)throw new Lt(st.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const r of n)i=r._apply(i);return i}class Eu extends fb{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new Eu(t,e,n)}_apply(t){const e=this._parse(t);return Gv(t._query,e),new oa(t.firestore,t.converter,Yh(t._query,e))}_parse(t){const e=Fv(t.firestore);return function(s,o,a,l,c,h,d){let f;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new Lt(st.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){ag(d,h);const p=[];for(const y of d)p.push(og(l,s,y));f={arrayValue:{values:p}}}else f=og(l,s,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||ag(d,h),f=ab(a,o,d,h==="in"||h==="not-in");return en.create(c,h,f)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function sg(i,t,e){const n=t,r=kf("where",i);return Eu._create(r,n,e)}class zf extends Bf{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new zf(t,e)}_parse(t){const e=this._queryConstraints.map(n=>n._parse(t)).filter(n=>n.getFilters().length>0);return e.length===1?e[0]:Ti.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(r,s){let o=r;const a=s.getFlattenedFilters();for(const l of a)Gv(o,l),o=Yh(o,l)}(t._query,e),new oa(t.firestore,t.converter,Yh(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function og(i,t,e){if(typeof(e=Br(e))=="string"){if(e==="")throw new Lt(st.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!B0(t)&&e.indexOf("/")!==-1)throw new Lt(st.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(Re.fromString(e));if(!Gt.isDocumentKey(n))throw new Lt(st.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Am(i,new Gt(n))}if(e instanceof ui)return Am(i,e._key);throw new Lt(st.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${yu(e)}.`)}function ag(i,t){if(!Array.isArray(i)||i.length===0)throw new Lt(st.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Gv(i,t){const e=function(r,s){for(const o of r)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(i.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new Lt(st.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Lt(st.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class pb{convertValue(t,e="none"){switch(Ns(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Qe(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ls(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Qt()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return ia(t,(r,s)=>{n[r]=this.convertValue(s,e)}),n}convertGeoPoint(t){return new Uf(Qe(t.latitude),Qe(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=gf(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Qa(t));default:return null}}convertTimestamp(t){const e=Gr(t);return new rn(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Re.fromString(t);Ee(uv(n));const r=new Ja(n.get(1),n.get(3)),s=new Gt(n.popFirst(5));return r.isEqual(e)||ur(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
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
 */function mb(i,t,e){let n;return n=i?i.toFirestore(t):t,n}/**
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
 */class Hl{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class gb extends Hv{constructor(t,e,n,r,s,o){super(t,e,n,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new xc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(kf("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class xc extends gb{data(t={}){return super.data(t)}}class _b{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Hl(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new xc(this._firestore,this._userDataWriter,n.key,n,new Hl(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Lt(st.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const l=new xc(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Hl(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new xc(r._firestore,r._userDataWriter,a.doc.key,a.doc,new Hl(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:vb(a.type),doc:l,oldIndex:c,newIndex:h}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function vb(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Qt()}}class yb extends pb{constructor(t){super(),this.firestore=t}convertBytes(t){return new Wo(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new ui(this.firestore,null,e)}}function lg(i){i=qc(i,oa);const t=qc(i.firestore,Nf),e=Lv(t),n=new yb(t);return db(i._query),QA(e,i._query).then(r=>new _b(t,n,i,r))}function xb(i,t){const e=qc(i.firestore,Nf),n=tb(i),r=mb(i.converter,t);return Eb(e,[ob(Fv(i.firestore),"addDoc",n._key,r,i.converter!==null,{}).toMutation(n._key,ar.exists(!1))]).then(()=>n)}function Eb(i,t){return function(n,r){const s=new Nr;return n.asyncQueue.enqueueAndForget(async()=>UA(await YA(n),r,s)),s.promise}(Lv(i),t)}(function(t,e=!0){(function(r){na=r})(NS),zr(new cr("firestore",(n,{instanceIdentifier:r,options:s})=>{const o=n.getProvider("app").getImmediate(),a=new Nf(new fw(n.getProvider("auth-internal")),new _w(n.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new Lt(st.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ja(c.options.projectId,h)}(o,r),o);return s=Object.assign({useFetchStreams:e},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Oi(Sm,"4.6.5",t),Oi(Sm,"4.6.5","esm2017")})();const Sb={apiKey:"AIzaSyANFcqVV70xABq37nC2Tp_sNbJdaSZ0Efs",authDomain:"votecats.firebaseapp.com",projectId:"votecats",storageBucket:"votecats.appspot.com",messagingSenderId:"564792623026",appId:"1:564792623026:web:41fb67ea13bfe0a306eeab",measurementId:"G-F7M0XWB52M"},Wv=Y_(Sb);aw(Wv);const qv=nb(Wv);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hf="166",Zs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},to={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Tb=0,cg=1,wb=2,$v=1,Mb=2,tr=3,qr=0,Bn=1,ir=2,Ur=0,Po=1,ug=2,hg=3,dg=4,Ab=5,ms=100,bb=101,Rb=102,Cb=103,Ib=104,Pb=200,Db=201,Lb=202,Nb=203,rd=204,sd=205,Ob=206,Ub=207,Fb=208,Vb=209,kb=210,Bb=211,zb=212,Hb=213,Gb=214,Wb=0,qb=1,$b=2,Xc=3,Xb=4,jb=5,Yb=6,Kb=7,Gf=0,Qb=1,Jb=2,Fr=0,Zb=1,t1=2,e1=3,n1=4,i1=5,r1=6,s1=7,Xv=300,qo=301,$o=302,od=303,ad=304,Su=306,ld=1e3,ys=1001,cd=1002,ai=1003,o1=1004,Gl=1005,vi=1006,Yu=1007,xs=1008,dr=1009,jv=1010,Yv=1011,nl=1012,Wf=1013,Os=1014,rr=1015,wl=1016,qf=1017,$f=1018,Xo=1020,Kv=35902,Qv=1021,Jv=1022,xi=1023,Zv=1024,ty=1025,Do=1026,jo=1027,ey=1028,Xf=1029,ny=1030,jf=1031,Yf=1033,Ec=33776,Sc=33777,Tc=33778,wc=33779,ud=35840,hd=35841,dd=35842,fd=35843,pd=36196,md=37492,gd=37496,_d=37808,vd=37809,yd=37810,xd=37811,Ed=37812,Sd=37813,Td=37814,wd=37815,Md=37816,Ad=37817,bd=37818,Rd=37819,Cd=37820,Id=37821,Mc=36492,Pd=36494,Dd=36495,iy=36283,Ld=36284,Nd=36285,Od=36286,a1=3200,l1=3201,Kf=0,c1=1,Ar="",mn="srgb",Kr="srgb-linear",Qf="display-p3",Tu="display-p3-linear",jc="linear",be="srgb",Yc="rec709",Kc="p3",eo=7680,fg=519,u1=512,h1=513,d1=514,ry=515,f1=516,p1=517,m1=518,g1=519,pg=35044,mg="300 es",sr=2e3,Qc=2001;class Gs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let gg=1234567;const za=Math.PI/180,il=180/Math.PI;function Ws(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tn[i&255]+Tn[i>>8&255]+Tn[i>>16&255]+Tn[i>>24&255]+"-"+Tn[t&255]+Tn[t>>8&255]+"-"+Tn[t>>16&15|64]+Tn[t>>24&255]+"-"+Tn[e&63|128]+Tn[e>>8&255]+"-"+Tn[e>>16&255]+Tn[e>>24&255]+Tn[n&255]+Tn[n>>8&255]+Tn[n>>16&255]+Tn[n>>24&255]).toLowerCase()}function tn(i,t,e){return Math.max(t,Math.min(e,i))}function Jf(i,t){return(i%t+t)%t}function _1(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function v1(i,t,e){return i!==t?(e-i)/(t-i):0}function Ha(i,t,e){return(1-e)*i+e*t}function y1(i,t,e,n){return Ha(i,t,1-Math.exp(-e*n))}function x1(i,t=1){return t-Math.abs(Jf(i,t*2)-t)}function E1(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function S1(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function T1(i,t){return i+Math.floor(Math.random()*(t-i+1))}function w1(i,t){return i+Math.random()*(t-i)}function M1(i){return i*(.5-Math.random())}function A1(i){i!==void 0&&(gg=i);let t=gg+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function b1(i){return i*za}function R1(i){return i*il}function C1(i){return(i&i-1)===0&&i!==0}function I1(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function P1(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function D1(i,t,e,n,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),d=s((t-n)/2),f=o((t-n)/2),p=s((n-t)/2),y=o((n-t)/2);switch(r){case"XYX":i.set(a*h,l*d,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*d,a*c);break;case"ZXZ":i.set(l*d,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*y,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*y,a*c);break;case"ZYZ":i.set(l*y,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function To(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Nn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const L1={DEG2RAD:za,RAD2DEG:il,generateUUID:Ws,clamp:tn,euclideanModulo:Jf,mapLinear:_1,inverseLerp:v1,lerp:Ha,damp:y1,pingpong:x1,smoothstep:E1,smootherstep:S1,randInt:T1,randFloat:w1,randFloatSpread:M1,seededRandom:A1,degToRad:b1,radToDeg:R1,isPowerOfTwo:C1,ceilPowerOfTwo:I1,floorPowerOfTwo:P1,setQuaternionFromProperEuler:D1,normalize:Nn,denormalize:To};class dt{constructor(t=0,e=0){dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(tn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class re{constructor(t,e,n,r,s,o,a,l,c){re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],p=n[5],y=n[8],_=r[0],m=r[3],g=r[6],A=r[1],M=r[4],R=r[7],F=r[2],D=r[5],S=r[8];return s[0]=o*_+a*A+l*F,s[3]=o*m+a*M+l*D,s[6]=o*g+a*R+l*S,s[1]=c*_+h*A+d*F,s[4]=c*m+h*M+d*D,s[7]=c*g+h*R+d*S,s[2]=f*_+p*A+y*F,s[5]=f*m+p*M+y*D,s[8]=f*g+p*R+y*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*s,p=c*s-o*l,y=e*d+n*f+r*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/y;return t[0]=d*_,t[1]=(r*c-h*n)*_,t[2]=(a*n-r*o)*_,t[3]=f*_,t[4]=(h*e-r*l)*_,t[5]=(r*s-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ku.makeScale(t,e)),this}rotate(t){return this.premultiply(Ku.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ku.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ku=new re;function sy(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function rl(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function N1(){const i=rl("canvas");return i.style.display="block",i}const _g={};function oy(i){i in _g||(_g[i]=!0,console.warn(i))}function O1(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const vg=new re().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),yg=new re().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wl={[Kr]:{transfer:jc,primaries:Yc,toReference:i=>i,fromReference:i=>i},[mn]:{transfer:be,primaries:Yc,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Tu]:{transfer:jc,primaries:Kc,toReference:i=>i.applyMatrix3(yg),fromReference:i=>i.applyMatrix3(vg)},[Qf]:{transfer:be,primaries:Kc,toReference:i=>i.convertSRGBToLinear().applyMatrix3(yg),fromReference:i=>i.applyMatrix3(vg).convertLinearToSRGB()}},U1=new Set([Kr,Tu]),_e={enabled:!0,_workingColorSpace:Kr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!U1.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Wl[t].toReference,r=Wl[e].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Wl[i].primaries},getTransfer:function(i){return i===Ar?jc:Wl[i].transfer}};function Lo(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qu(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let no;class F1{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{no===void 0&&(no=rl("canvas")),no.width=t.width,no.height=t.height;const n=no.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=no}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=rl("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Lo(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Lo(e[n]/255)*255):e[n]=Lo(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let V1=0;class ay{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:V1++}),this.uuid=Ws(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ju(r[o].image)):s.push(Ju(r[o]))}else s=Ju(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Ju(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?F1.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let k1=0;class Fn extends Gs{constructor(t=Fn.DEFAULT_IMAGE,e=Fn.DEFAULT_MAPPING,n=ys,r=ys,s=vi,o=xs,a=xi,l=dr,c=Fn.DEFAULT_ANISOTROPY,h=Ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:k1++}),this.uuid=Ws(),this.name="",this.source=new ay(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ld:t.x=t.x-Math.floor(t.x);break;case ys:t.x=t.x<0?0:1;break;case cd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ld:t.y=t.y-Math.floor(t.y);break;case ys:t.y=t.y<0?0:1;break;case cd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=Xv;Fn.DEFAULT_ANISOTROPY=1;class nn{constructor(t=0,e=0,n=0,r=1){nn.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],y=l[9],_=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(y-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(y+m)<.1&&Math.abs(c+p+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,R=(p+1)/2,F=(g+1)/2,D=(h+f)/4,S=(d+_)/4,T=(y+m)/4;return M>R&&M>F?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=D/n,s=S/n):R>F?R<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(R),n=D/r,s=T/r):F<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(F),n=S/s,r=T/s),this.set(n,r,s,e),this}let A=Math.sqrt((m-y)*(m-y)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(A)<.001&&(A=1),this.x=(m-y)/A,this.y=(d-_)/A,this.z=(f-h)/A,this.w=Math.acos((c+p+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class B1 extends Gs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new nn(0,0,t,e),this.scissorTest=!1,this.viewport=new nn(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Fn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ay(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Us extends B1{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ly extends Fn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ai,this.minFilter=ai,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class z1 extends Fn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=ai,this.minFilter=ai,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fs{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],d=n[r+3];const f=s[o+0],p=s[o+1],y=s[o+2],_=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=y,t[e+3]=_;return}if(d!==_||l!==f||c!==p||h!==y){let m=1-a;const g=l*f+c*p+h*y+d*_,A=g>=0?1:-1,M=1-g*g;if(M>Number.EPSILON){const F=Math.sqrt(M),D=Math.atan2(F,g*A);m=Math.sin(m*D)/F,a=Math.sin(a*D)/F}const R=a*A;if(l=l*m+f*R,c=c*m+p*R,h=h*m+y*R,d=d*m+_*R,m===1-a){const F=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=F,c*=F,h*=F,d*=F}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],d=s[o],f=s[o+1],p=s[o+2],y=s[o+3];return t[e]=a*y+h*d+l*p-c*f,t[e+1]=l*y+h*f+c*d-a*p,t[e+2]=c*y+h*p+a*f-l*d,t[e+3]=h*y-a*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),d=a(s/2),f=l(n/2),p=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=f*h*d+c*p*y,this._y=c*p*d-f*h*y,this._z=c*h*y+f*p*d,this._w=c*h*d-f*p*y;break;case"YXZ":this._x=f*h*d+c*p*y,this._y=c*p*d-f*h*y,this._z=c*h*y-f*p*d,this._w=c*h*d+f*p*y;break;case"ZXY":this._x=f*h*d-c*p*y,this._y=c*p*d+f*h*y,this._z=c*h*y+f*p*d,this._w=c*h*d-f*p*y;break;case"ZYX":this._x=f*h*d-c*p*y,this._y=c*p*d+f*h*y,this._z=c*h*y-f*p*d,this._w=c*h*d+f*p*y;break;case"YZX":this._x=f*h*d+c*p*y,this._y=c*p*d+f*h*y,this._z=c*h*y-f*p*d,this._w=c*h*d-f*p*y;break;case"XZY":this._x=f*h*d-c*p*y,this._y=c*p*d-f*h*y,this._z=c*h*y+f*p*d,this._w=c*h*d+f*p*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(tn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,n=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xg.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xg.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),h=2*(a*e-s*r),d=2*(s*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-s*d,this.z=r+l*d+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zu.copy(this).projectOnVector(t),this.sub(Zu)}reflect(t){return this.sub(Zu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(tn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zu=new k,xg=new Fs;class aa{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(mi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(mi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=mi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,mi):mi.fromBufferAttribute(s,o),mi.applyMatrix4(t.matrixWorld),this.expandByPoint(mi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ql.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ql.copy(n.boundingBox)),ql.applyMatrix4(t.matrixWorld),this.union(ql)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,mi),mi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Sa),$l.subVectors(this.max,Sa),io.subVectors(t.a,Sa),ro.subVectors(t.b,Sa),so.subVectors(t.c,Sa),vr.subVectors(ro,io),yr.subVectors(so,ro),ns.subVectors(io,so);let e=[0,-vr.z,vr.y,0,-yr.z,yr.y,0,-ns.z,ns.y,vr.z,0,-vr.x,yr.z,0,-yr.x,ns.z,0,-ns.x,-vr.y,vr.x,0,-yr.y,yr.x,0,-ns.y,ns.x,0];return!th(e,io,ro,so,$l)||(e=[1,0,0,0,1,0,0,0,1],!th(e,io,ro,so,$l))?!1:(Xl.crossVectors(vr,yr),e=[Xl.x,Xl.y,Xl.z],th(e,io,ro,so,$l))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ji=[new k,new k,new k,new k,new k,new k,new k,new k],mi=new k,ql=new aa,io=new k,ro=new k,so=new k,vr=new k,yr=new k,ns=new k,Sa=new k,$l=new k,Xl=new k,is=new k;function th(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){is.fromArray(i,s);const a=r.x*Math.abs(is.x)+r.y*Math.abs(is.y)+r.z*Math.abs(is.z),l=t.dot(is),c=e.dot(is),h=n.dot(is);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const H1=new aa,Ta=new k,eh=new k;class Zf{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):H1.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ta.subVectors(t,this.center);const e=Ta.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Ta,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(eh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ta.copy(t.center).add(eh)),this.expandByPoint(Ta.copy(t.center).sub(eh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Yi=new k,nh=new k,jl=new k,xr=new k,ih=new k,Yl=new k,rh=new k;class tp{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Yi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yi.copy(this.origin).addScaledVector(this.direction,e),Yi.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){nh.copy(t).add(e).multiplyScalar(.5),jl.copy(e).sub(t).normalize(),xr.copy(this.origin).sub(nh);const s=t.distanceTo(e)*.5,o=-this.direction.dot(jl),a=xr.dot(this.direction),l=-xr.dot(jl),c=xr.lengthSq(),h=Math.abs(1-o*o);let d,f,p,y;if(h>0)if(d=o*l-a,f=o*a-l,y=s*h,d>=0)if(f>=-y)if(f<=y){const _=1/h;d*=_,f*=_,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-y?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=y?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(nh).addScaledVector(jl,f),p}intersectSphere(t,e){Yi.subVectors(t.center,this.origin);const n=Yi.dot(this.direction),r=Yi.dot(Yi)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Yi)!==null}intersectTriangle(t,e,n,r,s){ih.subVectors(e,t),Yl.subVectors(n,t),rh.crossVectors(ih,Yl);let o=this.direction.dot(rh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xr.subVectors(this.origin,t);const l=a*this.direction.dot(Yl.crossVectors(xr,Yl));if(l<0)return null;const c=a*this.direction.dot(ih.cross(xr));if(c<0||l+c>o)return null;const h=-a*xr.dot(rh);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ke{constructor(t,e,n,r,s,o,a,l,c,h,d,f,p,y,_,m){ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,h,d,f,p,y,_,m)}set(t,e,n,r,s,o,a,l,c,h,d,f,p,y,_,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=r,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=d,g[14]=f,g[3]=p,g[7]=y,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ke().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/oo.setFromMatrixColumn(t,0).length(),s=1/oo.setFromMatrixColumn(t,1).length(),o=1/oo.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const f=o*h,p=o*d,y=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+y*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=y+p*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,p=l*d,y=c*h,_=c*d;e[0]=f+_*a,e[4]=y*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-y,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,p=l*d,y=c*h,_=c*d;e[0]=f-_*a,e[4]=-o*d,e[8]=y+p*a,e[1]=p+y*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,p=o*d,y=a*h,_=a*d;e[0]=l*h,e[4]=y*c-p,e[8]=f*c+_,e[1]=l*d,e[5]=_*c+f,e[9]=p*c-y,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*c,y=a*l,_=a*c;e[0]=l*h,e[4]=_-f*d,e[8]=y*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*d+y,e[10]=f-_*d}else if(t.order==="XZY"){const f=o*l,p=o*c,y=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+_,e[5]=o*h,e[9]=p*d-y,e[2]=y*d-p,e[6]=a*h,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(G1,t,W1)}lookAt(t,e,n){const r=this.elements;return Yn.subVectors(t,e),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Er.crossVectors(n,Yn),Er.lengthSq()===0&&(Math.abs(n.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Er.crossVectors(n,Yn)),Er.normalize(),Kl.crossVectors(Yn,Er),r[0]=Er.x,r[4]=Kl.x,r[8]=Yn.x,r[1]=Er.y,r[5]=Kl.y,r[9]=Yn.y,r[2]=Er.z,r[6]=Kl.z,r[10]=Yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],p=n[13],y=n[2],_=n[6],m=n[10],g=n[14],A=n[3],M=n[7],R=n[11],F=n[15],D=r[0],S=r[4],T=r[8],x=r[12],E=r[1],b=r[5],L=r[9],C=r[13],G=r[2],K=r[6],W=r[10],tt=r[14],Q=r[3],gt=r[7],St=r[11],xt=r[15];return s[0]=o*D+a*E+l*G+c*Q,s[4]=o*S+a*b+l*K+c*gt,s[8]=o*T+a*L+l*W+c*St,s[12]=o*x+a*C+l*tt+c*xt,s[1]=h*D+d*E+f*G+p*Q,s[5]=h*S+d*b+f*K+p*gt,s[9]=h*T+d*L+f*W+p*St,s[13]=h*x+d*C+f*tt+p*xt,s[2]=y*D+_*E+m*G+g*Q,s[6]=y*S+_*b+m*K+g*gt,s[10]=y*T+_*L+m*W+g*St,s[14]=y*x+_*C+m*tt+g*xt,s[3]=A*D+M*E+R*G+F*Q,s[7]=A*S+M*b+R*K+F*gt,s[11]=A*T+M*L+R*W+F*St,s[15]=A*x+M*C+R*tt+F*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],p=t[14],y=t[3],_=t[7],m=t[11],g=t[15];return y*(+s*l*d-r*c*d-s*a*f+n*c*f+r*a*p-n*l*p)+_*(+e*l*p-e*c*f+s*o*f-r*o*p+r*c*h-s*l*h)+m*(+e*c*d-e*a*p-s*o*d+n*o*p+s*a*h-n*c*h)+g*(-r*a*h-e*l*d+e*a*f+r*o*d-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],p=t[11],y=t[12],_=t[13],m=t[14],g=t[15],A=d*m*c-_*f*c+_*l*p-a*m*p-d*l*g+a*f*g,M=y*f*c-h*m*c-y*l*p+o*m*p+h*l*g-o*f*g,R=h*_*c-y*d*c+y*a*p-o*_*p-h*a*g+o*d*g,F=y*d*l-h*_*l-y*a*f+o*_*f+h*a*m-o*d*m,D=e*A+n*M+r*R+s*F;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/D;return t[0]=A*S,t[1]=(_*f*s-d*m*s-_*r*p+n*m*p+d*r*g-n*f*g)*S,t[2]=(a*m*s-_*l*s+_*r*c-n*m*c-a*r*g+n*l*g)*S,t[3]=(d*l*s-a*f*s-d*r*c+n*f*c+a*r*p-n*l*p)*S,t[4]=M*S,t[5]=(h*m*s-y*f*s+y*r*p-e*m*p-h*r*g+e*f*g)*S,t[6]=(y*l*s-o*m*s-y*r*c+e*m*c+o*r*g-e*l*g)*S,t[7]=(o*f*s-h*l*s+h*r*c-e*f*c-o*r*p+e*l*p)*S,t[8]=R*S,t[9]=(y*d*s-h*_*s-y*n*p+e*_*p+h*n*g-e*d*g)*S,t[10]=(o*_*s-y*a*s+y*n*c-e*_*c-o*n*g+e*a*g)*S,t[11]=(h*a*s-o*d*s-h*n*c+e*d*c+o*n*p-e*a*p)*S,t[12]=F*S,t[13]=(h*_*r-y*d*r+y*n*f-e*_*f-h*n*m+e*d*m)*S,t[14]=(y*a*r-o*_*r-y*n*l+e*_*l+o*n*m-e*a*m)*S,t[15]=(o*d*r-h*a*r+h*n*l-e*d*l-o*n*f+e*a*f)*S,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,d=a+a,f=s*c,p=s*h,y=s*d,_=o*h,m=o*d,g=a*d,A=l*c,M=l*h,R=l*d,F=n.x,D=n.y,S=n.z;return r[0]=(1-(_+g))*F,r[1]=(p+R)*F,r[2]=(y-M)*F,r[3]=0,r[4]=(p-R)*D,r[5]=(1-(f+g))*D,r[6]=(m+A)*D,r[7]=0,r[8]=(y+M)*S,r[9]=(m-A)*S,r[10]=(1-(f+_))*S,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=oo.set(r[0],r[1],r[2]).length();const o=oo.set(r[4],r[5],r[6]).length(),a=oo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],gi.copy(this);const c=1/s,h=1/o,d=1/a;return gi.elements[0]*=c,gi.elements[1]*=c,gi.elements[2]*=c,gi.elements[4]*=h,gi.elements[5]*=h,gi.elements[6]*=h,gi.elements[8]*=d,gi.elements[9]*=d,gi.elements[10]*=d,e.setFromRotationMatrix(gi),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=sr){const l=this.elements,c=2*s/(e-t),h=2*s/(n-r),d=(e+t)/(e-t),f=(n+r)/(n-r);let p,y;if(a===sr)p=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Qc)p=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=sr){const l=this.elements,c=1/(e-t),h=1/(n-r),d=1/(o-s),f=(e+t)*c,p=(n+r)*h;let y,_;if(a===sr)y=(o+s)*d,_=-2*d;else if(a===Qc)y=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const oo=new k,gi=new ke,G1=new k(0,0,0),W1=new k(1,1,1),Er=new k,Kl=new k,Yn=new k,Eg=new ke,Sg=new Fs;class wi{constructor(t=0,e=0,n=0,r=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],d=r[2],f=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(tn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Eg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Eg,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sg.setFromEuler(this),this.setFromQuaternion(Sg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class ep{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let q1=0;const Tg=new k,ao=new Fs,Ki=new ke,Ql=new k,wa=new k,$1=new k,X1=new Fs,wg=new k(1,0,0),Mg=new k(0,1,0),Ag=new k(0,0,1),bg={type:"added"},j1={type:"removed"},lo={type:"childadded",child:null},sh={type:"childremoved",child:null};class Rn extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:q1++}),this.uuid=Ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const t=new k,e=new wi,n=new Fs,r=new k(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ke},normalMatrix:{value:new re}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ep,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ao.setFromAxisAngle(t,e),this.quaternion.multiply(ao),this}rotateOnWorldAxis(t,e){return ao.setFromAxisAngle(t,e),this.quaternion.premultiply(ao),this}rotateX(t){return this.rotateOnAxis(wg,t)}rotateY(t){return this.rotateOnAxis(Mg,t)}rotateZ(t){return this.rotateOnAxis(Ag,t)}translateOnAxis(t,e){return Tg.copy(t).applyQuaternion(this.quaternion),this.position.add(Tg.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wg,t)}translateY(t){return this.translateOnAxis(Mg,t)}translateZ(t){return this.translateOnAxis(Ag,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ql.copy(t):Ql.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(wa,Ql,this.up):Ki.lookAt(Ql,wa,this.up),this.quaternion.setFromRotationMatrix(Ki),r&&(Ki.extractRotation(r.matrixWorld),ao.setFromRotationMatrix(Ki),this.quaternion.premultiply(ao.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bg),lo.child=t,this.dispatchEvent(lo),lo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(j1),sh.child=t,this.dispatchEvent(sh),sh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ki),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bg),lo.child=t,this.dispatchEvent(lo),lo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,t,$1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wa,X1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),p=o(t.animations),y=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),y.length>0&&(n.nodes=y)}return n.object=r,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Rn.DEFAULT_UP=new k(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _i=new k,Qi=new k,oh=new k,Ji=new k,co=new k,uo=new k,Rg=new k,ah=new k,lh=new k,ch=new k;class Pi{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),_i.subVectors(t,e),r.cross(_i);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){_i.subVectors(r,e),Qi.subVectors(n,e),oh.subVectors(t,e);const o=_i.dot(_i),a=_i.dot(Qi),l=_i.dot(oh),c=Qi.dot(Qi),h=Qi.dot(oh),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*h)*f,y=(o*h-a*l)*f;return s.set(1-p-y,y,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,Ji)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ji.x),l.addScaledVector(o,Ji.y),l.addScaledVector(a,Ji.z),l)}static isFrontFacing(t,e,n,r){return _i.subVectors(n,e),Qi.subVectors(t,e),_i.cross(Qi).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _i.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),_i.cross(Qi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Pi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Pi.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Pi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;co.subVectors(r,n),uo.subVectors(s,n),ah.subVectors(t,n);const l=co.dot(ah),c=uo.dot(ah);if(l<=0&&c<=0)return e.copy(n);lh.subVectors(t,r);const h=co.dot(lh),d=uo.dot(lh);if(h>=0&&d<=h)return e.copy(r);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(co,o);ch.subVectors(t,s);const p=co.dot(ch),y=uo.dot(ch);if(y>=0&&p<=y)return e.copy(s);const _=p*c-l*y;if(_<=0&&c>=0&&y<=0)return a=c/(c-y),e.copy(n).addScaledVector(uo,a);const m=h*y-p*d;if(m<=0&&d-h>=0&&p-y>=0)return Rg.subVectors(s,r),a=(d-h)/(d-h+(p-y)),e.copy(r).addScaledVector(Rg,a);const g=1/(m+_+f);return o=_*g,a=f*g,e.copy(n).addScaledVector(co,o).addScaledVector(uo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const cy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sr={h:0,s:0,l:0},Jl={h:0,s:0,l:0};function uh(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class se{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=_e.workingColorSpace){return this.r=t,this.g=e,this.b=n,_e.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=_e.workingColorSpace){if(t=Jf(t,1),e=tn(e,0,1),n=tn(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=uh(o,s,t+1/3),this.g=uh(o,s,t),this.b=uh(o,s,t-1/3)}return _e.toWorkingColorSpace(this,r),this}setStyle(t,e=mn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=mn){const n=cy[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Lo(t.r),this.g=Lo(t.g),this.b=Lo(t.b),this}copyLinearToSRGB(t){return this.r=Qu(t.r),this.g=Qu(t.g),this.b=Qu(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mn){return _e.fromWorkingColorSpace(wn.copy(this),t),Math.round(tn(wn.r*255,0,255))*65536+Math.round(tn(wn.g*255,0,255))*256+Math.round(tn(wn.b*255,0,255))}getHexString(t=mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_e.workingColorSpace){_e.fromWorkingColorSpace(wn.copy(this),e);const n=wn.r,r=wn.g,s=wn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=_e.workingColorSpace){return _e.fromWorkingColorSpace(wn.copy(this),e),t.r=wn.r,t.g=wn.g,t.b=wn.b,t}getStyle(t=mn){_e.fromWorkingColorSpace(wn.copy(this),t);const e=wn.r,n=wn.g,r=wn.b;return t!==mn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Sr),this.setHSL(Sr.h+t,Sr.s+e,Sr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Sr),t.getHSL(Jl);const n=Ha(Sr.h,Jl.h,e),r=Ha(Sr.s,Jl.s,e),s=Ha(Sr.l,Jl.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new se;se.NAMES=cy;let Y1=0;class la extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Y1++}),this.uuid=Ws(),this.name="",this.type="Material",this.blending=Po,this.side=qr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rd,this.blendDst=sd,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new se(0,0,0),this.blendAlpha=0,this.depthFunc=Xc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=eo,this.stencilZFail=eo,this.stencilZPass=eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Po&&(n.blending=this.blending),this.side!==qr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==rd&&(n.blendSrc=this.blendSrc),this.blendDst!==sd&&(n.blendDst=this.blendDst),this.blendEquation!==ms&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xc&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fg&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==eo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==eo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==eo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Di extends la{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Gf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ye=new k,Zl=new dt;class Vi{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=pg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=rr,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return oy("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zl.fromBufferAttribute(this,e),Zl.applyMatrix3(t),this.setXY(e,Zl.x,Zl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix3(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=To(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=To(e,this.array)),e}setX(t,e){return this.normalized&&(e=Nn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=To(e,this.array)),e}setY(t,e){return this.normalized&&(e=Nn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=To(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Nn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=To(e,this.array)),e}setW(t,e){return this.normalized&&(e=Nn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Nn(e,this.array),n=Nn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Nn(e,this.array),n=Nn(n,this.array),r=Nn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Nn(e,this.array),n=Nn(n,this.array),r=Nn(r,this.array),s=Nn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==pg&&(t.usage=this.usage),t}}class uy extends Vi{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class hy extends Vi{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class hn extends Vi{constructor(t,e,n){super(new Float32Array(t),e,n)}}let K1=0;const ii=new ke,hh=new Rn,ho=new k,Kn=new aa,Ma=new aa,an=new k;class Ai extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:K1++}),this.uuid=Ws(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sy(t)?hy:uy)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new re().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ii.makeRotationFromQuaternion(t),this.applyMatrix4(ii),this}rotateX(t){return ii.makeRotationX(t),this.applyMatrix4(ii),this}rotateY(t){return ii.makeRotationY(t),this.applyMatrix4(ii),this}rotateZ(t){return ii.makeRotationZ(t),this.applyMatrix4(ii),this}translate(t,e,n){return ii.makeTranslation(t,e,n),this.applyMatrix4(ii),this}scale(t,e,n){return ii.makeScale(t,e,n),this.applyMatrix4(ii),this}lookAt(t){return hh.lookAt(t),hh.updateMatrix(),this.applyMatrix4(hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ho).negate(),this.translate(ho.x,ho.y,ho.z),this}setFromPoints(t){const e=[];for(let n=0,r=t.length;n<r;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new hn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new aa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Kn.setFromBufferAttribute(s),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zf);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const n=this.boundingSphere.center;if(Kn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Ma.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(Kn.min,Ma.min),Kn.expandByPoint(an),an.addVectors(Kn.max,Ma.max),Kn.expandByPoint(an)):(Kn.expandByPoint(Ma.min),Kn.expandByPoint(Ma.max))}Kn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)an.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(an));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)an.fromBufferAttribute(a,c),l&&(ho.fromBufferAttribute(t,c),an.add(ho)),r=Math.max(r,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vi(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let T=0;T<n.count;T++)a[T]=new k,l[T]=new k;const c=new k,h=new k,d=new k,f=new dt,p=new dt,y=new dt,_=new k,m=new k;function g(T,x,E){c.fromBufferAttribute(n,T),h.fromBufferAttribute(n,x),d.fromBufferAttribute(n,E),f.fromBufferAttribute(s,T),p.fromBufferAttribute(s,x),y.fromBufferAttribute(s,E),h.sub(c),d.sub(c),p.sub(f),y.sub(f);const b=1/(p.x*y.y-y.x*p.y);isFinite(b)&&(_.copy(h).multiplyScalar(y.y).addScaledVector(d,-p.y).multiplyScalar(b),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-y.x).multiplyScalar(b),a[T].add(_),a[x].add(_),a[E].add(_),l[T].add(m),l[x].add(m),l[E].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let T=0,x=A.length;T<x;++T){const E=A[T],b=E.start,L=E.count;for(let C=b,G=b+L;C<G;C+=3)g(t.getX(C+0),t.getX(C+1),t.getX(C+2))}const M=new k,R=new k,F=new k,D=new k;function S(T){F.fromBufferAttribute(r,T),D.copy(F);const x=a[T];M.copy(x),M.sub(F.multiplyScalar(F.dot(x))).normalize(),R.crossVectors(D,x);const b=R.dot(l[T])<0?-1:1;o.setXYZW(T,M.x,M.y,M.z,b)}for(let T=0,x=A.length;T<x;++T){const E=A[T],b=E.start,L=E.count;for(let C=b,G=b+L;C<G;C+=3)S(t.getX(C+0)),S(t.getX(C+1)),S(t.getX(C+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,c=new k,h=new k,d=new k;if(t)for(let f=0,p=t.count;f<p;f+=3){const y=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,y),s.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(n,y),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(y,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)an.fromBufferAttribute(t,e),an.normalize(),t.setXYZ(e,an.x,an.y,an.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let p=0,y=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let g=0;g<h;g++)f[y++]=c[p++]}return new Vi(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ai,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],d=s[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cg=new ke,rs=new tp,tc=new Zf,Ig=new k,fo=new k,po=new k,mo=new k,dh=new k,ec=new k,nc=new dt,ic=new dt,rc=new dt,Pg=new k,Dg=new k,Lg=new k,sc=new k,oc=new k;class fe extends Rn{constructor(t=new Ai,e=new Di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){ec.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],d=s[l];h!==0&&(dh.fromBufferAttribute(d,t),o?ec.addScaledVector(dh,h):ec.addScaledVector(dh.sub(e),h))}e.add(ec)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tc.copy(n.boundingSphere),tc.applyMatrix4(s),rs.copy(t.ray).recast(t.near),!(tc.containsPoint(rs.origin)===!1&&(rs.intersectSphere(tc,Ig)===null||rs.origin.distanceToSquared(Ig)>(t.far-t.near)**2))&&(Cg.copy(s).invert(),rs.copy(t.ray).applyMatrix4(Cg),!(n.boundingBox!==null&&rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,rs)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,_=f.length;y<_;y++){const m=f[y],g=o[m.materialIndex],A=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let R=A,F=M;R<F;R+=3){const D=a.getX(R),S=a.getX(R+1),T=a.getX(R+2);r=ac(this,g,t,n,c,h,d,D,S,T),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const y=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=y,g=_;m<g;m+=3){const A=a.getX(m),M=a.getX(m+1),R=a.getX(m+2);r=ac(this,o,t,n,c,h,d,A,M,R),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,_=f.length;y<_;y++){const m=f[y],g=o[m.materialIndex],A=Math.max(m.start,p.start),M=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let R=A,F=M;R<F;R+=3){const D=R,S=R+1,T=R+2;r=ac(this,g,t,n,c,h,d,D,S,T),r&&(r.faceIndex=Math.floor(R/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const y=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=y,g=_;m<g;m+=3){const A=m,M=m+1,R=m+2;r=ac(this,o,t,n,c,h,d,A,M,R),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Q1(i,t,e,n,r,s,o,a){let l;if(t.side===Bn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===qr,a),l===null)return null;oc.copy(a),oc.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(oc);return c<e.near||c>e.far?null:{distance:c,point:oc.clone(),object:i}}function ac(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,fo),i.getVertexPosition(l,po),i.getVertexPosition(c,mo);const h=Q1(i,t,e,n,fo,po,mo,sc);if(h){r&&(nc.fromBufferAttribute(r,a),ic.fromBufferAttribute(r,l),rc.fromBufferAttribute(r,c),h.uv=Pi.getInterpolation(sc,fo,po,mo,nc,ic,rc,new dt)),s&&(nc.fromBufferAttribute(s,a),ic.fromBufferAttribute(s,l),rc.fromBufferAttribute(s,c),h.uv1=Pi.getInterpolation(sc,fo,po,mo,nc,ic,rc,new dt)),o&&(Pg.fromBufferAttribute(o,a),Dg.fromBufferAttribute(o,l),Lg.fromBufferAttribute(o,c),h.normal=Pi.getInterpolation(sc,fo,po,mo,Pg,Dg,Lg,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new k,materialIndex:0};Pi.getNormal(fo,po,mo,d.normal),h.face=d}return h}class fr extends Ai{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,p=0;y("z","y","x",-1,-1,n,e,t,o,s,0),y("z","y","x",1,-1,n,e,-t,o,s,1),y("x","z","y",1,1,t,n,e,r,o,2),y("x","z","y",1,-1,t,n,-e,r,o,3),y("x","y","z",1,-1,t,e,n,r,s,4),y("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new hn(c,3)),this.setAttribute("normal",new hn(h,3)),this.setAttribute("uv",new hn(d,2));function y(_,m,g,A,M,R,F,D,S,T,x){const E=R/S,b=F/T,L=R/2,C=F/2,G=D/2,K=S+1,W=T+1;let tt=0,Q=0;const gt=new k;for(let St=0;St<W;St++){const xt=St*b-C;for(let Ut=0;Ut<K;Ut++){const Bt=Ut*E-L;gt[_]=Bt*A,gt[m]=xt*M,gt[g]=G,c.push(gt.x,gt.y,gt.z),gt[_]=0,gt[m]=0,gt[g]=D>0?1:-1,h.push(gt.x,gt.y,gt.z),d.push(Ut/S),d.push(1-St/T),tt+=1}}for(let St=0;St<T;St++)for(let xt=0;xt<S;xt++){const Ut=f+xt+K*St,Bt=f+xt+K*(St+1),et=f+(xt+1)+K*(St+1),at=f+(xt+1)+K*St;l.push(Ut,Bt,at),l.push(Bt,et,at),Q+=6}a.addGroup(p,Q,x),p+=Q,f+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Yo(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function On(i){const t={};for(let e=0;e<i.length;e++){const n=Yo(i[e]);for(const r in n)t[r]=n[r]}return t}function J1(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function dy(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}const Z1={clone:Yo,merge:On};var tR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $r extends la{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tR,this.fragmentShader=eR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yo(t.uniforms),this.uniformsGroups=J1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class fy extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=sr}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tr=new k,Ng=new dt,Og=new dt;class si extends fy{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=il*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(za*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return il*2*Math.atan(Math.tan(za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Tr.x,Tr.y).multiplyScalar(-t/Tr.z),Tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Tr.x,Tr.y).multiplyScalar(-t/Tr.z)}getViewSize(t,e){return this.getViewBounds(t,Ng,Og),e.subVectors(Og,Ng)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(za*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const go=-90,_o=1;class nR extends Rn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new si(go,_o,t,e);r.layers=this.layers,this.add(r);const s=new si(go,_o,t,e);s.layers=this.layers,this.add(s);const o=new si(go,_o,t,e);o.layers=this.layers,this.add(o);const a=new si(go,_o,t,e);a.layers=this.layers,this.add(a);const l=new si(go,_o,t,e);l.layers=this.layers,this.add(l);const c=new si(go,_o,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===sr)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Qc)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(d,f,p),t.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class py extends Fn{constructor(t,e,n,r,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:qo,super(t,e,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class iR extends Us{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new py(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:vi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new fr(5,5,5),s=new $r({name:"CubemapFromEquirect",uniforms:Yo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bn,blending:Ur});s.uniforms.tEquirect.value=e;const o=new fe(r,s),a=e.minFilter;return e.minFilter===xs&&(e.minFilter=vi),new nR(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}const fh=new k,rR=new k,sR=new re;class wr{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=fh.subVectors(n,e).cross(rR.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(fh),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||sR.getNormalMatrix(t),r=this.coplanarPoint(fh).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ss=new Zf,lc=new k;class np{constructor(t=new wr,e=new wr,n=new wr,r=new wr,s=new wr,o=new wr){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=sr){const n=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],d=r[6],f=r[7],p=r[8],y=r[9],_=r[10],m=r[11],g=r[12],A=r[13],M=r[14],R=r[15];if(n[0].setComponents(l-s,f-c,m-p,R-g).normalize(),n[1].setComponents(l+s,f+c,m+p,R+g).normalize(),n[2].setComponents(l+o,f+h,m+y,R+A).normalize(),n[3].setComponents(l-o,f-h,m-y,R-A).normalize(),n[4].setComponents(l-a,f-d,m-_,R-M).normalize(),e===sr)n[5].setComponents(l+a,f+d,m+_,R+M).normalize();else if(e===Qc)n[5].setComponents(a,d,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(t){return ss.center.set(0,0,0),ss.radius=.7071067811865476,ss.applyMatrix4(t.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(lc.x=r.normal.x>0?t.max.x:t.min.x,lc.y=r.normal.y>0?t.max.y:t.min.y,lc.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(lc)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function my(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function oR(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l._updateRange,f=l.updateRanges;if(i.bindBuffer(c,a),d.count===-1&&f.length===0&&i.bufferSubData(c,0,h),f.length!==0){for(let p=0,y=f.length;p<y;p++){const _=f[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}d.count!==-1&&(i.bufferSubData(c,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class lr extends Ai{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,d=t/a,f=e/l,p=[],y=[],_=[],m=[];for(let g=0;g<h;g++){const A=g*f-o;for(let M=0;M<c;M++){const R=M*d-s;y.push(R,-A,0),_.push(0,0,1),m.push(M/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let A=0;A<a;A++){const M=A+c*g,R=A+c*(g+1),F=A+1+c*(g+1),D=A+1+c*g;p.push(M,R,D),p.push(R,F,D)}this.setIndex(p),this.setAttribute("position",new hn(y,3)),this.setAttribute("normal",new hn(_,3)),this.setAttribute("uv",new hn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lr(t.width,t.height,t.widthSegments,t.heightSegments)}}var aR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lR=`#ifdef USE_ALPHAHASH
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
#endif`,cR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fR=`#ifdef USE_AOMAP
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
#endif`,pR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mR=`#ifdef USE_BATCHING
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
#endif`,gR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_R=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xR=`#ifdef USE_IRIDESCENCE
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
#endif`,ER=`#ifdef USE_BUMPMAP
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
#endif`,SR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,TR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,MR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,AR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,RR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,CR=`#if defined( USE_COLOR_ALPHA )
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
#endif`,IR=`#define PI 3.141592653589793
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
} // validated`,PR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,DR=`vec3 transformedNormal = objectNormal;
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
#endif`,LR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,OR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,UR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FR="gl_FragColor = linearToOutputTexel( gl_FragColor );",VR=`
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
}`,kR=`#ifdef USE_ENVMAP
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
#endif`,BR=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zR=`#ifdef USE_ENVMAP
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
#endif`,HR=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,GR=`#ifdef USE_ENVMAP
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
#endif`,WR=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qR=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$R=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,XR=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jR=`#ifdef USE_GRADIENTMAP
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
}`,YR=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,KR=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QR=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JR=`uniform bool receiveShadow;
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
#endif`,ZR=`#ifdef USE_ENVMAP
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
#endif`,tC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iC=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rC=`PhysicalMaterial material;
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
#endif`,sC=`struct PhysicalMaterial {
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
}`,oC=`
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
#endif`,aC=`#if defined( RE_IndirectDiffuse )
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
#endif`,lC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cC=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uC=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hC=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dC=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gC=`#if defined( USE_POINTS_UV )
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
#endif`,_C=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,EC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SC=`#ifdef USE_MORPHTARGETS
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
#endif`,TC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,MC=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,AC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,CC=`#ifdef USE_NORMALMAP
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
#endif`,IC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,DC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,LC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OC=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,UC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,FC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,VC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,BC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,HC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,GC=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,WC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qC=`float getShadowMask() {
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
}`,$C=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,XC=`#ifdef USE_SKINNING
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
#endif`,jC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,YC=`#ifdef USE_SKINNING
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
#endif`,KC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,JC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ZC=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tI=`#ifdef USE_TRANSMISSION
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
#endif`,eI=`#ifdef USE_TRANSMISSION
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
#endif`,nI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sI=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oI=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aI=`uniform sampler2D t2D;
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
}`,lI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cI=`#ifdef ENVMAP_TYPE_CUBE
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
}`,uI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hI=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dI=`#include <common>
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
}`,fI=`#if DEPTH_PACKING == 3200
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
}`,pI=`#define DISTANCE
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
}`,mI=`#define DISTANCE
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
}`,gI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_I=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vI=`uniform float scale;
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
}`,yI=`uniform vec3 diffuse;
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
}`,xI=`#include <common>
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
}`,EI=`uniform vec3 diffuse;
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
}`,SI=`#define LAMBERT
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
}`,TI=`#define LAMBERT
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
}`,wI=`#define MATCAP
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
}`,MI=`#define MATCAP
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
}`,AI=`#define NORMAL
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
}`,bI=`#define NORMAL
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
}`,RI=`#define PHONG
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
}`,CI=`#define PHONG
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
}`,II=`#define STANDARD
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
}`,PI=`#define STANDARD
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
}`,DI=`#define TOON
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
}`,LI=`#define TOON
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
}`,NI=`uniform float size;
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
}`,OI=`uniform vec3 diffuse;
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
}`,UI=`#include <common>
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
}`,FI=`uniform vec3 color;
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
}`,VI=`uniform float rotation;
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
}`,kI=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:aR,alphahash_pars_fragment:lR,alphamap_fragment:cR,alphamap_pars_fragment:uR,alphatest_fragment:hR,alphatest_pars_fragment:dR,aomap_fragment:fR,aomap_pars_fragment:pR,batching_pars_vertex:mR,batching_vertex:gR,begin_vertex:_R,beginnormal_vertex:vR,bsdfs:yR,iridescence_fragment:xR,bumpmap_pars_fragment:ER,clipping_planes_fragment:SR,clipping_planes_pars_fragment:TR,clipping_planes_pars_vertex:wR,clipping_planes_vertex:MR,color_fragment:AR,color_pars_fragment:bR,color_pars_vertex:RR,color_vertex:CR,common:IR,cube_uv_reflection_fragment:PR,defaultnormal_vertex:DR,displacementmap_pars_vertex:LR,displacementmap_vertex:NR,emissivemap_fragment:OR,emissivemap_pars_fragment:UR,colorspace_fragment:FR,colorspace_pars_fragment:VR,envmap_fragment:kR,envmap_common_pars_fragment:BR,envmap_pars_fragment:zR,envmap_pars_vertex:HR,envmap_physical_pars_fragment:ZR,envmap_vertex:GR,fog_vertex:WR,fog_pars_vertex:qR,fog_fragment:$R,fog_pars_fragment:XR,gradientmap_pars_fragment:jR,lightmap_pars_fragment:YR,lights_lambert_fragment:KR,lights_lambert_pars_fragment:QR,lights_pars_begin:JR,lights_toon_fragment:tC,lights_toon_pars_fragment:eC,lights_phong_fragment:nC,lights_phong_pars_fragment:iC,lights_physical_fragment:rC,lights_physical_pars_fragment:sC,lights_fragment_begin:oC,lights_fragment_maps:aC,lights_fragment_end:lC,logdepthbuf_fragment:cC,logdepthbuf_pars_fragment:uC,logdepthbuf_pars_vertex:hC,logdepthbuf_vertex:dC,map_fragment:fC,map_pars_fragment:pC,map_particle_fragment:mC,map_particle_pars_fragment:gC,metalnessmap_fragment:_C,metalnessmap_pars_fragment:vC,morphinstance_vertex:yC,morphcolor_vertex:xC,morphnormal_vertex:EC,morphtarget_pars_vertex:SC,morphtarget_vertex:TC,normal_fragment_begin:wC,normal_fragment_maps:MC,normal_pars_fragment:AC,normal_pars_vertex:bC,normal_vertex:RC,normalmap_pars_fragment:CC,clearcoat_normal_fragment_begin:IC,clearcoat_normal_fragment_maps:PC,clearcoat_pars_fragment:DC,iridescence_pars_fragment:LC,opaque_fragment:NC,packing:OC,premultiplied_alpha_fragment:UC,project_vertex:FC,dithering_fragment:VC,dithering_pars_fragment:kC,roughnessmap_fragment:BC,roughnessmap_pars_fragment:zC,shadowmap_pars_fragment:HC,shadowmap_pars_vertex:GC,shadowmap_vertex:WC,shadowmask_pars_fragment:qC,skinbase_vertex:$C,skinning_pars_vertex:XC,skinning_vertex:jC,skinnormal_vertex:YC,specularmap_fragment:KC,specularmap_pars_fragment:QC,tonemapping_fragment:JC,tonemapping_pars_fragment:ZC,transmission_fragment:tI,transmission_pars_fragment:eI,uv_pars_fragment:nI,uv_pars_vertex:iI,uv_vertex:rI,worldpos_vertex:sI,background_vert:oI,background_frag:aI,backgroundCube_vert:lI,backgroundCube_frag:cI,cube_vert:uI,cube_frag:hI,depth_vert:dI,depth_frag:fI,distanceRGBA_vert:pI,distanceRGBA_frag:mI,equirect_vert:gI,equirect_frag:_I,linedashed_vert:vI,linedashed_frag:yI,meshbasic_vert:xI,meshbasic_frag:EI,meshlambert_vert:SI,meshlambert_frag:TI,meshmatcap_vert:wI,meshmatcap_frag:MI,meshnormal_vert:AI,meshnormal_frag:bI,meshphong_vert:RI,meshphong_frag:CI,meshphysical_vert:II,meshphysical_frag:PI,meshtoon_vert:DI,meshtoon_frag:LI,points_vert:NI,points_frag:OI,shadow_vert:UI,shadow_frag:FI,sprite_vert:VI,sprite_frag:kI},wt={common:{diffuse:{value:new se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new se(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},Ci={basic:{uniforms:On([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:On([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new se(0)}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:On([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new se(0)},specular:{value:new se(1118481)},shininess:{value:30}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:On([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:On([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new se(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:On([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:On([wt.points,wt.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:On([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:On([wt.common,wt.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:On([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:On([wt.sprite,wt.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distanceRGBA:{uniforms:On([wt.common,wt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distanceRGBA_vert,fragmentShader:ie.distanceRGBA_frag},shadow:{uniforms:On([wt.lights,wt.fog,{color:{value:new se(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};Ci.physical={uniforms:On([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new se(0)},specularColor:{value:new se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};const cc={r:0,b:0,g:0},os=new wi,BI=new ke;function zI(i,t,e,n,r,s,o){const a=new se(0);let l=s===!0?0:1,c,h,d=null,f=0,p=null;function y(A){let M=A.isScene===!0?A.background:null;return M&&M.isTexture&&(M=(A.backgroundBlurriness>0?e:t).get(M)),M}function _(A){let M=!1;const R=y(A);R===null?g(a,l):R&&R.isColor&&(g(R,1),M=!0);const F=i.xr.getEnvironmentBlendMode();F==="additive"?n.buffers.color.setClear(0,0,0,1,o):F==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(A,M){const R=y(M);R&&(R.isCubeTexture||R.mapping===Su)?(h===void 0&&(h=new fe(new fr(1,1,1),new $r({name:"BackgroundCubeMaterial",uniforms:Yo(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(F,D,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),os.copy(M.backgroundRotation),os.x*=-1,os.y*=-1,os.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(BI.makeRotationFromEuler(os)),h.material.toneMapped=_e.getTransfer(R.colorSpace)!==be,(d!==R||f!==R.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=R,f=R.version,p=i.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new fe(new lr(2,2),new $r({name:"BackgroundMaterial",uniforms:Yo(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:qr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=_e.getTransfer(R.colorSpace)!==be,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||f!==R.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=R,f=R.version,p=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function g(A,M){A.getRGB(cc,dy(i)),n.buffers.color.setClear(cc.r,cc.g,cc.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(A,M=1){a.set(A),l=M,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,g(a,l)},render:_,addToRenderList:m}}function HI(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,o=!1;function a(E,b,L,C,G){let K=!1;const W=d(C,L,b);s!==W&&(s=W,c(s.object)),K=p(E,C,L,G),K&&y(E,C,L,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,R(E,b,L,C),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function d(E,b,L){const C=L.wireframe===!0;let G=n[E.id];G===void 0&&(G={},n[E.id]=G);let K=G[b.id];K===void 0&&(K={},G[b.id]=K);let W=K[C];return W===void 0&&(W=f(l()),K[C]=W),W}function f(E){const b=[],L=[],C=[];for(let G=0;G<e;G++)b[G]=0,L[G]=0,C[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:L,attributeDivisors:C,object:E,attributes:{},index:null}}function p(E,b,L,C){const G=s.attributes,K=b.attributes;let W=0;const tt=L.getAttributes();for(const Q in tt)if(tt[Q].location>=0){const St=G[Q];let xt=K[Q];if(xt===void 0&&(Q==="instanceMatrix"&&E.instanceMatrix&&(xt=E.instanceMatrix),Q==="instanceColor"&&E.instanceColor&&(xt=E.instanceColor)),St===void 0||St.attribute!==xt||xt&&St.data!==xt.data)return!0;W++}return s.attributesNum!==W||s.index!==C}function y(E,b,L,C){const G={},K=b.attributes;let W=0;const tt=L.getAttributes();for(const Q in tt)if(tt[Q].location>=0){let St=K[Q];St===void 0&&(Q==="instanceMatrix"&&E.instanceMatrix&&(St=E.instanceMatrix),Q==="instanceColor"&&E.instanceColor&&(St=E.instanceColor));const xt={};xt.attribute=St,St&&St.data&&(xt.data=St.data),G[Q]=xt,W++}s.attributes=G,s.attributesNum=W,s.index=C}function _(){const E=s.newAttributes;for(let b=0,L=E.length;b<L;b++)E[b]=0}function m(E){g(E,0)}function g(E,b){const L=s.newAttributes,C=s.enabledAttributes,G=s.attributeDivisors;L[E]=1,C[E]===0&&(i.enableVertexAttribArray(E),C[E]=1),G[E]!==b&&(i.vertexAttribDivisor(E,b),G[E]=b)}function A(){const E=s.newAttributes,b=s.enabledAttributes;for(let L=0,C=b.length;L<C;L++)b[L]!==E[L]&&(i.disableVertexAttribArray(L),b[L]=0)}function M(E,b,L,C,G,K,W){W===!0?i.vertexAttribIPointer(E,b,L,G,K):i.vertexAttribPointer(E,b,L,C,G,K)}function R(E,b,L,C){_();const G=C.attributes,K=L.getAttributes(),W=b.defaultAttributeValues;for(const tt in K){const Q=K[tt];if(Q.location>=0){let gt=G[tt];if(gt===void 0&&(tt==="instanceMatrix"&&E.instanceMatrix&&(gt=E.instanceMatrix),tt==="instanceColor"&&E.instanceColor&&(gt=E.instanceColor)),gt!==void 0){const St=gt.normalized,xt=gt.itemSize,Ut=t.get(gt);if(Ut===void 0)continue;const Bt=Ut.buffer,et=Ut.type,at=Ut.bytesPerElement,Ct=et===i.INT||et===i.UNSIGNED_INT||gt.gpuType===Wf;if(gt.isInterleavedBufferAttribute){const _t=gt.data,Wt=_t.stride,Jt=gt.offset;if(_t.isInstancedInterleavedBuffer){for(let zt=0;zt<Q.locationSize;zt++)g(Q.location+zt,_t.meshPerAttribute);E.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let zt=0;zt<Q.locationSize;zt++)m(Q.location+zt);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let zt=0;zt<Q.locationSize;zt++)M(Q.location+zt,xt/Q.locationSize,et,St,Wt*at,(Jt+xt/Q.locationSize*zt)*at,Ct)}else{if(gt.isInstancedBufferAttribute){for(let _t=0;_t<Q.locationSize;_t++)g(Q.location+_t,gt.meshPerAttribute);E.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let _t=0;_t<Q.locationSize;_t++)m(Q.location+_t);i.bindBuffer(i.ARRAY_BUFFER,Bt);for(let _t=0;_t<Q.locationSize;_t++)M(Q.location+_t,xt/Q.locationSize,et,St,xt*at,xt/Q.locationSize*_t*at,Ct)}}else if(W!==void 0){const St=W[tt];if(St!==void 0)switch(St.length){case 2:i.vertexAttrib2fv(Q.location,St);break;case 3:i.vertexAttrib3fv(Q.location,St);break;case 4:i.vertexAttrib4fv(Q.location,St);break;default:i.vertexAttrib1fv(Q.location,St)}}}}A()}function F(){T();for(const E in n){const b=n[E];for(const L in b){const C=b[L];for(const G in C)h(C[G].object),delete C[G];delete b[L]}delete n[E]}}function D(E){if(n[E.id]===void 0)return;const b=n[E.id];for(const L in b){const C=b[L];for(const G in C)h(C[G].object),delete C[G];delete b[L]}delete n[E.id]}function S(E){for(const b in n){const L=n[b];if(L[E.id]===void 0)continue;const C=L[E.id];for(const G in C)h(C[G].object),delete C[G];delete L[E.id]}}function T(){x(),o=!0,s!==r&&(s=r,c(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:x,dispose:F,releaseStatesOfGeometry:D,releaseStatesOfProgram:S,initAttributes:_,enableAttribute:m,disableUnusedAttributes:A}}function GI(i,t,e){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let y=0;y<d;y++)p+=h[y];e.update(p,n,1)}function l(c,h,d,f){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let y=0;y<c.length;y++)o(c[y],h[y],f[y]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let y=0;for(let _=0;_<d;_++)y+=h[_];for(let _=0;_<f.length;_++)e.update(y,n,f[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function WI(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(D){return!(D!==xi&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const S=D===wl&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==dr&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==rr&&!S)}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=p>0,F=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:g,maxVaryings:A,maxFragmentUniforms:M,vertexTextures:R,maxSamples:F}}function qI(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new wr,a=new re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||n!==0||r;return r=f,n=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,p){const y=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,g=i.get(d);if(!r||y===null||y.length===0||s&&!m)s?h(null):c();else{const A=s?0:n,M=A*4;let R=g.clippingState||null;l.value=R,R=h(y,f,M,p);for(let F=0;F!==M;++F)R[F]=e[F];g.clippingState=R,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,p,y){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,y!==!0||m===null){const g=p+_*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<g)&&(m=new Float32Array(g));for(let M=0,R=p;M!==_;++M,R+=4)o.copy(d[M]).applyMatrix4(A,a),o.normal.toArray(m,R),m[R+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function $I(i){let t=new WeakMap;function e(o,a){return a===od?o.mapping=qo:a===ad&&(o.mapping=$o),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===od||a===ad)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new iR(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",r),e(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class gy extends fy{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const wo=4,Ug=[.125,.215,.35,.446,.526,.582],gs=20,ph=new gy,Fg=new se;let mh=null,gh=0,_h=0,vh=!1;const hs=(1+Math.sqrt(5))/2,vo=1/hs,Vg=[new k(-hs,vo,0),new k(hs,vo,0),new k(-vo,0,hs),new k(vo,0,hs),new k(0,hs,-vo),new k(0,hs,vo),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class kg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(mh,gh,_h),this._renderer.xr.enabled=vh,t.scissorTest=!1,uc(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qo||t.mapping===$o?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),_h=this._renderer.getActiveMipmapLevel(),vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:vi,minFilter:vi,generateMipmaps:!1,type:wl,format:xi,colorSpace:Kr,depthBuffer:!1},r=Bg(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bg(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=XI(s)),this._blurMaterial=jI(s,t,e)}return r}_compileMaterial(t){const e=new fe(this._lodPlanes[0],t);this._renderer.compile(e,ph)}_sceneToCubeUV(t,e,n,r){const a=new si(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Fg),h.toneMapping=Fr,h.autoClear=!1;const p=new Di({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),y=new fe(new fr,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Fg),_=!0);for(let g=0;g<6;g++){const A=g%3;A===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):A===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));const M=this._cubeSize;uc(r,A*M,g>2?M:0,M,M),h.setRenderTarget(r),_&&h.render(y,a),h.render(t,a)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===qo||t.mapping===$o;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new fe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;uc(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ph)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Vg[(r-s-1)%Vg.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new fe(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[n]-1,y=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*gs-1),_=s/y,m=isFinite(s)?1+Math.floor(h*_):gs;m>gs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gs}`);const g=[];let A=0;for(let S=0;S<gs;++S){const T=S/_,x=Math.exp(-T*T/2);g.push(x),S===0?A+=x:S<m&&(A+=2*x)}for(let S=0;S<g.length;S++)g[S]=g[S]/A;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=y,f.mipInt.value=M-n;const R=this._sizeLods[r],F=3*R*(r>M-wo?r-M+wo:0),D=4*(this._cubeSize-R);uc(e,F,D,3*R,2*R),l.setRenderTarget(e),l.render(d,ph)}}function XI(i){const t=[],e=[],n=[];let r=i;const s=i-wo+1+Ug.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>i-wo?l=Ug[o-i+wo-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,y=6,_=3,m=2,g=1,A=new Float32Array(_*y*p),M=new Float32Array(m*y*p),R=new Float32Array(g*y*p);for(let D=0;D<p;D++){const S=D%3*2/3-1,T=D>2?0:-1,x=[S,T,0,S+2/3,T,0,S+2/3,T+1,0,S,T,0,S+2/3,T+1,0,S,T+1,0];A.set(x,_*y*D),M.set(f,m*y*D);const E=[D,D,D,D,D,D];R.set(E,g*y*D)}const F=new Ai;F.setAttribute("position",new Vi(A,_)),F.setAttribute("uv",new Vi(M,m)),F.setAttribute("faceIndex",new Vi(R,g)),t.push(F),r>wo&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Bg(i,t,e){const n=new Us(i,t,e);return n.texture.mapping=Su,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function uc(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function jI(i,t,e){const n=new Float32Array(gs),r=new k(0,1,0);return new $r({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ip(),fragmentShader:`

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
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function zg(){return new $r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ip(),fragmentShader:`

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
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function Hg(){return new $r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ip(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function ip(){return`

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
	`}function YI(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===od||l===ad,h=l===qo||l===$o;if(c||h){let d=t.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new kg(i)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&r(p)?(e===null&&(e=new kg(i)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function KI(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&oy("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function QI(i,t,e,n){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const y in f.attributes)t.remove(f.attributes[y]);for(const y in f.morphAttributes){const _=f.morphAttributes[y];for(let m=0,g=_.length;m<g;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(t.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const y in f)t.update(f[y],i.ARRAY_BUFFER);const p=d.morphAttributes;for(const y in p){const _=p[y];for(let m=0,g=_.length;m<g;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(d){const f=[],p=d.index,y=d.attributes.position;let _=0;if(p!==null){const A=p.array;_=p.version;for(let M=0,R=A.length;M<R;M+=3){const F=A[M+0],D=A[M+1],S=A[M+2];f.push(F,D,D,S,S,F)}}else if(y!==void 0){const A=y.array;_=y.version;for(let M=0,R=A.length/3-1;M<R;M+=3){const F=M+0,D=M+1,S=M+2;f.push(F,D,D,S,S,F)}}else return;const m=new(sy(f)?hy:uy)(f,1);m.version=_;const g=s.get(d);g&&t.remove(g),s.set(d,m)}function h(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function JI(i,t,e){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,s,f*o),e.update(p,n,1)}function c(f,p,y){y!==0&&(i.drawElementsInstanced(n,p,s,f*o,y),e.update(p,n,y))}function h(f,p,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,y);let m=0;for(let g=0;g<y;g++)m+=p[g];e.update(m,n,1)}function d(f,p,y,_){if(y===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f.length;g++)c(f[g]/o,p[g],_[g]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,_,0,y);let g=0;for(let A=0;A<y;A++)g+=p[A];for(let A=0;A<_.length;A++)e.update(g,n,_[A])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function ZI(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function tP(i,t,e){const n=new WeakMap,r=new nn;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==d){let E=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",E)};var p=E;f!==void 0&&f.texture.dispose();const y=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let R=0;y===!0&&(R=1),_===!0&&(R=2),m===!0&&(R=3);let F=a.attributes.position.count*R,D=1;F>t.maxTextureSize&&(D=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const S=new Float32Array(F*D*4*d),T=new ly(S,F,D,d);T.type=rr,T.needsUpdate=!0;const x=R*4;for(let b=0;b<d;b++){const L=g[b],C=A[b],G=M[b],K=F*D*4*b;for(let W=0;W<L.count;W++){const tt=W*x;y===!0&&(r.fromBufferAttribute(L,W),S[K+tt+0]=r.x,S[K+tt+1]=r.y,S[K+tt+2]=r.z,S[K+tt+3]=0),_===!0&&(r.fromBufferAttribute(C,W),S[K+tt+4]=r.x,S[K+tt+5]=r.y,S[K+tt+6]=r.z,S[K+tt+7]=0),m===!0&&(r.fromBufferAttribute(G,W),S[K+tt+8]=r.x,S[K+tt+9]=r.y,S[K+tt+10]=r.z,S[K+tt+11]=G.itemSize===4?r.w:1)}}f={count:d,texture:T,size:new dt(F,D)},n.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let y=0;for(let m=0;m<c.length;m++)y+=c[m];const _=a.morphTargetsRelative?1:1-y;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function eP(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(r.get(d)!==c&&(t.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class _y extends Fn{constructor(t,e,n,r,s,o,a,l,c,h=Do){if(h!==Do&&h!==jo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Do&&(n=Os),n===void 0&&h===jo&&(n=Xo),super(null,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ai,this.minFilter=l!==void 0?l:ai,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const vy=new Fn,Gg=new _y(1,1),yy=new ly,xy=new z1,Ey=new py,Wg=[],qg=[],$g=new Float32Array(16),Xg=new Float32Array(9),jg=new Float32Array(4);function ca(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Wg[r];if(s===void 0&&(s=new Float32Array(r),Wg[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function sn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function on(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function wu(i,t){let e=qg[t];e===void 0&&(e=new Int32Array(t),qg[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function nP(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function iP(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;i.uniform2fv(this.addr,t),on(e,t)}}function rP(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(sn(e,t))return;i.uniform3fv(this.addr,t),on(e,t)}}function sP(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;i.uniform4fv(this.addr,t),on(e,t)}}function oP(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),on(e,t)}else{if(sn(e,n))return;jg.set(n),i.uniformMatrix2fv(this.addr,!1,jg),on(e,n)}}function aP(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),on(e,t)}else{if(sn(e,n))return;Xg.set(n),i.uniformMatrix3fv(this.addr,!1,Xg),on(e,n)}}function lP(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(sn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),on(e,t)}else{if(sn(e,n))return;$g.set(n),i.uniformMatrix4fv(this.addr,!1,$g),on(e,n)}}function cP(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function uP(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;i.uniform2iv(this.addr,t),on(e,t)}}function hP(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;i.uniform3iv(this.addr,t),on(e,t)}}function dP(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;i.uniform4iv(this.addr,t),on(e,t)}}function fP(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function pP(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(sn(e,t))return;i.uniform2uiv(this.addr,t),on(e,t)}}function mP(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(sn(e,t))return;i.uniform3uiv(this.addr,t),on(e,t)}}function gP(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(sn(e,t))return;i.uniform4uiv(this.addr,t),on(e,t)}}function _P(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Gg.compareFunction=ry,s=Gg):s=vy,e.setTexture2D(t||s,r)}function vP(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||xy,r)}function yP(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Ey,r)}function xP(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||yy,r)}function EP(i){switch(i){case 5126:return nP;case 35664:return iP;case 35665:return rP;case 35666:return sP;case 35674:return oP;case 35675:return aP;case 35676:return lP;case 5124:case 35670:return cP;case 35667:case 35671:return uP;case 35668:case 35672:return hP;case 35669:case 35673:return dP;case 5125:return fP;case 36294:return pP;case 36295:return mP;case 36296:return gP;case 35678:case 36198:case 36298:case 36306:case 35682:return _P;case 35679:case 36299:case 36307:return vP;case 35680:case 36300:case 36308:case 36293:return yP;case 36289:case 36303:case 36311:case 36292:return xP}}function SP(i,t){i.uniform1fv(this.addr,t)}function TP(i,t){const e=ca(t,this.size,2);i.uniform2fv(this.addr,e)}function wP(i,t){const e=ca(t,this.size,3);i.uniform3fv(this.addr,e)}function MP(i,t){const e=ca(t,this.size,4);i.uniform4fv(this.addr,e)}function AP(i,t){const e=ca(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function bP(i,t){const e=ca(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function RP(i,t){const e=ca(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function CP(i,t){i.uniform1iv(this.addr,t)}function IP(i,t){i.uniform2iv(this.addr,t)}function PP(i,t){i.uniform3iv(this.addr,t)}function DP(i,t){i.uniform4iv(this.addr,t)}function LP(i,t){i.uniform1uiv(this.addr,t)}function NP(i,t){i.uniform2uiv(this.addr,t)}function OP(i,t){i.uniform3uiv(this.addr,t)}function UP(i,t){i.uniform4uiv(this.addr,t)}function FP(i,t,e){const n=this.cache,r=t.length,s=wu(e,r);sn(n,s)||(i.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||vy,s[o])}function VP(i,t,e){const n=this.cache,r=t.length,s=wu(e,r);sn(n,s)||(i.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||xy,s[o])}function kP(i,t,e){const n=this.cache,r=t.length,s=wu(e,r);sn(n,s)||(i.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Ey,s[o])}function BP(i,t,e){const n=this.cache,r=t.length,s=wu(e,r);sn(n,s)||(i.uniform1iv(this.addr,s),on(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||yy,s[o])}function zP(i){switch(i){case 5126:return SP;case 35664:return TP;case 35665:return wP;case 35666:return MP;case 35674:return AP;case 35675:return bP;case 35676:return RP;case 5124:case 35670:return CP;case 35667:case 35671:return IP;case 35668:case 35672:return PP;case 35669:case 35673:return DP;case 5125:return LP;case 36294:return NP;case 36295:return OP;case 36296:return UP;case 35678:case 36198:case 36298:case 36306:case 35682:return FP;case 35679:case 36299:case 36307:return VP;case 35680:case 36300:case 36308:case 36293:return kP;case 36289:case 36303:case 36311:case 36292:return BP}}class HP{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=EP(e.type)}}class GP{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zP(e.type)}}class WP{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const yh=/(\w+)(\])?(\[|\.)?/g;function Yg(i,t){i.seq.push(t),i.map[t.id]=t}function qP(i,t,e){const n=i.name,r=n.length;for(yh.lastIndex=0;;){const s=yh.exec(n),o=yh.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Yg(e,c===void 0?new HP(a,i,t):new GP(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new WP(a),Yg(e,d)),e=d}}}class Ac{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);qP(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function Kg(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const $P=37297;let XP=0;function jP(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function YP(i){const t=_e.getPrimaries(_e.workingColorSpace),e=_e.getPrimaries(i);let n;switch(t===e?n="":t===Kc&&e===Yc?n="LinearDisplayP3ToLinearSRGB":t===Yc&&e===Kc&&(n="LinearSRGBToLinearDisplayP3"),i){case Kr:case Tu:return[n,"LinearTransferOETF"];case mn:case Qf:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Qg(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+jP(i.getShaderSource(t),o)}else return r}function KP(i,t){const e=YP(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function QP(i,t){let e;switch(t){case Zb:e="Linear";break;case t1:e="Reinhard";break;case e1:e="OptimizedCineon";break;case n1:e="ACESFilmic";break;case r1:e="AgX";break;case s1:e="Neutral";break;case i1:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function JP(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Pa).join(`
`)}function ZP(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function tD(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Pa(i){return i!==""}function Jg(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zg(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const eD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ud(i){return i.replace(eD,iD)}const nD=new Map;function iD(i,t){let e=ie[t];if(e===void 0){const n=nD.get(t);if(n!==void 0)e=ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ud(e)}const rD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function t_(i){return i.replace(rD,sD)}function sD(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function e_(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function oD(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===$v?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Mb?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===tr&&(t="SHADOWMAP_TYPE_VSM"),t}function aD(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qo:case $o:t="ENVMAP_TYPE_CUBE";break;case Su:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lD(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case $o:t="ENVMAP_MODE_REFRACTION";break}return t}function cD(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Gf:t="ENVMAP_BLENDING_MULTIPLY";break;case Qb:t="ENVMAP_BLENDING_MIX";break;case Jb:t="ENVMAP_BLENDING_ADD";break}return t}function uD(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function hD(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=oD(e),c=aD(e),h=lD(e),d=cD(e),f=uD(e),p=JP(e),y=ZP(s),_=r.createProgram();let m,g,A=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Pa).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(Pa).join(`
`),g.length>0&&(g+=`
`)):(m=[e_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pa).join(`
`),g=[e_(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fr?"#define TONE_MAPPING":"",e.toneMapping!==Fr?ie.tonemapping_pars_fragment:"",e.toneMapping!==Fr?QP("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,KP("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Pa).join(`
`)),o=Ud(o),o=Jg(o,e),o=Zg(o,e),a=Ud(a),a=Jg(a,e),a=Zg(a,e),o=t_(o),a=t_(a),e.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===mg?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===mg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const M=A+m+o,R=A+g+a,F=Kg(r,r.VERTEX_SHADER,M),D=Kg(r,r.FRAGMENT_SHADER,R);r.attachShader(_,F),r.attachShader(_,D),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function S(b){if(i.debug.checkShaderErrors){const L=r.getProgramInfoLog(_).trim(),C=r.getShaderInfoLog(F).trim(),G=r.getShaderInfoLog(D).trim();let K=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,F,D);else{const tt=Qg(r,F,"vertex"),Q=Qg(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+L+`
`+tt+`
`+Q)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(C===""||G==="")&&(W=!1);W&&(b.diagnostics={runnable:K,programLog:L,vertexShader:{log:C,prefix:m},fragmentShader:{log:G,prefix:g}})}r.deleteShader(F),r.deleteShader(D),T=new Ac(r,_),x=tD(r,_)}let T;this.getUniforms=function(){return T===void 0&&S(this),T};let x;this.getAttributes=function(){return x===void 0&&S(this),x};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(_,$P)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=XP++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=F,this.fragmentShader=D,this}let dD=0;class fD{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new pD(t),e.set(t,n)),n}}class pD{constructor(t){this.id=dD++,this.code=t,this.usedTimes=0}}function mD(i,t,e,n,r,s,o){const a=new ep,l=new fD,c=new Set,h=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,E,b,L,C){const G=L.fog,K=C.geometry,W=x.isMeshStandardMaterial?L.environment:null,tt=(x.isMeshStandardMaterial?e:t).get(x.envMap||W),Q=tt&&tt.mapping===Su?tt.image.height:null,gt=y[x.type];x.precision!==null&&(p=r.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const St=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,xt=St!==void 0?St.length:0;let Ut=0;K.morphAttributes.position!==void 0&&(Ut=1),K.morphAttributes.normal!==void 0&&(Ut=2),K.morphAttributes.color!==void 0&&(Ut=3);let Bt,et,at,Ct;if(gt){const ae=Ci[gt];Bt=ae.vertexShader,et=ae.fragmentShader}else Bt=x.vertexShader,et=x.fragmentShader,l.update(x),at=l.getVertexShaderID(x),Ct=l.getFragmentShaderID(x);const _t=i.getRenderTarget(),Wt=C.isInstancedMesh===!0,Jt=C.isBatchedMesh===!0,zt=!!x.map,ne=!!x.matcap,U=!!tt,pt=!!x.aoMap,lt=!!x.lightMap,yt=!!x.bumpMap,nt=!!x.normalMap,kt=!!x.displacementMap,Et=!!x.emissiveMap,Rt=!!x.metalnessMap,V=!!x.roughnessMap,P=x.anisotropy>0,X=x.clearcoat>0,ot=x.dispersion>0,it=x.iridescence>0,rt=x.sheen>0,Mt=x.transmission>0,ht=P&&!!x.anisotropyMap,Tt=X&&!!x.clearcoatMap,Yt=X&&!!x.clearcoatNormalMap,ft=X&&!!x.clearcoatRoughnessMap,At=it&&!!x.iridescenceMap,ee=it&&!!x.iridescenceThicknessMap,qt=rt&&!!x.sheenColorMap,It=rt&&!!x.sheenRoughnessMap,$t=!!x.specularMap,Kt=!!x.specularColorMap,Se=!!x.specularIntensityMap,I=Mt&&!!x.transmissionMap,q=Mt&&!!x.thicknessMap,$=!!x.gradientMap,J=!!x.alphaMap,ct=x.alphaTest>0,Ot=!!x.alphaHash,Ht=!!x.extensions;let Ce=Fr;x.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(Ce=i.toneMapping);const Ie={shaderID:gt,shaderType:x.type,shaderName:x.name,vertexShader:Bt,fragmentShader:et,defines:x.defines,customVertexShaderID:at,customFragmentShaderID:Ct,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:Jt,batchingColor:Jt&&C._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&C.instanceColor!==null,instancingMorph:Wt&&C.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:_t===null?i.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Kr,alphaToCoverage:!!x.alphaToCoverage,map:zt,matcap:ne,envMap:U,envMapMode:U&&tt.mapping,envMapCubeUVHeight:Q,aoMap:pt,lightMap:lt,bumpMap:yt,normalMap:nt,displacementMap:f&&kt,emissiveMap:Et,normalMapObjectSpace:nt&&x.normalMapType===c1,normalMapTangentSpace:nt&&x.normalMapType===Kf,metalnessMap:Rt,roughnessMap:V,anisotropy:P,anisotropyMap:ht,clearcoat:X,clearcoatMap:Tt,clearcoatNormalMap:Yt,clearcoatRoughnessMap:ft,dispersion:ot,iridescence:it,iridescenceMap:At,iridescenceThicknessMap:ee,sheen:rt,sheenColorMap:qt,sheenRoughnessMap:It,specularMap:$t,specularColorMap:Kt,specularIntensityMap:Se,transmission:Mt,transmissionMap:I,thicknessMap:q,gradientMap:$,opaque:x.transparent===!1&&x.blending===Po&&x.alphaToCoverage===!1,alphaMap:J,alphaTest:ct,alphaHash:Ot,combine:x.combine,mapUv:zt&&_(x.map.channel),aoMapUv:pt&&_(x.aoMap.channel),lightMapUv:lt&&_(x.lightMap.channel),bumpMapUv:yt&&_(x.bumpMap.channel),normalMapUv:nt&&_(x.normalMap.channel),displacementMapUv:kt&&_(x.displacementMap.channel),emissiveMapUv:Et&&_(x.emissiveMap.channel),metalnessMapUv:Rt&&_(x.metalnessMap.channel),roughnessMapUv:V&&_(x.roughnessMap.channel),anisotropyMapUv:ht&&_(x.anisotropyMap.channel),clearcoatMapUv:Tt&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:Yt&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:At&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:It&&_(x.sheenRoughnessMap.channel),specularMapUv:$t&&_(x.specularMap.channel),specularColorMapUv:Kt&&_(x.specularColorMap.channel),specularIntensityMapUv:Se&&_(x.specularIntensityMap.channel),transmissionMapUv:I&&_(x.transmissionMap.channel),thicknessMapUv:q&&_(x.thicknessMap.channel),alphaMapUv:J&&_(x.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(nt||P),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!K.attributes.uv&&(zt||J),fog:!!G,useFog:x.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:C.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Ut,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&b.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ce,decodeVideoTexture:zt&&x.map.isVideoTexture===!0&&_e.getTransfer(x.map.colorSpace)===be,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ir,flipSided:x.side===Bn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ht&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&x.extensions.multiDraw===!0||Jt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function g(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const b in x.defines)E.push(b),E.push(x.defines[b]);return x.isRawShaderMaterial===!1&&(A(E,x),M(E,x),E.push(i.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function A(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function M(x,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.doubleSided&&a.enable(10),E.flipSided&&a.enable(11),E.useDepthPacking&&a.enable(12),E.dithering&&a.enable(13),E.transmission&&a.enable(14),E.sheen&&a.enable(15),E.opaque&&a.enable(16),E.pointsUvs&&a.enable(17),E.decodeVideoTexture&&a.enable(18),E.alphaToCoverage&&a.enable(19),x.push(a.mask)}function R(x){const E=y[x.type];let b;if(E){const L=Ci[E];b=Z1.clone(L.uniforms)}else b=x.uniforms;return b}function F(x,E){let b;for(let L=0,C=h.length;L<C;L++){const G=h[L];if(G.cacheKey===E){b=G,++b.usedTimes;break}}return b===void 0&&(b=new hD(i,E,x,s),h.push(b)),b}function D(x){if(--x.usedTimes===0){const E=h.indexOf(x);h[E]=h[h.length-1],h.pop(),x.destroy()}}function S(x){l.remove(x)}function T(){l.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:R,acquireProgram:F,releaseProgram:D,releaseShaderCache:S,programs:h,dispose:T}}function gD(){let i=new WeakMap;function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function e(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:r}}function _D(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function n_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function i_(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(d,f,p,y,_,m){let g=i[t];return g===void 0?(g={id:d.id,object:d,geometry:f,material:p,groupOrder:y,renderOrder:d.renderOrder,z:_,group:m},i[t]=g):(g.id=d.id,g.object=d,g.geometry=f,g.material=p,g.groupOrder=y,g.renderOrder=d.renderOrder,g.z=_,g.group=m),t++,g}function a(d,f,p,y,_,m){const g=o(d,f,p,y,_,m);p.transmission>0?n.push(g):p.transparent===!0?r.push(g):e.push(g)}function l(d,f,p,y,_,m){const g=o(d,f,p,y,_,m);p.transmission>0?n.unshift(g):p.transparent===!0?r.unshift(g):e.unshift(g)}function c(d,f){e.length>1&&e.sort(d||_D),n.length>1&&n.sort(f||n_),r.length>1&&r.sort(f||n_)}function h(){for(let d=t,f=i.length;d<f;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function vD(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new i_,i.set(n,[o])):r>=s.length?(o=new i_,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function yD(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new se};break;case"SpotLight":e={position:new k,direction:new k,color:new se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new se,groundColor:new se};break;case"RectAreaLight":e={color:new se,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function xD(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let ED=0;function SD(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function TD(i){const t=new yD,e=xD(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);const r=new k,s=new ke,o=new ke;function a(c){let h=0,d=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let p=0,y=0,_=0,m=0,g=0,A=0,M=0,R=0,F=0,D=0,S=0;c.sort(SD);for(let x=0,E=c.length;x<E;x++){const b=c[x],L=b.color,C=b.intensity,G=b.distance,K=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=L.r*C,d+=L.g*C,f+=L.b*C;else if(b.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(b.sh.coefficients[W],C);S++}else if(b.isDirectionalLight){const W=t.get(b);if(W.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const tt=b.shadow,Q=e.get(b);Q.shadowIntensity=tt.intensity,Q.shadowBias=tt.bias,Q.shadowNormalBias=tt.normalBias,Q.shadowRadius=tt.radius,Q.shadowMapSize=tt.mapSize,n.directionalShadow[p]=Q,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=b.shadow.matrix,A++}n.directional[p]=W,p++}else if(b.isSpotLight){const W=t.get(b);W.position.setFromMatrixPosition(b.matrixWorld),W.color.copy(L).multiplyScalar(C),W.distance=G,W.coneCos=Math.cos(b.angle),W.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),W.decay=b.decay,n.spot[_]=W;const tt=b.shadow;if(b.map&&(n.spotLightMap[F]=b.map,F++,tt.updateMatrices(b),b.castShadow&&D++),n.spotLightMatrix[_]=tt.matrix,b.castShadow){const Q=e.get(b);Q.shadowIntensity=tt.intensity,Q.shadowBias=tt.bias,Q.shadowNormalBias=tt.normalBias,Q.shadowRadius=tt.radius,Q.shadowMapSize=tt.mapSize,n.spotShadow[_]=Q,n.spotShadowMap[_]=K,R++}_++}else if(b.isRectAreaLight){const W=t.get(b);W.color.copy(L).multiplyScalar(C),W.halfWidth.set(b.width*.5,0,0),W.halfHeight.set(0,b.height*.5,0),n.rectArea[m]=W,m++}else if(b.isPointLight){const W=t.get(b);if(W.color.copy(b.color).multiplyScalar(b.intensity),W.distance=b.distance,W.decay=b.decay,b.castShadow){const tt=b.shadow,Q=e.get(b);Q.shadowIntensity=tt.intensity,Q.shadowBias=tt.bias,Q.shadowNormalBias=tt.normalBias,Q.shadowRadius=tt.radius,Q.shadowMapSize=tt.mapSize,Q.shadowCameraNear=tt.camera.near,Q.shadowCameraFar=tt.camera.far,n.pointShadow[y]=Q,n.pointShadowMap[y]=K,n.pointShadowMatrix[y]=b.shadow.matrix,M++}n.point[y]=W,y++}else if(b.isHemisphereLight){const W=t.get(b);W.skyColor.copy(b.color).multiplyScalar(C),W.groundColor.copy(b.groundColor).multiplyScalar(C),n.hemi[g]=W,g++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const T=n.hash;(T.directionalLength!==p||T.pointLength!==y||T.spotLength!==_||T.rectAreaLength!==m||T.hemiLength!==g||T.numDirectionalShadows!==A||T.numPointShadows!==M||T.numSpotShadows!==R||T.numSpotMaps!==F||T.numLightProbes!==S)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=y,n.hemi.length=g,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=R,n.spotShadowMap.length=R,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=R+F-D,n.spotLightMap.length=F,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=S,T.directionalLength=p,T.pointLength=y,T.spotLength=_,T.rectAreaLength=m,T.hemiLength=g,T.numDirectionalShadows=A,T.numPointShadows=M,T.numSpotShadows=R,T.numSpotMaps=F,T.numLightProbes=S,n.version=ED++)}function l(c,h){let d=0,f=0,p=0,y=0,_=0;const m=h.matrixWorldInverse;for(let g=0,A=c.length;g<A;g++){const M=c[g];if(M.isDirectionalLight){const R=n.directional[d];R.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(m),d++}else if(M.isSpotLight){const R=n.spot[p];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(m),R.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(m),p++}else if(M.isRectAreaLight){const R=n.rectArea[y];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),y++}else if(M.isPointLight){const R=n.point[f];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const R=n.hemi[_];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function r_(i){const t=new TD(i),e=[],n=[];function r(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function wD(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new r_(i),t.set(r,[a])):s>=o.length?(a=new r_(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class MD extends la{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=a1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class AD extends la{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const bD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RD=`uniform sampler2D shadow_pass;
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
}`;function CD(i,t,e){let n=new np;const r=new dt,s=new dt,o=new nn,a=new MD({depthPacking:l1}),l=new AD,c={},h=e.maxTextureSize,d={[qr]:Bn,[Bn]:qr,[ir]:ir},f=new $r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:bD,fragmentShader:RD}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const y=new Ai;y.setAttribute("position",new Vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new fe(y,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$v;let g=this.type;this.render=function(D,S,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;const x=i.getRenderTarget(),E=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Ur),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const C=g!==tr&&this.type===tr,G=g===tr&&this.type!==tr;for(let K=0,W=D.length;K<W;K++){const tt=D[K],Q=tt.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;r.copy(Q.mapSize);const gt=Q.getFrameExtents();if(r.multiply(gt),s.copy(Q.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/gt.x),r.x=s.x*gt.x,Q.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/gt.y),r.y=s.y*gt.y,Q.mapSize.y=s.y)),Q.map===null||C===!0||G===!0){const xt=this.type!==tr?{minFilter:ai,magFilter:ai}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Us(r.x,r.y,xt),Q.map.texture.name=tt.name+".shadowMap",Q.camera.updateProjectionMatrix()}i.setRenderTarget(Q.map),i.clear();const St=Q.getViewportCount();for(let xt=0;xt<St;xt++){const Ut=Q.getViewport(xt);o.set(s.x*Ut.x,s.y*Ut.y,s.x*Ut.z,s.y*Ut.w),L.viewport(o),Q.updateMatrices(tt,xt),n=Q.getFrustum(),R(S,T,Q.camera,tt,this.type)}Q.isPointLightShadow!==!0&&this.type===tr&&A(Q,T),Q.needsUpdate=!1}g=this.type,m.needsUpdate=!1,i.setRenderTarget(x,E,b)};function A(D,S){const T=t.update(_);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,p.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Us(r.x,r.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(S,null,T,f,_,null),p.uniforms.shadow_pass.value=D.mapPass.texture,p.uniforms.resolution.value=D.mapSize,p.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(S,null,T,p,_,null)}function M(D,S,T,x){let E=null;const b=T.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(b!==void 0)E=b;else if(E=T.isPointLight===!0?l:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const L=E.uuid,C=S.uuid;let G=c[L];G===void 0&&(G={},c[L]=G);let K=G[C];K===void 0&&(K=E.clone(),G[C]=K,S.addEventListener("dispose",F)),E=K}if(E.visible=S.visible,E.wireframe=S.wireframe,x===tr?E.side=S.shadowSide!==null?S.shadowSide:S.side:E.side=S.shadowSide!==null?S.shadowSide:d[S.side],E.alphaMap=S.alphaMap,E.alphaTest=S.alphaTest,E.map=S.map,E.clipShadows=S.clipShadows,E.clippingPlanes=S.clippingPlanes,E.clipIntersection=S.clipIntersection,E.displacementMap=S.displacementMap,E.displacementScale=S.displacementScale,E.displacementBias=S.displacementBias,E.wireframeLinewidth=S.wireframeLinewidth,E.linewidth=S.linewidth,T.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const L=i.properties.get(E);L.light=T}return E}function R(D,S,T,x,E){if(D.visible===!1)return;if(D.layers.test(S.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&E===tr)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,D.matrixWorld);const C=t.update(D),G=D.material;if(Array.isArray(G)){const K=C.groups;for(let W=0,tt=K.length;W<tt;W++){const Q=K[W],gt=G[Q.materialIndex];if(gt&&gt.visible){const St=M(D,gt,x,E);D.onBeforeShadow(i,D,S,T,C,St,Q),i.renderBufferDirect(T,null,C,St,D,Q),D.onAfterShadow(i,D,S,T,C,St,Q)}}}else if(G.visible){const K=M(D,G,x,E);D.onBeforeShadow(i,D,S,T,C,K,null),i.renderBufferDirect(T,null,C,K,D,null),D.onAfterShadow(i,D,S,T,C,K,null)}}const L=D.children;for(let C=0,G=L.length;C<G;C++)R(L[C],S,T,x,E)}function F(D){D.target.removeEventListener("dispose",F);for(const T in c){const x=c[T],E=D.target.uuid;E in x&&(x[E].dispose(),delete x[E])}}}function ID(i){function t(){let I=!1;const q=new nn;let $=null;const J=new nn(0,0,0,0);return{setMask:function(ct){$!==ct&&!I&&(i.colorMask(ct,ct,ct,ct),$=ct)},setLocked:function(ct){I=ct},setClear:function(ct,Ot,Ht,Ce,Ie){Ie===!0&&(ct*=Ce,Ot*=Ce,Ht*=Ce),q.set(ct,Ot,Ht,Ce),J.equals(q)===!1&&(i.clearColor(ct,Ot,Ht,Ce),J.copy(q))},reset:function(){I=!1,$=null,J.set(-1,0,0,0)}}}function e(){let I=!1,q=null,$=null,J=null;return{setTest:function(ct){ct?Ct(i.DEPTH_TEST):_t(i.DEPTH_TEST)},setMask:function(ct){q!==ct&&!I&&(i.depthMask(ct),q=ct)},setFunc:function(ct){if($!==ct){switch(ct){case Wb:i.depthFunc(i.NEVER);break;case qb:i.depthFunc(i.ALWAYS);break;case $b:i.depthFunc(i.LESS);break;case Xc:i.depthFunc(i.LEQUAL);break;case Xb:i.depthFunc(i.EQUAL);break;case jb:i.depthFunc(i.GEQUAL);break;case Yb:i.depthFunc(i.GREATER);break;case Kb:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}$=ct}},setLocked:function(ct){I=ct},setClear:function(ct){J!==ct&&(i.clearDepth(ct),J=ct)},reset:function(){I=!1,q=null,$=null,J=null}}}function n(){let I=!1,q=null,$=null,J=null,ct=null,Ot=null,Ht=null,Ce=null,Ie=null;return{setTest:function(ae){I||(ae?Ct(i.STENCIL_TEST):_t(i.STENCIL_TEST))},setMask:function(ae){q!==ae&&!I&&(i.stencilMask(ae),q=ae)},setFunc:function(ae,Me,Ne){($!==ae||J!==Me||ct!==Ne)&&(i.stencilFunc(ae,Me,Ne),$=ae,J=Me,ct=Ne)},setOp:function(ae,Me,Ne){(Ot!==ae||Ht!==Me||Ce!==Ne)&&(i.stencilOp(ae,Me,Ne),Ot=ae,Ht=Me,Ce=Ne)},setLocked:function(ae){I=ae},setClear:function(ae){Ie!==ae&&(i.clearStencil(ae),Ie=ae)},reset:function(){I=!1,q=null,$=null,J=null,ct=null,Ot=null,Ht=null,Ce=null,Ie=null}}}const r=new t,s=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},d=new WeakMap,f=[],p=null,y=!1,_=null,m=null,g=null,A=null,M=null,R=null,F=null,D=new se(0,0,0),S=0,T=!1,x=null,E=null,b=null,L=null,C=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,W=0;const tt=i.getParameter(i.VERSION);tt.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(tt)[1]),K=W>=1):tt.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),K=W>=2);let Q=null,gt={};const St=i.getParameter(i.SCISSOR_BOX),xt=i.getParameter(i.VIEWPORT),Ut=new nn().fromArray(St),Bt=new nn().fromArray(xt);function et(I,q,$,J){const ct=new Uint8Array(4),Ot=i.createTexture();i.bindTexture(I,Ot),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ht=0;Ht<$;Ht++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(q,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,ct):i.texImage2D(q+Ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ct);return Ot}const at={};at[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),at[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),at[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),Ct(i.DEPTH_TEST),s.setFunc(Xc),yt(!1),nt(cg),Ct(i.CULL_FACE),pt(Ur);function Ct(I){c[I]!==!0&&(i.enable(I),c[I]=!0)}function _t(I){c[I]!==!1&&(i.disable(I),c[I]=!1)}function Wt(I,q){return h[I]!==q?(i.bindFramebuffer(I,q),h[I]=q,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=q),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=q),!0):!1}function Jt(I,q){let $=f,J=!1;if(I){$=d.get(q),$===void 0&&($=[],d.set(q,$));const ct=I.textures;if($.length!==ct.length||$[0]!==i.COLOR_ATTACHMENT0){for(let Ot=0,Ht=ct.length;Ot<Ht;Ot++)$[Ot]=i.COLOR_ATTACHMENT0+Ot;$.length=ct.length,J=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,J=!0);J&&i.drawBuffers($)}function zt(I){return p!==I?(i.useProgram(I),p=I,!0):!1}const ne={[ms]:i.FUNC_ADD,[bb]:i.FUNC_SUBTRACT,[Rb]:i.FUNC_REVERSE_SUBTRACT};ne[Cb]=i.MIN,ne[Ib]=i.MAX;const U={[Pb]:i.ZERO,[Db]:i.ONE,[Lb]:i.SRC_COLOR,[rd]:i.SRC_ALPHA,[kb]:i.SRC_ALPHA_SATURATE,[Fb]:i.DST_COLOR,[Ob]:i.DST_ALPHA,[Nb]:i.ONE_MINUS_SRC_COLOR,[sd]:i.ONE_MINUS_SRC_ALPHA,[Vb]:i.ONE_MINUS_DST_COLOR,[Ub]:i.ONE_MINUS_DST_ALPHA,[Bb]:i.CONSTANT_COLOR,[zb]:i.ONE_MINUS_CONSTANT_COLOR,[Hb]:i.CONSTANT_ALPHA,[Gb]:i.ONE_MINUS_CONSTANT_ALPHA};function pt(I,q,$,J,ct,Ot,Ht,Ce,Ie,ae){if(I===Ur){y===!0&&(_t(i.BLEND),y=!1);return}if(y===!1&&(Ct(i.BLEND),y=!0),I!==Ab){if(I!==_||ae!==T){if((m!==ms||M!==ms)&&(i.blendEquation(i.FUNC_ADD),m=ms,M=ms),ae)switch(I){case Po:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ug:i.blendFunc(i.ONE,i.ONE);break;case hg:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dg:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Po:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ug:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case hg:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case dg:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}g=null,A=null,R=null,F=null,D.set(0,0,0),S=0,_=I,T=ae}return}ct=ct||q,Ot=Ot||$,Ht=Ht||J,(q!==m||ct!==M)&&(i.blendEquationSeparate(ne[q],ne[ct]),m=q,M=ct),($!==g||J!==A||Ot!==R||Ht!==F)&&(i.blendFuncSeparate(U[$],U[J],U[Ot],U[Ht]),g=$,A=J,R=Ot,F=Ht),(Ce.equals(D)===!1||Ie!==S)&&(i.blendColor(Ce.r,Ce.g,Ce.b,Ie),D.copy(Ce),S=Ie),_=I,T=!1}function lt(I,q){I.side===ir?_t(i.CULL_FACE):Ct(i.CULL_FACE);let $=I.side===Bn;q&&($=!$),yt($),I.blending===Po&&I.transparent===!1?pt(Ur):pt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const J=I.stencilWrite;o.setTest(J),J&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Et(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ct(i.SAMPLE_ALPHA_TO_COVERAGE):_t(i.SAMPLE_ALPHA_TO_COVERAGE)}function yt(I){x!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),x=I)}function nt(I){I!==Tb?(Ct(i.CULL_FACE),I!==E&&(I===cg?i.cullFace(i.BACK):I===wb?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_t(i.CULL_FACE),E=I}function kt(I){I!==b&&(K&&i.lineWidth(I),b=I)}function Et(I,q,$){I?(Ct(i.POLYGON_OFFSET_FILL),(L!==q||C!==$)&&(i.polygonOffset(q,$),L=q,C=$)):_t(i.POLYGON_OFFSET_FILL)}function Rt(I){I?Ct(i.SCISSOR_TEST):_t(i.SCISSOR_TEST)}function V(I){I===void 0&&(I=i.TEXTURE0+G-1),Q!==I&&(i.activeTexture(I),Q=I)}function P(I,q,$){$===void 0&&(Q===null?$=i.TEXTURE0+G-1:$=Q);let J=gt[$];J===void 0&&(J={type:void 0,texture:void 0},gt[$]=J),(J.type!==I||J.texture!==q)&&(Q!==$&&(i.activeTexture($),Q=$),i.bindTexture(I,q||at[I]),J.type=I,J.texture=q)}function X(){const I=gt[Q];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ot(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function rt(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Yt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ft(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function qt(I){Ut.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Ut.copy(I))}function It(I){Bt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Bt.copy(I))}function $t(I,q){let $=l.get(q);$===void 0&&($=new WeakMap,l.set(q,$));let J=$.get(I);J===void 0&&(J=i.getUniformBlockIndex(q,I.name),$.set(I,J))}function Kt(I,q){const J=l.get(q).get(I);a.get(q)!==J&&(i.uniformBlockBinding(q,J,I.__bindingPointIndex),a.set(q,J))}function Se(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},Q=null,gt={},h={},d=new WeakMap,f=[],p=null,y=!1,_=null,m=null,g=null,A=null,M=null,R=null,F=null,D=new se(0,0,0),S=0,T=!1,x=null,E=null,b=null,L=null,C=null,Ut.set(0,0,i.canvas.width,i.canvas.height),Bt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:Ct,disable:_t,bindFramebuffer:Wt,drawBuffers:Jt,useProgram:zt,setBlending:pt,setMaterial:lt,setFlipSided:yt,setCullFace:nt,setLineWidth:kt,setPolygonOffset:Et,setScissorTest:Rt,activeTexture:V,bindTexture:P,unbindTexture:X,compressedTexImage2D:ot,compressedTexImage3D:it,texImage2D:At,texImage3D:ee,updateUBOMapping:$t,uniformBlockBinding:Kt,texStorage2D:Yt,texStorage3D:ft,texSubImage2D:rt,texSubImage3D:Mt,compressedTexSubImage2D:ht,compressedTexSubImage3D:Tt,scissor:qt,viewport:It,reset:Se}}function s_(i,t,e,n){const r=PD(n);switch(e){case Qv:return i*t;case Zv:return i*t;case ty:return i*t*2;case ey:return i*t/r.components*r.byteLength;case Xf:return i*t/r.components*r.byteLength;case ny:return i*t*2/r.components*r.byteLength;case jf:return i*t*2/r.components*r.byteLength;case Jv:return i*t*3/r.components*r.byteLength;case xi:return i*t*4/r.components*r.byteLength;case Yf:return i*t*4/r.components*r.byteLength;case Ec:case Sc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Tc:case wc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case hd:case fd:return Math.max(i,16)*Math.max(t,8)/4;case ud:case dd:return Math.max(i,8)*Math.max(t,8)/2;case pd:case md:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case gd:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _d:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vd:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case yd:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case xd:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ed:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Sd:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Td:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case wd:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Md:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ad:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case bd:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Rd:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Cd:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Id:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Mc:case Pd:case Dd:return Math.ceil(i/4)*Math.ceil(t/4)*16;case iy:case Ld:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Nd:case Od:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function PD(i){switch(i){case dr:case jv:return{byteLength:1,components:1};case nl:case Yv:case wl:return{byteLength:2,components:1};case qf:case $f:return{byteLength:2,components:4};case Os:case Wf:case rr:return{byteLength:4,components:1};case Kv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function DD(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new dt,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(V,P){return p?new OffscreenCanvas(V,P):rl("canvas")}function _(V,P,X){let ot=1;const it=Rt(V);if((it.width>X||it.height>X)&&(ot=X/Math.max(it.width,it.height)),ot<1)if(typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&V instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&V instanceof ImageBitmap||typeof VideoFrame<"u"&&V instanceof VideoFrame){const rt=Math.floor(ot*it.width),Mt=Math.floor(ot*it.height);d===void 0&&(d=y(rt,Mt));const ht=P?y(rt,Mt):d;return ht.width=rt,ht.height=Mt,ht.getContext("2d").drawImage(V,0,0,rt,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+rt+"x"+Mt+")."),ht}else return"data"in V&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),V;return V}function m(V){return V.generateMipmaps&&V.minFilter!==ai&&V.minFilter!==vi}function g(V){i.generateMipmap(V)}function A(V,P,X,ot,it=!1){if(V!==null){if(i[V]!==void 0)return i[V];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+V+"'")}let rt=P;if(P===i.RED&&(X===i.FLOAT&&(rt=i.R32F),X===i.HALF_FLOAT&&(rt=i.R16F),X===i.UNSIGNED_BYTE&&(rt=i.R8)),P===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(rt=i.R8UI),X===i.UNSIGNED_SHORT&&(rt=i.R16UI),X===i.UNSIGNED_INT&&(rt=i.R32UI),X===i.BYTE&&(rt=i.R8I),X===i.SHORT&&(rt=i.R16I),X===i.INT&&(rt=i.R32I)),P===i.RG&&(X===i.FLOAT&&(rt=i.RG32F),X===i.HALF_FLOAT&&(rt=i.RG16F),X===i.UNSIGNED_BYTE&&(rt=i.RG8)),P===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(rt=i.RG8UI),X===i.UNSIGNED_SHORT&&(rt=i.RG16UI),X===i.UNSIGNED_INT&&(rt=i.RG32UI),X===i.BYTE&&(rt=i.RG8I),X===i.SHORT&&(rt=i.RG16I),X===i.INT&&(rt=i.RG32I)),P===i.RGB&&X===i.UNSIGNED_INT_5_9_9_9_REV&&(rt=i.RGB9_E5),P===i.RGBA){const Mt=it?jc:_e.getTransfer(ot);X===i.FLOAT&&(rt=i.RGBA32F),X===i.HALF_FLOAT&&(rt=i.RGBA16F),X===i.UNSIGNED_BYTE&&(rt=Mt===be?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(rt=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(rt=i.RGB5_A1)}return(rt===i.R16F||rt===i.R32F||rt===i.RG16F||rt===i.RG32F||rt===i.RGBA16F||rt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function M(V,P){let X;return V?P===null||P===Os||P===Xo?X=i.DEPTH24_STENCIL8:P===rr?X=i.DEPTH32F_STENCIL8:P===nl&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===Os||P===Xo?X=i.DEPTH_COMPONENT24:P===rr?X=i.DEPTH_COMPONENT32F:P===nl&&(X=i.DEPTH_COMPONENT16),X}function R(V,P){return m(V)===!0||V.isFramebufferTexture&&V.minFilter!==ai&&V.minFilter!==vi?Math.log2(Math.max(P.width,P.height))+1:V.mipmaps!==void 0&&V.mipmaps.length>0?V.mipmaps.length:V.isCompressedTexture&&Array.isArray(V.image)?P.mipmaps.length:1}function F(V){const P=V.target;P.removeEventListener("dispose",F),S(P),P.isVideoTexture&&h.delete(P)}function D(V){const P=V.target;P.removeEventListener("dispose",D),x(P)}function S(V){const P=n.get(V);if(P.__webglInit===void 0)return;const X=V.source,ot=f.get(X);if(ot){const it=ot[P.__cacheKey];it.usedTimes--,it.usedTimes===0&&T(V),Object.keys(ot).length===0&&f.delete(X)}n.remove(V)}function T(V){const P=n.get(V);i.deleteTexture(P.__webglTexture);const X=V.source,ot=f.get(X);delete ot[P.__cacheKey],o.memory.textures--}function x(V){const P=n.get(V);if(V.depthTexture&&V.depthTexture.dispose(),V.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(P.__webglFramebuffer[ot]))for(let it=0;it<P.__webglFramebuffer[ot].length;it++)i.deleteFramebuffer(P.__webglFramebuffer[ot][it]);else i.deleteFramebuffer(P.__webglFramebuffer[ot]);P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer[ot])}else{if(Array.isArray(P.__webglFramebuffer))for(let ot=0;ot<P.__webglFramebuffer.length;ot++)i.deleteFramebuffer(P.__webglFramebuffer[ot]);else i.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&i.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let ot=0;ot<P.__webglColorRenderbuffer.length;ot++)P.__webglColorRenderbuffer[ot]&&i.deleteRenderbuffer(P.__webglColorRenderbuffer[ot]);P.__webglDepthRenderbuffer&&i.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const X=V.textures;for(let ot=0,it=X.length;ot<it;ot++){const rt=n.get(X[ot]);rt.__webglTexture&&(i.deleteTexture(rt.__webglTexture),o.memory.textures--),n.remove(X[ot])}n.remove(V)}let E=0;function b(){E=0}function L(){const V=E;return V>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+V+" texture units while this GPU supports only "+r.maxTextures),E+=1,V}function C(V){const P=[];return P.push(V.wrapS),P.push(V.wrapT),P.push(V.wrapR||0),P.push(V.magFilter),P.push(V.minFilter),P.push(V.anisotropy),P.push(V.internalFormat),P.push(V.format),P.push(V.type),P.push(V.generateMipmaps),P.push(V.premultiplyAlpha),P.push(V.flipY),P.push(V.unpackAlignment),P.push(V.colorSpace),P.join()}function G(V,P){const X=n.get(V);if(V.isVideoTexture&&kt(V),V.isRenderTargetTexture===!1&&V.version>0&&X.__version!==V.version){const ot=V.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Bt(X,V,P);return}}e.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+P)}function K(V,P){const X=n.get(V);if(V.version>0&&X.__version!==V.version){Bt(X,V,P);return}e.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+P)}function W(V,P){const X=n.get(V);if(V.version>0&&X.__version!==V.version){Bt(X,V,P);return}e.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+P)}function tt(V,P){const X=n.get(V);if(V.version>0&&X.__version!==V.version){et(X,V,P);return}e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+P)}const Q={[ld]:i.REPEAT,[ys]:i.CLAMP_TO_EDGE,[cd]:i.MIRRORED_REPEAT},gt={[ai]:i.NEAREST,[o1]:i.NEAREST_MIPMAP_NEAREST,[Gl]:i.NEAREST_MIPMAP_LINEAR,[vi]:i.LINEAR,[Yu]:i.LINEAR_MIPMAP_NEAREST,[xs]:i.LINEAR_MIPMAP_LINEAR},St={[u1]:i.NEVER,[g1]:i.ALWAYS,[h1]:i.LESS,[ry]:i.LEQUAL,[d1]:i.EQUAL,[m1]:i.GEQUAL,[f1]:i.GREATER,[p1]:i.NOTEQUAL};function xt(V,P){if(P.type===rr&&t.has("OES_texture_float_linear")===!1&&(P.magFilter===vi||P.magFilter===Yu||P.magFilter===Gl||P.magFilter===xs||P.minFilter===vi||P.minFilter===Yu||P.minFilter===Gl||P.minFilter===xs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(V,i.TEXTURE_WRAP_S,Q[P.wrapS]),i.texParameteri(V,i.TEXTURE_WRAP_T,Q[P.wrapT]),(V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY)&&i.texParameteri(V,i.TEXTURE_WRAP_R,Q[P.wrapR]),i.texParameteri(V,i.TEXTURE_MAG_FILTER,gt[P.magFilter]),i.texParameteri(V,i.TEXTURE_MIN_FILTER,gt[P.minFilter]),P.compareFunction&&(i.texParameteri(V,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(V,i.TEXTURE_COMPARE_FUNC,St[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===ai||P.minFilter!==Gl&&P.minFilter!==xs||P.type===rr&&t.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");i.texParameterf(V,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function Ut(V,P){let X=!1;V.__webglInit===void 0&&(V.__webglInit=!0,P.addEventListener("dispose",F));const ot=P.source;let it=f.get(ot);it===void 0&&(it={},f.set(ot,it));const rt=C(P);if(rt!==V.__cacheKey){it[rt]===void 0&&(it[rt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,X=!0),it[rt].usedTimes++;const Mt=it[V.__cacheKey];Mt!==void 0&&(it[V.__cacheKey].usedTimes--,Mt.usedTimes===0&&T(P)),V.__cacheKey=rt,V.__webglTexture=it[rt].texture}return X}function Bt(V,P,X){let ot=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(ot=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(ot=i.TEXTURE_3D);const it=Ut(V,P),rt=P.source;e.bindTexture(ot,V.__webglTexture,i.TEXTURE0+X);const Mt=n.get(rt);if(rt.version!==Mt.__version||it===!0){e.activeTexture(i.TEXTURE0+X);const ht=_e.getPrimaries(_e.workingColorSpace),Tt=P.colorSpace===Ar?null:_e.getPrimaries(P.colorSpace),Yt=P.colorSpace===Ar||ht===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let ft=_(P.image,!1,r.maxTextureSize);ft=Et(P,ft);const At=s.convert(P.format,P.colorSpace),ee=s.convert(P.type);let qt=A(P.internalFormat,At,ee,P.colorSpace,P.isVideoTexture);xt(ot,P);let It;const $t=P.mipmaps,Kt=P.isVideoTexture!==!0,Se=Mt.__version===void 0||it===!0,I=rt.dataReady,q=R(P,ft);if(P.isDepthTexture)qt=M(P.format===jo,P.type),Se&&(Kt?e.texStorage2D(i.TEXTURE_2D,1,qt,ft.width,ft.height):e.texImage2D(i.TEXTURE_2D,0,qt,ft.width,ft.height,0,At,ee,null));else if(P.isDataTexture)if($t.length>0){Kt&&Se&&e.texStorage2D(i.TEXTURE_2D,q,qt,$t[0].width,$t[0].height);for(let $=0,J=$t.length;$<J;$++)It=$t[$],Kt?I&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,It.width,It.height,At,ee,It.data):e.texImage2D(i.TEXTURE_2D,$,qt,It.width,It.height,0,At,ee,It.data);P.generateMipmaps=!1}else Kt?(Se&&e.texStorage2D(i.TEXTURE_2D,q,qt,ft.width,ft.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft.width,ft.height,At,ee,ft.data)):e.texImage2D(i.TEXTURE_2D,0,qt,ft.width,ft.height,0,At,ee,ft.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){Kt&&Se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,q,qt,$t[0].width,$t[0].height,ft.depth);for(let $=0,J=$t.length;$<J;$++)if(It=$t[$],P.format!==xi)if(At!==null)if(Kt){if(I)if(P.layerUpdates.size>0){const ct=s_(It.width,It.height,P.format,P.type);for(const Ot of P.layerUpdates){const Ht=It.data.subarray(Ot*ct/It.data.BYTES_PER_ELEMENT,(Ot+1)*ct/It.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,Ot,It.width,It.height,1,At,Ht,0,0)}P.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,It.width,It.height,ft.depth,At,It.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,qt,It.width,It.height,ft.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,It.width,It.height,ft.depth,At,ee,It.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,qt,It.width,It.height,ft.depth,0,At,ee,It.data)}else{Kt&&Se&&e.texStorage2D(i.TEXTURE_2D,q,qt,$t[0].width,$t[0].height);for(let $=0,J=$t.length;$<J;$++)It=$t[$],P.format!==xi?At!==null?Kt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,It.width,It.height,At,It.data):e.compressedTexImage2D(i.TEXTURE_2D,$,qt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?I&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,It.width,It.height,At,ee,It.data):e.texImage2D(i.TEXTURE_2D,$,qt,It.width,It.height,0,At,ee,It.data)}else if(P.isDataArrayTexture)if(Kt){if(Se&&e.texStorage3D(i.TEXTURE_2D_ARRAY,q,qt,ft.width,ft.height,ft.depth),I)if(P.layerUpdates.size>0){const $=s_(ft.width,ft.height,P.format,P.type);for(const J of P.layerUpdates){const ct=ft.data.subarray(J*$/ft.data.BYTES_PER_ELEMENT,(J+1)*$/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,ft.width,ft.height,1,At,ee,ct)}P.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,At,ee,ft.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,qt,ft.width,ft.height,ft.depth,0,At,ee,ft.data);else if(P.isData3DTexture)Kt?(Se&&e.texStorage3D(i.TEXTURE_3D,q,qt,ft.width,ft.height,ft.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,At,ee,ft.data)):e.texImage3D(i.TEXTURE_3D,0,qt,ft.width,ft.height,ft.depth,0,At,ee,ft.data);else if(P.isFramebufferTexture){if(Se)if(Kt)e.texStorage2D(i.TEXTURE_2D,q,qt,ft.width,ft.height);else{let $=ft.width,J=ft.height;for(let ct=0;ct<q;ct++)e.texImage2D(i.TEXTURE_2D,ct,qt,$,J,0,At,ee,null),$>>=1,J>>=1}}else if($t.length>0){if(Kt&&Se){const $=Rt($t[0]);e.texStorage2D(i.TEXTURE_2D,q,qt,$.width,$.height)}for(let $=0,J=$t.length;$<J;$++)It=$t[$],Kt?I&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,At,ee,It):e.texImage2D(i.TEXTURE_2D,$,qt,At,ee,It);P.generateMipmaps=!1}else if(Kt){if(Se){const $=Rt(ft);e.texStorage2D(i.TEXTURE_2D,q,qt,$.width,$.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,ee,ft)}else e.texImage2D(i.TEXTURE_2D,0,qt,At,ee,ft);m(P)&&g(ot),Mt.__version=rt.version,P.onUpdate&&P.onUpdate(P)}V.__version=P.version}function et(V,P,X){if(P.image.length!==6)return;const ot=Ut(V,P),it=P.source;e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+X);const rt=n.get(it);if(it.version!==rt.__version||ot===!0){e.activeTexture(i.TEXTURE0+X);const Mt=_e.getPrimaries(_e.workingColorSpace),ht=P.colorSpace===Ar?null:_e.getPrimaries(P.colorSpace),Tt=P.colorSpace===Ar||Mt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const Yt=P.isCompressedTexture||P.image[0].isCompressedTexture,ft=P.image[0]&&P.image[0].isDataTexture,At=[];for(let J=0;J<6;J++)!Yt&&!ft?At[J]=_(P.image[J],!0,r.maxCubemapSize):At[J]=ft?P.image[J].image:P.image[J],At[J]=Et(P,At[J]);const ee=At[0],qt=s.convert(P.format,P.colorSpace),It=s.convert(P.type),$t=A(P.internalFormat,qt,It,P.colorSpace),Kt=P.isVideoTexture!==!0,Se=rt.__version===void 0||ot===!0,I=it.dataReady;let q=R(P,ee);xt(i.TEXTURE_CUBE_MAP,P);let $;if(Yt){Kt&&Se&&e.texStorage2D(i.TEXTURE_CUBE_MAP,q,$t,ee.width,ee.height);for(let J=0;J<6;J++){$=At[J].mipmaps;for(let ct=0;ct<$.length;ct++){const Ot=$[ct];P.format!==xi?qt!==null?Kt?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct,0,0,Ot.width,Ot.height,qt,Ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct,$t,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct,0,0,Ot.width,Ot.height,qt,It,Ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct,$t,Ot.width,Ot.height,0,qt,It,Ot.data)}}}else{if($=P.mipmaps,Kt&&Se){$.length>0&&q++;const J=Rt(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,q,$t,J.width,J.height)}for(let J=0;J<6;J++)if(ft){Kt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,At[J].width,At[J].height,qt,It,At[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,$t,At[J].width,At[J].height,0,qt,It,At[J].data);for(let ct=0;ct<$.length;ct++){const Ht=$[ct].image[J].image;Kt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct+1,0,0,Ht.width,Ht.height,qt,It,Ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct+1,$t,Ht.width,Ht.height,0,qt,It,Ht.data)}}else{Kt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,qt,It,At[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,$t,qt,It,At[J]);for(let ct=0;ct<$.length;ct++){const Ot=$[ct];Kt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct+1,0,0,qt,It,Ot.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ct+1,$t,qt,It,Ot.image[J])}}}m(P)&&g(i.TEXTURE_CUBE_MAP),rt.__version=it.version,P.onUpdate&&P.onUpdate(P)}V.__version=P.version}function at(V,P,X,ot,it,rt){const Mt=s.convert(X.format,X.colorSpace),ht=s.convert(X.type),Tt=A(X.internalFormat,Mt,ht,X.colorSpace);if(!n.get(P).__hasExternalTextures){const ft=Math.max(1,P.width>>rt),At=Math.max(1,P.height>>rt);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,rt,Tt,ft,At,P.depth,0,Mt,ht,null):e.texImage2D(it,rt,Tt,ft,At,0,Mt,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,V),nt(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,it,n.get(X).__webglTexture,0,yt(P)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ot,it,n.get(X).__webglTexture,rt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(V,P,X){if(i.bindRenderbuffer(i.RENDERBUFFER,V),P.depthBuffer){const ot=P.depthTexture,it=ot&&ot.isDepthTexture?ot.type:null,rt=M(P.stencilBuffer,it),Mt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=yt(P);nt(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,rt,P.width,P.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,rt,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,rt,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Mt,i.RENDERBUFFER,V)}else{const ot=P.textures;for(let it=0;it<ot.length;it++){const rt=ot[it],Mt=s.convert(rt.format,rt.colorSpace),ht=s.convert(rt.type),Tt=A(rt.internalFormat,Mt,ht,rt.colorSpace),Yt=yt(P);X&&nt(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,Tt,P.width,P.height):nt(P)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt,Tt,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _t(V,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,V),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),G(P.depthTexture,0);const ot=n.get(P.depthTexture).__webglTexture,it=yt(P);if(P.depthTexture.format===Do)nt(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ot,0);else if(P.depthTexture.format===jo)nt(P)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function Wt(V){const P=n.get(V),X=V.isWebGLCubeRenderTarget===!0;if(V.depthTexture&&!P.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");_t(P.__webglFramebuffer,V)}else if(X){P.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[ot]),P.__webglDepthbuffer[ot]=i.createRenderbuffer(),Ct(P.__webglDepthbuffer[ot],V,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer=i.createRenderbuffer(),Ct(P.__webglDepthbuffer,V,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Jt(V,P,X){const ot=n.get(V);P!==void 0&&at(ot.__webglFramebuffer,V,V.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&Wt(V)}function zt(V){const P=V.texture,X=n.get(V),ot=n.get(P);V.addEventListener("dispose",D);const it=V.textures,rt=V.isWebGLCubeRenderTarget===!0,Mt=it.length>1;if(Mt||(ot.__webglTexture===void 0&&(ot.__webglTexture=i.createTexture()),ot.__version=P.version,o.memory.textures++),rt){X.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(P.mipmaps&&P.mipmaps.length>0){X.__webglFramebuffer[ht]=[];for(let Tt=0;Tt<P.mipmaps.length;Tt++)X.__webglFramebuffer[ht][Tt]=i.createFramebuffer()}else X.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){X.__webglFramebuffer=[];for(let ht=0;ht<P.mipmaps.length;ht++)X.__webglFramebuffer[ht]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Mt)for(let ht=0,Tt=it.length;ht<Tt;ht++){const Yt=n.get(it[ht]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=i.createTexture(),o.memory.textures++)}if(V.samples>0&&nt(V)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let ht=0;ht<it.length;ht++){const Tt=it[ht];X.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[ht]);const Yt=s.convert(Tt.format,Tt.colorSpace),ft=s.convert(Tt.type),At=A(Tt.internalFormat,Yt,ft,Tt.colorSpace,V.isXRRenderTarget===!0),ee=yt(V);i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,At,V.width,V.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,X.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),V.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),Ct(X.__webglDepthRenderbuffer,V,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(rt){e.bindTexture(i.TEXTURE_CUBE_MAP,ot.__webglTexture),xt(i.TEXTURE_CUBE_MAP,P);for(let ht=0;ht<6;ht++)if(P.mipmaps&&P.mipmaps.length>0)for(let Tt=0;Tt<P.mipmaps.length;Tt++)at(X.__webglFramebuffer[ht][Tt],V,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Tt);else at(X.__webglFramebuffer[ht],V,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(P)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Mt){for(let ht=0,Tt=it.length;ht<Tt;ht++){const Yt=it[ht],ft=n.get(Yt);e.bindTexture(i.TEXTURE_2D,ft.__webglTexture),xt(i.TEXTURE_2D,Yt),at(X.__webglFramebuffer,V,Yt,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,0),m(Yt)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)&&(ht=V.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,ot.__webglTexture),xt(ht,P),P.mipmaps&&P.mipmaps.length>0)for(let Tt=0;Tt<P.mipmaps.length;Tt++)at(X.__webglFramebuffer[Tt],V,P,i.COLOR_ATTACHMENT0,ht,Tt);else at(X.__webglFramebuffer,V,P,i.COLOR_ATTACHMENT0,ht,0);m(P)&&g(ht),e.unbindTexture()}V.depthBuffer&&Wt(V)}function ne(V){const P=V.textures;for(let X=0,ot=P.length;X<ot;X++){const it=P[X];if(m(it)){const rt=V.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Mt=n.get(it).__webglTexture;e.bindTexture(rt,Mt),g(rt),e.unbindTexture()}}}const U=[],pt=[];function lt(V){if(V.samples>0){if(nt(V)===!1){const P=V.textures,X=V.width,ot=V.height;let it=i.COLOR_BUFFER_BIT;const rt=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=n.get(V),ht=P.length>1;if(ht)for(let Tt=0;Tt<P.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Tt=0;Tt<P.length;Tt++){if(V.resolveDepthBuffer&&(V.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),V.stencilBuffer&&V.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[Tt]);const Yt=n.get(P[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Yt,0)}i.blitFramebuffer(0,0,X,ot,0,0,X,ot,it,i.NEAREST),l===!0&&(U.length=0,pt.length=0,U.push(i.COLOR_ATTACHMENT0+Tt),V.depthBuffer&&V.resolveDepthBuffer===!1&&(U.push(rt),pt.push(rt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,pt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,U))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let Tt=0;Tt<P.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,Mt.__webglColorRenderbuffer[Tt]);const Yt=n.get(P[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,Yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(V.depthBuffer&&V.resolveDepthBuffer===!1&&l){const P=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[P])}}}function yt(V){return Math.min(r.maxSamples,V.samples)}function nt(V){const P=n.get(V);return V.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function kt(V){const P=o.render.frame;h.get(V)!==P&&(h.set(V,P),V.update())}function Et(V,P){const X=V.colorSpace,ot=V.format,it=V.type;return V.isCompressedTexture===!0||V.isVideoTexture===!0||X!==Kr&&X!==Ar&&(_e.getTransfer(X)===be?(ot!==xi||it!==dr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),P}function Rt(V){return typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement?(c.width=V.naturalWidth||V.width,c.height=V.naturalHeight||V.height):typeof VideoFrame<"u"&&V instanceof VideoFrame?(c.width=V.displayWidth,c.height=V.displayHeight):(c.width=V.width,c.height=V.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=b,this.setTexture2D=G,this.setTexture2DArray=K,this.setTexture3D=W,this.setTextureCube=tt,this.rebindTextures=Jt,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=Wt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=nt}function LD(i,t){function e(n,r=Ar){let s;const o=_e.getTransfer(r);if(n===dr)return i.UNSIGNED_BYTE;if(n===qf)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$f)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Kv)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===jv)return i.BYTE;if(n===Yv)return i.SHORT;if(n===nl)return i.UNSIGNED_SHORT;if(n===Wf)return i.INT;if(n===Os)return i.UNSIGNED_INT;if(n===rr)return i.FLOAT;if(n===wl)return i.HALF_FLOAT;if(n===Qv)return i.ALPHA;if(n===Jv)return i.RGB;if(n===xi)return i.RGBA;if(n===Zv)return i.LUMINANCE;if(n===ty)return i.LUMINANCE_ALPHA;if(n===Do)return i.DEPTH_COMPONENT;if(n===jo)return i.DEPTH_STENCIL;if(n===ey)return i.RED;if(n===Xf)return i.RED_INTEGER;if(n===ny)return i.RG;if(n===jf)return i.RG_INTEGER;if(n===Yf)return i.RGBA_INTEGER;if(n===Ec||n===Sc||n===Tc||n===wc)if(o===be)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ec)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ec)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Tc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ud||n===hd||n===dd||n===fd)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ud)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===dd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===pd||n===md||n===gd)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===pd||n===md)return o===be?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===gd)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_d||n===vd||n===yd||n===xd||n===Ed||n===Sd||n===Td||n===wd||n===Md||n===Ad||n===bd||n===Rd||n===Cd||n===Id)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===_d)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vd)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yd)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xd)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ed)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Sd)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Td)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wd)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Md)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ad)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bd)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Rd)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Cd)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Id)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mc||n===Pd||n===Dd)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Mc)return o===be?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Dd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===iy||n===Ld||n===Nd||n===Od)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Mc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ld)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Nd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Od)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class ND extends si{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ei extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const OD={type:"move"};class xh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,y=.005;c.inputState.pinching&&f>p+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(OD)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ei;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const UD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FD=`
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

}`;class VD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Fn,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new $r({vertexShader:UD,fragmentShader:FD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new fe(new lr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kD extends Gs{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,y=null;const _=new VD,m=e.getContextAttributes();let g=null,A=null;const M=[],R=[],F=new dt;let D=null;const S=new si;S.layers.enable(1),S.viewport=new nn;const T=new si;T.layers.enable(2),T.viewport=new nn;const x=[S,T],E=new ND;E.layers.enable(1),E.layers.enable(2);let b=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let at=M[et];return at===void 0&&(at=new xh,M[et]=at),at.getTargetRaySpace()},this.getControllerGrip=function(et){let at=M[et];return at===void 0&&(at=new xh,M[et]=at),at.getGripSpace()},this.getHand=function(et){let at=M[et];return at===void 0&&(at=new xh,M[et]=at),at.getHandSpace()};function C(et){const at=R.indexOf(et.inputSource);if(at===-1)return;const Ct=M[at];Ct!==void 0&&(Ct.update(et.inputSource,et.frame,c||o),Ct.dispatchEvent({type:et.type,data:et.inputSource}))}function G(){r.removeEventListener("select",C),r.removeEventListener("selectstart",C),r.removeEventListener("selectend",C),r.removeEventListener("squeeze",C),r.removeEventListener("squeezestart",C),r.removeEventListener("squeezeend",C),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",K);for(let et=0;et<M.length;et++){const at=R[et];at!==null&&(R[et]=null,M[et].disconnect(at))}b=null,L=null,_.reset(),t.setRenderTarget(g),p=null,f=null,d=null,r=null,A=null,Bt.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(F.width,F.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){s=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){a=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(et){c=et},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(et){if(r=et,r!==null){if(g=t.getRenderTarget(),r.addEventListener("select",C),r.addEventListener("selectstart",C),r.addEventListener("selectend",C),r.addEventListener("squeeze",C),r.addEventListener("squeezestart",C),r.addEventListener("squeezeend",C),r.addEventListener("end",G),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(F),r.renderState.layers===void 0){const at={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,at),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new Us(p.framebufferWidth,p.framebufferHeight,{format:xi,type:dr,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let at=null,Ct=null,_t=null;m.depth&&(_t=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=m.stencil?jo:Do,Ct=m.stencil?Xo:Os);const Wt={colorFormat:e.RGBA8,depthFormat:_t,scaleFactor:s};d=new XRWebGLBinding(r,e),f=d.createProjectionLayer(Wt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),A=new Us(f.textureWidth,f.textureHeight,{format:xi,type:dr,depthTexture:new _y(f.textureWidth,f.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Bt.setContext(r),Bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(et){for(let at=0;at<et.removed.length;at++){const Ct=et.removed[at],_t=R.indexOf(Ct);_t>=0&&(R[_t]=null,M[_t].disconnect(Ct))}for(let at=0;at<et.added.length;at++){const Ct=et.added[at];let _t=R.indexOf(Ct);if(_t===-1){for(let Jt=0;Jt<M.length;Jt++)if(Jt>=R.length){R.push(Ct),_t=Jt;break}else if(R[Jt]===null){R[Jt]=Ct,_t=Jt;break}if(_t===-1)break}const Wt=M[_t];Wt&&Wt.connect(Ct)}}const W=new k,tt=new k;function Q(et,at,Ct){W.setFromMatrixPosition(at.matrixWorld),tt.setFromMatrixPosition(Ct.matrixWorld);const _t=W.distanceTo(tt),Wt=at.projectionMatrix.elements,Jt=Ct.projectionMatrix.elements,zt=Wt[14]/(Wt[10]-1),ne=Wt[14]/(Wt[10]+1),U=(Wt[9]+1)/Wt[5],pt=(Wt[9]-1)/Wt[5],lt=(Wt[8]-1)/Wt[0],yt=(Jt[8]+1)/Jt[0],nt=zt*lt,kt=zt*yt,Et=_t/(-lt+yt),Rt=Et*-lt;at.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Rt),et.translateZ(Et),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert();const V=zt+Et,P=ne+Et,X=nt-Rt,ot=kt+(_t-Rt),it=U*ne/P*V,rt=pt*ne/P*V;et.projectionMatrix.makePerspective(X,ot,it,rt,V,P),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}function gt(et,at){at===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(at.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(r===null)return;_.texture!==null&&(et.near=_.depthNear,et.far=_.depthFar),E.near=T.near=S.near=et.near,E.far=T.far=S.far=et.far,(b!==E.near||L!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),b=E.near,L=E.far,S.near=b,S.far=L,T.near=b,T.far=L,S.updateProjectionMatrix(),T.updateProjectionMatrix(),et.updateProjectionMatrix());const at=et.parent,Ct=E.cameras;gt(E,at);for(let _t=0;_t<Ct.length;_t++)gt(Ct[_t],at);Ct.length===2?Q(E,S,T):E.projectionMatrix.copy(S.projectionMatrix),St(et,E,at)};function St(et,at,Ct){Ct===null?et.matrix.copy(at.matrixWorld):(et.matrix.copy(Ct.matrixWorld),et.matrix.invert(),et.matrix.multiply(at.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(at.projectionMatrix),et.projectionMatrixInverse.copy(at.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=il*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(et){l=et,f!==null&&(f.fixedFoveation=et),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=et)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(E)};let xt=null;function Ut(et,at){if(h=at.getViewerPose(c||o),y=at,h!==null){const Ct=h.views;p!==null&&(t.setRenderTargetFramebuffer(A,p.framebuffer),t.setRenderTarget(A));let _t=!1;Ct.length!==E.cameras.length&&(E.cameras.length=0,_t=!0);for(let Jt=0;Jt<Ct.length;Jt++){const zt=Ct[Jt];let ne=null;if(p!==null)ne=p.getViewport(zt);else{const pt=d.getViewSubImage(f,zt);ne=pt.viewport,Jt===0&&(t.setRenderTargetTextures(A,pt.colorTexture,f.ignoreDepthValues?void 0:pt.depthStencilTexture),t.setRenderTarget(A))}let U=x[Jt];U===void 0&&(U=new si,U.layers.enable(Jt),U.viewport=new nn,x[Jt]=U),U.matrix.fromArray(zt.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(zt.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(ne.x,ne.y,ne.width,ne.height),Jt===0&&(E.matrix.copy(U.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),_t===!0&&E.cameras.push(U)}const Wt=r.enabledFeatures;if(Wt&&Wt.includes("depth-sensing")){const Jt=d.getDepthInformation(Ct[0]);Jt&&Jt.isValid&&Jt.texture&&_.init(t,Jt,r.renderState)}}for(let Ct=0;Ct<M.length;Ct++){const _t=R[Ct],Wt=M[Ct];_t!==null&&Wt!==void 0&&Wt.update(_t,at,c||o)}xt&&xt(et,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),y=null}const Bt=new my;Bt.setAnimationLoop(Ut),this.setAnimationLoop=function(et){xt=et},this.dispose=function(){}}}const as=new wi,BD=new ke;function zD(i,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,dy(i)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function r(m,g,A,M,R){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(m,g):g.isMeshToonMaterial?(s(m,g),d(m,g)):g.isMeshPhongMaterial?(s(m,g),h(m,g)):g.isMeshStandardMaterial?(s(m,g),f(m,g),g.isMeshPhysicalMaterial&&p(m,g,R)):g.isMeshMatcapMaterial?(s(m,g),y(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),_(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,A,M):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Bn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Bn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const A=t.get(g),M=A.envMap,R=A.envMapRotation;M&&(m.envMap.value=M,as.copy(R),as.x*=-1,as.y*=-1,as.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),m.envMapRotation.value.setFromMatrix4(BD.makeRotationFromEuler(as)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,A,M){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*A,m.scale.value=M*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function d(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function p(m,g,A){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Bn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,g){g.matcap&&(m.matcap.value=g.matcap)}function _(m,g){const A=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function HD(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,M){const R=M.program;n.uniformBlockBinding(A,R)}function c(A,M){let R=r[A.id];R===void 0&&(y(A),R=h(A),r[A.id]=R,A.addEventListener("dispose",m));const F=M.program;n.updateUBOMapping(A,F);const D=t.render.frame;s[A.id]!==D&&(f(A),s[A.id]=D)}function h(A){const M=d();A.__bindingPointIndex=M;const R=i.createBuffer(),F=A.__size,D=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,R),i.bufferData(i.UNIFORM_BUFFER,F,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,R),R}function d(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const M=r[A.id],R=A.uniforms,F=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let D=0,S=R.length;D<S;D++){const T=Array.isArray(R[D])?R[D]:[R[D]];for(let x=0,E=T.length;x<E;x++){const b=T[x];if(p(b,D,x,F)===!0){const L=b.__offset,C=Array.isArray(b.value)?b.value:[b.value];let G=0;for(let K=0;K<C.length;K++){const W=C[K],tt=_(W);typeof W=="number"||typeof W=="boolean"?(b.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,L+G,b.__data)):W.isMatrix3?(b.__data[0]=W.elements[0],b.__data[1]=W.elements[1],b.__data[2]=W.elements[2],b.__data[3]=0,b.__data[4]=W.elements[3],b.__data[5]=W.elements[4],b.__data[6]=W.elements[5],b.__data[7]=0,b.__data[8]=W.elements[6],b.__data[9]=W.elements[7],b.__data[10]=W.elements[8],b.__data[11]=0):(W.toArray(b.__data,G),G+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(A,M,R,F){const D=A.value,S=M+"_"+R;if(F[S]===void 0)return typeof D=="number"||typeof D=="boolean"?F[S]=D:F[S]=D.clone(),!0;{const T=F[S];if(typeof D=="number"||typeof D=="boolean"){if(T!==D)return F[S]=D,!0}else if(T.equals(D)===!1)return T.copy(D),!0}return!1}function y(A){const M=A.uniforms;let R=0;const F=16;for(let S=0,T=M.length;S<T;S++){const x=Array.isArray(M[S])?M[S]:[M[S]];for(let E=0,b=x.length;E<b;E++){const L=x[E],C=Array.isArray(L.value)?L.value:[L.value];for(let G=0,K=C.length;G<K;G++){const W=C[G],tt=_(W),Q=R%F;Q!==0&&F-Q<tt.boundary&&(R+=F-Q),L.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=R,R+=tt.storage}}}const D=R%F;return D>0&&(R+=F-D),A.__size=R,A.__cache={},this}function _(A){const M={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(M.boundary=4,M.storage=4):A.isVector2?(M.boundary=8,M.storage=8):A.isVector3||A.isColor?(M.boundary=16,M.storage=12):A.isVector4?(M.boundary=16,M.storage=16):A.isMatrix3?(M.boundary=48,M.storage=48):A.isMatrix4?(M.boundary=64,M.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),M}function m(A){const M=A.target;M.removeEventListener("dispose",m);const R=o.indexOf(M.__bindingPointIndex);o.splice(R,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function g(){for(const A in r)i.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:g}}class GD{constructor(t={}){const{canvas:e=N1(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),y=new Int32Array(4);let _=null,m=null;const g=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mn,this.toneMapping=Fr,this.toneMappingExposure=1;const M=this;let R=!1,F=0,D=0,S=null,T=-1,x=null;const E=new nn,b=new nn;let L=null;const C=new se(0);let G=0,K=e.width,W=e.height,tt=1,Q=null,gt=null;const St=new nn(0,0,K,W),xt=new nn(0,0,K,W);let Ut=!1;const Bt=new np;let et=!1,at=!1;const Ct=new ke,_t=new k,Wt=new nn,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let zt=!1;function ne(){return S===null?tt:1}let U=n;function pt(N,B){return e.getContext(N,B)}try{const N={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Hf}`),e.addEventListener("webglcontextlost",$,!1),e.addEventListener("webglcontextrestored",J,!1),e.addEventListener("webglcontextcreationerror",ct,!1),U===null){const B="webgl2";if(U=pt(B,N),U===null)throw pt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw console.error("THREE.WebGLRenderer: "+N.message),N}let lt,yt,nt,kt,Et,Rt,V,P,X,ot,it,rt,Mt,ht,Tt,Yt,ft,At,ee,qt,It,$t,Kt,Se;function I(){lt=new KI(U),lt.init(),$t=new LD(U,lt),yt=new WI(U,lt,t,$t),nt=new ID(U),kt=new ZI(U),Et=new gD,Rt=new DD(U,lt,nt,Et,yt,$t,kt),V=new $I(M),P=new YI(M),X=new oR(U),Kt=new HI(U,X),ot=new QI(U,X,kt,Kt),it=new eP(U,ot,X,kt),ee=new tP(U,yt,Rt),Yt=new qI(Et),rt=new mD(M,V,P,lt,yt,Kt,Yt),Mt=new zD(M,Et),ht=new vD,Tt=new wD(lt),At=new zI(M,V,P,nt,it,f,l),ft=new CD(M,it,yt),Se=new HD(U,kt,yt,nt),qt=new GI(U,lt,kt),It=new JI(U,lt,kt),kt.programs=rt.programs,M.capabilities=yt,M.extensions=lt,M.properties=Et,M.renderLists=ht,M.shadowMap=ft,M.state=nt,M.info=kt}I();const q=new kD(M,U);this.xr=q,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const N=lt.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=lt.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(N){N!==void 0&&(tt=N,this.setSize(K,W,!1))},this.getSize=function(N){return N.set(K,W)},this.setSize=function(N,B,j=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=N,W=B,e.width=Math.floor(N*tt),e.height=Math.floor(B*tt),j===!0&&(e.style.width=N+"px",e.style.height=B+"px"),this.setViewport(0,0,N,B)},this.getDrawingBufferSize=function(N){return N.set(K*tt,W*tt).floor()},this.setDrawingBufferSize=function(N,B,j){K=N,W=B,tt=j,e.width=Math.floor(N*j),e.height=Math.floor(B*j),this.setViewport(0,0,N,B)},this.getCurrentViewport=function(N){return N.copy(E)},this.getViewport=function(N){return N.copy(St)},this.setViewport=function(N,B,j,Y){N.isVector4?St.set(N.x,N.y,N.z,N.w):St.set(N,B,j,Y),nt.viewport(E.copy(St).multiplyScalar(tt).round())},this.getScissor=function(N){return N.copy(xt)},this.setScissor=function(N,B,j,Y){N.isVector4?xt.set(N.x,N.y,N.z,N.w):xt.set(N,B,j,Y),nt.scissor(b.copy(xt).multiplyScalar(tt).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(N){nt.setScissorTest(Ut=N)},this.setOpaqueSort=function(N){Q=N},this.setTransparentSort=function(N){gt=N},this.getClearColor=function(N){return N.copy(At.getClearColor())},this.setClearColor=function(){At.setClearColor.apply(At,arguments)},this.getClearAlpha=function(){return At.getClearAlpha()},this.setClearAlpha=function(){At.setClearAlpha.apply(At,arguments)},this.clear=function(N=!0,B=!0,j=!0){let Y=0;if(N){let z=!1;if(S!==null){const mt=S.texture.format;z=mt===Yf||mt===jf||mt===Xf}if(z){const mt=S.texture.type,bt=mt===dr||mt===Os||mt===nl||mt===Xo||mt===qf||mt===$f,Dt=At.getClearColor(),Pt=At.getClearAlpha(),Xt=Dt.r,jt=Dt.g,Vt=Dt.b;bt?(p[0]=Xt,p[1]=jt,p[2]=Vt,p[3]=Pt,U.clearBufferuiv(U.COLOR,0,p)):(y[0]=Xt,y[1]=jt,y[2]=Vt,y[3]=Pt,U.clearBufferiv(U.COLOR,0,y))}else Y|=U.COLOR_BUFFER_BIT}B&&(Y|=U.DEPTH_BUFFER_BIT),j&&(Y|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",$,!1),e.removeEventListener("webglcontextrestored",J,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),ht.dispose(),Tt.dispose(),Et.dispose(),V.dispose(),P.dispose(),it.dispose(),Kt.dispose(),Se.dispose(),rt.dispose(),q.dispose(),q.removeEventListener("sessionstart",Ne),q.removeEventListener("sessionend",Pe),Xe.stop()};function $(N){N.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const N=kt.autoReset,B=ft.enabled,j=ft.autoUpdate,Y=ft.needsUpdate,z=ft.type;I(),kt.autoReset=N,ft.enabled=B,ft.autoUpdate=j,ft.needsUpdate=Y,ft.type=z}function ct(N){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Ot(N){const B=N.target;B.removeEventListener("dispose",Ot),Ht(B)}function Ht(N){Ce(N),Et.remove(N)}function Ce(N){const B=Et.get(N).programs;B!==void 0&&(B.forEach(function(j){rt.releaseProgram(j)}),N.isShaderMaterial&&rt.releaseShaderCache(N))}this.renderBufferDirect=function(N,B,j,Y,z,mt){B===null&&(B=Jt);const bt=z.isMesh&&z.matrixWorld.determinant()<0,Dt=Cl(N,B,j,Y,z);nt.setMaterial(Y,bt);let Pt=j.index,Xt=1;if(Y.wireframe===!0){if(Pt=ot.getWireframeAttribute(j),Pt===void 0)return;Xt=2}const jt=j.drawRange,Vt=j.attributes.position;let oe=jt.start*Xt,Te=(jt.start+jt.count)*Xt;mt!==null&&(oe=Math.max(oe,mt.start*Xt),Te=Math.min(Te,(mt.start+mt.count)*Xt)),Pt!==null?(oe=Math.max(oe,0),Te=Math.min(Te,Pt.count)):Vt!=null&&(oe=Math.max(oe,0),Te=Math.min(Te,Vt.count));const De=Te-oe;if(De<0||De===1/0)return;Kt.setup(z,Y,Dt,j,Pt);let yn,de=qt;if(Pt!==null&&(yn=X.get(Pt),de=It,de.setIndex(yn)),z.isMesh)Y.wireframe===!0?(nt.setLineWidth(Y.wireframeLinewidth*ne()),de.setMode(U.LINES)):de.setMode(U.TRIANGLES);else if(z.isLine){let Ft=Y.linewidth;Ft===void 0&&(Ft=1),nt.setLineWidth(Ft*ne()),z.isLineSegments?de.setMode(U.LINES):z.isLineLoop?de.setMode(U.LINE_LOOP):de.setMode(U.LINE_STRIP)}else z.isPoints?de.setMode(U.POINTS):z.isSprite&&de.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)de.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))de.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ft=z._multiDrawStarts,qe=z._multiDrawCounts,ue=z._multiDrawCount,Vn=Pt?X.get(Pt).bytesPerElement:1,$i=Et.get(Y).currentProgram.getUniforms();for(let Ln=0;Ln<ue;Ln++)$i.setValue(U,"_gl_DrawID",Ln),de.render(Ft[Ln]/Vn,qe[Ln])}else if(z.isInstancedMesh)de.renderInstances(oe,De,z.count);else if(j.isInstancedBufferGeometry){const Ft=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,qe=Math.min(j.instanceCount,Ft);de.renderInstances(oe,De,qe)}else de.render(oe,De)};function Ie(N,B,j){N.transparent===!0&&N.side===ir&&N.forceSinglePass===!1?(N.side=Bn,N.needsUpdate=!0,Xs(N,B,j),N.side=qr,N.needsUpdate=!0,Xs(N,B,j),N.side=ir):Xs(N,B,j)}this.compile=function(N,B,j=null){j===null&&(j=N),m=Tt.get(j),m.init(B),A.push(m),j.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),N!==j&&N.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights();const Y=new Set;return N.traverse(function(z){const mt=z.material;if(mt)if(Array.isArray(mt))for(let bt=0;bt<mt.length;bt++){const Dt=mt[bt];Ie(Dt,j,z),Y.add(Dt)}else Ie(mt,j,z),Y.add(mt)}),A.pop(),m=null,Y},this.compileAsync=function(N,B,j=null){const Y=this.compile(N,B,j);return new Promise(z=>{function mt(){if(Y.forEach(function(bt){Et.get(bt).currentProgram.isReady()&&Y.delete(bt)}),Y.size===0){z(N);return}setTimeout(mt,10)}lt.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let ae=null;function Me(N){ae&&ae(N)}function Ne(){Xe.stop()}function Pe(){Xe.start()}const Xe=new my;Xe.setAnimationLoop(Me),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(N){ae=N,q.setAnimationLoop(N),N===null?Xe.stop():Xe.start()},q.addEventListener("sessionstart",Ne),q.addEventListener("sessionend",Pe),this.render=function(N,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(B),B=q.getCamera()),N.isScene===!0&&N.onBeforeRender(M,N,B,S),m=Tt.get(N,A.length),m.init(B),A.push(m),Ct.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Bt.setFromProjectionMatrix(Ct),at=this.localClippingEnabled,et=Yt.init(this.clippingPlanes,at),_=ht.get(N,g.length),_.init(),g.push(_),q.enabled===!0&&q.isPresenting===!0){const mt=M.xr.getDepthSensingMesh();mt!==null&&Dn(mt,B,-1/0,M.sortObjects)}Dn(N,B,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(Q,gt),zt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,zt&&At.addToRenderList(_,N),this.info.render.frame++,et===!0&&Yt.beginShadows();const j=m.state.shadowsArray;ft.render(j,N,B),et===!0&&Yt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=_.opaque,z=_.transmissive;if(m.setupLights(),B.isArrayCamera){const mt=B.cameras;if(z.length>0)for(let bt=0,Dt=mt.length;bt<Dt;bt++){const Pt=mt[bt];Jr(Y,z,N,Pt)}zt&&At.render(N);for(let bt=0,Dt=mt.length;bt<Dt;bt++){const Pt=mt[bt];$n(_,N,Pt,Pt.viewport)}}else z.length>0&&Jr(Y,z,N,B),zt&&At.render(N),$n(_,N,B);S!==null&&(Rt.updateMultisampleRenderTarget(S),Rt.updateRenderTargetMipmap(S)),N.isScene===!0&&N.onAfterRender(M,N,B),Kt.resetDefaultState(),T=-1,x=null,A.pop(),A.length>0?(m=A[A.length-1],et===!0&&Yt.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,g.pop(),g.length>0?_=g[g.length-1]:_=null};function Dn(N,B,j,Y){if(N.visible===!1)return;if(N.layers.test(B.layers)){if(N.isGroup)j=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(B);else if(N.isLight)m.pushLight(N),N.castShadow&&m.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||Bt.intersectsSprite(N)){Y&&Wt.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Ct);const bt=it.update(N),Dt=N.material;Dt.visible&&_.push(N,bt,Dt,j,Wt.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||Bt.intersectsObject(N))){const bt=it.update(N),Dt=N.material;if(Y&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Wt.copy(N.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Wt.copy(bt.boundingSphere.center)),Wt.applyMatrix4(N.matrixWorld).applyMatrix4(Ct)),Array.isArray(Dt)){const Pt=bt.groups;for(let Xt=0,jt=Pt.length;Xt<jt;Xt++){const Vt=Pt[Xt],oe=Dt[Vt.materialIndex];oe&&oe.visible&&_.push(N,bt,oe,j,Wt.z,Vt)}}else Dt.visible&&_.push(N,bt,Dt,j,Wt.z,null)}}const mt=N.children;for(let bt=0,Dt=mt.length;bt<Dt;bt++)Dn(mt[bt],B,j,Y)}function $n(N,B,j,Y){const z=N.opaque,mt=N.transmissive,bt=N.transparent;m.setupLightsView(j),et===!0&&Yt.setGlobalState(M.clippingPlanes,j),Y&&nt.viewport(E.copy(Y)),z.length>0&&$s(z,B,j),mt.length>0&&$s(mt,B,j),bt.length>0&&$s(bt,B,j),nt.buffers.depth.setTest(!0),nt.buffers.depth.setMask(!0),nt.buffers.color.setMask(!0),nt.setPolygonOffset(!1)}function Jr(N,B,j,Y){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Y.id]===void 0&&(m.state.transmissionRenderTarget[Y.id]=new Us(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float")?wl:dr,minFilter:xs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_e.workingColorSpace}));const mt=m.state.transmissionRenderTarget[Y.id],bt=Y.viewport||E;mt.setSize(bt.z,bt.w);const Dt=M.getRenderTarget();M.setRenderTarget(mt),M.getClearColor(C),G=M.getClearAlpha(),G<1&&M.setClearColor(16777215,.5),zt?At.render(j):M.clear();const Pt=M.toneMapping;M.toneMapping=Fr;const Xt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),m.setupLightsView(Y),et===!0&&Yt.setGlobalState(M.clippingPlanes,Y),$s(N,j,Y),Rt.updateMultisampleRenderTarget(mt),Rt.updateRenderTargetMipmap(mt),lt.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let Vt=0,oe=B.length;Vt<oe;Vt++){const Te=B[Vt],De=Te.object,yn=Te.geometry,de=Te.material,Ft=Te.group;if(de.side===ir&&De.layers.test(Y.layers)){const qe=de.side;de.side=Bn,de.needsUpdate=!0,qi(De,j,Y,yn,de,Ft),de.side=qe,de.needsUpdate=!0,jt=!0}}jt===!0&&(Rt.updateMultisampleRenderTarget(mt),Rt.updateRenderTargetMipmap(mt))}M.setRenderTarget(Dt),M.setClearColor(C,G),Xt!==void 0&&(Y.viewport=Xt),M.toneMapping=Pt}function $s(N,B,j){const Y=B.isScene===!0?B.overrideMaterial:null;for(let z=0,mt=N.length;z<mt;z++){const bt=N[z],Dt=bt.object,Pt=bt.geometry,Xt=Y===null?bt.material:Y,jt=bt.group;Dt.layers.test(j.layers)&&qi(Dt,B,j,Pt,Xt,jt)}}function qi(N,B,j,Y,z,mt){N.onBeforeRender(M,B,j,Y,z,mt),N.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),z.transparent===!0&&z.side===ir&&z.forceSinglePass===!1?(z.side=Bn,z.needsUpdate=!0,M.renderBufferDirect(j,B,Y,z,N,mt),z.side=qr,z.needsUpdate=!0,M.renderBufferDirect(j,B,Y,z,N,mt),z.side=ir):M.renderBufferDirect(j,B,Y,z,N,mt),N.onAfterRender(M,B,j,Y,z,mt)}function Xs(N,B,j){B.isScene!==!0&&(B=Jt);const Y=Et.get(N),z=m.state.lights,mt=m.state.shadowsArray,bt=z.state.version,Dt=rt.getParameters(N,z.state,mt,B,j),Pt=rt.getProgramCacheKey(Dt);let Xt=Y.programs;Y.environment=N.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(N.isMeshStandardMaterial?P:V).get(N.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&N.envMap===null?B.environmentRotation:N.envMapRotation,Xt===void 0&&(N.addEventListener("dispose",Ot),Xt=new Map,Y.programs=Xt);let jt=Xt.get(Pt);if(jt!==void 0){if(Y.currentProgram===jt&&Y.lightsStateVersion===bt)return Zr(N,Dt),jt}else Dt.uniforms=rt.getUniforms(N),N.onBeforeCompile(Dt,M),jt=rt.acquireProgram(Dt,Pt),Xt.set(Pt,jt),Y.uniforms=Dt.uniforms;const Vt=Y.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Vt.clippingPlanes=Yt.uniform),Zr(N,Dt),Y.needsLights=js(N),Y.lightsStateVersion=bt,Y.needsLights&&(Vt.ambientLightColor.value=z.state.ambient,Vt.lightProbe.value=z.state.probe,Vt.directionalLights.value=z.state.directional,Vt.directionalLightShadows.value=z.state.directionalShadow,Vt.spotLights.value=z.state.spot,Vt.spotLightShadows.value=z.state.spotShadow,Vt.rectAreaLights.value=z.state.rectArea,Vt.ltc_1.value=z.state.rectAreaLTC1,Vt.ltc_2.value=z.state.rectAreaLTC2,Vt.pointLights.value=z.state.point,Vt.pointLightShadows.value=z.state.pointShadow,Vt.hemisphereLights.value=z.state.hemi,Vt.directionalShadowMap.value=z.state.directionalShadowMap,Vt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Vt.spotShadowMap.value=z.state.spotShadowMap,Vt.spotLightMatrix.value=z.state.spotLightMatrix,Vt.spotLightMap.value=z.state.spotLightMap,Vt.pointShadowMap.value=z.state.pointShadowMap,Vt.pointShadowMatrix.value=z.state.pointShadowMatrix),Y.currentProgram=jt,Y.uniformsList=null,jt}function Rl(N){if(N.uniformsList===null){const B=N.currentProgram.getUniforms();N.uniformsList=Ac.seqWithValue(B.seq,N.uniforms)}return N.uniformsList}function Zr(N,B){const j=Et.get(N);j.outputColorSpace=B.outputColorSpace,j.batching=B.batching,j.batchingColor=B.batchingColor,j.instancing=B.instancing,j.instancingColor=B.instancingColor,j.instancingMorph=B.instancingMorph,j.skinning=B.skinning,j.morphTargets=B.morphTargets,j.morphNormals=B.morphNormals,j.morphColors=B.morphColors,j.morphTargetsCount=B.morphTargetsCount,j.numClippingPlanes=B.numClippingPlanes,j.numIntersection=B.numClipIntersection,j.vertexAlphas=B.vertexAlphas,j.vertexTangents=B.vertexTangents,j.toneMapping=B.toneMapping}function Cl(N,B,j,Y,z){B.isScene!==!0&&(B=Jt),Rt.resetTextureUnits();const mt=B.fog,bt=Y.isMeshStandardMaterial?B.environment:null,Dt=S===null?M.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Kr,Pt=(Y.isMeshStandardMaterial?P:V).get(Y.envMap||bt),Xt=Y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,jt=!!j.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Vt=!!j.morphAttributes.position,oe=!!j.morphAttributes.normal,Te=!!j.morphAttributes.color;let De=Fr;Y.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(De=M.toneMapping);const yn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,de=yn!==void 0?yn.length:0,Ft=Et.get(Y),qe=m.state.lights;if(et===!0&&(at===!0||N!==x)){const je=N===x&&Y.id===T;Yt.setState(Y,N,je)}let ue=!1;Y.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==qe.state.version||Ft.outputColorSpace!==Dt||z.isBatchedMesh&&Ft.batching===!1||!z.isBatchedMesh&&Ft.batching===!0||z.isBatchedMesh&&Ft.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ft.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ft.instancing===!1||!z.isInstancedMesh&&Ft.instancing===!0||z.isSkinnedMesh&&Ft.skinning===!1||!z.isSkinnedMesh&&Ft.skinning===!0||z.isInstancedMesh&&Ft.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ft.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ft.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ft.instancingMorph===!1&&z.morphTexture!==null||Ft.envMap!==Pt||Y.fog===!0&&Ft.fog!==mt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==Yt.numPlanes||Ft.numIntersection!==Yt.numIntersection)||Ft.vertexAlphas!==Xt||Ft.vertexTangents!==jt||Ft.morphTargets!==Vt||Ft.morphNormals!==oe||Ft.morphColors!==Te||Ft.toneMapping!==De||Ft.morphTargetsCount!==de)&&(ue=!0):(ue=!0,Ft.__version=Y.version);let Vn=Ft.currentProgram;ue===!0&&(Vn=Xs(Y,B,z));let $i=!1,Ln=!1,ha=!1;const Oe=Vn.getUniforms(),fi=Ft.uniforms;if(nt.useProgram(Vn.program)&&($i=!0,Ln=!0,ha=!0),Y.id!==T&&(T=Y.id,Ln=!0),$i||x!==N){Oe.setValue(U,"projectionMatrix",N.projectionMatrix),Oe.setValue(U,"viewMatrix",N.matrixWorldInverse);const je=Oe.map.cameraPosition;je!==void 0&&je.setValue(U,_t.setFromMatrixPosition(N.matrixWorld)),yt.logarithmicDepthBuffer&&Oe.setValue(U,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Oe.setValue(U,"isOrthographic",N.isOrthographicCamera===!0),x!==N&&(x=N,Ln=!0,ha=!0)}if(z.isSkinnedMesh){Oe.setOptional(U,z,"bindMatrix"),Oe.setOptional(U,z,"bindMatrixInverse");const je=z.skeleton;je&&(je.boneTexture===null&&je.computeBoneTexture(),Oe.setValue(U,"boneTexture",je.boneTexture,Rt))}z.isBatchedMesh&&(Oe.setOptional(U,z,"batchingTexture"),Oe.setValue(U,"batchingTexture",z._matricesTexture,Rt),Oe.setOptional(U,z,"batchingIdTexture"),Oe.setValue(U,"batchingIdTexture",z._indirectTexture,Rt),Oe.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&Oe.setValue(U,"batchingColorTexture",z._colorsTexture,Rt));const da=j.morphAttributes;if((da.position!==void 0||da.normal!==void 0||da.color!==void 0)&&ee.update(z,j,Vn),(Ln||Ft.receiveShadow!==z.receiveShadow)&&(Ft.receiveShadow=z.receiveShadow,Oe.setValue(U,"receiveShadow",z.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(fi.envMap.value=Pt,fi.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&B.environment!==null&&(fi.envMapIntensity.value=B.environmentIntensity),Ln&&(Oe.setValue(U,"toneMappingExposure",M.toneMappingExposure),Ft.needsLights&&ua(fi,ha),mt&&Y.fog===!0&&Mt.refreshFogUniforms(fi,mt),Mt.refreshMaterialUniforms(fi,Y,tt,W,m.state.transmissionRenderTarget[N.id]),Ac.upload(U,Rl(Ft),fi,Rt)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ac.upload(U,Rl(Ft),fi,Rt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Oe.setValue(U,"center",z.center),Oe.setValue(U,"modelViewMatrix",z.modelViewMatrix),Oe.setValue(U,"normalMatrix",z.normalMatrix),Oe.setValue(U,"modelMatrix",z.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const je=Y.uniformsGroups;for(let Xn=0,Ys=je.length;Xn<Ys;Xn++){const ts=je[Xn];Se.update(ts,Vn),Se.bind(ts,Vn)}}return Vn}function ua(N,B){N.ambientLightColor.needsUpdate=B,N.lightProbe.needsUpdate=B,N.directionalLights.needsUpdate=B,N.directionalLightShadows.needsUpdate=B,N.pointLights.needsUpdate=B,N.pointLightShadows.needsUpdate=B,N.spotLights.needsUpdate=B,N.spotLightShadows.needsUpdate=B,N.rectAreaLights.needsUpdate=B,N.hemisphereLights.needsUpdate=B}function js(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(N,B,j){Et.get(N.texture).__webglTexture=B,Et.get(N.depthTexture).__webglTexture=j;const Y=Et.get(N);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=j===void 0,Y.__autoAllocateDepthBuffer||lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(N,B){const j=Et.get(N);j.__webglFramebuffer=B,j.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(N,B=0,j=0){S=N,F=B,D=j;let Y=!0,z=null,mt=!1,bt=!1;if(N){const Pt=Et.get(N);Pt.__useDefaultFramebuffer!==void 0?(nt.bindFramebuffer(U.FRAMEBUFFER,null),Y=!1):Pt.__webglFramebuffer===void 0?Rt.setupRenderTarget(N):Pt.__hasExternalTextures&&Rt.rebindTextures(N,Et.get(N.texture).__webglTexture,Et.get(N.depthTexture).__webglTexture);const Xt=N.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(bt=!0);const jt=Et.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(jt[B])?z=jt[B][j]:z=jt[B],mt=!0):N.samples>0&&Rt.useMultisampledRTT(N)===!1?z=Et.get(N).__webglMultisampledFramebuffer:Array.isArray(jt)?z=jt[j]:z=jt,E.copy(N.viewport),b.copy(N.scissor),L=N.scissorTest}else E.copy(St).multiplyScalar(tt).floor(),b.copy(xt).multiplyScalar(tt).floor(),L=Ut;if(nt.bindFramebuffer(U.FRAMEBUFFER,z)&&Y&&nt.drawBuffers(N,z),nt.viewport(E),nt.scissor(b),nt.setScissorTest(L),mt){const Pt=Et.get(N.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,Pt.__webglTexture,j)}else if(bt){const Pt=Et.get(N.texture),Xt=B||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pt.__webglTexture,j||0,Xt)}T=-1},this.readRenderTargetPixels=function(N,B,j,Y,z,mt,bt){if(!(N&&N.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Et.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&bt!==void 0&&(Dt=Dt[bt]),Dt){nt.bindFramebuffer(U.FRAMEBUFFER,Dt);try{const Pt=N.texture,Xt=Pt.format,jt=Pt.type;if(!yt.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=N.width-Y&&j>=0&&j<=N.height-z&&U.readPixels(B,j,Y,z,$t.convert(Xt),$t.convert(jt),mt)}finally{const Pt=S!==null?Et.get(S).__webglFramebuffer:null;nt.bindFramebuffer(U.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(N,B,j,Y,z,mt,bt){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=Et.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&bt!==void 0&&(Dt=Dt[bt]),Dt){nt.bindFramebuffer(U.FRAMEBUFFER,Dt);try{const Pt=N.texture,Xt=Pt.format,jt=Pt.type;if(!yt.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=N.width-Y&&j>=0&&j<=N.height-z){const Vt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Vt),U.bufferData(U.PIXEL_PACK_BUFFER,mt.byteLength,U.STREAM_READ),U.readPixels(B,j,Y,z,$t.convert(Xt),$t.convert(jt),0),U.flush();const oe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);await O1(U,oe,4);try{U.bindBuffer(U.PIXEL_PACK_BUFFER,Vt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,mt)}finally{U.deleteBuffer(Vt),U.deleteSync(oe)}return mt}}finally{const Pt=S!==null?Et.get(S).__webglFramebuffer:null;nt.bindFramebuffer(U.FRAMEBUFFER,Pt)}}},this.copyFramebufferToTexture=function(N,B=null,j=0){N.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,N=arguments[1]);const Y=Math.pow(2,-j),z=Math.floor(N.image.width*Y),mt=Math.floor(N.image.height*Y),bt=B!==null?B.x:0,Dt=B!==null?B.y:0;Rt.setTexture2D(N,0),U.copyTexSubImage2D(U.TEXTURE_2D,j,0,0,bt,Dt,z,mt),nt.unbindTexture()},this.copyTextureToTexture=function(N,B,j=null,Y=null,z=0){N.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,N=arguments[1],B=arguments[2],z=arguments[3]||0,j=null);let mt,bt,Dt,Pt,Xt,jt;j!==null?(mt=j.max.x-j.min.x,bt=j.max.y-j.min.y,Dt=j.min.x,Pt=j.min.y):(mt=N.image.width,bt=N.image.height,Dt=0,Pt=0),Y!==null?(Xt=Y.x,jt=Y.y):(Xt=0,jt=0);const Vt=$t.convert(B.format),oe=$t.convert(B.type);Rt.setTexture2D(B,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const Te=U.getParameter(U.UNPACK_ROW_LENGTH),De=U.getParameter(U.UNPACK_IMAGE_HEIGHT),yn=U.getParameter(U.UNPACK_SKIP_PIXELS),de=U.getParameter(U.UNPACK_SKIP_ROWS),Ft=U.getParameter(U.UNPACK_SKIP_IMAGES),qe=N.isCompressedTexture?N.mipmaps[z]:N.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,qe.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,qe.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Dt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Pt),N.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,z,Xt,jt,mt,bt,Vt,oe,qe.data):N.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,z,Xt,jt,qe.width,qe.height,Vt,qe.data):U.texSubImage2D(U.TEXTURE_2D,z,Xt,jt,mt,bt,Vt,oe,qe),U.pixelStorei(U.UNPACK_ROW_LENGTH,Te),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,De),U.pixelStorei(U.UNPACK_SKIP_PIXELS,yn),U.pixelStorei(U.UNPACK_SKIP_ROWS,de),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ft),z===0&&B.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),nt.unbindTexture()},this.copyTextureToTexture3D=function(N,B,j=null,Y=null,z=0){N.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,Y=arguments[1]||null,N=arguments[2],B=arguments[3],z=arguments[4]||0);let mt,bt,Dt,Pt,Xt,jt,Vt,oe,Te;const De=N.isCompressedTexture?N.mipmaps[z]:N.image;j!==null?(mt=j.max.x-j.min.x,bt=j.max.y-j.min.y,Dt=j.max.z-j.min.z,Pt=j.min.x,Xt=j.min.y,jt=j.min.z):(mt=De.width,bt=De.height,Dt=De.depth,Pt=0,Xt=0,jt=0),Y!==null?(Vt=Y.x,oe=Y.y,Te=Y.z):(Vt=0,oe=0,Te=0);const yn=$t.convert(B.format),de=$t.convert(B.type);let Ft;if(B.isData3DTexture)Rt.setTexture3D(B,0),Ft=U.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)Rt.setTexture2DArray(B,0),Ft=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);const qe=U.getParameter(U.UNPACK_ROW_LENGTH),ue=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Vn=U.getParameter(U.UNPACK_SKIP_PIXELS),$i=U.getParameter(U.UNPACK_SKIP_ROWS),Ln=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,De.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,De.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Pt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Xt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,jt),N.isDataTexture||N.isData3DTexture?U.texSubImage3D(Ft,z,Vt,oe,Te,mt,bt,Dt,yn,de,De.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(Ft,z,Vt,oe,Te,mt,bt,Dt,yn,De.data):U.texSubImage3D(Ft,z,Vt,oe,Te,mt,bt,Dt,yn,de,De),U.pixelStorei(U.UNPACK_ROW_LENGTH,qe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ue),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Vn),U.pixelStorei(U.UNPACK_SKIP_ROWS,$i),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ln),z===0&&B.generateMipmaps&&U.generateMipmap(Ft),nt.unbindTexture()},this.initRenderTarget=function(N){Et.get(N).__webglFramebuffer===void 0&&Rt.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?Rt.setTextureCube(N,0):N.isData3DTexture?Rt.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?Rt.setTexture2DArray(N,0):Rt.setTexture2D(N,0),nt.unbindTexture()},this.resetState=function(){F=0,D=0,S=null,nt.reset(),Kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Qf?"display-p3":"srgb",e.unpackColorSpace=_e.workingColorSpace===Tu?"display-p3":"srgb"}}class WD extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Wi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const h=n[r],f=n[r+1]-h,p=(o-h)/f;return(r+p)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=e||(o.isVector2?new dt:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new k,r=[],s=[],o=[],a=new k,l=new ke;for(let p=0;p<=t;p++){const y=p/t;r[p]=this.getTangentAt(y,new k)}s[0]=new k,o[0]=new k;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const y=Math.acos(tn(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,y))}o[p].crossVectors(r[p],s[p])}if(e===!0){let p=Math.acos(tn(s[0].dot(s[t]),-1,1));p/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(p=-p);for(let y=1;y<=t;y++)s[y].applyMatrix4(l.makeRotationAxis(r[y],p*y)),o[y].crossVectors(r[y],s[y])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class rp extends Wi{constructor(t=0,e=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new dt){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*d+this.aX,c=f*d+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class qD extends rp{constructor(t,e,n,r,s,o){super(t,e,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function sp(){let i=0,t=0,e=0,n=0;function r(s,o,a,l){i=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,d){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,p*=h,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return i+t*s+e*o+n*a}}}const hc=new k,Eh=new sp,Sh=new sp,Th=new sp;class $D extends Wi{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new k){const n=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(hc.subVectors(r[0],r[1]).add(r[0]),c=hc);const d=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(hc.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=hc),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let y=Math.pow(c.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);_<1e-4&&(_=1),y<1e-4&&(y=_),m<1e-4&&(m=_),Eh.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,y,_,m),Sh.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,y,_,m),Th.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,y,_,m)}else this.curveType==="catmullrom"&&(Eh.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),Sh.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),Th.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(Eh.calc(l),Sh.calc(l),Th.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new k().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function o_(i,t,e,n,r){const s=(n-t)*.5,o=(r-e)*.5,a=i*i,l=i*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*i+e}function XD(i,t){const e=1-i;return e*e*t}function jD(i,t){return 2*(1-i)*i*t}function YD(i,t){return i*i*t}function Ga(i,t,e,n){return XD(i,t)+jD(i,e)+YD(i,n)}function KD(i,t){const e=1-i;return e*e*e*t}function QD(i,t){const e=1-i;return 3*e*e*i*t}function JD(i,t){return 3*(1-i)*i*i*t}function ZD(i,t){return i*i*i*t}function Wa(i,t,e,n,r){return KD(i,t)+QD(i,e)+JD(i,n)+ZD(i,r)}class Sy extends Wi{constructor(t=new dt,e=new dt,n=new dt,r=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new dt){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Wa(t,r.x,s.x,o.x,a.x),Wa(t,r.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class t2 extends Wi{constructor(t=new k,e=new k,n=new k,r=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new k){const n=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Wa(t,r.x,s.x,o.x,a.x),Wa(t,r.y,s.y,o.y,a.y),Wa(t,r.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ty extends Wi{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class e2 extends Wi{constructor(t=new k,e=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new k){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new k){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wy extends Wi{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Ga(t,r.x,s.x,o.x),Ga(t,r.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class n2 extends Wi{constructor(t=new k,e=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new k){const n=e,r=this.v0,s=this.v1,o=this.v2;return n.set(Ga(t,r.x,s.x,o.x),Ga(t,r.y,s.y,o.y),Ga(t,r.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class My extends Wi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){const n=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return n.set(o_(a,l.x,c.x,h.x,d.x),o_(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new dt().fromArray(r))}return this}}var Fd=Object.freeze({__proto__:null,ArcCurve:qD,CatmullRomCurve3:$D,CubicBezierCurve:Sy,CubicBezierCurve3:t2,EllipseCurve:rp,LineCurve:Ty,LineCurve3:e2,QuadraticBezierCurve:wy,QuadraticBezierCurve3:n2,SplineCurve:My});class i2 extends Wi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Fd[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new Fd[r.type]().fromJSON(r))}return this}}class Jc extends i2{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ty(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new wy(this.currentPoint.clone(),new dt(t,e),new dt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,o){const a=new Sy(this.currentPoint.clone(),new dt(t,e),new dt(n,r),new dt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new My(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,r,s,o),this}absarc(t,e,n,r,s,o){return this.absellipse(t,e,n,n,r,s,o),this}ellipse(t,e,n,r,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,r,s,o,a,l),this}absellipse(t,e,n,r,s,o,a,l){const c=new rp(t,e,n,r,s,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class op extends Ai{constructor(t=[new dt(0,-.5),new dt(.5,0),new dt(0,.5)],e=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:r},e=Math.floor(e),r=tn(r,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],h=1/e,d=new k,f=new dt,p=new k,y=new k,_=new k;let m=0,g=0;for(let A=0;A<=t.length-1;A++)switch(A){case 0:m=t[A+1].x-t[A].x,g=t[A+1].y-t[A].y,p.x=g*1,p.y=-m,p.z=g*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[A+1].x-t[A].x,g=t[A+1].y-t[A].y,p.x=g*1,p.y=-m,p.z=g*0,y.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(y)}for(let A=0;A<=e;A++){const M=n+A*h*r,R=Math.sin(M),F=Math.cos(M);for(let D=0;D<=t.length-1;D++){d.x=t[D].x*R,d.y=t[D].y,d.z=t[D].x*F,o.push(d.x,d.y,d.z),f.x=A/e,f.y=D/(t.length-1),a.push(f.x,f.y);const S=l[3*D+0]*R,T=l[3*D+1],x=l[3*D+0]*F;c.push(S,T,x)}}for(let A=0;A<e;A++)for(let M=0;M<t.length-1;M++){const R=M+A*t.length,F=R,D=R+t.length,S=R+t.length+1,T=R+1;s.push(F,D,T),s.push(S,T,D)}this.setIndex(s),this.setAttribute("position",new hn(o,3)),this.setAttribute("uv",new hn(a,2)),this.setAttribute("normal",new hn(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new op(t.points,t.segments,t.phiStart,t.phiLength)}}class ap extends op{constructor(t=1,e=1,n=4,r=8){const s=new Jc;s.absarc(0,-e/2,t,Math.PI*1.5,0),s.absarc(0,e/2,t,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:r}}static fromJSON(t){return new ap(t.radius,t.length,t.capSegments,t.radialSegments)}}class lp extends Ai{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);const s=[],o=[],a=[],l=[],c=new k,h=new dt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const p=n+d/e*r;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new hn(o,3)),this.setAttribute("normal",new hn(a,3)),this.setAttribute("uv",new hn(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lp(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class or extends Ai{constructor(t=1,e=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],f=[],p=[];let y=0;const _=[],m=n/2;let g=0;A(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new hn(d,3)),this.setAttribute("normal",new hn(f,3)),this.setAttribute("uv",new hn(p,2));function A(){const R=new k,F=new k;let D=0;const S=(e-t)/n;for(let T=0;T<=s;T++){const x=[],E=T/s,b=E*(e-t)+t;for(let L=0;L<=r;L++){const C=L/r,G=C*l+a,K=Math.sin(G),W=Math.cos(G);F.x=b*K,F.y=-E*n+m,F.z=b*W,d.push(F.x,F.y,F.z),R.set(K,S,W).normalize(),f.push(R.x,R.y,R.z),p.push(C,1-E),x.push(y++)}_.push(x)}for(let T=0;T<r;T++)for(let x=0;x<s;x++){const E=_[x][T],b=_[x+1][T],L=_[x+1][T+1],C=_[x][T+1];h.push(E,b,C),h.push(b,L,C),D+=6}c.addGroup(g,D,0),g+=D}function M(R){const F=y,D=new dt,S=new k;let T=0;const x=R===!0?t:e,E=R===!0?1:-1;for(let L=1;L<=r;L++)d.push(0,m*E,0),f.push(0,E,0),p.push(.5,.5),y++;const b=y;for(let L=0;L<=r;L++){const G=L/r*l+a,K=Math.cos(G),W=Math.sin(G);S.x=x*W,S.y=m*E,S.z=x*K,d.push(S.x,S.y,S.z),f.push(0,E,0),D.x=K*.5+.5,D.y=W*.5*E+.5,p.push(D.x,D.y),y++}for(let L=0;L<r;L++){const C=F+L,G=b+L;R===!0?h.push(G,G+1,C):h.push(G+1,G,C),T+=3}c.addGroup(g,T,R===!0?1:2),g+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new or(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Mu extends or{constructor(t=1,e=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Mu(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class bc extends Jc{constructor(t){super(t),this.uuid=Ws(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new Jc().fromJSON(r))}return this}}const r2={triangulate:function(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=Ay(i,0,r,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,d,f,p;if(n&&(s=c2(i,t,s,e)),i.length>80*e){a=c=i[0],l=h=i[1];for(let y=e;y<r;y+=e)d=i[y],f=i[y+1],d<a&&(a=d),f<l&&(l=f),d>c&&(c=d),f>h&&(h=f);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return sl(s,o,e,a,l,p,0),o}};function Ay(i,t,e,n,r){let s,o;if(r===x2(i,t,e,n)>0)for(s=t;s<e;s+=n)o=a_(s,i[s],i[s+1],o);else for(s=e-n;s>=t;s-=n)o=a_(s,i[s],i[s+1],o);return o&&Au(o,o.next)&&(al(o),o=o.next),o}function Vs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Au(e,e.next)||Fe(e.prev,e,e.next)===0)){if(al(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function sl(i,t,e,n,r,s,o){if(!i)return;!o&&s&&p2(i,n,r,s);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?o2(i,n,r,s):s2(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),al(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=a2(Vs(i),t,e),sl(i,t,e,n,r,s,2)):o===2&&l2(i,t,e,n,r,s):sl(Vs(i),t,e,n,r,s,1);break}}}function s2(i){const t=i.prev,e=i,n=i.next;if(Fe(t,e,n)>=0)return!1;const r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=r<s?r<o?r:o:s<o?s:o,d=a<l?a<c?a:c:l<c?l:c,f=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let y=n.next;for(;y!==t;){if(y.x>=h&&y.x<=f&&y.y>=d&&y.y<=p&&Mo(r,a,s,l,o,c,y.x,y.y)&&Fe(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function o2(i,t,e,n){const r=i.prev,s=i,o=i.next;if(Fe(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,h=r.y,d=s.y,f=o.y,p=a<l?a<c?a:c:l<c?l:c,y=h<d?h<f?h:f:d<f?d:f,_=a>l?a>c?a:c:l>c?l:c,m=h>d?h>f?h:f:d>f?d:f,g=Vd(p,y,t,e,n),A=Vd(_,m,t,e,n);let M=i.prevZ,R=i.nextZ;for(;M&&M.z>=g&&R&&R.z<=A;){if(M.x>=p&&M.x<=_&&M.y>=y&&M.y<=m&&M!==r&&M!==o&&Mo(a,h,l,d,c,f,M.x,M.y)&&Fe(M.prev,M,M.next)>=0||(M=M.prevZ,R.x>=p&&R.x<=_&&R.y>=y&&R.y<=m&&R!==r&&R!==o&&Mo(a,h,l,d,c,f,R.x,R.y)&&Fe(R.prev,R,R.next)>=0))return!1;R=R.nextZ}for(;M&&M.z>=g;){if(M.x>=p&&M.x<=_&&M.y>=y&&M.y<=m&&M!==r&&M!==o&&Mo(a,h,l,d,c,f,M.x,M.y)&&Fe(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;R&&R.z<=A;){if(R.x>=p&&R.x<=_&&R.y>=y&&R.y<=m&&R!==r&&R!==o&&Mo(a,h,l,d,c,f,R.x,R.y)&&Fe(R.prev,R,R.next)>=0)return!1;R=R.nextZ}return!0}function a2(i,t,e){let n=i;do{const r=n.prev,s=n.next.next;!Au(r,s)&&by(r,n,n.next,s)&&ol(r,s)&&ol(s,r)&&(t.push(r.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),al(n),al(n.next),n=i=s),n=n.next}while(n!==i);return Vs(n)}function l2(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&_2(o,a)){let l=Ry(o,a);o=Vs(o,o.next),l=Vs(l,l.next),sl(o,t,e,n,r,s,0),sl(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function c2(i,t,e,n){const r=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=Ay(i,a,l,n,!1),c===c.next&&(c.steiner=!0),r.push(g2(c));for(r.sort(u2),s=0;s<r.length;s++)e=h2(r[s],e);return e}function u2(i,t){return i.x-t.x}function h2(i,t){const e=d2(i,t);if(!e)return t;const n=Ry(e,i);return Vs(n,n.next),Vs(e,e.next)}function d2(i,t){let e=t,n=-1/0,r;const s=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>n&&(n=f,r=e.x<e.next.x?e:e.next,f===s))return r}e=e.next}while(e!==t);if(!r)return null;const a=r,l=r.x,c=r.y;let h=1/0,d;e=r;do s>=e.x&&e.x>=l&&s!==e.x&&Mo(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(s-e.x),ol(e,i)&&(d<h||d===h&&(e.x>r.x||e.x===r.x&&f2(r,e)))&&(r=e,h=d)),e=e.next;while(e!==a);return r}function f2(i,t){return Fe(i.prev,i,t.prev)<0&&Fe(t.next,i,i.next)<0}function p2(i,t,e,n){let r=i;do r.z===0&&(r.z=Vd(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,m2(r)}function m2(i){let t,e,n,r,s,o,a,l,c=1;do{for(e=i,i=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(r=e,e=e.nextZ,a--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;e=n}s.nextZ=null,c*=2}while(o>1);return i}function Vd(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function g2(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Mo(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function _2(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!v2(i,t)&&(ol(i,t)&&ol(t,i)&&y2(i,t)&&(Fe(i.prev,i,t.prev)||Fe(i,t.prev,t))||Au(i,t)&&Fe(i.prev,i,i.next)>0&&Fe(t.prev,t,t.next)>0)}function Fe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Au(i,t){return i.x===t.x&&i.y===t.y}function by(i,t,e,n){const r=fc(Fe(i,t,e)),s=fc(Fe(i,t,n)),o=fc(Fe(e,n,i)),a=fc(Fe(e,n,t));return!!(r!==s&&o!==a||r===0&&dc(i,e,t)||s===0&&dc(i,n,t)||o===0&&dc(e,i,n)||a===0&&dc(e,t,n))}function dc(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function fc(i){return i>0?1:i<0?-1:0}function v2(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&by(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ol(i,t){return Fe(i.prev,i,i.next)<0?Fe(i,t,i.next)>=0&&Fe(i,i.prev,t)>=0:Fe(i,t,i.prev)<0||Fe(i,i.next,t)<0}function y2(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ry(i,t){const e=new kd(i.i,i.x,i.y),n=new kd(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function a_(i,t,e,n){const r=new kd(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function al(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function kd(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function x2(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class No{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return No.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];l_(t),c_(n,t);let o=t.length;e.forEach(l_);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,c_(n,e[l]);const a=r2.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function l_(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function c_(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class cp extends Ai{constructor(t=new bc([new dt(.5,.5),new dt(-.5,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new hn(r,3)),this.setAttribute("uv",new hn(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,y=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,A=e.UVGenerator!==void 0?e.UVGenerator:E2;let M,R=!1,F,D,S,T;g&&(M=g.getSpacedPoints(h),R=!0,f=!1,F=g.computeFrenetFrames(h,!1),D=new k,S=new k,T=new k),f||(m=0,p=0,y=0,_=0);const x=a.extractPoints(c);let E=x.shape;const b=x.holes;if(!No.isClockWise(E)){E=E.reverse();for(let U=0,pt=b.length;U<pt;U++){const lt=b[U];No.isClockWise(lt)&&(b[U]=lt.reverse())}}const C=No.triangulateShape(E,b),G=E;for(let U=0,pt=b.length;U<pt;U++){const lt=b[U];E=E.concat(lt)}function K(U,pt,lt){return pt||console.error("THREE.ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(pt,lt)}const W=E.length,tt=C.length;function Q(U,pt,lt){let yt,nt,kt;const Et=U.x-pt.x,Rt=U.y-pt.y,V=lt.x-U.x,P=lt.y-U.y,X=Et*Et+Rt*Rt,ot=Et*P-Rt*V;if(Math.abs(ot)>Number.EPSILON){const it=Math.sqrt(X),rt=Math.sqrt(V*V+P*P),Mt=pt.x-Rt/it,ht=pt.y+Et/it,Tt=lt.x-P/rt,Yt=lt.y+V/rt,ft=((Tt-Mt)*P-(Yt-ht)*V)/(Et*P-Rt*V);yt=Mt+Et*ft-U.x,nt=ht+Rt*ft-U.y;const At=yt*yt+nt*nt;if(At<=2)return new dt(yt,nt);kt=Math.sqrt(At/2)}else{let it=!1;Et>Number.EPSILON?V>Number.EPSILON&&(it=!0):Et<-Number.EPSILON?V<-Number.EPSILON&&(it=!0):Math.sign(Rt)===Math.sign(P)&&(it=!0),it?(yt=-Rt,nt=Et,kt=Math.sqrt(X)):(yt=Et,nt=Rt,kt=Math.sqrt(X/2))}return new dt(yt/kt,nt/kt)}const gt=[];for(let U=0,pt=G.length,lt=pt-1,yt=U+1;U<pt;U++,lt++,yt++)lt===pt&&(lt=0),yt===pt&&(yt=0),gt[U]=Q(G[U],G[lt],G[yt]);const St=[];let xt,Ut=gt.concat();for(let U=0,pt=b.length;U<pt;U++){const lt=b[U];xt=[];for(let yt=0,nt=lt.length,kt=nt-1,Et=yt+1;yt<nt;yt++,kt++,Et++)kt===nt&&(kt=0),Et===nt&&(Et=0),xt[yt]=Q(lt[yt],lt[kt],lt[Et]);St.push(xt),Ut=Ut.concat(xt)}for(let U=0;U<m;U++){const pt=U/m,lt=p*Math.cos(pt*Math.PI/2),yt=y*Math.sin(pt*Math.PI/2)+_;for(let nt=0,kt=G.length;nt<kt;nt++){const Et=K(G[nt],gt[nt],yt);_t(Et.x,Et.y,-lt)}for(let nt=0,kt=b.length;nt<kt;nt++){const Et=b[nt];xt=St[nt];for(let Rt=0,V=Et.length;Rt<V;Rt++){const P=K(Et[Rt],xt[Rt],yt);_t(P.x,P.y,-lt)}}}const Bt=y+_;for(let U=0;U<W;U++){const pt=f?K(E[U],Ut[U],Bt):E[U];R?(S.copy(F.normals[0]).multiplyScalar(pt.x),D.copy(F.binormals[0]).multiplyScalar(pt.y),T.copy(M[0]).add(S).add(D),_t(T.x,T.y,T.z)):_t(pt.x,pt.y,0)}for(let U=1;U<=h;U++)for(let pt=0;pt<W;pt++){const lt=f?K(E[pt],Ut[pt],Bt):E[pt];R?(S.copy(F.normals[U]).multiplyScalar(lt.x),D.copy(F.binormals[U]).multiplyScalar(lt.y),T.copy(M[U]).add(S).add(D),_t(T.x,T.y,T.z)):_t(lt.x,lt.y,d/h*U)}for(let U=m-1;U>=0;U--){const pt=U/m,lt=p*Math.cos(pt*Math.PI/2),yt=y*Math.sin(pt*Math.PI/2)+_;for(let nt=0,kt=G.length;nt<kt;nt++){const Et=K(G[nt],gt[nt],yt);_t(Et.x,Et.y,d+lt)}for(let nt=0,kt=b.length;nt<kt;nt++){const Et=b[nt];xt=St[nt];for(let Rt=0,V=Et.length;Rt<V;Rt++){const P=K(Et[Rt],xt[Rt],yt);R?_t(P.x,P.y+M[h-1].y,M[h-1].x+lt):_t(P.x,P.y,d+lt)}}}et(),at();function et(){const U=r.length/3;if(f){let pt=0,lt=W*pt;for(let yt=0;yt<tt;yt++){const nt=C[yt];Wt(nt[2]+lt,nt[1]+lt,nt[0]+lt)}pt=h+m*2,lt=W*pt;for(let yt=0;yt<tt;yt++){const nt=C[yt];Wt(nt[0]+lt,nt[1]+lt,nt[2]+lt)}}else{for(let pt=0;pt<tt;pt++){const lt=C[pt];Wt(lt[2],lt[1],lt[0])}for(let pt=0;pt<tt;pt++){const lt=C[pt];Wt(lt[0]+W*h,lt[1]+W*h,lt[2]+W*h)}}n.addGroup(U,r.length/3-U,0)}function at(){const U=r.length/3;let pt=0;Ct(G,pt),pt+=G.length;for(let lt=0,yt=b.length;lt<yt;lt++){const nt=b[lt];Ct(nt,pt),pt+=nt.length}n.addGroup(U,r.length/3-U,1)}function Ct(U,pt){let lt=U.length;for(;--lt>=0;){const yt=lt;let nt=lt-1;nt<0&&(nt=U.length-1);for(let kt=0,Et=h+m*2;kt<Et;kt++){const Rt=W*kt,V=W*(kt+1),P=pt+yt+Rt,X=pt+nt+Rt,ot=pt+nt+V,it=pt+yt+V;Jt(P,X,ot,it)}}}function _t(U,pt,lt){l.push(U),l.push(pt),l.push(lt)}function Wt(U,pt,lt){zt(U),zt(pt),zt(lt);const yt=r.length/3,nt=A.generateTopUV(n,r,yt-3,yt-2,yt-1);ne(nt[0]),ne(nt[1]),ne(nt[2])}function Jt(U,pt,lt,yt){zt(U),zt(pt),zt(yt),zt(pt),zt(lt),zt(yt);const nt=r.length/3,kt=A.generateSideWallUV(n,r,nt-6,nt-3,nt-2,nt-1);ne(kt[0]),ne(kt[1]),ne(kt[3]),ne(kt[1]),ne(kt[2]),ne(kt[3])}function zt(U){r.push(l[U*3+0]),r.push(l[U*3+1]),r.push(l[U*3+2])}function ne(U){s.push(U.x),s.push(U.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return S2(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new Fd[r.type]().fromJSON(r)),new cp(n,t.options)}}const E2={generateTopUV:function(i,t,e,n,r){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[r*3],h=t[r*3+1];return[new dt(s,o),new dt(a,l),new dt(c,h)]},generateSideWallUV:function(i,t,e,n,r,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],f=t[r*3],p=t[r*3+1],y=t[r*3+2],_=t[s*3],m=t[s*3+1],g=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new dt(o,1-l),new dt(c,1-d),new dt(f,1-y),new dt(_,1-g)]:[new dt(a,1-l),new dt(h,1-d),new dt(p,1-y),new dt(m,1-g)]}};function S2(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class bi extends la{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kf,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class T2 extends bi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class w2 extends la{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new se(16777215),this.specular=new se(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kf,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Gf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Zc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class M2{constructor(t,e,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){const p=c[d],y=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return y}return null}}}const A2=new M2;class Ml{constructor(t){this.manager=t!==void 0?t:A2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Ml.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zi={};class b2 extends Error{constructor(t,e){super(t),this.response=e}}class R2 extends Ml{constructor(t){super(t)}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Zc.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Zi[t]!==void 0){Zi[t].push({onLoad:e,onProgress:n,onError:r});return}Zi[t]=[],Zi[t].push({onLoad:e,onProgress:n,onError:r});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Zi[t],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,y=p!==0;let _=0;const m=new ReadableStream({start(g){A();function A(){d.read().then(({done:M,value:R})=>{if(M)g.close();else{_+=R.byteLength;const F=new ProgressEvent("progress",{lengthComputable:y,loaded:_,total:p});for(let D=0,S=h.length;D<S;D++){const T=h[D];T.onProgress&&T.onProgress(F)}g.enqueue(R),A()}},M=>{g.error(M)})}}});return new Response(m)}else throw new b2(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(y=>p.decode(y))}}}).then(c=>{Zc.add(t,c);const h=Zi[t];delete Zi[t];for(let d=0,f=h.length;d<f;d++){const p=h[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=Zi[t];if(h===void 0)throw this.manager.itemError(t),c;delete Zi[t];for(let d=0,f=h.length;d<f;d++){const p=h[d];p.onError&&p.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class C2 extends Ml{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Zc.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=rl("img");function l(){h(),Zc.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(d){h(),r&&r(d),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class I2 extends Ml{constructor(t){super(t)}load(t,e,n,r){const s=new Fn,o=new C2(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}}class Cy extends Rn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new se(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const wh=new ke,u_=new k,h_=new k;class P2{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new np,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;u_.setFromMatrixPosition(t.matrixWorld),e.position.copy(u_),h_.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(h_),e.updateMatrixWorld(),wh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class D2 extends P2{constructor(){super(new gy(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class up extends Cy{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.shadow=new D2}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class L2 extends Cy{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class N2{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=d_(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=d_();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function d_(){return(typeof performance>"u"?Date:performance).now()}const f_=new ke;class O2{constructor(t,e,n=0,r=1/0){this.ray=new tp(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new ep,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return f_.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(f_),this}intersectObject(t,e=!0,n=[]){return Bd(t,this,n,e),n.sort(p_),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)Bd(t[r],this,n,e);return n.sort(p_),n}}function p_(i,t){return i.distance-t.distance}function Bd(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)Bd(s[o],t,e,!0)}}class m_{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(tn(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class U2{constructor(){this.type="ShapePath",this.color=new se,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Jc,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,r){return this.currentPath.quadraticCurveTo(t,e,n,r),this}bezierCurveTo(t,e,n,r,s,o){return this.currentPath.bezierCurveTo(t,e,n,r,s,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(g){const A=[];for(let M=0,R=g.length;M<R;M++){const F=g[M],D=new bc;D.curves=F.curves,A.push(D)}return A}function n(g,A){const M=A.length;let R=!1;for(let F=M-1,D=0;D<M;F=D++){let S=A[F],T=A[D],x=T.x-S.x,E=T.y-S.y;if(Math.abs(E)>Number.EPSILON){if(E<0&&(S=A[D],x=-x,T=A[F],E=-E),g.y<S.y||g.y>T.y)continue;if(g.y===S.y){if(g.x===S.x)return!0}else{const b=E*(g.x-S.x)-x*(g.y-S.y);if(b===0)return!0;if(b<0)continue;R=!R}}else{if(g.y!==S.y)continue;if(T.x<=g.x&&g.x<=S.x||S.x<=g.x&&g.x<=T.x)return!0}}return R}const r=No.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new bc,l.curves=a.curves,c.push(l),c;let h=!r(s[0].getPoints());h=t?!h:h;const d=[],f=[];let p=[],y=0,_;f[y]=void 0,p[y]=[];for(let g=0,A=s.length;g<A;g++)a=s[g],_=a.getPoints(),o=r(_),o=t?!o:o,o?(!h&&f[y]&&y++,f[y]={s:new bc,p:_},f[y].s.curves=a.curves,h&&y++,p[y]=[]):p[y].push({h:a,p:_[0]});if(!f[0])return e(s);if(f.length>1){let g=!1,A=0;for(let M=0,R=f.length;M<R;M++)d[M]=[];for(let M=0,R=f.length;M<R;M++){const F=p[M];for(let D=0;D<F.length;D++){const S=F[D];let T=!0;for(let x=0;x<f.length;x++)n(S.p,f[x].p)&&(M!==x&&A++,T?(T=!1,d[x].push(S)):g=!0);T&&d[M].push(S)}}A>0&&g===!1&&(p=d)}let m;for(let g=0,A=f.length;g<A;g++){l=f[g].s,c.push(l),m=p[g];for(let M=0,R=m.length;M<R;M++)l.holes.push(m[M].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hf);class F2 extends Ml{constructor(t){super(t)}load(t,e,n,r){const s=this,o=new R2(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){const l=s.parse(JSON.parse(a));e&&e(l)},n,r)}parse(t){return new V2(t)}}class V2{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],r=k2(t,e,this.data);for(let s=0,o=r.length;s<o;s++)n.push(...r[s].toShapes());return n}}function k2(i,t,e){const n=Array.from(i),r=t/e.resolution,s=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*r,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const h=n[c];if(h===`
`)a=0,l-=s;else{const d=B2(h,r,a,l,e);a+=d.offsetX,o.push(d.path)}}return o}function B2(i,t,e,n,r){const s=r.glyphs[i]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+i+'" does not exists in font family '+r.familyName+".");return}const o=new U2;let a,l,c,h,d,f,p,y;if(s.o){const _=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,g=_.length;m<g;)switch(_[m++]){case"m":a=_[m++]*t+e,l=_[m++]*t+n,o.moveTo(a,l);break;case"l":a=_[m++]*t+e,l=_[m++]*t+n,o.lineTo(a,l);break;case"q":c=_[m++]*t+e,h=_[m++]*t+n,d=_[m++]*t+e,f=_[m++]*t+n,o.quadraticCurveTo(d,f,c,h);break;case"b":c=_[m++]*t+e,h=_[m++]*t+n,d=_[m++]*t+e,f=_[m++]*t+n,p=_[m++]*t+e,y=_[m++]*t+n,o.bezierCurveTo(d,f,p,y,c,h);break}}return{offsetX:s.ha*t,path:o}}class Da extends cp{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const r=n.generateShapes(t,e.size);e.depth===void 0&&e.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),e.depth=e.depth!==void 0?e.depth:e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(r,e)}this.type="TextGeometry"}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.19.2
 * @author George Michael Brower
 * @license MIT
 */class ki{constructor(t,e,n,r,s="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(s),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),ki.nextNameID=ki.nextNameID||0,this.$name.id=`lil-gui-name-${++ki.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class z2 extends ki{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function zd(i){let t,e;return(t=i.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const H2={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:zd,toHexString:zd},ll={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},G2={isPrimitive:!1,match:i=>Array.isArray(i),fromHexString(i,t,e=1){const n=ll.fromHexString(i);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([i,t,e],n=1){n=255/n;const r=i*n<<16^t*n<<8^e*n<<0;return ll.toHexString(r)}},W2={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,t,e=1){const n=ll.fromHexString(i);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:i,g:t,b:e},n=1){n=255/n;const r=i*n<<16^t*n<<8^e*n<<0;return ll.toHexString(r)}},q2=[H2,ll,G2,W2];function $2(i){return q2.find(t=>t.match(i))}class X2 extends ki{constructor(t,e,n,r){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=$2(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=zd(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Mh extends ki{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class j2 extends ki{constructor(t,e,n,r,s,o){super(t,e,n,"number"),this._initInput(),this.min(r),this.max(s);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let A=parseFloat(this.$input.value);isNaN(A)||(this._stepExplicit&&(A=this._snap(A)),this.setValue(this._clamp(A)))},n=A=>{const M=parseFloat(this.$input.value);isNaN(M)||(this._snapClampSetValue(M+A),this.$input.value=this.getValue())},r=A=>{A.key==="Enter"&&this.$input.blur(),A.code==="ArrowUp"&&(A.preventDefault(),n(this._step*this._arrowKeyMultiplier(A))),A.code==="ArrowDown"&&(A.preventDefault(),n(this._step*this._arrowKeyMultiplier(A)*-1))},s=A=>{this._inputFocused&&(A.preventDefault(),n(this._step*this._normalizeMouseWheel(A)))};let o=!1,a,l,c,h,d;const f=5,p=A=>{a=A.clientX,l=c=A.clientY,o=!0,h=this.getValue(),d=0,window.addEventListener("mousemove",y),window.addEventListener("mouseup",_)},y=A=>{if(o){const M=A.clientX-a,R=A.clientY-l;Math.abs(R)>f?(A.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(M)>f&&_()}if(!o){const M=A.clientY-c;d-=M*this._step*this._arrowKeyMultiplier(A),h+d>this._max?d=this._max-h:h+d<this._min&&(d=this._min-h),this._snapClampSetValue(h+d)}c=A.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",y),window.removeEventListener("mouseup",_)},m=()=>{this._inputFocused=!0},g=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",r),this.$input.addEventListener("wheel",s,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",g)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(g,A,M,R,F)=>(g-A)/(M-A)*(F-R)+R,e=g=>{const A=this.$slider.getBoundingClientRect();let M=t(g,A.left,A.right,this._min,this._max);this._snapClampSetValue(M)},n=g=>{this._setDraggingStyle(!0),e(g.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",s)},r=g=>{e(g.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",s)};let o=!1,a,l;const c=g=>{g.preventDefault(),this._setDraggingStyle(!0),e(g.touches[0].clientX),o=!1},h=g=>{g.touches.length>1||(this._hasScrollBar?(a=g.touches[0].clientX,l=g.touches[0].clientY,o=!0):c(g),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",f))},d=g=>{if(o){const A=g.touches[0].clientX-a,M=g.touches[0].clientY-l;Math.abs(A)>Math.abs(M)?c(g):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",f))}else g.preventDefault(),e(g.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",f)},p=this._callOnFinishChange.bind(this),y=400;let _;const m=g=>{if(Math.abs(g.deltaX)<Math.abs(g.deltaY)&&this._hasScrollBar)return;g.preventDefault();const M=this._normalizeMouseWheel(g)*this._step;this._snapClampSetValue(this.getValue()+M),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(p,y)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Y2 extends ki{constructor(t,e,n,r){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(r)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class K2 extends ki{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const Q2=`.lil-gui {
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
}`;function J2(i){const t=document.createElement("style");t.innerHTML=i;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let g_=!1;class hp{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:r,title:s="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",c=>{(c.code==="Enter"||c.code==="Space")&&(c.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),l&&this.domElement.classList.add("allow-touch-styles"),!g_&&a&&(J2(Q2),g_=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this._closeFolders=o}add(t,e,n,r,s){if(Object(n)===n)return new Y2(this,t,e,n);const o=t[e];switch(typeof o){case"number":return new j2(this,t,e,n,r,s);case"boolean":return new z2(this,t,e);case"string":return new K2(this,t,e);case"function":return new Mh(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,n=1){return new X2(this,t,e,n)}addFolder(t){const e=new hp({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof Mh||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Mh)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const r=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}function er(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function Iy(i,t){i.prototype=Object.create(t.prototype),i.prototype.constructor=i,i.__proto__=t}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ei={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ko={duration:.5,overwrite:!1,delay:0},dp,Cn,Le,li=1e8,we=1/li,Hd=Math.PI*2,Z2=Hd/4,tL=0,Py=Math.sqrt,eL=Math.cos,nL=Math.sin,dn=function(t){return typeof t=="string"},He=function(t){return typeof t=="function"},pr=function(t){return typeof t=="number"},fp=function(t){return typeof t>"u"},Gi=function(t){return typeof t=="object"},zn=function(t){return t!==!1},pp=function(){return typeof window<"u"},pc=function(t){return He(t)||dn(t)},Dy=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},In=Array.isArray,Gd=/(?:-?\.?\d|\.)+/gi,Ly=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ao=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ah=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Ny=/[+-]=-?[.\d]+/,Oy=/[^,'"\[\]\s]+/gi,iL=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ue,Ri,Wd,mp,ni={},tu={},Uy,Fy=function(t){return(tu=ks(t,ni))&&qn},gp=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},cl=function(t,e){return!e&&console.warn(t)},Vy=function(t,e){return t&&(ni[t]=e)&&tu&&(tu[t]=e)||ni},ul=function(){return 0},rL={suppressEvents:!0,isStart:!0,kill:!1},Rc={suppressEvents:!0,kill:!1},sL={suppressEvents:!0},_p={},Vr=[],qd={},ky,Qn={},bh={},__=30,Cc=[],vp="",yp=function(t){var e=t[0],n,r;if(Gi(e)||He(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(r=Cc.length;r--&&!Cc[r].targetTest(e););n=Cc[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new cx(t[r],n)))||t.splice(r,1);return t},Ms=function(t){return t._gsap||yp(ci(t))[0]._gsap},By=function(t,e,n){return(n=t[e])&&He(n)?t[e]():fp(n)&&t.getAttribute&&t.getAttribute(e)||n},Hn=function(t,e){return(t=t.split(",")).forEach(e)||t},$e=function(t){return Math.round(t*1e5)/1e5||0},un=function(t){return Math.round(t*1e7)/1e7||0},Oo=function(t,e){var n=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+r:n==="-"?t-r:n==="*"?t*r:t/r},oL=function(t,e){for(var n=e.length,r=0;t.indexOf(e[r])<0&&++r<n;);return r<n},eu=function(){var t=Vr.length,e=Vr.slice(0),n,r;for(qd={},Vr.length=0,n=0;n<t;n++)r=e[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},zy=function(t,e,n,r){Vr.length&&!Cn&&eu(),t.render(e,n,Cn&&e<0&&(t._initted||t._startAt)),Vr.length&&!Cn&&eu()},Hy=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Oy).length<2?e:dn(t)?t.trim():t},Gy=function(t){return t},hi=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},aL=function(t){return function(e,n){for(var r in n)r in e||r==="duration"&&t||r==="ease"||(e[r]=n[r])}},ks=function(t,e){for(var n in e)t[n]=e[n];return t},v_=function i(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Gi(e[n])?i(t[n]||(t[n]={}),e[n]):e[n]);return t},nu=function(t,e){var n={},r;for(r in t)r in e||(n[r]=t[r]);return n},qa=function(t){var e=t.parent||Ue,n=t.keyframes?aL(In(t.keyframes)):hi;if(zn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},lL=function(t,e){for(var n=t.length,r=n===e.length;r&&n--&&t[n]===e[n];);return n<0},Wy=function(t,e,n,r,s){var o=t[r],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[r]=e,e._prev=o,e.parent=e._dp=t,e},bu=function(t,e,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},Xr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},As=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},cL=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},$d=function(t,e,n,r){return t._startAt&&(Cn?t._startAt.revert(Rc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},uL=function i(t){return!t||t._ts&&i(t.parent)},y_=function(t){return t._repeat?Qo(t._tTime,t=t.duration()+t._rDelay)*t:0},Qo=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},iu=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Ru=function(t){return t._end=un(t._start+(t._tDur/Math.abs(t._ts||t._rts||we)||0))},Cu=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=un(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ru(t),n._dirty||As(n,t)),t},qy=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=iu(t.rawTime(),e),(!e._dur||Al(0,e.totalDuration(),n)-e._tTime>we)&&e.render(n,!0)),As(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-we}},Li=function(t,e,n,r){return e.parent&&Xr(e),e._start=un((pr(n)?n:n||t!==Ue?ri(t,n,e):t._time)+e._delay),e._end=un(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Wy(t,e,"_first","_last",t._sort?"_start":0),Xd(e)||(t._recent=e),r||qy(t,e),t._ts<0&&Cu(t,t._tTime),t},$y=function(t,e){return(ni.ScrollTrigger||gp("scrollTrigger",e))&&ni.ScrollTrigger.create(e,t)},Xy=function(t,e,n,r,s){if(Ep(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Cn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&ky!==Jn.frame)return Vr.push(t),t._lazy=[s,r],1},hL=function i(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||i(e))},Xd=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},dL=function(t,e,n,r){var s=t.ratio,o=e<0||!e&&(!t._start&&hL(t)&&!(!t._initted&&Xd(t))||(t._ts<0||t._dp._ts<0)&&!Xd(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=Al(0,t._tDur,e),h=Qo(l,a),t._yoyo&&h&1&&(o=1-o),h!==Qo(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Cn||r||t._zTime===we||!e&&t._zTime){if(!t._initted&&Xy(t,e,r,n,l))return;for(d=t._zTime,t._zTime=e||(n?we:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&$d(t,e,n,!0),t._onUpdate&&!n&&Zn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Zn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Xr(t,1),!n&&!Cn&&(Zn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},fL=function(t,e,n){var r;if(n>e)for(r=t._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},Jo=function(t,e,n,r){var s=t._repeat,o=un(e)||0,a=t._tTime/t._tDur;return a&&!r&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:un(o*(s+1)+t._rDelay*s):o,a>0&&!r&&Cu(t,t._tTime=t._tDur*a),t.parent&&Ru(t),n||As(t.parent,t),t},x_=function(t){return t instanceof Un?As(t):Jo(t,t._dur)},pL={_start:0,endTime:ul,totalDuration:ul},ri=function i(t,e,n){var r=t.labels,s=t._recent||pL,o=t.duration()>=li?s.endTime(!1):t._dur,a,l,c;return dn(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in r||(r[e]=o),r[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(In(n)?n[0]:n).totalDuration()),a>1?i(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},$a=function(t,e,n){var r=pr(e[1]),s=(r?2:1)+(t<2?0:1),o=e[s],a,l;if(r&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=zn(l.vars.inherit)&&l.parent;o.immediateRender=zn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Je(e[0],o,e[s+1])},Qr=function(t,e){return t||t===0?e(t):e},Al=function(t,e,n){return n<t?t:n>e?e:n},bn=function(t,e){return!dn(t)||!(e=iL.exec(t))?"":e[1]},mL=function(t,e,n){return Qr(n,function(r){return Al(t,e,r)})},jd=[].slice,jy=function(t,e){return t&&Gi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Gi(t[0]))&&!t.nodeType&&t!==Ri},gL=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(r){var s;return dn(r)&&!e||jy(r,1)?(s=n).push.apply(s,ci(r)):n.push(r)})||n},ci=function(t,e,n){return Le&&!e&&Le.selector?Le.selector(t):dn(t)&&!n&&(Wd||!Zo())?jd.call((e||mp).querySelectorAll(t),0):In(t)?gL(t,n):jy(t)?jd.call(t,0):t?[t]:[]},Yd=function(t){return t=ci(t)[0]||cl("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return ci(e,n.querySelectorAll?n:n===t?cl("Invalid scope")||mp.createElement("div"):t)}},Yy=function(t){return t.sort(function(){return .5-Math.random()})},Ky=function(t){if(He(t))return t;var e=Gi(t)?t:{each:t},n=bs(e.ease),r=e.from||0,s=parseFloat(e.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=e.axis,h=r,d=r;return dn(r)?h=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(h=r[0],d=r[1]),function(f,p,y){var _=(y||e).length,m=o[_],g,A,M,R,F,D,S,T,x;if(!m){if(x=e.grid==="auto"?0:(e.grid||[1,li])[1],!x){for(S=-li;S<(S=y[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(m=o[_]=[],g=l?Math.min(x,_)*h-.5:r%x,A=x===li?0:l?_*d/x-.5:r/x|0,S=0,T=li,D=0;D<_;D++)M=D%x-g,R=A-(D/x|0),m[D]=F=c?Math.abs(c==="y"?R:M):Py(M*M+R*R),F>S&&(S=F),F<T&&(T=F);r==="random"&&Yy(m),m.max=S-T,m.min=T,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=bn(e.amount||e.each)||0,n=n&&_<0?ox(n):n}return _=(m[f]-m.min)/m.max||0,un(m.b+(n?n(_):_)*m.v)+m.u}},Kd=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var r=un(Math.round(parseFloat(n)/t)*t*e);return(r-r%1)/e+(pr(n)?0:bn(n))}},Qy=function(t,e){var n=In(t),r,s;return!n&&Gi(t)&&(r=n=t.radius||li,t.values?(t=ci(t.values),(s=!pr(t[0]))&&(r*=r)):t=Kd(t.increment)),Qr(e,n?He(t)?function(o){return s=t(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=li,h=0,d=t.length,f,p;d--;)s?(f=t[d].x-a,p=t[d].y-l,f=f*f+p*p):f=Math.abs(t[d]-a),f<c&&(c=f,h=d);return h=!r||c<=r?t[h]:o,s||h===o||pr(o)?h:h+bn(o)}:Kd(t))},Jy=function(t,e,n,r){return Qr(In(t)?!e:n===!0?!!(n=0):!r,function(){return In(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*r)/r})},_L=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return e.reduce(function(s,o){return o(s)},r)}},vL=function(t,e){return function(n){return t(parseFloat(n))+(e||bn(n))}},yL=function(t,e,n){return tx(t,e,0,1,n)},Zy=function(t,e,n){return Qr(n,function(r){return t[~~e(r)]})},xL=function i(t,e,n){var r=e-t;return In(t)?Zy(t,i(0,t.length),e):Qr(n,function(s){return(r+(s-t)%r)%r+t})},EL=function i(t,e,n){var r=e-t,s=r*2;return In(t)?Zy(t,i(0,t.length-1),e):Qr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>r?s-o:o)})},hl=function(t){for(var e=0,n="",r,s,o,a;~(r=t.indexOf("random(",e));)o=t.indexOf(")",r),a=t.charAt(r+7)==="[",s=t.substr(r+7,o-r-7).match(a?Oy:Gd),n+=t.substr(e,r-e)+Jy(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},tx=function(t,e,n,r,s){var o=e-t,a=r-n;return Qr(s,function(l){return n+((l-t)/o*a||0)})},SL=function i(t,e,n,r){var s=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!s){var o=dn(t),a={},l,c,h,d,f;if(n===!0&&(r=1)&&(n=null),o)t={p:t},e={p:e};else if(In(t)&&!In(e)){for(h=[],d=t.length,f=d-2,c=1;c<d;c++)h.push(i(t[c-1],t[c]));d--,s=function(y){y*=d;var _=Math.min(f,~~y);return h[_](y-_)},n=e}else r||(t=ks(In(t)?[]:{},t));if(!h){for(l in e)xp.call(a,t,l,"get",e[l]);s=function(y){return wp(y,a)||(o?t.p:t)}}}return Qr(n,s)},E_=function(t,e,n){var r=t.labels,s=li,o,a,l;for(o in r)a=r[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Zn=function(t,e,n){var r=t.vars,s=r[e],o=Le,a=t._ctx,l,c,h;if(s)return l=r[e+"Params"],c=r.callbackScope||t,n&&Vr.length&&eu(),a&&(Le=a),h=l?s.apply(c,l):s.call(c),Le=o,h},La=function(t){return Xr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Cn),t.progress()<1&&Zn(t,"onInterrupt"),t},bo,ex=[],nx=function(t){if(t)if(t=!t.name&&t.default||t,pp()||t.headless){var e=t.name,n=He(t),r=e&&!n&&t.init?function(){this._props=[]}:t,s={init:ul,render:wp,add:xp,kill:VL,modifier:FL,rawVars:0},o={targetTest:0,get:0,getSetter:Tp,aliases:{},register:0};if(Zo(),t!==r){if(Qn[e])return;hi(r,hi(nu(t,s),o)),ks(r.prototype,ks(s,nu(t,o))),Qn[r.prop=e]=r,t.targetTest&&(Cc.push(r),_p[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Vy(e,r),t.register&&t.register(qn,r,Gn)}else ex.push(t)},xe=255,Na={aqua:[0,xe,xe],lime:[0,xe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,xe],navy:[0,0,128],white:[xe,xe,xe],olive:[128,128,0],yellow:[xe,xe,0],orange:[xe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[xe,0,0],pink:[xe,192,203],cyan:[0,xe,xe],transparent:[xe,xe,xe,0]},Rh=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*xe+.5|0},ix=function(t,e,n){var r=t?pr(t)?[t>>16,t>>8&xe,t&xe]:0:Na.black,s,o,a,l,c,h,d,f,p,y;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Na[t])r=Na[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&xe,r&xe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&xe,t&xe]}else if(t.substr(0,3)==="hsl"){if(r=y=t.match(Gd),!e)l=+r[0]%360/360,c=+r[1]/100,h=+r[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,r.length>3&&(r[3]*=1),r[0]=Rh(l+1/3,s,o),r[1]=Rh(l,s,o),r[2]=Rh(l-1/3,s,o);else if(~t.indexOf("="))return r=t.match(Ly),n&&r.length<4&&(r[3]=1),r}else r=t.match(Gd)||Na.transparent;r=r.map(Number)}return e&&!y&&(s=r[0]/xe,o=r[1]/xe,a=r[2]/xe,d=Math.max(s,o,a),f=Math.min(s,o,a),h=(d+f)/2,d===f?l=c=0:(p=d-f,c=h>.5?p/(2-d-f):p/(d+f),l=d===s?(o-a)/p+(o<a?6:0):d===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(h*100+.5)),n&&r.length<4&&(r[3]=1),r},rx=function(t){var e=[],n=[],r=-1;return t.split(kr).forEach(function(s){var o=s.match(Ao)||[];e.push.apply(e,o),n.push(r+=o.length+1)}),e.c=n,e},S_=function(t,e,n){var r="",s=(t+r).match(kr),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!s)return t;if(s=s.map(function(f){return(f=ix(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=rx(t),l=n.c,l.join(r)!==h.c.join(r)))for(c=t.replace(kr,"1").split(Ao),d=c.length-1;a<d;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(kr),d=c.length-1;a<d;a++)r+=c[a]+s[a];return r+c[d]},kr=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Na)i+="|"+t+"\\b";return new RegExp(i+")","gi")}(),TL=/hsl[a]?\(/,sx=function(t){var e=t.join(" "),n;if(kr.lastIndex=0,kr.test(e))return n=TL.test(e),t[1]=S_(t[1],n),t[0]=S_(t[0],n,rx(t[1])),!0},dl,Jn=function(){var i=Date.now,t=500,e=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,h,d,f,p,y=function _(m){var g=i()-r,A=m===!0,M,R,F,D;if((g>t||g<0)&&(n+=g-e),r+=g,F=r-n,M=F-o,(M>0||A)&&(D=++d.frame,f=F-d.time*1e3,d.time=F=F/1e3,o+=M+(M>=s?4:s-M),R=1),A||(l=c(_)),R)for(p=0;p<a.length;p++)a[p](F,f,D,m)};return d={time:0,frame:0,tick:function(){y(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Uy&&(!Wd&&pp()&&(Ri=Wd=window,mp=Ri.document||{},ni.gsap=qn,(Ri.gsapVersions||(Ri.gsapVersions=[])).push(qn.version),Fy(tu||Ri.GreenSockGlobals||!Ri.gsap&&Ri||{}),ex.forEach(nx)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(m){return setTimeout(m,o-d.time*1e3+1|0)},dl=1,y(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),dl=0,c=ul},lagSmoothing:function(m,g){t=m||1/0,e=Math.min(g||33,t)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,g,A){var M=g?function(R,F,D,S){m(R,F,D,S),d.remove(M)}:m;return d.remove(m),a[A?"unshift":"push"](M),Zo(),M},remove:function(m,g){~(g=a.indexOf(m))&&a.splice(g,1)&&p>=g&&p--},_listeners:a},d}(),Zo=function(){return!dl&&Jn.wake()},ce={},wL=/^[\d.\-M][\d.\-,\s]/,ML=/["']/g,AL=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[r]=isNaN(c)?c.replace(ML,"").trim():+c,r=l.substr(a+1).trim();return e},bL=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<n?t.indexOf(")",n+1):n)},RL=function(t){var e=(t+"").split("("),n=ce[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[AL(e[1])]:bL(t).split(",").map(Hy)):ce._CE&&wL.test(t)?ce._CE("",t):n},ox=function(t){return function(e){return 1-t(1-e)}},ax=function i(t,e){for(var n=t._first,r;n;)n instanceof Un?i(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?i(n.timeline,e):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=e)),n=n._next},bs=function(t,e){return t&&(He(t)?t:ce[t]||RL(t))||e},qs=function(t,e,n,r){n===void 0&&(n=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:r},o;return Hn(t,function(a){ce[a]=ni[a]=s,ce[o=a.toLowerCase()]=n;for(var l in s)ce[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ce[a+"."+l]=s[l]}),s},lx=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ch=function i(t,e,n){var r=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Hd*(Math.asin(1/r)||0),a=function(h){return h===1?1:r*Math.pow(2,-10*h)*nL((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:lx(a);return s=Hd/s,l.config=function(c,h){return i(t,c,h)},l},Ih=function i(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},r=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:lx(n);return r.config=function(s){return i(t,s)},r};Hn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,t){var e=t<5?t+1:t;qs(i+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ce.Linear.easeNone=ce.none=ce.Linear.easeIn;qs("Elastic",Ch("in"),Ch("out"),Ch());(function(i,t){var e=1/t,n=2*e,r=2.5*e,s=function(a){return a<e?i*a*a:a<n?i*Math.pow(a-1.5/t,2)+.75:a<r?i*(a-=2.25/t)*a+.9375:i*Math.pow(a-2.625/t,2)+.984375};qs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);qs("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});qs("Circ",function(i){return-(Py(1-i*i)-1)});qs("Sine",function(i){return i===1?1:-eL(i*Z2)+1});qs("Back",Ih("in"),Ih("out"),Ih());ce.SteppedEase=ce.steps=ni.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,r=t+(e?0:1),s=e?1:0,o=1-we;return function(a){return((r*Al(0,o,a)|0)+s)*n}}};Ko.ease=ce["quad.out"];Hn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return vp+=i+","+i+"Params,"});var cx=function(t,e){this.id=tL++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:By,this.set=e?e.getSetter:Tp},fl=function(){function i(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Jo(this,+e.duration,1,1),this.data=e.data,Le&&(this._ctx=Le,Le.data.push(this)),dl||Jn.wake()}var t=i.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Jo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,r){if(Zo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Cu(this,n),!s._dp||s.parent||qy(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Li(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===we||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),zy(this,n,r)),this},t.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+y_(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},t.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+y_(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Qo(this._tTime,s)+1:1},t.timeScale=function(n,r){if(!arguments.length)return this._rts===-we?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?iu(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-we?0:this._rts,this.totalTime(Al(-Math.abs(this._delay),this._tDur,s),r!==!1),Ru(this),cL(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Zo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==we&&(this._tTime-=we)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Li(r,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(zn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?iu(r.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=sL);var r=Cn;return Cn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Cn=r,this},t.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,x_(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,x_(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,r){return this.totalTime(ri(this,n),zn(r))},t.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,zn(r))},t.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},t.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-we:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-we,this},t.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-we)},t.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},t.then=function(n){var r=this;return new Promise(function(s){var o=He(n)?n:Gy,a=function(){var c=r.then;r.then=null,He(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},t.kill=function(){La(this)},i}();hi(fl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-we,_prom:0,_ps:!1,_rts:1});var Un=function(i){Iy(t,i);function t(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=zn(n.sortChildren),Ue&&Li(n.parent||Ue,er(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&$y(er(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,o){return $a(0,arguments,this),this},e.from=function(r,s,o){return $a(1,arguments,this),this},e.fromTo=function(r,s,o,a){return $a(2,arguments,this),this},e.set=function(r,s,o){return s.duration=0,s.parent=this,qa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Je(r,s,ri(this,o),1),this},e.call=function(r,s,o){return Li(this,Je.delayedCall(0,r,s),o)},e.staggerTo=function(r,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Je(r,o,ri(this,l)),this},e.staggerFrom=function(r,s,o,a,l,c,h){return o.runBackwards=1,qa(o).immediateRender=zn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,h)},e.staggerFromTo=function(r,s,o,a,l,c,h,d){return a.startAt=o,qa(a).immediateRender=zn(a.immediateRender),this.staggerTo(r,s,a,l,c,h,d)},e.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=r<=0?0:un(r),d=this._zTime<0!=r<0&&(this._initted||!c),f,p,y,_,m,g,A,M,R,F,D,S;if(this!==Ue&&h>l&&r>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,r+=this._time-a),f=h,R=this._start,M=this._ts,g=!M,d&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(D=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(f=un(h%m),h===l?(_=this._repeat,f=c):(_=~~(h/m),_&&_===h/m&&(f=c,_--),f>c&&(f=c)),F=Qo(this._tTime,m),!a&&this._tTime&&F!==_&&this._tTime-F*m-this._dur<=0&&(F=_),D&&_&1&&(f=c-f,S=1),_!==F&&!this._lock){var T=D&&F&1,x=T===(D&&_&1);if(_<F&&(T=!T),a=T?0:h%c?c:h,this._lock=1,this.render(a||(S?0:un(_*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Zn(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,a=T?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;ax(this,S)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(A=fL(this,un(a),un(f)),A&&(h-=f-(f=A._start))),this._tTime=h,this._time=f,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&f&&!s&&!_&&(Zn(this,"onStart"),this._tTime!==h))return this;if(f>=a&&r>=0)for(p=this._first;p;){if(y=p._next,(p._act||f>=p._start)&&p._ts&&A!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,o),f!==this._time||!this._ts&&!g){A=0,y&&(h+=this._zTime=-we);break}}p=y}else{p=this._last;for(var E=r<0?r:f;p;){if(y=p._prev,(p._act||E<=p._end)&&p._ts&&A!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(E-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(E-p._start)*p._ts,s,o||Cn&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!g){A=0,y&&(h+=this._zTime=E?-we:we);break}}p=y}}if(A&&!s&&(this.pause(),A.render(f>=a?0:-we)._zTime=f>=a?1:-1,this._ts))return this._start=R,Ru(this),this.render(r,s,o);this._onUpdate&&!s&&Zn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(R===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Xr(this,1),!s&&!(r<0&&!a)&&(h||a||!l)&&(Zn(this,h===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var o=this;if(pr(s)||(s=ri(this,s,r)),!(r instanceof fl)){if(In(r))return r.forEach(function(a){return o.add(a,s)}),this;if(dn(r))return this.addLabel(r,s);if(He(r))r=Je.delayedCall(0,r);else return this}return this!==r?Li(this,r,s):this},e.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-li);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Je?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},e.remove=function(r){return dn(r)?this.removeLabel(r):He(r)?this.killTweensOf(r):(bu(this,r),r===this._recent&&(this._recent=this._last),As(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=un(Jn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=ri(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,o){var a=Je.delayedCall(0,s||ul,o);return a.data="isPause",this._hasPause=1,Li(this,a,ri(this,r))},e.removePause=function(r){var s=this._first;for(r=ri(this,r);s;)s._start===r&&s.data==="isPause"&&Xr(s),s=s._next},e.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Rr!==a[l]&&a[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var o=[],a=ci(r),l=this._first,c=pr(s),h;l;)l instanceof Je?oL(l._targets,a)&&(c?(!Rr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(r,s){s=s||{};var o=this,a=ri(o,r),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,f=l.immediateRender,p,y=Je.to(o,hi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||we,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());y._dur!==m&&Jo(y,m,0,1).render(y._time,!0,!0),p=1}h&&h.apply(y,d||[])}},s));return f?y.render(0):y},e.tweenFromTo=function(r,s,o){return this.tweenTo(s,hi({startAt:{time:ri(this,r)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),E_(this,ri(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),E_(this,ri(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+we)},e.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return As(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),As(this)},e.totalDuration=function(r){var s=0,o=this,a=o._last,l=li,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Li(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Jo(o,o===Ue&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(r){if(Ue._ts&&(zy(Ue,iu(r,Ue)),ky=Jn.frame),Jn.frame>=__){__+=ei.autoSleep||120;var s=Ue._first;if((!s||!s._ts)&&ei.autoSleep&&Jn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Jn.sleep()}}},t}(fl);hi(Un.prototype,{_lock:0,_hasPause:0,_forcing:0});var CL=function(t,e,n,r,s,o,a){var l=new Gn(this._pt,t,e,0,1,mx,null,s),c=0,h=0,d,f,p,y,_,m,g,A;for(l.b=n,l.e=r,n+="",r+="",(g=~r.indexOf("random("))&&(r=hl(r)),o&&(A=[n,r],o(A,t,e),n=A[0],r=A[1]),f=n.match(Ah)||[];d=Ah.exec(r);)y=d[0],_=r.substring(c,d.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),y!==f[h++]&&(m=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:y.charAt(1)==="="?Oo(m,y)-m:parseFloat(y)-m,m:p&&p<4?Math.round:0},c=Ah.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(Ny.test(r)||g)&&(l.e=0),this._pt=l,l},xp=function(t,e,n,r,s,o,a,l,c,h){He(r)&&(r=r(s||0,t,o));var d=t[e],f=n!=="get"?n:He(d)?c?t[e.indexOf("set")||!He(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,p=He(d)?c?NL:fx:Sp,y;if(dn(r)&&(~r.indexOf("random(")&&(r=hl(r)),r.charAt(1)==="="&&(y=Oo(f,r)+(bn(f)||0),(y||y===0)&&(r=y))),!h||f!==r||Qd)return!isNaN(f*r)&&r!==""?(y=new Gn(this._pt,t,e,+f||0,r-(f||0),typeof d=="boolean"?UL:px,0,p),c&&(y.fp=c),a&&y.modifier(a,this,t),this._pt=y):(!d&&!(e in t)&&gp(e,r),CL.call(this,t,e,f,r,p,l||ei.stringFilter,c))},IL=function(t,e,n,r,s){if(He(t)&&(t=Xa(t,s,e,n,r)),!Gi(t)||t.style&&t.nodeType||In(t)||Dy(t))return dn(t)?Xa(t,s,e,n,r):t;var o={},a;for(a in t)o[a]=Xa(t[a],s,e,n,r);return o},ux=function(t,e,n,r,s,o){var a,l,c,h;if(Qn[t]&&(a=new Qn[t]).init(s,a.rawVars?e[t]:IL(e[t],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new Gn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==bo))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Rr,Qd,Ep=function i(t,e,n){var r=t.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,h=r.runBackwards,d=r.yoyoEase,f=r.keyframes,p=r.autoRevert,y=t._dur,_=t._startAt,m=t._targets,g=t.parent,A=g&&g.data==="nested"?g.vars.targets:m,M=t._overwrite==="auto"&&!dp,R=t.timeline,F,D,S,T,x,E,b,L,C,G,K,W,tt;if(R&&(!f||!s)&&(s="none"),t._ease=bs(s,Ko.ease),t._yEase=d?ox(bs(d===!0?s:d,Ko.ease)):0,d&&t._yoyo&&!t._repeat&&(d=t._yEase,t._yEase=t._ease,t._ease=d),t._from=!R&&!!r.runBackwards,!R||f&&!r.stagger){if(L=m[0]?Ms(m[0]).harness:0,W=L&&r[L.prop],F=nu(r,_p),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!p?_.render(-1,!0):_.revert(h&&y?Rc:rL),_._lazy=0),o){if(Xr(t._startAt=Je.set(m,hi({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&zn(l),startAt:null,delay:0,onUpdate:c&&function(){return Zn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Cn||!a&&!p)&&t._startAt.revert(Rc),a&&y&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&y&&!_){if(e&&(a=!1),S=hi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&zn(l),immediateRender:a,stagger:0,parent:g},F),W&&(S[L.prop]=W),Xr(t._startAt=Je.set(m,S)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Cn?t._startAt.revert(Rc):t._startAt.render(-1,!0)),t._zTime=e,!a)i(t._startAt,we,we);else if(!e)return}for(t._pt=t._ptCache=0,l=y&&zn(l)||l&&!y,D=0;D<m.length;D++){if(x=m[D],b=x._gsap||yp(m)[D]._gsap,t._ptLookup[D]=G={},qd[b.id]&&Vr.length&&eu(),K=A===m?D:A.indexOf(x),L&&(C=new L).init(x,W||F,t,K,A)!==!1&&(t._pt=T=new Gn(t._pt,x,C.name,0,1,C.render,C,0,C.priority),C._props.forEach(function(Q){G[Q]=T}),C.priority&&(E=1)),!L||W)for(S in F)Qn[S]&&(C=ux(S,F,t,K,x,A))?C.priority&&(E=1):G[S]=T=xp.call(t,x,S,"get",F[S],K,A,0,r.stringFilter);t._op&&t._op[D]&&t.kill(x,t._op[D]),M&&t._pt&&(Rr=t,Ue.killTweensOf(x,G,t.globalTime(e)),tt=!t.parent,Rr=0),t._pt&&l&&(qd[b.id]=1)}E&&gx(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!tt,f&&e<=0&&R.render(li,!0,!0)},PL=function(t,e,n,r,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,f,p;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,p=t._targets.length;p--;){if(h=f[p][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Qd=1,t.vars[e]="+=0",Ep(t,a),Qd=0,l?cl(e+" not eligible for reset"):1;c.push(h)}for(p=c.length;p--;)d=c[p],h=d._pt||d,h.s=(r||r===0)&&!s?r:h.s+(r||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=$e(n)+bn(d.e)),d.b&&(d.b=h.s+bn(d.b))},DL=function(t,e){var n=t[0]?Ms(t[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return e;s=ks({},e);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},LL=function(t,e,n,r){var s=e.ease||r||"power1.inOut",o,a;if(In(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},Xa=function(t,e,n,r,s){return He(t)?t.call(e,n,r,s):dn(t)&&~t.indexOf("random(")?hl(t):t},hx=vp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",dx={};Hn(hx+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return dx[i]=1});var Je=function(i){Iy(t,i);function t(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:qa(r))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,f=l.stagger,p=l.overwrite,y=l.keyframes,_=l.defaults,m=l.scrollTrigger,g=l.yoyoEase,A=r.parent||Ue,M=(In(n)||Dy(n)?pr(n[0]):"length"in r)?[n]:ci(n),R,F,D,S,T,x,E,b;if(a._targets=M.length?yp(M):cl("GSAP target "+n+" not found. https://gsap.com",!ei.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,y||f||pc(c)||pc(h)){if(r=a.vars,R=a.timeline=new Un({data:"nested",defaults:_||{},targets:A&&A.data==="nested"?A.vars.targets:M}),R.kill(),R.parent=R._dp=er(a),R._start=0,f||pc(c)||pc(h)){if(S=M.length,E=f&&Ky(f),Gi(f))for(T in f)~hx.indexOf(T)&&(b||(b={}),b[T]=f[T]);for(F=0;F<S;F++)D=nu(r,dx),D.stagger=0,g&&(D.yoyoEase=g),b&&ks(D,b),x=M[F],D.duration=+Xa(c,er(a),F,x,M),D.delay=(+Xa(h,er(a),F,x,M)||0)-a._delay,!f&&S===1&&D.delay&&(a._delay=h=D.delay,a._start+=h,D.delay=0),R.to(x,D,E?E(F,x,M):0),R._ease=ce.none;R.duration()?c=h=0:a.timeline=0}else if(y){qa(hi(R.vars.defaults,{ease:"none"})),R._ease=bs(y.ease||r.ease||"none");var L=0,C,G,K;if(In(y))y.forEach(function(W){return R.to(M,W,">")}),R.duration();else{D={};for(T in y)T==="ease"||T==="easeEach"||LL(T,y[T],D,y.easeEach);for(T in D)for(C=D[T].sort(function(W,tt){return W.t-tt.t}),L=0,F=0;F<C.length;F++)G=C[F],K={ease:G.e,duration:(G.t-(F?C[F-1].t:0))/100*c},K[T]=G.v,R.to(M,K,L),L+=K.duration;R.duration()<c&&R.to({},{duration:c-R.duration()})}}c||a.duration(c=R.duration())}else a.timeline=0;return p===!0&&!dp&&(Rr=er(a),Ue.killTweensOf(M),Rr=0),Li(A,er(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!c&&!y&&a._start===un(A._time)&&zn(d)&&uL(er(a))&&A.data!=="nested")&&(a._tTime=-we,a.render(Math.max(0,-h)||0)),m&&$y(er(a),m),a}var e=t.prototype;return e.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,h=r<0,d=r>l-we&&!h?l:r<we?0:r,f,p,y,_,m,g,A,M,R;if(!c)dL(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(f=d,M=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+r,s,o);if(f=un(d%_),d===l?(y=this._repeat,f=c):(y=~~(d/_),y&&y===un(d/_)&&(f=c,y--),f>c&&(f=c)),g=this._yoyo&&y&1,g&&(R=this._yEase,f=c-f),m=Qo(this._tTime,_),f===a&&!o&&this._initted&&y===m)return this._tTime=d,this;y!==m&&(M&&this._yEase&&ax(M,g),this.vars.repeatRefresh&&!g&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(un(_*y),!0).invalidate()._lock=0))}if(!this._initted){if(Xy(this,h?r:f,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&y!==m))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=d,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=A=(R||this._ease)(f/c),this._from&&(this.ratio=A=1-A),f&&!a&&!s&&!y&&(Zn(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(A,p.d),p=p._next;M&&M.render(r<0?r:M._dur*M._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(h&&$d(this,r,s,o),Zn(this,"onUpdate")),this._repeat&&y!==m&&this.vars.onRepeat&&!s&&this.parent&&Zn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&$d(this,r,!0,!0),(r||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Xr(this,1),!s&&!(h&&!a)&&(d||a||g)&&(Zn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,o,a,l){dl||Jn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Ep(this,c),h=this._ease(c/this._dur),PL(this,r,s,o,a,h,c,l)?this.resetTo(r,s,o,a,1):(Cu(this,0),this.parent||Wy(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?La(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Rr&&Rr.vars.overwrite!==!0)._first||La(this),this.parent&&o!==this.timeline.totalDuration()&&Jo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?ci(r):a,c=this._ptLookup,h=this._pt,d,f,p,y,_,m,g;if((!s||s==="all")&&lL(a,l))return s==="all"&&(this._pt=0),La(this);for(d=this._op=this._op||[],s!=="all"&&(dn(s)&&(_={},Hn(s,function(A){return _[A]=1}),s=_),s=DL(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){f=c[g],s==="all"?(d[g]=s,y=f,p={}):(p=d[g]=d[g]||{},y=s);for(_ in y)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&bu(this,m,"_pt"),delete f[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&h&&La(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return $a(1,arguments)},t.delayedCall=function(r,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(r,s,o){return $a(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,o){return Ue.killTweensOf(r,s,o)},t}(fl);hi(Je.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Hn("staggerTo,staggerFrom,staggerFromTo",function(i){Je[i]=function(){var t=new Un,e=jd.call(arguments,0);return e.splice(i==="staggerFromTo"?5:4,0,0),t[i].apply(t,e)}});var Sp=function(t,e,n){return t[e]=n},fx=function(t,e,n){return t[e](n)},NL=function(t,e,n,r){return t[e](r.fp,n)},OL=function(t,e,n){return t.setAttribute(e,n)},Tp=function(t,e){return He(t[e])?fx:fp(t[e])&&t.setAttribute?OL:Sp},px=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},UL=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},mx=function(t,e){var n=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+r,n=n._next;r+=e.c}e.set(e.t,e.p,r,e)},wp=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},FL=function(t,e,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(t,e,n),s=o},VL=function(t){for(var e=this._pt,n,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?bu(this,e,"_pt"):e.dep||(n=1),e=r;return!n},kL=function(t,e,n,r){r.mSet(t,e,r.m.call(r.tween,n,r.mt),r)},gx=function(t){for(var e=t._pt,n,r,s,o;e;){for(n=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:o)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:o=e,e=n}t._pt=s},Gn=function(){function i(e,n,r,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||px,this.d=l||this,this.set=c||Sp,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=i.prototype;return t.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=kL,this.m=n,this.mt=s,this.tween=r},i}();Hn(vp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return _p[i]=1});ni.TweenMax=ni.TweenLite=Je;ni.TimelineLite=ni.TimelineMax=Un;Ue=new Un({sortChildren:!1,defaults:Ko,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ei.stringFilter=sx;var Rs=[],Ic={},BL=[],T_=0,zL=0,Ph=function(t){return(Ic[t]||BL).map(function(e){return e()})},Jd=function(){var t=Date.now(),e=[];t-T_>2&&(Ph("matchMediaInit"),Rs.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=Ri.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Ph("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),T_=t,Ph("matchMedia"))},_x=function(){function i(e,n){this.selector=n&&Yd(n),this.data=[],this._r=[],this.isReverted=!1,this.id=zL++,e&&this.add(e)}var t=i.prototype;return t.add=function(n,r,s){He(n)&&(s=r,r=n,n=He);var o=this,a=function(){var c=Le,h=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=Yd(s)),Le=o,d=r.apply(o,arguments),He(d)&&o._r.push(d),Le=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===He?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var r=Le;Le=null,n(this),Le=r},t.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Je&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,r){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Un?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Je)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Rs.length;o--;)Rs[o].id===this.id&&Rs.splice(o,1)},t.revert=function(n){this.kill(n||{})},i}(),HL=function(){function i(e){this.contexts=[],this.scope=e,Le&&Le.data.push(this)}var t=i.prototype;return t.add=function(n,r,s){Gi(n)||(n={matches:n});var o=new _x(0,s||this.scope),a=o.conditions={},l,c,h;Le&&!o.selector&&(o.selector=Le.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?h=1:(l=Ri.matchMedia(n[c]),l&&(Rs.indexOf(o)<0&&Rs.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Jd):l.addEventListener("change",Jd)));return h&&r(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),ru={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(r){return nx(r)})},timeline:function(t){return new Un(t)},getTweensOf:function(t,e){return Ue.getTweensOf(t,e)},getProperty:function(t,e,n,r){dn(t)&&(t=ci(t)[0]);var s=Ms(t||{}).get,o=n?Gy:Hy;return n==="native"&&(n=""),t&&(e?o((Qn[e]&&Qn[e].get||s)(t,e,n,r)):function(a,l,c){return o((Qn[a]&&Qn[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=ci(t),t.length>1){var r=t.map(function(h){return qn.quickSetter(h,e,n)}),s=r.length;return function(h){for(var d=s;d--;)r[d](h)}}t=t[0]||{};var o=Qn[e],a=Ms(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;bo._pt=0,d.init(t,n?h+n:h,bo,0,[t]),d.render(1,d),bo._pt&&wp(1,bo)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var r,s=qn.to(t,ks((r={},r[e]="+=0.1",r.paused=!0,r),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return Ue.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=bs(t.ease,Ko.ease)),v_(Ko,t||{})},config:function(t){return v_(ei,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,r=t.plugins,s=t.defaults,o=t.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Qn[a]&&!ni[a]&&cl(e+" effect requires "+a+" plugin.")}),bh[e]=function(a,l,c){return n(ci(a),hi(l||{},s),c)},o&&(Un.prototype[e]=function(a,l,c){return this.add(bh[e](a,Gi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ce[t]=bs(e)},parseEase:function(t,e){return arguments.length?bs(t,e):ce},getById:function(t){return Ue.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Un(t),r,s;for(n.smoothChildTiming=zn(t.smoothChildTiming),Ue.remove(n),n._dp=0,n._time=n._tTime=Ue._time,r=Ue._first;r;)s=r._next,(e||!(!r._dur&&r instanceof Je&&r.vars.onComplete===r._targets[0]))&&Li(n,r,r._start-r._delay),r=s;return Li(Ue,n,0),n},context:function(t,e){return t?new _x(t,e):Le},matchMedia:function(t){return new HL(t)},matchMediaRefresh:function(){return Rs.forEach(function(t){var e=t.conditions,n,r;for(r in e)e[r]&&(e[r]=!1,n=1);n&&t.revert()})||Jd()},addEventListener:function(t,e){var n=Ic[t]||(Ic[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Ic[t],r=n&&n.indexOf(e);r>=0&&n.splice(r,1)},utils:{wrap:xL,wrapYoyo:EL,distribute:Ky,random:Jy,snap:Qy,normalize:yL,getUnit:bn,clamp:mL,splitColor:ix,toArray:ci,selector:Yd,mapRange:tx,pipe:_L,unitize:vL,interpolate:SL,shuffle:Yy},install:Fy,effects:bh,ticker:Jn,updateRoot:Un.updateRoot,plugins:Qn,globalTimeline:Ue,core:{PropTween:Gn,globals:Vy,Tween:Je,Timeline:Un,Animation:fl,getCache:Ms,_removeLinkedListItem:bu,reverting:function(){return Cn},context:function(t){return t&&Le&&(Le.data.push(t),t._ctx=Le),Le},suppressOverwrites:function(t){return dp=t}}};Hn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return ru[i]=Je[i]});Jn.add(Un.updateRoot);bo=ru.to({},{duration:0});var GL=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},WL=function(t,e){var n=t._targets,r,s,o;for(r in e)for(s=n.length;s--;)o=t._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=GL(o,r)),o&&o.modifier&&o.modifier(e[r],t,n[s],r))},Dh=function(t,e){return{name:t,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(dn(s)&&(l={},Hn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}WL(a,s)}}}},qn=ru.registerPlugin({name:"attr",init:function(t,e,n,r,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Cn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Dh("roundProps",Kd),Dh("modifiers"),Dh("snap",Qy))||ru;Je.version=Un.version=qn.version="3.12.5";Uy=1;pp()&&Zo();ce.Power0;ce.Power1;ce.Power2;ce.Power3;ce.Power4;ce.Linear;ce.Quad;ce.Cubic;ce.Quart;ce.Quint;ce.Strong;ce.Elastic;ce.Back;ce.SteppedEase;ce.Bounce;ce.Sine;ce.Expo;ce.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var w_,Cr,Uo,Mp,Es,M_,Ap,qL=function(){return typeof window<"u"},mr={},ds=180/Math.PI,Fo=Math.PI/180,yo=Math.atan2,A_=1e8,bp=/([A-Z])/g,$L=/(left|right|width|margin|padding|x)/i,XL=/[\s,\(]\S/,Ni={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Zd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},jL=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},YL=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},KL=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},vx=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},yx=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},QL=function(t,e,n){return t.style[e]=n},JL=function(t,e,n){return t.style.setProperty(e,n)},ZL=function(t,e,n){return t._gsap[e]=n},tN=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},eN=function(t,e,n,r,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},nN=function(t,e,n,r,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Ve="transform",Wn=Ve+"Origin",iN=function i(t,e){var n=this,r=this.target,s=r.style,o=r._gsap;if(t in mr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Ni[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=nr(r,a)}):this.tfm[t]=o.x?o[t]:nr(r,t),t===Wn&&(this.tfm.zOrigin=o.zOrigin);else return Ni.transform.split(",").forEach(function(a){return i.call(n,a,e)});if(this.props.indexOf(Ve)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Wn,e,"")),t=Ve}(s||e)&&this.props.push(t,e,s[t])},xx=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},rN=function(){var t=this.props,e=this.target,n=e.style,r=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(bp,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Ap(),(!s||!s.isStart)&&!n[Ve]&&(xx(n),r.zOrigin&&n[Wn]&&(n[Wn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Ex=function(t,e){var n={target:t,props:[],revert:rN,save:iN};return t._gsap||qn.core.getCache(t),e&&e.split(",").forEach(function(r){return n.save(r)}),n},Sx,tf=function(t,e){var n=Cr.createElementNS?Cr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Cr.createElement(t);return n&&n.style?n:Cr.createElement(t)},Bi=function i(t,e,n){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(bp,"-$1").toLowerCase())||r.getPropertyValue(e)||!n&&i(t,ta(e)||e,1)||""},b_="O,Moz,ms,Ms,Webkit".split(","),ta=function(t,e,n){var r=e||Es,s=r.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(b_[o]+t in s););return o<0?null:(o===3?"ms":o>=0?b_[o]:"")+t},ef=function(){qL()&&window.document&&(w_=window,Cr=w_.document,Uo=Cr.documentElement,Es=tf("div")||{style:{}},tf("div"),Ve=ta(Ve),Wn=Ve+"Origin",Es.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Sx=!!ta("perspective"),Ap=qn.core.reverting,Mp=1)},Lh=function i(t){var e=tf("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(Uo.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),Uo.removeChild(e),this.style.cssText=s,o},R_=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Tx=function(t){var e;try{e=t.getBBox()}catch{e=Lh.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Lh||(e=Lh.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+R_(t,["x","cx","x1"])||0,y:+R_(t,["y","cy","y1"])||0,width:0,height:0}:e},wx=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Tx(t))},Bs=function(t,e){if(e){var n=t.style,r;e in mr&&e!==Wn&&(e=Ve),n.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(r==="--"?e:e.replace(bp,"-$1").toLowerCase())):n.removeAttribute(e)}},Ir=function(t,e,n,r,s,o){var a=new Gn(t._pt,e,n,0,1,o?yx:vx);return t._pt=a,a.b=r,a.e=s,t._props.push(n),a},C_={deg:1,rad:1,turn:1},sN={grid:1,flex:1},jr=function i(t,e,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Es.style,l=$L.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,f=r==="px",p=r==="%",y,_,m,g;if(r===o||!s||C_[r]||C_[o])return s;if(o!=="px"&&!f&&(s=i(t,e,n,"px")),g=t.getCTM&&wx(t),(p||o==="%")&&(mr[e]||~e.indexOf("adius")))return y=g?t.getBBox()[l?"width":"height"]:t[h],$e(p?s/y*d:s/100*y);if(a[l?"width":"height"]=d+(f?o:r),_=~e.indexOf("adius")||r==="em"&&t.appendChild&&!c?t:t.parentNode,g&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Cr||!_.appendChild)&&(_=Cr.body),m=_._gsap,m&&p&&m.width&&l&&m.time===Jn.time&&!m.uncache)return $e(s/m.width*d);if(p&&(e==="height"||e==="width")){var A=t.style[e];t.style[e]=d+r,y=t[h],A?t.style[e]=A:Bs(t,e)}else(p||o==="%")&&!sN[Bi(_,"display")]&&(a.position=Bi(t,"position")),_===t&&(a.position="static"),_.appendChild(Es),y=Es[h],_.removeChild(Es),a.position="absolute";return l&&p&&(m=Ms(_),m.time=Jn.time,m.width=_[h]),$e(f?y*s/d:y&&s?d/y*s:0)},nr=function(t,e,n,r){var s;return Mp||ef(),e in Ni&&e!=="transform"&&(e=Ni[e],~e.indexOf(",")&&(e=e.split(",")[0])),mr[e]&&e!=="transform"?(s=ml(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:ou(Bi(t,Wn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=su[e]&&su[e](t,e,n)||Bi(t,e)||By(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?jr(t,e,s,n)+n:s},oN=function(t,e,n,r){if(!n||n==="none"){var s=ta(e,t,1),o=s&&Bi(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=Bi(t,"borderTopColor"))}var a=new Gn(this._pt,t.style,e,0,1,mx),l=0,c=0,h,d,f,p,y,_,m,g,A,M,R,F;if(a.b=n,a.e=r,n+="",r+="",r==="auto"&&(_=t.style[e],t.style[e]=r,r=Bi(t,e)||r,_?t.style[e]=_:Bs(t,e)),h=[n,r],sx(h),n=h[0],r=h[1],f=n.match(Ao)||[],F=r.match(Ao)||[],F.length){for(;d=Ao.exec(r);)m=d[0],A=r.substring(l,d.index),y?y=(y+1)%5:(A.substr(-5)==="rgba("||A.substr(-5)==="hsla(")&&(y=1),m!==(_=f[c++]||"")&&(p=parseFloat(_)||0,R=_.substr((p+"").length),m.charAt(1)==="="&&(m=Oo(p,m)+R),g=parseFloat(m),M=m.substr((g+"").length),l=Ao.lastIndex-M.length,M||(M=M||ei.units[e]||R,l===r.length&&(r+=M,a.e+=M)),R!==M&&(p=jr(t,e,_,M)||0),a._pt={_next:a._pt,p:A||c===1?A:",",s:p,c:g-p,m:y&&y<4||e==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=e==="display"&&r==="none"?yx:vx;return Ny.test(r)&&(a.e=0),this._pt=a,a},I_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},aN=function(t){var e=t.split(" "),n=e[0],r=e[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(t=n,n=r,r=t),e[0]=I_[n]||n,e[1]=I_[r]||r,e.join(" ")},lN=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,r=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],mr[a]&&(l=1,a=a==="transformOrigin"?Wn:Ve),Bs(n,a);l&&(Bs(n,Ve),o&&(o.svg&&n.removeAttribute("transform"),ml(n,1),o.uncache=1,xx(r)))}},su={clearProps:function(t,e,n,r,s){if(s.data!=="isFromStart"){var o=t._pt=new Gn(t._pt,e,n,0,0,lN);return o.u=r,o.pr=-10,o.tween=s,t._props.push(n),1}}},pl=[1,0,0,1,0,0],Mx={},Ax=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},P_=function(t){var e=Bi(t,Ve);return Ax(e)?pl:e.substr(7).match(Ly).map($e)},Rp=function(t,e){var n=t._gsap||Ms(t),r=t.style,s=P_(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?pl:s):(s===pl&&!t.offsetParent&&t!==Uo&&!n.svg&&(l=r.display,r.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(c=1,a=t.nextElementSibling,Uo.appendChild(t)),s=P_(t),l?r.display=l:Bs(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):Uo.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},nf=function(t,e,n,r,s,o){var a=t._gsap,l=s||Rp(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,f=a.yOffset||0,p=l[0],y=l[1],_=l[2],m=l[3],g=l[4],A=l[5],M=e.split(" "),R=parseFloat(M[0])||0,F=parseFloat(M[1])||0,D,S,T,x;n?l!==pl&&(S=p*m-y*_)&&(T=R*(m/S)+F*(-_/S)+(_*A-m*g)/S,x=R*(-y/S)+F*(p/S)-(p*A-y*g)/S,R=T,F=x):(D=Tx(t),R=D.x+(~M[0].indexOf("%")?R/100*D.width:R),F=D.y+(~(M[1]||M[0]).indexOf("%")?F/100*D.height:F)),r||r!==!1&&a.smooth?(g=R-c,A=F-h,a.xOffset=d+(g*p+A*_)-g,a.yOffset=f+(g*y+A*m)-A):a.xOffset=a.yOffset=0,a.xOrigin=R,a.yOrigin=F,a.smooth=!!r,a.origin=e,a.originIsAbsolute=!!n,t.style[Wn]="0px 0px",o&&(Ir(o,a,"xOrigin",c,R),Ir(o,a,"yOrigin",h,F),Ir(o,a,"xOffset",d,a.xOffset),Ir(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",R+" "+F)},ml=function(t,e){var n=t._gsap||new cx(t);if("x"in n&&!e&&!n.uncache)return n;var r=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Bi(t,Wn)||"0",h,d,f,p,y,_,m,g,A,M,R,F,D,S,T,x,E,b,L,C,G,K,W,tt,Q,gt,St,xt,Ut,Bt,et,at;return h=d=f=_=m=g=A=M=R=0,p=y=1,n.svg=!!(t.getCTM&&wx(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Ve]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ve]!=="none"?l[Ve]:"")),r.scale=r.rotate=r.translate="none"),S=Rp(t,n.svg),n.svg&&(n.uncache?(Q=t.getBBox(),c=n.xOrigin-Q.x+"px "+(n.yOrigin-Q.y)+"px",tt=""):tt=!e&&t.getAttribute("data-svg-origin"),nf(t,tt||c,!!tt||n.originIsAbsolute,n.smooth!==!1,S)),F=n.xOrigin||0,D=n.yOrigin||0,S!==pl&&(b=S[0],L=S[1],C=S[2],G=S[3],h=K=S[4],d=W=S[5],S.length===6?(p=Math.sqrt(b*b+L*L),y=Math.sqrt(G*G+C*C),_=b||L?yo(L,b)*ds:0,A=C||G?yo(C,G)*ds+_:0,A&&(y*=Math.abs(Math.cos(A*Fo))),n.svg&&(h-=F-(F*b+D*C),d-=D-(F*L+D*G))):(at=S[6],Bt=S[7],St=S[8],xt=S[9],Ut=S[10],et=S[11],h=S[12],d=S[13],f=S[14],T=yo(at,Ut),m=T*ds,T&&(x=Math.cos(-T),E=Math.sin(-T),tt=K*x+St*E,Q=W*x+xt*E,gt=at*x+Ut*E,St=K*-E+St*x,xt=W*-E+xt*x,Ut=at*-E+Ut*x,et=Bt*-E+et*x,K=tt,W=Q,at=gt),T=yo(-C,Ut),g=T*ds,T&&(x=Math.cos(-T),E=Math.sin(-T),tt=b*x-St*E,Q=L*x-xt*E,gt=C*x-Ut*E,et=G*E+et*x,b=tt,L=Q,C=gt),T=yo(L,b),_=T*ds,T&&(x=Math.cos(T),E=Math.sin(T),tt=b*x+L*E,Q=K*x+W*E,L=L*x-b*E,W=W*x-K*E,b=tt,K=Q),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,g=180-g),p=$e(Math.sqrt(b*b+L*L+C*C)),y=$e(Math.sqrt(W*W+at*at)),T=yo(K,W),A=Math.abs(T)>2e-4?T*ds:0,R=et?1/(et<0?-et:et):0),n.svg&&(tt=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Ax(Bi(t,Ve)),tt&&t.setAttribute("transform",tt))),Math.abs(A)>90&&Math.abs(A)<270&&(s?(p*=-1,A+=_<=0?180:-180,_+=_<=0?180:-180):(y*=-1,A+=A<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=$e(p),n.scaleY=$e(y),n.rotation=$e(_)+a,n.rotationX=$e(m)+a,n.rotationY=$e(g)+a,n.skewX=A+a,n.skewY=M+a,n.transformPerspective=R+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(r[Wn]=ou(c)),n.xOffset=n.yOffset=0,n.force3D=ei.force3D,n.renderTransform=n.svg?uN:Sx?bx:cN,n.uncache=0,n},ou=function(t){return(t=t.split(" "))[0]+" "+t[1]},Nh=function(t,e,n){var r=bn(e);return $e(parseFloat(e)+parseFloat(jr(t,"x",n+"px",r)))+r},cN=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,bx(t,e)},ls="0deg",Aa="0px",cs=") ",bx=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,f=n.skewX,p=n.skewY,y=n.scaleX,_=n.scaleY,m=n.transformPerspective,g=n.force3D,A=n.target,M=n.zOrigin,R="",F=g==="auto"&&t&&t!==1||g===!0;if(M&&(d!==ls||h!==ls)){var D=parseFloat(h)*Fo,S=Math.sin(D),T=Math.cos(D),x;D=parseFloat(d)*Fo,x=Math.cos(D),o=Nh(A,o,S*x*-M),a=Nh(A,a,-Math.sin(D)*-M),l=Nh(A,l,T*x*-M+M)}m!==Aa&&(R+="perspective("+m+cs),(r||s)&&(R+="translate("+r+"%, "+s+"%) "),(F||o!==Aa||a!==Aa||l!==Aa)&&(R+=l!==Aa||F?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+cs),c!==ls&&(R+="rotate("+c+cs),h!==ls&&(R+="rotateY("+h+cs),d!==ls&&(R+="rotateX("+d+cs),(f!==ls||p!==ls)&&(R+="skew("+f+", "+p+cs),(y!==1||_!==1)&&(R+="scale("+y+", "+_+cs),A.style[Ve]=R||"translate(0, 0)"},uN=function(t,e){var n=e||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,f=n.scaleY,p=n.target,y=n.xOrigin,_=n.yOrigin,m=n.xOffset,g=n.yOffset,A=n.forceCSS,M=parseFloat(o),R=parseFloat(a),F,D,S,T,x;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Fo,c*=Fo,F=Math.cos(l)*d,D=Math.sin(l)*d,S=Math.sin(l-c)*-f,T=Math.cos(l-c)*f,c&&(h*=Fo,x=Math.tan(c-h),x=Math.sqrt(1+x*x),S*=x,T*=x,h&&(x=Math.tan(h),x=Math.sqrt(1+x*x),F*=x,D*=x)),F=$e(F),D=$e(D),S=$e(S),T=$e(T)):(F=d,T=f,D=S=0),(M&&!~(o+"").indexOf("px")||R&&!~(a+"").indexOf("px"))&&(M=jr(p,"x",o,"px"),R=jr(p,"y",a,"px")),(y||_||m||g)&&(M=$e(M+y-(y*F+_*S)+m),R=$e(R+_-(y*D+_*T)+g)),(r||s)&&(x=p.getBBox(),M=$e(M+r/100*x.width),R=$e(R+s/100*x.height)),x="matrix("+F+","+D+","+S+","+T+","+M+","+R+")",p.setAttribute("transform",x),A&&(p.style[Ve]=x)},hN=function(t,e,n,r,s){var o=360,a=dn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ds:1),c=l-r,h=r+c+"deg",d,f;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*A_)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*A_)%o-~~(c/o)*o)),t._pt=f=new Gn(t._pt,e,n,r,c,jL),f.e=h,f.u="deg",t._props.push(n),f},D_=function(t,e){for(var n in e)t[n]=e[n];return t},dN=function(t,e,n){var r=D_({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,f,p,y;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ve]=e,a=ml(n,1),Bs(n,Ve),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ve],o[Ve]=e,a=ml(n,1),o[Ve]=c);for(l in mr)c=r[l],h=a[l],c!==h&&s.indexOf(l)<0&&(p=bn(c),y=bn(h),d=p!==y?jr(n,l,c,y):parseFloat(c),f=parseFloat(h),t._pt=new Gn(t._pt,a,l,d,f-d,Zd),t._pt.u=y||0,t._props.push(l));D_(a,r)};Hn("padding,margin,Width,Radius",function(i,t){var e="Top",n="Right",r="Bottom",s="Left",o=(t<3?[e,n,r,s]:[e+s,e+n,r+n,r+s]).map(function(a){return t<2?i+a:"border"+a+i});su[t>1?"border"+i:i]=function(a,l,c,h,d){var f,p;if(arguments.length<4)return f=o.map(function(y){return nr(a,y,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(h+"").split(" "),p={},o.forEach(function(y,_){return p[y]=f[_]=f[_]||f[(_-1)/2|0]}),a.init(l,p,d)}});var Rx={name:"css",register:ef,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,r,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,d,f,p,y,_,m,g,A,M,R,F,D,S,T;Mp||ef(),this.styles=this.styles||Ex(t),T=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(Qn[_]&&ux(_,e,n,r,t,s)))){if(p=typeof h,y=su[_],p==="function"&&(h=h.call(n,r,t,s),p=typeof h),p==="string"&&~h.indexOf("random(")&&(h=hl(h)),y)y(this,t,_,h,n)&&(S=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",kr.lastIndex=0,kr.test(c)||(m=bn(c),g=bn(h)),g?m!==g&&(c=jr(t,_,c,g)+g):m&&(h+=m),this.add(a,"setProperty",c,h,r,s,0,0,_),o.push(_),T.push(_,0,a[_]);else if(p!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,r,t,s):l[_],dn(c)&&~c.indexOf("random(")&&(c=hl(c)),bn(c+"")||c==="auto"||(c+=ei.units[_]||bn(nr(t,_))||""),(c+"").charAt(1)==="="&&(c=nr(t,_))):c=nr(t,_),f=parseFloat(c),A=p==="string"&&h.charAt(1)==="="&&h.substr(0,2),A&&(h=h.substr(2)),d=parseFloat(h),_ in Ni&&(_==="autoAlpha"&&(f===1&&nr(t,"visibility")==="hidden"&&d&&(f=0),T.push("visibility",0,a.visibility),Ir(this,a,"visibility",f?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Ni[_],~_.indexOf(",")&&(_=_.split(",")[0]))),M=_ in mr,M){if(this.styles.save(_),R||(F=t._gsap,F.renderTransform&&!e.parseTransform||ml(t,e.parseTransform),D=e.smoothOrigin!==!1&&F.smooth,R=this._pt=new Gn(this._pt,a,Ve,0,1,F.renderTransform,F,0,-1),R.dep=1),_==="scale")this._pt=new Gn(this._pt,F,"scaleY",F.scaleY,(A?Oo(F.scaleY,A+d):d)-F.scaleY||0,Zd),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){T.push(Wn,0,a[Wn]),h=aN(h),F.svg?nf(t,h,0,D,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==F.zOrigin&&Ir(this,F,"zOrigin",F.zOrigin,g),Ir(this,a,_,ou(c),ou(h)));continue}else if(_==="svgOrigin"){nf(t,h,1,D,0,this);continue}else if(_ in Mx){hN(this,F,_,f,A?Oo(f,A+h):h);continue}else if(_==="smoothOrigin"){Ir(this,F,"smooth",F.smooth,h);continue}else if(_==="force3D"){F[_]=h;continue}else if(_==="transform"){dN(this,h,t);continue}}else _ in a||(_=ta(_)||_);if(M||(d||d===0)&&(f||f===0)&&!XL.test(h)&&_ in a)m=(c+"").substr((f+"").length),d||(d=0),g=bn(h)||(_ in ei.units?ei.units[_]:m),m!==g&&(f=jr(t,_,c,g)),this._pt=new Gn(this._pt,M?F:a,_,f,(A?Oo(f,A+d):d)-f,!M&&(g==="px"||_==="zIndex")&&e.autoRound!==!1?KL:Zd),this._pt.u=g||0,m!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=YL);else if(_ in a)oN.call(this,t,_,c,A?A+h:h);else if(_ in t)this.add(t,_,c||t[_],A?A+h:h,r,s);else if(_!=="parseTransform"){gp(_,h);continue}M||(_ in a?T.push(_,0,a[_]):T.push(_,1,c||t[_])),o.push(_)}}S&&gx(this)},render:function(t,e){if(e.tween._time||!Ap())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:nr,aliases:Ni,getSetter:function(t,e,n){var r=Ni[e];return r&&r.indexOf(",")<0&&(e=r),e in mr&&e!==Wn&&(t._gsap.x||nr(t,"x"))?n&&M_===n?e==="scale"?tN:ZL:(M_=n||{})&&(e==="scale"?eN:nN):t.style&&!fp(t.style[e])?QL:~e.indexOf("-")?JL:Tp(t,e)},core:{_removeProperty:Bs,_getMatrix:Rp}};qn.utils.checkPrefix=ta;qn.core.getStyleSaver=Ex;(function(i,t,e,n){var r=Hn(i+","+t+","+e,function(s){mr[s]=1});Hn(t,function(s){ei.units[s]="deg",Mx[s]=1}),Ni[r[13]]=i+","+t,Hn(n,function(s){var o=s.split(":");Ni[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Hn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){ei.units[i]="px"});qn.registerPlugin(Rx);var Ge=qn.registerPlugin(Rx)||qn;Ge.core.Tween;const di={NONE:"none",SQUIRTLE:"squirtle",CHARMANDER:"charmander"},L_={type:"change"},Oh={type:"start"},N_={type:"end"},mc=new tp,O_=new wr,fN=Math.cos(70*L1.DEG2RAD);class pN extends Gs{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new k,this.cursor=new k,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zs.ROTATE,MIDDLE:Zs.DOLLY,RIGHT:Zs.PAN},this.touches={ONE:to.ROTATE,TWO:to.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(I){I.addEventListener("keydown",Tt),this._domElementKeyEvents=I},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Tt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(L_),n.update(),s=r.NONE},this.update=function(){const I=new k,q=new Fs().setFromUnitVectors(t.up,new k(0,1,0)),$=q.clone().invert(),J=new k,ct=new Fs,Ot=new k,Ht=2*Math.PI;return function(Ie=null){const ae=n.object.position;I.copy(ae).sub(n.target),I.applyQuaternion(q),a.setFromVector3(I),n.autoRotate&&s===r.NONE&&L(E(Ie)),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Me=n.minAzimuthAngle,Ne=n.maxAzimuthAngle;isFinite(Me)&&isFinite(Ne)&&(Me<-Math.PI?Me+=Ht:Me>Math.PI&&(Me-=Ht),Ne<-Math.PI?Ne+=Ht:Ne>Math.PI&&(Ne-=Ht),Me<=Ne?a.theta=Math.max(Me,Math.min(Ne,a.theta)):a.theta=a.theta>(Me+Ne)/2?Math.max(Me,a.theta):Math.min(Ne,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let Pe=!1;if(n.zoomToCursor&&D||n.object.isOrthographicCamera)a.radius=St(a.radius);else{const Xe=a.radius;a.radius=St(a.radius*c),Pe=Xe!=a.radius}if(I.setFromSpherical(a),I.applyQuaternion($),ae.copy(n.target).add(I),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&D){let Xe=null;if(n.object.isPerspectiveCamera){const Dn=I.length();Xe=St(Dn*c);const $n=Dn-Xe;n.object.position.addScaledVector(R,$n),n.object.updateMatrixWorld(),Pe=!!$n}else if(n.object.isOrthographicCamera){const Dn=new k(F.x,F.y,0);Dn.unproject(n.object);const $n=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),Pe=$n!==n.object.zoom;const Jr=new k(F.x,F.y,0);Jr.unproject(n.object),n.object.position.sub(Jr).add(Dn),n.object.updateMatrixWorld(),Xe=I.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Xe!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Xe).add(n.object.position):(mc.origin.copy(n.object.position),mc.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(mc.direction))<fN?t.lookAt(n.target):(O_.setFromNormalAndCoplanarPoint(n.object.up,n.target),mc.intersectPlane(O_,n.target))))}else if(n.object.isOrthographicCamera){const Xe=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),Xe!==n.object.zoom&&(n.object.updateProjectionMatrix(),Pe=!0)}return c=1,D=!1,Pe||J.distanceToSquared(n.object.position)>o||8*(1-ct.dot(n.object.quaternion))>o||Ot.distanceToSquared(n.target)>o?(n.dispatchEvent(L_),J.copy(n.object.position),ct.copy(n.object.quaternion),Ot.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",At),n.domElement.removeEventListener("pointerdown",Rt),n.domElement.removeEventListener("pointercancel",P),n.domElement.removeEventListener("wheel",it),n.domElement.removeEventListener("pointermove",V),n.domElement.removeEventListener("pointerup",P),n.domElement.getRootNode().removeEventListener("keydown",Mt,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Tt),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new m_,l=new m_;let c=1;const h=new k,d=new dt,f=new dt,p=new dt,y=new dt,_=new dt,m=new dt,g=new dt,A=new dt,M=new dt,R=new k,F=new dt;let D=!1;const S=[],T={};let x=!1;function E(I){return I!==null?2*Math.PI/60*n.autoRotateSpeed*I:2*Math.PI/60/60*n.autoRotateSpeed}function b(I){const q=Math.abs(I*.01);return Math.pow(.95,n.zoomSpeed*q)}function L(I){l.theta-=I}function C(I){l.phi-=I}const G=function(){const I=new k;return function($,J){I.setFromMatrixColumn(J,0),I.multiplyScalar(-$),h.add(I)}}(),K=function(){const I=new k;return function($,J){n.screenSpacePanning===!0?I.setFromMatrixColumn(J,1):(I.setFromMatrixColumn(J,0),I.crossVectors(n.object.up,I)),I.multiplyScalar($),h.add(I)}}(),W=function(){const I=new k;return function($,J){const ct=n.domElement;if(n.object.isPerspectiveCamera){const Ot=n.object.position;I.copy(Ot).sub(n.target);let Ht=I.length();Ht*=Math.tan(n.object.fov/2*Math.PI/180),G(2*$*Ht/ct.clientHeight,n.object.matrix),K(2*J*Ht/ct.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(G($*(n.object.right-n.object.left)/n.object.zoom/ct.clientWidth,n.object.matrix),K(J*(n.object.top-n.object.bottom)/n.object.zoom/ct.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function tt(I){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Q(I){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function gt(I,q){if(!n.zoomToCursor)return;D=!0;const $=n.domElement.getBoundingClientRect(),J=I-$.left,ct=q-$.top,Ot=$.width,Ht=$.height;F.x=J/Ot*2-1,F.y=-(ct/Ht)*2+1,R.set(F.x,F.y,1).unproject(n.object).sub(n.object.position).normalize()}function St(I){return Math.max(n.minDistance,Math.min(n.maxDistance,I))}function xt(I){d.set(I.clientX,I.clientY)}function Ut(I){gt(I.clientX,I.clientX),g.set(I.clientX,I.clientY)}function Bt(I){y.set(I.clientX,I.clientY)}function et(I){f.set(I.clientX,I.clientY),p.subVectors(f,d).multiplyScalar(n.rotateSpeed);const q=n.domElement;L(2*Math.PI*p.x/q.clientHeight),C(2*Math.PI*p.y/q.clientHeight),d.copy(f),n.update()}function at(I){A.set(I.clientX,I.clientY),M.subVectors(A,g),M.y>0?tt(b(M.y)):M.y<0&&Q(b(M.y)),g.copy(A),n.update()}function Ct(I){_.set(I.clientX,I.clientY),m.subVectors(_,y).multiplyScalar(n.panSpeed),W(m.x,m.y),y.copy(_),n.update()}function _t(I){gt(I.clientX,I.clientY),I.deltaY<0?Q(b(I.deltaY)):I.deltaY>0&&tt(b(I.deltaY)),n.update()}function Wt(I){let q=!1;switch(I.code){case n.keys.UP:I.ctrlKey||I.metaKey||I.shiftKey?C(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,n.keyPanSpeed),q=!0;break;case n.keys.BOTTOM:I.ctrlKey||I.metaKey||I.shiftKey?C(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,-n.keyPanSpeed),q=!0;break;case n.keys.LEFT:I.ctrlKey||I.metaKey||I.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(n.keyPanSpeed,0),q=!0;break;case n.keys.RIGHT:I.ctrlKey||I.metaKey||I.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(-n.keyPanSpeed,0),q=!0;break}q&&(I.preventDefault(),n.update())}function Jt(I){if(S.length===1)d.set(I.pageX,I.pageY);else{const q=Kt(I),$=.5*(I.pageX+q.x),J=.5*(I.pageY+q.y);d.set($,J)}}function zt(I){if(S.length===1)y.set(I.pageX,I.pageY);else{const q=Kt(I),$=.5*(I.pageX+q.x),J=.5*(I.pageY+q.y);y.set($,J)}}function ne(I){const q=Kt(I),$=I.pageX-q.x,J=I.pageY-q.y,ct=Math.sqrt($*$+J*J);g.set(0,ct)}function U(I){n.enableZoom&&ne(I),n.enablePan&&zt(I)}function pt(I){n.enableZoom&&ne(I),n.enableRotate&&Jt(I)}function lt(I){if(S.length==1)f.set(I.pageX,I.pageY);else{const $=Kt(I),J=.5*(I.pageX+$.x),ct=.5*(I.pageY+$.y);f.set(J,ct)}p.subVectors(f,d).multiplyScalar(n.rotateSpeed);const q=n.domElement;L(2*Math.PI*p.x/q.clientHeight),C(2*Math.PI*p.y/q.clientHeight),d.copy(f)}function yt(I){if(S.length===1)_.set(I.pageX,I.pageY);else{const q=Kt(I),$=.5*(I.pageX+q.x),J=.5*(I.pageY+q.y);_.set($,J)}m.subVectors(_,y).multiplyScalar(n.panSpeed),W(m.x,m.y),y.copy(_)}function nt(I){const q=Kt(I),$=I.pageX-q.x,J=I.pageY-q.y,ct=Math.sqrt($*$+J*J);A.set(0,ct),M.set(0,Math.pow(A.y/g.y,n.zoomSpeed)),tt(M.y),g.copy(A);const Ot=(I.pageX+q.x)*.5,Ht=(I.pageY+q.y)*.5;gt(Ot,Ht)}function kt(I){n.enableZoom&&nt(I),n.enablePan&&yt(I)}function Et(I){n.enableZoom&&nt(I),n.enableRotate&&lt(I)}function Rt(I){n.enabled!==!1&&(S.length===0&&(n.domElement.setPointerCapture(I.pointerId),n.domElement.addEventListener("pointermove",V),n.domElement.addEventListener("pointerup",P)),!It(I)&&(ee(I),I.pointerType==="touch"?Yt(I):X(I)))}function V(I){n.enabled!==!1&&(I.pointerType==="touch"?ft(I):ot(I))}function P(I){switch(qt(I),S.length){case 0:n.domElement.releasePointerCapture(I.pointerId),n.domElement.removeEventListener("pointermove",V),n.domElement.removeEventListener("pointerup",P),n.dispatchEvent(N_),s=r.NONE;break;case 1:const q=S[0],$=T[q];Yt({pointerId:q,pageX:$.x,pageY:$.y});break}}function X(I){let q;switch(I.button){case 0:q=n.mouseButtons.LEFT;break;case 1:q=n.mouseButtons.MIDDLE;break;case 2:q=n.mouseButtons.RIGHT;break;default:q=-1}switch(q){case Zs.DOLLY:if(n.enableZoom===!1)return;Ut(I),s=r.DOLLY;break;case Zs.ROTATE:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enablePan===!1)return;Bt(I),s=r.PAN}else{if(n.enableRotate===!1)return;xt(I),s=r.ROTATE}break;case Zs.PAN:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enableRotate===!1)return;xt(I),s=r.ROTATE}else{if(n.enablePan===!1)return;Bt(I),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Oh)}function ot(I){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;et(I);break;case r.DOLLY:if(n.enableZoom===!1)return;at(I);break;case r.PAN:if(n.enablePan===!1)return;Ct(I);break}}function it(I){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(I.preventDefault(),n.dispatchEvent(Oh),_t(rt(I)),n.dispatchEvent(N_))}function rt(I){const q=I.deltaMode,$={clientX:I.clientX,clientY:I.clientY,deltaY:I.deltaY};switch(q){case 1:$.deltaY*=16;break;case 2:$.deltaY*=100;break}return I.ctrlKey&&!x&&($.deltaY*=10),$}function Mt(I){I.key==="Control"&&(x=!0,n.domElement.getRootNode().addEventListener("keyup",ht,{passive:!0,capture:!0}))}function ht(I){I.key==="Control"&&(x=!1,n.domElement.getRootNode().removeEventListener("keyup",ht,{passive:!0,capture:!0}))}function Tt(I){n.enabled===!1||n.enablePan===!1||Wt(I)}function Yt(I){switch($t(I),S.length){case 1:switch(n.touches.ONE){case to.ROTATE:if(n.enableRotate===!1)return;Jt(I),s=r.TOUCH_ROTATE;break;case to.PAN:if(n.enablePan===!1)return;zt(I),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case to.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;U(I),s=r.TOUCH_DOLLY_PAN;break;case to.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;pt(I),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Oh)}function ft(I){switch($t(I),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;lt(I),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;yt(I),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;kt(I),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Et(I),n.update();break;default:s=r.NONE}}function At(I){n.enabled!==!1&&I.preventDefault()}function ee(I){S.push(I.pointerId)}function qt(I){delete T[I.pointerId];for(let q=0;q<S.length;q++)if(S[q]==I.pointerId){S.splice(q,1);return}}function It(I){for(let q=0;q<S.length;q++)if(S[q]==I.pointerId)return!0;return!1}function $t(I){let q=T[I.pointerId];q===void 0&&(q=new dt,T[I.pointerId]=q),q.set(I.pageX,I.pageY)}function Kt(I){const q=I.pointerId===S[0]?S[1]:S[0];return T[q]}n.domElement.addEventListener("contextmenu",At),n.domElement.addEventListener("pointerdown",Rt),n.domElement.addEventListener("pointercancel",P),n.domElement.addEventListener("wheel",it,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",Mt,{passive:!0,capture:!0}),this.update()}}class Cx extends w2{constructor(t,e){super(),this.customUniforms=t,this.setValues(e),this.onBeforeCompile=n=>{n.uniforms.uGlitterSize=this.customUniforms.uGlitterSize,n.uniforms.uGlitterDensity=this.customUniforms.uGlitterDensity,n.vertexShader=n.vertexShader.replace("#include <common>",`
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
          `)}}}const bl=new hp;bl.hide();const fs=2.5,ln=1/6,Pr=1.15;let zi=di.NONE,Ix=!1,Oa,Ro,U_,Si,Ss,Ts,Co,ps,Mr,Iu,Pu,Du,Pc,Px,Dx=!1;const Lx=document.querySelector("canvas.webgl"),F_=new O2,ba=new dt,ve=new WD;ve.background=new se(13808780);const Dc=new F2,mN=new L2("#fff",2.75);ve.add(mN);const Nx=new up("#fff",.5);Nx.position.set(0,4,9.5);ve.add(Nx);const Ox=new up("#fff",.5);Ox.position.set(0,-4.5,9.5);ve.add(Ox);const Pn=new I2,Ux=Pn.load("./textures/wall/painted_plaster_wall_diff_1k.jpg");Ux.colorSpace=mn;const Fx=Pn.load("./textures/box/green_metal_rust_diff_1k.jpg"),gN=Pn.load("./textures/box/green_metal_rust_arm_1k.jpg"),_N=Pn.load("./textures/box/green_metal_rust_nor_gl_1k.jpg");Fx.colorSpace=mn;const vN=Pn.load("./textures/shelf/wood_peeling_paint_weathered_diff_1k.jpg"),Uh=Pn.load("./textures/shelf/wood_peeling_paint_weathered_arm_1k.jpg"),yN=Pn.load("./textures/shelf/wood_peeling_paint_weathered_nor_gl_1k.jpg"),Vx=Pn.load("./textures/posters/CardAlphaTexture.jpg"),kx=Pn.load("./textures/posters/CharmanderPosterColor.jpg"),xN=Pn.load("./textures/posters/CharmanderPosterMetal.jpg");kx.colorSpace=mn;const Bx=Pn.load("./textures/posters/SquirtlePosterColor.jpg"),EN=Pn.load("./textures/posters/SquirtlePosterMetal.jpg");Bx.colorSpace=mn;const SN=Pn.load("./textures/stickers/StickerAlpha.jpg"),zx=Pn.load("./textures/stickers/StickerColor.jpg");zx.colorSpace=mn;const Hx=Pn.load("./textures/pins/charmanderPinColor.jpg"),Gx=Pn.load("./textures/pins/squirtlePinColor.jpg");Gx.colorSpace=mn;Hx.colorSpace=mn;const Wx=new bi({alphaMap:Vx,transparent:!0,map:kx,metalnessMap:xN,metalness:1,roughness:.35}),qx=new bi({alphaMap:Vx,transparent:!0,map:Bx,metalnessMap:EN,metalness:1,roughness:.35});async function TN(){let i=0,t=0;const e=Dv(qv,"votes"),n=rg(e,sg("vote","==","charmander"));i=(await lg(n)).size;const s=rg(e,sg("vote","==","squirtle"));return t=(await lg(s)).size,console.log(`Charmander Votes: ${i}`),console.log(`Squirtle Votes: ${t}`),{charmanderVotes:i,squirtleVotes:t}}function wN(){TN().then(({charmanderVotes:e,squirtleVotes:n})=>{console.log(`Retrieved Charmander Votes: ${e}`),console.log(`Retrieved Squirtle Votes: ${n}`);const r=new Di({color:"#ff0000"}),s=new Di({color:"#0000ff"}),o=new fe(new fr(1,e/12,1),r);ve.add(o);const a=new fe(new fr(1,n/12,1),s);ve.add(a),o.position.set(-1.3,e/(2*12),0),a.position.set(1.3,n/(2*12),0);const l=e>n?e:n,c=5,h=new fe(new lr(.8*c,1.15*c,12,12),e>n?Wx:qx);Jx(h,!1),h.position.y=l/12+4,ve.add(h),Dc.load("./3dfonts/optimer_bold.typeface.json",A=>{const M=(x,E,b,L)=>{const C=b?new Cx({uGlitterSize:{value:20},uGlitterDensity:{value:1.2}},{color:E}):new Di({color:E}),G=new Da(x,{font:A,size:L||.25,height:.03,depth:.03,curveSegments:12});return G.center(),new fe(G,C)};for(let x=1;x<=l;x++)if(x%25===0){const E=M(`-${x}-`,"grey",!1,.2);E.position.y=x/12,ve.add(E)}const R=M("Your President","gold",!0,.5);R.position.set(0,e/12+7.75,0),ve.add(R);const F=M("Scroll Up","purple",!0,.5);F.position.set(0,-2.5,0),ve.add(F);const D=M("For Results","purple",!0,.5);D.position.set(0,-3.25,0),ve.add(D);const S=M(`${(e/(e+n)*100).toFixed(1)}% (${e})`,"#ff0000");S.position.set(-1.3,e/12+.5,0),ve.add(S);const T=M(`${(n/(e+n)*100).toFixed(1)}% (${n})`,"#0000ff");T.position.set(1.3,n/12+.5,0),ve.add(T)});const d=new or(.1,.1,1.5,32),f=new Di({color:"purple"}),p=new fe(d,f);p.position.y=1;const y=new Mu(.3,.8,32),_=new Di({color:"purple"}),m=new fe(y,_);m.position.y=2;const g=new Ei;g.position.y=-2,g.add(p),g.add(m),ve.add(g)})}function MN(){const i=new fe(new lr(12,12,30,30),new bi({color:16777200,map:Ux}));ve.add(i),Dc.load("./3dfonts/helvetiker_bold.typeface.json",o=>{const a={uGlitterSize:{value:20},uGlitterDensity:{value:1.2}},l=new Cx(a,{color:"#643b9f"});ps=new Ei,ve.add(ps);const c="PICK YOUR",h="PRESIDENT";c.split("").forEach((d,f)=>{const p=new Da(d,{font:o,size:.5,depth:.02,curveSegments:8});p.center();const y=new fe(p,l);y.position.x=c[f-1]==="I"?f*.42:f*.5,y.position.x+=.25,y.rotation.z=(Math.random()-.5)*Math.PI/16,ps.add(y)}),h.split("").forEach((d,f)=>{const p=new Da(d,{font:o,size:.5,depth:.02,curveSegments:12});p.center();const y=new fe(p,l);y.position.x=h[f-1]==="I"?f*.49:f*.51,y.position.x+=.25,y.position.y=-1.25,y.rotation.z=(Math.random()-.5)*Math.PI/16,ps.add(y)}),ps.position.y=3.5,ps.position.x=-2.25}),Mr=new Ei,ve.add(Mr);const t=new fe(new ap(.25,1.5,3,2),new Di({color:"#000"}));t.rotation.z=Math.PI/2,t.position.y=1;const e=new fe(new fr(3,2,1),new bi({map:Fx,aoMap:gN,displacementMap:_N,displacementScale:.3,displacementBias:-.15}));Mr.add(t,e),Dc.load("./3dfonts/optimer_bold.typeface.json",o=>{const a=new bi({color:"#B87333",metalness:1,roughness:.25}),l=new Da("VOTE",{font:o,size:.5,depth:.02,curveSegments:8});l.center();const c=new fe(l,a);c.position.z=.501,Mr.add(c),Px=c});function n(o,a,l){Dc.load("./3dfonts/optimer_bold.typeface.json",c=>{const h=new Ei,d=new fe(new lp(1*l,10),new bi({transparent:!0,alphaMap:SN,map:zx,metalness:.6,roughness:.3})),f=new fe(new Da(o,{font:c,size:.6*l,height:.01,curveSegments:8}),new bi({color:"#000",metalness:1,roughness:.25}));f.geometry.center(),o==="1"&&(f.position.x+=-.05),f.position.z=.01,h.add(d,f),h.rotation.z=Math.PI/24,ve.add(h),h.position.copy(a)})}n("1",new k(-1.85,4.4,.1),.8),n("2",new k(-.75,-2.15,1.51),.425);const r=new fe(new fr(10,.3,2),new bi({map:vN,aoMap:Uh,roughnessMap:Uh,metalnessMap:Uh,normalMap:yN}));ve.add(r),Si=new fe(new lr(.8*fs,1.15*fs,12,12),Wx),Ss=new fe(new lr(.8*fs,1.15*fs,12,12),qx),ve.add(Ss),ve.add(Si);function s(o){const a=new Ei,l=new Di({color:8421504}),c=new Mu(.1*ln,.2*ln,16),h=new fe(c,l);h.position.y=-.75*ln,h.rotation.z=Math.PI,a.add(h);const d=new or(.1*ln,.1*ln,.8*ln,16),f=new fe(d,l);f.position.y=-.25*ln,a.add(f);const p=new bi({color:o,metalness:.4,roughness:.3}),y=new fe(new or(.2*ln,.5*ln,.1*ln,16),p);y.position.y=0,a.add(y);const _=new fe(new or(.2*ln,.2*ln,.6*ln,16),p);_.position.y=.3*ln,a.add(_);const m=new fe(new or(.4*ln,.2*ln,.1*ln,16),p);return m.position.y=.6*ln,a.add(m),a}Ts=s(16711680),ve.add(Ts),Co=s(255),ve.add(Co),Co.rotation.set(Math.PI/2,Math.random()*-.6,Math.random()*-.3),Co.position.set(Pr+.05,1.15*fs*.5-.09,.1),Ts.rotation.set(Math.PI/2,Math.random()*.6,Math.random()*.3),Ts.position.set(-Pr,1.15*fs*.5-.1,.1),Si.position.x=0-Pr,Ss.position.x=0+Pr,Si.position.z=.025,Ss.position.z=.025,Mr.position.y=-2.75,Mr.position.z=1,r.position.y=-3.75,r.position.z=1}function AN(i){const t=new Ei;ve.add(t);const e=new or(.3,.3,.05,32,5),n=new T2({map:i===di.CHARMANDER?Hx:Gx,clearcoat:.6,metalness:.4,roughness:.25,clearcoatRoughness:.2}),r=new fe(e,n);r.position.z=1.5,r.rotation.z=Math.PI/2,r.rotation.y=Math.PI/2,t.add(r);const s=new up("#fff",.25);s.position.set(-.5,0,2),ve.add(s),t.position.y=-.1,t.position.z=4;const o=new aa().setFromObject(t),a=new fe(new lr(10,4,2,2),new Di({color:i===di.CHARMANDER?"#F8C8DC":"#A7C7E7"})),l=new k(o.x,o.y,(o.min.z+o.max.z)/2);t.position.sub(l);const c=new Ei;return c.add(t),c.position.add(l),c.position.y=12,r.position.z=1.75,ve.add(c),c.add(a),c}const Ii={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{Ii.width=window.innerWidth,Ii.height=window.innerHeight,Mi.aspect=Ii.width/Ii.height,Mi.updateProjectionMatrix(),ea.setSize(Ii.width,Ii.height),ea.setPixelRatio(Math.min(window.devicePixelRatio,2))});const Mi=new si(75,Ii.width/Ii.height,.1,15);Mi.position.z=7;ve.add(Mi);const Ze=new pN(Mi,Lx);function $x(){Ze.enableRotate=!0,Ze.enablePan=!1,Ze.maxAzimuthAngle=Math.PI/8,Ze.minAzimuthAngle=-Math.PI/8,Ze.minPolarAngle=Math.PI/2+-Math.PI/8,Ze.maxPolarAngle=Math.PI/2+Math.PI/8,Ze.maxDistance=7,Ze.minDistance=4}function bN(){Ze.enableRotate=!1,Ze.maxDistance=7,Ze.minDistance=6}$x();const ea=new GD({canvas:Lx});ea.setSize(Ii.width,Ii.height);ea.setPixelRatio(Math.min(window.devicePixelRatio,2));ea.shadowMap.enabled=!0;const RN=new N2,Xx=()=>{RN.getElapsedTime(),Dx||Ze.update(),ea.render(ve,Mi),window.requestAnimationFrame(Xx)};function V_(i){const t=DN(i);if(zi==t){$x(),UN(i===Si?Ts:Co),NN(i),zi=di.NONE,Yx();return}bN(),jx(),zi=t,ON(i===Si?Ts:Co),LN(i)}async function CN(){try{return Yx(),FN(Fh()),(await xb(Dv(qv,"votes"),{vote:zi})).id?IN(zi):setTimeout(()=>k_(Fh()),500)}catch(i){setTimeout(()=>k_(Fh()),500),jx(),console.error("Error casting vote:",i)}}function IN(i){document.cookie=`vote=${i}; path=/; max-age=31536000`,Kx(i)}function jx(){Pc&&clearInterval(Pc),Pc=setInterval(()=>{Zx(Px,3)},5e3)}function Yx(){clearInterval(Pc)}function PN(){ps.children.forEach((i,t)=>{setTimeout(()=>{Zx(i)},t*50)})}function Kx(i,t=!0){Ix=!0,Ze.enabled=!1,U_=AN(i),Jx(U_,t),document.getElementById("hud-top").classList.add("animate-down"),document.getElementById("hud-bottom").classList.add("animate-up"),document.getElementById("voting").classList.add(i===di.CHARMANDER?"red":"blue")}function DN(i){return i==Si?di.CHARMANDER:di.SQUIRTLE}function Fh(){return zi===di.CHARMANDER?Si:Ss}function Qx(i){var e,n;i.type==="touchend"?(ba.x=i.changedTouches[0].clientX/window.innerWidth*2-1,ba.y=-(i.changedTouches[0].clientY/window.innerHeight)*2+1):(ba.x=i.clientX/window.innerWidth*2-1,ba.y=-(i.clientY/window.innerHeight)*2+1),F_.setFromCamera(ba,Mi);const t=F_.intersectObjects(ve.children);t.length>0&&(Ix||(t[0].object==Si?V_(Si):t[0].object==Ss?V_(Ss):((e=t[0].object)==null?void 0:e.parent)==Mr&&zi==di.NONE?PN():((n=t[0].object)==null?void 0:n.parent)==Mr&&zi!=di.NONE&&CN()))}function LN(i){Oa=new k(i===Si?-Pr:Pr,0,.025),Ge.to(i.position,{delay:.2,duration:We.easeDuration,x:0,y:We.posterSelectionHeight,z:We.posterSelectionZ,ease:We.resetEase})}function NN(i){Ge.to(i.position,{duration:We.easeDuration+.2,x:Oa.x,y:Oa.y,z:Oa.z,ease:We.resetEase}),Oa=void 0}function ON(i){Ro=new k(i===Ts?-Pr:Pr+.05,1.15*fs*.5-.09,.1),Ge.to(i.rotation,{duration:.2,x:Math.PI/4}),Ge.to(i.rotation,{delay:.1,duration:.2,x:Math.PI/2}),Ge.to(i.position,{duration:.3,y:i.position.y+.5,z:i.position.z+.3,ease:"power1.out"}),Ge.to(i.position,{delay:.15,duration:.2,z:Ro.z,ease:"power1.out"})}function UN(i){Ge.to(i.position,{duration:.2,z:i.position.z+.3,ease:"power1.in"}),Ge.to(i.rotation,{duration:.2,x:Math.PI/4}),Ge.to(i.position,{delay:.2,duration:.3,x:Ro.x,y:Ro.y,z:Ro.z,ease:"power1.out"}),Ge.to(i.rotation,{delay:.2,duration:.3,x:Math.PI/2,y:Math.random()*-.6,z:Math.random()*-.3}),Ro=void 0}function FN(i){Ge.to(i.position,{duration:.5,z:1,ease:"power1.out"}),Ge.to(i.position,{delay:.3,duration:.5,y:-6,ease:"power1.out"}),Ge.to(i.material,{delay:.4,duration:.1,opacity:0,ease:"power1.out"})}function k_(i){Ge.to(i.material,{duration:.2,opacity:1,ease:"power1.in"}),Ge.to(i.position,{duration:.3,y:We.posterSelectionHeight,ease:"power1.out"}),Ge.to(i.position,{delay:.3,duration:.5,z:We.posterSelectionZ,ease:"power1.out"})}function Jx(i,t){t?Ge.to(i.position,{duration:1.5,y:0,ease:"power4.out"}):i.position.y=0,Ge.timeline({repeat:-1}).to(i.rotation,{duration:4,y:Math.PI/12,ease:"power2.inOut"}).to(i.rotation,{duration:4,y:-Math.PI/12,ease:"power2.inOut"}).to(i.rotation,{duration:2,y:0,ease:"power2.inOut"}).to(i.rotation,{duration:2,y:0,ease:"power2.inOut"})}function Zx(i,t=0){let e=Ge.timeline({yoyo:!0});return e.to(i.scale,{x:1.1,y:1.1,z:1.1,duration:.2,delay:t,ease:"power1.inOut"}),e.to(i.rotation,{z:"+=0.1",duration:.1,ease:"power1.inOut",yoyo:!0,repeat:3}),e.to(i.scale,{x:1,y:1,z:1,duration:.2,ease:"power1.inOut"}),e}function VN(){Ge.to(Ze.object.rotation,{duration:We.easeDuration,x:0,y:0,z:0,ease:We.resetEase}),Ge.to(Ze.object.position,{duration:We.easeDuration,x:Ze.position0.x,y:Ze.position0.y,z:Ze.position0.z,ease:We.resetEase})}const We={};We.resetEase="elastic.out(1,2)";We.easeDuration=.3;We.spawnDistance=16;We.posterSelectionHeight=.75;We.posterSelectionZ=4;We.buttonSize=.3;bl.add(We,"posterSelectionHeight");bl.add(We,"posterSelectionZ");bl.add(We,"resetEase");bl.add(We,"easeDuration");function B_(i){const t=document.cookie.split(";");for(let e of t)if(e=e.trim(),e.startsWith(i+"="))return e.substring(i.length+1);return null}function kN(i){Du=Date.now(),Iu=i.touches[0].clientX,Pu=i.touches[0].clientY}function BN(i){const t=i.changedTouches[0].clientX,e=i.changedTouches[0].clientY,n=t-Iu,r=e-Pu,s=Date.now()-Du,o=Math.sqrt(n*n+r*r);(s<300||o<2||zi!=di.NONE&&o>50)&&Qx(i)}function zN(i){Du=Date.now(),Iu=i.clientX,Pu=i.clientY}function HN(i){const t=i.clientX,e=i.clientY,n=t-Iu,r=e-Pu,s=Math.sqrt(n*n+r*r);(Date.now()-Du<300||s<2||zi!=di.NONE)&&Qx(i)}let rf=null,Cp=!1;function GN(i){rf=i.clientY,Cp=!0}function WN(i){if(Cp){const t=i.clientY,e=t-rf;Mi.position.y+=e*.03,rf=t}}function qN(i){Cp=!1}let ja=null;function $N(i){ja=i.touches[0].clientY}function XN(i){if(ja!==null){const t=i.touches[0].clientY,e=t-ja;Mi.position.y+=e*.03,ja=t}}function jN(i){ja=null}new Date(new Date().toLocaleString("en-US",{timeZone:"America/New_York"}))>new Date("11/5/2024, 8:00:00 PM")?(wN(),Dx=!0,Ze.dispose(),window.addEventListener("touchstart",$N,!1),window.addEventListener("touchmove",XN,!1),window.addEventListener("touchend",jN,!1),window.addEventListener("mousedown",GN,!1),window.addEventListener("mousemove",WN,!1),window.addEventListener("mouseup",qN,!1),window.addEventListener("scroll",i=>{Mi.position.y=5+window.scrollY*.03}),window.addEventListener("wheel",i=>{Mi.position.y+=i.deltaY*.03})):B_("vote")?Kx(B_("vote"),!1):(/Mobi|Android/i.test(navigator.userAgent)?(window.addEventListener("touchstart",kN,!1),window.addEventListener("touchend",BN,!1)):(window.addEventListener("mousedown",zN,!1),window.addEventListener("mouseup",HN,!1)),MN(),Ze.addEventListener("end",()=>VN()));Xx();
//# sourceMappingURL=index-Bppo9s9E.js.map
