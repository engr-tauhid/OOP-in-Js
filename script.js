'use strict';
//////////
// class CarCl {
//   constructor(carName, speed) {
//     this.Name = carName;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.Name} is going at ${this.speed} km/h afther accelerate`)
// }
// brake() {
//     this.speed -= 5;
//     console.log(`${this.Name} is going at ${this.speed} km/h afther Brake`)
// }
// get speedUS() {
//     return this.speed / 1.6
//   }
//   set speedUS (speed){
//     this.speed = speed * 1.6
//   }
// }
// let Ford = new CarCl('Ford', 120);
// console.log(Ford.speedUS);
// Ford.accelerate();
// console.log(Ford.speedUS);
// Ford.speedUS = 39
// console.log(Ford)

//
///abstruction : hiding and ignoring stuf that dosen't matter like in mobile we have too many fitures but as a user we can use the screen , camera , volium buttons and some stuf like those. But stuf like the Chack temperuture of battery , chack battary health , chack the AMPH and Chck the fuctionality of Bios chip , many thing like those are hidden from the regular user like us btu all of those can be visible to user like Electrictian , Developers and the arcitact desigener. that called abstraction
///encaptuation : this keep data and mathod privet for that no body imean no gloval code can't access those thing in the fast hand but thay can be acceable by using API ,,, Public Interface
/// Inheretence : This allow us to inherete functionality form Parent object to child object ... but chaild object can create his own some functionality but he also process the functionality from his parent element.
//polymorphism : this allows us inherete funcionaliy and aslo rewrite those by our tream like login fom user{login(){code}} to admin{login(pass ,key){code different}}

/// constractor function ; in here the person constector is created as blueprint and those object are created from this is the Bulding form blueprint;

//// The cosntractor function Fast Carecter is alwais Cap
// const Person = function (fastName, BirthYear) {
//   ///fast name and birth year is the instanceof this costractor and every object will get this on his own funcion;
//   this.fastName = fastName;
//   this.birthYear = BirthYear;
// };
// /// new is the thing who is responsible for creating rafi obj form person Constrector
// let Rafi = new Person('Tauhid', 2002);
// Person.prototype.ClacAge = function(){
// console.log(2030 - this.birthYear)
// }

// /// es6 class bases constructor
// ///class expression
// // let PerEX = class {

// // }

// /// class Diclaration

// class PersonClE {
//     constructor(fastName , dateofBirth){
//         this.fastName = fastName;
//         this.BirthYear = dateofBirth;
//     }
//     ClacAge(){
//         return new Date().getFullYear() - this.BirthYear;
//     }
//     get age(){
//         return -this.BirthYear + 2023
//     }
//     get fastName(){
//         return this._fastName
//     }
//     set fastName(name){
//         console.log(name)
//         if(name.includes(' ')) this._fastName = name
//         else {alert('Not space')}
//     }
// }
// let Jassica = new PersonClE('jesica lkdsafj' , 2000)
// console.log(Jassica)
// console.log(Jassica.ClacAge())
// console.log(Jassica.age)
// console.log(Jassica.fastName)

// console.log(Jassica.hasOwnProperty('BirthYear'))
// console.log(Jassica.hasOwnProperty('fastName'))
// console.log(Jassica.hasOwnProperty('age'))
// /// setter and gatter in object litarale
// let account = {
//     owner : 'Rafi',
//     mov : [122,34,123,1234,2132,52],
//     get ownername(){
//         return this.owner;
//     },
//     set Nextitem(item){
//         this.mov.push(item)
//     }
// }
// console.log(account)
// console.log(account.ownername)
// console.log(account.mov)
// console.log(account.mov.Nextitem = 3)
// console.log(account.mov)
// console.log(new Intl.DateTimeFormat('en-US' ,{dateStyle:'long'}).format(new Date()))

// /// in here  4 thing is happend
// //1 fast that create a empty new object
// //2 then that return this and from there we are able to crate property and mathods
// //3 {} linked to prototype
// //4 return new {} automacticly ;
// // console.log(Rafi);
// // console.log(Rafi instanceof Person);
// let rafi = {
//   fastName: 'rafi',
//   birthYear: 2002,
// };
// // console.log(rafi instanceof Person);

// const Student = function (
//   Fullname,
//   DateofBirth,
//   studentId = 'not Given Yet',
//   Session = 'Not Given Yeat',
//   isPayFee = false
// ) {
//   this.StudentName = Fullname;
//   this.DateofBirth = DateofBirth;
//   this.studentId = studentId;
//   this.Session = Session;
//   this.isPayFee = isPayFee;
// };
// let Student1 = new Student('Rafi', 1999, 1231, 1920, true);
// let Student2 = new Student('Demo', 1003);
// // console.log(Student1, Student2);
// Student.prototype.ChackPay = function (){
//   if(this.isPayFee){
//     console.log('Yeap this person is pay the fee and he can enter in the collage')

//   }
//   else console.log('You can enter the collage after pay the Fee')
// }
// Student1.ChackPay()
// Student2.ChackPay()
// Student.prototype.Payment = function(){
//   this.isPayFee = true;
// }
// Student2.Payment();
// Student2.ChackPay()
// Student.prototype.GiveId = function(){
//   if(this.studentId === 'not Given Yet'){
//     this.studentId = Math.trunc(Math.random()*200) + 1;
//   }
//   else console.log('sir you already process an id')
// }
// // console.log(Student.prototype.isPrototypeOf(Student))
// // console.log(Student.prototype.isPrototypeOf(Student1))
// // console.log(Student.prototype.isPrototypeOf(Student2))
// // console.log(Student1.hasOwnProperty('StudentName'))
// // console.log(Student2)
// // Student1.GiveId()
// // Student2.GiveId()
// // console.log(Student2)
// // console.log(Student.prototype.__proto__ === Object.prototype)
// // Person.prototype.CalcAge = function(){
// //   console.log(2024-this.birthYear);
// // }
// // Rafi.CalcAge();
// // console.log(Person.prototype)
// // console.log(Rafi.__proto__)
// // console.log(Rafi.__proto__ === Person.prototype)
// // console.log(Person.prototype.isPrototypeOf(Rafi))
// // console.log(Person.prototype.isPrototypeOf(Person))
// // Person.prototype.Religion = 'Islam'
// // console.log(Person.prototype)
// // console.log(Rafi)
// // console.log(Rafi.Religion)
// // console.log(Rafi)
// // console.log(Rafi.__proto__)
// // console.log(Rafi.hasOwnProperty('fastName'))
// // console.log(Rafi.hasOwnProperty('Religion'))
// console.log(Student1.__proto__)
// console.log(Student1.__proto__.__proto__)
// console.log(Student1.__proto__.__proto__.__proto__)
// let arr = [1,34,5,6,7];
// let arr2 = [1,34,5,6,7,2,3,4,5,6,7];
// console.log(arr.__proto__)
// console.log(arr.__proto__.__proto__)
// console.log(arr.__proto__.__proto__.__proto__)
// console.log(Array.prototype === arr.__proto__)
// console.log(Array.prototype.__proto__ === arr.__proto__.__proto__);
// Array.prototype.unique = function(){
//  return [...new Set(this)]
// }
// console.log(arr.unique())
// console.log(arr2.unique())
// console.dir(Object.prototype.constructor());
// let h1 = document.querySelector('h1');
// console.log(h1.__proto__)
// let Car = function(Name , CurSpeed){
//     this.Name = Name;
//     this.Speed = CurSpeed;
// }
// let bmw = new Car('bmw' , 290)
// console.log(bmw)
// Car.prototype.Acc = function(){
//     if(this.Speed < 300){
//         this.Speed += 10;
//         console.log(`After speed up current speed of ${this.Name} car is ${this.Speed}`)

//     }
//     else{
//         console.log('your car is in the top speed and you cant speedup')
//     }
// }
// Car.prototype.Brack = function(){
//     this.Speed -= 5;
//     console.log(`After Slow down current speed of ${this.Name} car is ${this.Speed}`)

// }
// bmw.Acc()
// bmw.Acc()
// bmw.Acc()
// bmw.Acc()
// bmw.Acc()
// console.log(bmw)
//// a normal challange to find the missing numbers

// const ChackThe_Numbers = function (numbers) {
//   const missingNumbers = [];
//   const [TheBiggestNum] = numbers.sort((a, b) => b - a);
//   for (let x = 1; x <= TheBiggestNum; x++) {
//     if (!numbers.includes(x)) missingNumbers.push(x);
//   }
//   return missingNumbers.length ? missingNumbers : 'good Job';
// };
// console.log(ChackThe_Numbers([1, 2, 3, 4, 5, 6, 7, 10, 9]));

// const PersonProto = {
//     clcAge(){
//         console.log(2024 - this.Birthyear)
//     },

//     // second  way
//     identity(name , birthYear){
//         this.Name = name;
//         this.Birthyear = birthYear;
//     }
// }

// const Rechart = Object.create(PersonProto)
// Rechart.identity('Recherd' , 2000)
// console.log(Rechart)
// Rechart.clcAge()

/// all of this is bad prectice and it will make our code slower instent of that we can call of them in a fucntion

// const Rechart = Object.create(PersonProto)

// console.log(Rechart);//empty obect with proto type inherite the clc age func

// Rechart.Name= 'Rehcart'
// Rechart.Birthyear = 1999
// Rechart.clcAge()
// console.log(Rechart)

/// rewirite everything

// const Person = function (name, BirthYear) {
//   this.Name = name;
//   this.BirthYear = BirthYear;
// };
// let steve = new Person('Steve', 2000);
// console.log(steve);
// // steve.clcAge()  // even we got the clc age functin in our object prototype but we can't use it before declired it
// Person.prototype.clcAge = function () {
//   console.log(2030 - this.BirthYear);
// };
// console.log(steve);
// steve.clcAge();

// /// static mathods

// Person.staticFun = function () {
//   console.log(
//     'this is an statice function it cant be use in the object create from this constructor'
//   );
// };
// Person.staticFun(); // ok working but not in steve.staticfun()

// class PersonCl {
//   constructor(name, BirthYear) {
//     this.Name = name;
//     this.BirthYear = BirthYear;
//   }
//   clcAge() {
//     console.log(2030 - this.BirthYear);
//   }
//   /// static mathods
//   static theStaticMatod() {
//     console.log('this is an class based statice mathod');
//   }
// }
// let Eva = new PersonCl('Eva', 1999);
// console.log(Eva);
// Eva.clcAge();
// PersonCl.theStaticMatod();
// const Person = function (fastName, BirthYear) {
//   this.fastName = fastName;
//   this.birthYear = BirthYear;
// };
// Person.prototype.clcAge = function () {
//   console.log(2024 - this.birthYear);
// };
// const Student = function (fastName, BirthYear, course) {
//   Person.call(this, fastName, BirthYear);
//   this.course = course;
// };
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.Intruduce = function () {
//   console.log(
//     `Hi there i'm ${this.fastName} and i am currnetlly enrolling in ${
//       this.course
//     } also i am ${new Date().getFullYear() - this.birthYear} years old`
//   );
// };
// let Mikey = new Student('Mikey', 2000, 'CSE');
// console.log(Mikey);
// // Mikey.clcAge();
// // console.log(Student.prototype.isPrototypeOf(Mikey));
// // console.log(Person.prototype.isPrototypeOf(Mikey));
// // console.log(Mikey.__proto__ === Student.prototype);
// // Mikey.Intruduce();
// console.log(Mikey instanceof Student);
// console.log(Mikey instanceof Person);
// console.log(Mikey instanceof Object);
// console.dir(Mikey.__proto__);
// console.dir(Student.prototype.constructor);
// console.dir(Person.prototype.constructor);
// console.log(
//   'why mikey is Proto of person it should be sutdent , because we have call object.create on person in student so it think that mikey is the proto of person we need to fixed it.'
// );
// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);
// console.log(Mikey.__proto__);

// const Person = function (
//   FullName,
//   DateOfBirth,
//   NationalIdNO = 'Not given',
//   city = 'Not given',
//   Nationality = 'Bangladesh'
// ) {
//   this.Name = FullName;
//   this.DateOfBirth = DateOfBirth;
//   this.NationalIdNO = NationalIdNO;
//   this.Nationality = Nationality;
//   this.city = city;
// };
// Person.prototype.Summary = function () {
//   console.log(
//     `Hi i'm ${this.Name}  and i am form ${this.city} my age is ${
//       new Date().getFullYear() - this.DateOfBirth
//     } and my nationality is ${this.Nationality}`
//   );
// };

// const Student = function (
//   FullName,
//   DateOfBirth,
//   NationalIdNO = 'Not given',
//   city = 'Not given',
//   Nationality = 'Bangladesh',
//   collage = 'not given',
//   RegNo = 'not given',
//   course = 'Not given'
// ) {
//   Person.call(this, FullName, DateOfBirth, NationalIdNO, city, Nationality);
//   this.collage = collage;
//   (this.RegNo = RegNo), (this.course = course);
// };
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;
// Student.prototype.CollageIntruduce = function () {
//   console.log(
//     `Hi i'm ${this.Name}  and i am form ${this.city} my age is ${
//       new Date().getFullYear() - this.DateOfBirth
//     } and my nationality is ${this.Nationality} i have study in ${
//       this.collage
//     }  and my course is ${this.course} and my Register Number is ${this.RegNo}`
//   );
// };

// const Worker = function (
//   FullName,
//   DateOfBirth,
//   NationalIdNO = 'Not given',
//   city = 'Not given',
//   Nationality = 'Bangladesh',
//   collage = 'not given',
//   RegNo = 'not given',
//   course = 'Not given',
//   company = 'not given yet',
//   role = 'not given',
//   salary = 'unkown'
// ) {
//   Student.call(
//     this,
//     FullName,
//     DateOfBirth,
//     NationalIdNO,
//     city,
//     Nationality,
//     collage,
//     RegNo,
//     course
//   );
//   this.company = company;
//   this.role = role;
//   this.salary = salary;
// };
// Worker.prototype = Object.create(Student.prototype);
// Worker.prototype.CorparateIntruduce = function () {
//   console.log(
//     `Hi i'm ${this.Name}  and i am form ${this.city} my age is ${
//       new Date().getFullYear() - this.DateOfBirth
//     } and my nationality is ${this.Nationality} ,  i have study in ${
//       this.collage
//     }  and my course is ${this.course} and my Register Number is ${
//       this.RegNo
//     } ,i have been working in ${this.company} in ${
//       this.role
//     } position i got something like ${this.salary}$ per month`
//   );
// };
// // console.dir(Worker.prototype.constructor)
// Worker.prototype.constructor = Worker;
// // console.dir(Worker.prototype.constructor)

// let Rafi = new Worker(
//   'Rafi',
//   1998,
//   1293239481213,
//   'Tangail',
//   'Bangadeshi',
//   'Tangail Polytechnice Instritute',
//   912313441,
//   'Computer Technology',
//   'Kings Man',
//   'Frontend Developer',
//   '421'
// );
// console.log(Rafi);
// console.log(Rafi.__proto__ === Worker.prototype);
// Rafi.Summary();
// Rafi.CorparateIntruduce();
// Rafi.CollageIntruduce();
// Rafi.CorparateIntruduce();
// Rafi.CollageIntruduce();
// Rafi.Summary();
// console.log(Rafi.__proto__ === Worker.prototype)
// console.log(Rafi.__proto__.__proto__ === Student.prototype)
// console.log(Rafi.__proto__.__proto__.__proto__ === Person.prototype)
// console.log(Rafi.__proto__.__proto__.__proto__.__proto__ === Object.prototype)
/////////
//coding challange 3
// Your tasks:
// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child
// "class" of 'Car'. Besides a make and current speed, the 'EV' also has the
// current battery charge in % ('charge' property)
// 2. Implement a 'chargeBattery' method which takes an argument
// 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20,
// and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140
// km/h, with a charge of 22%'
// 4. Create an electric car object and experiment with calling 'accelerate',
// 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when
// you 'accelerate'! Hint: Review the definiton of polymorphism �
// Test data:
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%

// const Car = function (name, speed) {
//   this.Name = name;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.name + ' Your car is going speed in ' + this.speed);
// };
// Car.prototype.Brake = function () {
//   this.speed -= 5;
//   console.log(this.name + ' Your car is going speed in ' + this.speed);
// };

// /// electrice car

// const EV = function (name, speed, charge) {
//   Car.call(this, name, speed);
//   this.charge = charge;
// };
// EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = EV;
// EV.prototype.ChargeTo = function(persentace){
// this.charge = persentace;
// }
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(
//     `${this.name}  is going speed of ${this.speed} km / h with charge of ${this.charge}`
//   );
// };
// let tesla = new EV('Tesla', 120, 23);
// console.log(tesla);
// tesla.accelerate();
// console.log(tesla);

// class PersonClE {
//       constructor(fastName , dateofBirth){
//           this.fastName = fastName;
//           this.BirthYear = dateofBirth;
//       }
//       ClacAge(){
//           return new Date().getFullYear() - this.BirthYear;
//       }
//       get age(){
//           return -this.BirthYear + 2023
//       }
//       get fastName(){
//           return this._fastName
//       }
//       set fastName(name){
//           // console.log(name)
//           if(name.includes(' ')) this._fastName = name
//           else {alert('Not space')}
//       }
//   }

//   class StudentCl extends PersonClE{
//     constructor(fastName , dateofBirth , course){
//       super(fastName , dateofBirth)
//       this.course= course;
//     }
//     intru(){
//       console.log(`hi i'm ${this.fastName} and i am in ${this.course}`)
//     }
//   }

//   let Ifran = new StudentCl('Ifran Khan' , 2003 , 'cse')
//   console.log(Ifran.fastName)
//   console.log(Ifran)
//   console.log(Ifran.age)
//   let Khan = new StudentCl ('Khan' , 234 , 'da')
//   Khan.fastName = 'khan imas'

// class Person {
//   constructor(Name, BY) {
//     this.Fullname = Name;
//     this.BirthYerar = BY;
//   }
//   get FastName() {
//     return this.Fullname.split(' ')[0];
//   }
//   get age() {
//     return new Date().getFullYear() - this.BirthYerar;
//   }
//   set Name(name) {
//     console.log(
//       `You just have change your name form '${this.Fullname}' to '${name}'`
//     );
//     this.Fullname = name;
//   }
// }
// let Kelfa = new Person('Kelefa Ardon', 1996);
// // console.log(Kelfa.FastName);
// // console.log(Kelfa.age);
// // console.log(Kelfa);
// // Kelfa.Name = 'K';
// // console.log(Kelfa);
// class BankAccount extends Person {
//   ///public class fild
//   Location = navigator.language;
//   //privet class fild
//   #movements = [];
//   // you need to decliear it fast then assing the value
//   #Pin;
//   constructor(FastName, DateOfBirth, UserId, Pin) {
//     super(FastName, DateOfBirth);
//     this.UserId = UserId;
//     // this.Pin = Pin; //you need to decliear it fast then assing the value
//     this.#Pin = Pin;
//     // this.movements = []; // this can be public like location and can be privet
//     // this.Location = navigator.language; see in public class fild
//   }
//   get OwnerName() {
//     return this.FastName;
//   }
//   set Deposit(value) {
//     this.#movements.push(value);
//   }
//   set Withdrawal(value) {
//     this.Deposit = -value;
//   }
//   get totalAmmount() {
//     return this.movements.reduce((acc, el) => acc + el, 0);
//   }
//   reaquestLoan(value) {
//     if (value > 0) {
//       this.#movements.push(value);
//       console.log('loan approved');
//     } else {
//       console.log(`can't approve this loan`);
//     }
//   }
// }
// let Laura = new BankAccount('Laura Jossef', 1999, 'LJ2123', 1234);
// console.log(Laura);
// Laura.Deposit = 200;
// Laura.Deposit = 200;
// Laura.Deposit = 200;
// Laura.Withdrawal = 100;
// Laura.reaquestLoan(2193);
// class CarCl {
//   constructor(Name, Speed) {
//     this.Name = Name;
//     this.Speed = Speed;
//   }
//   accelerate() {
//     this.Speed += 10;
//   }
//   brake() {
//     this.Speed += 5;
//   }
// }
// class EvCl extends CarCl {
//   #charge;
//   constructor(Name, Speed, Charge) {
//     super(Name, Speed);
//     this.#charge = Charge;
//   }
//   accelerate() {
//     this.Speed += 20;
//     this.#charge -= 1;
//     return this;
//   }
//   brake() {
//     this.Speed += 25;
//     return this;
//   }
//   Chargebattery(value) {
//     this.#charge += value;
//     return this;
//   }
//   // #King(){ // privet mathods
//   //   console.log('king')
//   // }
//   // callKing(){
//   //   this.#King()
//   // }
// }
// let Rivian = new EvCl('Rivian' , 120 , 23)
// console.log(Rivian)
// // Rivian.callKing()
// Rivian.Chargebattery(32).brake().accelerate().Chargebattery(32).accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().accelerate().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake().brake()
// console.log(Rivian)
