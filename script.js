function agregar(valor) {
  document.getElementById("pantalla").value += valor;
}
function calcular() {
  let resultado = document.getElementById("pantalla").value;
  document.getElementById("pantalla").value = eval(resultado);
}