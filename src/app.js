let btn = document.querySelector("#converter");
btn.addEventListener("click", function () {
  let bitcoinPrice = document.querySelector("#bitcoinPrice").value;
  let dollarsAmount = document.querySelector("#dollarsAmount").value;
  let bitcoinAmount = dollarsAmount / bitcoinPrice;
  document.querySelector("#btc").innerHTML = bitcoinAmount.toFixed(7);
});
