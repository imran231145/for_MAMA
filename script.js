const button = document.querySelector('#boom')

button.onclick = () => {

confetti({
particleCount:150,
spread:100,
origin:{ y:0.6 }
})

}