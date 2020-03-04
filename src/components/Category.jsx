import React, { Component }  from 'react';
import CategoryForm from './CategoryForm'
import CategoryList from './CategoryList'
import Fragment from 'render-fragment';

export default class Category extends Component {
    render() {
        const { categories, addCategory } = this.props
        return (
            <Fragment>
                <CategoryForm onSubmit={addCategory}/>
                <CategoryList categories={categories}/>
            </Fragment>
        )
    }
}