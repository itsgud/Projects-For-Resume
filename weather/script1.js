const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=patna';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4c452dd56dmshff0c733b6574db0p1ad4f6jsn091de8479dc7',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getweather=(city)=>{

//cityName.innerHtml="yyyy"
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
.then(response => response.json())
.then((response) => {
    
    
    console.log(response)

	
	cityName.innerText=city
	
   
//document.getElementById ("cloud_pct").innerHtml="hilkll" 
//cloud_pct.innerText= response.cloud_pct        
feels_like.innerText= response.feels_like
humidity.innerText= response.humidity
humidity2.innerText=response.humidity
max_temp.innerText= response.max_temp
min_temp.innerText= response.min_temp
sunrise.innerText= response.sunrise
sunset.innerText=response.sunset
temp.innerText=response.temp
temp2.innerText=response.temp;
wind_degrees.innerText=response.wind_degrees
wind_speed.innerText=response.wind_speed
wind_speed2.innerText=response.wind_speed


})

// delhi value


// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi', options)
// .then(response => response.json())
// .then((response) => {
    
    
//     console.log(response)

	
// 	//cityName.innerText=city
	
   
// //document.getElementById ("cloud_pct").innerHtml="hilkll" 
// cloud_pct1.innerText= response.cloud_pct        
// feels_like1.innerText= response.feels_like
// humidity1.innerText= response.humidity
// //humidity2.innerText=response.humidity
// max_temp1.innerText= response.max_temp
// min_temp1.innerText= response.min_temp
// sunrise1.innerText= response.sunrise
// sunset1.innerText=response.sunset
// temp1.innerText=response.temp
// //temp2.innerText=response.temp;
// wind_degrees1.innerText=response.wind_degrees
// wind_speed1.innerText=response.wind_speed
// //wind_speed2.innerText=response.wind_speed


// })



// end value for delhi
.catch(err => console.error(err));

}

submit.addEventListener("click",(e)=>{
    e.preventDefault()
	getweather(city.value)
})

getweather("mumbai")
