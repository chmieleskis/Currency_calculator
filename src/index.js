import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {
    // withRouter,
    HashRouter,
    Route,
    // Link,
    // Switch,
    NavLink
} from 'react-router-dom'

// ---------- Apka ----------
class App extends Component{

    render() {
        return (
            <>
                <HashRouter>
                    <div className='container'>
                        <Navigation/>
                        <Route exact path="/" component={Calculator}/>
                        <Route exact path="/expenseslist" component={ExpensesList}/>
                    </div>
                </HashRouter>
            </>
        )
    }
};

// ---------- Nawigacja ----------
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

// ---------- Kalkulator ----------
class Calculator extends Component {
        state = {
            dropdownIsOpen: false,
            dropdownIsClosed: false,
            selectedRate: '',
            data: '',
            buttonName: 'Wybierz walutę',
            mid: null,
            amount: null,
            expenseName: '',
            currentDate: null
        };

    componentDidMount() {
        fetch(`http://api.nbp.pl/api/exchangerates/tables/A/`, {
            headers: {
                'Accept': 'application/json'
            }
        }).then(r => {
            if (r.ok === true) {
                return r.json();
            } else {
                throw new Error('Brak sieci')
            }
        }).then(data => {
            // console.log(data[0].rates)
            this.setState({
                data: data[0].rates
            })
        }).catch(err => {
            console.log(err)
        })
    }

    handleOpenDropdown = () => {
        this.setState({dropdownIsOpen: !this.state.dropdownIsOpen})
    };

    handleCloseDropdown = (e) => {
        let getMid;
        let getCurrency;
        this.state.data.filter(r => {
            if (r.code === e.target.value) {
                getMid = r.mid;
                getCurrency = r.currency;
            }
        })
        this.setState({
            dropdownIsOpen: false,
            buttonName: getCurrency,
            mid: getMid
        })

        // console.log(getMid);
    }

    handleAmount = (e) => {
        this.setState( {
            amount: e.target.value
        })
        // console.log(this.state.amount)
    }


    handleName = (e) => {
        var today = new Date();
        var date = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
        console.log(date);
        this.setState( {
            expenseName: e.target.value,
            currentDate: date
        })
    }

    handleSave = () => {
        console.log('aaa');
        if (localStorage.getItem('data') !== null) {
            const tempArr = JSON.parse(localStorage.getItem('data'));
            tempArr.push({mid: this.state.mid, amount: this.state.amount, expenseName: this.state.expenseName, currentDate: this.state.currentDate});
            localStorage.setItem('data', JSON.stringify(tempArr));
        } else {
            localStorage.setItem('data', JSON.stringify([{mid: this.state.mid, amount: this.state.amount, expenseName: this.state.expenseName, currentDate: this.state.currentDate}]))
        }
        this.props.history.push({
            pathname: '/expenseslist'
        })
    }

    render() {
        if (this.state.dropdownIsOpen === false && (this.state.mid === null || this.state.amount === null)) {
            return (
                <div className='main calculator'>
                    <DropdownButton onClick={this.handleOpenDropdown} name={this.state.buttonName}/>
                    <Input value={this.state.amount} name={this.state.amount} onChange={this.handleAmount}/>
                </div>
            )
        }
        if (this.state.dropdownIsOpen === true && (this.state.mid === null || this.state.amount === null)) {
            return (
                <div className='main calculator'>
                    <DropdownButton onClick={this.handleOpenDropdown} name={this.state.buttonName}/>
                    <DropdownContent onClick={this.handleCloseDropdown} rates={this.state.data}/>
                    <Input value={this.state.amount} name={this.state.amount} onChange={this.handleAmount}/>
                </div>
            )
        }

        if (this.state.dropdownIsOpen === false && (this.state.mid !== null && this.state.amount !== null)) {
            return (
                <div className='main calculator'>
                    <DropdownButton onClick={this.handleOpenDropdown} name={this.state.buttonName}/>
                    <Input value={this.state.amount} name={this.state.amount} onChange={this.handleAmount}/>
                    <Exchanged mid={this.state.mid} amount={this.state.amount}/>
                    <NameInput value={this.state.expenseName} name={this.state.expenseName} onChange={this.handleName}/>
                    <Button onClick={this.handleSave}/>
                </div>
            )
        }
        if (this.state.dropdownIsOpen === false && (this.state.mid !== null && this.state.amount !== null)) {
            return (
                <div className='main calculator'>
                    <DropdownButton onClick={this.handleOpenDropdown} name={this.state.buttonName}/>
                    <Input value={this.state.amount} name={this.state.amount} onChange={this.handleAmount}/>
                    <Exchanged mid={this.state.mid} amount={this.state.amount}/>
                    <NameInput value={this.state.expenseName} name={this.state.expenseName} onChange={this.handleName}/>
                    <Button onClick={this.handleSave}/>
                </div>
            )
        }
        if (this.state.dropdownIsOpen === true && (this.state.mid !== null && this.state.amount !== null)) {
            return (
                <div className='main calculator'>
                    <DropdownButton onClick={this.handleOpenDropdown} name={this.state.buttonName}/>
                    <DropdownContent onClick={this.handleCloseDropdown} rates={this.state.data}/>
                    <Input value={this.state.amount} name={this.state.amount} onChange={this.handleAmount}/>
                    <Exchanged mid={this.state.mid} amount={this.state.amount}/>
                    <NameInput value={this.state.expenseName} name={this.state.expenseName} onChange={this.handleName}/>
                    <Button onClick={this.handleSave}/>
                </div>
            )
        }
    }
}

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

}

class Button extends Component {
    render() {
        return <button onClick={this.props.onClick} className='addBtn'>Dodaj</button>
    }
}


// ---------- Lista wydatków ----------

class ExpensesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFromLocalStorage: null,
            sum: 0
        }
    }

    handleCleanStorage = () => {
        localStorage.clear();
    }

    componentDidMount() {
        if (localStorage.getItem('data') !== null) {
            this.setState({
                dataFromLocalStorage: JSON.parse(localStorage.getItem('data')),
                finishedLoading: true,
            }, () => {
                console.log(this.state.dataFromLocalStorage);
            })
        }
    }

    render() {
        if (this.state.finishedLoading) {
            return (
                <ul className='main expensesList'>
                    <li className='expense main-row'><p>Data</p><p>Nazwa</p><p>Kwota</p><span></span></li>
                    {this.state.dataFromLocalStorage.map((val, i)=>{
                        return <li key={i} className='expense table-row'>
                            <p>{val.currentDate}</p>
                            <p>{val.expenseName}</p>
                            <p>{(val.mid * val.amount).toFixed(2)}</p>
                            <span><button className='removePositionBtn'>Usuń</button></span>
                        </li>
                    })}
                    <li className='expense last-row'>
                        <p></p>
                        <p>Suma</p>
                        <p>dużo hajsu</p>
                        <span><button className='removeAllBtn' onClick={this.handleCleanStorage}>Wyczyść</button></span>
                    </li>
                </ul>
            )
        } else {
            return (
                <ul className='main expensesList'>
                    <li className='expense main-row'><p>Data</p><p>Nazwa</p><p>Kwota</p><span></span></li>
                    <li className='empty-list'><p>Lista jest pusta</p></li>
                </ul>
            );
        }


    }
}

ReactDOM.render(
    <>
        <App />
    </>, document.getElementById('root'));


