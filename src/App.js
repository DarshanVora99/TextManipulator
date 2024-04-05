import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if(mode === "light"){
       console.log(" i am on light mode"); 
       setMode("dark"); 
       document.body.style.backgroundColor = '#121212'; 
       setAlert({msg:"Dark mode is enable Enjoy",type: "success"}) 
       document.title = "Text-Utils Dark Mode" }
    
    else{ console.log(" i am on dark mode"); 
    setMode("light"); 
    // document.body.style.backgroundColor = 'light';
     document.body.style.backgroundColor = 'white'; 
     setAlert({msg:"Light mode is enable Enjoy",type: "success"}) 
     document.title = "Text-Utils Light Mode" }
  }

  const [alert, setAlert] = useState(null);

  const showAlertFun = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <TextForm mode={mode} showAlertFun={showAlertFun} />
    </>
  );
}

export default App;
