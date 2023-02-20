function Employee(){
    var data=10;
    console.log(data);
}

//Employee.prototype.data=20;
console.log(Employee.prototype.data=20)

Employee.prototype.getData=function(){
    console.log("Hello World");
}

Employee.prototype.getData();