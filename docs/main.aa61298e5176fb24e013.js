(()=>{"use strict";document.body;function e(e,n,t,r,a,o,c){try{var u=e[o](c),i=u.value}catch(e){return void t(e)}u.done?n(i):Promise.resolve(i).then(r,a)}function n(n){return function(){var t=this,r=arguments;return new Promise((function(a,o){var c=n.apply(t,r);function u(n){e(c,a,o,u,i,"next",n)}function i(n){e(c,a,o,u,i,"throw",n)}u(void 0)}))}}var t,r,a,o=function(){var e=n(regeneratorRuntime.mark((function e(n){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("upload_preset","yewuqd7h"),t.append("file",n),e.prev=3,e.next=6,fetch("https://api.cloudinary.com/v1_1/duai9awes/upload",{method:"POST",body:t});case 6:if(!(r=e.sent).ok){e.next=13;break}return e.next=10,r.json();case 10:return e.abrupt("return",e.sent);case 13:return e.next=15,r.json();case 15:throw e.sent;case 16:e.next=21;break;case 18:throw e.prev=18,e.t0=e.catch(3),e.t0;case 21:case"end":return e.stop()}}),e,null,[[3,18]])})));return function(n){return e.apply(this,arguments)}}(),c=document.body;(a=document.createElement("div")).innerHTML='\n        <h1 class="mt-5">Subir archivos</h1>\n        <hr>\n\n        <label>Selecciona una fotografia: </label>\n        <input type="file" accept="image/png, image/jpeg, image/gif">\n        <br>\n        <img id="foto" class="img-thumbnail" src="">\n    ',c.append(a),t=document.querySelector("input"),r=document.querySelector("#foto"),t.addEventListener("change",(function(e){var n=e.target.files[0];o(n).then((function(e){var n=e.secure_url;return r.src=n})),console.log(n)}))})();