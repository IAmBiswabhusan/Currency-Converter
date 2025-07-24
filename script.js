const BASE_URL = "https://open.er-api.com/v6/latest";

const fromCurr = document.querySelector(".dropdown.from select");
const toCurr = document.querySelector(".dropdown.to select");
const amountInput = document.querySelector("#amount");
const msg = document.querySelector(".msg");
const form = document.querySelector("#converter-form");
const dropdowns = document.querySelectorAll(".dropdown select");

for (let select of dropdowns) {
  for (let curr in countryList) {
    let option = document.createElement("option");
    option.value = curr;
    option.innerText = curr;

    if (select.name === "from" && curr === "USD") option.selected = true;
    if (select.name === "to" && curr === "INR") option.selected = true;

    select.append(option);
  }

  select.addEventListener("change", (e) => {
    updateFlag(e.target);
  });
}

function updateFlag(element) {
  const code = element.value;
  const countryCode = countryList[code];
  const img = element.parentElement.querySelector("img");
  img.src = `https://flagsapi.com/${countryCode}/shiny/64.png`;
}

async function updateExchangeRate() {
  const amount = parseFloat(amountInput.value) || 1;
  amountInput.value = amount;

  const from = fromCurr.value;
  const to = toCurr.value;

  try {
    const response = await fetch(`${BASE_URL}/${from}`);
    const data = await response.json();
    const rate = data.rates[to];
    const finalAmount = (amount * rate).toFixed(2);
    msg.innerText = `${amount} ${from} = ${finalAmount} ${to}`;
  } catch (err) {
    msg.innerText = "Failed to fetch exchange rate.";
    console.error(err);
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", updateExchangeRate);
