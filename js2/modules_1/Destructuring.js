// Destructuring Objects
// Dot notation
const person = {
    firstName: 'Ola',
    lastName: 'Nordmann',
    country: 'Norway',
  };
  
const greeting2 = `Hello, I am ${person.firstName} ${person.lastName} from ${person.country}.`;
console.log(greeting);
// Logs:
// Hello, I am Ola Nordmann from Norway.

// Assign properties to variables
const person1 = {
    firstName: 'Ola',
    lastName: 'Nordmann',
    country: 'Norway',
};
  
const firstName1 = person1.firstName;
const lastName2 = person1.lastName;
const country2 = person1.country;
  
const greeting = `Hello, I am ${firstName1} ${lastName2} from ${country2}.`;
console.log(greeting);
// Logs:
// Hello, I am Ola Nordmann from Norway.

// Destructuring the properties
const user = {
    firstName: 'Ola',
    lastName: 'Nordmann',
    country: 'Norway',
};
  
// Destructured the properties here
const { firstName, lastName, country } = user;
  
const metting = `Hello, I am ${firstName} ${lastName} from ${country}.`;
console.log(metting);
// Logs:
// Hello, I am Ola Nordmann from Norway.


// Destructuring parameters
function greetPerson(personObject) {
    const { firstName, lastName } = personObject;
    console.log(`Hello ${firstName} ${lastName}.`);
}
  
const Normann = {
    firstName: 'Ola',
    lastName: 'Nordmann',
};
  
greetPerson(Normann);


// You could instead destructure the properties from the object where the parameter is:
function greetPerson({ firstName, lastName }) {
    console.log(`Hello ${firstName} ${lastName}.`);
}
  
const NormannPerson = {
    firstName: 'Ola',
    lastName: 'Nordmann',
};
  
greetPerson(NormannPerson);


// example of destructure the properties from the object
const people = [
    {
      firstName: 'Ola',
      lastName: 'Nordmann',
      score: 8,
    },
    {
      firstName: 'Kari',
      lastName: 'Nordmann',
      score: 9,
    },
    {
      firstName: 'Joakim',
      lastName: 'Nordmann',
      score: 4,
    },
];
  
// Destructuring 'score' property from the current element
const winners = people.filter(({ score }) => {
    if (score >= 5) {
      return true;
    }
});

// Destructuring Arrays
const coords = [12, 30, 5, 9, 100, 53];

// 'x' is index 0 in the array
// 'y' is index 1 in the array
const [x, y] = coords;

console.log(x, y);
// Logs:
// 12 30

// Using the ‘rest’ parameter

const namesOf = ['Ola', 'Kari', 'Joakim', 'Ole'];

// 'name0' is index 0 in the array
// 'name1' is index 1 in the array
const [name0, name1, ...rest] = namesOf;

console.log(name0, name1);
// Logs:
// Ola Kari

console.log(rest);
// Logs:
// ['Joakim', 'Ole']

// Ignoring values
const values = [0, 1, 2, 3, 4];

const [value0, , value2] = values;
console.log(value0, value2);
// Logs:
// 0 2