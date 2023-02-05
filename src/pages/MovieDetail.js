import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import backUp from "../assets/images/backup.png";
import cleanNum from "../helper/cleanNumber";
export const MovieDetail = () => {
  const params = useParams();
  const [movieDetail, setMovieDetail] = useState([]);

  const image = movieDetail.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`
    : backUp;
  useEffect(() => {
    document.title = `${movieDetail.title}`;
  });
  useEffect(() => {
    async function fetchDetail() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=c2fbc9c9fbf91093a9c87cc42b2e183e`
      );
      const data = await response.json();
      setMovieDetail(data);
    }
    fetchDetail();
  }, [params.id]);
  return (
    <main className="dark:bg-slate-800">
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm">
          <img src={image} className="rounded" alt="cover" />
        </div>
        <div className="max-w-2xl text-gray-700 text-lg dark:text-white p-7 ">
          <h1 className="text-4xl font-bold my-3 other:text-2xl text-center lg:text-left">
            {movieDetail.title}
          </h1>
          <p className="text-left">{movieDetail.overview}</p>
          <p className="my-7 flex flex-wrap gap-2">
            {movieDetail.genres &&
              movieDetail.genres.map((genre) => {
                return (
                  <span
                    className="mr-2 border border-gray-200 rounded dark:border-gray-600 p-2"
                    key={genre.id}
                  >
                    {genre.name}
                  </span>
                );
              })}
          </p>

          <div className="flex items-center">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Rating star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
              {Math.round(movieDetail.vote_average * 10) / 10}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span className="text-sm font-medium text-gray-900dark:text-white">
              {movieDetail.vote_count} reviews
            </span>
          </div>
          <p className="my-4">
            <span className="mr-2 font-bold">Runtime:</span>
            <span>{movieDetail.runtime} min.</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Revenue:</span>
            <span>{cleanNum(movieDetail.revenue)}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Budget:</span>
            <span>{cleanNum(movieDetail.budget)}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Release Date:</span>
            <span>{movieDetail.release_date}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">IMDB Code:</span>
            <a
              href={`https://www.imdb.com/title/${movieDetail.imdb_id}`}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              {movieDetail.imdb_id}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};
