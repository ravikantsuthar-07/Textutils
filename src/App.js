
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode is Enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is Enabled", "success");
    }
  }
  return (
    <>
      <BrowserRouter>

        <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>

              
            <Route exact path='/' element={<TextForm showAlert={showAlert} mode={Mode} heading="Enter The Text Analyze" />} />

            <Route exact path='/about' element={<About  mode={Mode} />} />

          </Routes>
        </div>

      </BrowserRouter>
    </>
  );
}

export default App;
