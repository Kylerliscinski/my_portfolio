import { spuditions, keepr, inspire } from '../assets/img/projects/_index';
import { github } from '../assets/img/icons/_index';

const projectData = {
  id: "projects",
  title: "Projects",
  subtitle: "",
  text: "",
  projects: [
    {
      id: "keepr",
      name: "Keepr",
      description: "An application designed to share photos with one another. The app works similarly to Pinterest, you can add keeps(photos) to a vault. Logged in users can have private vaults that are inaccessible and not-viewable by non authorized accounts",
      image: keepr,
      source_code_link: "https://github.com/codeworksacademy/challenges.codeworksacademy.com",
      source_code_icon: github,
      cssSelector: "cw-challenges",
      tags: [
        {
          name: "vuejs",
          color: "green-text-gradient"
        },
        {
          name: "nodejs",
          color: "blue-text-gradient"
        },
        {
          name: "javascript",
          color: "yellow-text-gradient"
        },
        {
          name: "scss",
          color: "pink-text-gradient"
        }
      ]
    },
    {
      id: "spuditions",
      name: "Spuditions",
      description: "Spuditions is a website built for those who love the outdoors. This application provides users with information about Idaho state parks. When using our website, you can see the weather, pricing, directions, and reviews for your desired location.",
      image: spuditions,
      source_code_link: "https://spuditions.com/",
      source_code_icon: github,
      cssSelector: "grant-ready",
      tags: [
        {
          name: "vuejs",
          color: "green-text-gradient"
        },
        {
          name: "javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient"
        },
        {
          name: "bootstrap",
          color: "blue-text-gradient"
        }
      ]
    },
    {
      name: "Inspire",
      description: "Inspire is a sleek designed homepage for your web-browser. It is a simple application, displaying the date, time, and weather. A bonus of this application is the ability to add 'todos' that you can check off when complete. If you are feeling like life is to cluttered, use Inspire to help simplify your day",
      image: inspire,
      hyper_link: "https://threaditai.web.app",
      source_code_link: "https://github.com/AJVancattenburch/ThreadItAI",
      source_code_icon: github,
      cssSelector: "threadit-ai",
      tags: [
        {
          name: "css",
          color: "green-text-gradient"
        },
        {
          name: "javascript",
          color: "yellow-text-gradient"
        },

        {
          name: "bootstrap",
          color: "blue-text-gradient"
        },
        {
          name: "staticwebsite",
          color: "pink-text-gradient"
        },
      ]
    }
  ]
};

export default projectData;