


window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { // Adjust the scroll threshold as needed
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


function loadGoogleTranslate(){
    new google.translate.TranslateElement('google_element')
}


let menuIcon = document.querySelector('#menuIcon');
let nav = document.querySelector('.nav');
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id + ' ]').classList.add('active')
            })
        }
    })
}


menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('bx-x');
    nav.classList.toggle('active')
}



document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    // Toggle dropdown on button click
    dropbtn.addEventListener('click', () => {
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    // Close dropdown when clicking outside
    window.addEventListener('click', (event) => {
        if (!event.target.matches('.dropbtn') && !event.target.matches('.dropbtn *') && !event.target.matches('#google_element') && !event.target.matches('#google_element *')) {
            dropdownContent.style.display = 'none';
        }
    });

    // Prevent dropdown from closing when interacting with Google Translator
    dropdownContent.addEventListener('click', (event) => {
        event.stopPropagation(); // Stop event from bubbling up
    });

    // Initialize Google Translator
    function loadGoogleTranslate() {
        new google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'en,es,fr,de', // Add your desired languages here
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false // Prevent auto-display of dropdown
        }, 'google_element');
    }

    // Load Google Translator
    loadGoogleTranslate();
});


