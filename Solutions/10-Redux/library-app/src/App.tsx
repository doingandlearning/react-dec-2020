import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DataProvider from './DataProvider'
import Menu from './Menu';
import Home from './Home';
import Books from './Books';
import Films from './Films';
import MoreStuff from './MoreStuff';
import PageNotFound from './PageNotFound';

import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import {books, films, format} from './reduxcode/reducers'

function App() {
  
  const stateData = {
    books: DataProvider.getAllBooks(),
    films: DataProvider.getAllFilms(),
    format: "TABLE"
  }

  const store = createStore(
    combineReducers({books: books, films: films, format: format}),
    stateData
  )

  return (
    <Provider store={store}>
      <AppWrapped />
    </Provider>
  )
}

function AppWrapped() {  
  return (
    <div>
      <Menu/>
      <Switch>

        <Route exact path="/" >
          <Home />
        </Route>
        
        <Route path="/books">
          <Books />
        </Route>

        <Route path="/films">
          <Films />
        </Route>

        <Route path="/moreStuff">
          <MoreStuff />
        </Route>

        <Route path="*" >
          <PageNotFound />
        </Route>
        
      </Switch>
    </div>
  );
}
export default App;
