import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import GlobalStyle from './Themes/globalStyles';
import NavbarComponent from './Components/navbarComponent';

const App = () => {
  return (
    <>
      <NavbarComponent />
      <GlobalStyle />
      <h1>Hello World</h1>
    </>
  );
};

export default App;
