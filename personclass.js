class Person {
    constructor(firstName, lastName, age, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.email = email;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    toString() {
      return `Person[Name=${this.getFullName()}, Age=${this.age}, Email=${this.email}]`;
    }
  }
  
  
  const person1 = new Person("Karthikeyan", "M", 25, "karthikeya376@gmail.com");
  console.log(person1.toString()); 
  console.log(person1.getFullName());
  console.log(person1.age);
  const person2 = new Person("Karthi", "M", 26, "karthi36@gmail.com");
  console.log(person2.toString()); 
  console.log(person2.getFullName());
  console.log(person2.age);

