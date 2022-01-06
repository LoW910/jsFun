// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// scrollY is a read - only window property that returns the number of pixles the document has been scrolled vertically.
// slice extracts a section of a string without modifying the original string
// offsetTop - a number, representing the top position of the element, in pixles

// ******************** set date ***********************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// ******************** close links ***********************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links')

navToggle.addEventListener('click', function() {
    // static links
    // linksContainer.classList.toggle('show-links');  

    // ********* dynamic ***********
    // getting the height of the container that is holding the links
    const containerHeight = linksContainer.getBoundingClientRect().height;
    // gets the sum of all the links inside the container
    const linksHeight = links.getBoundingClientRect().height;

    // if links are hidden
    if(containerHeight === 0) {
        // add height to linksContainer
        linksContainer.style.height = `${linksHeight}px`
    } else {
        linksContainer.style.height = 0;
    }
})

// ******************** fixed navbar ***********************
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');


window.addEventListener("scroll", function() {
    // console.log(window.scrollY);
    const scrollHeight = window.scrollY;
    const navHeight = navbar.getBoundingClientRect().height;

    if(scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav')
    }

    if (scrollHeight > 300){
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }

})


// ******************** smooth scroll ***********************

// select links
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        // prevent default
        e.preventDefault();
        // nav to specific spot
        const id = e.currentTarget.getAttribute('href').slice(1);
        // console.log(id);
        const element = document.getElementById(id);

        let position = element.offsetTop;
        console.log(position);
        window.scrollTo({
            left:0,
            top:position,
        });
        linksContainer.style.height = 0;
    });
});