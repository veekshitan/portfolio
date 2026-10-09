/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Veekshita Naidu | Senior Software Engineer",
  description:
    "Senior Software Engineer specialising in Python and Django backends, scalable REST APIs, data pipelines and applied machine learning.",
  og: {
    title: "Veekshita Naidu Portfolio",
    type: "website",
  },
  // title: "Ashutosh's Portfolio",
  // description:
  //   "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  // og: {
  //   title: "Ashutosh Hathidara Portfolio",
  //   type: "website",
  //   url: "http://ashutoshhathidara.com/",
  // },
};

//Home Page
const greeting = {
  title: "Balla Veekshita Naidu",
  logo_name: "VeekshitaNaidu",
  nickname: "veekshita",
  role: "Senior Software Engineer @ Dvara E-Registry",
  subTitle:
    "Backend engineer who loves building scalable, production-grade systems — from REST APIs and database design to data pipelines and applied machine learning.",
  resumeLink: `${process.env.PUBLIC_URL}/Veekshita_Naidu_Resume.pdf`,
  // portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/veekshitan/",
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
    link: "mailto:naiduballaveekshita@gmail.com",
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
      title: "Backend Engineering",
      fileName: "FullStackImg",
      skills: [
        "⚡ Designing and owning production Python services with Django & Django REST Framework — REST APIs, database design, background processing and deployment",
        "⚡ Optimizing PostgreSQL-backed APIs through indexing, query optimization and restructured database access patterns",
        "⚡ Modelling rule-based workflows like configurable transaction approval engines and graph-based route optimization",
        "⚡ Building end-to-end products with React frontends, including offline sync and GPS-guided data collection",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#092E20",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "logos-nodejs-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
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
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
      ],
    },
    {
      title: "AI, ML & Geospatial",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building geospatial scoring engines and event-detection pipelines on multi-temporal Sentinel satellite data and weather APIs at 10m resolution",
        "⚡ Training computer-vision models (YOLOv5, Faster R-CNN, ResNet, EfficientNet) for image-based classification and detection",
        "⚡ Shipping voice-enabled RAG applications with Whisper ASR, multilingual pipelines and FAISS / Pinecone vector search",
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
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: {
            color: "#F7931E",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            color: "#150458",
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
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Deploying and running backend services on AWS",
        "⚡ Day-to-day engineering on Linux with Git-based workflows",
        "⚡ Designing for scalability, caching and concurrency in production systems",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos-aws",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
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
        "⚡ CGPA: 9.09 / 10",
        // "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        // "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://www.iitdh.ac.in/",
    },
    {
      title: "Sri Chaitanya Educational Institutions",
      subtitle: "Board of Intermediate Education",
      logo_path: "sri_chai_logo.jpeg",
      alt_name: "sri_logo.png",
      duration: "2018 - 2020",
      descriptions: [
        "⚡CGPA: 9.88/10",
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
        "⚡ Percentage: 96%",
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

// Achievements (shown on the Education page)
const achievements = {
  title: "Achievements",
  list: [
    {
      icon: "🏆",
      title: "Trailblazer Award",
      description: "For outstanding contributions and impact at Dvara E-Registry.",
    },
    {
      icon: "🚀",
      title: "Top Performer Award",
      description: "For consistently delivering high-impact engineering outcomes.",
    },
    {
      icon: "💡",
      title: "700+ problems solved",
      description: "Algorithmic problems across LeetCode and GeeksforGeeks.",
    },
    {
      icon: "🥇",
      title: "4th place, Inter IIT",
      description: "Secured 4th position in the Inter IIT Case Study Competition.",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internships and Leadership",
  description:
    "I'm a backend-focused software engineer with experience across API design, database performance, workflow engines, geospatial data and applied ML. I enjoy owning systems end to end — from design through deployment — and mentoring the engineers I work with.",
  header_image_path: "career_progress.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Senior Software Engineer",
          company: "Dvara E-Registry",
          company_url: "https://www.dvara.com/",
          logo_path: "dvara_logo.png",
          duration: "May 2024 - Present",
          roles: [
            { title: "Senior Software Engineer", duration: "May 2025 - Present" },
            { title: "Software Engineer", duration: "May 2024 - May 2025" },
          ],
          location: "Hyderabad, India",
          tech: ["Python", "Django", "PostgreSQL", "AWS", "React"],
          description: [
            "Engineered and owned production Python backend services for a crop-insurance platform, covering REST APIs, database design, background processing, and deployment.",
            "Designed and deployed a geospatial scoring engine for multi-temporal satellite datasets, building backend workflows for field-level risk scoring and production API integration.",
            "Optimized Django REST APIs using database indexing and query optimization, profiling and restructuring database access patterns for production endpoints.",
            "Designed and implemented a configurable transaction approval engine in Django, modeling rule-based workflows and integrating them into the transaction processing pipeline.",
            "Led development of an end-to-end React + Django farm digitization platform with GPS-guided data collection, geospatial validation, and offline synchronization; mentored 2 software engineering interns.",
            "Engineered a route optimization system for field-agent collections using graph-based scheduling, integrating route generation into the collection workflow.",
            "Designed event-detection pipelines integrating Sentinel satellite data and weather APIs to compute drought and flood timelines at 10m geospatial resolution.",
            "Developed an image-based crop damage assessment system using YOLOv5, Faster R-CNN, ResNet, and EfficientNet, achieving ~90% accuracy on field-collected imagery.",
          ],
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "AI/ML Intern",
          company: "Dvara Solutions",
          company_url: "https://dvarasolutions.com/",
          logo_path: "dvara_logo.png",
          duration: "Aug 2023 - Jan 2024",
          location: "Dharwad, India",
          tech: ["Python", "LLMs", "Vector DBs", "PostgreSQL", "ASR"],
          description: [
            "Built a real-time voice-enabled RAG application for querying domain-specific financial documents, integrating Whisper for ASR and Pinecone/FAISS for semantic vector search.",
            "Designed a document ingestion and embedding-management pipeline using vector databases and PostgreSQL metadata storage, supporting incremental updates and retrieval workflows.",
            "Implemented multilingual ASR pipelines for regional Indian languages using transcription and translation models, enabling cross-language voice interactions.",
          ],
          color: "#000000",
        },
        {
          title: "Web Development Intern",
          company: "My Endeavour",
          company_url: "https://www.linkedin.com/company/myendeavour/",
          logo_path: "my_medha.jpg",
          duration: "May 2023 - July 2023",
          location: "Remote",
          tech: ["React", "MySQL"],
          description: [
            "Designed and built two features for the reporting dashboard using React and MySQL, improving the report generation process and contributing to a 2% increase in client acquisition.",
            "Debugged frontend and backend issues across the stack, improving overall performance and code quality.",
          ],
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Position of Responsibility",
      experiences: [
        {
          title: "Class respresentative",
          company: "IIT Dharwad",
          company_url: "https://www.iitdh.ac.in/",
          logo_path: "iidh_logo.svg",
          duration: "Aug 2022 - April 2023",
          location: "Dharwad, Karnataka",
          // description:
          // "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Coordination Team Member",
          company: "Institute Innovation Council",
          company_url: "https://www.iitdh.ac.in/iic/",
          logo_path: "IICLogo.png",
          duration: "May 2021 - Aug 2022",
          location: "Dharwad, India",
          // description:
          //   "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Student Mentor",
          company: "Student Mentorship Program, IIT Dharwad",
          company_url: "https://smp.iitdh.ac.in/",
          logo_path: "iidh_logo.svg",
          duration: "Aug 2021 - Aug 2022",
          location: "Dharwad, Karnataka",
          // description:
          //   "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Lead Organizer",
          company: "Insolvent - Finance Club, IIT Dharwad",
          company_url: "https://www.iitdh.ac.in/",
          logo_path: "insolvent_logo.jpg",
          duration: "Aug 2022 - Aug 2023",
          location: "Dharwad, Karnataka",
          // description:
          //   "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        // {
        //   title: "",
        //   company: "Github",
        //   company_url: "https://github.com/",
        //   logo_path: "github_logo.png",
        //   duration: "July 2019 - PRESENT",
        //   location: "Work From Home",
        //   description:
        //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //   color: "#181717",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "A mix of full-stack products and machine-learning experiments — from a MongoDB-backed resume builder to CNN benchmarks on 26,000 images. Most of my day-to-day work lives in production systems at Dvara E-Registry.",
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
      "Whether it's backend architecture, geospatial data pipelines or applied ML, I'm always happy to talk shop. Drop me a message on LinkedIn or email and I'll get back to you within 24 hours.",
  },
  blogSection: {
    // title: "Blogs",
    // subtitle:
    //   "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    // link: "https://blogs.ashutoshhathidara.com/",
    // avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Location",
    subtitle: "Hyderabad, Telangana, India",
    locality: "Hyderabad",
    country: "IN",
    region: "Telangana",
    // streetAddress: "Ambavadi vas",
    avatar_image_path: "undraw_my_location_re_r52x.svg",
    location_map_link: "https://maps.google.com/?q=Hyderabad,Telangana",
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
  achievements,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
