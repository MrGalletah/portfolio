// alert("🚧 Work in progress 🚧");

window.onload = function () {
  const button = document.getElementById("submit");
  const name = document.getElementById("name");

  button.onclick = (e) => {
    setTimeout(() => {
      alert(`Muchas gracias por tu mensaje ${name.value}!`);
    }, 300);
    e.preventDefault();
  };
};
