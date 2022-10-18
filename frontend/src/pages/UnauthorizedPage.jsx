import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./UnauthorizedPage.css";

export default function UnauthorizedPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 6000);
  }, []);

  return (
    <div className="ring">
      <h2>Accès non autorisé</h2>
      <div className="gandalf">
        <img
          src="https://res.cloudinary.com/dbkscupri/image/upload/v1665862115/modelpro/gandalf_gni969.png"
          alt="Accès non autorisé"
        />
      </div>
      <p>
        Vous n'êtes pas autorisé à accéder à cette page. Vous allez
        automatiquement être redirigé vers la page d'accueil
      </p>
    </div>
  );
}
