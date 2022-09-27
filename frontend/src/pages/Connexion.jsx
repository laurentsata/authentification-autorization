import { useState, useContext } from "react";
import GoHomeButton from "@components/GoHomeButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

export default function Connexion() {
  const [formState, setFormState] = useState({
    email: "lolo@mail.fr",
    password: "lolo",
  });
  const { setIsAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/login`, { ...formState })
      .then((response) => response.data)
      .then((data) => {
        window.localStorage.setItem("authToken", data.token);
        axios.defaults.headers.Authorization = `Bearer ${data.token}`;
      })
      .then(() => {
        setIsAuthenticated(true);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      }); /* si tout va bien,POUR GESTION ERREUR */

    // Requete de connexion -> stocker le token dans le local storage -> ajouter le token dans les autorisations
    // -> rediriger l'utilisateur vers la page d'accueil
  };
  return (
    <>
      <GoHomeButton />
      <h2>Formulaire de connexion</h2>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
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
          type="password"
          placeholder="Mot de passe"
          value={formState.password}
          onChange={(e) =>
            setFormState({ ...formState, password: e.target.value })
          }
        />
        <input type="submit" />
      </form>
    </>
  );
}
