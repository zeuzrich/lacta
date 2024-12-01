 
 
 (function(){'use strict';var e={"class":"className",contenteditable:"contentEditable","for":"htmlFor",readonly:"readOnly",maxlength:"maxLength",tabindex:"tabIndex",colspan:"colSpan",rowspan:"rowSpan",usemap:"useMap"};function aa(a,b){try{return a(b)}catch(c){return b}}var k=document,m=window,ba=k.documentElement,n=k.createElement.bind(k),ca=n("div"),p=n("table"),da=n("tbody"),ea=n("tr"),q=Array.isArray,r=Array.prototype,fa=r.concat,t=r.filter,ha=r.indexOf,ia=r.map,ja=r.push,ka=r.slice,u=r.some,la=r.splice,ma=/^#(?:[\w-]|\\.|[^\x00-\xa0])*$/,na=/^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/,oa=/<.+>/,pa=/^\w+$/;function v(a,b){return a&&(w(b)||x(b))?na.test(a)?b.getElementsByClassName(a.slice(1)):pa.test(a)?b.getElementsByTagName(a):b.querySelectorAll(a):[]}var B=function(){function a(a,c){if(a){if(a instanceof B)return a;var b=a;if(C(a)){if(b=(c instanceof B?c[0]:c)||k,b=ma.test(a)?b.getElementById(a.slice(1)):oa.test(a)?qa(a):v(a,b),!b)return}else if(D(a))return this.ready(a);if(b.nodeType||b===m)b=[b];this.length=b.length;a=0;for(c=this.length;a<c;a++)this[a]=b[a]}}a.prototype.init=function(b,c){return new a(b,c)};return a}(),E=B.prototype,F=E.init;F.fn=F.prototype=E;E.length=0;E.splice=la;"function"===typeof Symbol&&(E[Symbol.iterator]=r[Symbol.iterator]);E.map=function(a){return F(fa.apply([],ia.call(this,function(b,c){return a.call(b,c,b)})))};E.slice=function(a,b){return F(ka.call(this,a,b))};var ra=/-([a-z])/g;function G(a){return a.replace(ra,function(a,c){return c.toUpperCase()})}F.guid=1;function sa(a,b){var c=a&&(a.matches||a.webkitMatchesSelector||a.msMatchesSelector);return!!c&&!!b&&c.call(a,b)}function H(a){return!!a&&a===a.window}function w(a){return!!a&&9===a.nodeType}function x(a){return!!a&&1===a.nodeType}function D(a){return"function"===typeof a}function C(a){return"string"===typeof a}function ta(a){return!isNaN(parseFloat(a))&&isFinite(a)}function I(a){if("object"!==typeof a||null===a)return!1;a=Object.getPrototypeOf(a);return null===a||a===Object.prototype}F.isWindow=H;F.isFunction=D;F.isArray=q;F.isNumeric=ta;F.isPlainObject=I;E.get=function(a){if(void 0===a)return ka.call(this);a=Number(a);return this[0>a?a+this.length:a]};E.eq=function(a){return F(this.get(a))};E.first=function(){return this.eq(0)};E.last=function(){return this.eq(-1)};function J(a,b,c){if(c)for(c=a.length;c--&&!1!==b.call(a[c],c,a[c]););else if(I(a)){var d=Object.keys(a);c=0;for(var h=d.length;c<h;c++){var f=d[c];if(!1===b.call(a[f],f,a[f]))break}}else for(c=0,h=a.length;c<h&&!1!==b.call(a[c],c,a[c]);c++);return a}F.each=J;E.each=function(a){return J(this,a)};E.prop=function(a,b){if(a){if(C(a))return a=e[a]||a,2>arguments.length?this[0]&&this[0][a]:this.each(function(c,h){h[a]=b});for(var c in a)this.prop(c,a[c]);return this}};E.removeProp=function(a){return this.each(function(b,c){delete c[e[a]||a]})};function K(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];b="boolean"===typeof a[0]?a.shift():!1;var c=a.shift(),d=a.length;if(!c)return{};if(!d)return K(b,F,c);for(var h=0;h<d;h++){var f=a[h],g;for(g in f)b&&(q(f[g])||I(f[g]))?(c[g]&&c[g].constructor===f[g].constructor||(c[g]=new f[g].constructor),K(b,c[g],f[g])):c[g]=f[g]}return c}F.extend=K;E.extend=function(a){return K(E,a)};function L(a){return C(a)?function(b,c){return sa(c,a)}:D(a)?a:a instanceof B?function(b,c){return a.is(c)}:a?function(b,c){return c===a}:function(){return!1}}E.filter=function(a){var b=L(a);return F(t.call(this,function(a,d){return b.call(a,d,a)}))};function M(a,b){return b?a.filter(b):a}var ua=/\S+/g;function N(a){return C(a)?a.match(ua)||[]:[]}E.hasClass=function(a){return!!a&&u.call(this,function(b){return x(b)&&b.classList.contains(a)})};E.removeAttr=function(a){var b=N(a);return this.each(function(a,d){x(d)&&J(b,function(a,b){d.removeAttribute(b)})})};E.attr=function(a,b){if(a){if(C(a)){if(2>arguments.length){if(!this[0]||!x(this[0]))return;var c=this[0].getAttribute(a);return null===c?void 0:c}return void 0===b?this:null===b?this.removeAttr(a):this.each(function(c,h){x(h)&&h.setAttribute(a,b)})}for(c in a)this.attr(c,a[c]);return this}};E.toggleClass=function(a,b){var c=N(a),d=void 0!==b;return this.each(function(a,f){x(f)&&J(c,function(a,c){d?b?f.classList.add(c):f.classList.remove(c):f.classList.toggle(c)})})};E.addClass=function(a){return this.toggleClass(a,!0)};E.removeClass=function(a){return arguments.length?this.toggleClass(a,!1):this.attr("class","")};function O(a,b,c,d){for(var h=[],f=D(b),g=d&&L(d),y=0,z=a.length;y<z;y++)if(f){var l=b(a[y]);l.length&&ja.apply(h,l)}else for(l=a[y][b];!(null==l||d&&g(-1,l));)h.push(l),l=c?l[b]:null;return h}function P(a){return 1<a.length?t.call(a,function(a,c,d){return ha.call(d,a)===c}):a}F.unique=P;E.add=function(a,b){return F(P(this.get().concat(F(a,b).get())))};function Q(a,b,c){if(x(a)){var d=m.getComputedStyle(a,null);return c?d.getPropertyValue(b)||void 0:d[b]||a.style[b]}}function R(a,b){return parseInt(Q(a,b),10)||0}var S=/^--/,T={},va=ca.style,wa=["webkit","moz","ms"];function xa(a,b){void 0===b&&(b=S.test(a));if(b)return a;if(!T[a]){b=G(a);var c=""+b[0].toUpperCase()+b.slice(1);b=(b+" "+wa.join(c+" ")+c).split(" ");J(b,function(b,c){if(c in va)return T[a]=c,!1})}return T[a]}var ya={animationIterationCount:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0};function za(a,b,c){void 0===c&&(c=S.test(a));return c||ya[a]||!ta(b)?b:b+"px"}E.css=function(a,b){if(C(a)){var c=S.test(a);a=xa(a,c);if(2>arguments.length)return this[0]&&Q(this[0],a,c);if(!a)return this;b=za(a,b,c);return this.each(function(d,f){x(f)&&(c?f.style.setProperty(a,b):f.style[a]=b)})}for(var d in a)this.css(d,a[d]);return this};var Aa=/^\s+|\s+$/;function Ba(a,b){a=a.dataset[b]||a.dataset[G(b)];return Aa.test(a)?a:aa(JSON.parse,a)}E.data=function(a,b){if(!a){if(!this[0])return;var c={},d;for(d in this[0].dataset)c[d]=Ba(this[0],d);return c}if(C(a))return 2>arguments.length?this[0]&&Ba(this[0],a):void 0===b?this:this.each(function(c,d){c=b;c=aa(JSON.stringify,c);d.dataset[G(a)]=c});for(d in a)this.data(d,a[d]);return this};function Ca(a,b){var c=a.documentElement;return Math.max(a.body["scroll"+b],c["scroll"+b],a.body["offset"+b],c["offset"+b],c["client"+b])}function Da(a,b){return R(a,"border"+(b?"Left":"Top")+"Width")+R(a,"padding"+(b?"Left":"Top"))+R(a,"padding"+(b?"Right":"Bottom"))+R(a,"border"+(b?"Right":"Bottom")+"Width")}J([!0,!1],function(a,b){J(["Width","Height"],function(a,d){E[(b?"outer":"inner")+d]=function(c){if(this[0])return H(this[0])?b?this[0]["inner"+d]:this[0].document.documentElement["client"+d]:w(this[0])?Ca(this[0],d):this[0][(b?"offset":"client")+d]+(c&&b?R(this[0],"margin"+(a?"Top":"Left"))+R(this[0],"margin"+(a?"Bottom":"Right")):0)}})});J(["Width","Height"],function(a,b){var c=b.toLowerCase();E[c]=function(d){if(!this[0])return void 0===d?void 0:this;if(!arguments.length)return H(this[0])?this[0].document.documentElement["client"+b]:w(this[0])?Ca(this[0],b):this[0].getBoundingClientRect()[c]-Da(this[0],!a);var h=parseInt(d,10);return this.each(function(b,d){x(d)&&(b=Q(d,"boxSizing"),d.style[c]=za(c,h+("border-box"===b?Da(d,!a):0)))})}});var U={};E.toggle=function(a){return this.each(function(b,c){if(x(c))if(void 0===a?"none"===Q(c,"display"):a){if(c.style.display=c.___cd||"","none"===Q(c,"display")){b=c.style;c=c.tagName;if(U[c])c=U[c];else{var d=n(c);k.body.insertBefore(d,null);var h=Q(d,"display");k.body.removeChild(d);c=U[c]="none"!==h?h:"block"}b.display=c}}else c.___cd=Q(c,"display"),c.style.display="none"})};E.hide=function(){return this.toggle(!1)};E.show=function(){return this.toggle(!0)};function Ea(a,b){return!b||!u.call(b,function(b){return 0>a.indexOf(b)})}var V={focus:"focusin",blur:"focusout"},W={mouseenter:"mouseover",mouseleave:"mouseout"},Fa=/^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;function Ga(a,b,c,d,h){var f=a.___ce=a.___ce||{};f[b]=f[b]||[];f[b].push([c,d,h]);a.addEventListener(b,h)}function X(a){a=a.split(".");return[a[0],a.slice(1).sort()]}function Y(a,b,c,d,h){var f=a.___ce=a.___ce||{};if(b)f[b]&&(f[b]=f[b].filter(function(f){var g=f[0],z=f[1];f=f[2];if(h&&f.guid!==h.guid||!Ea(g,c)||d&&d!==z)return!0;a.removeEventListener(b,f)}));else for(b in f)Y(a,b,c,d,h)}E.off=function(a,b,c){var d=this;if(void 0===a)this.each(function(a,b){(x(b)||w(b)||H(b))&&Y(b)});else if(C(a))D(b)&&(c=b,b=""),J(N(a),function(a,h){a=X(h);h=a[0];var f=a[1],g=W[h]||V[h]||h;d.each(function(a,d){(x(d)||w(d)||H(d))&&Y(d,g,f,b,c)})});else for(var h in a)this.off(h,a[h]);return this};E.on=function(a,b,c,d,h){var f=this;if(!C(a)){for(var g in a)this.on(g,b,c,a[g],h);return this}C(b)||(void 0!==b&&null!==b&&(void 0!==c&&(d=c),c=b),b="");D(d)||(d=c,c=void 0);if(!d)return this;J(N(a),function(a,g){a=X(g);g=a[0];var l=a[1],z=W[g]||V[g]||g,y=g in W,Ka=g in V;z&&f.each(function(a,f){if(x(f)||w(f)||H(f))a=function La(a){if(a.target["___i"+a.type])return a.stopImmediatePropagation();if(!a.namespace||Ea(l,a.namespace.split(".")))if(b||!(Ka&&(a.target!==f||a.___ot===z)||y&&a.relatedTarget&& f.contains(a.relatedTarget))){var g=f;if(b){for(var A=a.target;!sa(A,b);){if(A===f)return;A=A.parentNode;if(!A)return}g=A;a.___cd=!0}a.___cd&&Object.defineProperty(a,"currentTarget",{configurable:!0,get:function(){return g}});Object.defineProperty(a,"data",{configurable:!0,get:function(){return c}});A=d.call(g,a,a.___td);h&&Y(f,z,l,b,La);!1===A&&(a.preventDefault(),a.stopPropagation())}},a.guid=d.guid=d.guid||F.guid++,Ga(f,z,l,b,a)})});return this};E.one=function(a,b,c,d){return this.on(a,b,c,d,!0)};E.ready=function(a){function b(){return setTimeout(a,0,F)}"loading"!==k.readyState?b():k.addEventListener("DOMContentLoaded",b);return this};E.trigger=function(a,b){if(C(a)){var c=X(a),d=c[0];c=c[1];var h=W[d]||V[d]||d;if(!h)return this;var f=Fa.test(h)?"MouseEvents":"HTMLEvents";a=k.createEvent(f);a.initEvent(h,!0,!0);a.namespace=c.join(".");a.___ot=d}a.___td=b;var g=a.___ot in V;return this.each(function(b,c){g&&D(c[a.___ot])&&(c["___i"+a.type]=!0,c[a.___ot](),c["___i"+a.type]=!1);c.dispatchEvent(a)})};function Ha(a){return a.multiple&&a.options?O(t.call(a.options,function(a){return a.selected&&!a.disabled&&!a.parentNode.disabled}),"value"):a.value||""}var Ia=/%20/g,Ja=/\r?\n/g,Ma=/file|reset|submit|button|image/i,Na=/radio|checkbox/i;E.serialize=function(){var a="";this.each(function(b,c){J(c.elements||[c],function(b,c){c.disabled||!c.name||"FIELDSET"===c.tagName||Ma.test(c.type)||Na.test(c.type)&&!c.checked||(b=Ha(c),void 0!==b&&(b=q(b)?b:[b],J(b,function(b,d){b=a;d="&"+encodeURIComponent(c.name)+"="+encodeURIComponent(d.replace(Ja,"\r\n")).replace(Ia,"+");a=b+d})))})});return a.slice(1)};E.val=function(a){return arguments.length?this.each(function(b,c){if((b=c.multiple&&c.options)||Na.test(c.type)){var d=q(a)?ia.call(a,String):null===a?[]:[String(a)];b?J(c.options,function(a,b){b.selected=0<=d.indexOf(b.value)},!0):c.checked=0<=d.indexOf(c.value)}else c.value=void 0===a||null===a?"":a}):this[0]&&Ha(this[0])};E.clone=function(){return this.map(function(a,b){return b.cloneNode(!0)})};E.detach=function(a){M(this,a).each(function(a,c){c.parentNode&&c.parentNode.removeChild(c)});return this};var Oa=/^\s*<(\w+)[^>]*>/,Pa=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,Qa={"*":ca,tr:da,td:ea,th:ea,thead:p,tbody:p,tfoot:p};function qa(a){if(!C(a))return[];if(Pa.test(a))return[n(RegExp.$1)];var b=Oa.test(a)&&RegExp.$1;b=Qa[b]||Qa["*"];b.innerHTML=a;return F(b.childNodes).detach().get()}F.parseHTML=qa;E.empty=function(){return this.each(function(a,b){for(;b.firstChild;)b.removeChild(b.firstChild)})};E.html=function(a){return arguments.length?void 0===a?this:this.each(function(b,c){x(c)&&(c.innerHTML=a)}):this[0]&&this[0].innerHTML};E.remove=function(a){M(this,a).detach().off();return this};E.text=function(a){return void 0===a?this[0]?this[0].textContent:"":this.each(function(b,c){x(c)&&(c.textContent=a)})};E.unwrap=function(){this.parent().each(function(a,b){"BODY"!==b.tagName&&(a=F(b),a.replaceWith(a.children()))});return this};E.offset=function(){var a=this[0];if(a)return a=a.getBoundingClientRect(),{top:a.top+m.pageYOffset,left:a.left+m.pageXOffset}};E.offsetParent=function(){return this.map(function(a,b){for(a=b.offsetParent;a&&"static"===Q(a,"position");)a=a.offsetParent;return a||ba})};E.position=function(){var a=this[0];if(a){var b="fixed"===Q(a,"position"),c=b?a.getBoundingClientRect():this.offset();if(!b){var d=a.ownerDocument;for(b=a.offsetParent||d.documentElement;(b===d.body||b===d.documentElement)&&"static"===Q(b,"position");)b=b.parentNode;b!==a&&x(b)&&(d=F(b).offset(),c.top-=d.top+R(b,"borderTopWidth"),c.left-=d.left+R(b,"borderLeftWidth"))}return{top:c.top-R(a,"marginTop"),left:c.left-R(a,"marginLeft")}}};E.children=function(a){return M(F(P(O(this,function(a){return a.children}))),a)};E.contents=function(){return F(P(O(this,function(a){return"IFRAME"===a.tagName?[a.contentDocument]:"TEMPLATE"===a.tagName?a.content.childNodes:a.childNodes})))};E.find=function(a){return F(P(O(this,function(b){return v(a,b)})))};var Ra=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Sa=/^$|^module$|\/(java|ecma)script/i,Ta=["type","src","nonce","noModule"];function Ua(a,b){a=F(a);a.filter("script").add(a.find("script")).each(function(a,d){if(Sa.test(d.type)&&ba.contains(d)){var c=n("script");c.text=d.textContent.replace(Ra,"");J(Ta,function(a,b){d[b]&&(c[b]=d[b])});b.head.insertBefore(c,null);b.head.removeChild(c)}})}function Z(a,b,c,d,h,f,g,y){J(a,function(a,f){J(F(f),function(a,f){J(F(b),function(b,g){var l=c?g:f;b=c?a:b;g=c?f:g;l=b?l.cloneNode(!0):l;b=!b;h?g.insertBefore(l,d?g.firstChild:null):g.parentNode.insertBefore(l,d?g:g.nextSibling);b&&Ua(l,g.ownerDocument)},y)},g)},f);return b}E.after=function(){return Z(arguments,this,!1,!1,!1,!0,!0)};E.append=function(){return Z(arguments,this,!1,!1,!0)};E.appendTo=function(a){return Z(arguments,this,!0,!1,!0)};E.before=function(){return Z(arguments,this,!1,!0)};E.insertAfter=function(a){return Z(arguments,this,!0,!1,!1,!1,!1,!0)};E.insertBefore=function(a){return Z(arguments,this,!0,!0)};E.prepend=function(){return Z(arguments,this,!1,!0,!0,!0,!0)};E.prependTo=function(a){return Z(arguments,this,!0,!0,!0,!1,!1,!0)};E.replaceWith=function(a){return this.before(a).remove()};E.replaceAll=function(a){F(a).replaceWith(this);return this};E.wrapAll=function(a){a=F(a);for(var b=a[0];b.children.length;)b=b.firstElementChild;this.first().before(a);return this.appendTo(b)};E.wrap=function(a){return this.each(function(b,c){var d=F(a)[0];F(c).wrapAll(b?d.cloneNode(!0):d)})};E.wrapInner=function(a){return this.each(function(b,c){b=F(c);c=b.contents();c.length?c.wrapAll(a):b.append(a)})};E.has=function(a){var b=C(a)?function(b,d){return v(a,d).length}:function(b,d){return d.contains(a)};return this.filter(b)};E.is=function(a){var b=L(a);return u.call(this,function(a,d){return b.call(a,d,a)})};E.next=function(a,b,c){return M(F(P(O(this,"nextElementSibling",b,c))),a)};E.nextAll=function(a){return this.next(a,!0)};E.nextUntil=function(a,b){return this.next(b,!0,a)};E.not=function(a){var b=L(a);return this.filter(function(c,d){return(!C(a)||x(d))&&!b.call(d,c,d)})};E.parent=function(a){return M(F(P(O(this,"parentNode"))),a)};E.index=function(a){var b=a?F(a)[0]:this[0];a=a?this:F(b).parent().children();return ha.call(a,b)};E.closest=function(a){var b=this.filter(a);if(b.length)return b;var c=this.parent();return c.length?c.closest(a):b};E.parents=function(a,b){return M(F(P(O(this,"parentElement",!0,b))),a)};E.parentsUntil=function(a,b){return this.parents(b,a)};E.prev=function(a,b,c){return M(F(P(O(this,"previousElementSibling",b,c))),a)};E.prevAll=function(a){return this.prev(a,!0)};E.prevUntil=function(a,b){return this.prev(b,!0,a)};E.siblings=function(a){return M(F(P(O(this,function(a){return F(a).parent().children().not(a)}))),a)};"undefined"!==typeof exports?module.exports=F:m.cash=m.$=F;})();
 
 var elementos_css ={};
 var blocos_posicao ={};
 var elementos_posicao ={};
 var elementos_popup ={};
 var elementos_botoes_evento ={};
 var pagina_controle ={
 'classe_bloco':'gpc-b',
 'classe_elemento':'gpc-e',
 'classe_elemento_antigo':'gpc-elemento',
 'classe_elemento_interno':'c',
 'classe_elemento_interno_antigo':'conteudo',
 'elementos_timer':{}
};
 var largura_tela, altura_tela, timeout_resize;
 
 function GreatResize(){
 let tamanho_tela = $(window).width();
 
 function iOS(){return ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) || (navigator.userAgent.includes("Mac") && "ontouchend" in document)}
 if(tamanho_tela <= 1200){
 let controle = 1200;
 if(tamanho_tela > 360 && tamanho_tela <= 800){
 $('.gpc-b').each(function(){if($(this).css('background-attachment') == 'fixed'){$(this).css('background-position','');}});
 if(iOS()){$('meta[name="viewport"]').attr('content','width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, shrink-to-fit=no');}
 else{$('body').css('zoom','');}
 return;
}else if(tamanho_tela <= 360){controle = 360;}
 let proporcao = (((tamanho_tela*100)/controle)).toFixed(5), novo_tamanho;
 novo_tamanho = (tamanho_tela-(tamanho_tela*(proporcao/100)));
 if(novo_tamanho != 0){
 $('.gpc-b').each(function(i,bloco){
 if($(bloco).css('background-attachment') == 'fixed'){
 if(iOS()){$(bloco).css('background-attachment','initial');}
 if($(bloco).position().top >= $(window).height()){$(bloco).css('background-position',$(bloco).css('background-position-x')+' 100%');}
 else{$(bloco).css('background-position',$(bloco).css('background-position-x')+' 0%');}
}
});
 if(iOS()){$('meta[name="viewport"]').attr('content','width='+novo_tamanho+', initial-scale='+(proporcao/100)+', maximum-scale='+(proporcao/100)+', minimum-scale='+(proporcao/100)+', user-scalable=no, shrink-to-fit=no');
}else{$('body').css({'zoom':proporcao+'%'});}
}else{
 if(iOS()){
 $('.gpc-b').each(function(i,bloco){
 if($(bloco).css('background-attachment') == 'fixed'){
 $(bloco).css('background-attachment','initial');
 if($(bloco).position().top >= $(window).height()){$(bloco).css('background-position',$(bloco).css('background-position-x')+' 100%');}
 else{$(bloco).css('background-position',$(bloco).css('background-position-x')+' 0%');}
}
});
}
}
}else{
 $('.gpc-b').each(function(i,bloco){if($(bloco).css('background-attachment') == 'fixed'){$(bloco).css('background-position','');}});
 if(iOS()){$('meta[name="viewport"]').attr('content','width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, shrink-to-fit=no');}
 else{$('body').css('zoom','');}
}
}
 GreatResize();
 $(function(){GreatResize();});
 window.addEventListener('resize', function(e){
 e.preventDefault();
 e.stopPropagation();
 if(timeout_resize){clearTimeout(timeout_resize);timeout_resize = null;}
 largura_tela = $(window).width();
 altura_tela = $(window).height();
 timeout_resize = setTimeout(function(){
 if($(window).width() == largura_tela && $(window).height() == altura_tela){GreatResize();}
},50);
},{passive:true});
 
 function GreatFontes(modal){
 if(modal == undefined){modal = false;}
 if((navigator.userAgent.match(/Android/i) && (navigator.userAgent.match(/Instagram/i) || navigator.userAgent.match(/FBAN/i) || navigator.userAgent.match(/FBAV/i))) || (navigator.userAgent.match(/iPhone/i) && $(window).width() < 360)){
 
 $((modal ? '.gm ':'')+'.gpc-e').each(function(){
 
 var elemento = $(this);
 var elemento_id = elemento.attr('id');
 
 if (elementos_css.hasOwnProperty(elemento_id)){
 
 var elemento_conteudo = (elemento.hasClass('e_formulario') ? elemento.find('.gpc_botao') :elemento.children('.c'));
 var fs_aumento = fs_novo = 0;
 
 if (parseFloat(elemento_conteudo.css('font-size')) != elementos_css[elemento_id]['fs']){
 
 fs_aumento = (elementos_css[elemento_id]['fs']*100)/parseFloat(elemento_conteudo.css('font-size'));
 fs_novo = elementos_css[elemento_id]['fs']-((100-fs_aumento)*(elementos_css[elemento_id]['fs']/100));
 
 elemento_conteudo.css('font-size',fs_novo+'px');
 elemento_conteudo.children().each(function(){$(this).css('font-size',fs_novo+'px');});
 
 if (elementos_css[elemento_id]['lh']){
 
 elemento_conteudo.css('line-height',elementos_css[elemento_id]['lh']);
 elemento_conteudo.children().each(function(){$(this).css('line-height',elementos_css[elemento_id]['lh']);});
}
 
 if (elemento.hasClass('e_timer')){
 
 if (parseFloat(elemento_conteudo.css('font-size')) != elementos_css[elemento_id]['fs']){
 elemento_conteudo.find('.contador_titulos').css('line-height','1');
 elemento_conteudo.find('.contador_itens').children('span').css('line-height','1.2');
}
}else if (elemento.hasClass('e_formulario')){
 
 var fs_aumento_form = fs_novo_form = 0;
 fs_aumento_form = (14*100)/parseFloat(elemento_conteudo.find('.gpc_campos-titulo').css('font-size'));
 fs_novo_form = 14-((100-fs_aumento_form)*(14/100));
 elemento_conteudo.find('.gpc_campos-titulo').css({'font-size':fs_novo_form+'px', 'line-height':'1.4'});
 
 fs_aumento_form = (12*100)/parseFloat(elemento_conteudo.find('.gpc_campos-texto').css('font-size'));
 fs_novo_form = 12-((100-fs_aumento_form)*(12/100));
 elemento_conteudo.find('.gpc_campos-texto').css({'font-size':fs_novo_form+'px', 'line-height':'1.4'});
 
 elemento_conteudo.find('.gpc_botao').css({'font-size':fs_novo+'px', 'line-height':elementos_css[elemento_id]['lh']});
}
}
}
});
}
}
 $(function(){
 
 GreatFontes();
});
 
 
 $(function(){GreatLoader('iniciar');});
 
 var gle_fontes ={}, gle_css ={}, gle_scripts ={};
 
 function GreatLoader(acao){
 
 
 gle_fontes['elementos'] = $('.gle_fontes');
 gle_fontes['encontrados'] = gle_fontes['elementos'].length;
 gle_fontes['carregados'] = 0;
 
 if (gle_fontes['encontrados'] != 0){
 if(!window.getCrawler()){
 InserirFontes(acao);
 setTimeout(function(){CarregarFontes();},4500);
}else{CarregarFontes();}
}else{CarregarFontes();}
 
 setTimeout(function(){
 
 gle_scripts['elementos'] = $('.gle_scripts');
 gle_scripts['encontrados'] = gle_scripts['elementos'].length;
 gle_scripts['carregados'] = 0;
 
 if (gle_scripts['encontrados'] != 0){
 InserirScripts(acao);
}else{if (acao == 'iniciar'){if (window.InserirScriptsInline != undefined){InserirScriptsInline();}}}
},20);
 
 setTimeout(function(){
 
 gle_css = $('.gle_css');
 
 InserirCss(acao);
},30);
 
 setTimeout(function(){
 GObserver.instalar({
 'elemento' :'.e_animacoes',
 'antecipacao' :0,
 'executar' :function(elemento){
 (function(elemento){
 var elemento_carregando = setInterval(function(){
 if (!$(elemento).hasClass('se_imagem') && !$(elemento).hasClass('se_video') && !$(elemento).hasClass('se_caixa') && !$(elemento).find('.c').hasClass('se_fonte') && !$(elemento).hasClass('se_slider')){
 
 clearInterval(elemento_carregando);
 
 var elemento_id = $(elemento).attr('id').replace('_d', '').replace('_m', '');
 var elemento_informacoes = ($(elemento).hasClass('e_video') && $(elemento).find('.carregando').length ? $(elemento).find('.carregando') :$(elemento).find('.c'));
 var animacao_nome = $(elemento_informacoes).attr('data-animation-nome');
 var animacao_duration = ($(elemento_informacoes).attr('data-animation-duration') ? $(elemento_informacoes).attr('data-animation-duration')+'ms' :'1000ms');
 var animacao_delay = ($(elemento_informacoes).attr('data-animation-delay') ? $(elemento_informacoes).attr('data-animation-delay')+'ms' :'0ms');
 var animacao_repeat = ($(elemento_informacoes).attr('data-animation-repeat') == 'loop' ? 'infinite' :'');
 
 if (animacao_nome == 'slide' || animacao_nome == 'zoom' || animacao_nome == 'flip'){var animacao_tipo = 'cubic-bezier(.25,.46,.45,.94)';}
 else if (animacao_nome == 'fade'){var animacao_tipo = 'cubic-bezier(0.390, 0.575, 0.565, 1.000)';}
 else if (animacao_nome == 'roll'){var animacao_tipo = 'ease-out';}
 else if (animacao_nome == 'fold'){var animacao_tipo = 'cubic-bezier(.175,.885,.32,1.275)';}
 else{var animacao_tipo = '';}
 
 $(elemento).removeClass('e_animacoes');
 if(!window.getCrawler()){
 if($(elemento).hasClass('e_faq')){
 var itens = $(elemento).find('.gac-item');
 for (var i = 0;i < itens.length;i++){
 $(itens[i]).css({
 'animation':elemento_id+'_animacao '+animacao_duration+' '+animacao_tipo+' '+(parseInt(animacao_delay)+(500*i))+'ms '+animacao_repeat+' both',
 '-webkit-animation':elemento_id+'_animacao '+animacao_duration+' '+animacao_tipo+' '+(parseInt(animacao_delay)+(500*i))+'ms '+animacao_repeat+' both',
 'transform':'translate3d(0,0,0)',
 '-webkit-transform':'translate3d(0,0,0)',
 'perspective':'500px'});
 }
}else{
 $(elemento).find('.c').css({
 'animation':elemento_id+'_animacao '+animacao_duration+' '+animacao_tipo+' '+animacao_delay+' '+animacao_repeat+' both',
 '-webkit-animation':elemento_id+'_animacao '+animacao_duration+' '+animacao_tipo+' '+animacao_delay+' '+animacao_repeat+' both',
 'transform':'translate3d(0,0,0)',
 '-webkit-transform':'translate3d(0,0,0)',
 'perspective':'500px'});
}
}
 
 $(elemento_informacoes).removeAttr('data-animation-nome data-animation-duration data-animation-delay data-animation-repeat');
 }
}, 50);
})(elemento);
}
});
},30);
 
 setTimeout(function(){
 GObserver.instalar({
 'elemento' :'.se_imagem',
 'antecipacao' :600,
 'executar' :function(elemento){
 
 if (window.innerWidth <= 800){var dispositivo = 'mobile';}else if (window.innerWidth > 800){var dispositivo = 'desktop';}
 
 var imagem_download = new Image();
 imagem_download.src = ((dispositivo == 'mobile' && elemento.getAttribute('ll_src_mobile')) ? elemento.getAttribute('ll_src_mobile') :elemento.getAttribute('ll_src'));
 imagem_download.onload = function(e){
 
 let img_mobile = elemento.getAttribute('ll_src_mobile'), img_desktop = elemento.getAttribute('ll_src'), html = '<div class="imagem_fundo"></div>';
 elemento.removeAttribute('ll_src');
 elemento.removeAttribute('ll_src_mobile');
 elemento.querySelector('.'+pagina_controle['classe_elemento_interno']).removeAttribute('gpc_nome_imagem');
 elemento.classList.remove('se_imagem');
 elemento.children[0].innerHTML = html;
}
}
});
},40);
 
 setTimeout(function(){
 GObserver.instalar({
 'elemento' :'.se_caixa',
 'antecipacao' :500,
 'executar' :function(elemento){
 
 if (window.innerWidth <= 800){var dispositivo = 'mobile';}else if (window.innerWidth > 800){var dispositivo = 'desktop';}
 
 var elemento_carregando_src = '';
 if (dispositivo == 'mobile' && elemento.getAttribute('ll_src_mobile')){elemento_carregando_src = elemento.getAttribute('ll_src_mobile');}
 else if (dispositivo == 'desktop' && elemento.getAttribute('ll_src')){elemento_carregando_src = elemento.getAttribute('ll_src');}
 if (elemento_carregando_src){
 
 var imagem_download = new Image();
 imagem_download.src = elemento_carregando_src;
 imagem_download.onload = function(e){
 
 elemento.removeAttribute('ll_src');
 elemento.removeAttribute('ll_src_mobile');
 elemento.classList.remove('se_caixa');
}
}
}
});
},40);
 
 setTimeout(function(){
 GObserver.instalar({
 'elemento' :'.se_slider',
 'antecipacao' :500,
 'executar' :function(elemento){
 
 if (window.innerWidth <= 800){var dispositivo = 'mobile';}
 else if (window.innerWidth > 800){var dispositivo = 'desktop';}
 
 var imagens = $(elemento).find('.imagem');
 if(imagens.length){
 imagens.each(function(i,imagem){
 var elemento_carregando_src = '';
 if (dispositivo == 'mobile' && imagem.getAttribute('ll_src_mobile')){elemento_carregando_src = imagem.getAttribute('ll_src_mobile');}
 else if (dispositivo == 'desktop' && imagem.getAttribute('ll_src')){elemento_carregando_src = imagem.getAttribute('ll_src');}
 if (elemento_carregando_src){
 
 var imagem_download = new Image();
 imagem_download.src = elemento_carregando_src;
 imagem_download.onload = function(e){
 
 imagem.removeAttribute('ll_src');
 imagem.removeAttribute('ll_src_mobile');
 imagem.closest('.'+pagina_controle['classe_elemento']).classList.remove('se_slider');
 if(imagem.classList.contains('gsi_clone')){imagem.style.backgroundImage = 'url('+elemento_carregando_src+')';}
}
 }
});
}
}
});
},400);
 
 setTimeout(function(){
 GObserver.instalar({
 'elemento' :'.ll_background',
 'antecipacao' :500,
 'executar' :function(elemento){
 
 if (window.innerWidth <= 800){var dispositivo = 'mobile';}
 else if (window.innerWidth > 800){var dispositivo = 'desktop';}
 
 var elemento_carregando_src = '';
 if (dispositivo == 'mobile' && elemento.getAttribute('ll_src_mobile')){elemento_carregando_src = elemento.getAttribute('ll_src_mobile');}
 else if (dispositivo == 'desktop' && elemento.getAttribute('ll_src')){elemento_carregando_src = elemento.getAttribute('ll_src');}
 if (elemento_carregando_src){
 
 var background_download = new Image();
 background_download.src = elemento_carregando_src;
 background_download.onload = function(e){
 
 elemento.removeAttribute('ll_src');
 elemento.removeAttribute('ll_src_mobile');
 elemento.classList.remove('ll_background');
}
}else{
 
 elemento.removeAttribute('ll_src');
 elemento.removeAttribute('ll_src_mobile');
 elemento.classList.remove('ll_background');
}
}
});
},50);
 
 if(!window.getCrawler()){
 setTimeout(function(){
 GObserver.instalar({
 'elemento' :'.se_video',
 'antecipacao' :0,
 'executar' :function(elemento){
 
 if(document.getElementById(elemento.getAttribute('id')).getElementsByTagName('iframe').length == 0){
 
 var animacao_nome = (elemento.querySelector('.carregando').getAttribute('data-animation-nome') ? elemento.querySelector('.carregando').getAttribute('data-animation-nome') :'none');
 var animacao_duration = (elemento.querySelector('.carregando').getAttribute('data-animation-duration') ? elemento.querySelector('.carregando').getAttribute('data-animation-duration') :1000);
 var animacao_delay = (elemento.querySelector('.carregando').getAttribute('data-animation-delay') ? elemento.querySelector('.carregando').getAttribute('data-animation-delay') :0);
 var animacao_repeat = (elemento.querySelector('.carregando').getAttribute('data-animation-repeat') == 'loop' ? 'infinite' :'show');
 
 var video_download = document.createElement("iframe");
 video_download.setAttribute('src', elemento.getAttribute('ll_src'));
 video_download.setAttribute('frameborder', 0);
 video_download.setAttribute('allowfullscreen', '');
 video_download.setAttribute('mozallowfullscreen', '');
 video_download.setAttribute('webkitallowfullscreen', '');
 video_download.setAttribute('allow', 'accelerometer;autoplay;picture-in-picture');
 video_download.setAttribute('class', 'c e_video');
 video_download.setAttribute('data-animation-nome', animacao_nome);
 video_download.setAttribute('data-animation-duration', animacao_duration);
 video_download.setAttribute('data-animation-delay', animacao_delay);
 video_download.setAttribute('data-animation-repeat', animacao_repeat);
 video_download.onload = function(){
 if(document.getElementById(elemento.getAttribute('id')).querySelector('.carregando')){
 document.getElementById(elemento.getAttribute('id')).querySelector('.carregando').remove();
}
 elemento.removeAttribute('ll_src');
 elemento.classList.remove('se_video');
 };
 video_download.onreadystatechange = function(){
 if(document.getElementById(elemento.getAttribute('id')).querySelector('.carregando')){
 document.getElementById(elemento.getAttribute('id')).querySelector('.carregando').remove();
}
 if (this.readyState == 'complete'){
 elemento.removeAttribute('ll_src');
 elemento.classList.remove('se_video');
}
 };
 
 document.getElementById(elemento.getAttribute('id')).appendChild(video_download);
}
}
});
},400);
}
}
 
 function InserirFontes(acao){
 if (gle_fontes['elementos'].length){
 for(var i = 0;i < gle_fontes['elementos'].length;i++){
 
 (function(index){
 
 var elemento = $(gle_fontes['elementos'][index]);
 
 gle_fontes['elementos'].splice(index, 1);
 
 var fonte = document.createElement('link');
 fonte.href = elemento.attr('gle_href');
 fonte.rel = 'stylesheet';
 fonte.media = 'all';
 fonte.onload = function(){
 
 elemento.remove();
 
 gle_fontes['carregados']++;
 
 CarregarFontes();
 
 InserirFontes(acao);
};
 fonte.onerror = function(){
 
 elemento.remove();
 
 gle_fontes['carregados']++;
 
 CarregarFontes();
 
 InserirFontes(acao);
};
 fonte.onreadystatechange = function(){if (this.readyState == 'complete'){
 
 elemento.remove();
 
 gle_fontes['carregados']++;
 
 CarregarFontes();
 
 InserirFontes(acao);
}};
 document.head.appendChild(fonte);
})(i, acao);
 
 break;
}
}
}
 function CarregarFontes(){
 var fontes_carregar = $('.se_fonte, .se_contador');
 if (fontes_carregar.length){
 for(var i = 0;i < fontes_carregar.length;i++){
 
 if ($(fontes_carregar[i]).hasClass('se_fonte')){$(fontes_carregar[i]).removeClass('se_fonte');}
 else{$(fontes_carregar[i]).removeClass('se_contador');}
}
}
}
 
 function InserirCss(acao){
 if (gle_css.length){
 for(var i = 0;i < gle_css.length;i++){
 
 (function(index){
 
 var elemento = $(gle_css[index]);
 
 gle_css.splice(index, 1);
 
 var fonte = document.createElement('link');
 
 for (var x = 0;x < elemento[0].attributes.length;x++){
 if(elemento[0].attributes[x].nodeName != 'rel'){fonte.setAttribute(elemento[0].attributes[x].nodeName.replace('gle_',''),elemento[0].attributes[x].nodeValue.replace('gle_css',''));}
}
 
 fonte.onload = function(){
 
 elemento.remove();
 
 InserirCss(acao);
};
 fonte.onerror = function(){
 
 elemento.remove();
 
 InserirCss(acao);
};
 fonte.onreadystatechange = function(){if (this.readyState == 'complete'){
 
 elemento.remove();
 
 InserirCss(acao);
}};
 document.body.appendChild(fonte);
})(i, acao);
 
 break;
}
}
}
 
 function InserirScripts(acao){
 if (gle_scripts['elementos'].length){
 for(var i = 0;i < gle_scripts['elementos'].length;i++){
 
 (function(index){
 
 var elemento = $(gle_scripts['elementos'][index]);
 if((elemento.attr('href').indexOf('gtag') || elemento.attr('href').indexOf('fbevents')) && window.getCrawler()){
 
 elemento.remove();
 
 InserirScripts(acao);
 
 return;
}
 
 gle_scripts['elementos'].splice(index, 1);
 
 var script = document.createElement('script');
 
 for (var x = 0;x < elemento[0].attributes.length;x++){
 let valor = elemento[0].attributes[x].nodeValue;
 if(elemento[0].attributes[x].nodeName != 'href'){
 valor = valor.replace(/dns-prefetch\s+?/gm,'');
 valor = valor.replace(/\s+?dns-prefetch/gm,'');
 valor = valor.replace(/preconnect\s+?/gm,'');
 valor = valor.replace(/\s+?preconnect/gm,'');
 valor = valor.replace('dns-prefetch','');
 valor = valor.replace('preconnect','');
 valor = valor.replace('gle_scripts','');
 if(elemento[0].attributes[x].nodeName != 'async'){script.setAttribute(elemento[0].attributes[x].nodeName,valor);}
}
}
 script.src = elemento.attr('href');
 script.type = 'text/javascript';
 script.defer = true;
 script.onload = function(){
 
 elemento.remove();
 
 gle_scripts['carregados']++;
 
 if (gle_scripts['encontrados'] == gle_scripts['carregados'] && acao == 'iniciar'){
 if (window.InserirScriptsInline != undefined){InserirScriptsInline();}
}
 
 InserirScripts(acao);
};
 script.onerror = function(){
 
 elemento.remove();
 
 gle_scripts['carregados']++;
 
 if (gle_scripts['encontrados'] == gle_scripts['carregados'] && acao == 'iniciar'){
 if (window.InserirScriptsInline != undefined){InserirScriptsInline();}
}
 
 InserirScripts(acao);
};
 script.onreadystatechange = function(){if (this.readyState == 'complete'){
 
 elemento.remove();
 
 gle_scripts['carregados']++;
 
 if (gle_scripts['encontrados'] == gle_scripts['carregados'] && acao == 'iniciar'){
 if (window.InserirScriptsInline != undefined){InserirScriptsInline();}
}
 
 InserirScripts(acao);
}};
 document.body.appendChild(script);
})(i, acao);
 
 break;
}
}
}
 
 
 setTimeout(function(){
 GAccordion.instalar();
},600);
 
 
 function bindEvents(){
 var caixa = $('gmf').last().attr('id');
 if(caixa != undefined){caixa = '#'+caixa+' ';}else{caixa = '';}
 
 GFM.instalar({'elemento' :'.telefone', 'mascara' :'(00) 0000-00009', 'placeholder' :'(__) ____-_____'});
 GFM.instalar({'elemento' :'#celular', 'mascara' :'(00) 0000-00009', 'placeholder' :'(__) ____-_____'});
 GFM.instalar({'elemento' :'input.cnpj', 'mascara' :'00.000.000/0000-00', 'placeholder' :'__.___.___/____-__'});
 GFM.instalar({'elemento' :'input.cpf', 'mascara' :'000.000.000-00', 'placeholder' :'___.___.___-__'});
 GFM.instalar({'elemento' :'input.hora', 'mascara' :'00:00', 'placeholder' :'__:__'});
 GFM.instalar({'elemento' :'input.data', 'mascara' :'00/00/0000', 'placeholder' :'__/__/____'});
 GFM.instalar({'elemento' :'input.datahora', 'mascara' :'00/00/0000 00:00', 'placeholder' :'__/__/____ __:__'});
 
 GTooltip.instalar({'elemento' :'.gtt-direita', 'direcao' :'direita'});
 GTooltip.instalar({'elemento' :'.gtt-esquerda', 'direcao' :'esquerda'});
 GTooltip.instalar({'elemento' :'.gtt-cima', 'direcao' :'cima'});
 GTooltip.instalar({'elemento' :'.gtt-baixo', 'direcao' :'baixo'});
 GTooltip.instalar({'elemento' :'.balao_direita', 'direcao' :'direita'});
 GTooltip.instalar({'elemento' :'.balao_esquerda', 'direcao' :'esquerda'});
 GTooltip.instalar({'elemento' :'.balao_cima', 'direcao' :'cima'});
 GTooltip.instalar({'elemento' :'.balao_baixo', 'direcao' :'baixo'});
}
 function Mobile(){
 if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ){return true;}
 return false;
}
 window.smoothScrollTo = function (endX, endY, duration){
 let startX = window.scrollX || window.pageXOffset,
 startY = window.scrollY || window.pageYOffset,
 distanceX = endX - startX,
 distanceY = endY - startY,
 startTime = new Date().getTime();
 let easeInOutQuart = function (time, from, distance, duration){
 if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
 return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
};
 let timer = window.setInterval(function (){
 let time = new Date().getTime() - startTime,
 newX = easeInOutQuart(time, startX, distanceX, duration),
 newY = easeInOutQuart(time, startY, distanceY, duration);
 if (time >= duration){
 window.clearInterval(timer);
}
 window.scrollTo(newX, newY);
}, 1000 / 60);
};
 $(function(){
 
 GLoading.carregar({'ativar':false});
 
 $('body').removeClass('preload');
 
 bindEvents();
 
 $('.mensagem_fechar').on('click',function(evento){$('.mensagens').removeAttr('style');});
 
 $(document).on('keydown', function(e){
 var tecla = (e.keyCode?e.keyCode:e.which);
 if($('.gm').length){
 var caixa = $('.gm').last().attr('id');
 var caixa_andamento = $('#'+caixa).find('.gmf-andamento');
 if((e.ctrlKey && tecla == 83)){
 e.preventDefault();
 e.stopPropagation();
 if (caixa_andamento.length){
 if (caixa_andamento.attr('caixa_passos_controle') == (caixa_andamento.attr('caixa_passos_quantidade')-1)){$('#'+caixa+' #enviar_formulario_ajax').trigger('click');}
 else{PassosGMF(caixa, 'proximo');}
}else{$('#'+caixa+' #enviar_formulario_ajax').trigger('click');}
 return false;
}else if(tecla == 27){
 e.preventDefault();
 e.stopPropagation();
 if ($('#'+caixa).attr('gm_componente') == 'gsp'){FecharGSP(caixa);}
 else if($('#'+caixa).attr('gm_componente') == 'gmf'){$('#'+caixa+' .gmf-topo-fechar').click();}
 else if($('#'+caixa).attr('gm_componente') == 'guo' || $('#'+caixa).attr('gm_componente') == 'gd'){PulsarGM($('#'+caixa).attr('id'));}
 else if ($('#'+caixa).attr('gm_componente') == 'gmi'){
 
 gmi_caixa['elemento'] = '';
 gmi_caixa_imagem['elemento'] = '';
 gmi_fundo['elemento'] = '';
 
 FecharGM(caixa);
}else{FecharGM(caixa);}
 return false;
}
}else{
 if((e.ctrlKey && tecla == 83)){
 e.preventDefault();
 e.stopPropagation();
 if($('#editar_formulario').length){$('#editar_formulario').trigger('click');}
 else if($('#enviar_formulario').length){$('#enviar_formulario').trigger('click');}
 else if($('.admin_botao-login').length){$('.admin_botao-login').trigger('click');}
 else if($('.admin_botao-esqueci_minha_senha').length){$('.admin_botao-esqueci_minha_senha').trigger('click');}
 return false;
}
}
 if((e.ctrlKey && tecla == 85) || tecla == 123){
 e.preventDefault();
 e.stopPropagation();
 return false;
}
});
 
 $('body').on('click','.botao_evento',function(e){
 
 e.preventDefault();
 e.stopPropagation();
 elementos_botoes_evento[$(this).parent().attr('id')]['conteudo']();
 // if($(this).hasClass('link_externo')){Links($(this),'externo');}
 // else if($(this).hasClass('link_interno')){Links($(this),'interno');}
 // else if($(this).hasClass('link_popup')){Links($(this),'popup');}
 return false;
});
 
 $('body').on('click','.link_popup',function(e){
 e.preventDefault();
 e.stopPropagation();
 if($(this).closest('.'+pagina_controle['classe_elemento'])){var elemento = $(this).closest('.'+pagina_controle['classe_elemento']);}
 else{var elemento = $(this).closest('.'+pagina_controle['classe_elemento_antigo']);}
 Links(elemento,'popup');
 
 return false;
});
 $('body').on('click','.gpc_modal_popup-topo-fechar, .gpc_modal_popup-fundo-fechar',function(e){FecharGM($('.gpc_modal').last().attr('id'));});
 
 $('body').on('click','.link_interno',function(e){
 e.preventDefault();
 e.stopPropagation();
 if($(this).closest('.'+pagina_controle['classe_elemento'])){var elemento = $(this).closest('.'+pagina_controle['classe_elemento']);}
 else{var elemento = $(this).closest('.'+pagina_controle['classe_elemento_antigo']);}
 Links($(this),'interno');
 return false;
});
 
 $('body').on('click','.link_externo',function(e){
 e.preventDefault();
 e.stopPropagation();
 if($(this).closest('.'+pagina_controle['classe_elemento'])){var elemento = $(this).closest('.'+pagina_controle['classe_elemento']);}
 else{var elemento = $(this).closest('.'+pagina_controle['classe_elemento_antigo']);}
 Links($(this),'externo');
 return false;
});
 
 function Links(botao,tipo){
 if(tipo == undefined){tipo = '';}
 if(tipo == 'externo'){
 setTimeout(function(){
 var link = $(botao).attr('href');
 if(link.indexOf('https://') == -1 && link.indexOf('http://') == -1 && link.indexOf('tel:') == -1 && link.indexOf('mailto:') == -1 && link.indexOf('sms:') == -1 && link){link = 'https://'+link;}
 if($(botao).attr('target') != undefined && $(botao).attr('target') == '_blank'){var tab = window.open(link,'_blank');}
 else{var tab = window.open(link,'_self');}
 tab = null;
},200);
}else if(tipo == 'interno'){
 var link = $(botao);
 if(link.attr('data-bloco-mobile') !== undefined && $(window).width() < 720){
 var bloco = link.attr('data-bloco-mobile');
 if(!$((bloco.substr(0,1) == '#' ? bloco :'#'+bloco)).length){bloco = link.attr('data-bloco');}
}else{var bloco = link.attr('data-bloco');}
 if(bloco != undefined){
 if($((bloco.substr(0,1) == '#' ? bloco :'#'+bloco)).length){
 var offset = $((bloco.substr(0,1) == '#' ? bloco :'#'+bloco)).offset();
 if ('scrollBehavior' in document.documentElement.style){window.scroll({top:(offset.top-60), behavior:"smooth"});}
 else{smoothScrollTo(0, (offset.top-60), 800);}
}
}
}else if(tipo == 'popup'){
 var elemento = $(botao);
 
 var conteudo = elementos_popup[elemento.attr('id')]['conteudo'];
 if(conteudo == undefined || conteudo == ''){conteudo = '<div></div>';}
 
 gm_quantidade++;
 
 var configuracao ={
 'gm' :{
 'conteudos' :{
 'topo' :{
 'conteudo' :"<div class='gpc_modal_popup-topo-fechar icone-fechar'></div>",
 'estilos' :'',
 'extras' :''
 },
 'centro' :{
 'conteudo' :conteudo,
 'estilos' :'',
 'extras' :''
 },
 'rodape' :{
 'conteudo' :'<div></div>',
 'estilos' :'',
 'extras' :''
 }
},
 'classes' :'gpc_modal',
 'estilos' :elementos_popup[elemento.attr('id')]['estilos'][($(window).width() > 960 ? 'desktop' :'mobile')],
 'extras' :'gpc_id_elemento="'+elemento.attr('id')+'"'
},
 'gm_fundo' :{
 'conteudos' :{'topo' :{'conteudo' :"<div class='gpc_modal_popup-fundo-fechar icone-fechar'></div>"}},
 'classes' :'gpc_modal-fundo',
 'estilos' :'overflow:hidden;',
 'extras' :'gm_fundo_acao="fechar"'
}
};
 
 AbrirGM('gpc_modal_'+gm_quantidade, 'gpc_modal_popup',configuracao);
 
 setTimeout(function(){
 GSlideImage.iniciar();GAccordion.instalar();GreatLoader('atualizar');
 GreatFontes(true);
 bindEvents();
},400);
}
}
});
 
 'use strict';

var gac_timeout ={}, gac_timeout_resize;
var GAccordion = function (){
 return{
 instalar:function (id){
 let instancias;
 if (id != undefined){instancias = document.querySelectorAll('#' + id + ' .gac');}
 else{instancias = document.querySelectorAll('.gac');}
 if (instancias){
 for (var i = 0;i < instancias.length;i++){
 id = instancias[i].closest('.gpc-e, .gpc-blocos_bloco_elemento').getAttribute('id');
 let ja_iniciado = false, abrir_primeiro = false;
 if (instancias[i].getAttribute('gac-abrir_primeiro') == 'true'){abrir_primeiro = true;}
 let itens = instancias[i].querySelectorAll('.gac-item_cabecalho');
 if (instancias[i].parentElement.classList.contains('gpc-e')){
 ja_iniciado = instancias[i].classList.contains('gac-ativo');
 instancias[i].classList.add('gac-ativo');
}
 if (itens){
 if (!ja_iniciado){
 for (var x = 0;x < itens.length;x++){
 let atual = itens[x];
 if (document.getElementById(id).classList.contains('gpc-e')){itens[x].addEventListener('click', function (){GAccordion.abrir(atual.closest('.gpc-e').getAttribute('id'), atual);}, false);}
 else{
 atual.closest('.gac-item').classList.remove('gac-aberto');
 let conteudo = atual.closest('.gac-item').querySelector('.gac-item_conteudo');
 conteudo.style.height = '';
 if (atual.closest('.gpc-blocos_bloco_elemento')){
 atual.style.color = atual.closest('.gac').getAttribute('data-color');
 atual.style.backgroundColor = atual.closest('.gac').getAttribute('data-background-color');
}
}
}
}
 if (instancias[i].closest('.gpc-e')){
 let visivel = getComputedStyle(instancias[i].closest('.gpc-e'));
 if (abrir_primeiro && visivel.visibility === 'visible' && visivel.display === 'block'){
 GAccordion.abrir(itens[0].closest('.gpc-e').getAttribute('id'), itens[0], true);
}
}
}
}
}
}, abrir:function (id, item, primeiro){
 if (primeiro == undefined){primeiro = false;}
 let instancia = document.querySelector("#" + id);
 if (instancia){
 if (item.closest('.gac-item').classList.contains('gac-aberto') && !primeiro){GAccordion.fechar(id, item);}
 else{
 let versao = 'desktop';
 if (window.innerWidth < 800){versao = 'mobile';}
 let item_ativo_altura = instancia.querySelector('.gac-aberto');
 if(item_ativo_altura){item_ativo_altura = item_ativo_altura.querySelector('.gac-item_conteudo').offsetHeight;}
 else{item_ativo_altura = 0;}
 let abertos = document.querySelectorAll('.gac-aberto');
 if (abertos && !primeiro){
 for (var i = 0;i < abertos.length;i++){
 if (abertos[i].closest('.gpc-e')){
 if (abertos[i].closest('.gpc-b')){
 if (abertos[i].closest('.gpc-b').getAttribute('id') == abertos[i].closest('.gpc-b').getAttribute('id')){GAccordion.fechar(abertos[i].closest('.gpc-e').getAttribute('id'), abertos[i],true);}
}else if (abertos[i].closest('.gpc_modal')){
 GAccordion.fechar(abertos[i].closest('.gpc-e').getAttribute('id'), abertos[i])
}
}
}
}
 item.closest('.gac-item').classList.add('gac-aberto');
 let conteudo = item.closest('.gac-item').querySelector('.gac-item_conteudo');
 let tamanho_conteudo = conteudo.scrollHeight;
 conteudo.style.height = tamanho_conteudo + 'px';
 if (instancia.closest('.gpc-blocos_bloco_elemento')){
 let itens = instancia.querySelectorAll('.gac-item_cabecalho');
 for (var x = 1;x < itens.length;x++){
 itens[x].closest('.gac-item').classList.remove('gac-aberto');
 itens[x].closest('.gac-item').querySelector('.gac-item_cabecalho').style.color = itens[0].closest('.conteudo').getAttribute('data-color');
 itens[x].closest('.gac-item').querySelector('.gac-item_cabecalho').style.backgroundColor = itens[0].closest('.conteudo').getAttribute('data-background-color');
 itens[x].closest('.gac-item').querySelector('.gac-item_conteudo').style.height = '';
}
 itens[0].closest('.gac-item').querySelector('.gac-item_cabecalho').style.color = itens[0].closest('.conteudo').getAttribute('data-color-hover');
 itens[0].closest('.gac-item').querySelector('.gac-item_cabecalho').style.backgroundColor = itens[0].closest('.conteudo').getAttribute('data-background-color-hover');
 itens[0].closest('.gac-item').querySelector('.gac-item_conteudo').style.color = itens[0].closest('.conteudo').getAttribute('data-color-texto');
 itens[0].closest('.gac-item').querySelector('.gac-item_conteudo').style.backgroundColor = itens[0].closest('.conteudo').getAttribute('data-background-color-hover');
}
 if ((instancia.closest('.gpc-b') || instancia.closest('.gpc_modal')) && !document.querySelectorAll('#admin_centro').length){
 let elemento = instancia.closest('.gpc-e');
 let rotacao = GAccordion.rotacao(getComputedStyle(elemento)['transform']);
 let dif = GAccordion.calcularAjuste(rotacao, tamanho_conteudo);
 elemento.style.transform = `translate(${dif.deltaX}px, ${dif.deltaY}px) rotate(${rotacao}deg)`;
 if(rotacao != 0){conteudo.style.transition = 'none';}
 else{conteudo.style.transition = '';}
 tamanho_conteudo = tamanho_conteudo + dif.deltaY;
 if (rotacao == 90 || rotacao == 270){tamanho_conteudo = 0;}
 let id_bloco = (instancia.closest('.gpc-b') ? instancia.closest('.gpc-b').getAttribute('id') :instancia.closest('.gpc_modal').getAttribute('gpc_id_elemento'));
 let elementos = instancia.closest('.centralizar, .gpc_modal').querySelectorAll('.gpc-e');
 if (elementos){
 let total_elementos = elementos.length;
 for (var i = 0;i < total_elementos;i++){
 if (elementos[i].getAttribute('id') != item.closest('.gpc-e').getAttribute('id')){
 elementos[i].classList.add('gac-movendo');
 if (parseFloat(elementos_posicao[elementos[i].getAttribute('id')][versao]) >= (item.closest('.gpc-e').offsetTop + item.closest('.gpc-e').offsetHeight - item_ativo_altura) && elementos[i].getAttribute('id') != item.closest('.gpc-e').getAttribute('id') && elementos[i].offsetParent){elementos[i].style.top = (elementos_posicao[elementos[i].getAttribute('id')][versao] + tamanho_conteudo) + 'px';}
 else if (elementos[i].offsetParent == null){elementos[i].style.top = '';}
}
}
}
 instancia.closest('.gpc-b, .gpc_modal').classList.add('gac-movendo');
 instancia.closest('.gpc-b, .gpc_modal').style.setProperty('height', (blocos_posicao[id_bloco][versao] + tamanho_conteudo) + 'px', 'important');
 if (instancia.closest('.gpc_modal')){PosicionarGM(instancia.closest('.gpc_modal').getAttribute('id'), false);}
}else{
 let elemento = instancia.closest('.gpc-blocos_bloco_elemento');
 let rotacao = GAccordion.rotacao(getComputedStyle(elemento)['transform']);
 let dif = GAccordion.calcularAjuste(rotacao, tamanho_conteudo);
 tamanho_conteudo = tamanho_conteudo + dif.deltaY;
 if(rotacao != 0){conteudo.style.transition = 'none';}
 else{conteudo.style.transition = '';}
 elemento.style.transform = `translate(${dif.deltaX}px, ${dif.deltaY}px) rotate(${rotacao}deg)`;
 
 let elementos, bloco;
 if (instancia.closest('.gpc_modal')){
 elementos = instancia.closest('.gpc_modal').querySelectorAll('.gpc-blocos_bloco_elemento');
 bloco = instancia.closest('.gpc_modal');
}else{
 elementos = instancia.closest('.gpc-blocos_bloco_interno').querySelectorAll('.gpc-blocos_bloco_elemento');
 bloco = instancia.closest('.gpc-blocos_bloco_interno');
}
 if (elementos){
 let total_elementos = elementos.length;
 for (var i = 0;i < total_elementos;i++){
 if (elementos[i].getAttribute('id') != item.closest('.gpc-blocos_bloco_elemento').getAttribute('id')){
 elementos[i].classList.add('gac-movendo');
 if (
 parseFloat(elementos[i].offsetTop) >= (item.closest('.gpc-blocos_bloco_elemento').offsetTop + item.closest('.gpc-blocos_bloco_elemento').offsetHeight) &&
 elementos[i].getAttribute('id') != item.closest('.gpc-blocos_bloco_elemento').getAttribute('id') &&
 elementos[i].offsetParent
 ){elementos[i].style.top = (parseFloat(elementos[i].style.top) + tamanho_conteudo) + 'px';}
}
}
}
 bloco.classList.add('gac-movendo');
 bloco.style.setProperty('height', (parseFloat(bloco.style.height) + tamanho_conteudo) + 'px');
 if (instancia.closest('.gpc_modal')){PosicionarGM(instancia.closest('.gpc_modal').getAttribute('id'), false);}
 for (let i = 0;i < 8;i++){setTimeout(function (){gpc_controle['elementos_iniciados']['elemento'].updateRect();}, 40 * i);}
}
}
}
}, fechar:function (id, item, abrir_outro){
 let instancia = document.querySelector("#" + id);
 if (abrir_outro == undefined){abrir_outro = false;}
 if (instancia){
 if (gac_timeout.hasOwnProperty(id)){
 clearTimeout(gac_timeout[id]);
 delete gac_timeout[id];
}
 if (instancia.closest('.gpc-blocos_bloco_elemento')){
 let itens = item.closest('.gac').querySelectorAll('.gac-item_cabecalho');
 for (var x = 0;x < itens.length;x++){
 itens[x].closest('.gac-item').classList.remove('gac-aberto');
 itens[x].closest('.gac-item').querySelector('.gac-item_cabecalho').style.color = item.closest('.gac').getAttribute('data-color');
 itens[x].closest('.gac-item').querySelector('.gac-item_cabecalho').style.backgroundColor = item.closest('.gac').getAttribute('data-background-color');
 itens[x].closest('.gac-item').querySelector('.gac-item_conteudo').style.height = '';
}
}
 let versao = 'desktop';
 if (window.innerWidth < 800){versao = 'mobile';}
 item.closest('.gac-item').classList.remove('gac-aberto');
 let conteudo = item.closest('.gac-item').querySelector('.gac-item_conteudo');
 conteudo.style.height = '';
 if ((instancia.closest('.gpc-b') || instancia.closest('.gpc_modal')) && !document.querySelectorAll('#admin_centro').length){
 let elemento = instancia.closest('.gpc-e');
 let rotacao = GAccordion.rotacao(getComputedStyle(elemento)['transform']);
 let elementos = instancia.closest('.centralizar, .gpc_modal').querySelectorAll('.gpc-e');
 if (elementos){
 let total_elementos = elementos.length;
 for (var i = 0;i < total_elementos;i++){
 elementos[i].classList.add('gac-movendo');
 if (elementos[i].getAttribute('id') != item.closest('.gpc-e').getAttribute('id')){
 if (
 parseFloat(elementos[i].offsetTop) != elementos_posicao[elementos[i].getAttribute('id')][versao] &&
 elementos[i].getAttribute('id') != id &&
 elementos[i].offsetParent
 ){elementos[i].style.top = '';}
}
 elementos[i].classList.remove('gac-movendo');
}
}
 elemento.style.transform = `translate(0px, 0px) rotate(${rotacao}deg)`;
 instancia.closest('.gpc-b, .gpc_modal').style.height = '';
 if (instancia.closest('.gpc_modal')){PosicionarGM(instancia.closest('.gpc_modal').getAttribute('id'), false);}
}else{
 let elemento = instancia.closest('.gpc-blocos_bloco_elemento');
 let rotacao = GAccordion.rotacao(getComputedStyle(elemento)['transform']);
 elemento.style.transform = `translate(0px, 0px) rotate(${rotacao}deg)`;
 versao = '';
 if (document.getElementById('gpc-blocos').classList.contains('mobile')){versao = '_mobile';}
 
 let elementos, bloco;
 if (instancia.closest('.gpc_modal')){
 elementos = instancia.closest('.gpc_modal').querySelectorAll('.gpc-blocos_bloco_elemento');
 bloco = instancia.closest('.gpc_modal');
}else{
 elementos = instancia.closest('.gpc-blocos_bloco_interno').querySelectorAll('.gpc-blocos_bloco_elemento');
 bloco = instancia.closest('.gpc-blocos_bloco_interno');
}
 if (elementos){
 let total_elementos = elementos.length;
 for (var i = 0;i < total_elementos;i++){
 if (
 parseFloat(elementos[i].style.top) >= (parseFloat(instancia.style.top) + parseFloat(getComputedStyle(instancia)['height'])) &&
 elementos[i].getAttribute('id') != id &&
 elementos[i].offsetParent
 ){elementos[i].setAttribute('style', elementos_pagina[elementos[i].getAttribute('gpc_id_elemento')]['estilos' + versao]);}
}
}
 bloco.setAttribute('style', blocos_pagina[bloco.getAttribute('gpc_id_bloco')]['estilos' + versao]);
 if (instancia.closest('.gpc_modal')){PosicionarGM(instancia.closest('.gpc_modal').getAttribute('id'), false);}
 for (let i = 0;i < 8;i++){setTimeout(function (){gpc_controle['elementos_iniciados']['elemento'].updateRect();}, 40 * i);}
}
 
 let elementos = document.querySelectorAll('.gac-movendo');
 if (elementos){for (var i = 0;i < elementos.length;i++){elementos[i].classList.remove('gac-movendo');}}
}
}, resize:function (id){
 if (document.querySelectorAll('#admin_centro').length){return false;}
 let instancias;
 if (id != undefined){instancias = document.querySelectorAll('#' + id + ' .gac');}
 else{instancias = document.querySelectorAll('.gac');}
 if (instancias){
 let versao = 'desktop';
 if (window.innerWidth < 800){versao = 'mobile';}
 for (var i = 0;i < instancias.length;i++){
 id = instancias[i].closest('.gpc-e').getAttribute('id');
 let itens = instancias[i].querySelectorAll('.gac-aberto');
 let tamanho_conteudo = 0;
 if (itens){
 for (var x = 0;x < itens.length;x++){
 let atual = itens[x];
 let conteudo = atual.closest('.gac-item').querySelector('.gac-item_conteudo');
 conteudo.style.height = 'auto';
 tamanho_conteudo = conteudo.scrollHeight;
 if (atual.closest('.gpc-b') || atual.closest('.gpc_modal')){
 let id_bloco = (atual.closest('.gpc-b') ? atual.closest('.gpc-b').getAttribute('id') :atual.closest('.gpc_modal').getAttribute('gpc_id_elemento'));
 let elementos = atual.closest('.centralizar, .gpc_modal').querySelectorAll('.gpc-e');
 if (elementos){
 let total_elementos = elementos.length;
 for (var y = 0;y < total_elementos;y++){
 elementos[y].classList.add('gac-movendo');
 if ((parseFloat(elementos[y].offsetTop) >= (atual.closest('.gpc-e').offsetTop + atual.closest('.gpc-e').offsetHeight - tamanho_conteudo) || elementos[y].offsetParent == null) && elementos[y].getAttribute('id') != atual.closest('.gpc-e').getAttribute('id')){elementos[y].style.top = (elementos_posicao[elementos[y].getAttribute('id')][versao] + tamanho_conteudo) + 'px';}
}
}
 atual.closest('.gpc-b, .gpc_modal').classList.add('gac-movendo');
 atual.closest('.gpc-b, .gpc_modal').style.setProperty('height', (blocos_posicao[id_bloco][versao] + tamanho_conteudo) + 'px', 'important');
 if (atual.closest('.gpc_modal')){PosicionarGM(atual.closest('.gpc_modal').getAttribute('id'), false);}
}
}
}
}
}
}, rotacao:function (transform){
 
 const resultados = transform.match(/matrix\(([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^,]+),\s*([^)]+)\)/);
 if (!resultados) return 0;
 
 const a = parseFloat(resultados[1]);
 const b = parseFloat(resultados[2]);
 
 let graus = Math.atan2(b, a) * (180 / Math.PI);
 graus = graus % 360;
 if (graus < 0){graus += 360;}
 
 return parseFloat(graus.toFixed(2));
}, calcularAjuste:function (angulo, tamanhoConteudo){
 // Convertendo o Ã¢ngulo de rotaÃ§Ã£o para radianos
 let radianos = angulo * Math.PI / 180;
 // Calculando os ajustes baseado na expansÃ£o do conteÃºdo e no Ã¢ngulo de rotaÃ§Ã£o
 let ajusteX = (Math.sin(radianos) * tamanhoConteudo / 2) * -1;
 let ajusteY = ((1 - Math.cos(radianos)) * tamanhoConteudo / 2) * -1;
 // Retornando os ajustes
 return{deltaX:ajusteX, deltaY:ajusteY};
}

}
}();
window.addEventListener('load', function (){GAccordion.instalar();}, false);
window.addEventListener('resize', function (){
 const elementos = document.querySelectorAll('.gac-movendo');
 if (elementos){for (var i = 0;i < elementos.length;i++){elementos[i].classList.remove('gac-movendo');}}
 if (gac_timeout_resize){clearTimeout(gac_timeout_resize);}
 const largura = window.innerWidth;
 gac_timeout_resize = setTimeout(function (){if (largura == window.innerWidth){GAccordion.resize();}}, 50);
}, false);'use strict';

var carregando = false;

var GLoading = function(){
 return{
 instalar :function(){
 
 var gl = document.querySelector('#gloading');
 if (gl == null || gl == undefined){
 var gl_loading = document.createElement("div");
 gl_loading.id = 'gloading';
 gl_loading.className = 'gloading_esconder';
 gl_loading.innerHTML = '<span></span>';
 document.body.appendChild(gl_loading);
}
},
 carregar :function(configuracao){
 
 if (configuracao.hasOwnProperty('ativar') == false){configuracao.ativar = false;}
 if (configuracao.ativar != true && configuracao.ativar != false){configuracao.ativar = false;}
 if (configuracao.hasOwnProperty('tempo') == false){configuracao.tempo = 0;}
 if (configuracao.hasOwnProperty('tipo') == false){configuracao.tipo = 'barra';}
 if (configuracao.tipo != 'barra' && configuracao.tipo != 'tela'){configuracao.tipo = 'barra';}
 
 var gl = document.querySelector('#gloading');
 
 if (gl != null && gl != undefined){
 
 if (configuracao.ativar == true){GLoading.carregar_mostrar(gl, configuracao);}
 
 if (configuracao.ativar == false || configuracao.tempo != 0){GLoading.carregar_esconder(gl, configuracao);}
}
},
 carregar_mostrar :function(gl, configuracao){
 
 carregando = true;
 
 gl.classList.add('gloading_'+configuracao.tipo+'_carregando');
},
 carregar_esconder :function(gl, configuracao){
 (function(gl, configuracao){
 if(configuracao.tempo > 0){
 setTimeout(function(){
 
 if (gl.classList.contains('gloading_tela_carregando')){gl.classList.remove('gloading_tela_carregando');}
 if (gl.classList.contains('gloading_barra_carregando')){gl.classList.remove('gloading_barra_carregando');}
 
 carregando = false;
}, configuracao.tempo);
}else{
 
 if (gl.classList.contains('gloading_tela_carregando')){gl.classList.remove('gloading_tela_carregando');}
 if (gl.classList.contains('gloading_barra_carregando')){gl.classList.remove('gloading_barra_carregando');}
 
 carregando = false;
}
})(gl, configuracao);
}
};
}();




 $(function(){
 $('body').on('click', '.check .check-borda, .check .check-texto',function(evento){
 
 var check = $(this).closest('.check');
 var check_borda = check.find('.check-borda');
 var campo = check.closest('.admin_campos-campo').find('.admin_campo');
 
 if (!check.hasClass('check_selecionado')){
 
 check.addClass('check_selecionado');
 check_borda.addClass('check-borda_efeito').html("<span class='check-borda-bolinha'></span>");
}else{
 
 check.removeClass('check_selecionado');
 check_borda.html("");
}
 var valores = '', opcoes = check.closest('.checks').find('.check_selecionado');
 if(opcoes.length){
 opcoes.each(function(){valores += $(this).attr('id')+',';});
 valores = valores.substr(0,(valores.length-1));
}
 campo.val(valores).trigger('change');
 ValidacaoCampos(campo);
 setTimeout(function(){check_borda.removeClass('check-borda_efeito');},200);
});
});
'use strict';
var GFM = function(){
 return{
 instalar :function(configuracao){
 
 if (configuracao.hasOwnProperty('elemento') == false){configuracao.elemento = '';}
 if (configuracao.hasOwnProperty('mascara') == false){configuracao.mascara = '';}
 if (configuracao.hasOwnProperty('placeholder') == false){configuracao.placeholder = '';}
 
 var elementos = document.querySelectorAll(configuracao.elemento);
 
 for (var i = 0;i < elementos.length;i++){
 (function(configuracao, elemento){
 
 if (elemento !== undefined && elemento !== null){
 
 if (elemento.dataset.gfm_mascara !== undefined && elemento.dataset.gfm_mascara !== null){configuracao.mascara = elemento.dataset.gfm_mascara;}
 if (elemento.dataset.gfm_placeholder !== undefined && elemento.dataset.gfm_placeholder !== null){configuracao.placeholder = elemento.dataset.gfm_placeholder;}
 
 if (elemento.addEventListener){
 elemento.addEventListener("focusin", function (evento){GFM.campo_focusin(configuracao, elemento, evento);});
 elemento.addEventListener("focusout", function (evento){GFM.campo_focusout(configuracao, elemento, evento);});
 elemento.addEventListener('input', function (evento){GFM.campo_digitar(configuracao, elemento, evento);});
}else if (elemento.attachEvent){
 elemento.attachEvent("onfocusin", function (evento){GFM.campo_focusin(configuracao, elemento, evento);});
 elemento.attachEvent("onfocusout", function (evento){GFM.campo_focusout(configuracao, elemento, evento);});
 elemento.attachEvent('oninput', function (evento){GFM.campo_digitar(configuracao, elemento, evento);});
}
}
})(configuracao, elementos[i]);
}
},
 campo_focusin :function(configuracao, elemento, evento){
 
 if (elemento.placeholder){elemento.dataset.gfm_placeholder_anterior = elemento.placeholder;}
 else{elemento.dataset.gfm_placeholder_anterior = ' ';}
 if (configuracao.placeholder){elemento.placeholder = configuracao.placeholder;}
 
 elemento.maxLength = configuracao.mascara.length;
},
 campo_focusout :function(configuracao, elemento, evento){
 
 if (elemento.value.length < configuracao.mascara.replace('9','').replace('Z','').replace('D','').replace('?','').length){elemento.value = '';}
 
 if (elemento.dataset.gfm_placeholder_anterior){elemento.placeholder = elemento.dataset.gfm_placeholder_anterior;}
},
 campo_digitar :function(configuracao, elemento, evento){
 if (evento.data != null){
 
 var tecla = evento.data;
 
 var tecla_codigo = tecla.charCodeAt(0);
 
 
 if (tecla_codigo !== 8 && tecla_codigo !== 46 && tecla_codigo !== 16 && tecla_codigo !== 17 && tecla_codigo !== 18){
 
 if (tecla_codigo !== 37 && tecla_codigo !== 38 && tecla_codigo !== 39 && tecla_codigo !== 40){
 
 evento.preventDefault();
 evento.stopPropagation();
 
 var texto = elemento.value;
 
 var posicionar_cursor = false;
 
 if (typeof elemento.selectionStart == "number" && typeof elemento.selectionEnd == "number"){
 var selecao_inicio = elemento.selectionStart;
 var selecao_fim = elemento.selectionEnd;
 if (selecao_inicio != selecao_fim || elemento.value.length != selecao_fim){
 
 
 
 
 posicionar_cursor = true;
 
}
}
 
 var texto_tamanho = texto.length;
 var texto_novo = '';
 var caractere = '';
 
 for (var numero_mascara = 0, numero_texto = 0;numero_mascara < configuracao.mascara.length;++numero_mascara){
 
 caractere = texto.charAt(numero_texto);
 
 switch (configuracao.mascara.charAt(numero_mascara)){
 case '0' :
 case '9' :
 if (/\d/.test(caractere)){texto_novo += caractere;}
 ++numero_texto;
 break;
 case 'A' :
 case 'Z' :
 if (/[a-z]/i.test(caractere)){texto_novo += caractere;}
 ++numero_texto;
 break;
 case 'C' :
 case 'D' :
 if (/[a-z0-9]/i.test(caractere)){texto_novo += caractere;}
 ++numero_texto;
 break;
 case 'X' :
 case '?' :
 texto_novo += caractere;
 ++numero_texto;
 break;
 default :
 texto_novo += configuracao.mascara.charAt(numero_mascara);
 if (configuracao.mascara.charAt(numero_mascara) == texto.charAt(numero_mascara)){
 ++numero_texto;
}else{if (posicionar_cursor && numero_texto+1 == selecao_inicio){++selecao_inicio;}}
 break;
}
 
 if (numero_texto == texto_tamanho){break;}
}
 
 elemento.value = texto_novo;
 
 if (posicionar_cursor && elemento.setSelectionRange){elemento.setSelectionRange(selecao_inicio, selecao_inicio);}
}
}
}
}
};
}();


 
 var gm_quantidade = 0;
 function AbrirGM(id_gm, componente, configuracao){
 
 var z_index_fundo = 999, z_index_caixa = 1000;
 if($('#gpc-menu').length){
 z_index_fundo = 999999999999902;
 z_index_caixa = 999999999999903;
}
 var gm_conteudos = '';
 if (configuracao['gm']['conteudos']){$.each(configuracao['gm']['conteudos'], function (classe, div){if (div.conteudo){gm_conteudos += "<div class='"+componente+"-"+classe+"' "+div.extras+" style='"+div.estilos+"'>"+div.conteudo+"</div>";}});}
 var gm_fundo_conteudos = '';
 if (configuracao['gm']['conteudos']){$.each(configuracao['gm_fundo']['conteudos'], function (classe, div){if (div.conteudo){gm_fundo_conteudos += "<div class='"+componente+"_fundo-"+classe+"' "+div.extras+" style='"+div.estilos+"'>"+div.conteudo+"</div>";}});}
 var scroll = window.scrollY;
 var tela_altura = $(window).height();
 if(componente == 'gpc_modal' && $('#gpc-blocos_editor').length){
 scroll = (document.getElementById("gpc-blocos").scrollTop-$('#gpc-blocos').offset().top);
 tela_altura = $('#gpc-blocos_editor').height();
}
 
 if(componente == 'gpc_modal' && $('#gpc-blocos_editor').length){$('#gpc-blocos_editor').append("<div gm_id='"+id_gm+"' gm_componente='"+componente+"' class='gm_fundo "+id_gm+" "+configuracao['gm_fundo']['classes']+"' "+configuracao['gm_fundo']['extras']+" style='z-index:"+(z_index_fundo+gm_quantidade)+";"+configuracao['gm_fundo']['estilos']+"'>"+gm_fundo_conteudos+"</div>");}
 else{$("body").append("<div gm_id='"+id_gm+"' gm_componente='"+componente+"' class='gm_fundo "+id_gm+" "+configuracao['gm_fundo']['classes']+"' "+configuracao['gm_fundo']['extras']+" style='z-index:"+(z_index_fundo+gm_quantidade)+";"+configuracao['gm_fundo']['estilos']+"'>"+gm_fundo_conteudos+"</div>");}
 
 $("."+id_gm).addClass('gm_fundo_ativo');
 if(!$(".gm").length || $('.gpc_modal').lenght){
 
 if(componente == 'gpc_modal' && $('#gpc-blocos_editor').length){$('#gpc-blocos_editor').addClass('body_bloquear');}
 else{
 if(componente == 'gpc_modal_popup'){$("body").addClass('body_bloquear_site');}
 else{
 $("body").addClass('body_bloquear');
 if(componente == 'gpc_modal_imagens'){$("body").css({'overflow':'hidden'});}
}
}
 
 if($('#site').length && componente != 'gma_modal'){$('#site').addClass('site_borrar').css({'top':-scroll+'px','height':($('#site').height()+scroll)+''});}
 else if(componente == 'gpc_modal' && $('#gpc-blocos_editor').length){$('#gpc-blocos_editor-blocos').addClass('administrador_borrar').css({'top':-(scroll)+'px'});}
 else{$('#administrador').addClass('administrador_borrar').css({'top':-scroll+'px'});}
}
 
 if(componente == 'gpc_modal' && $('#gpc-blocos_editor').length){$('#gpc-blocos_editor').append("<div id='"+id_gm+"' gm_componente='"+componente+"' gm_scroll='"+scroll+"' class='gm "+configuracao['gm']['classes']+"' "+configuracao['gm']['extras']+" style='z-index:"+(z_index_caixa+gm_quantidade)+";top:"+tela_altura+"px;"+configuracao['gm']['estilos']+"'>"+gm_conteudos+"</div>");}
 else if(componente == 'gma_modal'){$("body").append("<div id='"+id_gm+"' gm_componente='"+componente+"' gm_scroll='"+scroll+"' class='gm gm_efeitos "+configuracao['gm']['classes']+"' "+configuracao['gm']['extras']+" style='z-index:"+(z_index_caixa+gm_quantidade)+";top:"+((tela_altura/100)*5)+"px;"+configuracao['gm']['estilos']+"'>"+gm_conteudos+"</div>");}
 else if(componente == 'gpc_modal_popup'){$("body").append("<div id='"+id_gm+"' gm_componente='"+componente+"' gm_scroll='"+scroll+"' class='gm gm_esconder "+configuracao['gm']['classes']+"' "+configuracao['gm']['extras']+" style='z-index:"+(z_index_caixa+gm_quantidade)+";top:"+(tela_altura+scroll)+"px;"+configuracao['gm']['estilos']+"'>"+gm_conteudos+"</div>");}
 else{$("body").append("<div id='"+id_gm+"' gm_componente='"+componente+"' gm_scroll='"+scroll+"' class='gm gm_esconder "+configuracao['gm']['classes']+"' "+configuracao['gm']['extras']+" style='z-index:"+(z_index_caixa+gm_quantidade)+";top:"+tela_altura+"px;"+configuracao['gm']['estilos']+"'>"+gm_conteudos+"</div>");}
 
 if(componente == 'gma_modal'){
 setTimeout(function(){
 $('#'+id_gm).css('opacity', '1');
 PosicionarGM(id_gm);
},250);
}else{setTimeout(function(){PosicionarGM(id_gm);},150);}
 
 window.addEventListener('resize', function(event){
 if(componente != 'gpc_modal'){
 if (componente == 'gmi'){PosicionarGM(id_gm, false);}
 else{PosicionarGM(id_gm);}
}
});
}
 function PosicionarGM(id_gm, efeitos){
 
 if(efeitos === undefined || efeitos === ''){efeitos = true;}
 
 var gm = $("#"+id_gm);
 if (gm.length){
 
 var tela_altura = $(window).height();
 var tela_largura = $(window).width();
 var tela = window.scrollY;
 if($('.gm').length > 1){tela = 0;}
 
 if (gm.attr('gm_componente') == 'gpc_modal'){
 tela = document.getElementById("gpc-blocos").scrollTop;
 tela_altura = $('#gpc-blocos_editor').height();
 gm.find('.gpc_modal-centro').removeAttr('style');
 var gm_fundo = $("."+id_gm);
 var height = 20;
 $('.'+gpc_controle['classe_bloco']).each(function(){height += $(this).height();});
 gm_fundo.css({'height':height+'px'});
}
 if (gm.attr('gm_componente') == 'gpc_modal_formulario'){gm.find('.gpc_modal_formulario-centro').removeAttr('style');}
 if (gm.attr('gm_componente') == 'gml'){gm.find('.gml-centro').removeAttr('style');}
 if (gm.attr('gm_componente') == 'gmf'){gm.find('.gmf-centro').removeAttr('style');}
 if (gm.attr('gm_componente') == 'gm_configurar_dns_completo'){gm.find('.gm_configurar_dns_completo-centro').removeAttr('style');}
 if (gm.attr('gm_componente') == 'guo'){gm.find('.guo-passos').removeAttr('style');}
 if (gm.attr('gm_componente') == 'gsp'){gm.find('.gmf-opcoes').removeAttr('style');}
 if (gm.attr('gm_componente') == 'gpc_modal_imagens'){gm.find('.gpc_modal_imagens-centro, .gpc_modal_imagens-centro-pastas, .gpc_modal_imagens-centro-fotos').removeAttr('style');}
 if (gm.attr('gm_componente') == 'gmi'){
 
 var imagem = CalcularGMI(gmi_elemento['elemento']);
 
 if (gmi_caixa['elemento']){
 
 gmi_caixa['elemento'].css({'width':imagem['largura']+'px', 'height':imagem['altura']+'px'});
 
 gmi_caixa_imagem['elemento'].css({'width':imagem['largura']+'px', 'height':imagem['altura']+'px'});
}
}
 if (gm.attr('gm_componente') == 'gmi_informacoes'){gm.find('.gmi_informacoes-centro').removeAttr('style');}
 if (gm.attr('gm_componente') == 'gmi_comentarios'){gm.find('.gmi_comentarios-centro').css('height','100%');}
 
 var gm_largura = gm.width();
 
 var gm_altura = 0;
 if (gm.attr('gm_componente') == 'gpc_modal_imagens' || gm.attr('gm_componente') == 'gml'){gm_altura = tela_altura;
}else if (gm.attr('gm_componente') == 'gpc_modal_popup' || gm.attr('gm_componente') == 'gpc_modal'){
 if(gm.attr('gm_componente') == 'gpc_modal_popup'){tela = 0;}
 gm_altura = $('.gpc_modal').height();
 var gm_fundo = $("."+id_gm);
 var height = 20;
 if (gm.attr('gm_componente') == 'gpc_modal_popup'){
 gm_altura = $('.gpc_modal_popup-centro').height();
 $('.gpc-b').each(function(){height += $(this).height();});
}else{$('.'+gpc_controle['classe_bloco']).each(function(){height += $(this).height();});}
 if (gm_altura >= tela_altura){
 $('#site').css({'height':(gm_altura+Math.abs(parseFloat($('#site').css('top')))+70)+'px'});
 gm_fundo.css({'height':(gm_altura+70)+'px'});
}else{
 $('#site').css({'height':(tela_altura+Math.abs(parseFloat($('#site').css('top'))))+'px'});
 if(gm_altura+20 >= (gm_fundo.height()-10)){gm_fundo.css({'height':(tela_altura+10)+'px'});}
 else{gm_fundo.css({'height':tela_altura+'px'});}
}
}else if (gm.attr('gm_componente') == 'gpc_modal_formulario'){gm_altura = $('.gpc_modal_formulario').height();
}else if (gm.attr('gm_componente') == 'gma_modal'){gm_altura = $('#gm-gpages_modal').height();
}else{gm.children().each(function(){gm_altura += $(this).outerHeight(true);});}
 if (gm_altura >= tela_altura){
 if (gm.attr('gm_componente') == 'gpc_modal_formulario'){gm.find('.gpc_modal_formulario-centro').css({'height':$('.gpc_modal_formulario').height()+'px'});}
 if (gm.attr('gm_componente') == 'gpc_modal'){gm.find('.gpc_modal-centro').css({'height':$('.gpc_modal').height()+'px'});}
 if (gm.attr('gm_componente') == 'gpc_modal_popup'){gm.find('.gpc_modal_popup-centro').css({'height':$('.gpc_modal_popup').height()+'px'});}
 if (gm.attr('gm_componente') == 'gml'){
 
 tela += 20;
 gm.find('.gml-centro, .gml-opcoes-lista-lateral, .gml-opcoes-lista-opcoes').css({'height':((tela_altura-(gm.find('.gml-topo').outerHeight()))-50)+'px'});
}
 if (gm.attr('gm_componente') == 'gmf'){gm.find('.gmf-centro').css({'height':((tela_altura-((gm.find('.gmf-topo').outerHeight())+(gm.find('.gmf-rodape').outerHeight())))-20)+'px'});}
 if (gm.attr('gm_componente') == 'gm_configurar_dns_completo'){gm.find('.gm_configurar_dns_completo-centro').css({'height':((tela_altura-((gm.find('.gm_configurar_dns_completo-topo').outerHeight())+(gm.find('.gm_configurar_dns_completo-rodape').outerHeight())))-20)+'px'});}
 if (gm.attr('gm_componente') == 'gpc_modal_imagens'){
 tela += 50;
 gm.find('.gpc_modal_imagens-centro, .gpc_modal_imagens-centro-pastas, .gpc_modal_imagens-centro-fotos').css({'height':((tela_altura-(gm.find('.gpc_modal_imagens-topo').outerHeight()))-120)+'px'});
}
 if (gm.attr('gm_componente') == 'guo'){gm.find('.guo-passos').css({'height':(gm_altura-(gm_altura-tela_altura)-96)+'px'});}
 if (gm.attr('gm_componente') == 'gsp'){gm.find('.gsp-opcoes').css({'height':((tela_altura-((gm.find('.gsp-topo').outerHeight())+(gm.find('.gsp-rodape').outerHeight())))-20)+'px'});}
 if (gm.attr('gm_componente') == 'gmi_informacoes'){gm.find('.gmi_informacoes-centro').css({'height':((tela_altura-((gm.find('.gmi_informacoes-topo').outerHeight())))-20)+'px'});}
 if (gm.attr('gm_componente') == 'gmi_comentarios'){gm.find('.gmi_comentarios-centro').css({'height':((tela_altura-((gm.find('.gmi_comentarios-topo').outerHeight())+(gm.find('.gmi_comentarios-rodape').outerHeight())))-20)+'px'});}
 
 if (efeitos){
 if (!gm.hasClass('gm_efeitos')){gm.addClass('gm_efeitos');}
}else{
 if (gm.hasClass('gm_efeitos')){gm.removeClass('gm_efeitos');}
}
 
 if(gm.attr('gm_componente') == 'gpc_modal_popup'){
 setTimeout(function(){
 gm.css({'top':(tela+10)+'px'}).removeClass('gm_esconder');
 $('.'+id_gm).css({'overflow':''});
},25);
}else if (gm.attr('gm_componente') == 'gma_modal'){setTimeout(function(){gm.css({'top':(tela)+'px'}).removeClass('gm_esconder');},25);}
 else{
 setTimeout(function(){
 gm.css({'top':(tela+10)+'px'}).removeClass('gm_esconder');
 if(gm.attr('gm_componente') == 'gpc_modal' && typeof gpc_controle['elementos_iniciados'][id_gm] == 'object'){
 
 if(Object.keys(gpc_controle['elementos_iniciados']).length){
 $.each(gpc_controle['elementos_iniciados'], function (i, elemento_iniciado){
 if(typeof gpc_controle['elementos_iniciados'][i].updateRect == 'function'){gpc_controle['elementos_iniciados'][i].updateRect();}
});
}
}
},25);
}
}else{
 if (gm.attr('gm_componente') == 'gpc_modal_imagens'){gm.find('.gpc_modal_imagens-centro, .gpc_modal_imagens-centro-pastas, .gpc_modal_imagens-centro-fotos').css({'height':((gm_altura-(gm.find('.gpc_modal_imagens-topo').outerHeight()))-120)+'px'});}
 if (gm.attr('gm_componente') == 'gml'){gm.find('.gml-centro, .gml-opcoes-lista-lateral, .gml-opcoes-lista-opcoes').css({'height':((tela_altura-(gm.find('.gml-topo').outerHeight()))-50)+'px'});}
 
 if (efeitos){if (!gm.hasClass('gm_efeitos')){gm.addClass('gm_efeitos');}}else{if (gm.hasClass('gm_efeitos')){gm.removeClass('gm_efeitos');}}
 
 if(gm.attr('gm_componente') == 'gpc_modal_popup'){
 setTimeout(function(){
 gm.css({'top':(((tela_altura-gm_altura)/2)+tela)+'px','bottom':'initial'}).removeClass('gm_esconder');
 $('.'+id_gm).css({'overflow':''});
},25);
}else{
 setTimeout(function(){
 gm.css({'top':(((tela_altura-gm_altura)/2)+tela)+'px','bottom':'initial'}).removeClass('gm_esconder');
 if(gm.attr('gm_componente') == 'gpc_modal' && typeof gpc_controle['elementos_iniciados'][id_gm] == 'object'){gpc_controle['elementos_iniciados'][id_gm].updateRect();}
},25);
}
}
}
}
 function FecharGM(id_gm){
 var gm = $("#"+id_gm);
 if (gm.length){
 var componente = gm.attr('gm_componente');
 if(componente == 'gpc_modal_formulario'){MostrarPreview(false);}
 if(gm.attr('id') == 'gm-plano_alteracao_pagamento' || gm.attr('id') == 'gm-plano_alteracao' || gm.attr('id') == 'gm-plano_contratou'){
 editou = false;
 editou_caixa = false;
 GLoading.carregar({'ativar':false});
 document.location.reload();
}
 if(gm.attr('gm_componente') == 'gpc_modal' && typeof gpc_controle['elementos_iniciados'][id_gm] == 'object'){
 gpc_controle['elementos_iniciados'][id_gm].destroy();
 delete gpc_controle['elementos_iniciados'][id_gm];
}
 
 var gm_fundo = $("."+id_gm);
 var tela = window.scrollY;
 var tela_altura = $(window).height();
 if (componente == 'gpc_modal'){
 tela_largura = $('#gpc-blocos_editor').width();
 tela = document.getElementById("gpc-blocos").scrollTop;
}
 
 if (!gm.hasClass('gm_efeitos')){gm.addClass('gm_efeitos');}
 
 if(componente == 'gma_modal'){gm.css({'opacity':'0'});}
 else{gm.css({'top':(tela_altura+tela)+'px'});}
 
 setTimeout(function(){gm_fundo.removeClass('gm_fundo_ativo');},100);
 
 setTimeout(function(){
 
 if($('.gm_fundo').length == 1){
 if (componente == 'gpc_modal'){
 $('.'+gpc_controle['classe_elemento_adicionar']+'[gpc_tipo="bloco"]').removeClass('esconder');
 var elemento_original = $('.gpc_modal').attr('gpc_id_elemento');
 if(gpc_controle['elementos_selecionados']['elementos_resize'] != ''){
 gpc_controle['elementos_selecionados'] ={'elementos':{}, 'elementos_resize':'', 'total' :0,'helper':{'largura':0,'altura':0,'left_original':'','top_original':'','elemento_left_original':'','elemento_top_original':'','scrollTop':$("#gpc-blocos").offset().top,'scrollLeft':$("#gpc-blocos").scrollLeft()}};
 $('#'+gpc_controle['classe_elementos_selecionados']).remove();
 $('.ui-selected').removeClass('ui-selected');
}
 setTimeout(function(){
 $('#elementos_'+elemento_original).addClass('ativo').trigger('click');
 gpc_controle['elementos_iniciados']['elemento']['target'] = $('#elementos_'+elemento_original)[0];
 gpc_controle['elementos_iniciados']['elemento'].updateRect();
 gpc_controle['elementos_iniciados']['elemento'].selfElement.style.opacity = 1;
},300);
 $('#gpc-blocos_editor-blocos').removeClass('administrador_borrar').removeAttr('style');
 $('.'+gpc_controle['classe_bloco_configurar']).remove();
}else if ($('#site').length){
 if($('#site').closest('.gmf').length){$('#administrador').removeClass('administrador_borrar').removeAttr('style');}
 else{$('#site').removeClass('site_borrar').removeAttr('style');}
}else{$('#administrador').removeClass('administrador_borrar').removeAttr('style');}
}
 
 if($('.gm_fundo').length == 1){
 if (componente == 'gpc_modal'){$('#gpc-blocos_editor').removeClass('body_bloquear');}
 else{$('body').removeClass('body_bloquear body_bloquear_site');}
}
 
 if($('.gm_fundo').length == 1){
 if(componente == 'gpc_modal'){document.getElementById("gpc-blocos").scrollTop = parseFloat(gm.attr('gm_scroll'))+$('#gpc-blocos').offset().top;}
 else{window.scroll({top:gm.attr('gm_scroll'), behavior:"auto"});}
}
 
 gm.remove();gm_fundo.remove();
 editou = false;
 editou_caixa = false;
 GLoading.carregar({'ativar':false});
 if(componente == 'gpc_modal_imagens'){$("body").css({'overflow':''});}
 if(componente == 'gpc_modal'){
 ElementosBind('todos','reiniciar');
 setTimeout(function(){
 if(typeof gpc_controle['elementos_iniciados']['elemento'] == 'object'){
 
 if(Object.keys(gpc_controle['elementos_iniciados']).length){
 $.each(gpc_controle['elementos_iniciados'], function (i, elemento_iniciado){
 if(typeof gpc_controle['elementos_iniciados'][i].updateRect == 'function'){gpc_controle['elementos_iniciados'][i].updateRect();}
});
}
}
},25);
}
},200);
}
}
 function PulsarGM(id_gm){
 $('#'+id_gm).addClass('gm_pulsar');
 setTimeout(function(){$('#'+id_gm).removeClass('gm_pulsar');},100);
}
 $(function(){
 $('body').on('click','.gm_fundo',function(){if ($(this).attr('gm_fundo_acao') == 'pulsar'){PulsarGM($(this).attr('gm_id'));}else if ($(this).attr('gm_fundo_acao') == 'fechar'){FecharGM($(this).attr('gm_id'));}});
 $('body').on('click','.gm_fechar',function(){FecharGM($(this).attr('gm_id'));});
});
'use strict';

var GModalApproval = function(){
 return{
 
 instalar :function(configuracao){
 
 if (configuracao.hasOwnProperty('barra') == false){configuracao.barra = '';}
 
 if (configuracao.barra != ''){
 
 if(GModalApproval.preferencias() == null){GModalApproval.barra(configuracao);}
 else{
 GModalApproval.botao(configuracao);
 GModalApproval.instalar_scripts(configuracao,false);
}
 
 setTimeout(function(){GModalApproval.posicionar();}, 500);
}
},
 
 barra :function(configuracao){
 
 if (configuracao.barra.hasOwnProperty('fechar') == false){configuracao.fechar = false;}
 if (configuracao.barra.hasOwnProperty('cor') == false){configuracao.barra.cor = 'ffffff';}
 if (configuracao.barra.hasOwnProperty('classe') == false){configuracao.barra.classe = '';}
 if (configuracao.barra.hasOwnProperty('botao_configurar') == false){configuracao.barra.botao_configurar = false;}
 if (configuracao.barra.hasOwnProperty('botao_aceitar') == false){configuracao.barra.botao_aceitar = 'Entendi e aceito';}
 if (configuracao.barra.hasOwnProperty('texto') == false){configuracao.barra.texto = 'Usamos cookies para personalizar conteÃºdos e melhorar a sua experiÃªncia.';}
 
 var barra = '<div id="gpc-lgpd_texto">'+configuracao.barra.texto+'</div>';
 barra += '<div id="gpc-lgpd_botoes">';
 if(configuracao.barra.botao_configurar){barra += '<div id="gpc-lgpd_botoes-configurar" class="gpc-lgpd_botoes-botao">'+configuracao.barra.botao_configurar+'</div>';}
 barra += '<div id="gpc-lgpd_botoes-confirmar" class="gpc-lgpd_botoes-botao">'+configuracao.barra.botao_aceitar+'</div>';
 barra += "</div>";
 if(configuracao.barra.fechar){barra += '<div id="gpc-lgpd_fechar"></div>';}
 
 var g_lgpd = document.createElement("div");
 g_lgpd.id = 'gpc-lgpd';
 g_lgpd.className = 'posicionar gpc-lgpd-cor_'+configuracao.barra.cor+' '+(configuracao.barra.botao_configurar ? 'botoes' :'botao')+' '+configuracao.barra.classe;
 g_lgpd.innerHTML = barra;
 document.body.appendChild(g_lgpd);
 setTimeout(function(){GModalApproval.configurar(configuracao);}, 300);
},
 botao :function(configuracao){
 
 if(configuracao.barra.hasOwnProperty('editar_consentimento') == false){configuracao.barra.editar_consentimento = true;}
 if(configuracao.barra.editar_consentimento){
 var g_lgpd = document.getElementById("gpc-lgpd_editar");
 if(g_lgpd == null){
 
 var g_lgpd = document.createElement("div");
 g_lgpd.id = 'gpc-lgpd_editar';
 g_lgpd.className = 'posicionar gtt-direita gpc-lgpd-cor_'+configuracao.barra.cor+' '+configuracao.barra.classe;
 g_lgpd.setAttribute('data-gtt','PreferÃªncias de cookies');
 document.body.appendChild(g_lgpd);
 GTooltip.instalar({'elemento' :'.gtt-direita', 'direcao' :'direita'});
 
 setTimeout(function(){GModalApproval.configurar(configuracao);}, 300);
}
}
 
 setTimeout(function(){GModalApproval.posicionar();}, 200);
},
 modal :function(configuracao){
 
 GLoading.carregar({'ativar':true});
 
 var conteudo = '';
 if (configuracao.hasOwnProperty('textos') == false){configuracao.textos = '';}
 if (configuracao.hasOwnProperty('opcoes') == false){configuracao.opcoes = '';}
 
 if(configuracao.textos != ''){
 conteudo += '<div id="gpc_modal_lgpd-titulo">';
 for (var i = 0;i < configuracao.textos.length;i++){
 if(configuracao.textos[i].tipo == 'titulo'){conteudo += '<div class="gpc_modal_lgpd-titulo-titulo">'+configuracao.textos[i].texto+'</div>';}
 if(configuracao.textos[i].tipo == 'texto'){conteudo += '<div class="gpc_modal_lgpd-titulo-texto">'+configuracao.textos[i].texto+'</div>';}
}
 conteudo += '</div>';
}
 if(configuracao.opcoes != ''){
 var cookie = GModalApproval.preferencias();
 for (var i = 0;i < configuracao.opcoes.length;i++){
 if (configuracao.opcoes[i].hasOwnProperty('aviso') == false){configuracao.opcoes[i].aviso = '';}
 if (configuracao.opcoes[i].hasOwnProperty('titulo') == false){configuracao.opcoes[i].titulo = '';}
 if (configuracao.opcoes[i].hasOwnProperty('texto') == false){configuracao.opcoes[i].texto = '';}
 conteudo += '<div class="gpc_modal_lgpd-opcoes">';
 conteudo += '<div class="gpc_modal_lgpd-opcoes-protecao">';
 conteudo += '<span class="gpc_modal_lgpd-opcoes-titulo">'+configuracao.opcoes[i].titulo+'</span>';
 if(configuracao.opcoes[i].aviso != ''){conteudo += '<span class="gpc_modal_lgpd-opcoes-aviso">'+configuracao.opcoes[i].aviso+'</span>';}
 else{
 if(cookie){configuracao.opcoes[i].valor = (cookie.indexOf(configuracao.opcoes[i].id+':1') !== -1 ? true :false);}
 conteudo += '<span id="'+configuracao.opcoes[i].id+'" class="gpc_modal_lgpd-opcoes-selecao'+(configuracao.opcoes[i].valor ? ' gpc_modal_lgpd-opcoes-selecao_selecionado' :'')+'"><span class="marcador"></span></span>';
}
 conteudo += '</div>';
 conteudo += '<div class="gpc_modal_lgpd-opcoes-texto">'+configuracao.opcoes[i].texto+'</div>';
 conteudo += '</div>';
}
}
 conteudo += '<div id="gpc_modal_lgpd-confirmar">Confirmar configuraÃ§Ãµes</div>';
 
 var modal ={
 'gm' :{
 'conteudos' :{
 'topo' :{'conteudo' :"<div id='gpc_modal_popup_lgpd-topo-fechar' class='gpc_modal_popup_lgpd-topo-fechar gpc_modal_popup-fechar icone-fechar'></div>", 'estilos' :'', 'extras' :''},
 'centro' :{'conteudo' :conteudo, 'estilos' :'', 'extras' :''}
},
 'classes' :'gm_lgpd',
 'estilos' :'max-width:420px;',
 'extras' :''
},
 'gm_fundo' :{
 'conteudos' :{'topo' :{'conteudo' :"<div id='gpc_modal_popup-fundo-fechar' class='gpc_modal_popup-fundo-fechar gpc_modal_popup-fechar icone-fechar'></div>"}},
 'classes' :'gpc_modal_lgpd-fundo',
 'estilos' :'overflow:hidden;',
 'extras' :'gm_fundo_acao="fechar" id="gpc_modal_lgpd-fundo"'
}
};
 
 gm_quantidade++;
 AbrirGM('gpc_modal_lgpd_'+gm_quantidade, 'gpc_modal_popup_lgpd',modal);
 
 GLoading.carregar({'ativar':false});
 var lgpd = document.getElementById("gpc-lgpd");
 if(lgpd == null){lgpd = document.getElementById("gpc-lgpd_editar");}
 lgpd.classList.add('posicionar');
 lgpd.classList.remove('posicionado');
 setTimeout(function(){
 
 var botao_confirmar = document.getElementById("gpc_modal_lgpd-confirmar");
 if(botao_confirmar != null){botao_confirmar.addEventListener("click", function(){GModalApproval.confirmar(configuracao);});}
 var fechar1 = document.getElementById("gpc_modal_popup_lgpd-topo-fechar");
 if(fechar1 != null){
 fechar1.addEventListener("click", function(){
 FecharGM('gpc_modal_lgpd_'+gm_quantidade);
 GModalApproval.posicionar();
});
}
 var fechar2 = document.getElementById("gpc_modal_popup-fundo-fechar");
 if(fechar2 != null){fechar2.addEventListener("click", function(){GModalApproval.posicionar();});}
 var fechar3 = document.getElementById("gpc_modal_lgpd-fundo");
 if(fechar3 != null){fechar3.addEventListener("click", function(){GModalApproval.posicionar();});}
 var opcoes = document.getElementsByClassName('gpc_modal_lgpd-opcoes-selecao');
 if(opcoes != null){
 for (var i = 0;i < opcoes.length;i++){
 opcoes[i].addEventListener("click", function(e){
 if(this.classList.contains('gpc_modal_lgpd-opcoes-selecao_selecionado')){this.classList.remove('gpc_modal_lgpd-opcoes-selecao_selecionado');}
 else{this.classList.add('gpc_modal_lgpd-opcoes-selecao_selecionado');}
});
}
}
},400);
},
 posicionar :function(){
 var g_lgpd = document.getElementById("gpc-lgpd");
 if(g_lgpd == null){g_lgpd = document.getElementById("gpc-lgpd_editar");}
 if(g_lgpd){
 g_lgpd.classList.add('posicionado');
 g_lgpd.classList.remove('posicionar');
}
},
 
 configurar :function(configuracao){
 
 var botao_editar = document.getElementById("gpc-lgpd_editar");
 if(botao_editar){
 botao_editar.removeEventListener("click",function(){GModalApproval.modal(configuracao);},false);
 botao_editar.addEventListener("click", function(){GModalApproval.modal(configuracao);});
}
 
 var botao_configurar = document.getElementById("gpc-lgpd_botoes-configurar");
 if(botao_configurar){
 botao_configurar.removeEventListener("click",function(){GModalApproval.modal(configuracao);},false);
 botao_configurar.addEventListener("click", function(){GModalApproval.modal(configuracao);});
}
 
 var botao_confirmar = document.getElementById("gpc-lgpd_botoes-confirmar");
 if(botao_confirmar){
 botao_confirmar.removeEventListener("click",function(){GModalApproval.confirmarTodos(configuracao);},false);
 botao_confirmar.addEventListener("click", function(){GModalApproval.confirmarTodos(configuracao);});
}
 
 var botao_fechar = document.getElementById("gpc-lgpd_fechar");
 if(botao_fechar){
 botao_fechar.removeEventListener("click",function(){GModalApproval.cancelarTodos(configuracao);},false);
 botao_fechar.addEventListener("click", function(){GModalApproval.cancelarTodos(configuracao);});
}
},
 confirmar :function(configuracao){
 
 var valor = 'o:1';
 
 var elementos = document.getElementsByClassName('gpc_modal_lgpd-opcoes-selecao');
 let editado = false;
 if (elementos.length){
 for (var i = 0;i < elementos.length;i++){
 valor += '&'+elementos[i].id+':'+(elementos[i].classList.contains('gpc_modal_lgpd-opcoes-selecao_selecionado') ? '1' :'0');
 if (elementos[i].classList.contains('gpc_modal_lgpd-opcoes-selecao') == true){
 for (var x = 0;x < configuracao.opcoes.length;x++){
 if (configuracao.opcoes[x].id == elementos[i].id){
 if(configuracao.opcoes[x].valor != elementos[i].classList.contains('gpc_modal_lgpd-opcoes-selecao_selecionado')){editado = true;}
 configuracao.opcoes[x].valor = elementos[i].classList.contains('gpc_modal_lgpd-opcoes-selecao_selecionado');
}
}
}
}
}
 configuracao.editado = editado;
 GModalApproval.salvar_preferencias(valor,configuracao.dominio);
 
 
 FecharGM('gpc_modal_lgpd_'+gm_quantidade);
 
 var elemento = document.getElementById('gpc-lgpd');
 if (elemento != null){
 
 elemento.remove();
 
 GModalApproval.botao(configuracao);
}
 
 GModalApproval.posicionar();
 
 GModalApproval.remover_preferencias(configuracao);
},
 confirmarTodos :function(configuracao){
 
 var valor = 'o:1';
 
 for (var x = 0;x < configuracao.opcoes.length;x++){
 if(configuracao.opcoes[x].hasOwnProperty('valor')){
 configuracao.opcoes[x].valor = true;
 valor += '&'+configuracao.opcoes[x].id+':1';
}
}
 GModalApproval.salvar_preferencias(valor,configuracao.dominio);
 GModalApproval.instalar_scripts(configuracao);
 configuracao.editado = true;
 
 var elemento = document.getElementById('gpc-lgpd');
 if(elemento != null){elemento.remove();}
 
 GModalApproval.botao(configuracao);
},
 cancelarTodos :function(configuracao){
 
 var valor = 'o:1';
 
 for (var x = 0;x < configuracao.opcoes.length;x++){
 if(configuracao.opcoes[x].hasOwnProperty('valor')){
 configuracao.opcoes[x].valor = false;
 valor += '&'+configuracao.opcoes[x].id+':0';
}
}
 configuracao.editado = true;
 GModalApproval.salvar_preferencias(valor,configuracao.dominio);
 GModalApproval.instalar_scripts(configuracao);
 
 var elemento = document.getElementById('gpc-lgpd');
 if(elemento != null){elemento.remove();}
 
 GModalApproval.botao(configuracao);
},
 
 preferencias :function(){
 
 var strNomeIgual = "gpages_cookies=";
 var cookie_array = document.cookie.split(';');
 
 for(var i = 0;i < cookie_array.length;i++){
 var cookie_string = cookie_array[i];
 while (cookie_string.charAt(0) == ' '){cookie_string = cookie_string.substring(1, cookie_string.length);}
 if (cookie_string.indexOf(strNomeIgual) != -1){return cookie_string.substring(strNomeIgual.length, cookie_string.length);}
}
 
 return null;
},
 salvar_preferencias :function(preferencias, dominio){
 
 if (dominio == undefined){dominio = '';}
 var data = new Date();
 
 data.setTime(data.getTime() + (365 * 24 * 60 * 60 * 1000));
 document.cookie = "gpages_cookies=" + preferencias + ";Expires=" + data.toGMTString() + ";Path=/;"+(dominio ? ' Domain='+dominio :'');
 
 return true;
},
 remover_preferencias :function(configuracao){
 
 if(configuracao.editado){
 var cookie_array = document.cookie.split(';');
 var cookies_limpos = '';
 for(var i = 0;i < cookie_array.length;i++){
 var cookie_string = cookie_array[i];
 while (cookie_string.charAt(0) == ' '){cookie_string = cookie_string.substring(1, cookie_string.length);}
 if (cookie_string.indexOf('gpages_') === -1){cookies_limpos += cookie_string.substring(0,cookie_string.indexOf('='))+"=;Expires=Thu, 01 Jan 1970 00:00:01 GMT;Path=/;"+(configuracao.dominio ? ' Domain='+configuracao.dominio :'');}
 else{cookies_limpos += cookie_string;}
}
 document.cookie = cookies_limpos;
 
 setTimeout(function(){document.location.reload(true);},100);
}
},
 
 instalar_scripts :function(configuracao,loader){
 if(loader == undefined){loader = true;}
 
 let cookie = GModalApproval.preferencias();
 
 if(configuracao.opcoes != ''){for (var x = 0;x < configuracao.opcoes.length;x++){configuracao.opcoes[x].valor = (cookie.indexOf(configuracao.opcoes[x].id+':1') !== -1 ? true :false);}}
 if(configuracao.hasOwnProperty('opcoes')){
 let total = Object.entries(configuracao.opcoes).length;
 for (var i = 0;i < total;i++){
 if((configuracao.opcoes[i].valor == true || configuracao.opcoes[i].valor == 'true') && configuracao.opcoes[i].hasOwnProperty('codigos')){
 let scripts = configuracao.opcoes[i]['codigos']();
 let total_scripts = Object.entries(scripts).length;
 if(total_scripts){
 let tipo = '_'+configuracao.opcoes[i]['id'];
 $('.gle_css'+tipo).removeClass('gle_css'+tipo).addClass('gle_css');
 $('.gle_scripts'+tipo).removeClass('gle_scripts'+tipo).addClass('gle_scripts');
 Object.entries(scripts).forEach(([key, value]) =>{
 if(scripts[key].hasOwnProperty('html')){
 let div = document.createElement("div");
 div.innerHTML = scripts[key]['html'];
 document.body.appendChild(div);
}
 setTimeout(function(){
 if(scripts[key].hasOwnProperty('js_interno')){
 let total_js_interno = Object.entries(scripts[key]['js_interno']).length;
 for (let y = 0;y < total_js_interno;y++){
 let script = document.createElement("script"), conteudo = scripts[key]['js_interno'][y].toString();
 conteudo = conteudo.substr(11,conteudo.length);
 conteudo = conteudo.substr(0,(conteudo.length-1));
 script.innerHTML = conteudo;
 document.body.appendChild(script);
}
}
},50);
});
}
}
}
 if(loader){GreatLoader('atualizar');}
}
}
};
}();




'use strict';

var GTooltip = function(){
 return{
 instalar :function(configuracao){
 
 if (configuracao.hasOwnProperty('elemento') == false){configuracao.elemento = '';}
 if (configuracao.hasOwnProperty('direcao') == false){configuracao.direcao = 'cima';}
 if (configuracao.direcao != 'cima' && configuracao.direcao != 'baixo' && configuracao.direcao != 'direita' && configuracao.direcao != 'esquerda'){configuracao.direcao = 'cima';}
 if (configuracao.elemento != ''){
 
 var elementos = document.querySelectorAll(configuracao.elemento);
 
 if (elementos.length){
 for (var i = 0;i < elementos.length;i++){
 elementos[i].addEventListener('mouseenter', function(){GTooltip.adicionar(this, configuracao.direcao);}, false);
 elementos[i].addEventListener('mouseout', function(){GTooltip.remover(this);}, false);
}
}
}
},
 adicionar :function(elemento, direcao){
 if (elemento.dataset.gtt != ''){
 
 var gtt = document.createElement("div");
 gtt.className = 'gtt_caixa gtt_caixa-'+direcao;
 gtt.innerHTML = '<span class="gtt_caixa-seta"></span><span class="gtt_caixa-conteudo">'+elemento.dataset.gtt+'</span>';
 document.body.appendChild(gtt);
 
 var pagina_offset = window.scrollY || window.pageYOffset;
 var elemento_offset = elemento.getBoundingClientRect();
 var gtt_width = parseFloat(getComputedStyle(gtt).width.replace("px", ""));
 var gtt_height = parseFloat(getComputedStyle(gtt).height.replace("px", ""));
 
 if (direcao == 'cima'){
 
 gtt.style.top = (pagina_offset+(elemento_offset.top-gtt_height))-10+'px';
 gtt.style.left = (elemento_offset.left+(elemento.offsetWidth/2))-(gtt_width/2)+'px';
 
 var gtt_seta = gtt.querySelector('.gtt_caixa-seta');
 gtt_seta.style.bottom = '-10px';
 gtt_seta.style.left = ((gtt_width/2)-5)+'px';
}else if (direcao == 'baixo'){
 
 gtt.style.top = (pagina_offset+(elemento_offset.top+elemento.offsetHeight))+10+'px';
 gtt.style.left = (elemento_offset.left+(elemento.offsetWidth/2))-(gtt_width/2)+'px';
 
 var gtt_seta = gtt.querySelector('.gtt_caixa-seta');
 gtt_seta.style.top = '-10px';
 gtt_seta.style.left = ((gtt_width/2)-5)+'px';
}else if (direcao == 'esquerda'){
 
 gtt.style.top = (pagina_offset+(elemento_offset.top+(elemento.offsetHeight/2))-(gtt_height/2))+'px';
 gtt.style.left = (elemento_offset.left-gtt_width)-10+'px';
 
 var gtt_seta = gtt.querySelector('.gtt_caixa-seta');
 gtt_seta.style.right = '-10px';
 gtt_seta.style.top = ((gtt_height/2)-5)+'px';
}else if (direcao == 'direita'){
 
 gtt.style.top = (pagina_offset+(elemento_offset.top+(elemento.offsetHeight/2))-(gtt_height/2))+'px';
 gtt.style.left = (elemento_offset.left+elemento.offsetWidth)+10+'px';
 
 var gtt_seta = gtt.querySelector('.gtt_caixa-seta');
 gtt_seta.style.left = '-10px';
 gtt_seta.style.top = ((gtt_height/2)-5)+'px';
}
}
},
 remover :function(elemento){
 if (elemento.dataset.gtt != ''){
 
 var gtt = document.body.querySelector('.gtt_caixa');
 
 if(gtt != null || window.navigator.sayswho.toLowerCase().indexOf('ie') !== false){gtt.remove();}
}
}
};
}();'use strict';

var gsi_instancias ={};
var gsi_intervalo ={};
var timeout_resize_slider;

var GSlideImage = function(){
 return{
 iniciar:function(id){
 let instancias;
 if(id != undefined){instancias = document.querySelectorAll('#'+id+' .gsi');}
 else{instancias = document.querySelectorAll('.gsi');}
 if(instancias){
 for (let i = 0;i < instancias.length;i++){
 if(!instancias[i].querySelectorAll('.imagem').length){continue;}
 let slider, id_slider;
 slider = instancias[i].closest('.c, .conteudo');
 id_slider = 'gsi_'+slider.parentElement.getAttribute('id');
 if(gsi_intervalo.hasOwnProperty(id_slider)){
 GSlideImage.destruir(id_slider);
 GSlideImage.iniciar(slider.parentElement.getAttribute('id'));
 continue;
}
 instancias[i].setAttribute('id',id_slider);
 gsi_instancias[id_slider] ={
 'efeito' :'slide',
 'imagens' :[],
 'imagens_ordem' :[],
 'imagens_view' :parseInt(slider.getAttribute('gpc-slide_view')),
 'imagens_margin' :parseInt(slider.getAttribute('gpc-slide_view_espaco')),
 'autoplay' :(slider.getAttribute('gpc-slide_auto') == 'true' || slider.getAttribute('gpc-slide_auto') == true ? true :false),
 'transforms' :{},
 'total':(instancias[i].querySelectorAll('.imagem') ? instancias[i].querySelectorAll('.imagem').length :0),
 'slide':0,
 'tamanho':0,
 'touch_ativo':false,
 'touch_posicao_inicio':0,
 'touch_posicao_movendo':0,
 'touch_limite':0,
 'touch_slide':0,
 'touch_mover':false,
};
 
 GSlideImage.imagens(id_slider,true);
 for (let x = 0;x < gsi_instancias[id_slider]['imagens'].length;x++){
 let elemento = instancias[i].querySelector('#'+gsi_instancias[id_slider]['imagens'][x]);
 elemento.setAttribute('posicao',x);
 elemento.style.transition = '0s linear';
 if(x == (gsi_instancias[id_slider]['imagens'].length-1) && gsi_instancias[id_slider]['imagens'].length > gsi_instancias[id_slider]['imagens_view']){elemento.style.transform = 'matrix(1, 0, 0, 1, '+(gsi_instancias[id_slider]['tamanho']*-1)+', 0)';}
 else{elemento.style.transform = 'matrix(1, 0, 0, 1, '+(gsi_instancias[id_slider]['transforms'][x])+', 0)';}
 if(x < gsi_instancias[id_slider]['imagens_view']){
 elemento.classList.add('ativo');
 elemento.style.opacity = 1;
}
}
 GSlideImage.imagens_ordem(id_slider);
 let reiniciar = false;
 if(gsi_instancias[id_slider]['imagens'].length < gsi_instancias[id_slider]['imagens_view']+2){
 let y = gsi_instancias[id_slider]['imagens'].length;
 for (let x = 0;x < gsi_instancias[id_slider]['imagens'].length;x++){
 let original = instancias[i].querySelector('#'+gsi_instancias[id_slider]['imagens'][x]);
 if(original){
 let clone = document.createElement("div");
 clone.setAttribute('id','clone_'+gsi_instancias[id_slider]['imagens'][x].replace('clone_','')+y);
 clone.classList.add('gsi_clone','imagem');
 clone.setAttribute('posicao',gsi_instancias[id_slider]['imagens'].length);
 clone.style.opacity=0;
 if(original.getAttribute('ll_src') != undefined){
 clone.setAttribute('ll_src',original.getAttribute('ll_src'));
 clone.classList.add('se_slider');
}
 if(original.getAttribute('ll_src_mobile') != undefined){
 clone.setAttribute('ll_src_mobile',original.getAttribute('ll_src_mobile'));
 clone.classList.add('se_slider');
}
 if(original.getAttribute('ll_src') == undefined && original.getAttribute('ll_src_mobile') == undefined){clone.style.backgroundImage = window.getComputedStyle(original)['backgroundImage'];}
 clone.style.width = ((100-gsi_instancias[id_slider]['imagens_margin'])/gsi_instancias[id_slider]['imagens_view'])+'%';
 clone.style.transform = 'matrix(1, 0, 0, 1, '+(gsi_instancias[id_slider]['transforms'][gsi_instancias[id_slider]['imagens_view']])+', 0)';
 instancias[i].querySelector('.gsi_imagens').appendChild(clone);
}
 y++;
}
 reiniciar = true;
}
 if(reiniciar){
 GSlideImage.destruir(id_slider,false);
 GSlideImage.iniciar(slider.parentElement.getAttribute('id'));
 continue;
}
 
 let proximo = instancias[i].querySelector('.gsi_proximo');
 if(proximo){
 proximo.addEventListener('click',function(e){GSlideImage.acao(proximo.closest('.gsi').getAttribute('id'),'proximo', e);},false);
 if(gsi_instancias[id_slider]['imagens'].length <= gsi_instancias[id_slider]['imagens_view']){proximo.style.pointerEvents = 'none';}
}
 let anterior = instancias[i].querySelector('.gsi_anterior');
 if(anterior){
 anterior.addEventListener('click',function(e){GSlideImage.acao(anterior.closest('.gsi').getAttribute('id'),'anterior', e);},false);
 if(gsi_instancias[id_slider]['imagens'].length <= gsi_instancias[id_slider]['imagens_view']){anterior.style.pointerEvents = 'none';}
}
 let touch = instancias[i].querySelector('.gsi_imagens');
 if(touch){
 touch.addEventListener('mousedown',function(e){GSlideImage.acao(touch.closest('.gsi').getAttribute('id'),'touch',e)},false);
 touch.addEventListener('mousemove',function(e){GSlideImage.acao(touch.closest('.gsi').getAttribute('id'),'touch',e);},false);
 touch.addEventListener('mouseleave',function(e){GSlideImage.acao(touch.closest('.gsi').getAttribute('id'),'touch',e);},false);
 touch.addEventListener('mouseup',function(e){GSlideImage.acao(touch.closest('.gsi').getAttribute('id'),'touch',e);},false);
 touch.addEventListener('touchstart',function(e){GSlideImage.acao(touch.closest('.gsi').getAttribute('id'),'touch',e)},false);
 touch.addEventListener('touchmove',function(e){GSlideImage.acao(touch.closest('.gsi').getAttribute('id'),'touch',e);},false);
 touch.addEventListener('touchleave',function(e){GSlideImage.acao(touch.closest('.gsi').getAttribute('id'),'touch',e)},false);
 touch.addEventListener('touchcancel',function(e){GSlideImage.acao(touch.closest('.gsi').getAttribute('id'),'touch',e)},false);
 touch.addEventListener('touchend',function(e){GSlideImage.acao(touch.closest('.gsi').getAttribute('id'),'touch',e)},false);
}
 
 if(gsi_instancias[id_slider]['autoplay'] && gsi_instancias[id_slider]['imagens'].length > gsi_instancias[id_slider]['imagens_view']){gsi_intervalo[id_slider] = setInterval(function(){GSlideImage.acao(id_slider);},(4000+i));}
 else if(!gsi_instancias[id_slider]['autoplay'] && gsi_intervalo.hasOwnProperty(id_slider)){
 gsi_instancias[id_slider]['autoplay'] = false;
 clearInterval(gsi_intervalo[id_slider]);
 delete gsi_intervalo[id_slider];
}
}
}
},
 destruir:function(id,excluir_clone){
 
 if(excluir_clone == undefined){excluir_clone = true;}
 if(id != undefined && id != ''){
 if(gsi_instancias.hasOwnProperty(id)){
 
 if(gsi_intervalo.hasOwnProperty(id)){
 gsi_intervalo[id] = clearInterval(gsi_intervalo[id]);
 delete gsi_intervalo[id];
}
 
 let instancia = document.querySelector("#"+id);
 if(instancia){
 
 let ativos = instancia.querySelectorAll('.ativo');
 if(ativos.length){
 for (let x = 0;x < ativos.length;x++){
 ativos[x].classList.remove("ativo");
 ativos[x].style.opacity = 0;
 ativos[x].style.display = '';
 ativos[x].style.transform = '';
 ativos[x].style.transition = '';
}
}
 
 if(excluir_clone){
 let clones = instancia.querySelectorAll('.gsi_clone');
 if(clones.length){for (let x = 0;x < clones.length;x++){clones[x].remove();}}
}
 
 instancia.removeAttribute('id');
}
 
 delete gsi_instancias[id];
}
}else{
 
 let instancias = document.querySelectorAll(".gsi");
 if (instancias.length){for (let i = 0;i < instancias.length;i++){if(instancias[i].id != '' && instancias[i].id != undefined){GSlideImage.destruir(instancias[i].id);}}}
}
},
 pausar:function(id){
 
 let instancias;
 if(id != undefined){instancias = document.querySelectorAll('#'+id);}
 else{instancias = document.querySelectorAll('.gsi');}
 for (let i = 0;i < instancias.length;i++){
 let id_slider = instancias[i].getAttribute('id');
 if(gsi_intervalo.hasOwnProperty(id_slider)){
 gsi_intervalo[id_slider] = clearInterval(gsi_intervalo[id_slider]);
 delete gsi_intervalo[id_slider];
}
}
},
 reiniciar:function(id){
 let instancias;
 if(id != undefined){instancias = document.querySelectorAll('#'+id);}
 else{instancias = document.querySelectorAll('.gsi');}
 if(instancias){
 
 for (let i = 0;i < instancias.length;i++){
 if(instancias[i]){
 let id_slider = instancias[i].getAttribute('id');
 GSlideImage.destruir(id_slider);
 GSlideImage.iniciar(instancias[i].parentElement.getAttribute('id'));
}
}
}
},
 imagens:function(id_slider, atualizar){
 let instancias;
 if(atualizar == undefined){atualizar = false;}
 if(id_slider != undefined){instancias = document.querySelectorAll('#'+id_slider);}
 else{instancias = document.querySelectorAll('.gsi');}
 if(instancias){
 for (let i = 0;i < instancias.length;i++){
 if(instancias[i]){
 if(!instancias[i].querySelectorAll('.imagem').length){continue;}
 let id = instancias[i].getAttribute('id');
 let imagens = instancias[i].querySelectorAll('.imagem');
 let elemento;
 let width = parseFloat(window.getComputedStyle(instancias[i])['width'])/gsi_instancias[id]['imagens_view'];
 gsi_instancias[id]['tamanho'] = width;
 gsi_instancias[id]['margin'] = (gsi_instancias[id]['imagens_margin'] > 0 ? gsi_instancias[id]['imagens_margin'] :0);
 for (let x = 0;x < imagens.length;x++){
 elemento = imagens[x];
 if(elemento.classList.contains('ativo')){elemento.style.opacity = 1;}
 else{elemento.style.opacity = 0;}
 if(atualizar){elemento.style.transition = '0s linear';}
 elemento.style.width = ((100-gsi_instancias[id]['imagens_margin'])/gsi_instancias[id]['imagens_view'])+'%';
 gsi_instancias[id]['imagens'][x] = elemento.getAttribute('id');
}
 
 if(gsi_instancias[id]['imagens_view'] == 3){
 for (let x = -1;x <= gsi_instancias[id]['imagens_view'];x++){
 if(x == gsi_instancias[id]['imagens_view']){
 gsi_instancias[id]['transforms'][x] = (gsi_instancias[id]['tamanho']*x)+(gsi_instancias[id]['tamanho']*((gsi_instancias[id]['margin']*1.5)/100));
}else if(x == 0){gsi_instancias[id]['transforms'][x]= 0;}
 else{
 if(x == -1){gsi_instancias[id]['transforms'][x]= (gsi_instancias[id]['tamanho']*x)-(gsi_instancias[id]['tamanho']*((gsi_instancias[id]['margin']*.5)/100));}
 else if(x == 1){gsi_instancias[id]['transforms'][x]= (gsi_instancias[id]['tamanho']*x)+(gsi_instancias[id]['tamanho']*((gsi_instancias[id]['margin']*.5)/100));}
 else{gsi_instancias[id]['transforms'][x]= (gsi_instancias[id]['tamanho']*x)+(gsi_instancias[id]['tamanho']*(gsi_instancias[id]['margin']/100));}
}
}
}else{
 for (let x = -1;x <= gsi_instancias[id]['imagens_view'];x++){
 if(x == gsi_instancias[id]['imagens_view']){gsi_instancias[id]['transforms'][x]= (gsi_instancias[id]['tamanho']*x)+((gsi_instancias[id]['tamanho']*2)*(gsi_instancias[id]['margin']/100));}
 else if(x == 0){gsi_instancias[id]['transforms'][x]= 0;}
 else{
 if(x == -1){gsi_instancias[id]['transforms'][x]= (gsi_instancias[id]['tamanho']*x)-(gsi_instancias[id]['tamanho']*(gsi_instancias[id]['margin']/100));}
 else{gsi_instancias[id]['transforms'][x]= (gsi_instancias[id]['tamanho']*x)+(gsi_instancias[id]['tamanho']*(gsi_instancias[id]['margin']/100));}
}
}
}
 
 for (let y = 0;y < gsi_instancias[id]['imagens_ordem'].length;y++){
 for (let x = 0;x < imagens.length;x++){
 if(gsi_instancias[id]['imagens_ordem'][y] == imagens[x].getAttribute('id')){
 imagens[x].style.opacity = 1;
 imagens[x].style.transform = 'matrix(1, 0, 0, 1, '+gsi_instancias[id]['transforms'][y-1]+', 0)';
 break;
}
}
}
}
}
}
},
 imagens_ordem:function(id){
 let instancia = document.querySelector("#"+id);
 if(instancia){
 if(!instancia.querySelectorAll('.imagem').length){return;}
 let elementos_mostrando = instancia.querySelectorAll('.ativo'),elementos = [];
 for (let i = 0;i < elementos_mostrando.length;i++){
 if(elementos.length){
 if(parseInt(instancia.querySelector('#'+elementos[(elementos.length-1)]).getAttribute('posicao')) < parseInt(elementos_mostrando[i].getAttribute('posicao'))){elementos.push(elementos_mostrando[i].getAttribute('id'));}
 else{elementos.unshift(elementos_mostrando[i].getAttribute('id'));}
}else{elementos[0]=elementos_mostrando[i].getAttribute('id');}
}
 
 if(elementos.length){
 let anterior, proximo, posicao = instancia.querySelector('#'+elementos[(elementos.length-1)]).getAttribute('posicao'), atual_teste = instancia.querySelector('#'+elementos[(elementos.length-1)]), continuar = true,x = 0;
 while (continuar){
 if(atual_teste.nextSibling){
 atual_teste = atual_teste.nextSibling;
}else{atual_teste = instancia.querySelector(".gsi_imagens .imagem:first-child");}
 if(!atual_teste.classList.contains('ativo') || x == (gsi_instancias[id]['total']-1)){
 continuar = false;
 proximo = atual_teste;
}
 x++;
}
 elementos.push(proximo.getAttribute('id'));
 
 posicao = instancia.querySelector('#'+elementos[0]).getAttribute('posicao');
 atual_teste = instancia.querySelector('#'+elementos[0]);
 continuar = true;
 x = 0;
 while (continuar){
 if(atual_teste.previousSibling){atual_teste = atual_teste.previousSibling;}
 else{atual_teste = instancia.querySelector(".gsi_imagens div:last-child");}
 if(!atual_teste.classList.contains('ativo') || x == (gsi_instancias[id]['total']-1)){
 continuar = false;
 anterior = atual_teste;
}
 x++;
}
 elementos.unshift(anterior.getAttribute('id'));
 
 let elementos_ordem = [];
 if(gsi_instancias[id]['imagens_view'] == 3){
 if(parseInt(instancia.querySelector('#'+elementos[3]).getAttribute('posicao')) == gsi_instancias[id]['total']-1 && parseInt(instancia.querySelector('#'+elementos[1]).getAttribute('posicao')) == 0){
 elementos_ordem[0] = elementos[0];
 if(proximo.getAttribute('posicao') == '1'){
 elementos_ordem[1] = elementos[2];
 elementos_ordem[2] = elementos[3];
 elementos_ordem[3] = elementos[1];
}else if(proximo.getAttribute('posicao') == '2'){
 elementos_ordem[1] = elementos[3];
 elementos_ordem[2] = elementos[1];
 elementos_ordem[3] = elementos[2];
}
 elementos_ordem[4] = elementos[4];
}else{elementos_ordem = elementos;}
}else if(gsi_instancias[id]['imagens_view'] == 2){
 if(parseInt(instancia.querySelector('#'+elementos[2]).getAttribute('posicao')) == gsi_instancias[id]['total']-1 && parseInt(instancia.querySelector('#'+elementos[1]).getAttribute('posicao')) == 0){
 elementos_ordem[0] = elementos[0];
 elementos_ordem[1] = elementos[2];
 elementos_ordem[2] = elementos[1];
 elementos_ordem[3] = elementos[3];
}else{elementos_ordem = elementos;}
}else{elementos_ordem = elementos;}
 gsi_instancias[id]['imagens_ordem'] = elementos_ordem;
}
}
},
 acao:function(id,acao,evento){
 if(evento == undefined){evento = null;}
 else{
 if(evento.type.substr(0,5) != 'touch' || (evento.type == 'touchmove' && gsi_instancias[id]['touch_posicao_movendo'] != 0)){
 evento.preventDefault();
 evento.stopPropagation();
}
}
 if(acao == undefined){acao = 'proximo';}
 let instancia = document.querySelector("#"+id);
 if(instancia){
 
 let proximo = instancia.querySelector('.gsi_proximo');
 let anterior = instancia.querySelector('.gsi_anterior');
 if(acao == 'proximo' || acao == 'anterior'){
 if(proximo){proximo.style.pointerEvents = 'none';}
 if(anterior){anterior.style.pointerEvents = 'none';}
 instancia.querySelector('.gsi_imagens').style.pointerEvents = 'none';
}
 let tempo = 400;
 
 if(gsi_instancias[id]['autoplay']){
 clearInterval(gsi_intervalo[id]);
 delete gsi_intervalo[id];
}
 
 if (acao == 'anterior'){
 if(gsi_instancias[id]['imagens_ordem'][0] == gsi_instancias[id]['imagens_ordem'][(gsi_instancias[id]['imagens_view']+1)]){
 let ultimo = instancia.querySelector('#'+gsi_instancias[id]['imagens_ordem'][0]);
 if(ultimo){
 ultimo.style.transition = '0s linear';
 ultimo.style.opacity = 0;
 ultimo.style.transform = 'matrix(1, 0, 0, 1, '+gsi_instancias[id]['transforms'][-1]+', 0)';
}
}
 if(gsi_instancias[id]['efeito'] == 'fade'){
 let elemento_mover;
 for (let i = 0;i <= (gsi_instancias[id]['imagens_view']+1);i++){
 elemento_mover = instancia.querySelector('#'+gsi_instancias[id]['imagens_ordem'][i]);
 if(elemento_mover){
 elemento_mover.style.transition = 'opacity '+((tempo*40)/100).toFixed(2)+'ms linear';
 elemento_mover.style.opacity = 0;
}
}
}
 
 let elemento_mover;
 for (let i = 0;i <= (gsi_instancias[id]['imagens_view']+1);i++){
 if(i < (gsi_instancias[id]['imagens_view'] + 1) && (gsi_instancias[id]['imagens_ordem'][0] != gsi_instancias[id]['imagens_ordem'][i] || i == 0)){
 elemento_mover = instancia.querySelector('#'+gsi_instancias[id]['imagens_ordem'][i]);
 if(elemento_mover){
 elemento_mover.style.transition = (gsi_instancias[id]['efeito'] == 'fade' ? 'opacity' :'transform')+' '+tempo+'ms linear';
 elemento_mover.classList.add('ativo');
 if(i == gsi_instancias[id]['imagens_view']){elemento_mover.classList.remove('ativo');}
 if(i > gsi_instancias[id]['imagens_view']){elemento_mover.style.transform = 'matrix(1, 0, 0, 1, '+gsi_instancias[id]['transforms'][gsi_instancias[id]['imagens_view']]+', 0)';}
 else{elemento_mover.style.transform = 'matrix(1, 0, 0, 1, '+gsi_instancias[id]['transforms'][i]+', 0)';}
 elemento_mover.style.opacity = 1;
}
}
}
 
}else if(acao == 'proximo'){
 if(gsi_instancias[id]['imagens_ordem'][0] == gsi_instancias[id]['imagens_ordem'][(gsi_instancias[id]['imagens_view']+1)]){
 let ultimo = instancia.querySelector('#'+gsi_instancias[id]['imagens_ordem'][(gsi_instancias[id]['imagens_view']+1)]);
 if(ultimo){
 ultimo.style.transition = '0s linear';
 ultimo.style.opacity = 0;
 ultimo.style.transform = 'matrix(1, 0, 0, 1, '+gsi_instancias[id]['transforms'][gsi_instancias[id]['imagens_view']]+', 0)';
}
}
 if(gsi_instancias[id]['efeito'] == 'fade'){
 let elemento_mover;
 for (let i = 0;i <= (gsi_instancias[id]['imagens_view']+1);i++){
 elemento_mover = instancia.querySelector('#'+gsi_instancias[id]['imagens_ordem'][i]);
 if(elemento_mover){
 elemento_mover.style.transition = 'opacity '+((tempo*40)/100).toFixed(2)+'ms linear';
 elemento_mover.style.opacity = 0;
}
}
}
 
 let elemento_mover;
 for (let i = 0;i <= (gsi_instancias[id]['imagens_view']+1);i++){
 elemento_mover = instancia.querySelector('#'+gsi_instancias[id]['imagens_ordem'][i]);
 if(elemento_mover){
 elemento_mover.style.transition = (gsi_instancias[id]['efeito'] == 'fade' ? 'opacity' :'transform')+' '+tempo+'ms linear';
 if(i <= 1){elemento_mover.style.transform = 'matrix(1, 0, 0, 1, '+gsi_instancias[id]['transforms'][-1]+', 0)';}
 else{elemento_mover.style.transform = 'matrix(1, 0, 0, 1, '+gsi_instancias[id]['transforms'][(i-2)]+', 0)';}
 if(i <= 1){elemento_mover.classList.remove('ativo');}
 else{elemento_mover.classList.add('ativo');}
 elemento_mover.style.opacity = 1;
}
}
 
}else if(acao == 'touch'){
 if((evento.type == 'mousedown' && evento.buttons == 1) || evento.type == 'touchstart'){
 gsi_instancias[id]['touch_ativo'] = true;
 instancia.querySelector(".gsi_imagens").classList.add('gsi_imagens_drag');
 if(gsi_instancias[id]['touch_mover']){clearTimeout(gsi_instancias[id]['touch_slide']);}
 gsi_instancias[id]['touch_ativo'] = true;
 
 instancia.querySelector(".gsi_proximo").style.pointerEvents = 'none';
 instancia.querySelector(".gsi_anterior").style.pointerEvents = 'none';
 instancia.querySelector(".gsi_proximo").style.opacity = 0;
 instancia.querySelector(".gsi_anterior").style.opacity = 0;
 
 gsi_instancias[id]['touch_mover'] = true;
 gsi_instancias[id]['touch_limite'] = (instancia.getClientRects()[0]['width']*.5);
 
 if (evento.type === "touchstart"){gsi_instancias[id]['touch_posicao_inicio'] = (evento.touches[0].clientX-gsi_instancias[id]['touch_posicao_inicio']);}
 else{gsi_instancias[id]['touch_posicao_inicio'] = evento.clientX - gsi_instancias[id]['touch_posicao_inicio'];}
}else if (evento.type == 'mousemove' || evento.type == 'touchmove'){
 if(gsi_instancias[id]['touch_ativo'] && gsi_instancias[id]['touch_mover']){
 
 if (evento.type === "touchmove"){
 if(evento.touches[0].clientX==gsi_instancias[id]['touch_posicao_inicio']){gsi_instancias[id]['touch_posicao_movendo'] = 0;}
 else{
 gsi_instancias[id]['touch_posicao_movendo'] = Math.log(Math.abs(evento.touches[0].clientX - gsi_instancias[id]['touch_posicao_inicio']));
 if(evento.touches[0].clientX - gsi_instancias[id]['touch_posicao_inicio'] < 0){gsi_instancias[id]['touch_posicao_movendo'] = (gsi_instancias[id]['touch_posicao_movendo']*-1);}
 gsi_instancias[id]['touch_posicao_movendo'] += (evento.touches[0].clientX-gsi_instancias[id]['touch_posicao_inicio'])*.55;
}
}else{
 if(evento.clientX==gsi_instancias[id]['touch_posicao_inicio']){gsi_instancias[id]['touch_posicao_movendo'] = 0;}
 else{
 gsi_instancias[id]['touch_posicao_movendo'] = Math.log(Math.abs(evento.clientX-gsi_instancias[id]['touch_posicao_inicio']));
 if(evento.clientX - gsi_instancias[id]['touch_posicao_inicio'] < 0){gsi_instancias[id]['touch_posicao_movendo'] = (gsi_instancias[id]['touch_posicao_movendo']*-1);}
 gsi_instancias[id]['touch_posicao_movendo'] += (evento.clientX-gsi_instancias[id]['touch_posicao_inicio'])*.55;
 
}
}
 if(gsi_instancias[id]['touch_posicao_movendo'] > 0){
 for (let i = 0;i <= (gsi_instancias[id]['imagens_view']+1);i++){
 let elemento;
 elemento = instancia.querySelector('#'+gsi_instancias[id]['imagens_ordem'][i]);
 elemento.style.opacity = 1;
 elemento.style.transition = '';
 elemento.style.transform = 'matrix(1, 0, 0, 1, '+(gsi_instancias[id]['transforms'][(i-1)]+gsi_instancias[id]['touch_posicao_movendo'])+',0)';
}
}else{
 for (let i = 0;i <= (gsi_instancias[id]['imagens_view']+1);i++){
 let elemento;
 elemento = instancia.querySelector('#'+gsi_instancias[id]['imagens_ordem'][i]);
 elemento.style.opacity = 1;
 elemento.style.transition = '';
 elemento.style.transform = 'matrix(1, 0, 0, 1, '+(gsi_instancias[id]['transforms'][(i-1)]+gsi_instancias[id]['touch_posicao_movendo'])+',0)';
}
}
}
}else{
 instancia.querySelector(".gsi_imagens").classList.remove('gsi_imagens_drag');
 if(gsi_instancias[id]['touch_ativo'] && gsi_instancias[id]['touch_mover']){
 let elemento;
 if(gsi_instancias[id]['touch_posicao_movendo'] >= ((gsi_instancias[id]['tamanho']*gsi_instancias[id]['imagens_view'])/6)){
 for (let i = 0;i <= (gsi_instancias[id]['imagens_view']+1);i++){
 elemento = instancia.querySelector('#'+gsi_instancias[id]['imagens_ordem'][i]);
 elemento.style.opacity = 1;
 elemento.classList.add('ativo');
 elemento.style.transition = 'transform 400ms linear';
 if (i >= gsi_instancias[id]['imagens_view']){
 elemento.classList.remove('ativo');
 elemento.style.transform = 'matrix(1, 0, 0, 1, '+gsi_instancias[id]['transforms'][gsi_instancias[id]['imagens_view']]+', 0)';
}else{elemento.style.transform = 'matrix(1, 0, 0, 1, '+gsi_instancias[id]['transforms'][i]+', 0)';}
}
}else if (gsi_instancias[id]['touch_posicao_movendo'] <= (((gsi_instancias[id]['tamanho']*gsi_instancias[id]['imagens_view'])/6)*-1)){
 for (let i = 0;i <= (gsi_instancias[id]['imagens_view']+1);i++){
 elemento = instancia.querySelector('#'+gsi_instancias[id]['imagens_ordem'][i]);
 elemento.style.transition = 'transform 400ms linear';
 elemento.style.opacity = 1;
 if(i <= 1){
 elemento.classList.remove('ativo');
 elemento.style.transform = 'matrix(1, 0, 0, 1, '+gsi_instancias[id]['transforms'][-1]+', 0)';
}else{
 elemento.classList.add('ativo');
 elemento.style.transform = 'matrix(1, 0, 0, 1, '+gsi_instancias[id]['transforms'][i-2]+', 0)';
}
}
}else{
 for (let i = 0;i <= (gsi_instancias[id]['imagens_view']+1);i++){
 elemento = instancia.querySelector('#'+gsi_instancias[id]['imagens_ordem'][i]);
 elemento.style.transition = 'transform 400ms linear';
 elemento.style.opacity = 1;
 if(i == 0){
 elemento.classList.remove('ativo');
 elemento.style.transform = 'matrix(1, 0, 0, 1, '+gsi_instancias[id]['transforms'][-1]+', 0)';
}else if(i == (gsi_instancias[id]['imagens_view']+1)){
 elemento.classList.remove('ativo');
 elemento.style.transform = 'matrix(1, 0, 0, 1, '+gsi_instancias[id]['transforms'][gsi_instancias[id]['imagens_view']]+', 0)';
}else{
 elemento.classList.add('ativo');
 elemento.style.transform = 'matrix(1, 0, 0, 1, '+gsi_instancias[id]['transforms'][i-1]+', 0)';
}
}
}
 gsi_instancias[id]['touch_slide'] = setTimeout(function(){
 GSlideImage.imagens_ordem(id);
 let ultimo = instancia.querySelector('#'+gsi_instancias[id]['imagens_ordem'][(gsi_instancias[id]['imagens_view']+1)]);
 ultimo.style.transition = '0s';
 ultimo.classList.remove('ativo');
 ultimo.style.opacity = 0;
 ultimo.style.transform = 'matrix(1, 0, 0, 1, '+gsi_instancias[id]['transforms'][gsi_instancias[id]['imagens_view']]+',0)';
 ultimo = instancia.querySelector('#'+gsi_instancias[id]['imagens_ordem'][0]);
 ultimo.style.transition = '0s';
 ultimo.classList.remove('ativo');
 ultimo.style.opacity = 0;
 ultimo.style.transform = 'matrix(1, 0, 0, 1, '+gsi_instancias[id]['transforms'][-1]+',0)';
 gsi_instancias[id]['touch_mover'] = false;
},tempo);
}
 instancia.querySelector(".gsi_imagens").style.pointerEvents = '';
 gsi_instancias[id]['touch_ativo'] = false;
 gsi_instancias[id]['touch_posicao_inicio'] = 0;
 gsi_instancias[id]['touch_posicao_movendo'] = 0;
 if(proximo && gsi_instancias[id]['imagens'].length > gsi_instancias[id]['imagens_view']){
 proximo.style.pointerEvents = '';
 proximo.style.opacity = '';
}
 if(anterior && gsi_instancias[id]['imagens'].length > gsi_instancias[id]['imagens_view']){
 anterior.style.pointerEvents = '';
 anterior.style.opacity = '';
}
}
}
 if(acao != 'touch'){
 let tempo_touch = (parseFloat(150)*2+parseFloat((((150*45)/100).toFixed(0))));
 gsi_instancias[id]['slide'] = setTimeout(function(){
 GSlideImage.imagens_ordem(id);
 if(acao == 'proximo'){
 let ultimo = instancia.querySelector('#'+gsi_instancias[id]['imagens_ordem'][(gsi_instancias[id]['imagens_view']+1)]);
 if(ultimo){
 ultimo.style.transition = '0s linear';
 ultimo.classList.remove('ativo');
 ultimo.style.opacity = 0;
 ultimo.style.transform = 'matrix(1, 0, 0, 1, '+gsi_instancias[id]['transforms'][gsi_instancias[id]['imagens_view']]+', 0)';
}
 if(gsi_instancias[id]['imagens_ordem'][0] != gsi_instancias[id]['imagens_ordem'][(gsi_instancias[id]['imagens_view']+1)]){
 ultimo = instancia.querySelector('#'+gsi_instancias[id]['imagens_ordem'][0]);
 if(ultimo){
 ultimo.style.transition = '0s linear';
 ultimo.classList.remove('ativo');
 ultimo.style.opacity = 0;
 ultimo.style.transform = 'matrix(1, 0, 0, 1, '+gsi_instancias[id]['transforms'][-1]+', 0)';
}
}
}else{
 let ultimo = instancia.querySelector('#'+gsi_instancias[id]['imagens_ordem'][(gsi_instancias[id]['imagens_view']+1)]);
 if(ultimo){
 ultimo.style.transition = '0s linear';
 ultimo.classList.remove('ativo');
 ultimo.style.opacity = 0;
}
 if(gsi_instancias[id]['imagens_ordem'][0] != gsi_instancias[id]['imagens_ordem'][(gsi_instancias[id]['imagens_view']+1)]){
 if(ultimo){ultimo.style.transform = 'matrix(1, 0, 0, 1, '+gsi_instancias[id]['transforms'][gsi_instancias[id]['imagens_view']]+', 0)';}
 ultimo = instancia.querySelector('#'+gsi_instancias[id]['imagens_ordem'][0]);
 if(ultimo){
 ultimo.style.transition = '0s linear';
 ultimo.classList.remove('ativo');
 ultimo.style.opacity = 0;
 ultimo.style.transform = 'matrix(1, 0, 0, 1, '+gsi_instancias[id]['transforms'][-1]+', 0)';
}
}else{if(ultimo){ultimo.style.transform = 'matrix(1, 0, 0, 1, '+gsi_instancias[id]['transforms'][-1]+', 0)';}}
}
 if(proximo && gsi_instancias[id]['imagens'].length > gsi_instancias[id]['imagens_view']){proximo.style.pointerEvents = '';}
 if(anterior && gsi_instancias[id]['imagens'].length > gsi_instancias[id]['imagens_view']){anterior.style.pointerEvents = '';}
 instancia.querySelector('.gsi_imagens').style.pointerEvents = '';
},tempo_touch);
}
 
 if(gsi_instancias[id]['autoplay']){gsi_intervalo[id] = setInterval(function(){GSlideImage.acao(id);},4000);}
}else{
 
 if(gsi_instancias.hasOwnProperty(id)){
 if(gsi_instancias[id]['autoplay']){
 clearInterval(gsi_intervalo[id]);
 delete gsi_intervalo[id];
}
}
}
}
}
}();
$(function(){
 GSlideImage.iniciar();
 window.addEventListener('resize', function(e){
 
 e.preventDefault();
 e.stopPropagation();
 
 var altura = window.innerHeight, largura = window.innerWidth;
 if(timeout_resize_slider){clearTimeout(timeout_resize_slider);timeout_resize_slider = null;}
 timeout_resize_slider = setTimeout(function(){
 if(altura == window.innerHeight && largura == window.innerWidth){
 let instancias = document.querySelectorAll(".gsi");
 if(instancias){
 for (let i = 0;i < instancias.length;i++){
 if(instancias[i].getAttribute('id') != '' && instancias[i].getAttribute('id') != null && instancias[i].getAttribute('id') != undefined){GSlideImage.imagens(instancias[i].getAttribute('id'),true);}
 else{GSlideImage.iniciar(instancias[i].closest('.c, .conteudo').getAttribute('id'));}
}
}
}
},500);
});
});
var gqa_status = false;
var gqa_fila = [];
var gqa_executando = false;

function ControlarFilaGQA(){
 
 if (gqa_executando){clearTimeout(gqa_executando);}
 
 gqa_executando = setInterval(function(){ExecutarFilaGQA();}, (document.hidden) ? 8000 :100);
}



function AdicionarFilaGQA(parametros){
 
 if (parametros.hasOwnProperty('verbo') == false){parametros.verbo = 'POST';}
 if (parametros.hasOwnProperty('url') == false){return false;}
 if (parametros.hasOwnProperty('uri') == false){parametros.uri = '';}
 else{
 if(typeof parametros.uri == 'object' || typeof parametros.uri == 'array'){
 parametros.uri = FormatarUriGQA(parametros.uri);
}
}
 if (parametros.hasOwnProperty('extensao') == false){parametros.extensao = 'json';}
 if (parametros.hasOwnProperty('prioridade') == false){parametros.prioridade = 'baixa';}
 if (parametros.hasOwnProperty('carregar') == false){parametros.carregar = false;}
 if (parametros.hasOwnProperty('timeout') == false){parametros.timeout = 10000;}
 
 if (parametros.prioridade == 'alta'){
 
 EnviarAjaxGQA(parametros);
}else if (parametros.prioridade == 'media'){
 
 gqa_fila.unshift([parametros]);
}else if (parametros.prioridade == 'baixa'){
 
 gqa_fila.push([parametros]);
}
}
function ExecutarFilaGQA(){
 if (gqa_status == false && gqa_fila.length){
 
 var proximo = gqa_fila.shift();
 
 gqa_status = true;
 
 EnviarAjaxGQA(proximo[0])
}
}
function EnviarAjaxGQA(parametros){
 
 if (parametros.hasOwnProperty('verbo') == false){parametros.verbo = 'POST';}
 if (parametros.hasOwnProperty('url') == false){return false;}
 if (parametros.hasOwnProperty('uri') == false){parametros.uri = '';}
 if (parametros.hasOwnProperty('extensao') == false){parametros.extensao = 'json';}
 if (parametros.hasOwnProperty('prioridade') == false){parametros.prioridade = 'baixa';}
 if (parametros.hasOwnProperty('carregar') == false){parametros.carregar = false;}
 if (parametros.hasOwnProperty('timeout') == false){parametros.timeout = 10000;}
 if (parametros.hasOwnProperty('externo') == false){parametros.externo = false;}
 if (parametros.hasOwnProperty('funcao_erro') == false){parametros.funcao_erro = '';}
 if (parametros.hasOwnProperty('funcao_sucesso') == false){parametros.funcao_sucesso = '';}
 
 if (parametros.carregar == true){GLoading.carregar({'ativar':true});}
 
 if (parametros.verbo == 'POST'){
 var url = parametros.url;
 var dados = parametros.uri;
}else{
 if (parametros.uri){
 var url = parametros.url+'?'+parametros.uri;
}else{var url = parametros.url;}
 var dados = '';
}
 
 var requisicao = new XMLHttpRequest();
 requisicao.open(parametros.verbo, url, true);
 requisicao.timeout = parametros.timeout;
 if (parametros.extensao){requisicao.responseType = parametros.extensao;}
 requisicao.withCredentials = true;
 requisicao.overrideMimeType("application/"+parametros.extensao);
 if (parametros.verbo == 'POST'){
 if(parametros.externo){
 requisicao.withCredentials = false;
 requisicao.setRequestHeader('Content-Type', "application/json");
}else{
 requisicao.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
}
}
 if (parametros.externo){
 requisicao.setRequestHeader('Access-Control-Allow-Methods', 'POST');
 requisicao.setRequestHeader('Access-Control-Allow-Headers', "*");
 requisicao.setRequestHeader('Access-Control-Allow-Origin', '*');
}
 requisicao.onreadystatechange = function(){
 if (this.readyState == 4){
 if (this.status == 200){
 
 if (this.responseType == 'json'){
 var resposta = this.response;
}else if (this.responseType == 'text' || this.responseType == ''){
 var resposta = this.responseText;
}else{
 var resposta = this.response;
}
 
 if (parametros.funcao_sucesso){parametros.funcao_sucesso(resposta);}
 
 GLoading.carregar({'ativar':false});
 
 gqa_status = false;
}else{
 
 if (parametros.funcao_erro){parametros.funcao_erro(this);}
 
 GLoading.carregar({'ativar':false});
 
 
 
 gqa_status = false;
}
}
};
 requisicao.send(dados);
 requisicao = null;

 

 
}
function FormatarUriGQA(post, prefixo){
 var retorno = [], post_chave, post_valor;
 for(var p in post){
 if (!post.hasOwnProperty(p)){continue;}
 if (~p.indexOf('[')){post_chave = prefixo ? prefixo + "[" + p.substring(0, p.indexOf('[')) + "]" + p.substring(p.indexOf('[')) :p;}
 else{post_chave = prefixo ? prefixo + "[" + p + "]" :p;}
 post_valor = post[p];
 retorno.push(typeof post_valor == "object" ? FormatarUriGQA(post_valor, post_chave) :encodeURIComponent(post_chave) + "=" + encodeURIComponent(post_valor));
}
 return retorno.join("&");
}
$(function(){
 
 if(document.addEventListener){document.addEventListener("visibilitychange", ControlarFilaGQA);}
 
 ControlarFilaGQA();
});'use strict';

var go_elementos = [];

var GObserver = function(){
 return{
 iniciar :function (){
 
 window.addEventListener('resize', function(){GObserver.observar(true);}, false);
 window.addEventListener('scroll', function(){GObserver.observar(true);}, false);
},
 instalar :function(configuracao){
 
 if (configuracao.hasOwnProperty('elemento') == false){configuracao.elemento = '';}
 if (configuracao.hasOwnProperty('antecipacao') == false){configuracao.antecipacao = 0;}
 if (configuracao.hasOwnProperty('executar') == false){configuracao.executar = '';}
 
 if (configuracao.elemento != ''){
 
 var elementos = document.querySelectorAll(configuracao.elemento);
 
 if (elementos.length){
 for (var i = 0;i < elementos.length;i++){
 if (elementos[i].id){
 
 var instalar ={
 'elemento' :'#'+elementos[i].id,
 'antecipacao' :configuracao.antecipacao,
 'executar' :configuracao.executar
};
 
 go_elementos.push(instalar);
}
}
 
 GObserver.observar(false);
}
}
},
 observar :function(antecipacao){
 
 if (go_elementos.length){
 
 var janela_top = window.scrollY || window.pageYOffset;
 var janela_bottom = janela_top+window.innerHeight;
 for(var i = 0;i < go_elementos.length;i++){
 
 var antecipar = (antecipacao == true ? go_elementos[i].antecipacao :0);
 var elemento = document.querySelector(go_elementos[i].elemento);
 if (elemento !== null && elemento !== undefined){
 var elemento_estilo = window.getComputedStyle(elemento);
 if (elemento_estilo.display !== 'none'){
 var elemento_top = elemento.getBoundingClientRect().top+janela_top;
 var elemento_bottom = elemento_top+elemento.clientHeight;
 
 if (elemento_bottom >= janela_top && (elemento_top-antecipar) <= janela_bottom){
 
 (function(index){go_elementos[index].executar(document.querySelector(go_elementos[index].elemento));})(i);
 
 go_elementos.splice(i, 1);
 
 this.observar(antecipacao);break;
}
}
}
}
}
}
};
}();


GObserver.iniciar();

 elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b6046a6076748769':{'fs':'18', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6046a6076748769':{'desktop':14, 'mobile':3.71875}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b629afa547740439':{'fs':'14', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b629afa547740439':{'desktop':8.4526, 'mobile':8.1658}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b5f15ef772679047':{'fs':'14', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b5f15ef772679047':{'desktop':542.519, 'mobile':287.059}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b5f1c60248206068_m':{'fs':'18', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b5f1c60248206068_m':{'desktop':111.922, 'mobile':444.94}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b604728133989649':{'fs':'24', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b604728133989649':{'desktop':22.0938, 'mobile':15.8646}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b6047bc953106169_m':{'fs':'14', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6047bc953106169_m':{'desktop':26.055, 'mobile':448.547}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b60ae0e667348809':{'desktop':236.792, 'mobile':185.257}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b60b0bd696418803':{'fs':'14', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b60b0bd696418803':{'desktop':201.84, 'mobile':85.0248}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b60b249737315691':{'fs':'17', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b60b249737315691':{'desktop':17.4102, 'mobile':11.9183}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b60c83a513187429':{'fs':'15', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b60c83a513187429':{'desktop':644.518, 'mobile':382.115}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b60caee045560213':{'fs':'50', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b60caee045560213':{'desktop':654.486, 'mobile':392.722}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b60cd5e964497681':{'desktop':531.422, 'mobile':558.384}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61485e149923953':{'desktop':65.496, 'mobile':52.704}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6149f3783002065':{'desktop':267.469, 'mobile':99.542}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b614b7e847730342':{'desktop':103.116, 'mobile':70.878}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b62350e760170667':{'desktop':8.7096, 'mobile':16.5}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b62950d561207930':{'fs':'18', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b62950d561207930':{'desktop':769.503, 'mobile':480.752}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b62aba8187916766':{'desktop':183.457, 'mobile':86.455}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b630340868030497':{'fs':'13', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b630340868030497':{'desktop':737.518, 'mobile':458.715}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b5f1c60248206068_d':{'fs':'18', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b5f1c60248206068_d':{'desktop':111.922, 'mobile':444.94}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b60cc42558769364':{'fs':'15', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b60cc42558769364':{'desktop':45.5086, 'mobile':43.1456}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b60f050369291410':{'fs':'18', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b60f050369291410':{'desktop':359.014, 'mobile':384.178}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b612365275385357':{'fs':'14', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b612365275385357':{'desktop':104.504, 'mobile':80.083}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b612500923834398':{'fs':'14', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b612500923834398':{'desktop':403.597, 'mobile':444.902}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b61263f966901083':{'fs':'18', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61263f966901083':{'desktop':580.905, 'mobile':631.512}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b612774976025126':{'fs':'14', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b612774976025126':{'desktop':619.682, 'mobile':667.043}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b612892314220813':{'fs':'14', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b612892314220813':{'desktop':749.661, 'mobile':794.951}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b622f8d843975779':{'fs':'18', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b622f8d843975779':{'desktop':926.971, 'mobile':999.615}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b6231c1768796779':{'fs':'14', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6231c1768796779':{'desktop':965.741, 'mobile':1033.53}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b6291ac439719793':{'fs':'18', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6291ac439719793':{'desktop':1108.6, 'mobile':1182.4}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b62e0cc369355865':{'desktop':763.299, 'mobile':800.906}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b6129c6256037586':{'fs':'18', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6129c6256037586':{'desktop':29.457, 'mobile':21.37}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b612af1595519439':{'fs':'13', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b612af1595519439':{'desktop':74.4971, 'mobile':57.122}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b612c3a299825184':{'fs':'13', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b612c3a299825184':{'desktop':132.14, 'mobile':119.032}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b612d6b497312189':{'fs':'13', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b612d6b497312189':{'desktop':258.58, 'mobile':187.206}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b612eb1156608968':{'fs':'20.7589', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b612eb1156608968':{'desktop':258.955, 'mobile':187.267}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b613064189779186':{'desktop':312.894, 'mobile':224.85}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b61319a158106566':{'fs':'20.7589', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61319a158106566':{'desktop':335.611, 'mobile':246.999}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61331e104676766':{'desktop':392.14, 'mobile':284.582}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b61344b563832471':{'fs':'13', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61344b563832471':{'desktop':332.524, 'mobile':242.024}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b6135a3913481169':{'fs':'20.7589', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6135a3913481169':{'desktop':414.385, 'mobile':304.739}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b613719613008063':{'desktop':313.712, 'mobile':342.322}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b613856175943172':{'fs':'13', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b613856175943172':{'desktop':413.205, 'mobile':301.772}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b6139ad011729048':{'fs':'20.7589', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6139ad011729048':{'desktop':336.597, 'mobile':364.471}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b613b36465325272':{'fs':'13', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b613b36465325272':{'desktop':489.927, 'mobile':357.582}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b613ca2346203085':{'fs':'20.7589', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b613ca2346203085':{'desktop':410.769, 'mobile':419.239}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b613e3c161192809':{'desktop':393.093, 'mobile':456.822}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b613f8d788120043':{'fs':'13', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b613f8d788120043':{'desktop':253.78, 'mobile':414.397}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b6140e6584459222':{'fs':'20.7589', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6140e6584459222':{'desktop':255.627, 'mobile':478.971}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b614293441558901':{'desktop':471.393, 'mobile':516.554}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b6143ca703181158':{'fs':'13', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6143ca703181158':{'desktop':336.516, 'mobile':472.082}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b61452b078743159':{'fs':'20.7589', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61452b078743159':{'desktop':491.99, 'mobile':536.711}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b6146da302796806':{'fs':'13', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6146da302796806':{'desktop':408.129, 'mobile':532.619}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b628e70402155863':{'fs':'18', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b628e70402155863':{'desktop':593.646, 'mobile':590.92}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b62b163934070753':{'desktop':491.393, 'mobile':397.484}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b614d07962186039':{'fs':'18', 'lh':'1.1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b614d07962186039':{'desktop':31.754, 'mobile':17.822}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b614e6e003139162':{'desktop':112.842, 'mobile':75.524}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b615014696511361':{'fs':'13', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b615014696511361':{'desktop':218.424, 'mobile':151.528}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b615184628936335':{'fs':'48.5', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b615184628936335':{'desktop':132.9, 'mobile':90.05}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b615369026549530':{'desktop':112.842, 'mobile':257.13}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b61550c212114523':{'fs':'13', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61550c212114523':{'desktop':218.415, 'mobile':332.44}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b615666698120828':{'fs':'48.5', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b615666698120828':{'desktop':132.9, 'mobile':271.656}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b615fad121298194':{'desktop':113.442, 'mobile':437.368}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b61617c012837765':{'fs':'13', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61617c012837765':{'desktop':216.415, 'mobile':512.372}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b616323644061917':{'fs':'48.5', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b616323644061917':{'desktop':133.5, 'mobile':451.894}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6164f3174844026':{'desktop':52.442, 'mobile':18.2481}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b61666f982230436':{'fs':'18', 'lh':'1.1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61666f982230436':{'desktop':68.354, 'mobile':33.6301}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b6167eb539112530':{'fs':'13', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6167eb539112530':{'desktop':139.024, 'mobile':84.5746}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b616954742077517':{'fs':'13', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b616954742077517':{'desktop':258.047, 'mobile':177.79}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b616ad5895055054':{'fs':'13', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b616ad5895055054':{'desktop':369.626, 'mobile':258.015}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b616c3c837214885':{'fs':'13', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b616c3c837214885':{'desktop':496.392, 'mobile':350.222}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b616e0d288013135':{'fs':'20.9', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b616e0d288013135':{'desktop':141, 'mobile':85.5526}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b617011712635125':{'desktop':238.6, 'mobile':158.953}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61716f493783505':{'desktop':342.162, 'mobile':239.181}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6172b7356726642':{'desktop':465.709, 'mobile':335.398}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b6173fd148868895':{'fs':'20.9', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6173fd148868895':{'desktop':261, 'mobile':178.753}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b6175e0477281087':{'fs':'20.9', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6175e0477281087':{'desktop':374.6, 'mobile':261.053}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b6177bd042330160':{'fs':'20.9', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6177bd042330160':{'desktop':500.4, 'mobile':353.253}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b617980053896351':{'desktop':53.142, 'mobile':508.625}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b617b1e065167024':{'desktop':318.939, 'mobile':725.141}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b617c71661859635':{'fs':'20.9', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b617c71661859635':{'desktop':236.105, 'mobile':653.741}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b617eb3113871560':{'fs':'18', 'lh':'1.1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b617eb3113871560':{'desktop':161.099, 'mobile':596.334}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b618051059716505':{'fs':'13', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b618051059716505':{'desktop':233.129, 'mobile':650.763}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b618202077419501':{'fs':'13', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b618202077419501':{'desktop':339.759, 'mobile':743.978}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b61839c643660811':{'fs':'13', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61839c643660811':{'desktop':442.739, 'mobile':819.641}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b61851f181100329':{'fs':'13', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61851f181100329':{'desktop':568.525, 'mobile':912.566}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6186c3297799777':{'desktop':420.197, 'mobile':802.041}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61883b836102813':{'desktop':544.67, 'mobile':894.758}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b61899b669773167':{'fs':'20.9', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61899b669773167':{'desktop':349.811, 'mobile':746.941}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b618ba4755772533':{'fs':'20.9', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b618ba4755772533':{'desktop':446.705, 'mobile':823.679}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b618ddb199445447':{'fs':'20.9', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b618ddb199445447':{'desktop':572.505, 'mobile':916.597}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b618fe8882044345':{'desktop':-30.0422, 'mobile':450.238}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b62ae92936751901':{'desktop':-21.0787, 'mobile':425.378}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b62b3a5266697543':{'desktop':-28.6338, 'mobile':460.626}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b603b23313124498':{'desktop':170.173, 'mobile':145.397}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b603bfb838198442':{'desktop':136.553, 'mobile':110.116}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b603cde605177824':{'desktop':276.833, 'mobile':249.538}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b603d71552061292':{'desktop':251.023, 'mobile':239.1}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b6047bc953106169_d':{'fs':'14', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6047bc953106169_d':{'desktop':26.055, 'mobile':448.547}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b604848457341377':{'desktop':128.813, 'mobile':118.069}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6048f2905395407':{'desktop':180.353, 'mobile':168.116}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b6056f3015528935':{'fs':'22', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6056f3015528935':{'desktop':23.863, 'mobile':20.0018}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b606120488544580':{'fs':'18', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b606120488544580':{'desktop':632.594, 'mobile':486.95}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b606647035994914':{'fs':'14', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b606647035994914':{'desktop':568.395, 'mobile':435.902}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b605aac060943845':{'fs':'25', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b605aac060943845':{'desktop':11.972, 'mobile':5.6402}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b605b6e829450952':{'fs':'17', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b605b6e829450952':{'desktop':106.048, 'mobile':82.922}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b605c90720214401':{'fs':'13', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b605c90720214401':{'desktop':748.817, 'mobile':606.34}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b605daa243581917':{'desktop':272.511, 'mobile':269.878}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b60620e276307151':{'fs':'18', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b60620e276307151':{'desktop':846.59, 'mobile':710.044}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b603778401189901':{'fs':'20', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b603778401189901':{'desktop':28, 'mobile':15.1562}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b6037db166769435':{'fs':'14', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6037db166769435':{'desktop':370.466, 'mobile':452.682}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b603851479992259':{'fs':'14', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b603851479992259':{'desktop':115.61, 'mobile':138.086}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6038c8867722558':{'desktop':222.525, 'mobile':206.204}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b60393b582714903':{'desktop':96.622, 'mobile':58.5}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6039b1307477282':{'desktop':96.622, 'mobile':126.234}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b603a1a014839065':{'fs':'14', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b603a1a014839065':{'desktop':477.615, 'mobile':517.836}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b605226028977498':{'desktop':350.653, 'mobile':281.767}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b6052e7089268346':{'fs':'14', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6052e7089268346':{'desktop':366.821, 'mobile':373.457}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6053ae698288485':{'desktop':350.541, 'mobile':362.017}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b605466061870722':{'fs':'14', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b605466061870722':{'desktop':115.011, 'mobile':66.7562}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b60554d774863715':{'desktop':223.693, 'mobile':441.259}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b605612345151097':{'fs':'14', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b605612345151097':{'desktop':240.944, 'mobile':292.295}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b6062fa281251797':{'fs':'18', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6062fa281251797':{'desktop':518.594, 'mobile':552.012}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b6063f8853700381':{'fs':'14', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6063f8853700381':{'desktop':240.91, 'mobile':216.798}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b609d6c541055733':{'fs':'14', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b609d6c541055733':{'desktop':82.289, 'mobile':42.95}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b60a48f699173254':{'fs':'18', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b60a48f699173254':{'desktop':3095.59, 'mobile':3299.71}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b60ab38829608071':{'desktop':28.564, 'mobile':22.235}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b603a89427726480':{'fs':'13', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b603a89427726480':{'desktop':43.4531, 'mobile':12.8906}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b604a2f227599705':{'fs':'18', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b604a2f227599705':{'desktop':1907, 'mobile':1648.97}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b60506a379237020':{'fs':'13', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b60506a379237020':{'desktop':1423.22, 'mobile':1146.5}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b605168946055247':{'desktop':749.594, 'mobile':771.969}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b605880197575416':{'fs':'19', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b605880197575416':{'desktop':33.8025, 'mobile':13.0409}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b60593b244992419':{'fs':'16', 'lh':''}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b60593b244992419':{'desktop':150.981, 'mobile':87.5}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b605e80822263583':{'fs':'16', 'lh':''}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b605e80822263583':{'desktop':150.996, 'mobile':87.488}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b605fd2506673707':{'fs':'16', 'lh':''}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b605fd2506673707':{'desktop':738.734, 'mobile':349.884}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b6064f9001650978':{'fs':'16', 'lh':''}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6064f9001650978':{'desktop':738.734, 'mobile':349.85}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b60a5e7561886143':{'fs':'18', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b60a5e7561886143':{'desktop':1371.48, 'mobile':620.14}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b60aa08515883629':{'fs':'13', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b60aa08515883629':{'desktop':1335.47, 'mobile':590.4}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b61abe1225763032':{'fs':'20', 'lh':'1.1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61abe1225763032':{'desktop':31.45, 'mobile':15.3925}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b61ae0b082962285':{'fs':'15', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61ae0b082962285':{'desktop':124.84, 'mobile':69.8513}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61b07e696987246':{'desktop':227, 'mobile':122.3}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b61b257509483290':{'fs':'15', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61b257509483290':{'desktop':533.825, 'mobile':392.801}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61b4c8330570934':{'desktop':293.708, 'mobile':180.521}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b61b6d7010847823':{'fs':'15', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61b6d7010847823':{'desktop':243.647, 'mobile':139.48}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61b92f526402643':{'desktop':226.8, 'mobile':623.247}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61c47a565799394':{'desktop':291.29, 'mobile':702.333}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b61c6d5073156908':{'fs':'17', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61c6d5073156908':{'desktop':736.014, 'mobile':550.92}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b61ca36960176245':{'fs':'15', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61ca36960176245':{'desktop':533.806, 'mobile':924.974}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b61ccc9986967380':{'fs':'15', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61ccc9986967380':{'desktop':243.447, 'mobile':645.003}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b61cf14132201418':{'fs':'17', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61cf14132201418':{'desktop':736.508, 'mobile':1091.97}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61d1b3534749018':{'desktop':822.55, 'mobile':1159.42}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61d3be317468271':{'desktop':884.623, 'mobile':1229.35}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b61d608561483743':{'fs':'15', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61d608561483743':{'desktop':1148.93, 'mobile':1457.13}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b61d83a616984621':{'fs':'15', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61d83a616984621':{'desktop':848.19, 'mobile':1178.28}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b61da78127717352':{'fs':'17', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61da78127717352':{'desktop':1479.08, 'mobile':1657.24}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61dd5f697299346':{'desktop':897.594, 'mobile':1231.01}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b629d7e899092124':{'desktop':348.075, 'mobile':685.39}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b62a045280118347':{'desktop':291.067, 'mobile':735.806}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b62a335299823506':{'desktop':935.976, 'mobile':1260.62}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b62c81b418801050':{'desktop':821.788, 'mobile':1733.17}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b62cab7670377287':{'desktop':912.414, 'mobile':1805.1}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b62cd9d326380630':{'fs':'15', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b62cd9d326380630':{'desktop':1148.97, 'mobile':2019.21}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b62d09d387885179':{'fs':'15', 'lh':'1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b62d09d387885179':{'desktop':847.907, 'mobile':1755.9}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b62d3be911613892':{'fs':'17', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b62d3be911613892':{'desktop':1479.05, 'mobile':2333.53}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b6040f4783608631':{'fs':'20', 'lh':'1.1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6040f4783608631':{'desktop':30.1094, 'mobile':22.1718}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b60672e015967649':{'desktop':236.567, 'mobile':184.524}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b606823571438668':{'desktop':318.161, 'mobile':253.471}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b606905571019303':{'desktop':151.413, 'mobile':162.715}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6069ef794041815':{'desktop':488.915, 'mobile':360.789}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b606ad3495999401':{'desktop':534.469, 'mobile':335.949}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b606bb4386453790':{'desktop':245.59, 'mobile':181.262}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b606ca2122547730':{'desktop':525.798, 'mobile':296.985}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b606d8a650627145':{'desktop':245.592, 'mobile':385.623}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b606e6c905756096':{'desktop':195.444, 'mobile':153.584}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b606f5a424187547':{'desktop':405.685, 'mobile':235.123}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b60a135464592528':{'fs':'14', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b60a135464592528':{'desktop':487.57, 'mobile':388.39}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b60a290296272258':{'fs':'20', 'lh':'1.1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b60a290296272258':{'desktop':151.024, 'mobile':120.949}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61dfe2079160902':{'desktop':133.33, 'mobile':96.3975}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61e9d3856600857':{'desktop':268.584, 'mobile':200.312}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61ec94983001031':{'desktop':174.562, 'mobile':158.487}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61eee1693254779':{'desktop':547.859, 'mobile':430.56}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b61f09f486741097':{'fs':'14', 'lh':'1.6'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61f09f486741097':{'desktop':575.558, 'mobile':446.379}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b61f2d6156660913':{'fs':'14', 'lh':'1.6'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61f2d6156660913':{'desktop':635.772, 'mobile':483.926}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b61f4c5662846737':{'fs':'50', 'lh':'1.6'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61f4c5662846737':{'desktop':650.204, 'mobile':498.232}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b61f6e6944907339':{'fs':'18', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61f6e6944907339':{'desktop':746.602, 'mobile':577.24}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b630607352395763':{'desktop':14.3, 'mobile':13}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b6308e5434649345':{'fs':'18', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6308e5434649345':{'desktop':30, 'mobile':22.0282}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b630ba2899816102':{'fs':'15', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b630ba2899816102':{'desktop':70.99, 'mobile':63.6141}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b630e84774911963':{'fs':'12', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b630e84774911963':{'desktop':208.172, 'mobile':206.014}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b6311ad509248025':{'fs':'40', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6311ad509248025':{'desktop':220.98, 'mobile':219.409}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b6314a1970808958':{'fs':'18', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6314a1970808958':{'desktop':300.818, 'mobile':279.602}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b63281b670558292':{'fs':'14', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b63281b670558292':{'desktop':377.922, 'mobile':355.164}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61fa62768465290':{'desktop':133.32, 'mobile':730.066}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b61fcb4170742604':{'fs':'14', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61fcb4170742604':{'desktop':524.549, 'mobile':1057.67}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b61ffd8049199175':{'desktop':579.44, 'mobile':1105.21}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b6201d1084773482':{'fs':'20', 'lh':'1.1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6201d1084773482':{'desktop':151.014, 'mobile':740.855}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6203f7373121349':{'desktop':205.532, 'mobile':780.078}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b620685026407201':{'desktop':271.638, 'mobile':859.89}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b6208ee521712932':{'fs':'14', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6208ee521712932':{'desktop':597.008, 'mobile':1123.73}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b620c54146972861':{'fs':'16', 'lh':'1.2'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b620c54146972861':{'desktop':1207.35, 'mobile':1699.24}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b620eee052070009':{'fs':'50', 'lh':'1.6'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b620eee052070009':{'desktop':1253.84, 'mobile':1737.68}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b621132765483814':{'fs':'18', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b621132765483814':{'desktop':1349.85, 'mobile':1817.64}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6213f9095105795':{'desktop':346.955, 'mobile':913.203}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b621696658313232':{'desktop':363.556, 'mobile':924.239}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b621915691434059':{'desktop':170.356, 'mobile':775.883}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b621bb2863341030':{'desktop':314.483, 'mobile':857.187}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b621e3c165311701':{'desktop':191.806, 'mobile':801.788}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6220d9971878175':{'desktop':353.82, 'mobile':924.204}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b62236b511423216':{'desktop':652.909, 'mobile':1175.24}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b62255e342831000':{'fs':'14', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b62255e342831000':{'desktop':670.712, 'mobile':1195.54}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b622846824251515':{'desktop':730.109, 'mobile':1253.08}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b622a7e505839090':{'fs':'14', 'lh':'1.6'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b622a7e505839090':{'desktop':755.218, 'mobile':1275.73}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b622d6d757573279':{'desktop':822.182, 'mobile':1339.92}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b6237d9798086555':{'fs':'14', 'lh':'1.6'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6237d9798086555':{'desktop':846.714, 'mobile':1365.86}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b623b06923449947':{'desktop':913.839, 'mobile':1428.27}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b623d2f106583764':{'fs':'14', 'lh':'1.6'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b623d2f106583764':{'desktop':932.212, 'mobile':1451.91}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6245e1608632467':{'desktop':1001.38, 'mobile':1512.34}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b62797a044452976':{'fs':'14', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b62797a044452976':{'desktop':1023.62, 'mobile':1542.15}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b627cc9217088538':{'fs':'14', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b627cc9217088538':{'desktop':1433.09, 'mobile':1901}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b627f3b168462382':{'desktop':1546.04, 'mobile':1998.18}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b628228304707807':{'fs':'14', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b628228304707807':{'desktop':1726.41, 'mobile':2153.08}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b62d75f577293025':{'desktop':1099.43, 'mobile':1605.49}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b62d9ba051911870':{'fs':'14', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b62d9ba051911870':{'desktop':1128.08, 'mobile':1632.82}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b62dd37962117348':{'fs':'13', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b62dd37962117348':{'desktop':655.772, 'mobile':650.098}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b60417d165112292':{'fs':'25', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b60417d165112292':{'desktop':32.8281, 'mobile':17.7125}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b6041f9454818170':{'fs':'14', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6041f9454818170':{'desktop':86.8255, 'mobile':54.6825}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b60427f651376604':{'fs':'14', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b60427f651376604':{'desktop':443.856, 'mobile':432.147}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b6284d7508052338':{'fs':'18', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6284d7508052338':{'desktop':517.963, 'mobile':511.303}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b60704f335363051':{'fs':'19', 'lh':'1.1'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b60704f335363051':{'desktop':24.1384, 'mobile':20.926}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b60a85a981600676':{'fs':'15', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b60a85a981600676':{'desktop':2269.91, 'mobile':2989.74}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b62881d348404291':{'fs':'18', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b62881d348404291':{'desktop':2328.96, 'mobile':3039.4}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b62b6aa653044889':{'fs':'24', 'lh':''}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b62b6aa653044889':{'desktop':123.963, 'mobile':2155.2}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b62bafe392495339':{'fs':'24', 'lh':''}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b62bafe392495339':{'desktop':123.999, 'mobile':1579.86}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b62bf48373862628':{'fs':'24', 'lh':''}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b62bf48373862628':{'desktop':421.306, 'mobile':778.99}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b62c3a3873750053':{'fs':'24', 'lh':''}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b62c3a3873750053':{'desktop':421.306, 'mobile':92.91}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b62e3f2309393334':{'desktop':699.072, 'mobile':347.12}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b62e733162056383':{'desktop':989.752, 'mobile':1034.5}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b62ea65322235139':{'desktop':1315.91, 'mobile':545.22}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b62ed8b987433926':{'desktop':1001.54, 'mobile':1376.02}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b62f0b8332744552':{'desktop':699.042, 'mobile':1837.78}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b62f3cf261533276':{'desktop':1488.27, 'mobile':2022.38}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b62f726513661196':{'desktop':1681.89, 'mobile':2562.48}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b62fa3a149572931':{'desktop':1681.88, 'mobile':2412.85}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b630032938154923':{'desktop':1952.88, 'mobile':2776.19}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b609a17362864541':{'fs':'21', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b609a17362864541':{'desktop':17.219, 'mobile':17.0938}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b609b61310935740':{'fs':'14', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b609b61310935740':{'desktop':662.25, 'mobile':325.079}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b60c54f180886695':{'fs':'18', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b60c54f180886695':{'desktop':954.17, 'mobile':683.556}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b60c70c725724949':{'fs':'15', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b60c70c725724949':{'desktop':894.635, 'mobile':630.245}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b6044de213872074':{'fs':'22', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6044de213872074':{'desktop':31.6188, 'mobile':13.0469}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b604579451285482':{'fs':'15', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b604579451285482':{'desktop':80.834, 'mobile':301.488}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b604608986699537':{'desktop':31.5935, 'mobile':51.9375}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b60a72c693722848':{'fs':'18', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b60a72c693722848':{'desktop':366.807, 'mobile':560.587}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b60ac2c354592060':{'fs':'15', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b60ac2c354592060':{'desktop':307.813, 'mobile':506.535}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b6042f9765578144':{'fs':'21', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6042f9765578144':{'desktop':22.2188, 'mobile':14.0938}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b604380038193966':{'fs':'14', 'lh':''}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b604380038193966':{'desktop':79.6875, 'mobile':56.2969}});blocos_posicao = Object.assign(blocos_posicao,{'b_1075530_1_1732388789674227b5f15db':{'desktop':404.973, 'mobile':367.977}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b603689827789192':{'fs':'13', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b603689827789192':{'desktop':121.016, 'mobile':292.536}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b60ad1d106746767':{'fs':'15', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b60ad1d106746767':{'desktop':691.776, 'mobile':1203.71}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b628b48781280761':{'fs':'18', 'lh':'1.3'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b628b48781280761':{'desktop':750.345, 'mobile':1260.34}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b62a62b618370870':{'desktop':47.922, 'mobile':57.9195}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b62a907697122115':{'fs':'25', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b62a907697122115':{'desktop':47.9571, 'mobile':12.7125}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b62fd62753989250':{'desktop':431.922, 'mobile':852.794}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b6036fe787310024':{'fs':'11', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b6036fe787310024':{'desktop':25.495, 'mobile':13.9455}});elementos_css = Object.assign(elementos_css,{'e_1075530_1_1732388789674227b604991492490491':{'fs':'12', 'lh':'1.4'}});elementos_posicao = Object.assign(elementos_posicao,{'e_1075530_1_1732388789674227b604991492490491':{'desktop':18.743, 'mobile':47.9861}});function InserirScriptsInline(){elementos_popup = Object.assign(elementos_popup,{'e_1075530_1_1732388789674227b61f6e6944907339':{'conteudo':'<div id="e_1075530_1_1732388789674227b630607352395763" class="gpc-e e_caixa dd dm e_1075530_1_1732388789674227b630607352395763"><div class="c borda_igual e_caixa"></div></div><div id="e_1075530_1_1732388789674227b6308e5434649345" class="gpc-e e_titulo dd dm e_1075530_1_1732388789674227b6308e5434649345"><div class="c e_titulo se_fonte"><h1><span><b>Grab Your Discount Now!</b></span></h1></div></div><div id="e_1075530_1_1732388789674227b630ba2899816102" class="gpc-e e_titulo dd dm e_1075530_1_1732388789674227b630ba2899816102"><div class="c e_titulo se_fonte"><h1><span>Get an incredible <b>98% off with this Super Offer</b> to join <b>live mentoring sessions </b>, unlock <b>activities</b>, <b>exclusive bonuses </b>, and so much more... Don’t wait—seize this opportunity now!</span></h1></div></div><div id="e_1075530_1_1732388789674227b630e84774911963" class="gpc-e e_titulo dd dm e_1075530_1_1732388789674227b630e84774911963"><div class="c e_titulo se_fonte"><h1><span>From </span><strike><b>&euro;897</b></strike><span> Now just...</span></h1></div></div><div id="e_1075530_1_1732388789674227b6311ad509248025" class="gpc-e e_titulo dd dm e_1075530_1_1732388789674227b6311ad509248025"><div class="c e_titulo se_fonte"><h1><span>&euro;19</span></h1></div></div><div id="e_1075530_1_1732388789674227b6314a1970808958" class="gpc-e e_botao dd dm e_1075530_1_1732388789674227b6314a1970808958"><a class="c borda_igual e_botao se_fonte sombra_botao link_externo" href="https://pay.hotmart.com/B96870359O?off=1jljg76h&checkoutMode=10">I want the complete package with 98% off now!</a></div><div id="e_1075530_1_1732388789674227b63281b670558292" class="gpc-e e_botao dd dm e_1075530_1_1732388789674227b63281b670558292"><a class="c borda_igual e_botao se_fonte link_externo borda_botao" href="https://pay.hotmart.com/B96870359O?off=henqd47v&checkoutMode=10">Thank you, but I only want the basic one.</a></div>', estilos:{'desktop':'width:444px;height:487.297px;', 'mobile':'width:329.391px;height:446.999px;'}}});if(!window.getCrawler()){setTimeout(function(){
},150);
}if(!window.getCrawler()){

 (function(h,o,t,j,a,r){
 h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
 h._hjSettings={hjid:3909371,hjsv:6};
 a=o.getElementsByTagName('head')[0];
 r=o.createElement('script');r.async=1;
 r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
 a.appendChild(r);
 })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');



function addUtmsToLinks(){

 if(document.location.search.replace("?", "") === ''){ return 0;}
 
 var links = document.getElementsByTagName("a");
 var injections = 0;
 for (var i = 0, n = links.length;i < n;i++){
 if (links[i].href.includes("#")){
 continue;
 }
 var href = links[i].href.trim() + (links[i].href.indexOf("?") > 0 ? "&" :"?") + document.location.search.replace("?", "").toString();
 links[i].href = href;
 injections++;
 }
 return injections;

}



!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1957532814730523');
fbq('track', 'PageView');

}
}var scripts_estatisticas ={}, scripts_marketing ={};