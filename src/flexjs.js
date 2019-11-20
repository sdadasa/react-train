import "@babel/polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'lodash';
import styles from './flexjs.module.css';
import './styles/flexjs.css'
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={newcolor:''}
    }
    clickColor=()=>{
        this.setState({newcolor:'red'})
    }
    render(){
        const {newcolor}=this.state;
    return(<div style={{maxWidth:'1200px',margin:'0'}}>
        <ul style={{display:'flex',flexDirection:'row'}}>
            <li style={{padding:'1%',margin:'1%',listStyle:'none',color:newcolor}}><a href=""  onClick={this.clickColor}>Popular</a></li>
            <li style={{padding:'1%',margin:'1%',listStyle:'none',color:newcolor}}> <a href={'./Battle.html'}  onClick={this.clickColor}>Battle</a></li>
        </ul>
    </div>)
}
}

class Nac extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    } 
    clickHanppen=(API) =>{ 
        this.props.clickThing(API);
 }
    render(){
        const All = "https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories";
        const Javascript = "https://api.github.com/search/repositories?q=stars:%3E1+language:javascript&sort=stars&order=desc&type=Repositories";
        const Ruby = "https://api.github.com/search/repositories?q=stars:%3E1+language:ruby&sort=stars&order=desc&type=Repositories";
        const Java = "https://api.github.com/search/repositories?q=stars:%3E1+language:java&sort=stars&order=desc&type=Repositories";
        const CSS = "https://api.github.com/search/repositories?q=stars:%3E1+language:css&sort=stars&order=desc&type=Repositories"; 
        return( 
                
        <div style={ {display: 'flex', flexDirection: 'row',justifyContent: 'space-around', maxWidth: '100%', margin: '0 auto', padding: '1%', fontSize: '18px', fontWeight: 'bold'}}>
            <ul style={{display: 'flex', flexDirection: 'row', listStyle: 'none', padding: '0px'}}>
            <li style={{padding:'1%',margin:'1%',listStyle:'none'}}><a href="#" onClick={this.clickHanppen.bind(this,All)}>ALL</a></li>
            <li style={{padding:'1%',margin:'1%',listStyle:'none'}}><a href="#" onClick={this.clickHanppen.bind(this,Javascript)}>Javascripts</a></li>
            <li style={{padding:'1%',margin:'1%',listStyle:'none'}}><a  href="#" onClick={this.clickHanppen.bind(this,Ruby)}>Ruby</a></li>
            <li style={{padding:'1%',margin:'1%',listStyle:'none'}}><a href="#" onClick={this.clickHanppen.bind(this,Java)}>java</a></li>
            <li style={{padding:'1%',margin:'1%',listStyle:'none'}}><a href="#" onClick={this.clickHanppen.bind(this,CSS)}>CSS</a></li>
            </ul>
            </div>
            )
    }  
}
class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = { qingdan: []};
    }
    
    async componentDidMount() {
        const res = await axios.get('https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories');
       
        this.setState({
           
            qingdan: res.data.items
           
        });};
    async componentDidUpdate(){
       
        const res=await axios.get(this.props.API)
        if(this.props.monitor){
            this.props.monitor=false;
            this.setState({qingdan:res.data.items});
        }
    };
       
    render() {
        const style = {
            ul: { listStyle: 'none', padding: '0 0 10px 0', width: '250px', margin: '10px', textAlign: 'center', background: 'rgba(0, 0, 0, 0.08)' },
            h4: { margin: '15px', fontSize: '30px', fontWeight: '300' },
            img: { width: '150px', height: '150px', margin: '0 0 10px 0' },
            li1: { lineHeight: '50px'},
            li2: { lineHeight: '35px', textAlign: 'left', marginLeft: '30px' },
            svg: { verticalAlign: 'middle', marginRight: '5px' },
            a1: { textDecoration: 'none', color: 'rgb(187, 46, 31)', fontSize: '25px' },
            a2: { textDecoration: 'none', color: 'inherit', verticalAlign: 'middle' },
        }
        const list = this.state.qingdan.map((item, key) => <ul style={{ textAlign: 'center', width: '22%',backgroundColor:'#d9d9d9',marginRight:'3px',marginBottom:'10px',paddingLeft: '0px'}} key={item.id}>
            <h4 style={{ textAlign: 'center' }}>#{key+1}</h4>
            <img src={item.owner.avatar_url} style={{ textAlign: 'center',width:'70%' }}/>
            <h2 style={{textAlign: 'center' }}>{item.name.substr(0, 9)}</h2>
            <li key={item.id} style={{lineHeight: '35px', textAlign: 'left', marginLeft: '30px',listStyle:'none'}}><svg style={{verticalAlign: 'middle', marginRight: '5px'}} t="1573455703738" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="830" width="30" height="30"><path d="M789.504 890.368H319.488c-18.432 0-33.28 14.848-33.28 33.28s14.848 33.28 33.28 33.28h470.016c18.432 0 33.28-14.848 33.28-33.28s-14.848-33.28-33.28-33.28z" fill="#FA7268" p-id="831" data-spm-anchor-id="a313x.7781069.0.i15" class="selected"></path><path d="M731.648 392.192c68.096-118.272 79.36-283.136 79.872-289.792 1.024-12.288-5.632-24.576-16.384-30.72-10.752-6.144-24.064-6.144-34.816 0.512-24.576 15.872-241.152 156.16-287.744 235.52-68.096 114.688-235.52 420.864-237.056 423.936-1.536 2.56-2.048 5.12-3.072 7.68l-91.648 158.72c-9.216 15.872-3.584 36.352 12.288 45.568 5.12 3.072 10.752 4.608 16.384 4.608 11.264 0 22.528-6.144 28.672-16.896L291.84 769.536c58.368-39.936 371.2-258.048 439.808-377.344z m-201.728-51.2c23.04-39.424 122.368-115.2 206.336-173.056-9.216 54.272-27.648 130.56-61.952 190.976-39.936 68.608-190.976 189.952-310.272 278.016 54.272-98.816 126.464-229.376 165.888-295.936z" fill="#2c2c2c" p-id="832" data-spm-anchor-id="a313x.7781069.0.i11" class="selected"></path></svg><a href={item.owner.html_url} style={style.a2}>{item.name}</a></li>
            <li style={{lineHeight: '35px', textAlign: 'left', marginLeft: '30px',listStyle:'none'}}><svg style={{verticalAlign: 'middle', marginRight: '5px'}} t="1573457709243" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5575" width="30" height="30"><path d="M851.349 383.512c43.677 6.347 61.117 60.021 29.512 90.828l-126.42 123.229a53.253 53.253 0 0 0-15.315 47.133l29.844 174.002c7.461 43.5-38.197 76.673-77.263 56.135l-156.263-82.152a53.248 53.248 0 0 0-49.559 0l-156.263 82.152c-39.066 20.538-84.724-12.635-77.263-56.135l29.844-174.002 569.146-261.19z" fill="#FFEABB" p-id="5576"></path><path d="M716.565 911.044c-13.231 0.001-26.527-3.19-38.817-9.652L521.484 819.24a23.243 23.243 0 0 0-21.638 0l-156.264 82.152c-28.255 14.854-61.848 12.426-87.673-6.336-25.824-18.763-38.515-49.963-33.119-81.424l29.843-174.002a23.247 23.247 0 0 0-6.686-20.579l-126.42-123.229c-22.858-22.281-30.93-54.98-21.066-85.339s35.615-52.069 67.204-56.659l174.708-25.387a23.248 23.248 0 0 0 17.506-12.719l78.131-158.312C450.138 128.783 478.747 111 510.665 111c0.002 0-0.001 0 0 0 31.92 0 60.526 17.782 74.653 46.406l78.132 158.312a23.25 23.25 0 0 0 17.505 12.719l174.709 25.387c31.589 4.59 57.339 26.301 67.203 56.659s1.792 63.059-21.065 85.339l-126.42 123.229a23.25 23.25 0 0 0-6.687 20.578l29.844 174.003c5.396 31.461-7.294 62.661-33.119 81.424-14.591 10.6-31.667 15.987-48.855 15.988zM510.666 171c-4.346 0-15.076 1.263-20.85 12.96l-78.132 158.312a83.234 83.234 0 0 1-62.682 45.542L174.295 413.2c-12.909 1.876-17.426 11.691-18.769 15.824-1.343 4.132-3.458 14.728 5.883 23.833l126.419 123.229a83.234 83.234 0 0 1 23.942 73.688l-29.843 174.001c-2.205 12.856 5.734 20.186 9.249 22.74 3.516 2.555 12.939 7.838 24.485 1.77l156.264-82.152a83.234 83.234 0 0 1 77.479 0l156.263 82.152c11.548 6.071 20.97 0.785 24.485-1.77s11.454-9.884 9.249-22.74l-29.844-174.002a83.235 83.235 0 0 1 23.942-73.687l126.42-123.229c9.341-9.105 7.226-19.7 5.883-23.833s-5.859-13.948-18.769-15.824l-174.708-25.387a83.237 83.237 0 0 1-62.682-45.541L531.514 183.96c-5.773-11.697-16.503-12.96-20.848-12.96z" fill="#F9C73D" p-id="5577"></path></svg>{item.watchers_count}&nbsp;stars</li>
            <li style={{lineHeight: '35px', textAlign: 'left', marginLeft: '30px',listStyle:'none'}}><svg style={{verticalAlign: 'middle', marginRight: '5px'}} t="1573458277861" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6887" width="30" height="30"><path d="M274.1 623.47a97 97 0 1 1 97-97 97.15 97.15 0 0 1-97 97z" fill="#BAD4FF" p-id="6888"></path><path d="M270.1 647.57c-74 0-134.14-60.17-134.14-134.13s60.17-134.15 134.14-134.15 134.13 60.17 134.13 134.15-60.17 134.13-134.13 134.13z m0-240.61a106.47 106.47 0 1 0 106.46 106.48A106.6 106.6 0 0 0 270.1 407zM752.58 906c-74 0-134.14-60.17-134.14-134.15s60.17-134.13 134.14-134.13 134.13 60.17 134.13 134.13S826.53 906 752.58 906z m0-240.61A106.47 106.47 0 1 0 859 771.87a106.57 106.57 0 0 0-106.42-106.46z" fill="#3585F9" p-id="6889"></path><path d="M373.777 440.243l257.158-148.47 13.835 23.963-257.158 148.47zM371.506 593.912l13.835-23.963L642.5 718.42l-13.835 23.963zM886.31 242.7a4.36 4.36 0 0 0-0.86-2.49 13.69 13.69 0 0 0-12.93-9.4 13.84 13.84 0 0 0-13.84 13.83 12.65 12.65 0 0 0 0.35 1.71c0 0.08-0.32 0.05-0.3 0.15a50.87 50.87 0 0 1 0.31 5.41 106.47 106.47 0 1 1-106.46-106.46 112.68 112.68 0 0 1 30.83 4.92c0.15 0 0.24-0.14 0.38-0.15a13.5 13.5 0 0 0 3.54 0.72 13.75 13.75 0 0 0 4.5-26.77c-0.22-0.15-0.3-0.33-0.68-0.45a129.42 129.42 0 0 0-38.57-5.94c-74 0-134.14 60.18-134.14 134.13S678.61 386 752.58 386s134.13-60.17 134.13-134.13c0-3.07-0.14-6.13-0.4-9.17z" fill="#3585F9" p-id="6890"></path></svg>{item.forks_count}&nbsp;forks</li>
            <li style={{lineHeight: '35px', textAlign: 'left', marginLeft: '30px',listStyle:'none'}} ><svg style={{verticalAlign: 'middle', marginRight: '5px'}} t="1573458038283" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2043" width="30" height="30"><path d="M484 428v224c0 15.5 12.5 28 28 28s28-12.5 28-28V428c0-15.5-12.5-28-28-28s-28 12.5-28 28z" p-id="2044" data-spm-anchor-id="a313x.7781069.0.i0" class="selected" fill="#bd5548"></path><path d="M512 764m-28 0a28 28 0 1 0 56 0 28 28 0 1 0-56 0Z" p-id="2045"></path><path d="M952.6 825.1l-393.2-681c-10.5-18.2-29-27.4-47.4-27.4s-36.9 9.1-47.4 27.4l-393.2 681c-21.1 36.5 5.3 82.1 47.4 82.1h786.4c42.1 0 68.5-45.6 47.4-82.1z m-832.7 28L512 174l393.2 677.2-785.3 1.9z" p-id="2046" data-spm-anchor-id="a313x.7781069.0.i1" class="selected" fill="#bd5548"></path></svg>{item.open_issues_count}&nbsp;open issues</li>

    </ul>);
    if (this.props.monitor === true) {
        return(
            <div className={styles.div}>
              Fetch Repos.
        </div>
        )}
        else{
        return <div className='div'>
            {list}
        </div>
    }
    
    }
}
class App extends React.Component {
    constructor(props){
        super(props);
        this.state={resp:'https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories'};
    
    }
    clickThing=(API) =>{
       this.setState({resp:API})
    }
    
    
    render() {
        return <div className='juzhon'>
            <Header />
            <Nac clickThing={this.clickThing.bind(this)} />
            <Content API={this.state.resp} monitor={true} />
        </div>
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('container')
);
