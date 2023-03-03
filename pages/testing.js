import test from "../src/js/signs.js"

let takeNumberFromUrl = window.location.href.split("?=")[1];
let timer = document.querySelector(".timer");
let minute = null;
let secund = null;

let interval = setInterval(() => {
    if (takeNumberFromUrl >= 0) {
        minute = Math.floor(takeNumberFromUrl / 60);
        secund = takeNumberFromUrl - (minute * 60);
        timer.innerHTML = secund < 10 ? `0${minute} : 0${secund}` : `0${minute} : ${secund}`;
        takeNumberFromUrl--;
    }
    else {
        postObject.right = rightAnswers;
        postObject.wrong = wrongAnswers;
        postObject.howEnd = 'time';
        let url = new URLSearchParams(postObject);
        window.location.href = `http://127.0.0.1:5500/pages/ending.html?${url.toString()}`;
        clearInterval(interval);
    }
}, 1000);

let qbox__img = document.querySelector(".q-box__img");
let answers = Array.from(document.querySelector(".answers").children);
let currentIndex = 0;
let rightAnswers = 0, wrongAnswers = 0;
let postObject = {};


qbox__img.src = test[currentIndex].symbol_img;
answers[0].innerHTML = test[currentIndex].variants.A;
answers[1].innerHTML = test[currentIndex].variants.B;
answers[2].innerHTML = test[currentIndex].variants.C;
answers[3].innerHTML = test[currentIndex].variants.D;


answers.forEach(element => {
    element.addEventListener("click", (event) => {
        setTimeout(() => {
            if (currentIndex < test.length && secund > 0) {
                if (event.target.textContent === test[currentIndex].symbol_title) {
                    rightAnswers++;
                }
                else {
                    wrongAnswers++;
                }

                currentIndex++;

                if (currentIndex < test.length) {
                    qbox__img.src = test[currentIndex].symbol_img;
                    answers[0].innerHTML = test[currentIndex].variants.A;
                    answers[1].innerHTML = test[currentIndex].variants.B;
                    answers[2].innerHTML = test[currentIndex].variants.C;
                    answers[3].innerHTML = test[currentIndex].variants.D;
                }
                else {
                    postObject.right = rightAnswers;
                    postObject.wrong = wrongAnswers;
                    postObject.howEnd = 'end';
                    let url = new URLSearchParams(postObject);
                    window.location.href = `http://127.0.0.1:5500/pages/ending.html?${url.toString()}`;
                }
            }
        }, 1000);
    })
})