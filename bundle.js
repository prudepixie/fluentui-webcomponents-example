(()=>{"use strict";var e={};function t(e,t,s,r){var o,i=arguments.length,n=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(i<3?o(n):i>3?o(t,s,n):o(t,s))||n);return i>3&&n&&Object.defineProperty(t,s,n),n}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),Object.create,Object.create;const s=function(){if("undefined"!=typeof globalThis)return globalThis;if(void 0!==e.g)return e.g;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(e){return{}}}();void 0===s.trustedTypes&&(s.trustedTypes={createPolicy:(e,t)=>t});const r={configurable:!1,enumerable:!1,writable:!1};void 0===s.FAST&&Reflect.defineProperty(s,"FAST",Object.assign({value:Object.create(null)},r));const o=s.FAST;if(void 0===o.getById){const e=Object.create(null);Reflect.defineProperty(o,"getById",Object.assign({value(t,s){let r=e[t];return void 0===r&&(r=s?e[t]=s():null),r}},r))}const i=Object.freeze([]),n=s.FAST.getById(1,(()=>{const e=[],t=[];function r(){if(t.length)throw t.shift()}function o(e){try{e.call()}catch(e){t.push(e),setTimeout(r,0)}}function i(){let t=0;for(;t<e.length;)if(o(e[t]),t++,t>1024){for(let s=0,r=e.length-t;s<r;s++)e[s]=e[s+t];e.length-=t,t=0}e.length=0}return Object.freeze({enqueue:function(t){e.length<1&&s.requestAnimationFrame(i),e.push(t)},process:i})})),a=s.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let l=a;const c=`fast-${Math.random().toString(36).substring(2,8)}`,h=`${c}{`,d=`}${c}`,u=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(l!==a)throw new Error("The HTML policy can only be set once.");l=e},createHTML:e=>l.createHTML(e),isMarker:e=>e&&8===e.nodeType&&e.data.startsWith(c),extractDirectiveIndexFromMarker:e=>parseInt(e.data.replace(`${c}:`,"")),createInterpolationPlaceholder:e=>`${h}${e}${d}`,createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder:e=>`\x3c!--${c}:${e}--\x3e`,queueUpdate:n.enqueue,processUpdates:n.process,nextUpdate:()=>new Promise(n.enqueue),setAttribute(e,t,s){null==s?e.removeAttribute(t):e.setAttribute(t,s)},setBooleanAttribute(e,t,s){s?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;null!==t;t=e.firstChild)e.removeChild(t)},createTemplateWalker:e=>document.createTreeWalker(e,133,null,!1)});function p(e){const t=this.spillover;-1===t.indexOf(e)&&t.push(e)}function f(e){const t=this.spillover,s=t.indexOf(e);-1!==s&&t.splice(s,1)}function g(e){const t=this.spillover,s=this.source;for(let r=0,o=t.length;r<o;++r)t[r].handleChange(s,e)}function b(e){return-1!==this.spillover.indexOf(e)}class m{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return this.sub1===e||this.sub2===e}subscribe(e){this.has(e)||(void 0!==this.sub1?void 0!==this.sub2?(this.spillover=[this.sub1,this.sub2,e],this.subscribe=p,this.unsubscribe=f,this.notify=g,this.has=b,this.sub1=void 0,this.sub2=void 0):this.sub2=e:this.sub1=e)}unsubscribe(e){this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0)}notify(e){const t=this.sub1,s=this.sub2,r=this.source;void 0!==t&&t.handleChange(r,e),void 0!==s&&s.handleChange(r,e)}}class v{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const s=this.subscribers[e];void 0!==s&&s.notify(e),null===(t=this.sourceSubscribers)||void 0===t||t.notify(e)}subscribe(e,t){var s;if(t){let s=this.subscribers[t];void 0===s&&(this.subscribers[t]=s=new m(this.source)),s.subscribe(e)}else this.sourceSubscribers=null!==(s=this.sourceSubscribers)&&void 0!==s?s:new m(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var s;if(t){const s=this.subscribers[t];void 0!==s&&s.unsubscribe(e)}else null===(s=this.sourceSubscribers)||void 0===s||s.unsubscribe(e)}}const y=o.getById(2,(()=>{const e=/(:|&&|\|\||if)/,t=new WeakMap,s=new WeakMap,r=u.queueUpdate;let o,i=e=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function n(e){let s=e.$fastController||t.get(e);return void 0===s&&(Array.isArray(e)?s=i(e):t.set(e,s=new v(e))),s}function a(e){let t=s.get(e);if(void 0===t){let r=Reflect.getPrototypeOf(e);for(;void 0===t&&null!==r;)t=s.get(r),r=Reflect.getPrototypeOf(r);t=void 0===t?[]:t.slice(0),s.set(e,t)}return t}class l{constructor(e){this.name=e,this.field=`_${e}`,this.callback=`${e}Changed`}getValue(e){return void 0!==o&&o.watch(e,this.name),e[this.field]}setValue(e,t){const s=this.field,r=e[s];if(r!==t){e[s]=t;const o=e[this.callback];"function"==typeof o&&o.call(e,r,t),n(e).notify(this.name)}}}class c extends m{constructor(e,t,s=!1){super(e,t),this.binding=e,this.isVolatileBinding=s,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(e,t){this.needsRefresh&&null!==this.last&&this.disconnect();const s=o;o=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const r=this.binding(e,t);return o=s,r}disconnect(){if(null!==this.last){let e=this.first;for(;void 0!==e;)e.notifier.unsubscribe(this,e.propertyName),e=e.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(e,t){const s=this.last,r=n(e),i=null===s?this.first:{};if(i.propertySource=e,i.propertyName=t,i.notifier=r,r.subscribe(this,t),null!==s){if(!this.needsRefresh){let t;o=void 0,t=s.propertySource[s.propertyName],o=this,e===t&&(this.needsRefresh=!0)}s.next=i}this.last=i}handleChange(){this.needsQueue&&(this.needsQueue=!1,r(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let e=this.first;return{next:()=>{const t=e;return void 0===t?{value:void 0,done:!0}:(e=e.next,{value:t,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(e){i=e},getNotifier:n,track(e,t){void 0!==o&&o.watch(e,t)},trackVolatile(){void 0!==o&&(o.needsRefresh=!0)},notify(e,t){n(e).notify(t)},defineProperty(e,t){"string"==typeof t&&(t=new l(t)),a(e).push(t),Reflect.defineProperty(e,t.name,{enumerable:!0,get:function(){return t.getValue(this)},set:function(e){t.setValue(this,e)}})},getAccessors:a,binding(e,t,s=this.isVolatileBinding(e)){return new c(e,t,s)},isVolatileBinding:t=>e.test(t.toString())})}));function w(e,t){y.defineProperty(e,t)}const x=o.getById(3,(()=>{let e=null;return{get:()=>e,set(t){e=t}}}));class C{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return x.get()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){x.set(e)}}y.defineProperty(C.prototype,"index"),y.defineProperty(C.prototype,"length");const $=Object.seal(new C);class k{constructor(){this.targets=new WeakSet,this.behaviors=null}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=null===this.behaviors?e:this.behaviors.concat(e),this}}function S(e){return e.map((e=>e instanceof k?S(e.styles):[e])).reduce(((e,t)=>e.concat(t)),[])}function O(e){return e.map((e=>e instanceof k?e.behaviors:null)).reduce(((e,t)=>null===t?e:(null===e&&(e=[]),e.concat(t))),null)}k.create=(()=>{if(u.supportsAdoptedStyleSheets){const e=new Map;return t=>new R(t,e)}return e=>new P(e)})();class R extends k{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=O(e)}get styleSheets(){if(void 0===this._styleSheets){const e=this.styles,t=this.styleSheetCache;this._styleSheets=S(e).map((e=>{if(e instanceof CSSStyleSheet)return e;let s=t.get(e);return void 0===s&&(s=new CSSStyleSheet,s.replaceSync(e),t.set(e,s)),s}))}return this._styleSheets}addStylesTo(e){e.adoptedStyleSheets=[...e.adoptedStyleSheets,...this.styleSheets],super.addStylesTo(e)}removeStylesFrom(e){const t=this.styleSheets;e.adoptedStyleSheets=e.adoptedStyleSheets.filter((e=>-1===t.indexOf(e))),super.removeStylesFrom(e)}}let T=0;class P extends k{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=O(e),this.styleSheets=S(e),this.styleClass="fast-style-class-"+ ++T}addStylesTo(e){const t=this.styleSheets,s=this.styleClass;e=this.normalizeTarget(e);for(let r=0;r<t.length;r++){const o=document.createElement("style");o.innerHTML=t[r],o.className=s,e.append(o)}super.addStylesTo(e)}removeStylesFrom(e){const t=(e=this.normalizeTarget(e)).querySelectorAll(`.${this.styleClass}`);for(let s=0,r=t.length;s<r;++s)e.removeChild(t[s]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const B={toView:e=>e?"true":"false",fromView:e=>null!=e&&"false"!==e&&!1!==e&&0!==e};class N{constructor(e,t,s=t.toLowerCase(),r="reflect",o){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=s,this.mode=r,this.converter=o,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,"boolean"===r&&void 0===o&&(this.converter=B)}setValue(e,t){const s=e[this.fieldName],r=this.converter;void 0!==r&&(t=r.fromView(t)),s!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](s,t),e.$fastController.notify(this.name))}getValue(e){return y.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,s=this.guards;s.has(e)||"fromView"===t||u.queueUpdate((()=>{s.add(e);const r=e[this.fieldName];switch(t){case"reflect":const t=this.converter;u.setAttribute(e,this.attribute,void 0!==t?t.toView(r):r);break;case"boolean":u.setBooleanAttribute(e,this.attribute,r)}s.delete(e)}))}static collect(e,...t){const s=[];t.push(e.attributes);for(let r=0,o=t.length;r<o;++r){const o=t[r];if(void 0!==o)for(let t=0,r=o.length;t<r;++t){const r=o[t];"string"==typeof r?s.push(new N(e,r)):s.push(new N(e,r.property,r.attribute,r.mode,r.converter))}}return s}}function E(e,t){let s;function r(e,t){arguments.length>1&&(s.property=t);const r=e.constructor.attributes||(e.constructor.attributes=[]);r.push(s)}return arguments.length>1?(s={},void r(e,t)):(s=void 0===e?{}:e,r)}const F={mode:"open"},A={},I=o.getById(4,(()=>{const e=new Map;return Object.freeze({register:t=>!e.has(t.type)&&(e.set(t.type,t),!0),getByType:t=>e.get(t)})}));class V{constructor(e,t=e.definition){"string"==typeof t&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const s=N.collect(e,t.attributes),r=new Array(s.length),o={},i={};for(let e=0,t=s.length;e<t;++e){const t=s[e];r[e]=t.attribute,o[t.name]=t,i[t.attribute]=t}this.attributes=s,this.observedAttributes=r,this.propertyLookup=o,this.attributeLookup=i,this.shadowOptions=void 0===t.shadowOptions?F:null===t.shadowOptions?void 0:Object.assign(Object.assign({},F),t.shadowOptions),this.elementOptions=void 0===t.elementOptions?A:Object.assign(Object.assign({},A),t.elementOptions),this.styles=void 0===t.styles?void 0:Array.isArray(t.styles)?k.create(t.styles):t.styles instanceof k?t.styles:k.create([t.styles])}get isDefined(){return!!I.getByType(this.type)}define(e=customElements){const t=this.type;if(I.register(this)){const e=this.attributes,s=t.prototype;for(let t=0,r=e.length;t<r;++t)y.defineProperty(s,e[t]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}}V.forType=I.getByType;const z=new WeakMap,M={bubbles:!0,composed:!0,cancelable:!0};function D(e){return e.shadowRoot||z.get(e)||null}class L extends v{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const s=t.shadowOptions;if(void 0!==s){const t=e.attachShadow(s);"closed"===s.mode&&z.set(e,t)}const r=y.getAccessors(e);if(r.length>0){const t=this.boundObservables=Object.create(null);for(let s=0,o=r.length;s<o;++s){const o=r[s].name,i=e[o];void 0!==i&&(delete e[o],t[o]=i)}}}get isConnected(){return y.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,y.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=e,this.needsInitialization||null===e||this.addStyles(e))}addStyles(e){const t=D(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const s=e.behaviors;e.addStylesTo(t),null!==s&&this.addBehaviors(s)}}removeStyles(e){const t=D(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const s=e.behaviors;e.removeStylesFrom(t),null!==s&&this.removeBehaviors(s)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),s=e.length,r=[];for(let o=0;o<s;++o){const s=e[o];t.has(s)?t.set(s,t.get(s)+1):(t.set(s,1),r.push(s))}if(this._isConnected){const e=this.element;for(let t=0;t<r.length;++t)r[t].bind(e,$)}}removeBehaviors(e,t=!1){const s=this.behaviors;if(null===s)return;const r=e.length,o=[];for(let i=0;i<r;++i){const r=e[i];if(s.has(r)){const e=s.get(r)-1;0===e||t?s.delete(r)&&o.push(r):s.set(r,e)}}if(this._isConnected){const e=this.element;for(let t=0;t<o.length;++t)o[t].unbind(e)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(e,$);const t=this.behaviors;if(null!==t)for(const[s]of t)s.bind(e,$);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;null!==e&&e.unbind();const t=this.behaviors;if(null!==t){const e=this.element;for(const[s]of t)s.unbind(e)}}onAttributeChangedCallback(e,t,s){const r=this.definition.attributeLookup[e];void 0!==r&&r.onAttributeChangedCallback(this.element,s)}emit(e,t,s){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},M),s)))}finishInitialization(){const e=this.element,t=this.boundObservables;if(null!==t){const s=Object.keys(t);for(let r=0,o=s.length;r<o;++r){const o=s[r];e[o]=t[o]}this.boundObservables=null}const s=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():s.template&&(this._template=s.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():s.styles&&(this._styles=s.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,s=D(t)||t;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||u.removeChildNodes(s),e&&(this.view=e.render(t,s,t))}static forCustomElement(e){const t=e.$fastController;if(void 0!==t)return t;const s=V.forType(e.constructor);if(void 0===s)throw new Error("Missing FASTElement definition.");return e.$fastController=new L(e,s)}}function j(e){return class extends e{constructor(){super(),L.forCustomElement(this)}$emit(e,t,s){return this.$fastController.emit(e,t,s)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,s){this.$fastController.onAttributeChangedCallback(e,t,s)}}}const _=Object.assign(j(HTMLElement),{from:e=>j(e),define:(e,t)=>new V(e,t).define().type});function H(e){return function(t){new V(t,e).define()}}function q(e,t,s,r){var o,i=arguments.length,n=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,s,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(i<3?o(n):i>3?o(t,s,n):o(t,s))||n);return i>3&&n&&Object.defineProperty(t,s,n),n}class U{}q([E({attribute:"aria-atomic",mode:"fromView"})],U.prototype,"ariaAtomic",void 0),q([E({attribute:"aria-busy",mode:"fromView"})],U.prototype,"ariaBusy",void 0),q([E({attribute:"aria-controls",mode:"fromView"})],U.prototype,"ariaControls",void 0),q([E({attribute:"aria-current",mode:"fromView"})],U.prototype,"ariaCurrent",void 0),q([E({attribute:"aria-describedby",mode:"fromView"})],U.prototype,"ariaDescribedby",void 0),q([E({attribute:"aria-details",mode:"fromView"})],U.prototype,"ariaDetails",void 0),q([E({attribute:"aria-disabled",mode:"fromView"})],U.prototype,"ariaDisabled",void 0),q([E({attribute:"aria-errormessage",mode:"fromView"})],U.prototype,"ariaErrormessage",void 0),q([E({attribute:"aria-flowto",mode:"fromView"})],U.prototype,"ariaFlowto",void 0),q([E({attribute:"aria-haspopup",mode:"fromView"})],U.prototype,"ariaHaspopup",void 0),q([E({attribute:"aria-hidden",mode:"fromView"})],U.prototype,"ariaHidden",void 0),q([E({attribute:"aria-invalid",mode:"fromView"})],U.prototype,"ariaInvalid",void 0),q([E({attribute:"aria-keyshortcuts",mode:"fromView"})],U.prototype,"ariaKeyshortcuts",void 0),q([E({attribute:"aria-label",mode:"fromView"})],U.prototype,"ariaLabel",void 0),q([E({attribute:"aria-labelledby",mode:"fromView"})],U.prototype,"ariaLabelledby",void 0),q([E({attribute:"aria-live",mode:"fromView"})],U.prototype,"ariaLive",void 0),q([E({attribute:"aria-owns",mode:"fromView"})],U.prototype,"ariaOwns",void 0),q([E({attribute:"aria-relevant",mode:"fromView"})],U.prototype,"ariaRelevant",void 0),q([E({attribute:"aria-roledescription",mode:"fromView"})],U.prototype,"ariaRoledescription",void 0);class W{constructor(){this.targetIndex=0}}class K extends W{constructor(){super(...arguments),this.createPlaceholder=u.createInterpolationPlaceholder}}class Q extends W{constructor(e,t,s){super(),this.name=e,this.behavior=t,this.options=s}createPlaceholder(e){return u.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function G(e,t){this.source=e,this.context=t,null===this.bindingObserver&&(this.bindingObserver=y.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function J(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function X(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function Y(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function Z(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function ee(e){u.setAttribute(this.target,this.targetName,e)}function te(e){u.setBooleanAttribute(this.target,this.targetName,e)}function se(e){if(null==e&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;void 0===t?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function re(e){this.target[this.targetName]=e}function oe(e){const t=this.classVersions||Object.create(null),s=this.target;let r=this.version||0;if(null!=e&&e.length){const o=e.split(/\s+/);for(let e=0,i=o.length;e<i;++e){const i=o[e];""!==i&&(t[i]=r,s.classList.add(i))}}if(this.classVersions=t,this.version=r+1,0!==r){r-=1;for(const e in t)t[e]===r&&s.classList.remove(e)}}class ie extends K{constructor(e){super(),this.binding=e,this.bind=G,this.unbind=X,this.updateTarget=ee,this.isBindingVolatile=y.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,void 0!==e)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=re,"innerHTML"===this.cleanedTargetName){const e=this.binding;this.binding=(t,s)=>u.createHTML(e(t,s))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=te;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=J,this.unbind=Z;break;default:this.cleanedTargetName=e,"class"===e&&(this.updateTarget=oe)}}targetAtContent(){this.updateTarget=se,this.unbind=Y}createBehavior(e){return new ne(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class ne{constructor(e,t,s,r,o,i,n){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=s,this.bind=r,this.unbind=o,this.updateTarget=i,this.targetName=n}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){C.setEvent(e);const t=this.binding(this.source,this.context);C.setEvent(null),!0!==t&&e.preventDefault()}}let ae=null;class le{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){ae=this}static borrow(e){const t=ae||new le;return t.directives=e,t.reset(),ae=null,t}}function ce(e){if(1===e.length)return e[0];let t;const s=e.length,r=e.map((e=>"string"==typeof e?()=>e:(t=e.targetName||t,e.binding))),o=new ie(((e,t)=>{let o="";for(let i=0;i<s;++i)o+=r[i](e,t);return o}));return o.targetName=t,o}const he=d.length;function de(e,t){const s=t.split(h);if(1===s.length)return null;const r=[];for(let t=0,o=s.length;t<o;++t){const o=s[t],i=o.indexOf(d);let n;if(-1===i)n=o;else{const t=parseInt(o.substring(0,i));r.push(e.directives[t]),n=o.substring(i+he)}""!==n&&r.push(n)}return r}function ue(e,t,s=!1){const r=t.attributes;for(let o=0,i=r.length;o<i;++o){const n=r[o],a=n.value,l=de(e,a);let c=null;null===l?s&&(c=new ie((()=>a)),c.targetName=n.name):c=ce(l),null!==c&&(t.removeAttributeNode(n),o--,i--,e.addFactory(c))}}function pe(e,t,s){const r=de(e,t.textContent);if(null!==r){let o=t;for(let i=0,n=r.length;i<n;++i){const n=r[i],a=0===i?t:o.parentNode.insertBefore(document.createTextNode(""),o.nextSibling);"string"==typeof n?a.textContent=n:(a.textContent=" ",e.captureContentBinding(n)),o=a,e.targetIndex++,a!==t&&s.nextNode()}e.targetIndex--}}const fe=document.createRange();class ge{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=e.parentNode,s=this.lastChild;let r,o=this.firstChild;for(;o!==s;)r=o.nextSibling,t.insertBefore(o,e),o=r;t.insertBefore(s,e)}}remove(){const e=this.fragment,t=this.lastChild;let s,r=this.firstChild;for(;r!==t;)s=r.nextSibling,e.appendChild(r),r=s;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let s,r=this.firstChild;for(;r!==t;)s=r.nextSibling,e.removeChild(r),r=s;e.removeChild(t);const o=this.behaviors,i=this.source;for(let e=0,t=o.length;e<t;++e)o[e].unbind(i)}bind(e,t){const s=this.behaviors;if(this.source!==e)if(null!==this.source){const r=this.source;this.source=e,this.context=t;for(let o=0,i=s.length;o<i;++o){const i=s[o];i.unbind(r),i.bind(e,t)}}else{this.source=e,this.context=t;for(let r=0,o=s.length;r<o;++r)s[r].bind(e,t)}}unbind(){if(null===this.source)return;const e=this.behaviors,t=this.source;for(let s=0,r=e.length;s<r;++s)e[s].unbind(t);this.source=null}static disposeContiguousBatch(e){if(0!==e.length){fe.setStartBefore(e[0].firstChild),fe.setEndAfter(e[e.length-1].lastChild),fe.deleteContents();for(let t=0,s=e.length;t<s;++t){const s=e[t],r=s.behaviors,o=s.source;for(let e=0,t=r.length;e<t;++e)r[e].unbind(o)}}}}class be{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(null===this.fragment){let e;const t=this.html;if("string"==typeof t){e=document.createElement("template"),e.innerHTML=u.createHTML(t);const s=e.content.firstElementChild;null!==s&&"TEMPLATE"===s.tagName&&(e=s)}else e=t;const s=function(e,t){const s=e.content;document.adoptNode(s);const r=le.borrow(t);ue(r,e,!0);const o=r.behaviorFactories;r.reset();const i=u.createTemplateWalker(s);let n;for(;n=i.nextNode();)switch(r.targetIndex++,n.nodeType){case 1:ue(r,n);break;case 3:pe(r,n,i);break;case 8:u.isMarker(n)&&r.addFactory(t[u.extractDirectiveIndexFromMarker(n)])}let a=0;(u.isMarker(s.firstChild)||1===s.childNodes.length&&t.length)&&(s.insertBefore(document.createComment(""),s.firstChild),a=-1);const l=r.behaviorFactories;return r.release(),{fragment:s,viewBehaviorFactories:l,hostBehaviorFactories:o,targetOffset:a}}(e,this.directives);this.fragment=s.fragment,this.viewBehaviorFactories=s.viewBehaviorFactories,this.hostBehaviorFactories=s.hostBehaviorFactories,this.targetOffset=s.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),s=this.viewBehaviorFactories,r=new Array(this.behaviorCount),o=u.createTemplateWalker(t);let i=0,n=this.targetOffset,a=o.nextNode();for(let e=s.length;i<e;++i){const e=s[i],t=e.targetIndex;for(;null!==a;){if(n===t){r[i]=e.createBehavior(a);break}a=o.nextNode(),n++}}if(this.hasHostBehaviors){const t=this.hostBehaviorFactories;for(let s=0,o=t.length;s<o;++s,++i)r[i]=t[s].createBehavior(e)}return new ge(t,r)}render(e,t,s){"string"==typeof t&&(t=document.getElementById(t)),void 0===s&&(s=t);const r=this.create(s);return r.bind(e,$),r.appendTo(t),r}}const me=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function ve(e,...t){const s=[];let r="";for(let o=0,i=e.length-1;o<i;++o){const i=e[o];let n=t[o];if(r+=i,n instanceof be){const e=n;n=()=>e}if("function"==typeof n&&(n=new ie(n)),n instanceof K){const e=me.exec(i);null!==e&&(n.targetName=e[2])}n instanceof W?(r+=n.createPlaceholder(s.length),s.push(n)):r+=n}return r+=e[e.length-1],new be(r,s)}class ye{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}function we(e){return new Q("fast-ref",ye,e)}class xe{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}function Ce(e,...t){t.forEach((t=>{if(Object.getOwnPropertyNames(t.prototype).forEach((s=>{"constructor"!==s&&Object.defineProperty(e.prototype,s,Object.getOwnPropertyDescriptor(t.prototype,s))})),t.attributes){const s=e.attributes||[];e.attributes=s.concat(t.attributes)}}))}var $e;ve`
    <span part="end" ${we("endContainer")}>
        <slot
            name="end"
            ${we("end")}
            @slotchange="${e=>e.handleEndContentChange()}"
        ></slot>
    </span>
`,ve`
    <span part="start" ${we("startContainer")}>
        <slot
            name="start"
            ${we("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        ></slot>
    </span>
`,function(e){e[e.alt=18]="alt",e[e.arrowDown=40]="arrowDown",e[e.arrowLeft=37]="arrowLeft",e[e.arrowRight=39]="arrowRight",e[e.arrowUp=38]="arrowUp",e[e.back=8]="back",e[e.backSlash=220]="backSlash",e[e.break=19]="break",e[e.capsLock=20]="capsLock",e[e.closeBracket=221]="closeBracket",e[e.colon=186]="colon",e[e.colon2=59]="colon2",e[e.comma=188]="comma",e[e.ctrl=17]="ctrl",e[e.delete=46]="delete",e[e.end=35]="end",e[e.enter=13]="enter",e[e.equals=187]="equals",e[e.equals2=61]="equals2",e[e.equals3=107]="equals3",e[e.escape=27]="escape",e[e.forwardSlash=191]="forwardSlash",e[e.function1=112]="function1",e[e.function10=121]="function10",e[e.function11=122]="function11",e[e.function12=123]="function12",e[e.function2=113]="function2",e[e.function3=114]="function3",e[e.function4=115]="function4",e[e.function5=116]="function5",e[e.function6=117]="function6",e[e.function7=118]="function7",e[e.function8=119]="function8",e[e.function9=120]="function9",e[e.home=36]="home",e[e.insert=45]="insert",e[e.menu=93]="menu",e[e.minus=189]="minus",e[e.minus2=109]="minus2",e[e.numLock=144]="numLock",e[e.numPad0=96]="numPad0",e[e.numPad1=97]="numPad1",e[e.numPad2=98]="numPad2",e[e.numPad3=99]="numPad3",e[e.numPad4=100]="numPad4",e[e.numPad5=101]="numPad5",e[e.numPad6=102]="numPad6",e[e.numPad7=103]="numPad7",e[e.numPad8=104]="numPad8",e[e.numPad9=105]="numPad9",e[e.numPadDivide=111]="numPadDivide",e[e.numPadDot=110]="numPadDot",e[e.numPadMinus=109]="numPadMinus",e[e.numPadMultiply=106]="numPadMultiply",e[e.numPadPlus=107]="numPadPlus",e[e.openBracket=219]="openBracket",e[e.pageDown=34]="pageDown",e[e.pageUp=33]="pageUp",e[e.period=190]="period",e[e.print=44]="print",e[e.quote=222]="quote",e[e.scrollLock=145]="scrollLock",e[e.shift=16]="shift",e[e.space=32]="space",e[e.tab=9]="tab",e[e.tilde=192]="tilde",e[e.windowsLeft=91]="windowsLeft",e[e.windowsOpera=219]="windowsOpera",e[e.windowsRight=92]="windowsRight"}($e||($e={}));const ke="form-associated-proxy",Se="ElementInternals"in window&&"setFormValue"in window.ElementInternals.prototype,Oe=new Map;const Re=new Map;"metadata"in Reflect||(Reflect.metadata=function(e,t){return function(s){Reflect.defineMetadata(e,t,s)}},Reflect.defineMetadata=function(e,t,s){let r=Re.get(s);void 0===r&&Re.set(s,r=new Map),r.set(e,t)},Reflect.getOwnMetadata=function(e,t){const s=Re.get(t);if(void 0!==s)return s.get(e)});class Te{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,Ze(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){const{container:s,key:r}=this;return this.container=this.key=void 0,s.registerResolver(r,new je(r,e,t))}}function Pe(e){const t=e.slice(),s=Object.keys(e),r=s.length;let o;for(let i=0;i<r;++i)o=s[i],at(o)||(t[o]=e[o]);return t}const Be=Object.freeze({none(e){throw Error(`${e.toString()} not registered, did you forget to add @singleton()?`)},singleton:e=>new je(e,1,e),transient:e=>new je(e,2,e)}),Ne=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:Be.singleton})}),Ee=new Map;function Fe(e){return t=>Reflect.getOwnMetadata(e,t)}let Ae=null;const Ie=Object.freeze({createContainer:e=>new Xe(null,Object.assign({},Ne.default,e)),findResponsibleContainer(e){const t=e.$$container$$;return t&&t.responsibleForOwnerRequests?t:Ie.findParentContainer(e)},findParentContainer(e){const t=new CustomEvent(Ge,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return e.dispatchEvent(t),t.detail.container||Ie.getOrCreateDOMContainer()},getOrCreateDOMContainer:(e,t)=>e?e.$$container$$||new Xe(e,Object.assign({},Ne.default,t,{parentLocator:Ie.findParentContainer})):Ae||(Ae=new Xe(null,Object.assign({},Ne.default,t,{parentLocator:()=>null}))),getDesignParamtypes:Fe("design:paramtypes"),getAnnotationParamtypes:Fe("di:paramtypes"),getOrCreateAnnotationParamTypes(e){let t=this.getAnnotationParamtypes(e);return void 0===t&&Reflect.defineMetadata("di:paramtypes",t=[],e),t},getDependencies(e){let t=Ee.get(e);if(void 0===t){const s=e.inject;if(void 0===s){const s=Ie.getDesignParamtypes(e),r=Ie.getAnnotationParamtypes(e);if(void 0===s)if(void 0===r){const s=Object.getPrototypeOf(e);t="function"==typeof s&&s!==Function.prototype?Pe(Ie.getDependencies(s)):[]}else t=Pe(r);else if(void 0===r)t=Pe(s);else{t=Pe(s);let e,o=r.length;for(let s=0;s<o;++s)e=r[s],void 0!==e&&(t[s]=e);const i=Object.keys(r);let n;o=i.length;for(let e=0;e<o;++e)n=i[e],at(n)||(t[n]=r[n])}}else t=Pe(s);Ee.set(e,t)}return t},defineProperty(e,t,s,r=!1){const o=`$di_${t}`;Reflect.defineProperty(e,t,{get:function(){let e=this[o];if(void 0===e){const i=this instanceof HTMLElement?Ie.findResponsibleContainer(this):Ie.getOrCreateDOMContainer();if(e=i.get(s),this[o]=e,r&&this instanceof _){const r=this.$fastController,i=()=>{Ie.findResponsibleContainer(this).get(s)!==this[o]&&(this[o]=e,r.notify(t))};r.subscribe({handleChange:i},"isConnected")}}return e}})},createInterface(e,t){const s="function"==typeof e?e:t,r="string"==typeof e?e:e&&"friendlyName"in e&&e.friendlyName||rt,o="string"!=typeof e&&(e&&"respectConnection"in e&&e.respectConnection||!1),i=function(e,t,s){if(null==e||void 0!==new.target)throw new Error(`No registration for interface: '${i.friendlyName}'`);t?Ie.defineProperty(e,t,i,o):Ie.getOrCreateAnnotationParamTypes(e)[s]=i};return i.$isInterface=!0,i.friendlyName=null==r?"(anonymous)":r,null!=s&&(i.register=function(e,t){return s(new Te(e,null!=t?t:i))}),i.toString=function(){return`InterfaceSymbol<${i.friendlyName}>`},i},inject:(...e)=>function(t,s,r){if("number"==typeof r){const s=Ie.getOrCreateAnnotationParamTypes(t),o=e[0];void 0!==o&&(s[r]=o)}else if(s)Ie.defineProperty(t,s,e[0]);else{const s=r?Ie.getOrCreateAnnotationParamTypes(r.value):Ie.getOrCreateAnnotationParamTypes(t);let o;for(let t=0;t<e.length;++t)o=e[t],void 0!==o&&(s[t]=o)}},transient:e=>(e.register=function(t){return et.transient(e,e).register(t)},e.registerInRequestor=!1,e),singleton:(e,t=Me)=>(e.register=function(t){return et.singleton(e,e).register(t)},e.registerInRequestor=t.scoped,e)}),Ve=Ie.createInterface("Container");function ze(e){return function(t){const s=function(e,t,r){Ie.inject(s)(e,t,r)};return s.$isResolver=!0,s.resolve=function(s,r){return e(t,s,r)},s}}Ie.inject;const Me={scoped:!1};function De(e,t,s){Ie.inject(De)(e,t,s)}function Le(e,t){return t.getFactory(e).construct(t)}ze(((e,t,s)=>()=>s.get(e))),ze(((e,t,s)=>s.has(e,!0)?s.get(e):void 0)),De.$isResolver=!0,De.resolve=()=>{},ze(((e,t,s)=>{const r=Le(e,t),o=new je(e,0,r);return s.registerResolver(e,o),r})),ze(((e,t,s)=>Le(e,t)));class je{constructor(e,t,s){this.key=e,this.strategy=t,this.state=s,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state;case 2:{const s=e.getFactory(this.state);if(null===s)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return s.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,s,r;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return null!==(r=null===(s=null===(t=e.getResolver(this.state))||void 0===t?void 0:t.getFactory)||void 0===s?void 0:s.call(t,e))&&void 0!==r?r:null;default:return null}}}function _e(e){return this.get(e)}function He(e,t){return t(e)}class qe{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let s;return s=void 0===t?new this.Type(...this.dependencies.map(_e,e)):new this.Type(...this.dependencies.map(_e,e),...t),null==this.transformers?s:this.transformers.reduce(He,s)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const Ue={$isResolver:!0,resolve:(e,t)=>t};function We(e){return"function"==typeof e.register}function Ke(e){return function(e){return We(e)&&"boolean"==typeof e.registerInRequestor}(e)&&e.registerInRequestor}const Qe=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),Ge="__DI_LOCATE_PARENT__",Je=new Map;class Xe{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,null!==e&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(Ve,Ue),e instanceof Node&&e.addEventListener(Ge,(e=>{e.composedPath()[0]!==this.owner&&(e.detail.container=this,e.stopImmediatePropagation())}))}get parent(){return void 0===this._parent&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return null===this.parent?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(100==++this.registerDepth)throw new Error("Unable to autoregister dependency");let t,s,r,o,i;const n=this.context;for(let a=0,l=e.length;a<l;++a)if(t=e[a],ot(t))if(We(t))t.register(this,n);else if(void 0!==t.prototype)et.singleton(t,t).register(this);else for(s=Object.keys(t),o=0,i=s.length;o<i;++o)r=t[s[o]],ot(r)&&(We(r)?r.register(this,n):this.register(r));return--this.registerDepth,this}registerResolver(e,t){tt(e);const s=this.resolvers,r=s.get(e);return null==r?s.set(e,t):r instanceof je&&4===r.strategy?r.state.push(t):s.set(e,new je(e,4,[r,t])),t}registerTransformer(e,t){const s=this.getResolver(e);if(null==s)return!1;if(s.getFactory){const e=s.getFactory(this);return null!=e&&(e.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if(tt(e),void 0!==e.resolve)return e;let s,r=this;for(;null!=r;){if(s=r.resolvers.get(e),null!=s)return s;if(null==r.parent){const s=Ke(e)?this:r;return t?this.jitRegister(e,s):null}r=r.parent}return null}has(e,t=!1){return!!this.resolvers.has(e)||!(!t||null==this.parent)&&this.parent.has(e,!0)}get(e){if(tt(e),e.$isResolver)return e.resolve(this,this);let t,s=this;for(;null!=s;){if(t=s.resolvers.get(e),null!=t)return t.resolve(s,this);if(null==s.parent){const r=Ke(e)?this:s;return t=this.jitRegister(e,r),t.resolve(s,this)}s=s.parent}throw new Error(`Unable to resolve key: ${e}`)}getAll(e,t=!1){tt(e);const s=this;let r,o=s;if(t){let t=i;for(;null!=o;)r=o.resolvers.get(e),null!=r&&(t=t.concat(st(r,o,s))),o=o.parent;return t}for(;null!=o;){if(r=o.resolvers.get(e),null!=r)return st(r,o,s);if(o=o.parent,null==o)return i}return i}getFactory(e){let t=Je.get(e);if(void 0===t){if(it(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);Je.set(e,t=new qe(e,Ie.getDependencies(e)))}return t}registerFactory(e,t){Je.set(e,t)}createChild(e){return new Xe(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if("function"!=typeof e)throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(Qe.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(We(e)){const s=e.register(t);if(!(s instanceof Object)||null==s.resolve){const s=t.resolvers.get(e);if(null!=s)return s;throw new Error("A valid resolver was not returned from the static register method")}return s}if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const s=this.config.defaultResolver(e,t);return t.resolvers.set(e,s),s}}}const Ye=new WeakMap;function Ze(e){return function(t,s,r){if(Ye.has(r))return Ye.get(r);const o=e(t,s,r);return Ye.set(r,o),o}}const et=Object.freeze({instance:(e,t)=>new je(e,0,t),singleton:(e,t)=>new je(e,1,t),transient:(e,t)=>new je(e,2,t),callback:(e,t)=>new je(e,3,t),cachedCallback:(e,t)=>new je(e,3,Ze(t)),aliasTo:(e,t)=>new je(t,5,e)});function tt(e){if(null==e)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function st(e,t,s){if(e instanceof je&&4===e.strategy){const r=e.state;let o=r.length;const i=new Array(o);for(;o--;)i[o]=r[o].resolve(t,s);return i}return[e.resolve(t,s)]}const rt="(anonymous)";function ot(e){return"object"==typeof e&&null!==e||"function"==typeof e}const it=function(){const e=new WeakMap;let t=!1,s="",r=0;return function(o){return t=e.get(o),void 0===t&&(s=o.toString(),r=s.length,t=r>=29&&r<=100&&125===s.charCodeAt(r-1)&&s.charCodeAt(r-2)<=32&&93===s.charCodeAt(r-3)&&101===s.charCodeAt(r-4)&&100===s.charCodeAt(r-5)&&111===s.charCodeAt(r-6)&&99===s.charCodeAt(r-7)&&32===s.charCodeAt(r-8)&&101===s.charCodeAt(r-9)&&118===s.charCodeAt(r-10)&&105===s.charCodeAt(r-11)&&116===s.charCodeAt(r-12)&&97===s.charCodeAt(r-13)&&110===s.charCodeAt(r-14)&&88===s.charCodeAt(r-15),e.set(o,t)),t}}(),nt={};function at(e){switch(typeof e){case"number":return e>=0&&(0|e)===e;case"string":{const t=nt[e];if(void 0!==t)return t;const s=e.length;if(0===s)return nt[e]=!1;let r=0;for(let t=0;t<s;++t)if(r=e.charCodeAt(t),0===t&&48===r&&s>1||r<48||r>57)return nt[e]=!1;return nt[e]=!0}default:return!1}}function lt(e){return`${e.toLowerCase()}:presentation`}const ct=new Map,ht=Object.freeze({define(e,t,s){const r=lt(e);void 0===ct.get(r)?ct.set(r,t):ct.set(r,!1),s.register(et.instance(r,t))},forTag(e,t){const s=lt(e),r=ct.get(s);return!1===r?Ie.findResponsibleContainer(t).get(s):r||null}});class dt{constructor(e,t){this.template=e||null,this.styles=void 0===t?null:Array.isArray(t)?k.create(t):t instanceof k?t:k.create([t])}applyTo(e){const t=e.$fastController;null===t.template&&(t.template=this.template),null===t.styles&&(t.styles=this.styles)}}class ut extends _{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return void 0===this._presentation&&(this._presentation=ht.forTag(this.tagName,this)),this._presentation}templateChanged(){void 0!==this.template&&(this.$fastController.template=this.template)}stylesChanged(){void 0!==this.styles&&(this.$fastController.styles=this.styles)}connectedCallback(){null!==this.$presentation&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new ft(this===ut?class extends ut{}:this,e,t)}}function pt(e,t,s){return"function"==typeof e?e(t,s):e}q([w],ut.prototype,"template",void 0),q([w],ut.prototype,"styles",void 0);class ft{constructor(e,t,s){this.type=e,this.elementDefinition=t,this.overrideDefinition=s,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){const s=this.definition,r=this.overrideDefinition,o=`${s.prefix||t.elementPrefix}-${s.baseName}`;t.tryDefineElement({name:o,type:this.type,baseClass:this.elementDefinition.baseClass,callback:e=>{const t=new dt(pt(s.template,e,s),pt(s.styles,e,s));e.definePresentation(t);let o=pt(s.shadowOptions,e,s);e.shadowRootMode&&(o?r.shadowOptions||(o.mode=e.shadowRootMode):null!==o&&(o={mode:e.shadowRootMode})),e.defineElement({elementOptions:pt(s.elementOptions,e,s),shadowOptions:o,attributes:pt(s.attributes,e,s)})}})}}class gt extends ut{}class bt extends(function(e){const t=class extends e{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Se}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,t=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),s=e?t.concat(Array.from(e)):t;return Object.freeze(s)}return i}valueChanged(e,t){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),u.queueUpdate((()=>this.classList.toggle("disabled",this.disabled)))}nameChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),u.queueUpdate((()=>this.classList.toggle("required",this.required))),this.validate()}get elementInternals(){if(!Se)return null;let e=Oe.get(this);return e||(e=this.attachInternals(),Oe.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach((e=>this.proxy.removeEventListener(e,this.stopPropagation))),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,t,s){this.elementInternals?this.elementInternals.setValidity(e,t,s):"string"==typeof t&&this.proxy.setCustomValidity(t)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach((e=>this.proxy.addEventListener(e,this.stopPropagation))),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",ke),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",ke)),null===(e=this.shadowRoot)||void 0===e||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),null===(e=this.shadowRoot)||void 0===e||e.removeChild(this.proxySlot)}validate(){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage)}setFormValue(e,t){this.elementInternals&&this.elementInternals.setFormValue(e,t||e)}_keypressHandler(e){if("Enter"===e.key&&this.form instanceof HTMLFormElement){const e=this.form.querySelector("[type=submit]");null==e||e.click()}}stopPropagation(e){e.stopPropagation()}};return E({mode:"boolean"})(t.prototype,"disabled"),E({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),E({attribute:"current-value"})(t.prototype,"currentValue"),E(t.prototype,"name"),E({mode:"boolean"})(t.prototype,"required"),w(t.prototype,"value"),t}(gt)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class mt extends bt{constructor(){super(...arguments),this.handleClick=e=>{var t;this.disabled&&(null===(t=this.defaultSlottedContent)||void 0===t?void 0:t.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;null===(e=this.form)||void 0===e||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===t&&this.addEventListener("click",this.handleSubmission),"submit"===e&&this.removeEventListener("click",this.handleSubmission),"reset"===t&&this.addEventListener("click",this.handleFormReset),"reset"===e&&this.removeEventListener("click",this.handleFormReset)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.addEventListener("click",this.handleClick)}))}disconnectedCallback(){var e;super.disconnectedCallback();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.removeEventListener("click",this.handleClick)}))}}q([E({mode:"boolean"})],mt.prototype,"autofocus",void 0),q([E({attribute:"form"})],mt.prototype,"formId",void 0),q([E],mt.prototype,"formaction",void 0),q([E],mt.prototype,"formenctype",void 0),q([E],mt.prototype,"formmethod",void 0),q([E({mode:"boolean"})],mt.prototype,"formnovalidate",void 0),q([E],mt.prototype,"formtarget",void 0),q([E],mt.prototype,"type",void 0),q([w],mt.prototype,"defaultSlottedContent",void 0);class vt{}q([E({attribute:"aria-expanded",mode:"fromView"})],vt.prototype,"ariaExpanded",void 0),q([E({attribute:"aria-pressed",mode:"fromView"})],vt.prototype,"ariaPressed",void 0),Ce(vt,U),Ce(mt,xe,vt);class yt extends mt{constructor(){super(...arguments),this.shape="rounded",this.size="medium",this.block=!1,this.disabledFocusable=!1}defaultSlottedContentChanged(){const e=this.defaultSlottedContent.filter((e=>e.nodeType===Node.ELEMENT_NODE));1===e.length&&e[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}t([E],yt.prototype,"appearance",void 0),t([E],yt.prototype,"shape",void 0),t([E],yt.prototype,"size",void 0),t([E({mode:"boolean"})],yt.prototype,"block",void 0),t([E({attribute:"disabledfocusable",mode:"boolean"})],yt.prototype,"disabledFocusable",void 0);const wt=ve`
    <button
        class="base"
        part="base"
        ?autofocus="${e=>e.autofocus}"
        ?disabled="${e=>e.disabled}"
        tabindex="${e=>e.disabledFocusable?"0":!!e.tabIndex||void 0}"
        form="${e=>e.formId}"
        formaction="${e=>e.formaction}"
        formenctype="${e=>e.formenctype}"
        formmethod="${e=>e.formmethod}"
        formnovalidate="${e=>e.formnovalidate}"
        formtarget="${e=>e.formtarget}"
        name="${e=>e.name}"
        type="${e=>e.type}"
        value="${e=>e.value}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>!0===e.disabledFocusable?"true":e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-pressed="${e=>e.ariaPressed}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${we("control")}
    >
        <slot name="start"></slot>
        <slot ${xt="defaultSlottedContent","string"==typeof xt&&(xt={property:xt}),new Q("fast-slotted",class extends class{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=y.getAccessors(e).some((e=>e.name===t)),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(i),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}},xt)}></slot>
        <slot name="end"></slot>
    </button>
`;var xt;class Ct{createCSS(){return""}createBehavior(){}}function $t(e,...t){const{styles:s,behaviors:r}=function(e,t){const s=[];let r="";const o=[];for(let i=0,n=e.length-1;i<n;++i){r+=e[i];let n=t[i];if(n instanceof Ct){const e=n.createBehavior();n=n.createCSS(),e&&o.push(e)}n instanceof k||n instanceof CSSStyleSheet?(""!==r.trim()&&(s.push(r),r=""),s.push(n)):r+=n}return r+=e[e.length-1],""!==r.trim()&&s.push(r),{styles:s,behaviors:o}}(e,t),o=k.create(s);return r.length&&o.withBehaviors(...r),o}class kt{constructor(e,t,s){this.propertyName=e,this.value=t,this.styles=s}bind(e){y.getNotifier(e).subscribe(this,this.propertyName),this.handleChange(e,this.propertyName)}unbind(e){y.getNotifier(e).unsubscribe(this,this.propertyName),e.$fastController.removeStyles(this.styles)}handleChange(e,t){e[t]===this.value?e.$fastController.addStyles(this.styles):e.$fastController.removeStyles(this.styles)}}function St(e,t){return new kt("appearance",e,t)}function Ot(e,t){return new kt("size",e,t)}const Rt="var(--colorNeutralForeground1)",Tt="var(--colorNeutralForeground2)",Pt="var(--colorNeutralForeground2Hover)",Bt="var(--colorNeutralForeground2Pressed)",Nt="var(--colorNeutralForeground2BrandHover)",Et="var(--colorNeutralForeground2BrandPressed)",Ft="var(--colorNeutralForegroundDisabled)",At="var(--colorBrandForegroundLink)",It="var(--colorBrandForegroundLinkHover)",Vt="var(--colorBrandForegroundLinkPressed)",zt="var(--colorNeutralForegroundOnBrand)",Mt="var(--colorNeutralBackground1)",Dt="var(--colorNeutralBackground1Hover)",Lt="var(--colorNeutralBackground1Pressed)",jt="var(--colorSubtleBackground)",_t="var(--colorSubtleBackgroundHover)",Ht="var(--colorSubtleBackgroundPressed)",qt="var(--colorTransparentBackground)",Ut="var(--colorTransparentBackgroundHover)",Wt="var(--colorTransparentBackgroundPressed)",Kt="var(--colorNeutralBackgroundDisabled)",Qt="var(--colorNeutralStroke1)",Gt="var(--colorNeutralStroke1Hover)",Jt="var(--colorNeutralStroke1Pressed)",Xt="var(--colorNeutralStrokeDisabled)",Yt="var(--colorTransparentStroke)",Zt="var(--colorTransparentStrokeInteractive)",es="var(--colorPaletteLightGreenForeground3)",ts="var(--colorPaletteMarigoldBackground3)",ss="var(--borderRadiusMedium)",rs="var(--fontFamilyBase)",os="var(--fontSizeBase200)",is="var(--fontSizeBase300)",ns="var(--fontWeightRegular)",as="var(--fontWeightSemibold)",ls="var(--lineHeightBase200)",cs="var(--lineHeightBase300)",hs="var(--shadow4)",ds="var(--strokeWidthThin)";function us(e){return`:host([hidden]){display:none}:host{display:${e}}`}const ps=$t`
    :host([appearance="primary"]) .base {
        background-color: ${"var(--colorBrandBackground)"};
        border-color: transparent;
        color: ${zt};
    }

    :host([appearance="primary"]:hover) .base {
        background-color: ${"var(--colorBrandBackgroundHover)"};
        border-color: transparent;
        color: ${zt};
    }

    :host([appearance="primary"]:active) .base {
        background-color: ${"var(--colorBrandBackgroundPressed)"};
        border-color: transparent;
        color: ${zt};
    }

    :host([appearance="primary"][disabled]) .base,
    :host([appearance="primary"][disabled]:hover) .base,
    :host([appearance="primary"][disabled]:active) .base,
    :host([appearance="primary"]) .base[aria-disabled="true"],
    :host([appearance="primary"]:hover) .base[aria-disabled="true"],
    :host([appearance="primary"]:active) .base[aria-disabled="true"] {
        background-color: ${Kt};
        border-color: ${Xt};
        color: ${Ft};
        cursor: not-allowed;
        border-color: transparent;
    }
`,fs=$t`
    :host([appearance="subtle"]) .base {
        background-color: ${jt};
        border-color: transparent;
        color: ${Tt};
    }

    :host([appearance="subtle"]:hover) .base {
        background-color: ${_t};
        border-color: transparent;
        color: ${Nt};
    }

    :host([appearance="subtle"]:active) .base {
        background-color: ${Ht};
        border-color: transparent;
        color: ${Et};
    }

    :host([appearance="subtle"][disabled]) .base {
        background-color: ${Kt};
        border-color: ${Xt};
        color: ${Ft};
        cursor: not-allowed;
    }

    :host([appearance="subtle"][disabled]) .base,
    :host([appearance="subtle"][disabled]:hover) .base,
    :host([appearance="subtle"][disabled]:active) .base {
        background-color: transparent;
        border-color: transparent;
    }
`,gs=$t`
    :host([appearance="outline"]) .base {
        background-color: ${qt};
    }

    :host([appearance="outline"]:hover) .base {
        background-color: ${Ut};
    }

    :host([appearance="outline"]:active) .base {
        background-color: ${Wt};
    }
`,bs=$t`
    :host([appearance="transparent"]) .base {
        background-color: ${qt};
        border-color: transparent;
        color: ${Tt};
    }

    :host([appearance="transparent"]:hover) .base {
        background-color: ${Ut};
        border-color: transparent;
        color: ${Nt};
    }

    :host([appearance="transparent"]:active) .base {
        background-color: ${Wt};
        border-color: transparent;
        color: ${Et};
    }

    :host([appearance="transparent"][disabled]) .base,
    :host([appearance="transparent"][disabled]:hover) .base,
    :host([appearance="transparent"][disabled]:active) .base {
        background-color: transparent;
        border-color: transparent;
        color: ${Ft};
    }
`,ms=$t`
    :host([size="small"]) .base {
        gap: 4px;
        padding: 0 8px;
        height: 24px;
        min-width: 64px;
        border-radius: ${"var(--borderRadiusSmall)"};
        font-size: ${os};
        font-weight: ${ns};
        line-height: ${ls};
    }

    :host([size="small"]) ::slotted(svg) {
        font-size: 20px;
        height: 20px;
        width: 20px;
    }

    :host([size="small"]) .base.icon-only {
        padding: 4px;
        min-width: 28px;
        max-width: 28px;
    }
`,vs=$t`
    :host([size="medium"]) .base {
        gap: 6px;
        padding: 0 12px;
        height: 32px;
        min-width: 96px;
        border-radius: ${ss};
        font-size: ${is};
        font-weight: ${as};
        line-height: ${cs};
    }

    :host([size="medium"]) ::slotted(svg) {
        font-size: 20px;
        height: 20px;
        width: 20px;
    }

    :host([size="medium"]) .base.icon-only {
        padding: 0;
        min-width: 32px;
        max-width: 32px;
    }
`,ys=$t`
    :host([size="large"]) .base {
        gap: 6px;
        padding: 0 16px;
        height: 40px;
        min-width: 96px;
        border-radius: ${"var(--borderRadiusLarge)"};
        font-size: ${is};
        font-weight: ${as};
        line-height: ${cs};
    }

    :host([size="large"]) ::slotted(svg) {
        font-size: 24px;
        height: 24px;
        width: 24px;
    }

    :host([size="large"]) .base.icon-only {
        padding: 0;
        min-width: 40px;
        max-width: 40px;
    }
`,ws=$t`
    ${$t`
    ${us("inline-block")}

    :host .base {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: middle;
        margin: 0;
        max-width: 280px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        background-color: ${Mt};
        color: ${Rt};
        border: ${ds} solid ${Qt};
        font-family: ${rs};
        outline-style: none;
    }

    :host(:hover) .base {
        background-color: ${Dt};
        border-color: ${Gt};
        color: ${Rt};
        cursor: pointer;
    }

    :host(:active) .base {
        background-color: ${Lt};
        border-color: ${Jt};
        color: ${Rt};
        outline-style: none;
    }

    :host([size][shape="circular"]) .base {
        border-radius: ${"var(--borderRadiusCircular)"};
    }

    :host([size][shape="square"]) .base {
        border-radius: ${"var(--borderRadiusNone)"};
    }

    :host([disabled]) .base,
    :host .base[aria-disabled="true"] {
        background-color: ${Kt};
        border-color: ${Xt};
        color: ${Ft};
        cursor: not-allowed;
    }
`}
`.withBehaviors(St("primary",$t`
        ${ps}
    `),St("subtle",$t`
        ${fs}
    `),St("outline",$t`
        ${gs}
    `),St("transparent",$t`
        ${bs}
    `),Ot("small",$t`
        ${ms}
    `),Ot("medium",$t`
        ${vs}
    `),Ot("large",$t`
        ${ys}
    `));let xs=class extends yt{};xs=t([H({name:"fluent-button",template:wt,styles:ws,shadowOptions:{delegatesFocus:!0}})],xs);class Cs extends ut{}class $s extends Cs{constructor(){super(...arguments),this.appearance="filled",this.interactive=!1}}t([E],$s.prototype,"appearance",void 0),t([E({mode:"boolean"})],$s.prototype,"interactive",void 0);const ks=$t`
    ${us("block")} :host {
        contain: content;
        color: ${Rt};
        border-width: ${ds};
        border-style: solid;
        border-color: none;
        border-radius: ${ss};
    }

    :host([interactive]) {
        cursor: pointer;
    }

    :host([interactive]:hover) {
        box-shadow: ${"var(--shadow8)"};
    }

    ::slotted(*) {
        margin: 12px;
    }

    ::slotted(fluent-card-preview) {
        margin: 0;
    }
`.withBehaviors(St("filled",$t`
        :host([appearance="filled"]) {
            background-color: ${Mt};
            border-color: ${Yt};
            box-shadow: ${hs};
        }

        :host([appearance="filled"][interactive]:hover) {
            background-color: ${Dt};
            border-color: ${Zt};
        }

        :host([appearance="filled"][interactive]:active) {
            background-color: ${Lt};
        }
    `),St("filled-alternative",$t`
        :host([appearance="filled-alternative"]) {
            background-color: ${"var(--colorNeutralBackground2)"};
            border-color: ${Yt};
            box-shadow: ${hs};
        }

        :host([appearance="filled-alternative"][interactive]:hover) {
            background-color: ${"var(--colorNeutralBackground2Hover)"};
            border-color: ${Zt};
        }

        :host([appearance="filled-alternative"][interactive]:active) {
            background-color: ${"var(--colorNeutralBackground2Pressed)"};
        }
    `),St("outline",$t`
        :host([appearance="outline"]) {
            background-color: ${qt};
            border-color: ${Qt};
        }

        :host([appearance="outline"][interactive]:hover) {
            border-color: ${Gt};
        }

        :host([appearance="outline"][interactive]:active) {
            background-color: ${Jt};
        }    

        :host([appearance="outline"]),
        :host([appearance="outline"][interactive]),
        :host([appearance="outline"][interactive]:hover) {
            box-shadow: none;
        }
    `),St("subtle",$t`
        :host([appearance="subtle"]) {
            background-color: ${jt};
            border-color: ${Yt};
        }

        :host([appearance="subtle"][interactive]:hover) {
            border-color: ${_t};
        }

        :host([appearance="subtle"][interactive]:active) {
            background-color: ${Ht};
        }

        :host([appearance="subtle"]),
        :host([appearance="subtle"][interactive]),
        :host([appearance="subtle"][interactive]:hover) {
            box-shadow: none;
        }
    `));let Ss=class extends $s{};Ss=t([H({name:"fluent-card",template:ve`<template role="group"><slot></slot></template>`,styles:ks})],Ss);class Os extends _{}const Rs=ve`
    <slot></slot>
    <slot name="action"></slot>
`,Ts=$t`
    ${us("flex")} :host {
        display: flex;
        flex-direction: row;
        gap: 12px;
    }

    ::slotted([slot="action"]) {
        margin-inline-start: auto;
    }
`;let Ps=class extends Os{};Ps=t([H({name:"fluent-card-footer",template:Rs,styles:Ts})],Ps);class Bs extends _{}const Ns=ve`
    <template>
        <slot name="image"></slot>
        <div class="text-container" part="text-container">
            <slot></slot>
            <slot name="description"></slot>
        </div>
        <slot name="action"></slot>
    </template>
`,Es=$t`
    ${us("flex")} :host {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;
        height: 32px;
    }

    ::slotted(img),
    ::slotted([slot="image"]) {
        min-width: 24px;
        min-height: 24px;
        max-width: 32px;
        max-height: 32px;
    }

    .text-container {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        height: inherit;
    }

    .text-container > * {
        height: 50%;
    }
`;let Fs=class extends Bs{};Fs=t([H({name:"fluent-card-header",template:Ns,styles:Es})],Fs);class As extends _{}const Is=ve`
    <slot></slot>
    <slot name="logo"></slot>
`,Vs=$t`
    ${us("block")} :host {
        position: relative;
    }

    ::slotted(*) {
        display: block;
    }
    
    ::slotted([slot="logo"]) {
        position: absolute;
        bottom: 12px;
        left: 12px;
        width: 32px;
        height: 32px;
    }
`;let zs=class extends As{};var Ms;zs=t([H({name:"fluent-card-preview",template:Is,styles:Vs})],zs),function(e){e.separator="separator",e.presentation="presentation"}(Ms||(Ms={}));class Ds extends _{constructor(){super(...arguments),this.role=Ms.separator,this.alignContent="center",this.inset=!1,this.vertical=!1}}function Ls(e,t){const s="function"==typeof t?t:()=>t;return(t,r)=>e(t,r)?s(t,r):null}t([E],Ds.prototype,"role",void 0),t([E],Ds.prototype,"appearance",void 0),t([E({attribute:"align-content"})],Ds.prototype,"alignContent",void 0),t([E({mode:"boolean"})],Ds.prototype,"inset",void 0),t([E({mode:"boolean"})],Ds.prototype,"vertical",void 0);const js=ve`
    <template
        class=${e=>e.hasChildNodes()?"children":"childless"}
        role="${e=>e.role}"
        aria-orientation="${e=>e.vertical?"vertical":"horizontal"}"
    >
        ${Ls((e=>e.hasChildNodes()),ve`<div class="wrapper" part="wrapper"><slot></slot></div>`)}
    </template>
`,_s="12px",Hs="12px",qs="8px",Us="8px;";function Ws(e,t){return new kt("vertical",e,t)}const Ks=$t`
    ${us("flex")} :host {
        align-items: center;
        box-sizing: border-box;
        flex-direction: row;
        flex-grow: 1;
        position: relative;
        font-family: ${rs};
        font-size: ${os};
        font-weight: ${ns};
        line-height: ${ls};
        text-align: center;
        color: ${Tt};
    }

    :host::after,
    :host::before {
        box-sizing: border-box;
        display: flex;
        flex-grow: 1;
    }

    :host::after,
    :host::before {
        border-color: ${"var(--colorNeutralStroke2)"};
    }

    :host([align-content="start"])::after {
        content: "";
    }

    :host([align-content="center"])::after,
    :host([align-content="center"])::before {
        content: "";
    }

    :host([align-content="end"])::before {
        content: "";
    }

    :host([align-content].childless)::before {
        margin-bottom: 0;
        margin-right: 0;
    }

    :host([align-content].childless)::after {
        margin-left: 0;
        margin-top: 0;
    }
`.withBehaviors(St("brand",$t`
        :host([appearance="brand"]) {
            color: ${"var(--colorBrandForeground1)"};
        }

        :host([appearance="brand"])::after,
        :host([appearance="brand"])::before {
            border-color: ${"var(--colorBrandStroke1)"};
        }
    `),St("subtle",$t`
        :host([appearance="subtle"])::after,
        :host([appearance="subtle"])::before {
            border-color: ${"var(--colorNeutralStroke3)"};
        }
    `),St("strong",$t`
        :host([appearance="strong"])::after,
        :host([appearance="strong"])::before {
            border-color: ${Qt};
        }
    `),Ws(!1,$t`
        :host {
            width: 100%;
        }

        :host::before,
        :host::after {
            border-top-style: solid;
            border-top-width: ${ds};
            min-width: ${Us};
        }

        :host([inset]) {
            padding-inline: ${Hs};
        }

        :host([align-content="start"])::before {
            content: "";
            margin-right: ${_s};
            max-width: ${qs};
        }

        :host([align-content="start"])::after {
            margin-left: ${_s};
        }

        :host([align-content="center"])::before {
            margin-right: ${_s};
        }
        :host([align-content="center"])::after {
            margin-left: ${_s};
        }

        :host([align-content="end"])::after {
            content: "";
            margin-left: ${_s};
            max-width: ${qs};
        }

        :host([align-content="end"])::before {
            margin-right: ${_s};
        }
    `),Ws(!0,$t`
        :host([vertical]) {
            flex-direction: column;
            min-height: 20px;
        }

        :host([vertical])::before,
        :host([vertical])::after {
            border-right-style: solid;
            border-right-width: ${ds};
            min-height: ${Us};
        }

        :host([inset]) {
            margin-block: ${Hs};
        }

        :host([vertical].children) {
            min-height: 84px;
        }

        :host([align-content="start"])::before {
            content: "";
            margin-bottom: ${_s};
            max-height: ${qs};
        }

        :host([align-content="start"])::after {
            margin-top: ${_s};
        }

        :host([align-content="center"])::before {
            margin-bottom: ${_s};
        }
        :host([align-content="center"])::after {
            margin-top: ${_s};
        }

        :host([align-content="end"])::after {
            content: "";
            margin-top: ${_s};
            max-height: ${qs};
        }

        :host([align-content="end"])::before {
            margin-bottom: ${_s};
        }
    `));let Qs=class extends Ds{};function Gs(e){const t=e.parentElement;if(t)return t;{const t=e.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}Qs=t([H({name:"fluent-divider",template:js,styles:Ks})],Qs);const Js=document.createElement("div");class Xs{setProperty(e,t){u.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){u.queueUpdate((()=>this.target.removeProperty(e)))}}class Ys extends Xs{constructor(){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}class Zs extends Xs{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:e}=this.style;if(e){const t=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[t].style}}}class er{constructor(e){this.store=new Map,this.target=null;const t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),y.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(null!==this.target)for(const[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),u.queueUpdate((()=>{null!==this.target&&this.target.setProperty(e,t)}))}removeProperty(e){this.store.delete(e),u.queueUpdate((()=>{null!==this.target&&this.target.removeProperty(e)}))}handleChange(e,t){const{sheet:s}=this.style;if(s){const e=s.insertRule(":host{}",s.cssRules.length);this.target=s.cssRules[e].style}else this.target=null}}q([w],er.prototype,"target",void 0);class tr{constructor(e){this.target=e.style}setProperty(e,t){u.queueUpdate((()=>this.target.setProperty(e,t)))}removeProperty(e){u.queueUpdate((()=>this.target.removeProperty(e)))}}class sr{setProperty(e,t){sr.properties[e]=t;for(const s of sr.roots.values())ir.getOrCreate(sr.normalizeRoot(s)).setProperty(e,t)}removeProperty(e){delete sr.properties[e];for(const t of sr.roots.values())ir.getOrCreate(sr.normalizeRoot(t)).removeProperty(e)}static registerRoot(e){const{roots:t}=sr;if(!t.has(e)){t.add(e);const s=ir.getOrCreate(this.normalizeRoot(e));for(const e in sr.properties)s.setProperty(e,sr.properties[e])}}static unregisterRoot(e){const{roots:t}=sr;if(t.has(e)){t.delete(e);const s=ir.getOrCreate(sr.normalizeRoot(e));for(const e in sr.properties)s.removeProperty(e)}}static normalizeRoot(e){return e===Js?document:e}}sr.roots=new Set,sr.properties={};const rr=new WeakMap,or=u.supportsAdoptedStyleSheets?class extends Xs{constructor(e){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles(k.create([t]))}}:er,ir=Object.freeze({getOrCreate(e){if(rr.has(e))return rr.get(e);let t;return t=e===Js?new sr:e instanceof Document?u.supportsAdoptedStyleSheets?new Ys:new Zs:e instanceof _?new or(e):new tr(e),rr.set(e,t),t}});class nr extends Ct{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,null!==e.cssCustomPropertyName&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=nr.uniqueId(),nr.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new nr({name:"string"==typeof e?e:e.name,cssCustomPropertyName:"string"==typeof e?e:void 0===e.cssCustomPropertyName?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return"string"==typeof e.cssCustomProperty}static isDerivedDesignTokenValue(e){return"function"==typeof e}static getTokenById(e){return nr.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const t=dr.getOrCreate(e).get(this);if(void 0!==t)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof nr&&(t=this.alias(t)),dr.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),dr.existsFor(e)&&dr.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(Js,e),this}subscribe(e,t){const s=this.getOrCreateSubscriberSet(t);t&&!dr.existsFor(t)&&dr.getOrCreate(t),s.has(e)||s.add(e)}unsubscribe(e,t){const s=this.subscribers.get(t||this);s&&s.has(e)&&s.delete(e)}notify(e){const t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach((e=>e.handleChange(t))),this.subscribers.has(e)&&this.subscribers.get(e).forEach((e=>e.handleChange(t)))}alias(e){return t=>e.getValueFor(t)}}nr.uniqueId=(()=>{let e=0;return()=>(e++,e.toString(16))})(),nr.tokensById=new Map;class ar{constructor(e,t,s){this.source=e,this.token=t,this.node=s,this.dependencies=new Set,this.observer=y.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,$))}}class lr{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),y.getNotifier(this).notify(e.id))}get(e){return y.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e)}all(){return this.values.entries()}}const cr=new WeakMap,hr=new WeakMap;class dr{constructor(e){this.target=e,this.store=new lr,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(e,t)=>{const s=nr.getTokenById(t);if(s&&(s.notify(this.target),nr.isCSSDesignToken(s))){const t=this.parent,r=this.isReflecting(s);if(t){const o=t.get(s),i=e.get(s);o===i||r?o===i&&r&&this.stopReflectToCSS(s):this.reflectToCSS(s)}else r||this.reflectToCSS(s)}}},cr.set(e,this),y.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof _?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return cr.get(e)||new dr(e)}static existsFor(e){return cr.has(e)}static findParent(e){if(Js!==e.target){let t=Gs(e.target);for(;null!==t;){if(cr.has(t))return cr.get(t);t=Gs(t)}return dr.getOrCreate(Js)}return null}static findClosestAssignedNode(e,t){let s=t;do{if(s.has(e))return s;s=s.parent?s.parent:s.target!==Js?dr.getOrCreate(Js):null}while(null!==s);return null}get parent(){return hr.get(this)||null}has(e){return this.assignedValues.has(e)}get(e){const t=this.store.get(e);if(void 0!==t)return t;const s=this.getRaw(e);return void 0!==s?(this.hydrate(e,s),this.get(e)):void 0}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):null===(t=dr.findClosestAssignedNode(e,this))||void 0===t?void 0:t.getRaw(e)}set(e,t){nr.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),nr.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){const e=dr.findParent(this);e&&e.appendChild(this);for(const e of this.assignedValues.keys())e.notify(this.target)}unbind(){this.parent&&hr.get(this).removeChild(this)}appendChild(e){e.parent&&hr.get(e).removeChild(e);const t=this.children.filter((t=>e.contains(t)));hr.set(e,this),this.children.push(e),t.forEach((t=>e.appendChild(t))),y.getNotifier(this.store).subscribe(e);for(const[t,s]of this.store.all())e.hydrate(t,this.bindingObservers.has(t)?this.getRaw(t):s)}removeChild(e){const t=this.children.indexOf(e);return-1!==t&&this.children.splice(t,1),y.getNotifier(this.store).unsubscribe(e),e.parent===this&&hr.delete(e)}contains(e){return function(e,t){let s=t;for(;null!==s;){if(s===e)return!0;s=Gs(s)}return!1}(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),dr.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),dr.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){const s=nr.getTokenById(t);s&&this.hydrate(s,this.getRaw(s))}hydrate(e,t){if(!this.has(e)){const s=this.bindingObservers.get(e);nr.isDerivedDesignTokenValue(t)?s?s.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(s&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){const s=new ar(t,e,this);return this.bindingObservers.set(e,s),s}tearDownBindingObserver(e){return!!this.bindingObservers.has(e)&&(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0)}}dr.cssCustomPropertyReflector=new class{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){const{token:t,target:s}=e;this.add(t,s)}add(e,t){ir.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(dr.getOrCreate(t).get(e)))}remove(e,t){ir.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&"function"==typeof e.createCSS?e.createCSS():e}},q([w],dr.prototype,"children",void 0);const ur=Object.freeze({create:function(e){return nr.from(e)},notifyConnection:e=>!(!e.isConnected||!dr.existsFor(e)||(dr.getOrCreate(e).bind(),0)),notifyDisconnection:e=>!(e.isConnected||!dr.existsFor(e)||(dr.getOrCreate(e).unbind(),0)),registerRoot(e=Js){sr.registerRoot(e)},unregisterRoot(e=Js){sr.unregisterRoot(e)}}),pr=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),fr=new Map,gr=new Map;let br=null;const mr=Ie.createInterface((e=>e.cachedCallback((e=>(null===br&&(br=new yr(null,e)),br))))),vr=Object.freeze({tagFor:e=>gr.get(e),responsibleFor(e){const t=e.$$designSystem$$;return t||Ie.findResponsibleContainer(e).get(mr)},getOrCreate(e){if(!e)return null===br&&(br=Ie.getOrCreateDOMContainer().get(mr)),br;const t=e.$$designSystem$$;if(t)return t;const s=Ie.getOrCreateDOMContainer(e);if(s.has(mr,!1))return s.get(mr);{const t=new yr(e,s);return s.register(et.instance(mr,t)),t}}});class yr{constructor(e,t){this.owner=e,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>pr.definitionCallbackOnly,null!==e&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){const t=this.container,s=[],r=this.disambiguate,o=this.shadowRootMode,i={elementPrefix:this.prefix,tryDefineElement(e,i,n){const a=function(e,t,s){return"string"==typeof e?{name:e,type:t,callback:s}:e}(e,i,n),{name:l,callback:c,baseClass:h}=a;let{type:d}=a,u=l,p=fr.get(u),f=!0;for(;p;){const e=r(u,d,p);switch(e){case pr.ignoreDuplicate:return;case pr.definitionCallbackOnly:f=!1,p=void 0;break;default:u=e,p=fr.get(u)}}f&&((gr.has(d)||d===ut)&&(d=class extends d{}),fr.set(u,d),gr.set(d,u),h&&gr.set(h,u)),s.push(new wr(t,u,d,o,c,f))}};this.designTokensInitialized||(this.designTokensInitialized=!0,null!==this.designTokenRoot&&ur.registerRoot(this.designTokenRoot)),t.registerWithContext(i,...e);for(const e of s)e.callback(e),e.willDefine&&null!==e.definition&&e.definition.define();return this}}class wr{constructor(e,t,s,r,o,i){this.container=e,this.name=t,this.type=s,this.shadowRootMode=r,this.callback=o,this.willDefine=i,this.definition=null}definePresentation(e){ht.define(this.name,e,this.container)}defineElement(e){this.definition=new V(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return vr.tagFor(e)}}class xr extends ut{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}q([E],xr.prototype,"download",void 0),q([E],xr.prototype,"href",void 0),q([E],xr.prototype,"hreflang",void 0),q([E],xr.prototype,"ping",void 0),q([E],xr.prototype,"referrerpolicy",void 0),q([E],xr.prototype,"rel",void 0),q([E],xr.prototype,"target",void 0),q([E],xr.prototype,"type",void 0),q([w],xr.prototype,"defaultSlottedContent",void 0);class Cr{}q([E({attribute:"aria-expanded",mode:"fromView"})],Cr.prototype,"ariaExpanded",void 0),Ce(Cr,U),Ce(xr,xe,Cr);class $r extends xr{constructor(){super(...arguments),this.inline=!1,this.disabled=!1,this.disabledFocusable=!1}handleDisabledClick(e){if(!this.disabled&&!this.disabledFocusable)return!0;e.preventDefault()}handleDisabledKeydown(e){if(!this.disabled&&!this.disabledFocusable||"Enter"!==e.key&&" "!==e.key)return!0;e.preventDefault(),e.stopPropagation()}}t([E],$r.prototype,"appearance",void 0),t([E({mode:"boolean"})],$r.prototype,"inline",void 0),t([E({mode:"boolean"})],$r.prototype,"disabled",void 0),t([E({attribute:"disabledfocusable",mode:"boolean"})],$r.prototype,"disabledFocusable",void 0);const kr=ve`
    <a
        class="base"
        part="base"
        download="${e=>e.download}"
        tabindex="${e=>e.disabledFocusable?"0":e.disabled?"-1":!!e.tabIndex||void 0}"
        href="${e=>e.href}"
        hreflang="${e=>e.hreflang}"
        ping="${e=>e.ping}"
        referrerpolicy="${e=>e.referrerpolicy}"
        rel="${e=>e.rel}"
        target="${e=>e.target}"
        type="${e=>e.type}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.disabled||e.disabledFocusable||e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        @click="${(e,t)=>e.handleDisabledClick(t.event)}"
        @keydown="${(e,t)=>e.handleDisabledKeydown(t.event)}"
        ${we("control")}
    >
        <slot></slot>
    </a>
`,Sr=$t`
    ${us("inline")}
    
    :host .base {
        background-color: transparent;
        border-top-style: none;
        border-left-style: none;
        border-right-style: none;
        border-bottom-color: transparent;
        border-bottom-style: solid;
        border-bottom-width: ${ds};
        box-sizing: border-box;
        color: ${At};
        cursor: pointer;
        font-family: ${rs};
        font-size: ${is};
        font-weight: ${ns};
        margin: 0;
        padding: 0;
        overlow: inherit;
        text-align: left;
        text-decoration-line: none;
        text-overflow: inherit;
        user-select: text;
    }

    :host(:hover) .base {
        border-bottom-color: ${It};
        color: ${It};
    }

    :host(:active) .base {
        border-bottom-color: ${Vt};
        color: ${Vt};
    }

    :host([inline]),
    :host([inline]) .base {
        font-size: inherit;
        line-height: inherit;
    }

    :host([disabled]) .base,
    :host([disabledfocusable]) .base {
        border-bottom-color: transparent;
        color: ${Ft};
        cursor: not-allowed;
    }

    :host([inline]) .base {
        border-bottom-color: ${At};
    }

    :host([inline][disabled]) .base,
    :host([inline][disabledfocusable]) .base  {
        border-bottom-color: ${Ft};
    }
`.withBehaviors(St("subtle",$t`
        :host([appearance="subtle"]) .base {
            color: ${Tt};
        }

       :host([appearance="subtle"]:hover) .base {
            border-bottom-color: ${Pt};
            color: ${Pt};
        }

        :host([appearance="subtle"]:active) .base {
            border-bottom-color: ${Bt};
            color: ${Bt};
        }

        :host([inline][appearance="subtle"]) .base {
            border-bottom-color: ${Tt};
        }

        :host([appearance="subtle"][disabled]) .base,
        :host([appearance="subtle"][disabledfocusable]) .base {
            border-bottom-color: transparent;
            color: ${Ft};
        }

        :host([appearance="subtle"][inline][disabled]) .base,
        :host([appearance="subtle"][inline][disabledfocusable]) .base {
            border-bottom-color: ${Ft};
        }
    `));let Or=class extends $r{};Or=t([H({name:"fluent-link",template:kr,styles:Sr,shadowOptions:{delegatesFocus:!0}})],Or);const Rr=ve`
    <template aria-hidden="true">
        <slot name="${e=>e.getSlotInfo().name}">${e=>ve`${e.getSlotInfo().icon}`}</slot>
    </template>
`,Tr='<svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m10.7071 5.29289c.3905.39053.3905 1.02369 0 1.41422l-1.29289 1.29289 1.29289 1.29289c.3905.39053.3905 1.02371 0 1.41421s-1.02368.3905-1.41421 0l-1.29289-1.29289-1.29289 1.29289c-.39053.3905-1.02369.3905-1.41422 0-.39052-.3905-.39052-1.02368 0-1.41421l1.2929-1.29289-1.2929-1.29289c-.39052-.39053-.39052-1.02369 0-1.41422.39053-.39052 1.02369-.39052 1.41422 0l1.29289 1.2929 1.29289-1.2929c.39053-.39052 1.02371-.39052 1.41421 0z"/><path d="m0 8c0-4.41828 3.58172-8 8-8 4.4183 0 8 3.58172 8 8 0 4.4183-3.5817 8-8 8-4.41828 0-8-3.5817-8-8zm8-6c-3.31371 0-6 2.68629-6 6 0 3.3137 2.68629 6 6 6 3.3137 0 6-2.6863 6-6 0-3.31371-2.6863-6-6-6z"/><</svg>',Pr='<svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m8.2071 6.20736c.39053-.39052.39054-1.02368.00002-1.41421s-1.02368-.39054-1.41422-.00002l-2.5 2.49991c-.18754.18754-.2929.44189-.2929.70711s.10535.51958.29289.70712l2.5 2.50003c.39053.3905 1.02369.3905 1.41422 0 .39052-.3906.39052-1.0237 0-1.41425l-.7929-.79289h3.58579c.5523 0 1-.44772 1-1s-.4477-1-1-1h-3.58573z"/><path d="m8 0c-4.41828 0-8 3.58172-8 8 0 4.4183 3.58172 8 8 8 4.4183 0 8-3.5817 8-8 0-4.41828-3.5817-8-8-8zm-6 8c0-3.31371 2.68629-6 6-6 3.3137 0 6 2.68629 6 6 0 3.3137-2.6863 6-6 6-3.31371 0-6-2.6863-6-6z"/></svg>',Br='<svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m8 2c-3.31371 0-6 2.68629-6 6 0 3.3137 2.68629 6 6 6 3.3137 0 6-2.6863 6-6 0-3.31371-2.6863-6-6-6zm-8 6c0-4.41828 3.58172-8 8-8 4.4183 0 8 3.58172 8 8 0 4.4183-3.5817 8-8 8-4.41828 0-8-3.5817-8-8z"/></svg>';class Nr extends _{constructor(){super(...arguments),this.status="available",this.size="medium",this.outofoffice=!1}getSlotInfo(){if(this.outofoffice)switch(this.status){case"available":return{name:this.status,icon:'<svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m11.7071 6.70711c.3905-.39053.3905-1.02369 0-1.41422-.3905-.39052-1.0237-.39052-1.4142 0l-3.2929 3.2929-1.29289-1.2929c-.39053-.39052-1.02369-.39052-1.41422 0-.39052.39053-.39052 1.02369 0 1.41422l2 1.99999c.39053.3905 1.02369.3905 1.41422 0z"/><path d="m0 8c0-4.41828 3.58172-8 8-8 4.4183 0 8 3.58172 8 8 0 4.4183-3.5817 8-8 8-4.41828 0-8-3.5817-8-8zm8-6c-3.31371 0-6 2.68629-6 6 0 3.3137 2.68629 6 6 6 3.3137 0 6-2.6863 6-6 0-3.31371-2.6863-6-6-6z"/></svg>'};case"away":return{name:this.status,icon:Tr};case"busy":return{name:this.status,icon:'<svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m8 2c-3.31371 0-6 2.68629-6 6 0 3.3137 2.68629 6 6 6 3.3137 0 6-2.6863 6-6 0-3.31371-2.6863-6-6-6zm-8 6c0-4.41828 3.58172-8 8-8 4.4183 0 8 3.58172 8 8 0 4.4183-3.5817 8-8 8-4.41828 0-8-3.5817-8-8z"/></svg>'};case"donotdisturb":return{name:this.status,icon:'<svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m5.25 7c-.55228 0-1 .44772-1 1s.44772 1 1 1h5.5c.5523 0 1-.44772 1-1s-.4477-1-1-1z"/><path d="m0 8c0-4.41828 3.58172-8 8-8 4.4183 0 8 3.58172 8 8 0 4.4183-3.5817 8-8 8-4.41828 0-8-3.5817-8-8zm8-6c-3.31371 0-6 2.68629-6 6 0 3.3137 2.68629 6 6 6 3.3137 0 6-2.6863 6-6 0-3.31371-2.6863-6-6-6z"/></svg>'};case"offline":case"outofoffice":return{name:this.status,icon:Pr};default:return{name:"unknown",icon:Br}}else switch(this.status){case"available":return{name:this.status,icon:'<svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m8 16c4.4183 0 8-3.5817 8-8 0-4.41828-3.5817-8-8-8-4.41828 0-8 3.58172-8 8 0 4.4183 3.58172 8 8 8zm3.7069-9.29261-4.00329 4.00001c-.18766.1875-.44214.2928-.70742.2926-.26529-.0002-.51964-.1057-.70707-.2935l-1.99679-1.99996c-.39021-.39084-.38971-1.024.00113-1.41421s1.024-.38971 1.41421.00113l1.28998 1.29205 3.29555-3.2929c.3907-.39037 1.0239-.39011 1.4142.00057.3904.39068.3901 1.02385-.0005 1.41421z"></svg>'};case"away":return{name:this.status,icon:'<svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m8 16c4.4183 0 8-3.5817 8-8 0-4.41828-3.5817-8-8-8-4.41828 0-8 3.58172-8 8 0 4.4183 3.58172 8 8 8zm.5-11.5v3.01937l2.1247 1.69976c.4313.34501.5012.97427.1562 1.40557s-.97433.5012-1.40559.1562l-2.5-2.00003c-.23722-.18977-.37531-.47709-.37531-.78087v-3.5c0-.55228.44772-1 1-1 .55229 0 1 .44772 1 1z"/></svg>'};case"busy":return{name:this.status,icon:'<svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m16 8c0 4.4183-3.5817 8-8 8-4.41828 0-8-3.5817-8-8 0-4.41828 3.58172-8 8-8 4.4183 0 8 3.58172 8 8z"/></svg>'};case"donotdisturb":return{name:this.status,icon:'<svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m8 16c4.4183 0 8-3.5817 8-8 0-4.41828-3.5817-8-8-8-4.41828 0-8 3.58172-8 8 0 4.4183 3.58172 8 8 8zm-2.75098-9h5.50088c.5523 0 1 .44772 1 1 0 .55229-.4477 1-1 1h-5.50088c-.55228 0-1-.44771-1-1 0-.55228.44772-1 1-1z"/></svg>'};case"offline":return{name:this.status,icon:Tr};case"outofoffice":return{name:this.status,icon:Pr};default:return{name:"unknown",icon:Br}}}}t([E],Nr.prototype,"status",void 0),t([E],Nr.prototype,"size",void 0),t([E({mode:"boolean"})],Nr.prototype,"outofoffice",void 0);const Er=$t`
    ${us("inline-flex")} :host {
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: ${Mt};
    }

    :host([outofoffice]) {
        color: ${Mt};
    }

    :host([status="away"]) {
        color: ${ts};
    }
    :host([status="available"]) {
        color: ${es};
    }
    :host([status="offline"]),
    :host([outofoffice][status="offline"]) {
        color: ${"var(--colorNeutralForeground3)"};
    }
    :host([status="outofoffice"]),
    :host([outofoffice][status="outofoffice"]) {
        color: ${"var(--colorPaletteBerryForeground3)"};
    }
    :host([outofoffice][status="available"]) {
        color: ${es};
    }
    :host([outofoffice][status="away"]) {
        color: ${ts};
    }

    :host([status="busy"]),
    :host([status="donotdisturb"]),
    :host([status="unknown"]),
    :host([outofoffice][status="busy"]),
    :host([outofoffice][status="donotdisturb"]),
    :host([outofoffice][status="unknown"]) {
        color: ${"var(--colorPaletteRedBackground3)"};
    }

    slot,
    ::slotted(*) {
        fill: currentColor;
    }
`.withBehaviors(Ot("tiny",$t`
        :host([size="tiny"]) svg,
        ::slotted(svg) {
            width: 6px;
            height: 6px;
        }
    `),Ot("extra-small",$t`
        :host([size="extra-small"]) svg,
        ::slotted(svg) {
            width: 10px;
            height: 10px;
        }
    `),Ot("small",$t`
        :host([size="small"]) svg,
        ::slotted(svg) {
            width: 12px;
            height: 12px;
        }
    `),Ot("medium",$t`
        :host([size="medium"]) svg,
        ::slotted(svg) {
            width: 16px;
            height: 16px;
        }
    `),Ot("large",$t`
        :host([size="large"]) svg,
        ::slotted(svg) {
            width: 20px !important;
            height: 20px !important;
        }
    `),Ot("extra-large",$t`
        :host([size="extra-large"]) svg,
        ::slotted(svg) {
            width: 28px !important;
            height: 28px !important;
        }
    `));let Fr=class extends Nr{};var Ar;Fr=t([H({name:"fluent-presence-badge",template:Rr,styles:Er})],Fr),vr.getOrCreate(undefined).withPrefix("fluent").register(xs),function(e){e.Button="button",e.Mixed="mixed",e.Card="card"}(Ar||(Ar={}));const Ir='<fluent-button appearance="primary">Button</fluent-button>',Vr="<fluent-card>I'm a Card</fluent-card>",zr=Ir,Mr=ve`<div id="container">
  ${Ls((e=>e.repeatNum),(e=>e.componentTemplate))}
</div>`;let Dr=class extends _{constructor(){super(...arguments),this.repeatNum=0,this.component="",this.templatestr=zr,this.componentTemplate=ve``}connectedCallback(){super.connectedCallback();const e=new URLSearchParams(document.location.search);this.component=e.get("component");const t=e.get("repeatNum");switch(t&&(this.repeatNum=parseInt(t)),this.component){case Ar.Button:this.templatestr=Ir;break;case Ar.Card:this.templatestr=Vr;break;default:this.templatestr=Ir}const s=this.templatestr.repeat(this.repeatNum);this.componentTemplate=ve`${s}`}};t([w],Dr.prototype,"repeatNum",void 0),t([w],Dr.prototype,"component",void 0),Dr=t([H({name:"component-container",template:Mr})],Dr)})();
//# sourceMappingURL=bundle.js.map