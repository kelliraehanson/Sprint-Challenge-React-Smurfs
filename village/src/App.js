import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';
import { Route, Link, NavLink } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios
    .get('http://localhost:3333/smurfs')
    .then(response => {
      this.setState({ smurfs: response.data })
    })
    .catch(err => console.log(err));
  }

  addNewSmurf = smurf => {
    axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(response => {
      this.setState({ smurfs: response.data })
    })
    .catch(err => console.log(err));
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">

      <img src="https://images.justwatch.com/backdrop/46395655/s1440/the-smurfs"></img><br>
      </br>

      <NavLink exact to='/'>
      SMURF GALLERY
      </NavLink>
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      &nbsp;
      <NavLink to='/smurfform'>
      ADD A SMURF
      </NavLink>

      <Route 
      exact path='/'
      render={props => (
        <Smurfs smurfs={this.state.smurfs} /> 
      )} />

      <Route
      path='/smurfform'
      render={props => (
        <SmurfForm addNewSmurf={this.addNewSmurf}/> 
      )} />

        {/* <SmurfForm addNewSmurf={this.addNewSmurf}/>  */}
        {/* <Smurfs smurfs={this.state.smurfs} />  */}
      </div>
    );
  }
}

export default App;

