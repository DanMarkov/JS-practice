/**
 * @param {{firstName: String, lastName: String, age: Number}[]} users
 */
 function getLastUserFullName(users) {
	return `${users[1].firstName} ${users[1].lastName}`
}

// Sample usage - do not modify
let users = [
	{
	  firstName: "Sam",
	  lastName: "Blue",
	  age: 21,
	},
  {
    firstName: "Charlie",
    lastName: "Bon",
    age: 38,
  }
];

console.log(getLastUserFullName(users)); // "Charlie Bon"