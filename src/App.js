import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
class App extends Component{
 constructor(){
   super();
   this.state={
     user:[],
     monstar:[],
     post:[],
     cats:[
       {
         name:'Biltu'
       },
       {
         name:'Vulu'
       },
       {
         name:'Boltu'
       },
       {
        name:'Feona',
        adresses:[
          {biltu:'Chatmohor'},
          {biltu:'Chatmohor'},
          {biltu:'Chatmohor'}
        ]
       }
     ]
   };
 }
 componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res => res.json())
   .then(users => this.setState({monstar:users}));
   fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res=>res.json)
   .then(posts=>this.setState({post:posts}))
   .then(console.log(this.state.post));
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(respose=>respose.json)
   .then(users=>this.setState({user:users}).console.log(this.state.user))
  //  .then(posts=> console.log(this.state.post))
 }
 
  render() {
    return(
    <div className="App">
      <CardList monstarv={this.state.monstar}>
      </CardList>
  </div>

    );
  }
}

export default App;
