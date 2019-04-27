import { combineReducers } from "redux";
import { 
    REQUEST_CONTENTS, 
    RECEIVE_CONTENTS,
    CHANGE_FULL_CONTENT, 
 } from "./actions.js";

function selectedContent(
    state = {
        viewContent: {}
    }, 
    action 
) {
    switch(action.type) {
        case CHANGE_FULL_CONTENT:
            return Object.assign({}, state, {
                viewContent: action.content
            })
        default:
            return state
    }
}

 function contentsByYoutube(
     state = {
        isFetching:false,
        items: []
        }, 
        action
    ) {

    switch(action.type) {
        case REQUEST_CONTENTS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_CONTENTS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.contents,
                lasetUpdated: action.receivedAt
            });
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    contentsByYoutube,
    selectedContent
});

export default rootReducer;

