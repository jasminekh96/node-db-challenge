exports.up = function(knex) {
	return (
		knex.schema
			.createTable('projects', (tbl) => {
				tbl.increments();
				tbl.string('name', 255).notNullable().unique();
				tbl.string('description', 400);
				tbl.boolean('completed').notNullable().defaultTo(0);
			})
			.createTable('tasks', (tbl) => {
				tbl.increments();
				tbl.string('description_task', 5000).notNullable();
				tbl.string('notes', 255);
				tbl.boolean('completed').notNullable().defaultTo(false);
				tbl
					.integer('projects_id')
					.unsigned()
					.notNullable()
					.references('id')
					.inTable('projects')
					.onDelete('CASCADE')
					.onUpdate('CASCADE'); //FORIEGN KEY
			})
			.createTable('resources', (tbl) => {
				tbl.increments();
				tbl.string('name', 128).notNullable();
				tbl.string('description', 400);
			})
			//connecting both tables
			.createTable('projects_resources', (tbl) => {
				tbl.increments();

				tbl
					.integer('project_id')
					.unsigned()
					.notNullable()
					.references('id')
					.inTable('projects')
					.onDelete('CASCADE')
					.onUpdate('CASCADE'); //FOREIGN KEY to connect to projects table

				tbl
					.integer('resources_id')
					.unsigned()
					.notNullable()
					.references('id')
					.inTable('resources')
					.onDelete('CASCADE')
					.onUpdate('CASCADE'); //FOREIGN KEY to connect to resources
			})
	);
};

exports.down = function(knex) {
	return knex.schema
		.dropTableIfExists('project)resources')
		.dropTableIfExists('resources')
		.dropTableIfExists('tasks')
		.dropTableIfExists('projects');
};
