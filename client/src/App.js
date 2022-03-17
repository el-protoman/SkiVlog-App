import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Home from './pages/Home';
import Player from './components/Player';
import './App.css';
import mainpage from './pages/mainpage';
import Map from './pages/mapbox'
//import skiMap from './pages/map';
import Navbar from './components/Navbar';
import PlayerNoSelect from './components/PlayerNoSelect'
import PlayerSilverthorne from './components/PlayerSilverthorne'


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/player/:id" component={Player}></Route>
        <Route path='/mainpage' component={mainpage}></Route>
        <Route path='/map'> <Map/> </Route>
        <Route path='/Silverthorne*' component={PlayerSilverthorne}></Route>
        <Route path='/Lower Sawmill*' component={PlayerNoSelect}></Route>
        <Route path='/Eldorado*' component={PlayerNoSelect}></Route>
        <Route path='/Red Rover*' component={PlayerNoSelect}></Route>
        <Route path='/Frontier*' component={PlayerNoSelect}></Route>
        <Route path='/Peerless*' component={PlayerNoSelect}></Route>
        <Route path='/Gold King*' component={PlayerNoSelect}></Route>
        <Route path='/Country Boy*' component={PlayerNoSelect}></Route>
        <Route path='/Upper Lehman*' component={PlayerNoSelect}></Route>
        <Route path='/Lower Lehman*' component={PlayerNoSelect}></Route>
        <Route path='/Sizzler*' component={PlayerNoSelect}></Route>
        <Route path='/Cashier*' component={PlayerNoSelect}></Route>
        <Route path='/Briar Rose*' component={PlayerNoSelect}></Route>
        <Route path='/Bonanza*' component={PlayerNoSelect}></Route>
        {/* <Route path='/map' component={skiMap}></Route> */}
      </Switch>
    </Router>
  );
}

export default App;
