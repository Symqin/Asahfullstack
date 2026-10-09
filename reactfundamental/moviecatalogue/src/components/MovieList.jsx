import MovieItem from "./MovieItem";

function MovieList({ movies }) {
    if (!movies.length) {
        return <p>No movies found.</p>;
    }

    return (
        <div>
            {movies.map((movie) => (
                <MovieItem
                    key={movie.id}
                    {...movie}
                />
            ))}
        </div>
    );
}

export default MovieList;