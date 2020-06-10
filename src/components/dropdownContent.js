import React, {Component} from 'react';

class DropdownContent extends Component{

    render() {
        return (
            <div className='dropdown-content'>
                {this.props.rates.map((rate)=>{
                    return <option onClick={this.props.onClick} key={rate.code} value={rate.code}>{rate.currency}</option>
                })}
            </div>
        )
    }
}

export default DropdownContent