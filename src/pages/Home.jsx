import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllCategories } from "../api";
import Preloader from "../Components/Preloader";
import CategoryList from "../Components/CategoryList";
import Search from "../Components/Search";

function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]);

  const { pathname, search } = useLocation();
  const nav = useNavigate();

  const handleSearch = (str) => {
    console.log(str);
    setFilteredCatalog(
      catalog.filter((item) =>
        item.name.toLowerCase().includes(str.toLowerCase())
      )
    );
    nav({ pathname, search: `?search=${str}` });
  };

  useEffect(() => {
    setCatalog([
      { name: "Breakfast" },
      { name: "Dinner" },
      { name: "Lunch" },
      { name: "Snack" },
      { name: "Teatime" },
    ]);
    setFilteredCatalog(
      search
        ? [
            { name: "Breakfast" },
            { name: "Dinner" },
            { name: "Lunch" },
            { name: "Snack" },
            { name: "Teatime" },
          ].filter((item) =>
            item.name.toLowerCase().includes(search.split("=")[1].toLowerCase())
          )
        : [
            { name: "Breakfast" },
            { name: "Dinner" },
            { name: "Lunch" },
            { name: "Snack" },
            { name: "Teatime" },
          ]
    );
  }, [search]);

  return (
    <>
      <Search cb={handleSearch} />
      {!catalog.length ? (
        <Preloader />
      ) : (
        <CategoryList catalog={filteredCatalog} />
      )}
    </>
  );
}

export default Home;
