import React  from 'react';
import Battle from './Battle'
import Result from './Result'
import Header from './Header';
import result from './Battle'
import {HashRouter as Router,Route, } from 'react-router-dom';
const App = () => (
    // constructor(props){
    //     super(props);
    //     this.state={resp:'https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories'};
    // }
    // clickThing=(API) =>{
    //    this.setState({resp:API})
    // }
  
        <Router>
        <div>
                
                <Route exact  path="/" component={Header} /> 
                <Route exact path="/Battle" component={Battle}/>
                <Route exact path="/Battle/result" component={Result}/>
                
           
        </div>
        </Router>
    
)
export default App