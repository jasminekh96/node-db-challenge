exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('resources').truncate().then(function() {
		// Inserts seed entries
		return knex('resources').insert([
			{ id: 1, name: 'Apple', description: 'holds stuff in the clouds' },
			{ id: 2, name: 'Apple', description: 'you can also eat it' },
			{ id: 3, name: 'Apple', description: 'reccommended to eat with peanut butter' },
		]);
	});
};
