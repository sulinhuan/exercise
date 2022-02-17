//for...in 对象的遍历,除Symbol以外的可枚举属性,包括继承的可枚举属性
// var obj={a:1,b:true,'name':'tom'};
// for(var prop in obj){
//     console.log(obj[prop])// prop:a,b,name
// }
// function Objadd(){
//     this.color='red';
// }
// Objadd.prototype=obj;
// var obj1=new Objadd();
// for(var value in obj1){
//     console.log(value);// color,a,b,name
// }


// for...of 可迭代对象(包括Array,Map,Set,String,TypedArray,arguments对象等)的指定数据的迭代循环
// const arr=[1,24,'3','name'];
// for (const item of arr){
//     console.log(item) // item:1,24,3,name
// }


// Object.assign()将所有可枚举属性的值从一个或多个源对象分配到目标对象,返回目标对象。
// var obj1={a:1,b:'qr','name':'tom'};
// var obj2={b:123,c:true};
// var obj3={c:'tom'};
// console.log(Object.assign(obj1,obj2,obj3))//{ a: 1, b: 123, name: 'tom', c: 'tom' }


// Object.keys/values/entries
// var obj1={a:1,b:'qr','name':'tom'};
// //返回一个给定对象自身(不包括继承，下同)可枚举属性的键值对数组
// console.log(Object.entries(obj1));//[ [ 'a', 1 ], [ 'b', 'qr' ], [ 'name', 'tom' ] ]
// //返回一个由一个给定对象的自身可枚举属性组成的数组
// console.log(Object.keys(obj1));//[ 'a', 'b', 'name' ]
// //返回一个给定对象自身的所有可枚举属性值的数组
// console.log(Object.values(obj1));//[ 1, 'qr', 'tom' ]


//对象的数据属性的四大特性，configurable，enumerable，writable，value
// let Person = {}; 
// Object.defineProperty(Person, "name", { 
// //在调用 Object.defineProperty()时，configurable、enumerable 和 writable 的值如果不指定，则都默认为 false。
//  writable: false, 
//  enumerable:true,
//  value: "Nicholas" 
// }); 
// console.log(Person.name); // "Nicholas" 
// Person.name = "Greg"; //非严格模式下没有效果，严格模式下会抛出错误。
// console.log(Person.name); // "Nicholas" 
// delete Person.name;//非严格模式下没有效果，严格模式下会抛出错误。
// console.log(Person.name);// "Nicholas" 
// for(const item in Person){
//     console.log(item);//name
// }


//对象的访问器属性，包含getter和setter，同样有四大特性configurable，enumerable，get,set
//访问器属性是不能直接定义的，必须使用 Object.defineProperty()
// let Person={age:18};
// //同时定义多个属性，可以用Object.defineProperties(object,{属性对象})
// //使用Object.getOwnPropertyDescriptor(object，属性名)返回指定属性的特性值
// //使用Object.getOwnPropertyDescriptors(object)返回对象object所有属性的特性值集合
// Object.defineProperty(Person,'name',{
//     //常用get,set特性读写属性值
//     get(){
//         return this.age;
//     },
//     set(newName){
//         if(newName!=='tom'){
//             this.age=19;
//         }
//     }
// });
// console.log(Person.name);//18(调用get)
// Person.name='timi';//(调用set)
// console.log(Person.name);//19
// console.log(Person.age);//19
// console.log(Object.getOwnPropertyDescriptors(Person));
// {
//     age: { value: 19, writable: true, enumerable: true, configurable: true },
//     name: {
//       get: [Function: get],
//       set: [Function: set],
//       enumerable: false,
//       configurable: false
//     }
//   }


//组合模式（伪经典模式）继承，利用构造函数和原型链
// function Person(name){
//     this.name = name;
//     this.height= ["18", "19", "20"];
// }
// Person.prototype.sayName = function() {
//     console.log(this.name);
// };
// function Student(name, age){
//     // 继承属性
//     Person.call(this, name);
//     this.age = age;
// }
//    // 继承方法
// Student.prototype = new Person();
// console.log(Student.prototype.height);//[ '18', '19', '20' ]
// console.log(Student.prototype.name);//undefined
// Student.prototype.sayAge = function() {
//     console.log(this.age);
// };
// let stu1 = new Student("Nicholas", 29); 
// stu1.height.push("21");
// console.log(stu1.age);//29
// console.log(stu1.height);//[ '18', '19', '20', '21' ]
// let stu2 = new Student("Greg", 27);
// console.log(stu2.height);//[ '18', '19', '20' ]
// stu2.sayName();//Greg
// stu2.sayAge();//27


//es5对象的继承，Object.create()创建一个新对象，指定其原型对象和属性
// let Person={name:'tom'};
// let obj=Object.create(Person);//传入第二个参数与Object.defineProperties一样，设置shux
// console.log(obj.name);//tom
// console.log(Object.getPrototypeOf(obj)===Person);//true


//es6使用关键字class定义类实现继承，其实也是对构造函数及原型链的封装
// class Person{
//     constructor(name,age){
//     // 添加到 this 的所有内容都会存在于不同的实例上
//         this.name=name;
//         this.age=age;
//         this.locate = () => console.log('instance', this);
//     }
//    // 定义在类的原型对象上
//    locate() {
//         console.log('prototype', this);
//    }
//    sayName(){
//         console.log(this.name);
//    }
//    // 定义在类本身上
//    static locate() {
//         console.log('class', this);
//    }
// }
// let p = new Person(); 
// p.locate();//instance Person {name: undefined,age: undefined,locate: [Function (anonymous)]}
// Person.prototype.locate();//prototype {}
// Person.locate();//class [class Person]
// class Student extends Person{
//     constructor(name,age,adress){
// //super只在派生类构造器中使用，可以传参,相当于调用super.constructor()
// //派生类写构造器必须调用super，或者返回一个对象，若要使用this则必须先调用super
//         super(name,age);
//         this.adress=adress;
//     }
//     sayAdress(){
//         console.log(this.adress);
//     }
// }
// let stu1=new Student('tom',18,'china');
// console.log(stu1);//Student {name: 'tom',age: 18,locate: [Function (anonymous)],adress: 'china'}
// stu1.sayAdress();//china
// console.log(stu1.sayName());//tom undefined(sayName()的返回值)




