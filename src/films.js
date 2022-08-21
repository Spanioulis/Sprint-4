// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const directors = array.map((x) => x.director);

  console.log('EXERCICE 1 ->', directors);
  return directors;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const DIRECTOR = array.filter((item) => item.director === director);

  console.log('EXERCICE 2 ->', DIRECTOR);
  return DIRECTOR;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const DIRECTOR = array.filter((item) => item.director === director);

  const totalScore = DIRECTOR.reduce((total, item) => {
    return (total = total + item.score);
  }, 0);

  // toFixed() devuelve 'string', por eso convertimos a number con el +()
  let average = +(totalScore / DIRECTOR.length).toFixed(2);

  console.log('EXERCISE 3 ->', average);
  return average;
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  // Obtener array de títulos únicamente
  const title = array.map((item) => item.title);

  // Ordenar alfabéticamente array [title]
  const ordenAlfabetico = title.sort();

  // Recortar [ordenAlfabetico]
  // Mejor con slice(), ya que de esta forma no muta el array[] original (splice o length)
  const top20 = ordenAlfabetico.slice(0, 20);

  console.log('EXERCISE 4 ->', top20);
  return top20;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  // Nueva array - "copia"
  const arr = array.map((item) => ({ ...item }));

  // Ordenar por año de producción (y alfabéticamente si coincide el año)
  const sortYearAlpha = arr.sort((a, b) => {
    if (a.year === b.year) {
      return a.title < b.title ? -1 : 1;
    }

    if (a.year < b.year) {
      return -1;
    }
    if (a.year > b.year) {
      return 1;
    }
  });

  console.log('EXERCISE 5 ->', sortYearAlpha);
  return sortYearAlpha;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  const genero = array.filter(
    (item) => item.genre.includes(genre) && item.score !== ''
  );

  const average = moviesAverageOfDirector(genero);

  console.log('EXERCISE 6 ->', average);
  return average;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const newArray = array.map((movie) => ({ ...movie }));

  newArray.forEach((item) => {
    item.duration = item.duration.replace(/[hmin]/g, '').split(' ');
    if (item.duration[1] !== undefined) {
      return (item.duration = item.duration[0] * 60 + +item.duration[1]);
    } else {
      return (item.duration = item.duration[0] * 60);
    }
  });

  console.log('EXERCISE 7', newArray);
  return newArray;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
