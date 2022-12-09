

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
            to: 'pages',
            name: 'Pages'
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
    ],
    aboutOurFarm: [
        {
            title: 'Choose Your Products',
            text: 'In our listing, we have several collections of organic products. This is the place where you need to choose the product you want.'
        },
        {
            title: 'Farmers will produce it',
            text: 'The Product that you ordered will be verified that we have or not if have we will start to move on with the next step.'
        },
        {
            title: 'We Can Delivery too',
            text: 'If you are not comfortable going to the nearby market place we also will deliver your product to your doorstep.'
        }
    ],
    ourSuccess: [
        {
            type: 'Organic',
            value: '100%'
        },
        {
            type: 'Active Product',
            value: '285'
        },
        {
            type: 'Organic Orchads',
            value: '385+'
        },
        {
            type: 'Years of Farming',
            value: '25+'
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