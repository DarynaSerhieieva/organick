

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
    ],
    socialNetworkBase: [
        {
            name: 'facebook',
            svg: <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M19.2828 9.28432C19.2828 4.15722 14.9657 0 9.64141 0C4.31711 0 0 4.15722 0 9.28432C0 13.9182 3.52514 17.7592 8.13494 18.4563V11.9689H5.68628V9.28432H8.13494V7.23887C8.13494 4.9124 9.5747 3.62627 11.7767 3.62627C12.8317 3.62627 13.9353 3.80782 13.9353 3.80782V6.09284H12.7189C11.5219 6.09284 11.1475 6.80823 11.1475 7.54351V9.28432H13.8212L13.3942 11.9689H11.1479V18.4572C15.7577 17.7604 19.2828 13.9194 19.2828 9.28432Z" fill="#274C5B"/>
            </svg>,
            link:'#'
        },
        {
            name: 'tviter',
            svg: <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.6602 1.95842C19.8852 2.29516 19.0652 2.51701 18.2261 2.61696C19.1079 2.10062 19.7711 1.28032 20.0912 0.30991C19.2575 0.7974 18.3469 1.13945 17.3984 1.3214C16.9991 0.902826 16.5187 0.569842 15.9866 0.342684C15.4546 0.115526 14.8818 -0.00106199 14.3033 7.28894e-06C11.9609 7.28894e-06 10.0654 1.86803 10.0654 4.17078C10.0637 4.49108 10.1004 4.81043 10.1747 5.12201C8.49507 5.04327 6.85036 4.61479 5.34581 3.864C3.84126 3.1132 2.50999 2.05662 1.43717 0.761851C1.0608 1.39634 0.861758 2.12028 0.86084 2.858C0.86084 4.30421 1.61537 5.58256 2.75469 6.33149C2.07967 6.31547 1.41849 6.13681 0.827268 5.81068V5.86233C0.827268 7.8853 2.2907 9.56825 4.22759 9.95132C3.86336 10.0484 3.48803 10.0976 3.11108 10.0977C2.84361 10.0981 2.57674 10.0722 2.31437 10.0202C2.85283 11.6773 4.41999 12.8825 6.27639 12.9169C4.76793 14.0794 2.91593 14.7078 1.01149 14.7032C0.673443 14.7027 0.335713 14.6825 0 14.6429C1.9374 15.88 4.18947 16.5344 6.48815 16.5281C14.2943 16.5281 18.5589 10.1708 18.5589 4.65715C18.5589 4.47638 18.5541 4.2956 18.5455 4.11913C19.3733 3.53034 20.0893 2.79865 20.6602 1.95842Z" fill="#274C5B"/>
            </svg>,
            link:'#'
        },
        {
            name: 'instagram',
            svg: <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_478)">
            <path d="M13.6585 1.54725C14.7231 1.55031 15.7431 1.95889 16.4958 2.68376C17.2486 3.40863 17.6729 4.39088 17.6761 5.41599V13.1527C17.6729 14.1778 17.2486 15.16 16.4958 15.8849C15.7431 16.6098 14.7231 17.0183 13.6585 17.0214H5.6243C4.55976 17.0183 3.53973 16.6098 2.78698 15.8849C2.03423 15.16 1.60994 14.1778 1.60676 13.1527V5.41599C1.60994 4.39088 2.03423 3.40863 2.78698 2.68376C3.53973 1.95889 4.55976 1.55031 5.6243 1.54725H13.6585ZM13.6585 0H5.6243C2.53087 0 0 2.43713 0 5.41599V13.1527C0 16.1315 2.53087 18.5686 5.6243 18.5686H13.6585C16.752 18.5686 19.2828 16.1315 19.2828 13.1527V5.41599C19.2828 2.43713 16.752 0 13.6585 0Z" fill="#274C5B"/>
            <path d="M14.8633 5.41679C14.6249 5.41679 14.3919 5.34872 14.1937 5.2212C13.9956 5.09368 13.8411 4.91243 13.7499 4.70037C13.6587 4.4883 13.6348 4.25496 13.6813 4.02984C13.7278 3.80471 13.8426 3.59792 14.0111 3.43562C14.1797 3.27332 14.3944 3.16278 14.6282 3.118C14.862 3.07323 15.1043 3.09621 15.3245 3.18405C15.5447 3.27188 15.7329 3.42063 15.8654 3.61148C15.9978 3.80233 16.0685 4.02671 16.0685 4.25625C16.0688 4.40874 16.0379 4.5598 15.9774 4.70075C15.917 4.8417 15.8282 4.96977 15.7163 5.0776C15.6043 5.18543 15.4713 5.27091 15.3249 5.32911C15.1785 5.38732 15.0217 5.41711 14.8633 5.41679ZM9.64102 6.1902C10.2767 6.1902 10.8981 6.37172 11.4266 6.71179C11.9551 7.05186 12.3671 7.53522 12.6103 8.10075C12.8536 8.66627 12.9172 9.28855 12.7932 9.8889C12.6692 10.4893 12.3631 11.0407 11.9136 11.4736C11.4641 11.9064 10.8915 12.2012 10.268 12.3206C9.64458 12.44 8.99837 12.3787 8.4111 12.1445C7.82382 11.9102 7.32187 11.5135 6.96872 11.0046C6.61557 10.4956 6.42707 9.89723 6.42707 9.28512C6.42798 8.46456 6.76689 7.67787 7.36942 7.09765C7.97196 6.51743 8.78891 6.19108 9.64102 6.1902ZM9.64102 4.64295C8.68757 4.64295 7.75554 4.91521 6.96278 5.4253C6.17002 5.93539 5.55214 6.66039 5.18727 7.50864C4.8224 8.35688 4.72694 9.29027 4.91294 10.1908C5.09895 11.0913 5.55808 11.9184 6.23227 12.5676C6.90645 13.2168 7.76542 13.659 8.70055 13.8381C9.63567 14.0172 10.605 13.9253 11.4858 13.5739C12.3667 13.2226 13.1196 12.6276 13.6493 11.8642C14.179 11.1008 14.4617 10.2033 14.4617 9.28512C14.4617 8.05394 13.9538 6.87319 13.0498 6.00261C12.1457 5.13204 10.9196 4.64295 9.64102 4.64295Z" fill="#274C5B"/>
            </g>
            <defs>
            <clipPath id="clip0_1_478">
            <rect width="20" height="19" fill="white"/>
            </clipPath>
            </defs>
            </svg>,
            link:'#'
        },
        {
            name: 'pinterest',
            svg: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.79664 0C4.38662 0 0 4.38466 0 9.79227C0 13.801 2.41417 17.2458 5.86486 18.7627C5.83862 18.0807 5.86049 17.2589 6.03543 16.5157C6.22349 15.7201 7.295 11.178 7.295 11.178C7.295 11.178 6.9801 10.5529 6.9801 9.63052C6.9801 8.17916 7.81982 7.09502 8.86946 7.09502C9.76165 7.09502 10.1903 7.76387 10.1903 8.56386C10.1903 9.46003 9.61732 10.7977 9.3243 12.0392C9.07938 13.0797 9.84475 13.9234 10.8725 13.9234C12.7269 13.9234 13.9777 11.5409 13.9777 8.71687C13.9777 6.57044 12.5301 4.96608 9.9016 4.96608C6.932 4.96608 5.07763 7.18245 5.07763 9.65675C5.07763 10.5092 5.3313 11.1125 5.72491 11.5759C5.90422 11.7901 5.93046 11.8775 5.86486 12.1223C5.81675 12.3015 5.71179 12.7343 5.66368 12.9092C5.59808 13.1584 5.3969 13.2458 5.17385 13.154C3.80494 12.5944 3.16641 11.0994 3.16641 9.41194C3.16641 6.63164 5.51498 3.29615 10.1684 3.29615C13.9077 3.29615 16.37 6.00213 16.37 8.90484C16.37 12.7474 14.2314 15.6152 11.0824 15.6152C10.0241 15.6152 9.03128 15.0425 8.69014 14.3955C8.69014 14.3955 8.12159 16.6512 7.99913 17.0884C7.79357 17.8447 7.38684 18.5966 7.01509 19.1867C7.91686 19.4526 8.85208 19.5881 9.79226 19.5889C15.2023 19.5889 19.5889 15.2042 19.5889 9.79664C19.5889 4.38903 15.2067 0 9.79664 0Z" fill="#274C5B"/>
            </svg>,
            link:'#'
        }
    ],
    contactUs: [
        {
            type: 'Email',
            value: 'needhelp@organick.com'
        },
        {
            type: 'Phone',
            value: '123 (1254) 1452'
        },
        {
            type: 'Address',
            value: '88 Road, Brooklyn Street, USA'
        }
    ],
    utilityPages: [
        {
            name: 'Style Guide',
            link: '#'
        },
        {
            name: 'Protected',
            link: '#'
        },
        {
            name: 'Page Not Found',
            link: '#'
        },
        {
            name: 'Changelog',
            link: '#'
        },
        {
            name: 'Licenses',
            link: '#'
        }
    ],
    listShopSection: [
        {
            name: 'Fruit Juice',
            img: './img/fruit-juice.png',
            to: '/shop'
        },
        {
            name: 'Organic Food',
            img: './img/organic-food.png',
            to: '/shop'
        },
        {
            name: 'Nuts Cookies',
            img: './img/nuts-cookies.png',
            to: '/shop'
        }
    ],
    productsList: [
        {
            name: 'Calabrese Broccoli',
            img: '../img/broccoli.png',
            type: 'Vegetable',
            price: '$ 25.00 USD',
            newPrice: '$ 21.00 USD',
            discount: false,
            new: false,
            rating: 5
        },
        {
            name: 'Fresh Corn',
            img: '../img/corn.png',
            type: 'Vegetable',
            price: '$ 21.23 USD',
            newPrice: '$ 18.00 USD',
            discount: false,
            new: false,
            rating: 5
        },
        {
            name: 'Dried Pistachio',
            img: '../img/pistachio.png',
            type: 'Millets',
            price: '$ 61.00 USD',
            newPrice: '$ 48.00 USD',
            discount: false,
            new: false,
            rating: 5
        },
        {
            name: 'Vegan Red Tomato',
            img: '../img/red-tomato.png',
            type: 'Vegetable',
            price: '$ 14.00 USD',
            newPrice: '$ 9.37 USD',
            discount: false,
            new: false,
            rating: 5
        },
        {
            name: 'Organic Almonds',
            img: '../img/almonds.png',
            type: 'Fruits',
            price: '$ 21.00 USD',
            newPrice: '$ 18.00 USD',
            discount: true,
            new: false,
            rating: 5
        },
        {
            name: 'Brown Hazelnut',
            img: '../img/hazelnut.png',
            type: 'Millets',
            price: '$ 43.00 USD',
            newPrice: '$ 34.00 USD',
            discount: true,
            new: false,
            rating: 5
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