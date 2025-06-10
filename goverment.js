document.getElementById("showBtn").onclick = function () {
  document.querySelector(".hidden").style.display = "block";
  document.getElementById("showBtn").style.display = "none";
};

document.getElementById("hideBtn").onclick = function () {
  document.querySelector(".hidden").style.display = "none";
  document.getElementById("showBtn").style.display = "block";
};
