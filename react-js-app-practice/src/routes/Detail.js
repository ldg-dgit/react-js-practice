import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import MovieDetail from "../components/MovieDetail.js";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovieDetail = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);
  useEffect(() => {
    getMovieDetail();
  }, [getMovieDetail]);
  console.log(movie);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={movie.large_cover_image} alt={movie.id} />
          <h2>{movie.title}</h2>
          <p>{movie.description_full}</p>
          <ul>
            [genres]
            <br />
            {movie.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          <span>rating : {movie.rating}</span>
          <br />
          <span>runtime : {movie.runtime}</span>
        </div>
      )}
    </div>
  );
}

export default Detail;
