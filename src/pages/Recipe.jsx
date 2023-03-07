import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "../api";
import { useEffect } from "react";
import { useState } from "react";
import Preloader from "../Components/Preloader";

function Recipe() {
  const { name } = useParams();
  const [recipe, setRecipe] = useState({});
  const nav = useNavigate();
  let i = 0;

  useEffect(() => {
    getMealById(name).then((data) => setRecipe(data.hits[0]));
  }, [name]);

  return (
    <>
      {!recipe.recipe ? (
        <Preloader />
      ) : (
        <div className="recipe">
          <img src={recipe.recipe.image} alt="pic" />
          <h1>{recipe.recipe.label}</h1>
          <h4>Category:{recipe.recipe.mealType}</h4>
          <h6>Area: {recipe.recipe.cuisineType}</h6>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illo
            harum commodi molestiae eligendi, excepturi at et suscipit! Eaque
            quibusdam adipisci doloremque officia veniam vel officiis nam iusto
            inventore soluta.
          </p>

          <table className="centered">
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {recipe.recipe.ingredientLines.map((ing) => {
                return (
                  <tr key={i++}>
                    <th>{ing.slice(2)}</th>
                    <th>{ing.slice(0, 2)}</th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <button
        className="btn"
        onClick={() => {
          nav(-1);
        }}
      >
        Go back
      </button>
    </>
  );
}

export default Recipe;
