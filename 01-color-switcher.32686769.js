const t=document.querySelector("body"),e=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]");r.setAttribute("disabled","true"),e.addEventListener("click",(function(){return timerId=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),e.setAttribute("disabled","true"),void r.removeAttribute("disabled")})),r.addEventListener("click",(function(){clearInterval(timerId),e.removeAttribute("disabled"),r.setAttribute("disabled","true")}));
//# sourceMappingURL=01-color-switcher.32686769.js.map
