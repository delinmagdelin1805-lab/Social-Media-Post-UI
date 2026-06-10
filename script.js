/* Social Media Post */

const button =
    document.querySelector("button");

/* Button Animation */

button.addEventListener("click", () => {

    button.style.transform =
        "scale(0.95)";

    setTimeout(() => {

        button.style.transform =
            "";

    }, 150);

});