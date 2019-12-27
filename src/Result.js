import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'lodash';
import './styles/flexjs.css'
import { HashRouter   as Router,Route, Link} from 'react-router-dom';

export default class Result extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    
    render(){
        
        if(this.props.location.state.API > this.props.location.state.APP){
            return(<div style={{display:'flex',flexWrap:'wrap'}}>
                <ul style={{listStyleType:'none',paddingRight:'20%'}}> <li><h3>winner</h3> </li>
               <img src={this.props.location.state.AP} />
               <li>Score:{this.props.location.state.API}</li>
                 </ul>
                  <ul style={{listStyleType:'none'}}> <li><h3>loser</h3> </li>
               <img src={this.props.location.state.APA} />
               <li>Score:{this.props.location.state.APP}</li>
                 </ul>
            </div>)
        }
        else{
            return(<div style={{display:'flex',flexWrap:'wrap'}}>
                <ul style={{listStyleType:'none',paddingRight:'20%'}}><li> loser</li>
                <img src={this.props.location.state.AP}/>
            <li>Score:{this.props.location.state.API}</li></ul> 
            <ul style={{listStyleType:'none'}}> <li><h3>winner</h3> </li>
               <img src={this.props.location.state.APA} />
               <li>Score:{this.props.location.state.APP}</li>
                 </ul>
                 

         </div>)
        }
    }
}