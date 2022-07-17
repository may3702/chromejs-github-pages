const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const chosenImage =images[Math.floor(Math.random()*images.length)];

//createElement() -> 새로운 element 생성
const bgimage = document.createElement("img");  //img태그 생성
bgimage.src = `img/${chosenImage}`;             //src속성에 chosenImage(랜덤이미지) 지정

//A.appendChild(B) -> A안에 B를 넣어준다.
document.body.appendChild(bgimage);             //body안에 bgimag (<img src="img/1.jpg">) 넣기