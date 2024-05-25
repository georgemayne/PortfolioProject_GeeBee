let container1 = document.querySelector(".container1");
for (var i = 0; i <= 80; i++) {
  let blocks = document.createElement("div");
  blocks.classList.add("block");
  container1.appendChild(blocks);
}

// Randomize circle or square class on page load
if (Math.random() > 0.5) {
  container1.classList.add("circle");
} else {
  container1.classList.add("circle");
}

// Generate animation
anime({
  targets: ".block",
  translateX: function () {
    return anime.random(-700, 700);
  },
  translateY: function () {
    return anime.random(-500, 500);
  },
  scale: function () {
    return anime.random(1, 5);
  },
});
