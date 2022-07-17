const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos"
let toDos = [];



//toDos array의 내용을 localStorage에 집어넣어 저장하는 함수
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};



//X버튼 클릭했을 때 list 삭제하기
function deleteToDo(event){
    //parentElement -> 클릭된 것의 부모
    //클릭된 것의 부모(li)에 접근해서 제거한다.
    const li = event.target.parentElement;
    li.remove(); 

    //toDos배열에서 toDo의 id와 클릭한li의 id가 같지 않은 것을 return한다.
    //             즉, 배열에서 클릭한li의 id만 지워서 업데이트 한다.
    //                 (filter는 true값만 반환한다.)
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));

    //업데이트한 배열을 다시 saveToDos 함수로 저장
    saveToDos();
};



//넘겨받은 value를 화면상에 나타내는 함수
function paintToDo(newToDo){
    //li, span, button 생성후 li에 span, button밀어넣기
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "X";

    li.appendChild(span);
    li.appendChild(button);

    //span에 넘겨받은 value 넣기
    //ul(toDoList)안에 li 밀어넣기
    toDoList.appendChild(li);

    //X버튼 클릭했을 때 목록을 지우는 함수 실행
    button.addEventListener("click", deleteToDo);
};



function handleToDoSubmit(event){
    event.preventDefault();
    //input에 입력받은 value를 새로운 변수에 복사하는 것
    const newToDo = toDoInput.value;
    toDoInput.value = "";

    //obj 생성 (text, id)
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    //toDos array에 newToDoObj를 저장(텍스트가 아니라 오브젝트임)
    toDos.push(newToDoObj);
    //paintToDo 함수에 newToDoObj를 넘겨준다(화면출력)
    paintToDo(newToDoObj);
    //localStorage에 toDos array 저장하기
    saveToDos();
};



toDoForm.addEventListener("submit", handleToDoSubmit);



//localStorage에 저장된 toDos 배열
const savedToDos = localStorage.getItem(TODOS_KEY);

//localStorage에 무언가 들어있다면
if(savedToDos !== null){
    //string을 배열로 만든다.
    const parsedToDos = JSON.parse(savedToDos);
    //비어있는 toDos = localStorage에 저장되어 있는 toDos목록
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
};
















//JSON.stringify( )
//object나 array 또는 어떤 코드건 간에 string으로 만들어준다

//JSON.parse( )
//string을 array로 만들어준다.

//forEach -> array의 각 item에 대해 function 실행
//E.forEach((aaa) => ~~~~~ )
//E array의 각각에 대하여 ~~~~~실행


//filter
//filter는 배열의 각각에 대하여 function을 실행하고 true 값만 반환하여 업데이트 한다
//작성방법1)
//  const array = [1, 2, 3, 4, 5]
//  function sexyFunction(number){ return number < 3 }
//  array.filter(sexyFunction)    --> array = [1, 2]
//작성방법2)
//  const array = [1, 2, 3, 4, 5]
//  array = array.filter(number => number > 3 );    --> array = [4, 5]
