
let movieList = document.getElementById("movieList");
let movieInfo = document.getElementById("movieInfo");


fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=88d6f906b386ac47c004701d8f545df8")
    .then(res => res.json())
    .then(data => {
        printMovies(data);
    })

function printMovies(movies) {

    movies.results.forEach(movie => {
        let li = document.createElement("li");
        li.innerText = movie.original_title;
        li.addEventListener("click", () => {

            printMovieInfo(movie);
        })

        movieList.appendChild(li);

    })
}

function printMovieInfo(movie) {
    movieInfo.innerHTML = "";

    let movieText = document.createElement("p");
    let movieImg = document.createElement("img");
    let movieDiv = document.createElement("div");

    let movieHeadline = document.createElement("h2")
    movieImg.src = "http://image.tmdb.org/t/p/original/" + movie.poster_path;
    movieImg.setAttribute("Style","width: 200px;")

    
    movieHeadline.innerText = movie.original_title;
    movieText.innerText = movie.overview;

    movieDiv.append(movieHeadline, movieText,movieImg);
    movieInfo.appendChild(movieDiv);

}