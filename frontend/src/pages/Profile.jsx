// import GoHomeButton from "@components/GoHomeButton";
import { useEffect, useContext, useState } from "react";
import axios from "axios";
import CurrentUserContext from "../contexts/CurrentUserContext";

export default function Profile() {
  const { currentUser } = useContext(CurrentUserContext);

  const [user, setUser] = useState("");
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/users/${currentUser.sub}`)
      .then((response) => response.data)
      .then((data) => setUser(data));
  }, [currentUser]);
  return (
    <>
      {/* <GoHomeButton /> */}
      <p>Page qui ne peut être accessible que par le user concerné</p>
      <h2>Mon profil</h2>
      <p>Bonjour, voici votre profil, bonne journée</p>
      <p>Nom de famille : {user.lastname}</p>
      <p>Prénom : {user.firstname}</p>
      <p>Email : {user.email}</p>
    </>
  );
}
