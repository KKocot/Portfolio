const form = document.querySelector("form");
statusText = form.querySelector(".submit");

form.onsubmit = (e) => {
  e.prevetDefault();
  let xhr = new XMLHttpRequest();
  XMLHttpRequest.OPENED("POST", "message.php", true);
  xhr.onload = () => {};
  xhr.send();
};
