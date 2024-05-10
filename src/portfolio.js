/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Will Hannah",
  title: "Hi, I'm Will",
  subTitle: emoji(
    "A friendly neighborhood Full Stack Software Developer with experience building enterprise-grade Desktop, Mobile & Web applications, most often using Swift, Objective-C, C++, C#, TypeScript & JavaScript, Reactjs, & Nodejs."
  ),
  resumeLink:
    "https://drive.google.com/uc?id=1V-UxQX6o1NyndQKbkZ021jf9ca3eQfV9&export=download", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/quasivivo",
  linkedin: "https://www.linkedin.com/in/wphannah/",
  gmail: "portfolio@stream12.com",
  stackoverflow: "https://stackoverflow.com/users/2827152/will",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My Strengths",
  subTitle:
    "I've been developing software for nearly 20 years, focusing on a few areas along the way. These are some of my strengths:",
  skills: [
    emoji(
      "📱 Developing highly interactive Front end / User Interfaces, typically alongside complex, real-time background processing jobs."
    ),
    emoji(
      "🎞️ Video recording, transcoding, and streaming applications for macOS, iOS & Windows in Swift, Objective-C, C++, and C#."
    ),
    emoji(
      "🎇 Health & digital wellness applications for iOS using HealthKit and Screen Time APIs."
    ),
    emoji(
      "🚀 Progressive Web Applications (PWAs) in React and Angular with TypeScript and Nodejs backends."
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase & AWS, along with CI/CD build & test pipelines."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "objective-c",
      fontAwesomeClassname: "fab fa-apple"
    },
    {
      skillName: "c#",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "The University of North Carolina at Chapel Hill",
      logo: require("./assets/images/uncLogo.png"),
      subHeader: "Master of Science in Information & Library Science",
      desc: "Researched Natural Language Processing & Machine Learning applied to music theory.",
      descBullets: [
        {
          text: "Master's Thesis: 'Automated music genre classification...'",
          link: "https://cdr.lib.unc.edu/downloads/wm117s409?locale=en"
        },
        {text: "Carolina Academic Library Associate Fellowship Recipient"},
        {text: "Margaret Ellen Kalp Memorial Fellowship Recipient"}
      ]
    },
    {
      schoolName: "Case Western Reserve University",
      logo: require("./assets/images/cwruLogo.jpg"),
      subHeader:
        "Bachelor of Arts in Computer Science, Music Theory, and French",
      desc: "Completed the engineering core curriculum for computer science while taking additional courses in music theory, linguistics, and several foreign languages.",
      descBullets: [{text: "Provost Scholarship Recipient"}]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend - Desktop & Mobile Apps (Swift, Objective-C, C#, C++)",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend - Web (React, Angular, TypeScript, JavaScript)",
      progressPercentage: "80%"
    },
    {
      Stack: "Backend (Nodejs, C#, PHP)",
      progressPercentage: "70%"
    },
    {
      Stack: "DevOps (Firebase, GCP, AWS, Github Actions, CI/CD)",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Freelance",
      companylogo: require("./assets/images/freelancer.png"),
      date: "Dec 2023 – Present",
      desc: "Developing productivity & wellness iOS apps for clients using the Screen Time API & HealthKit."
    },
    {
      role: "Full Stack Software Engineer",
      company: "Stream 12",
      companylogo: require("./assets/images/stream12Logo.png"),
      date: "Dec 2023 – Present",
      desc: "Establishing services for the launch of a video multicasting SaaS product in 2024."
    },
    {
      role: "Software Engineer",
      company: "Zight",
      companylogo: require("./assets/images/zightLogo.jpg"),
      date: "2019 – 2022 Full-time, Jan 2024 - Present Part-time",
      desc: "Hired to modernize CloudApp, a SaaS productivity screen sharing app for Mac, iOS & Windows.",
      descBullets: [
        "Led an initial team of 3 developers, which later expanded to 7,  in creating versions 6 and 7 of the applications.",
        "Currently working part-time on an image stitching integration for the macOS app using AVFoundation & OpenCV."
      ]
    },
    {
      role: "Software Developer 3",
      company: "Hyland Software",
      companylogo: require("./assets/images/hylandLogo.jpg"),
      date: "2014 - 2016 (Developer), 2016-2020 (Developer 2), 2020-2021 (Developer 3)",
      desc: "Progressed through the ranks, promoted twice in 3 years, while developing features in support of a low-code app development module within the enterprise content management system, OnBase.",
      descBullets: [
        "Led a team of developers in modernizing the WorkView CMS module, which included UI web components, iOS & Android mobile apps, a .NET REST Web API, and a .NET/WPF PWA generator application."
      ]
    },
    {
      role: "Senior iOS Developer",
      company: "Vertisense, Inc.",
      companylogo: require("./assets/images/vertisenseLogo.webp"),
      date: "2015 - 2016",
      desc: "Hired to develop the 3 iOS mobile applications necessary to bring a Bluetooth Low Energy (BLE) breathalyzer to market following an earlier release of an audio-jack version of the device."
    },
    {
      role: "Various Software Engineering Positions",
      company: "Museums, Libraries, Universities, & Startups",
      companylogo: require("./assets/images/youngDeveloper.jpg"),
      date: "2003-2014",
      desc: "In ye olden days, I worked in a variety of software engineering positions at the Cleveland Museum of Art, Case Western Reserve University, UT Austin, UNC Chapel Hill, and a few startups."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications And Achievements 🏆 "),
  subtitle:
    "Certifications, Achievements, and some other notable things that I've done.",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? Contact me using the methods below.",
  number: "+1 (216) 367-9175",
  email_address: "portfolio@stream12.com"
};

// Twitter Section

const twitterDetails = {
  userName: "wph", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
