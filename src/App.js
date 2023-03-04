import './App.css';
import NotesList from './components/NotesList';
import React from 'react';
import NotFound from './components/NotFound';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';


function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
    <div>
    <Routes>
    <Route path="/" element={<NotesList />}></Route>
    <Route path="*" element={<NotFound />}></Route>
    </Routes>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
