(this["webpackJsonpadmin-art-store"]=this["webpackJsonpadmin-art-store"]||[]).push([[5],{91:function(n,e,t){"use strict";t.r(e);var r=t(0),o=t.n(r),a=t(16);function i(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function u(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var t=[],r=!0,o=!1,a=void 0;try{for(var i,u=n[Symbol.iterator]();!(r=(i=u.next()).done)&&(t.push(i.value),!e||t.length!==e);r=!0);}catch(c){o=!0,a=c}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return t}}(n,e)||function(n,e){if(n){if("string"===typeof n)return i(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(n,e):void 0}}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=t(11);function l(){var n=Object(a.a)(["\n  position: absolute;\n  top: 1%;\n  left: 32px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  width: 25px;\n  height: 25px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  z-index: 10;\n\n  &:focus {\n    outline: none;\n  }\n\n  div {\n    width: 25px;\n    height: 1px;\n    background: ",";\n    border-radius: 10px;\n    transition: all 0.3s linear;\n    position: relative;\n    transform-origin: 1px;\n\n    :first-child {\n      transform: ",";\n    }\n\n    :nth-child(2) {\n      opacity: ",";\n      transform: ",";\n    }\n\n    :nth-child(3) {\n      transform: ",";\n    }\n  }\n"]);return l=function(){return n},n}var s=c.d.button(l(),(function(n){var e=n.theme;return n.open?e.colors.white:e.colors.primaryLight}),(function(n){return n.open?"rotate(45deg)":"rotate(0)"}),(function(n){return n.open?"0":"1"}),(function(n){return n.open?"translateX(20px)":"translateX(0)"}),(function(n){return n.open?"rotate(-45deg)":"rotate(0)"})),p=function(n){var e=n.open,t=n.setOpen;return o.a.createElement(s,{open:e,onClick:function(){return t(!e)}},o.a.createElement("div",null),o.a.createElement("div",null),o.a.createElement("div",null))};function f(){var n=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  transform: ",";\n  background: ",";\n  height: 100vh;\n  text-align: left;\n  padding: 32px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: transform 0.3s ease-in-out;\n\n  @media (max-width: ",") {\n    width: 100%;\n  }\n\n  a {\n    font-size: 32px;\n    text-transform: uppercase;\n    padding: 32px 0;\n    font-weight: bold;\n    letter-spacing: 8px;\n    color: ",";\n    text-decoration: none;\n    transition: color 0.3s linear;\n\n    @media (max-width: ",") {\n      font-size: 24px;\n      text-align: center;\n    }\n\n    &:hover {\n      color: ",";\n    }\n  }\n\n"]);return f=function(){return n},n}var m=c.d.nav(f(),(function(n){return n.open?"translateX(0)":"translateX(-100%)"}),(function(n){return n.theme.colors.primaryDark}),(function(n){return n.theme.colors.mobile}),(function(n){return n.theme.colors.primaryLight}),(function(n){return n.theme.burgerMenu.mobile}),(function(n){return n.theme.colors.primaryHover})),d=function(n){var e=n.open;return o.a.createElement(m,{open:e},o.a.createElement("a",{href:"/"},o.a.createElement("span",{role:"img","aria-label":"about us"},"\ud83d\udc81\ud83c\udffb\u200d\u2642\ufe0f"),"About us"),o.a.createElement("a",{href:"/"},o.a.createElement("span",{role:"img","aria-label":"price"},"\ud83d\udcb8"),"Pricing"),o.a.createElement("a",{href:"/"},o.a.createElement("span",{role:"img","aria-label":"contact"},"\ud83d\udce9"),"Contact"))};function h(){var n=Object(a.a)(["\n  ","\n"]);return h=function(){return n},n}function b(){var n=Object(a.a)(["\n  display: flex;\n  justify-content: space-around;\n  background-color: ",";\n  margin-bottom: 10px;\n  width: 100%;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]);return b=function(){return n},n}function x(){var n=Object(a.a)(["\n  outline: 1px solid red;\n"]);return x=function(){return n},n}var v=Object(c.c)(x()),g=c.d.div(b(),(function(n){return n.theme.colors.softGrey})),y=c.d.div(h(),v),E=function(){var n,e,t=u(Object(r.useState)(!1),2),a=t[0],i=t[1],c=Object(r.useRef)();return n=c,e=function(){return i(!1)},Object(r.useEffect)((function(){var t=function(t){n.current&&!n.current.contains(t.target)&&e(t)};return document.addEventListener("mousedown",t),function(){document.removeEventListener("mousedown",t)}}),[n,e]),o.a.createElement(g,null,o.a.createElement(y,{ref:c},o.a.createElement(p,{open:a,setOpen:i}),o.a.createElement(d,{open:a,setOpen:i})),o.a.createElement(y,null,o.a.createElement("p",null,"LOGO")),o.a.createElement(y,null,o.a.createElement("p",null,"IMAGE, NAME")))},w=function(){return o.a.createElement(E,null)};e.default=function(){return o.a.createElement(w,null)}}}]);
//# sourceMappingURL=5.6f9a86fa.chunk.js.map