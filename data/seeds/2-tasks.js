exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('tasks').truncate().then(function() {
		// Inserts seed entries
		return knex('tasks').insert([
			{ id: 1, projects_id: 1, description_task: 'doggo', notes: 'Make sure to pet doggo', completed: false },
			{ id: 2, projects_id: 2, description_task: 'catto', notes: 'Make sure to feed catto', completed: false },
			{
				id               : 3,
				projects_id      : 3,
				description_task : 'cats and dogs',
				notes            : 'Make sure to watch the movie',
				completed        : false,
			},
		]);
	});
};
