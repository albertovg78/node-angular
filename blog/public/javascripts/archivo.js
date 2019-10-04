function mostrarComentario(id) {
    var ocultoContenido = document.getElementById(id);
    if (ocultoContenido.style.display === "none" || ocultoContenido.style.display === "" ) {
        ocultoContenido.style.display = "block";
    } else {
        ocultoContenido.style.display = "none";
    }
  }

function volverLista(){
    location.href="../posts"
}