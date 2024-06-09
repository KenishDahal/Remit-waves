// src/components/AmountInput.js
import React from "react";

const AmountInput = ({ amount, onChangeAmount }) => {
  return <input type="number" value={amount} onChange={onChangeAmount} />;
};

export default AmountInput;
