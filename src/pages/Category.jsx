import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFilteredCategory } from "../api";
import Preloader from "../Components/Preloader";
import MealList from "../Components/MealList";

function Category() {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    getFilteredCategory(name).then((data) => setMeals(data.hits));
  }, [name]);

  return (
    <>
      <button
        className="btn"
        onClick={() => {
          nav(-1);
        }}
      >
        Go back
      </button>
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
}

export default Category;
