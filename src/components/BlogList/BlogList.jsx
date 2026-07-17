import BlogCard from "../BlogCard/BlogCard";
import CategoryFilters from "../CategoryFilters/CategoryFilters";
import "./BlogList.css";

function BlogList() {
  return (
    <>
      <CategoryFilters />
      <section>
        <BlogCard />
      </section>
    </>
  );
}

export default BlogList;
