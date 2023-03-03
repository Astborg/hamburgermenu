//dark mode
const bar = document.getElementById("bar");
const menu = document.getElementById("menu");
const change = document.getElementById("change");
const mode = document.getElementById("mode");
const image = document.querySelector('.image')
const square = document.querySelector('.square')
const beskrivning = document.querySelector('.beskrivning')
const pris = document.querySelector('.pris')


bar.addEventListener("click", () => {
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

//hämta från firebase
async function getProducts(){
  try{
    const baseURL = 'https://webstore-22fa4-default-rtdb.europe-west1.firebasedatabase.app/'
    const url = baseURL + 'Products.json'
    const response = await fetch(url)
    let data = await response.json()
    console.log(data)

    // const generatedHTML = Object.keys(data).reduce((accum, currKey) => accum +
    const generatedHTML = Object.keys(data).reduce((accum, i) => accum +
    
    `<div>
      <div>${data[i].namn}</div>
      <div class="image"><img class="skor-img" src="${data[i].img}" alt=""></div>
      <div class="beskrivning"><strong class="text">Description</strong><br><br><p class="text2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quas quasi praesentium voluptates minima deleniti enim sint quidem expedita sed ut officiis hic dolore dolor quaerat atque earum tenetur necessitatibus, maiores odit illo molestias voluptatibus adipisci quos? Vero necessitatibus tempora inventore, accusamus illo, maiores quisquam quo odit nesciunt qui nisi hic est non aliquid ex numquam earum aperiam? Recusandae excepturi eligendi nemo magni praesentium assumenda, placeat rem numquam illo provident earum officia eveniet tempora commodi laborum molestias animi expedita nihil sint explicabo quos modi at. Odio vel a voluptas explicabo pariatur, enim impedit quas eius ab recusandae, veniam, deserunt consequatur.</p></div>
      <div class="pris"><p>lager: ${data[i].lager}</p> <button class="euro">Buy:${data[i].pris}kr</button></div></div>`
    ,'' )
      
    document.getElementById('container').innerHTML =generatedHTML 
  }catch(error){
    console.log(error)
  }
  
}

getProducts()


  



