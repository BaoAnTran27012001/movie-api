import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="p-4 bg-white shadow flex sm:flex-col justify-center items-center flex-wrap dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <Link href="/" className="hover:underline">
          Cinemate™
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <Link
            to="/"
            target="_blank"
            className="mr-4 hover:underline md:mr-6 "
          >
            Instagram
          </Link>
        </li>
        <li>
          <Link to="/" target="_blank" className="mr-4 hover:underline md:mr-6">
            LinkedIn
          </Link>
        </li>
        <li>
          <Link to="/" target="_blank" className="mr-4 hover:underline md:mr-6">
            Youtube
          </Link>
        </li>
        <li>
          <Link
            to="https://github.com/BaoAnTran27012001/movie-api/tree/main"
            target="_blank"
            className="hover:underline"
          >
            Github
          </Link>
        </li>
      </ul>
    </footer>
  );
};
