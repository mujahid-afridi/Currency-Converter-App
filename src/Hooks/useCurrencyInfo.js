import React, { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  let [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data[currency]);
      });
  }, [currency]);
  return data;
}
export default useCurrencyInfo;
