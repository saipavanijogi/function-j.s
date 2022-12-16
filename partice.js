// function a(arr){
//     var p=10;
//     var s=20;
//     arr.push(p+s);
//     return arr;
//     console.log(arr)
// }
// console.log(a([2,3,4,6]))


// function my(p1,p2){
//     return p1*p2;
// }
// console.log(my(3,5))

// let x=fun(2,7);
// function fun(p,s){
//     return p*s;
// }
// console.log(x)

// var x = myFunction(4, 3);
// function myFunction(a, b) {
//   return a * b;
// }
// console.log(myfunction(4,3))

const myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
    //   return this.firstName + " " + this.lastName;
    }
  }
  console.log(myObject(this.firstName + " " + this.lastName))