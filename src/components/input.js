import React, {Component} from 'react';

class Input extends Component {
    render() {
        return <input onChange={this.props.onChange}
                    name={this.props.value}
                    value={this.props.value}
                    className='amountInput'
                    placeholder='Wprowadź kwotę'
                    type="number"/>
    }
}

export default Input