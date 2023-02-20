const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {
            id: 1,
            text: 'Hi! How are u?',
            likesCount: 33
        },
        {
            id: 2,
            text: 'Good luck!',
            likesCount: 2
        },
        {
            id: 3,
            text: 'U ar my friend!',
            likesCount: 54
        },
        {
            id: 4,
            text: 'Bad guy',
            likesCount: 123
        },
    ],
    newPostText: 'it-kamasutra'
};

const profileReducer = (state = initialState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case ADD_POST:
            newState.posts.push({
                id: state.posts.length + 1,
                text: state.newPostText,
                likesCount: 0
            });
            newState.newPostText = '';
            break;
        case UPDATE_NEW_POST_TEXT:
            newState.newPostText = action.newText;
            break;
        default:
            return newState;
    }

    return newState;
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {

    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default profileReducer;