// const initialState = {
//     appState: initialAppState
// };


var ON_USER_NAME_CHANGE = "ON_USER_NAME_CHANGE";
var ON_QUESTION_CORRECT = "ON_QUESTION_CORRECT";

const initialState = {
    userName: "",
    question1: 'incorrect',
    question2: 'incorrect',
};

// reducers
export default function appState(state = initialState, action) {
    switch(action.type) {
        case ON_USER_NAME_CHANGE:
        // console.log(state);
            return {
                ...state,
                userName: action.value
            };
        default: 
            return state;
    }
}

// action creators
// export function nothingReducer(state = {}) {
//     return state;
// }

export function onUserNameChange(value) {
    console.log(value)
    return {
        value,
        type: ON_USER_NAME_CHANGE
    }
}

// change to correct
export function changeToCorrect() {
    return {
        type: ON_QUESTION_CORRECT
    }
}