import React from 'react';
import {
  Route,
  //BrowserRouter as Router,
  Switch, useLocation
} from "react-router-dom";
// import {AnimatedSwitch} from 'react-router-transition';
import Home from './pages/Home';
// import HomeV2 from './pages/HomeV2';
// import About from './pages/about'
import About2 from './pages/about2'
// import Player from './components/Player';
import './App.css';
import mainpage from './pages/mainpage';
import Map from './pages/mapbox'
import Navbar from './components/Navbar';
import PlayerNoSelect from './components/PlayerNoSelect'
import PlayerAngelsRest from './components/PlayerAngelsRest'
import PlayerSilverthorne from './components/PlayerSilverthorne'
import PlayerCashier from './components/PlayerCashier'
import PlayerBriarRose from './components/PlayerBriarRose'
import PlayerFreeway from './components/PlayerFreeway'
import PlayerColumbine from './components/PlayerColumbine'
import PlayerClaimjumper from './components/PlayerClaimjumper'
import PlayerPioneer from './components/PlayerPioneer'
import PlayerPeerless from './components/PlayerPeerless'
import PlayerReverie from './components/PlayerReverie'
import PlayerFouroclock from './components/PlayerFouroclock'
import PlayerCrosscut from './components/PlayerCrosscut'
import PlayerLowerSawmill from './components/PlayerLowerSawmill'
import PlayerGoldking from './components/PlayerGoldking'
import { AnimatePresence } from 'framer-motion';
// import {mapStyles,bounce,bounceTransition} from './components/AppTransitions';

function App() {
  const location = useLocation()
  return (
    <div>
      <Navbar/>
      <AnimatePresence exitBeforeEnter initial={false}>
      {/* <AnimatedSwitch 
      atEnter={bounceTransition.atEnter}
      atLeave={bounceTransition.atLeave}
      atActive={bounceTransition.atActive}
      mapStyles={mapStyles}
      className="route-wrapper"> */}
      <Switch location={location} key={location.pathname}> 
        <Route exact path="/"><Home/></Route>
        {/* <Route path="/player/:id" component={Player}></Route> */}
        <Route path="/about"> <About2/> </Route>
        <Route path='/mainpage' component={mainpage}></Route>
        <Route path='/map'> <Map/> </Route>
        <Route path='/Reverie*' component={PlayerReverie}></Route>
        <Route path='/Barton Breezeway*' component={PlayerNoSelect}></Route>
        <Route path='/Lost Horizon' component={PlayerNoSelect}></Route>
        <Route path='/AngelsRest*' component={PlayerAngelsRest}></Route>
        <Route path='/Pioneer*' component={PlayerPioneer}></Route>
        <Route path='/Claimjumper*' component={PlayerClaimjumper}></Route>
        <Route path='/Columbine*' component={PlayerColumbine}></Route>
        <Route path='/4 oclock*' component={PlayerFouroclock}></Route>
        <Route path='/Freeway*' component={PlayerFreeway}></Route>
        <Route path='/Lower 4oclock*' component={PlayerFouroclock}></Route>
        <Route path='/Crosscut*' component={PlayerCrosscut}></Route>
        <Route path='/Sawmill*' component={PlayerLowerSawmill}></Route>
        <Route path='/Silverthorne*' component={PlayerSilverthorne}></Route>
        <Route path='/Lower Sawmill*' component={PlayerLowerSawmill}></Route>
        <Route path='/Eldorado*' component={PlayerNoSelect}></Route>
        <Route path='/Red Rover*' component={PlayerNoSelect}></Route>
        <Route path='/Frontier*' component={PlayerNoSelect}></Route>
        <Route path='/Peerless*' component={PlayerPeerless}></Route>
        <Route path='/Gold King*' component={PlayerGoldking}></Route>
        <Route path='/Country Boy*' component={PlayerNoSelect}></Route>
        <Route path='/Upper Lehman*' component={PlayerNoSelect}></Route>
        <Route path='/Lower Lehman*' component={PlayerNoSelect}></Route>
        <Route path='/Sizzler*' component={PlayerNoSelect}></Route>
        <Route path='/Cashier*' component={PlayerCashier}></Route>
        <Route path='/Briar Rose*' component={PlayerBriarRose}></Route>
        <Route path='/Bonanza*' component={PlayerNoSelect}></Route>
      
      </Switch>
      {/* </AnimatedSwitch> */}
    </AnimatePresence>
    </div>
  );
}

export default App;
