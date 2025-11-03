/** @format */

let nameText = document.querySelector("#text");
let namebutton = document.querySelector("#namebutton");

namebutton.addEventListener("click", changeName);

function changeName() {
  nameText.innerHTML = "Ashley";
}

namebutton2.addEventListener("click", function () {
  nameText.innerHTML = "ms mcdonald";
});
