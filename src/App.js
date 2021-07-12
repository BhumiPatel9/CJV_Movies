import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React from 'react';
//import moviesDisplay from './components/moviesDisplay';
//import moviesData from './data/movies.json'
//import tvshowsData from './data/tvshows.json'
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';
import Footer from './components/Footer'
import Main from './components/Main'
import Movies from './components/Movies'
import Description from './components/Description'
//import Login from './components/Login';
//import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';



const App = () => {
  return (
    <Router ><div className='container-fluid movie-app'>
            
      <NavBar />
      <Carousel/>
      
      <Switch>
     
      <Route path="/movies" exact>
          <Movies />
        </Route>     
    

        <Route path="/">
          <Main />
        </Route> 
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
