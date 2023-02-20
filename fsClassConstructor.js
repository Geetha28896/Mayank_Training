const fs = require("fs");
class Employee {
  constructor(id, name, age,company="Quinnox") {//Quinnox is default parameter
    this.id = id;
    this.name = name;
    this.age = age;
    this.company=company;
    
  }
}
class EmployeeReader {
  constructor() {
    this.empList = [];
  }

  getEmpList(fileName) {
    var empDataString = fs.readFileSync(fileName);
    var empData = JSON.parse(empDataString.toString());
   // console.log(empData);

   //or

    empData.employee.forEach((emp) => {      //employee is from employee.json object
      var newEmployee = new Employee(emp.id, emp.name, emp.age);
      this.empList.push(newEmployee);
    });
  }
}

var reader = new EmployeeReader();
reader.getEmpList("./employee.json");
console.dir(reader.empList);
