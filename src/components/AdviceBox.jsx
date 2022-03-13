import React, { useEffect, useState } from "react";
import "./AdviceBox.css";
import patternDivider from "../images/pattern-divider-desktop.svg";
import dice from "../images/icon-dice.svg";

function AdviceBox() {
  const [fetchedData, setFetchedData] = useState();

  const fetchAdvice = async () => {
    const FETCH_URL = "https://api.adviceslip.com/advice";
    const data = await fetch(FETCH_URL);
    const jsonData = await data.json();
    setFetchedData(jsonData);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <>
      {fetchedData ? (
        <div className="adviceWrapper">
          <div className="adviceTitle">
            <p>{`ADVICE #${fetchedData.slip.id}`}</p>
          </div>
          <div className="adviceContent">
            <p>{`"${fetchedData.slip.advice}"`}</p>
          </div>
          <img className="divider" src={patternDivider} alt="pattern Divider" />
          <div className="buttonWrapper">
            <button onClick={fetchAdvice}>
              <img className="diceImage" src={dice} alt="dice" />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default AdviceBox;
