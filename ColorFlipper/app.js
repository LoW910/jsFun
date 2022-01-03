const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
        console.log(document.body)

        // get random number between 0 - 3 ie.. colors[1]
        const randomNumber =  getRandomNumber();
        console.log(randomNumber, 'randomNumber');
        console.log(colors[randomNumber], 'colors[randomNumber');
        document.body.style.backgroundColor = colors[randomNumber];
        color.textContent = colors[randomNumber]; // rgba(133,122,200)
        
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}