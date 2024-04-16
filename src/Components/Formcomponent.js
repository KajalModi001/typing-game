import React, { useState , useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form';
import '../App.css'
import { useNavigate } from 'react-router-dom';
import Loadingcomponent from './Loadingcomponent';

export default function Formcomponent() {
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState({
        name: ''
      });
 
      const handleChange = (e) => {

        const { name, value } = e.target;
        setUserData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };


     
    const navigate = useNavigate();

 
  
  

  const handleSubmit = (e) => {  
    e.preventDefault();
    setLoading(true);

    // Simulate loading delay
    setTimeout(() => {
      setLoading(false);
      navigate('/typing');
    }, 7000);
 
   
      // localStorage.setItem('name'name)
    localStorage.setItem('userData', JSON.stringify(userData));

};
  return (
    <>
  {/* <Image src="./Images/formimg.jpg" className="formimage"></Image> */}

  
  <form className="maindivform" onSubmit={handleSubmit}>


    <h1 className='formcontent'>Welcome!</h1>

    <Form.Label className='formname'>Name</Form.Label>
    <input type="text" placeholder="Enter Name" name="name" className='textbox' value={userData.name} onChange={handleChange} required/>


    <Button type="submit" className='btnform'>Submit</Button>
  

  </form>
  

  <div className='loadingdiv'>{ loading && <Loadingcomponent/>}</div>

 

        {/* <Form onSubmit={handleSubmit}> 
     
        
       
        

      <button className="button-78" type='submit'>Submit</button>
        
    </Form>
<div className='loadingdiv'>{ loading && <Loadingcomponent/>}</div> */}
    
    </>
  )
}
