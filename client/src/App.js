import React, { useState } from 'react';
import axios from 'axios';
import "./hogwartsletter.css";


function App() {
  const [userName, setUserName] = useState('');

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };

  const generatePdf = () => {
    axios.get('http://localhost:8080/pdf?name='+userName,
    {
        responseType: 'arraybuffer',
        headers: {
            'Accept': 'application/pdf'
        }
    })
    .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${userName}.pdf`); //or any other extension
        document.body.appendChild(link);
        link.click();
    })
    .catch((error) => console.log(error));
  };

  return (
    <div class="card">
    <div class="App">
      <label>
        Enter your name:
        <input type="text" value={userName} onChange={handleNameChange} maxLength={20} />
      </label>
      <button onClick={generatePdf}>Generate PDF</button>
    </div>
  </div>
  );
}

export default App;
