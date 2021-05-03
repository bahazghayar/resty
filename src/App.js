'use strict';

import React from 'react';
import Header from './components/header/Header.js';
import Form from './components/form/Form.js';
import Footer from './components/footer/Footer.js';
import Results from './components/results/Results.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '' , 
      method: '', 
      count: 0 ,
      Headers: {} ,
      Response: [],
    };
  }

  handleForm = (headers, body, state) => {
    // console.log(headers, body, state.url, state.method);
    if (headers && body) {
      this.setState({
        count: body.count || this.state.count + 1,
        headers: headers,
        response: body,
      });
    } else {
      this.setState({
        count: this.state.count + 1,
        headers: {message: 'Not Available'},
        response: body
      })
    }
  };

  render() {
    return (
      <>
        <Header />
        <main>
          <Form prompt="GO!" handler={this.handleForm} />
          
          <Results props={this.state} />
         
        </main>
        <Footer />
      </>
    );
  }
}

export default App;

