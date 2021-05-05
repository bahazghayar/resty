import React from 'react' ; 

import HelpHandler from '../help/Help.js';
import Home from '../home/Home.js';
import HistoryDetails from '../historyDetails/HistoryDetails.js';



import {Route , Switch} from 'react-router-dom' ;

const MainHandler = () =>{
   return (
     <>
       <Switch>
             <Route exact path="/" component={Home} />
             <Route path="/help" component={HelpHandler} />
             <Route path="/history" component={HistoryDetails} />
       </Switch>
     </>


   )

}

export default MainHandler ;