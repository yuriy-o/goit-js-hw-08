function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,p=function(){return c.Date.now()};function v(e,t,n){var r,o,i,a,u,f,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,l=t,a=e.apply(i,n)}function E(e){return l=e,u=setTimeout(O,t),c?b(e):a}function S(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=i}function O(){var e=p();if(S(e))return x(e);u=setTimeout(O,function(e){var n=t-(e-f);return s?m(n,i-(e-l)):n}(e))}function x(e){return u=void 0,v&&r?b(e):(r=o=void 0,a)}function h(){var e=p(),n=S(e);if(r=arguments,o=this,f=e,n){if(void 0===u)return E(f);if(s)return u=setTimeout(O,t),b(f)}return void 0===u&&(u=setTimeout(O,t)),a}return t=y(t)||0,g(n)&&(c=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==u&&clearTimeout(u),l=0,r=f=o=u=void 0},h.flush=function(){return void 0===u?a:x(p())},h}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};const b={formEl:document.querySelector(".feedback-form"),inputEl:document.querySelector('input[name="email"]'),textareaEl:document.querySelector('textarea[name="message"]')};b.formEl.addEventListener("submit",(function(e){e.preventDefault();const t=localStorage.getItem("feedback-form-state");try{JSON.parse(t)}catch(e){console.error("Can`t parse JSON from Local Store")}if(!b.inputEl.value)return void alert("Введіть email");if(!b.textareaEl.value)return void alert("Введіть текст");e.currentTarget.reset();t&&console.log("Введені дані: ",JSON.parse(t));localStorage.removeItem("feedback-form-state")})),b.formEl.addEventListener("input",e(t)((function(e){const{name:t,value:n}=e.target;E[t]=n,localStorage.setItem("feedback-form-state",JSON.stringify(E))}),500)),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(b.inputEl.value=e.email||"",b.textareaEl.value=e.message||"")}();const E={};
//# sourceMappingURL=03-feedback.202232ce.js.map
