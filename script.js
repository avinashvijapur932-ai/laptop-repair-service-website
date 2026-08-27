// FixPro Laptop Repair Website

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("repairForm");

    if (!form) {
        console.log("Repair form not found.");
        return;
    }

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const inputs = form.querySelectorAll("input");
        const textarea = form.querySelector("textarea");

        const name = inputs[0]?.value.trim();
        const phone = inputs[1]?.value.trim();
        const laptop = inputs[2]?.value.trim();
        const problem = textarea?.value.trim();

        if (!name || !phone || !laptop || !problem) {
            alert("Please fill in all the fields.");
            return;
        }

        alert(
            "Thank you, " + name +
            "!\n\nYour repair request has been submitted successfully."
        );

        form.reset();
    });

});
