
import { useState } from 'react';
import './App.css';
// import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [Mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if (Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  // const [Alert, setAlert] = useState(null);
  // const showAlert = (message, type) =>{
  //   setAlert({
  //     msg: message,
  //     type: type
  //   });

  // }
  return (
    <>
      <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />
      <div className="container">
        <TextForm  mode={Mode} heading="Enter The Text Analyze"/>
        {/* <About /> */}
        {/* <Alert /> */}
      </div>
    </>
  );
}

export default App;
