import React, {Component} from 'react';

class Exchanged extends Component {
    render() {
        return (
            <div className="exchanged">
                <h1 className='exchangedText'>{(this.props.mid * this.props.amount).toFixed(2)}</h1>
                <h1 className='exchangedText'>zł</h1>
            </div>
        )
    }
}

export default Exchanged