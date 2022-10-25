import { ActionTypes } from "../constants/action-types";

const initialState = {
    products: [{
        id: 1,
        title: "Dipesh",
        category: "programmer"
    }]
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: action.payload };

        default:
            return state;
    }
}

export const selectProductReducer = (state={}, action) => {
    switch (action.type){
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...action.payload};

        default:
            return state;
    }
}