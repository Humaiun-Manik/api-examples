function loadQuote() {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => setQuote(data));
}
const setQuote = quote => {
    const loadQuote = document.getElementById('quote');
    loadQuote.innerText = quote.quote;
}