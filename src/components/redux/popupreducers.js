const popUpReducer = (state = false, action) => {
    switch (action.type) {
        case 'show':
            return true;
        case 'close':
            return false;
        default:
            return state;
    }
}

export default popUpReducer;