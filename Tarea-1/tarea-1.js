const $botonEnviar = document.getElementById("primer-paso");
const integrantes = Number(
  document.getElementById("cantidad-integrantes").value
);
const $botonCalcular = document.getElementById("segundo-paso");
const $botonReiniciar = document.getElementById("reiniciar");

function cambiarBotonCalcular(mostrar) {
  if (mostrar) {
    document.getElementById("segundo-paso").className = "";
  } else {
    document.getElementById("segundo-paso").className = "ocultar";
  }
}

function cambiarBotonResultados(mostrar) {
  if (mostrar) {
    document.getElementById("resultados").className = " ";
  } else {
    document.getElementById("resultados").className = "ocultar";
  }
}

$botonEnviar.onclick = function () {
  validarFormularioIntegrantes(integrantes);
  if (hayError === true) {
    return;
  }
  cambiarBotonCalcular(true);
  const numeroDeIntregantes = Number(
    document.getElementById("cantidad-integrantes").value
  );
  if (numeroDeIntregantes > 0) {
    crearFormularios(numeroDeIntregantes);
  } else {
    alert("Debe tener al menos un integrante");
    return false;
  }
};

function crearFormularios(numeroDeIngregantes) {
  const $formularios = document.getElementById("formularios");
  $formularios.innerHTML = " ";
  for (let i = 1; i <= numeroDeIngregantes; i++) {
    $formularios.innerHTML += `<form id="integrante-${i}" class="familia">
          <h3>Familiar Numero ${i}</h3>
          <label for="edad-familiares">Edad</label>
          <input type="number" name="Edad" class="familiares" id="" required>
          </form> <br/>`;
  }
}

function borrarEdades() {
  const $integrantes = document.querySelectorAll(".familia");
  for (let i = 0; i < $integrantes.length; i++) {
    $integrantes[i].remove();
  }
}

function borrarErrores(){
  const $errores = document.querySelector("#errores");
  $errores.innerHTML = "";
}

$botonCalcular.onclick = function () {
  const $edades = obtenerEdades();
  edadesErrores();
  if (hayError == true) {
    cambiarBotonResultados(false)
    return;
  }
  mostrarEdad("mayor", mostrarMayor($edades));
  mostrarEdad("menor", mostrarMenor($edades));
  mostrarEdad("promedio", calcularPromedio($edades));
  cambiarBotonResultados(true);
};

function obtenerEdades() {
  const integrantes = document.querySelectorAll(".familiares");
  const edades = [];
  for (let i = 0; i < integrantes.length; i++) {
    edades.push(Number(integrantes[i].value));
  }
  return edades;
}

function mostrarEdad(tipo, valor) {
  document.querySelector(`#${tipo}-edad`).textContent = valor;
}

$botonReiniciar.onclick = function () {
  reiniciar();
};

function reiniciar() {
  borrarErrores();
  borrarEdades();
  cambiarBotonCalcular(false);
  cambiarBotonResultados(false);
}
