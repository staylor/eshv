!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(1),c=o(r),l=n(2),a=o(l);n(3);var i=document.querySelector(".hero");if(i&&document.body.classList.contains("home")){var s=i.querySelector("p");s&&setTimeout(function(){return s.classList.add("loaded")},500)}(0,c.default)(),(0,a.default)(),window.onload=function(){setTimeout(function(){document.getElementById("action_welcome_message")&&document.body.classList.add("action-logged-in")},0)}},function(e,t,n){"use strict";function o(e){e.preventDefault(),c.innerHTML=e.target.parentNode.parentNode.innerHTML.replace(/<br[ \\\/]*?>/g," "),r.style.display="block"}Object.defineProperty(t,"__esModule",{value:!0});var r=document.getElementById("bio-modal"),c=r.querySelector("section"),l=r.querySelector(".modal-close"),a=document.querySelectorAll(".vfar-bios a");t.default=function(){if(a&&a.length>0){for(var e=0;e<a.length;e+=1)a[e].onclick=o;l.onclick=function(){r.style.display="none"}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){var n=[],o=!0,r=!1,c=void 0;try{for(var l,a=e[Symbol.iterator]();!(o=(l=a.next()).done)&&(n.push(l.value),!t||n.length!==t);o=!0);}catch(e){r=!0,c=e}finally{try{!o&&a.return&&a.return()}finally{if(r)throw c}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=document.getElementById("subnav"),c=document.getElementById("header-nav"),l=c.getElementsByTagName("a"),a=document.querySelectorAll(".subnav-links"),i=document.querySelectorAll(".subnav-caret"),s=document.getElementById("hamburger"),u=function(){if(window.scrollY>=120){if(c.getElementsByClassName("hovered").length>0){for(var e=0;e<l.length;e+=1)l[e].classList.remove("hovered");for(var t=0;t<a.length;t+=1)a[t].classList.contains("active")?a[t].style.display="block":a[t].style.display="none"}r.classList.add("sticky-nav")}else r.classList.remove("sticky-nav")},d=function(e){for(var t=0;t<l.length;t+=1)l[t].classList.remove("hovered");e.classList.add("hovered")},f=function(e){e.stopPropagation(),d(e.currentTarget);for(var t=0;t<a.length;t+=1)a[t].style.display="none";var n=e.currentTarget.id.replace("nav-","");document.getElementById("subnav-"+n).style.display="block"},m=document.querySelectorAll(".subnav-links a"),v=function(e){return function(t){if(!t.currentTarget.parentNode.classList.contains("active"))return!0;t.preventDefault();for(var n=0;n<m.length;n+=1)m[n].classList.remove("active");t.currentTarget.classList.add("active");var o=document.documentElement,r=document.getElementById(e),c=r.offsetTop-50,l=void 0;l=c>window.scrollY?c-window.scrollY:window.scrollY-c;!function e(t){setTimeout(function(){var n=o.scrollTop+window.innerHeight,r=o.offsetHeight;if((600===t||n!==r)&&window.scrollY!==c){var a=c,i=l/t*10;a=c>window.scrollY?Math.min(window.scrollY+i,c):Math.max(window.scrollY-i,c),window.scrollTo(0,a),e(t-10)}},10)}(600)}},y=function(e){e.stopPropagation(),document.body.classList.contains("navOpen")?document.body.classList.remove("navOpen"):document.body.classList.add("navOpen")},p=function(e){e.preventDefault(),e.stopPropagation();for(var t=!e.currentTarget.parentNode.classList.contains("open"),n=0;n<i.length;n+=1)i[n].parentNode.classList.remove("open");t?e.currentTarget.parentNode.classList.add("open"):document.activeElement.blur()};t.default=function(){window.addEventListener("scroll",u);for(var e=0;e<l.length;e+=1){var t=l[e],n=t.id.replace("nav-","");document.getElementById("subnav-"+n)&&t.addEventListener("mouseover",f)}for(var r=0;r<m.length;r+=1){var c=m[r],a=c.href.split("#"),d=o(a,2),g=d[1];c.addEventListener("click",v(g))}for(var h=0;h<i.length;h+=1)i[h].addEventListener("click",p);if(document.body.onclick=function(e){document.body.classList.contains("navOpen")&&y(e)},s.onclick=y,window.location.hash){var b=window.location.hash.substring(1),w=document.getElementById(b);setTimeout(function(){document.documentElement.scrollTop=w.offsetTop-60,document.body.scrollTop=w.offsetTop-60},10)}}},function(e,t,n){"use strict";var o=document.querySelector(".splash-modal");if(o){var r=document.getElementById("join-us");if(document.querySelector(".modal-close").onclick=function(){o.style.display="none"},document.cookie="splash=1; path=/;",r){var c=void 0,l=function(){return c||(c=document.querySelector("#modal-form-id #new_answer"),c.onsubmit=function(){o.style.display="none"},c)},a=function(e){e.preventDefault(),l(),o.style.display="block",o.classList.add("simple-modal")};r.onclick=a;document.querySelectorAll(".trigger-modal").forEach(function(e){e.addEventListener("click",a)})}}}]);