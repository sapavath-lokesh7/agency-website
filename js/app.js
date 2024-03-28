// loading animation

const load = document.getElementById("loader");

window.addEventListener("load", () => {
  load.style.display = "none";
});

// contact us sending email

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "skysculptinnovations@gmail.com",
    Password: "########",
    To: "skysculptinnovations@gmail.com",
    From: document.getElementById("email").value,
    Subject: "new enquiry",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
