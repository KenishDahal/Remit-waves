// src/components/CurrencyConverter.js
import Rotation from "../images/rotation.png";
import React, { useEffect, useState } from "react";
import CurrencyRow from "./CurrencyRow";
const BASE_URL =
  "https://v6.exchangerate-api.com/v6/633a9e26820dac396ac81cdd/latest/USD";

function CurrencyConverter() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.conversion_rates)[0];
        setCurrencyOptions([
          data.base_code,
          ...Object.keys(data.conversion_rates),
        ]);
        setFromCurrency(data.base_code);
        setToCurrency(firstCurrency);
        setExchangeRate(data.conversion_rates[firstCurrency]);
      });
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
        .then((res) => res.json())
        .then((data) => setExchangeRate(data.conversion_rates[toCurrency]));
    }
  }, [fromCurrency, toCurrency]);

  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }

  return (
    <>
      <div className="currency-converter">
        <img src={Rotation} alt="rotate" />
        <div className="h3">Currency Converter</div>
        <div className="input-group">
          <CurrencyRow
            currencyOptions={currencyOptions}
            selectedCurrency={fromCurrency}
            onChangeCurrency={(e) => setFromCurrency(e.target.value)}
            onChangeAmount={handleFromAmountChange}
            amount={fromAmount}
          />
        </div>
        {/* <div className="equals">=</div> */}
        <div className="input-group">
          <CurrencyRow
            currencyOptions={currencyOptions}
            selectedCurrency={toCurrency}
            onChangeCurrency={(e) => setToCurrency(e.target.value)}
            onChangeAmount={handleToAmountChange}
            amount={toAmount}
          />
        </div>
      </div>
    </>
  );
}

export default CurrencyConverter;

// const CurrencyConverter = () => {
//   const [currencyOptions, setCurrencyOptions] = useState([]);
//   const [fromCurrency, setFromCurrency] = useState('USD');
//   const [toCurrency, setToCurrency] = useState('EUR');
//   const [exchangeRate, setExchangeRate] = useState(1);
//   const [amount, setAmount] = useState(1);
//   const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

//   const BASE_URL = `https://v6.exchangerate-api.com/v6/633a9e26820dac396ac81cdd/latest/USD`;
//                         https://v6.exchangerate-api.com/v6/633a9e26820dac396ac81cdd/latest/USD

//   useEffect(() => {
//     axios.get(`${BASE_URL}${fromCurrency}`)
//       .then(response => {
//         setCurrencyOptions([response.data.base_code, ...Object.keys(response.data.conversion_rates)]);
//         setExchangeRate(response.data.conversion_rates[toCurrency]);
//       });
//   }, [fromCurrency, toCurrency]);

//   const handleFromAmountChange = (e) => {
//     setAmount(e.target.value);
//     setAmountInFromCurrency(true);
//   };

//   const handleToAmountChange = (e) => {
//     setAmount(e.target.value);
//     setAmountInFromCurrency(false);
//   };

//   const fromAmount = amountInFromCurrency ? amount : (amount / exchangeRate).toFixed(2);
//   const toAmount = amountInFromCurrency ? (amount * exchangeRate).toFixed(2) : amount;

//   return (
//     <div>
//       <h1>Currency Converter</h1>
//       <div>
//         <AmountInput amount={fromAmount} onChangeAmount={handleFromAmountChange} />
//         <CurrencySelector
//           currencyOptions={currencyOptions}
//           selectedCurrency={fromCurrency}
//           onChangeCurrency={(e) => setFromCurrency(e.target.value)}
//         />
//       </div>
//       <div>
//         <AmountInput amount={toAmount} onChangeAmount={handleToAmountChange} />
//         <CurrencySelector
//           currencyOptions={currencyOptions}
//           selectedCurrency={toCurrency}
//           onChangeCurrency={(e) => setToCurrency(e.target.value)}
//         />
//       </div>
//     </div>
//   );
// };

// export default CurrencyConverter;
