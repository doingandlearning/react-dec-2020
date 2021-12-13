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
  
  const books = DataProvider.getAllBooks()
  const films = DataProvider.getAllFilms()

  return (
    <div>

      <Menu/>

      <Switch>

        <Route exact path="/" >
          <Home />
        </Route>
        
        <Route path="/books">
          <Books books={books} format="TABLE"/>
        </Route>

        <Route path="/films">
          <Films films={films} format="TABLE"/>
        </Route>

        <Route path="/moreStuff">
          <MoreStuff books={books} films={films} />
        </Route>

        <Route path="*" >
          <PageNotFound />
        </Route>
        
      </Switch>
    </div>
  );
}
export default App;
