const express = require('express');
const genreRouter = require('./genre.router');
const actorsRouter = require('./actors.router');
const moviesRouter = require('./movies.router');
const directorsRoutes = require('./directors.router');
const router = express.Router();

// colocar las rutas aquí
router.use(genreRouter)
router.use(actorsRouter)
router.use(moviesRouter)
router.use(directorsRoutes)


module.exports = router;