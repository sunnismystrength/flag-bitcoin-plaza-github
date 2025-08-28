async function loadTickers() {
  const tickers = {
    "Bitcoin": "BTC-USD",
    "Ethereum": "ETH-USD",
    "Gold": "GC=F",
    "Silver": "SI=F",
    "Uranium": "UX=F",
    "DXY": "DX-Y.NYB"
  };

  let output = [];
  for (const [name, symbol] of Object.entries(tickers)) {
    try {
      const res = await fetch(
        `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`
      );
      const data = await res.json();
      const price = data.chart.result[0].meta.regularMarketPrice;
      output.push(`${name}: ${price}`);
    } catch (err) {
      output.push(`${name}: N/A`);
    }
  }
  document.getElementById("ticker-bar").innerText = output.join(" | ");
}

document.addEventListener("DOMContentLoaded", loadTickers);
