"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start:  function() {
                personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

                while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
                    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
                }
            },
    rememberMyFilms:function() {
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
                    },
    detectPersomalLevel:    function() {
                                if (personalMovieDB.count < 10){
                                    alert('Просмотрено довольно мало фильмов');
                                } else if(personalMovieDB.count < 30){
                                    alert('Вы классический зритель');
                                } else if(personalMovieDB.count >= 30){
                                    alert('Вы киноман');
                                } else {
                                    alert('Произошла ошибка');
                                } 
                            },
    writeYourGenr:  function() {
                        for(let i =1; i<=3; i++){
                            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
                            
                            if(genre == '' || genre == null){
                                console.log('not correct');
                                i--;
                            }else{
                                personalMovieDB.genres[i-1] = genre;
                            }
                        }
                        
                        personalMovieDB.genres.forEach((item, i) => {
                            console.log(`Любимый жанр ${i+1} - это ${item}`);
                        });
                    },
    showMyDB:   function(hidden) {
                    if (!hidden){
                        console.log(personalMovieDB);
                    }
                },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    }
};

// personalMovieDB.start();

// personalMovieDB.rememberMyFilms();

// personalMovieDB.detectPersomalLevel();

personalMovieDB.writeYourGenr();

// personalMovieDB.showMyDB(personalMovieDB.privat);