
let movieList = document.getElementById("movieList");
let movieInfo = document.getElementById("movieInfo");
let testknapp = document.getElementById("test");
let searchField = document.getElementById("searchField");

fetch("https://api.themoviedb.org/3/search/movie?query=Batman&include_adult=false&language=en-US&page=2&api_key=88d6f906b386ac47c004701d8f545df8")
    .then(res => res.json())
    .then(data => {
        printMovies(data);
    })

function searchMovie(movieName){
    fetch("https://api.themoviedb.org/3/search/movie?query="+ movieName + "&include_adult=false&language=en-US&page=2&api_key=88d6f906b386ac47c004701d8f545df8")
    .then(res => res.json())
    .then(data => {
        printMovies(data);
    })

}


testknapp.addEventListener("click", () =>{
    movieList.innerHTML = "";
    let searchFieldValue = searchField.value;

    searchMovie(searchFieldValue);
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
    console.log("movie", movie);

    let movieHeadline = document.createElement("h2")
    movieImg.src = "http://image.tmdb.org/t/p/original/" + movie.poster_path;
    movieImg.setAttribute("Style","width: 200px;")

    
    movieHeadline.innerText = movie.original_title;
    movieText.innerText = movie.overview;

    movieDiv.append(movieHeadline, movieText,movieImg);
    movieInfo.appendChild(movieDiv);

}