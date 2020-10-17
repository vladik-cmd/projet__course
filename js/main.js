"use strict";

const numbersOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const lastWatchFilm1 = prompt('Один из последних просмотренных фильмов?', ''),
      ratingOfFilm1 = prompt('На сколько оцените его?', ''),
      lastWatchFilm2 = prompt('Один из последних просмотренных фильмов?', ''),
      ratingOfFilm2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[lastWatchFilm1] = ratingOfFilm1;
personalMovieDB.movies[lastWatchFilm2] = ratingOfFilm2;

console.log(personalMovieDB);
