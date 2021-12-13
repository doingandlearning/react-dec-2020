import React from 'react';
import { Switch, Route } from 'react-router-dom';
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

  // Note that the books and films properties are empty arrays now.
  // Previously, we initialized these properties by calling DataProvider.getBooks() and DataProvider.getFilms().
  // Now though, you'll get the data from a REST service instead, which is clearly more realistic. 
  const stateData : any = {
    books: [],
    films: [],
    format: "TABLE"
  }

  // TODO: 
  // Call createSagaMiddleware() here, and assign to a variable named sagaMiddleware (for example).

  
  // TODO: 
  // Add a 3rd parameter, to applyMiddleware(sagaMiddleware).
  const store = createStore(
    combineReducers({books: books, films: films, format: format}),
    stateData
  )
  
  // TODO:
  // Run the Saga Middleware here.   

  
  return (
    <Provider store={store}>
      <AppWrapped />
    </Provider>
  )
}

function AppWrapped() {
  
  // TODO:
	// Call useDispatch() to enable you to dispatch actions to Redux. You'll dispatch actions in a moment...

  
  // TODO:
  // Call getBooks() to create an action object, indicating you want to instigate a "get books" operation (from the REST service).
  // Then pass this action object into dispatch(), to dispatch the action object to Redux. It will be handled by a Saga :-)
 
  
  // TODO:
  // Call getFilms() to create an action object, indicating you want to instigate a "get films" operation (from the REST service).
  // Then pass this action object into dispatch(), to dispatch the action object to Redux. It too will be handled by a Saga :-D


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
