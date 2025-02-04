document.addEventListener("DOMContentLoaded", () => {
  const qoutes = [{text:"jnSDBNX hbhCNDxzN" category :"DJSNCnj"},
                 {text:"jnSDBNX hbhCNDxzN" category :"DJSNCnj"},
                 {text:"jnSDBNX hbhCNDxzN" category :"DJSNCnj"}
                 ];

const quoteDisplay = document.getElementById("quoteDisplay");

 function showRandomQuote() {
        if (quotes.length === 0) {
            quoteDisplay.textContent = "No quotes available.";
            return;
        }
       const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteDisplay.textContent = `"${quotes[randomIndex].text}" - ${quotes[randomIndex].category}`;
    }
  
});
