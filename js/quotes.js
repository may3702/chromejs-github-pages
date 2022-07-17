const quotes = [
    {
        quote : "The worst is not so long as we can say. 'This is the worst.'",
        author : "@William Shakespeare"
    },
    {
        quote : "Always laugh when you can. It is cheap medicine.",
        author : "@Lord Byron"
    },
    {
        quote : "Hope begins in the dark.",
        author : "@Anne Lamott"
    },
    {
        quote : "It's amazing how a little tomorrow can make up for a whole lot of yesterday.",
        author : "@John Guare"
    },
    {
        quote : "It is kind of fun to do the impossible.",
        author : "@Walt Disney"
    },
    {
        quote : "Tough times never last, but tough people do.",
        author : "@Robert H. Schuller"
    },
    {
        quote : "I’ve failed over and over and over again in my life and that is why I succeed.",
        author : "@Michael Jordan"
    },
    {
        quote : "But I know, somehow, that only when it is dark enough can you see the stars.",
        author : "@Martin Luther King"
    },
    {
        quote : "Grind Hard, Shine Hard.",
        author : "@Dwayne Johnson"
    },
    {
        quote : "Never let the fear of striking out keep you from playing the game.",
        author : "@Babe Ruth"
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//Math.random() --> 0~1 사이의 무작위 수를 얻을 수 있다.
//Math.round() --> 반올림 
//Math.ceil() --> 올림
//Maht.floor() --> 내림

//0~10 사이의 무작위 수를 내림처리 -> 0~9 사이의 정수 추출
//Math.floor(Math.random() * 10);

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
                            //Array의 길이는 .length로 알아낼 수 있다.

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
