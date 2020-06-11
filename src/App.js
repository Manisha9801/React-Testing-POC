import React, { Component } from 'react';
import Header from './components/header';
import Headline from './components/headline';
import SharedButton from './components/button';
import ListItem from './components/listItem';
import {connect } from 'react-redux';
import { fetchPosts } from './actions';

import './app.scss';
import { bindActionCreators } from 'redux';

const tempArr = [{
  fName : 'Joe',
  lName : 'Bloggs',
  email : 'manisha.9801@yahoo.com',
  age : 25,
  onLineStatus : true
}]

const initialState = {
  btnState  :false
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {...initialState}
  }

  updateBtnStatus() {
    this.setState(previousState => ({'btnState' : !previousState.btnState})) ;
  }

  fetchData() {
    this.props.fetchPosts();
    this.updateBtnStatus();
  }

  //this method is made to learn tetsing on method that returns a value.
  exampleMethod_returnsAValue(number) {
    return number+1;
  }

  render() {
    const configButton = {
      buttonText : 'Get posts',
      emitEvent : () => this.fetchData()
    }

    return (
      <div className="App" data-test="appComponent">
          <Header />
          <section className="main">
            <Headline header="POST" desc="Click the button to render Posts" tempArr = {tempArr} />
            {this.props.posts.length === 0 && 
              <SharedButton {...configButton} />
            }
            {this.props.posts.length ? 
              this.props.posts.map((element,index) =>  <ListItem key={index} title={element.title} desc={element.desc} />
              ): null
            }
          </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts : state.posts
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({fetchPosts},dispatch);


export default connect(mapStateToProps,mapDispatchToProps)(App);
