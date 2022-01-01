export const destinationListInitial = { destinations: [] };

export const destinationListReducer = (state, action) => {
    switch(action.type) {
        case 'LOAD_DESTINATIONS':
            return { destinations: action.destinations };

        case 'UPDATE_LIKE':
            const modifiedList = [...state.destinations];
            for(let i = 0; i < modifiedList.length; i++) {
                if(modifiedList[i]._id === action.changedDestination._id) {
                    modifiedList[i] = action.changedDestination;
                    break;
                }
            }
            return { destinations: modifiedList };

        default:
            return state;
    }
};