/*
x=30;

//let x; Let cant hoisting
var x;
console.log(x);
*/

//console.log(a);
function my(){
    let a=100;
    console.log(a)

    for(let i=0;i<3;i++){//var i=0 we can fetch outside also
        console.log(i)
    }
    console.log("value"+ " "+i)
}

my();