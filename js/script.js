
'use strict';
let numbersOfFilms;

function start() {
    numbersOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numbersOfFilms == '' || numbersOfFilms == null || isNaN(numbersOfFilms)) {
        numbersOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

let personalMovieDB = {
  count: numbersOfFilms,
  movies: {
    
  },
  actors: {

  },
  genres: [

  ],
  privat: false
};

//* Записываем в свойство movies ответы от пользователя
/* personalMovieDB.movies[a] = b; //? movies.a = b;
personalMovieDB.movies[c] = d; */



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null  && a != '' && b != '' && a.length < 50) {
    
            personalMovieDB.movies[a] = b; //? movies.a = b; 
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

/* let i = 0;
while (i < 2) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
          i++;
    if (a != null && b != null  && a != '' && b != '' && a.length < 50) {

        personalMovieDB.movies[a] = b; //? movies.a = b; 
        console.log('done');
    } else {
        console.log('error');
        i--;
    }

} */

function detectPersonalLvl() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотренно довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Ты киноман, Гарри!');
    } else {
        console.log("Ошибка!");
    }
}
detectPersonalLvl();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш kюбимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();