import {
    mobile,
    fullstack,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    education4,
    education1,
    education2,
    education3,
    carrent,
    jobit,
    tripguide,
    threejs,
    cv,
  } from "../assets";
  

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Education",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Mobile Kotlin Developer",
      icon: mobile,
    },
    {
      title: "Fullstack Developer",
      icon: fullstack,
    },
    {
      title: "HTML, CSS & Javascript",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Grunnskole",
      company_name: "Melløs & Øreåsen barne og ungdomsskole",
      icon: education1,
      iconBg: "#E6DEDD",
      date: "August 2006 - June 2016",
      points: [
        "Diverse Learning Approaches",
        "Collaborative Learning",
        "Subject Exploration",
        "Time Management and Responsibility",
      ],
    },
    {
      title: "High School",
      company_name: "Malakoff videregående skole",
      icon: education2,
      iconBg: "#E6DEDD",
      date: "August 2016 - June 2019",
      points: [
        "Advanced Academic Skills",
        "Independence and Responsibility",
        "Career Exploration",
        "Social Skills and Relationships",
      ],
    },
    {
      title: "Military",
      company_name: "Førstegangstjeneste",
      icon: education3,
      iconBg: "#E6DEDD",
      date: "August 2019 - June 2020",
      points: [
        "Discipline and Structure",
        "Teamwork and Leadership",
        "Adaptability and Resilience",
        "Technical and Specialized Training",
      ],
    },
    {
      title: "University College",
      company_name: "Høgskolen i Østfold",
      icon: education4,
      iconBg: "#E6DEDD",
      date: "August 2020 - June 2023",
      points: [
        "Critical Thinking",
        "Research and Information Literacy",
        "Communication",
        "Adaptability and Learning Agility",
      ],
      
    },
    {
      title: "My CV",
    company_name: "CV",
    date: "2023 - Present",
    icon: cv,
    iconBg: "#E6DEDD", // Choose a color for the icon background
    points: ["Take a look at my CV to learn more about my qualifications."],
    cvLink: "https://drive.google.com/file/d/1kAkTujCuUHjIUiSYKRiIRzLuo0E13CAN/view?usp=sharing",
    },
  ];
  

 
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };