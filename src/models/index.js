const Movie = require("./Movie")
const Genre = require("./Genre")
const Actor = require("./Actor")
const Director = require("./Director")

Movie.belongsToMany(Actor, { through: "movie_actors"})
Movie.belongsToMany(Genre, { through: "genres_movies"})
Movie.belongsToMany(Director, { through: "director_movies"})

Actor.belongsToMany(Movie, { through: "movie_actors"})
Genre.belongsToMany(Movie, { through: "genres_movies"})
Director.belongsToMany(Movie, { through: "director_movies"})