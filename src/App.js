import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
class App extends Component{
 constructor(){
   super();
   this.state={
     human:[],
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
   .then(users => this.setState({human:users}))
  //  .then(human=> console.log(this.state.human))
 }
  render() {
    return(
    <div className="App">
      <CardList >
      {this.state.human.map(humans => <h3>{humans.name}</h3>)} 
      </CardList>
  </div>

    );
  }
}

export default App;
