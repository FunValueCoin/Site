async function connectWallet() {
  if (window.ethereum) { // check if MetaMask is installed
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' }); // request to connect to MetaMask
      const account = accounts[0];
      document.getElementById('connectWalletButton').innerText = shortenAddress(account); // update button text to the shortened connected account
    } catch (error) {
      console.error(error);
    }
  } else {
    alert("MetaMask is not installed. Please consider installing it: https://metamask.io/download.html");
  }
}

function shortenAddress(address, chars = 4) {
  return `${address.substring(0, chars + 2)}...${address.substring(address.length - chars)}`;
}

function startTransaction() {
  // Here you can start a transaction or sign a message using the user's account
  // You will need to implement this function based on your requirements
}