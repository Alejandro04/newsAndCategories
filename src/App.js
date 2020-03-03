import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import Category from './components/Category'
import News from './components/News'

class App extends Component() {
  render() {
    const { categories } = this.props
    return (
      <div className="App">
        <Category categories={categories}/>
        <News />
      </div>
    )
  }
}

const MapStateToProps = state =>{
  // destructing de más de un nivel
  // dentro de categories saca la propiedad de data y la renombre categories
  const { Categories: {data: categories}} = state
  return {
    categories,
  }
}

const MapDispatchToProps = dispatch => {

}

export default connect(MapStateToProps, MapDispatchToProps)(App);
