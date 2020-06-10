import React, {Component} from 'react';
import {
  NavLink
} from 'react-router-dom'

class Navigation extends Component {
    render() {
        return (
            <header className='main'>
                <div className="logo">
                    <i className="fas fa-coins"/>
                    <h1>Kalkulator</h1>
                </div>
                <div className="links">
                    <NavLink exact to="/">
                        <div className="navButton navCalc"><i className="fas fa-calculator"/></div>
                    </NavLink>
                    <NavLink exact to="/ExpensesList">
                        <div className="navButton navList"><i className="fas fa-list-alt"/></div>
                    </NavLink>
                </div>
            </header>
        )
    }
}

export default Navigation