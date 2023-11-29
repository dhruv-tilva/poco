import Header from "../component/header";
import Footer from "../component/footer";
import BreadCrumbs from "../component/bread-crumbs";
import BlogCardDetails from "../component/blog-card-details";
import FeedForm from "../component/feed-back";

const Blogs = () => {
  return (
    <>
      <Header />
      <BreadCrumbs />
      <div className="lg:grid lg:grid-cols-2">
        <BlogCardDetails />
        <FeedForm />
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
