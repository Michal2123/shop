import React from "react";
import "../styles/Error.css";

const AdBlockError = () => {
  return (
    <div className="AdBlockErrorDiv">
      <h1>
        Please turn off your adBlock and reload page to see the list of
        products.
      </h1>
    </div>
  );
};

export default AdBlockError;
