// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('activate');
}


// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            //activate navbar links
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
       // active sections for animation scroll
       sec.classList.add('show-animate');
    }
    else{
        sec.classList.remove('show-animate');
    }

    });

    // sticky header
    let header=document.querySelector('header');

    header.classList.toggle('sticky' , window.scrollY > 100);


    // remove toggle icon and navbar when click navbar links (scroll)


    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >=document.scrollingElement.scrollHeight);

}

(function() {
    emailjs.init("O3GEcPdU0reDzD9JS");  
  })();

  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent default form submission

    // Collect form data
    const formData = new FormData(form);

    // Send email via EmailJS
    emailjs.sendForm('ouassilakiria@gmail.com', 'contact_me', formData)
      .then(function(response) {
        // Success message
        document.getElementById('response').innerText = 'Message sent successfully!';
      }, function(error) {
        // Error message
        document.getElementById('response').innerText = 'Oops, something went wrong.';
      });
  });
  