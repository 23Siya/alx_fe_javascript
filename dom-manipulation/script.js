document.addEventListener("DOMContentLoaded", () => {
  const qoutes = [{text:"jnSDBNX hbhCNDxzN" category :"DJSNCnj"},
                 {text:"jnSDBNX hbhCNDxzN" category :"DJSNCnj"},
                 {text:"jnSDBNX hbhCNDxzN" category :"DJSNCnj"}
                 ];


const quoteDisplay = document.getElementById("quoteDisplay");
    const newQuoteBtn = document.getElementById("newQuote");
    const newQuoteText = document.getElementById("newQuoteText");
    const addQuoteBtn = document.getElementById("addQuote");

 function showRandomQuote() {
        if (quotes.length === 0) {
            quoteDisplay.textContent = "No quotes available.";
            return;
        }
       const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteDisplay.textContent = quotes[randomIndex];
    }
  function addQuote() {
        const quoteText = newQuoteText.value.trim();
        if (!quoteText) {
            alert("Please enter a quote.");
            return;
        }
        quotes.push(quoteText);
        newQuoteText.value = "";
        alert("Quote added successfully!");
    }

    newQuoteBtn.addEventListener("click", showRandomQuote);
    addQuoteBtn.addEventListener("click", addQuote);

    showRandomQuote();
});
