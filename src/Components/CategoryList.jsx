import CategoryItem from "./CategoryItem";
import { useNavigate } from "react-router-dom";

function CategoryList({ catalog = [] }) {
  return (
    <>
      <div className="list">
        {catalog.map((el) => (
          <CategoryItem key={el.name} {...el} />
        ))}
      </div>
    </>
  );
}

export default CategoryList;
