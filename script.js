const API_URL = "https://api.openweathermap.org/data/2.5/weather"
const API_KEY ="9feef29a9990cf5653930e5d99a72f53"

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon")

async function datacollect(city) {
    let response = await fetch(`${API_URL}?q=`+ city +`&appid=${API_KEY}&units=metric`)
    let res = await response.json()
    document.getElementById("cityname").innerHTML = res.name
    document.getElementById("temp").innerHTML = res.main.temp
    document.getElementById("desc").innerHTML = res.weather[0].description
    console.log(res)

    if(res.main.temp < 16){
        console.log("less than 16")
        weathericon.src ="./imgs/winter.jpg"
    } else {
        // console.log("more than 16")
        weathericon.src = "./imgs/summer.png"
    }
}

searchBtn.addEventListener("click", ()=>{
    datacollect(searchBox.value)
})

