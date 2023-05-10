//RESUELVE LOS EJERCICIOS AQUÍ
/*
1.- Dado el objeto empleados, extrae la empleada Ana completa.
*/
/*
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

//la coma previa a "ana" indica que estamos saltando al segundo index
//"ana" lo usamos dado que es más fácil visualizar en el ejemplo el nombre del objeto
//si en vez de "ana" usáramos "cuchara" obtendríamos el mismo resultado.
const [, ana] = empleados;
console.log(ana);
*/
/*
 2.- Dado el objeto empleados, 
 extrae el email del empleado Luis --> Luis@gmail.com
*/
/*
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

//const [emailLuis] = empleados;
//lo de arriba es correcto pero esta solución es visualmente mucho mejor 
const emailLuis = empleados [0].email;

console.log(emailLuis.email);
*/
/*
3.- Usa destructuración para cambiar los valores de a y b;

// Inicialmente
let a = 5;
let b = 3;

// Al final
let a = 3;
let b = 5;
*/

/*
let a = 5;
let b = 3;

[a, b] = [b, a];

console.log(a); // 3
console.log(b); // 5

*/

/*
4.- Dado el objeto HIGH_TEMPERATURES

const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};

Cambiar las siguientes líneas para guardar mediante destructuración
los valores de temperaturas en las variables maximaHoy y maximaManana

const maximaHoy = HIGH_TEMPERATURES.today;
const maximaManana = HIGH_TEMPERATURES.tomorrow;
console.log(maximaHoy);
console.log(maximaManana);
*/
/*
const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
  };
  
  const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES;
  
  console.log(maximaHoy); // 35
  console.log(maximaManana); // 32

*/

/*
5.- Escribe una función llamada sumEveryOther 
que pueda recibir cualquier cantidad de números 
y devuelva la suma de todos los demás argumentos.

sumEveryOther(6, 8, 2, 3, 1); //20
sumEveryOther(11, 3, 12); //26

*/

/*
  function sumEveryOther(...rest) {
    let contador = 0;
  
    for (let i = 0; i < rest.length; i++) {
      contador += rest[i];
    }
    return contador;
  }
  
  console.log(sumEveryOther (2,5,3,6,99,7,3,2));
*/

/*
6.- Escribe una función llamada addOnlyNums 
que pueda recibir cualquier número de argumentos 
(incluyendo números y strings y retorne la suma solo de los números).

addOnlyNums(1, "perro", 2, 4); //7

*/
/*
function addOnlyNums(...args) {//la función recoge cualquier cantidad y tipo de argumento
    return args.filter((arg) => typeof arg === "number")//filtramos los argumentos introducidos para que solo operemos con los números
    .reduce((a, b) => a + b);//los valores a y b pueden ser acc y curr o pepe y pepa
    //.reduce((acc, curr) => acc + curr);//tomamos los números (xq se lo hemos dicho en la linea de arriba) y los sumamos (o la operación que sea)
  }
  
  console.log(addOnlyNums(1, "perro", 2, 4)); //7

*/

/*
7.- Escribe una función llamada countTheArgs 
que pueda recibir cualquier número de argumentos 
y devuelva un número que indique cuántos argumentos ha recibido.

countTheArgs("gato", "perro"); //2
countTheArgs("gato", "perro", "pollo", "oso"); //4
*/

/*
function countTheArgs(...args) {//creamos una función que va a manejar argumentos (en plan indeterminado)
const contador= args.length;//la variable contador almacena la longitud de la función (la cantidad de elementos que se recogen)
    return contador;//devolvemos el valor
  }
console.log(countTheArgs("gato", "perro")); //2
console.log(countTheArgs("gato", "perro", "pollo", "oso")); //4
console.log(countTheArgs (2,6,"azul", [4,8],7,3,2));//devuelve la cantidad independientemente del tipo de argumento
*/

/*
8.- Escribe una función llamada combineTwoArrays 
que reciba dos array cómo argumentos 
y devuelva solo un array que combine los dos (usando spread operator).
*/
/*
function combineTwoArrays(arr1, arr2) {
    return [...arr1, ...arr2];
  }
  
  console.log(combineTwoArrays([1, 2], [3, 4])); // [1, 2, 3, 4]

*/

/*
9.- Escriba una función llamada onlyUniques 
que acepte cualquier número de argumentos 
y devuelva un array de elementos únicos, sin repetidos.

onlyUniques("gato", "pollo", "cerdo", "cerdo"); //["gato", "pollo", "cerdo"]
onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]
*/

/*
function onlyUniques(...args) {//la función recoge cualquier tipo y cantidad de argumento
    return [...new Set(args)];//devuelve elementos que no se repitan en un array
  }

  console.log(onlyUniques("gato", "pollo", "cerdo", "cerdo"));
  console.log(onlyUniques(1, 1, 2, 2, 3, 6, 7, 8)); //[1, 2, 3, 6, 7, 8]
  console.log(onlyUniques(1,55,33,87,6,4,5,5,6,22));
*/

/*
10.- Escriba una función llamada combineAllArrays 
que pueda recibir cualquier cantidad de arrays como argumentos 
y los combine todos en un solo array.
*/
/*
function combineAllArrays(...args) {
    return [].concat(...args);
  }
  
  console.log(combineAllArrays([2, 7, 3, 1], [2, 7, 4, 12], [2, 44, 22, 7, 3, 1])); 
  // [2, 7, 3, 1, 2, 7, 4, 12, 2, 44, 22, 7, 3, 1]

  */

/*
11.- Escriba una función llamada sumAndSquare 
que reciba cualquier número de argumentos, los eleve al cuadrado 
y devuelva la suma de todos los valores cuadrados.
*/
/*
function sumAndSquare(...args) {
    return args.reduce((acc, curr) => acc + curr ** 2, 0);
  }

  console.log(sumAndSquare(2, 7, 3));

  */



