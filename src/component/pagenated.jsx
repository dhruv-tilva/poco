import { useState } from "react";
import Loader from "./loader";
import BlogCard from "./blog-card";
import { Link } from "react-router-dom";
import SearchField from "./search-field";

const Paginationed = ({ blogs, blogsPerpage, handleSearch }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isList, setIsList] = useState(true);

  const changeList = (val) => {
    setIsList(val);
  };

  const totalBlogs = blogs.length;
  const totalPages = Math.ceil(totalBlogs / blogsPerpage);
  const pageNumbers = [];

  const handleClick = (page) => {
    setCurrentPage(page);
  };
  //start here
  const renderPageNumbers = () => {
    const maxDisplayedPages = 5;
    const halfMaxDisplayedPages = Math.floor(maxDisplayedPages / 2); //return 2

    let startPage = currentPage <= 5 ? 1 : currentPage;
    // let startPage = Math.max(1, currentPage - halfMaxDisplayedPages); //return 2
    let endPage = Math.min(totalPages, startPage + maxDisplayedPages - 1); // return 5

    if (currentPage <= maxDisplayedPages) {
      endPage = maxDisplayedPages;
    } else if (currentPage >= totalPages - halfMaxDisplayedPages) {
      startPage = totalPages - maxDisplayedPages + 1;
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li
          key={i}
          onClick={() => {
            handleClick(i);
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <Link
            className={
              i === currentPage
                ? "mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#ffc222] p-0 text-sm text-black font-semibold shadow-md transition duration-150 ease-in-out"
                : "mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-white p-0 text-sm text-black font-semibold shadow-md transition duration-150 ease-in-out"
            }
          >
            {i}
          </Link>
        </li>
      );
    }
    return pageNumbers;
  };

  const indexOfLastBlog = currentPage * blogsPerpage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerpage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  return (
    <>
      <SearchField handleSearch={handleSearch} changeList={changeList} />
      {currentBlogs.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-4 px-4 lg:px-8 py-8 md:grid-cols-2 xl:grid-cols-3">
            {currentBlogs.map((blog) => {
              return <BlogCard blog={blog} key={blog.id} />;
            })}
          </div>
          {/* <div className="pagination">{renderPageNumbers()}</div> */}
          {isList && (
            <ul className="flex justify-center items-center mb-5">
              <li
                onClick={() => {
                  if (currentPage == 1) {
                    setCurrentPage(1);
                  } else {
                    setCurrentPage(currentPage - 1);
                  }
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                <Link
                  className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300 shadow-md"
                  aria-label="Previous"
                >
                  <i className="fa-solid fa-less-than"></i>
                </Link>
              </li>
              {renderPageNumbers()}
              <li
                onClick={() => {
                  if (currentPage == totalPages) {
                    setCurrentPage(totalPages);
                  } else {
                    setCurrentPage(currentPage + 1);
                  }
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                <Link
                  className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300 shadow-md"
                  aria-label="Previous"
                >
                  <i className="fa-solid fa-greater-than"></i>
                </Link>
              </li>
            </ul>
          )}
        </>
      ) : (
        <p className="text-[#ffc222] text-4xl text-center font-darker font-bold mt-5">
          No Result Found!
        </p>
      )}
    </>
  );
};

export default Paginationed;
