import { Link } from "react-router-dom";
import { useContext } from "react";
// import AuthAPI from "@services/AuthAPI";
import AuthContext from "../contexts/AuthContext";
// import CurrentUserContext from "../contexts/CurrentUserContext";
import "./Admin.css";

export default function Header() {
  // eslint-disable-next-line no-unused-vars
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  // const { setCurrentUser } = useContext(CurrentUserContext);

  // const handleLogout = () => {
  //   AuthAPI.logout();
  //   setIsAuthenticated(false);
  // };

  return (
    <header className="Admin-header">
      <div className="admin-navbar">
        <nav>
          <ul>
            {isAuthenticated && (
              <Link to="/admin/categories/create">
                <li>Créer une catégorie</li>
              </Link>
            )}
            {isAuthenticated && (
              <Link to="/admin/products">
                <li>Voir/créer produit</li>
              </Link>
            )}
            {/* ********************************** */}
            {isAuthenticated /* le boutton s'affiche qu'une fois connecté */ && (
              <Link to="/users">
                <li>Utilisateurs</li>
              </Link>
            )}
            {/* ************************************* */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
