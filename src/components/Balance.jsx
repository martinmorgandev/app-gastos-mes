import React from "react";

import { useGlobalState } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((trans) => trans.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

  return (
    <div className="flex justify-between">
      <h3>Your balance</h3>
      <h1 className="text-2x1 font-bold">${total}</h1>
      {/* {JSON.stringify(total, null, 2)} */}
      {/* <div>
            {JSON.stringify(data)}
        </div> */}
    </div>
  );
};

export default Balance;
