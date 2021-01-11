import React, {Component} from 'react';

import DropdownButton from './dropdownButton';
import DropdownContent from './dropdownContent';
import Input from './input';
import Exchanged from './exchanged';
import NameInput from './nameInput';
import Button from './button';


class Calculator extends Component {
    state = {
        dropdownIsOpen: false,
        dropdownIsClosed: false,
        selectedRate: '',
        data: '',
        buttonName: 'Wybierz walutę',
        mid: undefined,
        amount: undefined,
        expenseName: '',
        currentDate: undefined,
        sum: 0
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
        console.log(data[0].rates)
        this.setState({
            data: data[0].rates
        })
    }).catch(err => {
        console.log(err)
    })
}

// componentDidMount () {
//     Promise.all([
//         fetch(`http://api.nbp.pl/api/exchangerates/tables/A/`, {
//             headers: {
//                 'Accept': 'application/json'
//             }
//         }),
//         fetch(`http://api.nbp.pl/api/exchangerates/tables/B/`, {
//             headers: {
//                 'Accept': 'application/json'
//             }
//         }).then(r1 => {
//                     if (r1.ok === true) {
//                         return r1.json();
//                     } else {
//                         throw new Error('Brak sieci')
//                     }
//                 }).then(data => {
//             console.log(data[0].rates)
//             this.setState({
//                 data: data[0].rates
//             })
//         }).catch(err => {
//             console.log(err)
//         })
//     ]);
// }

// componentDidMount () {
//     Promise.all([
//     	fetch(`http://api.nbp.pl/api/exchangerates/tables/A/`, {
//             headers: {
//                 'Accept': 'application/json'
//             }
//         }),
//         fetch(`http://api.nbp.pl/api/exchangerates/tables/B/`, {
//             headers: {
//                 'Accept': 'application/json'
//             }
//         })
//     ]).then(responses => {
//     	// Get a JSON object from each of the responses
//     	return responses.map(function (response) {
//     		return response.json();
//            });
//     }).then(data => {
//         console.log(data[0].rates);
//         console.log(data[1]);
//     }).catch(function (error) {
//     	// if there's an error, log it
//     	console.log(error);
//     });
// }

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
    });

    this.setState({
        dropdownIsOpen: false,
        buttonName: getCurrency,
        mid: getMid
    });

    // console.log(getMid);
};

handleAmount = (e) => {
    this.setState( {
        amount: e.target.value
    })
    // console.log(this.state.amount)
};


handleName = (e) => {
    var today = new Date();
    var date = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
    console.log(date);
    this.setState( {
        expenseName: e.target.value,
        currentDate: date
    })
};

handleSave = () => {
    if (localStorage.getItem('data') !== undefined) {
        const tempArr = JSON.parse(localStorage.getItem('data'));
        tempArr.push({mid: this.state.mid, amount: this.state.amount, expenseName: this.state.expenseName, currentDate: this.state.currentDate});
        localStorage.setItem('data', JSON.stringify(tempArr));
    } else {
        localStorage.setItem('data', JSON.stringify([{mid: this.state.mid, amount: this.state.amount, expenseName: this.state.expenseName, currentDate: this.state.currentDate}]))
    }
    this.props.history.push({
        pathname: '/expenseslist'
    })
};

    render() {
        if (this.state.dropdownIsOpen === false && (this.state.mid === undefined || this.state.amount === undefined)) {
            return (
                <div className='main calculator'>
                    <DropdownButton onClick={this.handleOpenDropdown} name={this.state.buttonName}/>
                    <Input value={this.state.amount} name={this.state.amount} onChange={this.handleAmount}/>
                </div>
            )
        }
        if (this.state.dropdownIsOpen === true && (this.state.mid === undefined || this.state.amount === undefined)) {
            return (
                <div className='main calculator'>
                    <DropdownButton onClick={this.handleOpenDropdown} name={this.state.buttonName}/>
                    <DropdownContent onClick={this.handleCloseDropdown} rates={this.state.data}/>
                    <Input value={this.state.amount} name={this.state.amount} onChange={this.handleAmount}/>
                </div>
            )
        }

        if (this.state.dropdownIsOpen === false && (this.state.mid !== undefined && this.state.amount !== undefined)) {
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
        if (this.state.dropdownIsOpen === false && (this.state.mid !== undefined && this.state.amount !== undefined)) {
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
        if (this.state.dropdownIsOpen === true && (this.state.mid !== undefined && this.state.amount !== undefined)) {
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

export default Calculator