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

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch("https://my-portfolio-j9utkw4nw-ouassilas-projects.vercel.app//api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            alert("Form submitted successfully!");
            contactForm.reset();
        } else {
            alert("Error submitting the form.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong.");
    }
});

