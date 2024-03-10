import React, { useState } from "react";

// Local imports
import data from "../../MockData/data";

const Accordion1 = () => {
  const [showContent, setShowContent] = useState(false);

  function handleToggling(index) {
    if (index === dataIndex) {
      setDataIndex(null);
    } else if (index !== dataIndex) {
      setDataIndex(index);
    }
  }

  return (
    <>
      {data.map((item, index) => {
        return (
          <div
            style={{ width: "95%" }}
            onClick={() => setShowContent(!showContent)}
          >
            <h1 className="d-flex flex-row justify-content-between">
              {item.title}
              <div>{showContent ? "⬆️" : "⬇️"}</div>
            </h1>
            {showContent && <p>{item.values}</p>}
          </div>
        );
      })}
    </>
  );
};
export default Accordion1;
