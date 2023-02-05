import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Card } from "../components/Card";
import useFetch from "../hooks/useFetch";
export const Search = ({ apiPath, title }) => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, searchTerm);
  useEffect(() => {
    document.title = `${title}`;
  });
  return (
    <main className="dark:bg-slate-800">
      <section className="p-7">
        <p className="text-3xl text-gray-700 dark:text-white">
          {movies.length === 0
            ? `No result for query ${searchTerm}`
            : `Result for ${searchTerm}`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-center">
          {movies.map((movie) => {
            return <Card key={movie.id} movie={movie} />;
          })}
        </div>
      </section>
    </main>
  );
};
