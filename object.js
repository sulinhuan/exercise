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

//Object.create()创建一个新对象，指定其原型对象和属性
// let person={name:'tom'};
// let obj=Object.create(person);//传入第二个参数与Object.defineProperties一样，设置shux
// console.log(obj.name);//tom
// console.log(Object.getPrototypeOf(obj)===person);//true

// Object.keys/values/entries
// var obj1={a:1,b:'qr','name':'tom'};
// //返回一个给定对象自身(不包括继承，下同)可枚举属性的键值对数组
// console.log(Object.entries(obj1));//[ [ 'a', 1 ], [ 'b', 'qr' ], [ 'name', 'tom' ] ]
// //返回一个由一个给定对象的自身可枚举属性组成的数组
// console.log(Object.keys(obj1));//[ 'a', 'b', 'name' ]
// //返回一个给定对象自身的所有可枚举属性值的数组
// console.log(Object.values(obj1));//[ 1, 'qr', 'tom' ]

//对象的数据属性的四大特性，configurable，enumerable，writable，value
// let person = {}; 
// Object.defineProperty(person, "name", { 
// //在调用 Object.defineProperty()时，configurable、enumerable 和 writable 的值如果不指定，则都默认为 false。
//  writable: false, 
//  enumerable:true,
//  value: "Nicholas" 
// }); 
// console.log(person.name); // "Nicholas" 
// person.name = "Greg"; //非严格模式下没有效果，严格模式下会抛出错误。
// console.log(person.name); // "Nicholas" 
// delete person.name;//非严格模式下没有效果，严格模式下会抛出错误。
// console.log(person.name);// "Nicholas" 
// for(const item in person){
//     console.log(item);//name
// }

//对象的访问器属性，包含getter和setter，同样有四大特性configurable，enumerable，get,set
//访问器属性是不能直接定义的，必须使用 Object.defineProperty()
// let person={age:18};
// //同时定义多个属性，可以用Object.defineProperties(object,{属性对象})
// //使用Object.getOwnPropertyDescriptor(object，属性名)返回指定属性的特性值
// //使用Object.getOwnPropertyDescriptors(object)返回对象object所有属性的特性值集合
// Object.defineProperty(person,'name',{
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
// console.log(person.name);//18(调用get)
// person.name='timi';//(调用set)
// console.log(person.name);//19
// console.log(person.age);//19
// console.log(Object.getOwnPropertyDescriptors(person));
// {
//     age: { value: 19, writable: true, enumerable: true, configurable: true },
//     name: {
//       get: [Function: get],
//       set: [Function: set],
//       enumerable: false,
//       configurable: false
//     }
//   }


