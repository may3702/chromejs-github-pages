const API_KEY = "22510297e4b41a9271f715f3e1310985";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    //&units=metric  => 화씨온도를 섭씨온도로 변경

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const name = document.querySelector("#weather span:nth-child(1)");
            const weather = document.querySelector("#weather span:nth-child(2)");
            const temp = document.querySelector("#weather span:nth-child(3)");
            name.innerText = `@${data.name}`;
            weather.innerText = `${data.weather[0].main}`;
            temp.innerText = `${data.main.temp}`;
    });
    
    //fetch() : JS가 URL을 불러온다
    //서버가 URL을 불러올 때까지 기다렸다가 -> then
    //response의 json을 얻어오고 기다렸다가
    //얻어온 내용에서 date얻기
};

function onGeoError(){
    alert("Can't find you. No weather for you.")
};

 
//getCurrentPosition(위치를 찾았을 때, 위치를 못찾았을 때)
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);