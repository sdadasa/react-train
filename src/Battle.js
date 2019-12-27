import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'lodash';
import './styles/flexjs.css'
import { HashRouter   as Router,Route, Link} from 'react-router-dom';
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={zhandou:[]}
    }
    
    render(){
        const list=<div>
        <ul style={{display:'flex',flexWrap:'wrap'}}>
            <li style={{textDecoration:'none',padding:'10px',margin:'10px',listStyle:'none',}}><a href={"./index.html"}  onClick={this.clickColor}>Popular</a></li>
            <li style={{textDecoration:'none',padding:'10px',margin:'10px',listStyle:'none',}}> <a href="#"  onClick={this.clickColor}>Battle</a></li>
        </ul>
        <h1 style={{textAlign:'center'}}>Instructions</h1>
        <div style={{margin:'100px',display:'flex',flexWrap:'wrap',maxWidth:'1200px'}}>
            <ul style={{margin:'0',display:'flex',flexWrap:'wrap',width:'100%',paddingLeft:'0'}}>
                <li style={{width:'25%',marginLeft:'0',listStyle:'none',paddingRight:'6%'}}>
                    <h3 style={{textAlign:'center'}}>Enter two Github users</h3>
                    <svg t="1574235280261" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1144" width="200" height="200"><path d="M438.272 603.648c-132.608 0-240.64-108.032-240.64-240.64s108.032-240.64 240.64-240.64 240.64 108.032 240.64 240.64-108.032 240.64-240.64 240.64z m0-419.84c-98.816 0-179.2 80.384-179.2 179.2s80.384 179.2 179.2 179.2 179.2-80.384 179.2-179.2-80.384-179.2-179.2-179.2z" p-id="1145"></path><path d="M832.512 955.904h-30.72c-257.536-1.536-361.984 0-363.008 0H44.032v-30.72c0-209.408 165.888-361.984 394.24-361.984s394.24 152.064 394.24 361.984v30.72z m-725.504-61.44h331.264c0.512 0 96.256-1.536 331.264 0-15.36-157.696-150.016-269.312-331.264-269.312-181.248-0.512-315.904 111.104-331.264 269.312zM715.776 538.112l-35.84-49.664C732.16 450.56 762.88 390.144 762.88 326.144c0-97.792-72.704-182.272-168.96-196.608l9.216-60.928c126.464 18.944 221.184 129.536 221.184 257.536 0 83.968-40.448 162.816-108.544 211.968z" p-id="1146"></path><path d="M964.096 882.176l-58.368-19.456c8.192-24.576 12.288-50.176 12.288-76.288 0-131.072-107.008-238.08-238.08-238.08V486.4c165.376 0 299.52 134.144 299.52 299.52 0.512 32.768-5.12 65.024-15.36 96.256z" p-id="1147"></path><path d="M964.096 881.664h-67.072l9.216-20.48h57.856zM603.136 129.536H593.92v-61.44l9.216 0.512z" p-id="1148"></path></svg>
                </li>
                <li style={{width:'25%',marginLeft:'0',listStyle:'none',paddingRight:'6%'}}>
                   <h3 style={{textAlign:'center'}}>Battle</h3>
                   <svg t="1574235280261" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1144" width="200" height="200"><path d="M438.272 603.648c-132.608 0-240.64-108.032-240.64-240.64s108.032-240.64 240.64-240.64 240.64 108.032 240.64 240.64-108.032 240.64-240.64 240.64z m0-419.84c-98.816 0-179.2 80.384-179.2 179.2s80.384 179.2 179.2 179.2 179.2-80.384 179.2-179.2-80.384-179.2-179.2-179.2z" p-id="1145"></path><path d="M832.512 955.904h-30.72c-257.536-1.536-361.984 0-363.008 0H44.032v-30.72c0-209.408 165.888-361.984 394.24-361.984s394.24 152.064 394.24 361.984v30.72z m-725.504-61.44h331.264c0.512 0 96.256-1.536 331.264 0-15.36-157.696-150.016-269.312-331.264-269.312-181.248-0.512-315.904 111.104-331.264 269.312zM715.776 538.112l-35.84-49.664C732.16 450.56 762.88 390.144 762.88 326.144c0-97.792-72.704-182.272-168.96-196.608l9.216-60.928c126.464 18.944 221.184 129.536 221.184 257.536 0 83.968-40.448 162.816-108.544 211.968z" p-id="1146"></path><path d="M964.096 882.176l-58.368-19.456c8.192-24.576 12.288-50.176 12.288-76.288 0-131.072-107.008-238.08-238.08-238.08V486.4c165.376 0 299.52 134.144 299.52 299.52 0.512 32.768-5.12 65.024-15.36 96.256z" p-id="1147"></path><path d="M964.096 881.664h-67.072l9.216-20.48h57.856zM603.136 129.536H593.92v-61.44l9.216 0.512z" p-id="1148"></path></svg>
                </li>
                <li style={{width:'25%',marginLeft:'0',listStyle:'none'}}>
                   <h3 style={{textAlign:'center'}}>See the winner</h3>
                   <svg t="1574235280261" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1144" width="200" height="200"><path d="M438.272 603.648c-132.608 0-240.64-108.032-240.64-240.64s108.032-240.64 240.64-240.64 240.64 108.032 240.64 240.64-108.032 240.64-240.64 240.64z m0-419.84c-98.816 0-179.2 80.384-179.2 179.2s80.384 179.2 179.2 179.2 179.2-80.384 179.2-179.2-80.384-179.2-179.2-179.2z" p-id="1145"></path><path d="M832.512 955.904h-30.72c-257.536-1.536-361.984 0-363.008 0H44.032v-30.72c0-209.408 165.888-361.984 394.24-361.984s394.24 152.064 394.24 361.984v30.72z m-725.504-61.44h331.264c0.512 0 96.256-1.536 331.264 0-15.36-157.696-150.016-269.312-331.264-269.312-181.248-0.512-315.904 111.104-331.264 269.312zM715.776 538.112l-35.84-49.664C732.16 450.56 762.88 390.144 762.88 326.144c0-97.792-72.704-182.272-168.96-196.608l9.216-60.928c126.464 18.944 221.184 129.536 221.184 257.536 0 83.968-40.448 162.816-108.544 211.968z" p-id="1146"></path><path d="M964.096 882.176l-58.368-19.456c8.192-24.576 12.288-50.176 12.288-76.288 0-131.072-107.008-238.08-238.08-238.08V486.4c165.376 0 299.52 134.144 299.52 299.52 0.512 32.768-5.12 65.024-15.36 96.256z" p-id="1147"></path><path d="M964.096 881.664h-67.072l9.216-20.48h57.856zM603.136 129.536H593.92v-61.44l9.216 0.512z" p-id="1148"></path></svg>
                </li>
            </ul>
        </div>
    </div>
    return(<div >
        {list}
    </div>
    )
}
}
class Bisai extends React.Component{
    constructor(props){
        super(props);
        this.state={username:'',
        avatar_url:'',
        html_url:'',
        click:true,
        score:0
   }
    }
    submitThing = event => {
        const username = event.target.value;
        this.setState({username});
    }
    userName = event => {
        const username = event.target.value;
        this.setState({username});
    }
    huoqu=(event)=>{
        const {username}=this.state
        const url='https://api.github.com/search/users?q='+username
        const{clickHuoqu1}=this.props
        const {srcHuoqu1}=this.props
        axios.get(url)
        .then(Response =>{
            const {avatar_url,html_url,score}=Response.data.items[0];
            this.setState({click:false,
                avatar_url,
                html_url,
                score

            });
               console.log(this.state.score)
               clickHuoqu1(this.state.score);
               srcHuoqu1(this.state.avatar_url);
            })
            event.preventDefault();
    }
    
    onClick=()=>{
        this.setState({click:true})
    }
   
    render(){
        
        const style = {
            h1:{marginTop:'50px',textAlign:'center',fontWeight:'300'},
            form: {display: 'flex',listStyle: 'none',padding:'0 50px 0 50px',margin: '0 auto', textAlign: 'center'},
            input1:{padding:'5px 15px 5px 15px',margin:'5px',background:'rgba(0,0,0,0.02)'},
            input2:{padding:'5px 15px 5px 15px',margin:'5px',background:'#e8e8e8',color:'#8c8c8c'},
            img:{width:'50px',height:'50px',},
            a:{padding:'0 150px 0 20px',lineHeight:'50px',textDecoration:'none',color:'#a8071a',fontSize:'25px'},
            div:{display:'flex',justifyContent: 'space-around',flexWrap: 'nowrap',background:'#e8e8e8',margin:'0 0 0 70px',},
            button:{border:'0',padding:'0 10px 0 10px',background:'#e8e8e8',color:'#f5222d',fontSize:'30px'}
        }
        if(this.state.click){
       return( <div>
            <form style={style.form} onSubmit={this.huoqu} >
            <input style={style.input1}  type="text" placeholder="github username" value={this.state.username} onChange={this.submitThing} />
            <input style={style.input2} type="submit"   value="sumbmit"/>
           
            </form>
           
            
        </div>
       )}
       else{
           return(<div style={style.div}>
                  <img style={style.img} src={this.state.avatar_url}/>
                  <a href={this.state.html_url} style={style.a} >{this.state.username}</a>
                    <button style={style.button} onClick={this.onClick}>X</button>
               </div>
           )
       }
        
    }
};
class Bisai2 extends React.Component{
    constructor(props){
        super(props);
        this.state={username:'',
        avatar_url:'',
        html_url:'',
        click:true,
        score:0
                  }
    }
    submitThing = event => {
        const username = event.target.value;
        this.setState({username});
    }
    userName = event => {
        const username = event.target.value;
        this.setState({username});
    }
    huoqu=(event)=>{
        const {username}=this.state
        const url='https://api.github.com/search/users?q='+username
        const {clickHuoqu}=this.props
        const {srcHuoqu}=this.props
        axios.get(url)
        .then(Response =>{
            const {avatar_url,html_url,score}=Response.data.items[0];
            this.setState({click:false,
                avatar_url,
                html_url,
                score
                
            }
            );
            console.log(this.state.score);
            clickHuoqu(this.state.score);
             srcHuoqu(this.state.avatar_url);

            })
            event.preventDefault();
    }
    onClick=()=>{
        this.setState({click:true})
    }
   
    render(){
        
        const style = {
            h1:{marginTop:'50px',textAlign:'center',fontWeight:'300'},
            form: {display: 'flex',listStyle: 'none',padding:'0 50px 0 40%',margin: '0 auto', textAlign: 'center'},
            input1:{padding:'5px 15px 5px 15px',margin:'5px',background:'rgba(0,0,0,0.02)'},
            input2:{padding:'5px 15px 5px 15px',margin:'5px',background:'#e8e8e8',color:'#8c8c8c'},
            img:{width:'50px',height:'50px',},
            a:{padding:'0 150px 0 20px',lineHeight:'50px',textDecoration:'none',color:'#a8071a',fontSize:'25px'},
            div:{display:'flex',justifyContent: 'space-around',flexWrap: 'nowrap',background:'#e8e8e8',margin:'0 0 0 70px',},
            button:{border:'0',padding:'0 10px 0 10px',background:'#e8e8e8',color:'#f5222d',fontSize:'30px'}
        }
        if(this.state.click){
       return( <div>
            <form style={style.form} onSubmit={this.huoqu}  >
            <input style={style.input1}  type="text" placeholder="github username" value={this.state.username} onChange={this.userName} />
            <input style={style.input2} type="submit"  value="sumbmit"/>
            </form>
        </div>
       )}
       else{
           return(<div style={style.div}>
                  <img style={style.img} src={this.state.avatar_url}/>
                  <a href={this.state.html_url} style={style.a} >{this.state.username}</a>
                    <button style={style.button} onClick={this.onClick}>X</button>
               </div>
           )
       }
        
    }
};
class Battle1 extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    yanShii=()=>{
        this.props.yanShi();
    }
    render(){
        const path={pathname:'/Battle/result',state:{API:this.props.API,APP:this.props.APP,AP:this.props.AP,APP:this.props.APP}}
    return(<div>
       <button onClick={this.yanShii} ><Link to={{pathname:'/Battle/result',state:{API:this.props.API,APP:this.props.APP,AP:this.props.AP,APA:this.props.APA}}}>Battle</Link></button>
    </div>
 
        )
    }
}
 
export default class Battle extends React.Component{
    constructor(props){
        super(props);
        this.state={clicka:false,
                res:0,
                resp:0,
                re:'',
                APA:''
        };
    }
    yanShi=()=>{
        this.setState({clicka:true});
    }
    clickHuoqu=(API)=>{
        this.setState({res:API})
    };
    clickHuoqu1=(APP)=>{
        this.setState({resp:APP})
    };
    srcHuoqu=(AP)=>{
        this.setState({re:AP})
    }
    srcHuoqu1=(APA)=>{
        this.setState({rs:APA})
    }
   
    render(){
         return(<div className='juzhon'>
        <Header />
    <div style={{display:'flex',justifyContent:'spacea-round'}}>
        <Bisai clickHuoqu1={this.clickHuoqu1.bind(this)} srcHuoqu1={this.srcHuoqu1.bind(this)} />
        <Bisai2 clickHuoqu={this.clickHuoqu.bind(this)} srcHuoqu={this.srcHuoqu.bind(this)}/></div>
    <Battle1 yanShi={this.yanShi.bind(this)} API={this.state.res}  APP={this.state.resp } AP={this.state.re} APA={this.state.rs}/>
    </div>)
    }

}

 