import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { MainContainer } from './containers';
import { FirstPage, SecondPage, ThirdPage } from './pages';

const MainRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <MainContainer>
        <Component {...props} />
      </MainContainer>
    )}
  />
);

const App = () => (
  <BrowserRouter>
    <Switch>
      <MainRoute path="/" exact component={FirstPage} />
      <MainRoute path="/second_page" exact component={SecondPage} />
      <MainRoute path="/third_page" exact component={ThirdPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
