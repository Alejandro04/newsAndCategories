import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import Category from './components/Category'
import News from './components/News'
import { addCategory } from './reducers/Categories'
import { reset } from 'redux-form'

class App extends Component {
  render() {
    const { categories, news, addCategory } = this.props
    return (
      <div className="App">
        <Category addCategory={addCategory} categories={categories}/>
        <News news={news}/>
      </div>
    )
  }
}

const MapStateToProps = state =>{
  // destructing de más de un nivel
  // dentro de categories saca la propiedad de data y la renombre categories
  const { Categories: {data: categories}} = state
  const { News: { data: news } } = state
  return {
    categories,
    news,
  }
}

const MapDispatchToProps = dispatch => ({
  addCategory: payload => {
    dispatch(addCategory(payload))
    dispatch(reset('category'))
  }

})

export default connect(MapStateToProps, MapDispatchToProps)(App);