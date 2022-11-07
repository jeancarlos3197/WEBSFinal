function datosJeanComidas() {
  document.getElementById("txtJeanComidas").innerHTML =
    "Arroz con pollo con papa a la huancaina";
  document.getElementById("jean-img-comidas").removeAttribute("hidden");
}

function datosJeanViajes() {
  document.getElementById("txtJeanViajes").innerHTML =
    "Ruta: Ica-Nasca-Camaná-Mollendo";
  document.getElementById("txtJeanViajes").removeAttribute("hidden");

  const imagenes = document.getElementsByClassName("img");

  for (let index = 0; index < imagenes.length; index++) {
    const element = imagenes[index];
    element.removeAttribute("hidden");
  }
}
