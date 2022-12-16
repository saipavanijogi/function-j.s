// let n={
//     a:"kagui",
//     b:"kim",
// }
// let myfun=function(){
//     console.log(this.a+""+this.b);
// }
// let myfunction=myfun.bind(n)
// myfunction();
 
 
// let n={
//     p:"navya",
//     s:"vikas",
//     c:"both are in relationship",
// }
// let myfun=function(){
//     console.log(this.p+""+this.s+""+this.c);
// }
// let fun=myfun.bind(n);
// fun();

let n={
    s:"nagamani",
    p:"jyothi",
    t:"ramadevi",
    o:"divya",
    u:"they are bestie friends",
}
let fun=function(){
    console.log(this.s+" "+this.p+" "+this.t+" "+this.o+" ,"+this.u)
}
var myfunction=fun.bind(n);
myfunction();