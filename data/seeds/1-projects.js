exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('projects').truncate().then(function() {
		// Inserts seed entries
		return knex('projects').insert([
			{ id: 1, name: 'How to feed a doggo', description: 'Must buy chemical free yummy foods', completed: 0 },
			{ id: 2, name: 'How to wash a doggo', description: 'Must use oatmeal soaps', completed: 0 },
			{ id: 3, name: 'How to pet a doggo', description: 'with TLC', completed: 0 },
		]);
	});
};
