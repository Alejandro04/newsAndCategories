import React, { Component }  from 'react';
import NewsForm from './NewsForm'
import NewsList from './NewsList'
import Fragment from 'render-fragment';

export default class News extends Component {
    render() {
        const { news, addNews } = this.props
        return (
            <Fragment>
                <NewsForm onSubmit={addNews}/>
                <NewsList news={news}/>
            </Fragment>
        )
    }
}