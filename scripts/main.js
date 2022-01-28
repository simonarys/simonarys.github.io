const scrollBackButton = document.getElementById("scrollBackButton");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    scrollBackButton.style.display = "block";
  } else {
    scrollBackButton.style.display = "none";
  }
};

function scrollBack() {
  document.documentElement.scrollTop = 0;
}