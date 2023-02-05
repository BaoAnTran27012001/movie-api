import { useEffect } from "react";
import { Link } from "react-router-dom";
import notFound from "../assets/images/pagenotfound.png";

export const PageNotFound = () => {
  useEffect(()=>{
    document.title = `Page Not Found`;
  })
  return (
    <main className="dark:bg-slate-800">
      <section className="flex flex-col justify-center px2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold dark:text-white my-10">
            404 Oops!
          </p>
          <img
            src={notFound}
            alt="404 not found"
            className="rounded w-[120px] h-[120px]"
          />
          <div className="justify-center my-4">
            <Link to="/">
              <button className="w-64 text-xl bg-blue-600 text-white px-4 py-2">
                Back to Cinemate
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
