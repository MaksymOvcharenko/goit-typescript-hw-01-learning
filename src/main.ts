import './style.css'
// ПРОСТІ ТИПИ ДАННИх

// let isDone: boolean = false;
// const name : string = "Bob";
// const LastName : string= "Marley"
// const age: number = 24;
// const isHappy: boolean = true;
// const budget: null = null;
// const status: undefined = undefined;

// СКЛАДНІ ТИПИ ДАННИх

// OBJECT типізація обьектів

// type userProfile = {
//   username: string;
//   age: number;
//   isActive: boolean;
// }

// const user = {
//   username: "Bob",
//   age: 27,
//   isActive: true,

// }

// function displayUserProfile(user: userProfile) {
//   return `User name is ${user.username} he is ${user.age} years old and his is ${user.isActive}`
// }
//   console.log(displayUserProfile(user));
  
// function sayHello(name: string , age: number) {
//   return `Say Hello, ${name} Your age is ${age} `
  
// } 
// console.log(sayHello("Maksym", 27));

// ARRAY варіанти типізації масивів
// type User = {
//   name: string;
//   age: number;
// }
// // Variant 1 TOP

// function calcTotal(arr:User[]) {

// }

// // Variant2


// function calcTotal(arr:{
//     name: string;
//     age: number;
// }[]) {

// }

// // Variant 3 BAD

// function calcTotal(arr:object[]) {

// }

// // const numberArray = [10, 20, 30, 40];
// // console.log(calcTotal(numberArray));

// const users = [
//   { name: "Bob", age: 34 },
//   { name: "Bob", age: 35 },
//   {name: "Bob" , age: 24},
// ]
// console.log(calcTotal(users));

// SPECIFIC TYPE

// unknown  коли не знаешь тип


// function safetyParselJson(jsonString: string) {
//   try {
//     const result: unknown = JSON.parse(jsonString);
//     if (typeof result === "object" && result !== null) {
//       return result;
//     }
//   } catch (error) {
//     console.log("Failed to parse JSON:", error);
    
    
//   }
//   return null;
// }

//any - взагалі усі типи коли ліньки робити перераховування данних , кажучи простіше відключити тайпскріпт
function logDetails(value: any){
   console.log(`Value ${value}, Type of value: ${typeof value}`);
   
 }
console.log(logDetails("string"));
