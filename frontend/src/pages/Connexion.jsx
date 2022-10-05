import { useState, useContext } from "react";
// import GoHomeButton from "@components/GoHomeButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved
import jwtDecode from "jwt-decode";
import SignUP from "@pages/SignUp";
// import CurrentUserContext from "../contexts/CurrentUserContext";
import AuthContext from "../contexts/AuthContext";
import "./Connexion.css";

export default function Connexion() {
  const [formState, setFormState] = useState({
    email: "luke@mail",
    password: "luke",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { setIsAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Requete de connexion -> stocker le token dans le local storage -> ajouter le token dans les autorisations
    // -> rediriger l'utilisateur vers la page d'accueil

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/login`, { ...formState })
      .then((response) => response.data)
      .then((data) => {
        window.localStorage.setItem("authToken", data.token);
        axios.defaults.headers.Authorization = `Bearer ${data.token}`;
        setIsAuthenticated(true);
        // eslint-disable-next-line no-undef
        setCurrentUser(jwtDecode(data.token));
      })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        setErrorMessage("Identifiants incorrects");
      }); /* si tout va bien,POUR GESTION ERREUR */
  };
  return (
    <div className="container-connection-inscrition">
      <div className="title">
        <h2>Mon compte</h2>
      </div>
      {/* <GoHomeButton /> */}
      <div className="bloc">
        <div className="connection">
          <h2>Connexion</h2>
          <form onSubmit={(event) => handleSubmit(event)}>
            <input
              className="email"
              type="email"
              value={formState.email}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  email: e.target.value,
                })
              }
              placeholder="Email"
            />
            <input
              className="password"
              type="password"
              placeholder="Mot de passe"
              value={formState.password}
              onChange={(e) =>
                setFormState({ ...formState, password: e.target.value })
              }
            />
            <p>{errorMessage}</p>
            <input className="buttonc" type="submit" value="IDENTIFICATION" />
          </form>
        </div>
        <div className="inscription">
          <SignUP />
        </div>
      </div>
    </div>
  );
}
