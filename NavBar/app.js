// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class to classList
// remove - remove class from classList
// toggle - toggles class 


const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const hamBurger = document.querySelector('.fas');

navToggle.addEventListener('click', function() {
    // console.log(links.classList);
    console.log(links.classList.contains('random'), "should log false");
    console.log(links.classList.contains('links'), "should log true");

    // toggle acts as a single if else statement
    links.classList.toggle('show-links');
    hamBurger.classList.toggle('.fas');
})