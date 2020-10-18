"use strict";


const numbersOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numbersOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for (let i = 0; i < 2; i++){
    let lastWatchFilm = prompt('Один из последних просмотренных фильмов?', ''),
        ratingOfFilm = prompt('На сколько оцените его?', '');

    if(lastWatchFilm != '' && ratingOfFilm !=  '' && lastWatchFilm.length < 50 && ratingOfFilm.length < 50 && lastWatchFilm != null && ratingOfFilm != null){
        personalMovieDB.movies[lastWatchFilm] = ratingOfFilm;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10){
    alert('Просмотрено довольно мало фильмов');
} else if(personalMovieDB.count < 30){
    alert('Вы классический зритель');
} else if(personalMovieDB.count >= 30){
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

console.log(personalMovieDB);
