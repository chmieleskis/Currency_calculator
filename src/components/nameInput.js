import React, {Component} from 'react';

class NameInput extends Component{
    render() {
        return (
        <input onChange={this.props.onChange}
            name={this.props.value}
            value={this.props.value}
            className='nameInput'
            placeholder='Wprowadź nazwę'
            type="text"/>
        )
    }
};

export default NameInput;