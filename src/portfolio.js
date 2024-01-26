/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ashutosh's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Ashutosh Hathidara Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Balla Veekshita Naidu",
  logo_name: "VeekshitaNaidu",
  nickname: "Veekshita",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1FL_wydnPF2SWCdw2goYAgZ1KKBx8TpcD/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/ashutosh1919",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/veekshitan",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/veekshita-naidu-363a871a4/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:ballaveekshitanaidu07@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "AI & ML",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡  Complex quantitative modelling for dynamic forecasting and classification analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "logos-numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive websites front end using React and React-Redux",
        "⚡ Creating application backend in Node, Express, Flask and Django",
        "⚡ Integrating the applications with both relational and non-relational databases",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "mySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#3FA037",
          },
        },
      ],
    },

    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        // {
        //   skillName: "Adobe Illustrator",
        //   fontAwesomeClassname: "simple-icons:adobeillustrator",
        //   style: {
        //     color: "#FF7C00",
        //   },
        // },
        // {
        //   skillName: "Inkscape",
        //   fontAwesomeClassname: "simple-icons:inkscape",
        //   style: {
        //     color: "#000000",
        //   },
        // },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/veekshita_naidu/",
    },
    {
      siteName: "GeeksforGeeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "rgb(0, 153, 0)",
      },
      profileLink: "https://auth.geeksforgeeks.org/user/ballaveekshc1fa",
    },
    {
      siteName: "Coding Ninjas",
      iconifyClassname: "simple-icons:codingninjas",
      style: {
        color: "#1F8ACB",
      },
      profileLink:
        "https://www.codingninjas.com/studio/profile/ce44e369-e524-4ff0-88b7-194b41db636c",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Indian Institute of Technology Dharwad",
      subtitle: "B.Tech. in Mechnical Engineering",
      logo_path: "iidh_logo.svg",
      alt_name: "IITDh",
      duration: "2020 - 2024",
      descriptions: [
        // "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        // "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        // "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://www.iitdh.ac.in/",
    },
    {
      title: "Sri Chaitanya Educational Institutions",
      subtitle: "Board of Intermediate Education",
      logo_path: "sri_logo.png",
      alt_name: "sri_logo.png",
      duration: "2018 - 2020",
      descriptions: [
        //   "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        //   "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        //   "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://srichaitanya.net/",
    },
    {
      title: "Visakha Valley School",
      subtitle: "Class 4 - Class 10",
      logo_path: "vvs_logo.png",
      alt_name: "sri_logo.png",
      duration: "2012 - 2018",
      descriptions: [
        //   "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        //   "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        //   "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://visakhavalleyschool.com/",
    },
  ],
};

const certifications = {
  certifications: [
    //     {
    //       title: "Machine Learning",
    //       subtitle: "- Andrew Ng",
    //       logo_path: "stanford_logo.png",
    //       certificate_link:
    //         "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
    //       alt_name: "Stanford University",
    //       color_code: "#8C151599",
    //     },
    //     {
    //       title: "Deep Learning",
    //       subtitle: "- Andrew Ng",
    //       logo_path: "deeplearning_ai_logo.png",
    //       certificate_link:
    //         "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //       alt_name: "deeplearning.ai",
    //       color_code: "#00000099",
    //     },
    //     {
    //       title: "ML on GCP",
    //       subtitle: "- GCP Training",
    //       logo_path: "google_logo.png",
    //       certificate_link:
    //         "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
    //       alt_name: "Google",
    //       color_code: "#0C9D5899",
    //     },
    //     {
    //       title: "Data Science",
    //       subtitle: "- Alex Aklson",
    //       logo_path: "ibm_logo.png",
    //       certificate_link:
    //         "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //       alt_name: "IBM",
    //       color_code: "#1F70C199",
    //     },
    //     {
    //       title: "Big Data",
    //       subtitle: "- Kim Akers",
    //       logo_path: "microsoft_logo.png",
    //       certificate_link:
    //         "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //       alt_name: "Microsoft",
    //       color_code: "#D83B0199",
    //     },
    //     {
    //       title: "Advanced Data Science",
    //       subtitle: "- Romeo Kienzler",
    //       logo_path: "ibm_logo.png",
    //       certificate_link:
    //         "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //       alt_name: "IBM",
    //       color_code: "#1F70C199",
    //     },
    //     {
    //       title: "Advanced ML on GCP",
    //       subtitle: "- GCP Training",
    //       logo_path: "google_logo.png",
    //       certificate_link:
    //         "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //       alt_name: "Google",
    //       color_code: "#0C9D5899",
    //     },
    //     {
    //       title: "DL on Tensorflow",
    //       subtitle: "- Laurence Moroney",
    //       logo_path: "deeplearning_ai_logo.png",
    //       certificate_link:
    //         "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //       alt_name: "deeplearning.ai",
    //       color_code: "#00000099",
    //     },
    //     {
    //       title: "Fullstack Development",
    //       subtitle: "- Jogesh Muppala",
    //       logo_path: "coursera_logo.png",
    //       certificate_link:
    //         "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //       alt_name: "Coursera",
    //       color_code: "#2A73CC",
    //     },
    //     {
    //       title: "Kuberenetes on GCP",
    //       subtitle: "- Qwiklabs",
    //       logo_path: "gcp_logo.png",
    //       certificate_link:
    //         "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //       alt_name: "GCP",
    //       color_code: "#4285F499",
    //     },
    //     {
    //       title: "Cryptography",
    //       subtitle: "- Saurabh Mukhopadhyay",
    //       logo_path: "nptel_logo.png",
    //       certificate_link:
    //         "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //       alt_name: "NPTEL",
    //       color_code: "#FFBB0099",
    //     },
    //     {
    //       title: "Cloud Architecture",
    //       subtitle: "- Qwiklabs",
    //       logo_path: "gcp_logo.png",
    //       certificate_link:
    //         "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //       alt_name: "GCP",
    //       color_code: "#4285F499",
    //     },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "career_progress.svg",
  sections: [
    // {
    // title: "Work",
    // work: true,
    // experiences: [
    //   {
    //     title: "Associate AI Engineer",
    //     company: "Legato Health Technology",
    //     company_url: "https://legatohealthtech.com/",
    //     logo_path: "legato_logo.png",
    //     duration: "June 2020 - Aug 2021",
    //     location: "Hyderabad, Telangana",
    //     description:
    //       "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
    //     color: "#0879bf",
    //   },
    //   {
    //     title: "Android and ML Developer",
    //     company: "Muffito Incorporation",
    //     company_url: "https://www.linkedin.com/company/muffito-inc/about/",
    //     logo_path: "muffito_logo.png",
    //     duration: "May 2018 - Oct 2018",
    //     location: "Pune, Maharashtra",
    //     description:
    //       "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
    //     color: "#9b1578",
    //   },
    //   {
    //     title: "Android Developer",
    //     company: "FreeCopy Pvt. Ltd.",
    //     company_url: "https://www.linkedin.com/company/freecopy/about/",
    //     logo_path: "freecopy_logo.png",
    //     duration: "Nov 2017 - Dec 2017",
    //     location: "Ahmedabad, Gujarat",
    //     description:
    //       "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
    //     color: "#fc1f20",
    //   },
    // ],
    // },
    {
      title: "Internships",
      experiences: [
        {
          title: "AI ML Intern",
          company: "Dvara Solutions.",
          company_url: "https://dvarasolutions.com/",
          logo_path: "dvara_logo.png",
          duration: "Aug 2023 - Jan 2024",
          location: "Dharwad, India",
          description:
            "Developed a cutting-edge real-time voice-enabled AI chatbot assistant dedicated to addressing user queries within the domain of financial documents. Leveraging cutting-edge technologies, we implemented ChromaDB to efficiently manage document embeddings, ensuring optimal system performance. PostgreSQL was employed for robust query administration, with plans to introduce multi-user support in the near future, enhancing the versatility of the system. The integration of OpenAI's Text Ada-002 model significantly augmented the system's comprehension capabilities by generating advanced document embeddings. Additionally, we incorporated OpenAI's Whisper for English and AI for Bharat for regional languages to deliver precise Automatic Speech Recognition (ASR) for seamless multilingual interactions",
          color: "#000000",
        },
        {
          title: "Web development intern",
          company: "My Endeavour",
          company_url: "https://www.linkedin.com/company/myendeavour/",
          logo_path: "my_medha.jpg",
          duration: "May 2023 - July 2023",
          location: "Remote",
          description:
            "Collaborating closely with senior engineers, I played a pivotal role in the strategic planning and implementation of the dynamic dashboard for our website. Demonstrating creativity and technical prowess, I ideated and developed two innovative features using React and MySQL, effectively elevating the report generation process. This implementation led to a notable 2% increase in client acquisition, showcasing the tangible impact of these enhancements. Additionally, my proficiency in debugging and addressing both frontend and backend issues using React and MySQL proved instrumental in optimizing the overall performance and code quality of the project",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Position of Responsibility",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  // title: "Publications",
  // description:
  //   "I have worked on and published a few research papers and publications of my own.",
  // avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    //   {
    //     id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
    //     name: "Artificial Intelligence Paper",
    //     createdAt: "2020-03-06T16:26:54Z",
    //     description: "Paper Written on Artificial Intelligence published in xyz ",
    //     url:
    //       "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    //   },
    //   {
    //     id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
    //     name: "Artificial Intelligence Paper",
    //     createdAt: "2020-03-06T16:26:54Z",
    //     description: "Paper Written on Artificial Intelligence published in xyz ",
    //     url:
    //       "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    //   },
    //   {
    //     id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
    //     name: "Artificial Intelligence Paper",
    //     createdAt: "2020-03-06T16:26:54Z",
    //     description: "Paper Written on Artificial Intelligence published in xyz ",
    //     url:
    //       "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    //   },
    //   {
    //     id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
    //     name: "Artificial Intelligence Paper",
    //     createdAt: "2020-03-06T16:26:54Z",
    //     description: "Paper Written on Artificial Intelligence published in xyz ",
    //     url:
    //       "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    //   },
    //   {
    //     id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
    //     name: "Artificial Intelligence Paper",
    //     createdAt: "2020-03-06T16:26:54Z",
    //     description: "Paper Written on Artificial Intelligence published in xyz ",
    //     url:
    //       "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    //   },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact_me.svg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Software development, Web development, ML, and AI.",
  },
  blogSection: {
    // title: "Blogs",
    // subtitle:
    //   "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    // link: "https://blogs.ashutoshhathidara.com/",
    // avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Indian Institute of Technology Dharwad (Permanent Campus), Chikka Maligwad, Dharwad, Karnataka, India - 580007",
    locality: "Dharwad",
    country: "IN",
    region: "Karnataka",
    postalCode: "580007",
    // streetAddress: "Ambavadi vas",
    avatar_image_path: "message_sent.svg",
    // location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  greeting,
  seo,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
