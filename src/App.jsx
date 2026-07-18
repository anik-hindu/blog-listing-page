import { useState } from "react";
import BlogCard from "./components/BlogCard/BlogCard";
import CategoryFilters from "./components/CategoryFilters/CategoryFilters";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import blogPosts from "./data/blogPosts";

function App() {
  const [category, setCategory] = useState("All");

  const changeCategory = (newCategory) => setCategory(newCategory);

  const filteredPosts =
    category === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === category);

  const sortedPosts = [...filteredPosts].sort(
    (a, b) => new Date(a.publishedAt) - new Date(b.publishedAt),
  );

  return (
    <>
      <Header />
      <main>
        <Hero />
        <CategoryFilters
          onSelectCategory={changeCategory}
          currentCategory={category}
        />

        <section className="blog-grid" aria-label="Blog articles">
          {filteredPosts.length > 0 ? (
            <div className="blog-container">
              {sortedPosts.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
          ) : (
            <div className="blog-container blog-grid--empty">
              <p>No articles found.</p>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
