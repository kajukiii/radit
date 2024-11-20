var slides = document.querySelectorAll('.slide');

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    alert("Thank you for submitting the report. We will take it seriously and act accordingly.");
    
    document.getElementById("contact-form").reset();

    document.addEventListener("DOMContentLoaded", function () {
       
        document.body.classList.add("loaded");
    
    });

});

document.addEventListener("DOMContentLoaded", function () {

    document.body.classList.add("loaded");


    const elementsToAnimate = document.querySelectorAll('.fade-in');
    
    
    elementsToAnimate.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 300); 
    });

    
    const header = document.querySelector('header');
    setTimeout(() => {
        header.classList.add('visible');
    }, 1000); 

    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('visible');
        }, 1500 + index * 500); 
    });
});

var manualNav = function(manual) {
    slides.forEach(function (slide) {
        slide.classList.remove('active');
    
        buttons.forEach((btn) => {
            btn.classList.remove('active');
        });
    });
    
    slides[manual].classList.add('active');
    buttons[manual].classList.add('active');
    }
    
    buttons.forEach(function(btn, i) {
    btn.addEventListener('click', function() {
        manualNav(i);
        currentSlide = i;
    })
    })
    
    var repeat = function(activeClass) {
    let active = document.getElementsByClassName('active');
    
    let i = 1;
    var repeater = function() {
        setTimeout(function() {
            [...active].forEach(function(activeSlide) {
                activeSlide.classList.remove('active');
            });
    
            slides[i].classList.add('active');
            buttons[i].classList.add('active');
            i++
    
            if(slides.length == i) {
                i = 0;
            }
    
            if( i >= slides.length) {
                return;
            }
            repeater();
        }, 5000);
    }
    repeater();
    }
    repeat()