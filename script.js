

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
    
    `<div  class="div-container">
      
      <div class="image"><img class="skor-img" src="${data[i].img}" alt=""></div>
      <div class="beskrivning"><strong class="text">${data[i].namn}</strong><br><br><p class="text2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quas quasi praesentium voluptates minima deleniti enim sint quidem expedita sed ut officiis hic dolore dolor quaerat atque earum tenetur necessitatibus, maiores odit illo molestias voluptatibus adipisci quos? Vero necessitatibus tempora inventore, accusamus illo, maiores quisquam quo odit nesciunt qui nisi hic est non aliquid ex numquam earum aperiam? Recusandae excepturi eligendi nemo magni praesentium assumenda, placeat rem numquam illo provident earum officia eveniet tempora commodi laborum molestias animi expedita nihil sint explicabo quos modi at. Odio vel a voluptas explicabo pariatur.</p></div>
      <div class="pris"><p>lager: ${data[i].lager}</p> <button class="euro">Buy:${data[i].pris}kr</button></div></div>`
    ,'' )
      
    document.getElementById('container').innerHTML =generatedHTML 
  }catch(error){
    console.log(error)
  }
  
}

getProducts()


  



