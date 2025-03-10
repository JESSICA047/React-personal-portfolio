import "./Project.css";
import vowelCounter from "../../assets/images/vowel-counter.png";
import todoList from "../../assets/images/to-do.png";

// Project data array
export const projectsData = [
  {
    title: "Project 1",
    description: "Description of your first project",
    image: vowelCounter,
    githubLink: "https://github.com/JESSICA047/vowel-counter-react",
    liveLink: "https://vowel-counter-react.vercel.app/",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Project 2",
    description: "Description of your second project",
    image: todoList,
    githubLink: "https://github.com/JESSICA047/todo-list-react",
    liveLink: "https://todo-list-react-jet.vercel.app/",
    technologies: ["React", "Node.js", "MongoDB"],
  },
];
