import projectImage1 from "/portfolio-page/project1.png"
import fabCoast from "/portfolio-page/fabcoast.png"
import fabCoastMobile from "/portfolio-page/fabcoast-mobile.png"
import fabCoastDesktop from "/portfolio-page/fabcoast-desktop.png"
import fabCoast1 from "/portfolio-page/fabcoast-1.png"
import fabCoast2 from "/portfolio-page/fabcoast-2.png"
import jinaMart from "/portfolio-page/jinamart.png"
import poshAtWork from "/portfolio-page/posh-at-work.png"
import rankFast from "/portfolio-page/rank-fast.png"
import projectImage2 from "/portfolio-page/project2.png"

import webDesign from "/portfolio-page/icons/web-design-icon.svg"
import webDev from "/portfolio-page/icons/web-development-icon.svg"
import ecommerce from "/portfolio-page/icons/ecommerce-icon.svg"

export const projects = [
    {
        id: 1,
        name:'fabcoast',
        title:'"FABCOAST" - Conscious style partner',
        subtitle:"We embarked on a comprehensive redesign and optimization journey for FabCoast's eCommerce platform. From logo design to website building, we've created a cohesive visual design that reflects the essence of style-conscious individuals.",
        description:"FabCoast, a prominent player in the fashion industry, is known for its trendsetting clothing that resonates with style-conscious individuals. The collaboration between FabCoast and Amplif signifies a harmonious fusion of technical proficiency and creative innovation, delivering a website that not only meets the expectations of fashion-forward consumers but sets a new standard in the online retail landscape. The objective was to seamlessly integrate industry best practices with unique aesthetic, ensuring that the online platform reflects the brand's identity authentically.",
        mainImage:fabCoast,
        image1:fabCoast1,
        image2:fabCoast2,
        desktopImage:fabCoastDesktop,
        mobileImage:fabCoastMobile,
        serviceCategory:[
            {icon:{light:webDesign , dark:''}, category:'Web Design'},
            {icon:{light:webDev, dark:''}, category:'Web Development'},
            {icon:{light:ecommerce, dark:''}, category:'E-commerce'},
        ],
        websiteLink:'https://fabcoast.in',
        youtubeLink:'',
    },
    {
        id: 2,
        name:'JinaMart',
        title:'"JinaMart" - Haven for your lifestyle',
        subtitle:"Our collaboration with Amplif ensures an extraordinary website design, seamlessly blending tech innovation with affordability. Elevate your lifestyle with JinaMart – where cutting-edge design meets user-friendly excellence.",
        description:'',
        mainImage:jinaMart,
        image1:'',
        image2:'',
        desktopImage:'',
        mobileImage:'',
        serviceCategory:[
            {icon:{light:'', dark:''}, category:''},
            {icon:{light:'', dark:''}, category:''},
            {icon:{light:'', dark:''}, category:''},
        ],
        websiteLink:'',
        youtubeLink:'',
    },
    {
        id: 3,
        name:'Rank Fast',
        title:'"Rank Fast"',
        subtitle:"UI (User Interface) design focuses on the look and feel of a digital product, while UX (User Experience) design centers on optimizing the overall user journey for a seamless and enjoyable interaction.",
        description:'',
        mainImage:rankFast,
        image1:'',
        image2:'',
        desktopImage:'',
        mobileImage:'',
        serviceCategory:[
            {icon:{light:'', dark:''}, category:''},
            {icon:{light:'', dark:''}, category:''},
            {icon:{light:'', dark:''}, category:''},
        ],
        websiteLink:'jinamart.com',
        youtubeLink:'',
    },
    {
        id: 4,
        name:'POSH at Work',
        title:'"POSH at Work" - Building Blocks for Workplace Safety',
        subtitle:"SEO services involve optimizing a website's content, structure, and online presence to improve its visibility on search engines and attract organic traffic.",
        description:'',
        mainImage:poshAtWork,
        image1:'',
        image2:'',
        desktopImage:'',
        mobileImage:'',
        serviceCategory:[
            {icon:{light:'', dark:''}, category:''},
            {icon:{light:'', dark:''}, category:''},
            {icon:{light:'', dark:''}, category:''},
        ],
        websiteLink:'',
        youtubeLink:'',
    },
    {
        id: 5,
        name:'',
        title:'"Elevate Your Digital Experience: Vibrant Living, Seamless Shopping."',
        subtitle:"E-commerce solutions are digital platforms that facilitate online buying and selling by providing tools for online store creation, payment processing, inventory management, and customer engagement.",
        description:'',
        mainImage:projectImage1,
        image1:'',
        image2:'',
        desktopImage:'',
        mobileImage:'',
        serviceCategory:[
            {icon:{light:'', dark:''}, category:''},
            {icon:{light:'', dark:''}, category:''},
            {icon:{light:'', dark:''}, category:''},
        ],
        websiteLink:'',
        youtubeLink:'',
    },
    {
        id: 6,
        name:'',
        title:'"Crafting Stories, Painting Hues: Vibrant Living, Refreshed"',
        subtitle:"Content creation is the process of generating and publishing information, media, or other forms of expression to engage and attract an audience, often for digital platforms.",
        description:'',
        mainImage:projectImage2,
        image1:'',
        image2:'',
        desktopImage:'',
        mobileImage:'',
        serviceCategory:[
            {icon:{light:'', dark:''}, category:''},
            {icon:{light:'', dark:''}, category:''},
            {icon:{light:'', dark:''}, category:''},
        ],
        websiteLink:'',
        youtubeLink:'',
    },

]