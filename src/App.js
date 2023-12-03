import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React ,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {

  const [mode,setMode] = useState("light");
  const toggleMode = () =>{
    if(mode === "light"){
      console.log(" i am on light mode");
      setMode("dark");
      document.body.style.backgroundColor = 'grey';
      setAlert({msg:"Dark mode is enable Enjoy",type: "success"})
      document.title = "Text-Utils Dark Mode"
    }
    else{
      console.log(" i am on dark mode");
      setMode("light");
      // document.body.style.backgroundColor = 'light'; 
      document.body.style.backgroundColor = 'white';
      setAlert({msg:"Light mode is enable Enjoy",type: "success"})
      document.title = "Text-Utils Light Mode"
    }
  }
  
  const [alert,setAlert] = useState(null);

  const shouwAlertFun = (message,type)=>{
    setAlert(
      {
        msg:message,
        type:type
      }
    )
  }
  
  return (
  <>
      <Router>

      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/> 
      
      <Routes>

      <Route  path='/' element={<TextForm mode={mode}/>} />
      <Route path='/about' element={<About/>} />
  

      </Routes>
       

      </Router>
  
  </>
    
  );
}

export default App;
