import { /*useEffect,*/ useState } from "react";
import PlayerDetails from "./PlayerDetails";

function ApiSearch() {
  const [inputName, setInputName] = useState("");
  //   useEffect(() => {
  //     if (inputName.target.value !== "") {
  //       return <div>Super, j'ai trouvé ça pour toi :</div>;
  //     }
  //   });

  const url = "https://stats.nba.com/stats/commonplayerinfo";

  const handleChange = (inputName) => {
    setInputName(inputName);
    inputName = inputName.target.value;
  };

  const handleClick = () => {
    console.log(inputName.target.value);
    //consulter l'API avec la valeur entrée
    fetch(url).then((playerID) => {
      console.log(playerID);
    });
  };

  return (
    <div className="ApiSearch">
      <h1>NBA Stats</h1>
      <label htmlFor="name">Mon joueur NBA préféré : </label>
      <input type="text" id="name" required onChange={handleChange}></input>
      <br />
      <button onClick={handleClick}>Rechercher</button>
      <PlayerDetails inputName={inputName} />
    </div>
  );
}

export default ApiSearch;
