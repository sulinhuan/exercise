//Function.prototype.apply() .bind() .call()的基本使用
// const obj={
//     name:'tom',
//     getName:function(){
//         return this.name;
//     }
// };
// name = 'jerry';
// //console.log(getName());//getName is not defined
// console.log(obj.getName());//tom
// let get=obj.getName;
// //get的this指向全局global，而global上有个全局的name变量，如果没有定义全局name，则输出undefined
// console.log(get());//jerry

// //使用bind更改this指向,创建一个新函数(原函数的拷贝)
// //新函数的this被指定为bind的第一个参数，而其余参数将作为新函数的参数，供调用时使用
// let getd=get.bind(obj);
// console.log(getd());//tom

// //使用apply更改this指向,接收两个参数，一个有给定this值的函数，一个包含参数的（类）数组
// var array = ['a', 'b'];
// var elements = [0, 1, 2];
// array.push(elements);
// console.log(array);//[ 'a', 'b', [ 0, 1, 2 ] ]
// array=['a','b'];
// var arr=array.push.apply(array, elements);
// console.log(arr);//5
// console.log(array); // ["a", "b", 0, 1, 2]

// //使用call更改this指向，与apply类似，只不过第二个参数接收的是一个参数列表
// function Person(name,age){
//     this.name=name;
//     this.age=age;
// }
// function Student(name,age){
//     Person.call(this,name,age);
//     this.adress='china';
// }
// let stu1=new Student('tom',20);
// console.log(stu1);//Student { name: 'tom', age: 20, adress: 'china' }

