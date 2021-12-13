import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import Books from './Books';
import Films from './Films';
import MoreStuff from './MoreStuff';
import PageNotFound from './PageNotFound';

import {createStore, combineReducers} from 'redux'
import {Provider, useDispatch} from 'react-redux'
import {applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'

import {getBooks, getFilms} from './reduxcode/actions'
import {books, films, format} from './reduxcode/reducers'
import rootSaga from './sagacode/mysagas'

function App() {

  const stateData : any = {
    books: [],
    films: [],
    format: "TABLE"
  }

  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    combineReducers({books: books, films: films, format: format}),
    stateData,
    applyMiddleware(sagaMiddleware)
  )
  
  sagaMiddleware.run(rootSaga)

  return (
    <Provider store={store}>
      <AppWrapped />
    </Provider>
  )
}

function AppWrapped() {
  
  const dispatch : any = useDispatch()
  dispatch(getBooks())
  dispatch(getFilms())

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
