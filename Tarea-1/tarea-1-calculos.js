function mostrarMayor($edades) {
  let mayorNumero = $edades[0];
  for (let i = 1; i < $edades.length; i++) {
    if ($edades[i] > mayorNumero) {
      mayorNumero = $edades[i];
    }
  }

  return mayorNumero;
}

function mostrarMenor($edades) {
  let menorNumero = $edades[0];
  for (let i = 1; i < $edades.length; i++) {
    if ($edades[i] < menorNumero) {
      menorNumero = $edades[i];
    }
  }

  return menorNumero;
}

function calcularPromedio($edades) {
  let acumulador = 0;
  for (let i = 0; i < $edades.length; i++) {
    acumulador += $edades[i];
  }

  return (acumulador / $edades.length).toFixed(2);
}
