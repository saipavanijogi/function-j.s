let p={
    a:"nagamani",
    b:"indu",
    c:"both are friends in",
}
let myfun=function(from){
   console.log(this.a+" "+this.b+" "+this.c+" "+from);
}
myfun.call(p,"navgurukul");