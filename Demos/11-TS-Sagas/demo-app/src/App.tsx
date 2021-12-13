import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Menu from './general/Menu';
import Home from './general/Home';
import Example1 from './example1/components/Main';
import Example2 from './example2/components/Main';
import Example3 from './example3/components/Main';

function App() {
  return (
    <div>

      <Menu />
      
      <Switch>

        <Route exact path="/" >
          <Home />
        </Route>

        <Route exact path="/example1" >
          <Example1 />
        </Route>

        <Route exact path="/example2" >
          <Example2 />
        </Route>

        <Route exact path="/example3" >
          <Example3 />
        </Route>

      </Switch>
    </div>
  );
}
export default App;
