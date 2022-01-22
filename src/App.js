import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddContact from './components/AddContact/AddContact';
import EditContact from './components/EditContact/EditContact';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <ToastContainer/>
            <Navbar></Navbar>
            <Routes>
                <Route exact path="/" element={<Home></Home>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/add" element={<AddContact></AddContact>}></Route>
                <Route path="/edit/:id" element={<EditContact></EditContact>}></Route>
                <Route path="*" element={<NotFound></NotFound>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
