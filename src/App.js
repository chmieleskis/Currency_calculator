import React, {Component} from 'react';
import {
  HashRouter,
  Route,
} from 'react-router-dom'

import Navigation from './components/navigation';
import Calculator from './components/calculator';
import ExpensesList from './components/expensesList';

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
}

export default App;
