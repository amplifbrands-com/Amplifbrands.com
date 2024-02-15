import digitalMarketing from "/service-page/images/digital-marketing.png"
import advertisement from "/service-page/images/advertisement.png"
import ecommerce from "/service-page/images/e-commerce.png"
import seoServices from "/service-page/images/seo-services.png"
import websiteDevelopment from "/service-page/images/website-development.png"
import websiteMaintenance from "/service-page/images/website-maintenance.png"

import deliverable1 from "/service-page/service-deliverables-icons/Design_layout_page_sketch_sketching.svg"
import deliverable2 from "/service-page/service-deliverables-icons/engineering_process_prototype_prototyping.svg"
import deliverable3 from "/service-page/service-deliverables-icons/Brand_company_identity_letter_presentation.svg"
import deliverable4 from "/service-page/service-deliverables-icons/creative_creativity_head_idea_thinking.svg"
import deliverable5 from "/service-page/service-deliverables-icons/Art_computer_design_digital_studio.svg"
import deliverable6 from "/service-page/service-deliverables-icons/Content_Document_Gear_Management_Web.svg"
import deliverable7 from "/service-page/service-deliverables-icons/Marketing_Seo_Viral.svg"
import deliverable8 from "/service-page/service-deliverables-icons/hand_bag_shopping_bag.svg"
import deliverable9 from "/service-page/service-deliverables-icons/Hand_marketing_retail_sales_selling.svg"
import deliverable10 from "/service-page/service-deliverables-icons/increase-product-sales.svg"
import deliverable11 from "/service-page/service-deliverables-icons/Internet_Marketing_Optimization_Seo.svg"
import deliverable12 from "/service-page/service-deliverables-icons/marketing_Promotion_Seo.svg"
import deliverable13 from "/service-page/service-deliverables-icons/marketing_Seo_Online.svg"
import deliverable14 from "/service-page/service-deliverables-icons/designer_sketch_tools.svg"
import deliverable15 from "/service-page/service-deliverables-icons/design_human_ruler_size_thinking.svg"
import deliverable16 from "/service-page/service-deliverables-icons/broadcast_marketing_television_tv.svg"
import deliverable17 from "/service-page/service-deliverables-icons/secure-website.svg"
import deliverable18 from "/service-page/service-deliverables-icons/technical-issues.svg"
import deliverable19 from "/service-page/service-deliverables-icons/technical-support.svg"

import clock from "/service-page/service-key-icons/clock.svg"
import barChart from "/service-page/service-key-icons/bar-chart.svg"
import trendingUp from "/service-page/service-key-icons/trending-up.svg"
import search from "/service-page/service-key-icons/search.svg"
import research from "/service-page/service-key-icons/research.svg"
import ad from "/service-page/service-key-icons/ad.svg"
import lightCampaign from "/service-page/service-key-icons/light_campaign.svg"
import monitoring from "/service-page/service-key-icons/monitoring.svg"
import wallet from "/service-page/service-key-icons/wallet.svg"
import cart from "/service-page/service-key-icons/cart.svg"
import payment from "/service-page/service-key-icons/payment.svg"
import inventory from "/service-page/service-key-icons/inventory.svg"
import windowsLogo from "/service-page/service-key-icons/windows-logo.svg"
import truck from "/service-page/service-key-icons/truck.svg"
import uiux from "/service-page/service-key-icons/ui-ux.svg"
import code from "/service-page/service-key-icons/code.svg"
import backend from "/service-page/service-key-icons/backend.svg"
import contentCreation from "/service-page/service-key-icons/content-creation.svg"
import backup from "/service-page/service-key-icons/backup.svg"
import updates from "/service-page/service-key-icons/updates.svg"
import performance from "/service-page/service-key-icons/performance.svg"
import computerSettings from "/service-page/service-key-icons/computer-settings.svg"

export const services = [
    {   
      id: 1,
      title: "Digital Marketing Consulting & Audit",
      description: "Amplif sees digital marketing consulting and audits as crucial steps in understanding a client's current digital presence and crafting a roadmap for improvement. It believes in providing insightful strategies and actionable recommendations to help clients achieve their digital marketing objectives.",
      image: digitalMarketing,
      deliverables: [
            { icon: deliverable1, subtitle: "Customized digital strategy development"},
            { icon: deliverable2, subtitle: "Data-driven insights and recommendations"},
            { icon: deliverable3, subtitle: "Comprehensive digital audit and analysis"},
            { icon: deliverable4, subtitle: "Expert guidance on improving online presence"}
        ],
      keyActivities: [
            { icon: clock, subtitle: "Review of current digital marketing efforts."},
            { icon: barChart, subtitle: "Analysis of website analytics and performance metrics."},
            { icon: trendingUp, subtitle: "Assessment of social media strategies and engagement."},
            { icon: search, subtitle: "Identification of strengths, weaknesses, opportunities, and threats (SWOT analysis)."}
        ]
    },
    {   
      id: 2,
      title: "PPC Advertising Management",
      description: "Amplif understands the importance of targeted advertising and believes in optimizing PPC campaigns to maximize ROI for its clients. It focuses on data-driven approaches and continuous optimization to ensure that every advertising dollar is effectively utilized.",
      image: advertisement,
      deliverables: [
        { icon: deliverable5, subtitle: "Increased website traffic and leads."},
        { icon: deliverable6, subtitle: "Improved ad performance and conversion rates."},
        { icon: deliverable7, subtitle: "Detailed reports and analytics on campaign performance."}
    ],

      keyActivities:[
        { icon: research, subtitle: "Keyword research and selection."},
        { icon: ad, subtitle: "Ad copywriting and design."},
        { icon: lightCampaign, subtitle: "Campaign setup and configuration."},
        { icon: monitoring, subtitle: "Ongoing monitoring and optimization."},
        { icon: wallet, subtitle: "Budget management and ROI tracking."}
      ]
    },
    {   
      id: 3,
      title: "E-commerce Solutions",
      description: "Amplif views e-commerce solutions as a means to help clients expand their online presence and drive sales. It aims to create seamless and secure e-commerce platforms that offer a superior shopping experience to customers while enabling clients to manage their online storefront efficiently.",
      image: ecommerce,
      deliverables: [
        { icon: deliverable8, subtitle: "Fully functional e-commerce website tailored to business needs. "},
        { icon: deliverable9, subtitle: "Seamless shopping experience for customers."},
        { icon: deliverable10, subtitle: "Increased sales and revenue opportunities."}
    ],

      keyActivities:[
        { icon: cart, subtitle: "User-friendly product catalogs and shopping carts."},
        { icon: payment, subtitle: "Secure payment gateways and checkout processes."},
        { icon: inventory, subtitle: "Inventory management and order processing."},
        { icon: windowsLogo, subtitle: "Customization options for branding and design."},
        { icon: truck, subtitle: "Integration with shipping and fulfillment services."}
      ]
    },
    {   
      id: 4,
      title: "SEO Services",
      description: "Amplif recognizes the significance of SEO in driving organic traffic and enhancing online visibility. It emphasizes the implementation of ethical and effective SEO practices to improve search engine rankings and help clients reach their target audience.",
      image: seoServices,
      deliverables: [
        { icon: deliverable11, subtitle: "Higher search engine rankings for targeted keywords."},
        { icon: deliverable12, subtitle: "Increased organic traffic and user engagement."},
        { icon: deliverable13, subtitle: "Enhanced website authority and credibility."}
    ],

      keyActivities:[
        { icon: research, subtitle: "On-page optimization (e.g., meta tags, content optimization)."},
        { icon: ad, subtitle: "Off-page optimization (e.g., link building, social media signals)."},
        { icon: lightCampaign, subtitle: "Technical SEO (e.g., site speed optimization, mobile-friendliness)."},
        { icon: monitoring, subtitle: "Local SEO optimization (for businesses targeting local markets)."}
      ]
    },
    {   
      id: 5,
      title: "Website Design & Development",
      description: "Amplif values website design and development as the foundation of a strong online presence. It prioritizes user-centric design principles and robust development techniques to create engaging websites that reflect the client's brand identity and resonate with their target audience.",
      image: websiteDevelopment,
      deliverables: [
        { icon: deliverable14, subtitle: "Professionally designed and developed website."},
        { icon: deliverable15, subtitle: "Enhanced brand identity and online presence."},
        { icon: deliverable16, subtitle: "Improved user engagement and conversion rates."}
    ],

      keyActivities:[
        { icon: uiux, subtitle: "User experience (UX) and interface (UI) design."},
        { icon: code, subtitle: "Front-end development (HTML, CSS, JavaScript)."},
        { icon: backend, subtitle: "Back-end development (server-side scripting, database integration)."},
        { icon: contentCreation, subtitle: "Content creation and management."}
      ]
    },
    {   
      id: 6,
      title: "Website Maintenance & Support",
      description: "Amplif understands the importance of ongoing website maintenance and support in ensuring the longevity and reliability of a client's digital assets. It is committed to providing proactive maintenance services and responsive technical support to address any issues promptly and keep websites running smoothly.",
      image: websiteMaintenance,
      deliverables: [
        { icon: deliverable17, subtitle: "Reliable and secure website operation."},
        { icon: deliverable18, subtitle: "Reduced downtime and technical issues."},
        { icon: deliverable19, subtitle: "Access to technical support and assistance as needed."}
    ],

      keyActivities:[
        { icon: backup, subtitle: "Regular website backups and security scans."},
        { icon: computerSettings, subtitle: "Software updates (e.g., CMS, plugins, frameworks)."},
        { icon: updates, subtitle: "Content updates and revisions."},
        { icon: performance, subtitle: "Performance optimization and speed enhancements."}
      ]
    }
  ]