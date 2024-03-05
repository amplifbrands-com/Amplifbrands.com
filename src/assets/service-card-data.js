///these are data used for cards in our services section on the home page
import wordpress from "./servi-icons/wordpress.svg"
import shopify from "./servi-icons/shopify.svg"
import wix from "./servi-icons/wix.svg"
import customize from "./servi-icons/customize.svg"
import googleAds from "./servi-icons/google-ads.svg"
import facebook from "./servi-icons/facebook.svg"
import linkedin from "./servi-icons/linkedin.svg"
import youtube from "./servi-icons/youtube.svg"

export const serviceData = [
    { name:"Website Services",
      services: [
            {
                icon: wordpress,
                title: "WordPress Development"
            },
            {
                icon: shopify,
                title: "Shopify Development"
            },
            {
                icon: wix,
                title: "WIX Development"
            },
            {
                icon: customize,
                title: "Custom Website Development"
            },
        ]
    },
    { name:"Paid Advertising",
    services: [
          {
              icon: googleAds,
              title: "Google Ads"
          },
          {
              icon: facebook,
              title: "Facebook Ads"
          },
          {
              icon: linkedin,
              title: "LinkedIn Ads"
          },
          {
              icon: youtube,
              title: "YouTube Ads"
          },
      ]
  },

]