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

function getTasks() {
	return db('tasks');
}

function addTasks(task) {
	return db('tasks').insert(task);
}
