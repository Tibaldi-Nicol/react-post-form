import { useState } from 'react'
import axios from "axios";
import './App.css'

function App() {
      //stato iniziale per i campi del form
      const[formData, setFormData]=useState({
        author: "",
        title: "",
        body: "",
        public: false,
      });

      //questa funzione aggiorna il form mentree lutente sta scrivendo
      const handleChange=(e)=>{
        const{name, value, type, checked}=e.value;
        // se è una checkbox usa 'checked', altrimenti usa 'value'
        setFormData((prev) => ({
          ...prev,
          [name]: type === "checkbox" ? checked : value,
        }));
      }


  return (














    <>
      <div>
 
      </div>
    
    </>
  )
}

export default App
