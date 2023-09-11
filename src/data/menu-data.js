const menu_data = [
  {
    id: 1,
    hasDropdown: false,
    title: 'Home',
    link: '/',
    submenus: []
  },
  {
    id:2,
    hasDropdown: false,
    title: 'About',
    link: '/about',
  },
  {
    id: 3,
    title: 'Our Services',
    hasDropdown: true,
    link: '#',
    submenus: [
      {title:'Initial and Ongoing Assessments',link:'#', count:'01',},
      {title:'One-on-One ABA Therapy',link:'#', count:'02', },
      {title:'Social Skills Groups',link:'#', count:'03',},
      {title:'Parent Training Programs',link:'#', count:'04',},
      {title:'School Consultation Services',link:'#', count:'05',},

    ]
  },

  {
    id:6,
    hasDropdown: false,
    title: 'Community Resources',
    link: '/community-resources',

  },
  {
    id:7,
    hasDropdown: false,
    title: 'Contact',
    link: '/contact',
  },
]

export default menu_data;
