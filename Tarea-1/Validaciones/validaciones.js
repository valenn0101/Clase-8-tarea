function validarIntegrantes(integrantes){
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
function validarEdades(edadesIntegrantes) {
    for (let i = 0; i < edadesIntegrantes.length; i++) {
      const edad = edadesIntegrantes[i];
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

let hayError = false;

function validarFormularioIntegrantes(){
    const integrantes = document.querySelector("#cantidad-integrantes").value;

    const errorIntegrantes = validarIntegrantes(integrantes);

    const errores = {
        integrantes: errorIntegrantes
    };
    console.log(errores)   
    manejarErroresIntegrantes(errores);
}

function validarFormularioEdades(){
    const edadesIntegrantes = window.edades;
    const errorEdades = validarEdades(edadesIntegrantes);

   const erroresEdades = {
        edades: errorEdades
   }
   console.log(erroresEdades);
   manejarErroresEdades(erroresEdades);
}


function manejarErroresIntegrantes(errores) {
    const listadoIntegrantes = document.querySelector("#cantidad-integrantes");
    const $errores = document.querySelector("#errores");
    while ($errores.firstChild) {
        $errores.removeChild($errores.firstChild);
      }
    if (errores.integrantes) {
      listadoIntegrantes.className = "error";
      hayError = true;

      const $error = document.createElement("li");
      $error.innerText = errores.integrantes;
      $errores.appendChild($error);
    } else {
      listadoIntegrantes.className = "";
      hayError = false;
    }
  }

  function manejarErroresEdades(erroresEdades) {
    const listadoEdades = document.querySelectorAll('.familiares');
    const $errores = document.querySelector('#errores');
  
    if (erroresEdades.edades) {
      listadoEdades.forEach(function(edad) {
        edad.id = 'error';
      });
  
      const erroresArray = erroresEdades.edades.split(',');
      erroresArray.forEach(function(error) {
        const $error = document.createElement('li');
        $error.innerText = error;
        $errores.appendChild($error);
      });
  
      hayError = true;
    } else {
      listadoEdades.forEach(function(edad) {
        edad.id = '';
      });
      hayError = false;
    }
  }
