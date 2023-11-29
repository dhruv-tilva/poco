import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Breadcrumbs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav
      className="flex px-5 py-3 lg:px-8 text-gray-700 border border-gray-200 mt-24"
      aria-label="Breadcrumb"
    >
      <ul className="inline-flex items-center space-x-1 md:space-x-3">
        <li>
          <i
            onClick={() => navigate("/")}
            className="fa-solid fa-house text-[#ffc222] cursor-pointer"
          ></i>
        </li>
        <li>
          <Link
            className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-[#ffc222]"
            to="/"
          >
            {" "}
            Home
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const displayPage = name.charAt(0).toUpperCase() + name.slice(1);
          //   console.log(displayPage);
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return isLast ? (
            <li key={name} className="flex items-center">
              <svg
                className="w-3 h-3 mx-1 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-700 cursor-default">
                {displayPage}
              </span>
            </li>
          ) : (
            <li key={name} className="flex items-center">
              <svg
                className="w-2 h-2 mx-1 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <Link
                to={routeTo}
                className="ml-1 text-sm font-medium text-gray-700 md:ml-2 dark:text-gray-400 hover:text-[#ffc222]"
              >
                {displayPage}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
