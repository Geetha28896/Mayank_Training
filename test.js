/*
const string = "Geeethaqqqqaaa";
function firstNonRepeatedCharacter(string) {
  var count = 0;
  var data = "";
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) == string.charAt(i + 1)) {
      count = count+1;
     // data = data + ""+string.charAt(i);
      if(string.indexOf(string.charAt(i))<i){
        continue;
      }

      
      console.log( string.charAt(i));
    }
    
  }
  
  console.log("count "+count)
  console.log("data",+data.toString())
  
   
}

firstNonRepeatedCharacter(string);

*/

/*

function repeat(str){
    let h =new Set()
    for(let i=0;i<str.length-1;i++){
        let a=str[i]
        if(h.has(a)){
            console.log(a)
        }else{
            h.add(a)
        }
    }
    return 0
}
let str = 'haiiii'
console.log(repeat(str))

*/

var string = "geethaaa";
function firstNonRepeatedCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    var c = string.charAt(i);

    if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
      console.log(c);
    }
  }
  
}
console.log(firstNonRepeatedCharacter(string));
