import { useState } from 'react'
import './App.css'
import quotes from './quotes'
function App() {
  const [quote,setQuote] = useState({
    text:'',
    author: ''
  });
  
  const generateRandomQuote =() =>{
    const randomQuote = Math.floor(Math.random() * quotes.length);

    setQuote(quotes[randomQuote]);
  }

  return(
    <>
    <div id='quote-box'>
      
      <h2 id='text'>{quote.text}</h2>
      <p id='author'>- {quote.author}</p>
      <button id='new-quote' onClick={generateRandomQuote}>Generate A Quote</button>
      <div>
        <a id='tweet-quote' href="twitter.com/intent/tweet" target='_blank'>Tweet this Quote</a>
      </div>
    </div>
    </>
  )
}

export default App
