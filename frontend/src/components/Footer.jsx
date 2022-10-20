import "./Footer.css";

export default function Footer() {
  return (
    <div className="container-footer">
      <div className="time">
        <h2>Horaires</h2>
        {/* <p>
          {" "}
          Horaires Lundi 10h – 13h30 , 14h30 – 18h Mardi 10h – 13h30 Mercredi
          10h – 13h30 , 14h30 – 18h Jeudi 10h – 13h30 Vendredi 10h – 13h30 ,
          14h30 – 18h Samedi 13h30 – 18h
        </p> */}
        <p>Lundi 10h - 13h30 / 14h30 - 18h</p>
        <p>Mardi 10h – 13h30</p>
        <p>Mercredi 10h – 13h30 / 14h30 – 18h</p>
        <p>Jeudi 10h – 13h30</p>
        <p>Vendredi 10h – 13h30 / 14h30 – 18h</p>
        <p>Samedi 13h30 – 18h</p>
      </div>
      <div className="contact">
        <h2>Contact</h2>
        <p> 441 rue Charles de Gaulle (ECOCENTRE) 38920 Crolles</p>
        <p className="phone">
          {" "}
          Téléphone : <a href="tel: 0476964868">&nbsp;04 76 96 48 68 </a>{" "}
        </p>
        <p className="desktop">Téléphone : 04 76 96 48 68</p>
        <p>
          {" "}
          Email :{" "}
          <a href="mailto:philippe.chaussard@orange.fr">
            philippe.chaussard@orange.fr
          </a>
        </p>
        <p>
          {" "}
          Informations et nouveautés en direct sur notre{" "}
          <a href="https://www.facebook.com/Modelpro38">Facebook</a>
        </p>
      </div>
      <div className="marque">
        {" "}
        <h2>Marques distribuées</h2>
        <p> MUGEN KYOSHO SERPENT TRAXXAS XRAY</p>{" "}
        <p>MATRIX FORFASTER ENNETI WRC GT DUE</p>{" "}
        <p>OS RODY NOVAROSSI SANWA RED PICCO</p> <p> FUTABA</p>
      </div>
    </div>
  );
}
