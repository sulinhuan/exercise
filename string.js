// 正则表达式regExp
// var str='hello world fucker';
// var str1=str.replace('fucker','');//str:hello world fucker,str1:hello world ;
// console.log(str1.length);//12
// var pat=/l/g;
// console.log(pat.test('lol never loser'));//true
// console.log(/ll/g.exec(str));//[ 'll', index: 2, input: 'hello world fucker', groups: undefined ]
// var str2=str.replace(pat,'TT');
// console.log(str2);//heTTTTo worTTd fucker

// trim实现
// const str = '  qq q  q qq ww   '
// const strTrim = str.replace(/^\s+|\s+$/g,'') // 更好的写法，兼容编码=>/^[\s\UFEFF]+|[\s\UFEFF]+$/g
// console.log(strTrim.length)
// console.log(strTrim)

// 某个最长递增子序列
function maxChildString (array) {
    const arr = [array[0]]
    let num = 1
    for (let i= 1;i<array.length;i++){
        let bottom = 0
        let top = num
        while(bottom <= top){
            // let middle = parseInt((top+bottom)/2)
            let middle = ~~((top+bottom)/2)
            if(arr[middle] < array[i]) {
                bottom = middle +1
            } else {
                top = middle-1
            }
        }
        arr[bottom] = array[i]
        if(bottom > num){
           num++
        }
    }
    return arr
}
const s = [1000,14,16,16,12,13,14,18,17,19]
let num = maxChildString(s)
console.log(num)
