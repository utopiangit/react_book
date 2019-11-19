import React from "react";

const Monitor = ({ fx }) => {
  return (
    <div className="spot-rate">
      <h2>{fx.currencyPairCode}</h2>
      <div>
        <span>{fx.bid} | {fx.ask}</span>
      </div>
    </div>
  );
};
  
export default Monitor;