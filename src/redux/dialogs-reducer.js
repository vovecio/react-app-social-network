const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Cobra',
            messages: [
                {
                    id: 1,
                    message: 'Hi'
                },
                {
                    id: 2,
                    message: 'Hello'
                }
            ],
            messageText: 'Привет Cobra'
        },
        {
            id: 2,
            name: 'Dan',
            messages: [
                {
                    id: 1,
                    message: 'Hi'
                },
                {
                    id: 2,
                    message: 'Hello'
                }
            ],
            messageText: 'Привет Dan'
        },
        {
            id: 3,
            name: 'Gerox',
            messages: [
                {
                    id: 1,
                    message: 'Hi'
                },
                {
                    id: 2,
                    message: 'Hello'
                }
            ],
            messageText: 'Привет Gerox'
        },
        {
            id: 4,
            name: 'Porf',
            messages: [
                {
                    id: 1,
                    message: 'Hi'
                },
                {
                    id: 2,
                    message: 'Hello'
                }
            ],
            messageText: 'Привет Porf'
        }
    ]
};

const dialogsReducer = (state = initialState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case ADD_MESSAGE:
            let messages = newState.dialogs.find(x => x.id === action.dialogId).messages;
            messages.push({
                id: messages.length + 1,
                message: action.newText
            });
            break;
        case UPDATE_MESSAGE_TEXT:
            let dialog = newState.dialogs.find(x => x.id === action.dialogId)
            dialog.messageText = action.newText;
            break;
        default:
            return newState;
    }

    return newState;
}

export const addMessageActionCreator = (id, messageText) => {
    return{
        type: ADD_MESSAGE,
        dialogId: id,
        newText: messageText
    }
}

export const updateMessageTextCreator = (id, text) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        dialogId: id,
        newText: text
    }
}

export default dialogsReducer;