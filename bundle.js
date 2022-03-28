(()=>{"use strict";var e={};function t(e,t,o,i){var s,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(a=(r<3?s(a):r>3?s(t,o,a):s(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),Object.create,Object.create;const o=function(){if("undefined"!=typeof globalThis)return globalThis;if(void 0!==e.g)return e.g;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(e){return{}}}();void 0===o.trustedTypes&&(o.trustedTypes={createPolicy:(e,t)=>t});const i={configurable:!1,enumerable:!1,writable:!1};void 0===o.FAST&&Reflect.defineProperty(o,"FAST",Object.assign({value:Object.create(null)},i));const s=o.FAST;if(void 0===s.getById){const e=Object.create(null);Reflect.defineProperty(s,"getById",Object.assign({value(t,o){let i=e[t];return void 0===i&&(i=o?e[t]=o():null),i}},i))}const r=Object.freeze([]),a=o.FAST.getById(1,(()=>{const e=[],t=[];function i(){if(t.length)throw t.shift()}function s(e){try{e.call()}catch(e){t.push(e),setTimeout(i,0)}}function r(){let t=0;for(;t<e.length;)if(s(e[t]),t++,t>1024){for(let o=0,i=e.length-t;o<i;o++)e[o]=e[o+t];e.length-=t,t=0}e.length=0}return Object.freeze({enqueue:function(t){e.length<1&&o.requestAnimationFrame(r),e.push(t)},process:r})})),n=o.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let l=n;const d=`fast-${Math.random().toString(36).substring(2,8)}`,c=`${d}{`,h=`}${d}`,u=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(l!==n)throw new Error("The HTML policy can only be set once.");l=e},createHTML:e=>l.createHTML(e),isMarker:e=>e&&8===e.nodeType&&e.data.startsWith(d),extractDirectiveIndexFromMarker:e=>parseInt(e.data.replace(`${d}:`,"")),createInterpolationPlaceholder:e=>`${c}${e}${h}`,createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder:e=>`\x3c!--${d}:${e}--\x3e`,queueUpdate:a.enqueue,processUpdates:a.process,nextUpdate:()=>new Promise(a.enqueue),setAttribute(e,t,o){null==o?e.removeAttribute(t):e.setAttribute(t,o)},setBooleanAttribute(e,t,o){o?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;null!==t;t=e.firstChild)e.removeChild(t)},createTemplateWalker:e=>document.createTreeWalker(e,133,null,!1)});function p(e){const t=this.spillover;-1===t.indexOf(e)&&t.push(e)}function b(e){const t=this.spillover,o=t.indexOf(e);-1!==o&&t.splice(o,1)}function g(e){const t=this.spillover,o=this.source;for(let i=0,s=t.length;i<s;++i)t[i].handleChange(o,e)}function f(e){return-1!==this.spillover.indexOf(e)}class v{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return this.sub1===e||this.sub2===e}subscribe(e){this.has(e)||(void 0!==this.sub1?void 0!==this.sub2?(this.spillover=[this.sub1,this.sub2,e],this.subscribe=p,this.unsubscribe=b,this.notify=g,this.has=f,this.sub1=void 0,this.sub2=void 0):this.sub2=e:this.sub1=e)}unsubscribe(e){this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0)}notify(e){const t=this.sub1,o=this.sub2,i=this.source;void 0!==t&&t.handleChange(i,e),void 0!==o&&o.handleChange(i,e)}}class m{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const o=this.subscribers[e];void 0!==o&&o.notify(e),null===(t=this.sourceSubscribers)||void 0===t||t.notify(e)}subscribe(e,t){var o;if(t){let o=this.subscribers[t];void 0===o&&(this.subscribers[t]=o=new v(this.source)),o.subscribe(e)}else this.sourceSubscribers=null!==(o=this.sourceSubscribers)&&void 0!==o?o:new v(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var o;if(t){const o=this.subscribers[t];void 0!==o&&o.unsubscribe(e)}else null===(o=this.sourceSubscribers)||void 0===o||o.unsubscribe(e)}}const y=s.getById(2,(()=>{const e=/(:|&&|\|\||if)/,t=new WeakMap,o=new WeakMap,i=u.queueUpdate;let s,r=e=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function a(e){let o=e.$fastController||t.get(e);return void 0===o&&(Array.isArray(e)?o=r(e):t.set(e,o=new m(e))),o}function n(e){let t=o.get(e);if(void 0===t){let i=Reflect.getPrototypeOf(e);for(;void 0===t&&null!==i;)t=o.get(i),i=Reflect.getPrototypeOf(i);t=void 0===t?[]:t.slice(0),o.set(e,t)}return t}class l{constructor(e){this.name=e,this.field=`_${e}`,this.callback=`${e}Changed`}getValue(e){return void 0!==s&&s.watch(e,this.name),e[this.field]}setValue(e,t){const o=this.field,i=e[o];if(i!==t){e[o]=t;const s=e[this.callback];"function"==typeof s&&s.call(e,i,t),a(e).notify(this.name)}}}class d extends v{constructor(e,t,o=!1){super(e,t),this.binding=e,this.isVolatileBinding=o,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(e,t){this.needsRefresh&&null!==this.last&&this.disconnect();const o=s;s=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const i=this.binding(e,t);return s=o,i}disconnect(){if(null!==this.last){let e=this.first;for(;void 0!==e;)e.notifier.unsubscribe(this,e.propertyName),e=e.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(e,t){const o=this.last,i=a(e),r=null===o?this.first:{};if(r.propertySource=e,r.propertyName=t,r.notifier=i,i.subscribe(this,t),null!==o){if(!this.needsRefresh){let t;s=void 0,t=o.propertySource[o.propertyName],s=this,e===t&&(this.needsRefresh=!0)}o.next=r}this.last=r}handleChange(){this.needsQueue&&(this.needsQueue=!1,i(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let e=this.first;return{next:()=>{const t=e;return void 0===t?{value:void 0,done:!0}:(e=e.next,{value:t,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(e){r=e},getNotifier:a,track(e,t){void 0!==s&&s.watch(e,t)},trackVolatile(){void 0!==s&&(s.needsRefresh=!0)},notify(e,t){a(e).notify(t)},defineProperty(e,t){"string"==typeof t&&(t=new l(t)),n(e).push(t),Reflect.defineProperty(e,t.name,{enumerable:!0,get:function(){return t.getValue(this)},set:function(e){t.setValue(this,e)}})},getAccessors:n,binding(e,t,o=this.isVolatileBinding(e)){return new d(e,t,o)},isVolatileBinding:t=>e.test(t.toString())})}));function x(e,t){y.defineProperty(e,t)}const $=s.getById(3,(()=>{let e=null;return{get:()=>e,set(t){e=t}}}));class w{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return $.get()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){$.set(e)}}y.defineProperty(w.prototype,"index"),y.defineProperty(w.prototype,"length");const k=Object.seal(new w);class C{constructor(){this.targets=new WeakSet,this.behaviors=null}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=null===this.behaviors?e:this.behaviors.concat(e),this}}function z(e){return e.map((e=>e instanceof C?z(e.styles):[e])).reduce(((e,t)=>e.concat(t)),[])}function B(e){return e.map((e=>e instanceof C?e.behaviors:null)).reduce(((e,t)=>null===t?e:(null===e&&(e=[]),e.concat(t))),null)}C.create=(()=>{if(u.supportsAdoptedStyleSheets){const e=new Map;return t=>new I(t,e)}return e=>new P(e)})();class I extends C{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=B(e)}get styleSheets(){if(void 0===this._styleSheets){const e=this.styles,t=this.styleSheetCache;this._styleSheets=z(e).map((e=>{if(e instanceof CSSStyleSheet)return e;let o=t.get(e);return void 0===o&&(o=new CSSStyleSheet,o.replaceSync(e),t.set(e,o)),o}))}return this._styleSheets}addStylesTo(e){e.adoptedStyleSheets=[...e.adoptedStyleSheets,...this.styleSheets],super.addStylesTo(e)}removeStylesFrom(e){const t=this.styleSheets;e.adoptedStyleSheets=e.adoptedStyleSheets.filter((e=>-1===t.indexOf(e))),super.removeStylesFrom(e)}}let T=0;class P extends C{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=B(e),this.styleSheets=z(e),this.styleClass="fast-style-class-"+ ++T}addStylesTo(e){const t=this.styleSheets,o=this.styleClass;e=this.normalizeTarget(e);for(let i=0;i<t.length;i++){const s=document.createElement("style");s.innerHTML=t[i],s.className=o,e.append(s)}super.addStylesTo(e)}removeStylesFrom(e){const t=(e=this.normalizeTarget(e)).querySelectorAll(`.${this.styleClass}`);for(let o=0,i=t.length;o<i;++o)e.removeChild(t[o]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const F={toView:e=>e?"true":"false",fromView:e=>null!=e&&"false"!==e&&!1!==e&&0!==e},S={toView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t.toString()},fromView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t}};class A{constructor(e,t,o=t.toLowerCase(),i="reflect",s){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=o,this.mode=i,this.converter=s,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,"boolean"===i&&void 0===s&&(this.converter=F)}setValue(e,t){const o=e[this.fieldName],i=this.converter;void 0!==i&&(t=i.fromView(t)),o!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](o,t),e.$fastController.notify(this.name))}getValue(e){return y.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,o=this.guards;o.has(e)||"fromView"===t||u.queueUpdate((()=>{o.add(e);const i=e[this.fieldName];switch(t){case"reflect":const t=this.converter;u.setAttribute(e,this.attribute,void 0!==t?t.toView(i):i);break;case"boolean":u.setBooleanAttribute(e,this.attribute,i)}o.delete(e)}))}static collect(e,...t){const o=[];t.push(e.attributes);for(let i=0,s=t.length;i<s;++i){const s=t[i];if(void 0!==s)for(let t=0,i=s.length;t<i;++t){const i=s[t];"string"==typeof i?o.push(new A(e,i)):o.push(new A(e,i.property,i.attribute,i.mode,i.converter))}}return o}}function O(e,t){let o;function i(e,t){arguments.length>1&&(o.property=t);const i=e.constructor.attributes||(e.constructor.attributes=[]);i.push(o)}return arguments.length>1?(o={},void i(e,t)):(o=void 0===e?{}:e,i)}const R={mode:"open"},E={},N=s.getById(4,(()=>{const e=new Map;return Object.freeze({register:t=>!e.has(t.type)&&(e.set(t.type,t),!0),getByType:t=>e.get(t)})}));class L{constructor(e,t=e.definition){"string"==typeof t&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const o=A.collect(e,t.attributes),i=new Array(o.length),s={},r={};for(let e=0,t=o.length;e<t;++e){const t=o[e];i[e]=t.attribute,s[t.name]=t,r[t.attribute]=t}this.attributes=o,this.observedAttributes=i,this.propertyLookup=s,this.attributeLookup=r,this.shadowOptions=void 0===t.shadowOptions?R:null===t.shadowOptions?void 0:Object.assign(Object.assign({},R),t.shadowOptions),this.elementOptions=void 0===t.elementOptions?E:Object.assign(Object.assign({},E),t.elementOptions),this.styles=void 0===t.styles?void 0:Array.isArray(t.styles)?C.create(t.styles):t.styles instanceof C?t.styles:C.create([t.styles])}get isDefined(){return!!N.getByType(this.type)}define(e=customElements){const t=this.type;if(N.register(this)){const e=this.attributes,o=t.prototype;for(let t=0,i=e.length;t<i;++t)y.defineProperty(o,e[t]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}}L.forType=N.getByType;const V=new WeakMap,H={bubbles:!0,composed:!0,cancelable:!0};function M(e){return e.shadowRoot||V.get(e)||null}class D extends m{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const o=t.shadowOptions;if(void 0!==o){const t=e.attachShadow(o);"closed"===o.mode&&V.set(e,t)}const i=y.getAccessors(e);if(i.length>0){const t=this.boundObservables=Object.create(null);for(let o=0,s=i.length;o<s;++o){const s=i[o].name,r=e[s];void 0!==r&&(delete e[s],t[s]=r)}}}get isConnected(){return y.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,y.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=e,this.needsInitialization||null===e||this.addStyles(e))}addStyles(e){const t=M(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const o=e.behaviors;e.addStylesTo(t),null!==o&&this.addBehaviors(o)}}removeStyles(e){const t=M(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const o=e.behaviors;e.removeStylesFrom(t),null!==o&&this.removeBehaviors(o)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),o=e.length,i=[];for(let s=0;s<o;++s){const o=e[s];t.has(o)?t.set(o,t.get(o)+1):(t.set(o,1),i.push(o))}if(this._isConnected){const e=this.element;for(let t=0;t<i.length;++t)i[t].bind(e,k)}}removeBehaviors(e,t=!1){const o=this.behaviors;if(null===o)return;const i=e.length,s=[];for(let r=0;r<i;++r){const i=e[r];if(o.has(i)){const e=o.get(i)-1;0===e||t?o.delete(i)&&s.push(i):o.set(i,e)}}if(this._isConnected){const e=this.element;for(let t=0;t<s.length;++t)s[t].unbind(e)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(e,k);const t=this.behaviors;if(null!==t)for(const[o]of t)o.bind(e,k);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;null!==e&&e.unbind();const t=this.behaviors;if(null!==t){const e=this.element;for(const[o]of t)o.unbind(e)}}onAttributeChangedCallback(e,t,o){const i=this.definition.attributeLookup[e];void 0!==i&&i.onAttributeChangedCallback(this.element,o)}emit(e,t,o){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},H),o)))}finishInitialization(){const e=this.element,t=this.boundObservables;if(null!==t){const o=Object.keys(t);for(let i=0,s=o.length;i<s;++i){const s=o[i];e[s]=t[s]}this.boundObservables=null}const o=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():o.template&&(this._template=o.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():o.styles&&(this._styles=o.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,o=M(t)||t;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||u.removeChildNodes(o),e&&(this.view=e.render(t,o,t))}static forCustomElement(e){const t=e.$fastController;if(void 0!==t)return t;const o=L.forType(e.constructor);if(void 0===o)throw new Error("Missing FASTElement definition.");return e.$fastController=new D(e,o)}}function j(e){return class extends e{constructor(){super(),D.forCustomElement(this)}$emit(e,t,o){return this.$fastController.emit(e,t,o)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,o){this.$fastController.onAttributeChangedCallback(e,t,o)}}}const q=Object.assign(j(HTMLElement),{from:e=>j(e),define:(e,t)=>new L(e,t).define().type});function _(e){return function(t){new L(t,e).define()}}var G;!function(e){e[e.alt=18]="alt",e[e.arrowDown=40]="arrowDown",e[e.arrowLeft=37]="arrowLeft",e[e.arrowRight=39]="arrowRight",e[e.arrowUp=38]="arrowUp",e[e.back=8]="back",e[e.backSlash=220]="backSlash",e[e.break=19]="break",e[e.capsLock=20]="capsLock",e[e.closeBracket=221]="closeBracket",e[e.colon=186]="colon",e[e.colon2=59]="colon2",e[e.comma=188]="comma",e[e.ctrl=17]="ctrl",e[e.delete=46]="delete",e[e.end=35]="end",e[e.enter=13]="enter",e[e.equals=187]="equals",e[e.equals2=61]="equals2",e[e.equals3=107]="equals3",e[e.escape=27]="escape",e[e.forwardSlash=191]="forwardSlash",e[e.function1=112]="function1",e[e.function10=121]="function10",e[e.function11=122]="function11",e[e.function12=123]="function12",e[e.function2=113]="function2",e[e.function3=114]="function3",e[e.function4=115]="function4",e[e.function5=116]="function5",e[e.function6=117]="function6",e[e.function7=118]="function7",e[e.function8=119]="function8",e[e.function9=120]="function9",e[e.home=36]="home",e[e.insert=45]="insert",e[e.menu=93]="menu",e[e.minus=189]="minus",e[e.minus2=109]="minus2",e[e.numLock=144]="numLock",e[e.numPad0=96]="numPad0",e[e.numPad1=97]="numPad1",e[e.numPad2=98]="numPad2",e[e.numPad3=99]="numPad3",e[e.numPad4=100]="numPad4",e[e.numPad5=101]="numPad5",e[e.numPad6=102]="numPad6",e[e.numPad7=103]="numPad7",e[e.numPad8=104]="numPad8",e[e.numPad9=105]="numPad9",e[e.numPadDivide=111]="numPadDivide",e[e.numPadDot=110]="numPadDot",e[e.numPadMinus=109]="numPadMinus",e[e.numPadMultiply=106]="numPadMultiply",e[e.numPadPlus=107]="numPadPlus",e[e.openBracket=219]="openBracket",e[e.pageDown=34]="pageDown",e[e.pageUp=33]="pageUp",e[e.period=190]="period",e[e.print=44]="print",e[e.quote=222]="quote",e[e.scrollLock=145]="scrollLock",e[e.shift=16]="shift",e[e.space=32]="space",e[e.tab=9]="tab",e[e.tilde=192]="tilde",e[e.windowsLeft=91]="windowsLeft",e[e.windowsOpera=219]="windowsOpera",e[e.windowsRight=92]="windowsRight"}(G||(G={}));const U="ArrowDown",W="ArrowLeft",Q="ArrowRight",K="ArrowUp",Y="Enter",X="Home",Z={ArrowDown:U,ArrowLeft:W,ArrowRight:Q,ArrowUp:K};function J(e,t,o){return o<e?t:o>t?e:o}class ee extends q{constructor(){super(...arguments),this.headinglevel=2,this.expanded=!1,this.clickHandler=e=>{this.expanded=!this.expanded,this.change()},this.change=()=>{this.$emit("change")}}}var te;t([O({attribute:"heading-level",mode:"fromView",converter:S})],ee.prototype,"headinglevel",void 0),t([O({mode:"boolean"})],ee.prototype,"expanded",void 0),t([O],ee.prototype,"size",void 0),t([O({attribute:"expand-icon-position"})],ee.prototype,"expandIconPosition",void 0),t([O],ee.prototype,"id",void 0),function(e){e.single="single",e.multi="multi"}(te||(te={}));class oe extends q{constructor(){super(...arguments),this.expandmode=te.multi,this.disabled=!1,this.activeItemIndex=0,this.change=()=>{this.$emit("change")},this.setItems=()=>{var e;0!==this.accordionItems.length&&(this.accordionIds=this.getItemIds(),this.accordionItems.forEach(((e,t)=>{e instanceof ee&&(e.addEventListener("change",this.activeItemChange),this.isSingleExpandMode()&&(this.activeItemIndex!==t?e.expanded=!1:e.expanded=!0));const o=this.accordionIds[t];e.setAttribute("id","string"!=typeof o?`accordion-${t+1}`:o),this.activeid=this.accordionIds[this.activeItemIndex],e.addEventListener("keydown",this.handleItemKeyDown),e.addEventListener("focus",this.handleItemFocus)})),this.isSingleExpandMode())&&(null!==(e=this.findExpandedItem())&&void 0!==e?e:this.accordionItems[0]).setAttribute("aria-disabled","true")},this.removeItemListeners=e=>{e.forEach(((e,t)=>{e.removeEventListener("change",this.activeItemChange),e.removeEventListener("keydown",this.handleItemKeyDown),e.removeEventListener("focus",this.handleItemFocus)}))},this.activeItemChange=e=>{const t=e.target;this.activeid=t.getAttribute("id"),this.isSingleExpandMode()&&(this.resetItems(),t.expanded=!0,t.setAttribute("aria-disabled","true"),this.accordionItems.forEach((e=>{e.hasAttribute("disabled")||e.id===this.activeid||e.removeAttribute("aria-disabled")}))),this.activeItemIndex=Array.from(this.accordionItems).indexOf(t),this.change()},this.handleItemKeyDown=e=>{if(e.target===e.currentTarget)switch(this.accordionIds=this.getItemIds(),e.key){case K:e.preventDefault(),this.adjust(-1);break;case U:e.preventDefault(),this.adjust(1);break;case X:this.activeItemIndex=0,this.focusItem();break;case"End":this.activeItemIndex=this.accordionItems.length-1,this.focusItem()}},this.handleItemFocus=e=>{if(e.target===e.currentTarget){const t=e.target,o=this.activeItemIndex=Array.from(this.accordionItems).indexOf(t);this.activeItemIndex!==o&&-1!==o&&(this.activeItemIndex=o,this.activeid=this.accordionIds[this.activeItemIndex])}}}accordionItemsChanged(e,t){this.$fastController.isConnected&&(this.removeItemListeners(e),this.setItems())}findExpandedItem(){for(let e=0;e<this.accordionItems.length;e++)if("true"===this.accordionItems[e].getAttribute("expanded"))return this.accordionItems[e];return null}resetItems(){this.accordionItems.forEach(((e,t)=>{e.expanded=!1}))}getItemIds(){return this.accordionItems.map((e=>e.getAttribute("id")))}isSingleExpandMode(){return this.expandmode===te.single}adjust(e){this.activeItemIndex=J(0,this.accordionItems.length-1,this.activeItemIndex+e),this.focusItem()}focusItem(){const e=this.accordionItems[this.activeItemIndex];e instanceof ee&&e.expandbutton.focus()}}t([O({attribute:"expand-mode"})],oe.prototype,"expandmode",void 0),t([x],oe.prototype,"accordionItems",void 0),t([O({mode:"boolean"})],oe.prototype,"disabled",void 0);class ie{constructor(){this.targetIndex=0}}class se extends ie{constructor(){super(...arguments),this.createPlaceholder=u.createInterpolationPlaceholder}}class re extends ie{constructor(e,t,o){super(),this.name=e,this.behavior=t,this.options=o}createPlaceholder(e){return u.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function ae(e,t){this.source=e,this.context=t,null===this.bindingObserver&&(this.bindingObserver=y.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function ne(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function le(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function de(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function ce(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function he(e){u.setAttribute(this.target,this.targetName,e)}function ue(e){u.setBooleanAttribute(this.target,this.targetName,e)}function pe(e){if(null==e&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;void 0===t?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function be(e){this.target[this.targetName]=e}function ge(e){const t=this.classVersions||Object.create(null),o=this.target;let i=this.version||0;if(null!=e&&e.length){const s=e.split(/\s+/);for(let e=0,r=s.length;e<r;++e){const r=s[e];""!==r&&(t[r]=i,o.classList.add(r))}}if(this.classVersions=t,this.version=i+1,0!==i){i-=1;for(const e in t)t[e]===i&&o.classList.remove(e)}}class fe extends se{constructor(e){super(),this.binding=e,this.bind=ae,this.unbind=le,this.updateTarget=he,this.isBindingVolatile=y.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,void 0!==e)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=be,"innerHTML"===this.cleanedTargetName){const e=this.binding;this.binding=(t,o)=>u.createHTML(e(t,o))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=ue;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=ne,this.unbind=ce;break;default:this.cleanedTargetName=e,"class"===e&&(this.updateTarget=ge)}}targetAtContent(){this.updateTarget=pe,this.unbind=de}createBehavior(e){return new ve(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class ve{constructor(e,t,o,i,s,r,a){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=o,this.bind=i,this.unbind=s,this.updateTarget=r,this.targetName=a}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){w.setEvent(e);const t=this.binding(this.source,this.context);w.setEvent(null),!0!==t&&e.preventDefault()}}let me=null;class ye{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){me=this}static borrow(e){const t=me||new ye;return t.directives=e,t.reset(),me=null,t}}function xe(e){if(1===e.length)return e[0];let t;const o=e.length,i=e.map((e=>"string"==typeof e?()=>e:(t=e.targetName||t,e.binding))),s=new fe(((e,t)=>{let s="";for(let r=0;r<o;++r)s+=i[r](e,t);return s}));return s.targetName=t,s}const $e=h.length;function we(e,t){const o=t.split(c);if(1===o.length)return null;const i=[];for(let t=0,s=o.length;t<s;++t){const s=o[t],r=s.indexOf(h);let a;if(-1===r)a=s;else{const t=parseInt(s.substring(0,r));i.push(e.directives[t]),a=s.substring(r+$e)}""!==a&&i.push(a)}return i}function ke(e,t,o=!1){const i=t.attributes;for(let s=0,r=i.length;s<r;++s){const a=i[s],n=a.value,l=we(e,n);let d=null;null===l?o&&(d=new fe((()=>n)),d.targetName=a.name):d=xe(l),null!==d&&(t.removeAttributeNode(a),s--,r--,e.addFactory(d))}}function Ce(e,t,o){const i=we(e,t.textContent);if(null!==i){let s=t;for(let r=0,a=i.length;r<a;++r){const a=i[r],n=0===r?t:s.parentNode.insertBefore(document.createTextNode(""),s.nextSibling);"string"==typeof a?n.textContent=a:(n.textContent=" ",e.captureContentBinding(a)),s=n,e.targetIndex++,n!==t&&o.nextNode()}e.targetIndex--}}const ze=document.createRange();class Be{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=e.parentNode,o=this.lastChild;let i,s=this.firstChild;for(;s!==o;)i=s.nextSibling,t.insertBefore(s,e),s=i;t.insertBefore(o,e)}}remove(){const e=this.fragment,t=this.lastChild;let o,i=this.firstChild;for(;i!==t;)o=i.nextSibling,e.appendChild(i),i=o;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let o,i=this.firstChild;for(;i!==t;)o=i.nextSibling,e.removeChild(i),i=o;e.removeChild(t);const s=this.behaviors,r=this.source;for(let e=0,t=s.length;e<t;++e)s[e].unbind(r)}bind(e,t){const o=this.behaviors;if(this.source!==e)if(null!==this.source){const i=this.source;this.source=e,this.context=t;for(let s=0,r=o.length;s<r;++s){const r=o[s];r.unbind(i),r.bind(e,t)}}else{this.source=e,this.context=t;for(let i=0,s=o.length;i<s;++i)o[i].bind(e,t)}}unbind(){if(null===this.source)return;const e=this.behaviors,t=this.source;for(let o=0,i=e.length;o<i;++o)e[o].unbind(t);this.source=null}static disposeContiguousBatch(e){if(0!==e.length){ze.setStartBefore(e[0].firstChild),ze.setEndAfter(e[e.length-1].lastChild),ze.deleteContents();for(let t=0,o=e.length;t<o;++t){const o=e[t],i=o.behaviors,s=o.source;for(let e=0,t=i.length;e<t;++e)i[e].unbind(s)}}}}class Ie{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(null===this.fragment){let e;const t=this.html;if("string"==typeof t){e=document.createElement("template"),e.innerHTML=u.createHTML(t);const o=e.content.firstElementChild;null!==o&&"TEMPLATE"===o.tagName&&(e=o)}else e=t;const o=function(e,t){const o=e.content;document.adoptNode(o);const i=ye.borrow(t);ke(i,e,!0);const s=i.behaviorFactories;i.reset();const r=u.createTemplateWalker(o);let a;for(;a=r.nextNode();)switch(i.targetIndex++,a.nodeType){case 1:ke(i,a);break;case 3:Ce(i,a,r);break;case 8:u.isMarker(a)&&i.addFactory(t[u.extractDirectiveIndexFromMarker(a)])}let n=0;(u.isMarker(o.firstChild)||1===o.childNodes.length&&t.length)&&(o.insertBefore(document.createComment(""),o.firstChild),n=-1);const l=i.behaviorFactories;return i.release(),{fragment:o,viewBehaviorFactories:l,hostBehaviorFactories:s,targetOffset:n}}(e,this.directives);this.fragment=o.fragment,this.viewBehaviorFactories=o.viewBehaviorFactories,this.hostBehaviorFactories=o.hostBehaviorFactories,this.targetOffset=o.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),o=this.viewBehaviorFactories,i=new Array(this.behaviorCount),s=u.createTemplateWalker(t);let r=0,a=this.targetOffset,n=s.nextNode();for(let e=o.length;r<e;++r){const e=o[r],t=e.targetIndex;for(;null!==n;){if(a===t){i[r]=e.createBehavior(n);break}n=s.nextNode(),a++}}if(this.hasHostBehaviors){const t=this.hostBehaviorFactories;for(let o=0,s=t.length;o<s;++o,++r)i[r]=t[o].createBehavior(e)}return new Be(t,i)}render(e,t,o){"string"==typeof t&&(t=document.getElementById(t)),void 0===o&&(o=t);const i=this.create(o);return i.bind(e,k),i.appendTo(t),i}}const Te=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function Pe(e,...t){const o=[];let i="";for(let s=0,r=e.length-1;s<r;++s){const r=e[s];let a=t[s];if(i+=r,a instanceof Ie){const e=a;a=()=>e}if("function"==typeof a&&(a=new fe(a)),a instanceof se){const e=Te.exec(r);null!==e&&(a.targetName=e[2])}a instanceof ie?(i+=a.createPlaceholder(o.length),o.push(a)):i+=a}return i+=e[e.length-1],new Ie(i,o)}function Fe(e){return e?function(t,o,i){return 1===t.nodeType&&t.matches(e)}:function(e,t,o){return 1===e.nodeType}}class Se extends class{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=y.getAccessors(e).some((e=>e.name===t)),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(r),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function Ae(e){return"string"==typeof e&&(e={property:e}),new re("fast-slotted",Se,e)}const Oe=Pe`<template><slot ${Ae({property:"accordionItems",filter:Fe()})}></slot><slot name="item" part="item" ${Ae("accordionItems")}></slot></template>`;class Re{createCSS(){return""}createBehavior(){}}function Ee(e,...t){const{styles:o,behaviors:i}=function(e,t){const o=[];let i="";const s=[];for(let r=0,a=e.length-1;r<a;++r){i+=e[r];let a=t[r];if(a instanceof Re){const e=a.createBehavior();a=a.createCSS(),e&&s.push(e)}a instanceof C||a instanceof CSSStyleSheet?(""!==i.trim()&&(o.push(i),i=""),o.push(a)):i+=a}return i+=e[e.length-1],""!==i.trim()&&o.push(i),{styles:o,behaviors:s}}(e,t),s=C.create(o);return i.length&&s.withBehaviors(...i),s}function Ne(e){return`:host([hidden]){display:none}:host{display:${e}}`}const Le="var(--colorNeutralForeground1)",Ve="var(--colorNeutralForeground2)",He="var(--colorNeutralForeground2Hover)",Me="var(--colorNeutralForeground2Pressed)",De="var(--colorNeutralForeground2BrandHover)",je="var(--colorNeutralForeground2BrandPressed)",qe="var(--colorNeutralForeground2BrandSelected)",_e="var(--colorNeutralForeground3)",Ge="var(--colorNeutralForegroundDisabled)",Ue="var(--colorBrandForegroundLink)",We="var(--colorBrandForegroundLinkHover)",Qe="var(--colorBrandForegroundLinkPressed)",Ke="var(--colorCompoundBrandForeground1)",Ye="var(--colorCompoundBrandForeground1Hover)",Xe="var(--colorCompoundBrandForeground1Pressed)",Ze="var(--colorNeutralForegroundOnBrand)",Je="var(--colorNeutralForegroundInverted)",et="var(--colorNeutralBackground1)",tt="var(--colorNeutralBackground1Hover)",ot="var(--colorNeutralBackground1Pressed)",it="var(--colorNeutralBackground5)",st="var(--colorSubtleBackground)",rt="var(--colorSubtleBackgroundHover)",at="var(--colorSubtleBackgroundPressed)",nt="var(--colorTransparentBackground)",lt="var(--colorTransparentBackgroundHover)",dt="var(--colorTransparentBackgroundPressed)",ct="var(--colorTransparentBackgroundSelected)",ht="var(--colorNeutralBackgroundDisabled)",ut="var(--colorBrandBackground)",pt="var(--colorBrandBackgroundHover)",bt="var(--colorBrandBackgroundPressed)",gt="var(--colorCompoundBrandBackground)",ft="var(--colorCompoundBrandBackgroundHover)",vt="var(--colorCompoundBrandBackgroundPressed)",mt="var(--colorBrandBackgroundStatic)",yt="var(--colorNeutralStrokeAccessible)",xt="var(--colorNeutralStrokeAccessibleHover)",$t="var(--colorNeutralStrokeAccessiblePressed)",wt="var(--colorNeutralStroke1)",kt="var(--colorNeutralStroke1Hover)",Ct="var(--colorNeutralStroke1Pressed)",zt="var(--colorNeutralStroke2)",Bt="var(--colorBrandStroke1)",It="var(--colorCompoundBrandStroke)",Tt="var(--colorCompoundBrandStrokeHover)",Pt="var(--colorCompoundBrandStrokePressed)",Ft="var(--colorNeutralStrokeDisabled)",St="var(--colorTransparentStroke)",At="var(--colorTransparentStrokeInteractive)",Ot="var(--colorPaletteDarkOrangeForeground3)",Rt="var(--colorPaletteLightGreenForeground3)",Et="var(--colorPaletteMarigoldBackground3)",Nt="var(--colorPaletteRedBackground3)",Lt="var(--colorPaletteRedForeground2)",Vt="var(--colorPaletteRedForeground3)",Ht="var(--colorPaletteYellowBackground3)",Mt="var(--colorPaletteYellowForeground2)",Dt="var(--borderRadiusNone)",jt="var(--borderRadiusSmall)",qt="var(--borderRadiusMedium)",_t="var(--borderRadiusLarge)",Gt="var(--borderRadiusCircular)",Ut="var(--fontFamilyBase)",Wt="var(--fontSizeBase100)",Qt="var(--fontSizeBase200)",Kt="var(--fontSizeBase300)",Yt="var(--fontSizeBase400)",Xt="var(--fontSizeBase500)",Zt="var(--fontSizeBase600)",Jt="var(--fontWeightRegular)",eo="var(--fontWeightSemibold)",to="var(--lineHeightBase200)",oo="var(--lineHeightBase300)",io="var(--lineHeightBase400)",so="var(--shadow4)",ro="var(--shadow8)",ao="var(--strokeWidthThin)",no="var(--strokeWidthThick)",lo="var(--strokeWidthThicker)",co="var(--strokeWidthThickest)",ho=Ee`${Ne("flex")}:host{box-sizing:border-box;flex-direction:column}:host([disabled]) ::slotted(fluent-accordion-item){background-image:none;pointer-events:none;user-select:none;color:${Ge}}`;let uo=class extends oe{};uo=t([_({name:"fluent-accordion",template:Oe,styles:ho})],uo);class po{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}function bo(e){return new re("fast-ref",po,e)}const go=Pe`<template class="${e=>e.expanded?"expanded":""}"><div class="heading" part="heading" role="heading" aria-level="${e=>e.headinglevel}"><button class="button" part="button" ${bo("expandbutton")} aria-expanded="${e=>e.expanded}" aria-controls="${e=>e.id}-panel" id="${e=>e.id}" @click="${(e,t)=>e.clickHandler(t.event)}"><span class="heading"><slot name="heading" part="heading"></slot></span></button><slot name="start"></slot><slot name="end"></slot><span class="expand-icon" part="expand-icon" aria-hidden="true"><slot name="expand-icon"><svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M7.65 4.15c.2-.2.5-.2.7 0l5.49 5.46c.21.22.21.57 0 .78l-5.49 5.46a.5.5 0 01-.7-.7L12.8 10 7.65 4.85a.5.5 0 010-.7z"></path></svg></slot><span></span></span></div><div class="region" part="region" id="${e=>e.id}-panel" role="region" aria-labelledby="${e=>e.id}"><slot></slot></div></template>`;let fo;const vo=function(){if("boolean"==typeof fo)return fo;if("undefined"==typeof window||!window.document||!window.document.createElement)return fo=!1,fo;const e=document.createElement("style"),t=function(){const e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}();null!==t&&e.setAttribute("nonce",t),document.head.appendChild(e);try{e.sheet.insertRule("foo:focus-visible {color:inherit}",0),fo=!0}catch(e){fo=!1}finally{document.head.removeChild(e)}return fo}()?"focus-visible":"focus",mo=Ee`
    ${Ne("flex")} :host {
      box-sizing: border-box;
      font-family: ${Ut};
      font-size: ${Kt};
      flex-direction: column;
      margin: 0;
      padding: 0 10px;
      background: ${et};
      color: ${Le};
      border-radius: 2px;
      width: calc(100% - 22px);
      --accordion-item-height: 44px;
    }

    .region {
      display: none;
    }

    .heading {
      display: flex;
      position: relative;
      align-items: center;
    }

    .button {
      appearance: none;
      border: none;
      background: none;
      order: 3;
      outline: none;
      margin: 0;
      text-align: left;
      color: inherit;
      cursor: pointer;
      font-family: inherit;
      font-size: inherit;
      height: var(--accordion-item-height);
    }

    .button::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      cursor: pointer;
    }

    /* needs focus styles */
    .button:${vo}::before {
      outline: none;
    }

    :host(.expanded) .region {
      display: block;
      margin-inline: 12px;
    }

    .expand-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      order: 1;
      pointer-events: none;
    }

    .expand-icon,
    ::slotted([slot="start"]) {
      margin-inline-end: 8px;
    }

    :host([expanded]) .expand-icon {
      transform: rotate(90deg);
    }

    ::slotted([slot="start"]) {
      display: flex;
      align-items: center;
      justify-content: center;
      order: 2;
    }

    ::slotted([slot="end"]) {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-inline-start: 8px;
      order: 4;
    }

    .expand-icon,
    ::slotted([slot="start"]),
    ::slotted([slot="end"]) {
      fill: currentcolor;
      width: 20px;
      height: 20px;
      font-size: 20px;
    }

    :host([size="small"]) {
      --accordion-item-height: 32px;
    }

    :host([size="small"]) .button {
      font-size: ${Qt};
    }

    :host([size="large"]) .button {
      font-size: ${Yt};
    }

    :host([size="extra-large"]) .button {
      font-size: ${Xt};
    }

    :host([expand-icon-position="end"]) .expand-icon {
      margin-inline-end: 0;
      margin-inline-start: auto;
      order: 4;
      transform: rotate(90deg);
    }

    :host([expanded][expand-icon-position="end"]) .expand-icon {
      transform: rotate(-90deg);
    }
  `;let yo=class extends ee{};yo=t([_({name:"fluent-accordion-item",template:go,styles:mo})],yo);const xo=/[\(\[\{][^\)\]\}]*[\)\]\}]/g,$o=/[\0-\u001F\!-/:-@\[-`\{-\u00BF\u0250-\u036F\uD800-\uFFFF]/g,wo=/^\d+[\d\s]*(:?ext|x|)\s*\d+$/i,ko=/\s+/g,Co=/[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF\u3040-\u309F\u30A0-\u30FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF]|[\uD840-\uD869][\uDC00-\uDED6]/;class zo extends q{constructor(){super(...arguments),this.size=32,this.shape="circular",this.color="neutral",this.initials=void 0}nameChanged(e,t){var o,i,s;t&&(this.initials=(o=this.name,i="rtl"===window.getComputedStyle(this).direction,o?(o=function(e){return(e=(e=(e=e.replace(xo,"")).replace($o,"")).replace(ko," ")).trim()}(o),Co.test(o)||!s&&wo.test(o)?"":function(e,t){let o="";const i=e.split(" ");return 2===i.length?(o+=i[0].charAt(0).toUpperCase(),o+=i[1].charAt(0).toUpperCase()):3===i.length?(o+=i[0].charAt(0).toUpperCase(),o+=i[2].charAt(0).toUpperCase()):0!==i.length&&(o+=i[0].charAt(0).toUpperCase()),t&&o.length>1?o.charAt(1)+o.charAt(0):o}(o,i)):""))}colorChanged(e,t){this.setColor()}setColor(){var e,t;return"colorful"===this.color?Bo[Io(null!==(t=null!==(e=this.idForColor)&&void 0!==e?e:this.name)&&void 0!==t?t:"")%Bo.length]:this.color}}t([O],zo.prototype,"name",void 0),t([O({converter:S})],zo.prototype,"size",void 0),t([O],zo.prototype,"shape",void 0),t([O],zo.prototype,"active",void 0),t([O],zo.prototype,"appearance",void 0),t([O],zo.prototype,"color",void 0),t([O({attribute:"id-for-color"})],zo.prototype,"idForColor",void 0),t([x],zo.prototype,"initials",void 0);const Bo=["darkRed","cranberry","red","pumpkin","peach","marigold","gold","brass","brown","forest","seafoam","darkGreen","lightTeal","teal","steel","blue","royalBlue","cornflower","navy","lavender","purple","grape","lilac","pink","magenta","plum","beige","mink","platinum","anchor"],Io=e=>{let t=0;for(let o=e.length-1;o>=0;o--){const i=e.charCodeAt(o),s=o%8;t^=(i<<s)+(i>>8-s)}return t};function To(e,t){const o="function"==typeof t?t:()=>t;return(t,i)=>e(t,i)?o(t,i):null}const Po=Pe`<template role="img" data-color="${e=>e.setColor()}"><span class="initials" part="initials"><slot name="initials">${e=>e.initials}</slot></span><slot>${To((e=>!e.initials),Pe`<svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M10 2a4 4 0 100 8 4 4 0 000-8zM7 6a3 3 0 116 0 3 3 0 01-6 0zm-2 5a2 2 0 00-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 0010 18c1.85 0 3.58-.39 4.87-1.2A4.35 4.35 0 0017 13a2 2 0 00-2-2H5zm-1 2a1 1 0 011-1h10a1 1 0 011 1c0 1.3-.62 2.28-1.67 2.95A8.16 8.16 0 0110 17a8.16 8.16 0 01-4.33-1.05A3.36 3.36 0 014 13z"></path></svg>`)}</slot><slot name="badge"></slot></template>`;class Fo{constructor(e,t,o){this.propertyName=e,this.value=t,this.styles=o}bind(e){y.getNotifier(e).subscribe(this,this.propertyName),this.handleChange(e,this.propertyName)}unbind(e){y.getNotifier(e).unsubscribe(this,this.propertyName),e.$fastController.removeStyles(this.styles)}handleChange(e,t){e[t]===this.value?e.$fastController.addStyles(this.styles):e.$fastController.removeStyles(this.styles)}}function So(e,t){return new Fo("size",e,t)}function Ao(e,t){return new Fo("shape",e,t)}const Oo="100ms",Ro="400ms",Eo="500ms",No="cubic-bezier(0.33,0.00,0.10,1.00)",Lo="cubic-bezier(0.80,0.00,0.20,1.00)",Vo="linear",Ho=Ee`
    ${Ne("inline-block")} :host {
        position: relative;
        flex-shrink: 0;
        vertical-align: middle;
        font-family: ${Ut};
        font-weight: ${eo};
        border-radius: ${Gt};
        color: ${_e};
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
        border: ${ao} solid ${St};
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
        box-shadow: 0 0 0 ${ao} ${et};
    }

    :host([data-color="brand"]) {
        color: ${Je};
        background-color: ${mt};
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
        color: ${Lt};
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
`.withBehaviors(new class{constructor(e,t){this.propertyName=e,this.styles=t}bind(e){y.getNotifier(e).subscribe(this,this.propertyName),this.handleChange(e,this.propertyName)}unbind(e){y.getNotifier(e).unsubscribe(this,this.propertyName),e.$fastController.removeStyles(this.styles)}handleChange(e,t){void 0!==e[t]?e.$fastController.addStyles(this.styles):e.$fastController.removeStyles(this.styles)}}("active",Ee`
        :host([active]) {
             /* Work-around for text pixel snapping at the end of the animation */
            transform: perspective(1px);
            transition-property: transform, opacity;
            transition-duration: ${Eo}, ${Oo};
            transition-delay: ${Lo}, ${Vo};
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
            transition-duration: ${Eo}, ${Ro};
            transition-delay: ${Lo}, ${Vo};
        }

        :host([appearance="ring"])::before,
        :host([appearance="ring-shadow"])::before {
            border-style: solid;
            border-color: ${mt};
        }

        :host([active]:not([appearance="shadow"]))::before {
            margin: calc(-2 * ${no});
            border-width: ${no};
        }

        :host([size="56"][active]:not([appearance="shadow"]))::before,
        :host([size="64"][active]:not([appearance="shadow"]))::before {
            margin: calc(-2 * ${lo});
            border-width: ${lo};
        }
        
        :host([size="72"][active]:not([appearance="shadow"]))::before,
        :host([size="96"][active]:not([appearance="shadow"]))::before,
        :host([size="120"][active]:not([appearance="shadow"]))::before,
        :host([size="128"][active]:not([appearance="shadow"]))::before {
            margin: calc(-2 * ${co});
            border-width: ${co};
        }

        :host([active][appearance])::before {
            box-shadow: ${so};
        }

        :host([size="32"][active][appearance])::before,
        :host([size="36"][active][appearance])::before,
        :host([size="40"][active][appearance])::before,
        :host([size="48"][active][appearance])::before {
            box-shadow: ${ro};
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
            transition-duration: ${Eo}, ${Oo};
            transition-delay: ${No}, ${Vo};
        }

        :host([active="inactive"])::before {
            margin: 0;
            opacity: 0;  
            transition-property: margin, opacity;
            transition-duration: ${Eo}, ${Ro};
            transition-delay: ${No}, ${Vo};
        }
    `),So(20,Ee`
        :host([size="20"]) {
            width: 20px;
            height: 20px;
            font-size: ${Wt};
            font-weight: ${Jt};
        }

        slot[name="icon"] > svg,
        ::slotted(svg) {
            width: 16px;
            height: 16px;
            font-size: 16px;
        }
    `),So(24,Ee`
        :host([size="24"]) {
            width: 24px;
            height: 24px;
            font-size: ${Wt};
            font-weight: ${Jt};
        }

        slot[name="icon"] > svg,
        ::slotted(svg) {
            width: 16px;
            height: 16px;
            font-size: 16px;
        }
    `),So(28,Ee`
        :host([size="28"]) {
            width: 28px;
            height: 28px;
            font-size: ${Qt};   
        }

        slot[name="icon"] > svg,
        ::slotted(svg) {
            width: 20px;
            height: 20px;
            font-size: 20px;
        }
    `),So(32,Ee`
        :host([size="32"]) {
            width: 32px;
            height: 32px;
            font-size: ${Kt};
        }

        slot[name="icon"] > svg,
        ::slotted(svg) {
            width: 20px;
            height: 20px;
            font-size: 20px;
        }
    `),So(36,Ee`
        :host([size="36"]) {
            width: 36px;
            height: 36px;
            font-size: ${Kt}; 
        }

        slot[name="icon"] > svg,
        ::slotted(svg) {
            width: 20px;
            height: 20px;
            font-size: 20px;
        }
    `),So(40,Ee`
        :host([size="40"]) {
            width: 40px;
            height: 40px;
            font-size: ${Kt}; 
        }

        slot[name="icon"] > svg,
        ::slotted(svg) {
            width: 20px;
            height: 20px;
            font-size: 20px;
        }
    `),So(48,Ee`
        :host([size="48"]) {
            width: 48px;
            height: 48px;
            font-size: ${Yt};
        }

        slot[name="icon"] > svg,
        ::slotted(svg) {
            width: 24px;
            height: 24px;
            font-size: 24px;
        }
    `),So(56,Ee`
        :host([size="56"]) {
            width: 56px;
            height: 56px;
            font-size: ${Yt};
        }

        slot[name="icon"] > svg,
        ::slotted(svg) {
            width: 28px;
            height: 28px;
            font-size: 28px;
        }
    `),So(64,Ee`
        :host([size="64"]) {
            width: 64px;
            height: 64px;
            font-size: ${Xt};
        }

        slot[name="icon"] > svg,
        ::slotted(svg) {
            width: 32px;
            height: 32px;
            font-size: 32px;
        }
    `),So(72,Ee`
        :host([size="72"]) {
            width: 72px;
            height: 72px;
            font-size: ${Xt};
        }

        slot[name="icon"] > svg,
        ::slotted(svg) {
            width: 32px;
            height: 32px;
            font-size: 32px;
        }
    `),So(96,Ee`
        :host([size="96"]) {
            width: 96px;
            height: 96px;
            font-size: ${Xt};
        }

        slot[name="icon"] > svg,
        ::slotted(svg) {
            width: 48px;
            height: 48px;
            font-size: 48px;
        }
    `),So(120,Ee`
        :host([size="120"]) {
            width: 120px;
            height: 120px;
            font-size: ${Zt};
        }

        slot[name="icon"] > svg,
        ::slotted(svg) {
            width: 48px;
            height: 48px;
            font-size: 48px;
        }
    `),So(128,Ee`
        :host([size="128"]) {
            width: 128px;
            height: 128px;
            font-size: ${Zt};
        }

        slot[name="icon"] > svg,
        ::slotted(svg) {
            width: 48px;
            height: 48px;
            font-size: 48px;
        }
    `),Ao("square",Ee`
        :host([shape="square"]) {
            border-radius: ${qt};
        }

        :host([shape="square"][size="20"]),
        :host([shape="square"][size="24"]) {
            border-radius: ${jt};
        }

        :host([shape="square"][size="28"]),
        :host([shape="square"][size="32"]),
        :host([shape="square"][size="36"]),
        :host([shape="square"][size="40"]),
        :host([shape="square"][size="48"]) {
            border-radius: ${qt};
        }

        :host([shape="square"][size="56"]),
        :host([shape="square"][size="64"]),
        :host([shape="square"][size="72"]) {
            border-radius: ${_t};
        }

        :host([shape="square"][size="96"]),
        :host([shape="square"][size="120"]),
        :host([shape="square"][size="128"]) {
            border-radius: ${"var(--borderRadiusXLarge)"};
        }
    `));let Mo=class extends zo{};Mo=t([_({name:"fluent-avatar",template:Po,styles:Ho})],Mo);class Do extends q{constructor(){super(...arguments),this.appearance="filled",this.color="brand",this.shape="circular",this.size="medium"}defaultSlottedContentChanged(){const e=this.defaultSlottedContent.filter((e=>e.nodeType===Node.ELEMENT_NODE));1===e.length&&e[0]instanceof SVGElement?this.classList.add("icon-only"):this.classList.remove("icon-only")}}t([O],Do.prototype,"appearance",void 0),t([O],Do.prototype,"color",void 0),t([O],Do.prototype,"shape",void 0),t([O],Do.prototype,"size",void 0);const jo=Pe`<template><slot name="start"></slot><slot ${Ae("defaultSlottedContent")}></slot><slot name="end"></slot></template>`;function qo(e,t){return new Fo("appearance",e,t)}const _o=Ee`
    ${Ne("inline-flex")} :host {
        position: relative;
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
        font-weight: ${eo};
        border-width: ${ao};
        border-style: solid;
    }

    :host(.icon-only) {
        display: flex;
        align-content: center;
        align-items: center;
        height: 100%;
    }

    ::slotted(*) {
        font-family ${Ut};
        fill: currentColor;
    }
`.withBehaviors(qo("filled",Ee`
        :host([appearance="filled"]) {
            border-color: ${St};
        }

        :host([appearance="filled"][color="brand"]) {
            background-color: ${ut};
            color: ${Ze};
            border-color: ${ut};
        }

        :host([appearance="filled"][color="danger"]) {
            background-color: ${Nt};
            color: ${Ze};
            border-color: ${Nt};
        }

        :host([appearance="filled"][color="important"]) {
            background-color: ${Le};
            color: ${et};
        }

        :host([appearance="filled"][color="informative"]) {
            background-color: ${it};
            color: ${_e};
        }

        :host([appearance="filled"][color="severe"]) {
            background-color: ${"var(--colorPaletteDarkOrangeBackground3)"};
            color: ${Ze};
        }

        :host([appearance="filled"][color="subtle"]) {
            background-color: ${et};
            color: ${Le};
        }

        :host([appearance="filled"][color="success"]) {
            background-color: ${"var(--colorPaletteGreenBackground3)"};
            color: ${Ze};
        }

        :host([appearance="filled"][color="warning"]) {
            background-color: ${Ht};
            color: ${Le};
            border-color: ${Ht};
        }
    `),qo("ghost",Ee`
        :host([appearance="ghost"]) {
            border-style: none;
        }

        :host([appearance="ghost"][color="brand"]) {
            color: ${ut};
        }

        :host([appearance="ghost"][color="danger"]) {
            color: ${Vt};
        }

        :host([appearance="ghost"][color="important"]) {
            color: ${Le};
        }

        :host([appearance="ghost"][color="informative"]) {
            color: ${_e};
        }

        :host([appearance="ghost"][color="severe"]) {
            color: ${Ot};
        }

        :host([appearance="ghost"][color="subtle"]) {
            color: ${Je};
        }

        :host([appearance="ghost"][color="success"]) {
            color: ${"var(--colorPaletteGreenForeground3)"};
        }

        :host([appearance="ghost"][color="warning"]) {
            color: ${Mt}
        }
    `),qo("outline",Ee`
        :host([appearance="outline"]) {
            border-color: currentColor;
        }

        :host([appearance="outline"][color="brand"]) {
            color: ${ut};
        }

        :host([appearance="outline"][color="danger"]) {
            color: ${Vt};
        }

        :host([appearance="outline"][color="important"]) {
            color: ${_e};
            border-color: ${yt};
        }

        :host([appearance="outline"][color="informative"]) {
            color: ${_e};
            border-color: ${zt};
        }

        :host([appearance="outline"][color="severe"]) {
            color: ${Ot};
        }

        :host([appearance="outline"][color="subtle"]) {
            color: ${Je};
        }

        :host([appearance="outline"][color="success"]) {
            color: ${"var(--colorPaletteGreenForeground2)"};
        }

        :host([appearance="outline"][color="warning"]) {
            color: ${Mt};
        }
    `),qo("tint",Ee`
        :host([appearance="tint"][color="brand"]) {
            background-color: ${"var(--colorBrandBackground2)"};
            color: ${"var(--colorBrandForeground2)"};
            border-color: ${"var(--colorBrandStroke2)"};
        }

        :host([appearance="tint"][color="danger"]) {
            background-color: ${"var(--colorPaletteRedBackground1)"};
            color: ${Lt};
            border-color: ${"var(--colorPaletteRedBorder1)"};
        }

        :host([appearance="tint"][color="important"]) {
            background-color: ${_e};
            color: ${et};
            border-color: ${St};
        }

        :host([appearance="tint"][color="informative"]) {
            background-color: ${"var(--colorNeutralBackground4)"};
            color: ${_e};
            border-color: ${zt};
        }

        :host([appearance="tint"][color="severe"]) {
            background-color: ${"var(--colorPaletteDarkOrangeBackground1)"};
            color: ${"var(--colorPaletteDarkOrangeForeground1)"};
            border-color: ${"var(--colorPaletteDarkOrangeForeground2)"};
        }

        :host([appearance="tint"][color="subtle"]) {
            background-color: ${et};
            color: ${_e};
            border-color: ${zt};
        }

        :host([appearance="tint"][color="success"]) {
            background-color: ${"var(--colorPaletteGreenBackground1)"};
            color: ${"var(--colorPaletteGreenForeground1)"};
            border-color: ${"var(--colorPaletteGreenBackground2)"};
        }

        :host([appearance="tint"][color="warning"]) {
            background-color: ${"var(--colorPaletteYellowBackground1)"};
            color: ${Mt};
            border-color: ${"var(--colorPaletteYellowBackground2)"};
        }
    `),So("tiny",Ee`
        :host([size="tiny"]) {
            width: 6px;
            height: 6px;
            font-size: 4px;
        }

        ::slotted(svg) {
            font-size: 6px;
        }
    `),So("extra-small",Ee`
        :host([size="extra-small"]) {
            width: 10px;
            height: 10px;
            font-size: 6px;
        }

        ::slotted(svg) {
            font-size: 10px;
        }
    `),So("small",Ee`
        :host([size="small"]) {
            min-width: 16px;
            height: 16px;
            font-size: 8px;
            padding: 2px;
            gap: 4px;   
        }

        ::slotted(svg) {
            font-size: 12px;
        }
    `),So("medium",Ee`
        :host([size="medium"]) {
            min-width: 20px;
            height: 20px;
            font-size: 10px;
            padding: 4px;
            gap: 4px;
        }

        ::slotted(svg) {
            font-size: 12px;
        }
    `),So("large",Ee`
        :host([size="large"]) {
            min-width: 24px;
            height: 24px;
            font-size: 12px;
            padding: 4px;
            gap: 4px;    
        }

        ::slotted(svg) {
            font-size: 16px;
        }
    `),So("extra-large",Ee`
        :host([size="extra-large"]) {
            min-width: 32px;
            height: 32px;
            font-size: 12px;
            padding: 6px;
            gap: 6px;
            border-width: ${no};
        }

        ::slotted(svg) {
            font-size: 20px;
        }
    `),Ao("rounded",Ee`
        :host([shape="rounded"]) {
            border-radius: ${qt};
        }

        :host([shape="rounded"][size="tiny"]),
        :host([shape="rounded"][size="extra-small"]),
        :host([shape="rounded"][size="small"]) {
            border-radius: ${jt};
        }
    `),Ao("circular",Ee`
        :host([shape="circular"]) {
            border-radius: ${Gt};
        }
    `));let Go=class extends Do{};function Uo(e,...t){t.forEach((t=>{if(Object.getOwnPropertyNames(t.prototype).forEach((o=>{"constructor"!==o&&Object.defineProperty(e.prototype,o,Object.getOwnPropertyDescriptor(t.prototype,o))})),t.attributes){const o=e.attributes||[];e.attributes=o.concat(t.attributes)}}))}function Wo(e,t,o,i){var s,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(a=(r<3?s(a):r>3?s(t,o,a):s(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a}Go=t([_({name:"fluent-badge",template:jo,styles:_o})],Go);class Qo{}Wo([O({attribute:"aria-atomic",mode:"fromView"})],Qo.prototype,"ariaAtomic",void 0),Wo([O({attribute:"aria-busy",mode:"fromView"})],Qo.prototype,"ariaBusy",void 0),Wo([O({attribute:"aria-controls",mode:"fromView"})],Qo.prototype,"ariaControls",void 0),Wo([O({attribute:"aria-current",mode:"fromView"})],Qo.prototype,"ariaCurrent",void 0),Wo([O({attribute:"aria-describedby",mode:"fromView"})],Qo.prototype,"ariaDescribedby",void 0),Wo([O({attribute:"aria-details",mode:"fromView"})],Qo.prototype,"ariaDetails",void 0),Wo([O({attribute:"aria-disabled",mode:"fromView"})],Qo.prototype,"ariaDisabled",void 0),Wo([O({attribute:"aria-errormessage",mode:"fromView"})],Qo.prototype,"ariaErrormessage",void 0),Wo([O({attribute:"aria-flowto",mode:"fromView"})],Qo.prototype,"ariaFlowto",void 0),Wo([O({attribute:"aria-haspopup",mode:"fromView"})],Qo.prototype,"ariaHaspopup",void 0),Wo([O({attribute:"aria-hidden",mode:"fromView"})],Qo.prototype,"ariaHidden",void 0),Wo([O({attribute:"aria-invalid",mode:"fromView"})],Qo.prototype,"ariaInvalid",void 0),Wo([O({attribute:"aria-keyshortcuts",mode:"fromView"})],Qo.prototype,"ariaKeyshortcuts",void 0),Wo([O({attribute:"aria-label",mode:"fromView"})],Qo.prototype,"ariaLabel",void 0),Wo([O({attribute:"aria-labelledby",mode:"fromView"})],Qo.prototype,"ariaLabelledby",void 0),Wo([O({attribute:"aria-live",mode:"fromView"})],Qo.prototype,"ariaLive",void 0),Wo([O({attribute:"aria-owns",mode:"fromView"})],Qo.prototype,"ariaOwns",void 0),Wo([O({attribute:"aria-relevant",mode:"fromView"})],Qo.prototype,"ariaRelevant",void 0),Wo([O({attribute:"aria-roledescription",mode:"fromView"})],Qo.prototype,"ariaRoledescription",void 0);const Ko="form-associated-proxy",Yo="ElementInternals"in window&&"setFormValue"in window.ElementInternals.prototype,Xo=new WeakMap;function Zo(e){const t=class extends e{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Yo}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,t=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),o=e?t.concat(Array.from(e)):t;return Object.freeze(o)}return r}valueChanged(e,t){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),u.queueUpdate((()=>this.classList.toggle("disabled",this.disabled)))}nameChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),u.queueUpdate((()=>this.classList.toggle("required",this.required))),this.validate()}get elementInternals(){if(!Yo)return null;let e=Xo.get(this);return e||(e=this.attachInternals(),Xo.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach((e=>this.proxy.removeEventListener(e,this.stopPropagation))),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,t,o){this.elementInternals?this.elementInternals.setValidity(e,t,o):"string"==typeof t&&this.proxy.setCustomValidity(t)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach((e=>this.proxy.addEventListener(e,this.stopPropagation))),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Ko),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Ko)),null===(e=this.shadowRoot)||void 0===e||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),null===(e=this.shadowRoot)||void 0===e||e.removeChild(this.proxySlot)}validate(){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage)}setFormValue(e,t){this.elementInternals&&this.elementInternals.setFormValue(e,t||e)}_keypressHandler(e){if(e.key===Y&&this.form instanceof HTMLFormElement){const e=this.form.querySelector("[type=submit]");null==e||e.click()}}stopPropagation(e){e.stopPropagation()}};return O({mode:"boolean"})(t.prototype,"disabled"),O({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),O({attribute:"current-value"})(t.prototype,"currentValue"),O(t.prototype,"name"),O({mode:"boolean"})(t.prototype,"required"),x(t.prototype,"value"),t}function Jo(e){class t extends(Zo(e)){}class o extends t{constructor(...e){super(e),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(e,t){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),void 0!==e&&this.$emit("change"),this.validate()}currentCheckedChanged(e,t){this.checked=this.currentChecked}updateForm(){const e=this.checked?this.value:null;this.setFormValue(e,e)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return O({attribute:"checked",mode:"boolean"})(o.prototype,"checkedAttribute"),O({attribute:"current-checked",converter:F})(o.prototype,"currentChecked"),x(o.prototype,"defaultChecked"),x(o.prototype,"checked"),o}class ei extends q{}class ti extends(Zo(ei)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class oi extends ti{constructor(){super(...arguments),this.handleClick=e=>{var t;this.disabled&&(null===(t=this.defaultSlottedContent)||void 0===t?void 0:t.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;null===(e=this.form)||void 0===e||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})},this.shape="rounded",this.size="medium",this.block=!1,this.disabledFocusable=!1}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===t&&this.addEventListener("click",this.handleSubmission),"submit"===e&&this.removeEventListener("click",this.handleSubmission),"reset"===t&&this.addEventListener("click",this.handleFormReset),"reset"===e&&this.removeEventListener("click",this.handleFormReset)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.addEventListener("click",this.handleClick)}))}disconnectedCallback(){var e;super.disconnectedCallback();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach((e=>{e.removeEventListener("click",this.handleClick)}))}defaultSlottedContentChanged(){const e=this.defaultSlottedContent.filter((e=>e.nodeType===Node.ELEMENT_NODE));1===e.length&&e[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}t([O({mode:"boolean"})],oi.prototype,"autofocus",void 0),t([O({attribute:"form"})],oi.prototype,"formId",void 0),t([O],oi.prototype,"formaction",void 0),t([O],oi.prototype,"formenctype",void 0),t([O],oi.prototype,"formmethod",void 0),t([O({mode:"boolean"})],oi.prototype,"formnovalidate",void 0),t([O],oi.prototype,"formtarget",void 0),t([O],oi.prototype,"type",void 0),t([x],oi.prototype,"defaultSlottedContent",void 0),t([O({attribute:"aria-expanded",mode:"fromView"})],oi.prototype,"ariaExpanded",void 0),t([O({attribute:"aria-pressed",mode:"fromView"})],oi.prototype,"ariaPressed",void 0),t([O],oi.prototype,"appearance",void 0),t([O],oi.prototype,"shape",void 0),t([O],oi.prototype,"size",void 0),t([O({mode:"boolean"})],oi.prototype,"block",void 0),t([O({attribute:"disabledfocusable",mode:"boolean"})],oi.prototype,"disabledFocusable",void 0),Uo(oi,Qo);const ii=new MutationObserver((e=>{for(const t of e)si.getOrCreateFor(t.target).notify(t.attributeName)}));class si extends v{constructor(e){super(e),this.watchedAttributes=new Set,si.subscriberCache.set(e,this)}subscribe(e){super.subscribe(e),this.watchedAttributes.has(e.attributes)||(this.watchedAttributes.add(e.attributes),this.observe())}unsubscribe(e){super.unsubscribe(e),this.watchedAttributes.has(e.attributes)&&(this.watchedAttributes.delete(e.attributes),this.observe())}static getOrCreateFor(e){return this.subscriberCache.get(e)||new si(e)}observe(){const e=[];for(const t of this.watchedAttributes.values())for(let o=0;o<t.length;o++)e.push(t[o]);ii.observe(this.source,{attributeFilter:e})}}si.subscriberCache=new WeakMap;class ri{constructor(e,t){this.target=e,this.attributes=Object.freeze(t)}bind(e){if(si.getOrCreateFor(e).subscribe(this),e.hasAttributes())for(let t=0;t<e.attributes.length;t++)this.handleChange(e,e.attributes[t].name)}unbind(e){si.getOrCreateFor(e).unsubscribe(this)}handleChange(e,t){this.attributes.includes(t)&&u.setAttribute(this.target,t,e.getAttribute(t))}}function ai(...e){return new re("fast-reflect-attr",ri,e)}const ni=Pe`<button class="base" part="base" ?autofocus="${e=>e.autofocus}" ?disabled="${e=>e.disabled}" tabindex="${e=>e.disabledFocusable?"0":void 0}" aria-disabled="${e=>!0===e.disabledFocusable?"true":e.ariaDisabled}" ${ai("form","formaction","formenctype","formmethod","formnovalidate","formtarget","name","type","value","aria-atomic","aria-busy","aria-controls","aria-current","aria-describedby","aria-details","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-live","aria-owns","aria-pressed","aria-relevant","aria-roledescription")} ${bo("control")}><slot name="start"></slot><slot ${Ae("defaultSlottedContent")}></slot><slot name="end"></slot></button>`,li=Ee`${Ne("inline-block")}:host{--button-border-color:${wt}--button-border-right-color:var(--button-border-color);--button-border-left-color:var(--button-border-color);--button-border-radius:${qt}--border-top-right-radius:var(--button-border-radius);--border-top-left-radius:var(--button-border-radius);--border-bottom-right-radius:var(--button-border-radius);--border-bottom-left-radius:var(--button-border-radius);border:none}.base{display:inline-flex;align-items:center;justify-content:center;vertical-align:middle;margin:0;max-width:280px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;background-color:${et};color:${Le};border-width:${ao};border-style:solid;font-family:${Ut};outline-style:none;border-color:var(--button-border-color);border-right-color:var(--button-border-right-color);border-left-color:var(--button-border-left-color);border-top-right-radius:var(--border-top-right-radius);border-top-left-radius:var(--border-top-left-radius);border-bottom-right-radius:var(--border-bottom-right-radius);border-bottom-left-radius:var(--border-bottom-left-radius)}:host(:hover){--button-border-color:${kt}}:host(:active){--button-border-color:${Ct}}:host(:hover) .base{background-color:${tt};color:${Le};cursor:pointer}:host(:active) .base{background-color:${ot};color:${Le};outline-style:none}:host([size][shape=circular]){--button-border-radius:${Gt}}:host([size][shape=square]){--button-border-radius:${Dt}}:host([disabled]),:host([disabled]:active),:host([disabled]:hover){--button-border-color:${Ft}}:host .base[aria-disabled=true],:host([disabled]) .base{background-color:${ht};color:${Ge};cursor:not-allowed}::slotted(svg),slot>svg{font-size:20px;height:20px;width:20px;fill:currentColor}`,di=Ee`:host([appearance=primary]),:host([appearance=primary]:active),:host([appearance=primary]:hover){--button-border-color:transparent}:host([appearance=primary]) .base,:host([appearance=primary]:active) .base,:host([appearance=primary]:hover) .base{border-color:inherit}:host([appearance=primary]) .base{background-color:${ut};color:${Ze}}:host([appearance=primary]:hover) .base{background-color:${pt};color:${Ze}}:host([appearance=primary]:active) .base{background-color:${bt};color:${Ze}}:host([appearance=primary]) .base[aria-disabled=true],:host([appearance=primary]:active) .base[aria-disabled=true],:host([appearance=primary]:hover) .base[aria-disabled=true],:host([appearance=primary][disabled]) .base,:host([appearance=primary][disabled]:active) .base,:host([appearance=primary][disabled]:hover) .base{background-color:${ht};border-color:${Ft};color:${Ge};cursor:not-allowed}`,ci=Ee`:host([appearance=subtle]),:host([appearance=subtle]:active),:host([appearance=subtle]:hover){--button-border-color:transparent}:host([appearance=subtle]) .base{background-color:${st};color:${Ve}}:host([appearance=subtle]:hover) .base{background-color:${rt};color:${De}}:host([appearance=subtle]:active) .base{background-color:${at};color:${je}}:host([appearance=subtle][disabled]) .base,:host([appearance=subtle][disabled]:active) .base,:host([appearance=subtle][disabled]:hover) .base{color:${Ge};cursor:not-allowed;background-color:transparent;border-color:transparent}`,hi=Ee`:host([appearance=outline]) .base{background-color:${nt}}:host([appearance=outline]:hover) .base{background-color:${lt}}:host([appearance=outline]:active) .base{background-color:${dt}}`,ui=Ee`:host([appearance=transparent]),:host([appearance=transparent]:active),:host([appearance=transparent]:hover){--button-border-color:transparent}:host([appearance=transparent]) .base{background-color:${nt};color:${Ve}}:host([appearance=transparent]:hover) .base{background-color:${lt};color:${De}}:host([appearance=transparent]:active) .base{background-color:${dt};color:${je}}:host([appearance=transparent][disabled]) .base,:host([appearance=transparent][disabled]:active) .base,:host([appearance=transparent][disabled]:hover) .base{background-color:transparent;border-color:transparent;color:${Ge}}`,pi=Ee`:host([size=small]) .base{--button-border-radius:${jt}gap:4px;padding:0 8px;height:24px;min-width:64px;font-size:${Qt};font-weight:${Jt};line-height:${to}}:host([size=small]) .base.icon-only{padding:4px;min-width:28px;max-width:28px}`,bi=Ee`:host([size=medium]) .base{gap:6px;padding:0 12px;height:32px;min-width:96px;font-size:${Kt};font-weight:${eo};line-height:${oo}}:host([size=medium]) .base.icon-only{padding:0;min-width:32px;max-width:32px}`,gi=Ee`:host([size=large]) .base{--button-border-radius:${_t}gap:6px;padding:0 16px;height:40px;min-width:96px;font-size:${Kt};font-weight:${eo};line-height:${oo}}:host([size=large]) ::slotted(svg),:host([size=large]) slot>svg{font-size:24px;height:24px;width:24px}:host([size=large]) .base.icon-only{padding:0;min-width:40px;max-width:40px}`,fi=Ee`${li}`.withBehaviors(qo("primary",Ee`${di}`),qo("subtle",Ee`${ci}`),qo("outline",Ee`${hi}`),qo("transparent",Ee`${ui}`),So("small",Ee`${pi}`),So("medium",Ee`${bi}`),So("large",Ee`${gi}`));let vi=class extends oi{};vi=t([_({name:"fluent-button",template:ni,styles:fi,shadowOptions:{delegatesFocus:!0}})],vi);class mi extends q{constructor(){super(...arguments),this.appearance="filled",this.interactive=!1}}t([O],mi.prototype,"appearance",void 0),t([O({mode:"boolean"})],mi.prototype,"interactive",void 0);const yi=Ee`${Ne("block")}:host{contain:content;color:${Le};border-width:${ao};border-style:solid;border-color:none;border-radius:${qt}}:host([interactive]){cursor:pointer}:host([interactive]:hover){box-shadow:${ro}}::slotted(*){margin:12px}::slotted(fluent-card-preview){margin:0}`.withBehaviors(qo("filled",Ee`:host([appearance=filled]){background-color:${et};border-color:${St};box-shadow:${so}}:host([appearance=filled][interactive]:hover){background-color:${tt};border-color:${At}}:host([appearance=filled][interactive]:active){background-color:${ot}}`),qo("filled-alternative",Ee`:host([appearance=filled-alternative]){background-color:${"var(--colorNeutralBackground2)"};border-color:${St};box-shadow:${so}}:host([appearance=filled-alternative][interactive]:hover){background-color:${"var(--colorNeutralBackground2Hover)"};border-color:${At}}:host([appearance=filled-alternative][interactive]:active){background-color:${"var(--colorNeutralBackground2Pressed)"}}`),qo("outline",Ee`:host([appearance=outline]){background-color:${nt};border-color:${wt}}:host([appearance=outline][interactive]:hover){border-color:${kt}}:host([appearance=outline][interactive]:active){background-color:${Ct}}:host([appearance=outline]),:host([appearance=outline][interactive]),:host([appearance=outline][interactive]:hover){box-shadow:none}`),qo("subtle",Ee`:host([appearance=subtle]){background-color:${st};border-color:${St}}:host([appearance=subtle][interactive]:hover){border-color:${rt}}:host([appearance=subtle][interactive]:active){background-color:${at}}:host([appearance=subtle]),:host([appearance=subtle][interactive]),:host([appearance=subtle][interactive]:hover){box-shadow:none}`));let xi=class extends mi{};xi=t([_({name:"fluent-card",template:Pe`<template role="group"><slot></slot></template>`,styles:yi})],xi);class $i extends q{}const wi=Pe`<slot></slot><slot name="action"></slot>`,ki=Ee`${Ne("flex")}:host{display:flex;flex-direction:row;gap:12px}::slotted([slot=action]){margin-inline-start:auto}`;let Ci=class extends $i{};Ci=t([_({name:"fluent-card-footer",template:wi,styles:ki})],Ci);class zi extends q{}const Bi=Pe`<template><slot name="image"></slot><div class="text-container" part="text-container"><slot></slot><slot name="description"></slot></div><slot name="action"></slot></template>`,Ii=Ee`${Ne("flex")}:host{display:flex;flex-direction:row;align-items:center;gap:12px;height:32px}::slotted([slot=image]),::slotted(img){min-width:24px;min-height:24px;max-width:32px;max-height:32px}.text-container{display:flex;flex-direction:column;flex-grow:1;height:inherit}.text-container>*{height:50%}`;let Ti=class extends zi{};Ti=t([_({name:"fluent-card-header",template:Bi,styles:Ii})],Ti);class Pi extends q{}const Fi=Pe`<slot></slot><slot name="logo"></slot>`,Si=Ee`${Ne("block")}:host{position:relative}::slotted(*){display:block}::slotted([slot=logo]){position:absolute;bottom:12px;left:12px;width:32px;height:32px}`;let Ai=class extends Pi{};Ai=t([_({name:"fluent-card-preview",template:Fi,styles:Si})],Ai);const Oi=Pe`<template role="checkbox" aria-checked="${e=>e.checked}" aria-required="${e=>e.required}" aria-disabled="${e=>e.disabled}" aria-readonly="${e=>e.readOnly}" tabindex="${e=>e.disabled?null:0}" @keypress="${(e,t)=>e.keypressHandler(t.event)}" @click="${(e,t)=>e.clickHandler(t.event)}" class="${e=>e.indeterminate?"indeterminate":""}"><div part="control" class="control"><slot name="checked-indicator"><svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M13.86 3.66a.5.5 0 01-.02.7l-7.93 7.48a.6.6 0 01-.84-.02L2.4 9.1a.5.5 0 01.72-.7l2.4 2.44 7.65-7.2a.5.5 0 01.7.02z"/></svg></slot><slot name="indeterminate-indicator"><svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M2 4c0-1.1.9-2 2-2h4a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2V4z"></path></svg></slot></div><slot></slot></template>`;class Ri extends q{}class Ei extends(Jo(Ri)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Ni extends Ei{constructor(){super(),this.size="medium",this.labelBefore=!1,this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{" "===e.key&&(this.checked=!this.checked)},this.clickHandler=e=>{this.disabled||this.readOnly||(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}t([O],Ni.prototype,"size",void 0),t([O({attribute:"label-before",mode:"boolean"})],Ni.prototype,"labelBefore",void 0),t([O({attribute:"readonly",mode:"boolean"})],Ni.prototype,"readOnly",void 0),t([x],Ni.prototype,"defaultSlottedNodes",void 0),t([x],Ni.prototype,"indeterminate",void 0);const Li="12px",Vi="16px",Hi="20px",Mi=Ee`
    ${Ne("inline-flex")} :host {
      align-items: center;
      height: 32px;
      outline: none;
      ${""} user-select: none;
      cursor: pointer;
    }

    :host([size="medium"]) .control {
        width: ${Vi};
        height: ${Vi};
    }

    :host([size="large"]) .control {
        width: ${Hi};
        height: ${Hi};
    }

    .control {
      position: relative;
      box-sizing: border-box;
      border-radius: ${jt};
      border: ${ao} solid ${yt};
      outline: none;
    }

    ::slotted(*) {
      font-family: ${Ut};
      color: ${_e};
      margin-inline-start: ${Li};
      font-size: ${Kt};
      line-height: ${oo};
      cursor: pointer;
    }

    :host(:hover) ::slotted(*) {
        color: ${Ve};
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
        border-color: ${It};
    }

    :host(.indeterminate) slot[name='indeterminate-indicator'] {
        opacity: 1;
    }

    :host slot[name='indeterminate-indicator'] {
        position: absolute;
        top: 0;
        color: ${Ke};
    }

    :host(:hover) slot[name='indeterminate-indicator'] {
        border-color: ${Tt};
        color: ${Ye};
    }

    :host(:active) slot[name='indeterminate-indicator'] {
        border-color: ${Pt};
        color: ${Xe};
    }

    :host(:not(.disabled):hover) .control {
        border-color: ${xt};
    }

    :host(:not(.disabled):active) ::slotted(*) {
      color: ${Le};
    }

    :host(:not(.disabled):hover) .control {
        border-color: ${$t};
    }

    /*
    NEED TO ADD FOCUS STYLES
    :host(:${vo}) .control {} */
    /* Checked Styles */
    :host([aria-checked="true"]) slot[name='checked-indicator'],
    :host([aria-checked="true"]) slot[name='indeterminate-indicator'] {
        fill: ${Ze};
    }

    :host([aria-checked="true"]) ::slotted(*) {
        color: ${Le};
    }

    :host([aria-checked="true"]:not([disabled])) .control {
      background: ${gt};
      border-color: ${gt};
    }

    :host([aria-checked="true"]) slot[name='checked-indicator'] {
        opacity: 1;
    }

    :host([aria-checked="true"].indeterminate) slot[name='indeterminate-indicator'] {
        opacity: 0;
    }

    /* Checked Disabled */
    :host([aria-checked="true"]:not([disabled]):hover) .control {
      background: ${ft};
      border-color: ${ft};
    }

    :host([aria-checked="true"]:not([disabled]):active) .control {
      background: ${vt};
      border-color: ${vt};
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
      border-color: ${Ft};
      color: ${Ge};
      fill: currentColor;
    }

    :host([label-before]) {
        flex-direction: row-reverse;
    }
    
    :host([label-before]) ::slotted(*) {
        margin-inline-start: 0;
        margin-inline-end: ${Li};
    }
  `;let Di=class extends Ni{};Di=t([_({name:"fluent-checkbox",template:Oi,styles:Mi})],Di);class ji extends q{constructor(){super(...arguments),this.appearance="filled",this.color="brand",this.shape="circular",this.size="medium",this.overflowCount=99,this.count=0,this.showzero=!1,this.dot=!1}setCount(){return this.count>this.overflowCount?`${this.overflowCount}+`:`${this.count}`}}t([O],ji.prototype,"appearance",void 0),t([O],ji.prototype,"color",void 0),t([O],ji.prototype,"shape",void 0),t([O],ji.prototype,"size",void 0),t([O({attribute:"overflow-count",converter:S})],ji.prototype,"overflowCount",void 0),t([O({converter:S})],ji.prototype,"count",void 0);const qi=Ee`
    ${Ne("inline-flex")} :host {
        position: relative;
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
        font-weight: ${eo};
        border-width: ${ao};
        border-style: solid;
        border-radius: ${Gt};
    }

    :host([count="0"]) {
        display: none;
    }

    :host([dot]),
    :host([showZero]),
    :host([showZero][count="0"]) {
        display: inline-flex;
    }

    :host([dot]),
    :host([dot][size]) {
        min-width: auto;
        width: 6px;
        height: 6px;
        padding: 0;
    }

    ::slotted(*) {
        font-family ${Ut};
        fill: currentColor;
    }

    :host([dot]) slot,
    :host([dot]) ::slotted(*) {
        display: none;
    }
`.withBehaviors(So("tiny",Ee`
        :host([size="tiny"]) {
            width: 6px;
            height: 6px;
            font-size: 4px;
        }

        ::slotted(svg) {
            font-size: 6px;
        }
    `),So("extra-small",Ee`
        :host([size="extra-small"]) {
            width: 10px;
            height: 10px;
            font-size: 6px;
        }

        ::slotted(svg) {
            font-size: 10px;
        }
    `),So("small",Ee`
        :host([size="small"]) {
            min-width: 16px;
            height: 16px;
            font-size: 8px;
            padding: 2px;
            gap: 4px;   
        }

        ::slotted(svg) {
            font-size: 12px;
        }
    `),So("medium",Ee`
        :host([size="medium"]) {
            min-width: 20px;
            height: 20px;
            font-size: 10px;
            padding: 4px;
            gap: 4px;
        }

        ::slotted(svg) {
            font-size: 12px;
        }
    `),So("large",Ee`
        :host([size="large"]) {
            min-width: 24px;
            height: 24px;
            font-size: 12px;
            padding: 4px;
            gap: 4px;    
        }

        ::slotted(svg) {
            font-size: 16px;
        }
    `),So("extra-large",Ee`
        :host([size="extra-large"]) {
            min-width: 32px;
            height: 32px;
            font-size: 12px;
            padding: 6px;
            gap: 6px;
            border-width: ${no};
        }

        ::slotted(svg) {
            font-size: 20px;
        }
    `),qo("filled",Ee`
        :host([appearance="filled"]) {
            border-color: ${St};
        }

        :host([appearance="filled"][color="brand"]) {
            background-color: ${ut};
            color: ${Ze};
            border-color: ${ut};
        }

        :host([appearance="filled"][color="danger"]) {
            background-color: ${Nt};
            color: ${Ze};
            border-color: ${Nt};
        }

        :host([appearance="filled"][color="important"]) {
            background-color: ${Le};
            color: ${et};
        }

        :host([appearance="filled"][color="informative"]) {
            background-color: ${it};
            color: ${_e};
        }
    `),qo("ghost",Ee`
        :host([appearance="ghost"]) {
            border-style: none;
        }

        :host([appearance="ghost"][color="brand"]) {
            color: ${ut};
        }

        :host([appearance="ghost"][color="danger"]) {
            color: ${Vt};
        }

        :host([appearance="ghost"][color="important"]) {
            color: ${Le};
        }

        :host([appearance="ghost"][color="informative"]) {
            color: ${_e};
        }
    `),Ao("rounded",Ee`
        :host([shape="rounded"]) {
            border-radius: ${qt};
        }

        :host([shape="rounded"][size="tiny"]),
        :host([shape="rounded"][size="extra-small"]),
        :host([shape="rounded"][size="small"]) {
            border-radius: ${jt};
        }
    `));let _i=class extends ji{};var Gi;_i=t([_({name:"fluent-counter-badge",template:Pe`<template :hidden="${e=>{var t;return null!==(t=e.hidden)&&void 0!==t?t:!e.showzero&&0===e.count&&!e.dot}}"><slot><span>${e=>e.setCount()}</span></slot></template>`,styles:qi})],_i),function(e){e.separator="separator",e.presentation="presentation"}(Gi||(Gi={}));class Ui extends q{constructor(){super(...arguments),this.role=Gi.separator,this.alignContent="center",this.inset=!1,this.vertical=!1}}t([O],Ui.prototype,"role",void 0),t([O],Ui.prototype,"appearance",void 0),t([O({attribute:"align-content"})],Ui.prototype,"alignContent",void 0),t([O({mode:"boolean"})],Ui.prototype,"inset",void 0),t([O({mode:"boolean"})],Ui.prototype,"vertical",void 0);const Wi=Pe`<template class="${e=>e.hasChildNodes()?"children":"childless"}" role="${e=>e.role}" aria-orientation="${e=>e.vertical?"vertical":"horizontal"}">${To((e=>e.hasChildNodes()),Pe`<div class="wrapper" part="wrapper"><slot></slot></div>`)}</template>`,Qi="12px",Ki="12px",Yi="8px",Xi="8px;";function Zi(e,t){return new Fo("vertical",e,t)}const Ji=Ee`${Ne("flex")}:host{align-items:center;box-sizing:border-box;flex-direction:row;flex-grow:1;position:relative;font-family:${Ut};font-size:${Qt};font-weight:${Jt};line-height:${to};text-align:center;color:${Ve}}:host::after,:host::before{box-sizing:border-box;display:flex;flex-grow:1}:host::after,:host::before{border-color:${zt}}:host([align-content=start])::after{content:""}:host([align-content=center])::after,:host([align-content=center])::before{content:""}:host([align-content=end])::before{content:""}:host([align-content].childless)::before{margin-bottom:0;margin-right:0}:host([align-content].childless)::after{margin-left:0;margin-top:0}`.withBehaviors(qo("brand",Ee`:host([appearance=brand]){color:${"var(--colorBrandForeground1)"}}:host([appearance=brand])::after,:host([appearance=brand])::before{border-color:${Bt}}`),qo("subtle",Ee`:host([appearance=subtle])::after,:host([appearance=subtle])::before{border-color:${"var(--colorNeutralStroke3)"}}`),qo("strong",Ee`:host([appearance=strong])::after,:host([appearance=strong])::before{border-color:${wt}}`),Zi(!1,Ee`:host{width:100%}:host::after,:host::before{border-top-style:solid;border-top-width:${ao};min-width:${Xi}}:host([inset]){padding-inline:${Ki}}:host([align-content=start])::before{content:"";margin-right:${Qi};max-width:${Yi}}:host([align-content=start])::after{margin-left:${Qi}}:host([align-content=center])::before{margin-right:${Qi}}:host([align-content=center])::after{margin-left:${Qi}}:host([align-content=end])::after{content:"";margin-left:${Qi};max-width:${Yi}}:host([align-content=end])::before{margin-right:${Qi}}`),Zi(!0,Ee`:host([vertical]){flex-direction:column;min-height:20px}:host([vertical])::after,:host([vertical])::before{border-right-style:solid;border-right-width:${ao};min-height:${Xi}}:host([inset]){margin-block:${Ki}}:host([vertical].children){min-height:84px}:host([align-content=start])::before{content:"";margin-bottom:${Qi};max-height:${Yi}}:host([align-content=start])::after{margin-top:${Qi}}:host([align-content=center])::before{margin-bottom:${Qi}}:host([align-content=center])::after{margin-top:${Qi}}:host([align-content=end])::after{content:"";margin-top:${Qi};max-height:${Yi}}:host([align-content=end])::before{margin-bottom:${Qi}}`));let es=class extends Ui{};es=t([_({name:"fluent-divider",template:Wi,styles:Ji})],es);class ts extends q{constructor(){super(...arguments),this.bordered=!1,this.block=!1}}t([O({mode:"boolean"})],ts.prototype,"bordered",void 0),t([O],ts.prototype,"fit",void 0),t([O({mode:"boolean"})],ts.prototype,"block",void 0);const os=Ee`::slotted(*){display:inline-block;box-sizing:border-box;border-color:${wt};border-radius:${Dt}}:host([bordered]) ::slotted(*){border-style:solid;border-width:${ao}}:host([shape=circular]) ::slotted(*){border-radius:${Gt}}:host([shape=rounded]) ::slotted(*){border-radius:${qt}}:host([shadow]) ::slotted(*){box-shadow:${so}}:host([fit]) ::slotted(*){object-fit:none;object-position:center;height:100%;width:100%}:host([fit=none]) ::slotted(*){object-position:left top}:host([fit=cover]) ::slotted(*){object-fit:cover}:host([fit=contain]) ::slotted(*){object-fit:contain}:host([block]) ::slotted(*){width:100%}`;let is=class extends ts{};is=t([_({name:"fluent-image",template:Pe`<slot></slot>`,styles:os})],is);class ss extends q{constructor(){super(...arguments),this.disabled=!1,this.strong=!1,this.required=!1,this.size="medium"}}t([O({mode:"boolean"})],ss.prototype,"disabled",void 0),t([O({mode:"boolean"})],ss.prototype,"strong",void 0),t([O({mode:"boolean"})],ss.prototype,"required",void 0),t([O],ss.prototype,"size",void 0);const rs=Ee`::slotted(*){font-family:${Ut};font-size:${Kt};line-height:${oo};font-weight:${Jt};text-align:start;display:inline}:host([size=small]) ::slotted(*){font-size:${Qt};line-height:${to}}:host([size=large]) ::slotted(*){font-size:${Yt};line-height:${io};font-weight:${eo}}:host([disabled]) ::slotted(*){color:${Ge}}:host([strong]) ::slotted(*){font-weight:${eo}}:host slot[name=required]{color:${Vt};padding-inline-start:4px}`;let as=class extends ss{};as=t([_({name:"fluent-label",template:Pe`<template><slot></slot>${To((e=>e.required),Pe`<slot name="required">*</slot>`)}</template>`,styles:rs})],as);class ns extends q{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})},this.inline=!1,this.disabled=!1,this.disabledFocusable=!1}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}handleDisabledClick(e){if(!this.disabled&&!this.disabledFocusable)return!0;e.preventDefault()}handleDisabledKeydown(e){if(!this.disabled&&!this.disabledFocusable||"Enter"!==e.key&&" "!==e.key)return!0;e.preventDefault(),e.stopPropagation()}}t([O],ns.prototype,"download",void 0),t([O],ns.prototype,"href",void 0),t([O],ns.prototype,"hreflang",void 0),t([O],ns.prototype,"ping",void 0),t([O],ns.prototype,"referrerpolicy",void 0),t([O],ns.prototype,"rel",void 0),t([O],ns.prototype,"target",void 0),t([O],ns.prototype,"type",void 0),t([O({attribute:"aria-expanded",mode:"fromView"})],ns.prototype,"ariaExpanded",void 0),t([x],ns.prototype,"defaultSlottedContent",void 0),t([O],ns.prototype,"appearance",void 0),t([O({mode:"boolean"})],ns.prototype,"inline",void 0),t([O({mode:"boolean"})],ns.prototype,"disabled",void 0),t([O({attribute:"disabledfocusable",mode:"boolean"})],ns.prototype,"disabledFocusable",void 0),Uo(ns,Qo);const ls=Pe`<a class="base" part="base" download="${e=>e.download}" tabindex="${e=>e.disabledFocusable?"0":e.disabled?"-1":!!e.tabIndex||void 0}" aria-disabled="${e=>e.disabled||e.disabledFocusable||e.ariaDisabled}" ${ai("href","hreflang","ping","referrerpolicy","rel","target","type","aria-atomic","aria-busy","aria-controls","aria-current","aria-describedby","aria-details","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-live","aria-owns","aria-relevant","aria-roledescription")} @click="${(e,t)=>e.handleDisabledClick(t.event)}" @keydown="${(e,t)=>e.handleDisabledKeydown(t.event)}" ${bo("control")}><slot></slot></a>`,ds=Ee`${Ne("inline")}:host .base{background-color:transparent;border-top-style:none;border-left-style:none;border-right-style:none;border-bottom-color:transparent;border-bottom-style:solid;border-bottom-width:${ao};box-sizing:border-box;color:${Ue};cursor:pointer;font-family:${Ut};font-size:${Kt};font-weight:${Jt};margin:0;padding:0;overlow:inherit;text-align:left;text-decoration-line:none;text-overflow:inherit;user-select:text}:host(:hover) .base{border-bottom-color:${We};color:${We}}:host(:active) .base{border-bottom-color:${Qe};color:${Qe}}:host([inline]),:host([inline]) .base{font-size:inherit;line-height:inherit}:host([disabled]) .base,:host([disabledfocusable]) .base{border-bottom-color:transparent;color:${Ge};cursor:not-allowed}:host([inline]) .base{border-bottom-color:${Ue}}:host([inline][disabled]) .base,:host([inline][disabledfocusable]) .base{border-bottom-color:${Ge}}`.withBehaviors(qo("subtle",Ee`:host([appearance=subtle]) .base{color:${Ve}}:host([appearance=subtle]:hover) .base{border-bottom-color:${He};color:${He}}:host([appearance=subtle]:active) .base{border-bottom-color:${Me};color:${Me}}:host([inline][appearance=subtle]) .base{border-bottom-color:${Ve}}:host([appearance=subtle][disabled]) .base,:host([appearance=subtle][disabledfocusable]) .base{border-bottom-color:transparent;color:${Ge}}:host([appearance=subtle][inline][disabled]) .base,:host([appearance=subtle][inline][disabledfocusable]) .base{border-bottom-color:${Ge}}`));let cs=class extends ns{};cs=t([_({name:"fluent-link",template:ls,styles:ds,shadowOptions:{delegatesFocus:!0}})],cs);const hs=Pe`<button class="base" part="base" ?autofocus="${e=>e.autofocus}" ?disabled="${e=>e.disabled}" tabindex="${e=>e.disabledFocusable?"0":void 0}" aria-disabled="${e=>!0===e.disabledFocusable?"true":e.ariaDisabled}" ${ai("form","formaction","formenctype","formmethod","formnovalidate","formtarget","name","type","value","aria-atomic","aria-busy","aria-controls","aria-current","aria-describedby","aria-details","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-live","aria-owns","aria-pressed","aria-relevant","aria-roledescription")} ${bo("control")}><slot name="start"></slot><slot ${Ae("defaultSlottedContent")}></slot><slot name="end"><svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M15.85 7.65c.2.2.2.5 0 .7l-5.46 5.49a.55.55 0 01-.78 0L4.15 8.35a.5.5 0 11.7-.7L10 12.8l5.15-5.16c.2-.2.5-.2.7 0z"></path></svg></slot></button>`;class us extends oi{defaultSlottedContentChanged(){return super.defaultSlottedContentChanged(),this.hasChildNodes()?this.classList.remove("childless"):this.classList.add("childless")}}let ps=class extends us{};ps=t([_({name:"fluent-menu-button",template:hs,styles:Ee`${fi}:host(.childless) .base{padding:0!important}:host([size=small].childless) .base{min-width:24px!important}:host([size=medium].childless) .base{min-width:32px!important}:host([size=large].childless) .base{min-width:40px!important}.icon-only slot[name=end]>svg{display:none}`,shadowOptions:{delegatesFocus:!0}})],ps);const bs=Pe`<template aria-hidden="true"><slot name="${e=>e.getSlotInfo().name}">${e=>Pe`${e.getSlotInfo().icon}`}</slot></template>`,gs='<svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m10.7071 5.29289c.3905.39053.3905 1.02369 0 1.41422l-1.29289 1.29289 1.29289 1.29289c.3905.39053.3905 1.02371 0 1.41421s-1.02368.3905-1.41421 0l-1.29289-1.29289-1.29289 1.29289c-.39053.3905-1.02369.3905-1.41422 0-.39052-.3905-.39052-1.02368 0-1.41421l1.2929-1.29289-1.2929-1.29289c-.39052-.39053-.39052-1.02369 0-1.41422.39053-.39052 1.02369-.39052 1.41422 0l1.29289 1.2929 1.29289-1.2929c.39053-.39052 1.02371-.39052 1.41421 0z"/><path d="m0 8c0-4.41828 3.58172-8 8-8 4.4183 0 8 3.58172 8 8 0 4.4183-3.5817 8-8 8-4.41828 0-8-3.5817-8-8zm8-6c-3.31371 0-6 2.68629-6 6 0 3.3137 2.68629 6 6 6 3.3137 0 6-2.6863 6-6 0-3.31371-2.6863-6-6-6z"/><</svg>',fs='<svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m8.2071 6.20736c.39053-.39052.39054-1.02368.00002-1.41421s-1.02368-.39054-1.41422-.00002l-2.5 2.49991c-.18754.18754-.2929.44189-.2929.70711s.10535.51958.29289.70712l2.5 2.50003c.39053.3905 1.02369.3905 1.41422 0 .39052-.3906.39052-1.0237 0-1.41425l-.7929-.79289h3.58579c.5523 0 1-.44772 1-1s-.4477-1-1-1h-3.58573z"/><path d="m8 0c-4.41828 0-8 3.58172-8 8 0 4.4183 3.58172 8 8 8 4.4183 0 8-3.5817 8-8 0-4.41828-3.5817-8-8-8zm-6 8c0-3.31371 2.68629-6 6-6 3.3137 0 6 2.68629 6 6 0 3.3137-2.6863 6-6 6-3.31371 0-6-2.6863-6-6z"/></svg>',vs='<svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m8 2c-3.31371 0-6 2.68629-6 6 0 3.3137 2.68629 6 6 6 3.3137 0 6-2.6863 6-6 0-3.31371-2.6863-6-6-6zm-8 6c0-4.41828 3.58172-8 8-8 4.4183 0 8 3.58172 8 8 0 4.4183-3.5817 8-8 8-4.41828 0-8-3.5817-8-8z"/></svg>';class ms extends q{constructor(){super(...arguments),this.status="available",this.size="medium",this.outofoffice=!1}getSlotInfo(){if(this.outofoffice)switch(this.status){case"available":return{name:this.status,icon:'<svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m11.7071 6.70711c.3905-.39053.3905-1.02369 0-1.41422-.3905-.39052-1.0237-.39052-1.4142 0l-3.2929 3.2929-1.29289-1.2929c-.39053-.39052-1.02369-.39052-1.41422 0-.39052.39053-.39052 1.02369 0 1.41422l2 1.99999c.39053.3905 1.02369.3905 1.41422 0z"/><path d="m0 8c0-4.41828 3.58172-8 8-8 4.4183 0 8 3.58172 8 8 0 4.4183-3.5817 8-8 8-4.41828 0-8-3.5817-8-8zm8-6c-3.31371 0-6 2.68629-6 6 0 3.3137 2.68629 6 6 6 3.3137 0 6-2.6863 6-6 0-3.31371-2.6863-6-6-6z"/></svg>'};case"away":return{name:this.status,icon:gs};case"busy":return{name:this.status,icon:'<svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m8 2c-3.31371 0-6 2.68629-6 6 0 3.3137 2.68629 6 6 6 3.3137 0 6-2.6863 6-6 0-3.31371-2.6863-6-6-6zm-8 6c0-4.41828 3.58172-8 8-8 4.4183 0 8 3.58172 8 8 0 4.4183-3.5817 8-8 8-4.41828 0-8-3.5817-8-8z"/></svg>'};case"donotdisturb":return{name:this.status,icon:'<svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m5.25 7c-.55228 0-1 .44772-1 1s.44772 1 1 1h5.5c.5523 0 1-.44772 1-1s-.4477-1-1-1z"/><path d="m0 8c0-4.41828 3.58172-8 8-8 4.4183 0 8 3.58172 8 8 0 4.4183-3.5817 8-8 8-4.41828 0-8-3.5817-8-8zm8-6c-3.31371 0-6 2.68629-6 6 0 3.3137 2.68629 6 6 6 3.3137 0 6-2.6863 6-6 0-3.31371-2.6863-6-6-6z"/></svg>'};case"offline":case"outofoffice":return{name:this.status,icon:fs};default:return{name:"unknown",icon:vs}}else switch(this.status){case"available":return{name:this.status,icon:'<svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m8 16c4.4183 0 8-3.5817 8-8 0-4.41828-3.5817-8-8-8-4.41828 0-8 3.58172-8 8 0 4.4183 3.58172 8 8 8zm3.7069-9.29261-4.00329 4.00001c-.18766.1875-.44214.2928-.70742.2926-.26529-.0002-.51964-.1057-.70707-.2935l-1.99679-1.99996c-.39021-.39084-.38971-1.024.00113-1.41421s1.024-.38971 1.41421.00113l1.28998 1.29205 3.29555-3.2929c.3907-.39037 1.0239-.39011 1.4142.00057.3904.39068.3901 1.02385-.0005 1.41421z"></svg>'};case"away":return{name:this.status,icon:'<svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m8 16c4.4183 0 8-3.5817 8-8 0-4.41828-3.5817-8-8-8-4.41828 0-8 3.58172-8 8 0 4.4183 3.58172 8 8 8zm.5-11.5v3.01937l2.1247 1.69976c.4313.34501.5012.97427.1562 1.40557s-.97433.5012-1.40559.1562l-2.5-2.00003c-.23722-.18977-.37531-.47709-.37531-.78087v-3.5c0-.55228.44772-1 1-1 .55229 0 1 .44772 1 1z"/></svg>'};case"busy":return{name:this.status,icon:'<svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m16 8c0 4.4183-3.5817 8-8 8-4.41828 0-8-3.5817-8-8 0-4.41828 3.58172-8 8-8 4.4183 0 8 3.58172 8 8z"/></svg>'};case"donotdisturb":return{name:this.status,icon:'<svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m8 16c4.4183 0 8-3.5817 8-8 0-4.41828-3.5817-8-8-8-4.41828 0-8 3.58172-8 8 0 4.4183 3.58172 8 8 8zm-2.75098-9h5.50088c.5523 0 1 .44772 1 1 0 .55229-.4477 1-1 1h-5.50088c-.55228 0-1-.44771-1-1 0-.55228.44772-1 1-1z"/></svg>'};case"offline":return{name:this.status,icon:gs};case"outofoffice":return{name:this.status,icon:fs};default:return{name:"unknown",icon:vs}}}}t([O],ms.prototype,"status",void 0),t([O],ms.prototype,"size",void 0),t([O({mode:"boolean"})],ms.prototype,"outofoffice",void 0);const ys=Ee`${Ne("inline-flex")}:host{box-sizing:border-box;align-items:center;justify-content:center;border-radius:50%;background-color:${et}}:host([outofoffice]){color:${et}}:host([status=away]){color:${Et}}:host([status=available]){color:${Rt}}:host([outofoffice][status=offline]),:host([status=offline]){color:${_e}}:host([outofoffice][status=outofoffice]),:host([status=outofoffice]){color:${"var(--colorPaletteBerryForeground3)"}}:host([outofoffice][status=available]){color:${Rt}}:host([outofoffice][status=away]){color:${Et}}:host([outofoffice][status=busy]),:host([outofoffice][status=donotdisturb]),:host([outofoffice][status=unknown]),:host([status=busy]),:host([status=donotdisturb]),:host([status=unknown]){color:${Nt}}::slotted(*),slot{fill:currentColor}`.withBehaviors(So("tiny",Ee`::slotted(svg),:host([size=tiny]) svg{width:6px;height:6px}`),So("extra-small",Ee`::slotted(svg),:host([size=extra-small]) svg{width:10px;height:10px}`),So("small",Ee`::slotted(svg),:host([size=small]) svg{width:12px;height:12px}`),So("medium",Ee`::slotted(svg),:host([size=medium]) svg{width:16px;height:16px}`),So("large",Ee`::slotted(svg),:host([size=large]) svg{width:20px!important;height:20px!important}`),So("extra-large",Ee`::slotted(svg),:host([size=extra-large]) svg{width:28px!important;height:28px!important}`));let xs=class extends ms{};xs=t([_({name:"fluent-presence-badge",template:bs,styles:ys})],xs);const $s=Pe`<template role="radio" class="${e=>e.checked?"checked":""} ${e=>e.readOnly?"readonly":""}" aria-checked="${e=>e.checked}" aria-required="${e=>e.required}" aria-disabled="${e=>e.disabled}" aria-readonly="${e=>e.readOnly}" @keypress="${(e,t)=>e.keypressHandler(t.event)}" @click="${(e,t)=>e.clickHandler(t.event)}"><div part="control" class="control"><slot name="checked-indicator"><svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true"><path d="M10 2a8 8 0 100 16 8 8 0 000-16z"></path></svg></slot></div><slot></slot></template>`;class ws extends q{}class ks extends(Jo(ws)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Cs extends ks{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{if(" "!==e.key)return!0;this.checked||this.readOnly||(this.checked=!0)},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var e;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=null!==(e=this.defaultChecked)&&void 0!==e&&e,this.dirtyChecked=!1))}connectedCallback(){var e,t;super.connectedCallback(),this.validate(),"radiogroup"!==(null===(e=this.parentElement)||void 0===e?void 0:e.getAttribute("role"))&&null===this.getAttribute("tabindex")&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=null!==(t=this.defaultChecked)&&void 0!==t&&t,this.dirtyChecked=!1))}isInsideRadioGroup(){return null!==this.closest("[role=radiogroup]")}clickHandler(e){this.disabled||this.readOnly||this.checked||(this.checked=!0)}}t([O({attribute:"readonly",mode:"boolean"})],Cs.prototype,"readOnly",void 0),t([x],Cs.prototype,"name",void 0),t([x],Cs.prototype,"defaultSlottedNodes",void 0);const zs="16px",Bs=Ee`
${Ne("inline-flex")} :host {
  font-family: ${Ut};
  align-items: center;
  outline: none;
  ${""} user-select: none;
  position: relative;
  flex-direction: row;
  gap: ${"12px"};
  padding: 6px;
  font-size: ${Kt};
  line-height: ${oo};
  color: ${_e};
  transition: all 0.2s ease-in-out;
}

::slotted(*) {
  display: inline-flex;
  flex-direction: column;
}

:host(:not.readonly),
:host(:not([disabled])) {
  cursor: pointer;
}

.control {
  position: relative;
  width: ${zs};
  height: ${zs};
  font-size: 12px;
  box-sizing: border-box;
  border-radius: 50%;
  border: ${ao} solid ${yt};
  /* background: none; */
  outline: none;
}

.control,
slot[name='checked-indicator'] {
  flex-shrink: 0;
}

slot[name='checked-indicator'] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  fill: currentColor;
  opacity: 0;
  pointer-events: none;
}

:host(:not([disabled]):hover) {
  color: ${Ve};
}

:host(:not([disabled]):hover) .control {
  border-color: ${xt};
}

:host(:not([disabled]):active) .control {
  border-color: ${$t};
}

:host([aria-checked="true"]:not([disabled])) {
  color: ${Le};
}

:host([aria-checked="true"]:not([disabled])) slot[name='checked-indicator'] {
  opacity: 1;
}

/* need focus styles
  :host(:${vo}) .control {}
*/

:host([aria-checked="true"]) .control {
  border-color: ${It};
  color: ${Ke};
}

:host([aria-checked="true"]:not([disabled]):hover) {
  color: ${Le};
}

:host([aria-checked="true"]:not([disabled]):hover) .control {
  border-color: ${Tt};
  color: ${Ye};
}

:host([aria-checked="true"]:not([disabled]):active) .control {
  border-color: ${Pt};
  color: ${Xe};
}

:host([aria-checked="true"]) slot[name='checked-indicator'] {
  opacity: 1;
}

:host([disabled]) {
  color: ${Ge};
}

:host([disabled]) .control {
  border-color: ${Ft};
  color: ${Ge};
}
  `;let Is=class extends Cs{};var Ts;Is=t([_({name:"fluent-radio",template:$s,styles:Bs})],Is),function(e){e.horizontal="horizontal",e.vertical="vertical"}(Ts||(Ts={}));const Ps=Pe`<template role="radiogroup" aria-disabled="${e=>e.disabled}" aria-readonly="${e=>e.readOnly}" @click="${(e,t)=>e.clickHandler(t.event)}" @keydown="${(e,t)=>e.keydownHandler(t.event)}" @focusout="${(e,t)=>e.focusOutHandler(t.event)}"><slot name="label"></slot><div class="positioning-region ${e=>e.orientation===Ts.horizontal?"horizontal":"vertical"}" part="positioning-region"><slot ${Ae({property:"slottedRadioButtons",filter:Fe("[role=radio]")})}></slot></div></template>`;var Fs;!function(e){e.ltr="ltr",e.rtl="rtl"}(Fs||(Fs={}));class Ss extends q{constructor(){super(...arguments),this.orientation=Ts.horizontal,this.stacked=!1,this.radioChangeHandler=e=>{const t=e.target;t.checked&&(this.slottedRadioButtons.forEach((e=>{e!==t&&(e.checked=!1,this.isInsideFoundationToolbar||e.setAttribute("tabindex","-1"))})),this.selectedRadio=t,this.value=t.value,t.setAttribute("tabindex","0"),this.focusedRadio=t),e.stopPropagation()},this.moveToRadioByIndex=(e,t)=>{const o=e[t];this.isInsideToolbar||(o.setAttribute("tabindex","0"),o.readOnly?this.slottedRadioButtons.forEach((e=>{e!==o&&e.setAttribute("tabindex","-1")})):(o.checked=!0,this.selectedRadio=o)),this.focusedRadio=o,o.focus()},this.moveRightOffGroup=()=>{var e;null===(e=this.nextElementSibling)||void 0===e||e.focus()},this.moveLeftOffGroup=()=>{var e;null===(e=this.previousElementSibling)||void 0===e||e.focus()},this.focusOutHandler=e=>{const t=this.slottedRadioButtons,o=e.target,i=null!==o?t.indexOf(o):0,s=this.focusedRadio?t.indexOf(this.focusedRadio):-1;return(0===s&&i===s||s===t.length-1&&s===i)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),t.forEach((e=>{e!==this.selectedRadio&&e.setAttribute("tabindex","-1")})))):(this.focusedRadio=t[0],this.focusedRadio.setAttribute("tabindex","0"),t.forEach((e=>{e!==this.focusedRadio&&e.setAttribute("tabindex","-1")})))),!0},this.clickHandler=e=>{const t=e.target;if(t){const e=this.slottedRadioButtons;t.checked||0===e.indexOf(t)?(t.setAttribute("tabindex","0"),this.selectedRadio=t):(t.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=t}e.preventDefault()},this.shouldMoveOffGroupToTheRight=(e,t,o)=>e===t.length&&this.isInsideToolbar&&o===Q,this.shouldMoveOffGroupToTheLeft=(e,t)=>(this.focusedRadio?e.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&t===W,this.checkFocusedRadio=()=>{null===this.focusedRadio||this.focusedRadio.readOnly||this.focusedRadio.checked||(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=e=>{const t=this.slottedRadioButtons;let o=0;if(o=this.focusedRadio?t.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(o,t,e.key))this.moveRightOffGroup();else for(o===t.length&&(o=0);o<t.length&&t.length>1;){if(!t[o].disabled){this.moveToRadioByIndex(t,o);break}if(this.focusedRadio&&o===t.indexOf(this.focusedRadio))break;if(o+1>=t.length){if(this.isInsideToolbar)break;o=0}else o+=1}},this.moveLeft=e=>{const t=this.slottedRadioButtons;let o=0;if(o=this.focusedRadio?t.indexOf(this.focusedRadio)-1:0,o=o<0?t.length-1:o,this.shouldMoveOffGroupToTheLeft(t,e.key))this.moveLeftOffGroup();else for(;o>=0&&t.length>1;){if(!t[o].disabled){this.moveToRadioByIndex(t,o);break}if(this.focusedRadio&&o===t.indexOf(this.focusedRadio))break;o-1<0?o=t.length-1:o-=1}},this.keydownHandler=e=>{const t=e.key;if(t in Z&&this.isInsideFoundationToolbar)return!0;switch(t){case Y:this.checkFocusedRadio();break;case Q:case U:this.direction===Fs.ltr?this.moveRight(e):this.moveLeft(e);break;case W:case K:this.direction===Fs.ltr?this.moveLeft(e):this.moveRight(e);break;default:return!0}}}readOnlyChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{this.readOnly?e.readOnly=!0:e.readOnly=!1}))}disabledChanged(){void 0!==this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{this.disabled?e.disabled=!0:e.disabled=!1}))}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{e.setAttribute("name",this.name)}))}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach((e=>{e.getAttribute("value")===this.value&&(e.checked=!0,this.selectedRadio=e)})),this.$emit("change")}slottedRadioButtonsChanged(e,t){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var e;return null!==(e=this.parentToolbar)&&void 0!==e&&e}get isInsideFoundationToolbar(){var e;return!!(null===(e=this.parentToolbar)||void 0===e?void 0:e.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=(e=>{const t=this.closest("[dir]");return null!==t&&"rtl"===t.dir?Fs.rtl:Fs.ltr})(),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach((e=>{e.removeEventListener("change",this.radioChangeHandler)}))}setupRadioButtons(){const e=this.slottedRadioButtons.filter((e=>e.hasAttribute("checked"))),t=e?e.length:0;t>1&&(e[t-1].checked=!0);let o=!1;if(this.slottedRadioButtons.forEach((e=>{void 0!==this.name&&e.setAttribute("name",this.name),this.disabled&&(e.disabled=!0),this.readOnly&&(e.readOnly=!0),this.value&&this.value===e.value?(this.selectedRadio=e,this.focusedRadio=e,e.checked=!0,e.setAttribute("tabindex","0"),o=!0):(this.isInsideFoundationToolbar||e.setAttribute("tabindex","-1"),e.checked=!1),e.addEventListener("change",this.radioChangeHandler)})),void 0===this.value&&this.slottedRadioButtons.length>0){const e=this.slottedRadioButtons.filter((e=>e.hasAttribute("checked"))),t=null!==e?e.length:0;if(t>0&&!o){const o=e[t-1];o.checked=!0,this.focusedRadio=o,o.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}t([O({attribute:"readonly",mode:"boolean"})],Ss.prototype,"readOnly",void 0),t([O({attribute:"disabled",mode:"boolean"})],Ss.prototype,"disabled",void 0),t([O],Ss.prototype,"name",void 0),t([O],Ss.prototype,"value",void 0),t([O],Ss.prototype,"orientation",void 0),t([O({mode:"boolean"})],Ss.prototype,"stacked",void 0),t([x],Ss.prototype,"childItems",void 0),t([x],Ss.prototype,"slottedRadioButtons",void 0);const As=Ee`${Ne("flex")}:host{align-items:flex-start;flex-direction:column;gap:8px;font-family:${Ut};font-size:${Kt};line-height:${oo}}.positioning-region{display:flex;flex-wrap:wrap}:host([orientation=vertical]) .positioning-region{flex-direction:column}:host([orientation=horizontal]) .positioning-region{flex-direction:row}`;let Os=class extends Ss{};Os=t([_({name:"fluent-radio-group",template:Ps,styles:As})],Os);const Rs=Ee`${Ne("inline-flex")}::slotted(fluent-button),::slotted(fluent-button[size=large]){--border-top-right-radius:0;--border-bottom-right-radius:0}::slotted(fluent-menu-button){--border-top-left-radius:0;--border-bottom-left-radius:0;margin-left:-1px}::slotted(fluent-menu-button[appearance=primary]){--button-border-left-color:${Je}}::slotted(fluent-menu-button[appearance=subtle]),::slotted(fluent-menu-button[appearance=subtle]:hover),::slotted(fluent-menu-button[appearance=transparent]),::slotted(fluent-menu-button[appearance=transparent]:hover){--button-border-left-color:${kt}}::slotted(fluent-menu-button[appearance=subtle]:active),::slotted(fluent-menu-button[appearance=transparent]:active){--button-border-left-color:${Ct}}`;let Es=class extends q{};Es=t([_({name:"fluent-split-button",template:Pe`<slot></slot>`,styles:Rs,shadowOptions:{delegatesFocus:!0}})],Es);class Ns extends q{constructor(){super(...arguments),this.size="medium"}}t([O({mode:"boolean"})],Ns.prototype,"disabled",void 0),t([O],Ns.prototype,"size",void 0);const Ls=Pe`<template slot="tab" role="tab" aria-disabled="${e=>e.disabled}"><slot name="start"></slot><slot></slot><slot name="end"></slot></template>`,Vs="10px",Hs=Ee`${Ne("inline-flex")}:host{--tab-padding:${Vs}box-sizing:border-box;position:relative;font-family:${Ut};font-size:${Kt};font-weight:${Jt};line-height:${oo};background-color:none;align-items:center;justify-content:center;grid-row:1/3;outline:0;border-color:none;border-radius:${qt};border-width:${ao};column-gap:${"6px"};padding:var(--tab-padding);cursor:pointer;overflow:hidden}:host([aria-selected=true]){z-index:2}:host,:host(:active),:host(:hover){color:${Le}}:host(:not(.horizontal))::after{content:"";position:absolute;bottom:0;height:2px;width:calc(100% - (var(--tab-padding) * 2))}:host(.vertical)::after{content:"";position:absolute;left:0;width:2px;height:calc(100% - (var(--tab-padding) * 2));transform:translateY(-50%)}:host(:not([aria-selected=true]):active):after,:host(:not([aria-selected=true]):hover):after{background-color:${wt}}:host(.vertical){justify-content:start;grid-column:1/3}:host(.vertical[aria-selected=true]){z-index:2}::slotted(svg){font-size:20px;height:20px;width:20px}:host(size="small"){--tab-padding:${"6px"}gap:${"2px"}}`;let Ms=class extends Ns{};Ms=t([_({name:"fluent-tab",template:Ls,styles:Hs})],Ms);class Ds extends q{}const js=Pe`<template slot="tabpanel" role="tabpanel"><slot></slot></template>`,qs=Ee`${Ne("block")}:host{box-sizing:border-box;font-family:${Ut};font-size:${Kt};font-weight:${Jt};line-height:${oo};padding:0 ${Vs}}`;let _s=class extends Ds{};_s=t([_({name:"fluent-tab-panel",template:js,styles:qs})],_s);class Gs extends q{constructor(){super(...arguments),this.orientation="horizontal",this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=e=>"true"===e.getAttribute("aria-disabled"),this.isFocusableElement=e=>!this.isDisabledElement(e),this.setTabs=()=>{const e=this.isHorizontal()?"gridColumn":"gridRow";this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach(((t,o)=>{if("tab"===t.slot){const e=this.activeTabIndex===o&&this.isFocusableElement(t);this.activeindicator&&this.isFocusableElement(t)&&(this.showActiveIndicator=!0);const i=this.tabIds[o],s=this.tabpanelIds[o];t.setAttribute("id","string"!=typeof i?`tab-${o+1}`:i),t.setAttribute("aria-selected",e?"true":"false"),t.setAttribute("aria-controls","string"!=typeof s?`panel-${o+1}`:s),t.addEventListener("click",this.handleTabClick),t.addEventListener("keydown",this.handleTabKeyDown),t.setAttribute("tabindex",e?"0":"-1"),e&&(this.activetab=t)}t.style.gridColumn="",t.style.gridRow="",t.style[e]=`${o+1}`,this.isHorizontal()?t.classList.remove("vertical"):t.classList.add("vertical")}))},this.setTabPanels=()=>{this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.tabpanels.forEach(((e,t)=>{const o=this.tabIds[t],i=this.tabpanelIds[t];e.setAttribute("id","string"!=typeof i?`panel-${t+1}`:i),e.setAttribute("aria-labelledby","string"!=typeof o?`tab-${t+1}`:o),this.activeTabIndex!==t?e.setAttribute("hidden",""):e.removeAttribute("hidden")}))},this.handleTabClick=e=>{const t=e.currentTarget;1===t.nodeType&&this.isFocusableElement(t)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(t),this.setComponent())},this.handleTabKeyDown=e=>{if(this.isHorizontal())switch(e.key){case W:e.preventDefault(),this.adjustBackward(e);break;case Q:e.preventDefault(),this.adjustForward(e)}else switch(e.key){case K:e.preventDefault(),this.adjustBackward(e);break;case U:e.preventDefault(),this.adjustForward(e)}switch(e.key){case X:e.preventDefault(),this.adjust(-this.activeTabIndex);break;case"End":e.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1)}},this.adjustForward=e=>{const t=this.tabs;let o=0;for(o=this.activetab?t.indexOf(this.activetab)+1:1,o===t.length&&(o=0);o<t.length&&t.length>1;){if(this.isFocusableElement(t[o])){this.moveToTabByIndex(t,o);break}if(this.activetab&&o===t.indexOf(this.activetab))break;o+1>=t.length?o=0:o+=1}},this.adjustBackward=e=>{const t=this.tabs;let o=0;for(o=this.activetab?t.indexOf(this.activetab)-1:0,o=o<0?t.length-1:o;o>=0&&t.length>1;){if(this.isFocusableElement(t[o])){this.moveToTabByIndex(t,o);break}o-1<0?o=t.length-1:o-=1}},this.moveToTabByIndex=(e,t)=>{const o=e[t];this.activetab=o,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=t,o.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(e,t){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex((t=>t.id===e)),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return void 0!==this.activeid?-1===this.tabIds.indexOf(this.activeid)?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map((e=>e.getAttribute("id")))}getTabPanelIds(){return this.tabpanels.map((e=>e.getAttribute("id")))}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return"horizontal"===this.orientation}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const e=this.isHorizontal()?"gridColumn":"gridRow",t=this.isHorizontal()?"translateX":"translateY",o=this.isHorizontal()?"offsetLeft":"offsetTop",i=this.activeIndicatorRef[o];this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`;const s=this.activeIndicatorRef[o];this.activeIndicatorRef.style[e]=`${this.prevActiveTabIndex+1}`;const r=s-i;this.activeIndicatorRef.style.transform=`${t}(${r}px)`,this.activeIndicatorRef.classList.add("active-indicator-transition"),this.activeIndicatorRef.addEventListener("transitionend",(()=>{this.ticking=!1,this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${t}(0px)`,this.activeIndicatorRef.classList.remove("active-indicator-transition")}))}adjust(e){this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=J(0,this.tabs.length-1,this.activeTabIndex+e),this.setComponent()}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}t([O],Gs.prototype,"orientation",void 0),t([O],Gs.prototype,"activeid",void 0),t([x],Gs.prototype,"tabs",void 0),t([x],Gs.prototype,"tabpanels",void 0),t([O({mode:"boolean"})],Gs.prototype,"activeindicator",void 0),t([x],Gs.prototype,"activeIndicatorRef",void 0),t([x],Gs.prototype,"showActiveIndicator",void 0);const Us=Pe`<template class="${e=>e.orientation}"><div class="tablist" part="tablist" role="tablist"><slot class="tab" name="tab" part="tab" ${Ae("tabs")}></slot>${To((e=>e.showActiveIndicator),Pe`<div ${bo("activeIndicatorRef")} class="active-indicator" part="active-indicator"></div>`)}</div><div class="tabpanel" part="tabpanel"><slot name="tabpanel" part="tabpanel" ${Ae("tabpanels")}></slot></div></template>`,Ws=Ee`${Ne("grid")}:host{box-sizing:border-box;grid-template-columns:auto 1fr auto;grid-template-rows:auto 1fr;gap:12px}.tablist{display:grid;grid-template-rows:1fr auto;grid-template-columns:auto;position:relative;width:max-content;align-self:end}.end,.start{align-self:center}.active-indicator{grid-row:2;grid-column:1;width:calc(100% - (${Vs} * 2));height:2px;border-radius:${qt};justify-self:center;background:${Bt}}.active-indicator-transition{transition:transform .2s ease-in-out}.tabpanel{grid-row:2;grid-column-start:1;grid-column-end:4;position:relative}:host(.vertical){grid-template-rows:auto 1fr auto;grid-template-columns:auto 1fr;gap:0 12px}:host(.vertical) .tablist{grid-row-start:2;grid-row-end:2;display:grid;grid-template-rows:auto;grid-template-columns:auto 1fr;position:relative;width:max-content;justify-self:end;align-self:flex-start;width:100%}:host(.vertical) .tabpanel{grid-column:2;grid-row-start:1;grid-row-end:4}:host(.vertical) .end{grid-row:3}:host(.vertical) .active-indicator{grid-column:1;grid-row:1;width:2px;height:calc(100% - (${Vs} * 2));align-self:center}:host(.vertical) .active-indicator-transition{transition:transform .2s linear}:host(.vertical) ::slotted(fluent-tab-panel){padding:10px 0}`;let Qs=class extends Gs{};Qs=t([_({name:"fluent-tabs",template:Us,styles:Ws})],Qs);class Ks extends q{constructor(){super(...arguments),this.nowrap=!1,this.truncate=!1,this.italic=!1,this.underline=!1,this.strikethrough=!1,this.block=!1}}t([O({mode:"boolean"})],Ks.prototype,"nowrap",void 0),t([O({mode:"boolean"})],Ks.prototype,"truncate",void 0),t([O({mode:"boolean"})],Ks.prototype,"italic",void 0),t([O({mode:"boolean"})],Ks.prototype,"underline",void 0),t([O({mode:"boolean"})],Ks.prototype,"strikethrough",void 0),t([O({mode:"boolean"})],Ks.prototype,"block",void 0),t([O],Ks.prototype,"size",void 0),t([O],Ks.prototype,"font",void 0),t([O],Ks.prototype,"weight",void 0),t([O],Ks.prototype,"align",void 0);const Ys=Ee`::slotted(*){font-family:${Ut};font-size:${Kt};line-height:${oo};font-weight:${Jt};text-align:start;display:inline;white-space:normal;overflow:visible;text-overflow:clip}:host([nowrap]) ::slotted(*),:host([truncate]) ::slotted(*){white-space:nowrap;overflow:hidden}:host([truncate]) ::slotted(*){display:block;text-overflow:ellipsis}:host([block]) ::slotted(*){display:block}:host([italic]) ::slotted(*){font-style:italic}:host([underline]) ::slotted(*){text-decoration-line:underline}:host([strikethrough]) ::slotted(*){text-decoration-line:line-through}:host([underline][strikethrough]) ::slotted(*){text-decoration-line:line-through underline}:host([size="100"]) ::slotted(*){font-size:${Wt};line-height:${"var(--lineHeightBase100)"}}:host([size="200"]) ::slotted(*){font-size:${Qt};line-height:${to}}:host([size="400"]) ::slotted(*){font-size:${Yt};line-height:${io}}:host([size="500"]) ::slotted(*){font-size:${Xt};line-height:${"var(--lineHeightBase500)"}}:host([size="600"]) ::slotted(*){font-size:${Zt};line-height:${"var(--lineHeightBase600)"}}:host([size="700"]) ::slotted(*){font-size:${"var(--fontSizeHero700)"};line-height:${"var(--lineHeightHero700)"}}:host([size="800"]) ::slotted(*){font-size:${"var(--fontSizeHero800)"};line-height:${"var(--lineHeightHero800)"}}:host([size="900"]) ::slotted(*){font-size:${"var(--fontSizeHero900)"};line-height:${"var(--lineHeightHero900)"}}:host([size="1000"]) ::slotted(*){font-size:${"var(--fontSizeHero1000)"};line-height:${"var(--lineHeightHero1000)"}}:host([font=monospace]) ::slotted(*){font-family:${"var(--fontFamilyMonospace)"}}:host([font=numeric]) ::slotted(*){font-family:${"var(--fontFamilyNumeric)"}}:host([weight=medium]) ::slotted(*){font-weight:${"var(--fontWeightMedium)"}}:host([weight=semibold]) ::slotted(*){font-weight:${eo}}:host([align=center]) ::slotted(*){text-align:center}:host([align=end]) ::slotted(*){text-align:end}:host([align=justify]) ::slotted(*){text-align:justify}`;let Xs=class extends Ks{};Xs=t([_({name:"fluent-text",template:Pe`<slot></slot>`,styles:Ys})],Xs);const Zs=Pe`<button class="base" part="base" ?autofocus="${e=>e.autofocus}" ?disabled="${e=>e.disabled}" tabindex="${e=>e.disabledFocusable?"0":!!e.tabIndex||void 0}" aria-disabled="${e=>!0===e.disabledFocusable?"true":e.ariaDisabled}" ${ai("form","formaction","formenctype","formmethod","formnovalidate","formtarget","name","type","value","aria-atomic","aria-busy","aria-controls","aria-current","aria-describedby","aria-details","aria-errormessage","aria-expanded","aria-flowto","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-live","aria-owns","aria-pressed","aria-relevant","aria-roledescription")} @keypress="${(e,t)=>e.keypressHandler(t.event)}" @click="${(e,t)=>e.clickHandler(t.event)}" ${bo("control")}><slot name="start"></slot><slot ${Ae("defaultSlottedContent")}></slot><slot name="end"></slot></button>`;class Js extends oi{constructor(){super(),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.currentChecked=!1,this.keypressHandler=e=>{if(!this.disabled&&!this.disabledFocusable)switch(e.key){case"Enter":case" ":this.checked=!this.checked}},this.clickHandler=e=>{this.disabled||this.disabledFocusable||(this.checked=!this.checked)},this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(e,t){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,void 0!==e&&this.$emit("change")}currentCheckedChanged(e,t){this.checked=this.currentChecked}}t([O({attribute:"checked",mode:"boolean"})],Js.prototype,"checkedAttribute",void 0),t([x],Js.prototype,"defaultChecked",void 0),t([x],Js.prototype,"checked",void 0),t([O({attribute:"current-checked",mode:"boolean"})],Js.prototype,"currentChecked",void 0);const er=Ee`${li}:host([current-checked]) .base{--button-border-color:${wt}background-color:${"var(--colorNeutralBackground1Selected)"};color:${Le};border-width:${ao}}:host([current-checked]:hover) .base{--button-border-color:${kt}background-color:${tt};color:${Le}}:host([current-checked]:active) .base{--button-border-color:${Ct}background-color:${ot};color:${Le}}`.withBehaviors(qo("primary",Ee`${di}:host([current-checked][appearance=primary]) .base{--button-border-color:transparent;background-color:${"var(--colorBrandBackgroundSelected)"};color:${Ze}}:host([current-checked][appearance=primary]:hover) .base{background-color:${pt}}:host([current-checked][appearance=primary]:active) .base{background-color:${bt}}`),qo("subtle",Ee`${ci}:host([current-checked][appearance=subtle]) .base{--button-border-color:transparent;background-color:${"var(--colorSubtleBackgroundSelected)"};color:${qe}}:host([current-checked][appearance=subtle]:hover) .base{background-color:${rt};color:${De}}:host([current-checked][appearance=subtle]:active) .base{background-color:${at};color:${je}}`),qo("outline",Ee`${hi}:host([current-checked][appearance=outline]) .base{background-color:${ct}}:host([current-checked][appearance=outline]:hover) .base{background-color:${lt}}:host([current-checked][appearance=outline]:active) .base{background-color:${dt}}`),qo("transparent",Ee`${ui}:host([current-checked][appearance=transparent]) .base{--button-border-color:transparent;background-color:${ct};color:${qe}}:host([current-checked][appearance=transparent]:hover) .base{background-color:${lt};color:${De}}:host([current-checked][appearance=transparent]:active) .base{background-color:${dt};color:${je}}`),So("small",Ee`${pi}`),So("medium",Ee`${bi}`),So("large",Ee`${gi}`));let tr=class extends Js{};function or(e,t,o){return{index:e,removed:t,addedCount:o}}function ir(e,t,o,i,s,a){let n=0,l=0;const d=Math.min(o-t,a-s);if(0===t&&0===s&&(n=function(e,t,o){for(let i=0;i<o;++i)if(e[i]!==t[i])return i;return o}(e,i,d)),o===e.length&&a===i.length&&(l=function(e,t,o){let i=e.length,s=t.length,r=0;for(;r<o&&e[--i]===t[--s];)r++;return r}(e,i,d-n)),s+=n,a-=l,(o-=l)-(t+=n)==0&&a-s==0)return r;if(t===o){const e=or(t,[],0);for(;s<a;)e.removed.push(i[s++]);return[e]}if(s===a)return[or(t,[],o-t)];const c=function(e){let t=e.length-1,o=e[0].length-1,i=e[t][o];const s=[];for(;t>0||o>0;){if(0===t){s.push(2),o--;continue}if(0===o){s.push(3),t--;continue}const r=e[t-1][o-1],a=e[t-1][o],n=e[t][o-1];let l;l=a<n?a<r?a:r:n<r?n:r,l===r?(r===i?s.push(0):(s.push(1),i=r),t--,o--):l===a?(s.push(3),t--,i=a):(s.push(2),o--,i=n)}return s.reverse(),s}(function(e,t,o,i,s,r){const a=r-s+1,n=o-t+1,l=new Array(a);let d,c;for(let e=0;e<a;++e)l[e]=new Array(n),l[e][0]=e;for(let e=0;e<n;++e)l[0][e]=e;for(let o=1;o<a;++o)for(let r=1;r<n;++r)e[t+r-1]===i[s+o-1]?l[o][r]=l[o-1][r-1]:(d=l[o-1][r]+1,c=l[o][r-1]+1,l[o][r]=d<c?d:c);return l}(e,t,o,i,s,a)),h=[];let u,p=t,b=s;for(let e=0;e<c.length;++e)switch(c[e]){case 0:void 0!==u&&(h.push(u),u=void 0),p++,b++;break;case 1:void 0===u&&(u=or(p,[],0)),u.addedCount++,p++,u.removed.push(i[b]),b++;break;case 2:void 0===u&&(u=or(p,[],0)),u.addedCount++,p++;break;case 3:void 0===u&&(u=or(p,[],0)),u.removed.push(i[b]),b++}return void 0!==u&&h.push(u),h}tr=t([_({name:"fluent-toggle-button",template:Zs,styles:er,shadowOptions:{delegatesFocus:!0}})],tr);const sr=Array.prototype.push;function rr(e,t,o,i){const s=or(t,o,i);let r=!1,a=0;for(let t=0;t<e.length;t++){const o=e[t];if(o.index+=a,r)continue;const i=(n=s.index,l=s.index+s.removed.length,d=o.index,c=o.index+o.addedCount,l<d||c<n?-1:l===d||c===n?0:n<d?l<c?l-d:c-d:c<l?c-n:l-n);if(i>=0){e.splice(t,1),t--,a-=o.addedCount-o.removed.length,s.addedCount+=o.addedCount-i;const n=s.removed.length+o.removed.length-i;if(s.addedCount||n){let e=o.removed;if(s.index<o.index){const t=s.removed.slice(0,o.index-s.index);sr.apply(t,e),e=t}if(s.index+s.removed.length>o.index+o.addedCount){const t=s.removed.slice(o.index+o.addedCount-s.index);sr.apply(e,t)}s.removed=e,o.index<s.index&&(s.index=o.index)}else r=!0}else if(s.index<o.index){r=!0,e.splice(t,0,s),t++;const i=s.addedCount-s.removed.length;o.index+=i,a+=i}}var n,l,d,c;r||e.push(s)}let ar=!1;function nr(e,t){let o=e.index;const i=t.length;return o>i?o=i-e.addedCount:o<0&&(o=i+e.removed.length+o-e.addedCount),o<0&&(o=0),e.index=o,e}class lr extends v{constructor(e){super(e),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(e,"$fastController",{value:this,enumerable:!1})}addSplice(e){void 0===this.splices?this.splices=[e]:this.splices.push(e),this.needsQueue&&(this.needsQueue=!1,u.queueUpdate(this))}reset(e){this.oldCollection=e,this.needsQueue&&(this.needsQueue=!1,u.queueUpdate(this))}flush(){const e=this.splices,t=this.oldCollection;if(void 0===e&&void 0===t)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const o=void 0===t?function(e,t){let o=[];const i=function(e){const t=[];for(let o=0,i=e.length;o<i;o++){const i=e[o];rr(t,i.index,i.removed,i.addedCount)}return t}(t);for(let t=0,s=i.length;t<s;++t){const s=i[t];1!==s.addedCount||1!==s.removed.length?o=o.concat(ir(e,s.index,s.index+s.addedCount,s.removed,0,s.removed.length)):s.removed[0]!==e[s.index]&&o.push(s)}return o}(this.source,e):ir(this.source,0,this.source.length,t,0,t.length);this.notify(o)}}const dr=Object.freeze({positioning:!1,recycle:!0});function cr(e,t,o,i){e.bind(t[o],i)}function hr(e,t,o,i){const s=Object.create(i);s.index=o,s.length=t.length,e.bind(t[o],s)}class ur{constructor(e,t,o,i,s,r){this.location=e,this.itemsBinding=t,this.templateBinding=i,this.options=r,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=cr,this.itemsBindingObserver=y.binding(t,this,o),this.templateBindingObserver=y.binding(i,this,s),r.positioning&&(this.bindView=hr)}bind(e,t){this.source=e,this.originalContext=t,this.childContext=Object.create(t),this.childContext.parent=e,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(e,this.originalContext),this.template=this.templateBindingObserver.observe(e,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,null!==this.itemsObserver&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(e,t){e===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):e===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(t)}observeItems(e=!1){if(!this.items)return void(this.items=r);const t=this.itemsObserver,o=this.itemsObserver=y.getNotifier(this.items),i=t!==o;i&&null!==t&&t.unsubscribe(this),(i||e)&&o.subscribe(this)}updateViews(e){const t=this.childContext,o=this.views,i=[],s=this.bindView;let r=0;for(let t=0,s=e.length;t<s;++t){const s=e[t],a=s.removed;i.push(...o.splice(s.index+r,a.length)),r-=s.addedCount}const a=this.items,n=this.template;for(let r=0,l=e.length;r<l;++r){const l=e[r];let d=l.index;const c=d+l.addedCount;for(;d<c;++d){const e=o[d],r=e?e.firstChild:this.location,l=this.options.recycle&&i.length>0?i.shift():n.create();o.splice(d,0,l),s(l,a,d,t),l.insertBefore(r)}}for(let e=0,t=i.length;e<t;++e)i[e].dispose();if(this.options.positioning)for(let e=0,t=o.length;e<t;++e){const i=o[e].context;i.length=t,i.index=e}}refreshAllViews(e=!1){const t=this.items,o=this.childContext,i=this.template,s=this.location,r=this.bindView;let a=t.length,n=this.views,l=n.length;if((0===a||e)&&(Be.disposeContiguousBatch(n),l=0),0===l){this.views=n=new Array(a);for(let e=0;e<a;++e){const a=i.create();r(a,t,e,o),n[e]=a,a.insertBefore(s)}}else{let e=0;for(;e<a;++e)if(e<l)r(n[e],t,e,o);else{const a=i.create();r(a,t,e,o),n.push(a),a.insertBefore(s)}const d=n.splice(e,l-e);for(e=0,a=d.length;e<a;++e)d[e].dispose()}}unbindAllViews(){const e=this.views;for(let t=0,o=e.length;t<o;++t)e[t].unbind()}}class pr extends ie{constructor(e,t,o){super(),this.itemsBinding=e,this.templateBinding=t,this.options=o,this.createPlaceholder=u.createBlockPlaceholder,function(){if(ar)return;ar=!0,y.setArrayObserverFactory((e=>new lr(e)));const e=Array.prototype;if(e.$fastPatch)return;Reflect.defineProperty(e,"$fastPatch",{value:1,enumerable:!1});const t=e.pop,o=e.push,i=e.reverse,s=e.shift,r=e.sort,a=e.splice,n=e.unshift;e.pop=function(){const e=this.length>0,o=t.apply(this,arguments),i=this.$fastController;return void 0!==i&&e&&i.addSplice(or(this.length,[o],0)),o},e.push=function(){const e=o.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(nr(or(this.length-arguments.length,[],arguments.length),this)),e},e.reverse=function(){let e;const t=this.$fastController;void 0!==t&&(t.flush(),e=this.slice());const o=i.apply(this,arguments);return void 0!==t&&t.reset(e),o},e.shift=function(){const e=this.length>0,t=s.apply(this,arguments),o=this.$fastController;return void 0!==o&&e&&o.addSplice(or(0,[t],0)),t},e.sort=function(){let e;const t=this.$fastController;void 0!==t&&(t.flush(),e=this.slice());const o=r.apply(this,arguments);return void 0!==t&&t.reset(e),o},e.splice=function(){const e=a.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(nr(or(+arguments[0],e,arguments.length>2?arguments.length-2:0),this)),e},e.unshift=function(){const e=n.apply(this,arguments),t=this.$fastController;return void 0!==t&&t.addSplice(nr(or(0,[],arguments.length),this)),e}}(),this.isItemsBindingVolatile=y.isVolatileBinding(e),this.isTemplateBindingVolatile=y.isVolatileBinding(t)}createBehavior(e){return new ur(e,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}const br={accordion:'<fluent-accordion>\n<fluent-accordion-item expanded>\n  <span slot="heading">Panel One</span>\n  Panel one content\n</fluent-accordion-item>\n<fluent-accordion-item>\n  <span slot="heading">Panel two</span>\n  Panel two content\n</fluent-accordion-item>\n<fluent-accordion-item>\n  <span slot="heading">Panel three</span>\n  Panel three content\n</fluent-accordion-item>\n</fluent-accordion>',avatar:'\n<fluent-avatar name="Jane Doe"></fluent-avatar>\n',badge:"\n<fluent-badge>Badge</fluent-badge>\n",button:'\n<fluent-button appearance="primary">Button</fluent-button>',card:'\n<fluent-card>\n    <fluent-card-header>\n      <img\n        slot="image"\n        src="https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-card/assets/avatar_mauricio.svg"\n        alt="Placeholder user photo"\n      />\n      <span><b>Chris</b> + 7 others edited</span>\n      <p slot="description">Fluent v9 + Web Components</p>\n      <fluent-button slot="action" appearance="transparent">\n        <svg\n          width="1em"\n          height="1em"\n          viewBox="0 0 20 20"\n          xmlns="http://www.w3.org/2000/svg"\n          aria-hidden="true"\n        >\n          <path\n            d="M10 6a1.25 1.25 0 110-2.5A1.25 1.25 0 0110 6zm0 5.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm-1.25 4a1.25 1.25 0 102.5 0 1.25 1.25 0 00-2.5 0z"\n          ></path>\n        </svg>\n      </fluent-button>\n    </fluent-card-header>\n    <fluent-card-preview>\n      <img\n        src="https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-card/assets/doc_template.png"\n        alt="Preview of a Word document "\n      />\n      <img\n        slot="logo"\n        src="https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-card/assets/word_logo.svg"\n        alt="Microsoft Word logo"\n      />\n    </fluent-card-preview>\n    <fluent-card-footer>\n      <fluent-button>\n        Reply\n      </fluent-button>\n      <fluent-button>\n        Share\n      </fluent-button>\n    </fluent-card-footer>\n  </fluent-card>\n',checkbox:"\n<div>\n  <fluent-checkbox><label>My checkbox</label></fluent-checkbox>\n  <fluent-checkbox disabled><label>My checkbox</label></fluent-checkbox>\n  <fluent-checkbox checked><label>Checked</label></fluent-checkbox>\n</div>\n",compoundButton:'<fluent-compound-button appearance="primary">Button <span slot="description">Secondary content</span></fluent-compound-button>\n',counterBadge:'<fluent-counter-badge count="5"></fluent-counter-badge>',divider:"<fluent-divider></fluent-divider>",image:'<fluent-image><img alt="Image placeholder" src="https://via.placeholder.com/300x300" /></fluent-image>',link:"\n<fluent-link>this is a link</fluent-link>",menuButton:"<fluent-menu-button>Button</fluent-menu-button>",presenceBadge:'<div class="container">\n<fluent-presence-badge status="available"></fluent-presence-badge>\n<fluent-presence-badge status="away"></fluent-presence-badge>\n<fluent-presence-badge status="busy"></fluent-presence-badge>\n<fluent-presence-badge status="donotdisturb"></fluent-presence-badge>\n<fluent-presence-badge status="offline"></fluent-presence-badge>\n<fluent-presence-badge status="outofoffice"></fluent-presence-badge>\n<fluent-presence-badge status="unknown"></fluent-presence-badge>\n</div>',radioGroup:'\n<fluent-radio-group name="numbers">\n<fluent-radio value="one">One</fluent-radio>\n<fluent-radio value="two">Two</fluent-radio>\n<fluent-radio value="three">Three</fluent-radio>\n<fluent-radio value="four">Four</fluent-radio>\n</fluent-radio-group>',radio:"<fluent-radio>label</fluent-radio>",splitButton:'\n<fluent-split-button><fluent-button>Button</fluent-button><fluent-menu-button aria-label="Menu Button"></menu-button></fluent-split-button>',tabs:'\n<fluent-tabs id="myTab" activeId="TabTwo">\n  <fluent-tab id="TabOne">First tab</fluent-tab>\n  <fluent-tab id="TabTwo">Second tab</fluent-tab>\n  <fluent-tab id="TabThree">Third tab</fluent-tab>\n  <fluent-tab-panel id="TabPanelOne"> First tab content. This is for testing. </fluent-tab-panel>\n  <fluent-tab-panel id="TabPanelTwo"> Second tab content. This is for testing. </fluent-tab-panel>\n  <fluent-tab-panel id="TabPanelThree"> Third tab content. This is for testing. </fluent-tab-panel>\n</fluent-tabs>',text:"<fluent-text><span>Default text styles</span></fluent-text>",toggleButton:"<fluent-toggle-button>Button</fluent-toggle-button>"},gr=Pe`${function(e,t,o=dr){return new pr(e,"function"==typeof t?t:()=>t,o)}((e=>e.componentTemplate),Pe`${e=>Pe`${e}`}`)}`;let fr=class extends q{constructor(){super(...arguments),this.componentTemplate=[]}connectedCallback(){super.connectedCallback();const e=new URLSearchParams(document.location.search),t=e.get("component")||"button",o=null==t?void 0:t.includes(","),i=parseInt(e.get("repeatNum"))||1;if(o){const e=t.split(",").reduce(((e,t)=>e+br[t].trim()),"");this.componentTemplate=Array.from({length:i},(t=>e))}else this.componentTemplate=Array.from({length:i},(e=>br[t].trim()))}};t([x],fr.prototype,"componentTemplate",void 0),fr=t([_({name:"component-container",template:gr})],fr)})();