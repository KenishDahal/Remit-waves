// src/components/CurrencySelector.js
import React from "react";

const CurrencySelector = ({
  currencyOptions,
  selectedCurrency,
  onChangeCurrency,
}) => {
  return (
    <select value={selectedCurrency} onChange={onChangeCurrency}>
      {currencyOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default CurrencySelector;
