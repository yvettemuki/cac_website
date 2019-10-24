import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Page1 from './Page1';

 
class App extends React.Component {
	render(){
		return(
      <Router>
          <Route path="/" exact component={Home} />
          <Route path="/Page1" exact component={Page1} />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
      </Router>
		)
 
		}
	}

export default App;
