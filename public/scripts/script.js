
const newQuoteBtn = document.getElementById('new-quote');
const displayQuote = document.getElementById('quote');
const displayAuthor = document.getElementById('author');
const requestQuote = `${window.origin}/api`;


window.addEventListener('load', async()=>{
    const quote = await getQuote();
    updateDisplay(quote);
})

newQuoteBtn.addEventListener('click', async()=>{
    const quote = await getQuote();
    updateDisplay(quote);
    
})


function updateDisplay(quote){
    displayQuote.innerText = quote.quote;
    displayAuthor.innerText = quote.author;
}


async function getQuote(){
    try{
        const response = await fetch(requestQuote);
        const data = await response.json();
        const parsedData = JSON.parse(data);
        return parsedData[0];
    }
    catch(e){
        alert(e);
    }
}

