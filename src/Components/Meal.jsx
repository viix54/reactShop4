import { Link } from "react-router-dom";

function Meal(props) {
  const { label, image, calories } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="pic" />
      </div>
      <span className="card-title" style={{ marginLeft: "1rem" }}>
        {label}
      </span>
      <div className="card-action">
        <Link className="btn" to={`/meal/${label}`}>
          Watch recipe
        </Link>
      </div>
    </div>
  );
}

export default Meal;
