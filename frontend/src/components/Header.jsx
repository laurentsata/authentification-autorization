/* eslint-disable import/no-unresolved */
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthAPI from "@services/AuthAPI";
import AuthContext from "../contexts/AuthContext";
import CurrentUserContext from "../contexts/CurrentUserContext";
import "./Header.css";

export default function Header() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const { setCurrentUser } = useContext(CurrentUserContext);

  const handleLogout = () => {
    AuthAPI.logout();
    setIsAuthenticated(false);
    setCurrentUser({});
  };

  return (
    <header className="App-header">
      <div className="logo">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dbkscupri/image/upload/v1664791556/modelpro/logovecto_k8yxyr.png"
            alt="logo modelpro"
          />
        </Link>
      </div>
      <div className="navbar">
        <nav>
          <ul>
            <Link to="/">
              <li> Accueil </li>
            </Link>
            {!isAuthenticated && (
              <Link to="/login">
                <li> Mon compte </li>
              </Link>
            )}
            <Link to="/contact">
              <li> Boite à question </li>
            </Link>

            <Link to="/teams">
              <li> Team </li>
            </Link>
            {/* ********************************** */}

            {isAuthenticated /* le boutton s'affiche qu'une fois connecté */ && (
              <Link to="/my-profile">
                <li>Mon profil </li>
              </Link>
            )}
            {/* ************************************* */}
          </ul>
        </nav>
      </div>
      <div className="deconnexion">
        {isAuthenticated /* le boutton s'affiche qu'une fois connecté */ && (
          <button type="button" onClick={() => handleLogout()}>
            Deconnexion
          </button>
        )}
      </div>
    </header>
  );
}
