import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class CategoryForm extends Component {

    handleSubmit = {

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Field name='name' component='input' placeholder='Name of category' />
            </form>
        )
    }
}

export default reduxForm({
    form: 'category'
})(CategoryForm)