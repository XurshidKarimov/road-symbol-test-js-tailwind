let url = window.location.href,
    right = url.match(/(?<=right\=)\d+/gi).join(''),
    wrong = url.match(/(?<=wrong\=)\d+/gi).join(''),
    end = url.match(/(?<=howEnd\=)end|time/gi).join('');

let howEnd = document.querySelector(".howEnd"),
    wrongCount = document.querySelector(".wrong"),
    rightCount = document.querySelector(".right"),
    playAgainBtn = document.querySelector(".play");

wrongCount.innerHTML = wrong;
rightCount.innerHTML = right;

if(end === "time"){
    howEnd.innerHTML = "Your time is up";
}
else{
    howEnd.innerHTML = "You have completed the test";
}

playAgainBtn.addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:5500/index.html"
})