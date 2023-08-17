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
    stribe,
    food4u,
    pokemon1,
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
      name: "Stribe. My group's Bachelor project which got an A.",
      description:
        "Stribe is an online platform exclusively for students to connect, create meetups, and support each other towards graduating. Join us today and start making meaningful connections with other students on your academic journey!",
      tags: [
        {
          name: "vue",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "orange-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "pinia",
          color: "pink-text-gradient",
        },
      ],
      image: stribe,
      source_code_link: "https://stribe-app.vercel.app/",
    },
    {
      name: "MatOppskrifter Android App",
      description:
        "Min matoppskriftsapp for Android gir tilgang til et API med oppskrifter inkludert trinnvise instruksjoner, ingredienser og YouTube-videoer. Du kan tilpasse profilen din, logge inn/registrere deg, og nyte en bred kulinarisk verden.",
      tags: [
        {
          name: "kotlin",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "orange-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: food4u,
      source_code_link: "https://github.com/Keezpaa/MatOppskrifter",
    },
    {
      name: "Pokemon Windows App",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: ".NET",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "orange-text-gradient",
        },
        {
          name: "sql",
          color: "pink-text-gradient",
        },
      ],
      image: pokemon1,
      source_code_link: "https://github.com/Keezpaa/PokemonWiki",
    },
  ];
  
  export { services, technologies, experiences, projects };