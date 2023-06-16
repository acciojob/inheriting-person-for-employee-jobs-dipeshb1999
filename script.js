function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

function Employee(name, age, jobTitle) {
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.jobGreet = function() {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
};

// Create instances and call methods
var person = new Person("John", 25);
var employee = new Employee("Alice", 30, "Manager");

person.greet();
employee.greet();
employee.jobGreet();

// Display output
var outputDiv = document.getElementById('output');
outputDiv.innerHTML = `
  <p>Person:</p>
  <p>Name: ${person.name}</p>
  <p>Age: ${person.age}</p>
  <br>
  <p>Employee:</p>
  <p>Name: ${employee.name}</p>
  <p>Age: ${employee.age}</p>
  <p>Job Title: ${employee.jobTitle}</p>
`;
