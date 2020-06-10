import React, {Component} from 'react';

class Button extends Component {
    render() {
        return <button onClick={this.props.onClick}  className='addBtn'>Dodaj</button>
    }
};

export default Button;