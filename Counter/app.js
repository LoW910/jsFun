// set initial count
let count = 0;

// select value and buttons 
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
// console.log(btns, "btns");

btns.forEach(function (btn) {
    // console.log(btn, "btn");
    btn.addEventListener('click', function(e) {
        // console.log(e.currentTarget.classList, "current click button");
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if ( styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = 'white';
            value.style.backgroundColor = 'green';
        }
        if (count < 0) {
            value.style.color = "white";
            value.style.backgroundColor = 'red';
        }
        if (count === 0) {
            value.style.backgroundColor = 'white';
            value.style.color = 'black';
        }
        value.innerHTML = count;
    })
})