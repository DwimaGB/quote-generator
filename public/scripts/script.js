

async function getQuote(){
    try{
        const response = await fetch('http://127.0.0.1:3000/api');
        const quote = await response.json();
        const parsedQuote = JSON.parse(quote)
        console.log(parsedQuote);
    }
    catch(e){
        alert(e);
    }
}