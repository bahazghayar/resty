import React from 'react';

import Form from '../form/Form.js';
import Results from '../results/Results.js'
import { If, Then } from 'react-if';
import History from '../history/History.js'

const superagent = require('superagent');

let history = JSON.parse(localStorage.getItem('history'));

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      headers: {},
      response: {},
      history: {},
      storageArray: history || [],
      trigger: false,
      fetching: false,
    };
  }

handleForm = async (state) => {

    this.setState({ fetching: true, trigger: true });
    console.log(Date.now() / 1000);

    try {

      let reqBody = state.body;
      if (state.method === 'POST' || state.method === 'PUT') {
        const result = await superagent[state.method.toLowerCase()](
          state.url
        ).send(reqBody);
        let { headers, body } = result;
        this.handler(headers, body, state);
      } else {

        const result = await superagent[state.method.toLowerCase()](state.url);
        let { headers, body } = result;
        this.handler(headers, body, state);
      }
    } catch (error) {

      this.handler(null, error.message, state);
      console.log(error.message);
    }
  };

  handler = (headers, body, state) => {

    if (headers && body) {
      let storageObj = {
        id: state.method + state.url,
        url: state.url,
        method: state.method,
        body: state.body,
      };

      this.state.storageArray.push(storageObj);

      const uniqueArr = [];
      const map = new Map();
      for (const item of this.state.storageArray) {

        if (!map.has(item.id)) {
          map.set(item.id, true);
          uniqueArr.push({
            id: item.id,
            url: item.url,
            method: item.method,
            body: item.body,
          })
        }
      }

      this.setState({
        count: body.count || this.state.count + 1,
        headers: headers,
        response: body,
        storageArray: [...uniqueArr],
        fetching: false,
      });

      localStorage.setItem('history', JSON.stringify(uniqueArr));

    } else {

      this.setState({
        count: this.state.count + 1,
        headers: null,
        response: body,
        fetching: false,
      });
    }

    console.log(Date.now() / 1000);
  };

  async componentDidMount() {
    
    let history = JSON.parse(localStorage.getItem('history'));
    history && this.setState({ history });
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevState.fetching !== this.state.fetching) {
      console.log('fetching....', this.state.fetching);
      this.setState({ fetching: this.state.fetching });
    }
  }
  // handleHistory = (method, url, body) => {
  //   console.log(method, url, body);

  // }

  render() {
    return ( 
      <>
        <main>
        <Form prompt="GO!" handler={this.handleForm} />
        <History props={this.state.storageArray} />
        <If condition={this.state.trigger}>
          <Then>
            <Results props={this.state} />
          </Then>
        </If>
        </main>
      </>
    );
  }
}

export default Home;
