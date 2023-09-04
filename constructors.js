class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    getPG(movieArray) {
      let pgMovies = [];
      for (let i = 0; i < movieArray.length; i++) {
        if (movieArray[i].rating === "PG") {
          pgMovies.push(movieArray[i]);
        }
      }
      return pgMovies;
    }
  }
  

  let casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  
  console.log(casinoRoyale);
  

  let movies = [
    new Movie("Movie 1", "Studio 1", "PG"),
    new Movie("Movie 2", "Studio 2", "PG-13"),
    new Movie("Movie 3", "Studio 3", "R"),
    new Movie("Movie 4", "Studio 4", "PG"),
  ];
  
  let movieInstance = new Movie();
  let pgMovies = movieInstance.getPG(movies);
  console.log(pgMovies);