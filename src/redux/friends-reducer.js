

let initialState = {
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
const friendsReducer = (state = initialState, action) => {

    const newState = JSON.parse(JSON.stringify(state));
    return newState;
}
export default friendsReducer;