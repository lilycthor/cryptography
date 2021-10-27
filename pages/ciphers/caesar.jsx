import { useState } from 'react';
import axios from 'axios';
export default function Caesar() {

const [shift, updateShift] = useState(0);
const [phrase, updatePhrase] = useState('');
const [encodedResponse, updateEncodedResponse] = useState('');

const encode = async (phraseToEncode, shiftToUse) => {
  const { data } = await axios.post('/api/cipher/caesar',  
    { 
      phrase:phraseToEncode,
      shift: parseInt(shiftToUse, 10)
    }
  )
  updateEncodedResponse(data.encodedResponse)
}

  return (
    <div className={`pageBody`}>
      <h1>Caesar Cipher</h1>
      <label htmlFor='phrase'>phrase:</label>
      <input onChange={ev => {
        updatePhrase(ev.target.value)
        encode(ev.target.value, shift)
      }}type='text' id='phrase' />
      <label htmlFor='shift'>shift:</label>
      <input onChange={ev => {
        if(ev.target.value>= 0){
        updateShift(ev.target.value)
        encode(phrase, ev.target.value)
        }
      }} type='number' value={shift}id='shift' />
      <p> {encodedResponse} </p>
    </div>
  );
}