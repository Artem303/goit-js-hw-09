!function(){var t=document.querySelector("body"),e=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]");r.setAttribute("disabled","true"),e.addEventListener("click",(function(){e.setAttribute("disabled","true"),r.removeAttribute("disabled");var a=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3);r.addEventListener("click",(function t(){clearInterval(a),e.removeAttribute("disabled"),r.setAttribute("disabled","true"),r.removeEventListener("click",t)}))}))}();
//# sourceMappingURL=01-color-switcher.a44793af.js.map
