const users = [
	{ firstName: "Alice", lastName: "Johnson", points: 120 },
	{ firstName: "Bob", lastName: "Smith", points: 99 },
	{ firstName: "Charlie", lastName: "Brown", points: 180 }
];
const newUsers = users.map(function (user) {
	if (user.points > 100) {
		return {
			membershipStatus: 'premium',
			fullName: `${user.firstName} ${user.lastName}`
		};

	}
	else {
		return {
			membershipStatus: 'standard',
			fullName: `${user.firstName} ${user.lastName}`
		}
	}
});
