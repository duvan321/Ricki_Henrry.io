import { Link } from "react-router-dom";

function Card({ id, name, status, species, gender, origin, image, onClose }) {
  return (
    <div className="card">
      <button
        className="button"
        onClick={() => {
          onClose(id);
        }}
      >
        X
      </button>
      <img src={image} alt="" />
      <Link to={`/detail/${id}`}>
        <h2 className="name">{name} </h2>
      </Link>
      <h2>{status} </h2>
      <h2>{species} </h2>
      <h2>{gender} </h2>
      <h2>{origin.name} </h2>
    </div>
  );
}
export default Card;
