import {
  useParams,
  useNavigate,
  useLocation,
  useMatch,
} from "react-router-dom";

function Movies() {
  const { title } = useParams();
  const value = useNavigate();
  const value2 = useLocation();
  //   const value3 = useMatch();

  console.log(value2);
  //   console.log(value3);
  //   console.log(value);
  return (
    <>
      <h1>Some {title}</h1>;<button onClick={() => value(-1)}>TUtajs</button>
    </>
  );
}

export default Movies;
