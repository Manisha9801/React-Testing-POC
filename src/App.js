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


class App extends Component {

  fetchData() {
    this.props.fetchPosts();
  }

  render() {
    const configButton = {
      buttonText : 'Get posts',
      emitEvent : () => this.fetchData()
    }

    return (
      <div className="App">
          <Header />
          <section className="main">
            <Headline header="POST" desc="Click the button to render Posts" tempArr = {tempArr} />
            <SharedButton {...configButton} />
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
