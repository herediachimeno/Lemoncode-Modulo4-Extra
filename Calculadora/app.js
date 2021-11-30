let result = 0;
let operation;

// Función para borrar el número una vez escrito y lanzado función.

let cleanValue = () => {
  document.getElementById("field-numbers").value = "";
};

// Función para obtener número

let getValue = () => Number(document.getElementById("field-numbers").value);

// Funciones para realizar las diferentes operaciones

let addition = () => {
  stringOperation = "+";
  calculation();
};

let subtraction = () => {
  stringOperation = "-";
  calculation();
};

let multiply = () => {
  stringOperation = "*";
  calculation();
};

let division = () => {
  stringOperation = "/";
  calculation();
};

// Función para realizar la operación con switch

let calculation = () => {
  switch (operation) {
    case "+":
      result += getValue();
      break;

    case "-":
      result -= getValue();
      break;

    case "*":
      result *= getValue();
      break;

    case "/":
      result /= getValue();
      break;
  }
  operation = stringOperation;
  console.log(result);
  cleanValue();
};

// Función para hacer funcionar el igual y pintar resultado en pantalla

let getEqual = () => {
  stringOperation = "";
  calculation();
  document.getElementById("result").innerHTML = result;
};

// Eventos relativos a las diferentes operaciones al hacer click en ellas

document.getElementById("addition").addEventListener("click", addition);
document.getElementById("subtraction").addEventListener("click", subtraction);
document.getElementById("multiplication").addEventListener("click", multiply);
document.getElementById("division").addEventListener("click", division);
document.getElementById("equal").addEventListener("click", getEqual);
