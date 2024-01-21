import MovieCard from "./Moviecard";

function MovieList(props) {

    // const {title,plot,price,rating,stars,fav,cart,poster} = state.movies;
    const { movies, addStars, decStars, toggleFav, toggleCart } = props;

    return (
        <>
            {movies.map((movie) => <MovieCard movies={movie}
                addStars={addStars}
                decStars={decStars}
                toggleFav={toggleFav}
                toggleCart={toggleCart}
                key={movie.id}
            />)}
        </>
    )
}

export default MovieList;