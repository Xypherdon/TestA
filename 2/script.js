const setColor = () => {
  const score = document.getElementById("score").value;

  for (i = 0; i < 6; i++) {
    let block = document.getElementById("block-" + i);
    let arrow = document.getElementById("arrow-" + i);

    block.style.backgroundColor = "rgb(34, 40, 48)";
    arrow.style.visibility = "hidden";
  }

  if (score < 0 || score > 60) {
    return;
  }

  document.getElementById(
    "block-" + Math.floor(score / 10)
  ).style.backgroundColor = "rgb(181,124,19)";
  document.getElementById("arrow-" + Math.floor(score / 10)).style.visibility =
    "visible";
};
