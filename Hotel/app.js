// Obtener valor habitación

let room = () =>
  document.getElementById("room-type").options[
    document.getElementById("room-type").selectedIndex
  ].value;

// Obtener precio por habitación

function roomPrice() {
  switch (room()) {
    case "Standard":
      priceOfRoom = 100;
      break;
    case "Junior":
      priceOfRoom = 120;
      break;
    case "Suite":
      priceOfRoom = 150;
      break;
  }
  return priceOfRoom;
}

// Obtener afirmativo/negativo en SPA, obtención precio y guardar datos para el posterior pintado vía DOM

let spa = () => document.getElementById("spa").checked;

function spaPrice() {
  return (priceOfSpa = spa() === true ? 20 : 0);
}

function spaVariant() {
  return (optionalSpa = spa() === true ? "Sí" : "No");
}

// Funciones relativas a la ocupación

let ocupation = () =>
  document.getElementById("ocupation").options[
    document.getElementById("ocupation").selectedIndex
  ].value;

function factorOcupation() {
  switch (ocupation()) {
    case "Individual":
      factor = 0.75;
      break;
    case "Doble":
      factor = 1;
      break;
    case "Triple":
      factor = 1.25;
      break;
  }
  return factor;
}

// Función para obtener valor número de noches y precio

let nights = () => Number(document.getElementById("numberofnights").value);
let nightPrice = () => (roomPrice() + spaPrice()) * factorOcupation();

// Funciones para el parking (obtener valor y precio)

let parkingDays = () => Number(document.getElementById("days-parking").value);
let parkingPrice = () => parkingDays() * 10;

// Cálculos de precio por noche y total

let calculateTotalNights = () => nightPrice() * nights();
let calculateTotalstay = () => calculateTotalNights() + parkingPrice();

// Función para pintar en pantalla vía DOM los resultados

function calculateTotal() {
  let principal = document.getElementById("principal");
  principal.innerHTML = `

<ul>
<li>Tipo de habitación: ${room()} </li>
<li>Disfruta Spa durante estancia: ${spaVariant()} </li>
<li>Tipo de Ocupación: ${ocupation()} \n </li>
</br>
<li><b>Precio por noche</b> según opciones: ${nightPrice()} euros </li>
<li><b>Precio total</b>  por ${nights()} noches ${calculateTotalNights()} euros </li>
<li><b>Precio total</b>  por el parking: ${parkingPrice()} euros </li>
<li><b>Precio total</b>  por la estancia ${calculateTotalstay()} euros </li>
</ul>`;
}

document.getElementById("mybutton").addEventListener("click", calculateTotal);
