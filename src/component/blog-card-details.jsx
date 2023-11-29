import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import getData from "../api/get-data";

const BlogCardDetails = () => {
  const location = useLocation();
  const [blog, setBlog] = useState([]);
  const blogName = location.pathname.split("/")[2];
  //   const filteredBlog = [];
  useEffect(() => {
    getData().then((res) => {
      const filteredBlog = res.filter((item) => item.name == blogName);
      setBlog(filteredBlog);
    });
  }, []);
  return (
    <>
      {blog.map((blog) => {
        return (
          <div
            className="w-full bg-white border border-gray-200 shadow"
            key={blog.id}
          >
            <Link>
              <img
                className="w-full"
                src={"http://localhost:8055/assets/" + blog.image}
                alt=""
              />
            </Link>
            <div className="p-5">
              <Link>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {blog.title}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {blog.desc}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {blog.readmore}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BlogCardDetails;
