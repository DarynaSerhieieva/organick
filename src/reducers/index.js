

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
            img: require('../img/broccoli.png'),
            type: 'Vegetable',
            price: '$ 25.00 USD',
            newPrice: '$ 21.00 USD',
            discount: true,
            newItem: true,
            rating: 5
        },
        {
            name: 'Fresh Corn',
            img: require('../img/corn.png'),
            type: 'Vegetable',
            price: '$ 21.23 USD',
            newPrice: '$ 18.00 USD',
            discount: true,
            newItem: false,
            rating: 5
        },
        {
            name: 'Dried Pistachio',
            img: require('../img/pistachio.png'),
            type: 'Millets',
            price: '$ 61.00 USD',
            newPrice: '$ 48.00 USD',
            discount: true,
            newItem: false,
            rating: 5
        },
        {
            name: 'Vegan Red Tomato',
            img: require('../img/red-tomato.png'),
            type: 'Vegetable',
            price: '$ 14.00 USD',
            newPrice: '$ 9.37 USD',
            discount: true,
            newItem: false,
            rating: 5
        },
        {
            name: 'Organic Almonds',
            img: require('../img/almonds.png'),
            type: 'Fruits',
            price: '$ 21.00 USD',
            newPrice: '$ 18.00 USD',
            discount: true,
            newItem: false,
            rating: 5
        },
        {
            name: 'Brown Hazelnut',
            img: require('../img/hazelnut.png'),
            type: 'Millets',
            price: '$ 43.00 USD',
            newPrice: '$ 34.00 USD',
            discount: true,
            newItem: false,
            rating: 5
        }
    ],
    news: [
        // {
        //     author: 'Kristina Castle',
        //     header: 'Everything You Need to Know About Organic',
        //     text: 'Organic farming is the only way that you still can experience the real world.',
        //     img: require('../img/lettuce.png'),
        //     alt: 'lettuce'
        // },
        // {
        //     author: 'Alex Louis',
        //     header: 'Organic Fruits: Surprising Benefits and Facts',
        //     text: 'The world of nature has grown on the principles of health, ecology, and care.',
        //     img: require('../img/tomato.png'),
        //     alt: 'tomato'
        // },
        {
            author: 'Betty Gold and Samantha Leffler',
            header: 'The 30 Healthiest Foods to Eat Every Day',
            text: "All too often, seemingly healthy snacks are secretly loaded with sugar, saturated fat, and carbohydrates. That's why we handpicked the healthiest foods to eat that are delicious and incredibly easy to cook. After all, rule number one for sticking to a smart meal plan is to not get bored, and these healthy ingredients will keep you on your toes (promise!). You'll notice something that all these healthy foods have in common: each one is a basic ingredient, such as a fruit, vegetable, grain, or dairy product. That means no pre-packaged products with a laundry list of strange-sounding ingredients. You can use this as a rule of thumb when shopping: if the food is simple, wholesome, plant-based, and/or comes from the periphery of the grocery store—i.e., where the produce, eggs, fish, and other whole foods tend to live—you're in good shape. (Literally.) Now, on to the healthiest foods to eat list.",
            img: require('../img/healthy.jpeg'),
            alt: 'healthy food'
        },
        {
            author: 'Marnie Kunz',
            header: '15 Benefits of Organic Food',
            text: `What is Organic Food?
            Organic food is grown without the use of synthetic chemicals and does not contain genetically modified organisms. Organic foods can be fruits, vegetables, grains, dairy, and meat. Organic farms can be small or large, and they must meet strict U.S. Department of Agriculture requirements to label their food as organic. 
            
            Organic farms aim to cut pollution, provide safe places for farm animals to live, and promote a self-sustaining cycle of resources on a farm, according to the Mayo Clinic. 
            
            benefits-of-Organic-food
            These foods do not include a lot of pesticides so you do not have to get them organic if you’re on a budget. 
            
            Although organic foods do not contain synthetic pesticides, they may contain some naturally-derived pesticides so they are not always pesticide-free. 
            
            Organic Meat
            Unlike factory-farmed or “regular” meat, organic meat is raised without being injected with antibiotics and hormones. Organic beef is raised on a diet of grains, corn, and grazing on grass and they are not fed any GMOs or sewage sludge. The USDA requires that organic livestock is raised in a way that “accommodates their natural behaviors” so they are not confined to small spaces for long stretches of time. 
            
            Certified Organic Food 
            With all the different organic and natural claims on food, it can be confusing to know what to buy. There are certain standards that the U.S. Department of Agriculture (USDA) requires for a food to be certified as organic. The USDA guidelines include the following standards for the organic labels:
            
            100% organic. This label is used on certified organic foods that have one ingredient or many ingredients if all the items are certified organic, except for salt and water. These foods may have a USDA seal.
            
            Organic. Food can be labeled as organic if at least 95% of the ingredients are certified organic, except for salt and water. The items that aren't organic must be from a USDA list of approved additional ingredients. These foods may have a USDA seal.
            
            Made with organic. If food has at least 70% certified organic ingredients, it can have a "made with organic" ingredients label. For instance, a cereal might be labeled "made with organic oats." The ingredient list must show what items are organic. Made with organic products are not allowed to carry a USDA seal.
            
            Organic ingredients. If food has some organic ingredients but less than 70% of the ingredients are certified organic, the product can't be labeled as organic. It also can't have a USDA seal. The ingredient list can show which ingredients are organic.`,
            img: require('../img/organic-food.jpg'),
            alt: 'organic food'
        },
        {
            author: 'Bob Odenkirk',
            header: 'Nutritionist Reveals The Secret To Eating Healthy With Lesser Cravings',
            text: `To practice healthy eating in a sustainable manner, mindful eating and a few more principles are required. Nutritionist Ishi Khosla, in an Instagram post, talks about a few principles of healthy eating that can help in maintaining your health, fitness levels and weight goals. Calorie-restrictive and weight loss diets aren't the ideal way to go. You needn't starve yourself and go to extremes just to lose a few kilos. Moderation is the key. Have you favourite dessert and even fried food at times. Maintaining a balance and eating everything you love, in controlled proportions, is the key to being healthy and fit.
            Principles of healthy eating
            In an Instagram post, Khosla talks about a few rules that can you help you live a healthy liftestyle with lesser cravings, mood swings and irritability.`,
            img: require('../img/eat-healthy.jpg'),
            alt: 'woman is eating healthy food'
        },
        {
            author: 'Mark Diesveld',
            header: 'Organic food: a niche or the future standard?',
            text: `Organic consumption is booming and has been a rapidly growing industry for over two decades. Although food safety issues, food scandals and environmental considerations have been around for longer than that, the organic market accelerates faster than ever, resulting from increasing transparency in the supply chain and the way consumers are informed. There is a widespread perception among consumers regarding divergent benefits of organic food consumption as opposed to conventional food.
            
            Let’s define ‘organic’
            Organic food derives its label from the production process. It is certified food produced by methods that comply with standards and legislation of organic farming. Even though these standards vary worldwide, they share the same principles: the avoidance of use of artificial chemicals, antibiotics, hormones, genetically modified organisms (GMOs) and artificial food additives, such as preservatives, sweeteners, coloring, flavoring and monosodium glutamate. Irradiation and industrial solvents are also typically not used in the process of organic food production. The organic food production focuses on the use of natural substances, crop rotation and nutrient recycling to conserve biodiversity and to promote ecological balance. There is a strong emphasis on animal- and environmentally friendly farming and cultivation methods.
            
            While an increasing number of processed organic products are on the market nowadays, the most purchased organic products are unprocessed foods, such as fruits and vegetables. Particularly, plant-based foods are well-known and are most often associated with organic food by consumers. Natural fertilizers are used to grow organic crops in order to improve plant growth, while natural pest enemies (f.i. ladybugs and wasps) are used for pest controlment.
            
            Although in general consumers associate organic food with plant-based products, animal-based products can also be produced organically. In order for these types of products to be labeled organic, raised animals are not allowed antibiotics or hormones to stimulate growth. Additionally, they may not descend from cloned animals and they must have enough space (limited stocking density) and access to fields. This prevents overgrazing, pollution and soil erosion. Feed should furthermore also be organic. Genetically modified feed is prohibited.
            
            Do consumers prefer organic food?

            There is a significant price difference between organic food and non-organic food because the production and labor costs are higher while yields are lower. This results from the strict framework farmers must comply with in order to be labeled organic. Despite of the price premium, there are numerous reasons why groups of consumers prefer organic food products over their conventional counterparts. The main reason being the perception that organic food is healthier. Organic food is often perceived to have nutritional benefits, like lower nitrate levels or containing more antioxidants, minerals and vitamins than regular food. Since organic crops and plants do not rely on chemical pesticides, they produce more antioxidants. Due to the COVID-19 pandemic, health awareness increased, and this reinforced the health-related driver for consumers in buying organic food. Several studies found benefits of organic foods for consumers’ health, but evidence is mixed. Additional research is necessary to confirm these health benefits.
            
            Another key consumer driver for organic food is the environmental perspective. In conventional farming, fertilization, overproduction, and the use of pesticides may negatively affect biodiversity, ecosystems, groundwater, and drinking water supplies. These issues are intended to be minimized in organic farming, which tends to improve soil quality and the conservation of groundwater.
            
            Other (less dominant) reasons advocating for organic food are animal wellbeing, greater taste (perception), reduce exposure to pesticides and toxins, a desire for natural products, and food safety considerations.
           
            Summarizing, eating habits are changing because consumers increasingly consider other indicators than taste and price in their choice for food, such as a limited impact on nature and fair products. However, health-related claims regarding the benefits of organic food consumption need more evidence to be substantiated.
            
            Size of the prize and key organic markets
            
            The global organic food market has been growing at a CAGR of approximately 10% over last ten years. Strong growth is expected to continue in the coming years, with the forecast that the organic food market will increase three times faster compared to overall food market, indicating an increasing share of organic food in the overall food market. Globally, there is over 71 million hectares certified organic farmland, representing approximately 1.5 percent of total world farmland. Half of the total organic farmland is located in Australia. However, in terms of consumption, the US market and Western-Europe are global leading organic markets.
            
            In the US, the organic food industry is one of the biggest and fastest growing food sectors with a value of approximately $‎50.1 bn. (~€44.7 bn) in 2019.
            
            The European organic retail market experienced strong growth over the last years, growing with a CAGR of 9,7% (2011 – 2018). This growth is expected to continue with the same pace in the near future. European market value is estimated at €44.5 bn. in 2019. Leading European countries in terms of per capita expenditure on organic products are Denmark, Sweden and Switzerland. Germany and France are the largest European organic markets but still have a lot of growth potential looking at the relatively low consumption per capita.
            
            In Asia, both production and consumption are rapidly increasing, with China and India becoming global producers. China and Japan are leading consumers of organic food with the former market mainly being accelerated by food safety crises at the end of the 2000s. Disparity in production and demand in Asia leads to large imports or organic products from Australia, New Zealand, Europe and the US.
            
            Market development varies across regions
            
            As mentioned previously, the demand for organic food is forecasted to continue its strong growth in years to come as groups of consumers have a preference for organic products based on a variety of considerations. Production and supply chain challenges limit market size and growth. Farmers experience that it is expensive to shift to organic farming as the investments that must be made, do not directly translate into increasing selling prices. It takes two to three years for farmers to convert from conventional to organic farming and until their products can be sold with a certified organic label. However, although production cannot keep up with the accelerating demand for organic products, the continuously growing demand has led to the introduction of multiple programs across the world supporting farmers to switch to organic agriculture. These programs are initiated by diverse stakeholders such as (agricultural) ministries, governments, traders and food producers. Another reason for proactive support from governments is the lower footprint of organic farming methods compared to conventional methods.
            
            Despite a continuing forecasted market growth, and environmental, as well as social benefits, this forecasted market growth will not occur proportional across regions. An often-mentioned downside of organic farming is that it is unable to achieve food security in an ever-increasing global population. This issue indicates a clear limit to the potential of organic farming and following this reasoning, development of the organic food market in terms of production differs per region. While organic farming strongly focuses on quality, conventional farming emphasizes high quantity. Organic farming can become an important food production category in more food-secure developed countries whereas in regions with high population pressure and low land availability organic food production seems to be less significant. Also, in countries where food demand is immense, local production and most likely consumption will not be organic.
            
            Can production keep up with demand?
            
            The short answer to this frequently raised question is no.
            
            It is noticed that conversion of organic products generally does not depend on demand but on the availability of organic products. In other words, restricted production limits the market size and growth. For organic production to follow demand, organic farmers must overcome challenges like finding enough reliable resources to produce organically, which currently is the main restriction for market growth. Furthermore, other supply chain issues must be overcome as the current organic supply chain does not allow for faster production growth. Compared to conventional food production, organic products are generally more difficult to produce, as it requires more labor and resources which puts pressure on profitability. Additionally, producers face problems in expanding production without losing the organic aspect. Land availability is also a limiting factor for organic crop cultivation and food production. This is due to the low agricultural intensification of the organic farms for the crop production. Organic farms require significantly more land and achieve lower yields compared to conventional farms.
            Changing market dynamics in developed markets
            It is expected that organic food production continues to grow strongly, especially in more developed and food-secure markets. Particularly when production challenges are overcome, and farmers receive financial support in their shift to organic. In these regions, future organic products are becoming more mainstream in an increasing number of product categories. In less developed markets, the market growth is forecasted to be smaller and more depending on imports. 
            Within the US and Western-Europe, which are the two largest organic consumption markets, and both have high food security, a clear consolidation trend is noticed. Over the last decade, the organic market in the US and Europe was influenced by innovative, smaller organic producers putting pressure on established food players struggling to shift to organic. This mainly accounts for Europe. However, more and more multinationals are jumping in on the organic trend. Especially in the US, larger corporations acquire smaller players to expand their portfolio with organic products. Good examples are Danone (acquired Whitewave) and Amazon (acquired Whole Foods Market). In Europe, this trend is also noticed with players like Unilever (Pukka Herbs ltd and Mãe Terra), Nestlé (Terrafertil) and Wessanen acquiring multiple organic producers. As the market is rationalizing, this consolidation trend will continue in the next years in a surge of large multinationals to expand/extent their portfolio with organic products through M&A activities.
            This consolidation trend also occurs when support programs for farmers are insufficient. In the Netherlands for instance, organic farming and consumption are growing but fewer farmers are switching to organic. This is resulting from the expensive shift to organic and a lack of governmental support. Economies of scale seem to be the answer, which indicates consolidation of organic providers. This information corresponds with Hammer’s findings regarding the farmers’ sentiment on organic farming, measured over four key European markets (The Netherlands, United Kingdom, France, Germany). Hammer found that French dairy farming is most likely to pick up on the organic trend, while Dutch dairy farmers are least likely to switch to organic farming in next ten years.
            What will the future bring?
            The future of organic food looks bright, with growth fueled by health and environmental considerations. Recent M&A activities endorse that the organic segment is hot and in the middle of attention. Underlying dynamics of the market are changing and consolidation in developed markets is expected to continue. There is a lot of potential for significant growth, also in current key markets. The organic food market in key European markets France and Germany for example, could almost double in value when they reach the average expenditure per capita for leading European countries in this field. Production is not able to keep up with organic consumption, and product availability determines organic consumption. This provides possibilities for exporting countries towards developed food-secure markets such as the US and Western-Europe. Concluding, the organic market is far from reaching the tipping point of growth and offers many untapped opportunities through the whole chain.`,
            img: require('../img/organic-future.jpeg'),
            alt: 'table with nutritious food'
        },
    ]
}

const reducer = ( state = initState, action ) => {

    switch ( action.tipe ){
        default:
            return state;
    }
}

export default reducer;