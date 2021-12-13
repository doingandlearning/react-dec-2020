import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DataProvider from './DataProvider'
import Menu from './Menu';
import Home from './Home';
import Books from './Books';
import Films from './Films';
import MoreStuff from './MoreStuff';
import PageNotFound from './PageNotFound';

function App() {
  
  // TODO:
  // Decare a variable named stateData, to point to an object with the following properties:
  //   - books  - an array of books, as returned by DataProvider.getAllBooks()
  //   - films  - an array of films, as returned by DataProvider.getAllFilms()
  //   - format - a string (either "TABLE", "ORDERED_LIST", or "ORDERED_LIST")

  // TODO: 
  // Call the Redux createStore() function to create the Redux store. Pass in the following 2 parameters:
  //   - a call to combineReducers(), to combine all the reducers (i.e. books, films, and format)
  //   - stateData

  // TODO:
  // Enclose the <AppWrapped/> component in a <Provider> tag. 
  // On the <Provider> tag, set the "store" property to the Redux store you created above.
  // In this way, Redux will pass this store into all descendent components so they can access the state.
  return (
    <AppWrapped/>
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
