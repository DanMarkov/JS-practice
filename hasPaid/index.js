/**
 * @param {Object[]} user
 * @param {number} user[].id
 * @param {boolean} user[].hasPaid
 */
 function upgradeUser(user) {
	user.hasPaid = true;
    return user;
}

// Sample usage - do not modify
console.log(upgradeUser({id: 1, hasPaid: false}));
console.log(upgradeUser({id: 2, hasPaid: false}));