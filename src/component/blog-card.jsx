import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-md hover:-translate-y-1 transition-all duration-400">
      <Link className="inline-block w-full h-52 overflow-hidden">
        <img
          onClick={() => {
            navigate(`/blog/${blog.name}`);
          }}
          className="hover:rounded-lg w-full h-full hover:scale-110 transition-all duration-500 object-cover"
          src={"http://localhost:8055/assets/" + blog.image}
          alt=""
        />
      </Link>
      <div className="p-5 md:flex md:flex-col md:h-80 md:items-between">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {blog.title}
        </h5>
        <div className="flex flex-col justify-between h-full">
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {blog.desc}
          </p>
          <button
            onClick={() => {
              navigate(`/blog/${blog.name}`);
            }}
            className="button font-darker"
            style={{ verticalAlign: "middle" }}
          >
            <span>Read More </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
