import './App.css';
import Home from './components/home';
import  Attendence from './components/attendence';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {

    
    return ( 
        
       
          <Router>
              
              <Switch>
                  <Route path="/home"><Home /></Route>
                  <Route path="/attendence"><Attendence /></Route>
              </Switch>

          </Router>

        // <Attendence />
    
       
    );
}

export default App;