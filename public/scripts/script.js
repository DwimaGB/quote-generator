
const newQuoteBtn = document.getElementById('new-quote');
const quoteContainer = document.getElementById('quote-container');
const displayQuote = document.getElementById('quote');
const displayAuthor = document.getElementById('author');
const copyBtn = document.getElementById('copy');
const copyText = document.getElementById('copy-text');
const loader = document.querySelector('.loader');

const requestQuote = `${window.origin}/api`;

let textToCopy = '';

window.addEventListener('load', async()=>{
    loading();
    const quote = await getQuote();
    updateDisplay(quote);
})

newQuoteBtn.addEventListener('click', async()=>{
    loading();
    const quote = await getQuote();
    updateDisplay(quote);
    
})
// navigator.clipboard.writeText()
copyBtn.addEventListener('click', async()=>{
    if(textToCopy){
        await navigator.clipboard.writeText(textToCopy);

        copyText.innerText = 'Copied';

        window.setTimeout(()=>{
            copyText.innerText = 'Copy'
        }, 1000)
    }
})



/* functions */

function loading(){
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function loaded(){
    loader.hidden = true;
    quoteContainer.hidden = false;
}

function updateDisplay(quote){
    if(quote.quote.length > 150){
        displayQuote.classList.add('long-quote');
    }else{
        displayQuote.classList.remove('long-quote');
    }
    textToCopy = quote.quote;
    displayQuote.innerText = quote.quote;
    displayAuthor.innerText = quote.author;
    loaded();
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

