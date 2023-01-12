const bar = document.getElementById("bar");
const menu = document.getElementById("menu");
const change = document.getElementById("change");
const mode = document.getElementById("mode");
const image = document.querySelector('.image')
const square = document.querySelector('.square')
const beskrivning = document.querySelector('.beskrivning')
const pris = document.querySelector('.pris')


bar.addEventListener("click", () => {
  // menu.style.display = 'flex'
  menu.classList.toggle("hidden");
});
change.addEventListener("click", () => {
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
  image.style.backgroundColor = 'rgba(255, 255, 255, 0.708)';
  beskrivning.style.backgroundColor = 'rgba(255, 255, 255, 0.708)';
  pris.style.backgroundColor = 'rgba(255, 255, 255, 0.708)';
  square.style.backgroundColor = 'rgb(245, 243, 243)';
}
});

const home = document.getElementById('home')
const about = document.getElementById('about')
const contact = document.getElementById('contact')
const language1 = document.getElementById('language1')
const lang1 = document.getElementById('lang1')
const euro = document.querySelectorAll('.euro')
const text = document.querySelectorAll('.text')
const buy = document.querySelectorAll('.buy')
const webshop = document.getElementById('webshop')

if((navigator.language.match("en-US") || navigator.language.match("en"))){
  language1.innerText = 'engelska'
}else{
  language1.innerText = 'svenska'
}
language1.addEventListener('click', () =>{
  console.log(language1.innerText)
if (language1.innerText === 'svenska'){
  console.log('svenska')
  language1.innerText = 'engelska'
  home.innerText = 'Hem'
  about.innerText = 'Om oss'
  contact.innerText = 'Kontakt'
  webshop.innerText = 'E-handel'
  buy.forEach(element => {
    element.innerText = 'Köp'
  });
  euro.forEach(element => {
    element.innerText = '599kr'
  });
  text.forEach(element => {
    element.innerText = 'Beskrivning'
  });
  

} 

else if (language1.innerText === 'engelska'){
  language1.innerText = 'svenska'
  console.log('svenska')
  home.innerText = 'Home'
  about.innerText = 'About'
  contact.innerText = 'Contact'
  webshop.innerText = 'Webshop'
  buy.forEach(element => {
    element.innerText = 'Buy'
  });
  euro.forEach(element => {
    element.innerText = '59$'
  });
  text.forEach(element => {
    element.innerText = 'Description'
  });
  
}

})
