import React,{useEffect, useState} from 'react'
import Image from 'react-bootstrap/Image'

export default function Bannercomponent() {

  const [audio] = useState(new Audio('./Audio/audio2.mp3'));

  useEffect(() => {
     
      audio.play();
  
      
      const audioTimer = setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
      }, 3000); 
  
      return () => clearTimeout(audioTimer);
    }, []); 
  return (
    <>

    <Image src="./Images/banner1.jpg" className='imgbanner'></Image>
    </>
  )
}
