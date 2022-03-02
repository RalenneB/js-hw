import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Footer from './Footer';
// import Header from './Header';
// import Main from './Main';
import Container from './Container';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Container>
    {/* <Header>
  Some other text
    </Header>
    <Main>

    </Main>
    <Footer /> */}
    </Container>
    

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();