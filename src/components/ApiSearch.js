import { useEffect, useState } from "react";

function ApiSearch() {
  const [inputName, setInputName] = useState();
  const [error, setError] = useState("");
  const nameArr = [];

  useEffect(() => {
    if (!inputName) {
      return;
    }
    fetch("https://www.balldontlie.io/api/v1/players")
      .then((response) => response.json())
      .then((json) => {
        for (let i = 0; i < json.data.length; i++) {
          nameArr.push(json.data[i].first_name);
          console.log(nameArr);
        }
      })
      .catch((error) => setError(error));
  }, [inputName]);

  const handleChange = (inputName) => {
    setInputName(inputName);
  };

  const handleClick = () => {
    const nameFound = nameArr.find(
      (element) => element === inputName.target.value
    );
    if (nameFound) {
      console.log(nameFound);
    } else {
      return console.log("no match found");
    }
  };

  return (
    <div className="ApiSearch">
      <h1>NBA Stats</h1>
      <label htmlFor="name">Mon joueur NBA préféré : </label>
      <input type="text" id="name" required onChange={handleChange}></input>
      <br />
      <button onClick={handleClick}>Rechercher</button>
    </div>
  );
}

export default ApiSearch;
