import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Menu from './general/Menu';
import Home from './general/Home';
import Example1 from './example1/components/Main'
import Example2 from './example2/components/Main'
import Example3 from './example3/components/Main'
import Example4 from './example4/components/Main'
import Example5 from './example5/components/Main'

function App() {
  return (
    <div>

      <Menu />
      
      <Switch>

        <Route exact path="/" >
          <Home />
        </Route>

        <Route path="/example1">
          <Example1 />
        </Route>

        <Route path="/example2">
          <Example2 />
        </Route>

        <Route path="/example3">
          <Example3 />
        </Route>

        <Route path="/example4">
          <Example4 />
        </Route>

        <Route path="/example5">
          <Example5 />
        </Route>

      </Switch>

    </div>
  );
}
export default App;
