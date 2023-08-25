// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
import portImage from "./assets/portImage.jpg"
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import php from "./assets/techstack/php.png";
import sql from "./assets/techstack/sql.png";
import wordpress from "./assets/techstack/wordpress.png";
import airtable from "./assets/techstack/airtable.png";

// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";
import blockchain from "./assets/projects/blockchain.png";
import hostelmanagement from "./assets/projects/hostelmangement.png";
import foodies from "./assets/projects/foodies.jpeg";
import fooddelivery from "./assets/projects/fooddelivery.jpeg";
import nysc from "./assets/projects/nysc.jpeg";

// Logos
/*export const logos = {
  logogradient: logogradient,
  logo: logo,
};*/

// Enter your Personal Details here
export const personalDetails = {
  name: "Johnson Victory",
  tagline: "I Am A Front-end Developer",
  img: portImage,
  about: `I am an expert web developer, I have honed my skills and expertise to help businesses achieve their goals and objectives.I am web developer who is willing to go above and beyond on any project. As a web developer, I have a deep understanding of various programming languages such as HTML, CSS, JavaScript, and PHP. I am proficient in using frameworks like React and CMS platforms like codux. My technical knowledge and experience enable me to develop responsive and dynamic websites that deliver exceptional user experiences.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "www.linkedin.com/in/johnson-victory",
  github: "https://github.com/vctry4real?tab=repositories",
  //twitter: "https://twitter.com/",
  //instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Front-end Web Developer",
    Company: `MugDevs`,
    Location: "Lagos, Nigeria",
    Type: "Intern",
    Duration: "August 2023 - Till date",
  },
  {
    Position: "No-code Developer",
    Company: `Softvenix`,
    Location: "Lagos, Nigeria",
    Type: "Remote",
    Duration: "March 2023 - Till date",
  },
  {
    Position: "IT Technical Support",
    Company: `New Horizon Solution`,
    Location: "Lagos, Nigeria",
    Type: "Internship",
    Duration: "May 2021 - November 2021",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Backend Engineering",
    Company: "Alt school Africa",
    Location: "Online",
    Type: "Online",
    Duration: "August 2023 - Present",
  },
  {
    Position: "Bachelor in Computer Science",
    Company: `Anchor University, Lagos`,
    Location: "Ayobo, Lagos, Nigeria.",
    Type: "Full Time",
    Duration: "September 2018 - September 2022",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  git: git,
  github: github,
  figma: figma,
  php: php,
  mysql: sql,
  airtable: airtable,
  wordpress: wordpress,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Hostel Management System (Fullstack)",
    image: hostelmanagement,
    description: `The Hostel Management System is a streamlined software solution that automates room allocation, reservation management,enhancing efficiency and transparency. It simplifies administrative tasks,and ensures secure data management, revolutionizing hostel operations. Resident information, it's an indispensable tool for modern hostel management.`,
    techstack: "HTML/CSS, JavaScript, PHP, MySQL",
    stats: "Finished",
    previewLink: "/",
    githubLink: "https://github.com/vctry4real/Hostels",
  },
  {
    title: "Blockchain Ecommerce (Fullstack)",
    image: blockchain,
    description: `Integrated Ethereum block-chain ERC20 Token into an Ecommerce Store's payment system. The aim is to enable customers to pay for goods using crypto currency,`,
    techstack: "React js, Node js, Express, MongoDB, Solidity",
    stats: "Finished",
    previewLink: "/",
    githubLink: "https://github.com/vctry4real/blockchain-ecommerce",
  },
  {
    title: "Door Step Dinning (Front-end)",
    image: fooddelivery,
    description: `This system enables users to order food online from a Restaurant `,
    techstack: "React js",
    stats: "Finished",
    previewLink: "https://doorstepdinning.vercel.app/",
    githubLink: "https://github.com/vctry4real/food-delivery-react",
  },
  {
    title: "Foodies Kitchen (Front-End)",
    image: foodies,
    description: `Foodies kitchen restaurant that enables users to make reservations and book the restaurant for catering services `,
    techstack: "Webflow, Airtable",
    stats: "In development",
    previewLink: "https://foodieskitchen.webflow.io/",
    githubLink: "/",
  },
  {
    title: "NYSC Ogbomosho North Corp Member Management System",
    image: nysc,
    description: `Store all the corp members details serving in Ogbomosho north. With some other features too`,
    techstack: "HTML/CSS, Php, JavaScript, MySQL",
    stats: "In development",
    previewLink: "/",
    githubLink: "/",
  },
  /*{
    title: "Project title 6",
    image: projectImage6,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    stats: "In development",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },*/
];

// Enter your Contact Details here
export const contactDetails = {
  email: "johnsonvictory911@gmail.com",
  phone: "09064286189",
};
