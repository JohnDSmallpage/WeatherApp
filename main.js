const inputCity= document.getElementById("barra");
const button= document.getElementById("boton");

const api_id= "b8fa1a3969dadf6145c34281dc05ba30";

function printResults(data){
    let results_html= document.getElementById("results");
        results_html.innerHTML+= 
        `<div class="info-container">
        <p class="city">City</p>
        <p id="newCity">London, GB</p>
        <p class="clouds">Clouds</p>
        <p id="newCloud">Overcast clouds</p>
        <p class="temperature">Temperature</p>
        <p id="newTemp">273.57 Kelvin</p>
        <p class="humidity">Humidity</p>
        <p id="newHum">88%</p>
        <p class="wind">Wind Speed</p>
        <p id="newWind">3.6 meter/sec</p>
    </div>`;
            

        console.log(data);
        let city= document.getElementById("newCity");
        let clouds= document.getElementById("newCloud");
        let temperature= document.getElementById("newTemp");
        let new_humidity= document.getElementById("newHum");
        let new_wind= document.getElementById("newWind");
        
        clouds.innerHTML= data['weather'][0]['description'];
         //Otra forma de hacerlo, con Decontrucción
         let {main, sys, wind} = data;
         let {temp, humidity}= main;
         let {country}= sys;
         let {speed} = wind;

         temperature.innerHTML= temp + " Kelvin";
         new_humidity.innerHTML= humidity + "%";
         new_wind.innerHTML= speed  + " meter/sec";
         city.innerHTML= `${data.name}, ${country}`;
}

button.addEventListener("click", async () => {
    const city_selected= inputCity.value;
    
    // .then((response) =>{
    //     return response.json()        
    // })
    // .then((data) => {
         
         
    // })   

    

    try{
        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_selected}&appid=${api_id}`);
        const data= await response.json();
        printResults(data);
    }
    catch{
        let results_html= document.getElementById("results");
        results_html.innerHTML+= 
        `<div class="info-container">
        <p class="city">Problemas estableciendo conexión con el servidor</p>
    </div>`;
    }
});





