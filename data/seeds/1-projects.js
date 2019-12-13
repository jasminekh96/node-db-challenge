exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('projects').truncate().then(function() {
		// Inserts seed entries
		return knex('projects').insert([
			{ id: 1, name: 'How to feed a doggo' },
			{ id: 2, name: 'How to wash a doggo' },
			{ id: 3, name: 'How to pet a doggo' },
		]);
	});
};
