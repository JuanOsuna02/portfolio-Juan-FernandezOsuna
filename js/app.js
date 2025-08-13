document.addEventListener("DOMContentLoaded", function () {
    // Scroll suave para navegar al clickear una seccion de la pagina
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

  // Resetear color del botón ENVIAR al escribir en cualquier campo
  ["nombre", "email", "mensaje"].forEach(function(id) {
    let campo = document.getElementById(id);
    if (campo) {
      campo.addEventListener("input", function () {
        boton.classList.remove("bg-red-600", "hover:bg-red-700");
        boton.classList.add("bg-green-600", "hover:bg-green-700");
      });
    }
  });
  // Menú hamburguesa (Es solo para celulares y/o tablets, se cierra automáticamente al seleccionar una seccion)
  var menuBtn = document.getElementById("menuBtn");
  var mobileMenu = document.getElementById("mobileMenu");
  if (menuBtn && mobileMenu) {
    menuBtn.onclick = function () {
      mobileMenu.classList.toggle("hidden");
    };
    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.onclick = function () {
        mobileMenu.classList.add("hidden");
      };
    });
  }
// Valvidación del formulario, simulando envío y notificando errores
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
        alert("¡ERROR! Revisá estos campos:\n" + errores.join("\n"));
      } else {
        e.preventDefault();
        boton.classList.remove("bg-red-600", "hover:bg-red-700");
        boton.classList.add("bg-green-600", "hover:bg-green-700");
        alert("¡Mensaje enviado! (Simulacion)");
        form.reset();
      }
    });
  }
});