class PStack {
  #id;
  constructor() {
    this.#id = 1;
    this._persons = [];
  }

  showId() {
    return this.#id;
  }

  // Method to add multiple persons
  addPersons(personsArray) {
    this._persons.push(...personsArray);
  }

  get persons() {
    return this._persons;
  }
}

class PStackImpl extends PStack {
  constructor() {
    super();
  }

  push(p) {
    return this._persons.push(p);
  }

  pop() {
    if (this._persons.length > 0) {
      return this._persons.pop().age;
    } else {
      return 'Stack is empty';
    }
  }
}

let pstack = new PStackImpl();
pstack.addPersons([{name: 'Jojo', age: 21}, {name: 'Gabi', age: 29}]); // Use method to add multiple persons
pstack.push({name: 'Dein', age: 19});
console.log(pstack.pop()); // Correctly pops and logs age of Dein
console.log(pstack.pop()); // Correctly pops and logs age of Gabi
console.log(pstack.persons); // Shows remaining persons in the stack
