const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector('#btn')
const textcolor = document.querySelector('.color')


btn.addEventListener('click', ()=>{
   let hexcolor = '#'
   for(let i=0; i<6; i++){
    hexcolor += hex[random()]
   }
   document.body.style.backgroundColor = hexcolor
   textcolor.textContent = hexcolor
})

const random = ()=> Math.floor(Math.random() * hex.length)