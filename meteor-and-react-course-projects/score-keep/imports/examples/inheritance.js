class Person {
  constructor(name = 'noname', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi, I am ${this.name} and I am ${this.age} years old.`;
  }

  getAge = function() {
    return this.age;
  }
}

class Employee extends Person {
  constructor (name = 'noname', age = 0, jobTitle = undefined) {
    super(name, age);
    this.jobTitle = jobTitle
  }

  getGreeting() {
    if (this.hasJob()) {
      return `${super.getGreeting()} I work as a ${this.jobTitle}.`;
    }
    else {
      return super.getGreeting();
    }
  }

  hasJob() {
    return (this.jobTitle != undefined && this.jobTitle != '');
  }
}

export default function() {
  let me = new Person('Benni', 2);
  console.log(me);
  console.log(me.getGreeting());

  let her = new Employee('Chris', 33, 'Entrepreneur');
  console.log(her);
  console.log(her.hasJob());
  console.log(her.getGreeting());
}