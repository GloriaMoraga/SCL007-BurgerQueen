import React, { Component } from 'react';
import {  Button } from 'react-bootstrap';



class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className= "mr-2">
          Nombre Cliente: 
          </label>

          <label>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <Button variant="warning" className= "ml-2" type="submit" value="Submit" > Ingresar </Button>
      </form>
    );
  }
}

export default NameForm;