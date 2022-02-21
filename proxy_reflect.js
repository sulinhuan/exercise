//跟踪属性访问
// const user = {
//     name: 'Jake'
// };
// const proxy = new Proxy(user, {
//     get(target, property, receiver) {
//         console.log(`Getting ${property}`);
//         return Reflect.get(...arguments);
//     },
//     set(target, property, value, receiver) {
//         console.log(`Setting ${property}=${value}`);
//         return Reflect.set(...arguments);
//     }
// });
// proxy.name; // Getting name 
// proxy.age = 27; // Setting age=27

//属性验证
// const target = {
//     onlyNumbersGoHere: 0
// };
// const proxy = new Proxy(target, {
//     set(target, property, value) {
//         if (typeof value !== 'number') {
//             return false;
//         } else {
//             return Reflect.set(...arguments);
//         }
//     }
// });
// proxy.onlyNumbersGoHere = 1;
// console.log(proxy.onlyNumbersGoHere); // 1
// proxy.onlyNumbersGoHere = '2';
// console.log(proxy.onlyNumbersGoHere); // 1


