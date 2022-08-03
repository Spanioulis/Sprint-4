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

  return top20;
}

// Exercise 5: Order by year, ascending
function orderByYear() {}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

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
