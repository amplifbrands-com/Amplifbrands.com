import projectImage1 from "/portfolio-page/project1.png"
import fabCoast from "/portfolio-page/fabcoast.png"

import fabCoast1 from "/portfolio-page/fabcoast1.png"
import fabCoast2 from "/portfolio-page/fabcoast2.png"
import jinaMart from "/portfolio-page/jinamart.png"
import jinaMart1 from "/portfolio-page/jinamart1.png"
import jinaMart2 from "/portfolio-page/jinamart2.png"
import poshAtWork from "/portfolio-page/posh-at-work.png"
import poshAtWork1 from "/portfolio-page/posh-at-work1.png"
import poshAtWork2 from "/portfolio-page/posh-at-work2.png"
import rankFast from "/portfolio-page/rank-fast.png"
import rankFast1 from "/portfolio-page/rank-fast1.png"
import rankFast2 from "/portfolio-page/rank-fast2.png"
import projectImage2 from "/portfolio-page/project2.png"

import webDesign from "/portfolio-page/icons/web-design-icon.svg"
import webDesignDark from "/portfolio-page/icons/web-design-dark.svg"
import webDev from "/portfolio-page/icons/web-development-icon.svg"
import webDevDark from "/portfolio-page/icons/web-development-dark.svg"
import ecommerce from "/portfolio-page/icons/ecommerce-icon.svg"
import ecommerceDark from "/portfolio-page/icons/ecommerce-dark.svg"

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
        serviceCategory:[
            {icon:{light:webDesign , dark:webDesignDark}, category:'Web Design'},
            {icon:{light:webDev, dark:webDevDark}, category:'Web Development'},
            {icon:{light:ecommerce, dark:ecommerceDark}, category:'E-commerce'},
        ],
        websiteLink:'https://fabcoast.in',
        youtubeLink:'',
    },
    {
        id: 2,
        name:'JinaMart',
        title:'"JinaMart" - Haven for your lifestyle',
        subtitle:"Our collaboration with Amplif ensures an extraordinary website design, seamlessly blending tech innovation with affordability. Elevate your lifestyle with JinaMart – where cutting-edge design meets user-friendly excellence.",
        description:"JinaMart proudly collaborates with Amplif for an unparalleled digital transformation. As a tech-driven online retailer offering sophisticated yet affordable Home Accessories, Car, and Travel organizers, our collaboration with Amplif ensures a cutting-edge website development. Experience seamless navigation and elevated aesthetics as we redefine the online shopping experience, blending technology and affordability with style.",
        mainImage:jinaMart,
        image1:jinaMart1,
        image2:jinaMart2,
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
        description:"Rank Fast, a dynamic marketing agency specializing in SEO services since 2019, is proud to announce its collaboration for an exciting chapter in website development. With a proven track record in ed-tech, our innovative solutions drive growth and propel clients to new heights. As we embark on this thrilling expedition, we invite you to join us in redefining the world of online education and marketing. Together, let's anticipate many more years of success and growth ahead.",
        mainImage:rankFast,
        image1:rankFast1,
        image2:rankFast2,
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
        description:"Posh at Work, a government-supported organization championing woman safety at workplaces. With a decade-long commitment since the notification of India's anti-sexual harassment law, they've come a long way. At Posh at Work, their vision aligns with the Supreme Court's mandate, offering comprehensive 360-degree solutions against sexual harassment. They aim to bridge the gap between law and implementation, working with both State and non-State actors to ensure it transcends mere formality. Join them in their unwavering dedication to fostering safer workplaces for women.",
        mainImage:poshAtWork,
        image1:poshAtWork1,
        image2:poshAtWork2,
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
        serviceCategory:[
            {icon:{light:'', dark:''}, category:''},
            {icon:{light:'', dark:''}, category:''},
            {icon:{light:'', dark:''}, category:''},
        ],
        websiteLink:'',
        youtubeLink:'',
    },

]