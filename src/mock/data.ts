import { nanoid } from 'nanoid';

// Define interfaces for data structures
interface HeadData {
  title: string;
  lang: string;
  description: string;
}

interface HeroData {
  title: string;
  name: string;
  subtitle: string;
  cta: string;
}

interface AboutData {
  img: string;
  paragraphOne: string;
  paragraphTwo: string;
  paragraphThree: string;
  resume: string;
}

interface Project {
  id: string;
  img: string;
  title: string;
  info: string;
  info2: string;
  url: string;
  repo: string;
}

interface ContactData {
  cta: string;
  btn: string;
  email: string;
}

interface Network {
  id: string;
  name: string;
  url: string;
}

interface FooterData {
  networks: Network[];
}

interface GithubButtons {
  isEnabled: boolean;
}

// HEAD DATA
export const headData: HeadData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData: HeroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData: AboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData: Project[] = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData: ContactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData: FooterData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons: GithubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};