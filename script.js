const formulario = document.getElementById("formulario");

const registro = document.getElementById("registro");
const resultado = document.getElementById("resultado");

const nombreResultado =
  document.getElementById("nombreResultado");

const experienciaResultado =
  document.getElementById("experienciaResultado");

const objetivoResultado =
  document.getElementById("objetivoResultado");


formulario.addEventListener("submit", function(event) {

  // Evitamos que el navegador recargue la página
  event.preventDefault();


  // Obtenemos los valores del formulario

  const nombre =
    document.getElementById("nombre").value;

  const experiencia =
    document.getElementById("experiencia").value;

  const objetivo =
    document.getElementById("objetivo").value;


  // Colocamos la información en la ficha

  nombreResultado.textContent = nombre;

  experienciaResultado.textContent = experiencia;

  objetivoResultado.textContent = objetivo;


  // Ocultamos el formulario

  registro.style.display = "none";


  // Mostramos la ficha

  resultado.classList.remove("oculto");


  // Regresamos al inicio de la ficha

  resultado.scrollIntoView({
    behavior: "smooth"
  });

});


function volverFormulario() {

  // Ocultamos resultado

  resultado.classList.add("oculto");


  // Mostramos formulario

  registro.style.display = "block";


  // Regresamos al formulario

  registro.scrollIntoView({
    behavior: "smooth"
  });

}