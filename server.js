const express = require('express');

const ProjectRouter = require('./routes/projects_routes');

const server = express();

function logger(req, res, next) {
	console.log(`${req.method} to ${req.originalUrl} at ${new Date()}`);
	next();
}

server.use(logger);
server.use(express.json());
server.use('/api/recipes', ProjectRouter);

server.get('/', (req, res) => {
	res.send(`<h1>She works!</h2>`);
});

module.exports = server;
