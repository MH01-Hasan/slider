
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Weather from '../Weather/Weather';

const Footer = () => {
  const [conutry, setCountry]= useState({});
  // const[value, setValue] = useState("")
  // console.log("hello",value)

  const { register, handleSubmit,reset} = useForm();
  
  
  const onSubmit = data =>{
    // setValue(data.conutry)
    fetch(`https://restcountries.com/v3.1/name/${data.conutry.toLowerCase()}`)
    .then(res => res.json())
    .then(result => setCountry(result))
    reset()
    };
  

  return (
    <div className='container mx-auto'>
         <h1>Searce Your Country  Name</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("conutry")} required/>
          <input type="submit" />
        </form>
      
        { conutry.length &&
              <div className='mt-5'>
                
            {
              conutry.map(result => (<Weather
             
                result={result}
              >

              </Weather>
              ))}
          </div>
        }
         
    </div>
  );
};

export default Footer;

