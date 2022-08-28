

const initState = {
    menu: [
        {
            to: '/',
            name: 'Home'
        },
        {
            to: 'about_us',
            name: 'About us'
        },
        {
            to: 'shop',
            name: 'Shop'
        },
        {
            to: 'pagest',
            name: 'Pagest'
        },
        {
            to: 'contact_us',
            name: 'Contact us'
        }
    ]
}

const reducer = ( state = initState, action ) => {

    switch ( action.tipe ){
        default:
            return state;
    }
}

export default reducer;