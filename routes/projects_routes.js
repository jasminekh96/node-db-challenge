const express = require('express');

const projects = require('./projects_model');

const router = express.Router();

router.get('/', (req, res) => {
	projects
		.getProjects()
		.then((projects) => {
			projects.map((project) => {
				if (project.completed === 0) {
					project.completed = false;
				} else {
					project.completed = true;
				}
			});
			res.status(200).json(projects);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ message: 'Failed to get projects' });
		});
});

router.post('/', (req, res) => {
	const project = req.body;
	projects
		.addProjects(project)
		.then((project) => {
			res.status(200).json(project);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ errorMessage: 'could not add projects' });
		});
});

router.get('/resources', (req, res) => {
	projects
		.getResources()
		.then((resources) => {
			res.status(200).json(resources);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ errorMessage: 'cannot get resources' });
		});
});

router.post('/resources', (req, res) => {
	const resource = req.body;
	projects
		.addResources(resource)
		.then((resource) => {
			res.status(200).json(resource);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ errorMessage: 'could not post resources' });
		});
});

router.get('/tasks', (req, res) => {
	projects
		.getTasks()
		.then((projects) => {
			projects.map((task) => {
				if (task.completed === 0) {
					task.completed = false;
				} else {
					task.completed = true;
				}
			});
			res.status(200).json(projects);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ message: 'Failed to get tasks' });
		});
});

router.post('/tasks', (req, res) => {
	const task = req.body;
	projects
		.addTasks(task)
		.then((task) => {
			res.status(200).json(task);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ errorMessage: 'could not post task' });
		});
});

module.exports = router;
