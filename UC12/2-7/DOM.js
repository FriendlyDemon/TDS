const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  if (btn.style.backgroundColor == "blue") {
    btn.style.backgroundColor = "red";
  } else {
    btn.style.backgroundColor = "blue";
  }
});
