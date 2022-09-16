const square = document.querySelectorAll(".square");
const restart = document.getElementById("restart");
const cont = document.getElementById("cont");
const redS = document.getElementById("red-score");
const yellowS = document.getElementById("yellow-score");
const score = document.getElementById("win");
const redWon = "RED WON";
const yellowWon = "YELLOW WON";
const draw = "DRAW";
let winner = "";
let turn = 1;
let playing = true;
let red = 0;
let yellow = 0;
let grid = ["", "", "", "", "", "", "", "", ""];

redS.textContent = red;
yellowS.textContent = yellow;
//fading coins
if (playing) {
  square.forEach((element) => {
    element.onmouseenter = () => {
      if (!element.classList.contains("placed") && playing) {
        if (turn == 1) {
          element.innerHTML = `<img class="fade" src="../images/red.png">`;
        } else {
          element.innerHTML = `<img class="fade" src="../images/yellow.png">`;
        }
      }
    };
    element.onmouseleave = () => {
      if (!element.classList.contains("placed") && playing) {
        element.innerHTML = "";
      }
    };
  });

  //placing coins

  square.forEach((element, index) => {
    element.onclick = () => {
      console.log(playing);
      if (!element.classList.contains("placed") && playing) {
        if (turn == 1) {
          turn = 0;
          element.innerHTML = `<img class="place" src="../images/red.png">`;
          element.classList.add("placed");
          grid[index] = "red";
        } else {
          turn = 1;
          element.innerHTML = `<img class="place" src="../images/yellow.png">`;
          element.classList.add("placed");
          element.classList.add("yellow");
          grid[index] = "yellow";
        }
        // console.log(grid[index]);
      }
      if (checkWin()) {
        playing = false;
        if (turn == 1) {
          yellow++;
          yellowS.textContent = yellow;
          score.innerText = yellowWon;
        } else {
          red++;
          redS.textContent = red;
          score.innerText = redWon;
        }
        console.log(playing);
      }
      if (checkDraw()) {
        playing = false;
        score.innerText = draw;
      }
    };
  });
}

//restart the game
restart.onclick = () => {
  location.reload();
};

//continue playing
cont.onclick = () => {
  square.forEach((element) => {
    element.innerHTML = "";
    element.classList = "square";
  });
};

// const check for win functions

const checkWin = () => {
  if (
    check(grid[0], grid[1], grid[2]) ||
    check(grid[3], grid[4], grid[5]) ||
    check(grid[6], grid[7], grid[8]) ||
    check(grid[0], grid[3], grid[6]) ||
    check(grid[1], grid[4], grid[7]) ||
    check(grid[2], grid[5], grid[8]) ||
    check(grid[0], grid[4], grid[8]) ||
    check(grid[2], grid[4], grid[6])
  ) {
    grid = ["", "", "", "", "", "", "", "", ""];
    if (turn == 0) {
      winner = redWon;
    } else {
      winner = yellowWon;
    }
    playing = false;
    console.log(winner);
    return true;
  } else {
    return false;
  }
};

function check(a, b, c) {
  if (a === b && b === c && a != "" && b != "" && c != "") {
    return true;
  } else {
    return false;
  }
}

//function to check draw
const checkDraw = () => {
  //   if (
  //     square.forEach((element) => {
  //       element.classList.contains("placed");
  //     })
  //   ) {
  //     winner = draw;
  //     return true;
  //   } else {
  //     return false;
  //   }
  let i = 0;
  square.forEach((element) => {
    if (element.classList.contains("placed")) {
      i++;
    }
  });

  if (i == 9 && !checkWin()) {
    grid = ["", "", "", "", "", "", "", "", ""];
    winner = draw;
    return true;
  }
  return false;
};
