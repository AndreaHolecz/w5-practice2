const allMovies = function (inner, id){
    return `
        <section id="${id}">${inner}</section>
    `
}

const movieCardComponent = function (title, sub, text){
    return`
        <div class="card">
            <div class="movie-title">${title}</div>
            <div class="movie-sub">${sub}</div>
            <div class="movie-text">${text}</div>
        </div>
    `
}

const movieTitleComponent = `
    <h1>Movies</h1>
`;

const loadEvent = function (){
    const rootElement = document.getElementById("root");
    console.log(rootElement);
    rootElement.insertAdjacentHTML("beforeend", movieTitleComponent)

    console.log(movies.cards);
    console.log(movies.logo);

    for (const movie of movies.cards) {
        console.log(movie);
        rootElement.insertAdjacentHTML("beforeend", movieCardComponent(movie.title, movie.sub, movie.text) )
    }
}

window.addEventListener("load", loadEvent)

console.log(window);