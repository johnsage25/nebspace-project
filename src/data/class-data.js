import shape1 from '@assets/img/bg/bg-shape.jpg';
import img_1 from '@assets/img/class/6.jpg';
import img_2 from '@assets/img/class/5.jpg';
import img_3 from '@assets/img/class/4.jpg';
import img_4 from '@assets/img/class/3.jpg';
import img_5 from '@assets/img/class/1.jpg';
import img_6 from '@assets/img/class/2.jpg';
import author_1 from '@assets/img/teacher/small-1.png';


const class_data = [
  // home class data
  {
    id:1,
    icon:'flaticon-experience',
    title:'Expertise',
    teaser:'Our Board-Certified Behavior Analysts bring years of clinical experience and stay updated on the latest research to provide comprehensive assessments and personalized treatment plans.',
    btn:'View Details',
    shape:shape1,
    price: 170.00,
  },
  {
    id:2,
    icon:'flaticon-education',
    title:'Individualized Care',
    teaser:'We understand that each individual is unique, with their own strengths, challenges, and aspirations. Our tailored approach ensures that therapy is customized to meet each client\'s specific needs.',
    btn:'View Details',
    shape:shape1,
    clrClass:'clr-2',
    price: 160.00,
  },
  {
    id:3,
    icon:'flaticon-family-1',
    title:'Family Centered',
    teaser:'We believe that involving family in the therapeutic process is crucial. Our programs equip families with the skills and knowledge to support their loved ones effectively.',
    btn:'View Details',
    shape:shape1,
    price: 150.00,
  },
  {
    id:4,
    icon:'flaticon-thumb-ups',
    title:'Ethical Standards',
    teaser:'Ethics and integrity are the cornerstones of our practice. We adhere to the highest professional standards as laid out by the Behavior Analyst Certification Board (BACB).',
    btn:'View Details',
    shape:shape1,
    clrClass:'clr-2',
    price: 145.00,
  },
  {
    id:5,
    icon:'flaticon-thumb-ups',
    title:'Convenient Options',
    teaser:'We offer in-home, in-center, in-school, and telehealth services to make ABA therapy as accessible as possible. Our flexible scheduling accommodates busy lives.',
    btn:'View Details',
    shape:shape1,
    // clrClass:'clr-2',
    price: 145.00,
  },
  // classes page data
  {
    id:6,
    img:img_1,
    title:'Sports Class',
    teaser:'Each day at Mother’s Pride is a cele bration! We celebrate all.',
    authorImg:author_1,
    authorName:'Alexia Honix',
    price: 160.00,
    btn:'Join Now',
    delay:'.3s',
  },
  {
    id:7,
    img:img_2,
    title:'Music Class',
    teaser:'Each day at Mother’s Pride is a cele bration! We celebrate all.',
    authorImg:author_1,
    authorName:'Steve Smith',
    price: 180.00,
    btn:'Join Now',
    delay:'.4s',
  },
  {
    id:8,
    img:img_3,
    title:'Drawing Class',
    teaser:'Each day at Mother’s Pride is a cele bration! We celebrate all.',
    authorImg:author_1,
    authorName:'Andrew Tye',
    price: 240.00,
    btn:'Join Now',
    delay:'.5s',
  },
  {
    id:9,
    img:img_4,
    title:'Languase Class',
    teaser:'Each day at Mother’s Pride is a cele bration! We celebrate all.',
    authorImg:author_1,
    authorName:'Peterson',
    price: 270.00,
    btn:'Join Now',
    delay:'.6s',
  },
  {
    id:10,
    img:img_5,
    title:'Hospitality Class',
    teaser:'Each day at Mother’s Pride is a cele bration! We celebrate all.',
    authorImg:author_1,
    authorName:'Kane William',
    price: 215.00,
    btn:'Join Now',
    delay:'.7s',
  },
  {
    id:11,
    img:img_6,
    title:'Talented Explorer',
    teaser:'Each day at Mother’s Pride is a cele bration! We celebrate all.',
    authorImg:author_1,
    authorName:'David Warner',
    price: 175.00,
    btn:'Join Now',
    delay:'.8s',
  }
]

export default class_data;