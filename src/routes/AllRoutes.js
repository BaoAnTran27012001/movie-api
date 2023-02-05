import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetail, Search, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<MovieList apiPath="movie/now_playing" title = "Home"/>}
        />
        <Route path="/movie/:id" element={<MovieDetail />} /> 
        <Route
          path="/movies/popular"
          element={<MovieList apiPath="movie/popular" title="Popular Movies"/>}
        />
        <Route
          path="/movies/top"
          element={<MovieList apiPath="movie/top_rated" title="Top Rated"/>}
        />
        <Route
          path="/movies/upcoming"
          element={<MovieList apiPath="movie/upcoming" title="Upcoming"/>}
        />
        <Route path="/search" element={<Search apiPath="search/movie" title="Search Result" />} />
        <Route path="*" element={<PageNotFound title="Page Not Found"/>} />
      </Routes>
    </>
  );
};
