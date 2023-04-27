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

console.log(mcd(100, 75)) // respuesta: 25

console.log("6. Ejercicio: función que cambie una cadena de texto a 'Hacker Speak'.");

function hack(str) {
  const hacker = {
    a: "4",
    e: "3",
    i: "1",
    o: "0",
    s: "5"
  }; // definir las letras con su respectiva forma en Hacker Speak
  let s = ''; //inicializa string
    //recorre todo el string
    for (let i = 0; i < str.length; i++) {
        // ve si la letra tiene equivalencia con un numero con lo que está en hacker
        if (hacker[str[i].toLowerCase()]) {
          //si si tiene equivalente se cambia y se agrega al string
           s += hacker[str[i].toLowerCase()];
        } else {
          //si la letra no tiene equivalente se pone la letra normal en el string
          s += str[i];
        }
    }
    return s;
}
console.log(hack('Javascript es divertido')); // respuesta: J4v45cr1pt 35 d1v3rt1d0

console.log("7. Ejercicio: función que reciba un número, y regrese una lista con todos sus factores.")
function factoriza(x){
    let lista =[]; // Inicializa un arreglo vacio
    for (i=1; i<=x; i++){
      //verificamos su la división entre el valor te da reciduo =0
      if(x % i == 0){
        lista.push(i); //agregas ese valor a la lista
      }
    }
    return lista;
}
console.log(factoriza(12)) // respuesta: [1, 2, 3, 4, 6, 12]

console.log("8. Ejercicio: función que quite los elementos duplicados de un arreglo y regrese una lista con los elementos que quedan");

function eldup(arr){
    let array=[]; //Inicializamos arreglo vacio
    for(i=0; i<arr.length; i++){
      //con indexOf, checa el indice del arreglo, busca si el elemento del arreglo no esta en alguna parte de la lista
      if(array.indexOf(arr[i]) == -1){
          array.push(arr[i]); // si no está, se agrega a la lista
      }
    }
    return array;
}
console.log(eldup([1,0,1,1,0,0])); // respuesta: [1, 0]

console.log("9. Ejercicio: función que reciba como parámetro una lista de cadenas de texto, y regrese la longitud de la cadena más corta.")

function shortstr(str){
    let short=Infinity; //se inicializa una cadena con un número grande para que se puede sobreescribir con el primer string
    //recorre la lista de strings
    for (let i=0; i < str.length; i++){
      //ve si la longitud del string en el que estas es menor al string que tenías
      if(str[i].length < short){
        short = str[i].length; //se sobre escribe la cadena más corta en longitud

      }
    }
    return short;
}
let lista_s= ["Sam", "Covarrubias", "Figueroa"];
console.log(shortstr(lista_s)); //respuesta: 3, la longitude de la cadena más corta.

console.log("10. Ejercicio: función que revise si una cadena de texto es un palíndromo o no.");
function pal(str){
  str= str.replace(/[\W_]/g, "").toLowerCase(); //elimina espacios en blanco y caracteres especiales
  //recorre la cadena a la mitad para evaluar diferencias en los lados
  for(let i=0; i < str.length/2; i++){
    //si el caracter es diferente de un lado que del otro, entonce no es palindromo
    if(str[i] !== str[str.length -1 -i]){
      return "No es palindromo";
    }
  }
  return "Si es palíndromo";
}
console.log(pal('oso')); // respuesta: si es palindromo
console.log(pal('reconocer')); // respuesta: si es palindromo
console.log(pal('programacion')); // respuesta: No es palindromo 

console.log("11. Ejercicio: función que tome una lista de cadena de textos y devuelva una nueva lista con todas las cadenas en orden alfabético");
function alphabeticlist(arr){
  let newarr = arr.slice(); //hacemos una copia de la lista original con slice
  newarr.sort(); //sort ordena la lista de forma alfbética
  return newarr;

}
console.log(alphabeticlist(["Sam", "Mau", "Cris", "Vale", "Fer"])) // respuesta: ['Cris', 'Fer', 'Mau', 'Sam', 'Vale']

console.log("12. Ejercicio: función que tome una lista de números y devuelva la mediana y la moda");
function opestadisticas(lista) {
  let n = lista.length; // define el tamaño de la lista

  // calcula la media
  let suma = lista.reduce((a, b) => a + b, 0);
  let media = suma / n;

  // calcula la mediana
  let mediana = 0;
  if (n % 2 === 0) 
  {
    mediana = (lista[n/2 - 1] + lista[n/2]) / 2;
  } 
  else 
  {
    mediana = lista[(n - 1) / 2];
  }

  // calcula la moda
  let frecuencia = {};
  let moda = [];
  let maxFrecuencia = 0;
  for (let i = 0; i < n; i++) {
    if (lista[i] in frecuencia) {
      frecuencia[lista[i]]++;
    } else {
      frecuencia[lista[i]] = 1;
    }
    if (frecuencia[lista[i]] > maxFrecuencia) {
      maxFrecuencia = frecuencia[lista[i]];
      moda = [lista[i]];
    } else if (frecuencia[lista[i]] === maxFrecuencia) {
      moda.push(lista[i]);
    }
  }
  if (moda.length === n) {
    moda = [];
  }

  return {
    media: media, mediana: mediana, moda: moda, // regresa los objetos con los resultados
  };
}
let l= [70, 88, 70, 95, 100];
console.log(opestadisticas(l)); // respuesta: media=84.6, mediana= 70, moda= 70;

console.log("13. Ejercicio: función que tome una lista de cadenas de texto y devuelva la cadena más frecuente.");

function freqstr(lista) {
  let frecuencia = {}; // inicializa variable para guardar frecuencia
  let maxFrecuencia = 0; // variable para almacenar la frecuencia máxima encontrada
  let cadenaMasFrecuente = ''; // variable para almacenar la cadena más frecuente encontrada

  // recorre la lista de cadenas
  lista.forEach(str => {
    if (frecuencia[str]) {
      frecuencia[str]++; // si la cadena ya está en el objeto, aumenta su frecuencia
    } else {
      frecuencia[str] = 1; // si la cadena no está en el objeto, agrega una nueva propiedad con frecuencia 1
    }

    // si la frecuencia de la cadena actual es mayor a la máxima frecuencia encontrada hasta ahora,
    // actualiza la variable de máxima frecuencia y la cadena más frecuente encontrada
    if (frecuencia[str] > maxFrecuencia) {
      maxFrecuencia = frecuencia[str];
      cadenaMasFrecuente = str;
    }
  });

  return cadenaMasFrecuente; // retorna la cadena más frecuente
}
let strf= ["Sam", "Isa", "Mayus", "Elefi", "Zorr", "Mayus"];
console.log(freqstr(strf)) //respuesta: Mayus

console.log("14. Ejercicio: función que tome un número y devuelva verdadero si es una potencia de dos, falso de lo contrario.");
function powerof2(x) {
  // si el número es menor o igual a 0, no es potencia de dos
  if (x <= 0) {
    return false;
  }
  
  // mientras el número sea mayor a 1, sigue dividiéndolo por 2
  while (x > 1) {
    // si el número no es divisible entre 2, no es potencia de dos
    if (x % 2 !== 0) {
      return false;
    }
    x = x / 2; // si el número es divisible entre 2, se divide entre 2
  }
  
  
  return true; // si el número es igual a 1 al final, es potencia de dos
}

console.log(powerof2(4)); // respuesta: true
console.log(powerof2(25)); // respuesta: false

console.log("15. Ejercicio: función que tome una lista de números y devuelva una nueva lista con todos los números en orden descendente.");

function descendiente(arr) 
{
  //sort ordena los elementos de la lista
  arr.sort(function(x, y){
    return y - x; // ordena en orden descendente
  })
  return arr;
  }
  let listaa=[70, 85, 100, 90]
console.log(descendiente(listaa)); // respuesta: [100, 90, 85, 70]