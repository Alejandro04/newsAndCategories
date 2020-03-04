import React, { Component }  from 'react';
import NewsForm from './CategoryForm'
import NewsList from './CategoryList'

export default class News extends Component {
    render() {
        const { news, addNews } = this.props
        return (
            <div>
                <NewsForm onSubmit={addNews}/>
                <NewsList categories={news}/>
            </div>
        )
    }
}