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

// function logDetails(value: any){
//    console.log(`Value ${value}, Type of value: ${typeof value}`);
   
//  }
// console.log(logDetails("string"));


//enum - скажимо словник чи довідник, по якому ми можемо тільки 
// з цих данних, устаткувати данні може бути рядок або число може бути по всьому коду і проекту


// enum VehicleType {
//   Car = "Car",
//   Truck = "Truck",
//   Motorcycle = "Motorcycle",
// }

// function getVehicleType(vehicle: VehicleType) {
//   return `The vehicle type is ${vehicle}`
// }
// console.log(getVehicleType(VehicleType.Car));
// console.log(getVehicleType(VehicleType.Motorcycle));

//Union Types - РІЗНІ ТИПИ  Варіації які може приймати функція, або такий або такий
// function formatInput(input: string | number | null) { 
//   if (typeof input ===  "number") {
//     return input.toFixed(2)
//   }
//   if (typeof input === "string") {
//     return input.toLocaleUpperCase()
    
//   }
// }

//Literal - НЕ ТІЛЬКИ ТИП А ЩЕ ЙОГО ЗНАЧЕННЯ  ОБОВ'язково приклад по світлофору
//Приклад 1
// function LightShower(color: string) {
//   if (color === "green") {
//     console.log("go");
    
//   }
//   if (color === "yellow") {
//     console.log("ready");
    
//   }
//   if (color === "red") {
//     console.log("stop");
    
//   }
// }

//Приклад 2
// function LightShower(color: "green"| "yellow"| "red") {
//   if (color === "green") {
//     console.log("go");
    
//   }
//   if (color === "yellow") {
//     console.log("ready");
    
//   }
//   if (color === "red") {
//     console.log("stop");
    
//   }
// }
// LightShower("black"); - error

//ТИПИЗАЦІЯ РЕТЬОРНУ ФУНКЦІЇ 



// function sayHello(name: string, age: number):string {
//   return `Say Hello, ${name} Your age is ${age} `
// }
// console.log(sayHello("Maksym", 27 ));




//void - не повертають нічого, для тих фнкцій войд, евент лісенери, евент клік і т.д. ті що не повертають нічого


// function sayHello(name: string, age: number): void {
//    console.log(`Say Hello, ${name} Your age is ${age} `);
   
// }
// sayHello("Maksym", 27 );


//never - більше для бекенду, прокидати помилки. коли вся функція оплацьовує помилку. Коли повідомлення прокидаєш в обьект помилки

// function errorHandler(message: string): never {
//   throw new Error(message)
// }
// errorHandler("Sorry, critical error")


// ІНТЕРФЕЙСИ описується обьектов, різниця з Тайп , що інтерфейсом можна описати класи
// коли реакт з класами то точно інтерфейс, а може бути і тайп
//  але ще є опціональні ключі, необов'язкові

// приклад тайп і інтерфейс

// type User = {
//   name: string;
//   age: number;
// }

// interface User  {
//   name: string;
//   age: number;
//   lastName?: string;  // не обов'язковий ключ.. може бути, може ні. Частіше використовується в типізації пропсів реакт
// }
// interface User {
//   name: string;
//   age: number;
//   lastName?: string;
//   sayHello(): string;
//   sayBye(): void;
//   showAge(age: number): string;
// }

// const user = {
//   name: "Bob",
//   age: 27,
//   sayHello(){
//     return "Hello"
//   },
//   sayBye() {
//     console.log("Bay");
    
//   },
//   showAge(age: number) {
//     return `My age ${age}`
//   }
// }


//оптимізуємо весь обьект через інтерфейс

// const student : User = {
//   name: "Bob",
//   age: 27,
//   sayHello(){
//     return "Hello"
//   },
//   sayBye() {
//     console.log("Bay");
    
//   },
//   showAge(age) {
//     return `My age ${age}`
//   }
// }