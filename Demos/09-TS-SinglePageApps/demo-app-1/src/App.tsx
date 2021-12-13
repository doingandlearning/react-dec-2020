import React from 'react';
import { Switch, Route 	} from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/products">
          <Products />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/" >
          <Home />
        </Route>
        
      </Switch>
    </div>
  );
}
export default App;
