// Inicializar EmailJS 
(function(){
  emailjs.init("ugiMEIIn0rVOjakx5"); // tu Public Key
})();

//Enviar Formulario 
const form = document.getElementById("contactForm");
form.addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_jr05iyh", "template_itek8v5", this)
    .then(() => {
      alert("Mensaje enviado correctamente. Te responderé pronto.");
      form.reset();
    }, (error) => {
      alert("Error al enviar: " + JSON.stringify(error));
      console.error("EmailJS Error:", error);
    });
});

//Modo Oscuro
const toggleBtn = document.getElementById("darkModeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "Claro" : "Obscuro";
});
