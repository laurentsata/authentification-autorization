import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthAPI from "@services/AuthAPI";
import AuthContext from "../contexts/AuthContext";

export default function Header() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const handleLogout = () => {
    AuthAPI.logout();
    setIsAuthenticated(false);
  };

  return (
    <header className="App-header">
      <div className="logo">
        <img
          src="https://res.cloudinary.com/dbkscupri/image/upload/v1664791556/modelpro/logovecto_k8yxyr.png"
          alt="logo modelpro"
        />
      </div>
      <div>
        <nav>
          <ul>
            <Link to="/">
              <li>Accueil - accessible par tous les visiteurs</li>
            </Link>
            {!isAuthenticated && (
              <>
                <Link to="/login">
                  <li>Connexion</li>
                </Link>

                <Link to="/signup">
                  <li>Inscription</li>
                </Link>
              </>
            )}
            <Link to="/movies">
              <li>
                Films - <em>accessible par tous les utilisateurs connectés</em>
              </li>
            </Link>

            <Link to="/users">
              <li>
                Utilisateurs - <em>accessible par les comptes admin</em>
              </li>
            </Link>
            <Link to="/my-profile">
              <li>
                Mon profil -{" "}
                <em>accessible que par l'utilisateur connecté concerné</em>
              </li>
            </Link>
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