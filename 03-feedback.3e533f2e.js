!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var o,i,a,u,l,f,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function T(e){return c=e,l=setTimeout(h,t),s?b(e):u}function S(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=a}function h(){var e=p();if(S(e))return w(e);l=setTimeout(h,function(e){var n=t-(e-f);return d?g(n,a-(e-c)):n}(e))}function w(e){return l=void 0,v&&o?b(e):(o=i=void 0,u)}function O(){var e=p(),n=S(e);if(o=arguments,i=this,f=e,n){if(void 0===l)return T(f);if(d)return l=setTimeout(h,t),b(f)}return void 0===l&&(l=setTimeout(h,t)),u}return t=j(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==l&&clearTimeout(l),c=0,o=f=i=l=void 0},O.flush=function(){return void 0===l?u:w(p())},O}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=u.test(t);return r||l.test(t)?f(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:o,maxWait:t,trailing:i})};var T=document.querySelector(".feedback-form");T.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,n=t.email,o=t.message;console.log("1) Виведені нижче дані отримані з localStorage");var r=localStorage.getItem("email"),i=localStorage.getItem("message");console.log({email:r,message:i}),console.log("2) Виведені нижче дані отримані з полів 'input' та 'textarea'"),console.log({email:n.value,message:o.value}),localStorage.removeItem("email"),localStorage.removeItem("message"),e.currentTarget.reset()})),T.addEventListener("input",e(t)((function(e){var t=e.target,n=t.name,o=t.value;localStorage.setItem(n,o)}),500))}();
//# sourceMappingURL=03-feedback.3e533f2e.js.map
