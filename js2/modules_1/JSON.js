// Convert to JSON (JSON.stringify)
const person1 = {
    name: 'Ola Nordmann',
    id: 9,
    isAdmin: true,
};
  
const person1JSON = JSON.stringify(person);
  
console.log(personJSON);
// Logs:
// {"name":"Ola Nordmann","id":9,"isAdmin":true}

// Converting JSON back to JavaScript (JSON.parse)
const personJSON = '{ "name": "Ola Nordmann", "id": 9, "isAdmin": true }';

const person = JSON.parse(personJSON);

console.log(person);

// Logs:
// {name: 'Ola Nordmann', id: 9, isAdmin: true}