import logo from '@assets/img/logo/nes-logo.png';
import logoWhite from '@assets/img/logo/nes-logo-white.svg';

const footer_data = {
    "description": {
        id: 1,
        logo: logo,
        logoWhite: logoWhite,
        teaser: 'We are passionate about fostering growth, independence, and happiness, as we work hand-in-hand with families and communities to build a more inclusive tomorrow.',
        socialTitle: 'Social',
        newsTitle: 'Join Our Newsletter',
        newsBtn: 'Subscribe now',
        social_icons: [
            {
                id: 1,
                icon: 'fa-brands fa-facebook-f',
                url: 'https://www.facebook.com/',
                name: 'Facebook',
            },
            {
                id: 2,
                icon: 'fa-brands fa-twitter',
                url: 'https://twitter.com/',
                name: 'Twitter',
            },
            {
                id: 3,
                icon: 'fa-brands fa-youtube',
                url: 'https://www.youtube.com/',
                name: 'Youtube',
            }
        ]
    },
    "quick_links": {
        id: 2,
        title: 'Quick links',
        menus: [
            {
                id: 1,
                menu: 'About',
                path: '/about',
            },
            {
                id: 2,
                menu: 'Services',
                path: '/services',
            },

            {
                id: 5,
                menu: 'News',
                path: '/news',
            },
            {
                id: 6,
                menu: 'Contact',
                path: '/contact',
            }
        ]
    },
    "program_links": {
        id: 3,
        title: 'Services',
        programs: [
            {
                id: 1,
                menu: 'Initial and Ongoing Assessments',
                path: '#',
            },
            {
                id: 2,
                menu: 'One-on-One ABA Therapy',
                path: '#',
            },
            {
                id: 3,
                menu: 'Social Skills Groups',
                path: '#',
            },
            {
                id: 4,
                menu: 'Parent Training Programs',
                path: '#',
            },
            {
                id: 5,
                menu: 'School Consultation Services',
                path: '#',
            }
        ]
    },

    "contact_info": {
        id: 4,
        title: 'Contact Us',
        infos: [
            {
                id: 1,
                icon: 'fa-light fa-location-dot',
                url: '#',
                title: 'The Austism Center 150 Bank Street, Attleboro, MA 02703',
            },
            {
                id: 2,
                icon: 'fa-light fa-phone',
                url: 'tel:1-844-ABA-TALK',
                title: '1-844-ABA-TALK',
            },
            {
                id: 3,
                icon: 'fa-light fa-envelope',
                url: 'mailto:info@nebehaviouralservices.com',
                title: 'info@nebehaviouralservices.com',
            }
        ]
    },
}

export default footer_data;
