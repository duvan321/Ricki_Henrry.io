import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);
  return (
    <div className="dtailContainer">
      <div className="container">
        {" "}
        <h1>{character.name && character.name}</h1>
        <h3>{character.status && character.status}</h3>
        <h3>{character.species && character.species}</h3>
        <h3>{character.gender && character.gender}</h3>
        <h3>{character.origin?.name && character.origin?.name}</h3>
      </div>
      <div className="container2">
        {" "}
        <img className="imagen" src={character.image} alt={character.name} />
      </div>
    </div>
  );
};
export default Detail;
