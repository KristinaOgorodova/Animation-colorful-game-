const board= document.querySelector('#board')
const SQUARES_NUMBER= 500
const colors = ['rgb(153, 175, 239)', 'rgb(66, 105, 224)', 'rgb(205, 124, 224)', 'rgb(75, 159, 218)', 'rgb(216, 228, 236)']

for (let i=0; i< SQUARES_NUMBER; i++) {

const square = document.createElement('div')
square.classList.add('square')

square.addEventListener('mouseover',() =>  
setColor(square))

square.addEventListener('mouseleave',() =>
 removeColor(square))
board.append(square)
}

function setColor (element){
    const color = getRandomColor()
    element.style.backgroundColor =color
    element.style.boxshadow =`0 0 2px ${color},0 0 10px ${color}`
}

function removeColor (element){
    element.style.backgroundColor ='#1d1d1d'
    element.style.boxshadow =`0 0 2px #000`
}

function getRandomColor (){
   const index= Math.floor(Math.random()*colors.length)
   return colors[index]
}