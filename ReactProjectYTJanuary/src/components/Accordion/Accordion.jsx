import React, { useState } from "react";
import data from "./Data.js";
import Styles from "./Accordion.module.css";
const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const handleSingleSelect = (itemId) => {
    setSelected(itemId === selected ? null : itemId);
    setShowAnswer(true);
  };
  console.log("Selected Id : ", selected);
  return (
    <div className={Styles.accordionContainer}>
      {data && data.length > 0 ? (
        <div className={Styles.dataContainer}>
          {data.map((item) => (
            <div
              key={item.id}
              className={Styles.itemContainer}
              onClick={() => handleSingleSelect(item.id)}
            >
              <p className={Styles.itemConatiner_question}>{item.question}</p>

              {showAnswer && item.id === selected ? (
                <p classname={Styles.itemContainer_answer}>{item.answer}</p>
              ) : (
                <span className={Styles.itemContainer_plus}>+</span>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h1>No data available</h1>
        </div>
      )}
    </div>
  );
};

export default Accordion;
