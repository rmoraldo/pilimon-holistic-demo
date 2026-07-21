const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }

    });

});

hiddenElements.forEach(element => {
    observer.observe(element);
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

const navItems = document.querySelectorAll("nav ul a");

navItems.forEach(item => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});