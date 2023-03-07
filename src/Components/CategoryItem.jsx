import { Link } from "react-router-dom";

function CategoryItem(props) {
  const { name } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img
          src="https://e2.edimdoma.ru/data/posts/0002/0173/20173-ed4_wide.jpg?1495006926"
          alt="pic"
        />
      </div>
      <span className="card-title" style={{ marginLeft: "1rem" }}>
        {name}
      </span>
      <div className="card-action">
        <Link className="btn" to={`/category/${name}`}>
          Watch category
        </Link>
      </div>
    </div>
  );
}

export default CategoryItem;
