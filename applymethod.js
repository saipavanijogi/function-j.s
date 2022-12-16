// var o={
//     p:"lap",
//     s:"top",
// }
// let t=function(company,loaction){
//     console.log(this.p+" "+this.s+","+company+","+loaction);
// }
// t.apply(o,["lenivoo","banglore"]);

var p={
    t:"iam",
    w:"is",
    v:"pavani",
}
let fun=function(loaction,staying){
    console.log(this.t+" "+this.w+" "+this.v+" "+loaction+" "+staying);
}
fun.apply(p,["andhra pradhesh","banglore"]);
