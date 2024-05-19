import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import New from './pages/new/New';
import Single from './pages/single/Single';
import List from './pages/list/List';
import { useState } from 'react';

function App() {
  const [isDarkMode,setIsDarkMode]= useState(false)
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? 'darkmode' : 'lightmode'}`}>
     <Routes>
      <Route path='/'>
        <Route index element={<Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="login" element={<Login/>}/>
        <Route path="users">
          <Route index element={<List isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
          <Route path=':userId' element={<Single/>}/>
          <Route path='new' element={<New/>}/>
        </Route> 
        <Route path="products">
          <Route index element={<List/>} />
          <Route path=':productId' element={<Single/>}/>
          <Route path='new' element={<New/>}/>
        </Route> 
      </Route>
     </Routes>
    </div>
  )
}

export default App
