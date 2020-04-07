import{c as e}from"./common/_commonjsHelpers-6a48b99e.js";var n=e((function(e,n){
/**
 * oclazyload - Load modules on demand (lazy load) with angularJS
 * @version v1.0.10
 * @link https://github.com/ocombe/ocLazyLoad
 * @license MIT
 * @author Olivier Combe <olivier.combe@gmail.com>
 */
!function(o,r){var t=["ng","oc.lazyLoad"],i={},a=[],s=[],u=[],c=[],l=o.noop,f={},d=[];o.module("oc.lazyLoad",["ng"]).provider("$ocLazyLoad",["$controllerProvider","$provide","$compileProvider","$filterProvider","$injector","$animateProvider",function(e,n,h,m,v,y){var L={},$={$controllerProvider:e,$compileProvider:h,$filterProvider:m,$provide:n,$injector:v,$animateProvider:y},j=!1,E=!1,_=[],w={};_.push=function(e){-1===this.indexOf(e)&&Array.prototype.push.apply(this,arguments)},this.config=function(e){o.isDefined(e.modules)&&(o.isArray(e.modules)?o.forEach(e.modules,(function(e){L[e.name]=e})):L[e.modules.name]=e.modules),o.isDefined(e.debug)&&(j=e.debug),o.isDefined(e.events)&&(E=e.events)},this._init=function(e){if(0===s.length){var n=[e],i=["ng:app","ng-app","x-ng-app","data-ng-app"],a=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/,u=function(e){return e&&n.push(e)};o.forEach(i,(function(n){i[n]=!0,u(document.getElementById(n)),n=n.replace(":","\\:"),void 0!==e[0]&&e[0].querySelectorAll&&(o.forEach(e[0].querySelectorAll("."+n),u),o.forEach(e[0].querySelectorAll("."+n+"\\:"),u),o.forEach(e[0].querySelectorAll("["+n+"]"),u))})),o.forEach(n,(function(n){if(0===s.length){var r=" "+e.className+" ",t=a.exec(r);t?s.push((t[2]||"").replace(/\s+/g,",")):o.forEach(n.attributes,(function(e){0===s.length&&i[e.name]&&s.push(e.value)}))}}))}0!==s.length||(r.jasmine||r.mocha)&&o.isDefined(o.mock)||console.error("No module found during bootstrap, unable to init ocLazyLoad. You should always use the ng-app directive or angular.boostrap when you use ocLazyLoad.");o.forEach(s,(function(e){!function e(n){if(-1===t.indexOf(n)){t.push(n);var r=o.module(n);D(null,r._invokeQueue,n),D(null,r._configBlocks,n),o.forEach(r.requires,e)}}(e)})),s=[],c.pop()};var O=function(e){try{return JSON.stringify(e)}catch(r){var n=[];return JSON.stringify(e,(function(e,r){if(o.isObject(r)&&null!==r){if(-1!==n.indexOf(r))return;n.push(r)}return r}))}},x=function(e){var n,o,r=0;if(0==e.length)return r;for(n=0,o=e.length;n<o;n++)r=(r<<5)-r+e.charCodeAt(n),r|=0;return r};function b(e,n,r){if(n){var i,a,s,c=[];for(i=n.length-1;i>=0;i--)if(a=n[i],o.isString(a)||(a=S(a)),a&&-1===d.indexOf(a)&&(!L[a]||-1!==u.indexOf(a))){var h=-1===t.indexOf(a);if(s=g(a),h&&(t.push(a),b(e,s.requires,r)),s._runBlocks.length>0)for(f[a]=[];s._runBlocks.length>0;)f[a].push(s._runBlocks.shift());o.isDefined(f[a])&&(h||r.rerun)&&(c=c.concat(f[a])),D(e,s._invokeQueue,a,r.reconfig),D(e,s._configBlocks,a,r.reconfig),l(h?"ocLazyLoad.moduleLoaded":"ocLazyLoad.moduleReloaded",a),n.pop(),d.push(a)}var p=e.getInstanceInjector();o.forEach(c,(function(e){p.invoke(e)}))}}function z(e,n){var r=e[2][0],t=e[1],a=!1;o.isUndefined(i[n])&&(i[n]={}),o.isUndefined(i[n][t])&&(i[n][t]={});var s=function(e,r){i[n][t].hasOwnProperty(e)||(i[n][t][e]=[]),function(e,n){var r,t=!0;n.length&&(r=u(e),o.forEach(n,(function(e){t=t&&u(e)!==r})));return t}(r,i[n][t][e])&&(a=!0,i[n][t][e].push(r),l("ocLazyLoad.componentLoaded",[n,t,e]))};function u(e){return o.isArray(e)?x(e.toString()):o.isObject(e)?x(O(e)):o.isDefined(e)&&null!==e?x(e.toString()):e}if(o.isString(r))s(r,e[2][1]);else{if(!o.isObject(r))return!1;o.forEach(r,(function(e,n){o.isString(e)?s(e,r[1]):s(n,e)}))}return a}function D(e,n,r,t){var i,s,u,c;if(n)for(i=0,s=n.length;i<s;i++)if(u=n[i],o.isArray(u)){if(null!==e){if(!e.hasOwnProperty(u[0]))throw new Error("unsupported provider "+u[0]);c=e[u[0]]}var l=z(u,r);if("invoke"!==u[1])l&&o.isDefined(c)&&c[u[1]].apply(c,u[2]);else{var f=function(e){var n=a.indexOf(r+"-"+e);(-1===n||t)&&(-1===n&&a.push(r+"-"+e),o.isDefined(c)&&c[u[1]].apply(c,u[2]))};if(o.isFunction(u[2][0]))f(u[2][0]);else if(o.isArray(u[2][0]))for(var d=0,h=u[2][0].length;d<h;d++)o.isFunction(u[2][0][d])&&f(u[2][0][d])}}}function S(e){var n=null;return o.isString(e)?n=e:o.isObject(e)&&e.hasOwnProperty("name")&&o.isString(e.name)&&(n=e.name),n}function M(e){if(!o.isString(e))return!1;try{return g(e)}catch(e){if(/No module/.test(e)||e.message.indexOf("$injector:nomod")>-1)return!1}}this.$get=["$log","$rootElement","$rootScope","$cacheFactory","$q",function(e,n,r,a,u){var f,h=a("ocLazyLoad");function m(n){var o=u.defer();return e.error(n.message),o.reject(n),o.promise}return j||((e={}).error=o.noop,e.warn=o.noop,e.info=o.noop),$.getInstanceInjector=function(){return f||(f=n.data("$injector")||o.injector())},{_broadcast:l=function(n,o){E&&r.$broadcast(n,o),j&&e.info(n,o)},_$log:e,_getFilesCache:function(){return h},toggleWatch:function(e){e?c.push(!0):c.pop()},getModuleConfig:function(e){if(!o.isString(e))throw new Error("You need to give the name of the module to get");return L[e]?o.copy(L[e]):null},setModuleConfig:function(e){if(!o.isObject(e))throw new Error("You need to give the module config object to set");return L[e.name]=e,e},getModules:function(){return t},isLoaded:function(e){var n=function(e){var n=t.indexOf(e)>-1;return n||(n=!!M(e)),n};if(o.isString(e)&&(e=[e]),o.isArray(e)){var r,i;for(r=0,i=e.length;r<i;r++)if(!n(e[r]))return!1;return!0}throw new Error("You need to define the module(s) name(s)")},_getModuleName:S,_getModule:function(e){try{return g(e)}catch(n){throw(/No module/.test(n)||n.message.indexOf("$injector:nomod")>-1)&&(n.message='The module "'+O(e)+'" that you are trying to load does not exist. '+n.message),n}},moduleExists:M,_loadDependencies:function(e,n){var r,t,i,a=[],s=this;if(null===(e=s._getModuleName(e)))return u.when();try{r=s._getModule(e)}catch(e){return m(e)}return t=s.getRequires(r),o.forEach(t,(function(r){if(o.isString(r)){var t=s.getModuleConfig(r);if(null===t)return void _.push(r);r=t,t.name=void 0}if(s.moduleExists(r.name))return 0!==(i=r.files.filter((function(e){return s.getModuleConfig(r.name).files.indexOf(e)<0}))).length&&s._$log.warn('Module "',e,'" attempted to redefine configuration for dependency. "',r.name,'"\n Additional Files Loaded:',i),o.isDefined(s.filesLoader)?void a.push(s.filesLoader(r,n).then((function(){return s._loadDependencies(r)}))):m(new Error("Error: New dependencies need to be loaded from external files ("+r.files+"), but no loader has been defined."));if(o.isArray(r)){var u=[];o.forEach(r,(function(e){var n=s.getModuleConfig(e);null===n?u.push(e):n.files&&(u=u.concat(n.files))})),u.length>0&&(r={files:u})}else o.isObject(r)&&r.hasOwnProperty("name")&&r.name&&(s.setModuleConfig(r),_.push(r.name));if(o.isDefined(r.files)&&0!==r.files.length){if(!o.isDefined(s.filesLoader))return m(new Error('Error: the module "'+r.name+'" is defined in external files ('+r.files+"), but no loader has been defined."));a.push(s.filesLoader(r,n).then((function(){return s._loadDependencies(r)})))}})),u.all(a)},inject:function(e){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],r=!(arguments.length<=2||void 0===arguments[2])&&arguments[2],t=this,i=u.defer();if(o.isDefined(e)&&null!==e){if(o.isArray(e)){var a=[];return o.forEach(e,(function(e){a.push(t.inject(e,n,r))})),u.all(a)}t._addToLoadList(t._getModuleName(e),!0,r)}if(s.length>0){var c=s.slice(),l=function e(o){_.push(o),w[o]=i.promise,t._loadDependencies(o,n).then((function(){try{d=[],b($,_,n)}catch(e){return t._$log.error(e.message),void i.reject(e)}s.length>0?e(s.shift()):i.resolve(c)}),(function(e){i.reject(e)}))};l(s.shift())}else{if(n&&n.name&&w[n.name])return w[n.name];i.resolve()}return i.promise},getRequires:function(e){var n=[];return o.forEach(e.requires,(function(e){-1===t.indexOf(e)&&n.push(e)})),n},_invokeQueue:D,_registerInvokeList:z,_register:b,_addToLoadList:p,_unregister:function(e){o.isDefined(e)&&o.isArray(e)&&o.forEach(e,(function(e){i[e]=void 0}))}}}],this._init(o.element(r.document))}]);var h=o.bootstrap;o.bootstrap=function(e,n,r){return t=["ng","oc.lazyLoad"],i={},a=[],s=[],u=[],c=[],l=o.noop,f={},d=[],o.forEach(n.slice(),(function(e){p(e,!0,!0)})),h(e,n,r)};var p=function(e,n,r){(c.length>0||n)&&o.isString(e)&&-1===s.indexOf(e)&&(s.push(e),r&&u.push(e))},g=o.module;o.module=function(e,n,o){return p(e,!1,!0),g(e,n,o)},e.exports===n&&(e.exports="oc.lazyLoad")}(angular,window),function(e){e.module("oc.lazyLoad").directive("ocLazyLoad",["$ocLazyLoad","$compile","$animate","$parse","$timeout",function(n,o,r,t,i){return{restrict:"A",terminal:!0,priority:1e3,compile:function(i,a){var s=i[0].innerHTML;return i.html(""),function(i,a,u){var c=t(u.ocLazyLoad);i.$watch((function(){return c(i)||u.ocLazyLoad}),(function(t){e.isDefined(t)&&n.load(t).then((function(){r.enter(s,a),o(a.contents())(i)}))}),!0)}}}}])}(angular),function(e){e.module("oc.lazyLoad").config(["$provide",function(n){n.decorator("$ocLazyLoad",["$delegate","$q","$window","$interval",function(n,o,r,t){var i=!1,a=r.document.getElementsByTagName("head")[0]||r.document.getElementsByTagName("body")[0];return n.buildElement=function(s,u,c){var l,f,d=o.defer(),h=n._getFilesCache(),p=function(e){var n=(new Date).getTime();return e.indexOf("?")>=0?"&"===e.substring(0,e.length-1)?e+"_dc="+n:e+"&_dc="+n:e+"?_dc="+n};switch(e.isUndefined(h.get(u))&&h.put(u,d.promise),s){case"css":(l=r.document.createElement("link")).type="text/css",l.rel="stylesheet",l.href=!1===c.cache?p(u):u;break;case"js":(l=r.document.createElement("script")).src=!1===c.cache?p(u):u;break;default:h.remove(u),d.reject(new Error('Requested type "'+s+'" is not known. Could not inject "'+u+'"'))}l.onload=l.onreadystatechange=function(e){l.readyState&&!/^c|loade/.test(l.readyState)||f||(l.onload=l.onreadystatechange=null,f=1,n._broadcast("ocLazyLoad.fileLoaded",u),d.resolve(l))},l.onerror=function(){h.remove(u),d.reject(new Error("Unable to load "+u))},l.async=c.serie?0:1;var g=a.lastChild;if(c.insertBefore){var m=e.element(e.isDefined(window.jQuery)?c.insertBefore:document.querySelector(c.insertBefore));m&&m.length>0&&(g=m[0])}if(g.parentNode.insertBefore(l,g),"css"==s){var v=r.navigator.userAgent.toLowerCase();if(v.indexOf("phantomjs/1.9")>-1)i=!0;else if(/iP(hone|od|ad)/.test(r.navigator.platform)){var y=r.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),L=parseFloat([parseInt(y[1],10),parseInt(y[2],10),parseInt(y[3]||0,10)].join("."));i=L<6}else if(v.indexOf("android")>-1){var $=parseFloat(v.slice(v.indexOf("android")+8));i=$<4.4}else if(v.indexOf("safari")>-1){var j=v.match(/version\/([\.\d]+)/i);i=j&&j[1]&&parseFloat(j[1])<6}if(i)var E=1e3,_=t((function(){try{l.sheet.cssRules,t.cancel(_),l.onload()}catch(e){--E<=0&&l.onerror()}}),20)}return d.promise},n}])}])}(angular),function(e){e.module("oc.lazyLoad").config(["$provide",function(n){n.decorator("$ocLazyLoad",["$delegate","$q",function(n,o){return n.filesLoader=function(r){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=[],a=[],s=[],u=[],c=null,l=n._getFilesCache();n.toggleWatch(!0),e.extend(t,r);var f=function(o){var r,f=null;if(e.isObject(o)&&(f=o.type,o=o.path),c=l.get(o),e.isUndefined(c)||!1===t.cache){if(null!==(r=/^(css|less|html|htm|js)?(?=!)/.exec(o))&&(f=r[1],o=o.substr(r[1].length+1,o.length)),!f)if(null!==(r=/[.](css|less|html|htm|js)?((\?|#).*)?$/.exec(o)))f=r[1];else{if(n.jsLoader.hasOwnProperty("ocLazyLoadLoader")||!n.jsLoader.hasOwnProperty("requirejs"))return void n._$log.error("File type could not be determined. "+o);f="js"}"css"!==f&&"less"!==f||-1!==i.indexOf(o)?"html"!==f&&"htm"!==f||-1!==a.indexOf(o)?"js"===f||-1===s.indexOf(o)?s.push(o):n._$log.error("File type is not valid. "+o):a.push(o):i.push(o)}else c&&u.push(c)};if(t.serie?f(t.files.shift()):e.forEach(t.files,(function(e){f(e)})),i.length>0){var d=o.defer();n.cssLoader(i,(function(o){e.isDefined(o)&&n.cssLoader.hasOwnProperty("ocLazyLoadLoader")?(n._$log.error(o),d.reject(o)):d.resolve()}),t),u.push(d.promise)}if(a.length>0){var h=o.defer();n.templatesLoader(a,(function(o){e.isDefined(o)&&n.templatesLoader.hasOwnProperty("ocLazyLoadLoader")?(n._$log.error(o),h.reject(o)):h.resolve()}),t),u.push(h.promise)}if(s.length>0){var p=o.defer();n.jsLoader(s,(function(o){e.isDefined(o)&&(n.jsLoader.hasOwnProperty("ocLazyLoadLoader")||n.jsLoader.hasOwnProperty("requirejs"))?(n._$log.error(o),p.reject(o)):p.resolve()}),t),u.push(p.promise)}if(0===u.length){var g=o.defer(),m="Error: no file to load has been found, if you're trying to load an existing module you should use the 'inject' method instead of 'load'.";return n._$log.error(m),g.reject(m),g.promise}return t.serie&&t.files.length>0?o.all(u).then((function(){return n.filesLoader(r,t)})):o.all(u).finally((function(e){return n.toggleWatch(!1),e}))},n.load=function(r){var t,i=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],a=this,s=null,u=[],c=o.defer(),l=e.copy(r),f=e.copy(i);if(e.isArray(l))return e.forEach(l,(function(e){u.push(a.load(e,f))})),o.all(u).then((function(e){c.resolve(e)}),(function(e){c.reject(e)})),c.promise;if(e.isString(l)?(s=a.getModuleConfig(l))||(s={files:[l]}):e.isObject(l)&&(s=e.isDefined(l.path)&&e.isDefined(l.type)?{files:[l]}:a.setModuleConfig(l)),null===s){var d=a._getModuleName(l);return t='Module "'+(d||"unknown")+'" is not configured, cannot load.',n._$log.error(t),c.reject(new Error(t)),c.promise}e.isDefined(s.template)&&(e.isUndefined(s.files)&&(s.files=[]),e.isString(s.template)?s.files.push(s.template):e.isArray(s.template)&&s.files.concat(s.template));var h=e.extend({},f,s);return e.isUndefined(s.files)&&e.isDefined(s.name)&&n.moduleExists(s.name)?n.inject(s.name,h,!0):(n.filesLoader(s,h).then((function(){n.inject(null,h).then((function(e){c.resolve(e)}),(function(e){c.reject(e)}))}),(function(e){c.reject(e)})),c.promise)},n}])}])}(angular),function(e){e.module("oc.lazyLoad").config(["$provide",function(n){n.decorator("$ocLazyLoad",["$delegate","$q",function(n,o){return n.cssLoader=function(r,t,i){var a=[];e.forEach(r,(function(e){a.push(n.buildElement("css",e,i))})),o.all(a).then((function(){t()}),(function(e){t(e)}))},n.cssLoader.ocLazyLoadLoader=!0,n}])}])}(angular),function(e){e.module("oc.lazyLoad").config(["$provide",function(n){n.decorator("$ocLazyLoad",["$delegate","$q",function(n,o){return n.jsLoader=function(r,t,i){var a=[];e.forEach(r,(function(e){a.push(n.buildElement("js",e,i))})),o.all(a).then((function(){t()}),(function(e){t(e)}))},n.jsLoader.ocLazyLoadLoader=!0,n}])}])}(angular),function(e){e.module("oc.lazyLoad").config(["$provide",function(n){n.decorator("$ocLazyLoad",["$delegate","$templateCache","$q","$http",function(n,o,r,t){return n.templatesLoader=function(i,a,s){var u=[],c=n._getFilesCache();return e.forEach(i,(function(n){var i=r.defer();u.push(i.promise),t.get(n,s).then((function(r){var t=r.data;e.isString(t)&&t.length>0&&e.forEach(e.element(t),(function(e){"SCRIPT"===e.nodeName&&"text/ng-template"===e.type&&o.put(e.id,e.innerHTML)})),e.isUndefined(c.get(n))&&c.put(n,!0),i.resolve()})).catch((function(e){i.reject(new Error('Unable to load template file "'+n+'": '+e.data))}))})),r.all(u).then((function(){a()}),(function(e){a(e)}))},n.templatesLoader.ocLazyLoadLoader=!0,n}])}])}(angular),Array.prototype.indexOf||(Array.prototype.indexOf=function(e,n){var o;if(null==this)throw new TypeError('"this" is null or not defined');var r=Object(this),t=r.length>>>0;if(0===t)return-1;var i=+n||0;if(Math.abs(i)===1/0&&(i=0),i>=t)return-1;for(o=Math.max(i>=0?i:t-Math.abs(i),0);o<t;){if(o in r&&r[o]===e)return o;o++}return-1})}));export default n;
//# sourceMappingURL=oclazyload.js.map