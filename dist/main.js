!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){var o=n(1),i=n(2);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1},a=(o(i,r),i.locals?i.locals:{});e.exports=a},function(e,t,n){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function c(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},o=[],i=0;i<e.length;i++){var r=e[i],d=t.base?r[0]+t.base:r[0],s=n[d]||0,u="".concat(d," ").concat(s);n[d]=s+1;var l=c(u),f={css:r[1],media:r[2],sourceMap:r[3]};-1!==l?(a[l].references++,a[l].updater(f)):a.push({identifier:u,updater:y(f,t),references:1}),o.push(u)}return o}function s(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,l=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function f(e,t,n,o){var i=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=l(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function h(e,t,n){var o=n.css,i=n.media,r=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,m=0;function y(e,t){var n,o,i;if(t.singleton){var r=m++;n=p||(p=s(t)),o=f.bind(null,n,r,!1),i=f.bind(null,n,r,!0)}else n=s(t),o=h.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var i=c(n[o]);a[i].references--}for(var r=d(e,t),s=0;s<n.length;s++){var u=c(n[s]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=r}}}},function(e,t,n){var o=n(3),i=n(4),r=n(5);t=o(!1);var a=i(r);t.push([e.i,"body{margin:0 auto;padding:0;background-image:url("+a+");background-size:cover;font-family:Arial, Helvetica, sans-serif}.section1{background-size:cover;background-color:white;height:30vh;width:100vw;font-size:1.5em;display:flex;justify-content:center}.section1 .trip-info{display:flex;flex-direction:row;justify-content:center;align-items:center}.section1 .trip-info .departure{display:flex;flex-direction:row;justify-content:center;align-items:center;margin:10px}.section1 .trip-info .date1{border:1px solid black;height:5vh;width:20vw;font-size:1em;padding:5px}.section1 .trip-info .form .city-text{border:1px solid black;font-size:1em;width:20vw;height:5vh;padding:5px}.section1 .trip-info .form :hover{cursor:pointer}.section2{visibility:hidden;background-color:rgba(128,0,128,0.233);min-height:50vh;display:flex;justify-content:center;font-size:1.3em}.section2 .section2-cont{margin:50px;padding:10px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;width:70vw}.section2 .section2-cont .photo{text-align:center;width:auto;height:auto}.section2 .section2-cont .photo img{width:40%;height:50%}.section3{visibility:hidden;min-height:50vh;display:flex;flex-direction:column;justify-content:center;align-items:center}.section3 h1{text-align:center;font-size:1.3em}.section3 .weather-cont{display:flex;flex-direction:row;justify-content:center}.section3 .weather-cont .sub-cont{width:10vw;height:15vh;margin:5px;padding:10px;text-align:center;background:#020024;background:linear-gradient(90deg, #020024 0%, #a1e1ee 0%, #79a3e3 100%)}@media (max-width: 1100px){body{font-size:1.3em}.section1{height:30vh}.section1 .trip-info{display:flex;flex-direction:column;justify-content:center;align-items:center}.section1 .trip-info .departure{display:flex;flex-direction:column;justify-content:center;align-items:center}.section1 .trip-info .date1{height:4vh;width:50vw;font-size:1em;padding:5px}.section1 .trip-info .form .city-text{font-size:1em;width:50vw;height:4vh;padding:5px}.section2{height:60vh;display:flex;justify-content:center;align-items:center;font-size:1.2em}.section2 .section2-cont{margin:50px}.section2 .section2-cont .photo{text-align:center;width:auto;height:auto}.section2 .section2-cont .photo img{width:70%;height:70%}.section3{visibility:hidden;min-height:100vh}.section3 h2{text-align:center;margin:10px;padding:10px}.section3 .weather-cont{display:flex;flex-direction:column;flex-wrap:wrap}.section3 .weather-cont .sub-cont{width:40vw;height:15vh;margin:5px;padding:5px;text-align:center;color:grey}}.footer{background-color:rgba(2,2,104,0.705);color:white;display:flex;justify-content:center;align-items:center;height:10vh}.header{background-color:#020268;color:white;height:10vh;text-align:center;padding:10px}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(d," */")),r=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(r).concat([i]).join("\n")}var a,c,d;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&i[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,n){"use strict";n.r(t),t.default=n.p+"644bb462963e7f7d1cb133090e6927ba.jpg"},function(e,t,n){"use strict";n.r(t),n.d(t,"getCoordinates",(function(){return j})),n.d(t,"getWeather",(function(){return C})),n.d(t,"getPhoto",(function(){return T})),n.d(t,"updateUI",(function(){return q})),n.d(t,"locationInfo",(function(){return b}));const o=document.querySelector(".form"),i=document.querySelector(".city-text"),r=document.querySelector(".date1");n(0);document.querySelector(".form"),document.querySelector(".city-text");const a=document.querySelector(".destination"),c=document.querySelector(".date1"),d=document.querySelector(".date-heading"),s=document.querySelector(".weather1"),u=document.querySelector(".day1"),l=document.querySelector(".weather2"),f=document.querySelector(".day2"),h=document.querySelector(".weather3"),p=document.querySelector(".day3"),m=document.querySelector(".weather4"),y=document.querySelector(".day4"),g=document.querySelector(".weather5"),v=document.querySelector(".day5"),x="https://cors-anywhere.herokuapp.com/";let b={city:"",country:"",latitude:"",longitude:""},w={dayOne:{temp:"",date:""},dayTwo:{temp:"",date:""},dayThree:{temp:"",date:""},dayFour:{temp:"",date:""},dayFive:{temp:"",date:""}};const j=e=>{fetch(`${x}http://api.geonames.org/searchJSON?q=${e}&maxRows=10&username=rayomon`).then(e=>e.json()).then(e=>{(e=>{fetch("http://localhost:5500/geocoords",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(e=>e.json()).then(e=>e).catch(e=>{console.log(e)})})(e)}).then(()=>{S()}).catch(e=>{console.log(e)})},S=()=>{fetch("http://localhost:5500/geocoords").then(e=>e.json()).then(e=>{b.latitude=e.latitude,b.longitude=e.longitude,b.city=e.name,b.country=e.country}).catch(e=>{console.log(e)})},C=(e,t)=>{fetch(`https://api.weatherbit.io/v2.0/forecast/daily?key=73dcbe9d0fe3416a94f73a8bdbc18d78&lat=${e}&lon=${t}&days=7&units=I`).then(e=>e.json()).then(e=>{w.dayOne.temp=e.data[0].temp,w.dayOne.date=e.data[0].datetime.split("-").reverse().join("-"),w.dayTwo.temp=e.data[1].temp,w.dayTwo.date=e.data[1].datetime.split("-").reverse().join("-"),w.dayThree.temp=e.data[2].temp,w.dayThree.date=e.data[2].datetime.split("-").reverse().join("-"),w.dayFour.temp=e.data[3].temp,w.dayFour.date=e.data[3].datetime.split("-").reverse().join("-"),w.dayFive.temp=e.data[4].temp,w.dayFive.date=e.data[4].datetime.split("-").reverse().join("-")}).catch(e=>{console.log(e)})},T=e=>{fetch(`${x}https://pixabay.com/api/?key=16039104-d4a665d2570df15bc2b3dc6da&q=${e}&image_type=photo`).then(e=>e.json()).then(e=>{const t=document.createElement("img");let n=e.hits[0].largeImageURL;t.setAttribute("alt","photo"),t.setAttribute("src",n),document.querySelector(".photo").appendChild(t)}).catch(e=>{console.log(e)})},q=()=>{let e=(new Date).getDate(),t=c.value,n=t.toString().split("-");t=n[2];let o,i=t-e;a.textContent=`${b.city}, ${b.country}`,o=1===i?`Your trip to ${b.city} is ${i} day away. You will be leaving on ${n.reverse().join("-")}`:`Your trip to ${b.city} is ${i} days away. You will be leaving on ${n.reverse().join("-")}`,d.textContent=o,s.textContent=w.dayOne.temp+" ℉",u.textContent=w.dayOne.date,l.textContent=w.dayTwo.temp+" ℉",f.textContent=w.dayTwo.date,h.textContent=w.dayThree.temp+" ℉",p.textContent=w.dayThree.date,m.textContent=w.dayFour.temp+" ℉",y.textContent=w.dayFour.date,g.textContent=w.dayFive.temp+" ℉",v.textContent=w.dayFive.date};o.addEventListener("submit",e=>{e.preventDefault();let t=i.value;i.value.length<1||""===r.value?alert("Enter a date and city"):(j(t),setTimeout(()=>{C(b.latitude,b.longitude)},2e3),setTimeout(()=>{T(t)},2e3),setTimeout(()=>{q()},3e3),setTimeout(()=>{document.querySelector(".section2").style="visibility: visible;",document.querySelector(".section3").style="visibility: visible;"},2e3)),setTimeout(()=>{console.log(b)},2e3)})}]);