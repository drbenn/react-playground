import { useState } from 'react';
import './axios-api-fetch.scss';

import axios from 'axios';

export function AxiosApiFetch() {
  const [quote, setQuote] = useState('')

  const getQuote = () => {
    axios.get('https://api.quotable.io/random')
    .then(res => {
      console.log(res.data.content);
      setQuote(res.data.content)
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <>
    <div className='page-title'>Api Fetch with Axios</div>
    <div className='content-container'>
      <p>
        yarn add axios
      </p>
      <p>
        axios is more secure than using built-in React api fetch
      </p>
      <button onClick={getQuote}>Get Quote</button>
      { quote && <p>{quote}</p>}
    </div>
    </>
  
  )
}