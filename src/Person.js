import React from 'react';
import './Person.css';
import Button from 'react-bootstrap/Button';

class Person extends React.Component{
  // this is just how you set up state
  constructor(props) {
    super(props);
    this.state = { 
      waves: 0,
      needsHelp: false,
    };
  }

  handleWave = () => {
    //setState takes in an object
    this.setState({
      waves: this.state.waves + 1, //cant do ++
    })
  }

  needsHelp = () => {
    this.setState({
      needsHelp: true
    })
  }

  helpGiven = () => {
    this.setState({
      needsHelp: false
    })
  }
  render() {
    // console.log(this.state.waves);
    // ternary: wtf what true false
    return(
      <article>
        {/* <h2 onClick={this.handleWave}>{this.props.name}</h2> */}
        <h2 onClick={this.handleWave}>{this.props.name}</h2>
        <p>👋:{this.state.waves}</p> 
        <img 
          src={this.props.imageUrl}
          alt={this.props.name}
          title={this.props.name}
  
        />
        <p>{this.state.needsHelp ? 'I need Help' : ''}</p>
        <Button variant="outline-info" onClick={this.needsHelp}>Help!</Button>
        <Button variant="success" className="right-button" onClick={this.helpGiven}>Thanks for Help!      </Button>
      </article>
    )
  }
}

export default Person;