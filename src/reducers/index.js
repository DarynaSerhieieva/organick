

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
    ],
    advantagesList: [
        {
            img: './img/plate.svg',
            nameImg:'plate',
            width: '53',
            height: '46',
            title: 'Organic Foods Only',
            text: 'The Product that you ordered will be verified that we have or not if have we will start to move on with the next step.'
        },
        {
            img: './img/quality.svg',
            nameImg:'quality',
            width: '56',
            height: '52',
            title: 'Quality Standards',
            text: 'Once your product is packed it will be delivered to your nearby locality you can directly visit the to buy the product.'
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