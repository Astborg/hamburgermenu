const bar = document.getElementById("bar");
const menu = document.getElementById("menu");
const change = document.getElementById("change");
const mode = document.getElementById("mode");
const image = document.querySelector('.image')
const beskrivning = document.querySelector('.beskrivning')
const pris = document.querySelector('.pris')
const square = document.querySelector('.square')

bar.addEventListener("click", () => {
  // menu.style.display = 'flex'
  menu.classList.toggle("hidden");
});
change.addEventListener("click", () => {
  // mode.classList.toggle('mode')
  console.log(mode.content);
  if (mode.content == "light") {
    console.log("funkar");
    mode.content = "dark";
    change.innerText = "light";
    change.style.color = "white";
    change.style.backgroundColor = "black";
    // image.style.backgroundColor = 'black'
    // beskrivning.style.backgroundColor = 'black'
    // pris.style.backgroundColor = 'black'
    square.style.backgroundColor = 'black'
  } else {
  mode.content = "light";
  change.innerText = "dark";
  change.style.color = "black";
  change.style.backgroundColor = "white";
  image.style.backgroundColor = 'rgba(255, 255, 255, 0.708)'
  beskrivning.style.backgroundColor = 'rgba(255, 255, 255, 0.708)'
  pris.style.backgroundColor = 'rgba(255, 255, 255, 0.708)'
  square.style.backgroundColor = 'rgb(245, 243, 243)'
}
});
