"use strict";
let numbersOfFilms;

function start() {
    numbersOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numbersOfFilms == '' || numbersOfFilms == null || isNaN(numbersOfFilms)){
    numbersOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        let lastWatchFilm = prompt('Один из последних просмотренных фильмов?', ''),
            ratingOfFilm = prompt('На сколько оцените его?', '');

        if(lastWatchFilm != '' || ratingOfFilm !=  '' || lastWatchFilm.length < 50 || ratingOfFilm.length < 50 || lastWatchFilm != null || ratingOfFilm != null){
            personalMovieDB.movies[lastWatchFilm] = ratingOfFilm;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}
rememberMyFilms();

function detectPersomalLevel() {
   if (personalMovieDB.count < 10){
        alert('Просмотрено довольно мало фильмов');
    } else if(personalMovieDB.count < 30){
        alert('Вы классический зритель');
    } else if(personalMovieDB.count >= 30){
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    } 
}
detectPersomalLevel();

function writeYourGenr() {
    for(let i =1; i<=3; i++){
       personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenr();

function showMyDB(hidden) {
    if (!hidden){
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);