///these are data used for cards in our services section on the home page
import digitMark from './servi-icons/digital-mark.svg';
import digitMarkDark from './servi-icons/digital-mark-dark.svg';
import eComer from './servi-icons/e-commer.svg';
import eComerDark from './servi-icons/e-commer-dark.svg';
import ppc from './servi-icons/PPC-Advert.svg';
import ppcDark from './servi-icons/PPC-dark.svg';
import seo from './servi-icons/SEO-solutions.svg';
import seoDark from './servi-icons/SEO-dark.svg';
import webDesign from './servi-icons/web-design.svg';
import webDesignDark from './servi-icons/web-design-dark.svg';
import webMain from './servi-icons/web-maintain.svg';
import webMainDark from './servi-icons/web-maintain-dark.svg';

export const serviceData = [
    {
        icon:{
            light: digitMark,
            dark: digitMarkDark
        },
        title:'Digital Marketing Consulting & Audit',
        content:"Providing comprehensive digital marketing consulting and audit services to optimize online strategies, enhance market presence, and maximize ROI."
    },
    {
        icon:{
            light : ppc,
            dark : ppcDark
        },
        title:'PPC Advertising Management',
        content:"Expert PPC Advertising Management for optimized campaigns, increased ROI, and targeted audience engagement."
    },
    {
        icon:{
            light: seo,
            dark: seoDark
        },
        title:'SEO services',
        content:"Elevate your online visibility with our comprehensive SEO services, driving organic traffic and maximizing your digital presence."
    },
    {
        icon:{
            light : eComer,
            dark : eComerDark
        },
        title:'E-commerce Solutions',
        content:"Comprehensive e-commerce solutions, from user-friendly platforms to seamless payment integration, optimizing online businesses for success."
    },
    {
        icon:{
            light : webDesign,
            dark : webDesignDark
        },
        title:'Website Design & Development',
        content:"Crafting innovative and responsive websites that captivate audiences and elevate online experiences."
    },
    {
        icon:{
            light : webMain,
            dark : webMainDark
        },
        title:'Website Maintenance & Support',
        content:"Ensure seamless online presence with our comprehensive website maintenance and support services, keeping your site up-to-date, secure, and optimized for peak performance."
    }
]