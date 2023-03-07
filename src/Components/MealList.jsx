import Meal from "./Meal";

function MealList({ meals = [] }) {
  return (
    <div className="list">
      {console.log(meals)}
      {meals.map((meal) => (
        <Meal key={meal.recipe.label} {...meal.recipe} />
      ))}
    </div>
  );
}

export default MealList;
