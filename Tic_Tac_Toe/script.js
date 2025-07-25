const box = document.querySelectorAll(".box");
const Rbtn = document.querySelector(".rbtn");
const h2 = document.querySelector("h2");

flag = true;

// Adding event listeners to each box
box.forEach((e) => {
  e.addEventListener("click", () => {
    if (flag) {
      e.innerHTML = "X";
      e.style.pointerEvents = "none";
      flag = false;
    } else {
      e.innerHTML = "O";
      e.style.pointerEvents = "none";
      flag = true;
    }
    checkWinner();
  });
});

// Reset button functionality

Rbtn.addEventListener("click", () => {
  box.forEach((e) => {
    e.innerHTML = "";
    e.style.pointerEvents = "auto";
    e.style.backgroundColor = "white";
  });
  h2.innerHTML = "";
});

//winning combinations
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// function to check for winner

function checkWinner() {
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (
      box[a].innerHTML &&
      box[a].innerHTML === box[b].innerHTML &&
      box[a].innerHTML === box[c].innerHTML
    ) {
      // declear winner
      h2.innerHTML = `Player ${box[a].innerHTML} wins!`;
      h2.style.color = "green";
      box[a].style.backgroundColor = "green";
      return;
    } 
  }
}

