//const,let,var的作用域
// const arr1=[1,2,3];
// let arr2=[1,2,3,4];
// console.log(arr3);//undefined
// var arr3=[1,2,3,4,5];
// console.log(arr3);//[ 1, 2, 3, 4, 5 ]
// if(1) {
//     console.log(arr1);//[ 1, 2, 3 ]
//     console.log(arr2);//[ 1, 2, 3, 4 ]
// }
// if(1) {
//     const arr4=[1,2];
//     var arr5=[2,6,6,6];
//     if(1) {
//         console.log(arr4);//[ 1, 2 ]
//     }
//     console.log(arr4);//[ 1, 2 ]
// }
// //console.log(arr4);//ReferenceError: arr4 is not defined
// console.log(arr5);//[2,6,6,6]
// function sum(){
//     var arr6=[2,6,6];
//     arr7=[2,6];//全局变量，调用函数后可用
//     console.log(arr6);
//     console.log(arr7);
//     console.log(arr5);
// }
// console.log(arr6);//ReferenceError: arr6 is not defined
// sum();//不调用sum,下面的arr7输出会报错，ReferenceError: arr7 is not defined
// //[ 2, 6, 6 ]
// //[ 2, 6 ]
// //[ 2, 6, 6, 6 ]
// console.log(arr7);//[ 2, 6 ]


////迭代器iterator与生成器generator
// let arr=[1,2,3,4,5];
// console.log(arr[Symbol.iterator]);
// console.log(arr[Symbol.iterator]());
// let ite1=arr[Symbol.iterator]();
// let ite2=arr[Symbol.iterator]();
// //迭代器互不影响
// console.log(ite1.next());
// console.log(ite2.next());
// console.log(ite1.next());
// console.log(ite2.next());
// // [Function: values]
// // Object [Array Iterator] {}
// // { value: 1, done: false }
// // { value: 1, done: false }
// // { value: 2, done: false }
// // { value: 2, done: false }

// 提前终止迭代器，会调用可选的return方法
// class Counter { 
//     constructor(limit) { 
//         this.limit = limit; 
//     } 
//     [Symbol.iterator]() { 
//         let count = 1,limit = this.limit; 
//         return { 
//             next() { 
//                 if (count <= limit) { 
//                     return { done: false, value: count++ };
//                 } else { 
//                     return { done: true }; 
//                 } 
//             },
//             return() { 
//                 console.log('Exiting early'); 
//                 return { done: true };
//             }
//         };
//     }
// }
// let counter1 = new Counter(5);
// for (let i of counter1) { 
//     if (i > 2) { 
//         break; 
//     } 
//     console.log(i);
//     //1
//     //2
//     //Exiting early
// }
//如果迭代器没有关闭，则还可以继续从上次离开的地方迭代
// let a = [1, 2, 3, 4, 5];
// let iter = a[Symbol.iterator]();
// for (let i of iter) { 
//     console.log(i); 
//  if (i > 2) { 
//     break;
//  }
// }
// // 1 
// // 2 
// // 3 
// for (let i of iter) { 
//     console.log(i);
// }
// // 4 
// // 5 


//生成器的暂停执行yield，done为false，返回值保存在value中，return将done设为true，返回值保存在value中
// function* generatorFn() { 
//     yield 'foo';
//     yield 'bar';
//     return 'baz';
// }
// let generatorObject = generatorFn();
// console.log(generatorObject.next()); // { done: false, value: 'foo' }
// console.log(generatorObject.next()); // { done: false, value: 'bar' }
// console.log(generatorObject.next()); // { done: true, value: 'baz' }
// //yield* 用于迭代可迭代对象
// function* generetor1(){
//     yield* [1,2,3];
// }
// console.log(generetor1().next());//{ value: 1, done: false }
// for(const i of generetor1()){
//     console.log(i);//1,2,3
// }


