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


//逻辑运算与位运算
//与
// var a=25,b=3,c=0;
// console.log(a&b);//1
// console.log(a&c);//0
//   //短路操作符，第一个操作数求值为false，第二个操作数就不会再被求值了,返回结果按照规则来
// console.log(a&&b);//3
// //或
// console.log(a|b);//27
//   //短路操作符，第一个操作数求值为true，第二个操作数就不会再被求值了,返回结果按照规则来
// console.log(a||b);//25
// //非
// var a=25.25;
// console.log(~~a);//25,用于取整
// console.log(~~a/10);//2.5
// console.log(~~(a/10));//2
// console.log(~b);//取反减一 -4
// console.log(!b);//false
// //异或
// console.log(a^b);//26
// let a=1,b=2;
// a^=b;
// b^=a;
// a^=b;
// console.log(a);//2
// console.log(b);//1

//可选链操作?. ?? ??=
// //可选链操作符( ?. )允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效
// //在引用为空(null 或者 undefined) 的情况下不会引起错误，该表达式短路返回值是 undefined
// let a={name:'tom',age:18};
// console.log(a.age);//18
// console.log(a?.age);//18
// console.log(a.ge.a);//TypeError: Cannot read property 'a' of undefined
// console.log(a.ge?.a);//undefined
// //空值合并操作符（??）是一个逻辑操作符，当左侧的操作数为 null 或者 undefined 时，返回其右侧操作数，否则返回左侧操作数
// let a=1,b=0,c;
// console.log(b||a);//1
// console.log(b??a);//0
// console.log(c||a);//1
// console.log(c??a);//1
//逻辑空赋值运算符(x??=y)仅在x是null或undefined时对其赋值

// 防抖实现 debounce
// function debounce (func,time = 500,immediate = false) {
//     if (immediate) {
//         return immediateDebounce(func,time)
//     } else {
//         return delayDebounce(func,time)
//     }
// }
// function immediateDebounce (func,time) {
//     let flag = true
//     let timer = null 
//     return function (...args) {
//         if (flag) {
//             flag = false
//             return func.apply(this,args)
//         }
//         if (timer) {
//             clearTimeout(timer)
//         }
//         return timer = setTimeout(()=>{
//             flag = true
//         },time)
//     }
// }
// function delayDebounce (func,time) {
//     let timer = null
//     return function (...args) {
//         if (timer) {
//             clearTimeout(timer)
//         }
//         return timer = setTimeout(()=>{
//             func.apply(this,args)
//         },time)
//     }
// }
// const click = () => {
//     console.log('666666666')
// }
// debounce(click,4000,true)

// dfs,bfs
// const tree = {
//     val: 1,
//     left: {
//         val: 2,
//         left: null,
//         right: {
//             val: 4,
//             left: null,
//             right: {
//                 val: 7,
//                 left: null,
//                 right: {
//                     val: 8,
//                     left: null,
//                     right: null
//                 }
//             }
//         }
//     },
//     right: {
//         val: 3,
//         left: {
//             val: 5,
//             left: null,
//             right: null
//         },
//         right: {
//             val: 6,
//             left: null,
//             right: null
//         }
//     }
// }
// function dfs(node) {
//     if(!node) {
//         return
//     }
//     console.log(node.val)
//     dfs(node.left)
//     dfs(node.right)
// }
// dfs(tree)
// function bfs(root) {
//     if(!root){
//         return []
//     }
//     let res = []
//     let quene = [root]
//     while(quene.length){
//         let currentLevel = []
//         let len = quene.length
//         for(let i = 0;i< len;i++){
//             let node = quene.shift()
//             currentLevel.push(node.val)
//             console.log(node.val)
//             if(node.left) {
//                 quene.push(node.left)
//             }
//             if(node.right) {
//                 quene.push(node.right)
//             }
//         }
//         res.push(currentLevel)
//     }
//     return res
// }
// console.log(bfs(tree))
