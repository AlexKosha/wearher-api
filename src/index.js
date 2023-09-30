const refs={
    form: document.querySelector('.form'),
    list: document.querySelector('.list')
}

refs.form.addEventListener('submit' , handleSearch)

function handleSearch(e) {
    e.preventDefault();

    const {city, days} = e.currentTarget.elements
    console.log(city.value)
    console.log(days.value)
    serviceWeather(city.value , days.value )
    .then((data) => {
        refs.list.innerHTML = createMarkup(data.forecast.forecastday)
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(()=> refs.form.reset());
}

function serviceWeather(city , days ) {
    const BASE_URL='http://api.weatherapi.com/v1';
    const API_KEY = '65cf15bdca1541b9a2c201846233009'
    
const params = new URLSearchParams ({
    key : API_KEY,
    q: city,
    days,
    lang: 'uk',
})

    return fetch(`${BASE_URL}/forecast.json?${params}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP Error! Status: ${res.status}`);
      }
      return res.json();
    })
}

function createMarkup(arr) {
    return arr.map(({date, day: {avgtemp_c, condition: {text, icon}}})=> 
    `<li>
    <img src="${icon}" alt="${text}" class="weather-icon">
    <h2 class="data">${date}</h2>
    <h3 class="weather-text">${text}</h3>
    <h3 class="temperature">${avgtemp_c}</h3>
    </li>`
    ).join('')
}