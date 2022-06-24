const sendButton = document.getElementsByClassName("send_request")[0];
const copy = document.getElementsByClassName("copy")[0];
const copied = document.getElementsByClassName("copied")[0];
sendButton.addEventListener("click", changeUI);

function changeUI(e) {
  //very important or UI will get refreshed with speed of light and your changes won't be visible
  e.preventDefault();

  copy.style.display = "none";
  copied.style.display = "flex";

  //To avoid quick shift between state
  setTimeout(() => {
    copy.style.display = "flex";
    copied.style.display = "none";
  }, 2000);
}
