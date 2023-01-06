function probarValidarIntegrantes() {
  console.assert(
    validarIntegrantes("") === "El campo integrantes no puede estar vacio",
    "Validar integrantes falló un string vacio"
  );
  console.assert(
    validarIntegrantes("2,25") ===
      "El campo integrantes solo admite números enteros",
    "Validar integrantes falló con un decimal"
  );
  console.assert(
    validarIntegrantes("9999") ===
      "El campo integrantes solo admite numeros de hasta 2 cifras",
    "Validar familiares falló un numero negativo"
  );
  console.assert(
    validarIntegrantes("2") === "",
    "Validar integrantes falló con un numero valido"
  );
}

probarValidarIntegrantes();

function probarValidarEdades() {
  console.assert(
    validarEdades([""]) === "El campo edades no puede estar vacio",
    "Validar edades falló con un array vacío"
  );
  console.assert(
    validarEdades(["1,25"]) === "El campo edades solo admite numeros enteros",
    "Validar edades falló con un decimal"
  );
  console.assert(
    validarEdades(["1000"]) ===
      "El campo edades solo admite numeros de hasta 3 cifras",
    "Validar edades falló con un número de más de 3 cifras"
  );
  console.assert(
    validarEdades(["12"]) === "",
    "Validar edades falló con un número válido"
  );
}

probarValidarEdades();
