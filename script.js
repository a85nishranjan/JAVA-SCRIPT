// let c=50;
// let d=55;
// const cl_ass="btech";
// console.log("The value is" ,c+d);
//  c=85;
//  let g=false;
// console.log(c+d);
// console.log("The val is",cl_ass);
// console.log(typeof(cl_ass));
// console.log(typeof(g));
// Boolean(c);
// console.log(c,typeof(c));
// a=String(d);
// h=Boolean(c);
// console.log(a,typeof(a));
// console.log(h,typeof(h));
function cr7(a,b,po) {
    return po(a,b);
    
}
const po= (a,b) => {
    return a+b;
    
}
const d=cr7(40,500,po);
console.log(d);
// console.log(cr7(40,5,po));
/*var a =true;

var b =false;
console.log(a);
console.log(b);
console.log(a,b);
let mydate= new Date();
console.log(mydate.getTime());
console.log(mydate.getFullYear());
console.log(mydate.getDay());

let ele= document.getElementsByClassName("container");

console.log(ele);
console.log(document.getElementById('gold'));*/


const a=[1,-2,3,4];
const firstneg =(num)=>{
    return num<0
};
// console.log(a.findIndex(function firstne (num){ return num<0}));
console.log(a.findIndex(firstneg));





function nho() {
    console.log("yghjhbh");
    
}
nho();





function getchess(callback) {
    setTimeout(() => {
        const chess="🧀";/*window+.*/
console.log("here is my chess",chess);
        callback(chess);
    },5000);
    
    
}
function callback(chess) {
    console.log("got the chess",chess);
}
getchess(callback);