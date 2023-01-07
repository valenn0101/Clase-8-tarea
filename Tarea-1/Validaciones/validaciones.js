function validarIntegrantes(integrantes) {
  if ("" === integrantes) {
    return "El campo integrantes no puede estar vacio";
  }

  if (!/^[0-9]+$/.test(integrantes)) {
    return "El campo integrantes solo admite números enteros";
  }

  if (!/^[0-9]{1,2}$/.test(integrantes)) {
    return "El campo integrantes solo admite numeros de hasta 2 cifras";
  }
  return "";
}
function validarEdades(obtenerEdadesErrores) {
  for (let i = 0; i < obtenerEdadesErrores.length; i++) {
    const edad = obtenerEdadesErrores[i];
    if (edad === "") {
      return "El campo edades no puede estar vacio";
    }
    if (!/^[0-9]+$/.test(edad)) {
      return "El campo edades solo admite numeros enteros";
    }
    if (!/^[0-9]{1,3}$/.test(edad)) {
      return "El campo edades solo admite numeros de hasta 3 cifras";
    }
  }
  return "";
}

let hayError;

function validarFormularioIntegrantes() {
  const integrantes = document.querySelector("#cantidad-integrantes").value;
  const errorIntegrantes = validarIntegrantes(integrantes);

  const errores = {
    integrantes: errorIntegrantes,
  };
  manejarErroresIntegrantes(errores);
}

function manejarErroresIntegrantes(errores) {
  const listadoIntegrantes = document.querySelector("#cantidad-integrantes");
  const $errores = document.querySelector("#errores");
  $errores.innerHTML = "";

  Object.values(errores).forEach((error) => {
    if (error) {
      listadoIntegrantes.className = "error";
      hayError = true;

      const $error = document.createElement("li");
      $error.innerText = error;
      $errores.appendChild($error);
    } else {
      listadoIntegrantes.className = "";
      hayError = false;
    }
  });
}

function edadesErrores() {
  const integrantes = document.querySelectorAll(".familiares");
  const $errores = document.querySelector("#errores");
  $errores.innerHTML = "";

  hayError = false;
  for (let i = 0; i < integrantes.length; i++) {
    const edad = integrantes[i].value;
    const mensajeError = validarEdades([edad]);

    if (mensajeError) {
      integrantes[i].id = "error";
      const li = document.createElement("li");
      li.textContent = mensajeError;
      $errores.appendChild(li);
      hayError = true;
    } else {
      integrantes[i].id = "";
    }
  }
}
