//Ej. 1
// Obtenemos el elemento con id "mousePosition"
const mousePosition = document.getElementById("mousePosition");

// Agregamos un event listener al documento para el evento "mousemove"
document.addEventListener("mousemove", function(e) {
  // Actualizamos el contenido del elemento "mousePosition" con las coordenadas del mouse
  mousePosition.innerHTML = "Posición del mouse: " + e.clientX + ", " + e.clientY;
});


//Ej. 2
// Obtenemos los elementos del formulario y el botón de envío
const form = document.getElementById("form1");
const firstName = document.getElementById("form-fname");
const lastName = document.getElementById("form-lname");
const formButton = document.getElementById("form1-submit");

// Agregamos un event listener al botón de envío
formButton.addEventListener("click", function(e) {
  e.preventDefault(); // Evita el comportamiento predeterminado del formulario

  // Creamos un nuevo elemento de párrafo para mostrar el nombre completo
  const fullName = document.createElement("p");
  fullName.textContent = firstName.value + " " + lastName.value;

  form.appendChild(fullName); // Agregamos el nombre completo al formulario
});


//EJ. 3
// Obtener referencias a la tabla y los botones
const table = document.getElementById('sampleTable');
const insertRowButton = document.getElementById('btn-insert-r');
const insertColumnButton = document.getElementById('btn-insert-c');

// Agregar un event listener para el botón "Insert row"
insertRowButton.addEventListener('click', function() {
  // Crear una nueva fila
  const newRow = table.insertRow();
  // Agregar dos nuevas celdas a la fila
  const newCell1 = newRow.insertCell();
  const newCell2 = newRow.insertCell();
  // Establecer el contenido de las nuevas celdas
  newCell1.textContent = 'New row column 1';
  newCell2.textContent = 'New row column 2';
});

// Agregar un event listener para el botón "Insert column"
insertColumnButton.addEventListener('click', function() {
  // Iterar sobre todas las filas de la tabla
  const rows = table.rows;
  for (let i = 0; i < rows.length; i++) {
    // Obtener la cantidad actual de columnas en la fila
    const currentColumns = rows[i].cells.length;
    // Crear una nueva celda al final de la fila
    const cell = rows[i].insertCell(currentColumns);
    // Establecer el contenido de la nueva celda
    cell.textContent = 'New column';
  }
});

//Ej. 4
// Obtener una referencia a la tabla y al botón
const tabla = document.getElementById("myTable");
const changeBtn = document.getElementById("btn-change");

// Agregar un manejador de eventos para el botón
changeBtn.addEventListener("click", function() {
  // Obtener los valores de índice de fila y columna y el nuevo valor del texto
  const rowIndex = document.getElementById("rowIndex").value;
  const colIndex = document.getElementById("colIndex").value;
  const newValue = document.getElementById("newValue").value;

  // Verificar si los valores de índice de fila y columna son válidos
  if (rowIndex >= 1 && rowIndex <= tabla.rows.length && colIndex >= 1 && colIndex <= tabla.rows[0].cells.length) {
    // Actualizar el contenido de la celda correspondiente
    tabla.rows[rowIndex - 1].cells[colIndex - 1].textContent = newValue;
  } else {
    // Mostrar un mensaje de error si los valores de índice de fila y columna son inválidos
    alert("Pon los valores de índice de fila y columna válidos");
  }
});

//Ej. 5
// Obtener referencia al elemento select y a los botones
const colorSelect = document.getElementById("colorSelect");
const addColorButton = document.getElementById("btn-add-color");
const removeColorButton = document.getElementById("btn-rmv-color");

// Agregar event listener al botón de agregar color
addColorButton.addEventListener("click", function () {
  // Opciones de colores disponibles
  const colorOptions = ["Blue", "Yellow", "Orange", "Purple"];
  
  // Obtener un color aleatorio de las opciones
  const randomColor =
    colorOptions[Math.floor(Math.random() * colorOptions.length)];

  // Crear un nuevo elemento de opción
  const newOption = document.createElement("option");
  newOption.textContent = randomColor;

  // Agregar la nueva opción a la lista select
  colorSelect.appendChild(newOption);
});

// Agregar event listener al botón de eliminar color
removeColorButton.addEventListener("click", function () {
  // Verificar si hay al menos una opción seleccionada en la lista select
  if (colorSelect.options.length > 0) {
    // Remover la opción seleccionada de la lista select
    colorSelect.remove(colorSelect.selectedIndex);
  }
});

//Ej.6
// Obtenemos el elemento de imagen con el id "imagenGato"
const gatoImagen = document.getElementById("imagenGato");

// Agregamos un event listener al elemento para el evento "mouseenter"
gatoImagen.addEventListener("mouseenter", function() {
  // Generamos dos números aleatorios para el ancho y alto de la imagen
  const newWidth = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
  const newHeight = Math.floor(Math.random() * (600 - 300 + 1)) + 300;

  // Actualizamos la fuente (src) de la imagen con la nueva URL generada
  gatoImagen.src = "http://placekitten.com/" + newWidth + "/" + newHeight;
});
