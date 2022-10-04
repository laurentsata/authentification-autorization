import "./Footer.css";

export default function Footer() {
  return (
    <div className="container-footer">
      <div className="time">
        <h2>Plan du site</h2>
        <p>
          {" "}
          Horaires Lundi 10h – 13h30 , 14h30 – 18h Mardi 10h – 13h30 Mercredi
          10h – 13h30 , 14h30 – 18h Jeudi 10h – 13h30 Vendredi 10h – 13h30 ,
          14h30 – 18h Samedi 13h30 – 18h
        </p>
      </div>
      <div className="contact">
        <h2>Contact</h2>
        Adresse 441 rue Charles de Gaulle (ECOCENTRE) à 38920 Crolles Téléphone
        04 76 96 48 68 Email philippe.chaussard@orange.fr Informations et
        nouveautés en direct sur notre Facebook Modelpro
      </div>
      <div className="marque">
        {" "}
        <h2>Marques distribuées</h2>
        MUGEN KYOSHO SERPENT TRAXXAS XRAY MATRIX FORFASTER ENNETI WRC GT DUE OS
        RODY NOVAROSSI SANWA RED PICCO FUTABA
      </div>
    </div>
  );
}
