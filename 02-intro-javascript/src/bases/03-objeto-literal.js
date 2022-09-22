const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "New York",
    zip: 543543,
    lat: 34567,
    lng: 6543,
  },
};

console.log(persona);

const persona2 = { ...persona };
persona2.nombre = "Peter";
console.log(persona);
console.log({ persona2 });
