const saludar = function (nombre) {
  return `Hola, ${nombre}`;
};

const saludar2 = (nombre) => {
  return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola, Mundo`;
console.log(saludar2("Goku"));
console.log(saludar3("Guk"));
console.log(saludar4());

//para expresar que quiero devolver un objeto, que no son las llaves del return,..
const getUser = () => ({
  uid: "ABC123",
  username: "Pepe",
});

const user = getUser();
console.log(user);

//Tarea
//1- transformar a arrow
//2- retornar obj implicito

const getUsuarioActivo = (nombre) => ({
  uid: "SDFGH",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Fernando");
console.log(usuarioActivo);
