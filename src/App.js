import "./App.css";

import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";
import Form from "./components/Form/Form";
const EMAIL = "diegoduvan321@gmail.com";
const PASSWORD = "abc123";
const example = {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  gender: "Male",
  origin: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
};
function App() {
  const [characters, setCharacters] = useState([]);
  // const onSearch = (id) => {

  //   setCharacters([...characters, example]);
  // };
  const { pathname } = useLocation();
  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }
  const onClose = (id) => {
    setCharacters(
      characters.filter((chart) => {
        return chart.id !== Number(id);
      })
    );
  };
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }
  useEffect(() => {
    !access && navigate("/");
  }, [access]);
  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} />}

      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        ></Route>
        <Route path="/abaout" element={<About />}></Route>
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Form login={login} />} />
      </Routes>
    </div>
  );
}

export default App;
