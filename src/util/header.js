const img = (path) => `/img/${path}`

export const headerData = {
    logo:{
        src:img('logo.svg'),
        alt:"TOCOBO",
        href:'/'
    },

    label:[
        {
            id:"search",
            src:img('icon_search.svg'),
            alt:"search",
        },
        {
            src:img('icon_myp.svg'),
            alt:"myp",
            id:"myp",
        },
        {
            src:img('icon_language.svg'),
            alt:"language",
            id:"language",
        },
        {
            src:img('icon_cart.svg'),
            alt:"cart",
            id:"cart",
        },
    ],

    menus:[
        {
            id:'hero',
            label:'hero',
            href:'#hero',
            type:'section'
        },
        {
            id:'follow',
            label:'follow',
            href:'#follow',
            type:'section'
        },
        {
            id:'collection',
            label:'collection',
            href:'#collection',
            type:'section'
        },
        {
            id:'skincare',
            label:'skincare',
            href:'#skincare',
            type:'section'
        },
        {
            id:'instargram',
            label:'instargram',
            href:'#instargram',
            type:'section'
        }
        
    ]
}