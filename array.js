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

//includes从指定索引位置查找指定元素
// let arr=[1,'blue',2],str='hello world!';
// console.log(arr.includes('Blue',1));//false
// console.log(arr.includes('blue',1));//true
// console.log(str.includes('llo',1));//true

//find和findIndex以及filter,遍历数组元素，传入测试函数进行筛选
// let arr=[1,2,3,2,2,4];
// console.log(arr.find(item=>item>2));//3  找到第一个符合测试函数的元素就停止
// console.log(arr.findIndex(item=>item>2));//2   找到第一个符合测试函数的元素就停止
// console.log(arr.filter(item=>item>2));//[3,4]   找到所有符合测试函数的元素就停止

//every和some测试数组元素是否符合测试函数
// let arr=[1,2,3,4];
// console.log(arr.every(item=>item<5));//true  数组为空或数组元素全都符合测试函数才返回true
// console.log(arr.some(item=>item>2));//true   数组为空或数组元素全都不符合测试函数才返回false

//forEach对每个元素执行提供的函数,返回值为undefined
// let arr=[1,2,3,4],arr1=[];
// console.log(arr.forEach(item=>arr1.push(item+1)));//undefined
// console.log(arr1);//[ 2, 3, 4, 5 ]