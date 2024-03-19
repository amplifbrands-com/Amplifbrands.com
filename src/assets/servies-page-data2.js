import wordpress from '../assets/service-page-icons/wordpress-img.svg'
import shopify from '../assets/service-page-icons/shopify.svg'
import frontend from '../assets/service-page-icons/frontend-web.svg'
import wix from '../assets/service-page-icons/wix-1.svg'
import others from '../assets/service-page-icons/others.svg'


export const services = [
    {
        title: 'wordpress',
        img: wordpress,
        offerings: [
            'Custom WordPress Theme Design',
            'WordPress Website Development',
            'WooCommerce Integration',
            'Plugin Development',
            'WordPress Website Maintenance'
        ],
        link:"/wordpress"
    },
    {
        title: 'shopify',
        img: shopify,
        offerings: [
            'Shopify Theme Customization',
            'Shopify Store Development',
            'app integration',
            'shopify SEO optimization',
            'shopify store Maintenance'
        ],
        link:"/shopify"
    },
    {
        title: 'wix',
        img: wix,
        offerings: [
            'custom wix website design',
            'wix website development',
            'e-commerce integration',
            'wix SEO optimization',
            'wix website maintenance'
        ],
        link:"/wix"
    },
    {
        title: 'custom website',
        img: frontend,
        offerings: [
            'custom website design',
            'front-end development',
            'back-end development',
            'integration with third-party servies',
            'scalability and performance optimization'
        ],
        link:"/custom"
    },
    {
        title: 'other website platforms',
        img: others,
        offerings: [
            'platform-specific design and development',
            'migration services',
            'cross-platform compatibility',
            'accessibility compliance',
            'continous improvement'
        ],
        link:"/"
    },
]