const personajes = ["Goku", "Vegeta", "Truks"];
const [, , p3] = personajes;
console.log(p3);

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//tarea
//1.el primer valor del arr se llamará nombre
//2.se llamará setNombre

const retro = (valor) => {
  return [
    valor,
    () => {
      console.log("Hola Mundo");
    },
  ];
};

const arr = retro("Goku");
console.log(arr);

/* desestrucurar segundo valor de array "arr", es decir, la función de hola mundo
arr[1](); */
const [nombre, setNombre] = arr;
console.log("arr1", nombre);
setNombre();
