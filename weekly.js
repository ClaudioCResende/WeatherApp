document.querySelector('.search-bar').focus();
const data = new Date();
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const dias = document.querySelectorAll('.day');
for(let i = 0;i<dias.length;i++){
    
    dias[i].innerHTML = (weekDays[(data.getDay() + i)%7]) ;
    console.log(data.getDay())
    
}
const cityTitle = document.createElement('h1');
document.body.insertBefore(cityTitle, document.querySelector('.search'));
function fetchWeather(city){
    document.querySelector('.search-bar').focus()
    document.querySelector('.search-bar').value = ''
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&units=metric&appid=8dda96dffad8e93d8d011f85015bbd01')
    .then(response=>response.json())
    .then(data=>{

        const {name} = data.city;
       
        document.querySelector('h1').innerHTML = '5 days forecast in ' +name;
        

        for(let i=0;i<5;i++){
            const {temp_min, temp_max} = data.list[i].main;
    
            const{icon} = data.list[i].weather[0];
    
            document.querySelector(`#dia${(i+1)}min-temp`).innerHTML = 'Min: ' + Number(temp_min).toFixed(1) + 'ºC'
    
            document.querySelector(`#dia${(i+1)}max-temp`).innerHTML = 'Max: ' + Number(temp_max).toFixed(1) + 'ºC';
    
            document.querySelector(`.icon${i+1}`).src = `https://openweathermap.org/img/wn/${icon}.png`
        }
    
    });
}
fetchWeather('porto');

document.querySelector('.search-bar').addEventListener('keypress',e=>{
    if(e.key=='Enter'){
        fetchWeather(chooseInput())
    }
})

function chooseInput(){
    return document.querySelector('.search-bar').value
}

document.querySelector('.searchBtn').addEventListener('click', ()=>{
    fetchWeather(document.querySelector('.search-bar').value)
})







