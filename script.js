const btcButton = document.getElementById('btcButton');
const btcPrice = document.getElementById('btcPrice');

btcButton.addEventListener('click', async () => {
  btcPrice.textContent = "Loading...";
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
    const data = await response.json();
    btcPrice.textContent = `Bitcoin price: $${data.bitcoin.usd}`;
  } catch (error) {
    btcPrice.textContent = "Error fetching price";
  }
});
