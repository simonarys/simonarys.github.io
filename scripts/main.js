/* Scroll Back Button */

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



/* Modal */
const modal = document.getElementById("modal");
const openModal = document.getElementById("open-modal");

openModal.onclick = function () {
  modal.style.display = "block";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}