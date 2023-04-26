import { useRef } from 'react';
import './useRef.scss';

export function UseRef() {
  const basicRef = useRef('Steady');
  let counterRef = useRef(0);

  function handleClick() {
    counterRef.current = counterRef.current + 1;
    alert('Clicked ' + counterRef.current + ' times!')
  }


  return (
    <>
    <div className='content-container'>
    <div className='page-title'>useRef</div>

      <p>Lets you reference/declare a value thats not needed for rendering</p>
      <div>
        <ul>
          <li>Changing a ref does not trigger a re-render(unlike state variables, which trigger a re-render).</li>
          <li>You can store information between re-renders (unlike regular variables, which reset on every render).</li>
          <li></li>
        </ul>
      </div>
      <p></p>


      <p className='line'>Basic Unchanging Ref</p>
      <p> Basic Unchanging Ref: {basicRef.current}</p>
      <br /><br /><br /><br />

      <p className='line'>Ref change with no re-render!</p>
      <button onClick={handleClick}>Update ref without re-render!</button>
      <br /><br /><br /><br />


      
    </div>
    </>
  
  )
}