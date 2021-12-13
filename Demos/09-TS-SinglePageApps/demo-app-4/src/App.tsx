import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from './MenuWithNavLinks';
import Home from './Home';
import Products from './Products';
import ProductsMasterDetail from './ProductsMasterDetail';
import Product from './Product';
import About from './About';
import Contact from './Contact';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <div>

      <Menu/>

      <Switch>

        <Route exact path="/" >
          <Home />
        </Route>
        
        <Route path="/catalog">
          <Redirect to="/products" />
        </Route>

        <Route path="/products">
          <Products />
        </Route>

        <Route path="/productsmasterdetail">
          <ProductsMasterDetail />
        </Route>

        <Route path="/product/:id">
          <Product />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="*" >
          <PageNotFound />
        </Route>
        
      </Switch>
    </div>
  );
}
export default App;