
const colors = ['Red', 'Black', 'Blue', 'White', 'Yellow', 'Purple', 'Green']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function() {
    const randomColor = getRandomColor()
    document.body.style.background = colors[randomColor]
    // console.log(ramdomColor)
    color.textContent = colors[randomColor]
})
function getRandomColor () {
    return Math.floor(Math.random() * colors.length)
}