import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import Category from './components/Category'
import News from './components/News'
import { addCategory, selectCategory } from './reducers/Categories'
import { addNews } from './reducers/News'
import { reset } from 'redux-form'

class App extends Component {
  render() {
    const { 
      categories, 
      news, 
      addCategory, 
      selectCategory, 
      selected, 
      addNews 
    } = this.props

    return (
      <div className="App">
        <Category
          selectCategory={selectCategory}
          addCategory={addCategory}
          categories={categories}
        />
        <News addNews={addNews} selectedCategory={selected} news={news} />
      </div>
    )
  }
}

const MapStateToProps = state => {
  // destructing de más de un nivel
  // dentro de categories saca la propiedad de data y la renombre categories
  const { Categories: { data: categories, selected } } = state
  const { News: { data: news } } = state
  console.log(news)
  return {
    categories,
    news: news.filter(x => x.categoryId === selected),
    selected
  }
}

const MapDispatchToProps = dispatch => ({
  addCategory: payload => {
    dispatch(addCategory(payload))
    dispatch(reset('category'))
  },
  selectCategory: payload => dispatch(selectCategory(payload)),
  addNews: payload => {
    dispatch(addNews(payload))
    dispatch(reset('news'))
  }

})

export default connect(MapStateToProps, MapDispatchToProps)(App);