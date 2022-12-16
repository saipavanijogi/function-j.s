// function ele(a){
//     a.concat(ele);
//     return a
//     console.log(a)

// }
// console.log(ele([2,3,4,5]))
 

function ele(a){
    a.reverse(ele);
    return a
    console.log(a)
}
console.log(ele([1,2,3,4,5,6,8]))