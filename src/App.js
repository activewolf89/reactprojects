import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Prompt,
  Switch,
  NavLink,
  Redirect
} from 'react-router-dom'
class Header extends Component{
  render(){
    return(
      <div className = "headerClass">

        <NavLink to ="/haskell" activeStyle={{color:'#53acff'}}>Haskell</NavLink>
        <NavLink to="/javascript" activeStyle={{color:'#53acff'}}>Javascript </NavLink>
        <NavLink activeStyle={{color:'#53acff'}} to='/coffeescript'>Coffeescript</NavLink>

      </div>
    )
  }
}
class Coffeescript extends Component{
  constructor(props){
    super(props);
    this.state = {
      count: 5
    }
    this.timer = this.timer.bind(this);
  }
  timer = ()=>{

    this.setState({count:this.state.count-1})
    if(this.state.count < 1){
      clearInterval(this.state.intervalId);
      // alert('about to redirect');
      // <Redirect to="/javascript" />;


    }
  }
  componentDidMount(){

    var intervalId = setInterval(this.timer,1000);
    this.setState({intervalId:intervalId});

  }
  componentWillUnMount(){
    clearInterval(this.state.intervalId)
  }
  render(){
    return(
      <div>
        {this.state.count ==0 && <Redirect to="/javascript"/>}
        <p> Coffeescript is a programming language that transcompiles to javascript: you will be redirected in: {this.state.count} </p>
      </div>
        )
  }
}
// const Coffeescript = () =>(
//   <p> Coffeescript is a programming language that transcompiles to javascript </p>
//
// )
const Javascript = () =>(
  <p> An interpreted language, loosely typed, highly dynamic - one of the three languages of the web </p>
)
const Haskell = () =>(
  <p> A standard, gen-purpose language purely function programming </p>
)
class App extends Component{
  render(){
    return(
      <div>
        <Header />

        <hr />
        <Switch>
          <Route exact path="/" />

          <Route path="/haskell" component = {Haskell} />
          <Route path="/javascript" component = {Javascript} />
          <Route path="/coffeescript" component={Coffeescript} />
          <Route path ="*" render={()=>(<h1>404...This page isn't found </h1>)} />
        </Switch>
        </div>
    )
  }
}

export default App
