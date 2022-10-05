// import GoHomeButton from "@components/GoHomeButton";
import { useEffect, useContext, useState } from "react";
import axios from "axios";
import CurrentUserContext from "../contexts/CurrentUserContext";
import "./Profile.css";

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
    <div className="cont-profile">
      <div className="profile-title">
        <h2>Mon profil</h2>
      </div>
      <div className="h2">
        <h2>Bonjour, voici votre profil, bonne journée</h2>
      </div>
      <p>Nom de famille : {user.lastname}</p>
      <p>Prénom : {user.firstname}</p>
      <p>Email : {user.email}</p>
    </div>
  );
}
