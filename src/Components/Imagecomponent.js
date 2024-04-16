import React from 'react'
import Image from 'react-bootstrap/Image';
import '../App.css'
import Formcomponent from './Formcomponent';


export default function Imagecomponent() {
  return (
    <>
    
    <div className='bodydiv'><Image src="./Images/editednewimg.png" className='imgcomponent' />
    <div className='formcomponent'>
    <Formcomponent/>
        </div>
        </div>
      

    </>
  )
}
