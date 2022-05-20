/**
 * @param {Object[]} user
 * @param {string} user[].firstName
 * @param {string} user[].lastName
 * @param {number} user[].age
 */
 function getVotingMessage(user) {
	if (user.age >= 18) {
        return "You can vote"
    } else {
        return "You cannot vote"
    }
}

// Sample usage - do not modify
let user1 = {
  firstName: "Sam",
  lastName: "Doe",
  age: 15
};

let user2 = {
  firstName: "Charlie",
  lastName: "Fort",
  age: 31
};

console.log(getVotingMessage(user1)); // "You cannot vote"
console.log(getVotingMessage(user2)); // "You can vote"