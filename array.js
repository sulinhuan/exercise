//array.keys,values,entries
// let arr=['nmae',1,23,{name:"123"}];
// console.log(arr.entries());//Object [Array Iterator] {}
// let iterator1=arr.entries();
// let iterator2=arr.keys();
// let iterator3=arr.values();
// for(let item of iterator1){
//     console.log(item);
//     //[ 0, 'nmae' ]
//     //[ 1, 1 ]
//     //[ 2, 23 ]
//     //[ 3, { name: '123' } ]
// }
// for(let item of iterator2){
//     console.log(item);//0 1 2 3
// }
// for(let item of iterator3){
//     console.log(item);//nmae 1 23 {name:'123'}
// }

//sort方法在不传比较函数时，默认对每一项转换为字符串再比较
//传入比较函数参数，按照参数的方法比较，参数返回<0,>0,=0的值即可，表示两数位置前后
// let arr=[1,10,23,3,4];
// console.log(arr.sort());//[1,10,23,3,4]
// console.log(arr.sort((a,b)=>a-b));//[1,3,4,10,23]


