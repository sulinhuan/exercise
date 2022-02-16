//map的get,has,set,delete,clear
//const m = new Map(); 
//console.log(m.has("firstName")); // false 
//console.log(m.get("firstName")); // undefined 
//console.log(m.size); // 0 
//m.set("firstName", "Matt") 
// .set("lastName", "Frisbie"); 
//console.log(m.has("firstName")); // true 
//console.log(m.get("firstName")); // Matt 
//console.log(m.size); // 2 
//m.delete("firstName"); // 只删除这一个键/值对
//console.log(m.has("firstName")); // false 
//console.log(m.has("lastName")); // true 
//console.log(m.size); // 1 
//m.clear(); // 清除这个映射实例中的所有键/值对
//console.log(m.has("firstName")); // false 
//console.log(m.has("lastName")); // false 
//console.log(m.size); // 0


//map的键值对修改
// const m1 = new Map([ 
//     ["key1", "val1"] 
// ]); 
// // 作为键的字符串原始值是不能修改的
// for (let key of m1.keys()) { 
//     key = "newKey"; 
//     console.log(key); // newKey 
//     console.log(m1.get("key1")); // val1 
// } 
// const keyObj = {id: 1}; 
// const m = new Map([ 
//     [keyObj, "val1"] 
// ]); 
// // 修改了作为键的对象的属性，但对象在映射内部仍然引用相同的值
// for (let key of m.keys()) { 
//     key.id = "newKey"; 
//     console.log(key); // {id: "newKey"} 
//     console.log(m.get(keyObj)); // val1 
// } 
// console.log(keyObj); // {id: "newKey"} 


//set的add,has,delete,clear与map类似，add相当于map的set
   

