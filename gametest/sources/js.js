/* jQuery.query https://github.com/alrusdi/jquery-plugin-query-object/.*/
new function(e){var t=e.separator||"&",s=!1!==e.spaces,n=(e.suffix,!1!==e.prefix?!0===e.hash?"#":"?":""),i=!1!==e.numbers;jQuery.query=new function(){var c=function(e,t){return null!=e&&null!==e&&(!t||e.constructor==t)},o=function(e){for(var t,n=/\[([^[]*)\]/g,r=/^([^[]+)(\[.*\])?$/.exec(e),i=r[1],u=[];t=n.exec(r[2]);)u.push(t[1]);return[i,u]},a=function(e,t,n){var r=t.shift();if("object"!=typeof e&&(e=null),""===r)if(e||(e=[]),c(e,Array))e.push(0==t.length?n:a(null,t.slice(0),n));else if(c(e,Object)){for(var i=0;null!=e[i++];);e[--i]=0==t.length?n:a(e[i],t.slice(0),n)}else(e=[]).push(0==t.length?n:a(null,t.slice(0),n));else if(r&&r.match(/^\s*[0-9]+\s*$/)){e||(e=[]),e[u=parseInt(r,10)]=0==t.length?n:a(e[u],t.slice(0),n)}else{if(!r)return n;var u=r.replace(/^\s*|\s*$/g,"");if(e||(e={}),c(e,Array)){var s={};for(i=0;i<e.length;++i)s[i]=e[i];e=s}e[u]=0==t.length?n:a(e[u],t.slice(0),n)}return e},r=function(e){var n=this;return n.keys={},e.queryObject?jQuery.each(e.get(),function(e,t){n.SET(e,t)}):n.parseNew.apply(n,arguments),n};return r.prototype={queryObject:!0,parseNew:function(){var n=this;return n.keys={},jQuery.each(arguments,function(){var e=""+this;e=(e=e.replace(/^[?#]/,"")).replace(/[;&]$/,""),s&&(e=e.replace(/[+]/g," ")),jQuery.each(e.split(/[&;]/),function(){var e=decodeURIComponent(this.split("=")[0]||""),t=decodeURIComponent(this.split("=")[1]||"");e&&(i&&(/^[+-]?[0-9]+\.[0-9]*$/.test(t)?t=parseFloat(t):/^[+-]?[1-9][0-9]*$/.test(t)&&(t=parseInt(t,10))),t=!t&&0!==t||t,n.SET(e,t))})}),n},has:function(e,t){var n=this.get(e);return c(n,t)},GET:function(e){if(!c(e))return this.keys;for(var t=o(e),n=t[0],r=t[1],i=this.keys[n];null!=i&&0!=r.length;)i=i[r.shift()];return"number"==typeof i?i:i||""},get:function(e){var t=this.GET(e);return c(t,Object)?jQuery.extend(!0,{},t):c(t,Array)?t.slice(0):t},SET:function(e,t){var n=c(t)?t:null,r=o(e),i=r[0],u=r[1],s=this.keys[i];return this.keys[i]=a(s,u.slice(0),n),this},set:function(e,t){return this.copy().SET(e,t)},REMOVE:function(e,t){if(t){var n=this.GET(e);if(c(n,Array)){for(tval in n)n[tval]=n[tval].toString();var r=$.inArray(t,n);if(!(0<=r))return;e=(e=n.splice(r,1))[r]}else if(t!=n)return}return this.SET(e,null).COMPACT()},remove:function(e,t){return this.copy().REMOVE(e,t)},EMPTY:function(){var n=this;return jQuery.each(n.keys,function(e,t){delete n.keys[e]}),n},load:function(e){var t=e.replace(/^.*?[#](.+?)(?:\?.+)?$/,"$1"),n=e.replace(/^.*?[?](.+?)(?:#.+)?$/,"$1");return new r(e.length==n.length?"":n,e.length==t.length?"":t)},empty:function(){return this.copy().EMPTY()},copy:function(){return new r(this)},COMPACT:function(){return this.keys=function u(e){var s="object"==typeof e?c(e,Array)?[]:{}:e;"object"==typeof e&&jQuery.each(e,function(e,t){if(!c(t))return!0;var n,r,i;n=s,r=e,i=u(t),c(n,Array)?n.push(i):n[r]=i});return s}(this.keys),this},compact:function(){return this.copy().COMPACT()},toString:function(){var e=[],r=[],i=function(e){return e+="",e=encodeURIComponent(e),s&&(e=e.replace(/%20/g,"+")),e},u=function(e,t){var n=function(e){return t&&""!=t?[t,"[",e,"]"].join(""):[e].join("")};jQuery.each(e,function(e,t){"object"==typeof t?u(t,n(e)):function(e,t,n){if(c(n)&&!1!==n){var r=[i(t)];!0!==n&&(r.push("="),r.push(i(n))),e.push(r.join(""))}}(r,n(e),t)})};return u(this.keys),0<r.length&&e.push(n),e.push(r.join(t)),e.join("")}},new r(location.search,location.hash)}}(jQuery.query||{});
/* jQuery Cookie Plugin v1.4.1 https://github.com/js-cookie/js-cookie js-cookie v3.0.0-rc.0 | MIT */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self,function(){var r=e.Cookies,n=e.Cookies=t();n.noConflict=function(){return e.Cookies=r,n}}())}(this,function(){"use strict";function e(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)e[n]=r[n]}return e}var t={read:function(e){return e.replace(/%3B/g,";")},write:function(e){return e.replace(/;/g,"%3B")}};return function r(n,i){function o(r,o,u){if("undefined"!=typeof document){"number"==typeof(u=e({},i,u)).expires&&(u.expires=new Date(Date.now()+864e5*u.expires)),u.expires&&(u.expires=u.expires.toUTCString()),r=t.write(r).replace(/=/g,"%3D"),o=n.write(String(o),r);var c="";for(var f in u)u[f]&&(c+="; "+f,!0!==u[f]&&(c+="="+u[f].split(";")[0]));return document.cookie=r+"="+o+c}}return Object.create({set:o,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var r=document.cookie?document.cookie.split("; "):[],i={},o=0;o<r.length;o++){var u=r[o].split("="),c=u.slice(1).join("="),f=t.read(u[0]).replace(/%3D/g,"=");if(i[f]=n.read(c,f),e===f)break}return e?i[e]:i}},remove:function(t,r){o(t,"",e({},r,{expires:-1}))},withAttributes:function(t){return r(this.converter,e({},this.attributes,t))},withConverter:function(t){return r(e({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(i)},converter:{value:Object.freeze(n)}})}(t,{path:"/"})});
/*!The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)Copyright (c) 2015 Edson Hilios*/
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";function b(a){if(a instanceof Date)return a;if(String(a).match(g))return String(a).match(/^[0-9]*$/)&&(a=Number(a)),String(a).match(/\-/)&&(a=String(a).replace(/\-/g,"/")),new Date(a);throw new Error("Couldn't cast `"+a+"` to a date object.")}function c(a){var b=a.toString().replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");return new RegExp(b)}function d(a){return function(b){var d=b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);if(d)for(var f=0,g=d.length;f<g;++f){var h=d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),j=c(h[0]),k=h[1]||"",l=h[3]||"",m=null;h=h[2],i.hasOwnProperty(h)&&(m=i[h],m=Number(a[m])),null!==m&&("!"===k&&(m=e(l,m)),""===k&&m<10&&(m="0"+m.toString()),b=b.replace(j,m.toString()))}return b=b.replace(/%%/,"%")}}function e(a,b){var c="s",d="";return a&&(a=a.replace(/(:|;|\s)/gi,"").split(/\,/),1===a.length?c=a[0]:(d=a[0],c=a[1])),Math.abs(b)>1?c:d}var f=[],g=[],h={precision:100,elapse:!1,defer:!1};g.push(/^[0-9]*$/.source),g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),g=new RegExp(g.join("|"));var i={Y:"years",m:"months",n:"daysToMonth",d:"daysToWeek",w:"weeks",W:"weeksToMonth",H:"hours",M:"minutes",S:"seconds",D:"totalDays",I:"totalHours",N:"totalMinutes",T:"totalSeconds"},j=function(b,c,d){this.el=b,this.$el=a(b),this.interval=null,this.offset={},this.options=a.extend({},h),this.instanceNumber=f.length,f.push(this),this.$el.data("countdown-instance",this.instanceNumber),d&&("function"==typeof d?(this.$el.on("update.countdown",d),this.$el.on("stoped.countdown",d),this.$el.on("finish.countdown",d)):this.options=a.extend({},h,d)),this.setFinalDate(c),this.options.defer===!1&&this.start()};a.extend(j.prototype,{start:function(){null!==this.interval&&clearInterval(this.interval);var a=this;this.update(),this.interval=setInterval(function(){a.update.call(a)},this.options.precision)},stop:function(){clearInterval(this.interval),this.interval=null,this.dispatchEvent("stoped")},toggle:function(){this.interval?this.stop():this.start()},pause:function(){this.stop()},resume:function(){this.start()},remove:function(){this.stop.call(this),f[this.instanceNumber]=null,delete this.$el.data().countdownInstance},setFinalDate:function(a){this.finalDate=b(a)},update:function(){if(0===this.$el.closest("html").length)return void this.remove();var b,c=void 0!==a._data(this.el,"events"),d=new Date;b=this.finalDate.getTime()-d.getTime(),b=Math.ceil(b/1e3),b=!this.options.elapse&&b<0?0:Math.abs(b),this.totalSecsLeft!==b&&c&&(this.totalSecsLeft=b,this.elapsed=d>=this.finalDate,this.offset={seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToWeek:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToMonth:Math.floor(this.totalSecsLeft/60/60/24%30.4368),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),weeksToMonth:Math.floor(this.totalSecsLeft/60/60/24/7)%4,months:Math.floor(this.totalSecsLeft/60/60/24/30.4368),years:Math.abs(this.finalDate.getFullYear()-d.getFullYear()),totalDays:Math.floor(this.totalSecsLeft/60/60/24),totalHours:Math.floor(this.totalSecsLeft/60/60),totalMinutes:Math.floor(this.totalSecsLeft/60),totalSeconds:this.totalSecsLeft},this.options.elapse||0!==this.totalSecsLeft?this.dispatchEvent("update"):(this.stop(),this.dispatchEvent("finish")))},dispatchEvent:function(b){var c=a.Event(b+".countdown");c.finalDate=this.finalDate,c.elapsed=this.elapsed,c.offset=a.extend({},this.offset),c.strftime=d(this.offset),this.$el.trigger(c)}}),a.fn.countdown=function(){var b=Array.prototype.slice.call(arguments,0);return this.each(function(){var c=a(this).data("countdown-instance");if(void 0!==c){var d=f[c],e=b[0];j.prototype.hasOwnProperty(e)?d[e].apply(d,b.slice(1)):null===String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i)?(d.setFinalDate.call(d,e),d.start()):a.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi,e))}else new j(this,b[0],b[1])})}});

/*!
  * Bootstrap v4.4.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("jquery")):"function"==typeof define&&define.amd?define(["exports","jquery"],t):t((e=e||self).bootstrap={},e.jQuery)}(this,function(e,p){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function s(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function l(o){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?t(Object(r),!0).forEach(function(e){var t,n,i;t=o,i=r[n=e],n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(r,e))})}return o}p=p&&p.hasOwnProperty("default")?p.default:p;var n="transitionend";function o(e){var t=this,n=!1;return p(this).one(m.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||m.triggerTransitionEnd(t)},e),this}var m={TRANSITION_END:"bsTransitionEnd",getUID:function(e){for(;e+=~~(1e6*Math.random()),document.getElementById(e););return e},getSelectorFromElement:function(e){var t=e.getAttribute("data-target");if(!t||"#"===t){var n=e.getAttribute("href");t=n&&"#"!==n?n.trim():""}try{return document.querySelector(t)?t:null}catch(e){return null}},getTransitionDurationFromElement:function(e){if(!e)return 0;var t=p(e).css("transition-duration"),n=p(e).css("transition-delay"),i=parseFloat(t),o=parseFloat(n);return i||o?(t=t.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(t)+parseFloat(n))):0},reflow:function(e){return e.offsetHeight},triggerTransitionEnd:function(e){p(e).trigger(n)},supportsTransitionEnd:function(){return Boolean(n)},isElement:function(e){return(e[0]||e).nodeType},typeCheckConfig:function(e,t,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=t[i],s=r&&m.isElement(r)?"element":(a=r,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(e.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var a},findShadowRoot:function(e){if(!document.documentElement.attachShadow)return null;if("function"!=typeof e.getRootNode)return e instanceof ShadowRoot?e:e.parentNode?m.findShadowRoot(e.parentNode):null;var t=e.getRootNode();return t instanceof ShadowRoot?t:null},jQueryDetection:function(){if("undefined"==typeof p)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=p.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||4<=e[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};m.jQueryDetection(),p.fn.emulateTransitionEnd=o,p.event.special[m.TRANSITION_END]={bindType:n,delegateType:n,handle:function(e){if(p(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}};var r="alert",a="bs.alert",c="."+a,h=p.fn[r],u={CLOSE:"close"+c,CLOSED:"closed"+c,CLICK_DATA_API:"click"+c+".data-api"},f="alert",d="fade",g="show",_=function(){function i(e){this._element=e}var e=i.prototype;return e.close=function(e){var t=this._element;e&&(t=this._getRootElement(e)),this._triggerCloseEvent(t).isDefaultPrevented()||this._removeElement(t)},e.dispose=function(){p.removeData(this._element,a),this._element=null},e._getRootElement=function(e){var t=m.getSelectorFromElement(e),n=!1;return t&&(n=document.querySelector(t)),n=n||p(e).closest("."+f)[0]},e._triggerCloseEvent=function(e){var t=p.Event(u.CLOSE);return p(e).trigger(t),t},e._removeElement=function(t){var n=this;if(p(t).removeClass(g),p(t).hasClass(d)){var e=m.getTransitionDurationFromElement(t);p(t).one(m.TRANSITION_END,function(e){return n._destroyElement(t,e)}).emulateTransitionEnd(e)}else this._destroyElement(t)},e._destroyElement=function(e){p(e).detach().trigger(u.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var e=p(this),t=e.data(a);t||(t=new i(this),e.data(a,t)),"close"===n&&t[n](this)})},i._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),i}();p(document).on(u.CLICK_DATA_API,'[data-dismiss="alert"]',_._handleDismiss(new _)),p.fn[r]=_._jQueryInterface,p.fn[r].Constructor=_,p.fn[r].noConflict=function(){return p.fn[r]=h,_._jQueryInterface};var v="button",y="bs.button",E="."+y,b=".data-api",w=p.fn[v],T="active",C="btn",S="focus",D='[data-toggle^="button"]',I='[data-toggle="buttons"]',A='[data-toggle="button"]',O='[data-toggle="buttons"] .btn',N='input:not([type="hidden"])',k=".active",L=".btn",P={CLICK_DATA_API:"click"+E+b,FOCUS_BLUR_DATA_API:"focus"+E+b+" blur"+E+b,LOAD_DATA_API:"load"+E+b},x=function(){function n(e){this._element=e}var e=n.prototype;return e.toggle=function(){var e=!0,t=!0,n=p(this._element).closest(I)[0];if(n){var i=this._element.querySelector(N);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(T))e=!1;else{var o=n.querySelector(k);o&&p(o).removeClass(T)}else"checkbox"===i.type?"LABEL"===this._element.tagName&&i.checked===this._element.classList.contains(T)&&(e=!1):e=!1;e&&(i.checked=!this._element.classList.contains(T),p(i).trigger("change")),i.focus(),t=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(t&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(T)),e&&p(this._element).toggleClass(T))},e.dispose=function(){p.removeData(this._element,y),this._element=null},n._jQueryInterface=function(t){return this.each(function(){var e=p(this).data(y);e||(e=new n(this),p(this).data(y,e)),"toggle"===t&&e[t]()})},s(n,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),n}();p(document).on(P.CLICK_DATA_API,D,function(e){var t=e.target;if(p(t).hasClass(C)||(t=p(t).closest(L)[0]),!t||t.hasAttribute("disabled")||t.classList.contains("disabled"))e.preventDefault();else{var n=t.querySelector(N);if(n&&(n.hasAttribute("disabled")||n.classList.contains("disabled")))return void e.preventDefault();x._jQueryInterface.call(p(t),"toggle")}}).on(P.FOCUS_BLUR_DATA_API,D,function(e){var t=p(e.target).closest(L)[0];p(t).toggleClass(S,/^focus(in)?$/.test(e.type))}),p(window).on(P.LOAD_DATA_API,function(){for(var e=[].slice.call(document.querySelectorAll(O)),t=0,n=e.length;t<n;t++){var i=e[t],o=i.querySelector(N);o.checked||o.hasAttribute("checked")?i.classList.add(T):i.classList.remove(T)}for(var r=0,s=(e=[].slice.call(document.querySelectorAll(A))).length;r<s;r++){var a=e[r];"true"===a.getAttribute("aria-pressed")?a.classList.add(T):a.classList.remove(T)}}),p.fn[v]=x._jQueryInterface,p.fn[v].Constructor=x,p.fn[v].noConflict=function(){return p.fn[v]=w,x._jQueryInterface};var j="carousel",H="bs.carousel",R="."+H,F=".data-api",M=p.fn[j],W={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},U={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},B="next",q="prev",K="left",Q="right",V={SLIDE:"slide"+R,SLID:"slid"+R,KEYDOWN:"keydown"+R,MOUSEENTER:"mouseenter"+R,MOUSELEAVE:"mouseleave"+R,TOUCHSTART:"touchstart"+R,TOUCHMOVE:"touchmove"+R,TOUCHEND:"touchend"+R,POINTERDOWN:"pointerdown"+R,POINTERUP:"pointerup"+R,DRAG_START:"dragstart"+R,LOAD_DATA_API:"load"+R+F,CLICK_DATA_API:"click"+R+F},Y="carousel",z="active",X="slide",G="carousel-item-right",$="carousel-item-left",J="carousel-item-next",Z="carousel-item-prev",ee="pointer-event",te=".active",ne=".active.carousel-item",ie=".carousel-item",oe=".carousel-item img",re=".carousel-item-next, .carousel-item-prev",se=".carousel-indicators",ae="[data-slide], [data-slide-to]",le='[data-ride="carousel"]',ce={TOUCH:"touch",PEN:"pen"},he=function(){function r(e,t){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(t),this._element=e,this._indicatorsElement=this._element.querySelector(se),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var e=r.prototype;return e.next=function(){this._isSliding||this._slide(B)},e.nextWhenVisible=function(){!document.hidden&&p(this._element).is(":visible")&&"hidden"!==p(this._element).css("visibility")&&this.next()},e.prev=function(){this._isSliding||this._slide(q)},e.pause=function(e){e||(this._isPaused=!0),this._element.querySelector(re)&&(m.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},e.cycle=function(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},e.to=function(e){var t=this;this._activeElement=this._element.querySelector(ne);var n=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)p(this._element).one(V.SLID,function(){return t.to(e)});else{if(n===e)return this.pause(),void this.cycle();var i=n<e?B:q;this._slide(i,this._items[e])}},e.dispose=function(){p(this._element).off(R),p.removeData(this._element,H),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},e._getConfig=function(e){return e=l({},W,{},e),m.typeCheckConfig(j,e,U),e},e._handleSwipe=function(){var e=Math.abs(this.touchDeltaX);if(!(e<=40)){var t=e/this.touchDeltaX;(this.touchDeltaX=0)<t&&this.prev(),t<0&&this.next()}},e._addEventListeners=function(){var t=this;this._config.keyboard&&p(this._element).on(V.KEYDOWN,function(e){return t._keydown(e)}),"hover"===this._config.pause&&p(this._element).on(V.MOUSEENTER,function(e){return t.pause(e)}).on(V.MOUSELEAVE,function(e){return t.cycle(e)}),this._config.touch&&this._addTouchEventListeners()},e._addTouchEventListeners=function(){var t=this;if(this._touchSupported){var n=function(e){t._pointerEvent&&ce[e.originalEvent.pointerType.toUpperCase()]?t.touchStartX=e.originalEvent.clientX:t._pointerEvent||(t.touchStartX=e.originalEvent.touches[0].clientX)},i=function(e){t._pointerEvent&&ce[e.originalEvent.pointerType.toUpperCase()]&&(t.touchDeltaX=e.originalEvent.clientX-t.touchStartX),t._handleSwipe(),"hover"===t._config.pause&&(t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout(function(e){return t.cycle(e)},500+t._config.interval))};p(this._element.querySelectorAll(oe)).on(V.DRAG_START,function(e){return e.preventDefault()}),this._pointerEvent?(p(this._element).on(V.POINTERDOWN,function(e){return n(e)}),p(this._element).on(V.POINTERUP,function(e){return i(e)}),this._element.classList.add(ee)):(p(this._element).on(V.TOUCHSTART,function(e){return n(e)}),p(this._element).on(V.TOUCHMOVE,function(e){return function(e){e.originalEvent.touches&&1<e.originalEvent.touches.length?t.touchDeltaX=0:t.touchDeltaX=e.originalEvent.touches[0].clientX-t.touchStartX}(e)}),p(this._element).on(V.TOUCHEND,function(e){return i(e)}))}},e._keydown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.which){case 37:e.preventDefault(),this.prev();break;case 39:e.preventDefault(),this.next()}},e._getItemIndex=function(e){return this._items=e&&e.parentNode?[].slice.call(e.parentNode.querySelectorAll(ie)):[],this._items.indexOf(e)},e._getItemByDirection=function(e,t){var n=e===B,i=e===q,o=this._getItemIndex(t),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return t;var s=(o+(e===q?-1:1))%this._items.length;return-1==s?this._items[this._items.length-1]:this._items[s]},e._triggerSlideEvent=function(e,t){var n=this._getItemIndex(e),i=this._getItemIndex(this._element.querySelector(ne)),o=p.Event(V.SLIDE,{relatedTarget:e,direction:t,from:i,to:n});return p(this._element).trigger(o),o},e._setActiveIndicatorElement=function(e){if(this._indicatorsElement){var t=[].slice.call(this._indicatorsElement.querySelectorAll(te));p(t).removeClass(z);var n=this._indicatorsElement.children[this._getItemIndex(e)];n&&p(n).addClass(z)}},e._slide=function(e,t){var n,i,o,r=this,s=this._element.querySelector(ne),a=this._getItemIndex(s),l=t||s&&this._getItemByDirection(e,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(o=e===B?(n=$,i=J,K):(n=G,i=Z,Q),l&&p(l).hasClass(z))this._isSliding=!1;else if(!this._triggerSlideEvent(l,o).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=p.Event(V.SLID,{relatedTarget:l,direction:o,from:a,to:c});if(p(this._element).hasClass(X)){p(l).addClass(i),m.reflow(l),p(s).addClass(n),p(l).addClass(n);var f=parseInt(l.getAttribute("data-interval"),10);f?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=f):this._config.interval=this._config.defaultInterval||this._config.interval;var d=m.getTransitionDurationFromElement(s);p(s).one(m.TRANSITION_END,function(){p(l).removeClass(n+" "+i).addClass(z),p(s).removeClass(z+" "+i+" "+n),r._isSliding=!1,setTimeout(function(){return p(r._element).trigger(u)},0)}).emulateTransitionEnd(d)}else p(s).removeClass(z),p(l).addClass(z),this._isSliding=!1,p(this._element).trigger(u);h&&this.cycle()}},r._jQueryInterface=function(i){return this.each(function(){var e=p(this).data(H),t=l({},W,{},p(this).data());"object"==typeof i&&(t=l({},t,{},i));var n="string"==typeof i?i:t.slide;if(e||(e=new r(this,t),p(this).data(H,e)),"number"==typeof i)e.to(i);else if("string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}else t.interval&&t.ride&&(e.pause(),e.cycle())})},r._dataApiClickHandler=function(e){var t=m.getSelectorFromElement(this);if(t){var n=p(t)[0];if(n&&p(n).hasClass(Y)){var i=l({},p(n).data(),{},p(this).data()),o=this.getAttribute("data-slide-to");o&&(i.interval=!1),r._jQueryInterface.call(p(n),i),o&&p(n).data(H).to(o),e.preventDefault()}}},s(r,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return W}}]),r}();p(document).on(V.CLICK_DATA_API,ae,he._dataApiClickHandler),p(window).on(V.LOAD_DATA_API,function(){for(var e=[].slice.call(document.querySelectorAll(le)),t=0,n=e.length;t<n;t++){var i=p(e[t]);he._jQueryInterface.call(i,i.data())}}),p.fn[j]=he._jQueryInterface,p.fn[j].Constructor=he,p.fn[j].noConflict=function(){return p.fn[j]=M,he._jQueryInterface};var ue="collapse",fe="bs.collapse",de="."+fe,pe=p.fn[ue],me={toggle:!0,parent:""},ge={toggle:"boolean",parent:"(string|element)"},_e={SHOW:"show"+de,SHOWN:"shown"+de,HIDE:"hide"+de,HIDDEN:"hidden"+de,CLICK_DATA_API:"click"+de+".data-api"},ve="show",ye="collapse",Ee="collapsing",be="collapsed",we="width",Te="height",Ce=".show, .collapsing",Se='[data-toggle="collapse"]',De=function(){function a(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(Se)),i=0,o=n.length;i<o;i++){var r=n[i],s=m.getSelectorFromElement(r),a=[].slice.call(document.querySelectorAll(s)).filter(function(e){return e===t});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var e=a.prototype;return e.toggle=function(){p(this._element).hasClass(ve)?this.hide():this.show()},e.show=function(){var e,t,n=this;if(!this._isTransitioning&&!p(this._element).hasClass(ve)&&(this._parent&&0===(e=[].slice.call(this._parent.querySelectorAll(Ce)).filter(function(e){return"string"==typeof n._config.parent?e.getAttribute("data-parent")===n._config.parent:e.classList.contains(ye)})).length&&(e=null),!(e&&(t=p(e).not(this._selector).data(fe))&&t._isTransitioning))){var i=p.Event(_e.SHOW);if(p(this._element).trigger(i),!i.isDefaultPrevented()){e&&(a._jQueryInterface.call(p(e).not(this._selector),"hide"),t||p(e).data(fe,null));var o=this._getDimension();p(this._element).removeClass(ye).addClass(Ee),this._element.style[o]=0,this._triggerArray.length&&p(this._triggerArray).removeClass(be).attr("aria-expanded",!0),this.setTransitioning(!0);var r="scroll"+(o[0].toUpperCase()+o.slice(1)),s=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,function(){p(n._element).removeClass(Ee).addClass(ye).addClass(ve),n._element.style[o]="",n.setTransitioning(!1),p(n._element).trigger(_e.SHOWN)}).emulateTransitionEnd(s),this._element.style[o]=this._element[r]+"px"}}},e.hide=function(){var e=this;if(!this._isTransitioning&&p(this._element).hasClass(ve)){var t=p.Event(_e.HIDE);if(p(this._element).trigger(t),!t.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",m.reflow(this._element),p(this._element).addClass(Ee).removeClass(ye).removeClass(ve);var i=this._triggerArray.length;if(0<i)for(var o=0;o<i;o++){var r=this._triggerArray[o],s=m.getSelectorFromElement(r);if(null!==s)p([].slice.call(document.querySelectorAll(s))).hasClass(ve)||p(r).addClass(be).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,function(){e.setTransitioning(!1),p(e._element).removeClass(Ee).addClass(ye).trigger(_e.HIDDEN)}).emulateTransitionEnd(a)}}},e.setTransitioning=function(e){this._isTransitioning=e},e.dispose=function(){p.removeData(this._element,fe),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},e._getConfig=function(e){return(e=l({},me,{},e)).toggle=Boolean(e.toggle),m.typeCheckConfig(ue,e,ge),e},e._getDimension=function(){return p(this._element).hasClass(we)?we:Te},e._getParent=function(){var e,n=this;m.isElement(this._config.parent)?(e=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(e=this._config.parent[0])):e=document.querySelector(this._config.parent);var t='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(e.querySelectorAll(t));return p(i).each(function(e,t){n._addAriaAndCollapsedClass(a._getTargetFromElement(t),[t])}),e},e._addAriaAndCollapsedClass=function(e,t){var n=p(e).hasClass(ve);t.length&&p(t).toggleClass(be,!n).attr("aria-expanded",n)},a._getTargetFromElement=function(e){var t=m.getSelectorFromElement(e);return t?document.querySelector(t):null},a._jQueryInterface=function(i){return this.each(function(){var e=p(this),t=e.data(fe),n=l({},me,{},e.data(),{},"object"==typeof i&&i?i:{});if(!t&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),t||(t=new a(this,n),e.data(fe,t)),"string"==typeof i){if("undefined"==typeof t[i])throw new TypeError('No method named "'+i+'"');t[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return me}}]),a}();p(document).on(_e.CLICK_DATA_API,Se,function(e){"A"===e.currentTarget.tagName&&e.preventDefault();var n=p(this),t=m.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(t));p(i).each(function(){var e=p(this),t=e.data(fe)?"toggle":n.data();De._jQueryInterface.call(e,t)})}),p.fn[ue]=De._jQueryInterface,p.fn[ue].Constructor=De,p.fn[ue].noConflict=function(){return p.fn[ue]=pe,De._jQueryInterface};var Ie="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator,Ae=function(){for(var e=["Edge","Trident","Firefox"],t=0;t<e.length;t+=1)if(Ie&&0<=navigator.userAgent.indexOf(e[t]))return 1;return 0}();var Oe=Ie&&window.Promise?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},Ae))}};function Ne(e){return e&&"[object Function]"==={}.toString.call(e)}function ke(e,t){if(1!==e.nodeType)return[];var n=e.ownerDocument.defaultView.getComputedStyle(e,null);return t?n[t]:n}function Le(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function Pe(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=ke(e),n=t.overflow,i=t.overflowX,o=t.overflowY;return/(auto|scroll|overlay)/.test(n+o+i)?e:Pe(Le(e))}function xe(e){return e&&e.referenceNode?e.referenceNode:e}var je=Ie&&!(!window.MSInputMethodContext||!document.documentMode),He=Ie&&/MSIE 10/.test(navigator.userAgent);function Re(e){return 11===e?je:10===e?He:je||He}function Fe(e){if(!e)return document.documentElement;for(var t=Re(10)?document.body:null,n=e.offsetParent||null;n===t&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&"BODY"!==i&&"HTML"!==i?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===ke(n,"position")?Fe(n):n:e?e.ownerDocument.documentElement:document.documentElement}function Me(e){return null!==e.parentNode?Me(e.parentNode):e}function We(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?e:t,o=n?t:e,r=document.createRange();r.setStart(i,0),r.setEnd(o,0);var s=r.commonAncestorContainer;if(e!==s&&t!==s||i.contains(o))return function(e){var t=e.nodeName;return"BODY"!==t&&("HTML"===t||Fe(e.firstElementChild)===e)}(s)?s:Fe(s);var a=Me(e);return a.host?We(a.host,t):We(e,Me(t).host)}function Ue(e,t){var n="top"===(1<arguments.length&&void 0!==t?t:"top")?"scrollTop":"scrollLeft",i=e.nodeName;if("BODY"!==i&&"HTML"!==i)return e[n];var o=e.ownerDocument.documentElement;return(e.ownerDocument.scrollingElement||o)[n]}function Be(e,t){var n="x"===t?"Left":"Top",i="Left"==n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"],10)+parseFloat(e["border"+i+"Width"],10)}function qe(e,t,n,i){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],Re(10)?parseInt(n["offset"+e])+parseInt(i["margin"+("Height"===e?"Top":"Left")])+parseInt(i["margin"+("Height"===e?"Bottom":"Right")]):0)}function Ke(e){var t=e.body,n=e.documentElement,i=Re(10)&&getComputedStyle(n);return{height:qe("Height",t,n,i),width:qe("Width",t,n,i)}}var Qe=function(e,t,n){return t&&Ve(e.prototype,t),n&&Ve(e,n),e};function Ve(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function Ye(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ze=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};function Xe(e){return ze({},e,{right:e.left+e.width,bottom:e.top+e.height})}function Ge(e){var t={};try{if(Re(10)){t=e.getBoundingClientRect();var n=Ue(e,"top"),i=Ue(e,"left");t.top+=n,t.left+=i,t.bottom+=n,t.right+=i}else t=e.getBoundingClientRect()}catch(e){}var o={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},r="HTML"===e.nodeName?Ke(e.ownerDocument):{},s=r.width||e.clientWidth||o.width,a=r.height||e.clientHeight||o.height,l=e.offsetWidth-s,c=e.offsetHeight-a;if(l||c){var h=ke(e);l-=Be(h,"x"),c-=Be(h,"y"),o.width-=l,o.height-=c}return Xe(o)}function $e(e,t,n){var i=2<arguments.length&&void 0!==n&&n,o=Re(10),r="HTML"===t.nodeName,s=Ge(e),a=Ge(t),l=Pe(e),c=ke(t),h=parseFloat(c.borderTopWidth,10),u=parseFloat(c.borderLeftWidth,10);i&&r&&(a.top=Math.max(a.top,0),a.left=Math.max(a.left,0));var f=Xe({top:s.top-a.top-h,left:s.left-a.left-u,width:s.width,height:s.height});if(f.marginTop=0,f.marginLeft=0,!o&&r){var d=parseFloat(c.marginTop,10),p=parseFloat(c.marginLeft,10);f.top-=h-d,f.bottom-=h-d,f.left-=u-p,f.right-=u-p,f.marginTop=d,f.marginLeft=p}return(o&&!i?t.contains(l):t===l&&"BODY"!==l.nodeName)&&(f=function(e,t,n){var i=2<arguments.length&&void 0!==n&&n,o=Ue(t,"top"),r=Ue(t,"left"),s=i?-1:1;return e.top+=o*s,e.bottom+=o*s,e.left+=r*s,e.right+=r*s,e}(f,t)),f}function Je(e){if(!e||!e.parentElement||Re())return document.documentElement;for(var t=e.parentElement;t&&"none"===ke(t,"transform");)t=t.parentElement;return t||document.documentElement}function Ze(e,t,n,i,o){var r=4<arguments.length&&void 0!==o&&o,s={top:0,left:0},a=r?Je(e):We(e,xe(t));if("viewport"===i)s=function(e,t){var n=1<arguments.length&&void 0!==t&&t,i=e.ownerDocument.documentElement,o=$e(e,i),r=Math.max(i.clientWidth,window.innerWidth||0),s=Math.max(i.clientHeight,window.innerHeight||0),a=n?0:Ue(i),l=n?0:Ue(i,"left");return Xe({top:a-o.top+o.marginTop,left:l-o.left+o.marginLeft,width:r,height:s})}(a,r);else{var l=void 0;"scrollParent"===i?"BODY"===(l=Pe(Le(t))).nodeName&&(l=e.ownerDocument.documentElement):l="window"===i?e.ownerDocument.documentElement:i;var c=$e(l,a,r);if("HTML"!==l.nodeName||function e(t){var n=t.nodeName;if("BODY"===n||"HTML"===n)return!1;if("fixed"===ke(t,"position"))return!0;var i=Le(t);return!!i&&e(i)}(a))s=c;else{var h=Ke(e.ownerDocument),u=h.height,f=h.width;s.top+=c.top-c.marginTop,s.bottom=u+c.top,s.left+=c.left-c.marginLeft,s.right=f+c.left}}var d="number"==typeof(n=n||0);return s.left+=d?n:n.left||0,s.top+=d?n:n.top||0,s.right-=d?n:n.right||0,s.bottom-=d?n:n.bottom||0,s}function et(e,t,i,n,o,r){var s=5<arguments.length&&void 0!==r?r:0;if(-1===e.indexOf("auto"))return e;var a=Ze(i,n,s,o),l={top:{width:a.width,height:t.top-a.top},right:{width:a.right-t.right,height:a.height},bottom:{width:a.width,height:a.bottom-t.bottom},left:{width:t.left-a.left,height:a.height}},c=Object.keys(l).map(function(e){return ze({key:e},l[e],{area:function(e){return e.width*e.height}(l[e])})}).sort(function(e,t){return t.area-e.area}),h=c.filter(function(e){var t=e.width,n=e.height;return t>=i.clientWidth&&n>=i.clientHeight}),u=0<h.length?h[0].key:c[0].key,f=e.split("-")[1];return u+(f?"-"+f:"")}function tt(e,t,n,i){var o=3<arguments.length&&void 0!==i?i:null;return $e(n,o?Je(t):We(t,xe(n)),o)}function nt(e){var t=e.ownerDocument.defaultView.getComputedStyle(e),n=parseFloat(t.marginTop||0)+parseFloat(t.marginBottom||0),i=parseFloat(t.marginLeft||0)+parseFloat(t.marginRight||0);return{width:e.offsetWidth+i,height:e.offsetHeight+n}}function it(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function ot(e,t,n){n=n.split("-")[0];var i=nt(e),o={width:i.width,height:i.height},r=-1!==["right","left"].indexOf(n),s=r?"top":"left",a=r?"left":"top",l=r?"height":"width",c=r?"width":"height";return o[s]=t[s]+t[l]/2-i[l]/2,o[a]=n===a?t[a]-i[c]:t[it(a)],o}function rt(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function st(e,n,t){return(void 0===t?e:e.slice(0,function(e,t,n){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===n});var i=rt(e,function(e){return e[t]===n});return e.indexOf(i)}(e,"name",t))).forEach(function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var t=e.function||e.fn;e.enabled&&Ne(t)&&(n.offsets.popper=Xe(n.offsets.popper),n.offsets.reference=Xe(n.offsets.reference),n=t(n,e))}),n}function at(e,n){return e.some(function(e){var t=e.name;return e.enabled&&t===n})}function lt(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),i=0;i<t.length;i++){var o=t[i],r=o?""+o+n:e;if("undefined"!=typeof document.body.style[r])return r}return null}function ct(e){var t=e.ownerDocument;return t?t.defaultView:window}function ht(e,t,n,i){n.updateBound=i,ct(e).addEventListener("resize",n.updateBound,{passive:!0});var o=Pe(e);return function e(t,n,i,o){var r="BODY"===t.nodeName,s=r?t.ownerDocument.defaultView:t;s.addEventListener(n,i,{passive:!0}),r||e(Pe(s.parentNode),n,i,o),o.push(s)}(o,"scroll",n.updateBound,n.scrollParents),n.scrollElement=o,n.eventsEnabled=!0,n}function ut(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=function(e,t){return ct(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}(this.reference,this.state))}function ft(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function dt(n,i){Object.keys(i).forEach(function(e){var t="";-1!==["width","height","top","right","bottom","left"].indexOf(e)&&ft(i[e])&&(t="px"),n.style[e]=i[e]+t})}function pt(e,t){function n(e){return e}var i=e.offsets,o=i.popper,r=i.reference,s=Math.round,a=Math.floor,l=s(r.width),c=s(o.width),h=-1!==["left","right"].indexOf(e.placement),u=-1!==e.placement.indexOf("-"),f=t?h||u||l%2==c%2?s:a:n,d=t?s:n;return{left:f(l%2==1&&c%2==1&&!u&&t?o.left-1:o.left),top:d(o.top),bottom:d(o.bottom),right:f(o.right)}}var mt=Ie&&/Firefox/i.test(navigator.userAgent);function gt(e,t,n){var i=rt(e,function(e){return e.name===t}),o=!!i&&e.some(function(e){return e.name===n&&e.enabled&&e.order<i.order});if(!o){var r="`"+t+"`",s="`"+n+"`";console.warn(s+" modifier is required by "+r+" modifier in order to work, be sure to include it before "+r+"!")}return o}var _t=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],vt=_t.slice(3);function yt(e,t){var n=1<arguments.length&&void 0!==t&&t,i=vt.indexOf(e),o=vt.slice(i+1).concat(vt.slice(0,i));return n?o.reverse():o}var Et="flip",bt="clockwise",wt="counterclockwise";function Tt(e,o,r,t){var s=[0,0],a=-1!==["right","left"].indexOf(t),n=e.split(/(\+|\-)/).map(function(e){return e.trim()}),i=n.indexOf(rt(n,function(e){return-1!==e.search(/,|\s/)}));n[i]&&-1===n[i].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var l=/\s*,\s*|\s+/,c=-1!==i?[n.slice(0,i).concat([n[i].split(l)[0]]),[n[i].split(l)[1]].concat(n.slice(i+1))]:[n];return(c=c.map(function(e,t){var n=(1===t?!a:a)?"height":"width",i=!1;return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,i=!0,e):i?(e[e.length-1]+=t,i=!1,e):e.concat(t)},[]).map(function(e){return function(e,t,n,i){var o=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+o[1],s=o[2];if(!r)return e;if(0!==s.indexOf("%"))return"vh"!==s&&"vw"!==s?r:("vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*r;var a=void 0;switch(s){case"%p":a=n;break;case"%":case"%r":default:a=i}return Xe(a)[t]/100*r}(e,n,o,r)})})).forEach(function(n,i){n.forEach(function(e,t){ft(e)&&(s[i]+=e*("-"===n[t-1]?-1:1))})}),s}var Ct={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],i=t.split("-")[1];if(i){var o=e.offsets,r=o.reference,s=o.popper,a=-1!==["bottom","top"].indexOf(n),l=a?"left":"top",c=a?"width":"height",h={start:Ye({},l,r[l]),end:Ye({},l,r[l]+r[c]-s[c])};e.offsets.popper=ze({},s,h[i])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var n=t.offset,i=e.placement,o=e.offsets,r=o.popper,s=o.reference,a=i.split("-")[0],l=void 0;return l=ft(+n)?[+n,0]:Tt(n,r,s,a),"left"===a?(r.top+=l[0],r.left-=l[1]):"right"===a?(r.top+=l[0],r.left+=l[1]):"top"===a?(r.left+=l[0],r.top-=l[1]):"bottom"===a&&(r.left+=l[0],r.top+=l[1]),e.popper=r,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,i){var t=i.boundariesElement||Fe(e.instance.popper);e.instance.reference===t&&(t=Fe(t));var n=lt("transform"),o=e.instance.popper.style,r=o.top,s=o.left,a=o[n];o.top="",o.left="",o[n]="";var l=Ze(e.instance.popper,e.instance.reference,i.padding,t,e.positionFixed);o.top=r,o.left=s,o[n]=a,i.boundaries=l;var c=i.priority,h=e.offsets.popper,u={primary:function(e){var t=h[e];return h[e]<l[e]&&!i.escapeWithReference&&(t=Math.max(h[e],l[e])),Ye({},e,t)},secondary:function(e){var t="right"===e?"left":"top",n=h[t];return h[e]>l[e]&&!i.escapeWithReference&&(n=Math.min(h[t],l[e]-("right"===e?h.width:h.height))),Ye({},t,n)}};return c.forEach(function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";h=ze({},h,u[t](e))}),e.offsets.popper=h,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,i=t.reference,o=e.placement.split("-")[0],r=Math.floor,s=-1!==["top","bottom"].indexOf(o),a=s?"right":"bottom",l=s?"left":"top",c=s?"width":"height";return n[a]<r(i[l])&&(e.offsets.popper[l]=r(i[l])-n[c]),n[l]>r(i[a])&&(e.offsets.popper[l]=r(i[a])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){var n;if(!gt(e.instance.modifiers,"arrow","keepTogether"))return e;var i=t.element;if("string"==typeof i){if(!(i=e.instance.popper.querySelector(i)))return e}else if(!e.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var o=e.placement.split("-")[0],r=e.offsets,s=r.popper,a=r.reference,l=-1!==["left","right"].indexOf(o),c=l?"height":"width",h=l?"Top":"Left",u=h.toLowerCase(),f=l?"left":"top",d=l?"bottom":"right",p=nt(i)[c];a[d]-p<s[u]&&(e.offsets.popper[u]-=s[u]-(a[d]-p)),a[u]+p>s[d]&&(e.offsets.popper[u]+=a[u]+p-s[d]),e.offsets.popper=Xe(e.offsets.popper);var m=a[u]+a[c]/2-p/2,g=ke(e.instance.popper),_=parseFloat(g["margin"+h],10),v=parseFloat(g["border"+h+"Width"],10),y=m-e.offsets.popper[u]-_-v;return y=Math.max(Math.min(s[c]-p,y),0),e.arrowElement=i,e.offsets.arrow=(Ye(n={},u,Math.round(y)),Ye(n,f,""),n),e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(m,g){if(at(m.instance.modifiers,"inner"))return m;if(m.flipped&&m.placement===m.originalPlacement)return m;var _=Ze(m.instance.popper,m.instance.reference,g.padding,g.boundariesElement,m.positionFixed),v=m.placement.split("-")[0],y=it(v),E=m.placement.split("-")[1]||"",b=[];switch(g.behavior){case Et:b=[v,y];break;case bt:b=yt(v);break;case wt:b=yt(v,!0);break;default:b=g.behavior}return b.forEach(function(e,t){if(v!==e||b.length===t+1)return m;v=m.placement.split("-")[0],y=it(v);var n=m.offsets.popper,i=m.offsets.reference,o=Math.floor,r="left"===v&&o(n.right)>o(i.left)||"right"===v&&o(n.left)<o(i.right)||"top"===v&&o(n.bottom)>o(i.top)||"bottom"===v&&o(n.top)<o(i.bottom),s=o(n.left)<o(_.left),a=o(n.right)>o(_.right),l=o(n.top)<o(_.top),c=o(n.bottom)>o(_.bottom),h="left"===v&&s||"right"===v&&a||"top"===v&&l||"bottom"===v&&c,u=-1!==["top","bottom"].indexOf(v),f=!!g.flipVariations&&(u&&"start"===E&&s||u&&"end"===E&&a||!u&&"start"===E&&l||!u&&"end"===E&&c),d=!!g.flipVariationsByContent&&(u&&"start"===E&&a||u&&"end"===E&&s||!u&&"start"===E&&c||!u&&"end"===E&&l),p=f||d;(r||h||p)&&(m.flipped=!0,(r||h)&&(v=b[t+1]),p&&(E=function(e){return"end"===e?"start":"start"===e?"end":e}(E)),m.placement=v+(E?"-"+E:""),m.offsets.popper=ze({},m.offsets.popper,ot(m.instance.popper,m.offsets.reference,m.placement)),m=st(m.instance.modifiers,m,"flip"))}),m},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],i=e.offsets,o=i.popper,r=i.reference,s=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n);return o[s?"left":"top"]=r[n]-(a?o[s?"width":"height"]:0),e.placement=it(t),e.offsets.popper=Xe(o),e}},hide:{order:800,enabled:!0,fn:function(e){if(!gt(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=rt(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,i=t.y,o=e.offsets.popper,r=rt(e.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration;void 0!==r&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s=void 0!==r?r:t.gpuAcceleration,a=Fe(e.instance.popper),l=Ge(a),c={position:o.position},h=pt(e,window.devicePixelRatio<2||!mt),u="bottom"===n?"top":"bottom",f="right"===i?"left":"right",d=lt("transform"),p=void 0,m=void 0;if(m="bottom"==u?"HTML"===a.nodeName?-a.clientHeight+h.bottom:-l.height+h.bottom:h.top,p="right"==f?"HTML"===a.nodeName?-a.clientWidth+h.right:-l.width+h.right:h.left,s&&d)c[d]="translate3d("+p+"px, "+m+"px, 0)",c[u]=0,c[f]=0,c.willChange="transform";else{var g="bottom"==u?-1:1,_="right"==f?-1:1;c[u]=m*g,c[f]=p*_,c.willChange=u+", "+f}var v={"x-placement":e.placement};return e.attributes=ze({},v,e.attributes),e.styles=ze({},c,e.styles),e.arrowStyles=ze({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){return dt(e.instance.popper,e.styles),function(t,n){Object.keys(n).forEach(function(e){!1!==n[e]?t.setAttribute(e,n[e]):t.removeAttribute(e)})}(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&dt(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,n,i,o){var r=tt(o,t,e,n.positionFixed),s=et(n.placement,r,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",s),dt(t,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},St=(Qe(Dt,[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=tt(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=et(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=ot(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=st(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,at(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[lt("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=ht(this.reference,this.options,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return ut.call(this)}}]),Dt);function Dt(e,t){var n=this,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Dt),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=Oe(this.update.bind(this)),this.options=ze({},Dt.Defaults,i),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=t&&t.jquery?t[0]:t,this.options.modifiers={},Object.keys(ze({},Dt.Defaults.modifiers,i.modifiers)).forEach(function(e){n.options.modifiers[e]=ze({},Dt.Defaults.modifiers[e]||{},i.modifiers?i.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return ze({name:e},n.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(e){e.enabled&&Ne(e.onLoad)&&e.onLoad(n.reference,n.popper,n.options,e,n.state)}),this.update();var o=this.options.eventsEnabled;o&&this.enableEventListeners(),this.state.eventsEnabled=o}St.Utils=("undefined"!=typeof window?window:global).PopperUtils,St.placements=_t,St.Defaults=Ct;var It="dropdown",At="bs.dropdown",Ot="."+At,Nt=".data-api",kt=p.fn[It],Lt=new RegExp("38|40|27"),Pt={HIDE:"hide"+Ot,HIDDEN:"hidden"+Ot,SHOW:"show"+Ot,SHOWN:"shown"+Ot,CLICK:"click"+Ot,CLICK_DATA_API:"click"+Ot+Nt,KEYDOWN_DATA_API:"keydown"+Ot+Nt,KEYUP_DATA_API:"keyup"+Ot+Nt},xt="disabled",jt="show",Ht="dropup",Rt="dropright",Ft="dropleft",Mt="dropdown-menu-right",Wt="position-static",Ut='[data-toggle="dropdown"]',Bt=".dropdown form",qt=".dropdown-menu",Kt=".navbar-nav",Qt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Vt="top-start",Yt="top-end",zt="bottom-start",Xt="bottom-end",Gt="right-start",$t="left-start",Jt={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},Zt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},en=function(){function c(e,t){this._element=e,this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var e=c.prototype;return e.toggle=function(){if(!this._element.disabled&&!p(this._element).hasClass(xt)){var e=p(this._menu).hasClass(jt);c._clearMenus(),e||this.show(!0)}},e.show=function(e){if(void 0===e&&(e=!1),!(this._element.disabled||p(this._element).hasClass(xt)||p(this._menu).hasClass(jt))){var t={relatedTarget:this._element},n=p.Event(Pt.SHOW,t),i=c._getParentFromElement(this._element);if(p(i).trigger(n),!n.isDefaultPrevented()){if(!this._inNavbar&&e){if("undefined"==typeof St)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var o=this._element;"parent"===this._config.reference?o=i:m.isElement(this._config.reference)&&(o=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&p(i).addClass(Wt),this._popper=new St(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===p(i).closest(Kt).length&&p(document.body).children().on("mouseover",null,p.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),p(this._menu).toggleClass(jt),p(i).toggleClass(jt).trigger(p.Event(Pt.SHOWN,t))}}},e.hide=function(){if(!this._element.disabled&&!p(this._element).hasClass(xt)&&p(this._menu).hasClass(jt)){var e={relatedTarget:this._element},t=p.Event(Pt.HIDE,e),n=c._getParentFromElement(this._element);p(n).trigger(t),t.isDefaultPrevented()||(this._popper&&this._popper.destroy(),p(this._menu).toggleClass(jt),p(n).toggleClass(jt).trigger(p.Event(Pt.HIDDEN,e)))}},e.dispose=function(){p.removeData(this._element,At),p(this._element).off(Ot),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},e.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},e._addEventListeners=function(){var t=this;p(this._element).on(Pt.CLICK,function(e){e.preventDefault(),e.stopPropagation(),t.toggle()})},e._getConfig=function(e){return e=l({},this.constructor.Default,{},p(this._element).data(),{},e),m.typeCheckConfig(It,e,this.constructor.DefaultType),e},e._getMenuElement=function(){if(!this._menu){var e=c._getParentFromElement(this._element);e&&(this._menu=e.querySelector(qt))}return this._menu},e._getPlacement=function(){var e=p(this._element.parentNode),t=zt;return e.hasClass(Ht)?(t=Vt,p(this._menu).hasClass(Mt)&&(t=Yt)):e.hasClass(Rt)?t=Gt:e.hasClass(Ft)?t=$t:p(this._menu).hasClass(Mt)&&(t=Xt),t},e._detectNavbar=function(){return 0<p(this._element).closest(".navbar").length},e._getOffset=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=l({},e.offsets,{},t._config.offset(e.offsets,t._element)||{}),e}:e.offset=this._config.offset,e},e._getPopperConfig=function(){var e={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(e.modifiers.applyStyle={enabled:!1}),l({},e,{},this._config.popperConfig)},c._jQueryInterface=function(t){return this.each(function(){var e=p(this).data(At);if(e||(e=new c(this,"object"==typeof t?t:null),p(this).data(At,e)),"string"==typeof t){if("undefined"==typeof e[t])throw new TypeError('No method named "'+t+'"');e[t]()}})},c._clearMenus=function(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var t=[].slice.call(document.querySelectorAll(Ut)),n=0,i=t.length;n<i;n++){var o=c._getParentFromElement(t[n]),r=p(t[n]).data(At),s={relatedTarget:t[n]};if(e&&"click"===e.type&&(s.clickEvent=e),r){var a=r._menu;if(p(o).hasClass(jt)&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&p.contains(o,e.target))){var l=p.Event(Pt.HIDE,s);p(o).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&p(document.body).children().off("mouseover",null,p.noop),t[n].setAttribute("aria-expanded","false"),r._popper&&r._popper.destroy(),p(a).removeClass(jt),p(o).removeClass(jt).trigger(p.Event(Pt.HIDDEN,s)))}}}},c._getParentFromElement=function(e){var t,n=m.getSelectorFromElement(e);return n&&(t=document.querySelector(n)),t||e.parentNode},c._dataApiKeydownHandler=function(e){if((/input|textarea/i.test(e.target.tagName)?!(32===e.which||27!==e.which&&(40!==e.which&&38!==e.which||p(e.target).closest(qt).length)):Lt.test(e.which))&&(e.preventDefault(),e.stopPropagation(),!this.disabled&&!p(this).hasClass(xt))){var t=c._getParentFromElement(this),n=p(t).hasClass(jt);if(n||27!==e.which)if(n&&(!n||27!==e.which&&32!==e.which)){var i=[].slice.call(t.querySelectorAll(Qt)).filter(function(e){return p(e).is(":visible")});if(0!==i.length){var o=i.indexOf(e.target);38===e.which&&0<o&&o--,40===e.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===e.which){var r=t.querySelector(Ut);p(r).trigger("focus")}p(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return Jt}},{key:"DefaultType",get:function(){return Zt}}]),c}();p(document).on(Pt.KEYDOWN_DATA_API,Ut,en._dataApiKeydownHandler).on(Pt.KEYDOWN_DATA_API,qt,en._dataApiKeydownHandler).on(Pt.CLICK_DATA_API+" "+Pt.KEYUP_DATA_API,en._clearMenus).on(Pt.CLICK_DATA_API,Ut,function(e){e.preventDefault(),e.stopPropagation(),en._jQueryInterface.call(p(this),"toggle")}).on(Pt.CLICK_DATA_API,Bt,function(e){e.stopPropagation()}),p.fn[It]=en._jQueryInterface,p.fn[It].Constructor=en,p.fn[It].noConflict=function(){return p.fn[It]=kt,en._jQueryInterface};var tn="modal",nn="bs.modal",on="."+nn,rn=p.fn[tn],sn={backdrop:!0,keyboard:!0,focus:!0,show:!0},an={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},ln={HIDE:"hide"+on,HIDE_PREVENTED:"hidePrevented"+on,HIDDEN:"hidden"+on,SHOW:"show"+on,SHOWN:"shown"+on,FOCUSIN:"focusin"+on,RESIZE:"resize"+on,CLICK_DISMISS:"click.dismiss"+on,KEYDOWN_DISMISS:"keydown.dismiss"+on,MOUSEUP_DISMISS:"mouseup.dismiss"+on,MOUSEDOWN_DISMISS:"mousedown.dismiss"+on,CLICK_DATA_API:"click"+on+".data-api"},cn="modal-dialog-scrollable",hn="modal-scrollbar-measure",un="modal-backdrop",fn="modal-open",dn="fade",pn="show",mn="modal-static",gn=".modal-dialog",_n=".modal-body",vn='[data-toggle="modal"]',yn='[data-dismiss="modal"]',En=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",bn=".sticky-top",wn=function(){function o(e,t){this._config=this._getConfig(t),this._element=e,this._dialog=e.querySelector(gn),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var e=o.prototype;return e.toggle=function(e){return this._isShown?this.hide():this.show(e)},e.show=function(e){var t=this;if(!this._isShown&&!this._isTransitioning){p(this._element).hasClass(dn)&&(this._isTransitioning=!0);var n=p.Event(ln.SHOW,{relatedTarget:e});p(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),p(this._element).on(ln.CLICK_DISMISS,yn,function(e){return t.hide(e)}),p(this._dialog).on(ln.MOUSEDOWN_DISMISS,function(){p(t._element).one(ln.MOUSEUP_DISMISS,function(e){p(e.target).is(t._element)&&(t._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return t._showElement(e)}))}},e.hide=function(e){var t=this;if(e&&e.preventDefault(),this._isShown&&!this._isTransitioning){var n=p.Event(ln.HIDE);if(p(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=p(this._element).hasClass(dn);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),p(document).off(ln.FOCUSIN),p(this._element).removeClass(pn),p(this._element).off(ln.CLICK_DISMISS),p(this._dialog).off(ln.MOUSEDOWN_DISMISS),i){var o=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,function(e){return t._hideModal(e)}).emulateTransitionEnd(o)}else this._hideModal()}}},e.dispose=function(){[window,this._element,this._dialog].forEach(function(e){return p(e).off(on)}),p(document).off(ln.FOCUSIN),p.removeData(this._element,nn),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},e.handleUpdate=function(){this._adjustDialog()},e._getConfig=function(e){return e=l({},sn,{},e),m.typeCheckConfig(tn,e,an),e},e._triggerBackdropTransition=function(){var e=this;if("static"===this._config.backdrop){var t=p.Event(ln.HIDE_PREVENTED);if(p(this._element).trigger(t),t.defaultPrevented)return;this._element.classList.add(mn);var n=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,function(){e._element.classList.remove(mn)}).emulateTransitionEnd(n),this._element.focus()}else this.hide()},e._showElement=function(e){var t=this,n=p(this._element).hasClass(dn),i=this._dialog?this._dialog.querySelector(_n):null;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),p(this._dialog).hasClass(cn)&&i?i.scrollTop=0:this._element.scrollTop=0,n&&m.reflow(this._element),p(this._element).addClass(pn),this._config.focus&&this._enforceFocus();function o(){t._config.focus&&t._element.focus(),t._isTransitioning=!1,p(t._element).trigger(r)}var r=p.Event(ln.SHOWN,{relatedTarget:e});if(n){var s=m.getTransitionDurationFromElement(this._dialog);p(this._dialog).one(m.TRANSITION_END,o).emulateTransitionEnd(s)}else o()},e._enforceFocus=function(){var t=this;p(document).off(ln.FOCUSIN).on(ln.FOCUSIN,function(e){document!==e.target&&t._element!==e.target&&0===p(t._element).has(e.target).length&&t._element.focus()})},e._setEscapeEvent=function(){var t=this;this._isShown&&this._config.keyboard?p(this._element).on(ln.KEYDOWN_DISMISS,function(e){27===e.which&&t._triggerBackdropTransition()}):this._isShown||p(this._element).off(ln.KEYDOWN_DISMISS)},e._setResizeEvent=function(){var t=this;this._isShown?p(window).on(ln.RESIZE,function(e){return t.handleUpdate(e)}):p(window).off(ln.RESIZE)},e._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){p(document.body).removeClass(fn),e._resetAdjustments(),e._resetScrollbar(),p(e._element).trigger(ln.HIDDEN)})},e._removeBackdrop=function(){this._backdrop&&(p(this._backdrop).remove(),this._backdrop=null)},e._showBackdrop=function(e){var t=this,n=p(this._element).hasClass(dn)?dn:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=un,n&&this._backdrop.classList.add(n),p(this._backdrop).appendTo(document.body),p(this._element).on(ln.CLICK_DISMISS,function(e){t._ignoreBackdropClick?t._ignoreBackdropClick=!1:e.target===e.currentTarget&&t._triggerBackdropTransition()}),n&&m.reflow(this._backdrop),p(this._backdrop).addClass(pn),!e)return;if(!n)return void e();var i=m.getTransitionDurationFromElement(this._backdrop);p(this._backdrop).one(m.TRANSITION_END,e).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){p(this._backdrop).removeClass(pn);var o=function(){t._removeBackdrop(),e&&e()};if(p(this._element).hasClass(dn)){var r=m.getTransitionDurationFromElement(this._backdrop);p(this._backdrop).one(m.TRANSITION_END,o).emulateTransitionEnd(r)}else o()}else e&&e()},e._adjustDialog=function(){var e=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&e&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!e&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},e._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},e._checkScrollbar=function(){var e=document.body.getBoundingClientRect();this._isBodyOverflowing=e.left+e.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},e._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){var e=[].slice.call(document.querySelectorAll(En)),t=[].slice.call(document.querySelectorAll(bn));p(e).each(function(e,t){var n=t.style.paddingRight,i=p(t).css("padding-right");p(t).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),p(t).each(function(e,t){var n=t.style.marginRight,i=p(t).css("margin-right");p(t).data("margin-right",n).css("margin-right",parseFloat(i)-o._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=p(document.body).css("padding-right");p(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}p(document.body).addClass(fn)},e._resetScrollbar=function(){var e=[].slice.call(document.querySelectorAll(En));p(e).each(function(e,t){var n=p(t).data("padding-right");p(t).removeData("padding-right"),t.style.paddingRight=n||""});var t=[].slice.call(document.querySelectorAll(""+bn));p(t).each(function(e,t){var n=p(t).data("margin-right");"undefined"!=typeof n&&p(t).css("margin-right",n).removeData("margin-right")});var n=p(document.body).data("padding-right");p(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},e._getScrollbarWidth=function(){var e=document.createElement("div");e.className=hn,document.body.appendChild(e);var t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t},o._jQueryInterface=function(n,i){return this.each(function(){var e=p(this).data(nn),t=l({},sn,{},p(this).data(),{},"object"==typeof n&&n?n:{});if(e||(e=new o(this,t),p(this).data(nn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n](i)}else t.show&&e.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return sn}}]),o}();p(document).on(ln.CLICK_DATA_API,vn,function(e){var t,n=this,i=m.getSelectorFromElement(this);i&&(t=document.querySelector(i));var o=p(t).data(nn)?"toggle":l({},p(t).data(),{},p(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var r=p(t).one(ln.SHOW,function(e){e.isDefaultPrevented()||r.one(ln.HIDDEN,function(){p(n).is(":visible")&&n.focus()})});wn._jQueryInterface.call(p(t),o,this)}),p.fn[tn]=wn._jQueryInterface,p.fn[tn].Constructor=wn,p.fn[tn].noConflict=function(){return p.fn[tn]=rn,wn._jQueryInterface};var Tn=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Cn={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Sn=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,Dn=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function In(e,r,t){if(0===e.length)return e;if(t&&"function"==typeof t)return t(e);for(var n=(new window.DOMParser).parseFromString(e,"text/html"),s=Object.keys(r),a=[].slice.call(n.body.querySelectorAll("*")),i=function(e){var t=a[e],n=t.nodeName.toLowerCase();if(-1===s.indexOf(t.nodeName.toLowerCase()))return t.parentNode.removeChild(t),"continue";var i=[].slice.call(t.attributes),o=[].concat(r["*"]||[],r[n]||[]);i.forEach(function(e){!function(e,t){var n=e.nodeName.toLowerCase();if(-1!==t.indexOf(n))return-1===Tn.indexOf(n)||Boolean(e.nodeValue.match(Sn)||e.nodeValue.match(Dn));for(var i=t.filter(function(e){return e instanceof RegExp}),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1}(e,o)&&t.removeAttribute(e.nodeName)})},o=0,l=a.length;o<l;o++)i(o);return n.body.innerHTML}var An="tooltip",On="bs.tooltip",Nn="."+On,kn=p.fn[An],Ln="bs-tooltip",Pn=new RegExp("(^|\\s)"+Ln+"\\S+","g"),xn=["sanitize","whiteList","sanitizeFn"],jn={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},Hn={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Rn={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:Cn,popperConfig:null},Fn="show",Mn="out",Wn={HIDE:"hide"+Nn,HIDDEN:"hidden"+Nn,SHOW:"show"+Nn,SHOWN:"shown"+Nn,INSERTED:"inserted"+Nn,CLICK:"click"+Nn,FOCUSIN:"focusin"+Nn,FOCUSOUT:"focusout"+Nn,MOUSEENTER:"mouseenter"+Nn,MOUSELEAVE:"mouseleave"+Nn},Un="fade",Bn="show",qn=".tooltip-inner",Kn=".arrow",Qn="hover",Vn="focus",Yn="click",zn="manual",Xn=function(){function i(e,t){if("undefined"==typeof St)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=e,this.config=this._getConfig(t),this.tip=null,this._setListeners()}var e=i.prototype;return e.enable=function(){this._isEnabled=!0},e.disable=function(){this._isEnabled=!1},e.toggleEnabled=function(){this._isEnabled=!this._isEnabled},e.toggle=function(e){if(this._isEnabled)if(e){var t=this.constructor.DATA_KEY,n=p(e.currentTarget).data(t);n||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),p(e.currentTarget).data(t,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(p(this.getTipElement()).hasClass(Bn))return void this._leave(null,this);this._enter(null,this)}},e.dispose=function(){clearTimeout(this._timeout),p.removeData(this.element,this.constructor.DATA_KEY),p(this.element).off(this.constructor.EVENT_KEY),p(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&p(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},e.show=function(){var t=this;if("none"===p(this.element).css("display"))throw new Error("Please use show on visible elements");var e=p.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){p(this.element).trigger(e);var n=m.findShadowRoot(this.element),i=p.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(e.isDefaultPrevented()||!i)return;var o=this.getTipElement(),r=m.getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&p(o).addClass(Un);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,a=this._getAttachment(s);this.addAttachmentClass(a);var l=this._getContainer();p(o).data(this.constructor.DATA_KEY,this),p.contains(this.element.ownerDocument.documentElement,this.tip)||p(o).appendTo(l),p(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new St(this.element,o,this._getPopperConfig(a)),p(o).addClass(Bn),"ontouchstart"in document.documentElement&&p(document.body).children().on("mouseover",null,p.noop);var c=function(){t.config.animation&&t._fixTransition();var e=t._hoverState;t._hoverState=null,p(t.element).trigger(t.constructor.Event.SHOWN),e===Mn&&t._leave(null,t)};if(p(this.tip).hasClass(Un)){var h=m.getTransitionDurationFromElement(this.tip);p(this.tip).one(m.TRANSITION_END,c).emulateTransitionEnd(h)}else c()}},e.hide=function(e){function t(){n._hoverState!==Fn&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),p(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),e&&e()}var n=this,i=this.getTipElement(),o=p.Event(this.constructor.Event.HIDE);if(p(this.element).trigger(o),!o.isDefaultPrevented()){if(p(i).removeClass(Bn),"ontouchstart"in document.documentElement&&p(document.body).children().off("mouseover",null,p.noop),this._activeTrigger[Yn]=!1,this._activeTrigger[Vn]=!1,this._activeTrigger[Qn]=!1,p(this.tip).hasClass(Un)){var r=m.getTransitionDurationFromElement(i);p(i).one(m.TRANSITION_END,t).emulateTransitionEnd(r)}else t();this._hoverState=""}},e.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},e.isWithContent=function(){return Boolean(this.getTitle())},e.addAttachmentClass=function(e){p(this.getTipElement()).addClass(Ln+"-"+e)},e.getTipElement=function(){return this.tip=this.tip||p(this.config.template)[0],this.tip},e.setContent=function(){var e=this.getTipElement();this.setElementContent(p(e.querySelectorAll(qn)),this.getTitle()),p(e).removeClass(Un+" "+Bn)},e.setElementContent=function(e,t){"object"!=typeof t||!t.nodeType&&!t.jquery?this.config.html?(this.config.sanitize&&(t=In(t,this.config.whiteList,this.config.sanitizeFn)),e.html(t)):e.text(t):this.config.html?p(t).parent().is(e)||e.empty().append(t):e.text(p(t).text())},e.getTitle=function(){var e=this.element.getAttribute("data-original-title");return e=e||("function"==typeof this.config.title?this.config.title.call(this.element):this.config.title)},e._getPopperConfig=function(e){var t=this;return l({},{placement:e,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:Kn},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(e){e.originalPlacement!==e.placement&&t._handlePopperPlacementChange(e)},onUpdate:function(e){return t._handlePopperPlacementChange(e)}},{},this.config.popperConfig)},e._getOffset=function(){var t=this,e={};return"function"==typeof this.config.offset?e.fn=function(e){return e.offsets=l({},e.offsets,{},t.config.offset(e.offsets,t.element)||{}),e}:e.offset=this.config.offset,e},e._getContainer=function(){return!1===this.config.container?document.body:m.isElement(this.config.container)?p(this.config.container):p(document).find(this.config.container)},e._getAttachment=function(e){return Hn[e.toUpperCase()]},e._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(e){if("click"===e)p(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(e){return i.toggle(e)});else if(e!==zn){var t=e===Qn?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=e===Qn?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;p(i.element).on(t,i.config.selector,function(e){return i._enter(e)}).on(n,i.config.selector,function(e){return i._leave(e)})}}),this._hideModalHandler=function(){i.element&&i.hide()},p(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},e._fixTitle=function(){var e=typeof this.element.getAttribute("data-original-title");!this.element.getAttribute("title")&&"string"==e||(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},e._enter=function(e,t){var n=this.constructor.DATA_KEY;(t=t||p(e.currentTarget).data(n))||(t=new this.constructor(e.currentTarget,this._getDelegateConfig()),p(e.currentTarget).data(n,t)),e&&(t._activeTrigger["focusin"===e.type?Vn:Qn]=!0),p(t.getTipElement()).hasClass(Bn)||t._hoverState===Fn?t._hoverState=Fn:(clearTimeout(t._timeout),t._hoverState=Fn,t.config.delay&&t.config.delay.show?t._timeout=setTimeout(function(){t._hoverState===Fn&&t.show()},t.config.delay.show):t.show())},e._leave=function(e,t){var n=this.constructor.DATA_KEY;(t=t||p(e.currentTarget).data(n))||(t=new this.constructor(e.currentTarget,this._getDelegateConfig()),p(e.currentTarget).data(n,t)),e&&(t._activeTrigger["focusout"===e.type?Vn:Qn]=!1),t._isWithActiveTrigger()||(clearTimeout(t._timeout),t._hoverState=Mn,t.config.delay&&t.config.delay.hide?t._timeout=setTimeout(function(){t._hoverState===Mn&&t.hide()},t.config.delay.hide):t.hide())},e._isWithActiveTrigger=function(){for(var e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1},e._getConfig=function(e){var t=p(this.element).data();return Object.keys(t).forEach(function(e){-1!==xn.indexOf(e)&&delete t[e]}),"number"==typeof(e=l({},this.constructor.Default,{},t,{},"object"==typeof e&&e?e:{})).delay&&(e.delay={show:e.delay,hide:e.delay}),"number"==typeof e.title&&(e.title=e.title.toString()),"number"==typeof e.content&&(e.content=e.content.toString()),m.typeCheckConfig(An,e,this.constructor.DefaultType),e.sanitize&&(e.template=In(e.template,e.whiteList,e.sanitizeFn)),e},e._getDelegateConfig=function(){var e={};if(this.config)for(var t in this.config)this.constructor.Default[t]!==this.config[t]&&(e[t]=this.config[t]);return e},e._cleanTipClass=function(){var e=p(this.getTipElement()),t=e.attr("class").match(Pn);null!==t&&t.length&&e.removeClass(t.join(""))},e._handlePopperPlacementChange=function(e){var t=e.instance;this.tip=t.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(e.placement))},e._fixTransition=function(){var e=this.getTipElement(),t=this.config.animation;null===e.getAttribute("x-placement")&&(p(e).removeClass(Un),this.config.animation=!1,this.hide(),this.show(),this.config.animation=t)},i._jQueryInterface=function(n){return this.each(function(){var e=p(this).data(On),t="object"==typeof n&&n;if((e||!/dispose|hide/.test(n))&&(e||(e=new i(this,t),p(this).data(On,e)),"string"==typeof n)){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return Rn}},{key:"NAME",get:function(){return An}},{key:"DATA_KEY",get:function(){return On}},{key:"Event",get:function(){return Wn}},{key:"EVENT_KEY",get:function(){return Nn}},{key:"DefaultType",get:function(){return jn}}]),i}();p.fn[An]=Xn._jQueryInterface,p.fn[An].Constructor=Xn,p.fn[An].noConflict=function(){return p.fn[An]=kn,Xn._jQueryInterface};var Gn="popover",$n="bs.popover",Jn="."+$n,Zn=p.fn[Gn],ei="bs-popover",ti=new RegExp("(^|\\s)"+ei+"\\S+","g"),ni=l({},Xn.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),ii=l({},Xn.DefaultType,{content:"(string|element|function)"}),oi="fade",ri="show",si=".popover-header",ai=".popover-body",li={HIDE:"hide"+Jn,HIDDEN:"hidden"+Jn,SHOW:"show"+Jn,SHOWN:"shown"+Jn,INSERTED:"inserted"+Jn,CLICK:"click"+Jn,FOCUSIN:"focusin"+Jn,FOCUSOUT:"focusout"+Jn,MOUSEENTER:"mouseenter"+Jn,MOUSELEAVE:"mouseleave"+Jn},ci=function(e){function i(){return e.apply(this,arguments)||this}!function(e,t){e.prototype=Object.create(t.prototype),(e.prototype.constructor=e).__proto__=t}(i,e);var t=i.prototype;return t.isWithContent=function(){return this.getTitle()||this._getContent()},t.addAttachmentClass=function(e){p(this.getTipElement()).addClass(ei+"-"+e)},t.getTipElement=function(){return this.tip=this.tip||p(this.config.template)[0],this.tip},t.setContent=function(){var e=p(this.getTipElement());this.setElementContent(e.find(si),this.getTitle());var t=this._getContent();"function"==typeof t&&(t=t.call(this.element)),this.setElementContent(e.find(ai),t),e.removeClass(oi+" "+ri)},t._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},t._cleanTipClass=function(){var e=p(this.getTipElement()),t=e.attr("class").match(ti);null!==t&&0<t.length&&e.removeClass(t.join(""))},i._jQueryInterface=function(n){return this.each(function(){var e=p(this).data($n),t="object"==typeof n?n:null;if((e||!/dispose|hide/.test(n))&&(e||(e=new i(this,t),p(this).data($n,e)),"string"==typeof n)){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return ni}},{key:"NAME",get:function(){return Gn}},{key:"DATA_KEY",get:function(){return $n}},{key:"Event",get:function(){return li}},{key:"EVENT_KEY",get:function(){return Jn}},{key:"DefaultType",get:function(){return ii}}]),i}(Xn);p.fn[Gn]=ci._jQueryInterface,p.fn[Gn].Constructor=ci,p.fn[Gn].noConflict=function(){return p.fn[Gn]=Zn,ci._jQueryInterface};var hi="scrollspy",ui="bs.scrollspy",fi="."+ui,di=p.fn[hi],pi={offset:10,method:"auto",target:""},mi={offset:"number",method:"string",target:"(string|element)"},gi={ACTIVATE:"activate"+fi,SCROLL:"scroll"+fi,LOAD_DATA_API:"load"+fi+".data-api"},_i="dropdown-item",vi="active",yi='[data-spy="scroll"]',Ei=".nav, .list-group",bi=".nav-link",wi=".nav-item",Ti=".list-group-item",Ci=".dropdown",Si=".dropdown-item",Di=".dropdown-toggle",Ii="offset",Ai="position",Oi=function(){function n(e,t){var n=this;this._element=e,this._scrollElement="BODY"===e.tagName?window:e,this._config=this._getConfig(t),this._selector=this._config.target+" "+bi+","+this._config.target+" "+Ti+","+this._config.target+" "+Si,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,p(this._scrollElement).on(gi.SCROLL,function(e){return n._process(e)}),this.refresh(),this._process()}var e=n.prototype;return e.refresh=function(){var t=this,e=this._scrollElement===this._scrollElement.window?Ii:Ai,o="auto"===this._config.method?e:this._config.method,r=o===Ai?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(e){var t,n=m.getSelectorFromElement(e);if(n&&(t=document.querySelector(n)),t){var i=t.getBoundingClientRect();if(i.width||i.height)return[p(t)[o]().top+r,n]}return null}).filter(function(e){return e}).sort(function(e,t){return e[0]-t[0]}).forEach(function(e){t._offsets.push(e[0]),t._targets.push(e[1])})},e.dispose=function(){p.removeData(this._element,ui),p(this._scrollElement).off(fi),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},e._getConfig=function(e){if("string"!=typeof(e=l({},pi,{},"object"==typeof e&&e?e:{})).target){var t=p(e.target).attr("id");t||(t=m.getUID(hi),p(e.target).attr("id",t)),e.target="#"+t}return m.typeCheckConfig(hi,e,mi),e},e._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},e._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},e._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},e._process=function(){var e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),n=this._config.offset+t-this._getOffsetHeight();if(this._scrollHeight!==t&&this.refresh(),n<=e){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&e<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&e>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||e<this._offsets[o+1])&&this._activate(this._targets[o])}}},e._activate=function(t){this._activeTarget=t,this._clear();var e=this._selector.split(",").map(function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'}),n=p([].slice.call(document.querySelectorAll(e.join(","))));n.hasClass(_i)?(n.closest(Ci).find(Di).addClass(vi),n.addClass(vi)):(n.addClass(vi),n.parents(Ei).prev(bi+", "+Ti).addClass(vi),n.parents(Ei).prev(wi).children(bi).addClass(vi)),p(this._scrollElement).trigger(gi.ACTIVATE,{relatedTarget:t})},e._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(e){return e.classList.contains(vi)}).forEach(function(e){return e.classList.remove(vi)})},n._jQueryInterface=function(t){return this.each(function(){var e=p(this).data(ui);if(e||(e=new n(this,"object"==typeof t&&t),p(this).data(ui,e)),"string"==typeof t){if("undefined"==typeof e[t])throw new TypeError('No method named "'+t+'"');e[t]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return pi}}]),n}();p(window).on(gi.LOAD_DATA_API,function(){for(var e=[].slice.call(document.querySelectorAll(yi)),t=e.length;t--;){var n=p(e[t]);Oi._jQueryInterface.call(n,n.data())}}),p.fn[hi]=Oi._jQueryInterface,p.fn[hi].Constructor=Oi,p.fn[hi].noConflict=function(){return p.fn[hi]=di,Oi._jQueryInterface};var Ni="bs.tab",ki="."+Ni,Li=p.fn.tab,Pi={HIDE:"hide"+ki,HIDDEN:"hidden"+ki,SHOW:"show"+ki,SHOWN:"shown"+ki,CLICK_DATA_API:"click"+ki+".data-api"},xi="dropdown-menu",ji="active",Hi="disabled",Ri="fade",Fi="show",Mi=".dropdown",Wi=".nav, .list-group",Ui=".active",Bi="> li > .active",qi='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Ki=".dropdown-toggle",Qi="> .dropdown-menu .active",Vi=function(){function i(e){this._element=e}var e=i.prototype;return e.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&p(this._element).hasClass(ji)||p(this._element).hasClass(Hi))){var e,i,t=p(this._element).closest(Wi)[0],o=m.getSelectorFromElement(this._element);if(t){var r="UL"===t.nodeName||"OL"===t.nodeName?Bi:Ui;i=(i=p.makeArray(p(t).find(r)))[i.length-1]}var s=p.Event(Pi.HIDE,{relatedTarget:this._element}),a=p.Event(Pi.SHOW,{relatedTarget:i});if(i&&p(i).trigger(s),p(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){o&&(e=document.querySelector(o)),this._activate(this._element,t);var l=function(){var e=p.Event(Pi.HIDDEN,{relatedTarget:n._element}),t=p.Event(Pi.SHOWN,{relatedTarget:i});p(i).trigger(e),p(n._element).trigger(t)};e?this._activate(e,e.parentNode,l):l()}}},e.dispose=function(){p.removeData(this._element,Ni),this._element=null},e._activate=function(e,t,n){function i(){return o._transitionComplete(e,r,n)}var o=this,r=(!t||"UL"!==t.nodeName&&"OL"!==t.nodeName?p(t).children(Ui):p(t).find(Bi))[0],s=n&&r&&p(r).hasClass(Ri);if(r&&s){var a=m.getTransitionDurationFromElement(r);p(r).removeClass(Fi).one(m.TRANSITION_END,i).emulateTransitionEnd(a)}else i()},e._transitionComplete=function(e,t,n){if(t){p(t).removeClass(ji);var i=p(t.parentNode).find(Qi)[0];i&&p(i).removeClass(ji),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!1)}if(p(e).addClass(ji),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),m.reflow(e),e.classList.contains(Ri)&&e.classList.add(Fi),e.parentNode&&p(e.parentNode).hasClass(xi)){var o=p(e).closest(Mi)[0];if(o){var r=[].slice.call(o.querySelectorAll(Ki));p(r).addClass(ji)}e.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var e=p(this),t=e.data(Ni);if(t||(t=new i(this),e.data(Ni,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),i}();p(document).on(Pi.CLICK_DATA_API,qi,function(e){e.preventDefault(),Vi._jQueryInterface.call(p(this),"show")}),p.fn.tab=Vi._jQueryInterface,p.fn.tab.Constructor=Vi,p.fn.tab.noConflict=function(){return p.fn.tab=Li,Vi._jQueryInterface};var Yi="toast",zi="bs.toast",Xi="."+zi,Gi=p.fn[Yi],$i={CLICK_DISMISS:"click.dismiss"+Xi,HIDE:"hide"+Xi,HIDDEN:"hidden"+Xi,SHOW:"show"+Xi,SHOWN:"shown"+Xi},Ji="fade",Zi="hide",eo="show",to="showing",no={animation:"boolean",autohide:"boolean",delay:"number"},io={animation:!0,autohide:!0,delay:500},oo='[data-dismiss="toast"]',ro=function(){function i(e,t){this._element=e,this._config=this._getConfig(t),this._timeout=null,this._setListeners()}var e=i.prototype;return e.show=function(){var e=this,t=p.Event($i.SHOW);if(p(this._element).trigger(t),!t.isDefaultPrevented()){this._config.animation&&this._element.classList.add(Ji);var n=function(){e._element.classList.remove(to),e._element.classList.add(eo),p(e._element).trigger($i.SHOWN),e._config.autohide&&(e._timeout=setTimeout(function(){e.hide()},e._config.delay))};if(this._element.classList.remove(Zi),m.reflow(this._element),this._element.classList.add(to),this._config.animation){var i=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,n).emulateTransitionEnd(i)}else n()}},e.hide=function(){if(this._element.classList.contains(eo)){var e=p.Event($i.HIDE);p(this._element).trigger(e),e.isDefaultPrevented()||this._close()}},e.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(eo)&&this._element.classList.remove(eo),p(this._element).off($i.CLICK_DISMISS),p.removeData(this._element,zi),this._element=null,this._config=null},e._getConfig=function(e){return e=l({},io,{},p(this._element).data(),{},"object"==typeof e&&e?e:{}),m.typeCheckConfig(Yi,e,this.constructor.DefaultType),e},e._setListeners=function(){var e=this;p(this._element).on($i.CLICK_DISMISS,oo,function(){return e.hide()})},e._close=function(){function e(){t._element.classList.add(Zi),p(t._element).trigger($i.HIDDEN)}var t=this;if(this._element.classList.remove(eo),this._config.animation){var n=m.getTransitionDurationFromElement(this._element);p(this._element).one(m.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},i._jQueryInterface=function(n){return this.each(function(){var e=p(this),t=e.data(zi);if(t||(t=new i(this,"object"==typeof n&&n),e.data(zi,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](this)}})},s(i,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"DefaultType",get:function(){return no}},{key:"Default",get:function(){return io}}]),i}();p.fn[Yi]=ro._jQueryInterface,p.fn[Yi].Constructor=ro,p.fn[Yi].noConflict=function(){return p.fn[Yi]=Gi,ro._jQueryInterface},e.Alert=_,e.Button=x,e.Carousel=he,e.Collapse=De,e.Dropdown=en,e.Modal=wn,e.Popover=ci,e.Scrollspy=Oi,e.Tab=Vi,e.Toast=ro,e.Tooltip=Xn,e.Util=m,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.bundle.min.js.map

/*! jQuery Validation Plugin - v1.19.0 - 11/28/2018 https://jqueryvalidation.org/ Copyright (c) 2018 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.submitButton=b.currentTarget,a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.submitButton&&(c.settings.submitHandler||c.formSubmitted)&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),!(c.settings.submitHandler&&!c.settings.debug)||(e=c.settings.submitHandler.call(c,c.currentForm,b),d&&d.remove(),void 0!==e&&e)}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0],k="undefined"!=typeof this.attr("contenteditable")&&"false"!==this.attr("contenteditable");if(null!=j&&(!j.form&&k&&(j.form=this.closest("form")[0],j.name=this.attr("name")),null!=j.form)){if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(a,b){i[b]=f[b],delete f[b]}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g)),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}}),a.extend(a.expr.pseudos||a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){var c=a(b).val();return null!==c&&!!a.trim(""+c)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||a.inArray(c.keyCode,d)!==-1||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");if(!this.form&&c&&(this.form=a(this).closest("form")[0],this.name=a(this).attr("name")),d===this.form){var e=a.data(this.form,"validator"),f="on"+b.type.replace(/^validate/,""),g=e.settings;g[f]&&!a(this).is(g.ignore)&&g[f].call(e,this,b)}}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.currentForm,e=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){e[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=g.check(e)&&h))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)void 0!==a[b]&&null!==a[b]&&a[b]!==!1&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name"),e="undefined"!=typeof a(this).attr("contenteditable")&&"false"!==a(this).attr("contenteditable");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),e&&(this.form=a(this).closest("form")[0],this.name=d),this.form===b.currentForm&&(!(d in c||!b.objectLength(a(this).rules()))&&(c[d]=!0,!0))})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type,g="undefined"!=typeof e.attr("contenteditable")&&"false"!==e.attr("contenteditable");return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=g?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f,g=a(b).rules(),h=a.map(g,function(a,b){return b}).length,i=!1,j=this.elementValue(b);"function"==typeof g.normalizer?f=g.normalizer:"function"==typeof this.settings.normalizer&&(f=this.settings.normalizer),f&&(j=f.call(b,j),delete g.normalizer);for(d in g){e={method:d,parameters:g[d]};try{if(c=a.validator.methods[d].call(this,j,b,e.parameters),"dependency-mismatch"===c&&1===h){i=!0;continue}if(i=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(k){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",k),k instanceof TypeError&&(k.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),k}}if(!i)return this.objectLength(g)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){"string"==typeof c&&(c={method:c});var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement.call(this,d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return!this.dependTypes[typeof a]||this.dependTypes[typeof a](a,b)},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.submitButton&&a("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return c="string"==typeof c&&c||"remote",a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),""===d&&(d=!0),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0===e.param||e.param:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(d,e){b[d]=a.isFunction(e)&&"normalizer"!==d?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:void 0!==b&&null!==b&&b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)},date:function(){var a=!1;return function(b,c){return a||(a=!0,this.settings.debug&&window.console&&console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")),this.optional(c)||!/Invalid|NaN/.test(new Date(b).toString())}}(),dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e<=d},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e,f=a(c).attr("type"),g="Step attribute on input type "+f+" is not supported.",h=["text","number","range"],i=new RegExp("\\b"+f+"\\b"),j=f&&!i.test(h.join()),k=function(a){var b=(""+a).match(/(?:\.(\d+))?$/);return b&&b[1]?b[1].length:0},l=function(a){return Math.round(a*Math.pow(10,e))},m=!0;if(j)throw new Error(g);return e=k(d),(k(b)>e||l(b)%l(d)!==0)&&(m=!1),this.optional(c)||m},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var b,c={};return a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)}),a});

/* Autoheight textarea*/
!function(a){a.fn.autogrow=function(t){return this.filter("textarea").each(function(){function e(e){var t=n.value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n$/,"<br/>&#xa0;").replace(/\n/g,"<br/>").replace(/ {2,}/g,function(e){return function(e,t){for(var a=0,n="";a<t;a++)n+=e;return n}("&#xa0;",e.length-1)+" "});e&&e.data&&"keydown"===e.data.event&&13===e.keyCode&&(t+="<br />"),c.css("width",o.width()),c.html(t+(0===l?"...":""));var a=Math.max(c.height()+l,r);null!=i.preGrowCallback&&(a=i.preGrowCallback(o,c,a,r)),o.height(a),null!=i.postGrowCallback&&i.postGrowCallback(o)}var n=this,o=a(n),r=o.height(),l=o.hasClass("autogrow-short")?0:parseInt(o.css("lineHeight"))||0,i=a.extend({preGrowCallback:null,postGrowCallback:null},t),c=a("<div></div>").css({position:"absolute",top:-1e4,left:-1e4,width:o.width(),fontSize:o.css("fontSize"),fontFamily:o.css("fontFamily"),fontWeight:o.css("fontWeight"),lineHeight:o.css("lineHeight"),resize:"none","word-wrap":"break-word"}).appendTo(document.body);o.change(e).keyup(e).keydown({event:"keydown"},e),a(window).resize(e),e()})}}(jQuery);

/* Is visible */
!function(t){var i=t(window);t.fn.visible=function(t,e,o){if(!(this.length<1)){var r=this.length>1?this.eq(0):this,n=r.get(0),f=i.width(),h=i.height(),o=o?o:"both",l=e===!0?n.offsetWidth*n.offsetHeight:!0;if("function"==typeof n.getBoundingClientRect){var g=n.getBoundingClientRect(),u=g.top>=0&&g.top<h,s=g.bottom>0&&g.bottom<=h,c=g.left>=0&&g.left<f,a=g.right>0&&g.right<=f,v=t?u||s:u&&s,b=t?c||a:c&&a;if("both"===o)return l&&v&&b;if("vertical"===o)return l&&v;if("horizontal"===o)return l&&b}else{var d=i.scrollTop(),p=d+h,w=i.scrollLeft(),m=w+f,y=r.offset(),z=y.top,B=z+r.height(),C=y.left,R=C+r.width(),j=t===!0?B:z,q=t===!0?z:B,H=t===!0?R:C,L=t===!0?C:R;if("both"===o)return!!l&&p>=q&&j>=d&&m>=L&&H>=w;if("vertical"===o)return!!l&&p>=q&&j>=d;if("horizontal"===o)return!!l&&m>=L&&H>=w}}}}(jQuery);

/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",slideTransition:"",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g>0;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i,g-=1;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.$stage.children(".center").removeClass("center"),this.settings.center&&this.$stage.children().eq(this.current()).addClass("center")}}],e.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass),this.$stage.length||(this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+">",{class:this.settings.stageClass}).wrap(a("<div/>",{class:this.settings.stageOuterClass})),this.$element.append(this.$stage.parent()))},e.prototype.initializeItems=function(){var b=this.$element.find(".owl-item");if(b.length)return this._items=b.get().map(function(b){return a(b)}),this._mergers=this._items.map(function(){return 1}),void this.refresh();this.replace(this.$element.children().not(this.$stage.parent())),this.isVisible()?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)},e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var a,b,c;a=this.$element.find("img"),b=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,c=this.$element.children(b).width(),a.length&&c<=0&&this.preloadAutoWidthImages(a)}this.initializeStage(),this.initializeItems(),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.isVisible=function(){return!this.settings.checkVisibility||this.$element.is(":visible")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.isVisible()&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var e=-1,f=30,g=this.width(),h=this.coordinates();return this.settings.freeDrag||a.each(h,a.proxy(function(a,i){return"left"===c&&b>i-f&&b<i+f?e=a:"right"===c&&b>i-g-f&&b<i-g+f?e=a+1:this.op(b,"<",i)&&this.op(b,">",h[a+1]!==d?h[a+1]:i-g)&&(e="left"===c?a+1:a),-1===e},this)),this.settings.loop||(this.op(b,">",h[this.minimum()])?e=b=this.minimum():this.op(b,"<",h[this.maximum()])&&(e=b=this.maximum())),e},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"+(this.settings.slideTransition?" "+this.settings.slideTransition:"")}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){(a=this.normalize(a))!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){if(b=this._items.length)for(c=this._items[--b].width(),d=this.$element.width();b--&&!((c+=this._items[b].width()+this.settings.margin)>d););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2==0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=-1*f*g),a=c+e,(d=((a-h)%g+g)%g+h)!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.isVisible()&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){(a=this.normalize(a,!0))!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),!1!==this.settings.responsive&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.remove(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&-1!==a.namespace.indexOf("owl")?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.isVisible(),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.isVisible()!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type)){var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&-1*e||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);for(c.lazyLoadEager>0&&(e+=c.lazyLoadEager,c.loop&&(g-=c.lazyLoadEager,e++));f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1,lazyLoadEager:0},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src")||f.attr("data-srcset");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):f.is("source")?f.one("load.owl.lazy",a.proxy(function(){this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("srcset",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(c){this._core=c,this._previousHeight=null,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"===a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._intervalId=null;var d=this;a(b).on("load",function(){d._core.settings.autoHeight&&d.update()}),a(b).resize(function(){d._core.settings.autoHeight&&(null!=d._intervalId&&clearTimeout(d._intervalId),d._intervalId=setTimeout(function(){d.update()},250))})};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.settings.lazyLoad,e=this._core.$stage.children().toArray().slice(b,c),f=[],g=0;a.each(e,function(b,c){f.push(a(c).height())}),g=Math.max.apply(null,f),g<=1&&d&&this._previousHeight&&(g=this._previousHeight),this._previousHeight=g,this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?"width:"+c.width+"px;height:"+c.height+"px;":"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(c){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?a("<div/>",{class:"owl-video-tn "+j,srcType:c}):a("<div/>",{class:"owl-video-tn",style:"opacity:1;background-image:url("+c+")"}),b.after(d),b.after(e)};if(b.wrap(a("<div/>",{class:"owl-video-wrapper",style:g})),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),c=a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'),c.attr("height",h),c.attr("width",g),"youtube"===f.type?c.attr("src","//www.youtube.com/embed/"+f.id+"?autoplay=1&rel=0&v="+f.id):"vimeo"===f.type?c.attr("src","//player.vimeo.com/video/"+f.id+"?autoplay=1"):"vzaar"===f.type&&c.attr("src","//view.vzaar.com/"+f.id+"/player?autoplay=true"),a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,
animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._call=null,this._time=0,this._timeout=0,this._paused=!0,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._paused&&(this._time=0)},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype._next=function(d){this._call=b.setTimeout(a.proxy(this._next,this,d),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read()),this._core.is("interacting")||c.hidden||this._core.next(d||this._core.settings.autoplaySpeed)},e.prototype.read=function(){return(new Date).getTime()-this._time},e.prototype.play=function(c,d){var e;this._core.is("rotating")||this._core.enter("rotating"),c=c||this._core.settings.autoplayTimeout,e=Math.min(this._time%(this._timeout||c),c),this._paused?(this._time=this.read(),this._paused=!1):b.clearTimeout(this._call),this._time+=this.read()%c-e,this._timeout=c,this._call=b.setTimeout(a.proxy(this._next,this,d),c-e)},e.prototype.stop=function(){this._core.is("rotating")&&(this._time=0,this._paused=!0,b.clearTimeout(this._call),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&!this._paused&&(this._time=this.read(),this._paused=!0,b.clearTimeout(this._call))},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","button",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d,e;e=this._core.settings;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)"$relative"===b&&e.navContainer?this._controls[b].html(""):this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);

/*ROULET*/
(function($){var Roulette=function(options){var defaultSettings={maxcrmCount:null,speed:10,stopImageNumber:null,rollCount:3,duration:3,stopCallback:function(){},startCallback:function(){},slowDownCallback:function(){}};var defaultProperty={crmCount:0,$rouletteTarget:null,imageCount:null,$images:null,originalStopImageNumber:null,totalHeight:null,topPosition:0,maxDistance:null,slowDownStartDistance:null,isRunUp:true,isSlowdown:false,isStop:false,distance:0,runUpDistance:null,slowdownTimer:null,isIE:navigator.userAgent.toLowerCase().indexOf("msie")>-1};var p=$.extend({},defaultSettings,options,defaultProperty);var reset=function(){p.maxDistance=defaultProperty.maxDistance;p.slowDownStartDistance=defaultProperty.slowDownStartDistance;p.distance=defaultProperty.distance;p.isRunUp=defaultProperty.isRunUp;p.isSlowdown=defaultProperty.isSlowdown;p.isStop=defaultProperty.isStop;p.topPosition=defaultProperty.topPosition;clearTimeout(p.slowDownTimer)};var slowDownSetup=function(){if(p.isSlowdown){return}p.slowDownCallback();p.isSlowdown=true;p.slowDownStartDistance=p.distance;p.maxDistance=p.distance+2*p.totalHeight;p.maxDistance+=p.imageHeight-p.topPosition%p.imageHeight;if(p.stopImageNumber!=null){p.maxDistance+=(p.totalHeight-p.maxDistance%p.totalHeight+p.stopImageNumber*p.imageHeight)%p.totalHeight}};var roll=function(){var speed_=p.speed;if(p.isRunUp){if(p.distance<=p.runUpDistance){var rate_=~~(p.distance/p.runUpDistance*p.speed);speed_=rate_+1}else{p.isRunUp=false}}else if(p.isSlowdown){var rate_=~~((p.maxDistance-p.distance)/(p.maxDistance-p.slowDownStartDistance)*p.speed);speed_=rate_+1}if(p.maxDistance&&p.distance>=p.maxDistance){p.isStop=true;reset();p.stopCallback(p.$rouletteTarget.find("img").eq(p.stopImageNumber));return}p.distance+=speed_;p.topPosition+=speed_;if(p.topPosition>=p.totalHeight){p.topPosition=p.topPosition-p.totalHeight}if(p.isIE){p.$rouletteTarget.css("top","-"+p.topPosition+"px")}else{p.$rouletteTarget.css("transform","translate(0px, -"+p.topPosition+"px)")}setTimeout(roll,1)};var init=function($roulette){$roulette.css({overflow:"hidden"});defaultProperty.originalStopImageNumber=p.stopImageNumber;if(!p.$images){p.$images=$roulette.find("img").remove();p.imageCount=p.$images.length;p.$images.eq(0).bind("load",function(){p.imageHeight=$(this).height();$roulette.css({height:p.imageHeight+"px"});p.totalHeight=p.imageCount*p.imageHeight;p.runUpDistance=2*p.imageHeight}).each(function(){if(this.complete||this.complete===undefined){var src=this.src;this.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";this.src=src}})}$roulette.find("div").remove();p.$images.css({discrm:"block"});p.$rouletteTarget=$("<div>").css({position:"relative",top:"0"}).attr("class","roulette-inner");$roulette.append(p.$rouletteTarget);p.$rouletteTarget.append(p.$images);p.$rouletteTarget.append(p.$images.eq(0).clone());$roulette.show()};var start=function(){p.crmCount++;if(p.maxcrmCount&&p.crmCount>p.maxcrmCount){return}p.stopImageNumber=$.isNumeric(defaultProperty.originalStopImageNumber)&&Number(defaultProperty.originalStopImageNumber)>=0?Number(defaultProperty.originalStopImageNumber):Math.floor(Math.random()*p.imageCount);p.startCallback();roll();p.slowDownTimer=setTimeout(function(){slowDownSetup()},p.duration*1e3)};var stop=function(option){if(!p.isSlowdown){if(option){var stopImageNumber=Number(option.stopImageNumber);if(0<=stopImageNumber&&stopImageNumber<=p.imageCount-1){p.stopImageNumber=option.stopImageNumber}}slowDownSetup()}};var option=function(options){p=$.extend(p,options);p.speed=Number(p.speed);p.duration=Number(p.duration);p.duration=p.duration>1?p.duration-1:1;defaultProperty.originalStopImageNumber=options.stopImageNumber};var ret={start:start,stop:stop,init:init,option:option};return ret};var pluginName="roulette";$.fn[pluginName]=function(method,options){return this.each(function(){var self=$(this);var roulette=self.data("plugin_"+pluginName);if(roulette){if(roulette[method]){roulette[method](options)}else{console&&console.error("Method "+method+" does not exist on jQuery.roulette")}}else{roulette=new Roulette(method);roulette.init(self,method);$(this).data("plugin_"+pluginName,roulette)}})}})(jQuery);

//mask
var $jscomp={scope:{},findInternal:function(a,b,c){a instanceof String&&(a=String(a));for(var d=a.length,e=0;e<d;e++){var f=a[e];if(b.call(c,f,e,a))return{i:e,v:f}}return{i:-1,v:void 0}}};$jscomp.defineProperty="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(c.get||c.set)throw new TypeError("ES3 does not support getters and setters.");a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a},$jscomp.global=$jscomp.getGlobal(this),$jscomp.polyfill=function(a,b,c,d){if(b){for(c=$jscomp.global,a=a.split("."),d=0;d<a.length-1;d++){var e=a[d];e in c||(c[e]={}),c=c[e]}a=a[a.length-1],d=c[a],b=b(d),b!=d&&null!=b&&$jscomp.defineProperty(c,a,{configurable:!0,writable:!0,value:b})}},$jscomp.polyfill("Array.prototype.find",function(a){return a?a:function(a,b){return $jscomp.findInternal(this,a,b).v}},"es6-impl","es3"),function(a,b,c){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(b||c)}(function(a){var b=function(b,c,d){var e={invalid:[],getCaret:function(){try{var a,c=0,d=b.get(0),f=document.selection,g=d.selectionStart;return f&&-1===navigator.appVersion.indexOf("MSIE 10")?(a=f.createRange(),a.moveStart("character",-e.val().length),c=a.text.length):(g||"0"===g)&&(c=g),c}catch(a){}},setCaret:function(a){try{if(b.is(":focus")){var c,d=b.get(0);d.setSelectionRange?d.setSelectionRange(a,a):(c=d.createTextRange(),c.collapse(!0),c.moveEnd("character",a),c.moveStart("character",a),c.select())}}catch(a){}},events:function(){b.on("keydown.mask",function(a){b.data("mask-keycode",a.keyCode||a.which),b.data("mask-previus-value",b.val())}).on(a.jMaskGlobals.useInput?"input.mask":"keyup.mask",e.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){b.keydown().keyup()},100)}).on("change.mask",function(){b.data("changed",!0)}).on("blur.mask",function(){g===e.val()||b.data("changed")||b.trigger("change"),b.data("changed",!1)}).on("blur.mask",function(){g=e.val()}).on("focus.mask",function(b){!0===d.selectOnFocus&&a(b.target).select()}).on("focusout.mask",function(){d.clearIfNotMatch&&!h.test(e.val())&&e.val("")})},getRegexMask:function(){for(var b,d,e,g,a=[],h=0;h<c.length;h++)(b=f.translation[c.charAt(h)])?(d=b.pattern.toString().replace(/.{1}$|^.{1}/g,""),e=b.optional,(b=b.recursive)?(a.push(c.charAt(h)),g={digit:c.charAt(h),pattern:d}):a.push(e||b?d+"?":d)):a.push(c.charAt(h).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));return a=a.join(""),g&&(a=a.replace(new RegExp("("+g.digit+"(.*"+g.digit+")?)"),"($1)?").replace(new RegExp(g.digit,"g"),g.pattern)),new RegExp(a)},destroyEvents:function(){b.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))},val:function(a){var c=b.is("input")?"val":"text";return 0<arguments.length?(b[c]()!==a&&b[c](a),c=b):c=b[c](),c},calculateCaretPosition:function(a,c){var d=c.length,e=b.data("mask-previus-value")||"",f=e.length;return 8===b.data("mask-keycode")&&e!==c?a-=c.slice(0,a).length-e.slice(0,a).length:e!==c&&(a=a>=f?d:a+(c.slice(0,a).length-e.slice(0,a).length)),a},behaviour:function(c){c=c||window.event,e.invalid=[];var d=b.data("mask-keycode");if(-1===a.inArray(d,f.byPassKeys)){var d=e.getMasked(),g=e.getCaret();return setTimeout(function(a,b){e.setCaret(e.calculateCaretPosition(a,b))},10,g,d),e.val(d),e.setCaret(g),e.callbacks(c)}},getMasked:function(a,b){var p,q,g=[],h=void 0===b?e.val():b+"",i=0,j=c.length,k=0,l=h.length,m=1,n="push",o=-1;d.reverse?(n="unshift",m=-1,p=0,i=j-1,k=l-1,q=function(){return-1<i&&-1<k}):(p=j-1,q=function(){return i<j&&k<l});for(var r;q();){var s=c.charAt(i),t=h.charAt(k),u=f.translation[s];u?(t.match(u.pattern)?(g[n](t),u.recursive&&(-1===o?o=i:i===p&&(i=o-m),p===o&&(i-=m)),i+=m):t===r?r=void 0:u.optional?(i+=m,k-=m):u.fallback?(g[n](u.fallback),i+=m,k-=m):e.invalid.push({p:k,v:t,e:u.pattern}),k+=m):(a||g[n](s),t===s?k+=m:r=s,i+=m)}return h=c.charAt(p),j!==l+1||f.translation[h]||g.push(h),g.join("")},callbacks:function(a){var f=e.val(),h=f!==g,i=[f,a,b,d],j=function(a,b,c){"function"==typeof d[a]&&b&&d[a].apply(this,c)};j("onChange",!0===h,i),j("onKeyPress",!0===h,i),j("onComplete",f.length===c.length,i),j("onInvalid",0<e.invalid.length,[f,a,b,e.invalid,d])}};b=a(b);var h,f=this,g=e.val();c="function"==typeof c?c(e.val(),void 0,b,d):c,f.mask=c,f.options=d,f.remove=function(){var a=e.getCaret();return e.destroyEvents(),e.val(f.getCleanVal()),e.setCaret(a),b},f.getCleanVal=function(){return e.getMasked(!0)},f.getMaskedVal=function(a){return e.getMasked(!1,a)},f.init=function(g){if(g=g||!1,d=d||{},f.clearIfNotMatch=a.jMaskGlobals.clearIfNotMatch,f.byPassKeys=a.jMaskGlobals.byPassKeys,f.translation=a.extend({},a.jMaskGlobals.translation,d.translation),f=a.extend(!0,{},f,d),h=e.getRegexMask(),g)e.events(),e.val(e.getMasked());else{d.placeholder&&b.attr("placeholder",d.placeholder),b.data("mask")&&b.attr("autocomplete","off"),g=0;for(var i=!0;g<c.length;g++){var j=f.translation[c.charAt(g)];if(j&&j.recursive){i=!1;break}}i&&b.attr("maxlength",c.length),e.destroyEvents(),e.events(),g=e.getCaret(),e.val(e.getMasked()),e.setCaret(g)}},f.init(!b.is("input"))};a.maskWatchers={};var c=function(){var c=a(this),e={},f=c.attr("data-mask");if(c.attr("data-mask-reverse")&&(e.reverse=!0),c.attr("data-mask-clearifnotmatch")&&(e.clearIfNotMatch=!0),"true"===c.attr("data-mask-selectonfocus")&&(e.selectOnFocus=!0),d(c,f,e))return c.data("mask",new b(this,f,e))},d=function(b,c,d){d=d||{};var e=a(b).data("mask"),f=JSON.stringify;b=a(b).val()||a(b).text();try{return"function"==typeof c&&(c=c(b)),"object"!=typeof e||f(e.options)!==f(d)||e.mask!==c}catch(a){}},e=function(a){var c,b=document.createElement("div");return a="on"+a,c=a in b,c||(b.setAttribute(a,"return;"),c="function"==typeof b[a]),c};a.fn.mask=function(c,e){e=e||{};var f=this.selector,g=a.jMaskGlobals,h=g.watchInterval,g=e.watchInputs||g.watchInputs,i=function(){if(d(this,c,e))return a(this).data("mask",new b(this,c,e))};return a(this).each(i),f&&""!==f&&g&&(clearInterval(a.maskWatchers[f]),a.maskWatchers[f]=setInterval(function(){a(document).find(f).each(i)},h)),this},a.fn.masked=function(a){return this.data("mask").getMaskedVal(a)},a.fn.unmask=function(){return clearInterval(a.maskWatchers[this.selector]),delete a.maskWatchers[this.selector],this.each(function(){var b=a(this).data("mask");b&&b.remove().removeData("mask")})},a.fn.cleanVal=function(){return this.data("mask").getCleanVal()},a.applyDataMask=function(b){b=b||a.jMaskGlobals.maskElements,(b instanceof a?b:a(b)).filter(a.jMaskGlobals.dataMaskAttr).each(c)},e={maskElements:"input,td,span,div",dataMaskAttr:"*[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,useInput:!/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent)&&e("input"),watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}},a.jMaskGlobals=a.jMaskGlobals||{},e=a.jMaskGlobals=a.extend(!0,{},e,a.jMaskGlobals),e.dataMask&&a.applyDataMask(),setInterval(function(){a.jMaskGlobals.watchDataMask&&a.applyDataMask()},e.watchInterval)},window.jQuery,window.Zepto);
!function(a){void 0==a.fn.inputmask&&(a.inputmask={defaults:{placeholder:"_",optionalmarker:{start:"[",end:"]"},escapeChar:"\\",mask:null,oncomplete:a.noop,onincomplete:a.noop,oncleared:a.noop,repeat:0,greedy:!0,autoUnmask:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,aliases:{},onKeyUp:a.noop,onKeyDown:a.noop,showMaskOnHover:!0,numericInput:!1,radixPoint:".",definitions:{9:{validator:"[0-9]",cardinality:1},a:{validator:"[A-Za-zА-яЁё]",cardinality:1},"*":{validator:"[A-Za-zА-яЁё0-9]",cardinality:1}},keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91},ignorables:[8,9,13,16,17,18,20,27,33,34,35,36,37,38,39,40,46,91,93,108]},val:a.fn.val},a.fn.inputmask=function(b,c){function m(a){var b=document.createElement("input"),a="on"+a,c=a in b;return c||(b.setAttribute(a,"return;"),c="function"==typeof b[a]),b=null,c}function n(b){var e=d.aliases[b];return!!e&&(e.alias&&n(e.alias),a.extend(!0,d,e),a.extend(!0,d,c),!0)}function o(){var b=!1,c=0;1==d.mask.length&&0==d.greedy&&(d.placeholder="");for(var e=a.map(d.mask.split(""),function(a,e){var f=[];if(a==d.escapeChar)b=!0;else if(a!=d.optionalmarker.start&&a!=d.optionalmarker.end||b){var g=d.definitions[a];if(g&&!b)for(var h=0;h<g.cardinality;h++)f.push(t(c+h));else f.push(a),b=!1;return c+=f.length,f}}),f=e.slice(),g=1;g<d.repeat&&d.greedy;g++)f=f.concat(e.slice());return f}function p(){var b=!1,c=!1,e=!1;return a.map(d.mask.split(""),function(a,f){var g=[];if(a==d.escapeChar)c=!0;else if(a!=d.optionalmarker.start||c){if(a!=d.optionalmarker.end||c){var h=d.definitions[a];if(h&&!c){for(var i=h.prevalidator,j=i?i.length:0,k=1;k<h.cardinality;k++){var l=j>=k?i[k-1]:[],m=l.validator,n=l.cardinality;g.push({fn:m?"string"==typeof m?new RegExp(m):new function(){this.test=m}:new RegExp("."),cardinality:n?n:1,optionality:b,newBlockMarker:1==b&&e,offset:0,casing:h.casing,def:a}),1==b&&(e=!1)}g.push({fn:h.validator?"string"==typeof h.validator?new RegExp(h.validator):new function(){this.test=h.validator}:new RegExp("."),cardinality:h.cardinality,optionality:b,newBlockMarker:e,offset:0,casing:h.casing,def:a})}else g.push({fn:null,cardinality:0,optionality:b,newBlockMarker:e,offset:0,casing:null,def:a}),c=!1;return e=!1,g}b=!1,e=!0}else b=!0,e=!0})}function q(a,b,c,e){if(a<0||a>=u())return!1;for(var f=s(a),g=b?1:0,h="",i=l[f].cardinality;i>g;i--)h+=y(c,f-(i-1));return b&&(h+=b),null!=l[f].fn&&l[f].fn.test(h,c,a,e,d)}function r(a){var b=s(a),c=l[b];return void 0!=c&&c.fn}function s(a){return a%l.length}function t(a){return d.placeholder.charAt(a%d.placeholder.length)}function u(){var a=k.length;return!d.greedy&&d.repeat>1&&(a+=k.length*(d.repeat-1)),a}function v(a,b){var c=u();if(b>=c)return c;for(var d=b;++d<c&&!r(d););return d}function w(a,b){var c=b;if(c<=0)return 0;for(;--c>0&&!r(c););return c}function x(a,b,c){var d=l[s(b)],e=c;if(void 0!=e)switch(d.casing){case"upper":e=c.toUpperCase();break;case"lower":e=c.toLowerCase()}a[b]=e}function y(a,b,c){return c&&(b=z(a,b)),a[b]}function z(a,b,c){var d;if(c)for(;b<0&&a.length<u();)for(d=k.length-1,b=k.length;void 0!==k[d];)a.unshift(k[d--]);else for(;void 0==a[b]&&a.length<u();)for(d=0;void 0!==k[d];)a.push(k[d++]);return b}function A(a,b,c){a._valueSet(b.join("")),void 0!=c&&(g?setTimeout(function(){I(a,c)},100):I(a,c))}function B(a,b,c){for(var d=b,e=u();d<c&&d<e;d++)x(a,d,y(k.slice(),d))}function C(a,b){var c=s(b);x(a,b,y(k,c))}function D(b,c,e,f){var g=a(b).data("inputmask").isRTL,h=F(b._valueGet(),g).split("");if(g){var i=u(),j=h.reverse();j.length=i;for(var m=0;m<i;m++){var n=s(i-(m+1));null==l[n].fn&&j[m]!=y(k,n)?(j.splice(m,0,y(k,n)),j.length=i):j[m]=j[m]||y(k,n)}h=j.reverse()}B(c,0,c.length),c.length=k.length;for(var w,o=-1,p=-1,i=u(),z=h.length,D=0==z?i:-1,m=0;m<z;m++)for(var E=p+1;E<i;E++){if(r(E)){var G=h[m];(w=q(E,G,c,!e))!==!1?(w!==!0&&(E=w.pos||E,G=w.c||G),x(c,E,G),o=p=E):(C(c,E),G==t(E)&&(p=E,D=E));break}if(C(c,E),o==p&&(o=E),p=E,h[m]==y(c,E))break}if(0==d.greedy)for(var H=F(c.join(""),g).split("");c.length!=H.length;)g?c.shift():c.pop();return e&&A(b,c),g?d.numericInput?a.inArray(d.radixPoint,c)!=-1&&f!==!0?a.inArray(d.radixPoint,c):v(c,i):v(c,D):v(c,o)}function E(a){var b=["/",".","*","+","?","|","(",")","[","]","{","}","\\"];return a.replace(new RegExp("(\\"+b.join("|\\")+")","gim"),"\\$1")}function F(a,b){return b?a.replace(new RegExp("^("+E(k.join(""))+")*"),""):a.replace(new RegExp("("+E(k.join(""))+")*$"),"")}function G(b,c){D(b,c,!1);var d=c.slice();if(a(b).data("inputmask").isRTL)for(var e=0;e<=d.length-1;e++){var f=s(e);if(!l[f].optionality)break;if(t(e)!=c[e]&&r(e))break;d.splice(0,1)}else for(var e=d.length-1;e>=0;e--){var f=s(e);if(!l[f].optionality)break;if(t(e)!=c[e]&&r(e))break;d.pop()}A(b,d)}function H(b,c){var d=b[0];if(!l||c!==!0&&b.hasClass("hasDatepicker"))return d._valueGet();var e=k.slice();return D(d,e),a.map(e,function(a,b){return r(b)&&a!=y(k.slice(),b)?a:null}).join("")}function I(a,b,c){var e=a.jquery&&a.length>0?a[0]:a;if("number"!=typeof b){var h=g?i:null,i=null;if(null==h){if(e.setSelectionRange)b=e.selectionStart,c=e.selectionEnd;else if(document.selection&&document.selection.createRange){var f=document.selection.createRange();b=0-f.duplicate().moveStart("character",-1e5),c=b+f.text.length}h={begin:b,end:c}}return h}if(c="number"==typeof c?c:b,0==d.insertMode&&b==c&&c++,e.setSelectionRange)e.setSelectionRange(b,c);else if(e.createTextRange){var f=e.createTextRange();f.collapse(!0),f.moveEnd("character",c),f.moveStart("character",b),f.select()}e.focus(),g&&c!=e.selectionEnd&&(i={begin:b,end:c})}function J(b){function L(a){for(var b=!0,c=a._valueGet(),d=c.length,e=0;e<d;e++)if(r(e)&&c.charAt(e)==t(e)){b=!1;break}return b}function M(b){var c=a._data(b).events;a.each(c,function(c,d){a(b).bind(c+".inputmask",function(a){if(this.readOnly||this.disabled)return a.stopPropagation(),a.stopImmediatePropagation(),a.preventDefault(),!1});for(var e=d[d.length-1],f=d.length-1;f>0;f--)d[f]=d[f-1];d[0]=e})}function N(b){var c;Object.getOwnPropertyDescriptor&&(c=Object.getOwnPropertyDescriptor(b,"value")),c&&c.get?b._valueGet||(b._valueGet=c.get,b._valueSet=c.set,Object.defineProperty(b,"value",{get:function(){var b=a(this),c=a(this).data("inputmask");return c&&c.autoUnmask?b.inputmask("unmaskedvalue"):this._valueGet()!=c._buffer.join("")?this._valueGet():""},set:function(b){this._valueSet(b),a(this).triggerHandler("setvalue.inputmask")}})):document.__lookupGetter__&&b.__lookupGetter__("value")?b._valueGet||(b._valueGet=b.__lookupGetter__("value"),b._valueSet=b.__lookupSetter__("value"),b.__defineGetter__("value",function(){var b=a(this),c=a(this).data("inputmask");return c&&c.autoUnmask?b.inputmask("unmaskedvalue"):this._valueGet()!=c._buffer.join("")?this._valueGet():""}),b.__defineSetter__("value",function(b){this._valueSet(b),a(this).triggerHandler("setvalue.inputmask")})):(b._valueGet||(b._valueGet=function(){return this.value},b._valueSet=function(a){this.value=a}),1!=a.fn.val.inputmaskpatch&&(a.fn.val=function(){if(0==arguments.length){var b=a(this);if(b.data("inputmask")){if(b.data("inputmask").autoUnmask)return b.inputmask("unmaskedvalue");var c=a.inputmask.val.apply(b);return c!=b.data("inputmask")._buffer.join("")?c:""}return a.inputmask.val.apply(b)}var d=arguments;return this.each(function(){var b=a(this),c=a.inputmask.val.apply(b,d);return b.data("inputmask")&&b.triggerHandler("setvalue.inputmask"),c})},a.extend(a.fn.val,{inputmaskpatch:!0})))}function O(a,b,c){for(;!r(a)&&a-1>=0;)a--;for(var d=a;d<b&&d<u();d++)if(r(d)){C(i,d);var e=v(i,d),f=y(i,e);if(f!=t(e)){if(e<u()&&q(d,f,i,!0)!==!1&&l[s(d)].def==l[s(e)].def)x(i,d,y(i,e)),C(i,e);else if(r(d))break}else if(void 0==c)break}else C(i,d);return void 0!=c&&x(i,H?b:w(i,b),c),i=F(i.join(""),H).split(""),0==i.length&&(i=k.slice()),a}function P(a,b,c,d){for(var e=a;e<=b&&e<u();e++)if(r(e)){var f=y(i,e);if(x(i,e,c),f!=t(e)){var g=v(i,e);if(!(g<u()))break;if(q(g,f,i,!0)!==!1&&l[s(e)].def==l[s(g)].def)c=f;else{if(r(g))break;c=f}}else if(d!==!0)break}else C(i,e);var h=i.length;return i=F(i.join(""),H).split(""),0==i.length&&(i=k.slice()),b-(h-i.length)}function Q(b){m=!1;var c=this,e=b.keyCode,g=I(c);if(d.numericInput){var h=c._valueGet(),l=h.indexOf(d.radixPoint);l!=-1&&(H=g.begin<=l||g.end<=l)}if(e==d.keyCode.BACKSPACE||e==d.keyCode.DELETE||f&&127==e){var o=u();if(0==g.begin&&g.end==o)i=k.slice(),A(c,i),I(c,D(c,i,!1));else if(g.end-g.begin>1||g.end-g.begin==1&&d.insertMode)B(i,g.begin,g.end),A(c,i,H?D(c,i,!1):g.begin);else{var q=g.begin-(e==d.keyCode.DELETE?0:1);q<p&&e==d.keyCode.DELETE&&(q=p),q>=p&&(d.numericInput&&d.greedy&&e==d.keyCode.DELETE&&i[q]==d.radixPoint&&(q=v(i,q),H=!1),H?(q=P(p,q,t(q),!0),q=d.numericInput&&d.greedy&&e==d.keyCode.BACKSPACE&&i[q+1]==d.radixPoint?q+1:v(i,q)):q=O(q,o),A(c,i,q))}return c._valueGet()==k.join("")&&a(c).trigger("cleared"),!1}if(e==d.keyCode.END||e==d.keyCode.PAGE_DOWN)return setTimeout(function(){var a=D(c,i,!1,!0);d.insertMode||a!=u()||b.shiftKey||a--,I(c,b.shiftKey?g.begin:a,a)},0),!1;if(e==d.keyCode.HOME||e==d.keyCode.PAGE_UP)return I(c,0,b.shiftKey?g.begin:0),!1;if(e==d.keyCode.ESCAPE)return c._valueSet(j),I(c,0,D(c,i)),!1;if(e==d.keyCode.INSERT)return d.insertMode=!d.insertMode,I(c,d.insertMode||g.begin!=u()?g.begin:g.begin-1),!1;if(b.ctrlKey&&88==e)setTimeout(function(){I(c,D(c,i,!0))},0);else if(!d.insertMode){if(e==d.keyCode.RIGHT){var r=g.begin==g.end?g.end+1:g.end;return r=r<u()?r:g.end,I(c,b.shiftKey?g.begin:r,b.shiftKey?r+1:r),!1}if(e==d.keyCode.LEFT){var r=g.begin-1;return r=r>0?r:0,I(c,r,b.shiftKey?g.end:r),!1}}d.onKeyDown.call(this,b,d),n=a.inArray(e,d.ignorables)!=-1}function R(b){if(m)return!1;m=!0;var c=this,e=a(c);b=b||window.event;var f=b.which||b.charCode||b.keyCode;if(d.numericInput&&f==d.radixPoint.charCodeAt(d.radixPoint.length-1)){var h=c._valueGet(),j=h.indexOf(d.radixPoint);I(c,v(i,j!=-1?j:u()))}if(b.ctrlKey||b.altKey||b.metaKey||n)return!0;if(f){e.trigger("input");var k=I(c),l=String.fromCharCode(f),o=u();if(B(i,k.begin,k.end),H){var s,r=d.numericInput?k.end:w(i,k.end);if((s=q(r==o||y(i,r)==d.radixPoint?w(i,r):r,l,i,!1))!==!1){s!==!0&&(r=s.pos||k,l=s.c||l);var C=p;if(1==d.insertMode){if(1==d.greedy)for(var D=i.slice();y(D,C,!0)!=t(C)&&C<=r;)C=C==o?o+1:v(i,C);if(!(C<=r&&(d.greedy||i.length<o)))return!1;if(i[p]!=t(p)&&i.length<o){var E=z(i,-1,H);0!=k.end&&(r+=E),o=i.length}O(C,d.numericInput?w(i,r):r,l)}else x(i,d.numericInput?w(i,r):r,l);A(c,i,d.numericInput&&0==r?v(i,r):r),setTimeout(function(){L(c)&&e.trigger("complete")},0)}else g&&A(c,i,k.begin)}else{var s,r=v(i,k.begin-1);if(z(i,r,H),(s=q(r,l,i,!1))!==!1){if(s!==!0&&(r=s.pos||r,l=s.c||l),1==d.insertMode){for(var F=u(),D=i.slice();y(D,F,!0)!=t(F)&&F>=r;)F=0==F?-1:w(i,F);if(!(F>=r))return!1;P(r,i.length,l)}else x(i,r,l);var G=v(i,r);A(c,i,G),setTimeout(function(){L(c)&&e.trigger("complete")},0)}else g&&A(c,i,k.begin)}return!1}}function S(b){var c=a(this),e=this,f=b.keyCode;d.onKeyUp.call(this,b,d),f==d.keyCode.TAB&&c.hasClass("focus.inputmask")&&0==e._valueGet().length&&(i=k.slice(),A(e,i),H||I(e,0),j=e._valueGet())}var c=a(b);if(c.is(":input")){d.greedy=d.greedy?d.greedy:0==d.repeat;var h=c.prop("maxLength");u()>h&&h>-1&&(h<k.length&&(k.length=h),0==d.greedy&&(d.repeat=Math.round(h/k.length))),c.prop("maxLength",2*u()),c.data("inputmask",{tests:l,_buffer:k,greedy:d.greedy,repeat:d.repeat,autoUnmask:d.autoUnmask,definitions:d.definitions,isRTL:!1}),N(b);var i=k.slice(),j=b._valueGet(),m=!1,n=!1,o=-1,p=v(i,-1),H=(w(i,u()),!1);if("rtl"==b.dir||d.numericInput){b.dir="ltr",c.css("text-align","right"),c.removeAttr("dir");var J=c.data("inputmask");J.isRTL=!0,c.data("inputmask",J),H=!0}c.unbind(".inputmask"),c.removeClass("focus.inputmask"),c.bind("mouseenter.inputmask",function(){var b=a(this),c=this;if(!b.hasClass("focus.inputmask")&&d.showMaskOnHover){var e=c._valueGet().length;e<i.length&&(0==e&&(i=k.slice()),A(c,i))}}).bind("blur.inputmask",function(){var b=a(this),c=this,e=c._valueGet();b.removeClass("focus.inputmask"),e!=j&&b.change(),d.clearMaskOnLostFocus&&(e==k.join("")?c._valueSet(""):G(c,i)),L(c)||(b.trigger("incomplete"),d.clearIncomplete&&(d.clearMaskOnLostFocus?c._valueSet(""):(i=k.slice(),A(c,i))))}).bind("focus.inputmask",function(){var b=a(this),c=this;if(!b.hasClass("focus.inputmask")&&!d.showMaskOnHover){var e=c._valueGet().length;e<i.length&&(0==e&&(i=k.slice()),I(c,D(c,i,!0)))}b.addClass("focus.inputmask"),j=c._valueGet()}).bind("mouseleave.inputmask",function(){var b=a(this),c=this;d.clearMaskOnLostFocus&&(b.hasClass("focus.inputmask")||(c._valueGet()==k.join("")||""==c._valueGet()?c._valueSet(""):G(c,i)))}).bind("click.inputmask",function(){var a=this;setTimeout(function(){var b=I(a);if(b.begin==b.end){var c=b.begin;o=D(a,i,!1),H?I(a,c>o&&(q(c,i[c],i,!0)!==!1||!r(c))?c:o):I(a,c<o&&(q(c,i[c],i,!0)!==!1||!r(c))?c:o)}},0)}).bind("dblclick.inputmask",function(){var a=this;setTimeout(function(){I(a,0,o)},0)}).bind("keydown.inputmask",Q).bind("keypress.inputmask",R).bind("keyup.inputmask",S).bind(e+".inputmask, dragdrop.inputmask, drop.inputmask",function(){var a=this;setTimeout(function(){I(a,D(a,i,!0))},0)}).bind("setvalue.inputmask",function(){var a=this;j=a._valueGet(),D(a,i,!0),a._valueGet()==k.join("")&&a._valueSet("")}).bind("complete.inputmask",d.oncomplete).bind("incomplete.inputmask",d.onincomplete).bind("cleared.inputmask",d.oncleared),o=D(b,i,!0);var K;try{K=document.activeElement}catch(a){}K===b?(c.addClass("focus.inputmask"),I(b,o)):d.clearMaskOnLostFocus&&(b._valueGet()==k.join("")?b._valueSet(""):G(b,i)),M(b)}}var d=a.extend(!0,{},a.inputmask.defaults,c),e=m("paste")?"paste":"input",f=null!=navigator.userAgent.match(/iphone/i),g=null!=navigator.userAgent.match(/android.*mobile safari.*/i);if(g){var h=navigator.userAgent.match(/mobile safari.*/i),i=parseInt(new RegExp(/[0-9]+/).exec(h));g=i<=533}if("string"==typeof b)switch(b){case"mask":var k=o(),l=p();return this.each(function(){J(this)});case"unmaskedvalue":var l=this.data("inputmask").tests,k=this.data("inputmask")._buffer;return d.greedy=this.data("inputmask").greedy,d.repeat=this.data("inputmask").repeat,d.definitions=this.data("inputmask").definitions,H(this);case"remove":var l,k;return this.each(function(){var b=a(this),c=this;setTimeout(function(){if(b.data("inputmask")){l=b.data("inputmask").tests,k=b.data("inputmask")._buffer,d.greedy=b.data("inputmask").greedy,d.repeat=b.data("inputmask").repeat,d.definitions=b.data("inputmask").definitions,c._valueSet(H(b,!0)),b.removeData("inputmask"),b.unbind(".inputmask"),b.removeClass("focus.inputmask");var a;Object.getOwnPropertyDescriptor&&(a=Object.getOwnPropertyDescriptor(c,"value")),a&&a.get?c._valueGet&&Object.defineProperty(c,"value",{get:c._valueGet,set:c._valueSet}):document.__lookupGetter__&&c.__lookupGetter__("value")&&c._valueGet&&(c.__defineGetter__("value",c._valueGet),c.__defineSetter__("value",c._valueSet)),delete c._valueGet,delete c._valueSet}},0)});case"getemptymask":return this.data("inputmask")?this.data("inputmask")._buffer.join(""):"";case"hasMaskedValue":return!!this.data("inputmask")&&!this.data("inputmask").autoUnmask;default:n(b)||(d.mask=b);var k=o(),l=p();return this.each(function(){J(this)})}if("object"==typeof b){d=a.extend(!0,{},a.inputmask.defaults,b),n(d.alias);var k=o(),l=p();return this.each(function(){J(this)})}})}(jQuery);
!function(a){function f(b){return e?b.data("events"):a._data(b[0]).events}function g(a,b,c){var d=f(a),g=d[b];if(!e){var h=c?g.splice(g.delegateCount-1,1)[0]:g.pop();return void g.splice(c?0:g.delegateCount||0,0,h)}c?d.live.unshift(d.live.pop()):g.unshift(g.pop())}function h(b,c,d){var e=c.split(/\s+/);b.each(function(){for(var b=0;b<e.length;++b){var c=a.trim(e[b]).match(/[^\.]+/i)[0];g(a(this),c,d)}})}function i(b){a.fn[b+"First"]=function(){var c=a.makeArray(arguments),d=c.shift();return d&&(a.fn[b].apply(this,arguments),h(this,d)),this}}var b=a.fn.jquery.split("."),c=parseInt(b[0]),d=parseInt(b[1]),e=c<1||1==c&&d<7;i("bind"),i("one"),a.fn.delegateFirst=function(){var b=a.makeArray(arguments),c=b[1];return c&&(b.splice(0,2),a.fn.delegate.apply(this,arguments),h(this,c,!0)),this},a.fn.liveFirst=function(){var b=a.makeArray(arguments);return b.unshift(this.selector),a.fn.delegateFirst.apply(a(document),b),this},e||(a.fn.onFirst=function(b,c){var d=a(this),e="string"==typeof c;if(a.fn.on.apply(d,arguments),"object"==typeof b)for(type in b)b.hasOwnProperty(type)&&h(d,type,e);else"string"==typeof b&&h(d,b,e);return d})}(jQuery);
!function(a){a.masksLoad=function(b){var c;return a.ajax({url:b,async:!1,dataType:"json",success:function(a){c=a}}),c},a.masksSort=function(b,c,d,e){return b.sort(function(b,f){for(var g=0,h=0;g<b[e].length&&h<f[e].length;){var i=b[e].charAt(g),j=f[e].charAt(h);if(d.test(i))if(d.test(j)){if(a.inArray(i,c)!=-1&&a.inArray(j,c)==-1)return 1;if(a.inArray(i,c)==-1&&a.inArray(j,c)!=-1)return-1;if(a.inArray(i,c)==-1&&a.inArray(j,c)==-1&&i!=j)return i<j?-1:1;g++,h++}else h++;else g++}for(;g<b[e].length||h<f[e].length;)if(g<b[e].length&&!d.test(b[e].charAt(g)))g++;else if(h<f[e].length&&!d.test(f[e].charAt(h)))h++;else{if(g<b[e].length)return 1;if(h<f[e].length)return-1}return 0}),b},a.fn.inputmasks=function(b,c){var d=function(a,b){if("number"!=typeof a){if(this.setSelectionRange)a=this.selectionStart,b=this.selectionEnd;else if(document.selection&&document.selection.createRange){var c=document.selection.createRange();a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length}return{begin:a,end:b}}if(b="number"==typeof b?b:a,this.setSelectionRange)this.setSelectionRange(a,b);else if(this.createTextRange){var c=this.createTextRange();c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select()}},e=Object.keys||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var b=[];for(var c in a)b[b.length]=c;return b};b=a.extend(!0,{onMaskChange:a.noop},b);var f={};for(var g in b.inputmask.definitions){var h=b.inputmask.definitions[g].validator;switch(typeof h){case"string":f[g]=new RegExp(h);break;case"object":"test"in b.definitions[g].validator&&(f[g]=h);break;case"function":f[g]={test:h}}}b.inputmask.definitions[b.replace]={validator:b.match.source,cardinality:1};var i=null!=navigator.userAgent.match(/iphone/i),j=!1,k=a.extend(!0,{},a.inputmask.defaults,b.inputmask).placeholder,l=a.extend(!0,{},a.inputmask.defaults,b.inputmask).insertMode,m=function(a){for(var c="",d=0;d<a.length;d++){var g=a.charAt(d);if(g==k)break;b.match.test(g)&&(c+=g)}for(var h in b.list){for(var i=b.list[h][b.listKey],j=!0,l=0,m=0;l<c.length&&m<i.length;){var n=i.charAt(m),o=c.charAt(l);if(b.match.test(n)||n in f){if(!(n in f&&f[n].test(o)||o==n)){j=!1;break}l++,m++}else m++}if(j&&l==c.length){var p=i.substr(m).search(b.match)==-1;i=i.replace(new RegExp([b.match.source].concat(e(f)).join("|"),"g"),b.replace);var q=i.substr(m).search(b.replace)==-1;return{mask:i,obj:b.list[h],determined:p,completed:q}}}return!1},n=function(a,c,d){if(!a)return 0;for(var e=0,f=0;e<d.begin;e++)a.charAt(e)==b.replace&&f++;for(var g=0;e<d.end;e++)a.charAt(e)==b.replace&&g++;for(e=0;e<c.length&&(f>0||c.charAt(e)!=b.replace);e++)c.charAt(e)==b.replace&&f--;for(f=e;e<c.length&&g>0;e++)c.charAt(e)==b.replace&&g--;return g=e,{begin:f,end:g}},o=function(){a(this).unbind("keypress.inputmask",t).unbind("input.inputmask",x).unbind("paste.inputmask",x).unbind("dragdrop.inputmask",x).unbind("drop.inputmask",x).unbind("keydown.inputmask",s).unbind("setvalue.inputmask",v).unbind("blur.inputmask",u)},p=function(){o.call(this),a(this).bindFirst("keypress.inputmask",t).bindFirst("input.inputmask",x).bindFirst("paste.inputmask",x).bindFirst("dragdrop.inputmask",x).bindFirst("drop.inputmask",x).bindFirst("keydown.inputmask",s).bindFirst("setvalue.inputmask",v).bind("blur.inputmask",u)},q=function(c,e){if(c&&(e||c.mask!=j.mask)){var f;e||(f=n(j.mask,c.mask,d.call(this))),e&&(this._valueSet?this._valueSet(e):this.value=e),a(this).inputmask(c.mask,a.extend(!0,b.inputmask,{insertMode:l})),e||d.call(this,f.begin,f.end)}return j=c,b.onMaskChange.call(this,c.obj,c.determined),!0},r=function(b,c,d){var e=m(c);return!(!e||e.obj!=j.obj||e.determined!=j.determined)||(e&&(o.call(this),d?(q.call(this,e),a(this).trigger(b)):(a(this).trigger(b),q.call(this,e)),p.call(this)),b.stopImmediatePropagation(),!1)},s=function(a){a=a||window.event;var c=a.which||a.charCode||a.keyCode;if(8==c||46==c||i&&127==c){var e=this._valueGet(),f=d.call(this);if(f.begin==f.end||!l&&f.begin==f.end-1){var g=f.begin;do{46!=c&&g--;var h=e.charAt(g);e=e.substring(0,g)+e.substring(g+1)}while(g>0&&g<e.length&&h!=k&&!b.match.test(h))}else{var j=e.substring(0,f.begin)+e.substring(f.end);j.search(b.match)==-1&&(e=j)}return r.call(this,a,e,!1)}return 45==c&&(l=!l),!0},t=function(a){if(void 0!=this.length){var b=this._valueGet();a=a||window.event;var c=a.which||a.charCode||a.keyCode,e=String.fromCharCode(c);return caretPos=d.call(this),b=b.substring(0,caretPos.begin)+e+b.substring(caretPos.end),r.call(this,a,b,!0)}},u=function(a){if(void 0!=this.length){var b=m(this._valueGet());return q.call(this,b),p.call(this),!0}},v=function(a){return w.call(this),a.stopImmediatePropagation(),!0},w=function(){var a;a=this._valueGet?this._valueGet():this.value;for(var b=m(a);!b&&a.length>0;)a=a.substr(0,a.length-1),b=m(a);q.call(this,b,a),p.call(this)},x=function(a){var b=this;return setTimeout(function(){w.call(b)},0),a.stopImmediatePropagation(),!0};switch(c){case"isCompleted":var y=m(this[0]._valueGet&&this[0]._valueGet()||this[0].value);return y&&y.completed;default:return this.each(function(){w.call(this)}),this}}}(jQuery);
/*! flipclock 2015-08-31 https://github.com/objectivehtml/FlipClock */
var Base=function(){};Base.extend=function(a,b){"use strict";var c=Base.prototype.extend;Base._prototyping=!0;var d=new this;c.call(d,a),d.base=function(){},delete Base._prototyping;var e=d.constructor,f=d.constructor=function(){if(!Base._prototyping)if(this._constructing||this.constructor==f)this._constructing=!0,e.apply(this,arguments),delete this._constructing;else if(null!==arguments[0])return(arguments[0].extend||c).call(arguments[0],d)};return f.ancestor=this,f.extend=this.extend,f.forEach=this.forEach,f.implement=this.implement,f.prototype=d,f.toString=this.toString,f.valueOf=function(a){return"object"==a?f:e.valueOf()},c.call(f,b),"function"==typeof f.init&&f.init(),f},Base.prototype={extend:function(a,b){if(arguments.length>1){var c=this[a];if(c&&"function"==typeof b&&(!c.valueOf||c.valueOf()!=b.valueOf())&&/\bbase\b/.test(b)){var d=b.valueOf();b=function(){var a=this.base||Base.prototype.base;this.base=c;var b=d.apply(this,arguments);return this.base=a,b},b.valueOf=function(a){return"object"==a?b:d},b.toString=Base.toString}this[a]=b}else if(a){var e=Base.prototype.extend;Base._prototyping||"function"==typeof this||(e=this.extend||e);for(var f={toSource:null},g=["constructor","toString","valueOf"],h=Base._prototyping?0:1;i=g[h++];)a[i]!=f[i]&&e.call(this,i,a[i]);for(var i in a)f[i]||e.call(this,i,a[i])}return this}},Base=Base.extend({constructor:function(){this.extend(arguments[0])}},{ancestor:Object,version:"1.1",forEach:function(a,b,c){for(var d in a)void 0===this.prototype[d]&&b.call(c,a[d],d,a)},implement:function(){for(var a=0;a<arguments.length;a++)"function"==typeof arguments[a]?arguments[a](this.prototype):this.prototype.extend(arguments[a]);return this},toString:function(){return String(this.valueOf())}});var FlipClock;!function(a){"use strict";FlipClock=function(a,b,c){return b instanceof Object&&b instanceof Date==!1&&(c=b,b=0),new FlipClock.Factory(a,b,c)},FlipClock.Lang={},FlipClock.Base=Base.extend({buildDate:"2014-12-12",version:"0.7.7",constructor:function(b,c){"object"!=typeof b&&(b={}),"object"!=typeof c&&(c={}),this.setOptions(a.extend(!0,{},b,c))},callback:function(a){if("function"==typeof a){for(var b=[],c=1;c<=arguments.length;c++)arguments[c]&&b.push(arguments[c]);a.apply(this,b)}},log:function(a){window.console&&console.log&&console.log(a)},getOption:function(a){return this[a]?this[a]:!1},getOptions:function(){return this},setOption:function(a,b){this[a]=b},setOptions:function(a){for(var b in a)"undefined"!=typeof a[b]&&this.setOption(b,a[b])}})}(jQuery),function(a){"use strict";FlipClock.Face=FlipClock.Base.extend({autoStart:!0,dividers:[],factory:!1,lists:[],constructor:function(a,b){this.dividers=[],this.lists=[],this.base(b),this.factory=a},build:function(){this.autoStart&&this.start()},createDivider:function(b,c,d){"boolean"!=typeof c&&c||(d=c,c=b);var e=['<span class="'+this.factory.classes.dot+' top"></span>','<span class="'+this.factory.classes.dot+' bottom"></span>'].join("");d&&(e=""),b=this.factory.localize(b);var f=['<span class="'+this.factory.classes.divider+" "+(c?c:"").toLowerCase()+'">','<span class="'+this.factory.classes.label+'">'+(b?b:"")+"</span>",e,"</span>"],g=a(f.join(""));return this.dividers.push(g),g},createList:function(a,b){"object"==typeof a&&(b=a,a=0);var c=new FlipClock.List(this.factory,a,b);return this.lists.push(c),c},reset:function(){this.factory.time=new FlipClock.Time(this.factory,this.factory.original?Math.round(this.factory.original):0,{minimumDigits:this.factory.minimumDigits}),this.flip(this.factory.original,!1)},appendDigitToClock:function(a){a.$el.append(!1)},addDigit:function(a){var b=this.createList(a,{classes:{active:this.factory.classes.active,before:this.factory.classes.before,flip:this.factory.classes.flip}});this.appendDigitToClock(b)},start:function(){},stop:function(){},autoIncrement:function(){this.factory.countdown?this.decrement():this.increment()},increment:function(){this.factory.time.addSecond()},decrement:function(){0==this.factory.time.getTimeSeconds()?this.factory.stop():this.factory.time.subSecond()},flip:function(b,c){var d=this;a.each(b,function(a,b){var e=d.lists[a];e?(c||b==e.digit||e.play(),e.select(b)):d.addDigit(b)})}})}(jQuery),function(a){"use strict";FlipClock.Factory=FlipClock.Base.extend({animationRate:1e3,autoStart:!0,callbacks:{destroy:!1,create:!1,init:!1,interval:!1,start:!1,stop:!1,reset:!1},classes:{active:"flip-clock-active",before:"flip-clock-before",divider:"flip-clock-divider",dot:"flip-clock-dot",label:"flip-clock-label",flip:"flip",play:"play",wrapper:"flip-clock-wrapper"},clockFace:"HourlyCounter",countdown:!1,defaultClockFace:"HourlyCounter",defaultLanguage:"english",$el:!1,face:!0,lang:!1,language:"english",minimumDigits:0,original:!1,running:!1,time:!1,timer:!1,$wrapper:!1,constructor:function(b,c,d){d||(d={}),this.lists=[],this.running=!1,this.base(d),this.$el=a(b).addClass(this.classes.wrapper),this.$wrapper=this.$el,this.original=c instanceof Date?c:c?Math.round(c):0,this.time=new FlipClock.Time(this,this.original,{minimumDigits:this.minimumDigits,animationRate:this.animationRate}),this.timer=new FlipClock.Timer(this,d),this.loadLanguage(this.language),this.loadClockFace(this.clockFace,d),this.autoStart&&this.start()},loadClockFace:function(a,b){var c,d="Face",e=!1;return a=a.ucfirst()+d,this.face.stop&&(this.stop(),e=!0),this.$el.html(""),this.time.minimumDigits=this.minimumDigits,c=FlipClock[a]?new FlipClock[a](this,b):new FlipClock[this.defaultClockFace+d](this,b),c.build(),this.face=c,e&&this.start(),this.face},loadLanguage:function(a){var b;return b=FlipClock.Lang[a.ucfirst()]?FlipClock.Lang[a.ucfirst()]:FlipClock.Lang[a]?FlipClock.Lang[a]:FlipClock.Lang[this.defaultLanguage],this.lang=b},localize:function(a,b){var c=this.lang;if(!a)return null;var d=a.toLowerCase();return"object"==typeof b&&(c=b),c&&c[d]?c[d]:a},start:function(a){var b=this;b.running||b.countdown&&!(b.countdown&&b.time.time>0)?b.log("Trying to start timer when countdown already at 0"):(b.face.start(b.time),b.timer.start(function(){b.flip(),"function"==typeof a&&a()}))},stop:function(a){this.face.stop(),this.timer.stop(a);for(var b in this.lists)this.lists.hasOwnProperty(b)&&this.lists[b].stop()},reset:function(a){this.timer.reset(a),this.face.reset()},setTime:function(a){this.time.time=a,this.flip(!0)},getTime:function(a){return this.time},setCountdown:function(a){var b=this.running;this.countdown=a?!0:!1,b&&(this.stop(),this.start())},flip:function(a){this.face.flip(!1,a)}})}(jQuery),function(a){"use strict";FlipClock.List=FlipClock.Base.extend({digit:0,classes:{active:"flip-clock-active",before:"flip-clock-before",flip:"flip"},factory:!1,$el:!1,$obj:!1,items:[],lastDigit:0,constructor:function(a,b,c){this.factory=a,this.digit=b,this.lastDigit=b,this.$el=this.createList(),this.$obj=this.$el,b>0&&this.select(b),this.factory.$el.append(this.$el)},select:function(a){if("undefined"==typeof a?a=this.digit:this.digit=a,this.digit!=this.lastDigit){var b=this.$el.find("."+this.classes.before).removeClass(this.classes.before);this.$el.find("."+this.classes.active).removeClass(this.classes.active).addClass(this.classes.before),this.appendListItem(this.classes.active,this.digit),b.remove(),this.lastDigit=this.digit}},play:function(){this.$el.addClass(this.factory.classes.play)},stop:function(){var a=this;setTimeout(function(){a.$el.removeClass(a.factory.classes.play)},this.factory.timer.interval)},createListItem:function(a,b){return['<li class="'+(a?a:"")+'">','<a href="#">','<div class="up">','<div class="shadow"></div>','<div class="inn">'+(b?b:"")+"</div>","</div>",'<div class="down">','<div class="shadow"></div>','<div class="inn">'+(b?b:"")+"</div>","</div>","</a>","</li>"].join("")},appendListItem:function(a,b){var c=this.createListItem(a,b);this.$el.append(c)},createList:function(){var b=this.getPrevDigit()?this.getPrevDigit():this.digit,c=a(['<ul class="'+this.classes.flip+" "+(this.factory.running?this.factory.classes.play:"")+'">',this.createListItem(this.classes.before,b),this.createListItem(this.classes.active,this.digit),"</ul>"].join(""));return c},getNextDigit:function(){return 9==this.digit?0:this.digit+1},getPrevDigit:function(){return 0==this.digit?9:this.digit-1}})}(jQuery),function(a){"use strict";String.prototype.ucfirst=function(){return this.substr(0,1).toUpperCase()+this.substr(1)},a.fn.FlipClock=function(b,c){return new FlipClock(a(this),b,c)},a.fn.flipClock=function(b,c){return a.fn.FlipClock(b,c)}}(jQuery),function(a){"use strict";FlipClock.Time=FlipClock.Base.extend({time:0,factory:!1,minimumDigits:0,constructor:function(a,b,c){"object"!=typeof c&&(c={}),c.minimumDigits||(c.minimumDigits=a.minimumDigits),this.base(c),this.factory=a,b&&(this.time=b)},convertDigitsToArray:function(a){var b=[];a=a.toString();for(var c=0;c<a.length;c++)a[c].match(/^\d*$/g)&&b.push(a[c]);return b},digit:function(a){var b=this.toString(),c=b.length;return b[c-a]?b[c-a]:!1},digitize:function(b){var c=[];if(a.each(b,function(a,b){b=b.toString(),1==b.length&&(b="0"+b);for(var d=0;d<b.length;d++)c.push(b.charAt(d))}),c.length>this.minimumDigits&&(this.minimumDigits=c.length),this.minimumDigits>c.length)for(var d=c.length;d<this.minimumDigits;d++)c.unshift("0");return c},getDateObject:function(){return this.time instanceof Date?this.time:new Date((new Date).getTime()+1e3*this.getTimeSeconds())},getDayCounter:function(a){var b=[this.getDays(),this.getHours(!0),this.getMinutes(!0)];return a&&b.push(this.getSeconds(!0)),this.digitize(b)},getDays:function(a){var b=this.getTimeSeconds()/60/60/24;return a&&(b%=7),Math.floor(b)},getHourCounter:function(){var a=this.digitize([this.getHours(),this.getMinutes(!0),this.getSeconds(!0)]);return a},getHourly:function(){return this.getHourCounter()},getHours:function(a){var b=this.getTimeSeconds()/60/60;return a&&(b%=24),Math.floor(b)},getMilitaryTime:function(a,b){"undefined"==typeof b&&(b=!0),a||(a=this.getDateObject());var c=[a.getHours(),a.getMinutes()];return b===!0&&c.push(a.getSeconds()),this.digitize(c)},getMinutes:function(a){var b=this.getTimeSeconds()/60;return a&&(b%=60),Math.floor(b)},getMinuteCounter:function(){var a=this.digitize([this.getMinutes(),this.getSeconds(!0)]);return a},getTimeSeconds:function(a){return a||(a=new Date),this.time instanceof Date?this.factory.countdown?Math.max(this.time.getTime()/1e3-a.getTime()/1e3,0):a.getTime()/1e3-this.time.getTime()/1e3:this.time},getTime:function(a,b){"undefined"==typeof b&&(b=!0),a||(a=this.getDateObject()),console.log(a);var c=a.getHours(),d=[c>12?c-12:0===c?12:c,a.getMinutes()];return b===!0&&d.push(a.getSeconds()),this.digitize(d)},getSeconds:function(a){var b=this.getTimeSeconds();return a&&(60==b?b=0:b%=60),Math.ceil(b)},getWeeks:function(a){var b=this.getTimeSeconds()/60/60/24/7;return a&&(b%=52),Math.floor(b)},removeLeadingZeros:function(b,c){var d=0,e=[];return a.each(c,function(a,f){b>a?d+=parseInt(c[a],10):e.push(c[a])}),0===d?e:c},addSeconds:function(a){this.time instanceof Date?this.time.setSeconds(this.time.getSeconds()+a):this.time+=a},addSecond:function(){this.addSeconds(1)},subSeconds:function(a){this.time instanceof Date?this.time.setSeconds(this.time.getSeconds()-a):this.time-=a},subSecond:function(){this.subSeconds(1)},toString:function(){return this.getTimeSeconds().toString()}})}(jQuery),function(a){"use strict";FlipClock.Timer=FlipClock.Base.extend({callbacks:{destroy:!1,create:!1,init:!1,interval:!1,start:!1,stop:!1,reset:!1},count:0,factory:!1,interval:1e3,animationRate:1e3,constructor:function(a,b){this.base(b),this.factory=a,this.callback(this.callbacks.init),this.callback(this.callbacks.create)},getElapsed:function(){return this.count*this.interval},getElapsedTime:function(){return new Date(this.time+this.getElapsed())},reset:function(a){clearInterval(this.timer),this.count=0,this._setInterval(a),this.callback(this.callbacks.reset)},start:function(a){this.factory.running=!0,this._createTimer(a),this.callback(this.callbacks.start)},stop:function(a){this.factory.running=!1,this._clearInterval(a),this.callback(this.callbacks.stop),this.callback(a)},_clearInterval:function(){clearInterval(this.timer)},_createTimer:function(a){this._setInterval(a)},_destroyTimer:function(a){this._clearInterval(),this.timer=!1,this.callback(a),this.callback(this.callbacks.destroy)},_interval:function(a){this.callback(this.callbacks.interval),this.callback(a),this.count++},_setInterval:function(a){var b=this;b._interval(a),b.timer=setInterval(function(){b._interval(a)},this.interval)}})}(jQuery),function(a){FlipClock.TwentyFourHourClockFace=FlipClock.Face.extend({constructor:function(a,b){this.base(a,b)},build:function(b){var c=this,d=this.factory.$el.find("ul");this.factory.time.time||(this.factory.original=new Date,this.factory.time=new FlipClock.Time(this.factory,this.factory.original));var b=b?b:this.factory.time.getMilitaryTime(!1,this.showSeconds);b.length>d.length&&a.each(b,function(a,b){c.createList(b)}),this.createDivider(),this.createDivider(),a(this.dividers[0]).insertBefore(this.lists[this.lists.length-2].$el),a(this.dividers[1]).insertBefore(this.lists[this.lists.length-4].$el),this.base()},flip:function(a,b){this.autoIncrement(),a=a?a:this.factory.time.getMilitaryTime(!1,this.showSeconds),this.base(a,b)}})}(jQuery),function(a){FlipClock.CounterFace=FlipClock.Face.extend({shouldAutoIncrement:!1,constructor:function(a,b){"object"!=typeof b&&(b={}),a.autoStart=b.autoStart?!0:!1,b.autoStart&&(this.shouldAutoIncrement=!0),a.increment=function(){a.countdown=!1,a.setTime(a.getTime().getTimeSeconds()+1)},a.decrement=function(){a.countdown=!0;var b=a.getTime().getTimeSeconds();b>0&&a.setTime(b-1)},a.setValue=function(b){a.setTime(b)},a.setCounter=function(b){a.setTime(b)},this.base(a,b)},build:function(){var b=this,c=this.factory.$el.find("ul"),d=this.factory.getTime().digitize([this.factory.getTime().time]);d.length>c.length&&a.each(d,function(a,c){var d=b.createList(c);d.select(c)}),a.each(this.lists,function(a,b){b.play()}),this.base()},flip:function(a,b){this.shouldAutoIncrement&&this.autoIncrement(),a||(a=this.factory.getTime().digitize([this.factory.getTime().time])),this.base(a,b)},reset:function(){this.factory.time=new FlipClock.Time(this.factory,this.factory.original?Math.round(this.factory.original):0),this.flip()}})}(jQuery),function(a){FlipClock.DailyCounterFace=FlipClock.Face.extend({showSeconds:!0,constructor:function(a,b){this.base(a,b)},build:function(b){var c=this,d=this.factory.$el.find("ul"),e=0;b=b?b:this.factory.time.getDayCounter(this.showSeconds),b.length>d.length&&a.each(b,function(a,b){c.createList(b)}),this.showSeconds?a(this.createDivider("Seconds")).insertBefore(this.lists[this.lists.length-2].$el):e=2,a(this.createDivider("Minutes")).insertBefore(this.lists[this.lists.length-4+e].$el),a(this.createDivider("Hours")).insertBefore(this.lists[this.lists.length-6+e].$el),a(this.createDivider("Days",!0)).insertBefore(this.lists[0].$el),this.base()},flip:function(a,b){a||(a=this.factory.time.getDayCounter(this.showSeconds)),this.autoIncrement(),this.base(a,b)}})}(jQuery),function(a){FlipClock.HourlyCounterFace=FlipClock.Face.extend({constructor:function(a,b){this.base(a,b)},build:function(b,c){var d=this,e=this.factory.$el.find("ul");c=c?c:this.factory.time.getHourCounter(),c.length>e.length&&a.each(c,function(a,b){d.createList(b)}),a(this.createDivider("Seconds")).insertBefore(this.lists[this.lists.length-2].$el),a(this.createDivider("Minutes")).insertBefore(this.lists[this.lists.length-4].$el),b||a(this.createDivider("Hours",!0)).insertBefore(this.lists[0].$el),this.base()},flip:function(a,b){a||(a=this.factory.time.getHourCounter()),this.autoIncrement(),this.base(a,b)},appendDigitToClock:function(a){this.base(a),this.dividers[0].insertAfter(this.dividers[0].next())}})}(jQuery),function(a){FlipClock.MinuteCounterFace=FlipClock.HourlyCounterFace.extend({clearExcessDigits:!1,constructor:function(a,b){this.base(a,b)},build:function(){this.base(!0,this.factory.time.getMinuteCounter())},flip:function(a,b){a||(a=this.factory.time.getMinuteCounter()),this.base(a,b)}})}(jQuery),function(a){FlipClock.TwelveHourClockFace=FlipClock.TwentyFourHourClockFace.extend({meridium:!1,meridiumText:"AM",build:function(){var b=this.factory.time.getTime(!1,this.showSeconds);this.base(b),this.meridiumText=this.getMeridium(),this.meridium=a(['<ul class="flip-clock-meridium">',"<li>",'<a href="#">'+this.meridiumText+"</a>","</li>","</ul>"].join("")),this.meridium.insertAfter(this.lists[this.lists.length-1].$el)},flip:function(a,b){this.meridiumText!=this.getMeridium()&&(this.meridiumText=this.getMeridium(),this.meridium.find("a").html(this.meridiumText)),this.base(this.factory.time.getTime(!1,this.showSeconds),b)},getMeridium:function(){return(new Date).getHours()>=12?"PM":"AM"},isPM:function(){return"PM"==this.getMeridium()?!0:!1},isAM:function(){return"AM"==this.getMeridium()?!0:!1}})}(jQuery),function(a){FlipClock.Lang.Arabic={years:"سنوات",months:"شهور",days:"أيام",hours:"ساعات",minutes:"دقائق",seconds:"ثواني"},FlipClock.Lang.ar=FlipClock.Lang.Arabic,FlipClock.Lang["ar-ar"]=FlipClock.Lang.Arabic,FlipClock.Lang.arabic=FlipClock.Lang.Arabic}(jQuery),function(a){FlipClock.Lang.Danish={years:"År",months:"Måneder",days:"Dage",hours:"Timer",minutes:"Minutter",seconds:"Sekunder"},FlipClock.Lang.da=FlipClock.Lang.Danish,FlipClock.Lang["da-dk"]=FlipClock.Lang.Danish,FlipClock.Lang.danish=FlipClock.Lang.Danish}(jQuery),function(a){FlipClock.Lang.German={years:"Jahre",months:"Monate",days:"Tage",hours:"Stunden",minutes:"Minuten",seconds:"Sekunden"},FlipClock.Lang.de=FlipClock.Lang.German,FlipClock.Lang["de-de"]=FlipClock.Lang.German,FlipClock.Lang.german=FlipClock.Lang.German}(jQuery),function(a){FlipClock.Lang.English={years:"Years",months:"Months",days:"Days",hours:"Hours",minutes:"Minutes",seconds:"Seconds"},FlipClock.Lang.en=FlipClock.Lang.English,FlipClock.Lang["en-us"]=FlipClock.Lang.English,FlipClock.Lang.english=FlipClock.Lang.English}(jQuery),function(a){FlipClock.Lang.Spanish={years:"Años",months:"Meses",days:"Días",hours:"Horas",minutes:"Minutos",seconds:"Segundos"},FlipClock.Lang.es=FlipClock.Lang.Spanish,FlipClock.Lang["es-es"]=FlipClock.Lang.Spanish,FlipClock.Lang.spanish=FlipClock.Lang.Spanish}(jQuery),function(a){FlipClock.Lang.Finnish={years:"Vuotta",months:"Kuukautta",days:"Päivää",hours:"Tuntia",minutes:"Minuuttia",seconds:"Sekuntia"},FlipClock.Lang.fi=FlipClock.Lang.Finnish,FlipClock.Lang["fi-fi"]=FlipClock.Lang.Finnish,FlipClock.Lang.finnish=FlipClock.Lang.Finnish}(jQuery),function(a){FlipClock.Lang.French={years:"Ans",months:"Mois",days:"Jours",hours:"Heures",minutes:"Minutes",seconds:"Secondes"},FlipClock.Lang.fr=FlipClock.Lang.French,FlipClock.Lang["fr-ca"]=FlipClock.Lang.French,FlipClock.Lang.french=FlipClock.Lang.French}(jQuery),function(a){FlipClock.Lang.Italian={years:"Anni",months:"Mesi",days:"Giorni",hours:"Ore",minutes:"Minuti",seconds:"Secondi"},FlipClock.Lang.it=FlipClock.Lang.Italian,FlipClock.Lang["it-it"]=FlipClock.Lang.Italian,FlipClock.Lang.italian=FlipClock.Lang.Italian}(jQuery),function(a){FlipClock.Lang.Latvian={years:"Gadi",months:"Mēneši",days:"Dienas",hours:"Stundas",minutes:"Minūtes",seconds:"Sekundes"},FlipClock.Lang.lv=FlipClock.Lang.Latvian,FlipClock.Lang["lv-lv"]=FlipClock.Lang.Latvian,FlipClock.Lang.latvian=FlipClock.Lang.Latvian}(jQuery),function(a){FlipClock.Lang.Dutch={years:"Jaren",months:"Maanden",days:"Dagen",hours:"Uren",minutes:"Minuten",seconds:"Seconden"},FlipClock.Lang.nl=FlipClock.Lang.Dutch,FlipClock.Lang["nl-be"]=FlipClock.Lang.Dutch,FlipClock.Lang.dutch=FlipClock.Lang.Dutch}(jQuery),function(a){FlipClock.Lang.Norwegian={years:"År",months:"Måneder",days:"Dager",hours:"Timer",minutes:"Minutter",seconds:"Sekunder"},FlipClock.Lang.no=FlipClock.Lang.Norwegian,FlipClock.Lang.nb=FlipClock.Lang.Norwegian,FlipClock.Lang["no-nb"]=FlipClock.Lang.Norwegian,FlipClock.Lang.norwegian=FlipClock.Lang.Norwegian}(jQuery),function(a){FlipClock.Lang.Portuguese={years:"Anos",months:"Meses",days:"Dias",hours:"Horas",minutes:"Minutos",seconds:"Segundos"},FlipClock.Lang.pt=FlipClock.Lang.Portuguese,FlipClock.Lang["pt-br"]=FlipClock.Lang.Portuguese,FlipClock.Lang.portuguese=FlipClock.Lang.Portuguese}(jQuery),function(a){FlipClock.Lang.Russian={years:"лет",months:"месяцев",days:"дней",hours:"часов",minutes:"минут",seconds:"секунд"},FlipClock.Lang.ru=FlipClock.Lang.Russian,FlipClock.Lang["ru-ru"]=FlipClock.Lang.Russian,FlipClock.Lang.russian=FlipClock.Lang.Russian}(jQuery),function(a){FlipClock.Lang.Swedish={years:"År",months:"Månader",days:"Dagar",hours:"Timmar",minutes:"Minuter",seconds:"Sekunder"},FlipClock.Lang.sv=FlipClock.Lang.Swedish,FlipClock.Lang["sv-se"]=FlipClock.Lang.Swedish,FlipClock.Lang.swedish=FlipClock.Lang.Swedish}(jQuery),function(a){FlipClock.Lang.Chinese={years:"年",months:"月",days:"日",hours:"时",minutes:"分",seconds:"秒"},FlipClock.Lang.zh=FlipClock.Lang.Chinese,FlipClock.Lang["zh-cn"]=FlipClock.Lang.Chinese,FlipClock.Lang.chinese=FlipClock.Lang.Chinese}(jQuery);
/* https://gromo.github.io/jquery.scrollbar/ */
!function(l,e){"function"==typeof define&&define.amd?define(["jquery"],e):e(l.jQuery)}(this,function(l){"use strict";function e(e){if(t.webkit&&!e)return{height:0,width:0};if(!t.data.outer){var o={border:"none","box-sizing":"content-box",height:"200px",margin:"0",padding:"0",width:"200px"};t.data.inner=l("<div>").css(l.extend({},o)),t.data.outer=l("<div>").css(l.extend({left:"-1000px",overflow:"scroll",position:"absolute",top:"-1000px"},o)).append(t.data.inner).appendTo("body")}return t.data.outer.scrollLeft(1e3).scrollTop(1e3),{height:Math.ceil(t.data.outer.offset().top-t.data.inner.offset().top||0),width:Math.ceil(t.data.outer.offset().left-t.data.inner.offset().left||0)}}function o(){var l=e(!0);return!(l.height||l.width)}function s(l){var e=l.originalEvent;return e.axis&&e.axis===e.HORIZONTAL_AXIS?!1:e.wheelDeltaX?!1:!0}var r=!1,t={data:{index:0,name:"scrollbar"},macosx:/mac/i.test(navigator.platform),mobile:/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent),overlay:null,scroll:null,scrolls:[],webkit:/webkit/i.test(navigator.userAgent)&&!/edge\/\d+/i.test(navigator.userAgent)};t.scrolls.add=function(l){this.remove(l).push(l)},t.scrolls.remove=function(e){for(;l.inArray(e,this)>=0;)this.splice(l.inArray(e,this),1);return this};var i={autoScrollSize:!0,autoUpdate:!0,debug:!1,disableBodyScroll:!1,duration:200,ignoreMobile:!1,ignoreOverlay:!1,scrollStep:30,showArrows:!1,stepScrolling:!0,scrollx:null,scrolly:null,onDestroy:null,onInit:null,onScroll:null,onUpdate:null},n=function(s){t.scroll||(t.overlay=o(),t.scroll=e(),a(),l(window).resize(function(){var l=!1;if(t.scroll&&(t.scroll.height||t.scroll.width)){var o=e();(o.height!==t.scroll.height||o.width!==t.scroll.width)&&(t.scroll=o,l=!0)}a(l)})),this.container=s,this.namespace=".scrollbar_"+t.data.index++,this.options=l.extend({},i,window.jQueryScrollbarOptions||{}),this.scrollTo=null,this.scrollx={},this.scrolly={},s.data(t.data.name,this),t.scrolls.add(this)};n.prototype={destroy:function(){if(this.wrapper){this.container.removeData(t.data.name),t.scrolls.remove(this);var e=this.container.scrollLeft(),o=this.container.scrollTop();this.container.insertBefore(this.wrapper).css({height:"",margin:"","max-height":""}).removeClass("scroll-content scroll-scrollx_visible scroll-scrolly_visible").off(this.namespace).scrollLeft(e).scrollTop(o),this.scrollx.scroll.removeClass("scroll-scrollx_visible").find("div").andSelf().off(this.namespace),this.scrolly.scroll.removeClass("scroll-scrolly_visible").find("div").andSelf().off(this.namespace),this.wrapper.remove(),l(document).add("body").off(this.namespace),l.isFunction(this.options.onDestroy)&&this.options.onDestroy.apply(this,[this.container])}},init:function(e){var o=this,r=this.container,i=this.containerWrapper||r,n=this.namespace,c=l.extend(this.options,e||{}),a={x:this.scrollx,y:this.scrolly},d=this.wrapper,h={scrollLeft:r.scrollLeft(),scrollTop:r.scrollTop()};if(t.mobile&&c.ignoreMobile||t.overlay&&c.ignoreOverlay||t.macosx&&!t.webkit)return!1;if(d)i.css({height:"auto","margin-bottom":-1*t.scroll.height+"px","margin-right":-1*t.scroll.width+"px","max-height":""});else{if(this.wrapper=d=l("<div>").addClass("scroll-wrapper").addClass(r.attr("class")).css("position","absolute"==r.css("position")?"absolute":"relative").insertBefore(r).append(r),r.is("textarea")&&(this.containerWrapper=i=l("<div>").insertBefore(r).append(r),d.addClass("scroll-textarea")),i.addClass("scroll-content").css({height:"auto","margin-bottom":-1*t.scroll.height+"px","margin-right":-1*t.scroll.width+"px","max-height":""}),r.on("scroll"+n,function(e){l.isFunction(c.onScroll)&&c.onScroll.call(o,{maxScroll:a.y.maxScrollOffset,scroll:r.scrollTop(),size:a.y.size,visible:a.y.visible},{maxScroll:a.x.maxScrollOffset,scroll:r.scrollLeft(),size:a.x.size,visible:a.x.visible}),a.x.isVisible&&a.x.scroll.bar.css("left",r.scrollLeft()*a.x.kx+"px"),a.y.isVisible&&a.y.scroll.bar.css("top",r.scrollTop()*a.y.kx+"px")}),d.on("scroll"+n,function(){d.scrollTop(0).scrollLeft(0)}),c.disableBodyScroll){var p=function(l){s(l)?a.y.isVisible&&a.y.mousewheel(l):a.x.isVisible&&a.x.mousewheel(l)};d.on("MozMousePixelScroll"+n,p),d.on("mousewheel"+n,p),t.mobile&&d.on("touchstart"+n,function(e){var o=e.originalEvent.touches&&e.originalEvent.touches[0]||e,s={pageX:o.pageX,pageY:o.pageY},t={left:r.scrollLeft(),top:r.scrollTop()};l(document).on("touchmove"+n,function(l){var e=l.originalEvent.targetTouches&&l.originalEvent.targetTouches[0]||l;r.scrollLeft(t.left+s.pageX-e.pageX),r.scrollTop(t.top+s.pageY-e.pageY),l.preventDefault()}),l(document).on("touchend"+n,function(){l(document).off(n)})})}l.isFunction(c.onInit)&&c.onInit.apply(this,[r])}l.each(a,function(e,t){var i=null,d=1,h="x"===e?"scrollLeft":"scrollTop",p=c.scrollStep,u=function(){var l=r[h]();r[h](l+p),1==d&&l+p>=f&&(l=r[h]()),-1==d&&f>=l+p&&(l=r[h]()),r[h]()==l&&i&&i()},f=0;t.scroll||(t.scroll=o._getScroll(c["scroll"+e]).addClass("scroll-"+e),c.showArrows&&t.scroll.addClass("scroll-element_arrows_visible"),t.mousewheel=function(l){if(!t.isVisible||"x"===e&&s(l))return!0;if("y"===e&&!s(l))return a.x.mousewheel(l),!0;var i=-1*l.originalEvent.wheelDelta||l.originalEvent.detail,n=t.size-t.visible-t.offset;return(i>0&&n>f||0>i&&f>0)&&(f+=i,0>f&&(f=0),f>n&&(f=n),o.scrollTo=o.scrollTo||{},o.scrollTo[h]=f,setTimeout(function(){o.scrollTo&&(r.stop().animate(o.scrollTo,240,"linear",function(){f=r[h]()}),o.scrollTo=null)},1)),l.preventDefault(),!1},t.scroll.on("MozMousePixelScroll"+n,t.mousewheel).on("mousewheel"+n,t.mousewheel).on("mouseenter"+n,function(){f=r[h]()}),t.scroll.find(".scroll-arrow, .scroll-element_track").on("mousedown"+n,function(s){if(1!=s.which)return!0;d=1;var n={eventOffset:s["x"===e?"pageX":"pageY"],maxScrollValue:t.size-t.visible-t.offset,scrollbarOffset:t.scroll.bar.offset()["x"===e?"left":"top"],scrollbarSize:t.scroll.bar["x"===e?"outerWidth":"outerHeight"]()},a=0,v=0;return l(this).hasClass("scroll-arrow")?(d=l(this).hasClass("scroll-arrow_more")?1:-1,p=c.scrollStep*d,f=d>0?n.maxScrollValue:0):(d=n.eventOffset>n.scrollbarOffset+n.scrollbarSize?1:n.eventOffset<n.scrollbarOffset?-1:0,p=Math.round(.75*t.visible)*d,f=n.eventOffset-n.scrollbarOffset-(c.stepScrolling?1==d?n.scrollbarSize:0:Math.round(n.scrollbarSize/2)),f=r[h]()+f/t.kx),o.scrollTo=o.scrollTo||{},o.scrollTo[h]=c.stepScrolling?r[h]()+p:f,c.stepScrolling&&(i=function(){f=r[h](),clearInterval(v),clearTimeout(a),a=0,v=0},a=setTimeout(function(){v=setInterval(u,40)},c.duration+100)),setTimeout(function(){o.scrollTo&&(r.animate(o.scrollTo,c.duration),o.scrollTo=null)},1),o._handleMouseDown(i,s)}),t.scroll.bar.on("mousedown"+n,function(s){if(1!=s.which)return!0;var i=s["x"===e?"pageX":"pageY"],c=r[h]();return t.scroll.addClass("scroll-draggable"),l(document).on("mousemove"+n,function(l){var o=parseInt((l["x"===e?"pageX":"pageY"]-i)/t.kx,10);r[h](c+o)}),o._handleMouseDown(function(){t.scroll.removeClass("scroll-draggable"),f=r[h]()},s)}))}),l.each(a,function(l,e){var o="scroll-scroll"+l+"_visible",s="x"==l?a.y:a.x;e.scroll.removeClass(o),s.scroll.removeClass(o),i.removeClass(o)}),l.each(a,function(e,o){l.extend(o,"x"==e?{offset:parseInt(r.css("left"),10)||0,size:r.prop("scrollWidth"),visible:d.width()}:{offset:parseInt(r.css("top"),10)||0,size:r.prop("scrollHeight"),visible:d.height()})}),this._updateScroll("x",this.scrollx),this._updateScroll("y",this.scrolly),l.isFunction(c.onUpdate)&&c.onUpdate.apply(this,[r]),l.each(a,function(l,e){var o="x"===l?"left":"top",s="x"===l?"outerWidth":"outerHeight",t="x"===l?"width":"height",i=parseInt(r.css(o),10)||0,n=e.size,a=e.visible+i,d=e.scroll.size[s]()+(parseInt(e.scroll.size.css(o),10)||0);c.autoScrollSize&&(e.scrollbarSize=parseInt(d*a/n,10),e.scroll.bar.css(t,e.scrollbarSize+"px")),e.scrollbarSize=e.scroll.bar[s](),e.kx=(d-e.scrollbarSize)/(n-a)||1,e.maxScrollOffset=n-a}),r.scrollLeft(h.scrollLeft).scrollTop(h.scrollTop).trigger("scroll")},_getScroll:function(e){var o={advanced:['<div class="scroll-element">','<div class="scroll-element_corner"></div>','<div class="scroll-arrow scroll-arrow_less"></div>','<div class="scroll-arrow scroll-arrow_more"></div>','<div class="scroll-element_outer">','<div class="scroll-element_size"></div>','<div class="scroll-element_inner-wrapper">','<div class="scroll-element_inner scroll-element_track">','<div class="scroll-element_inner-bottom"></div>',"</div>","</div>",'<div class="scroll-bar">','<div class="scroll-bar_body">','<div class="scroll-bar_body-inner"></div>',"</div>",'<div class="scroll-bar_bottom"></div>','<div class="scroll-bar_center"></div>',"</div>","</div>","</div>"].join(""),simple:['<div class="scroll-element">','<div class="scroll-element_outer">','<div class="scroll-element_size"></div>','<div class="scroll-element_track"></div>','<div class="scroll-bar"></div>',"</div>","</div>"].join("")};return o[e]&&(e=o[e]),e||(e=o.simple),e="string"==typeof e?l(e).appendTo(this.wrapper):l(e),l.extend(e,{bar:e.find(".scroll-bar"),size:e.find(".scroll-element_size"),track:e.find(".scroll-element_track")}),e},_handleMouseDown:function(e,o){var s=this.namespace;return l(document).on("blur"+s,function(){l(document).add("body").off(s),e&&e()}),l(document).on("dragstart"+s,function(l){return l.preventDefault(),!1}),l(document).on("mouseup"+s,function(){l(document).add("body").off(s),e&&e()}),l("body").on("selectstart"+s,function(l){return l.preventDefault(),!1}),o&&o.preventDefault(),!1},_updateScroll:function(e,o){var s=this.container,r=this.containerWrapper||s,i="scroll-scroll"+e+"_visible",n="x"===e?this.scrolly:this.scrollx,c=parseInt(this.container.css("x"===e?"left":"top"),10)||0,a=this.wrapper,d=o.size,h=o.visible+c;o.isVisible=d-h>1,o.isVisible?(o.scroll.addClass(i),n.scroll.addClass(i),r.addClass(i)):(o.scroll.removeClass(i),n.scroll.removeClass(i),r.removeClass(i)),"y"===e&&(s.is("textarea")||h>d?r.css({height:h+t.scroll.height+"px","max-height":"none"}):r.css({"max-height":h+t.scroll.height+"px"})),(o.size!=s.prop("scrollWidth")||n.size!=s.prop("scrollHeight")||o.visible!=a.width()||n.visible!=a.height()||o.offset!=(parseInt(s.css("left"),10)||0)||n.offset!=(parseInt(s.css("top"),10)||0))&&(l.extend(this.scrollx,{offset:parseInt(s.css("left"),10)||0,size:s.prop("scrollWidth"),visible:a.width()}),l.extend(this.scrolly,{offset:parseInt(s.css("top"),10)||0,size:this.container.prop("scrollHeight"),visible:a.height()}),this._updateScroll("x"===e?"y":"x",n))}};var c=n;l.fn.scrollbar=function(e,o){return"string"!=typeof e&&(o=e,e="init"),"undefined"==typeof o&&(o=[]),l.isArray(o)||(o=[o]),this.not("body, .scroll-wrapper").each(function(){var s=l(this),r=s.data(t.data.name);(r||"init"===e)&&(r||(r=new c(s)),r[e]&&r[e].apply(r,o))}),this},l.fn.scrollbar.options=i;var a=function(){var l=0,e=0;return function(o){var s,i,n,c,d,h,p;for(s=0;s<t.scrolls.length;s++)c=t.scrolls[s],i=c.container,n=c.options,d=c.wrapper,h=c.scrollx,p=c.scrolly,(o||n.autoUpdate&&d&&d.is(":visible")&&(i.prop("scrollWidth")!=h.size||i.prop("scrollHeight")!=p.size||d.width()!=h.visible||d.height()!=p.visible))&&(c.init(),n.debug&&(window.console&&console.log({scrollHeight:i.prop("scrollHeight")+":"+c.scrolly.size,scrollWidth:i.prop("scrollWidth")+":"+c.scrollx.size,visibleHeight:d.height()+":"+c.scrolly.visible,visibleWidth:d.width()+":"+c.scrollx.visible},!0),e++));r&&e>10?(window.console&&console.log("Scroll updates exceed 10"),a=function(){}):(clearTimeout(l),l=setTimeout(a,300))}}();window.angular&&!function(l){l.module("jQueryScrollbar",[]).provider("jQueryScrollbar",function(){var e=i;return{setOptions:function(o){l.extend(e,o)},$get:function(){return{options:l.copy(e)}}}}).directive("jqueryScrollbar",["jQueryScrollbar","$parse",function(l,e){return{restrict:"AC",link:function(o,s,r){var t=e(r.jqueryScrollbar),i=t(o);s.scrollbar(i||l.options).on("$destroy",function(){s.scrollbar("destroy")})}}}])}(window.angular)});
/*AUDIO PLAYER*/
!function(e,t,a,i){var n="ontouchstart"in t,o=n?"touchstart":"mousedown",u=n?"touchmove":"mousemove",l=n?"touchcancel":"mouseup",d=function(e){var t=Math.floor(e/3600),a=Math.floor(e%3600/60),i=Math.ceil(e%3600%60);return(0==t?"":t>0&&t.toString().length<2?"0"+t+":":t+":")+(a.toString().length<2?"0"+a:a)+":"+(i.toString().length<2?"0"+i:i)},r=function(e){var t=a.createElement("audio");return!(!t.canPlayType||!t.canPlayType("audio/"+e.split(".").pop().toLowerCase()+";").replace(/no/,""))};e.fn.audioPlayer=function(t){t=e.extend({classPrefix:"audioplayer",strPlay:"",strPause:"",strVolume:""},t);var a={},i={playPause:"playpause",playing:"playing",time:"time",timeCurrent:"time-current",timeDuration:"time-duration",bar:"bar",barLoaded:"bar-loaded",barPlayed:"bar-played",volume:"volume",volumeButton:"volume-button",volumeAdjust:"volume-adjust",noVolume:"novolume",mute:"mute",mini:"mini"};for(var s in i)a[s]=t.classPrefix+"-"+i[s];return this.each(function(){if("audio"!=e(this).prop("tagName").toLowerCase())return!1;var i=e(this),s=i.attr("src"),v=""===(v=i.get(0).getAttribute("autoplay"))||"autoplay"===v,m=""===(m=i.get(0).getAttribute("loop"))||"loop"===m,c=!1;void 0===s?i.find("source").each(function(){if(void 0!==(s=e(this).attr("src"))&&r(s))return c=!0,!1}):r(s)&&(c=!0);var f=e('<div class="'+t.classPrefix+'">'+(c?e("<div>").append(i.eq(0).clone()).html():'<embed src="'+s+'" width="0" height="0" volume="100" autostart="'+v.toString()+'" loop="'+m.toString()+'" />')+'<div class="'+a.playPause+'" title="'+t.strPlay+'"><a href="#">'+t.strPlay+"</a></div></div>"),h=(h=c?f.find("audio"):f.find("embed")).get(0);if(c){f.find("audio").css({width:0,height:0,visibility:"hidden"}),f.append('<div class="'+a.time+" "+a.timeCurrent+'"></div><div class="'+a.bar+'"><div class="'+a.barLoaded+'"></div><div class="'+a.barPlayed+'"></div></div><div class="'+a.time+" "+a.timeDuration+'"></div><div class="'+a.volume+'"><div class="'+a.volumeButton+'" title="'+t.strVolume+'"><a href="#">'+t.strVolume+'</a></div><div class="'+a.volumeAdjust+'"><div><div></div></div></div></div>');var p=f.find("."+a.bar),y=f.find("."+a.barPlayed),g=f.find("."+a.barLoaded),b=f.find("."+a.timeCurrent),P=f.find("."+a.timeDuration),C=f.find("."+a.volumeButton),w=f.find("."+a.volumeAdjust+" > div"),E=0,L=function(e){theRealEvent=n?e.originalEvent.touches[0]:e,h.currentTime=Math.round(h.duration*(theRealEvent.pageX-p.offset().left)/p.width())},x=function(e){theRealEvent=n?e.originalEvent.touches[0]:e,h.volume=Math.abs((theRealEvent.pageX-w.offset().left)/w.width())},M=setInterval(function(){h.buffered.length>0&&(g.width(h.buffered.end(0)/h.duration*100+"%"),h.buffered.end(0)>=h.duration&&clearInterval(M))},100),S=h.volume,j=h.volume=.111;Math.round(1e3*h.volume)/1e3==j?h.volume=S:f.addClass(a.noVolume),P.html("&hellip;"),b.text(d(0)),h.addEventListener("loadeddata",function(){P.text(d(h.duration)),w.find("div").width(100*h.volume+"%"),E=h.volume}),h.addEventListener("timeupdate",function(){b.text(d(h.currentTime)),y.width(h.currentTime/h.duration*100+"%")}),h.addEventListener("volumechange",function(){w.find("div").width(100*h.volume+"%"),h.volume>0&&f.hasClass(a.mute)&&f.removeClass(a.mute),h.volume<=0&&!f.hasClass(a.mute)&&f.addClass(a.mute)}),h.addEventListener("ended",function(){f.removeClass(a.playing)}),p.on(o,function(e){L(e),p.on(u,function(e){L(e)})}).on(l,function(){p.unbind(u)}),C.on("click",function(){return f.hasClass(a.mute)?(f.removeClass(a.mute),h.volume=E):(f.addClass(a.mute),E=h.volume,h.volume=0),!1}),w.on(o,function(e){x(e),w.on(u,function(e){x(e)})}).on(l,function(){w.unbind(u)})}else f.addClass(a.mini);v&&f.addClass(a.playing),f.find("."+a.playPause).on("click",function(){return f.hasClass(a.playing)?(e(this).attr("title",t.strPlay).find("a").html(t.strPlay),f.removeClass(a.playing),c?h.pause():h.Stop()):(e(this).attr("title",t.strPause).find("a").html(t.strPause),f.addClass(a.playing),c?h.play():h.Play()),!1}),i.replaceWith(f)}),this}}(jQuery,window,document);
/*Light Box*/
!function(e){"use strict";if(void 0!==e)if(e.fn.jquery.match(/-ajax/))"console"in window&&window.console.info("Featherlight needs regular jQuery, not the slim version.");else{var t=[],n=function(n){return t=e.grep(t,function(e){return e!==n&&e.$instance.closest("body").length>0})},r={allow:1,allowfullscreen:1,frameborder:1,height:1,longdesc:1,marginheight:1,marginwidth:1,mozallowfullscreen:1,name:1,referrerpolicy:1,sandbox:1,scrolling:1,src:1,srcdoc:1,style:1,webkitallowfullscreen:1,width:1},i={keyup:"onKeyUp",resize:"onResize"},o=function(t){e.each(s.opened().reverse(),function(){if(!t.isDefaultPrevented()&&!1===this[i[t.type]](t))return t.preventDefault(),t.stopPropagation(),!1})},a=function(t){if(t!==s._globalHandlerInstalled){s._globalHandlerInstalled=t;var n=e.map(i,function(e,t){return t+"."+s.prototype.namespace}).join(" ");e(window)[t?"on":"off"](n,o)}};s.prototype={constructor:s,namespace:"featherlight",targetAttr:"data-featherlight",variant:null,resetCss:!1,background:null,openTrigger:"click",closeTrigger:"click",filter:null,root:"body",openSpeed:250,closeSpeed:250,closeOnClick:"background",closeOnEsc:!0,closeIcon:"&#10005;",loading:"",persist:!1,otherClose:null,beforeOpen:e.noop,beforeContent:e.noop,beforeClose:e.noop,afterOpen:e.noop,afterContent:e.noop,afterClose:e.noop,onKeyUp:e.noop,onResize:e.noop,type:null,contentFilters:["jquery","image","html","ajax","iframe","text"],setup:function(t,n){"object"!=typeof t||t instanceof e!=!1||n||(n=t,t=void 0);var r=e.extend(this,n,{target:t}),i=r.resetCss?r.namespace+"-reset":r.namespace,o=e(r.background||['<div class="'+i+"-loading "+i+'">','<div class="'+i+'-content">','<button class="'+i+"-close-icon "+r.namespace+'-close" aria-label="Close">',r.closeIcon,"</button>",'<div class="'+r.namespace+'-inner">'+r.loading+"</div>","</div>","</div>"].join("")),a="."+r.namespace+"-close"+(r.otherClose?","+r.otherClose:"");return r.$instance=o.clone().addClass(r.variant),r.$instance.on(r.closeTrigger+"."+r.namespace,function(t){if(!t.isDefaultPrevented()){var n=e(t.target);("background"===r.closeOnClick&&n.is("."+r.namespace)||"anywhere"===r.closeOnClick||n.closest(a).length)&&(r.close(t),t.preventDefault())}}),this},getContent:function(){if(!1!==this.persist&&this.$content)return this.$content;var t=this,n=this.constructor.contentFilters,r=function(e){return t.$currentTarget&&t.$currentTarget.attr(e)},i=r(t.targetAttr),o=t.target||i||"",a=n[t.type];if(!a&&o in n&&(a=n[o],o=t.target&&i),o=o||r("href")||"",!a)for(var s in n)t[s]&&(a=n[s],o=t[s]);if(!a){var c=o;if(o=null,e.each(t.contentFilters,function(){return(a=n[this]).test&&(o=a.test(c)),!o&&a.regex&&c.match&&c.match(a.regex)&&(o=c),!o}),!o)return"console"in window&&window.console.error("Featherlight: no content filter found "+(c?' for "'+c+'"':" (no target specified)")),!1}return a.process.call(t,o)},setContent:function(t){return this.$instance.removeClass(this.namespace+"-loading"),this.$instance.toggleClass(this.namespace+"-iframe",t.is("iframe")),this.$instance.find("."+this.namespace+"-inner").not(t).slice(1).remove().end().replaceWith(e.contains(this.$instance[0],t[0])?"":t),this.$content=t.addClass(this.namespace+"-inner"),this},open:function(n){var r=this;if(r.$instance.hide().appendTo(r.root),!(n&&n.isDefaultPrevented()||!1===r.beforeOpen(n))){n&&n.preventDefault();var i=r.getContent();if(i)return t.push(r),a(!0),r.$instance.fadeIn(r.openSpeed),r.beforeContent(n),e.when(i).always(function(e){r.setContent(e),r.afterContent(n)}).then(r.$instance.promise()).done(function(){r.afterOpen(n)})}return r.$instance.detach(),e.Deferred().reject().promise()},close:function(t){var r=this,i=e.Deferred();return!1===r.beforeClose(t)?i.reject():(0===n(r).length&&a(!1),r.$instance.fadeOut(r.closeSpeed,function(){r.$instance.detach(),r.afterClose(t),i.resolve()})),i.promise()},resize:function(e,t){if(e&&t){this.$content.css("width","").css("height","");var n=Math.max(e/(this.$content.parent().width()-1),t/(this.$content.parent().height()-1));n>1&&(n=t/Math.floor(t/n),this.$content.css("width",e/n+"px").css("height",t/n+"px"))}},chainCallbacks:function(t){for(var n in t)this[n]=e.proxy(t[n],this,e.proxy(this[n],this))}},e.extend(s,{id:0,autoBind:"[data-featherlight]",defaults:s.prototype,contentFilters:{jquery:{regex:/^[#.]\w/,test:function(t){return t instanceof e&&t},process:function(t){return!1!==this.persist?e(t):e(t).clone(!0)}},image:{regex:/\.(png|jpg|jpeg|gif|tiff?|bmp|svg)(\?\S*)?$/i,process:function(t){var n=e.Deferred(),r=new Image,i=e('<img src="'+t+'" alt="" class="'+this.namespace+'-image" />');return r.onload=function(){i.naturalWidth=r.width,i.naturalHeight=r.height,n.resolve(i)},r.onerror=function(){n.reject(i)},r.src=t,n.promise()}},html:{regex:/^\s*<[\w!][^<]*>/,process:function(t){return e(t)}},ajax:{regex:/./,process:function(t){var n=e.Deferred(),r=e("<div></div>").load(t,function(e,t){"error"!==t&&n.resolve(r.contents()),n.fail()});return n.promise()}},iframe:{process:function(t){var n=new e.Deferred,i=e("<iframe/>"),o=function(e,t){var n={},r=new RegExp("^"+t+"([A-Z])(.*)");for(var i in e){var o=i.match(r);o&&(n[(o[1]+o[2].replace(/([A-Z])/g,"-$1")).toLowerCase()]=e[i])}return n}(this,"iframe"),a=function(e,t){var n={};for(var r in e)r in t&&(n[r]=e[r],delete e[r]);return n}(o,r);return i.hide().attr("src",t).attr(a).css(o).on("load",function(){n.resolve(i.show())}).appendTo(this.$instance.find("."+this.namespace+"-content")),n.promise()}},text:{process:function(t){return e("<div>",{text:t})}}},functionAttributes:["beforeOpen","afterOpen","beforeContent","afterContent","beforeClose","afterClose"],readElementConfig:function(t,n){var r=this,i=new RegExp("^data-"+n+"-(.*)"),o={};return t&&t.attributes&&e.each(t.attributes,function(){var t=this.name.match(i);if(t){var n=this.value,a=e.camelCase(t[1]);if(e.inArray(a,r.functionAttributes)>=0)n=new Function(n);else try{n=JSON.parse(n)}catch(e){}o[a]=n}}),o},extend:function(t,n){var r=function(){this.constructor=t};return r.prototype=this.prototype,t.prototype=new r,t.__super__=this.prototype,e.extend(t,this,n),t.defaults=t.prototype,t},attach:function(t,n,r){var i=this;"object"!=typeof n||n instanceof e!=!1||r||(r=n,n=void 0);var o,a=(r=e.extend({},r)).namespace||i.defaults.namespace,s=e.extend({},i.defaults,i.readElementConfig(t[0],a),r),c=function(a){var c=e(a.currentTarget),l=e.extend({$source:t,$currentTarget:c},i.readElementConfig(t[0],s.namespace),i.readElementConfig(a.currentTarget,s.namespace),r),u=o||c.data("featherlight-persisted")||new i(n,l);"shared"===u.persist?o=u:!1!==u.persist&&c.data("featherlight-persisted",u),l.$currentTarget.blur&&l.$currentTarget.blur(),u.open(a)};return t.on(s.openTrigger+"."+s.namespace,s.filter,c),{filter:s.filter,handler:c}},current:function(){var e=this.opened();return e[e.length-1]||null},opened:function(){var r=this;return n(),e.grep(t,function(e){return e instanceof r})},close:function(e){var t=this.current();if(t)return t.close(e)},_onReady:function(){var t=this;if(t.autoBind){var n=e(t.autoBind);n.each(function(){t.attach(e(this))}),e(document).on("click",t.autoBind,function(r){if(!r.isDefaultPrevented()){var i=e(r.currentTarget);if(n.length!==(n=n.add(i)).length){var o=t.attach(i);(!o.filter||e(r.target).parentsUntil(i,o.filter).length>0)&&o.handler(r)}}})}},_callbackChain:{onKeyUp:function(t,n){return 27===n.keyCode?(this.closeOnEsc&&e.featherlight.close(n),!1):t(n)},beforeOpen:function(t,n){return e(document.documentElement).addClass("with-featherlight"),this._previouslyActive=document.activeElement,this._$previouslyTabbable=e("a, input, select, textarea, iframe, button, iframe, [contentEditable=true]").not("[tabindex]").not(this.$instance.find("button")),this._$previouslyWithTabIndex=e("[tabindex]").not('[tabindex="-1"]'),this._previousWithTabIndices=this._$previouslyWithTabIndex.map(function(t,n){return e(n).attr("tabindex")}),this._$previouslyWithTabIndex.add(this._$previouslyTabbable).attr("tabindex",-1),document.activeElement.blur&&document.activeElement.blur(),t(n)},afterClose:function(t,n){var r=t(n),i=this;return this._$previouslyTabbable.removeAttr("tabindex"),this._$previouslyWithTabIndex.each(function(t,n){e(n).attr("tabindex",i._previousWithTabIndices[t])}),this._previouslyActive.focus(),0===s.opened().length&&e(document.documentElement).removeClass("with-featherlight"),r},onResize:function(e,t){return this.resize(this.$content.naturalWidth,this.$content.naturalHeight),e(t)},afterContent:function(e,t){var n=e(t);return this.$instance.find("[autofocus]:not([disabled])").focus(),this.onResize(t),n}}}),e.featherlight=s,e.fn.featherlight=function(e,t){return s.attach(this,e,t),this},e(document).ready(function(){s._onReady()})}else"console"in window&&window.console.info("Too much lightness, Featherlight needs jQuery.");function s(e,t){if(!(this instanceof s)){var n=new s(e,t);return n.open(),n}this.id=s.id++,this.setup(e,t),this.chainCallbacks(s._callbackChain)}}(jQuery);
/*imagesloaded*/
!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return n.indexOf(t)==-1&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{},n=i[e]=i[e]||{};return n[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return n!=-1&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){i=i.slice(0),t=t||[];for(var n=this._onceEvents&&this._onceEvents[e],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(e,r),delete n[r]),r.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return t(e,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t)e[i]=t[i];return e}function n(e){if(Array.isArray(e))return e;var t="object"==typeof e&&"number"==typeof e.length;return t?d.call(e):[e]}function o(e,t,r){if(!(this instanceof o))return new o(e,t,r);var s=e;return"string"==typeof e&&(s=document.querySelectorAll(e)),s?(this.elements=n(s),this.options=i({},this.options),"function"==typeof t?r=t:i(this.options,t),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(this.check.bind(this))):void a.error("Bad element for imagesLoaded "+(s||e))}function r(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}var h=e.jQuery,a=e.console,d=Array.prototype.slice;o.prototype=Object.create(t.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&u[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var u={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},o.prototype.addImage=function(e){var t=new r(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var i=new s(e,t);this.images.push(i)},o.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},o.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},r.prototype=Object.create(t.prototype),r.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},r.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(h=t,h.fn.imagesLoaded=function(e,t){var i=new o(this,e,t);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});

/*
* FlowType.JS v1.1
* Copyright 2013-2014, Simple Focus http://simplefocus.com/
*
* FlowType.JS by Simple Focus (http://simplefocus.com/)
* is licensed under the MIT License. Read a copy of the
* license in the LICENSE.txt file or at
* http://choosealicense.com/licenses/mit
*
* Thanks to Giovanni Difeterici (http://www.gdifeterici.com/)
*/

(function($) {
   $.fn.flowtype = function(options) {

// Establish default settings/variables
// ====================================
      var settings = $.extend({
         maximum   : 9999,
         minimum   : 1,
         maxFont   : 9999,
         minFont   : 1,
         fontRatio : 35
      }, options),

// Do the magic math
// =================
      changes = function(el) {
         var $el = $(el),
            elw = $el.width(),
            width = elw > settings.maximum ? settings.maximum : elw < settings.minimum ? settings.minimum : elw,
            fontBase = width / settings.fontRatio,
            fontSize = fontBase > settings.maxFont ? settings.maxFont : fontBase < settings.minFont ? settings.minFont : fontBase;
         $el.css('font-size', fontSize + 'px');
      };

// Make the magic visible
// ======================
      return this.each(function() {
      // Context for resize callback
         var that = this;
      // Make changes upon resize
         $(window).resize(function(){changes(that);});
      // Set changes on load
         changes(this);
      });
   };
}(jQuery));


(function($) {
  "use strict";
$(document).ready(function() {

$('.id_sec .btn').on('click',function(){
	$('.id_results > *').hide();
	var thisuser = $('.id_sec .form-control').val().replace('@','').toLowerCase();
	if(!$('.id_sec').hasClass('loading')){
		$('.id_sec .btn').html('<i class="fa fa-spinner fa-pulse fa-fw"></i> Ищем');
		$('.id_sec').addClass('loading')
		var url = 'https://kozyon.com/crm/php/rare/ig/ig.php?user=kozyon';
		$.ajax({
		  url: url,
		  cache: false,
		  error: function(){
		  	$('.id_results .err').show();
		  },
		  success: function(html){
		  	html = JSON.parse(html);
		  	console.log(html)
		  	var found = 0;
		  	$.each(html, function (index, value) {
		  		if(thisuser==value['username']){
		  			found = 1;
		  		}
		  	});
		  	if(found){
		  		$('.id_results .success').show();
		  		//$('.id_wrapper').removeClass('second')
		  		$('.id_wrapper').addClass('third')
		  		$([document.documentElement, document.body]).animate({
		        	scrollTop: $('.id_block.s3').offset().top-70
		    	}, 300);
		  	} else {
		  		$('.id_results .alert.no b').html('@'+thisuser)
		  		$('.id_results .alert.no').show();
		  	}
		  	$('.id_sec .btn').html('Далее');
			$('.id_sec').removeClass('loading')
		  }
		});
	}
})

$('.id_instcheck').on( "click", function(e) {
	var datacount = Number($(this).attr('data-count'))+1;
	$(this).attr('data-count',datacount);
	if(datacount==2){
		$('.id_wrapper').addClass('second');
    	$('.id_block.s1').removeClass('ready');
	}
})
$( ".id_instsub.over" ).on( "click", function(e) {
	e.preventDefault();
	setTimeout(function() {
    	$('.id_wrapper').addClass('second');
    	$('.id_block.s1').removeClass('ready');
	}, 5000);
	window.location.href = $(this).attr('href');
});
//$('.id_wrapper').addClass('open').addClass('ready').addClass('second')
//$('.id_block').addClass('done')
$('.id_show').on('click',function(){
	$(this).addClass('open');
	$('.id_wrapper').addClass('open');

	$([document.documentElement, document.body]).animate({
        scrollTop: $(".id_show").offset().top-50
    }, 300);
    setTimeout(function() {
    	$('body').addClass('disablescroll')
	}, 300);
	setTimeout(function() {
    	$('.id_block.s1').addClass('ready');
    	$('.id_block.s1').addClass('done');
	}, 600); 
	setTimeout(function() {
		$([document.documentElement, document.body]).animate({
        	scrollTop: $('.id_block.s2').offset().top-20
    	}, 300);
	}, 2000); 
	setTimeout(function() {
		$('.id_block.s1').removeClass('ready');
    	$('.id_block.s2').addClass('ready');
    	$('.id_block.s2').addClass('done');
	}, 2600); 
	setTimeout(function() {
		$([document.documentElement, document.body]).animate({
        	scrollTop: $('.id_block.s3').offset().top-20
    	}, 300);
	}, 4000); 
	setTimeout(function() {
		$('.id_block.s2').removeClass('ready');
    	$('.id_block.s3').addClass('ready');
    	$('.id_block.s3').addClass('done');
	}, 4600); 
	setTimeout(function() {
		$([document.documentElement, document.body]).animate({
        	scrollTop: $('.id_block.s1').offset().top-70
    	}, 300);
    	$('.id_block.s3').removeClass('ready');
    	setTimeout(function() {
    		$('.id_wrapper').addClass('ready');
    		$('body').removeClass('disablescroll')
	    	$('.id_block.s1').addClass('ready');
	    	setTimeout(function() {
    			$('.id_block.s1').addClass('wow');
	    	}, 400);
	    }, 400);
	}, 6000);
	

})

window.myrand = function(min,max){
	var num = Math.floor((Math.random() * max) + min);
	return num;
}

window.is_test = $.query.get('test');
window.php_ajax_call_reload = 0;
window.php_ajax_call_run = 0;
window.last_request = '';
window.allow_consolelog = 0
window.registeredevents = [];
window.mainrequesturl = 'https://kozyon.com/crm/php/account.php';
window.php_ajax_call = function(array,consoler=1,includeadmin=0,test=0,requestnumb=0){
	if(consoler){
		if(allow_consolelog){
			console.log(array);
		}
	}
	php_ajax_call_run = 1;
	last_request = '';
	var data = {'bot_id':$.query.get('id'),'type':'php_ajax_call','data':array,'actual_link':window.location.href,'includeadmin':includeadmin,'requestnumb':requestnumb} 
	if(test){
		data['test'] = 1;
	}
	var ajaxer = {
	    url: mainrequesturl,
	    data: data,
	    type: "POST",
	    success: function(html){
	    	//alert(html);
	    	if(consoler){
	    		if(allow_consolelog){
	    			console.log(html)
	    		}
	    	}
	    	last_request = html;
	    	window['phpvar'+requestnumb] = html;
	    	if(requestnumb){
	    		$( document ).trigger( "php"+requestnumb, [ JSON.parse(html)['code'] ] );
	    	}
	    	//if(!is_test){
				if(php_ajax_call_reload){
				    location.reload();
				}
			//}
			$(document).off("php"+requestnumb);
			php_ajax_call_run = 0;
	    }
	}
	$.ajax(ajaxer);
}
function set_url(newUrl){
	window.history.pushState({path:newUrl},'',newUrl);
}

		function eval_clicked(obj,event){

			if(obj.attr('href')!=undefined&&obj.attr('href')){
			} else {
				event.preventDefault();
			}		
			if(!obj.hasClass('dis')){
				var objbutton = obj;
				objbutton.addClass('dis')

				var text = globalevals[obj.attr('data-eval')];
				var allow = 1;
				if(text){

					obj.closest('form.ajax_form').find('.form-group.checkbox').each(function(){
						var string = '';
						$(this).find('input[type="checkbox"]:checked').each(function(){
							string = string+$(this).val()+',';
							console.log($(this).find('input[type="checkbox"]:checked'))
						})
						string = string.slice(0,-1);
						$(this).find('.form-control').val(string)
					})
					obj.closest('form.ajax_form').find('.form-control').each(function(){
						var groupholder = $(this).closest('.form-group');
						//tinymce.get("myTextarea").getContent()

						if(groupholder.attr('data-showkey')==undefined||groupholder.attr('data-showkey')&&groupholder.hasClass('shown')){
							if($(this).attr('data-empty')==undefined||$(this).attr('data-empty')!=undefined&&$(this).val()){
								var id = $(this).attr('id')
								if (text.indexOf("{"+id+"}") >= 0){
									var string = '\\{'+id+'\\}';
									var regex = new RegExp(string, "igm");
									var thiser = $(this);
									var thiserval = (thiser.hasClass('tinymce')?tinymce.get(thiser.attr('id')).getContent():thiser.val());
									var trimStr = $.trim(escapeNewlines(thiserval));
									text = text.replace(regex, trimStr);
								}
							} else {
								objbutton.removeClass('dis')
								alert($(this).attr('data-empty'))
								allow = 0;
							}
						if($(this).attr('data-length')!=undefined&&$(this).attr('data-length')&&Number($(this).val())>Number($(this).attr('data-length'))  ) {
								objbutton.removeClass('dis')
								alert($(this).attr('data-lenmes'))
								allow = 0;
							}
						}
					});
					obj.closest('form.ajax_form').find('.form-group.radio').each(function(){
						if($(this).find('.custom-control').attr('data-empty')==undefined||$(this).find('.custom-control').attr('data-empty')!=undefined&&$(this).find('[type="radio"]:checked').length){
							var id = $(this).find('[type="radio"]:checked').attr('name')
							if (text.indexOf("{"+id+"}") >= 0){
								var string = '\\{'+id+'\\}';
								var regex = new RegExp(string, "igm");
								text = text.replace(regex, $(this).find('[type="radio"]:checked').val());
							}
						} else {
							objbutton.removeClass('dis')
							//alert($(this).find('.custom-control').attr('data-empty'))
							allow = 0;
						}
					}) 
					obj.closest('form.ajax_form').find('.form-group.toggle').each(function(){

							var id = $(this).find('[type="checkbox"]').attr('id')
							if (text.indexOf("{"+id+"}") >= 0){
								var string = '\\{'+id+'\\}';
								var regex = new RegExp(string, "igm");
								text = text.replace(regex, ($(this).find('[type="checkbox"]:checked').length?1:0));
							}
					})
				}
				if(allow){
					eval(text);

				}
			}
		}



//******************************************************************************
// 									START 
//****************************************************************************** 


window.wait_for_load = function(){

function activate_colorpicker(){
	$('input.colorpick').each(function(){
		var obj = $(this);
		var id = obj.attr('id')
		var colorpickin = obj.closest('.form-group').find('.colorpickin')
		obj.ColorPicker({onBeforeShow: function () {
			obj.ColorPickerSetColor(this.value);
	},onChange: function (hsb, hex, rgb) {
			colorpickin.css('backgroundColor', '#' + hex);
			obj.val('#'+hex)
		}});
	})
}
activate_colorpicker();



if(!(typeof(globalevals) != "undefined" && globalevals !== null) ){
	window.globalevals = {};
}
window.check_eval = function(){
	$('[data-evalnum]:not(.taken)').each(function(){
		var thiser = $(this); 
		var evalnum = thiser.attr('data-evalnum')
		globalevals[evalnum] = thiser.text();
		thiser.empty();
		thiser.addClass('taken')
	});
	if($('.user_info[data-crmid="19"]').length){
		console.log(globalevals);
	}
}
check_eval();



$('.achive_opener').on('click',function(){
	var holder = $(this).closest('.acher_holder');
	if(holder.hasClass('open')){
		holder.removeClass('open')
	} else {
		holder.addClass('open')
		var inn = holder.find(".acher_holder_in")
		holder.css({'padding-bottom':inn.find('.hgtcount').outerHeight(true)+'px'})
	}
	
})

$('input').keydown(function(event){
    if(event.keyCode == 13) {
      event.preventDefault();
      var par = $(this).closest('form.ajax_form');
      if( par.length ){
      	par.find('[data-eval]').click();
      }
      return false; 
    }
});

$('[data-featherlight]').featherlight({type: 'image'});

if($('.telegramlink').length){
	var go = $('.telegramlink').attr('data-go')
	var utm = $('.telegramlink').attr('data-utm')
	if(utm&&utm!='0'){
		window.cookiename1 = window.location.href.replace('/','');
		window.utmcookie = Cookies.get(cookiename1);
		console.log(cookiename1)
		var restutm = utm.replace(/\d+/g, '')
		if(restutm){
			utm = '';
		}
		if(!utmcookie){
			php_ajax_call("add_to_ant(array('source'=>'fun','funcgroupid'=>"+go+",'elem'=>1,'value'=>1,'type'=>'add'  ));add_to_ant(array('source'=>'funnel','funcgroupid'=>"+go+",'key'=>'visit','value'=>1,'type'=>'add'));"+(utm?"set_utm_stat('visit',"+utm+");":""),0,1,0,'utm');
			$( document ).on( "php"+'utm', {
				crm: 0,
				clickedobj:0,
			}, function( event, arg_request, arg2 ) {
				if(last_request.indexOf("errorrr") >= 0){
					$('.pagebuilder .container').empty();
					$('.pagebuilder .container').append("<div style='padding: 20px;'>Ошибка: В CRM не зарегистрирована UTM ссылка '"+utm+"'. Пожалуйста зарегистрируйте ее по адресу <a href='https://kozyon.com/crm/?page=utm'>https://kozyon.com/crm/?page=utm</a> . А если ты наш клиент и видишь это сообщение пожалуйста пришли скриншот этого сообщения в телеграм <a href='tg://resolve?domain=username'>@kozyon</a> Денису Козионову - основателю бренда 😁 Я скажу тебе ГИГАНСТКОЕ СПАСИБО!!!</div>");
				} else {
					Cookies.set(cookiename1, 1, { expires: 5,path: '/' });
				}
				/*
				var response = JSON.parse(arg_request)
				var confirmation_url = response['confirmation']['confirmation_url'];
				if(response['confirmation']['confirmation_url']==undefined){
					alert('Что-то пошло не так, нужно перезагрузить страницу, если проблема сохраняется пришли, пожалуйста, скриншот в телегу Денису @kozyon')
				}
				paymentform.attr('href',confirmation_url)*/
			});
		}
	}

	//
}


//******************************************************************************
// 									AUDIO
//****************************************************************************** 
if($('audio').length){
	$('audio').each(function(){
		$(this).attr('id','aud'+myrand(0,5000)+myrand(0,5000) )
	})
	$('audio').audioPlayer();
	

	$('.audioplayer').wrap('<div class="kozyplayer noselect neros nerol"></div>')
	$('.audioplayer').each(function(){
		var link = glava_koz;
		if($(this).closest('.elem_wrap.audio').length){
			link = $(this).closest('.elem_wrap').find('.audio_ava').attr('data-ava')
		}
		$(this).closest('.elem_wrap').find('.audioplayer').prepend('<div class="audioava" style="background-image:url('+link+');"></div>')
	})
	$('.audioplayer-playpause').wrap('<div class="kozaudiobut nerol neros"></div>')
	$('.audioplayer-volume').after('<div class="playerx2">Скорость x2</div>')

	$('.playerx2').on('click',function(){
		var vid = $(this).closest('.kozyplayer').find('audio').attr('id')
		/**/
		var vid = document.getElementById(vid)
		if($(this).hasClass('active')){
			vid.playbackRate = 1;
		} else {
			vid.playbackRate = 2;
		}
		$(this).toggleClass('active')
		
	})
}


//******************************************************************************
// 									DEFENCE
//****************************************************************************** 
window.is_mobile_var = 0;
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	is_mobile_var = 1;
}


function blockcont(){
	$('html').remove();
}
function IEdetection() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        return ('IE ' + parseInt(ua.substring(
        	msie + 5, ua.indexOf('.', msie)), 10));
    }
    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        var rv = ua.indexOf('rv:');
        return ('IE ' + parseInt(ua.substring(
            rv + 3, ua.indexOf('.', rv)), 10));
    }
    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        return ('IE ' + parseInt(ua.substring(
            edge + 5, ua.indexOf('.', edge)), 10));
    }
    return false;
}

//block ie for school
if($('body').hasClass('school')){
	if(IEdetection()){
		blockcont();
		alert('В курсы нельзя заходить из этого браузера, скачайте Google Chrome, Opera или Safari');
	} 
	if(3>5&&!$('.user_info[data-crmid="19"]').length&&!$.query.get('test')&&!is_mobile_var){
		console.log(window.devtools)
		window.addEventListener('devtoolschange', event => {

			if(event.detail.isOpen){
				//alert(event.detail.isOpen)
				blockcont();
			}
		});
		var devtools = function() {};
		devtools.toString = function() {
		  if (this.opened) {
		    blockcont();
		  }
		  this.opened = true;
		}
		console.log('%c', devtools);
	}
}

//******************************************************************************
// 									LIKES
//****************************************************************************** 
window.reload_content = function(obj){
	var elemid = obj.attr('data-elemid');
	var id = obj.attr('data-id');
	var pageid = obj.attr('data-pageid');
	var botid = obj.attr('data-botid');
	var funcgroupid = obj.attr('data-funcgroupid');

	php_ajax_call("get_crm_elem("+elemid+","+id+","+pageid+","+botid+","+funcgroupid+");",0,1,0,"get_crm_elem"+elemid);
	$( document ).on( "php"+"get_crm_elem"+elemid, {
						crm: 0,
						id:$(this).attr('data-id'),
					}, function( event, arg1, arg2 ) {
						obj.empty();
						var del = obj.closest('.elem_wrap')
						del.before(arg1)
						$('.resptxt').flowtype();
						tooltip_activate();
						del.remove();
	});
}

if($('.like_but').length){
	$('body').on('click','.like_but:not(.active)',function(){
		$('.like_but').removeClass('active')
		$(this).addClass('active') 
		$(this).closest('.like_wrap').addClass('clicked').addClass('load')
		var num = $(this).find('.like_num').text()
		$(this).find('.like_num').text(1+Number(num))
	})
}


//******************************************************************************
// 									MAP
//****************************************************************************** 
if($('.map_one').length){

if($('.map_wrapper').length){
	window.scroll_mapvar = 0;
	$(window).on('scroll',function(){
		scroll_mapvar++;
		if(scroll_mapvar%20==0){
			var obj = $('.map_open.active');
			if( obj.length ){
				if($(document).scrollTop()>(obj.offset().top+obj.height() )|| ($(document).scrollTop()+$(window).height() )<obj.offset().top ){
					close_map_open();
				}
			}
			
		}
	})
}

function close_map_open(){
	var obj = $('.map_open.active')
	obj.closest('.map_one').removeClass('opened')
	obj.removeClass('active') 
	$('.map_wrapper').removeClass('opened')
}
$('.map_open_close').on('click',function(){
	close_map_open();
})

$('.map_one .map_open').on('click',function(){
	var fulltext = $(this).find('.mapptxt').text()
	var map_p = $(this).find('p');
	map_p.addClass('fastfinish')
	setTimeout(function() {
		map_p.addClass('finishtick')
	}, 500);
	
	map_p.html('<span class="wrap">'+fulltext+'</span>')
})	
$('.map_one .map_click').on('click',function(){
	var map_one = $(this).closest('.map_one')
	if(map_one.hasClass('opened')){
		close_map_open();
	} else {
		close_map_open();
		var map_wrapper = $(this).closest('.map_wrapper')
		
		var map_open = map_one.find('.map_open')
		var map_title = map_one.find('.map_title')
		map_one.addClass('opened')
		map_wrapper.addClass('opened')
		
		var title = map_one.find('.map_title')

		map_open.css({"width":map_wrapper.width()})  
		if(map_one.hasClass('first')||map_one.hasClass('middle') ){
			if(map_one.hasClass('middle')&&map_wrapper.width()>map_open.width()){
				var left = ($(this).offset().left-map_wrapper.offset().left)-((map_wrapper.width()-map_open.width())/2);
				//alert(($(this).offset().left-map_wrapper.offset().left))
				//alert(((map_wrapper.width()-map_open.width())/2))
				var left = "-"+left +"px";
			} else {
				var left = "-"+($(this).offset().left-map_wrapper.offset().left)+"px";
			}
			map_open.css({"left":left})
		}if(map_one.hasClass('last')){
			var num = $(this).offset().left-map_wrapper.offset().left-(map_wrapper.width()-map_open.width()) ;
			map_open.css({"left":"-"+num+"px"})
		}

		

		map_open.addClass('active')

		if(!map_open.find('p').hasClass('ready')){
			var map_open_p = map_open.find('p');
			var p_height = map_open_p.height();
			var p_txt = map_open_p.text();
			var p_par_id = map_open_p.closest('.elem_wrap').attr('id')
			map_open_p.before('<style>#'+p_par_id+' p {height:'+p_height+'px;}</style>')
			map_open_p.before('<div class="mapptxt" style="display:none;">'+p_txt+'</div>')
			map_open_p.addClass('ready')
			var toRotate = [map_open_p.text()];
		    if (toRotate) {
				new TxtRotate(map_open_p, toRotate, 10000,80,1);
			}
		}
		

		$('html, body').stop().animate({ scrollTop: (map_one.offset().top) }, 200);
		//$(this).find('.map_open').addClass('active')
	}
});

$('.map_click.edit').on('click',function(){
	var row = $(this).closest('.map_row')
	window.content = '';
	row.find('.map_one').each(function(){
		content = content+'{'+"\n";
		content = ($(this).find('.map_road').length?content+'"road":"'+$(this).find('.map_road img').attr('src').replace('https://kozyon.com/crm/base/img/road/','').replace('.png','')+'",'+"\n":content);
		content = ($(this).find('.map_decor').length?content+'"decor":"'+$(this).find('.map_decor img').attr('src').replace('https://kozyon.com/crm/base/img/decor/','').replace('.png','')+'",'+"\n":content);
		content = ($(this).find('.map_hex').length?content+'"img":"'+$(this).find('.map_hex img').attr('src').replace('https://kozyon.com/crm/base/img/hex/','').replace('.png','')+'",'+"\n":content);
		content = content+'},'
	})
	console.log(content)
}).children().click(function(e) {
  return false;
});
$('.hexedit').on('click',function(){
	$('.selections').removeClass('active')
	$('.map_one').removeClass('target')
	var type = $(this).attr('data-type')
	var one = $(this).closest('.map_one');
	one.addClass('target')
	$('.mainmapeditor').addClass('active')
	$('.mainmapeditor .selections[data-type="'+type+'"]').addClass('active')
	if(type!='hex'){
		one.find('.map_'+type).remove()
	}
})
$('.mainmapeditor .selection').on('click',function(){
	var type = $(this).closest('.selections').attr('data-type')
	if($('.map_one.target .map_'+type).length){
		$('.map_one.target .map_'+type+'').attr('data-name',($(this).text().replace('.png','')))
		$('.map_one.target .map_'+type+' img').attr('src','https://kozyon.com/crm/base/img/'+type+'/'+$(this).text())
	}else {
		$('.map_one.target').append('<div class="map_'+type+'" data-name="'+($(this).text().replace('.png',''))+'"><img alt="" src="https://kozyon.com/crm/base/img/'+type+'/'+$(this).text()+'"></div>')
	}
	
	$('.mainmapeditor').removeClass('active')
	$('.selections').removeClass('active')
	$('.map_one').removeClass('target')
})




}
//******************************************************************************
// 									TYPEWRITER
//****************************************************************************** 

var TxtRotate = function(el, toRotate, period,speed=150,onlyonce=0) {
	this.toRotate = toRotate;
	this.speed = speed
	this.el = el;
	this.loopNum = 0;
	this.onlyonce = onlyonce;
	this.period = parseInt(period, 10) || 1000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
	var thatobj = this.el;
	if(thatobj.hasClass('fastfinish')){
		return false;
	}
	var i = this.loopNum % this.toRotate.length;
	var fullTxt = this.toRotate[i];

	if (this.isDeleting) {
		this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
	}

  this.el.html('<span class="wrap">'+this.txt+'</span>');

  var that = this;
  var onlyonce = this.onlyonce
  var delta = this.speed - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
  	//конец
  	this.el.addClass('finishtick')
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
  	//начало

    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }
	if(onlyonce&&!(this.txt === fullTxt)||!onlyonce){
		
			setTimeout(function() {
	  			thatobj.removeClass('finishtick')
	  			that.tick();
	  		}, delta);

	  
	}

};

	
	$('.txt-rotate').each(function(){
		var toRotate = $(this).attr('data-rotate');
    	var period = $(this).attr('data-period');
    	if (toRotate) {
			new TxtRotate($(this), JSON.parse(toRotate), period);
	    }
	})



//******************************************************************************
// 									DEFAULT
//****************************************************************************** 




$('.telegramlink').on('click',function(e){
	var link = $(this).attr('href')
	e.preventDefault();
	var resolve = link.replace('?','&').replace('https://t.me/','tg://resolve?domain=');
	window.location.href = resolve;
	setTimeout(function() {
		window.location.href = link; 
	}, 5000);
})

$(".scrollbar-macosx").scrollbar();
$('.responsivetext').flowtype();
$('.resptxt').flowtype();



if($('.user_info[data-inteam="1"]').length||$('.user_info[data-crmid="19"]').length){
	allow_consolelog = 1;
}

var myhash = window.location.hash;
//remember scroll position 
var oldpos = 0;
var page = ($.query.get('page')?$.query.get('page'):'')+($.query.get('lesson')?$.query.get('lesson'):'')
if(page&&!$.query.get('anchor')&&Cookies.get(page)&&!$('.crm_card_window').length){
	window.objscrollplz = JSON.parse(Cookies.get(page));
	if( (Math.round(new Date() / 1000)-objscrollplz['time'])<600 ){
		console.log('run')
		if(objscrollplz['pos']>500){
			setTimeout(function() {
				console.log(objscrollplz['pos'])
		    	$('html, body').stop().animate({ scrollTop: objscrollplz['pos'] }, 0);
			}, 10);
		}
	}
}


if($.query.get('anchor')&&!myhash){
	history.scrollRestoration = 'manual';
	$('html, body').stop().animate({ scrollTop: $('.achorpoint').offset().top-60 }, 200);
	setTimeout(function() {
		history.scrollRestoration = 'manual';
		$('html, body').stop().animate({ scrollTop: $('.achorpoint').offset().top-60 }, 200);
	}, 10);
	$( document ).load(function() {
		history.scrollRestoration = 'manual';
		$('html, body').stop().animate({ scrollTop: $('.achorpoint').offset().top-60 }, 200);
	});
}
$( window ).scroll(function() {
	var new_pos = $( window ).scrollTop();
	var page = ($.query.get('page')?$.query.get('page'):'')+($.query.get('lesson')?$.query.get('lesson'):'')
	if(page&&Math.abs(new_pos-oldpos)>50&&!$('body').hasClass('overplace')){
		oldpos = new_pos;
		var result = {'pos':new_pos,'time': Math.round(new Date() / 1000)}; 
		result = JSON.stringify(result);
		Cookies.set(page, result, { expires: 1,path: '/' });
	}
});
if(window.location.hash) {
	history.scrollRestoration = 'manual';
	if($(myhash).length){
		setTimeout(function() {
			history.scrollRestoration = 'manual';
			$('html, body').stop().animate({ scrollTop: $(myhash).offset().top-70 }, 200);
		}, 10);
		$( document ).load(function() {
			history.scrollRestoration = 'manual';
			$('html, body').stop().animate({ scrollTop: $(myhash).offset().top-70 }, 200);
		});
	}
}


//******************************************************************************
// 								 COUNTDOWN
//******************************************************************************

function run_lil_countdown(){
	$('.lil_countdown').each(function(){
		var obj = $(this)
		var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
		countDownDate = Number(obj.attr('data-time'))*1000;
		var x = setInterval(function() {

		  var now = new Date().getTime();
		  var distance = countDownDate - now;
		  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		  obj.text(days + " дней, "+hours+" час, "+minutes+" мин, "+seconds+" сек");
		  if (distance < 0) {
		    clearInterval(x);
		    obj.text('Таймер закончился');
		  }
		}, 1000);
	})
}
run_lil_countdown();

//******************************************************************************
// 								 POPUPS
//******************************************************************************
	/**/
function activate_popup($odj){
	window.scrollpopupremember = $( window ).scrollTop();
	$odj.addClass('active');

	var elem_wrap = $odj.closest('.elem_wrap')
	elem_wrap.siblings().addClass('hidden')
	var elem_wrap_parent = elem_wrap.parent().closest('.elem_wrap')
	if(elem_wrap_parent.length){
		elem_wrap_parent.siblings().addClass('hidden')
	}

	console.log(scrollpopupremember)
	//$('.pagebuilder').css({"top":'-'+(scrollpopupremember-0)+'px'})
	$('body').addClass('overplace')
	$odj.addClass('active')
	if($odj.hasClass('exitable')){
		$("body.overplace").on('click',function(e){
			var par = $(e.target).closest('.over_placeholder_inner')
			if(par.length){
			} else {
				close_popup($('.over_wrap.active'));
			}
		});
	}
	$('.pagebuilder').addClass('overplace')
	$odj.closest('.over_placeholder').addClass('active')
	$odj.closest('.over_placeholder_inner').addClass('animate__animated').addClass('animate__bounceIn')
	$('html, body').stop().animate({ scrollTop: 0 }, 0);
}
function close_popup($odj){
	$odj.removeClass('active');
	var elem_wrap = $odj.closest('.elem_wrap')
	elem_wrap.siblings().removeClass('hidden')
	var elem_wrap_parent = elem_wrap.parent().closest('.elem_wrap')
	if(elem_wrap_parent.length){
		elem_wrap_parent.siblings().removeClass('hidden')
	}

	var count = $odj.attr('data-count')
	//$('.pagebuilder').css({"top":'0'})
	if($odj.hasClass('exitable')){
		$("body.overplace").off('click');
	}
	
	
	$odj.removeClass('active')
	$('.pagebuilder').removeClass('overplace')
	$odj.closest('.over_placeholder').removeClass('active')
	if(!$('.over_placeholder.active').length){
		$('body').removeClass('overplace')
	}
	$odj.closest('.over_placeholder_inner').removeClass('animate__animated').removeClass('animate__bounceIn')
	var newobj = $('.over_placeholder .over_wrap:not(.click)[data-count="'+(Number(count)+1)+'"]');
	if(newobj.length){
		setTimeout(function() {	
			activate_popup(newobj);	
		}, 500);
	}
	$('html, body').stop().animate({ scrollTop: scrollpopupremember }, 0);
} 

if($('.over_placeholder .over_wrap').length){
//

var countpop = 1;

$('.over_placeholder .over_wrap:not(.click)').each(function(){
	$(this).attr('data-count',countpop)
	countpop = countpop+1;
});
var firstpop = $('.over_placeholder .over_wrap:not(.click)[data-count="1"]');
if(firstpop.length){
	setTimeout(function() {	
		activate_popup($('.over_placeholder .over_wrap:not(.click)[data-count="1"]'));	
	}, 1000);
}
$('.over_placeholder .over_wrap.click').each(function(){
	var onclick = $(this).attr('data-onclick')
	var obj = $(this);
	$('.'+onclick).on('click',function(){
		setTimeout(function() {
			activate_popup(obj);
		}, 10);
	})
});
$('.close').on('click',function(){
	var over_wrap = $(this).closest('.over_wrap');
	close_popup(over_wrap);
})





}

//******************************************************************************
// 								 PAY
//******************************************************************************
function activate_pay_methods_help(obj,classer){
	var send_button = obj.find('.pri_ways.'+classer).find('[data-eval]');
	if(send_button.length){
		var send_button_id = send_button.attr('data-eval')
		var paymentform = obj.find('.pri_ways.'+classer).find('.btn.redirect')
		paymentform.attr('id','pay'+send_button_id)
		send_button.click();
		$( document ).on( "php"+send_button_id, {
			crm: 0,
			clickedobj:0,
		}, function( event, arg_request, arg2 ) {
			var response = JSON.parse(arg_request)
			var confirmation_url = response['confirmation']['confirmation_url'];
			if(response['confirmation']['confirmation_url']==undefined){
				alert('Что-то пошло не так, нужно перезагрузить страницу, если проблема сохраняется пришли, пожалуйста, скриншот в телегу Денису @kozyon')
			}
			paymentform.attr('href',confirmation_url)
		});
	}
}
function activate_pay_methods(obj){
	activate_pay_methods_help(obj,'carder');
	setTimeout(function() {
		activate_pay_methods_help(obj,'yapart');
	}, 700);
	setTimeout(function() {
		activate_pay_methods_help(obj,'vnut1');
	}, 1300);
	setTimeout(function() {
		activate_pay_methods_help(obj,'vnut2');
	}, 1300);
}

if($('.pri_ways').length){ 
	var num = 0; 
	$('.over_wrap').each(function(){
		
		var odj = $(this) 
		if(odj.find('.pri_ways.carder:not(.activated)').length){
			setTimeout(function() {
				activate_pay_methods(odj);
			}, 10+(num*1000) );
		}if(odj.find('.pri_ways.vnut1:not(.activated)').length){
			num++;
		}
	});






$('.pri_ways .head').on('click',function(){
	var par = $(this).closest('.pri_ways')
	$('.pri_ways').not(par).removeClass('active')
	par.toggleClass('active')
})


}

//******************************************************************************
// 								 USER DATE
//******************************************************************************

if($('.user_info').length&&$('.user_info').attr('data-gmt')==undefined){
	setTimeout(function() {
		if(Number($('.user_info').attr('data-id'))&&!$('.user_info').attr('data-id')){
			var d = new Date();
			var n = d.getTimezoneOffset();

			var phpstring = 'edit_user_meta(array("id"=>'+$('.user_info').attr('data-id')+',"slug"=>"'+$('.user_info').attr('data-slug')+'","key"=>"gmt","value"=>'+n+'));edit_crm_meta(array("id"=>'+$('.user_info').attr('data-crmid')+',"key"=>"gmt","value"=>'+n+'));';
			php_ajax_call(phpstring,0);
			var che_gmt = function(){
				if(!php_ajax_call_run){

				} else {
					setTimeout(che_gmt, 100); // check again in a second
			}}
			che_gmt();
		}
	}, 1);
}

//******************************************************************************
// 								 	qz
//******************************************************************************
$('.grand_qz [type="radio"]').change(function(){
	var parent = $(this).closest('.qz_slide')
	parent.find('.btn').addClass('active')
})
$('.grand_qz .quiz_custform input,.grand_qz .quiz_custform textarea').change(function(){
	var parent = $(this).closest('.qz_slide')
	parent.find('.btn').addClass('active')
})


$('body').on('click','.qz_back',function(){
		var qz = $(this).closest('.grand_qz')
		var parent = $(this).closest('.qz_slide')
		var parentclass = parent.attr('data-class')
		var stop = qz.attr('data-up')
		if(stop=='top'){
			stop = qz.offset().top-15
		}
		$('html, body').animate({
		    scrollTop: (stop)
		},400);
		qz.find('.qz_slide').removeClass('active')
		$('body').removeClass(parentclass)
		var next = qz.find('.qz_slide[data-id="'+(Number(parent.attr('data-id'))-1)+'"]')
		var nextclass = next.attr('data-class')
		$('body').addClass(nextclass)
		next.addClass('active')
})
function finished_qz(obj_qz){
	obj_qz.find('.finished_qz').show();
}
$('body').on('click','.grand_qz .btn',function(){
	if($(this).hasClass('active')){
		var qz = $(this).closest('.grand_qz')
		var parent = $(this).closest('.qz_slide')
		var parentclass = parent.attr('data-class')
		var stop = qz.attr('data-up')
		if(stop=='top'){
			stop = qz.offset().top-15
		}
		$('html, body').animate({
		    scrollTop: (stop)
		},400);
		qz.find('.qz_slide').removeClass('active')
		$('body').removeClass(parentclass)
		var next = qz.find('.qz_slide[data-id="'+(Number(parent.attr('data-id'))+1)+'"]')
		var nextclass = next.attr('data-class')
		$('body').addClass(nextclass)
		next.addClass('active')
		if(parent.find('.qz_end_button').length){
			parent.find('.qz_end_button').click();
			finished_qz(qz);
		}
	}
})

//Тестирование
$('.main_solution_wrapper:not(.admin)').hide();
function count_result_of_testing(){
	$('.solut_wrap_empty').show();
	$('.main_solution_wrapper:not(.admin)').hide();
	var arr = {};
	var num_checked = 0;
	$('.solut_var').each(function(){
		$('.solut_var').hide();
		var varid = $(this).attr('data-var');
		arr[varid] = 0;
	})
	
	//count all answers
	$('.grand_qz.s1 [type="radio"]').each(function(){
		if($(this).is(":checked")){
			var countdata = $(this).attr('data-data')
			if(countdata){
				countdata = JSON.parse(countdata)
				$.each(countdata, function (index, value) {
					if(index in arr){
						var def_val = arr[index];
						var new_val = Number(def_val)+Number(value)
						arr[index] = new_val;
					}
				})				
			}
		}
	})
	//get large result
	var winner = '';
	var winner_num = 0;
	$.each(arr, function (index, value) {
		if(!winner){
			winner = index;
			winner_num = value;
		} else {
			if(winner_num<value){
				winner = index;
				winner_num = value;
			}
		}
	})	
	console.log(winner)
	//hide result not winner s1 or s2 or s3 etc
	$('.solut_var').each(function(){
		var varid = $(this).attr('data-var');
		if(varid!=winner){
			$(this).hide()
		} else {
			$(this).show()
		}
	})
	//a1 or a2 hide
	$('.grand_qz.s1 [type="radio"]').each(function(){
		if($(this).is(":checked")){
			var countdata = $(this).attr('data-data')
			if(countdata){
				countdata = JSON.parse(countdata)
				if('var' in countdata){
					num_checked = num_checked+1;
					var name = $(this).attr('name')
					$('.solut_var[data-for="'+name+'"]').hide();
					console.log($('.solut_var[data-for="'+name+'"][data-answer="'+countdata['var']+'"]'))
					$('.solut_var[data-for="'+name+'"][data-answer="'+countdata['var']+'"]').show();
				}				
			}
		}
	})
	console.log(num_checked+' '+$('.solut_wrap:not([data-for=""])').length)
	if(num_checked==$('.solut_wrap:not([data-for=""])').length){
		var arr = []
		$('.solut_var').each(function(){

			if($(this).css('display') === 'block'){
				arr.push($(this).attr('data-id'))
			}
		})
		arr = arr.join(',')
		php_ajax_call('edit_user_meta(array("id"=>'+$('.user_info:not(.admin)').attr('data-id')+',"key"=>"solution","value"=>"'+arr+'","slug"=>"'+$('.user_info:not(.admin)').attr('data-slug')+'"));',0);
		$('.solut_wrap_empty').hide();
		$('.main_solution_wrapper:not(.admin)').show();
	} else {
		$('.solut_wrap_empty').show();
		$('.main_solution_wrapper:not(.admin)').hide();
	}
}

$('.grand_qz.s1 [type="radio"]').on('click',function(){

	count_result_of_testing();
})

//******************************************************************************
// 								 CRM INTERFACE
//******************************************************************************

$('body').on('click','.field_hider_name',function(){
	var par = $(this).closest('.field_hider')
	if(par.hasClass('open')){
		par.removeClass('open');
		par.find('.field_hider_body').eq(0).slideUp(100);
	} else {
		par.addClass('open');
		par.find('.field_hider_body').eq(0).slideDown(100);
		$('textarea').css({"height":"auto"})
		$('textarea').autogrow();
		
	}

})
//******************************************************************************
// 						 COPY TO CLIPBOARD
//******************************************************************************
window.copyclickon = function(){
$('.copyme:not(.ready)').each(function(){
	var rand = myrand(1,9999999);
	$(this).addClass('ready')
	$(this).attr('data-toggle','tooltip')
	$(this).attr('title','Скопировано')
	$(this).attr('data-trigger','click')
	$(this).attr('data-show','0')
	$(this).attr('data-hider','1000')
	$(this).attr('data-num','n'+rand) 
	var cont = ($(this).attr('data-copy')!=undefined?$(this).attr('data-copy'):$(this).text())
	cont = cont.replace(/\\n/g, "\n");
	console.log(cont)
	$(this).after('<div style="position: absolute;height: 0;right:5000px;pointer-events: none;opacity: 0;"><textarea class="copymeinput n'+rand+'" >'+cont+'</textarea></div>')
	$('.copymeinput').prop("readonly", true);
	
})
$('.copyme').on('click', function(event) {
	var num = $(this).attr('data-num');
	var obj = $(this)
	console.log(event)
	$('.copymeinput.'+num).click()
	if(obj.attr('data-hider')!=undefined){
			setTimeout(function() {
				obj.tooltip('hide')
			}, obj.attr('data-hider'));
	}
});
$('.copymeinput').on('click', function(event) {
	copyToClipboard(event);
});

// event handler
function copyToClipboard(e) {
	//var obj = $('input.'+num)
	//console.log(obj)
	e.target.select()
	e.target.setSelectionRange(0, 99999);
	document.execCommand("copy");
}
}
copyclickon();

//******************************************************************************
// 						 TOOLTIPS
//******************************************************************************
var performance = 0;
$(window).on('scroll',function(){
	performance++;
	if(performance>15){
		$('.tooltip').remove();
		performance = 0;
	}
})

function tooltip_activate(){
	$('[data-toggle="tooltip"]:not(.ready_tooltip)').each(function(){
		var obj = $(this)
		var show = (obj.attr('data-show')!=undefined?obj.attr('data-show'):0)
		var hide = (obj.attr('data-hide')!=undefined?obj.attr('data-hide'):0)
		var trigger = (obj.attr('data-trigger')!=undefined?obj.attr('data-trigger'):'hover focus')
		var cusclass = (obj.attr('data-class')!=undefined?obj.attr('data-class'):'');
		obj.tooltip({
			trigger:trigger,
			template:'<div class="tooltip '+cusclass+'" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
			delay: {
				"show": show,
				"hide": hide }
			});
		obj.addClass('ready_tooltip')

	})
}
tooltip_activate();

//******************************************************************************
// 								 ROULETE
//******************************************************************************
	if($('.roulette').length){
		var botid = $('.user_info').attr('data-botid')
		var id = $('.user_info').attr('data-id')
		var slug = $('.user_info').attr('data-slug')
		window.ruletgame = 0;
		var rulethtml = $('.roulette_grand')[0].outerHTML
		function get_opt(num){
			var dur = (num==0?3:3);
			dur = (num==1?4:dur);
			dur = (num==2?5:dur);
			window.nums_rul = JSON.parse($('.rulet_rule').text());
			if(nums_rul[ruletgame]!=undefined){
				var option = {
					speed : 10,
					duration : dur,
					stopImageNumber : nums_rul[ruletgame][num],
					startCallback : function() {
						console.log('start');
					},
					slowDownCallback : function() {
						console.log('slowDown');
					},
					stopCallback : function($stopElm) {
						var phpstring = 'edit_user_meta(array("id"=>'+id+',"slug"=>"'+slug+'","key"=>"stars","value"=>"'+Number($('.rest_roulete b').text())+'"));';
						phpstring = phpstring+'edit_user_meta(array("id"=>'+id+',"slug"=>"'+slug+'","key"=>"rulet","value"=>"'+Number($('.rest_roulete').attr('data-ruletgame'))+'"));';
						console.log('nums_rul[ruletgame]=');
						console.log(nums_rul[ruletgame]);
						console.log('ruletgame=');
						console.log(ruletgame);
						if(num==2&&nums_rul[ruletgame][3]=='no'){
							$('.rulet_note').removeClass('active')
							$('.rulet_note.no').addClass('active')
						}if(num==2&&nums_rul[ruletgame][3]!='no'){
							$('.rulet_note').removeClass('active')
							$('.rulet_note.yes').addClass('active')
							phpstring = phpstring+'bot_send_template(array("bot_id"=>"'+botid+'","t"=>"'+nums_rul[ruletgame][3]+'"));';
						}
						if(num==2){
							php_ajax_call(phpstring,0);
							var che_rulet = function(){
								if(!php_ajax_call_run){
									$('.start').removeClass('dis')
								} else {
									setTimeout(che_rulet, 100); // check again in a second
								}}
							che_rulet();
						}

					}
				}
				return option;
			}
		}

		$('div.roulette.s1').roulette(get_opt(0));
		$('div.roulette.s2').roulette(get_opt(1));	
		$('div.roulette.s3').roulette(get_opt(2));	
		$('.start:not(.dis)').on('click',function(){
			if(!$(this).hasClass('dis')){
				$(this).addClass('dis')
				var rest = Number($('.rest_roulete b').text())
				if(rest>0){
					$('.rest_roulete b').text(rest-1)
					$('.gold').text(rest-1)

					$('.roulette_grand').remove()
					$('.roulette_grand_wrap').append(rulethtml)

					ruletgame = Number($('.rest_roulete').attr('data-ruletgame'))+1;
					console.log(ruletgame)
					$('.rulet_note').removeClass('active')
					$('.rulet_note.wait').addClass('active')
					$('div.roulette.s1').roulette(get_opt(0));
					$('div.roulette.s2').roulette(get_opt(1));	
					$('div.roulette.s3').roulette(get_opt(2));	
					var rouletter1 = $('div.roulette.s1');
					var rouletter2 = $('div.roulette.s2');
					var rouletter3 = $('div.roulette.s3');
					rouletter1.roulette('start');	
					rouletter2.roulette('start');
					rouletter3.roulette('start');
					$('.rest_roulete').attr('data-ruletgame',ruletgame)
				} else {
					$('.rulet_note').removeClass('active')
					$('.rulet_note.empty').addClass('active')
				}
			}

		});
	}

//******************************************************************************
// 								 crmERS
//******************************************************************************
function miss_symbol(){
	$('del').each(function(){
		if($(this).text()=='[year]'){
			$(this).text(new Date().getFullYear())
			$(this).css({'text-decoration':'none'})
		}
		if($(this).text()=='₽'){
			//$(this).css({'font-family':'arial'})
			$(this).addClass('self_rub')
			$(this).html('Р.')
			//$(this).html('<i class="fas fa-ruble-sign"></i>')
			$(this).css({'font-size':'60.2%'})
			$(this).css({'font-weight':'600'})
			$(this).css({'text-decoration':'none'})
		}
	})
}
miss_symbol();


//******************************************************************************
// 								 LEELOO
//******************************************************************************


/* leeloo account url hide*/
window.bot_id = ($.query.get('leeloo_account_id')?$.query.get('leeloo_account_id'):($.query.get('id')?$.query.get('id'):''));
if($.query.get('leeloo_account_id')){
	var newUrl = $.query.set('id', bot_id).REMOVE("leeloo_account_id").toString()
	set_url(newUrl);
}



//******************************************************************************
// 								 FUNCTIONS
//******************************************************************************

//upload_picture
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      $('.lesson_innwrap.active .upload_img').css({'discrm':'block'}).attr('src', e.target.result);
    }
    reader.readAsDataURL(input.files[0]);
  }
}

//******************************************************************************
// 								   COMMENTS
//******************************************************************************

$('body').on('click','.set_stars span',function(){
	if(!$(this).hasClass('blockanyclick')){
		$(this).hasClass('blockanyclick')
		var com_id = $(this).closest('.com_one').attr('data-id');
		var val = $(this).attr('data-val');
		var afterfunc = $(this).closest('.com_wrap').attr('data-afterfunc');
		var manager = $(this).attr('data-manager')
		php_ajax_call('set_comm_star(array("com_id"=>"'+com_id+'","afterfunc"=>"'+afterfunc+'","manager"=>"'+manager+'","slug"=>'+$('.user_info').attr('data-slug')+',"val"=>'+val+'));',0);
		var che_coms = function(){
			if(!php_ajax_call_run){
				//last_request = JSON.parse(last_request)
				run_comments($('.pre_com_holder'),1);
				$('.blockanyclick').removeClass('blockanyclick')
			} else {
				setTimeout(che_coms, 100); // check again in a second
			}}
		che_coms();/**/
	}
})


function prepare_txt_for_misql(string){
	//string = string.replace(/(<([^>]+)>)/ig,"");
	string = string.replace(/\"/ig,"");
	string = string.replace(/\:/ig,"");
	string = string.replace(/\'/ig,"");
	return string;
}

function comments_click(){
	$('.com_answer').on('click',function(){
		var com_wrap = $(this).closest('.com_wrap')
		var parent = $(this).closest('.com_one')
		var id = parent.attr('data-id')
		var name = parent.attr('data-name')
		com_wrap.find('.com_answer_to').addClass('active')
		com_wrap.find('.com_answer_to div').text(name)
		com_wrap.find('#parentarea').val(id)
		$([document.documentElement, document.body]).animate({
			scrollTop: $('.com_head').offset().top-50
		}, 300,function(){
			com_wrap.find('textarea.form-control').focus();
		});
	})
}

window.run_comments = function(obj,reload){
	
	var com_wrap = obj.closest('.com_wrap')
	var page_id = com_wrap.attr('data-pageid');
	var last_id = com_wrap.find('.com_holder > .com_one:first-child').attr('data-id')
	var offset = com_wrap.find('.morecomments').attr('data-offset')
	var arr_time = '';
	com_wrap.find('.com_time').each(function(){
		var time = $(this).attr('data-time')
		arr_time = arr_time+(arr_time?'-':'')+time;
	})
	console.log(com_wrap.attr('data-buy'))
	console.log((com_wrap.attr('data-buy')!=undefined&&Number(com_wrap.attr('data-buy'))?1:'0'));
	var dzcheck = ($.query.get('dzcheck')?'"dzcheck"=>1,':'');
	php_ajax_call('get_comments_list(array("bot_id"=>"'+$('.user_info').attr('data-botid')+'","funcgroupid"=>"'+$('.user_info').attr('data-funcgroupid')+'",'+dzcheck+'"offset"=>0,"num"=>'+(offset==undefined?200:offset)+',"buy"=>'+(com_wrap.attr('data-buy')!=undefined&&Number(com_wrap.attr('data-buy'))?1:'0')+',"reload"=>'+reload+',"page_id"=>'+page_id+',"isinteam"=>"'+$('.user_info').attr('data-inteam')+'","json"=>1,"comments_time"=>"'+arr_time+'" ));',0,0,0,"get_comm_list");
	allow_comment_update = 0;
	$( document ).on( "php"+"get_comm_list", {
				crm: 0,
				clickedobj:0,
			}, function( event, arg_request, arg2 ) {
				var request = JSON.parse(arg_request)
				if(request['type']=='all'){
					console.log('all')
					com_wrap.find('.com_holder *').remove();
					com_wrap.find('.com_holder').prepend(request['code'])
				}
				if(request['type']=='add'&&!request['old']){
					console.log('add')
					com_wrap.find('.com_holder').prepend(request['code'])
				}
				if(request['comments_time']){
					$.each(request['comments_time'], function (index, value) {
						com_wrap.find('[data-time="'+index+'"]').text(value)
					})
				}

				//console.log(last_request['comments_time']);
				comments_click();
				check_eval();
			});
}

function ativate_comments(){
	$('body').on('click','.com_del',function(){
		var answer = confirm('Вы точно хотите удалить комментарий?');
		if(answer){
			var id = $(this).closest('.com_one').attr('data-id')
			php_ajax_call("remove_comment("+id+","+$('.user_info').attr('data-funcgroupid')+","+$(this).closest('.com_wrap').attr('data-pageid')+");");
			var comment_deleter = function(){
				if(!php_ajax_call_run){
					$(this).closest('.com_one').remove();
					run_comments($('.pre_com_holder'),1);
				} else {
					setTimeout(comment_deleter, 100); // check again in a second
				}}
			comment_deleter();
		}

	})


	$('.com_answer_to b').on('click',function(){
		$('.com_answer_to').removeClass('active');
		$('textarea').attr('data-parent','');
	})


	comments_click();
	window.allow_comment_update = 0;


	//$('#element').visible()
	var perfomance = 0;
	$(window).on('scroll',function(){
		perfomance++; 
		if(perfomance>15){
			perfomance = 0;
			$('.pre_com_holder').each(function(){
				if(allow_comment_update&&$(this).visible(true)&&$(this).is(':visible')){
					run_comments($(this),0);
				}
			})
		}
		
	})


	$('.morecomments').on('click',function(){
		var com_wrap = $(this).closest('.com_wrap')
		$(this).find('span').text('Загрузка...')
		var offset = $(this).attr('data-offset')
		var page_id = $(this).attr('data-pageid')
		var dzcheck = ($.query.get('dzcheck')?'"dzcheck"=>1,':'');
		php_ajax_call('get_comments_list(array("bot_id"=>"'+$.query.get('id')+'","funcgroupid"=>"'+$('.user_info').attr('data-funcgroupid')+'",'+dzcheck+'"offset"=>'+offset+',"num"=>20,"page_id"=>'+page_id+',"json"=>1 ));',0);
		var che2 = function(){
			if(!php_ajax_call_run){
				com_wrap.find('.com_aim').remove();
				com_wrap.find('.morecomments').find('span').text('Показать больше')
				com_wrap.find('.com_holder').append('<div class="com_aim"></div>')
				last_request = JSON.parse(last_request)
				com_wrap.find('.com_holder').append(last_request['code'])
				com_wrap.find('.morecomments').attr('data-offset',last_request['offset'])
				if(last_request['hide']!=undefined){
					com_wrap.find('.morecomments').hide()
				}

				$([document.documentElement, document.body]).animate({
				    scrollTop: com_wrap.find('.com_aim').offset().top-160
				}, 300);
			}
			else {
				setTimeout(che2, 100); // check again in a second
			}}
		che2();
	}) 
	$('.com_write').autogrow();
	$('.ajax_form.comment textarea').on('focus', function() {
	    $('.send_comment_wrap').addClass('active');
	});
	$('textarea.form-control').autogrow();
	$('.send_comments').on('click',function(){
		if(!$(this).hasClass('block')){
			$(this).addClass('block')
		var butt = $(this);
		var com_wrap = $(this).closest('.com_wrap')
		var obj = com_wrap.find('textarea');
		var com_holder = com_wrap.find('.com_holder')
		var val = escapeNewlines(obj.val());
		val = val.replace(/\n/g, '~');
		var page_id = obj.attr('data-pageid');
		var bot_id = obj.attr('data-botid');
		var pagerulet_id = obj.attr('data-pageid');
		var parent = obj.attr('data-parent');
		var funcgroupid = com_wrap.attr('data-funcgroupid');
		var link = obj.attr('data-link');
		var img = obj.attr('data-img');
		var eval_code = com_wrap.find('.eval_code')
		eval_code = (eval_code.length?eval_code.text():'')
		img = (img==''?'':'"img"=>"'+img+'",');
		parent = (parent==''?'':'"parent"=>'+parent+',');
		var name = obj.attr('data-name');
		var remeber = obj.attr('data-remeber')
		var to = com_wrap.attr('data-to')
		if(val==''){
			$('.error_msg .empty').show();
		} else if(val=='Хочу призы'||val=='Хочу приз'||val=='хочу призы'||val=='хочу приз'){
			alert('Ошибочка, эту команду нужно писать не сюда, а в чат-бот, где тебе приходят ссылки на уроки')
		} else if(val.length>4000){
			$('.error_msg .much').show();
		} else {
			com_wrap.find('.send_comment').text('Отправка...')
			var php_string = 'add_comment(array("id"=>"'+$('.com_wrap').attr('data-id')+'","funcgroupid"=>'+funcgroupid+',"link"=>"'+link+'","to"=>"'+to+'","dz"=>'+(com_wrap.hasClass('dz')?1:0)+',"slug"=>"'+$('.com_wrap').attr('data-slug')+'","bot_id"=>"'+bot_id+'",'+parent+img+'"txt"=>"'+val+'","page_id"=>"'+page_id+'","name"=>"'+name+'","class"=>"just"));';
			if(eval_code){
				eval(eval_code.replace('$$$$',php_string).replace('#txt#',val));
			} else {
				php_ajax_call(php_string);
			}
			
			
			var che1 = function(){
				if(!php_ajax_call_run){
				    obj.val('');
				    if(parent){
				    	run_comments(com_wrap.find('.pre_com_holder'),1);
				    } else {
				    	run_comments(com_wrap.find('.pre_com_holder'),0);
				    }
				    console.log(last_request)
				    butt.removeClass('block')
					com_wrap.find('.com_answer_to').removeClass('active');
					com_wrap.find('textarea').attr('data-parent','');
					com_wrap.find('textarea').attr('data-parent','');
				    com_wrap.find('.send_comment.btn').text('Отправить')
					$([document.documentElement, document.body]).animate({
				        scrollTop: com_holder.offset().top-80
				    }, 300);
				    if(to&&$('.user_info').attr('data-issupport')!=1){
				    	php_ajax_call('run_func('+$('.com_wrap').attr('data-id')+',"'+bot_id+'","'+$('.com_wrap').attr('data-slug')+'","'+to+'",'+funcgroupid+',2);');
				    }
				}
				else {
				    setTimeout(che1, 100); // check again in a second
				}}
			che1();
		}
		}
	})
}




//******************************************************************************
// 								   OTHER
//******************************************************************************

function active_countdown(){
	if($('.clock[data-timer]').length){
		var srollpos = $(window).scrollTop();
		$('.clock.rest').attr('data-timer',$('.clock[data-timer]').attr('data-timer'))
		
		$('.countdown').each(function(){
			var style = $(this).attr('data-style')
			$(this).addClass('active')
			if($(this).hasClass('s1')){
				$(this).find('.clock').each(function(){
					var time = $(this).attr('data-timer')
					var d = new Date( (Math.round($.now()/1000)+Number(time)) * 1000)
					$(this).countdown(d).on('update.countdown', function(event) {
						var format = '%H:%M:%S';
						if(event.offset.totalDays > 0) {
						    format = '%-d day%!d ' + format;
						    format = format.replace("days", "дней");
						}
						if(event.offset.weeks > 0) {
						    format = '%-w week%!w ' + format;
						}
						format = event.strftime(format)
						format = format.replace("weeks", "недель");
						format = format.replace("week", "неделя");

						format = format.replace("days", "дня");
						format = format.replace("day", "день");
						$(this).html(format);
					}).on('finish.countdown', function(event) {
					  	$(this).html('Скидка закончилась!').parent().addClass('disabled');
					});
				})
			} else {
				var autostart = (!$(this).hasClass('zero')?1:0)
				var type = $(this).attr('data-type')
				type = (type=='d'?'DailyCounter':type);
				type = (type=='h'?'HourlyCounter':type);
				var time = $(this).find('.clock').attr('data-timer')
				var clock = $(this).find('.clock').FlipClock({
					//clockFace: 'HourlyCounter'
					//clockFace: 'MinuteCounter',
					clockFace: type,
					language: 'ru',
					autoStart: autostart, // auto start
					countdown: true, // true = countdown, false = count up
				});
				clock.setTime(time);
				clock.setCountdown(true);
				clock.start();
			}

		})
		$('html, body').animate({
		    scrollTop: (srollpos)
		},0);
	}
}

function activate_carousel(){
	$('.owl-carousel').each(function(){
		var obj = $(this);
		var margin = (obj.attr('data-margin')!=undefined?Number(obj.attr('data-margin')):10)
		var margin = (obj.attr('data-margin')!=undefined?Number(obj.attr('data-margin')):10)
		var lazyLoad = (obj.attr('data-lazy')!=undefined?obj.attr('data-lazy'):0)
		var items = (obj.attr('data-items')!=undefined?obj.attr('data-items'):1)
		var items600 = (obj.attr('data-items600')!=undefined?obj.attr('data-items600'):items)
		var timeout = (obj.attr('data-timeout')!=undefined?obj.attr('data-timeout'):3000)
		var stagePadding = (obj.attr('data-padding')!=undefined?obj.attr('data-padding'):1)
		var stagePadding600 = (obj.attr('data-padding600')!=undefined?obj.attr('data-padding600'):stagePadding)
		var nav = (obj.attr('data-nav')!=undefined?obj.attr('data-nav'):0)
		var autoHeight = (obj.attr('data-autoheight')!=undefined?obj.attr('data-autoheight'):0)
		var loop = (obj.attr('data-loop')!=undefined?obj.attr('data-loop'):0)
		var autoplay = (obj.attr('data-autoplay')!=undefined?obj.attr('data-autoplay'):0)
		var autocrm = (obj.attr('data-autocrm')!=undefined?obj.attr('data-autocrm'):0)
		if(nav){
			obj.addClass('navs')
		}
		var objarr = {
			autocrm:autocrm,
			nav:nav,
			autoHeight:Number(autoHeight),
			autoplayTimeout:Number(timeout),
			autoplay:autoplay,
			
			navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			margin:margin,
			lazyLoad:lazyLoad,
			loop:loop 
		}
		if(obj.attr('data-items600')!=undefined){
			objarr['responsive'] = { 
		        0:{
		            items:items600
		        },600:{
		            items:Number(items)
		        }
		    }
		} else {
			objarr['items'] = Number(items)
		}
		
		obj.owlCarousel(objarr);
		if(nav=='0'){ 
			obj.addClass('nonenav');
		}
	})
}
setTimeout(function() {
	activate_carousel();
}, 500);


//******************************************************************************
// 								   MENUS
//******************************************************************************

  	function close_menu(){
 	  	$("#burger-menu").removeClass("open");
	    $('body').removeClass("open_menu");
	    $('body').removeClass('open_menu_toggle')
  	}
  	/**/
	$('header .relative .col-6').on('click',function(){
		if($('body').hasClass('open_menu_toggle')){
			close_menu();
		}	
	})
  	$("#burger-menu").on('click', function() {
  		if($(this).hasClass("open")){
  			close_menu();
  		} else {
  			console.log($(this))
	    	$(this).addClass("open");
	    	$('body').addClass("open_menu");
			setTimeout(function() {
				$('body').addClass('open_menu_toggle')
			}, 5);
  		}
  	})

  	

  	$('.menu_wrap').on('click', function(e) {
	  if (e.target !== this)
	    return;
		close_menu();
	});

  	
  	function activate_clicks(){



function isJSON(str) { 
            try { 
                return (JSON.parse(str) && !!str); 
            } catch (e) { 
                return false; 
            } 
        }
window.encodeforasync = function(string){
	if(isJSON(string)){
		string = string.replace(/\"/g, "&ddtt;");
		return string;
	}
}
function toggletagswitch(){
	$('.toggletagswitch').on('click',function(){
		var aim = $(this)
		if(aim.is(":checked")){
			$(this).closest('form').removeClass('off')
			$(this).closest('form').addClass('on')
		} else {
			$(this).closest('form').addClass('off')
			$(this).closest('form').removeClass('on')
		}
		
	})
}
toggletagswitch();
//******************************************************************************
// 								  EVALS
//******************************************************************************

window.click_auto_edit = function(obj){
	var form = obj.closest('.ajax_form')
	form.find('[data-eval]').click()
}
window.activateinterfacefeatures = function(){
	$('.autoedit').each(function(){
		if($(this).hasClass('select')||$(this).hasClass('field')||$(this).hasClass('textarea')){
			$(this).on('change',function(){
				click_auto_edit($(this));
			})
		}
		if($(this).hasClass('toggle')){
			$(this).on('click',function(){

				click_auto_edit($(this));
			}) 
		}
		if($(this).hasClass('checkbox')){
			$(this).on('click',function(e){
				if(e.target.tagName!='LABEL'){
					click_auto_edit($(this));
				}
			})
		}
		if($(this).hasClass('timetask')){

		}
	})
}
activateinterfacefeatures();
		//eval
  		window.check_hidden_fields = function(){
			/*prepare all fields*/
			$('.ajax_form input.form-control').each(function(){
				var val = $(this).val();
				$(this).val(replaceNewlines(val));
			})
			

  			/*CHECK*/
	  		$('.ajax_form').each(function(){
	  			$(this).find('[data-showkey]').each(function(){
		  			var showkey = $(this).attr('data-showkey')
		  			var form = $(this).closest('form')
		  			var showvalue = $(this).attr('data-showvalue')
		  			var aim = (form.find('#'+showkey).length?form.find('#'+showkey):'');
		  			var aim = (!aim?form.find('#'+showvalue):aim);
		  			//
			  		if(aim.length&&$(this).attr('data-showvalue')!=undefined){
			  			var obj = $(this);
			  			var value = obj.attr('data-showvalue')

			  			if(aim.attr('type')=='checkbox'){
			  				if(Number(aim.is(":checked"))==Number(value)){
			  					obj.slideDown(100)
			  					obj.closest('.form-group').addClass('shown')
			  				} else {
			  					obj.slideUp(100)
			  					obj.closest('.form-group').removeClass('shown')
			  				}
			  			}
			  			//
			  			if(aim.attr('type')=='radio'){
			  				var aim = form.find('#'+value);
			  				if(aim.is(":checked")){
			  					obj.slideDown(100)
			  					obj.closest('.form-group').addClass('shown')
			  				} else {
			  					obj.slideUp(100)
			  					obj.closest('.form-group').removeClass('shown')
			  				}
			  			}
			  			if(aim.hasClass('select')){
			  				if(aim.val()==showvalue){
			  					obj.slideDown(100)
			  					obj.closest('.form-group').addClass('shown')
			  				} else {
			  					obj.slideUp(100)
			  					obj.closest('.form-group').removeClass('shown')
			  				}
			  			}
			  		}
	  			})
	  		})
  		}
  		countchars();
		$('body').on('click','.ajax_form input[type="checkbox"]',function(event){
			check_hidden_fields();
		})
		$('body').on('change','.ajax_form input[type="radio"]',function(event){
			check_hidden_fields();
		})
		$('body').on('change','.ajax_form select',function(event){
			check_hidden_fields();
		})
		$(document).on('click','[data-eval]',function(event){
			eval_clicked($(this),event)
		})


	}



//******************************************************************************
// 								   FIRST AJAX
//******************************************************************************
window.resize_youtube = function(){
	$('iframe[src*=youtube],iframe[src*=vimeo]').each(function(){
		$(this).height($(this).width()/16*9);
	})
};
resize_youtube();
setTimeout(function() {
	resize_youtube();
}, 100);
setTimeout(function() {
	resize_youtube();
}, 1000);
	    	activate_clicks();
	    	active_countdown();
	    	resize_youtube();
	    	$(".youtube-link").grtyoutube();

			$(".inputuploader").change(function() {
			  readURL(this);
			});
			ativate_comments();
			activate_carousel()


//iframe leeloo height
var eventMethod = window.addEventListener
			? "addEventListener"
			: "attachEvent";
	var eventer = window[eventMethod];
	var messageEvent = eventMethod === "attachEvent"
		? "onmessage"
		: "message";

	eventer(messageEvent, function (e) {
		$('.mygamesite').height(e.data)
		//console.log(e);
	});




//******************************************************************************
// 								    Phonegrabber
//******************************************************************************
if($('#phone_graber').length){

	var pageURL = $(location).attr("href");
	//alert(pageURL);
	$('#phone_graber').attr('action',pageURL)
	$('#phone_graber').validate({
	  	submitHandler: function(form) {
				var text = $('.evalphonegrab').text().replace('$$$',$('#phone_graber .telephone').val());
				eval(text);

			//return false;
		}
	});
}
$( window).on( "phonedone", function( event, param1, param2 ) {
  	$('.slide_quest.active .btn').addClass('active');
});
var maskList = $.masksSort($.masksLoad("https://kozyon.com/crm/base/phone-codes.json"), ['#'], /[0-9]|#/, "mask"); 
var maskOpts = { 
				inputmask: { 
					definitions: { 
					'#': { 
						validator: "[0-9]", 
						cardinality: 1 
						} 
					}, 
					oncomplete: function(){
						$( window).trigger( "phonedone", [ "Custom", "Event" ] );
					},
					clearIncomplete: true, 
					showMaskOnHover: false, 
					autoUnmask: true 
				},

				match: /[0-9]/, 
				replace: '#', 
				list: maskList, 
				listKey: "mask", 
}; 
    function setSelectionRange(input, selectionStart, selectionEnd) {
        if (input.setSelectionRange) {
            input.focus();
            input.setSelectionRange(selectionStart, selectionEnd);
        } else if (input.createTextRange) {
            var range = input.createTextRange();
            range.collapse(true);
            range.moveEnd('character', selectionEnd);
            range.moveStart('character', selectionStart);
            range.select();
        }
    }
    //phone
    $( '.telephone:not(.code_add)' ).focus(function() {
        $(this).addClass('code_add')
        if($(this).val().length<6){
            $(this).val('+7(___)___-____')
            setCaretToPos($(this)[0], 3);
        }
    });
    function setCaretToPos(input, pos) {
          setSelectionRange(input, pos, pos);
    }
$('.telephone').inputmasks(maskOpts);

/**/
//******************************************************************************
// 								    YOUTUBE
//******************************************************************************







}
window.replaceNewlines = function(string) {
	if(string){
		string = string.replace(/&newl;/g, "\n");
		string = string.replace(/&dl;/g, "$");
		string = string.replace(/&nnewl;/g, "\n");
		string = string.replace(/&tdtt;/g, ":");
		string = string.replace(/&lcbr;/g, "{");
		string = string.replace(/&rcbr;/g, "}");
		string = string.replace(/&lsbr;/g, "[");
		string = string.replace(/&rsbr;/g, "]");
		string = string.replace(/&rll;/g, "|");
		string = string.replace(/&dquo;/g, '"');
		string = string.replace(/&squo;/g, "'");
		string = string.replace(/&arrl;/g, "<");
		string = string.replace(/&arrr;/g, ">");
		string = string.replace(/&slas;/g, "/");
		string = string.replace(/&strq;/g, "`");
		string = string.replace(/&lsq;/g, "(");
		string = string.replace(/&rsq;/g, ")");
  	return string;
  } else {
		return '';
	}
}
window.escapeNewlines = function(string) {
	if(string){
		string = string.replace(//g, "");
		string = string.replace(/\n/g, "&newl;");
		string = string.replace(/\\n/g, "&nnewl;");
		string = string.replace(/\$/g, "&dl;", );
		string = string.replace(/\:/g, "&tdtt;");
		string = string.replace(/\{/g, "&lcbr;");
		string = string.replace(/\}/g, "&rcbr;");
		string = string.replace(/\[/g, "&lsbr;");
		string = string.replace(/\]/g, "&rsbr;");
		string = string.replace(/\|/g, "&rll;");
		string = string.replace(/\"/g, "&dquo;");
		string = string.replace(/\'/g, "&squo;");
		string = string.replace(/\</g, "&arrl;");
		string = string.replace(/\>/g, "&arrr;");
		string = string.replace(/\//g, "&slas;");
		string = string.replace(/\`/g, "&strq;");
		string = string.replace(/\(/g, "&lsq;");
		string = string.replace(/\)/g, "&rsq;");
		string = string.replace(/\t/g, "");
		return string;
	} else {
		return '';
	}

  	
}
window.countchars = function(){
	$('.form-control.countchars').each(function(){
			var len = $(this).val().length;
			$(this).closest('.form-group').find('span.countchars span').text(len)
			$(this).keyup(function() {
				var len = $(this).val().length;
			    $(this).closest('.form-group').find('span.countchars span').text(len)
			});
		})
}

if($('.contentloadr').length){
	var schoolglobals = '';
	if(location.pathname.indexOf('school') >= 1){
		schoolglobals = JSON.stringify(myschoolajax);
	}
	php_ajax_call('loadpageplz("'+location.search+'"'+(schoolglobals?',"'+escapeNewlines(schoolglobals)+'"':'')+');',0,0,0,'contentloadr');
	$( document ).on("php"+"contentloadr", {
		crm: 0,
		clickedobj:0,
	}, function( event, arg_request, arg2 ) {
		$('.contentloadr').append(arg_request)
		$('.temploadcontent').remove();
		wait_for_load()	
	});
} else {
	wait_for_load()
}




});
})(jQuery);
/*Youtube POPUP*/
(function ( $ ) {



	$.fn.grtyoutube = function( options ) {

		return this.each(function() {

			// Get video ID
			var getvideoid = $(this).attr("youtubeid");

			// Default options
			var settings = $.extend({
				videoID: getvideoid,
				autocrm: true,
				theme: "dark"
			}, options );

			// Convert some values
			if(settings.autocrm === true) { settings.autocrm = 1 } else if(settings.autocrm === false)  { settings.autocrm = 0 }
			if(settings.theme === "dark") { settings.theme = "grtyoutube-dark-theme" } else if(settings.theme === "light")  { settings.theme = "grtyoutube-light-theme" }

			// Initialize on click
			if(getvideoid) {
				$(this).on( "click", function() {
					 $("body").append('<div class="grtyoutube-popup '+settings.theme+'"><a href="#" class="close"></a><div class="th_out"><div class="th_in">'+
								'<div class="grtyoutube-popup_wrap"><div class="grtyoutube-popup-content">'+
									'<iframe class="grtyoutube-iframe" src="https://www.youtube.com/embed/'+settings.videoID+'?rel=0&wmode=transparent&controls=0&autocrm='+settings.autocrm+'&iv_load_policy=3" allowfullscreen frameborder="0" allow="autocrm; fullscreen"></iframe>'+
								'</div></div>'+
							'</div></div></div>');
				});
			}

			// Close the box on click or escape
			$(this).on('click', function (event) {
				event.preventDefault();
				$(".grtyoutube-popup-close, .grtyoutube-popup").click(function(){
					$(".grtyoutube-popup").remove();
				});
				resize_youtube();
			});

		});
	};











}( jQuery ));
