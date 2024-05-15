import TimelineView from './components/TimelineView'

import './App.css'

const timelineItemsList = [
  {
    id: '1',
    categoryId: 'COURSE',
    title: '10 JUNE 2022',
    courseTitle: 'Static Website',
    description:
      'Build your own personal portfolio website and a website to host conferences and events.  Publish your website and share it with your friends, family and beyond.',
    duration: '10 days',
    tagsList: [
      {
        id: 'c31b2ad8-f766-11eb-9a03-0242ac130003',
        name: 'HTML Elements',
      },
      {
        id: 'c31b2d08-f766-11eb-9a03-0242ac130003',
        name: 'Class Attribute',
      },
      {
        id: 'c31b2dee-f766-11eb-9a03-0242ac130003',
        name: 'Text Properties',
      },
      {
        id: 'c31b2eb6-f766-11eb-9a03-0242ac130003',
        name: 'Bootstrap',
      },
      {
        id: 'c31b2f6a-f766-11eb-9a03-0242ac130003',
        name: 'Box Properties',
      },
      {
        id: 'c31b347e-f766-11eb-9a03-0242ac130003',
        name: 'Layout',
      },
      {
        id: 'c31b358c-f766-11eb-9a03-0242ac130003',
        name: 'Flexbox',
      },
    ],
  },
  {
    id: '2',
    categoryId: 'PROJECT',
    title: '21 JUNE 2022',
    projectTitle: 'Tourism Website',
    description:
      'A tourism website enables the user to browse through the images of popular destinations.',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-s4-img.png',
    duration: '1 hr',
    projectUrl: 'https://tourismapp.ccbp.tech/',
  },
  {
    id: '3',
    categoryId: 'COURSE',
    title: '5 July 2022',
    courseTitle: 'Responsive Website',
    description:
      'Build a responsive website that appears beautifully on the screen of any size. Develop a personal portfolio website, an E-commerce product listing website and a website to host conferences and events.',
    duration: '25 days',
    tagsList: [
      {
        id: '551e2b7e-f767-11eb-9a03-0242ac130003',
        name: 'Responsive Web Design',
      },
      {
        id: '551e2de0-f767-11eb-9a03-0242ac130003',
        name: 'Multiple Layouts',
      },
      {
        id: '551e3114-f767-11eb-9a03-0242ac130003',
        name: 'Column Wrapping',
      },
      {
        id: '551e31e6-f767-11eb-9a03-0242ac130003',
        name: 'Navbar',
      },
      {
        id: '551e32a4-f767-11eb-9a03-0242ac130003',
        name: 'Designing Layouts',
      },
      {
        id: '551e334e-f767-11eb-9a03-0242ac130003',
        name: 'Inheritance',
      },
      {
        id: '551e3402-f767-11eb-9a03-0242ac130003',
        name: 'CSS Gradients',
      },
    ],
  },
  {
    id: '4',
    categoryId: 'PROJECT',
    title: '30 JULY 2022',
    projectTitle: 'Food Munch',
    description: 'Food Much Website is a user-centric food tech website.',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',
    duration: '2 hrs',
    projectUrl: 'https://fm.ccbp.tech/',
  },
  {
    id: '5',
    categoryId: 'COURSE',
    title: '30 AUGUST 2022',
    courseTitle: 'Dynamic Website',
    description:
      'Learn the fundamental concepts in JavaScript and apply them to build dynamic and interactive web applications like Counter, Guessing Game, Chat Web app, E-commerce web app, etc.',
    duration: '30 days',
    tagsList: [
      {
        id: 'd4743c06-f767-11eb-9a03-0242ac130003',
        name: 'Declaring Variables',
      },
      {
        id: 'd4743ecc-f767-11eb-9a03-0242ac130003',
        name: 'Comparison Operator',
      },
      {
        id: 'd4743fe4-f767-11eb-9a03-0242ac130003',
        name: 'Functions',
      },
      {
        id: 'd47440d4-f767-11eb-9a03-0242ac130003',
        name: 'Object',
      },
      {
        id: 'd474434a-f767-11eb-9a03-0242ac130003',
        name: 'DOM Manipulations',
      },
      {
        id: 'd474443a-f767-11eb-9a03-0242ac130003',
        name: 'Loops',
      },
      {
        id: 'd4744516-f767-11eb-9a03-0242ac130003',
        name: 'Local Storage',
      },
    ],
  },
  {
    id: '6',
    categoryId: 'PROJECT',
    title: '6 SEPTEMBER 2022',
    projectTitle: 'Todos Application',
    description:
      'This app helps users to track the day to day tasks. Users can create, edit, track the status of each todo item and able to persist them over page reloads.',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png',
    duration: '3 hrs',
    projectUrl: 'https://todossapp.ccbp.tech/',
  },
  {
    id: '7',
    categoryId: 'PROJECT',
    title: '15 OCTOBER 2022',
    projectTitle: 'Wikipedia Search Application',
    description:
      'Using this Wikipedia Search Application users can search and view curated results and can see detailed explanations in Wikipedia by clicking on the specific result.',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/wiki-logo-img.png',
    duration: '4 hrs',
    projectUrl: 'https://wikiseaarch.ccbp.tech/',
  },
  {
    id: '8',
    categoryId: 'COURSE',
    title: '15 NOVEMBER 2022',
    courseTitle: 'RWD using Flexbox',
    description:
      'Learn to develop responsive layouts using CSS Flexbox and CSS Media Queries.',
    duration: '15 days',
    tagsList: [
      {
        id: '34e6b208-f768-11eb-9a03-0242ac130003',
        name: 'Sizing Elements',
      },
      {
        id: '34e6b460-f768-11eb-9a03-0242ac130003',
        name: 'Flexbox Layout',
      },
      {
        id: '34e6b76c-f768-11eb-9a03-0242ac130003',
        name: 'Min & Max sizes',
      },
      {
        id: '34e6b83e-f768-11eb-9a03-0242ac130003',
        name: 'Media Query Syntax',
      },
      {
        id: '34e6b8fc-f768-11eb-9a03-0242ac130003',
        name: 'Logical Operators',
      },
      {
        id: '34e6ba28-f768-11eb-9a03-0242ac130003',
        name: 'CSS box-sizing property',
      },
      {
        id: '34e6baf0-f768-11eb-9a03-0242ac130003',
        name: 'Media Features',
      },
    ],
  },
  {
    id: '9',
    categoryId: 'PROJECT',
    title: '1 DECEMBER 2021',
    projectTitle: 'Coffee Website',
    description:
      'This Coffee website gives you a brief intro of Coffee. This page is responsive enabling to view it across various devices.',
    imageUrl:
      'https://res.cloudinary.com/dpz5nbfpu/image/upload/v1715798631/tqsjijcfiwzrwu5nodcq.png',
    duration: '5 hr',
    projectUrl: 'https://rakeshcoffeewebsite.netlify.app/',
  },
  {
    id: '10',
    categoryId: 'COURSE',
    title: '12 NOVEMBER 2023',
    courseTitle: 'React JS - Getting Started',
    description:
      'Learn how to build dynamic web applications with the React JS library. When you finish this course, you will be comfortable in creating a modern, clean, and maintainable application in React JS, from scratch.',
    duration: '4 Months',
    tagsList: [
      {
        id: '94947ad2-f768-11eb-9a03-0242ac130003',
        name: 'Components',
      },
      {
        id: '94947d52-f768-11eb-9a03-0242ac130003',
        name: 'Lists',
      },
      {
        id: '94947e4c-f768-11eb-9a03-0242ac130003',
        name: 'Conditional Rendering',
      },
      {
        id: '94947f14-f768-11eb-9a03-0242ac130003',
        name: 'setState()',
      },
      {
        id: '94948270-f768-11eb-9a03-0242ac130003',
        name: 'Updating Phase',
      },
      {
        id: '94948342-f768-11eb-9a03-0242ac130003',
        name: 'Routing',
      },
      {
        id: '94948400-f768-11eb-9a03-0242ac130003',
        name: 'API Calls',
      },
    ],
  },
  {
    id: '11',
    categoryId: 'PROJECT',
    title: '15 FEBRUARY 2024',
    projectTitle: 'IPL Dashboard',
    description:
      'IPL Dashboard application is an application like Time Tabled all the details of IPL Matches BY fetching the json data where users can see the list of matches.',
    imageUrl:
      'https://res.cloudinary.com/dpz5nbfpu/image/upload/v1715799395/oa0mpcj2mzrq8ql4ukpl.png',
    duration: '6 hrs',
    projectUrl: 'https://gaddiiplapp.ccbp.tech/',
  },
  {
    id: '12',
    categoryId: 'PROJECT',
    title: '5 APRIL 2024',
    projectTitle: 'Nxt Trendz',
    description:
      'Nxt Trendz application is an E-commerce application like Amazon, Flipkart where users can log in and see the list of products with search, filters, sort by, etc.',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-img.png',
    duration: '7 hrs',
    projectUrl: 'https://gaddinxttrendz.ccbp.tech/',
  },
]

const App = () => <TimelineView timelineItemsList={timelineItemsList} />

export default App
