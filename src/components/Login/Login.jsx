import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function Login({onSubmitForm}) {
const [correo, setCorreo] = useState("")
const [password, setPasword] = useState("")
const[isDisable, setIsDisables] = useState(true)
const correoVal = 'xxff@goojle.cl';
const passwordVal = "claveparatrabajo";

const handlerOnSubmit =(e) =>{
e.preventDefault();
 if(correo === correoVal && password === passwordVal){
   return onSubmitForm(true);
 }
 return onSubmitForm (false);
   };

   const handlerInput =(e) =>{
    setPasword(e.target.value);
    console.log(correo.length,password.length)
    
    if(correo!== "" && password !== ""){
      setIsDisables (false);
    }
    
   }
  
   return (
    <form onSubmit={handlerOnSubmit}>
    <Form.Label>Email</Form.Label>
    <Form.Control 
    type="text" id="email"  onChange={(e)=>setCorreo(e.target.value)}/>
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" id="password" 
    onChange={(e)=> handlerInput(e)}
     />
      <Button type="submit" variant="outline-dark" disabled={isDisable}> Enviar</Button>
    
  </form>
);
}



export default Login;