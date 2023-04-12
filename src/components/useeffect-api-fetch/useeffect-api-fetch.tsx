import { useEffect, useState } from 'react';
import './useeffect-api-fetch.scss';

export function UseEffectApiFetch() {

  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("https://dummyjson.com/products");
      const json = await response.json();
      console.log(json.products);
      setData(json.products);
    }) ();
  }, []);

  return (
    <>
    <div className='content-container'>
    <div className='page-title'>React Basic useEffect API Fetch</div>
      <ul>
        {Array.isArray(data) && data.map((item) => <li key={item['id']}>{item['title']}</li>)}
      </ul>
    </div>
    </>
  
  )
}