import Header from "../component/header";
import Footer from "../component/footer";
import getData from "../api/get-data";
import Breadcrumbs from "../component/bread-crumbs";
import { useState, useEffect } from "react";
import Paginationed from "../component/pagenated";
import Loader from "../component/loader";
const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const blogsPerpage = 6;
  const [searchdata, setSearchData] = useState("");
  const [datas, setData] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  // const propPass = blogs ? blogs : <Loader />;

  useEffect(() => {
    setIsLoader(true);
    getData().then((res) => {
      setBlogs(res);
      setData(res);
      setIsLoader(false);
    });
  }, []);
  const handleSearch = (data) => {
    setSearchData(data);
    const newData = datas.filter((item) =>
      item.title.toLowerCase().includes(searchdata.toLowerCase())
    );
    setBlogs(newData);
  };
  return (
    <>
      <Header />
      <Breadcrumbs />
      {isLoader ? (
        <Loader />
      ) : (
        <Paginationed
          blogs={blogs}
          blogsPerpage={blogsPerpage}
          handleSearch={handleSearch}
        />
      )}

      {blogs.length > 0 && <Footer />}
    </>
  );
};

export default Blog;
