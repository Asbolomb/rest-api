const { Router } = require('express');

const {addMovie, listMovies} =require ('./movieFunction');

const movieRouter = Router();

//use http verb post to add data to out movie endpoint 
movieRouter.post('/movie', addMovie);
movieRouter.get('/movie', listMovies);
movieRouter.put('/movie', updateMovies);
movieRouter.put('/movie', deleteMovies);
module.exports = movieRouter;