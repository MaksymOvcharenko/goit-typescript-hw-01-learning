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


//GENERICS and INDEX TYPES LESSONS 2///

// let name = "Type"; //Неявна типізація
// let username:string = "Type" //Явна типізація


//Index TYPES

// const fruits = {
//   apples: 10,
//   banana: 15,
//   orange: 25,
// }

// const electronics:items = {
//   telephone: 24,
//   laptop: "suit", // ОСь показує що помилка! БО тип лаптопу  не той що в типі айтемс...
//   tablets: 13,
//   computers: null, // Тоді треба юзати уніон тип.
// }

// type items = {
//   [key: string]: number | null ,

// }


//GENERICS

//приклад з помилкою...
// function getFirstElement(arr:number[]) {
//   return arr[0];
// }

// const numArr = [10, 20, 30];
// const stringArr = ["one", "two", "three"];
// const objArr = [{ one: "one" }, { two: "two" }];

// console.log(getFirstElement(numArr)); 
// console.log(getFirstElement(stringArr)); // ось помилка бо функція чекає рядок
// console.log(getFirstElement(objArr)); // типізувати можна тільки дженеріком

// приклад як зробити генерік
// function getFirstElement<T>(arr:T[]): T | undefined { // БУКВА Т може бути й інша це просто так домовлено, це динамічний тип... 
//   return arr[0]; // zкщо масив буде пустий, то поверниться ж андефайнд, і треба обробити тип ретьорну вище
// }
// type obj = {
//   [key: string]: string;
// }[]; // Затипізували масив обьектів.

// const numArr = [10, 20, 30];
// const stringArr = ["one", "two", "three"];
// const objArr: obj = [{ one: "one" }, { two: 24 }];// помилка бо тип чекає стрінг

// console.log(getFirstElement(numArr)); 
// console.log(getFirstElement(stringArr)); // тепер помилки немає
// console.log(getFirstElement(objArr)); // і тут теж
// console.log(getFirstElement(2)); // але тут помилка, бо типізація генеріка чекає масив

// next 

// const person = {
//   name: "John",
//   age: 24,
//   occupation: "Engineer",
// }

// person[key] // достукатись до ключа. Для циклів підходить.

// function getProperty(obj, key) { //тут бьеє помилку жиче рішення буде
//   return obj[key]
// }

// const name = getProperty(person, "name");
// const age = getProperty(person, "age")

// function getProperty<T, K extends keyof T>(obj: T, key:K ) :T[K] {  // Т - це тип динамічний обьекту, К -тип ключів динамічний. Але щоб працювало треба зв'язати Ключі з обьектом через ///  extends keyof T ///
//   return obj[key] 
// }

// const name = getProperty(person, "name");
// const age = getProperty(person, "age");
// const gender = getProperty(person, "gender") // показує що валідація ключа не проходить, цього ключа немає в обьекті персон.!!!

//ДАЛІ ІНТСРУМЕНТИ ДЖЕНЕРЕКІВ

//1.  PARTIALS коли в об'єкті змінюєш данні об'єктом


// interface UserProfile {
//   username: string;
//   email: string;
//   age: number;
//   authorization: boolean;
// }

// const originalProfile :UserProfile = {
//   username: "John",
//   email: "John2024@gmail.com",
//   age: 28,
//   authorization: true,
// }

///PROBLEMA

// function updateUserProfile(profile, updates) { // Тут відсутня типізація, бьє помилки. Рішення нижче.
//    return {...profile, ...updates}
// }

// РІшення
//  function updateUserProfile(profile:UserProfile, updates:Partial<UserProfile>) { //Перший обьект затипізували через інтерфейся, а данні які приходять для зміни типізуємо через конструкцію ПАРТІАЛС з ТИПОМ ІНТЕРФЕЙСА
//    return {...profile, ...updates}
// }

// const updateProfile = updateUserProfile(originalProfile, { age: 27, username: "Stepan" });

// 2. READ ONLY -  захищає данні від небажаних змін, тільки можна прочитати.

// interface UserProfile {
//   id: number;
//   name: string;
//   age: number;
// }
// ОСЬ БАЗОВА КОНСТРУКЦІЯ Readonle <ДИНАМІЧНИЙ ТИП>

// const user: Readonly <UserProfile>= { // такий запис захищає данні від перезапису, тільки.. читання. 
//   id: 120,
//   name: "Joe",
//   age: 18,
// }

// user.id = 205; // Ось приклад. Тут Б'є помилку, що не можемо перезаписати.

// 3.   PICK  
// Синтаксис
//  Pick < T, K, S> - де Пік( назва інструмента), де літери Динамічні данні.

// interface UserInfo {
//   id: number;
//   name: string;
//   email: string;
//   department: string;
//   hireDate: Date // дата вшита в тайпскрипт, синтаксис Дейт
// }

// const fullEmploymentInfo: UserInfo = {
//   id: 97,
//   name: "Jony",
//   email: "Jony123@gmail.com",
//   department: "QA",
//   hireDate: new Date( "2020-01-10"),
// }

// - 1. Перший самий простий і не самий вірний варіант типізації ретьорну , просто вказати типи обьекту


// function showUserInfo(profile: UserInfo): { name: string; email: string} { 
//   return {
//     name: profile.name,
//     email: profile.email
//   }
// }

// - 2. Варіант  через ПІК типізували ретьорн, взяли у Обьекта по ключам типізували
// результат коли потрібно повернути тип, як в інтерфейсів але новий обьект з обмеженою кількістю данних.
// function showUserInfo(profile: UserInfo): Pick<UserInfo, "name" | "email"  > {
//   return {
//     name: profile.name,
//     email: profile.email
//   }
// }

// showUserInfo(fullEmploymentInfo);

//4. Omit - Різниця з ПІК він не витягую частинку обьекту, а видаляє частинку обьекту


// interface UserInfo {
//   id: number;
//   name: string;
//   email: string;
//   department: string;
//   hireDate: Date; // дата вшита в тайпскрипт, синтаксис Дейт
// }

// const fullEmploymentInfo: UserInfo = {
//   id: 97,
//   name: "Jony",
//   email: "Jony123@gmail.com",
//   department: "QA",
//   hireDate: new Date( "2020-01-10"),
// }
//  - 1. варіант, створити новий інтерфейс і типизувати ним ретьорн.
// interface newUserInfo{
//   id: number;
//   name: string;
//   email: string;
//   department: string;
// }
// function closeInfo(profile: UserInfo) :newUserInfo {
//   return {
//     id: profile.id,
//   name: profile.name,
//   email: profile.email,
//   department: profile.department,
//   }
// }
// -2 варіант Omit
// ОМІТ передаємо ключ, або декілька які хочемо вирізати  старого обьекту, щоб не побачити в новому їх

// function closeInfo(profile: UserInfo) :Omit<UserInfo, "hireDate">{
//   return {
//     id: profile.id,
//   name: profile.name,
//   email: profile.email,
//   department: profile.department,
//   }
// }

// closeInfo(fullEmploymentInfo);


// 5.Record 
// ним можна замінити ось це 

// type items = {
//   [key: string]: number | null ,

// }

// function recordTemperatures(temps: number[]): Record <string, number> {
//   let temperatureRecord: Record<string,number> = {}
//   temps.forEach((temp, index) => {
//     temperatureRecord[`day${index + 1}`] = temp;
//   });
//   return temperatureRecord;
// }

// const weeklyTemps = [22, 24, 23, 25, 24, 26, 27]
// const tempRecord = recordTemperatures(weeklyTemps)