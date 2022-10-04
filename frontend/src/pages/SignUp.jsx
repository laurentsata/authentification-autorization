import { useState } from "react";
// import GoHomeButton from "@components/GoHomeButton";
import axios from "axios";
import "./SignUp.css";

export default function SignUp() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
  });

  const handleSignUp = () => {
    // Requete création d'un utilisateur

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/users`, { ...formState })
      .then(
        (response) => response.data
      ); /* si tout va bien,POUR GESTION ERREUR, NE PAS METTRE EN POST */
  };

  return (
    <>
      {/* <GoHomeButton /> */}
      <h2>S'enregistrer</h2>
      <form onSubmit={() => handleSignUp()}>
        <br />

        <br />
        <input
          className="a"
          type="text"
          value={formState.email}
          onChange={(e) =>
            setFormState({
              ...formState,
              email: e.target.value,
            })
          }
          placeholder="Email"
        />
        <br />
        <input
          className="b"
          type="password"
          placeholder="Mot de passe"
          value={formState.password}
          onChange={(e) =>
            setFormState({ ...formState, password: e.target.value })
          }
        />
        <br />
        <input
          className="c"
          type="text"
          value={formState.firstname}
          onChange={(e) =>
            setFormState({
              ...formState,
              firstname: e.target.value,
            })
          }
          placeholder="Prénom"
        />
        <br />
        <input
          className="d"
          type="text"
          value={formState.lastname}
          onChange={(e) =>
            setFormState({
              ...formState,
              lastname: e.target.value,
            })
          }
          placeholder="Nom"
        />
        <br />
        <input className="buttonc" type="submit" value="S'ENREGISTRER" />
      </form>
    </>
  );
}
