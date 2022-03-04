console.log('object');

const user = {
  name: 'James',
  age: 25,
  greeting: function () {
    const greet = `Hi my name is ${this.name} and I am ${this.age} years old`;
    console.log(greet);
  },
};
const user1 = {
  name: 'Mike',
  age: 33,
  greeting: function () {
    const greet = `Hi my name is ${this.name} and I am ${this.age} years old`;
    console.log(greet);
  },
  rename: function (newName) {
    this.name = newName;
    console.log(this);
  },
};

console.log('user ===', user);

// pasisveikinti
user.greeting();
user1.greeting();
user1.rename('Bob');
// const userName = user.name;
// console.log('userName ===', userName);
