/* eslint-disable no-useless-constructor */
import React, {Component} from 'react';


const buttonStyle = {
  margin: '50px 50px 50px 50px',
  width: '400px',
  height: '70px',
  background: '#fcfc02',
  boxSadow: '3px',
  borderRadius: '5px',
  fontSize: '30px',
  fontFace: 'bold',
  color: '#93937d'
};

class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <button
            className="btn btn-default"
            style={buttonStyle}
            onClick={this.props.handleClick}>{this.props.label}
            </button>  
        )
    }
}

export default Button