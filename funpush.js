// function elements(arr){
//     var a=6;
//     arr.push(a)
//     return arr;
//     console.log(arr);
// }
// console.log(elements([1,2,3,4,5]))


// function ele(arr){
//     arr.pop(ele);
//     return arr;
//     console.log(arr);
// }
// console.log(ele([1,2,3]))

function ele(a){
    a.shift(ele);
    return a;
    console.log(a);
}
console.log(ele([3,45,6,78,6,5]))

