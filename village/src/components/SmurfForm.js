import React, { Component } from 'react';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    this.props.addNewSmurf(this.state);
    // add code to create the smurf using the api

    this.setState({
      name: '',
      age: '',
      height: ''
    });


  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="SMURF NAME..."
            value={this.state.name}
            name="name"
          />
          <br></br>
          <input
            onChange={this.handleInputChange}
            placeholder="SMURF AGE..."
            value={this.state.age}
            name="age"
          />
          <br></br>
          <input
            onChange={this.handleInputChange}
            placeholder="SMURF HEIGHT..."
            value={this.state.height}
            name="height"
          />
          <br></br>
          <button type="submit" onClick={this.addNewSmurf}>Add Smurf to the village!</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
