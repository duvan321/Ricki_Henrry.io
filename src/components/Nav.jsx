import SearchBar from "./SearchBar";

import { Link } from "react-router-dom";
const Nav = ({ onSearch }) => {
  return (
    <div>
      <SearchBar onSearch={onSearch} />
      <Link to="/home">
        <button className="botone1">Home</button>
      </Link>
      <Link to="/abaout">
        <button className="botone2">Abaout</button>
      </Link>
    </div>
  );
};
export default Nav;
