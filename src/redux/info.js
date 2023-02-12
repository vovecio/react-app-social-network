let store = {
    _state: {
        content: {
            dialogsPage: {
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
            },
            profilePage: {
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
            },
            friendsPage: {
                friends: [
                    {
                        id: '1',
                        name: 'Dima',
                        avatarUrl: 'https://s0.rbk.ru/v6_top_pics/media/img/9/32/756749068638329.jpg'
                    },
                    {
                        id: '2',
                        name: 'Cobra',
                        avatarUrl: 'https://icdn.lenta.ru/images/2021/08/02/13/20210802130556361/square_1280_0583c16573a9b5437549ffa3a3375e54.jpg'
                    },
                    {
                        id: '3',
                        name: 'Katya',
                        avatarUrl: 'https://shpilivili.cc/uploads/posts/2021-12/1638547849_1-shpilivili-cc-p-porno-krasivie-golie-devushki-bolshie-sisk-1.jpg'
                    },
                ]
            }
        }
    },
    _subscriber(){

    },
    subscribe(observer){
        this._subscriber = observer;
    },
    addPost(message){
        this._state.content.profilePage.posts.push({id: this._state.content.profilePage.posts.length + 1, text: message, likesCount: 0});
        this._state.content.profilePage.newPostText = '';
        this._subscriber(this.getState());
    },
    updateNewPostText(newText){
        this._state.content.profilePage.newPostText = newText;
        this._subscriber(this.getState());
    },
    addMessage(dialogId, newText){
        debugger
        let messages =  this._state.content.dialogsPage.dialogs.find(x => x.id === dialogId).messages;
        messages.push({
            id: messages.length + 1,
            message: newText
        });
        this._subscriber(this.getState());
    },
    updateMessageText(dialogId, newText){
        let dialog = this._state.content.dialogsPage.dialogs.find(x => x.id === dialogId)
        dialog.messageText = newText;
        this._subscriber(this.getState());
    },
    getState(){
        return this._state;
    }
}
export default store;