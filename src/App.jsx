import React, { useState } from "react"; //memorizziamo i dati che lutente scrive nel form
import axios from "axios"; //axio (livvbreia http)
import "./App.css"; // stile esterno

// Vogliamo creare un form che prende i dati inseriti dall'utente e li invia a un server via POST

// Sapere cosa stai scrivendo nei campi del form

// Gestire cosa succede quando premi “Invia”

// Usare Axios per inviare tutto a un’API


function App() {
  // Stato iniziale per tutti i campi del form

  const [formData, setFormData] = useState({
    //Lo stato formData è un oggetto.Ogni chiave (author, title, ecc.) corrisponde a un campo del form.

    author: "",
    title: "",
    body: "",
    public: false,
  });

  // Funzione che aggiorna i campi del form mentre l’utente scrive
  //Ogni volta che scrivi in un campo, questa funzione viene chiamata automaticamente.E aggiorna lo stato formData con il scritto.

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;//e.target è il campo input che ha scatenato il cambiamento.
    //checked serve solo per i checkbox.
    // se è una checkbox usa 'checked', altrimenti usa 'value'
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value, //Se il campo è una checkbox, usa checked (vero o falso).Se invece è un campo di testo, usa value (una stringa).
    }));
  };

  // Funzione che invia i dati al server
  const handleSubmit = (e) => {
    e.preventDefault(); // evita il refresh

    axios
    //chiamata post con axios
      .post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData)
      .then((res) => {
        console.log("Post inviato:", res.data); //res.data contiene la risposta del server viene stampanto in console eun mesagio
        alert("Post inviato con successo!");
      })
      //se rileva un errore stampa un errore con alertr in modo sia visibi9le
      .catch((err) => {
        console.error("Errore:", err);
        alert("Errore nell’invio");
      });
  };

  // Scrivi in un campo: handleChange aggiorna formData

  // Premi "Invia": handleSubmit fa POST con formData

  // Se va bene: Mostra alert e stampa in console

  // Se va male: Mostra errore e lo stampa


  return (














    <>
      <div>

        <div className="form-container">
          <h1>crea un nuovo post</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="">
              Autore:
              <input type="text" 
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
               />
            </label>
          </form>
        </div>
 
      </div>
    
    </>
  )
}

export default App
