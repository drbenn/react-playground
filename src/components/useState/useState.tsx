import { FormEvent, useState } from 'react';
import './useState.scss';

export function UseState() {

  const underlineStyle = {textDecoration: "underline"};

  const [foo, setFoo] = useState('foo');
  const [timestamp, setTimestamp] = useState(0);
  const [testObject, setTesObject] = useState({name:'fred'})

  function handleClick() {
    let newValue = foo === 'bar' ? 'foo' : 'bar';
    setFoo(newValue);
  }
  
  function handleCount(e:FormEvent) {
    console.log(e);
    setTimestamp(e.timeStamp)
  }

  function replaceObject() {
    const newName = testObject.name === 'fred' ? 'billy' : 'fred';
    setTesObject({...testObject, name: newName});
  }

  return (
    <>
    <div className='content-container'>
    <div className='page-title'>useState</div>

      <p>Adds state variable to component</p>

      <p style={underlineStyle}>Basic Function Update</p>
      <p>useState Variable : {foo}</p>
      <button onClick={handleClick}>Change state to 'bar'</button>
      <br /><br /><br /><br />

      <p style={underlineStyle}>Event Handling Function Update</p>
      <p>Timestamp of click : {timestamp}</p>
      <button onClick={(e) => handleCount(e)}>Update Click TimeStamp</button>
      <br /><br /><br /><br />

      <p style={underlineStyle}>Never call function like this - will case 'too many rerenders error'</p>
      <p>onClick=&#123;handleClick()&#125;</p>

      <p style={underlineStyle}>Always replace(instead of replace) the state/ existing objects, especially with arrays and objects</p>
      <p>Object value : {testObject.name}</p>
      <button onClick={(e) => replaceObject()}>Update(by replacing) object</button>
      <br /><br /><br /><br />
      
    </div>
    </>
  
  )
}