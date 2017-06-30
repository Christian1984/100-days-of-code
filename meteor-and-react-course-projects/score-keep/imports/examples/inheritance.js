class Person {
  constructor(name = 'noname', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi, I am ${this.name} and I am ${this.age} years old.`;
  }

  callGetGreeting() {
    this.getGreeting();
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

class Programmer extends Person {
  constructor (name = 'noname', age = 0, preferredLanguage = 'assembler') {
    super(name, age);
    this.preferredLanguage = preferredLanguage;
  }

  getGreeting() {
    return `${super.getGreeting()} My favourite language is ${this.preferredLanguage}.`;
  }
}

export default function() {
  let him = new Person('Benni', 2);
  console.log(him);
  console.log(him.getGreeting());
  //console.log(him.callGetGreeting());

  let me = new Employee('Chris', 33, 'Entrepreneur');
  console.log(me);
  console.log(me.hasJob());
  console.log(me.getGreeting());

  let me2 = new Programmer('Chris', 33, 'Java');
  console.log(me2.getGreeting());
}