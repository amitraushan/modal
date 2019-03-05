const openModal = document.querySelectorAll(".button-wrapper .button");
const tabbable = document.querySelectorAll(".modal button");
const closeBtn = document.getElementsByClassName("close")[0];
const firstFocusable = tabbable[0];
const lastFocusable = tabbable[tabbable.length - 1];
var lastTarget;
const elem = document.querySelector("#myModal");

for (const key of Object.keys(openModal)) {
  showModal(openModal[key]);
}

closeBtn.addEventListener("click", function() {
  document.getElementById("myModal").style.display = "none";
  lastTarget.focus();
});

elem.addEventListener("keydown", function(e) {
  if (e.keyCode === 27) {
    document.getElementById("myModal").style.display = "none";
    lastTarget.focus();
  }
  if (e.key === "Tab") {
    if (e.shiftKey) {
      if (document.activeElement === firstFocusable) {
        e.preventDefault();
        lastFocusable.focus();
      }
    } else {
      if (document.activeElement === lastFocusable) {
        e.preventDefault();
        firstFocusable.focus();
      }
    }
  }
});

function showModal(element) {
  element.addEventListener("click", () => {
    lastTarget = document.activeElement;
    document.getElementById("myModal").style.display = "block";
    document.getElementById("pseudo-modal-content").focus();
  });
}
