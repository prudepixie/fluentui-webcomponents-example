(()=>{"use strict";var e={};function t(e,t,o,r){var s,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(i=(a<3?s(i):a>3?s(t,o,i):s(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),Object.create,Object.create;const o=function(){if("undefined"!=typeof globalThis)return globalThis;if(void 0!==e.g)return e.g;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(e){return{}}}();void 0===o.trustedTypes&&(o.trustedTypes={createPolicy:(e,t)=>t});const r={configurable:!1,enumerable:!1,writable:!1};void 0===o.FAST&&Reflect.defineProperty(o,"FAST",Object.assign({value:Object.create(null)},r));const s=o.FAST;if(void 0===s.getById){const e=Object.create(null);Reflect.defineProperty(s,"getById",Object.assign({value(t,o){let r=e[t];return void 0===r&&(r=o?e[t]=o():null),r}},r))}const a=Object.freeze([]),i=o.FAST.getById(1,(()=>{const e=[],t=[];function r(){if(t.length)throw t.shift()}function s(e){try{e.call()}catch(e){t.push(e),setTimeout(r,0)}}function a(){let t=0;for(;t<e.length;)if(s(e[t]),t++,t>1024){for(let o=0,r=e.length-t;o<r;o++)e[o]=e[o+t];e.length-=t,t=0}e.length=0}return Object.freeze({enqueue:function(t){e.length<1&&o.requestAnimationFrame(a),e.push(t)},process:a})})),n=o.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let l=n;const c=`fast-${Math.random().toString(36).substring(2,8)}`,d=`${c}{`,h=`}${c}`,u=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(l!==n)throw new Error("The HTML policy can only be set once.");l=e},createHTML:e=>l.createHTML(e),isMarker:e=>e&&8===e.nodeType&&e.data.startsWith(c),extractDirectiveIndexFromMarker:e=>parseInt(e.data.replace(`${c}:`,"")),createInterpolationPlaceholder:e=>`${d}${e}${h}`,createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder:e=>`\x3c!--${c}:${e}--\x3e`,queueUpdate:i.enqueue,processUpdates:i.process,nextUpdate:()=>new Promise(i.enqueue),setAttribute(e,t,o){null==o?e.removeAttribute(t):e.setAttribute(t,o)},setBooleanAttribute(e,t,o){o?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;null!==t;t=e.firstChild)e.removeChild(t)},createTemplateWalker:e=>document.createTreeWalker(e,133,null,!1)});function p(e){const t=this.spillover;-1===t.indexOf(e)&&t.push(e)}function b(e){const t=this.spillover,o=t.indexOf(e);-1!==o&&t.splice(o,1)}function g(e){const t=this.spillover,o=this.source;for(let r=0,s=t.length;r<s;++r)t[r].handleChange(o,e)}function f(e){return-1!==this.spillover.indexOf(e)}class m{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return this.sub1===e||this.sub2===e}subscribe(e){this.has(e)||(void 0!==this.sub1?void 0!==this.sub2?(this.spillover=[this.sub1,this.sub2,e],this.subscribe=p,this.unsubscribe=b,this.notify=g,this.has=f,this.sub1=void 0,this.sub2=void 0):this.sub2=e:this.sub1=e)}unsubscribe(e){this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0)}notify(e){const t=this.sub1,o=this.sub2,r=this.source;void 0!==t&&t.handleChange(r,e),void 0!==o&&o.handleChange(r,e)}}class v{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const o=this.subscribers[e];void 0!==o&&o.notify(e),null===(t=this.sourceSubscribers)||void 0===t||t.notify(e)}subscribe(e,t){var o;if(t){let o=this.subscribers[t];void 0===o&&(this.subscribers[t]=o=new m(this.source)),o.subscribe(e)}else this.sourceSubscribers=null!==(o=this.sourceSubscribers)&&void 0!==o?o:new m(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var o;if(t){const o=this.subscribers[t];void 0!==o&&o.unsubscribe(e)}else null===(o=this.sourceSubscribers)||void 0===o||o.unsubscribe(e)}}const y=s.getById(2,(()=>{const e=/(:|&&|\|\||if)/,t=new WeakMap,o=new WeakMap,r=u.queueUpdate;let s,a=e=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function i(e){let o=e.$fastController||t.get(e);return void 0===o&&(Array.isArray(e)?o=a(e):t.set(e,o=new v(e))),o}function n(e){let t=o.get(e);if(void 0===t){let r=Reflect.getPrototypeOf(e);for(;void 0===t&&null!==r;)t=o.get(r),r=Reflect.getPrototypeOf(r);t=void 0===t?[]:t.slice(0),o.set(e,t)}return t}class l{constructor(e){this.name=e,this.field=`_${e}`,this.callback=`${e}Changed`}getValue(e){return void 0!==s&&s.watch(e,this.name),e[this.field]}setValue(e,t){const o=this.field,r=e[o];if(r!==t){e[o]=t;const s=e[this.callback];"function"==typeof s&&s.call(e,r,t),i(e).notify(this.name)}}}class c extends m{constructor(e,t,o=!1){super(e,t),this.binding=e,this.isVolatileBinding=o,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(e,t){this.needsRefresh&&null!==this.last&&this.disconnect();const o=s;s=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const r=this.binding(e,t);return s=o,r}disconnect(){if(null!==this.last){let e=this.first;for(;void 0!==e;)e.notifier.unsubscribe(this,e.propertyName),e=e.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(e,t){const o=this.last,r=i(e),a=null===o?this.first:{};if(a.propertySource=e,a.propertyName=t,a.notifier=r,r.subscribe(this,t),null!==o){if(!this.needsRefresh){let t;s=void 0,t=o.propertySource[o.propertyName],s=this,e===t&&(this.needsRefresh=!0)}o.next=a}this.last=a}handleChange(){this.needsQueue&&(this.needsQueue=!1,r(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let e=this.first;return{next:()=>{const t=e;return void 0===t?{value:void 0,done:!0}:(e=e.next,{value:t,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(e){a=e},getNotifier:i,track(e,t){void 0!==s&&s.watch(e,t)},trackVolatile(){void 0!==s&&(s.needsRefresh=!0)},notify(e,t){i(e).notify(t)},defineProperty(e,t){"string"==typeof t&&(t=new l(t)),n(e).push(t),Reflect.defineProperty(e,t.name,{enumerable:!0,get:function(){return t.getValue(this)},set:function(e){t.setValue(this,e)}})},getAccessors:n,binding(e,t,o=this.isVolatileBinding(e)){return new c(e,t,o)},isVolatileBinding:t=>e.test(t.toString())})}));function $(e,t){y.defineProperty(e,t)}const w=s.getById(3,(()=>{let e=null;return{get:()=>e,set(t){e=t}}}));class x{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return w.get()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){w.set(e)}}y.defineProperty(x.prototype,"index"),y.defineProperty(x.prototype,"length");const k=Object.seal(new x);class C{constructor(){this.targets=new WeakSet,this.behaviors=null}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=null===this.behaviors?e:this.behaviors.concat(e),this}}function B(e){return e.map((e=>e instanceof C?B(e.styles):[e])).reduce(((e,t)=>e.concat(t)),[])}function S(e){return e.map((e=>e instanceof C?e.behaviors:null)).reduce(((e,t)=>null===t?e:(null===e&&(e=[]),e.concat(t))),null)}C.create=(()=>{if(u.supportsAdoptedStyleSheets){const e=new Map;return t=>new z(t,e)}return e=>new P(e)})();class z extends C{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=S(e)}get styleSheets(){if(void 0===this._styleSheets){const e=this.styles,t=this.styleSheetCache;this._styleSheets=B(e).map((e=>{if(e instanceof CSSStyleSheet)return e;let o=t.get(e);return void 0===o&&(o=new CSSStyleSheet,o.replaceSync(e),t.set(e,o)),o}))}return this._styleSheets}addStylesTo(e){e.adoptedStyleSheets=[...e.adoptedStyleSheets,...this.styleSheets],super.addStylesTo(e)}removeStylesFrom(e){const t=this.styleSheets;e.adoptedStyleSheets=e.adoptedStyleSheets.filter((e=>-1===t.indexOf(e))),super.removeStylesFrom(e)}}let F=0;class P extends C{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=S(e),this.styleSheets=B(e),this.styleClass="fast-style-class-"+ ++F}addStylesTo(e){const t=this.styleSheets,o=this.styleClass;e=this.normalizeTarget(e);for(let r=0;r<t.length;r++){const s=document.createElement("style");s.innerHTML=t[r],s.className=o,e.append(s)}super.addStylesTo(e)}removeStylesFrom(e){const t=(e=this.normalizeTarget(e)).querySelectorAll(`.${this.styleClass}`);for(let o=0,r=t.length;o<r;++o)e.removeChild(t[o]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const T={toView:e=>e?"true":"false",fromView:e=>null!=e&&"false"!==e&&!1!==e&&0!==e},N={toView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t.toString()},fromView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t}};class A{constructor(e,t,o=t.toLowerCase(),r="reflect",s){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=o,this.mode=r,this.converter=s,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,"boolean"===r&&void 0===s&&(this.converter=T)}setValue(e,t){const o=e[this.fieldName],r=this.converter;void 0!==r&&(t=r.fromView(t)),o!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](o,t),e.$fastController.notify(this.name))}getValue(e){return y.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,o=this.guards;o.has(e)||"fromView"===t||u.queueUpdate((()=>{o.add(e);const r=e[this.fieldName];switch(t){case"reflect":const t=this.converter;u.setAttribute(e,this.attribute,void 0!==t?t.toView(r):r);break;case"boolean":u.setBooleanAttribute(e,this.attribute,r)}o.delete(e)}))}static collect(e,...t){const o=[];t.push(e.attributes);for(let r=0,s=t.length;r<s;++r){const s=t[r];if(void 0!==s)for(let t=0,r=s.length;t<r;++t){const r=s[t];"string"==typeof r?o.push(new A(e,r)):o.push(new A(e,r.property,r.attribute,r.mode,r.converter))}}return o}}function O(e,t){let o;function r(e,t){arguments.length>1&&(o.property=t);const r=e.constructor.attributes||(e.constructor.attributes=[]);r.push(o)}return arguments.length>1?(o={},void r(e,t)):(o=void 0===e?{}:e,r)}const E={mode:"open"},V={},L=s.getById(4,(()=>{const e=new Map;return Object.freeze({register:t=>!e.has(t.type)&&(e.set(t.type,t),!0),getByType:t=>e.get(t)})}));class I{constructor(e,t=e.definition){"string"==typeof t&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const o=A.collect(e,t.attributes),r=new Array(o.length),s={},a={};for(let e=0,t=o.length;e<t;++e){const t=o[e];r[e]=t.attribute,s[t.name]=t,a[t.attribute]=t}this.attributes=o,this.observedAttributes=r,this.propertyLookup=s,this.attributeLookup=a,this.shadowOptions=void 0===t.shadowOptions?E:null===t.shadowOptions?void 0:Object.assign(Object.assign({},E),t.shadowOptions),this.elementOptions=void 0===t.elementOptions?V:Object.assign(Object.assign({},V),t.elementOptions),this.styles=void 0===t.styles?void 0:Array.isArray(t.styles)?C.create(t.styles):t.styles instanceof C?t.styles:C.create([t.styles])}get isDefined(){return!!L.getByType(this.type)}define(e=customElements){const t=this.type;if(L.register(this)){const e=this.attributes,o=t.prototype;for(let t=0,r=e.length;t<r;++t)y.defineProperty(o,e[t]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}}I.forType=L.getByType;const R=new WeakMap,M={bubbles:!0,composed:!0,cancelable:!0};function H(e){return e.shadowRoot||R.get(e)||null}class D extends v{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const o=t.shadowOptions;if(void 0!==o){const t=e.attachShadow(o);"closed"===o.mode&&R.set(e,t)}const r=y.getAccessors(e);if(r.length>0){const t=this.boundObservables=Object.create(null);for(let o=0,s=r.length;o<s;++o){const s=r[o].name,a=e[s];void 0!==a&&(delete e[s],t[s]=a)}}}get isConnected(){return y.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,y.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=e,this.needsInitialization||null===e||this.addStyles(e))}addStyles(e){const t=H(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const o=e.behaviors;e.addStylesTo(t),null!==o&&this.addBehaviors(o)}}removeStyles(e){const t=H(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const o=e.behaviors;e.removeStylesFrom(t),null!==o&&this.removeBehaviors(o)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),o=e.length,r=[];for(let s=0;s<o;++s){const o=e[s];t.has(o)?t.set(o,t.get(o)+1):(t.set(o,1),r.push(o))}if(this._isConnected){const e=this.element;for(let t=0;t<r.length;++t)r[t].bind(e,k)}}removeBehaviors(e,t=!1){const o=this.behaviors;if(null===o)return;const r=e.length,s=[];for(let a=0;a<r;++a){const r=e[a];if(o.has(r)){const e=o.get(r)-1;0===e||t?o.delete(r)&&s.push(r):o.set(r,e)}}if(this._isConnected){const e=this.element;for(let t=0;t<s.length;++t)s[t].unbind(e)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(e,k);const t=this.behaviors;if(null!==t)for(const[o]of t)o.bind(e,k);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;null!==e&&e.unbind();const t=this.behaviors;if(null!==t){const e=this.element;for(const[o]of t)o.unbind(e)}}onAttributeChangedCallback(e,t,o){const r=this.definition.attributeLookup[e];void 0!==r&&r.onAttributeChangedCallback(this.element,o)}emit(e,t,o){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},M),o)))}finishInitialization(){const e=this.element,t=this.boundObservables;if(null!==t){const o=Object.keys(t);for(let r=0,s=o.length;r<s;++r){const s=o[r];e[s]=t[s]}this.boundObservables=null}const o=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():o.template&&(this._template=o.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():o.styles&&(this._styles=o.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,o=H(t)||t;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||u.removeChildNodes(o),e&&(this.view=e.render(t,o,t))}static forCustomElement(e){const t=e.$fastController;if(void 0!==t)return t;const o=I.forType(e.constructor);if(void 0===o)throw new Error("Missing FASTElement definition.");return e.$fastController=new D(e,o)}}function q(e){return class extends e{constructor(){super(),D.forCustomElement(this)}$emit(e,t,o){return this.$fastController.emit(e,t,o)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,o){this.$fastController.onAttributeChangedCallback(e,t,o)}}}const j=Object.assign(q(HTMLElement),{from:e=>q(e),define:(e,t)=>new I(e,t).define().type});function _(e){return function(t){new I(t,e).define()}}const U=/[\(\[\{][^\)\]\}]*[\)\]\}]/g,W=/[\0-\u001F\!-/:-@\[-`\{-\u00BF\u0250-\u036F\uD800-\uFFFF]/g,G=/^\d+[\d\s]*(:?ext|x|)\s*\d+$/i,K=/\s+/g,Q=/[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF\u3040-\u309F\u30A0-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]|[\uD840-\uD869][\uDC00-\uDED6]/;class X extends j{constructor(){super(...arguments),this.size=32,this.shape="circular",this.color="neutral",this.initials=void 0}nameChanged(e,t){var o,r,s;t&&(this.initials=(o=this.name,r="rtl"===window.getComputedStyle(this).direction,o?(o=function(e){return(e=(e=(e=e.replace(U,"")).replace(W,"")).replace(K," ")).trim()}(o),Q.test(o)||!s&&G.test(o)?"":function(e,t){let o="";const r=e.split(" ");return 2===r.length?(o+=r[0].charAt(0).toUpperCase(),o+=r[1].charAt(0).toUpperCase()):3===r.length?(o+=r[0].charAt(0).toUpperCase(),o+=r[2].charAt(0).toUpperCase()):0!==r.length&&(o+=r[0].charAt(0).toUpperCase()),t&&o.length>1?o.charAt(1)+o.charAt(0):o}(o,r)):""))}colorChanged(e,t){this.setColor()}setColor(){var e,t;return"colorful"===this.color?Y[J(null!==(t=null!==(e=this.idForColor)&&void 0!==e?e:this.name)&&void 0!==t?t:"")%Y.length]:this.color}}t([O],X.prototype,"name",void 0),t([O({converter:N})],X.prototype,"size",void 0),t([O],X.prototype,"shape",void 0),t([O],X.prototype,"active",void 0),t([O],X.prototype,"appearance",void 0),t([O],X.prototype,"color",void 0),t([O({attribute:"id-for-color"})],X.prototype,"idForColor",void 0),t([$],X.prototype,"initials",void 0);const Y=["darkRed","cranberry","red","pumpkin","peach","marigold","gold","brass","brown","forest","seafoam","darkGreen","lightTeal","teal","steel","blue","royalBlue","cornflower","navy","lavender","purple","grape","lilac","pink","magenta","plum","beige","mink","platinum","anchor"],J=e=>{let t=0;for(let o=e.length-1;o>=0;o--){const r=e.charCodeAt(o),s=o%8;t^=(r<<s)+(r>>8-s)}return t};class Z{constructor(){this.targetIndex=0}}class ee extends Z{constructor(){super(...arguments),this.createPlaceholder=u.createInterpolationPlaceholder}}class te extends Z{constructor(e,t,o){super(),this.name=e,this.behavior=t,this.options=o}createPlaceholder(e){return u.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function oe(e,t){this.source=e,this.context=t,null===this.bindingObserver&&(this.bindingObserver=y.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function re(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function se(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function ae(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function ie(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function ne(e){u.setAttribute(this.target,this.targetName,e)}function le(e){u.setBooleanAttribute(this.target,this.targetName,e)}function ce(e){if(null==e&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;void 0===t?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function de(e){this.target[this.targetName]=e}function he(e){const t=this.classVersions||Object.create(null),o=this.target;let r=this.version||0;if(null!=e&&e.length){const s=e.split(/\s+/);for(let e=0,a=s.length;e<a;++e){const a=s[e];""!==a&&(t[a]=r,o.classList.add(a))}}if(this.classVersions=t,this.version=r+1,0!==r){r-=1;for(const e in t)t[e]===r&&o.classList.remove(e)}}class ue extends ee{constructor(e){super(),this.binding=e,this.bind=oe,this.unbind=se,this.updateTarget=ne,this.isBindingVolatile=y.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,void 0!==e)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=de,"innerHTML"===this.cleanedTargetName){const e=this.binding;this.binding=(t,o)=>u.createHTML(e(t,o))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=le;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=re,this.unbind=ie;break;default:this.cleanedTargetName=e,"class"===e&&(this.updateTarget=he)}}targetAtContent(){this.updateTarget=ce,this.unbind=ae}createBehavior(e){return new pe(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class pe{constructor(e,t,o,r,s,a,i){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=o,this.bind=r,this.unbind=s,this.updateTarget=a,this.targetName=i}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){x.setEvent(e);const t=this.binding(this.source,this.context);x.setEvent(null),!0!==t&&e.preventDefault()}}let be=null;class ge{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){be=this}static borrow(e){const t=be||new ge;return t.directives=e,t.reset(),be=null,t}}function fe(e){if(1===e.length)return e[0];let t;const o=e.length,r=e.map((e=>"string"==typeof e?()=>e:(t=e.targetName||t,e.binding))),s=new ue(((e,t)=>{let s="";for(let a=0;a<o;++a)s+=r[a](e,t);return s}));return s.targetName=t,s}const me=h.length;function ve(e,t){const o=t.split(d);if(1===o.length)return null;const r=[];for(let t=0,s=o.length;t<s;++t){const s=o[t],a=s.indexOf(h);let i;if(-1===a)i=s;else{const t=parseInt(s.substring(0,a));r.push(e.directives[t]),i=s.substring(a+me)}""!==i&&r.push(i)}return r}function ye(e,t,o=!1){const r=t.attributes;for(let s=0,a=r.length;s<a;++s){const i=r[s],n=i.value,l=ve(e,n);let c=null;null===l?o&&(c=new ue((()=>n)),c.targetName=i.name):c=fe(l),null!==c&&(t.removeAttributeNode(i),s--,a--,e.addFactory(c))}}function $e(e,t,o){const r=ve(e,t.textContent);if(null!==r){let s=t;for(let a=0,i=r.length;a<i;++a){const i=r[a],n=0===a?t:s.parentNode.insertBefore(document.createTextNode(""),s.nextSibling);"string"==typeof i?n.textContent=i:(n.textContent=" ",e.captureContentBinding(i)),s=n,e.targetIndex++,n!==t&&o.nextNode()}e.targetIndex--}}const we=document.createRange();class xe{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=e.parentNode,o=this.lastChild;let r,s=this.firstChild;for(;s!==o;)r=s.nextSibling,t.insertBefore(s,e),s=r;t.insertBefore(o,e)}}remove(){const e=this.fragment,t=this.lastChild;let o,r=this.firstChild;for(;r!==t;)o=r.nextSibling,e.appendChild(r),r=o;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let o,r=this.firstChild;for(;r!==t;)o=r.nextSibling,e.removeChild(r),r=o;e.removeChild(t);const s=this.behaviors,a=this.source;for(let e=0,t=s.length;e<t;++e)s[e].unbind(a)}bind(e,t){const o=this.behaviors;if(this.source!==e)if(null!==this.source){const r=this.source;this.source=e,this.context=t;for(let s=0,a=o.length;s<a;++s){const a=o[s];a.unbind(r),a.bind(e,t)}}else{this.source=e,this.context=t;for(let r=0,s=o.length;r<s;++r)o[r].bind(e,t)}}unbind(){if(null===this.source)return;const e=this.behaviors,t=this.source;for(let o=0,r=e.length;o<r;++o)e[o].unbind(t);this.source=null}static disposeContiguousBatch(e){if(0!==e.length){we.setStartBefore(e[0].firstChild),we.setEndAfter(e[e.length-1].lastChild),we.deleteContents();for(let t=0,o=e.length;t<o;++t){const o=e[t],r=o.behaviors,s=o.source;for(let e=0,t=r.length;e<t;++e)r[e].unbind(s)}}}}class ke{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(null===this.fragment){let e;const t=this.html;if("string"==typeof t){e=document.createElement("template"),e.innerHTML=u.createHTML(t);const o=e.content.firstElementChild;null!==o&&"TEMPLATE"===o.tagName&&(e=o)}else e=t;const o=function(e,t){const o=e.content;document.adoptNode(o);const r=ge.borrow(t);ye(r,e,!0);const s=r.behaviorFactories;r.reset();const a=u.createTemplateWalker(o);let i;for(;i=a.nextNode();)switch(r.targetIndex++,i.nodeType){case 1:ye(r,i);break;case 3:$e(r,i,a);break;case 8:u.isMarker(i)&&r.addFactory(t[u.extractDirectiveIndexFromMarker(i)])}let n=0;(u.isMarker(o.firstChild)||1===o.childNodes.length&&t.length)&&(o.insertBefore(document.createComment(""),o.firstChild),n=-1);const l=r.behaviorFactories;return r.release(),{fragment:o,viewBehaviorFactories:l,hostBehaviorFactories:s,targetOffset:n}}(e,this.directives);this.fragment=o.fragment,this.viewBehaviorFactories=o.viewBehaviorFactories,this.hostBehaviorFactories=o.hostBehaviorFactories,this.targetOffset=o.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),o=this.viewBehaviorFactories,r=new Array(this.behaviorCount),s=u.createTemplateWalker(t);let a=0,i=this.targetOffset,n=s.nextNode();for(let e=o.length;a<e;++a){const e=o[a],t=e.targetIndex;for(;null!==n;){if(i===t){r[a]=e.createBehavior(n);break}n=s.nextNode(),i++}}if(this.hasHostBehaviors){const t=this.hostBehaviorFactories;for(let o=0,s=t.length;o<s;++o,++a)r[a]=t[o].createBehavior(e)}return new xe(t,r)}render(e,t,o){"string"==typeof t&&(t=document.getElementById(t)),void 0===o&&(o=t);const r=this.create(o);return r.bind(e,k),r.appendTo(t),r}}const Ce=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function Be(e,...t){const o=[];let r="";for(let s=0,a=e.length-1;s<a;++s){const a=e[s];let i=t[s];if(r+=a,i instanceof ke){const e=i;i=()=>e}if("function"==typeof i&&(i=new ue(i)),i instanceof ee){const e=Ce.exec(a);null!==e&&(i.targetName=e[2])}i instanceof Z?(r+=i.createPlaceholder(o.length),o.push(i)):r+=i}return r+=e[e.length-1],new ke(r,o)}function Se(e,t){const o="function"==typeof t?t:()=>t;return(t,r)=>e(t,r)?o(t,r):null}const ze=Be`<template role="img" data-color="${e=>e.setColor()}"><span class="initials" part="initials"><slot name="initials">${e=>e.initials}</slot></span><slot>${Se((e=>!e.initials),Be`<svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M10 2a4 4 0 100 8 4 4 0 000-8zM7 6a3 3 0 116 0 3 3 0 01-6 0zm-2 5a2 2 0 00-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0010 18c1.85 0 3.58-.39 4.87-1.2A4.35 4.35 0 0017 13a2 2 0 00-2-2H5zm-1 2a1 1 0 011-1h10a1 1 0 011 1c0 1.3-.62 2.28-1.67 2.95A8.16 8.16 0 0110 17a8.16 8.16 0 01-4.33-1.05A3.36 3.36 0 014 13z"></path></svg>`)}</slot><slot name="badge"></slot></template>`;class Fe{createCSS(){return""}createBehavior(){}}function Pe(e,...t){const{styles:o,behaviors:r}=function(e,t){const o=[];let r="";const s=[];for(let a=0,i=e.length-1;a<i;++a){r+=e[a];let i=t[a];if(i instanceof Fe){const e=i.createBehavior();i=i.createCSS(),e&&s.push(e)}i instanceof C||i instanceof CSSStyleSheet?(""!==r.trim()&&(o.push(r),r=""),o.push(i)):r+=i}return r+=e[e.length-1],""!==r.trim()&&o.push(r),{styles:o,behaviors:s}}(e,t),s=C.create(o);return r.length&&s.withBehaviors(...r),s}function Te(e){return`:host([hidden]){display:none}:host{display:${e}}`}const Ne="var(--colorNeutralForeground1)",Ae="var(--colorNeutralForeground2)",Oe="var(--colorNeutralForeground2Hover)",Ee="var(--colorNeutralForeground2Pressed)",Ve="var(--colorNeutralForeground2BrandHover)",Le="var(--colorNeutralForeground2BrandPressed)",Ie="var(--colorNeutralForeground2BrandSelected)",Re="var(--colorNeutralForeground3)",Me="var(--colorNeutralForegroundDisabled)",He="var(--colorBrandForegroundLink)",De="var(--colorBrandForegroundLinkHover)",qe="var(--colorBrandForegroundLinkPressed)",je="var(--colorNeutralForegroundOnBrand)",_e="var(--colorNeutralBackground1)",Ue="var(--colorNeutralBackground1Hover)",We="var(--colorNeutralBackground1Pressed)",Ge="var(--colorSubtleBackground)",Ke="var(--colorSubtleBackgroundHover)",Qe="var(--colorSubtleBackgroundPressed)",Xe="var(--colorTransparentBackground)",Ye="var(--colorTransparentBackgroundHover)",Je="var(--colorTransparentBackgroundPressed)",Ze="var(--colorTransparentBackgroundSelected)",et="var(--colorNeutralBackgroundDisabled)",tt="var(--colorBrandBackgroundHover)",ot="var(--colorBrandBackgroundPressed)",rt="var(--colorCompoundBrandBackground)",st="var(--colorCompoundBrandBackgroundHover)",at="var(--colorCompoundBrandBackgroundPressed)",it="var(--colorBrandBackgroundStatic)",nt="var(--colorNeutralStroke1)",lt="var(--colorNeutralStroke1Hover)",ct="var(--colorNeutralStroke1Pressed)",dt="var(--colorNeutralStrokeDisabled)",ht="var(--colorTransparentStroke)",ut="var(--colorTransparentStrokeInteractive)",pt="var(--colorPaletteLightGreenForeground3)",bt="var(--colorPaletteMarigoldBackground3)",gt="var(--borderRadiusSmall)",ft="var(--borderRadiusMedium)",mt="var(--borderRadiusLarge)",vt="var(--borderRadiusCircular)",yt="var(--fontFamilyBase)",$t="var(--fontSizeBase100)",wt="var(--fontSizeBase200)",xt="var(--fontSizeBase300)",kt="var(--fontSizeBase400)",Ct="var(--fontSizeBase500)",Bt="var(--fontSizeBase600)",St="var(--fontWeightRegular)",zt="var(--fontWeightSemibold)",Ft="var(--lineHeightBase200)",Pt="var(--lineHeightBase300)",Tt="var(--shadow4)",Nt="var(--shadow8)",At="var(--strokeWidthThin)",Ot="var(--strokeWidthThick)",Et="var(--strokeWidthThicker)",Vt="var(--strokeWidthThickest)";class Lt{constructor(e,t,o){this.propertyName=e,this.value=t,this.styles=o}bind(e){y.getNotifier(e).subscribe(this,this.propertyName),this.handleChange(e,this.propertyName)}unbind(e){y.getNotifier(e).unsubscribe(this,this.propertyName),e.$fastController.removeStyles(this.styles)}handleChange(e,t){e[t]===this.value?e.$fastController.addStyles(this.styles):e.$fastController.removeStyles(this.styles)}}function It(e,t){return new Lt("size",e,t)}const Rt="100ms",Mt="400ms",Ht="500ms",Dt="cubic-bezier(0.33,0.00,0.10,1.00)",qt="cubic-bezier(0.80,0.00,0.20,1.00)",jt="linear",_t=Pe`
    ${Te("inline-block")} :host {
        position: relative;
        flex-shrink: 0;
        vertical-align: middle;
        font-family: ${yt};
        font-weight: ${zt};
        border-radius: ${vt};
        color: ${Re};
        background-color: ${"var(--colorNeutralBackground6)"};
    }

    slot,
    ::slotted(img),
    .initials {
        position: absolute;
        box-sizing: border-box;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: inherit;
    }

    slot,
    .initials {
        lineHeight: 1;
        border: ${At} solid ${ht};
        display: flex;
        align-items: center;
        justify-content: center;
        vertical-align: center;
        text-align: center;
        user-select: none;
    }

    ::slotted(img) {
        object-fit: cover;
        vertical-align: top;
    }

    ::slotted(fluent-presence-badge),
    ::slotted(fluent-badge) {
        position: absolute;
        bottom: 0;
        right: 0;
        box-shadow: 0 0 0 ${At} ${_e};
    }

    :host([data-color="brand"]) {
        color: ${"var(--colorNeutralForegroundInverted)"};
        background-color: ${it};
    }
    :host([data-color="darkRed"]) {
        color: ${"var(--colorPaletteDarkRedForeground2)"};
        background-color: ${"var(--colorPaletteDarkRedBackground2)"};
    }
    :host([data-color="cranberry"]) {
        color: ${"var(--colorPaletteCranberryForeground2)"};
        background-color: ${"var(--colorPaletteCranberryBackground2)"};
    }
    :host([data-color="red"]) {
        color: ${"var(--colorPaletteRedForeground2)"};
        background-color: ${"var(--colorPaletteRedBackground2)"};
    }
    :host([data-color="pumpkin"]) {
        color: ${"var(--colorPalettePumpkinForeground2)"};
        background-color: ${"var(--colorPalettePumpkinBackground2)"};
    }
    :host([data-color="peach"]) {
        color: ${"var(--colorPalettePeachForeground2)"};
        background-color: ${"var(--colorPalettePeachBackground2)"};
    }
    :host([data-color="marigold"]) {
        color: ${"var(--colorPaletteMarigoldForeground2)"};
        background-color: ${"var(--colorPaletteMarigoldBackground2)"};
    }
    :host([data-color="gold"]) {
        color: ${"var(--colorPaletteGoldForeground2)"};
        background-color: ${"var(--colorPaletteGoldBackground2)"};
    }
    :host([data-color="brass"]) {
        color: ${"var(--colorPaletteBrassForeground2)"};
        background-color: ${"var(--colorPaletteBrassBackground2)"};
    }
    :host([data-color="brown"]) {
        color: ${"var(--colorPaletteBrownForeground2)"};
        background-color: ${"var(--colorPaletteBrownBackground2)"};
    }
    :host([data-color="forest"]) {
        color: ${"var(--colorPaletteForestForeground2)"};
        background-color: ${"var(--colorPaletteForestBackground2)"};
    }
    :host([data-color="seafoam"]) {
        color: ${"var(--colorPaletteSeafoamForeground2)"};
        background-color: ${"var(--colorPaletteSeafoamBackground2)"};
    }
    :host([data-color="darkGreen"]) {
        color: ${"var(--colorPaletteDarkGreenForeground2)"};
        background-color: ${"var(--colorPaletteDarkGreenBackground2)"};
    }
    :host([data-color="lightTeal"]) {
        color: ${"var(--colorPaletteLightTealForeground2)"};
        background-color: ${"var(--colorPaletteLightTealBackground2)"};
    }
    :host([data-color="teal"]) {
        color: ${"var(--colorPaletteTealForeground2)"};
        background-color: ${"var(--colorPaletteTealBackground2)"};
    }
    :host([data-color="steel"]) {
        color: ${"var(--colorPaletteSteelForeground2)"};
        background-color: ${"var(--colorPaletteSteelBackground2)"};
    }
    :host([data-color="blue"]) {
        color: ${"var(--colorPaletteBlueForeground2)"};
        background-color: ${"var(--colorPaletteBlueBackground2)"};
    }
    :host([data-color="royalBlue"]) {
        color: ${"var(--colorPaletteRoyalBlueForeground2)"};
        background-color: ${"var(--colorPaletteRoyalBlueBackground2)"};
    }
    :host([data-color="cornflower"]) {
        color: ${"var(--colorPaletteCornflowerForeground2)"};
        background-color: ${"var(--colorPaletteCornflowerBackground2)"};
    }
    :host([data-color="navy"]) {
        color: ${"var(--colorPaletteNavyForeground2)"};
        background-color: ${"var(--colorPaletteNavyBackground2)"};
    }
    :host([data-color="lavender"]) {
        color: ${"var(--colorPaletteLavenderForeground2)"};
        background-color: ${"var(--colorPaletteLavenderBackground2)"};
    }
    :host([data-color="purple"]) {
        color: ${"var(--colorPalettePurpleForeground2)"};
        background-color: ${"var(--colorPalettePurpleBackground2)"};
    }
    :host([data-color="grape"]) {
        color: ${"var(--colorPaletteGrapeForeground2)"};
        background-color: ${"var(--colorPaletteGrapeBackground2)"};
    }
    :host([data-color="lilac"]) {
        color: ${"var(--colorPaletteLilacForeground2)"};
        background-color: ${"var(--colorPaletteLilacBackground2)"};
    }
    :host([data-color="pink"]) {
        color: ${"var(--colorPalettePinkForeground2)"};
        background-color: ${"var(--colorPalettePinkBackground2)"};
    }
    :host([data-color="magenta"]) {
        color: ${"var(--colorPaletteMagentaForeground2)"};
        background-color: ${"var(--colorPaletteMagentaBackground2)"};
    }
    :host([data-color="plum"]) {
        color: ${"var(--colorPalettePlumForeground2)"};
        background-color: ${"var(--colorPalettePlumBackground2)"};
    }
    :host([data-color="beige"]) {
        color: ${"var(--colorPaletteBeigeForeground2)"};
        background-color: ${"var(--colorPaletteBeigeBackground2)"};
    }
    :host([data-color="mink"]) {
        color: ${"var(--colorPaletteMinkForeground2)"};
        background-color: ${"var(--colorPaletteMinkBackground2)"};
    }
    :host([data-color="platinum"]) {
        color: ${"var(--colorPalettePlatinumForeground2)"};
        background-color: ${"var(--colorPalettePlatinumBackground2)"};
    }
    :host([data-color="anchor"]) {
        color: ${"var(--colorPaletteAnchorForeground2)"};
        background-color: ${"var(--colorPaletteAnchorBackground2)"};
    }
`.withBehaviors(new class{constructor(e,t){this.propertyName=e,this.styles=t}bind(e){y.getNotifier(e).subscribe(this,this.propertyName),this.handleChange(e,this.propertyName)}unbind(e){y.getNotifier(e).unsubscribe(this,this.propertyName),e.$fastController.removeStyles(this.styles)}handleChange(e,t){void 0!==e[t]?e.$fastController.addStyles(this.styles):e.$fastController.removeStyles(this.styles)}}("active",Pe`
        :host([active]) {
             /* Work-around for text pixel snapping at the end of the animation */
            transform: perspective(1px);
            transition-property: transform, opacity;
            transition-duration: ${Ht}, ${Rt};
            transition-delay: ${qt}, ${jt};
        }

        :host([active])::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            border-radius: inherit;
            transition-property: margin, opacity;
            transition-duration: ${Ht}, ${Mt};
            transition-delay: ${qt}, ${jt};
        }

        :host([appearance="ring"])::before,
        :host([appearance="ring-shadow"])::before {
            border-style: solid;
            border-color: ${it};
        }

        :host([active]:not([appearance="shadow"]))::before {
            margin: calc(-2 * ${Ot});
            border-width: ${Ot};
        }

        :host([size="56"][active]:not([appearance="shadow"]))::before,
        :host([size="64"][active]:not([appearance="shadow"]))::before {
            margin: calc(-2 * ${Et});
            border-width: ${Et};
        }
        
        :host([size="72"][active]:not([appearance="shadow"]))::before,
        :host([size="96"][active]:not([appearance="shadow"]))::before,
        :host([size="120"][active]:not([appearance="shadow"]))::before,
        :host([size="128"][active]:not([appearance="shadow"]))::before {
            margin: calc(-2 * ${Vt});
            border-width: ${Vt};
        }

        :host([active][appearance])::before {
            box-shadow: ${Tt};
        }

        :host([size="32"][active][appearance])::before,
        :host([size="36"][active][appearance])::before,
        :host([size="40"][active][appearance])::before,
        :host([size="48"][active][appearance])::before {
            box-shadow: ${Nt};
        }

        :host([size="56"][active][appearance])::before,
        :host([size="64"][active][appearance])::before {
            box-shadow: ${"var(--shadow16)"};
        }

        :host([size="72"][active][appearance])::before,
        :host([size="96"][active][appearance])::before,
        :host([size="120"][active][appearance])::before,
        :host([size="128"][active][appearance])::before {
            box-shadow: ${"var(--shadow28)"};
        }

        :host([active][appearance="ring"])::before {
            box-shadow: none;
        }

        :host([active="inactive"]) {
            opacity: 0.8;
            transform: scale(0.875);
            transition-property: transform, opacity;
            transition-duration: ${Ht}, ${Rt};
            transition-delay: ${Dt}, ${jt};
        }

        :host([active="inactive"])::before {
            margin: 0;
            opacity: 0;  
            transition-property: margin, opacity;
            transition-duration: ${Ht}, ${Mt};
            transition-delay: ${Dt}, ${jt};
        }
    `),It(20,Pe`
        :host([size="20"]) {
            width: 20px;
            height: 20px;
            font-size: ${$t};
            font-weight: ${St};
        }

        slot[name="icon"] > svg,
        ::slotted(svg) {
            width: 16px;
            height: 16px;
            font-size: 16px;
        }
    `),It(24,Pe`
        :host([size="24"]) {
            width: 24px;
            height: 24px;
            font-size: ${$t};
            font-weight: ${St};
        }

        slot[name="icon"] > svg,
        ::slotted(svg) {
            width: 16px;
            height: 16px;
            font-size: 16px;
        }
    `),It(28,Pe`
        :host([size="28"]) {
            width: 28px;
            height: 28px;
            font-size: ${wt};   
        }

        slot[name="icon"] > svg,
        ::slotted(svg) {
            width: 20px;
            height: 20px;
            font-size: 20px;
        }
    `),It(32,Pe`
        :host([size="32"]) {
            width: 32px;
            height: 32px;
            font-size: ${xt};
        }

        slot[name="icon"] > svg,
        ::slotted(svg) {
            width: 20px;
            height: 20px;
            font-size: 20px;
        }
    `),It(36,Pe`
        :host([size="36"]) {
            width: 36px;
            height: 36px;
            font-size: ${xt}; 
        }

        slot[name="icon"] > svg,
        ::slotted(svg) {
            width: 20px;
            height: 20px;
            font-size: 20px;
        }
    `),It(40,Pe`
        :host([size="40"]) {
            width: 40px;
            height: 40px;
            font-size: ${xt}; 
        }

        slot[name="icon"] > svg,
        ::slotted(svg) {
            width: 20px;
            height: 20px;
            font-size: 20px;
        }
    `),It(48,Pe`
        :host([size="48"]) {
            width: 48px;
            height: 48px;
            font-size: ${kt};
        }

        slot[name="icon"] > svg,
        ::slotted(svg) {
            width: 24px;
            height: 24px;
            font-size: 24px;
        }
    `),It(56,Pe`
        :host([size="56"]) {
            width: 56px;
            height: 56px;
            font-size: ${kt};
        }

        slot[name="icon"] > svg,
        ::slotted(svg) {
            width: 28px;
            height: 28px;
            font-size: 28px;
        }
    `),It(64,Pe`
        :host([size="64"]) {
            width: 64px;
            height: 64px;
            font-size: ${Ct};
        }

        slot[name="icon"] > svg,
        ::slotted(svg) {
            width: 32px;
            height: 32px;
            font-size: 32px;
        }
    `),It(72,Pe`
        :host([size="72"]) {
            width: 72px;
            height: 72px;
            font-size: ${Ct};
        }

        slot[name="icon"] > svg,
        ::slotted(svg) {
            width: 32px;
            height: 32px;
            font-size: 32px;
        }
    `),It(96,Pe`
        :host([size="96"]) {
            width: 96px;
            height: 96px;
            font-size: ${Ct};
        }

        slot[name="icon"] > svg,
        ::slotted(svg) {
            width: 48px;
            height: 48px;
            font-size: 48px;
        }
    `),It(120,Pe`
        :host([size="120"]) {
            width: 120px;
            height: 120px;
            font-size: ${Bt};
        }

        slot[name="icon"] > svg,
        ::slotted(svg) {
            width: 48px;
            height: 48px;
            font-size: 48px;
        }
    `),It(128,Pe`
        :host([size="128"]) {
            width: 128px;
            height: 128px;
            font-size: ${Bt};
        }

        slot[name="icon"] > svg,
        ::slotted(svg) {
            width: 48px;
            height: 48px;
            font-size: 48px;
        }
    `),(Ut=Pe`
        :host([shape="square"]) {
            border-radius: ${ft};
        }

        :host([shape="square"][size="20"]),
        :host([shape="square"][size="24"]) {
            border-radius: ${gt};
        }

        :host([shape="square"][size="28"]),
        :host([shape="square"][size="32"]),
        :host([shape="square"][size="36"]),
        :host([shape="square"][size="40"]),
        :host([shape="square"][size="48"]) {
            border-radius: ${ft};
        }

        :host([shape="square"][size="56"]),
        :host([shape="square"][size="64"]),
        :host([shape="square"][size="72"]) {
            border-radius: ${mt};
        }

        :host([shape="square"][size="96"]),
        :host([shape="square"][size="120"]),
        :host([shape="square"][size="128"]) {
            border-radius: ${"var(--borderRadiusXLarge)"};
        }
    `,new Lt("shape","square",Ut)));var Ut;let Wt=class extends X{};function Gt(e,...t){t.forEach((t=>{if(Object.getOwnPropertyNames(t.prototype).forEach((o=>{"constructor"!==o&&Object.defineProperty(e.prototype,o,Object.getOwnPropertyDescriptor(t.prototype,o))})),t.attributes){const o=e.attributes||[];e.attributes=o.concat(t.attributes)}}))}var Kt;function Qt(e,t,o,r){var s,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,r);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(i=(a<3?s(i):a>3?s(t,o,i):s(t,o))||i);return a>3&&i&&Object.defineProperty(t,o,i),i}Wt=t([_({name:"fluent-avatar",template:ze,styles:_t})],Wt);class Xt{}Qt([O({attribute:"aria-atomic",mode:"fromView"})],Xt.prototype,"ariaAtomic",void 0),Qt([O({attribute:"aria-busy",mode:"fromView"})],Xt.prototype,"ariaBusy",void 0),Qt([O({attribute:"aria-controls",mode:"fromView"})],Xt.prototype,"ariaControls",void 0),Qt([O({attribute:"aria-current",mode:"fromView"})],Xt.prototype,"ariaCurrent",void 0),Qt([O({attribute:"aria-describedby",mode:"fromView"})],Xt.prototype,"ariaDescribedby",void 0),Qt([O({attribute:"aria-details",mode:"fromView"})],Xt.prototype,"ariaDetails",void 0),Qt([O({attribute:"aria-disabled",mode:"fromView"})],Xt.prototype,"ariaDisabled",void 0),Qt([O({attribute:"aria-errormessage",mode:"fromView"})],Xt.prototype,"ariaErrormessage",void 0),Qt([O({attribute:"aria-flowto",mode:"fromView"})],Xt.prototype,"ariaFlowto",void 0),Qt([O({attribute:"aria-haspopup",mode:"fromView"})],Xt.prototype,"ariaHaspopup",void 0),Qt([O({attribute:"aria-hidden",mode:"fromView"})],Xt.prototype,"ariaHidden",void 0),Qt([O({attribute:"aria-invalid",mode:"fromView"})],Xt.prototype,"ariaInvalid",void 0),Qt([O({attribute:"aria-keyshortcuts",mode:"fromView"})],Xt.prototype,"ariaKeyshortcuts",void 0),Qt([O({attribute:"aria-label",mode:"fromView"})],Xt.prototype,"ariaLabel",void 0),Qt([O({attribute:"aria-labelledby",mode:"fromView"})],Xt.prototype,"ariaLabelledby",void 0),Qt([O({attribute:"aria-live",mode:"fromView"})],Xt.prototype,"ariaLive",void 0),Qt([O({attribute:"aria-owns",mode:"fromView"})],Xt.prototype,"ariaOwns",void 0),Qt([O({attribute:"aria-relevant",mode:"fromView"})],Xt.prototype,"ariaRelevant",void 0),Qt([O({attribute:"aria-roledescription",mode:"fromView"})],Xt.prototype,"ariaRoledescription",void 0),function(e){e[e.alt=18]="alt",e[e.arrowDown=40]="arrowDown",e[e.arrowLeft=37]="arrowLeft",e[e.arrowRight=39]="arrowRight",e[e.arrowUp=38]="arrowUp",e[e.back=8]="back",e[e.backSlash=220]="backSlash",e[e.break=19]="break",e[e.capsLock=20]="capsLock",e[e.closeBracket=221]="closeBracket",e[e.colon=186]="colon",e[e.colon2=59]="colon2",e[e.comma=188]="comma",e[e.ctrl=17]="ctrl",e[e.delete=46]="delete",e[e.end=35]="end",e[e.enter=13]="enter",e[e.equals=187]="equals",e[e.equals2=61]="equals2",e[e.equals3=107]="equals3",e[e.escape=27]="escape",e[e.forwardSlash=191]="forwardSlash",e[e.function1=112]="function1",e[e.function10=121]="function10",e[e.function11=122]="function11",e[e.function12=123]="function12",e[e.function2=113]="function2",e[e.function3=114]="function3",e[e.function4=115]="function4",e[e.function5=116]="function5",e[e.function6=117]="function6",e[e.function7=118]="function7",e[e.function8=119]="function8",e[e.function9=120]="function9",e[e.home=36]="home",e[e.insert=45]="insert",e[e.menu=93]="menu",e[e.minus=189]="minus",e[e.minus2=109]="minus2",e[e.numLock=144]="numLock",e[e.numPad0=96]="numPad0",e[e.numPad1=97]="numPad1",e[e.numPad2=98]="numPad2",e[e.numPad3=99]="numPad3",e[e.numPad4=100]="numPad4",e[e.numPad5=101]="numPad5",e[e.numPad6=102]="numPad6",e[e.numPad7=103]="numPad7",e[e.numPad8=104]="numPad8",e[e.numPad9=105]="numPad9",e[e.numPadDivide=111]="numPadDivide",e[e.numPadDot=110]="numPadDot",e[e.numPadMinus=109]="numPadMinus",e[e.numPadMultiply=106]="numPadMultiply",e[e.numPadPlus=107]="numPadPlus",e[e.openBracket=219]="openBracket",e[e.pageDown=34]="pageDown",e[e.pageUp=33]="pageUp",e[e.period=190]="period",e[e.print=44]="print",e[e.quote=222]="quote",e[e.scrollLock=145]="scrollLock",e[e.shift=16]="shift",e[e.space=32]="space",e[e.tab=9]="tab",e[e.tilde=192]="tilde",e[e.windowsLeft=91]="windowsLeft",e[e.windowsOpera=219]="windowsOpera",e[e.windowsRight=92]="windowsRight"}(Kt||(Kt={}));const Yt="form-associated-proxy",Jt="ElementInternals"in window&&"setFormValue"in window.ElementInternals.prototype,Zt=new WeakMap;function eo(e){const t=class extends e{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Jt}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,t=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),o=e?t.concat(Array.from(e)):t;return Object.freeze(o)}return a}valueChanged(e,t){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),u.queueUpdate((()=>this.classList.toggle("disabled",this.disabled)))}nameChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),u.queueUpdate((()=>this.classList.toggle("required",this.required))),this.validate()}get elementInternals(){if(!Jt)return null;let e=Zt.get(this);return e||(e=this.attachInternals(),Zt.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach((e=>this.proxy.removeEventListener(e,this.stopPropagation))),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,t,o){this.elementInternals?this.elementInternals.setValidity(e,t,o):"string"==typeof t&&this.proxy.setCustomValidity(t)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach((e=>this.proxy.addEventListener(e,this.stopPropagation))),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Yt),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Yt)),null===(e=this.shadowRoot)||void 0===e||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),null===(e=this.shadowRoot)||void 0===e||e.removeChild(this.proxySlot)}validate(){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage)}setFormValue(e,t){this.elementInternals&&this.elementInternals.setFormValue(e,t||e)}_keypressHandler(e){if("Enter"===e.key&&this.form instanceof HTMLFormElement){const e=this.form.querySelector("[type=submit]");null==e||e.click()}}stopPropagation(e){e.stopPropagation()}};return O({mode:"boolean"})(t.prototype,"disabled"),O({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),O({attribute:"current-value"})(t.prototype,"currentValue"),O(t.prototype,"name"),O({mode:"boolean"})(t.prototype,"required"),$(t.prototype,"value"),t}class to extends j{}class oo extends(eo(to)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class ro extends oo{constructor(){super(...arguments),this.handleClick=e=>{var t;this.disabled&&(null===(t=this.defaultSlottedContent)||void 0===t?void 0:t.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;null===(e=this.form)||void 0===e||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})},this.shape="rounded",this.size="medium",this.block=!1,this.disabledFocusable=!1}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===t&&this.addEventListener("click",this.handleSubmission),"submit"===e&&this.removeEventListener("click",this.handleSubmission),"reset"===t&&this.addEventListener("click",this.handleFormReset),"reset"===e&&this.removeEventListener("click",this.handleFormReset)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.addEventListener("click",this.handleClick)}))}disconnectedCallback(){var e;super.disconnectedCallback();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.removeEventListener("click",this.handleClick)}))}defaultSlottedContentChanged(){const e=this.defaultSlottedContent.filter((e=>e.nodeType===Node.ELEMENT_NODE));1===e.length&&e[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}t([O({mode:"boolean"})],ro.prototype,"autofocus",void 0),t([O({attribute:"form"})],ro.prototype,"formId",void 0),t([O],ro.prototype,"formaction",void 0),t([O],ro.prototype,"formenctype",void 0),t([O],ro.prototype,"formmethod",void 0),t([O({mode:"boolean"})],ro.prototype,"formnovalidate",void 0),t([O],ro.prototype,"formtarget",void 0),t([O],ro.prototype,"type",void 0),t([$],ro.prototype,"defaultSlottedContent",void 0),t([O({attribute:"aria-expanded",mode:"fromView"})],ro.prototype,"ariaExpanded",void 0),t([O({attribute:"aria-pressed",mode:"fromView"})],ro.prototype,"ariaPressed",void 0),t([O],ro.prototype,"appearance",void 0),t([O],ro.prototype,"shape",void 0),t([O],ro.prototype,"size",void 0),t([O({mode:"boolean"})],ro.prototype,"block",void 0),t([O({attribute:"disabledfocusable",mode:"boolean"})],ro.prototype,"disabledFocusable",void 0),Gt(ro,Xt);class so{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}function ao(e){return new te("fast-ref",so,e)}class io extends class{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=y.getAccessors(e).some((e=>e.name===t)),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(a),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function no(e){return"string"==typeof e&&(e={property:e}),new te("fast-slotted",io,e)}const lo=new MutationObserver((e=>{for(const t of e)co.getOrCreateFor(t.target).notify(t.attributeName)}));class co extends m{constructor(e){super(e),this.watchedAttributes=new Set,co.subscriberCache.set(e,this)}subscribe(e){super.subscribe(e),this.watchedAttributes.has(e.attributes)||(this.watchedAttributes.add(e.attributes),this.observe())}unsubscribe(e){super.unsubscribe(e),this.watchedAttributes.has(e.attributes)&&(this.watchedAttributes.delete(e.attributes),this.observe())}static getOrCreateFor(e){return this.subscriberCache.get(e)||new co(e)}observe(){const e=[];for(const t of this.watchedAttributes.values())for(let o=0;o<t.length;o++)e.push(t[o]);lo.observe(this.source,{attributeFilter:e})}}co.subscriberCache=new WeakMap;class ho{constructor(e,t){this.target=e,this.attributes=Object.freeze(t)}bind(e){if(co.getOrCreateFor(e).subscribe(this),e.hasAttributes())for(let t=0;t<e.attributes.length;t++)this.handleChange(e,e.attributes[t].name)}unbind(e){co.getOrCreateFor(e).unsubscribe(this)}handleChange(e,t){this.attributes.includes(t)&&u.setAttribute(this.target,t,e.getAttribute(t))}}const uo=Be`<button class="base" part="base" ?autofocus="${e=>e.autofocus}" ?disabled="${e=>e.disabled}" tabindex="${e=>e.disabledFocusable?"0":void 0}" aria-disabled="${e=>!0===e.disabledFocusable?"true":e.ariaDisabled}" ${new te("fast-reflect-attr",ho,["form","formaction","formenctype","formmethod","formnovalidate","formtarget","name","type","value","aria-atomic","aria-busy","aria-controls","aria-current","aria-describedby","aria-details","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-live","aria-owns","aria-pressed","aria-relevant","aria-roledescription"])} ${ao("control")}><slot name="start"></slot><slot ${no("defaultSlottedContent")}></slot><slot name="end"></slot></button>`;function po(e,t){return new Lt("appearance",e,t)}const bo=Pe`
    ${Te("inline-block")}

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
        background-color: ${_e};
        color: ${Ne};
        border: ${At} solid ${nt};
        font-family: ${yt};
        outline-style: none;
    }

    :host(:hover) .base {
        background-color: ${Ue};
        border-color: ${lt};
        color: ${Ne};
        cursor: pointer;
    }

    :host(:active) .base {
        background-color: ${We};
        border-color: ${ct};
        color: ${Ne};
        outline-style: none;
    }

    :host([size][shape="circular"]) .base {
        border-radius: ${vt};
    }

    :host([size][shape="square"]) .base {
        border-radius: ${"var(--borderRadiusNone)"};
    }

    :host([disabled]) .base,
    :host .base[aria-disabled="true"] {
        background-color: ${et};
        border-color: ${dt};
        color: ${Me};
        cursor: not-allowed;
    }
`,go=Pe`
    :host([appearance="primary"]) .base {
        background-color: ${"var(--colorBrandBackground)"};
        border-color: transparent;
        color: ${je};
    }

    :host([appearance="primary"]:hover) .base {
        background-color: ${tt};
        border-color: transparent;
        color: ${je};
    }

    :host([appearance="primary"]:active) .base {
        background-color: ${ot};
        border-color: transparent;
        color: ${je};
    }

    :host([appearance="primary"][disabled]) .base,
    :host([appearance="primary"][disabled]:hover) .base,
    :host([appearance="primary"][disabled]:active) .base,
    :host([appearance="primary"]) .base[aria-disabled="true"],
    :host([appearance="primary"]:hover) .base[aria-disabled="true"],
    :host([appearance="primary"]:active) .base[aria-disabled="true"] {
        background-color: ${et};
        border-color: ${dt};
        color: ${Me};
        cursor: not-allowed;
        border-color: transparent;
    }
`,fo=Pe`
    :host([appearance="subtle"]) .base {
        background-color: ${Ge};
        border-color: transparent;
        color: ${Ae};
    }

    :host([appearance="subtle"]:hover) .base {
        background-color: ${Ke};
        border-color: transparent;
        color: ${Ve};
    }

    :host([appearance="subtle"]:active) .base {
        background-color: ${Qe};
        border-color: transparent;
        color: ${Le};
    }

    :host([appearance="subtle"][disabled]) .base {
        background-color: ${et};
        border-color: ${dt};
        color: ${Me};
        cursor: not-allowed;
    }

    :host([appearance="subtle"][disabled]) .base,
    :host([appearance="subtle"][disabled]:hover) .base,
    :host([appearance="subtle"][disabled]:active) .base {
        background-color: transparent;
        border-color: transparent;
    }
`,mo=Pe`
    :host([appearance="outline"]) .base {
        background-color: ${Xe};
    }

    :host([appearance="outline"]:hover) .base {
        background-color: ${Ye};
    }

    :host([appearance="outline"]:active) .base {
        background-color: ${Je};
    }
`,vo=Pe`
    :host([appearance="transparent"]) .base {
        background-color: ${Xe};
        border-color: transparent;
        color: ${Ae};
    }

    :host([appearance="transparent"]:hover) .base {
        background-color: ${Ye};
        border-color: transparent;
        color: ${Ve};
    }

    :host([appearance="transparent"]:active) .base {
        background-color: ${Je};
        border-color: transparent;
        color: ${Le};
    }

    :host([appearance="transparent"][disabled]) .base,
    :host([appearance="transparent"][disabled]:hover) .base,
    :host([appearance="transparent"][disabled]:active) .base {
        background-color: transparent;
        border-color: transparent;
        color: ${Me};
    }
`,yo=Pe`
    :host([size="small"]) .base {
        gap: 4px;
        padding: 0 8px;
        height: 24px;
        min-width: 64px;
        border-radius: ${gt};
        font-size: ${wt};
        font-weight: ${St};
        line-height: ${Ft};
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
`,$o=Pe`
    :host([size="medium"]) .base {
        gap: 6px;
        padding: 0 12px;
        height: 32px;
        min-width: 96px;
        border-radius: ${ft};
        font-size: ${xt};
        font-weight: ${zt};
        line-height: ${Pt};
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
`,wo=Pe`
    :host([size="large"]) .base {
        gap: 6px;
        padding: 0 16px;
        height: 40px;
        min-width: 96px;
        border-radius: ${mt};
        font-size: ${xt};
        font-weight: ${zt};
        line-height: ${Pt};
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
`,xo=Pe`${bo}`.withBehaviors(po("primary",Pe`${go}`),po("subtle",Pe`${fo}`),po("outline",Pe`${mo}`),po("transparent",Pe`${vo}`),It("small",Pe`${yo}`),It("medium",Pe`${$o}`),It("large",Pe`${wo}`));let ko=class extends ro{};ko=t([_({name:"fluent-button",template:uo,styles:xo,shadowOptions:{delegatesFocus:!0}})],ko);class Co extends j{constructor(){super(...arguments),this.appearance="filled",this.interactive=!1}}t([O],Co.prototype,"appearance",void 0),t([O({mode:"boolean"})],Co.prototype,"interactive",void 0);const Bo=Pe`${Te("block")}:host{contain:content;color:${Ne};border-width:${At};border-style:solid;border-color:none;border-radius:${ft}}:host([interactive]){cursor:pointer}:host([interactive]:hover){box-shadow:${Nt}}::slotted(*){margin:12px}::slotted(fluent-card-preview){margin:0}`.withBehaviors(po("filled",Pe`:host([appearance=filled]){background-color:${_e};border-color:${ht};box-shadow:${Tt}}:host([appearance=filled][interactive]:hover){background-color:${Ue};border-color:${ut}}:host([appearance=filled][interactive]:active){background-color:${We}}`),po("filled-alternative",Pe`:host([appearance=filled-alternative]){background-color:${"var(--colorNeutralBackground2)"};border-color:${ht};box-shadow:${Tt}}:host([appearance=filled-alternative][interactive]:hover){background-color:${"var(--colorNeutralBackground2Hover)"};border-color:${ut}}:host([appearance=filled-alternative][interactive]:active){background-color:${"var(--colorNeutralBackground2Pressed)"}}`),po("outline",Pe`:host([appearance=outline]){background-color:${Xe};border-color:${nt}}:host([appearance=outline][interactive]:hover){border-color:${lt}}:host([appearance=outline][interactive]:active){background-color:${ct}}:host([appearance=outline]),:host([appearance=outline][interactive]),:host([appearance=outline][interactive]:hover){box-shadow:none}`),po("subtle",Pe`:host([appearance=subtle]){background-color:${Ge};border-color:${ht}}:host([appearance=subtle][interactive]:hover){border-color:${Ke}}:host([appearance=subtle][interactive]:active){background-color:${Qe}}:host([appearance=subtle]),:host([appearance=subtle][interactive]),:host([appearance=subtle][interactive]:hover){box-shadow:none}`));let So=class extends Co{};So=t([_({name:"fluent-card",template:Be`<template role="group"><slot></slot></template>`,styles:Bo})],So);class zo extends j{}const Fo=Be`<slot></slot><slot name="action"></slot>`,Po=Pe`${Te("flex")}:host{display:flex;flex-direction:row;gap:12px}::slotted([slot=action]){margin-inline-start:auto}`;let To=class extends zo{};To=t([_({name:"fluent-card-footer",template:Fo,styles:Po})],To);class No extends j{}const Ao=Be`<template><slot name="image"></slot><div class="text-container" part="text-container"><slot></slot><slot name="description"></slot></div><slot name="action"></slot></template>`,Oo=Pe`${Te("flex")}:host{display:flex;flex-direction:row;align-items:center;gap:12px;height:32px}::slotted([slot=image]),::slotted(img){min-width:24px;min-height:24px;max-width:32px;max-height:32px}.text-container{display:flex;flex-direction:column;flex-grow:1;height:inherit}.text-container>*{height:50%}`;let Eo=class extends No{};Eo=t([_({name:"fluent-card-header",template:Ao,styles:Oo})],Eo);class Vo extends j{}const Lo=Be`<slot></slot><slot name="logo"></slot>`,Io=Pe`${Te("block")}:host{position:relative}::slotted(*){display:block}::slotted([slot=logo]){position:absolute;bottom:12px;left:12px;width:32px;height:32px}`;let Ro=class extends Vo{};Ro=t([_({name:"fluent-card-preview",template:Lo,styles:Io})],Ro);const Mo=Be`<template role="checkbox" aria-checked="${e=>e.checked}" aria-required="${e=>e.required}" aria-disabled="${e=>e.disabled}" aria-readonly="${e=>e.readOnly}" tabindex="${e=>e.disabled?null:0}" @keypress="${(e,t)=>e.keypressHandler(t.event)}" @click="${(e,t)=>e.clickHandler(t.event)}" class="${e=>e.indeterminate?"indeterminate":""}"><div part="control" class="control"><slot name="checked-indicator"><svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/></svg></slot><slot name="indeterminate-indicator"><svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M2 4c0-1.1.9-2 2-2h4a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2V4z"></path></svg></slot></div><slot></slot></template>`;class Ho extends j{}class Do extends(function(e){class t extends(eo(e)){}class o extends t{constructor(...e){super(e),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(e,t){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),void 0!==e&&this.$emit("change"),this.validate()}currentCheckedChanged(e,t){this.checked=this.currentChecked}updateForm(){const e=this.checked?this.value:null;this.setFormValue(e,e)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return O({attribute:"checked",mode:"boolean"})(o.prototype,"checkedAttribute"),O({attribute:"current-checked",converter:T})(o.prototype,"currentChecked"),$(o.prototype,"defaultChecked"),$(o.prototype,"checked"),o}(Ho)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class qo extends Do{constructor(){super(),this.size="medium",this.labelBefore=!1,this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{" "===e.key&&(this.checked=!this.checked)},this.clickHandler=e=>{this.disabled||this.readOnly||(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}let jo;t([O],qo.prototype,"size",void 0),t([O({attribute:"label-before",mode:"boolean"})],qo.prototype,"labelBefore",void 0),t([O({attribute:"readonly",mode:"boolean"})],qo.prototype,"readOnly",void 0),t([$],qo.prototype,"defaultSlottedNodes",void 0),t([$],qo.prototype,"indeterminate",void 0);const _o=function(){if("boolean"==typeof jo)return jo;if("undefined"==typeof window||!window.document||!window.document.createElement)return jo=!1,jo;const e=document.createElement("style"),t=function(){const e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}();null!==t&&e.setAttribute("nonce",t),document.head.appendChild(e);try{e.sheet.insertRule("foo:focus-visible {color:inherit}",0),jo=!0}catch(e){jo=!1}finally{document.head.removeChild(e)}return jo}()?"focus-visible":"focus",Uo="12px",Wo="16px",Go="20px",Ko=Pe`
    ${Te("inline-flex")} :host {
      align-items: center;
      height: 32px;
      outline: none;
      ${""} user-select: none;
      cursor: pointer;
    }

    :host([size="medium"]) .control {
        width: ${Wo};
        height: ${Wo};
    }

    :host([size="large"]) .control {
        width: ${Go};
        height: ${Go};
    }

    .control {
      position: relative;
      box-sizing: border-box;
      border-radius: ${gt};
      border: ${At} solid ${"var(--colorNeutralStrokeAccessible)"};
      outline: none;
    }

    ::slotted(*) {
      font-family: ${yt};
      color: ${Re};
      margin-inline-start: ${Uo};
      font-size: ${xt};
      line-height: ${Pt};
      cursor: pointer;
    }

    :host(:hover) ::slotted(*) {
        color: ${Ae};
    }

    slot[name='checked-indicator'],
    slot[name='indeterminate-indicator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      opacity: 0;
      fill: currentColor;
      pointer-events: none;
    }

    :host([aria-checked="true"][size="medium"]) slot[name='checked-indicator'] {
        width: 12px;
        height: 12px;
    }

    :host(.indeterminate) .control {
        border-color: ${"var(--colorCompoundBrandStroke)"};
    }

    :host(.indeterminate) slot[name='indeterminate-indicator'] {
        opacity: 1;
    }

    :host slot[name='indeterminate-indicator'] {
        position: absolute;
        top: 0;
        color: ${"var(--colorCompoundBrandForeground1)"};
    }

    :host(:hover) slot[name='indeterminate-indicator'] {
        border-color: ${"var(--colorCompoundBrandStrokeHover)"};
        color: ${"var(--colorCompoundBrandForeground1Hover)"};
    }

    :host(:active) slot[name='indeterminate-indicator'] {
        border-color: ${"var(--colorCompoundBrandStrokePressed)"};
        color: ${"var(--colorCompoundBrandForeground1Pressed)"};
    }

    :host(:not(.disabled):hover) .control {
        border-color: ${"var(--colorNeutralStrokeAccessibleHover)"};
    }

    :host(:not(.disabled):active) ::slotted(*) {
      color: ${Ne};
    }

    :host(:not(.disabled):hover) .control {
        border-color: ${"var(--colorNeutralStrokeAccessiblePressed)"};
    }

    /*
    NEED TO ADD FOCUS STYLES
    :host(:${_o}) .control {} */
    /* Checked Styles */
    :host([aria-checked="true"]) slot[name='checked-indicator'],
    :host([aria-checked="true"]) slot[name='indeterminate-indicator'] {
        fill: ${je};
    }

    :host([aria-checked="true"]) ::slotted(*) {
        color: ${Ne};
    }

    :host([aria-checked="true"]:not([disabled])) .control {
      background: ${rt};
      border-color: ${rt};
    }

    :host([aria-checked="true"]) slot[name='checked-indicator'] {
        opacity: 1;
    }

    :host([aria-checked="true"].indeterminate) slot[name='indeterminate-indicator'] {
        opacity: 0;
    }

    /* Checked Disabled */
    :host([aria-checked="true"]:not([disabled]):hover) .control {
      background: ${st};
      border-color: ${st};
    }

    :host([aria-checked="true"]:not([disabled]):active) .control {
      background: ${at};
      border-color: ${at};
    }

    :host([readonly]),
    :host([disabled]),
    :host([disabled]) ::slotted(*),
    :host([readonly]) ::slotted(*), {
      cursor: default;
    }

    :host([disabled]) .control,
    :host([disabled]) ::slotted(*),
    :host([disabled]) slot[name="indeterminate-indicator"],
    :host([disabled]) slot[name="checked-indicator"] {
      border-color: ${dt};
      color: ${Me};
      fill: currentColor;
    }

    :host([label-before]) {
        flex-direction: row-reverse;
    }
    
    :host([label-before]) ::slotted(*) {
        margin-inline-start: 0;
        margin-inline-end: ${Uo};
    }
  `;let Qo=class extends qo{};var Xo;Qo=t([_({name:"fluent-checkbox",template:Mo,styles:Ko})],Qo),function(e){e.separator="separator",e.presentation="presentation"}(Xo||(Xo={}));class Yo extends j{constructor(){super(...arguments),this.role=Xo.separator,this.alignContent="center",this.inset=!1,this.vertical=!1}}t([O],Yo.prototype,"role",void 0),t([O],Yo.prototype,"appearance",void 0),t([O({attribute:"align-content"})],Yo.prototype,"alignContent",void 0),t([O({mode:"boolean"})],Yo.prototype,"inset",void 0),t([O({mode:"boolean"})],Yo.prototype,"vertical",void 0);const Jo=Be`<template class="${e=>e.hasChildNodes()?"children":"childless"}" role="${e=>e.role}" aria-orientation="${e=>e.vertical?"vertical":"horizontal"}">${Se((e=>e.hasChildNodes()),Be`<div class="wrapper" part="wrapper"><slot></slot></div>`)}</template>`,Zo="12px",er="12px",tr="8px",or="8px;";function rr(e,t){return new Lt("vertical",e,t)}const sr=Pe`${Te("flex")}:host{align-items:center;box-sizing:border-box;flex-direction:row;flex-grow:1;position:relative;font-family:${yt};font-size:${wt};font-weight:${St};line-height:${Ft};text-align:center;color:${Ae}}:host::after,:host::before{box-sizing:border-box;display:flex;flex-grow:1}:host::after,:host::before{border-color:${"var(--colorNeutralStroke2)"}}:host([align-content=start])::after{content:""}:host([align-content=center])::after,:host([align-content=center])::before{content:""}:host([align-content=end])::before{content:""}:host([align-content].childless)::before{margin-bottom:0;margin-right:0}:host([align-content].childless)::after{margin-left:0;margin-top:0}`.withBehaviors(po("brand",Pe`:host([appearance=brand]){color:${"var(--colorBrandForeground1)"}}:host([appearance=brand])::after,:host([appearance=brand])::before{border-color:${"var(--colorBrandStroke1)"}}`),po("subtle",Pe`:host([appearance=subtle])::after,:host([appearance=subtle])::before{border-color:${"var(--colorNeutralStroke3)"}}`),po("strong",Pe`:host([appearance=strong])::after,:host([appearance=strong])::before{border-color:${nt}}`),rr(!1,Pe`:host{width:100%}:host::after,:host::before{border-top-style:solid;border-top-width:${At};min-width:${or}}:host([inset]){padding-inline:${er}}:host([align-content=start])::before{content:"";margin-right:${Zo};max-width:${tr}}:host([align-content=start])::after{margin-left:${Zo}}:host([align-content=center])::before{margin-right:${Zo}}:host([align-content=center])::after{margin-left:${Zo}}:host([align-content=end])::after{content:"";margin-left:${Zo};max-width:${tr}}:host([align-content=end])::before{margin-right:${Zo}}`),rr(!0,Pe`:host([vertical]){flex-direction:column;min-height:20px}:host([vertical])::after,:host([vertical])::before{border-right-style:solid;border-right-width:${At};min-height:${or}}:host([inset]){margin-block:${er}}:host([vertical].children){min-height:84px}:host([align-content=start])::before{content:"";margin-bottom:${Zo};max-height:${tr}}:host([align-content=start])::after{margin-top:${Zo}}:host([align-content=center])::before{margin-bottom:${Zo}}:host([align-content=center])::after{margin-top:${Zo}}:host([align-content=end])::after{content:"";margin-top:${Zo};max-height:${tr}}:host([align-content=end])::before{margin-bottom:${Zo}}`));let ar=class extends Yo{};ar=t([_({name:"fluent-divider",template:Jo,styles:sr})],ar);class ir extends j{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})},this.inline=!1,this.disabled=!1,this.disabledFocusable=!1}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}handleDisabledClick(e){if(!this.disabled&&!this.disabledFocusable)return!0;e.preventDefault()}handleDisabledKeydown(e){if(!this.disabled&&!this.disabledFocusable||"Enter"!==e.key&&" "!==e.key)return!0;e.preventDefault(),e.stopPropagation()}}t([O],ir.prototype,"download",void 0),t([O],ir.prototype,"href",void 0),t([O],ir.prototype,"hreflang",void 0),t([O],ir.prototype,"ping",void 0),t([O],ir.prototype,"referrerpolicy",void 0),t([O],ir.prototype,"rel",void 0),t([O],ir.prototype,"target",void 0),t([O],ir.prototype,"type",void 0),t([O({attribute:"aria-expanded",mode:"fromView"})],ir.prototype,"ariaExpanded",void 0),t([$],ir.prototype,"defaultSlottedContent",void 0),t([O],ir.prototype,"appearance",void 0),t([O({mode:"boolean"})],ir.prototype,"inline",void 0),t([O({mode:"boolean"})],ir.prototype,"disabled",void 0),t([O({attribute:"disabledfocusable",mode:"boolean"})],ir.prototype,"disabledFocusable",void 0),Gt(ir,Xt);const nr=Be`<a class="base" part="base" download="${e=>e.download}" tabindex="${e=>e.disabledFocusable?"0":e.disabled?"-1":!!e.tabIndex||void 0}" href="${e=>e.href}" hreflang="${e=>e.hreflang}" ping="${e=>e.ping}" referrerpolicy="${e=>e.referrerpolicy}" rel="${e=>e.rel}" target="${e=>e.target}" type="${e=>e.type}" aria-atomic="${e=>e.ariaAtomic}" aria-busy="${e=>e.ariaBusy}" aria-controls="${e=>e.ariaControls}" aria-current="${e=>e.ariaCurrent}" aria-describedby="${e=>e.ariaDescribedby}" aria-details="${e=>e.ariaDetails}" aria-disabled="${e=>e.disabled||e.disabledFocusable||e.ariaDisabled}" aria-errormessage="${e=>e.ariaErrormessage}" aria-expanded="${e=>e.ariaExpanded}" aria-flowto="${e=>e.ariaFlowto}" aria-haspopup="${e=>e.ariaHaspopup}" aria-hidden="${e=>e.ariaHidden}" aria-invalid="${e=>e.ariaInvalid}" aria-keyshortcuts="${e=>e.ariaKeyshortcuts}" aria-label="${e=>e.ariaLabel}" aria-labelledby="${e=>e.ariaLabelledby}" aria-live="${e=>e.ariaLive}" aria-owns="${e=>e.ariaOwns}" aria-relevant="${e=>e.ariaRelevant}" aria-roledescription="${e=>e.ariaRoledescription}" @click="${(e,t)=>e.handleDisabledClick(t.event)}" @keydown="${(e,t)=>e.handleDisabledKeydown(t.event)}" ${ao("control")}><slot></slot></a>`,lr=Pe`${Te("inline")}:host .base{background-color:transparent;border-top-style:none;border-left-style:none;border-right-style:none;border-bottom-color:transparent;border-bottom-style:solid;border-bottom-width:${At};box-sizing:border-box;color:${He};cursor:pointer;font-family:${yt};font-size:${xt};font-weight:${St};margin:0;padding:0;overlow:inherit;text-align:left;text-decoration-line:none;text-overflow:inherit;user-select:text}:host(:hover) .base{border-bottom-color:${De};color:${De}}:host(:active) .base{border-bottom-color:${qe};color:${qe}}:host([inline]),:host([inline]) .base{font-size:inherit;line-height:inherit}:host([disabled]) .base,:host([disabledfocusable]) .base{border-bottom-color:transparent;color:${Me};cursor:not-allowed}:host([inline]) .base{border-bottom-color:${He}}:host([inline][disabled]) .base,:host([inline][disabledfocusable]) .base{border-bottom-color:${Me}}`.withBehaviors(po("subtle",Pe`:host([appearance=subtle]) .base{color:${Ae}}:host([appearance=subtle]:hover) .base{border-bottom-color:${Oe};color:${Oe}}:host([appearance=subtle]:active) .base{border-bottom-color:${Ee};color:${Ee}}:host([inline][appearance=subtle]) .base{border-bottom-color:${Ae}}:host([appearance=subtle][disabled]) .base,:host([appearance=subtle][disabledfocusable]) .base{border-bottom-color:transparent;color:${Me}}:host([appearance=subtle][inline][disabled]) .base,:host([appearance=subtle][inline][disabledfocusable]) .base{border-bottom-color:${Me}}`));let cr=class extends ir{};cr=t([_({name:"fluent-link",template:nr,styles:lr,shadowOptions:{delegatesFocus:!0}})],cr);const dr=Be`<template aria-hidden="true"><slot name="${e=>e.getSlotInfo().name}">${e=>Be`${e.getSlotInfo().icon}`}</slot></template>`,hr='<svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m10.7071 5.29289c.3905.39053.3905 1.02369 0 1.41422l-1.29289 1.29289 1.29289 1.29289c.3905.39053.3905 1.02371 0 1.41421s-1.02368.3905-1.41421 0l-1.29289-1.29289-1.29289 1.29289c-.39053.3905-1.02369.3905-1.41422 0-.39052-.3905-.39052-1.02368 0-1.41421l1.2929-1.29289-1.2929-1.29289c-.39052-.39053-.39052-1.02369 0-1.41422.39053-.39052 1.02369-.39052 1.41422 0l1.29289 1.2929 1.29289-1.2929c.39053-.39052 1.02371-.39052 1.41421 0z"/><path d="m0 8c0-4.41828 3.58172-8 8-8 4.4183 0 8 3.58172 8 8 0 4.4183-3.5817 8-8 8-4.41828 0-8-3.5817-8-8zm8-6c-3.31371 0-6 2.68629-6 6 0 3.3137 2.68629 6 6 6 3.3137 0 6-2.6863 6-6 0-3.31371-2.6863-6-6-6z"/><</svg>',ur='<svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m8.2071 6.20736c.39053-.39052.39054-1.02368.00002-1.41421s-1.02368-.39054-1.41422-.00002l-2.5 2.49991c-.18754.18754-.2929.44189-.2929.70711s.10535.51958.29289.70712l2.5 2.50003c.39053.3905 1.02369.3905 1.41422 0 .39052-.3906.39052-1.0237 0-1.41425l-.7929-.79289h3.58579c.5523 0 1-.44772 1-1s-.4477-1-1-1h-3.58573z"/><path d="m8 0c-4.41828 0-8 3.58172-8 8 0 4.4183 3.58172 8 8 8 4.4183 0 8-3.5817 8-8 0-4.41828-3.5817-8-8-8zm-6 8c0-3.31371 2.68629-6 6-6 3.3137 0 6 2.68629 6 6 0 3.3137-2.6863 6-6 6-3.31371 0-6-2.6863-6-6z"/></svg>',pr='<svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m8 2c-3.31371 0-6 2.68629-6 6 0 3.3137 2.68629 6 6 6 3.3137 0 6-2.6863 6-6 0-3.31371-2.6863-6-6-6zm-8 6c0-4.41828 3.58172-8 8-8 4.4183 0 8 3.58172 8 8 0 4.4183-3.5817 8-8 8-4.41828 0-8-3.5817-8-8z"/></svg>';class br extends j{constructor(){super(...arguments),this.status="available",this.size="medium",this.outofoffice=!1}getSlotInfo(){if(this.outofoffice)switch(this.status){case"available":return{name:this.status,icon:'<svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m11.7071 6.70711c.3905-.39053.3905-1.02369 0-1.41422-.3905-.39052-1.0237-.39052-1.4142 0l-3.2929 3.2929-1.29289-1.2929c-.39053-.39052-1.02369-.39052-1.41422 0-.39052.39053-.39052 1.02369 0 1.41422l2 1.99999c.39053.3905 1.02369.3905 1.41422 0z"/><path d="m0 8c0-4.41828 3.58172-8 8-8 4.4183 0 8 3.58172 8 8 0 4.4183-3.5817 8-8 8-4.41828 0-8-3.5817-8-8zm8-6c-3.31371 0-6 2.68629-6 6 0 3.3137 2.68629 6 6 6 3.3137 0 6-2.6863 6-6 0-3.31371-2.6863-6-6-6z"/></svg>'};case"away":return{name:this.status,icon:hr};case"busy":return{name:this.status,icon:'<svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m8 2c-3.31371 0-6 2.68629-6 6 0 3.3137 2.68629 6 6 6 3.3137 0 6-2.6863 6-6 0-3.31371-2.6863-6-6-6zm-8 6c0-4.41828 3.58172-8 8-8 4.4183 0 8 3.58172 8 8 0 4.4183-3.5817 8-8 8-4.41828 0-8-3.5817-8-8z"/></svg>'};case"donotdisturb":return{name:this.status,icon:'<svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m5.25 7c-.55228 0-1 .44772-1 1s.44772 1 1 1h5.5c.5523 0 1-.44772 1-1s-.4477-1-1-1z"/><path d="m0 8c0-4.41828 3.58172-8 8-8 4.4183 0 8 3.58172 8 8 0 4.4183-3.5817 8-8 8-4.41828 0-8-3.5817-8-8zm8-6c-3.31371 0-6 2.68629-6 6 0 3.3137 2.68629 6 6 6 3.3137 0 6-2.6863 6-6 0-3.31371-2.6863-6-6-6z"/></svg>'};case"offline":case"outofoffice":return{name:this.status,icon:ur};default:return{name:"unknown",icon:pr}}else switch(this.status){case"available":return{name:this.status,icon:'<svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m8 16c4.4183 0 8-3.5817 8-8 0-4.41828-3.5817-8-8-8-4.41828 0-8 3.58172-8 8 0 4.4183 3.58172 8 8 8zm3.7069-9.29261-4.00329 4.00001c-.18766.1875-.44214.2928-.70742.2926-.26529-.0002-.51964-.1057-.70707-.2935l-1.99679-1.99996c-.39021-.39084-.38971-1.024.00113-1.41421s1.024-.38971 1.41421.00113l1.28998 1.29205 3.29555-3.2929c.3907-.39037 1.0239-.39011 1.4142.00057.3904.39068.3901 1.02385-.0005 1.41421z"></svg>'};case"away":return{name:this.status,icon:'<svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m8 16c4.4183 0 8-3.5817 8-8 0-4.41828-3.5817-8-8-8-4.41828 0-8 3.58172-8 8 0 4.4183 3.58172 8 8 8zm.5-11.5v3.01937l2.1247 1.69976c.4313.34501.5012.97427.1562 1.40557s-.97433.5012-1.40559.1562l-2.5-2.00003c-.23722-.18977-.37531-.47709-.37531-.78087v-3.5c0-.55228.44772-1 1-1 .55229 0 1 .44772 1 1z"/></svg>'};case"busy":return{name:this.status,icon:'<svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m16 8c0 4.4183-3.5817 8-8 8-4.41828 0-8-3.5817-8-8 0-4.41828 3.58172-8 8-8 4.4183 0 8 3.58172 8 8z"/></svg>'};case"donotdisturb":return{name:this.status,icon:'<svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m8 16c4.4183 0 8-3.5817 8-8 0-4.41828-3.5817-8-8-8-4.41828 0-8 3.58172-8 8 0 4.4183 3.58172 8 8 8zm-2.75098-9h5.50088c.5523 0 1 .44772 1 1 0 .55229-.4477 1-1 1h-5.50088c-.55228 0-1-.44771-1-1 0-.55228.44772-1 1-1z"/></svg>'};case"offline":return{name:this.status,icon:hr};case"outofoffice":return{name:this.status,icon:ur};default:return{name:"unknown",icon:pr}}}}t([O],br.prototype,"status",void 0),t([O],br.prototype,"size",void 0),t([O({mode:"boolean"})],br.prototype,"outofoffice",void 0);const gr=Pe`${Te("inline-flex")}:host{box-sizing:border-box;align-items:center;justify-content:center;border-radius:50%;background-color:${_e}}:host([outofoffice]){color:${_e}}:host([status=away]){color:${bt}}:host([status=available]){color:${pt}}:host([outofoffice][status=offline]),:host([status=offline]){color:${Re}}:host([outofoffice][status=outofoffice]),:host([status=outofoffice]){color:${"var(--colorPaletteBerryForeground3)"}}:host([outofoffice][status=available]){color:${pt}}:host([outofoffice][status=away]){color:${bt}}:host([outofoffice][status=busy]),:host([outofoffice][status=donotdisturb]),:host([outofoffice][status=unknown]),:host([status=busy]),:host([status=donotdisturb]),:host([status=unknown]){color:${"var(--colorPaletteRedBackground3)"}}::slotted(*),slot{fill:currentColor}`.withBehaviors(It("tiny",Pe`::slotted(svg),:host([size=tiny]) svg{width:6px;height:6px}`),It("extra-small",Pe`::slotted(svg),:host([size=extra-small]) svg{width:10px;height:10px}`),It("small",Pe`::slotted(svg),:host([size=small]) svg{width:12px;height:12px}`),It("medium",Pe`::slotted(svg),:host([size=medium]) svg{width:16px;height:16px}`),It("large",Pe`::slotted(svg),:host([size=large]) svg{width:20px!important;height:20px!important}`),It("extra-large",Pe`::slotted(svg),:host([size=extra-large]) svg{width:28px!important;height:28px!important}`));let fr=class extends br{};fr=t([_({name:"fluent-presence-badge",template:dr,styles:gr})],fr);const mr=Be`<button class="base" part="base" ?autofocus="${e=>e.autofocus}" ?disabled="${e=>e.disabled}" tabindex="${e=>e.disabledFocusable?"0":!!e.tabIndex||void 0}" form="${e=>e.formId}" formaction="${e=>e.formaction}" formenctype="${e=>e.formenctype}" formmethod="${e=>e.formmethod}" formnovalidate="${e=>e.formnovalidate}" formtarget="${e=>e.formtarget}" name="${e=>e.name}" type="${e=>e.type}" value="${e=>e.value}" aria-atomic="${e=>e.ariaAtomic}" aria-busy="${e=>e.ariaBusy}" aria-controls="${e=>e.ariaControls}" aria-current="${e=>e.ariaCurrent}" aria-describedby="${e=>e.ariaDescribedby}" aria-details="${e=>e.ariaDetails}" aria-disabled="${e=>!0===e.disabledFocusable?"true":e.ariaDisabled}" aria-errormessage="${e=>e.ariaErrormessage}" aria-expanded="${e=>e.ariaExpanded}" aria-flowto="${e=>e.ariaFlowto}" aria-haspopup="${e=>e.ariaHaspopup}" aria-hidden="${e=>e.ariaHidden}" aria-invalid="${e=>e.ariaInvalid}" aria-keyshortcuts="${e=>e.ariaKeyshortcuts}" aria-label="${e=>e.ariaLabel}" aria-labelledby="${e=>e.ariaLabelledby}" aria-live="${e=>e.ariaLive}" aria-owns="${e=>e.ariaOwns}" aria-pressed="${e=>e.checked||e.ariaPressed}" aria-relevant="${e=>e.ariaRelevant}" aria-roledescription="${e=>e.ariaRoledescription}" @keypress="${(e,t)=>e.keypressHandler(t.event)}" @click="${(e,t)=>e.clickHandler(t.event)}" ${ao("control")}><slot name="start"></slot><slot ${no("defaultSlottedContent")}></slot><slot name="end"></slot></button>`;class vr extends ro{constructor(){super(),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.currentChecked=!1,this.keypressHandler=e=>{if(!this.disabled&&!this.disabledFocusable)switch(e.key){case"Enter":case" ":this.checked=!this.checked}},this.clickHandler=e=>{this.disabled||this.disabledFocusable||(this.checked=!this.checked)},this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(e,t){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,void 0!==e&&this.$emit("change")}currentCheckedChanged(e,t){this.checked=this.currentChecked}}t([O({attribute:"checked",mode:"boolean"})],vr.prototype,"checkedAttribute",void 0),t([$],vr.prototype,"defaultChecked",void 0),t([$],vr.prototype,"checked",void 0),t([O({attribute:"current-checked",mode:"boolean"})],vr.prototype,"currentChecked",void 0);const yr=Pe`${bo}:host([current-checked]) .base{background-color:${"var(--colorNeutralBackground1Selected)"};border-color:${nt};color:${Ne};border-width:${At}}:host([current-checked]:hover) .base{background-color:${Ue};border-color:${lt};color:${Ne}}:host([current-checked]:active) .base{background-color:${We};border-color:${ct};color:${Ne}}`.withBehaviors(po("primary",Pe`${go}:host([current-checked][appearance=primary]) .base{background-color:${"var(--colorBrandBackgroundSelected)"};border-color:transparent;color:${je}}:host([current-checked][appearance=primary]:hover) .base{background-color:${tt}}:host([current-checked][appearance=primary]:active) .base{background-color:${ot}}`),po("subtle",Pe`${fo}:host([current-checked][appearance=subtle]) .base{background-color:${"var(--colorSubtleBackgroundSelected)"};border-color:transparent;color:${Ie}}:host([current-checked][appearance=subtle]:hover) .base{background-color:${Ke};color:${Ve}}:host([current-checked][appearance=subtle]:active) .base{background-color:${Qe};color:${Le}}`),po("outline",Pe`${mo}:host([current-checked][appearance=outline]) .base{background-color:${Ze}}:host([current-checked][appearance=outline]:hover) .base{background-color:${Ye}}:host([current-checked][appearance=outline]:active) .base{background-color:${Je}}`),po("transparent",Pe`${vo}:host([current-checked][appearance=transparent]) .base{background-color:${Ze};border-color:transparent;color:${Ie}}:host([current-checked][appearance=transparent]:hover) .base{background-color:${Ye};color:${Ve}}:host([current-checked][appearance=transparent]:active) .base{background-color:${Je};color:${Le}}`),It("small",Pe`${yo}`),It("medium",Pe`${$o}`),It("large",Pe`${wo}`));let $r=class extends vr{};var wr;$r=t([_({name:"fluent-toggle-button",template:mr,styles:yr,shadowOptions:{delegatesFocus:!0}})],$r),function(e){e.Button="button",e.Mixed="mixed",e.Card="card"}(wr||(wr={}));const xr='<fluent-button appearance="primary">Button</fluent-button>',kr="<fluent-card>I'm a Card</fluent-card>",Cr=xr,Br=Be`<div id="container">${Se((e=>e.repeatNum),(e=>e.componentTemplate))}</div>`;let Sr=class extends j{constructor(){super(...arguments),this.repeatNum=0,this.component="",this.templatestr=Cr,this.componentTemplate=Be``}connectedCallback(){super.connectedCallback();const e=new URLSearchParams(document.location.search);this.component=e.get("component");const t=e.get("repeatNum");switch(t&&(this.repeatNum=parseInt(t)),this.component){case wr.Button:this.templatestr=xr;break;case wr.Card:this.templatestr=kr;break;default:this.templatestr=xr}const o=this.templatestr.repeat(this.repeatNum);this.componentTemplate=Be`${o}`}};t([$],Sr.prototype,"repeatNum",void 0),t([$],Sr.prototype,"component",void 0),Sr=t([_({name:"component-container",template:Br})],Sr)})();