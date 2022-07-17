const clock = document.querySelector("#clock");

function clockPlay(){
    //현재 날짜를 얻어오는 함수 new Date();
    const date = new Date();

    //getHours(), getMinutes(), getSeconds()로 시분초 얻어오고
    //String으로 변경해 준 뒤 padStart( , ) 사용 (padStart는 String이어야 사용 가능)
    //String() -> 숫자형식을 문자형식으로 변경
    //+parseInt() -> 문자형식을 숫자형식으로 변경
    //A.padStart(B,C) -> A String의 길이가 B가 아니라면 A앞에 C를 추가한다.
    //A.padEnd(B,C) -> A string의 길이가 B가 아니라면 A뒤에 C를 추가한다.
    const hours = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours} : ${min} : ${sec}`
};

//브라우저가 나타나자마자 함수를 한 번 실행시키고
clockPlay();
//1초마다 함수를 반복하여 실행
setInterval(clockPlay, 1000);


//setInterval(function, ms);
//ms마다 반복해서 function 실행
//setTimeout(function, ms);
//ms이후에 한번만 function 실행

