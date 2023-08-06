// const bodyParser = require("body-parser");

const downloadBtn = document.querySelector("#btn");
const URLInput = document.querySelector("#input");

downloadBtn.addEventListener("click", () => {
  console.log(`url : ${URLInput.value}`);
  sendURL(URLInput.value);
});

const sendURL = (URL) => {
  // fetch(`http://localhost/4000/download?URL=${URL}`, {
  //   method: "GET",
  // })
  //   .then((res) => res.json())
  //   .then((json) => console.log(json));
  window.location.href = `http://localhost/4000/download?URL=${URL}`;
};
