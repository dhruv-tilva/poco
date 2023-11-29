import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="shadow bg-gray-900 p-4">
      <div className="w-full p-4 md:p-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="" className="flex items-center mb-4 sm:mb-0">
            <img
              src="/src/assets/logo_svg.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link
                href="/"
                className="mr-4 hover:underline md:mr-6 md:text-lg transition-all font-semibold duration-200 hover:text-[#ffc222]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="mr-4 hover:underline md:mr-6 md:text-lg transition-all font-semibold duration-200 hover:text-[#ffc222]"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm md:text-lg text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="" className="hover:underline">
            Poco™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
