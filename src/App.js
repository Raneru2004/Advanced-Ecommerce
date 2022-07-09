import {auth} from "./firebase/init.js" //when you use export const variable you use {} here
import { signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut, onAuthStateChanged } 
  from "firebase/auth";
import './App.css';
import React, { useState, useEffect } from 'react';
import Logo from './assets/Logo.png'

function App() {
  const [user, setUser]= React.useState({}); 
  const [loading, setLoading] =React.useState(true)

  

  React.useEffect(()=>{
    onAuthStateChanged(auth, (user) => {   // use this to stay loggedin even when page reloads and closes tab
      setLoading(false)
      if (user){
        setUser(user)
        
      }
    })


  }, []) // do this when you wanna run something when page first loads and pass in an emtpy []
   

  function Register(){
    createUserWithEmailAndPassword(auth, "email@email.com", "test01")
  .catch((error) =>{
    console.log(error)
  })

  }
  function Login(){
    
    signInWithEmailAndPassword(auth, "email@email.com", "test01")// this shows wrong password
      .catch((error) =>{
        console.log(error)
      })
    setLoading(true)  
    
     
  }
  
  function Logout(){
   
    signOut(auth)
    setUser(null); //remove user so set to an object 
    console.log(user)
    


  }

  

  return (
    <nav>
      <div className="container">
        <div className="nav__img--wrapper">
          <img src={Logo} alt="" className="nav__img" />
        </div>
        <div className="buttons"> 
        
         { loading ?  <><button className="skeleton__btn">Login</button> <button className="skeleton__btn">Register</button></> :
         !user ?  <><button onClick={Login}>Login</button> <button onClick={Register}>Register</button></>  
          : <> <button onClick={Logout} className=" Logged__in">{user.email[0].toUpperCase()}</button></>
          } 

          
          
        </div>
      </div>
    </nav>
  );
}

export default App;
