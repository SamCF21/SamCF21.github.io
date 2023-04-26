console.log("Actividad Javascript")

console.log("1. Ejercicio: función que encuentre el primer carácter de un cadena de texto que no se repite.")

function sinrep(str) {
    
    const dict = {}; //diccionario vacio donde se van a almacenar las frecuencias de los caracteres
    
    //se recorren todos los caracteres del string
    for (let i = 0; i < str.length; i++) {
      const car = str[i]; //aqui se guardan en car
      //se checa si estan en el diccionario
      if (dict[car] === undefined) {
        // si no están en el diccionario se les asigna el número 1 en la frecuencia
        dict[car] = 1;
      } else {
        dict[car]++; //se le va sumando la frecuancia en la que se repite 
      }
    }
    
    //recorre el string de nuevo para checar la repeticion de caracteres
    for (let i = 0; i < str.length; i++) {
        const car = str[i]; //aqui se guardan todos los caracteres del string en car
      //se checa el caracter que se repite 1 vez
      if (dict[car] === 1) {
        return car; // devuelve el caracter repetido
      }
    }
    
    return null; // si no se repiten entonces devuelve nulo
  }
  
  const str = 'abacddbec';
  const carsinrep = sinrep(str);
  
  console.log(carsinrep); // respuesta: 'e'
  
console.log("2. Ejercicio: función que implemente el algoritmo 'bubble-sort' para ordenar una lista de números.")

function bubble_sort(arr) {
    // recorre todo el arreglo 
    for (let i = 0; i < arr.length - 1; i++) {
      // recorre nuevamente el arreglo empezando de la posicion siguiente de i
      for (let j = i + 1; j < arr.length; j++) {
        // si el elemento en la posición j es menor que el elemento en la posición i, los intercambia
        if (arr[j] < arr[i]) {
          const temp = arr[i]; // temporal para poder hacer el intercambio
          arr[i] = arr[j]; // ahora el tem va a tomar el valor de i, i de j y j de temp 
          arr[j] = temp;
        }
      }
    }
    
    return arr; //regresa el arreglo ordenado
  }
  
  const arry = [28, 388, 7, 8, 9, 100];
  console.log(bubble_sort(arry)); // respuesta: [7, 8, 9, 28, 100, 388]

console.log("3. Ejercicio: dos funciones: la primera que invierta un arreglo de números y regrese un nuevo arreglo con el resultado; la segunda que modifique el mismo arreglo que se pasa como argumento.");

function invertir_array(arr) {
    const invaarr = []; //empieza con un array vacio
    //recorre el arreglo desde el ultimo elemento hasta el primero, para luego agregarlos en otro arreglo de forma normal (inversa a esta)
    for (let i = arr.length - 1; i >= 0; i--) {
      invaarr.push(arr[i]); // se añade con push cada elemento en el array vacio inversamente
    }
    return invaarr; // regresa el arreglo invertido
  }
  const ar = [1, 2, 3];
  console.log(invertir_array(ar)) // respuesta: [3, 2, 1]
  
function invertir_array2(arr) {
    const divisionsindec = (arr.length - 1) / 2; //nos ayuda para no tener decimales y llegar a la mitad del arreglo
    //recorre el arreglo a la mitad
    for (let i = 0; i < divisionsindec; i++) {
      let temp = arr[i]; // cambia de posicion los elementos
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp; //temporal para ayudar a hacer el cambio
    }
    return arr;
  }
  const arrr = [1, 2, 3];
  console.log(invertir_array2(arrr)) 

console.log("4. Ejercicio: función que reciba una cadena de texto y regrese una nueva con la primer letra de cada palabra en mayúscula.");

function mayus(str) {
    str = str.split(""); //convierte string en arreglo para cada caracter
    str[0] = str[0].toUpperCase(); //cambia el mayuscula el primer caracter del array
    //recorre el arreglo para ver si hay algun espacio y poner la siguiente letra después en mayuscula
    for (let i = 0; i < str.length; i++) {
      if (str[i] == " ") {
        str[i + 1] = str[i + 1].toUpperCase();
      }
    }
    str = str.join("");//se convierte el arreglo en string otra vez
    return str; // regresa string con mayusculas en las primeras letras de cada palabra
  }
const st= "sam covarrubias";
console.log(mayus(st)) // respuesta: Sam Covarrubias

console.log("5. Ejercicio: función que calcule el máximo común divisor de dos números.");

function mcd(x, y){
    //mcd de un numero mientras el otro es distinto de 0
    while (y !== 0){
        const temp = y; //se guarda el numero en una temporal
        y = x % y; // se va sacando el residuo de la división de ambos numeros en la variable y
        x = temp; // cambiamos la temporal al valor de x hasta que y sea 0
    }
    return x; //devuelve el valor de x 
}

const nums = (48, 18)
console.log(mcd(nums)) // respuesta: 6

//console.log("6. Ejercicio: función que reciba un número, y regrese una lista con todos sus factores. Por ejemplo: factoriza(12) -> [1, 2, 3, 4, 6, 12]");

//console.log("7. Ejercicio: función que quite los elementos duplicados de un arreglo y regrese una lista con los elementos que quedan");

//console.log("8. Ejercicio: función que revise si una cadena de texto es un palíndromo o no.");

//console.log("9. Ejercicio: función que tome una lista de cadena de textos y devuelva una nueva lista con todas las cadenas en orden alfabético");

//console.log("10. Ejercicio: función que tome una lista de números y devuelva la mediana y la moda");

//console.log("11. Ejercicio: función que tome una lista de cadenas de texto y devuelva la cadena más frecuente.");

//console.log("12. Ejercicio: función que tome un número y devuelva verdadero si es una potencia de dos, falso de lo contrario.");

//console.log("13.Ejercicio: función que tome una lista de cadenas de texto y devuelva la cadena más frecuente.");

//console.log("14. Ejercicio: función que tome un número y devuelva verdadero si es una potencia de dos, falso de lo contrario.");

//console.log("15. Ejercicio: función que tome una lista de números y devuelva una nueva lista con todos los números en orden descendente.");