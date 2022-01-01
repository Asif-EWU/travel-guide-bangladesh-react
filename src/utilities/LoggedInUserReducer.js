export const loggedInUserInitial = { info: {} };

export const loggedInUserReducer = (state, action) => {
    const newInfo = {...state.info};

    switch(action.type) {
        case 'SET_USER':
            return { info: action.userInfo };

        case 'REMOVE_USER':
            return loggedInUserInitial;

        case 'SET_BOOKMARK':
            newInfo.bookmarks = action.bookmarks;
            return { info: newInfo };

        case 'SET_LIKED_DESTINATION':
            newInfo.liked_destinations = action.newLikedDestinations;
            return { info: newInfo };

        case 'SET_LIKED_GROUP':
            newInfo.liked_groups = action.newLikedGroups;
            return { info: newInfo };

        default:
            return state;
    }
};