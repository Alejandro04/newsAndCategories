import { initialize } from "redux-form"

const ADD_CATEGORY = 'category/add'

/*
* payload:
* id
* name
*/

export const addCategory = payload => ({
    type: ADD_CATEGORY,

    // mientras se configura el form que devuelva el id
    payload: {
        ...payload,
        id: Math.random().toString(20)
    }
})

// Buenas practicas, configurar el estado inicial
// tal cual lo queremos manejar
// bajo una propiedad data
const initialState = {
    data: [{ id: 1, name: 'Default' }]
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CATEGORY:
            return {
                ...state,
                data: [state.data, action.payload]
                //también es válido: data: state.data.concat(action.payload)
            }
        default:
            return state
    }
}