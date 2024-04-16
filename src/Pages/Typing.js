import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'
import './Typing.css'


export default function Typing() {
  const [inputText, setInputText] = useState('');
  const [errorPositions, setErrorPositions] = useState([]);
  const [timeRemaining, setTimeRemaining] = useState(30); 
  const [timerExpired, setTimerExpired] = useState(false);
  const [showSubmit, setShowSubmit] = useState(true);
  const [paragraph, setParagraph] = useState('This is a typing game.');

  const [userData, setUserData] = useState(null);


  useEffect(() => {


    const storedData = localStorage.getItem('userData');
    if (storedData) {
        setUserData(JSON.parse(storedData));
        localStorage.removeItem('userData'); }



    const timer = setTimeout(() => {
      if (timeRemaining > 0) {
        setTimeRemaining(time => time - 1);
      } else {
        setTimerExpired(true);
        setShowSubmit(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Your time is finish"
        });
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeRemaining]);

  

  const handleInputChange = (e) => {
    if (!timerExpired) {
      const { value } = e.target;
      setInputText(value);
      setErrorPositions(calculateErrors(value));
    }
  };

  const calculateErrors = (value) => {
    const errors = [];
    for (let i = 0; i < value.length; i++) {
      if (value[i] !== paragraph[i]) {
        errors.push({ position: i, letter: paragraph[i] });
      }
    }
    return errors;
  };

  const handleSubmit = () => {
    const errorTexts = errorPositions.map(error => `${error.letter} at position ${error.position + 1}`);

    Swal.fire(`Errors: ${errorTexts.join(', ')}`);
  };

  return (
    <div className='fullbody'>
         {userData &&  <p className='getname'> Hello {userData.name} !</p>}
      {/* <h1 className='titletyping'>Typing Game</h1> */}
      <p className='paragraph'>You have to write this paragraph: <br></br>{paragraph}</p>
      <textarea value={inputText} onChange={handleInputChange} disabled={timerExpired} className='textarea'placeholder='write here'/>
      <div className='paragraph'>Time Remaining: {timeRemaining} seconds</div>
      <div className='errorcount'>Error Count: {errorPositions.length}</div>
      <Button onClick={handleSubmit} variant="secondary" className='buttonstyle'>Submit</Button>

     
    </div>
  );
};


