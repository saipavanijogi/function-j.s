// let name={
//     firstname:"pavani",
//     lastname:"jogi",
// }
// let printfullname=function(hometown,state){
//     console.log(this.firstname+" "+this.lastname +hometown+","+state);

// }
// printfullname.apply(name,["srikalulam","andhra"]);

var o={
    p:"lap",
    s:"top",
}
let t=function(company,loaction){
    console.log(this.p+" "+this.s+", "+company+","+loaction);
}
t.apply(o,["lenivoo","banglore"]);