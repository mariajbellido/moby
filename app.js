let page = 1;
const btnPrevious = document.getElementById("btnPrevious"); 
const btnNext = document.getElementById("btnNext");


btnNext.addEventListener("click", () => {
    if(page < 1000){
        page += 1;
        loadMovies();
    }
});

btnPrevious.addEventListener("click", () => {
    if(page > 1) {
        page -= 1;
        loadMovies();
    }
})

const loadMovies = async () => {

    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=f17d3bf4c32da1495c2c468d6db6ee4e&language=es-ES&page=${page}`);
        //console.log(response);

        //Checking whether the response is correct
        if (response.status === 200 ){
            const data = await response.json();

            let movies = "";
            //console.log(data.results);
            data.results.forEach(movie => {
                //console.log(movie.title)
                movies += `
                    <div class="movie">
                        <img class="poster" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}"> 
                        <h3 class="title"> ${movie.title} </h3>
                    </div>
                    
                    
                `;
            });

            document.getElementById("container").innerHTML = movies;
            
        } else if (response.status === 401) {
            console.log("La clave API es incorrecta. Por favor, compruébala / Your API key is incorrect. Please check it.")
        } else if (response.status === 404) {
            console.log("El recurso que solicitas no existe /  The data your request does not exist")
        } else {
            console.log("Hubo un error inesperado. Vuelve a intentarlo más tarde / Unexpected error, please retry again later")
        }
    } catch(error) {
        console.log(error);
    }
 
 
}


loadMovies();