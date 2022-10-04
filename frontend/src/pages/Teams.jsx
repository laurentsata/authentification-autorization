import axios from "axios";
import { useEffect, useState } from "react";
import "./Teams.css";
// import GoHomeButton from "@components/GoHomeButton";

export default function Teams() {
  const [teams, setTeams] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/teams`)
      .then((response) => response.data)
      .then((data) => setTeams(data));
  }, []);

  return (
    <>
      {/* <GoHomeButton /> */}
      <p>Page pouvant être accessible par tous les users</p>
      <div className="title-team">
        <h2>Team Modelpro</h2>
      </div>
      <div className="cont-item">
        <ul>
          <div className="item">
            {teams &&
              teams.map((team) => (
                <div className="cardo">
                  <img src={team.image} alt="images de la team" />
                  <h2>{team.name}</h2>
                </div>
              ))}
          </div>
        </ul>
      </div>
    </>
  );
}
