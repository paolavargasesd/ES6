const alumnos = ['ana', 'juan', 'jay', 'isabel', 'karen'];
const alumnos2 = ['Luis', 'Manuela', 'Ramiro', "pau"];

const newAlumnos = alumnos;

const newAlumnos2 = [...alumnos];

console.log(newAlumnos);
console.log(newAlumnos2);

newAlumnos2.push('Pepe');

console.log('Array inicial alumnos', alumnos);
console.log('Array inicial newAlumnos2', newAlumnos);


// spread operator con objetos// 

const idealHouse = {
    bathrooms: 5,
    automated: true,
    livingRooms: ['big', 'medium'],
    kitchenMachines: {
        fryer: true,
        washingMachine: true,
        dishwash: false, 
    },
};

const myHouse = {
    ...basicHouse,
    ...idealHouse,
}

console.log(myHouse);


//prueba string//

const str = 'esto es una string de pruebas';

const newStr = {...str};

console.log(newStr);