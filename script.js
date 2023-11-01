// alert("🚧 Work in progress 🚧");

window.onload = function () {
  const button = document.getElementById("submit");
  const name = document.getElementById("name");

  button.onclick = (e) => {
    if(name.value.toUpperCase() === "VICTORIA" || name.value.toUpperCase() === "VIC"){
      setTimeout(()=>{
       alert(`Muchas gracias por tu mensaje ${name.value} ❤!`)
      }, 300);
    } else{
      setTimeout(() => {
        alert(`Muchas gracias por tu mensaje ${name.value}!`);
      }, 300);
    };
    e.preventDefault();

    }
};
console.log("a")