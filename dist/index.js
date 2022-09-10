(()=>{"use strict";var n={820:(n,t,e)=>{e.d(t,{Z:()=>r});var o=e(645),i=e.n(o)()((function(n){return n[1]}));i.push([n.id,".navigation{margin-bottom:15px}#form-create,#form-update{display:flex;width:300px;height:27px;justify-content:space-between;margin-bottom:10px}#btn-create-car,#btn-update-car{width:57px}.race-control button{height:27px;padding:0 10px}.race-control{display:flex;width:300px;justify-content:space-between}.car-block{border-bottom:3px dotted blue;margin-bottom:20px}.car-block__menu{height:30px;display:flex;align-items:center;column-gap:20px}.car{width:100px;height:40px}.race-block{display:flex;height:64px;justify-content:space-between;align-items:end}.flag-img{margin-right:100px}.popup-content{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);margin:40px auto 0px auto;font-size:50px;width:300px;padding:10px;background-color:#c5c5c5;border-radius:5px;box-shadow:0px 0px 10px #000}table{border:1px solid #000;border-collapse:collapse;table-layout:fixed;margin-bottom:20px}#arrow-sort-wins{fill:red;width:24px;height:24px}#arrow-sort-time{fill:red;width:24px;height:24px}table tr:nth-child(odd){background-color:#12acb8}table thead th{border:1px solid #000;background-color:#72e8f1}table thead th:nth-child(1){width:5%;text-align:left}table thead th:nth-child(2){width:15%}thead th:nth-child(3){width:55%}table thead th:nth-child(4){width:10%}table thead th:nth-child(5){width:15%}table tr td:nth-child(2),table tr td:nth-child(4),table tr td:nth-child(5){text-align:center}.page-number{margin-bottom:20px}table .car{height:30px;width:70px}html,body{height:100%}body{background-color:#72e8f1}.wrapper{max-width:1280px;margin:0 auto;padding:20px}",""]);const r=i},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=n(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,o){"string"==typeof n&&(n=[[null,n,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);o&&i[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),t.push(s))}},t}},379:(n,t,e)=>{var o,i=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),r=[];function a(n){for(var t=-1,e=0;e<r.length;e++)if(r[e].identifier===n){t=e;break}return t}function c(n,t){for(var e={},o=[],i=0;i<n.length;i++){var c=n[i],s=t.base?c[0]+t.base:c[0],u=e[s]||0,d="".concat(s," ").concat(u);e[s]=u+1;var l=a(d),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==l?(r[l].references++,r[l].updater(f)):r.push({identifier:d,updater:h(f,t),references:1}),o.push(d)}return o}function s(n){var t=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var r=e.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(n){t.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(t);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,d=(u=[],function(n,t){return u[n]=t,u.filter(Boolean).join("\n")});function l(n,t,e,o){var i=e?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=d(t,i);else{var r=document.createTextNode(i),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(r,a[t]):n.appendChild(r)}}function f(n,t,e){var o=e.css,i=e.media,r=e.sourceMap;if(i?n.setAttribute("media",i):n.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var m=null,v=0;function h(n,t){var e,o,i;if(t.singleton){var r=v++;e=m||(m=s(t)),o=l.bind(null,e,r,!1),i=l.bind(null,e,r,!0)}else e=s(t),o=f.bind(null,e,t),i=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return o(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;o(n=t)}else i()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var e=c(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<e.length;o++){var i=a(e[o]);r[i].references--}for(var s=c(n,t),u=0;u<e.length;u++){var d=a(e[u]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}e=s}}}}},t={};function e(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={id:o,exports:{}};return n[o](r,r.exports,e),r.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0,(()=>{const n={carsPage:1,winnerNumberPage:1,cars:[],carsCount:4,winners:[],winnersCount:1,activePage:"garage",animation:{},order:"ASC",sort:"time",createFormData:{name:"",color:"#ff5566"},updateFormData:{id:1,name:"Tesla",color:"#55ff66"}};var t;!function(n){n[n.OK=200]="OK",n[n["BAD REQUEST"]=400]="BAD REQUEST",n[n["TOO MANY REQUESTS"]=429]="TOO MANY REQUESTS",n[n["INTERNAL SERVER ERROR"]=500]="INTERNAL SERVER ERROR"}(t||(t={}));var o=function(n,t,e,o){return new(e||(e=Promise))((function(i,r){function a(n){try{s(o.next(n))}catch(n){r(n)}}function c(n){try{s(o.throw(n))}catch(n){r(n)}}function s(n){var t;n.done?i(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(a,c)}s((o=o.apply(n,t||[])).next())}))};const i="http://127.0.0.1:3000",r=`${i}/garage`,a=`${i}/engine`,c=`${i}/winners`;function s(n){return o(this,void 0,void 0,(function*(){const t=yield fetch(`${r}/${n}`);return{item:yield t.json()}}))}function u(n){return o(this,void 0,void 0,(function*(){return(yield fetch(`${r}`,{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}})).json()}))}function d(n){return o(this,void 0,void 0,(function*(){return(yield fetch(`${r}/${n}`,{method:"DELETE"})).json()}))}function l(t){n.animation[t]&&(window.cancelAnimationFrame(n.animation[t]),n.animation[t]=0)}function f(n){return`\n    <div class="car-block__menu">\n            <div class="menu__block">\n               <button id="btn-select-car" class="select">SELECT</button>\n               <button id="btn-remove-car" class="remove">REMOVE</button>\n            </div>\n            <h3 class="name-auto">${n}</h3>\n         </div>`}function m(n){return'\n   <div class="main__buttons">\n               <button id="btn-start-engine" class="start-engine">A</button>\n               <button id="btn-stop-engine" class="stop-engine" disabled>B</button>\n            </div>'.concat(`<div class="race-block">\n            ${v(n)}\n            <img class=flag-img src="./assets/images/flag64.png" alt="flag">\n      </div>`)}function v(n){return`<svg class="car" fill="${n}">\n    <use xlink:href="./assets/images/spriteCar.svg#car"></use>\n  </svg>`}var h=function(n,t,e,o){return new(e||(e=Promise))((function(i,r){function a(n){try{s(o.next(n))}catch(n){r(n)}}function c(n){try{s(o.throw(n))}catch(n){r(n)}}function s(n){var t;n.done?i(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(a,c)}s((o=o.apply(n,t||[])).next())}))};function b(){return h(this,void 0,void 0,(function*(){yield function(n,t=7){return o(this,void 0,void 0,(function*(){const e=yield fetch(`${r}?_page=${n}&_limit=${t}`);return{items:yield e.json(),count:e.headers.get("X-Total-Count")}}))}(n.carsPage).then((t=>{n.cars=t.items,n.carsCount=Number(t.count)}))}))}var p=function(n,t,e,o){return new(e||(e=Promise))((function(i,r){function a(n){try{s(o.next(n))}catch(n){r(n)}}function c(n){try{s(o.throw(n))}catch(n){r(n)}}function s(n){var t;n.done?i(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(a,c)}s((o=o.apply(n,t||[])).next())}))};function g(){!function(n){h(this,void 0,void 0,(function*(){yield u(n),Y()}))}(I())}function y(){const{id:n,name:t,color:e}=W();!function(n){h(this,void 0,void 0,(function*(){try{yield function(n,t){return o(this,void 0,void 0,(function*(){return(yield fetch(`${r}/${n}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()}))}(n.id,{name:n.name,color:n.color}),function(n){const t=document.querySelector(`#car${n.id}`);t.setAttribute("color",n.color),t.setAttribute("name",n.name),t.innerHTML=`${f(n.name)}${m(n.color)}`}(n)}catch(n){console.error(n)}}))}({id:n,name:t,color:e})}function w(){n.activePage="garage",z(),Y()}function x(){!function(){const t=I(),e=W();n.createFormData=t,n.updateFormData=e}(),n.activePage="winners",D()}function C(e,i){return p(this,void 0,void 0,(function*(){const r=e.querySelector(".car");J("btn-start-engine",!1,e);try{const c=yield function(n){return o(this,void 0,void 0,(function*(){return yield fetch(`${a}?id=${n}&status=started`,{method:"PATCH"})}))}(i);if(c.status===t.OK){const{velocity:s,distance:u}=yield c.json(),d=Math.round(u/s),f=function(n){const t=n.nextElementSibling,e=n.getBoundingClientRect();return t.getBoundingClientRect().right-e.left}(r);!function(t,e,o,i){let r;n.animation[e]=window.requestAnimationFrame((function a(c){r||(r=c);const s=c-r;t.style.transform=`translateX(${Math.min(s*o/i,o)}px)`,s<i&&(n.animation[e]=window.requestAnimationFrame(a))}))}(r,i,f,d),J("btn-stop-engine",!0,e),e.classList.add("started");const m=yield function(n){return o(this,void 0,void 0,(function*(){return yield fetch(`${a}?id=${n}&status=drive`,{method:"PATCH"})}))}(i);return m.status===t["INTERNAL SERVER ERROR"]&&l(i),{status:m.status,id:i,time:d}}}catch(n){console.error(n)}return Promise.reject()}))}function A(){J("btn-race",!1),J("btn-reset",!1);const n=Array.from(document.querySelectorAll(".car-block")),t=[];V(n.map((n=>{const e=U(n.id);return t.push(e),C(n,e)})),t)}function S(){!function(){const n=Array.from(document.querySelectorAll(".started")).map((n=>B(this,void 0,void 0,(function*(){yield H(U(n.id),n)}))));Promise.all(n).then((()=>{J("btn-race",!0)}))}()}function $(){"garage"===n.activePage?(n.carsPage=n.carsPage-1,Y()):(n.winnerNumberPage=n.winnerNumberPage-1,D())}function E(){return p(this,void 0,void 0,(function*(){"garage"===n.activePage?(n.carsPage=n.carsPage+1,Y()):(n.winnerNumberPage=n.winnerNumberPage+1,D())}))}function P(){const n=new Array(100).fill(1).map((()=>p(this,void 0,void 0,(function*(){yield u({name:G(),color:_()})}))));Promise.all(n).then((()=>{Y()})).catch((n=>console.error(n)))}function R(){n.sort="wins",n.order="ASC"===n.order?"DESC":"ASC",D()}function T(){n.sort="time",n.order="ASC"===n.order?"DESC":"ASC",D()}function N(n,t){document.querySelector(`#${n}`).addEventListener("click",t)}function M(n,t){return`\n    <div class="winners">\n         <div class="container">\n            <h1>Winners<span id="quantity-of-winners" class="quantity-of-winners">(${n})</span></h1>\n            <div id="number-page-winners" class="page-number">Page #${t}</div>\n            <table id="table-winners" class="table-winners">\n               <thead>\n                  <tr>\n                      <th>N</th>\n                      <th>Car</th>\n                      <th>Name</th>\n                      <th id="sort-wins" class="btn-sort-wins">Wins\n                        ${L("wins")}\n                      </th>\n                      <th id="sort-time" class="btn-sort-time">Best time(sec)\n                        ${L("time")}\n                      </th>\n                  </tr>\n               </thead>\n               <tbody>\n               </tbody>\n            </table>\n         </div>\n    </div>`}function L(n){return`\n            <svg id="arrow-sort-${n}" class="arrow-sort-${n}">\n    <use xlink:href="./assets/images/spriteArrowUp.svg#up-arrow-24"></use>\n  </svg>\n      `}var j=function(n,t,e,o){return new(e||(e=Promise))((function(i,r){function a(n){try{s(o.next(n))}catch(n){r(n)}}function c(n){try{s(o.throw(n))}catch(n){r(n)}}function s(n){var t;n.done?i(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(a,c)}s((o=o.apply(n,t||[])).next())}))};function k(){return j(this,void 0,void 0,(function*(){yield function(n=1,t=10,e="time",i="ASC"){return o(this,void 0,void 0,(function*(){const o=yield fetch(`${c}?_page=${n}&_limit=${t}&_sort=${e}&_order=${i}`);return{items:yield o.json(),count:Number(o.headers.get("X-Total-Count"))}}))}(n.winnerNumberPage,10,n.sort,n.order).then((t=>{n.winners=t.items,n.winnersCount=t.count}))}))}function O(n){document.querySelector(`table .arrow-sort-${n}`).setAttribute("transform","scale(1, -1)")}function D(){return j(this,void 0,void 0,(function*(){yield k(),yield function(){return j(this,void 0,void 0,(function*(){yield k();const t=n.winnersCount,e=n.winnerNumberPage,o=['\n   <nav class="navigation">\n         <div class="container">\n            <div class="navigation__buttons">\n               <button id="btn-garage" class="btn-garage button">TO GARAGE</button>\n               <button id="btn-winners" class="btn-winner button">TO WINNERS</button>\n            </div>\n         </div>\n      </nav>',M(t.toString(),e.toString()),'\n    <footer>\n            <div class="container">\n                  <div class="buttons-pages-navigation">\n                        <button id="btn-prev" class="btn-prev button" disabled>Prev</button>\n                        <button id="btn-next" class="btn-next button" disabled>Next</button>\n                  </div>\n            </div>\n      </footer>'].join(""),i=document.querySelector(".wrapper");i.innerHTML="",i.insertAdjacentHTML("afterbegin",o),function(){j(this,void 0,void 0,(function*(){const t=n.winners,e=yield t.map((n=>j(this,void 0,void 0,(function*(){return{car:yield s(n.id),wins:n.wins,time:n.time}}))));Promise.all(e).then((t=>{t.map(((t,e)=>{!function(n,t,e,o,i){const r=document.querySelector("#table-winners tbody");null==r||r.insertAdjacentHTML("beforeend",function(n,t,e,o,i){return`<tr>\n            <td>${n}</td>\n            <td>${v(t)}</td>\n            <td>${e}</td>\n            <td>${o}</td>\n            <td>${i}</td>\n      </tr>`}(n,t,e,o,i))}(e+10*(n.winnerNumberPage-1)+1,t.car.item.color,t.car.item.name,t.wins,t.time)}))}))}))}()}))}(),K(),"wins"===n.sort&&"DESC"===n.order&&O("wins"),"time"===n.sort&&"DESC"===n.order&&O("time"),N("btn-prev",$),N("btn-next",E),N("btn-garage",w),N("sort-wins",R),N("sort-time",T)}))}const q=["Acura","Alfa Romeo","Alpine","Apollo","Apple","Aston Martin","Audi","Automobili Pininfarina","Bentley","BMW","Bollinger","Brilliance","Bugatti","Buick","BYD","Cadillac","Chana","Chery","Chevrolet","Chrysler","Citroen","Continental","CUPRA","Dacia","Daewoo","Daihatsu","Datsun","Detroit Electric","Dodge","DS Automobiles","FAW","Ferrari","Fiat","Fisker","Ford","Foxtron","Geely","Genesis","GMC","Great Wall","Haval","Honda","Hummer","Hyundai","Ineos","Infiniti","Iran Khodro","JAC","Jaguar","Jeep","JETOUR","KIA","Koenigsegg","Lada","Lamborghini","Lancia","Land Rover","Lexus","Lifan","Lincoln","Lordstown","Lotus","Lucid","LvChi","Lynk & Co","Maserati","Maybach","Mazda","MCLaren","Mercedes-Benz","MG","MINI","Mitsubishi","Nikola","NIO","Nissan","Opel","Pagani","Peugeot","Polestar","Porsche","Qoros","Range Rover","Ravon","Renault","Rimac","Rivian","Rolls-Royce","Saab","Saipa","SEAT","Skoda","smart","SsangYong","SSC North America","Stellantis","Subaru","Suzuki","Tata","Tesla","Torsus","Toyota","VinFast","Volkswagen","Volvo","Xpeng","Zotye"],F=["Durango","Ram","Challenger","Charger","Grand Caravan","X7","X5","X3","X6 M","X6","X1","X4","C3 Aircross","C5 Aircross","Duster","CR-V","Corolla","C4 Cactus","DS3 Crossback","C1","C3","Berlingo Multispace","DS4 Crossback","UX 250h","NX 300h","LC 500","RX 350/200t","Rapid","Largus","IS 200t","LS 500h","RX","ES 200/250/350","Hatchback","CX-5","Sedan","CX-30","CX-9","CX-3","MX-5 Roadster","Phantom","Camry","Polo","Cullinan","Ghost","Dawn","Duster","Arkana","Sandero","Trafic Fourgon","Captur","Kadjar","RAV4","Rio","Creta","Solaris"];function X(){const n=document.querySelector("#popup");n&&(n.remove(),document.body.removeEventListener("click",(()=>X())))}var B=function(n,t,e,o){return new(e||(e=Promise))((function(i,r){function a(n){try{s(o.next(n))}catch(n){r(n)}}function c(n){try{s(o.throw(n))}catch(n){r(n)}}function s(n){var t;n.done?i(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(a,c)}s((o=o.apply(n,t||[])).next())}))};function I(){const n=document.querySelector("#form-create"),[t,e]=Array.from(n.elements);return{name:t.value,color:e.value}}function _(){let n="#";for(let t=0;t<6;t++)n+="0123456789ABCDEF".charAt(Math.round(15*Math.random()));return n}function H(n,t){return B(this,void 0,void 0,(function*(){J("btn-stop-engine",!1,t),yield function(n){return o(this,void 0,void 0,(function*(){return(yield fetch(`${a}?id=${n}&status=stopped`,{method:"PATCH"})).json()}))}(n),l(n),function(n){n.querySelector(".car").style.transform="translateX(0px)"}(t),J("btn-start-engine",!0,t),t.classList.remove("started")}))}function G(){const n=Math.floor(Math.random()*q.length),t=Math.floor(Math.random()*F.length);return`${q[n]} ${F[t]}`}function U(n){const[t]=n.split("car").reverse();return Number(t)}function V(e,i){if(0===e.length)document.body.insertAdjacentHTML("beforeend",'\n    <div class="popup">\n        <div class="popup-content">\n            All car was been broken\n        </div>\n    </div>');else{const r=[...e],a=[...i];Promise.race(e).then((e=>{const{status:s,id:u,time:d}=e;if(s===t["INTERNAL SERVER ERROR"]){const n=i.indexOf(u);return r.splice(n,1),a.splice(n,1),V(r,a)}const l=function(t){const e=n.cars.find((n=>n.id===t));return e}(u);!function(t,e){const{id:i}=t,r=(e/1e3).toFixed(2);!function(t,e){const i=n.winners.find((n=>n.id===e));if(i)i.time=i.time<t?i.time:t,i.wins=i.wins+1,function(n,t){o(this,void 0,void 0,(function*(){return(yield fetch(`${c}/${n}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).json()}))}(e,{wins:i.wins,time:i.time});else{const i={id:e,wins:1,time:t};n.winners.push(i),n.winnersCount=n.winnersCount+1,function(n){o(this,void 0,void 0,(function*(){return(yield fetch(`${c}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})).json()}))}(i)}}(Number(r),i)}(l,d),"garage"===n.activePage&&function(n,t){const e=`\n    <div id="popup" class="popup">\n    <div class="popup-content">\n       The winner is ${n} [time: ${(t/1e3).toFixed(2)}sec]\n    </div>\n</div>`;document.body.insertAdjacentHTML("beforeend",e)}(l.name,d),J("btn-reset",!0)})),document.body.addEventListener("click",(()=>X()))}}function J(n,t,e){let o;o=e?e.querySelector(`#${n}`):document.querySelector(`#${n}`),t?o.removeAttribute("disabled"):o.setAttribute("disabled","")}function K(){let t,e,o;"garage"===n.activePage?(t=n.carsPage,e=7,o=n.carsCount):(t=n.winnerNumberPage,e=10,o=n.winnersCount),J("btn-prev",t>1),J("btn-next",!(o-(t-1)*e<=e||o<=e))}function W(){const n=document.querySelector("#form-update"),[t,e]=Array.from(n.elements),o=n.getAttribute("carId");return{id:Number(o),name:t.value,color:e.value}}function Q(n,t){return`\n    <div class="garage">\n         <div class="container">\n            <h1 id="quantity-of-cars" class="quantity-of-cars">Garage(${n})</h1>\n            <div class="page-number">Page #${t}</div>\n         </div>\n      </div>`}function z(){const t=document.createElement("div");t.className="wrapper";const e=n.carsPage.toString(),o=n.carsCount,i=n.createFormData,r=n.updateFormData,a=function(...n){return`\n    <div class="select">\n            <div class="container">\n                  ${n.join("")}\n            </div>\n      </div>`}(function(n){const{name:t,color:e}=n;return`\n   <form id="form-create" name="create">\n               <input type="text" list="brandCar" name="input-create" id="create" value="${t}" autocomplete="off">\n               <datalist id="brandCar">\n                    <option value="Audi">\n                    <option value="BMW">\n                    <option value="Ford">\n                    <option value="Mercedes">\n                    <option value="Lexus">\n                    <option value="Toyota">\n                    <option value="Tesla">\n                </datalist>\n               <input type="color" name="create-color" id="create-color" value="${e}">\n               <input id="btn-create-car" type="button" value="create">\n            </form>`}(i),function(n){const{id:t,name:e,color:o}=n;return`\n   <form id="form-update" carId="${t}" name="update">\n               <input type="text" name="input-update" id="input-update" value="${e}" autocomplete="off">\n               <input type="color" name="update-color" id="update-color" value="${o}">\n               <input id="btn-update-car" type="button" value="update">\n            </form>`}(r),'\n   <div class="race-control">\n               <button id="btn-race" class="race">race</button>\n               <button id="btn-reset" class="reset">reset</button>\n               <button id="btn-generate-cars" class="generate cars">generate cars</button>\n            </div>'),c=['\n   <nav class="navigation">\n         <div class="container">\n            <div class="navigation__buttons">\n               <button id="btn-garage" class="btn-garage button">TO GARAGE</button>\n               <button id="btn-winners" class="btn-winner button">TO WINNERS</button>\n            </div>\n         </div>\n      </nav>',a,Q(o.toString(),e),'\n    <footer>\n            <div class="container">\n                  <div class="buttons-pages-navigation">\n                        <button id="btn-prev" class="btn-prev button" disabled>Prev</button>\n                        <button id="btn-next" class="btn-next button" disabled>Next</button>\n                  </div>\n            </div>\n      </footer>'].join("");t.insertAdjacentHTML("afterbegin",c),document.body.innerHTML="",document.body.appendChild(t)}function Y(){return t=this,e=void 0,r=function*(){(function(){return B(this,void 0,void 0,(function*(){return Promise.all([b(),k()])}))})().then((()=>{z(),n.cars.map((n=>function(n){const t=document.querySelector(".garage");null==t||t.insertAdjacentElement("beforeend",function(n){const t=document.querySelector(".garage .container"),e=document.createElement("div"),{name:i,color:r,id:a}=n;return e.className="car-block",e.id=`car${a}`,e.setAttribute("color",n.color),e.setAttribute("name",n.name),e.innerHTML=`${f(i)}${m(r)}`,e.addEventListener("click",(n=>{!function(n){const t=n.target.closest(".car-block"),e=U(t.id),i=t.getAttribute("color"),r={id:e,name:t.getAttribute("name"),color:i};switch(n.target.id){case"btn-select-car":!function(n){!function(n){const t=function(n){const t=document.querySelector("#form-update");return t.setAttribute("carId",`${n.id}`),t}(n),[e,o]=Array.from(t.elements);e.value=n.name,o.value=n.color}(n)}(r);break;case"btn-remove-car":!function(n){p(this,void 0,void 0,(function*(){!function(n){h(this,void 0,void 0,(function*(){try{yield d(n),Y()}catch(n){console.error(n)}}))}(n),function(n){o(this,void 0,void 0,(function*(){return(yield fetch(`${c}/${n}`,{method:"DELETE"})).json()}))}(n)}))}(e);break;case"btn-start-engine":C(t,e);break;case"btn-stop-engine":!function(n,t){p(this,void 0,void 0,(function*(){yield H(t,n)}))}(t,e)}}(n)})),t.insertAdjacentElement("beforeend",e),t}(n))}(n))),K(),N("btn-winners",x),N("btn-create-car",g),N("btn-update-car",y),N("btn-race",A),N("btn-reset",S),N("btn-prev",$),N("btn-next",E),N("btn-generate-cars",P)}))},new((i=void 0)||(i=Promise))((function(n,o){function a(n){try{s(r.next(n))}catch(n){o(n)}}function c(n){try{s(r.throw(n))}catch(n){o(n)}}function s(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(n){n(e)}))).then(a,c)}s((r=r.apply(t,e||[])).next())}));var t,e,i,r}var Z=e(379),nn=e.n(Z),tn=e(820);nn()(tn.Z,{insert:"head",singleton:!1}),tn.Z.locals,(new class{init(){Y()}start(){this.init()}}).start(),console.log("Все требования выполнены. Может быть не понятным как получить список машин\nдля создания, поясню: нужно очистить поле ввода и кликнуть мышкой по пустому полю или\nстрелочке. Если будут какие-то недоразумения прошу со мной связаться Kostiantyn Pavlov#5082")})()})();