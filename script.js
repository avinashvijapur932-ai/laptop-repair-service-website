const form = document.getElementById("repairForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Thank you! Your repair request has been submitted.");

    form.reset();
});