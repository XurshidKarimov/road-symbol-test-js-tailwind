let difficultyList = Array.from(document.getElementById("difficultyList").children);

let levelMinutes = null;

difficultyList.forEach(element => {
    element.addEventListener("click", (event) => {
        switch (event.target.dataset.difficulty) {
            case 'easy':
                levelMinutes = 60 * 8;
                window.location.href = `http://127.0.0.1:5500/pages/testing.html?=${levelMinutes}`
                break;
            case 'normal':
                levelMinutes = 60 * 5;
                window.location.href = `http://127.0.0.1:5500/pages/testing.html?=${levelMinutes}`
                break;
            case 'hard':
                levelMinutes = 60 * 3;
                window.location.href = `http://127.0.0.1:5500/pages/testing.html?=${levelMinutes}`
                break;
        }
    })
});