import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './online-Example/Home';
import Contact from './online-Example/Contact';
import About from './online-Example/About';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <h2 class="h-6 w-6 border-solid border-2 border-indigo-600">Welcome to React Router Tutorial</h2>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <ul class="navbar-nav mr-auto list-none">
            <li class="h-6 w-6 border-solid border-2 border-indigo-600 "><Link to={'/'} class="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} class="nav-link">Contact</Link></li>
            <li><Link to={'/about'} class="nav-link">About</Link></li>
          </ul>
          </nav>
          <hr />
          <Routes class="h-60 w-60 border-solid border-2 border-indigo-600">
              <Route path='/' element={<Home/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path='/about' element={<About/>} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;



// import React, { useEffect, useState } from 'react';
// import Navbar from './modules/components/Navbar';
// import './App.css';
// import Footer from './modules/components/Footer';
// import Menu from './modules/components/Menu';
// import { Outlet } from 'react-router-dom';


// function App() {
//   return (
//     <section>
//       {/* Navbar section */}
//       <Navbar/>
//       <Outlet />
//       <Footer/>
//     </section>
//   );
// }

// export default App;
