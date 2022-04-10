async function getQuote() {
  console.log("quote button was clicked");
  try {
    const response = await fetch(endpoint)
    if (!response.ok) {
      throw Error(response.statusText)
    }

    const json = await response.json();
    console.log(json);
    displayQuote(json.joke);
  } catch(err) {
    console.log(err)
    alert('Failed');
  }

}
function displayQuote(quote) {
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}

const endpoint = 'https://geek-jokes.sameerkumar.website/api?format=json';

const quoteButton = document.querySelector('#js-new-quote');
quoteButton.addEventListener('click', getQuote);

function updateProgressBar(progressBar, value) {
  value = Math.round(value);
  progressBar.querySelector(".progress__fill").style.width = `${value}%`;
  progressBar.querySelector(".progress__text").textContent = `${value}%`;
}

const myProgressBar = document.querySelector(".progress");
