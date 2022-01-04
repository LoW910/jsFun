
// select modal-btn, modal-overlay, close-btn
const modalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

// listen for click events on modal-btn and close-btn
modalBtn.addEventListener('click', function() {
    console.log('modal button has been clicked');
    console.log(modalOverlay.classList);
    // when user clicks modal-btn add .open-modal to modal-overlay
    modalOverlay.classList.add('open-modal');
})

closeBtn.addEventListener('click', function() {
    console.log('close button has been clicked');
    console.log(modalOverlay.classList);
    //where user clicks close-btn remove .open-modal from modal-overlay
    modalOverlay.classList.remove('open-modal');
})
