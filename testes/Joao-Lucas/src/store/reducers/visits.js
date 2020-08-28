function visits(state = [], action) {
    switch(action.type) {
        case 'ADD_VISITS_LIST':
            return action.payload;
        default:
            return state;
    }
}

function visitModify(state = {}, action) {
    switch(action.type) {
        case 'ADD_VISIT_MODIFY':
            return action;
        default:
            return false;
    }
}

function visitDelete(state = {}, action) {
    switch(action.type) {
        case 'ADD_VISIT_DELETE':
            return action;
        default:
            return false;
    }
}

export { visits, visitModify, visitDelete};