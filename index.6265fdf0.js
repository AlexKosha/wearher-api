!function(){var t={form:document.querySelector(".form"),list:document.querySelector(".list")};t.form.addEventListener("submit",(function(e){e.preventDefault();var n=e.currentTarget.elements,a=n.city,c=n.days;console.log(a.value),console.log(c.value),function(t,e){var n="http://api.weatherapi.com/v1",a=new URLSearchParams({key:"65cf15bdca1541b9a2c201846233009",q:t,days:e,lang:"uk"});return fetch("".concat(n,"/forecast.json?").concat(a)).then((function(t){if(!t.ok)throw new Error("HTTP Error! Status: ".concat(t.status));return t.json()}))}(a.value,c.value).then((function(e){t.list.innerHTML=e.forecast.forecastday.map((function(t){var e=t.date,n=t.day,a=n.avgtemp_c,c=n.condition,o=c.text,r=c.icon;return'<li>\n    <img src="'.concat(r,'" alt="').concat(o,'" class="weather-icon">\n    <h2 class="data">').concat(e,'</h2>\n    <h3 class="weather-text">').concat(o,'</h3>\n    <h3 class="temperature">').concat(a,"</h3>\n    </li>")})).join("")})).catch((function(t){console.log(t.message)})).finally((function(){return t.form.reset()}))}))}();
//# sourceMappingURL=index.6265fdf0.js.map
