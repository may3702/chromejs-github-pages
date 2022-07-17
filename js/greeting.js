const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASS= "hidden";
const USERNAME_KEY = "username";


//function이 하나의 argument를 받도록 하고 그걸 JS에 넘겨준다
function onLoginSubmit(event){

    //넘겨받은 정보를 preventDefault()를 통해 처리한다.
    // preventDefault()
    //  ->어떤 event든지 기본동작이 실행되지 못하도록 막아주는 역할
    //    여기에선 form을 submit했을 때 기본적으로 실행되는 새로고침을 막는 것
    event.preventDefault();


    //submit 했으니까 loginForm에 hidden클래스 추가해서 화면에서 지우기
    loginForm.classList.add(HIDDEN_CLASS);


    //input에 입력된 value를 username으로 저장
    const username = loginInput.value;


    //// username 기억하기 ////
    //localStorage에 username저장하기
    localStorage.setItem(USERNAME_KEY, username);


    paintGreetings(username);
};


function paintGreetings(username){
    greeting.innerText = `Hello ${username}!`;

    //greeting에서 hidden클래스 삭제하고 화면에 나타내기
    greeting.classList.remove(HIDDEN_CLASS);
};


//localStorage에서 username 받아오기
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greeting
    paintGreetings(savedUsername);
};