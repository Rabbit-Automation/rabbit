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
          {/* DEMOS */}
          <Route path='/dashboardExtrusora' component={Berry}/>
        </Switch>
      </Router>
        <Footer/>
    </>
  );
}

export default App;
