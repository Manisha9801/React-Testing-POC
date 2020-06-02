import React, { Component } from 'react';
import Header from './components/header';
import Headline from './components/headline';
import './app.scss';

const tempArr = [{
  fName : 'Joe',
  lName : 'Bloggs',
  email : 'manisha.9801@yahoo.com',
  age : 25,
  onLineStatus : true
}]


class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <section className="main">
            <Headline header="POST" desc="Click the button to render Posts" tempArr = {tempArr} />
          </section>
      </div>
    );
  }
}

export default App;
