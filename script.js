let currentIndex = 0;
const boxes = document.querySelectorAll(".box");
const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", () => {

  boxes[currentIndex].style.visibility = "hidden";


  const previousIndex = (currentIndex - 1 + boxes.length) % boxes.length;
  boxes[previousIndex].style.visibility = "visible";

  currentIndex = (currentIndex + 1) % boxes.length;
});

