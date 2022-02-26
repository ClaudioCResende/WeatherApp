let weather = {
    apiKey: "8dda96dffad8e93d8d011f85015bbd01",
    fetchWeather: function(city){
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + this.apiKey )
        .then(response => response.json())
        .then(data => this.displayWeather(data))
    },
    displayWeather: function(data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const{temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector('.city').innerText = `Weather in ${name}`;
        document.querySelector('.temp').innerText = `${temp}ºC`;
        document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${icon}.png`
        document.querySelector('.description').innerText = description;
        document.querySelector('.humidity').innerText = `Humidity:${humidity}%`;
        document.querySelector('.wind').innerText = `Wind Speed:${speed} Km/h`;
        // document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?' " + name + " ')";
        document.querySelector('.weather').classList.remove('loading');
        document.querySelector('.search-bar').value = ''
        
        }

}

document.querySelector('button').addEventListener('click',()=>{
    const city = document.querySelector('.search-bar').value;
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?' " + city + " ')";
    weather.fetchWeather(city);
});

document.querySelector('.search-bar').addEventListener('keypress', e=>{
    const city = document.querySelector('.search-bar').value;
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?' " + city + " ')";
    if(e.key == 'Enter'){
        weather.fetchWeather(city);
    }
})

weather.fetchWeather('porto');

