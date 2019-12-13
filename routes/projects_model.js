const db = require('../db.config');

module.exports = {
	getProjects,
	addProjects,
	getResources,
	addResources,
	getTasks,
	addTasks,
};

function getProjects() {
	return db('projects');
}

function addProjects(project) {
	return db('projects').insert(project);
}

function getResources() {
	return db('resources');
}

function addResources(resource) {
	return db('resources').insert(resource);
}

//need a join
function getTasks() {
	return db('tasks')
		.select(
			'projects.name as projects_name',
			'projects.description as projects_description',
			'tasks.description_task',
			'tasks.notes',
			'tasks.id',
			'tasks.projects_id',
		)
		.join('projects', 'tasks.projects_id', 'projects.id');
}

function addTasks(task) {
	return db('tasks').insert(task);
}
