import React, {Component} from 'react';

class ExpensesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFromLocalStorage: null,
            sum: 0,
        }
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

    handleCleanStorage = () => {
        localStorage.clear();
        this.setState({
            dataFromLocalStorage: [],
        })
    };

    handleDeleteItem = () => {
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
                            <span><button onClick={this.handleDeleteItem} className='removePositionBtn'>Usuń</button></span>
                        </li>
                    })}
                    <li className='expense last-row'>
                        <p></p>
                        <p>Suma</p>
                        <p>{this.state.sum} zł</p>
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

export default ExpensesList