function probarValidarIntegrantes(){
    console.assert(
        validarFamiliares("") === "Debe haber al menos un integrante",
        "Validar familiares falló un string vacio"
    );
    console.assert(
        validarFamiliares("1,25") === "La cantidad de integrantes no puede ser un decimal",
        "Validar familiares falló con un decimal"
    );
    console.assert(
        validarFamiliares("9999") === "El campo edad solo admite edades validas (entre 1 y 3 cifras)",
        "Validar familiares falló un numero negativo"
    );
    console.assert(
        validarFamiliares("2") === "",
        "Validar familiares falló con un numero valido"
    );
}

probarValidarIntegrantes();

function probarValidarEdades(){
    console.assert(
        validarEdades("") === "La edad no puede ser cero",
        "Validar edades falló un string vacio"
    );
    console.assert(
        validarEdades("1,25") === "La edad no puede ser un decimal",
        "Validar edades falló con un decimal"
    );
    console.assert(
        validarEdades("-1") === "La edad no puede ser un numero negativo",
        "Validar edades falló un numero negativo"
    );
    console.assert(
        validarEdades("12") === "",
        "Validar edades falló con un numero valido"
    );
}

probarValidarEdades();