export const groupListInitial = { groups: [] };

export const groupListReducer = (state, action) => {
    switch(action.type) {
        case 'LOAD_GROUPS':
            return { groups: action.groupList };

        case 'UPDATE_LIKE':
            const modifiedGroupList = [...state.groups];
            for(let i = 0; i < modifiedGroupList.length; i++) {
                if(modifiedGroupList[i]._id === action.changedGroup._id) {
                    modifiedGroupList[i] = action.changedGroup;
                    break;
                }
            }
            return { groups: modifiedGroupList };

        default:
            return state;
    }
};


