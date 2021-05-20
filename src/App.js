import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Brands from './components/pages/Brands';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
import Privacy from './components/pages/Privacy';
/* import marcas */
import Zebra from './components/Brands/Zebra';
import Mitsubishi from './components/Brands/Mitsubishi';
import Colorplus from './components/Brands/Colorplus';
import Creality from './components/Brands/Creality';
/* import demos */
import Berry from './components/DemoBerry/Berry-dashboard';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/marcas' component={Brands}/>
          <Route path='/demos' component={Services}/>
          <Route path='/contacto' component={Contact}/>
          <Route path='/privacy' component={Privacy}/>
          {/* MARCAS */}
          <Route path='/zebra' component={Zebra}/>
          <Route path='/mitsubishi' component={Mitsubishi}/>
          <Route path='/colorplus' component={Colorplus}/>
          <Route path='/creality' component={Creality}/>
          {/* DEMOS */}
          <Route path='/dashboardExtrusora' component={Berry}/>
        </Switch>
      </Router>
        <Footer/>
    </>
  );
}

export default App;
