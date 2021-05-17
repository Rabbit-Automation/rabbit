import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/contacto' component={Contact}/>
        </Switch>
      </Router>
        <Footer/>
    </>
  );
}

export default App;
