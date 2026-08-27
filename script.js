// Laptop Repair Service - Form Functionality

const form = document.getElementById("repairForm");

form.addEventListener("submit", function (event) {
event.preventDefault();

const nameInput = form.querySelector('input[type="text"]');
const phoneInput = form.querySelector('input[type="tel"]');
const laptopInput = form.querySelectorAll('input[type="text"]')[1];
const problemInput = form.querySelector("textarea");

const name = nameInput.value.trim();
const phone = phoneInput.value.trim();
const laptop = laptopInput.value.trim();
const problem = problemInput.value.trim();

if (name === "" || phone === "" || laptop === "" || problem === "") {
    alert("Please fill in all the fields.");
    return;
}

alert(
    "Thank you, " + name +
    "! Your repair request has been submitted successfully."
);

form.reset();

});

// Smooth navigation
document.querySelectorAll(".nav-links a").forEach(function (link) {
link.addEventListener("click", function () {
const target = document.querySelector(this.getAttribute("href"));

    if (target) {
        target.scrollIntoView({
            behavior: "smooth"
        });
    }
});

});
