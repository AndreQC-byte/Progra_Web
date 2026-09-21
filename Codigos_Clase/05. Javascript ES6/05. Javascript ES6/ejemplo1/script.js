console.log('hello world');

//string interpolation

const nombre = "Juan";
const edad = 20;

const cadena = `Hola! mi nombre es ${nombre} y tengo ${edad} anios.`

console.log(cadena);

//arrow functions

function sumar(a,b) {
    return a+b;
}

console.log(sumar(1,3));

const multiplicar = (a,b) => {
    return a*b;
}

const multiplicar2 = (a,b) => a*b;

console.log(multiplicar(2,3));

//reduce

const arr = [2,3,4,5,6]
const res = arr.reduce((a,b) => a+b, 0);
console.log(res);

//spread operator

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];
console.log(arr3)

const arr4 = [...arr2, ...arr1];
console.log(arr4);

//objetos & spread

const persona1 = { nombre: "Juan", apellido:"Perez", edad:20};
console.log(persona1.nombre);

const persona2 = { ...persona1, codigo: 1};
console.log(persona1)
console.log(persona2)

const persona3 = { ...persona2, nombre: "Eduardo"}
console.log(persona3)

//funciones de arreglos
const arr10 = [1,2,3,4,5,6];
arr10.push(7);
console.log(arr10);
arr10.pop();
console.log(arr10);
arr10.shift();
console.log(arr10);
arr10.unshift(100);
console.log(arr10);

const arrx = arr10.splice(2,2);
console.log(arrx);
console.log(arr10);

//recorriendo arreglos

const equipos = ["Bayern Munich", "Barcelona FC", "Arsenal FC", "Tottenham", "Palmeiras"]

for (let index = 0; index < equipos.length; index++) {
    const element = equipos[index];
    console.log(element);
}

console.log('');

for (const eq of equipos) {
    console.log(eq);
}

console.log('');

equipos.forEach(equipo => console.log(equipo));

console.log('');

//funcion map

const alumnos = [
  { nombre: "Ana",   nota: 18 },
  { nombre: "Luis",  nota: 9  },
  { nombre: "Paola", nota: 14 },
];

const etiquetas = alumnos.map(a => `${a.nombre}: ${a.nota}`);

etiquetas.forEach(e => console.log(e));

console.log('');

const etis = alumnos.map(a => `<td>${a.nombre}</td><td>${a.nota}</td>`);

etis.forEach(e => console.log(e));

//filter

console.log('');
const alumnosFiltrados = alumnos.filter(a => a.nombre === "Ana");
console.log(alumnosFiltrados);

console.log('');
const alumnosFiltrado2 = alumnos.filter(a => a.nota >= 11);
console.log(alumnosFiltrado2);

//descructuring de objetos

const persona10 = { nombre: "Juan", apellido:"Perez", edad:20};

const saludar = (persona) => {
    console.log(`Hola, soy ${persona.nombre}.`)
}

const saludar2 = (persona) => {

    const { nombre, apellido } = persona;

    console.log(`Hola, soy ${nombre} ${apellido}.`)
}

const saludar3 = ({nombre, apellido, edad}) => {

    console.log(`Hola, soy ${nombre} ${apellido}. Y tengo ${edad} anios.`)
}

saludar(persona10);
saludar2(persona10);
saludar3(persona10);