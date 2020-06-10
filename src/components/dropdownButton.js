import React, {Component} from 'react';

class DropdownButton extends Component {

    render() {
        return (
            <>
                <div onClick={this.props.onClick} className="dropdown-button">
                    <h3 >{this.props.name}</h3>
                </div>
            </>
        )
    }
}

export default DropdownButton