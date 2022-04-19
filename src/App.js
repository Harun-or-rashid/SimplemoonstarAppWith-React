import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { User } from './components/user/user.component';
import { UserList } from './components/user-list/user-list.component';
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
   .then(res=>res.json())
   .then(users=>this.setState({user:users}))
  //  .then(posts=> console.log(this.state.post))
 }
 
  render() {
    return(
    <div className="App">
      <input className='search-box'
             type='search'
             placeholder='search monstar'
             onChange={(event)=>{
               console.log(event)
               const searchString=event.target.value.toLocaleLowerCase();
               const filteredMonster=this.state.monstar.filter((monstar)=>{
                  return monstar.name.toLocaleLowerCase().includes(searchString)
               })
               this.setState(()=>{
                return {monstar:filteredMonster}
              })
             }}
             
      />
      <CardList monstarv={this.state.monstar}>
      </CardList>
      <input 
      className='search-user'
      type='search'
      placeholder='search user'
      onChange={(event)=>{
        const searchUser=event.target.value.toLocaleLowerCase();
        const fillteredUser=this.state.user.filter((user)=>{
          return  user.name.toLocaleLowerCase().includes(searchUser);
          })
          this.setState(()=>{
            return {user:fillteredUser}
          })
      }}
      />
      <UserList user={this.state.user}></UserList>
  </div>

    );
  }
}

export default App;
