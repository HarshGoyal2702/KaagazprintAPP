(self.webpackChunkkaagaz=self.webpackChunkkaagaz||[]).push([[2458],{4765:(t,e,s)=>{"use strict";s.d(e,{tE:()=>C,qm:()=>L,X6:()=>g,yG:()=>f});var i=s(8583),n=s(7716),o=s(6215),r=s(7709),c=s(5917),u=s(6461),a=s(7393);class h{constructor(t){this.total=t}call(t,e){return e.subscribe(new l(t,this.total))}}class l extends a.L{constructor(t,e){super(t),this.total=e,this.count=0}_next(t){++this.count>this.total&&this.destination.next(t)}}s(5257);var d=s(7519),p=s(6782),_=s(9490),m=s(521);function g(t){return 0===t.offsetX&&0===t.offsetY}function f(t){const e=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!(!e||-1!==e.identifier||null!=e.radiusX&&1!==e.radiusX||null!=e.radiusY&&1!==e.radiusY)}s(9578),"undefined"!=typeof Element&&Element;const b=new n.OlP("cdk-input-modality-detector-options"),v={ignoreKeys:[u.zL,u.jx,u.b2,u.MW,u.JU]},w=(0,m.i$)({passive:!0,capture:!0});let y=(()=>{class t{constructor(t,e,s,i){this._platform=t,this._mostRecentTarget=null,this._modality=new o.X(null),this._lastTouchMs=0,this._onKeydown=t=>{var e,s;(null===(s=null===(e=this._options)||void 0===e?void 0:e.ignoreKeys)||void 0===s?void 0:s.some(e=>e===t.keyCode))||(this._modality.next("keyboard"),this._mostRecentTarget=(0,m.sA)(t))},this._onMousedown=t=>{Date.now()-this._lastTouchMs<650||(this._modality.next(g(t)?"keyboard":"mouse"),this._mostRecentTarget=(0,m.sA)(t))},this._onTouchstart=t=>{f(t)?this._modality.next("keyboard"):(this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=(0,m.sA)(t))},this._options=Object.assign(Object.assign({},v),i),this.modalityDetected=this._modality.pipe(t=>t.lift(new h(1))),this.modalityChanged=this.modalityDetected.pipe((0,d.x)()),t.isBrowser&&e.runOutsideAngular(()=>{s.addEventListener("keydown",this._onKeydown,w),s.addEventListener("mousedown",this._onMousedown,w),s.addEventListener("touchstart",this._onTouchstart,w)})}get mostRecentModality(){return this._modality.value}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,w),document.removeEventListener("mousedown",this._onMousedown,w),document.removeEventListener("touchstart",this._onTouchstart,w))}}return t.\u0275fac=function(e){return new(e||t)(n.LFG(m.t4),n.LFG(n.R0b),n.LFG(i.K0),n.LFG(b,8))},t.\u0275prov=n.Yz7({factory:function(){return new t(n.LFG(m.t4),n.LFG(n.R0b),n.LFG(i.K0),n.LFG(b,8))},token:t,providedIn:"root"}),t})();const E=new n.OlP("cdk-focus-monitor-default-options"),I=(0,m.i$)({passive:!0,capture:!0});let C=(()=>{class t{constructor(t,e,s,i,n){this._ngZone=t,this._platform=e,this._inputModalityDetector=s,this._origin=null,this._windowFocused=!1,this._originFromTouchInteraction=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)},this._stopInputModalityDetector=new r.xQ,this._rootNodeFocusAndBlurListener=t=>{const e=(0,m.sA)(t),s="focus"===t.type?this._onFocus:this._onBlur;for(let i=e;i;i=i.parentElement)s.call(this,t,i)},this._document=i,this._detectionMode=(null==n?void 0:n.detectionMode)||0}monitor(t,e=!1){const s=(0,_.fI)(t);if(!this._platform.isBrowser||1!==s.nodeType)return(0,c.of)(null);const i=(0,m.kV)(s)||this._getDocument(),n=this._elementInfo.get(s);if(n)return e&&(n.checkChildren=!0),n.subject;const o={checkChildren:e,subject:new r.xQ,rootNode:i};return this._elementInfo.set(s,o),this._registerGlobalListeners(o),o.subject}stopMonitoring(t){const e=(0,_.fI)(t),s=this._elementInfo.get(e);s&&(s.subject.complete(),this._setClasses(e),this._elementInfo.delete(e),this._removeGlobalListeners(s))}focusVia(t,e,s){const i=(0,_.fI)(t);i===this._getDocument().activeElement?this._getClosestElementsInfo(i).forEach(([t,s])=>this._originChanged(t,e,s)):(this._setOrigin(e),"function"==typeof i.focus&&i.focus(s))}ngOnDestroy(){this._elementInfo.forEach((t,e)=>this.stopMonitoring(e))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_toggleClass(t,e,s){s?t.classList.add(e):t.classList.remove(e)}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:"program"}_shouldBeAttributedToTouch(t){return 1===this._detectionMode||!!(null==t?void 0:t.contains(this._inputModalityDetector._mostRecentTarget))}_setClasses(t,e){this._toggleClass(t,"cdk-focused",!!e),this._toggleClass(t,"cdk-touch-focused","touch"===e),this._toggleClass(t,"cdk-keyboard-focused","keyboard"===e),this._toggleClass(t,"cdk-mouse-focused","mouse"===e),this._toggleClass(t,"cdk-program-focused","program"===e)}_setOrigin(t,e=!1){this._ngZone.runOutsideAngular(()=>{this._origin=t,this._originFromTouchInteraction="touch"===t&&e,0===this._detectionMode&&(clearTimeout(this._originTimeoutId),this._originTimeoutId=setTimeout(()=>this._origin=null,this._originFromTouchInteraction?650:1))})}_onFocus(t,e){const s=this._elementInfo.get(e),i=(0,m.sA)(t);s&&(s.checkChildren||e===i)&&this._originChanged(e,this._getFocusOrigin(i),s)}_onBlur(t,e){const s=this._elementInfo.get(e);!s||s.checkChildren&&t.relatedTarget instanceof Node&&e.contains(t.relatedTarget)||(this._setClasses(e),this._emitOrigin(s.subject,null))}_emitOrigin(t,e){this._ngZone.run(()=>t.next(e))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;const e=t.rootNode,s=this._rootNodeFocusListenerCount.get(e)||0;s||this._ngZone.runOutsideAngular(()=>{e.addEventListener("focus",this._rootNodeFocusAndBlurListener,I),e.addEventListener("blur",this._rootNodeFocusAndBlurListener,I)}),this._rootNodeFocusListenerCount.set(e,s+1),1==++this._monitoredElementCount&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe((0,p.R)(this._stopInputModalityDetector)).subscribe(t=>{this._setOrigin(t,!0)}))}_removeGlobalListeners(t){const e=t.rootNode;if(this._rootNodeFocusListenerCount.has(e)){const t=this._rootNodeFocusListenerCount.get(e);t>1?this._rootNodeFocusListenerCount.set(e,t-1):(e.removeEventListener("focus",this._rootNodeFocusAndBlurListener,I),e.removeEventListener("blur",this._rootNodeFocusAndBlurListener,I),this._rootNodeFocusListenerCount.delete(e))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,e,s){this._setClasses(t,e),this._emitOrigin(s.subject,e),this._lastFocusOrigin=e}_getClosestElementsInfo(t){const e=[];return this._elementInfo.forEach((s,i)=>{(i===t||s.checkChildren&&i.contains(t))&&e.push([i,s])}),e}}return t.\u0275fac=function(e){return new(e||t)(n.LFG(n.R0b),n.LFG(m.t4),n.LFG(y),n.LFG(i.K0,8),n.LFG(E,8))},t.\u0275prov=n.Yz7({factory:function(){return new t(n.LFG(n.R0b),n.LFG(m.t4),n.LFG(y),n.LFG(i.K0,8),n.LFG(E,8))},token:t,providedIn:"root"}),t})();const O="cdk-high-contrast-black-on-white",R="cdk-high-contrast-white-on-black",k="cdk-high-contrast-active";let L=(()=>{class t{constructor(t,e){this._platform=t,this._document=e}getHighContrastMode(){if(!this._platform.isBrowser)return 0;const t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);const e=this._document.defaultView||window,s=e&&e.getComputedStyle?e.getComputedStyle(t):null,i=(s&&s.backgroundColor||"").replace(/ /g,"");switch(this._document.body.removeChild(t),i){case"rgb(0,0,0)":return 2;case"rgb(255,255,255)":return 1}return 0}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){const t=this._document.body.classList;t.remove(k),t.remove(O),t.remove(R),this._hasCheckedHighContrastMode=!0;const e=this.getHighContrastMode();1===e?(t.add(k),t.add(O)):2===e&&(t.add(k),t.add(R))}}}return t.\u0275fac=function(e){return new(e||t)(n.LFG(m.t4),n.LFG(i.K0))},t.\u0275prov=n.Yz7({factory:function(){return new t(n.LFG(m.t4),n.LFG(i.K0))},token:t,providedIn:"root"}),t})()},946:(t,e,s)=>{"use strict";s.d(e,{vT:()=>c,Is:()=>r});var i=s(7716),n=s(8583);const o=new i.OlP("cdk-dir-doc",{providedIn:"root",factory:function(){return(0,i.f3M)(n.K0)}});let r=(()=>{class t{constructor(t){if(this.value="ltr",this.change=new i.vpe,t){const e=t.documentElement?t.documentElement.dir:null,s=(t.body?t.body.dir:null)||e;this.value="ltr"===s||"rtl"===s?s:"ltr"}}ngOnDestroy(){this.change.complete()}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(o,8))},t.\u0275prov=i.Yz7({factory:function(){return new t(i.LFG(o,8))},token:t,providedIn:"root"}),t})(),c=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({}),t})()},6461:(t,e,s)=>{"use strict";s.d(e,{zL:()=>r,jx:()=>o,K5:()=>i,b2:()=>a,MW:()=>u,JU:()=>n,L_:()=>c,Vb:()=>h});const i=13,n=16,o=17,r=18,c=32,u=91,a=224;function h(t,...e){return e.length?e.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}},9578:(t,e,s)=>{"use strict";s.d(e,{wD:()=>_,yq:()=>p,Q8:()=>m});var i=s(9490),n=s(7716),o=s(7574),r=s(7709),c=s(7393),u=s(1456);class a{constructor(t,e){this.dueTime=t,this.scheduler=e}call(t,e){return e.subscribe(new h(t,this.dueTime,this.scheduler))}}class h extends c.L{constructor(t,e,s){super(t),this.dueTime=e,this.scheduler=s,this.debouncedSubscription=null,this.lastValue=null,this.hasValue=!1}_next(t){this.clearDebounce(),this.lastValue=t,this.hasValue=!0,this.add(this.debouncedSubscription=this.scheduler.schedule(l,this.dueTime,this))}_complete(){this.debouncedNext(),this.destination.complete()}debouncedNext(){if(this.clearDebounce(),this.hasValue){const{lastValue:t}=this;this.lastValue=null,this.hasValue=!1,this.destination.next(t)}}clearDebounce(){const t=this.debouncedSubscription;null!==t&&(this.remove(t),t.unsubscribe(),this.debouncedSubscription=null)}}function l(t){t.debouncedNext()}let d=(()=>{class t{create(t){return"undefined"==typeof MutationObserver?null:new MutationObserver(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=n.Yz7({factory:function(){return new t},token:t,providedIn:"root"}),t})(),p=(()=>{class t{constructor(t){this._mutationObserverFactory=t,this._observedElements=new Map}ngOnDestroy(){this._observedElements.forEach((t,e)=>this._cleanupObserver(e))}observe(t){const e=(0,i.fI)(t);return new o.y(t=>{const s=this._observeElement(e).subscribe(t);return()=>{s.unsubscribe(),this._unobserveElement(e)}})}_observeElement(t){if(this._observedElements.has(t))this._observedElements.get(t).count++;else{const e=new r.xQ,s=this._mutationObserverFactory.create(t=>e.next(t));s&&s.observe(t,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(t,{observer:s,stream:e,count:1})}return this._observedElements.get(t).stream}_unobserveElement(t){this._observedElements.has(t)&&(this._observedElements.get(t).count--,this._observedElements.get(t).count||this._cleanupObserver(t))}_cleanupObserver(t){if(this._observedElements.has(t)){const{observer:e,stream:s}=this._observedElements.get(t);e&&e.disconnect(),s.complete(),this._observedElements.delete(t)}}}return t.\u0275fac=function(e){return new(e||t)(n.LFG(d))},t.\u0275prov=n.Yz7({factory:function(){return new t(n.LFG(d))},token:t,providedIn:"root"}),t})(),_=(()=>{class t{constructor(t,e,s){this._contentObserver=t,this._elementRef=e,this._ngZone=s,this.event=new n.vpe,this._disabled=!1,this._currentSubscription=null}get disabled(){return this._disabled}set disabled(t){this._disabled=(0,i.Ig)(t),this._disabled?this._unsubscribe():this._subscribe()}get debounce(){return this._debounce}set debounce(t){this._debounce=(0,i.su)(t),this._subscribe()}ngAfterContentInit(){this._currentSubscription||this.disabled||this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();const t=this._contentObserver.observe(this._elementRef);this._ngZone.runOutsideAngular(()=>{this._currentSubscription=(this.debounce?t.pipe(function(t,e=u.P){return s=>s.lift(new a(t,e))}(this.debounce)):t).subscribe(this.event)})}_unsubscribe(){var t;null===(t=this._currentSubscription)||void 0===t||t.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(p),n.Y36(n.SBq),n.Y36(n.R0b))},t.\u0275dir=n.lG2({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:["cdkObserveContentDisabled","disabled"],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]}),t})(),m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({providers:[d]}),t})()},521:(t,e,s)=>{"use strict";s.d(e,{t4:()=>c,ud:()=>u,sA:()=>g,ht:()=>m,kV:()=>_,Oy:()=>f,qK:()=>h,i$:()=>p});var i=s(7716),n=s(8583);let o;try{o="undefined"!=typeof Intl&&Intl.v8BreakIterator}catch(b){o=!1}let r,c=(()=>{class t{constructor(t){this._platformId=t,this.isBrowser=this._platformId?(0,n.NF)(this._platformId):"object"==typeof document&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!(!window.chrome&&!o)&&"undefined"!=typeof CSS&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(i.Lbi))},t.\u0275prov=i.Yz7({factory:function(){return new t(i.LFG(i.Lbi))},token:t,providedIn:"root"}),t})(),u=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({}),t})();const a=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function h(){if(r)return r;if("object"!=typeof document||!document)return r=new Set(a),r;let t=document.createElement("input");return r=new Set(a.filter(e=>(t.setAttribute("type",e),t.type===e))),r}let l,d;function p(t){return function(){if(null==l&&"undefined"!=typeof window)try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>l=!0}))}finally{l=l||!1}return l}()?t:!!t.capture}function _(t){if(function(){if(null==d){const t="undefined"!=typeof document?document.head:null;d=!(!t||!t.createShadowRoot&&!t.attachShadow)}return d}()){const e=t.getRootNode?t.getRootNode():null;if("undefined"!=typeof ShadowRoot&&ShadowRoot&&e instanceof ShadowRoot)return e}return null}function m(){let t="undefined"!=typeof document&&document?document.activeElement:null;for(;t&&t.shadowRoot;){const e=t.shadowRoot.activeElement;if(e===t)break;t=e}return t}function g(t){return t.composedPath?t.composedPath()[0]:t.target}function f(){return"undefined"!=typeof __karma__&&!!__karma__||"undefined"!=typeof jasmine&&!!jasmine||"undefined"!=typeof jest&&!!jest||"undefined"!=typeof Mocha&&!!Mocha}},9490:(t,e,s)=>{"use strict";s.d(e,{Ig:()=>n,fI:()=>r,su:()=>o});var i=s(7716);function n(t){return null!=t&&"false"!=`${t}`}function o(t,e=0){return function(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}(t)?Number(t):e}function r(t){return t instanceof i.SBq?t.nativeElement:t}},2458:(t,e,s)=>{"use strict";s.d(e,{rD:()=>w,BQ:()=>m,wG:()=>L,si:()=>T,pj:()=>f,Kr:()=>b,Id:()=>g,FD:()=>v});var i=s(7716),n=s(4765),o=s(946);const r=new i.GfV("12.2.13");var c=s(8583),u=s(521),a=s(9490),h=s(7709),l=s(6237);s(6461);const d=new i.GfV("12.2.13"),p=new i.OlP("mat-sanity-checks",{providedIn:"root",factory:function(){return!0}});let _,m=(()=>{class t{constructor(t,e,s){this._hasDoneGlobalChecks=!1,this._document=s,t._applyBodyHighContrastModeCssClasses(),this._sanityChecks=e,this._hasDoneGlobalChecks||(this._checkDoctypeIsDefined(),this._checkThemeIsPresent(),this._checkCdkVersionMatch(),this._hasDoneGlobalChecks=!0)}_checkIsEnabled(t){return!(!(0,i.X6Q)()||(0,u.Oy)())&&("boolean"==typeof this._sanityChecks?this._sanityChecks:!!this._sanityChecks[t])}_checkDoctypeIsDefined(){this._checkIsEnabled("doctype")&&!this._document.doctype&&console.warn("Current document does not have a doctype. This may cause some Angular Material components not to behave as expected.")}_checkThemeIsPresent(){if(!this._checkIsEnabled("theme")||!this._document.body||"function"!=typeof getComputedStyle)return;const t=this._document.createElement("div");t.classList.add("mat-theme-loaded-marker"),this._document.body.appendChild(t);const e=getComputedStyle(t);e&&"none"!==e.display&&console.warn("Could not find Angular Material core theme. Most Material components may not work as expected. For more info refer to the theming guide: https://material.angular.io/guide/theming"),this._document.body.removeChild(t)}_checkCdkVersionMatch(){this._checkIsEnabled("version")&&d.full!==r.full&&console.warn("The Angular Material version ("+d.full+") does not match the Angular CDK version ("+r.full+").\nPlease ensure the versions of these two packages exactly match.")}}return t.\u0275fac=function(e){return new(e||t)(i.LFG(n.qm),i.LFG(p,8),i.LFG(c.K0))},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[o.vT],o.vT]}),t})();function g(t){return class extends t{constructor(...t){super(...t),this._disabled=!1}get disabled(){return this._disabled}set disabled(t){this._disabled=(0,a.Ig)(t)}}}function f(t,e){return class extends t{constructor(...t){super(...t),this.defaultColor=e,this.color=e}get color(){return this._color}set color(t){const e=t||this.defaultColor;e!==this._color&&(this._color&&this._elementRef.nativeElement.classList.remove(`mat-${this._color}`),e&&this._elementRef.nativeElement.classList.add(`mat-${e}`),this._color=e)}}}function b(t){return class extends t{constructor(...t){super(...t),this._disableRipple=!1}get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=(0,a.Ig)(t)}}}function v(t){return class extends t{constructor(...t){super(...t),this.stateChanges=new h.xQ,this.errorState=!1}updateErrorState(){const t=this.errorState,e=(this.errorStateMatcher||this._defaultErrorStateMatcher).isErrorState(this.ngControl?this.ngControl.control:null,this._parentFormGroup||this._parentForm);e!==t&&(this.errorState=e,this.stateChanges.next())}}}try{_="undefined"!=typeof Intl}catch(F){_=!1}let w=(()=>{class t{isErrorState(t,e){return!!(t&&t.invalid&&(t.touched||e&&e.submitted))}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=i.Yz7({factory:function(){return new t},token:t,providedIn:"root"}),t})();class y{constructor(t,e,s){this._renderer=t,this.element=e,this.config=s,this.state=3}fadeOut(){this._renderer.fadeOutRipple(this)}}const E={enterDuration:225,exitDuration:150},I=(0,u.i$)({passive:!0}),C=["mousedown","touchstart"],O=["mouseup","mouseleave","touchend","touchcancel"];class R{constructor(t,e,s,i){this._target=t,this._ngZone=e,this._isPointerDown=!1,this._activeRipples=new Set,this._pointerUpEventsRegistered=!1,i.isBrowser&&(this._containerElement=(0,a.fI)(s))}fadeInRipple(t,e,s={}){const i=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),n=Object.assign(Object.assign({},E),s.animation);s.centered&&(t=i.left+i.width/2,e=i.top+i.height/2);const o=s.radius||function(t,e,s){const i=Math.max(Math.abs(t-s.left),Math.abs(t-s.right)),n=Math.max(Math.abs(e-s.top),Math.abs(e-s.bottom));return Math.sqrt(i*i+n*n)}(t,e,i),r=t-i.left,c=e-i.top,u=n.enterDuration,a=document.createElement("div");a.classList.add("mat-ripple-element"),a.style.left=r-o+"px",a.style.top=c-o+"px",a.style.height=2*o+"px",a.style.width=2*o+"px",null!=s.color&&(a.style.backgroundColor=s.color),a.style.transitionDuration=`${u}ms`,this._containerElement.appendChild(a),window.getComputedStyle(a).getPropertyValue("opacity"),a.style.transform="scale(1)";const h=new y(this,a,s);return h.state=0,this._activeRipples.add(h),s.persistent||(this._mostRecentTransientRipple=h),this._runTimeoutOutsideZone(()=>{const t=h===this._mostRecentTransientRipple;h.state=1,s.persistent||t&&this._isPointerDown||h.fadeOut()},u),h}fadeOutRipple(t){const e=this._activeRipples.delete(t);if(t===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),this._activeRipples.size||(this._containerRect=null),!e)return;const s=t.element,i=Object.assign(Object.assign({},E),t.config.animation);s.style.transitionDuration=`${i.exitDuration}ms`,s.style.opacity="0",t.state=2,this._runTimeoutOutsideZone(()=>{t.state=3,s.parentNode.removeChild(s)},i.exitDuration)}fadeOutAll(){this._activeRipples.forEach(t=>t.fadeOut())}fadeOutAllNonPersistent(){this._activeRipples.forEach(t=>{t.config.persistent||t.fadeOut()})}setupTriggerEvents(t){const e=(0,a.fI)(t);e&&e!==this._triggerElement&&(this._removeTriggerEvents(),this._triggerElement=e,this._registerEvents(C))}handleEvent(t){"mousedown"===t.type?this._onMousedown(t):"touchstart"===t.type?this._onTouchStart(t):this._onPointerUp(),this._pointerUpEventsRegistered||(this._registerEvents(O),this._pointerUpEventsRegistered=!0)}_onMousedown(t){const e=(0,n.X6)(t),s=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+800;this._target.rippleDisabled||e||s||(this._isPointerDown=!0,this.fadeInRipple(t.clientX,t.clientY,this._target.rippleConfig))}_onTouchStart(t){if(!this._target.rippleDisabled&&!(0,n.yG)(t)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;const e=t.changedTouches;for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._activeRipples.forEach(t=>{!t.config.persistent&&(1===t.state||t.config.terminateOnPointerUp&&0===t.state)&&t.fadeOut()}))}_runTimeoutOutsideZone(t,e=0){this._ngZone.runOutsideAngular(()=>setTimeout(t,e))}_registerEvents(t){this._ngZone.runOutsideAngular(()=>{t.forEach(t=>{this._triggerElement.addEventListener(t,this,I)})})}_removeTriggerEvents(){this._triggerElement&&(C.forEach(t=>{this._triggerElement.removeEventListener(t,this,I)}),this._pointerUpEventsRegistered&&O.forEach(t=>{this._triggerElement.removeEventListener(t,this,I)}))}}const k=new i.OlP("mat-ripple-global-options");let L=(()=>{class t{constructor(t,e,s,i,n){this._elementRef=t,this._animationMode=n,this.radius=0,this._disabled=!1,this._isInitialized=!1,this._globalOptions=i||{},this._rippleRenderer=new R(this,e,t,s)}get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:Object.assign(Object.assign(Object.assign({},this._globalOptions.animation),"NoopAnimations"===this._animationMode?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,e=0,s){return"number"==typeof t?this._rippleRenderer.fadeInRipple(t,e,Object.assign(Object.assign({},this.rippleConfig),s)):this._rippleRenderer.fadeInRipple(0,0,Object.assign(Object.assign({},this.rippleConfig),t))}}return t.\u0275fac=function(e){return new(e||t)(i.Y36(i.SBq),i.Y36(i.R0b),i.Y36(u.t4),i.Y36(k,8),i.Y36(l.Qb,8))},t.\u0275dir=i.lG2({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,e){2&t&&i.ekj("mat-ripple-unbounded",e.unbounded)},inputs:{radius:["matRippleRadius","radius"],disabled:["matRippleDisabled","disabled"],trigger:["matRippleTrigger","trigger"],color:["matRippleColor","color"],unbounded:["matRippleUnbounded","unbounded"],centered:["matRippleCentered","centered"],animation:["matRippleAnimation","animation"]},exportAs:["matRipple"]}),t})(),T=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[m,u.ud],m]}),t})()},6782:(t,e,s)=>{"use strict";s.d(e,{R:()=>n});var i=s(5345);function n(t){return e=>e.lift(new o(t))}class o{constructor(t){this.notifier=t}call(t,e){const s=new r(t),n=(0,i.ft)(this.notifier,new i.IY(s));return n&&!s.seenValue?(s.add(n),e.subscribe(s)):s}}class r extends i.Ds{constructor(t){super(t),this.seenValue=!1}notifyNext(){this.seenValue=!0,this.complete()}notifyComplete(){}}},1456:(t,e,s)=>{"use strict";s.d(e,{P:()=>c});var i=s(5319);class n extends i.w{constructor(t,e){super()}schedule(t,e=0){return this}}let o=(()=>{class t{constructor(e,s=t.now){this.SchedulerAction=e,this.now=s}schedule(t,e=0,s){return new this.SchedulerAction(this,t).schedule(s,e)}}return t.now=()=>Date.now(),t})();class r extends o{constructor(t,e=o.now){super(t,()=>r.delegate&&r.delegate!==this?r.delegate.now():e()),this.actions=[],this.active=!1,this.scheduled=void 0}schedule(t,e=0,s){return r.delegate&&r.delegate!==this?r.delegate.schedule(t,e,s):super.schedule(t,e,s)}flush(t){const{actions:e}=this;if(this.active)return void e.push(t);let s;this.active=!0;do{if(s=t.execute(t.state,t.delay))break}while(t=e.shift());if(this.active=!1,s){for(;t=e.shift();)t.unsubscribe();throw s}}}const c=new r(class extends n{constructor(t,e){super(t,e),this.scheduler=t,this.work=e,this.pending=!1}schedule(t,e=0){if(this.closed)return this;this.state=t;const s=this.id,i=this.scheduler;return null!=s&&(this.id=this.recycleAsyncId(i,s,e)),this.pending=!0,this.delay=e,this.id=this.id||this.requestAsyncId(i,this.id,e),this}requestAsyncId(t,e,s=0){return setInterval(t.flush.bind(t,this),s)}recycleAsyncId(t,e,s=0){if(null!==s&&this.delay===s&&!1===this.pending)return e;clearInterval(e)}execute(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const s=this._execute(t,e);if(s)return s;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,e){let s,i=!1;try{this.work(t)}catch(n){i=!0,s=!!n&&n||new Error(n)}if(i)return this.unsubscribe(),s}_unsubscribe(){const t=this.id,e=this.scheduler,s=e.actions,i=s.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==i&&s.splice(i,1),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null}})}}]);