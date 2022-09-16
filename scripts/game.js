const square = document.querySelectorAll(".square");

let turn = 1;
let playing = true;

//fading coins
if (playing) {
  square.forEach((element) => {
    element.onmouseenter = () => {
      if (!element.classList.contains("placed")) {
        if (turn == 1) {
          element.innerHTML = `<img class="fade" src="../images/red.png">`;
        } else {
          element.innerHTML = `<img class="fade" src="../images/yellow.png">`;
        }
      }
    };
    element.onmouseleave = () => {
      if (!element.classList.contains("placed")) {
        element.innerHTML = "";
      }
    };
  });
}

//placing coins
if (playing) {
  square.forEach((element) => {
    element.onclick = () => {
      if (turn == 1) {
        turn = 0;
        element.innerHTML = `<img class="place" src="../images/red.png">`;
        element.classList.add("placed");
      } else {
        turn = 1;
        element.innerHTML = `<img class="place" src="../images/yellow.png">`;
        element.classList.add("placed");
      }
    };
  });
}
