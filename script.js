/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {
    menuBtn.addEventListener("click", () => {
        navbar.classList.toggle("open");
    });
}


/* Close mobile menu after clicking */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        if (navbar) {
            navbar.classList.remove("open");
        }

    });

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================
   BUTTON FEEDBACK
========================= */

document.querySelectorAll(".primary-btn")
    .forEach(button => {

        button.addEventListener("click", () => {

            button.style.transform = "scale(0.97)";

            setTimeout(() => {

                button.style.transform = "";

            }, 120);

        });

    });


/* =========================
   IMAGE FALLBACK
========================= */

const profileImage =
    document.querySelector(".profile-frame img");

if (profileImage) {

    profileImage.addEventListener("error", () => {

        profileImage.style.display = "none";

        profileImage.parentElement.style.background =
            "linear-gradient(135deg, #172b46, #0b101b)";

    });

}