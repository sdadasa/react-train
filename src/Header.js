import Nac from './Nac'
import React from 'react';
import Content from './Content';
import { HashRouter   as Router,Route, Link} from 'react-router-dom';
export default class Header extends React.Component{
   constructor(props){
        super(props);
        this.state={resp:'https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories'};
    }
    
   
    render(){
      
    return(<div style={{maxWidth:'1200px'}}>
        <ul style={{display:'flex',flexDirection:'row'}}>
            <li style={{padding:'1%',margin:'1%',listStyle:'none'}}><Link to='/'>Popular</Link></li>
            <li style={{padding:'1%',margin:'1%',listStyle:'none'}}><Link to='/Battle'> Battle</Link></li>
        </ul>
        <Nac  />
    
    </div>)
}
}
// const Header=()=>{
//     return(<div style={{maxWidth:'1200px',margin:'0'}}>
        
//        <ul style={{display:'flex',flexDirection:'row'}}>
//            <li style={{padding:'1%',margin:'1%',listStyle:'none'}}><Link to='/123'>Popular</Link></li>
//            <li style={{padding:'1%',margin:'1%',listStyle:'none'}}> Battle</li>
//        </ul>
//       <Nac />
//       <Content />

//     </div>)
// }
