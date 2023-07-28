import { useState } from "react";
import Validation from "../Validations/Validation";
const Form = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrros] = useState({});
  const handleChange = (event) => {
    setErrros(
      Validation({ ...userData, [event.target.name]: event.target.value })
    );

    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };
  const handlerSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };
  return (
    <div className="cardForm">
      <img
        className="formImage"
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        alt=""
      />
      <form onSubmit={handlerSubmit}>
        <label>Email:</label>
        <br />
        <input
          onChange={handleChange}
          value={userData.email}
          type="text"
          name="email"
        />
        {errors.e1 ? (
          <p>{errors.e1}</p>
        ) : errors.e2 ? (
          <p>{errors.e2}</p>
        ) : (
          <p>{errors.e3}</p>
        )}
        <br />
        <label>Password:</label>
        <br />
        <input
          onChange={handleChange}
          value={userData.password}
          type="password"
          name="password"
        />
        {errors.p1 ? <p>{errors.p1}</p> : <p>{errors.p2}</p>}
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default Form;
