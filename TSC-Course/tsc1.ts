// interface User {
//     name:string,
//     age:number
// }

// const user:User = {
//     name:'carlos',
//     age:2
// }

//? CLASE EN TS
// interface User {
//     name:string;
//     id:number;
// }

// class UserAccount {
//     name:string;
//     id:number;

//     constructor(name:string, id:number) {
//         this.name = name;
//         this.id = id;
//     }
// }

// const Carlos:User = new UserAccount("Carlos", 22);

// interface Backpack<Type> {
//   add: (obj: Type) => void;
//   get: () => Type;
// }

// declare const backpack: Backpack<string>;

// const object = backpack.get();

// //   Esto esta mal, porque solamente acepta objetos o valores de tipo string
// //   backpack.add(23);
// backpack.add("Carlos"); //Bien

// Structural Type System
// interface Point {
//   x: number;
//   y: number;
// }

// function logPoint(p: Point) {
//   console.log(`${p.x}, ${p.y}`);
// }

// logs "12, 26"
// const point = { x: 12, y: 26 };
// logPoint(point);

// OPTIONAL PROPERTIES IN AN OBJECT
// function printName(obj: {name:string, lastName?:string}){
//   return obj.name + " " + obj.lastName?.toUpperCase();
// }

// UNION TYPES
// const printId = (id: string | number) => {

//   if(typeof id === "number"){
//     return (`Soy un numero ${id}`);
//   }

//   return (`Soy un string ${id}`);
// };

// TYPE ALIASSES
// type Point = {
//   x: number,
//   y: number
// }

// function logThePoint(point:Point) {
//   console.log(point.x, point.y);
// }
// logThePoint({x:2,y:4})

// AN ALIAS CAN BE A UNION TYPE
// type ID = number | string;