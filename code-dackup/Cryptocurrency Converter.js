import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [myMoney, setMyMoney] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  function onChange(event) {
    setMyMoney(event.target.value);
  }
  return (
    <div>
      <h1>Cryptocurrency Converter ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <input
        onChange={onChange}
        value={myMoney}
        type='number'
        placeholder='Please Write your USD'
      />
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}):
              {myMoney / coin.quotes.USD.price} {coin.symbol}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
