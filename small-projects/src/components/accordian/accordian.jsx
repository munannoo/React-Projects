import data from "./data.js";
import { useState } from "react";
import "../styles.css";
function Accordian() {
  const [selected, setSelectedID] = useState(null);
  const [multSelectedID, setMultSelectedID] = useState([]);
  const [multSelection, setMultSelection] = useState(false);

  function handleMultSelection(itemID) {
    let cpyOfArr = [...multSelectedID];
    let findIndex = cpyOfArr.indexOf(itemID);
    if (findIndex === -1) {
      cpyOfArr.push(itemID);
    } else {
      cpyOfArr.splice(findIndex, 1);
    }

    console.log(cpyOfArr);
    setMultSelectedID(cpyOfArr);
  }
  function handleSelectedID(itemID) {
    setSelectedID(itemID);
    // for double selection
    {
      selected === itemID ? setSelectedID(null) : setSelectedID(itemID);
    }
  }
  return (
    <>
      <div className="components">
        <h2 className="title">ACCORDIAN</h2>
        <button
          className="multSelect"
          onClick={() => {
            setMultSelectedID([]);
            setMultSelection(!multSelection);
          }}
        >
          MULTIPLE SELECTION
        </button>
        {data && data.length > 0
          ? data.map((dataItem) => (
              <div className="item">
                <div
                  className="question"
                  onClick={() => {
                    multSelection
                      ? handleMultSelection(dataItem.id)
                      : handleSelectedID(dataItem.id);
                  }}
                >
                  {dataItem.question}
                </div>
                {selected === dataItem.id ||
                multSelectedID.indexOf(dataItem.id) !== -1 ? (
                  <div className="answer">{dataItem.answer}</div>
                ) : null}
              </div>
            ))
          : console.log(data, data.length)}
      </div>
    </>
  );
}

export default Accordian;
