const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
  equipo: "Madrid",
};
/* 
const { nombre, edad, clave } = persona;

console.log(nombre);
console.log(edad);
console.log(clave); */

const retornaPersona = ({
  nombre,
  edad,
  equipo = "no puedo cambiar",
  rango = "capitán",
}) => {
  console.log(edad, rango, nombre, equipo);
};

retornaPersona(persona);

const retornaPersona2 = ({ clave, nombre, edad, rango }) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 324,
      lng: 134,
    },
  };
};

const avenger = retornaPersona2(persona);

//desestructuración anidada de objetos

//1.

/* const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = avenger;
 */

//2.
const { nombreClave, anios, latlng } = avenger;
const { lat, lng } = latlng;
//

console.log(nombreClave, anios);
console.log(lat, lng);
