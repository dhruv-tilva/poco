import BlogCard from "./blog-card";
import SearchField from "./search-field";
import ReactPaginate from "react-paginate"; // for pagination
import { useEffect, useState } from "react"; // useState for storing data and useEffect for changing data on click

const Paginationed = ({ blogs, handleSearch }) => {
  const [isList, setIsList] = useState(true);
  const [page, setPage] = useState(0);
  const n = 6;
  const [filterData, setFilterdata] = useState([]);

  useEffect(() => {
    setFilterdata(
      blogs.filter((item, index) => {
        return (index >= page * n) & (index < (page + 1) * n);
      })
    );
  }, [page]);

  const changeList = (val) => {
    setIsList(val);
  };

  return (
    <>
      <SearchField handleSearch={handleSearch} changeList={changeList} />
      <div className="grid grid-cols-1 gap-4 px-4 lg:px-8 py-8 md:grid-cols-2 xl:grid-cols-3">
        {filterData &&
          filterData.map((blog, index) => (
            <BlogCard blog={blog} key={blog.id} />
          ))}
      </div>
      {isList && (
        <ReactPaginate
          containerClassName="flex items-center justify-center gap-[2px] sm:gap-4 mb-5"
          pageClassName={
            "mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-white p-0 text-sm text-black font-semibold shadow-md transition duration-150 ease-in-out"
          }
          activeClassName={"active"}
          onPageChange={(event) => {
            setPage(event.selected);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          pageCount={Math.ceil(blogs.length / n)}
          breakLabel="..."
          previousLabel={
            <button
              className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300 shadow-md"
              aria-label="Previous"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <i className="fa-solid fa-less-than"></i>
            </button>
          }
          nextLabel={
            <button
              className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300 shadow-md"
              aria-label="Previous"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <i className="fa-solid fa-greater-than"></i>
            </button>
          }
        />
      )}
    </>
  );
};

export default Paginationed;
