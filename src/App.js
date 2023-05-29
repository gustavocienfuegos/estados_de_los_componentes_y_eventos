import {useState} from "react";
import "./App.css";
import Alert from "./components/Alert/Alert";
import Login from'./components/Login/Login';

function App() {
const [isValid, setIsValid] =useState();
  const handlerSubmitResult= (e) =>{
  setIsValid(e);
  }
  return (
   <div className="App">
    <h1>Confirmación de Usuario</h1>
    <Login onSubmitForm={(e)=>handlerSubmitResult(e)}/>
    <Alert 
    text={isValid ? "Acceso Permitido" : "Usuario Incorrecto"} 
    variant={isValid ? 'success' : "danger"}
   
    /> 
   
    </div>
  );
}

export default App;
