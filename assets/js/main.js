!function(e){function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=0)}([function(e,n,t){"use strict";var o=function(){function e(e,n){var t=[],o=!0,r=!1,l=void 0;try{for(var a,i=e[Symbol.iterator]();!(o=(a=i.next()).done)&&(t.push(a.value),!n||t.length!==n);o=!0);}catch(e){r=!0,l=e}finally{try{!o&&i.return&&i.return()}finally{if(r)throw l}}return t}return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return e(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=document.body,l=document.getElementById("masthead"),a=document.getElementById("subnav"),i=document.getElementById("header-nav"),c=i.getElementsByTagName("a"),s=document.querySelectorAll(".subnav-links"),d=document.getElementById("hamburger"),u=document.querySelector(".hero"),m=document.querySelector(".modal"),f=document.getElementById("join-us"),v=document.querySelectorAll(".trigger-modal");window.addEventListener("scroll",function(){window.scrollY>=120?a.classList.add("sticky-nav"):a.classList.remove("sticky-nav")}),l.addEventListener("mouseleave",function(){for(var e=0;e<c.length;e+=1)c[e].classList.remove("hovered");for(var n=0;n<s.length;n+=1)s[n].classList.contains("active")?s[n].style.display="block":s[n].style.display="none"});for(var y=function(e){for(var n=0;n<c.length;n+=1)c[n].classList.remove("hovered");e.classList.add("hovered")},p=function(e){e.stopPropagation(),y(e.currentTarget);for(var n=0;n<s.length;n+=1)s[n].style.display="none";var t=e.currentTarget.id.replace("nav-","");document.getElementById("subnav-"+t).style.display="block"},g=0;g<c.length;g+=1){var w=c[g],h=w.id.replace("nav-","");document.getElementById("subnav-"+h)&&w.addEventListener("mouseover",p)}for(var b=document.querySelectorAll(".subnav-links a"),L=0;L<b.length;L+=1){var E=b[L],k=E.href.split("#"),B=o(k,2),I=B[1];E.addEventListener("click",function(e){return function(n){n.preventDefault();var t=document.documentElement,o=document.getElementById(e),r=o.offsetTop-50,l=void 0;l=r>window.scrollY?r-window.scrollY:window.scrollY-r;!function e(n){setTimeout(function(){var o=t.scrollTop+window.innerHeight,a=t.offsetHeight;if((600===n||o!==a)&&window.scrollY!==r){var i=r,c=l/n*10;i=r>window.scrollY?Math.min(window.scrollY+c,r):Math.max(window.scrollY-c,r),window.scrollTo(0,i),e(n-10)}},10)}(600)}}(I))}var S=function(e){e.stopPropagation(),r.classList.contains("navOpen")?r.classList.remove("navOpen"):r.classList.add("navOpen")};if(r.onclick=function(e){r.classList.contains("navOpen")&&S(e)},d.onclick=S,u&&r.classList.contains("home")){var T=u.querySelector("p");T&&setTimeout(function(){return T.classList.add("loaded")},500)}if(m){if(document.querySelector(".modal-close").onclick=function(){m.style.display="none"},document.cookie="splash=1; path=/;",f){var q=void 0,O=function(){return q||(q=document.querySelector("#modal-form-id #new_answer"),q.onsubmit=function(){m.style.display="none"},q)},Y=function(e){e.preventDefault(),O(),m.style.display="block",m.classList.add("simple-modal")};f.onclick=Y,v.forEach(function(e){e.addEventListener("click",Y)})}}window.onload=function(){setTimeout(function(){document.getElementById("action_welcome_message")&&r.classList.add("action-logged-in")},0)}}]);