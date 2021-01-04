import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import GlobalStyle from './Themes/globalStyles';
import NavbarComponent from './Components/navbarComponent';
import PortfolioComponent from './Components/PortfolioComponents/portfolioPage';
import ProjectComponent from './Components/ProjectComponents/projectPage';
import ArticleComponent from './Components/ArticleComponents/articlePage';

const App = () => {
  return (
    <>
      <NavbarComponent />
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={PortfolioComponent} />¸
          <Route path="/pricing" component={ProjectComponent} />¸
          <Route path="/schedule" component={ArticleComponent} />¸
        </Switch>
      </Router>
    </>
  );
};

export default App;
