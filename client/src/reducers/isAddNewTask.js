const initialState = true;

const isAddNewTask = (state = initialState, action) => {
    // ...
    switch (action.type) {
        case 'IS_ADD_NEW_TASK':
           state=true;
           return state
        case 'IS_UPDATE_NEW_TASK':
        state=false;
        return state;
    }

    return state;
}

export default isAddNewTask;