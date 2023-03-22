const clear = document.querySelector("#clear");
const highScores = document.querySelector("#highscores");

function clearResults() {
    localStorage.clear();
    highScores.textContent = "";
};

function getScores() {
    let scores = JSON.parse(localStorage.getItem("scores"));
    if (scores != null) {
        for (i = 0; i < scores.length; i++) {
            showScore(scores[i]);
        };
    }

};

function showScore(object) {
    const newLi = document.createElement("li");
    newLi.textContent = `${object.player}: ${object.score}`;
    highScores.append(newLi);
};

getScores();

clear.addEventListener("click", clearResults);