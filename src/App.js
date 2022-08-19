//import logo from './logo.svg';
import React,{ useState } from 'react';
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar  from './Components/Navbar';
import TextForm from './Components/TextForm';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 


function App() {

  const [Mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  let toggleMode=()=>{
      if(Mode==='light'){
        setMode('dark')
        document.body.style.backgroundColor='#434a50'
        showAlert('Dark Mode is Enabled','success')
      }
      else{
        setMode('light')
        document.body.style.backgroundColor='white'
        showAlert('Dark Mode is Enabled','success')
      }
}
  return (
  <>
  <Router>
 <Navbar title="Text Analysis"  mode={Mode}  toggleMode={toggleMode} aboutText="About Us"/> 
<Alert alert={alert}/>
{/*
<div className="container my-5">
  <TextForm heading="Enter Demo Text" mode={Mode}  showAlert={showAlert}/> */}
 <Routes>
          <Route exact path="/About" element={<About/>} />
          <Route exact path="/" element={<TextForm heading="Enter Demo Text" mode={Mode} showAlert={showAlert} />} />
        </Routes>
  {/* <About/> */}

</Router>
  </>

  );
}

export default App;
