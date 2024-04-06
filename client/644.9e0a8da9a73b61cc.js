"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[644],{5237:($,A,e)=>{e.d(A,{a:()=>a,g:()=>t});var a=function(g){return g.TAGS="tags/",g.NOTIFICATIONS="notifications/",g.NOTES="notes/",g}(a||{}),t=function(g){return g.ALL="all",g.CREATE="create",g}(t||{})},7579:($,A,e)=>{e.d(A,{O:()=>P});var a=e(7398),t=e(9862),g=e(5879);let P=(()=>{class s{constructor(E){this.http=E}GET(E,h,D){let L=new t.LE;if(D&&h)for(let b=0;b<h.length;++b)L=L.append(h[b],D[b]);return this.http.get(E,{params:L,observe:"response"}).pipe((0,a.U)(b=>200===b.status?b.body:null))}POST(E,h){return this.http.post(E,h,{observe:"response"}).pipe((0,a.U)(D=>200===D.status||201===D.status?D.body:null))}PATCH(E,h){return this.http.patch(E,h,{observe:"response"}).pipe((0,a.U)(D=>200===D.status?D.body:null))}DELETE(E,h){return this.http.delete(E,{observe:"response",body:h}).pipe((0,a.U)(D=>200===D.status?D.status:null))}static#t=this.\u0275fac=function(h){return new(h||s)(g.LFG(t.eN))};static#e=this.\u0275prov=g.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()},553:($,A,e)=>{e.d(A,{b:()=>a});const a="/api/"},6284:($,A,e)=>{e.d(A,{gX:()=>it,pc:()=>q,qi:()=>j,vK:()=>k});var a=e(7582),t=e(5879),g=e(756),P=e(6141),s=e(5213),x=e(8937),E=e(7995),h=e(1800),D=e(9250),L=e(4862),b=e(7398),S=e(98),N=e(9661),w=e(7415),f=e(2549),R=e(6814);const _=["tuiOption",""];function T(u,y){if(1&u&&(t.ynx(0),t._uU(1),t.BQk()),2&u){const r=y.polymorpheusOutlet;t.xp6(1),t.hij(" ",r,"\n")}}function z(u,y){if(1&u&&t._UZ(0,"tui-svg",3),2&u){const r=t.oxw(2);t.Q6J("src",r.icons.more)}}function W(u,y){if(1&u&&(t.Hsn(0),t.YNc(1,z,1,1,"tui-svg",2)),2&u){const r=t.oxw();t.xp6(1),t.Q6J("ngIf",r.dropdown)}}const Y=function(u){return{$implicit:u}},J=["*"];function V(u,y){if(1&u&&(t.ynx(0),t._uU(1),t.BQk()),2&u){const r=y.polymorpheusOutlet;t.xp6(1),t.hij(" ",r," ")}}function G(u,y){if(1&u&&(t.TgZ(0,"div",2),t.YNc(1,V,2,1,"ng-container",3),t.ALo(2,"async"),t.qZA()),2&u){const r=t.oxw();t.xp6(1),t.Q6J("polymorpheusOutlet",r.emptyContent||t.lcZ(2,1,r.defaultEmptyContent$))}}function Z({currentTarget:u}){return!(0,g.V8)(u)}let k=(()=>{class u{constructor(r,l,m,O,tt,Q){this.content=r,this.dataList=l,this.el=m,this.host=O,this.dropdown=tt,this.icons=Q,this.size=null,this.role="option",this.disabled=!1}get active(){return!!this.dropdown&&!!this.dropdown.dropdownBoxRef}onClick(){this.host&&void 0!==this.value&&this.host.handleOption(this.value)}onMouseMove({currentTarget:r}){r.focus({preventScroll:!0})}ngOnDestroy(){var r;null===(r=this.dataList)||void 0===r||r.handleFocusLossIfNecessary(this.el.nativeElement)}}return u.\u0275fac=function(r){return new(r||u)(t.Y36(L.IQ,8),t.Y36((0,t.Gpc)(()=>j),8),t.Y36(t.SBq),t.Y36(L.N1,8),t.Y36(S.td,10),t.Y36(L.Gs))},u.\u0275cmp=t.Xpm({type:u,selectors:[["button","tuiOption",""],["a","tuiOption",""]],hostAttrs:["tabIndex","-1","type","button"],hostVars:5,hostBindings:function(r,l){1&r&&t.NdJ("click",function(){return l.onClick()})("mousemove.silent",function(O){return l.onMouseMove(O)}),2&r&&(t.uIk("disabled",l.disabled||null)("data-size",l.size)("role",l.role),t.ekj("_with-dropdown",l.active))},inputs:{size:"size",role:"role",disabled:"disabled",value:"value"},attrs:_,ngContentSelectors:J,decls:3,vars:4,consts:[[4,"polymorpheusOutlet","polymorpheusOutletContext"],["base",""],["class","t-arrow",3,"src",4,"ngIf"],[1,"t-arrow",3,"src"]],template:function(r,l){if(1&r&&(t.F$t(),t.YNc(0,T,2,1,"ng-container",0),t.YNc(1,W,2,1,"ng-template",null,1,t.W1O)),2&r){const m=t.MAs(2);t.Q6J("polymorpheusOutlet",l.content||m)("polymorpheusOutletContext",t.VKq(2,Y,m))}},dependencies:[w.PN,f.Li,R.O5],styles:['[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;justify-content:space-between;text-align:left;color:var(--tui-text-01);border-radius:var(--tui-radius-s);outline:none;cursor:pointer;background-clip:padding-box}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[_nghost-%COMP%]:focus, ._with-dropdown[_nghost-%COMP%]{background-color:var(--tui-clear)}[_nghost-%COMP%]   [data-list-size="s"][_nghost-%COMP%], [data-list-size="s"]   [_nghost-%COMP%], [_nghost-%COMP%]   [data-list-size="xs"][_nghost-%COMP%], [data-list-size="xs"]   [_nghost-%COMP%], [data-size=s][data-size=s][_nghost-%COMP%], [data-size=xs][data-size=xs][_nghost-%COMP%]{display:flex;align-items:center;box-sizing:border-box;margin:var(--tui-data-list-margin) 0;font:var(--tui-font-text-s);min-height:2rem;padding:.3125rem .5rem}[_nghost-%COMP%]   [data-list-size="m"][_nghost-%COMP%], [data-list-size="m"]   [_nghost-%COMP%], [data-size=m][data-size=m][_nghost-%COMP%]{display:flex;align-items:center;box-sizing:border-box;margin:var(--tui-data-list-margin) 0;font:var(--tui-font-text-s);min-height:2.5rem;padding:.375rem .5rem}[_nghost-%COMP%]   [data-list-size="l"][_nghost-%COMP%], [data-list-size="l"]   [_nghost-%COMP%], [data-size=l][data-size=l][_nghost-%COMP%]{display:flex;align-items:center;box-sizing:border-box;margin:var(--tui-data-list-margin) 0;font:var(--tui-font-text-m);min-height:2.75rem;padding:.375rem .625rem}.t-arrow[_ngcontent-%COMP%]{margin:0 -.5rem 0 .75rem}'],changeDetection:0}),(0,a.gn)([(0,N.uX)(Z)],u.prototype,"onMouseMove",null),u})(),j=(()=>{class u{constructor(r,l,m){var O;this.controller=r,this.el=l,this.defaultEmptyContent$=m,this.options=P.Mm,this.role="listbox",this.size=(null===(O=this.controller)||void 0===O?void 0:O.size)||"m"}get empty$(){return(0,s.ll)(this.options).pipe((0,b.U)(({length:r})=>!r))}onFocusIn(r,l){!l.contains(r)&&!this.origin&&(this.origin=r)}noop(){}onKeyDownArrow(r,l){const{elements:m}=this;(0,g.VR)(m.indexOf(r),m,l)}handleFocusLossIfNecessary(r=this.el.nativeElement){this.origin&&(0,g.zb)(r)&&(0,g.Pg)(this.origin,!0,!0)}getOptions(r=!1){return this.options.filter(({disabled:l})=>r||!l).map(({value:l})=>l).filter(x.Pc)}onFocus({target:r},l){if(!(0,E.ve)(r))return;const{elements:m}=this;(0,g.VR)(l?-1:m.length,m,l?1:-1),this.handleFocusLossIfNecessary(r)}get elements(){return Array.from(this.el.nativeElement.querySelectorAll("[tuiOption]"))}}return u.\u0275fac=function(r){return new(r||u)(t.Y36(D.Cs,8),t.Y36(t.SBq),t.Y36(L.PH))},u.\u0275cmp=t.Xpm({type:u,selectors:[["tui-data-list"]],contentQueries:function(r,l,m){if(1&r&&t.Suo(m,k,5),2&r){let O;t.iGM(O=t.CRH())&&(l.options=O)}},hostVars:2,hostBindings:function(r,l){1&r&&t.NdJ("focusin",function(O){return l.onFocusIn(O.relatedTarget,O.currentTarget)})("mousedown.prevent",function(){return l.noop()})("keydown.arrowDown.prevent",function(O){return l.onKeyDownArrow(O.target,1)})("keydown.arrowUp.prevent",function(O){return l.onKeyDownArrow(O.target,-1)})("wheel.silent.passive",function(){return l.handleFocusLossIfNecessary()})("mouseleave",function(O){return l.handleFocusLossIfNecessary(O.target)}),2&r&&t.uIk("role",l.role)("data-list-size",l.size)},inputs:{role:"role",emptyContent:"emptyContent",size:"size"},features:[t._Bn([(0,L.RB)(u),D.Y0])],ngContentSelectors:J,decls:5,vars:3,consts:[["tabindex","0",1,"t-trap",3,"focusin"],["class","t-empty",4,"ngIf"],[1,"t-empty"],[4,"polymorpheusOutlet"]],template:function(r,l){1&r&&(t.F$t(),t.TgZ(0,"div",0),t.NdJ("focusin",function(O){return l.onFocus(O,!0)}),t.qZA(),t.Hsn(1),t.YNc(2,G,3,3,"div",1),t.ALo(3,"async"),t.TgZ(4,"div",0),t.NdJ("focusin",function(O){return l.onFocus(O,!1)}),t.qZA()),2&r&&(t.xp6(2),t.Q6J("ngIf",t.lcZ(3,1,l.empty$)))},dependencies:[R.O5,f.Li,R.Ov],styles:['tui-data-list{--tui-data-list-padding: .25rem;--tui-data-list-margin: .0625rem;display:flex;font:var(--tui-font-text-m);flex-direction:column;padding:calc(var(--tui-data-list-padding) - var(--tui-data-list-margin)) var(--tui-data-list-padding);color:var(--tui-text-03)}tui-data-list:focus-within .t-trap{display:none}tui-data-list:focus-within [tuiOption]._with-dropdown:not(:focus){background-color:transparent}tui-data-list[data-list-size=s]{--tui-data-list-margin: 0rem}tui-data-list[data-list-size=s]>.t-empty{display:flex;align-items:center;box-sizing:border-box;margin:var(--tui-data-list-margin) 0;font:var(--tui-font-text-s);min-height:2rem;padding:.3125rem .5rem}tui-data-list[data-list-size=m]>.t-empty{display:flex;align-items:center;box-sizing:border-box;margin:var(--tui-data-list-margin) 0;font:var(--tui-font-text-s);min-height:2.5rem;padding:.375rem .5rem}tui-data-list[data-list-size=l]{--tui-data-list-padding: .375rem;--tui-data-list-margin: .125rem}tui-data-list[data-list-size=l]>.t-empty{display:flex;align-items:center;box-sizing:border-box;margin:var(--tui-data-list-margin) 0;font:var(--tui-font-text-m);min-height:2.75rem;padding:.375rem .625rem}tui-opt-group{position:relative;display:flex;font:var(--tui-font-text-xs);color:var(--tui-text-02);flex-direction:column;line-height:1rem}tui-data-list[data-list-size=l] tui-opt-group{font:var(--tui-font-text-s);line-height:1.25rem}tui-data-list[data-list-size=l] tui-opt-group:before{padding-left:.625rem;padding-right:.625rem}tui-data-list[data-list-size=l] tui-opt-group:after{left:.625rem;right:.625rem}tui-opt-group:empty:before,tui-opt-group:empty:after{display:none}tui-opt-group:before{content:attr(data-label);padding:var(--tui-data-list-padding) .5rem var(--tui-data-list-padding);margin:var(--tui-data-list-margin) 0;white-space:normal;word-break:break-word}tui-opt-group:after{position:absolute;left:.5rem;right:.5rem;top:var(--tui-data-list-padding);height:1px;background:var(--tui-base-03)}tui-opt-group:not(:empty)~tui-opt-group:before{padding-top:calc(.75rem + var(--tui-data-list-padding))}tui-opt-group:not(:empty)~tui-opt-group[data-label=""]:before,tui-opt-group:not(:empty)~tui-opt-group:not([data-label]):before{padding:var(--tui-data-list-padding) 0}tui-opt-group:not(:empty)~tui-opt-group:after{content:""}tui-opt-group[data-label=""]:before,tui-opt-group:not([data-label]):before{padding:0;margin:0}\n'],encapsulation:2,changeDetection:0}),(0,a.gn)([h.UM],u.prototype,"empty$",null),u})(),it=(()=>{class u{}return u.\u0275fac=function(r){return new(r||u)},u.\u0275dir=t.lG2({type:u,selectors:[["ng-template","tuiDataList",""]]}),u})(),q=(()=>{class u{}return u.\u0275fac=function(r){return new(r||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[[R.ez,w.EI,f.wq]]}),u})()},167:($,A,e)=>{e.d(A,{Q:()=>w,w:()=>N});var a=e(5879),t=e(345),g=e(2918),P=e(9259),s=e(1379),x=e(4862),E=e(9773),h=e(7415),D=e(1713),L=e(2549),b=e(6814);function S(f,R){1&f&&a._UZ(0,"tui-svg",3),2&f&&a.Q6J("src",R.polymorpheusOutlet)}let N=(()=>{class f extends P.bZ{constructor(_,T,z,W){super(z),this.isMobile=W,this.mode=null,this.describeId="",T.pipe((0,E.R)(_)).subscribe(Y=>{this.mode=Y})}get computedAppearance(){return this.appearance||this.mode||""}stopOnMobile(_){var T;this.isMobile&&(_.preventDefault(),_.stopPropagation()),null===(T=this.driver$)||void 0===T||T.toggle()}}return f.\u0275fac=function(_){return new(_||f)(a.Y36(t.a3,2),a.Y36(x.Au),a.Y36(P.H3),a.Y36(g.fL))},f.\u0275cmp=a.Xpm({type:f,selectors:[["tui-tooltip"]],viewQuery:function(_,T){if(1&_&&a.Gf(P.t6,5),2&_){let z;a.iGM(z=a.CRH())&&(T.driver$=z.first)}},hostVars:1,hostBindings:function(_,T){1&_&&a.NdJ("mousedown",function(W){return T.stopOnMobile(W)}),2&_&&a.uIk("data-appearance",T.computedAppearance)},inputs:{content:"content",direction:"direction",appearance:"appearance",showDelay:"showDelay",hideDelay:"hideDelay",describeId:"describeId",context:"context"},features:[a._Bn([t.a3,s.CV]),a.qOj],decls:4,vars:11,consts:[["appearance","icon","automation-id","tui-tooltip__icon","tuiWrapper","",1,"t-tooltip-icon",3,"hover","tuiHint","tuiHintAppearance","tuiHintContext","tuiHintDescribe","tuiHintDirection","tuiHintHideDelay","tuiHintShowDelay"],["driver","tuiHintHover"],[3,"src",4,"polymorpheusOutlet"],[3,"src"]],template:function(_,T){if(1&_&&(a.TgZ(0,"span",0,1),a.ALo(2,"async"),a.YNc(3,S,1,1,"tui-svg",2),a.qZA()),2&_){const z=a.MAs(1);a.Q6J("hover",a.lcZ(2,9,z)||null)("tuiHint",T.content)("tuiHintAppearance",T.computedAppearance)("tuiHintContext",T.context)("tuiHintDescribe",T.describeId)("tuiHintDirection",T.direction)("tuiHintHideDelay",T.hideDelay)("tuiHintShowDelay",T.showDelay),a.xp6(3),a.Q6J("polymorpheusOutlet",T.icon)}},dependencies:[h.PN,D.o,P.D,P.xn,P.t6,P.DM,P.$o,L.Li,b.Ov],styles:['[_nghost-%COMP%]{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;display:inline-block;width:1.5rem;height:1.5rem;vertical-align:middle;font-size:0;line-height:0;pointer-events:auto;cursor:pointer;color:var(--tui-text-01)}[data-appearance=error][_nghost-%COMP%]{color:var(--tui-error-fill)}.t-tooltip-icon[_ngcontent-%COMP%]{display:inline-block;width:100%;height:100%;color:inherit}[tuiWrapper][data-appearance="textfield"][data-state="disabled"][_nghost-%COMP%]   .t-tooltip-icon[_ngcontent-%COMP%], [tuiWrapper][data-appearance="textfield"][data-state="disabled"]   [_nghost-%COMP%]   .t-tooltip-icon[_ngcontent-%COMP%]{opacity:1}'],changeDetection:0}),f})(),w=(()=>{class f{}return f.\u0275fac=function(_){return new(_||f)},f.\u0275mod=a.oAB({type:f}),f.\u0275inj=a.cJS({imports:[[b.ez,D.W,h.EI,P.go,L.wq]]}),f})()},9259:($,A,e)=>{e.d(A,{H3:()=>K,$o:()=>Et,D:()=>at,xn:()=>Ct,t6:()=>ut,go:()=>xt,bZ:()=>vt,DM:()=>_t});var a=e(7582),t=e(5879),g=e(8937),P=e(2461),s=e(4423),x=e(7444),E=e(6141),h=e(7995),D=e(1800),L=e(6551),b=e(8569),S=e(345),N=e(5213),w=e(756),f=e(9315),R=e(7904),_=e(6371),T=e(8542),z=e(4862),W=e(5863),Y=e(2549),J=e(4664),V=e(932),G=e(9773),Z=e(7997),k=e(2181),j=e(7398),it=e(9397),nt=e(9360),dt=e(2420),q=e(8251),u=e(4829),r=e(7921),l=e(3997),m=e(836),O=e(8645),tt=e(3019),Q=e(2096),i=e(7328),c=e(4825),U=e(8103),C=e(6814);function ot(o,v){1&o&&t._UZ(0,"span",1),2&o&&t.Q6J("innerHTML",v.polymorpheusOutlet,t.oJD)}const st=["*"],gt=(0,g.N1)(()=>Mt),K=(0,g.JN)({direction:"bottom-left",showDelay:500,hideDelay:200,appearance:"",icon:"tuiIconHelpCircle"});let vt=(()=>{class o extends P.QJ{constructor(n){super(),this.options=n,this.direction=this.options.direction,this.appearance=this.options.appearance,this.showDelay=this.options.showDelay,this.hideDelay=this.options.hideDelay,this.icon=this.options.icon}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(K,4))},o.\u0275dir=t.lG2({type:o,selectors:[["","tuiHintContent",""]],inputs:{content:["tuiHintContent","content"],direction:["tuiHintDirection","direction"],appearance:["tuiHintAppearance","appearance"],showDelay:["tuiHintShowDelay","showDelay"],hideDelay:["tuiHintHideDelay","hideDelay"]},features:[t._Bn([{provide:K,useExisting:(0,t.Gpc)(()=>o)}]),t.qOj]}),o})(),at=(()=>{class o{constructor(n,d,M,p,H){this.el=n,this.component=d,this.hintService=M,this.options=p,this.activeZone=H,this.tuiHintAppearance=null,this.type="hint"}get appearance(){var n;return null!==(n=this.tuiHintAppearance)&&void 0!==n?n:this.options.appearance}ngOnChanges(){this.content||this.toggle(!1)}ngOnDestroy(){this.toggle(!1)}getClientRect(){return this.el.nativeElement.getBoundingClientRect()}toggle(n){n&&this.content?this.hintService.add(this):this.hintService.remove(this)}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(t.SBq),t.Y36(Y.Al),t.Y36(T.BN),t.Y36(K),t.Y36(s.e,8))},o.\u0275dir=t.lG2({type:o,selectors:[["","tuiHint","",5,"ng-container",5,"ng-template"]],inputs:{content:["tuiHint","content"],context:["tuiHintContext","context"],tuiHintAppearance:"tuiHintAppearance"},features:[t._Bn([(0,f.Ic)(o),(0,f.Fe)(o),{provide:Y.Al,deps:[gt,t.gxx],useClass:Y.Al}]),t.TTD]}),o})(),ut=(()=>{class o extends f.kk{constructor(n,d,M){super(p=>this.stream$.subscribe(p)),this.hovered$=n,this.options=d,this.el=M,this.visible=!1,this.toggle$=new O.x,this.stream$=(0,tt.T)(this.toggle$.pipe((0,J.w)(p=>(0,Q.of)(p).pipe((0,V.g)(p?0:this.hideDelay))),(0,G.R)(this.hovered$),(0,Z.r)()),this.hovered$.pipe((0,J.w)(p=>(0,Q.of)(p).pipe((0,V.g)(p?this.showDelay:this.hideDelay))),(0,G.R)(this.toggle$),(0,Z.r)())).pipe((0,k.h)(()=>this.enabled),(0,j.U)(p=>p&&(this.el.nativeElement.hasAttribute("tuiHintPointer")||!(0,W.mn)(this.el.nativeElement))),(0,it.b)(p=>{this.visible=p})),this.showDelay=this.options.showDelay,this.hideDelay=this.options.hideDelay,this.type="hint",this.enabled=!0}toggle(n=!this.visible){this.toggle$.next(n)}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(x.gs),t.Y36(K),t.Y36(t.SBq))},o.\u0275dir=t.lG2({type:o,selectors:[["","tuiHint","",5,"ng-container",5,"ng-template"]],inputs:{showDelay:["tuiHintShowDelay","showDelay"],hideDelay:["tuiHintHideDelay","hideDelay"]},exportAs:["tuiHintHover"],features:[t._Bn([(0,f.UK)(o),x.gs]),t.qOj]}),o})(),Ot=(()=>{class o extends ut{constructor(){super(...arguments),this.currentRect=E.Jy}onMove({clientX:n,clientY:d}){this.currentRect=(0,h.dD)(n,d)}getClientRect(){return this.currentRect}}return o.\u0275fac=function(){let v;return function(d){return(v||(v=t.n5z(o)))(d||o)}}(),o.\u0275dir=t.lG2({type:o,selectors:[["","tuiHint","","tuiHintPointer",""]],hostBindings:function(n,d){1&n&&t.NdJ("mousemove.silent",function(p){return d.onMove(p)})},features:[t._Bn([(0,f.Ic)(o),(0,f.UK)(o)]),t.qOj]}),o})(),_t=(()=>{class o extends f.uG{constructor(n,d,M,p){super(),this.options=n,this.viewport=d,this.directive=M,this.accessors=p,this.points=U.Fw.reduce((H,F)=>Object.assign(Object.assign({},H),{[F]:[0,0]}),{}),this.direction=this.options.direction,this.type="hint"}getPosition({width:n,height:d}){var M,p;const H=null!==(p=null===(M=this.accessor)||void 0===M?void 0:M.getClientRect())&&void 0!==p?p:E.Jy,F=H.left+H.width/2,et=H.top+H.height/2;if(this.points["top-left"][0]=H.top-d-8,this.points["top-left"][1]=F-n+22,this.points.top[0]=this.points["top-left"][0],this.points.top[1]=F-n/2,this.points["top-right"][0]=this.points["top-left"][0],this.points["top-right"][1]=F-22,this.points["bottom-left"][0]=H.bottom+8,this.points["bottom-left"][1]=this.points["top-left"][1],this.points.bottom[0]=this.points["bottom-left"][0],this.points.bottom[1]=this.points.top[1],this.points["bottom-right"][0]=this.points["bottom-left"][0],this.points["bottom-right"][1]=this.points["top-right"][1],this.points["left-top"][0]=et-d+22,this.points["left-top"][1]=H.left-n-8,this.points.left[0]=et-d/2,this.points.left[1]=this.points["left-top"][1],this.points["left-bottom"][0]=et-22,this.points["left-bottom"][1]=this.points["left-top"][1],this.points["right-top"][0]=this.points["left-top"][0],this.points["right-top"][1]=H.right+8,this.points.right[0]=this.points.left[0],this.points.right[1]=this.points["right-top"][1],this.points["right-bottom"][0]=this.points["left-bottom"][0],this.points["right-bottom"][1]=this.points["right-top"][1],this.checkPosition(this.points[this.direction],n,d))return this.points[this.direction];const rt=U.Fw.find(ct=>this.checkPosition(this.points[ct],n,d));return this.points[rt||this.fallback]}get accessor(){return(0,f.Sv)("hint")(this.accessors,this.directive)}get fallback(){return this.points.top[0]>this.viewport.getClientRect().bottom-this.points.bottom[0]?"top":"bottom"}checkPosition([n,d],M,p){const H=this.viewport.getClientRect();return n>8&&d>8&&n+p<H.bottom-8&&d+M<H.right-8}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(K),t.Y36(z.EO),t.Y36(at),t.Y36(f.O4))},o.\u0275dir=t.lG2({type:o,selectors:[["","tuiHint","",5,"ng-container",5,"ng-template"]],inputs:{direction:["tuiHintDirection","direction"]},features:[t.qOj]}),(0,a.gn)([D.UM],o.prototype,"accessor",null),o})(),Mt=(()=>{class o{constructor(n,d,M,p,H,F,et,rt,ct,Tt,Ht,Pt){var mt;this.animation=p,this.pointer=H,this.accessor=F,this.el=et,this.polymorpheus=rt,this.hover=ct,this.mode=Tt,this.visualViewportService=Ht,this.viewport=Pt,this.appearance=this.polymorpheus.$implicit.appearance||(null===(mt=this.mode)||void 0===mt?void 0:mt.mode),d.pipe((0,j.U)(lt=>this.visualViewportService.correct(lt)),(0,G.R)(M)).subscribe(([lt,It])=>{this.update(lt,It)}),n.pipe((0,G.R)(M)).subscribe(lt=>this.hover.toggle(lt))}get content(){return this.polymorpheus.$implicit.content}get context(){return this.polymorpheus.$implicit.context}onClick(n){(!this.el.nativeElement.contains(n)&&!this.hover.el.nativeElement.contains(n)||(0,W.mn)(this.hover.el.nativeElement))&&this.hover.toggle(!1)}update(n,d){const{height:M,width:p}=this.el.nativeElement.getBoundingClientRect(),{style:H}=this.el.nativeElement,F=this.accessor.getClientRect(),et=this.viewport.getClientRect();if(F===E.Jy)return;const rt=(0,L.Ki)(d,4,et.width-p-4),[ct,Tt]=this.visualViewportService.correct([F.top+F.height/2-n,F.left+F.width/2-rt]);H.top=(0,b.O)(n),H.left=(0,b.O)(rt),H.setProperty("--top",(0,b.O)((0,L.Ki)(ct,.5,M-1))),H.setProperty("--left",(0,b.O)((0,L.Ki)(Tt,.5,p-1)))}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(x.gs),t.Y36(T.KG),t.Y36(S.a3,2),t.Y36(z.Pw),t.Y36(Ot,8),t.Y36(f.O4),t.Y36(t.SBq),t.Y36(Y.yf),t.Y36(ut),t.Y36(_.w,8),t.Y36(T.Lp),t.Y36(z.EO))},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-hint"]],hostVars:4,hostBindings:function(n,d){1&n&&t.NdJ("click",function(p){return d.onClick(p.target)},!1,t.evT),2&n&&(t.uIk("data-appearance",d.appearance),t.d8E("@tuiFadeIn",d.animation),t.ekj("_untouchable",d.pointer))},features:[t._Bn([S.a3,T.KG,x.gs,(0,f.ei)("hint",_t),(0,f.Wk)("hint",at)])],ngContentSelectors:st,decls:2,vars:2,consts:[[3,"innerHTML",4,"polymorpheusOutlet","polymorpheusOutletContext"],[3,"innerHTML"]],template:function(n,d){1&n&&(t.F$t(),t.Hsn(0),t.YNc(1,ot,1,1,"span",0)),2&n&&(t.xp6(1),t.Q6J("polymorpheusOutlet",d.content)("polymorpheusOutletContext",d.context))},dependencies:[Y.Li],styles:['[_nghost-%COMP%]{position:absolute;max-width:18rem;min-height:var(--tui-height-m);padding:.75rem 1rem;background:var(--tui-primary);border-radius:var(--tui-radius-l);color:var(--tui-primary-text);box-sizing:border-box;font:var(--tui-font-text-s);white-space:pre-line;word-wrap:break-word}[_nghost-%COMP%]:before{content:"";position:absolute;top:var(--top);left:var(--left);width:.5rem;height:.5rem;border-radius:.125rem;box-sizing:border-box;background:inherit;transform:translate(-50%,-50%) rotate(45deg)}[data-appearance=error][_nghost-%COMP%]{background:var(--tui-error-fill)}[data-appearance=onDark][_nghost-%COMP%]{background:var(--tui-elevation-02);color:var(--tui-text-01);filter:drop-shadow(0 0 .125rem rgba(0,0,0,.16)) drop-shadow(0 1.5rem 1rem rgba(0,0,0,.03)) drop-shadow(0 .75rem .75rem rgba(0,0,0,.04)) drop-shadow(0 .25rem .375rem rgba(0,0,0,.05))}[_nghost-%COMP%]:not([style*="top"]){visibility:hidden}._untouchable[_nghost-%COMP%]{pointer-events:none}'],data:{animation:[R.QF]},changeDetection:0}),(0,a.gn)([D.UM],o.prototype,"update",null),o})(),Et=(()=>{class o extends f.kk{constructor(n,d,M){super(p=>this.stream$.subscribe(p)),this.zone=n,this.doc=d,this.el=M,this.id$=new i.t(1),this.stream$=this.id$.pipe((0,N.Xd)(()=>(0,N.mL)(this.doc,"keydown",{capture:!0}),g.Pc),(0,J.w)(()=>this.focused?(0,Q.of)(!1):(0,tt.T)((0,N.mL)(this.doc,"keyup"),(0,N.mL)(this.element,"blur")).pipe((0,j.U)(()=>this.focused))),function y(o){return(0,nt.e)((v,n)=>{let d=!1,M=null,p=null;const H=()=>{if(p?.unsubscribe(),p=null,d){d=!1;const F=M;M=null,n.next(F)}};v.subscribe((0,q.x)(n,F=>{p?.unsubscribe(),d=!0,M=F,p=(0,q.x)(n,H,dt.Z),(0,u.Xf)(o(F)).subscribe(p)},()=>{H(),n.complete()},void 0,()=>{M=p=null}))})}(p=>p?(0,c.H)(1e3):(0,Q.of)(null)),(0,r.O)(!1),(0,l.x)(),(0,m.T)(1),(0,N.Yr)(this.zone)),this.tuiHintDescribe="",this.type="hint"}ngOnChanges(){this.id$.next(this.tuiHintDescribe)}get focused(){return(0,w.V8)(this.element)}get element(){return this.doc.getElementById(this.tuiHintDescribe||"")||this.el.nativeElement}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(t.R0b),t.Y36(C.K0),t.Y36(t.SBq))},o.\u0275dir=t.lG2({type:o,selectors:[["","tuiHintDescribe",""]],inputs:{tuiHintDescribe:"tuiHintDescribe"},features:[t._Bn([(0,f.UK)(o)]),t.qOj,t.TTD]}),(0,a.gn)([D.UM],o.prototype,"element",null),o})(),Ct=(()=>{class o extends f.FP{constructor(n,d,M){super(n,d,M),this.type="hint"}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(S.a3,2),t.Y36(f.kk),t.Y36(f.c2))},o.\u0275dir=t.lG2({type:o,selectors:[["","tuiHint","",5,"ng-container",5,"ng-template"]],features:[t._Bn([S.a3]),t.qOj]}),o})(),xt=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[C.ez,Y.wq]]}),o})()},9250:($,A,e)=>{e.d(A,{Y0:()=>Q,x_:()=>_,rW:()=>nt,z1:()=>f,kI:()=>l,Cs:()=>tt,qc:()=>T,cn:()=>O,kD:()=>G,AW:()=>k,sz:()=>m});var a=e(8937),t=e(2461),g=e(345),P=e(5213),s=e(5879),x=e(4862),E=e(3019),h=e(5592),D=e(2420);const L=new h.y(D.Z);var S=e(9773);class N{constructor(c,U,C,ot,st,pt,gt,ft,K,Dt,vt,at,ut){this.change$=c,this.options=U,this.legacyAppearance=C,this.appearanceDirective=ot,this.cleanerDirective=st,this.customContentDirective=pt,this.iconDirective=gt,this.iconLeftDirective=ft,this.labelOutsideDirective=K,this.sizeDirective=Dt,this.prefixDirective=vt,this.postfixDirective=at,this.fillerDirective=ut}get appearance(){return this.appearanceDirective.appearance||this.legacyAppearance}get cleaner(){return this.cleanerDirective.cleaner}get customContent(){return this.customContentDirective.customContent||""}get icon(){return this.iconDirective.icon}get iconLeft(){return this.iconLeftDirective.iconLeft}get labelOutside(){return this.labelOutsideDirective.labelOutside}get size(){return this.sizeDirective.size}get prefix(){return this.prefixDirective.prefix}get postfix(){return this.postfixDirective.postfix}get filler(){return this.fillerDirective.filler}}const f=(0,a.JN)({iconCleaner:"tuiIconClose",hintOnDisabled:!1}),_=(0,a.N1)(()=>new T);let T=(()=>{class i extends t.QJ{constructor(){super(...arguments),this.appearance=""}}return i.\u0275fac=function(){let c;return function(C){return(c||(c=s.n5z(i)))(C||i)}}(),i.\u0275dir=s.lG2({type:i,selectors:[["","tuiTextfieldAppearance",""]],inputs:{appearance:["tuiTextfieldAppearance","appearance"]},features:[s._Bn([{provide:_,useExisting:(0,s.Gpc)(()=>i)}]),s.qOj]}),i})();const z=(0,a.N1)(()=>new W);let W=(()=>{class i extends t.QJ{constructor(){super(...arguments),this.cleaner=!1}}return i.\u0275fac=function(){let c;return function(C){return(c||(c=s.n5z(i)))(C||i)}}(),i.\u0275dir=s.lG2({type:i,selectors:[["","tuiTextfieldCleaner",""]],inputs:{cleaner:["tuiTextfieldCleaner","cleaner"]},features:[s._Bn([{provide:z,useExisting:(0,s.Gpc)(()=>i)}]),s.qOj]}),i})();const Y=(0,a.N1)(()=>new J);let J=(()=>{class i extends t.QJ{}return i.\u0275fac=function(){let c;return function(C){return(c||(c=s.n5z(i)))(C||i)}}(),i.\u0275dir=s.lG2({type:i,selectors:[["","tuiTextfieldCustomContent",""]],inputs:{customContent:["tuiTextfieldCustomContent","customContent"]},features:[s._Bn([{provide:Y,useExisting:(0,s.Gpc)(()=>i)}]),s.qOj]}),i})();const V=(0,a.N1)(()=>new G);let G=(()=>{class i extends t.QJ{constructor(){super(...arguments),this.filler=""}}return i.\u0275fac=function(){let c;return function(C){return(c||(c=s.n5z(i)))(C||i)}}(),i.\u0275dir=s.lG2({type:i,selectors:[["","tuiTextfieldFiller",""]],inputs:{filler:["tuiTextfieldFiller","filler"]},features:[s._Bn([{provide:V,useExisting:(0,s.Gpc)(()=>i)}]),s.qOj]}),i})();const Z=(0,a.N1)(()=>new k);let k=(()=>{class i extends t.QJ{}return i.\u0275fac=function(){let c;return function(C){return(c||(c=s.n5z(i)))(C||i)}}(),i.\u0275dir=s.lG2({type:i,selectors:[["","tuiTextfieldIcon",""]],inputs:{icon:["tuiTextfieldIcon","icon"]},features:[s._Bn([{provide:Z,useExisting:(0,s.Gpc)(()=>i)}]),s.qOj]}),i})();const j=(0,a.N1)(()=>new it);let it=(()=>{class i extends t.QJ{}return i.\u0275fac=function(){let c;return function(C){return(c||(c=s.n5z(i)))(C||i)}}(),i.\u0275dir=s.lG2({type:i,selectors:[["","tuiTextfieldIconLeft",""]],inputs:{iconLeft:["tuiTextfieldIconLeft","iconLeft"]},features:[s._Bn([{provide:j,useExisting:(0,s.Gpc)(()=>i)}]),s.qOj]}),i})();const nt=(0,a.N1)(()=>new dt);let dt=(()=>{class i extends t.QJ{constructor(){super(...arguments),this.labelOutside=!1}}return i.\u0275fac=function(){let c;return function(C){return(c||(c=s.n5z(i)))(C||i)}}(),i.\u0275dir=s.lG2({type:i,selectors:[["","tuiTextfieldLabelOutside",""]],inputs:{labelOutside:["tuiTextfieldLabelOutside","labelOutside"]},features:[s._Bn([{provide:nt,useExisting:(0,s.Gpc)(()=>i)}]),s.qOj]}),i})();const q=(0,a.N1)(()=>new u);let u=(()=>{class i extends t.QJ{constructor(){super(...arguments),this.postfix=""}}return i.\u0275fac=function(){let c;return function(C){return(c||(c=s.n5z(i)))(C||i)}}(),i.\u0275dir=s.lG2({type:i,selectors:[["","tuiTextfieldPostfix",""]],inputs:{postfix:["tuiTextfieldPostfix","postfix"]},features:[s._Bn([{provide:q,useExisting:(0,s.Gpc)(()=>i)}]),s.qOj]}),i})();const y=(0,a.N1)(()=>new r);let r=(()=>{class i extends t.QJ{constructor(){super(...arguments),this.prefix=""}}return i.\u0275fac=function(){let c;return function(C){return(c||(c=s.n5z(i)))(C||i)}}(),i.\u0275dir=s.lG2({type:i,selectors:[["","tuiTextfieldPrefix",""]],inputs:{prefix:["tuiTextfieldPrefix","prefix"]},features:[s._Bn([{provide:y,useExisting:(0,s.Gpc)(()=>i)}]),s.qOj]}),i})();const l=(0,a.N1)(()=>new m);let m=(()=>{class i extends t.QJ{constructor(){super(...arguments),this.size="l"}}return i.\u0275fac=function(){let c;return function(C){return(c||(c=s.n5z(i)))(C||i)}}(),i.\u0275dir=s.lG2({type:i,selectors:[["","tuiTextfieldSize",""]],inputs:{size:["tuiTextfieldSize","size"]},features:[s._Bn([{provide:l,useExisting:(0,s.Gpc)(()=>i)}]),s.qOj]}),i})(),O=(()=>{class i{}return i.\u0275fac=function(U){return new(U||i)},i.\u0275mod=s.oAB({type:i}),i.\u0275inj=s.cJS({}),i})();const tt=new s.OlP("[TUI_TEXTFIELD_WATCHED_CONTROLLER]"),Q=[g.a3,{provide:tt,deps:[s.sBO,g.a3,f,x.jt,_,z,Y,Z,j,nt,l,y,q,V],useFactory:(i,c,U,C,...ot)=>{const st=(0,E.T)(...ot.map(({change$:pt})=>pt||L)).pipe((0,P.NA)(i),(0,S.R)(c));return st.subscribe(),new N(st,U,C,...ot)}}]},3815:($,A,e)=>{e.d(A,{$:()=>P,g:()=>s});var a=e(5879),t=e(4862),g=e(7398);let P=(()=>{class x{constructor(h){this.months$=h}transform({month:h}){return this.months$.pipe((0,g.U)(D=>D[h]))}}return x.\u0275fac=function(h){return new(h||x)(a.Y36(t.$R,16))},x.\u0275pipe=a.Yjl({name:"tuiMonth",type:x,pure:!0}),x})(),s=(()=>{class x{}return x.\u0275fac=function(h){return new(h||x)},x.\u0275mod=a.oAB({type:x}),x.\u0275inj=a.cJS({}),x})()},2961:($,A,e)=>{e.d(A,{E2:()=>S,yn:()=>b}),e(3815);var t=e(98),g=e(4862),x=(e(6586),e(2096),e(2737)),h=(e(7398),e(5879)),D=e(95);const b=(0,t.fx)({limitWidth:"fixed",align:"right"}),S={provide:g.sE,deps:[[new h.FiY,new h.PiD,D.JU]],useFactory:x.y}}}]);