document.addEventListener("DOMContentLoaded", function () {
  let links = document.querySelectorAll('a[href^="#"]');
  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      let destino = document.querySelector(this.getAttribute("href"));
      if (destino) {
        e.preventDefault();
        destino.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  let form = document.getElementById("formulario");
  let boton = document.getElementById("btnEnviar");

  if (form && boton) {
    form.addEventListener("submit", function (e) {
      let nombre = document.getElementById("nombre").value.trim();
      let email = document.getElementById("email").value.trim();
      let mensaje = document.getElementById("mensaje").value.trim();
      let errores = [];

      if (nombre.length < 3) {
        errores.push("El nombre es muy corto");
      }
      if (!email.includes("@") || !email.includes(".")) {
        errores.push("El email no es válido");
      }
      if (mensaje.length < 10) {
        errores.push("El mensaje es muy corto");
      }

      if (errores.length > 0) {
        e.preventDefault();
        boton.classList.remove("bg-green-600", "hover:bg-green-700");
        boton.classList.add("bg-red-600", "hover:bg-red-700");
        alert("Revisá estos campos:\n" + errores.join("\n"));
        form.scrollIntoView({ behavior: "smooth" });
      } else {
        e.preventDefault();
        boton.classList.remove("bg-red-600", "hover:bg-red-700");
        boton.classList.add("bg-green-600", "hover:bg-green-700");
        alert("¡Mensaje enviado! (Simulado)");
        form.reset();
        form.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});