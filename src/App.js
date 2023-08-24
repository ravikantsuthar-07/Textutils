
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container">
        <TextForm  heading="Enter The Text Analyze"/>
      </div>
    </>
  );
}

export default App;
