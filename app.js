const loadMovies = async () => {

    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/550?api_key=f17d3bf4c32da1495c2c468d6db6ee4e&language=es-ES');
        console.log(response);

        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.log(error);
    }
 
 
}


loadMovies();