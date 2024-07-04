import React, { useState } from "react";

// Local imports
import Accordion2 from "./Accordion2";
import data from "../../MockData/data";

const AccordionController = () => {
  const [expandAccordion, setExpandAccordion] = useState({});

  function handleToggling(index) {
    setExpandAccordion((prev) => ({ ...prev, [index]: !prev[index] }));
  }

  return data.map((item, index) => {
    return (
      <>
        <h1 className="d-flex flex-row justify-content-between">
          {item.title}
          <button onClick={() => handleToggling(index)}>
            {expandAccordion[index] ? "-" : "+"}
          </button>
        </h1>
        {expandAccordion[index] && (
          <Accordion2 key={index} item={item} index={index} />
        )}
      </>
    );
  });
};

export default AccordionController;
