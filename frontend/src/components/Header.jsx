import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthAPI from "@services/AuthAPI";
import AuthContext from "../contexts/AuthContext";
import "./Header.css";

export default function Header() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const handleLogout = () => {
    AuthAPI.logout();
    setIsAuthenticated(false);
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
              <li>Accueil - tous les visiteurs</li>
            </Link>
            {!isAuthenticated && (
              <>
                <Link to="/login">
                  <li>Mon compte</li>
                </Link>

                <Link to="/signup">
                  <li>Boite à question</li>
                </Link>
              </>
            )}
            <Link to="/teams">
              <li>
                Team - <em>tous les utilisateurs</em>
              </li>
            </Link>

            {/* <Link to="/users">
              <li>
                Utilisateurs - <em>accessible par les comptes admin</em>
              </li>
            </Link>
            <Link to="/my-profile">
              <li>
                Mon profil -{" "}
                <em>accessible que par l'utilisateur connecté concerné</em>
              </li>
            </Link> */}
          </ul>
        </nav>
      </div>
      {isAuthenticated /* le boutton s'affiche qu'une fois connecté */ && (
        <button type="button" onClick={() => handleLogout()}>
          Deconnexion
        </button>
      )}
    </header>
  );
}
