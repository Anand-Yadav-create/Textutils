
import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React,{useState} from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";



function App() {


  const [mode,setmode] = useState('light');

  // const removecolor=()=>{
  //   document.body.classList.remove('bg-success');
  // }

  const togglemode=()=>{

    // removecolor();
    if(mode==='dark'){
      setmode('light');
      document.body.style.backgroundColor='white';
    }else{
      setmode('dark');
      document.body.style.backgroundColor='grey';
      showalert("Dark Mode is ON","Success");
      // setInterval(()=>{
      //   document.title='Textutils is Amazing mode';
      // },2000);
      // setInterval(()=>{
      //   document.title='Install - Textutils Now';
      // },1500);
    }
    // document.body.classList.add('bg-success');
  }

  const [alert,setalert] = useState(null);

  const showalert=(message,type)=>{

    setalert({
      msg:message,
      ty:type
    })
    setTimeout(()=>{
      setalert(null);
    },1500);
  }
  return (
    <>
    <BrowserRouter>
    <Navbar titles="Textutils" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className="container my-2">
    
    <Routes>
        <Route path="/" element={<Textform heading="Word Counter,Character Counter,Remove Extra Spaces" mode={mode} showalert={showalert}/>} />
        <Route path="/about" element={<About mode={mode}/>} />
      </Routes>

{/* <Textform heading="Enter Text to analyze" mode={mode} showalert={showalert}/> */}
      
          
           
         
      {/* <About/> */}
    </div>
    </BrowserRouter>
    
    </>

    
  );
}

export default App;
