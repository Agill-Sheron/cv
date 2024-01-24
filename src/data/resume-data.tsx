import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Malik Aghiles Tahir",
  initials: "MAT",
  location: "Montreal, Canada, EST (UTC-5) 🇨🇦 ",
  locationLink: "https://www.google.com/maps/place/Montreal,+QC,+Canada/",
  about:
    "Full Stack Engineer focused on building scalable and elegant solutions",
  summary:
    "I am a Full Stack Engineer and recent Computer Science graduate with a deep-rooted entrepreneurial mindset. With a year of enriching internship experience followed by a year as a junior to mid-level software engineer, my journey has been marked by constant skill enhancement in programming since 2021. Currently, I work mostly with JavaScript, React, Node.js, and MongoDB. I have 3 years of experience working on a wide variety of projects",
  avatarUrl: "https://avatars.githubusercontent.com/u/29054481?v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "ag.malik.tahir@gmail.com",
    tel: "+15147951812",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Agill-Sheron",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/malik-aghiles-tahir/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Concordia University",
      degree: "Bachelor's Degree in Computer Science",
      start: "2018",  
      end: "2023",
    },
  ],
  work: [
    {
      company: "Activix Inc.",
      link: "https://www.activix.ca/en",
      badges: ["Vue.js","Laravel", "PostgreSQL"],
      title: "Full Stack Developer",
     
      start: "Aug 2021",
      end: "Sep 2022",
      description:
        "Following the CTO's lead, my colleague and I implemented security enhancements by segregating user and admin roles, fortifying platform integrity. Implemented a CRM feature for accurate car image matching to leads' specs. Refactored legacy code following single responsibility principles and Lucid architecture, elevating system efficiency. My approach to problem-solving involved in-depth root cause analysis. I ensured robust CI/CD processes by creating comprehensive unit tests for each new feature. Collaborated with the CTO to integrate a third-party data analysis tool, enhancing clients' business insights and milestone tracking",
    },
    {
      company: "SnapX",
      link: "",
      badges: ["Blade", "Laravel"],
      title: "Intern - Full Stack Developer",
      start: "May 2020",
      end: "Nov 2020",
      description:
        "Localizing website content from English to French using PHP Laravel. Skilled in data scraping with Scrapy and Beautiful Soup, I compiled critical datasets. Played a key role in integrating PayPal payments and supported senior developers in billing process implementation.",
    },
    {
      company: "Lockheed Martin",
      link: "https://www.lockheedmartin.com/",
      badges: ["Java", "Spring", "Jenkins", "SVN"],
      title: "Intern - Software Engineer",
      start: "Jan 2020",
      end: "Apr 2020",
      description:
        "Revitalized video recording tool by upgrading its streaming codec. Conducted in-depth research on container technologies, influencing shift from VMs. Excelled in debugging, resolving critical issues through thorough root cause analysis",
    },
  ],
  skills: [
    "JavaScript",
    "Php/Laravel",
    "Java",
    "Vue.js",
    "React",
    "Node.js",
    "Python",
    "TensorFlow",
    "PyTorch",
    "Figma",
    "Mongoose",
    "Express",
    "MongoDB",
    "MySQL",
  ],
  projects: [
    {
      title: "Forward 360",
      techStack: [
        "Side Project",
        "MongoDB",
        "Express",
        "Vite",
        "React",
        "Node.js",
        "AdminJs",
      ],
      description: "A logistics platform for the 21st century. Provides a simple and intuitive way to manage your logistics.",
      link: {
        label: "forward360.com",
        href: "https://forward-360.netlify.app/",
      },
    },
  ],
} as const;

export const RESUME_DATA_FR = {
  name: "Malik Aghiles Tahir",
  initials: "MAT",
  location: "Montréal, Canada, HNE (UTC-5) 🇨🇦",
  locationLink: "https://www.google.com/maps/place/Montreal,+QC,+Canada/",
  about:
    "Ingénieur Full Stack axé sur la création de solutions évolutives et élégantes",
  summary:
    "Je suis un Ingénieur Full Stack et récent diplômé en informatique avec un esprit entrepreneurial profondément enraciné. Avec une année d'expérience enrichissante en stage suivie et d'un an en tant qu'ingénieur logiciel junior à intermédiaire, mon parcours a été marqué par un renforcement constant de mes compétences en programmation depuis 2020. Actuellement, je travaille principalement avec JavaScript, React, Node.js et MongoDB. J'ai 3 ans d'expérience sur une grande variété de projets",
  avatarUrl: "https://avatars.githubusercontent.com/u/29054481?v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "ag.malik.tahir@gmail.com",
    tel: "+15147951812",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Agill-Sheron",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/malik-aghiles-tahir/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Université Concordia",
      degree: "Baccalauréat en Science Informatique",
      start: "2018",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Activix Inc.",
      link: "https://www.activix.ca/en",
      badges: ["Vue.js", "Laravel", "PostgreSQL"],
      title: "Développeur Full Stack",
      start: "Août 2021",
      end: "Sept 2022",
      description:
        "Sous la direction du CTO, mon collègue et moi avons mis en œuvre des améliorations de sécurité en séparant les rôles utilisateur et administrateur, renforçant ainsi l'intégrité de la plateforme. Implémentation d'une fonctionnalité CRM pour un appariement précis des images de voitures avec les spécifications des prospects. Refonte du code hérité en suivant les principes de responsabilité unique et l'architecture Lucide, améliorant ainsi l'efficacité du système. Mon approche de résolution de problèmes impliquait une analyse approfondie des causes afin d'implémenter les solutions optimales. J'ai assuré des processus CI/CD robustes en créant des tests unitaires complets pour chaque nouvelle fonctionnalité. Collaboration avec le CTO pour intégrer un outil d'analyse de données tiers, améliorant les informations commerciales des clients",
    },
    {
      company: "SnapX",
      link: "",
      badges: ["Blade", "Laravel"],
      title: "Stagiaire - Développeur Full Stack",
      start: "Mai 2020",
      end: "Nov 2020",
      description:
        "Localisation du contenu du site Web de l'anglais au français en utilisant PHP Laravel. Compétent en scrapage de données avec Scrapy et Beautiful Soup, j'ai compilé des ensembles de données critiques pour l'entreprise. J'ai joué un rôle clé dans l'intégration des paiements PayPal et soutenu les développeurs seniors dans la mise en œuvre du processus de facturation.",
    },
    {
      company: "Lockheed Martin",
      link: "https://www.lockheedmartin.com/",
      badges: ["Java", "Spring", "Jenkins", "SVN"],
      title: "Stagiaire - Ingénieur Logiciel",
      start: "Jan 2020",
      end: "Avr 2020",
      description:
        "Revitalisation de l'outil d'enregistrement vidéo en mettant à niveau son codec de streaming. Recherche approfondie sur les technologies de conteneurisation, influençant le processus de transition des VMs. Excellente performance en débogage, résolvant des problèmes critiques grâce à une analyse approfondie des causes sous-jacentes",
    },
  ],
  skills: [
    "JavaScript",
    "Php/Laravel",
    "Java",
    "Vue.js",
    "React",
    "Node.js",
    "Python",
    "TensorFlow",
    "PyTorch",
    "Figma",
    "Mongoose",
    "Express",
    "MongoDB",
    "MySQL",
  ],
  projects: [
    {
      title: "Forward 360",
      techStack: [
        "Projet Personnel",
        "MongoDB",
        "Express",
        "Vite",
        "React",
        "Node.js",
        "AdminJs",
      ],
      description: "Une plateforme logistique pour le 21e siècle. Offre un moyen simple et intuitif de gérer votre logistique.",
      link: {
        label: "forward360.com",
        href: "https://forward-360.netlify.app/",
      },
    },
  ],
} as const;
