import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class NewsForm extends Component {
    render() {
        const { handleSubmit } = this.props
        return (
            <form onSubmit={handleSubmit}>
                <Field name='name' component='input' placeholder='Name of news' />
            </form>
        )
    }
}

export default reduxForm({
    form: 'news'
})(NewsForm)