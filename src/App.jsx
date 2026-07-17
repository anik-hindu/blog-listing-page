// import BlogList from "./components/BlogList/BlogList";
import { useState } from "react";
import CategoryFilters from "./components/CategoryFilters/CategoryFilters";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  const [category, setCategory] = useState("All");

  const changeCategory = (newCategory) => setCategory(newCategory);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <CategoryFilters
          onSelectCategory={changeCategory}
          currentCategory={category}
        />
        {/* <BlogList /> */}
      </main>
    </>
  );
}

export default App;
