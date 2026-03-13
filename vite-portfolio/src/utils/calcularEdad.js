export function calcularEdad() {
  const nacimiento = new Date(2004, 11, 13); // 13 diciembre 2005 (mes 11 porque empieza en 0)
  const hoy = new Date();

  let edad = hoy.getFullYear() - nacimiento.getFullYear();

  const mesActual = hoy.getMonth();
  const diaActual = hoy.getDate();

  const mesNacimiento = nacimiento.getMonth();
  const diaNacimiento = nacimiento.getDate();

  // Si todavía no pasó tu cumpleaños este año, restamos 1
  if (
    mesActual < mesNacimiento ||
    (mesActual === mesNacimiento && diaActual < diaNacimiento)
  ) {
    edad--;
  }

  return edad;
}