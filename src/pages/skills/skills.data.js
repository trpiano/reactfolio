// Import skills icons.
import L_HTML5 from "../../assets/img/skills/techs/html-5.svg";
import L_CSS3 from "../../assets/img/skills/techs/css3.svg";
import L_STYLED from "../../assets/img/skills/techs/styled-comp.png";
import L_REACT from "../../assets/img/skills/techs/react.svg";
import L_REACT_BOOTSTRAP from "../../assets/img/skills/techs/react-bootstrap.svg";
import L_NODE_JS from "../../assets/img/skills/techs/nodejs.svg";
import L_MONGO from "../../assets/img/skills/techs/mongodb.svg";
import L_MYSQL from "../../assets/img/skills/techs/mysql.svg";
import L_GIT from "../../assets/img/skills/techs/git-icon.svg";
import L_GITHUB_PAGES from "../../assets/img/skills/techs/github.svg";
import L_VERCEL from "../../assets/img/skills/techs/vercel.png";
import L_JAVASCRIPT from "../../assets/img/skills/techs/javascript.svg";

export const skills = {
    frontend : [
        {
            link: "https://en.wikipedia.org/wiki/HTML5",
            imgAltText: "HTML 5",
            imgSrc: L_HTML5,
            skillName: "HTML5",
        },
        {
            link: "https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1",
            imgAltText: "CSS 3",
            imgSrc: L_CSS3,
            skillName: "CSS3",
        },
        {
            link: "https://www.javascript.com/",
            imgAltText: "JavaScript",
            imgSrc: L_JAVASCRIPT,
            skillName: "JavaScript",
        },
        {
            link: "https://reactjs.org/",
            imgAltText: "React JS",
            imgSrc: L_REACT,
            skillName: "React JS",
        },
        {
            link: "https://react-bootstrap.github.io/",
            imgAltText: "React Bootstrap",
            imgSrc: L_REACT_BOOTSTRAP,
            skillName: "React Bootstrap",
        },
        {
            link: "https://styled-components.com/",
            imgAltText: "Styled-Components",
            imgSrc: L_STYLED,
            skillName: "Styled-Components",
        },
    ],

    backend : [
        {
            link: "https://nodejs.org/en/",
            imgAltText: "Node.js",
            imgSrc: L_NODE_JS,
            skillName: "Node.js",
        },
    ],

    hostingPlatforms: [
        {
            link: "https://pages.github.com/",
            imgAltText: "GitHub Pages",
            imgSrc: L_GITHUB_PAGES,
            skillName: "GitHub Pages",
        },
        {
            link: "https://vercel.com",
            imgAltText: "Vercel",
            imgSrc: L_VERCEL,
            skillName: "Vercel",
        },
    ],

    programmingLanguages: [
        {
            link: "https://www.javascript.com/",
            imgAltText: "JavaScript",
            imgSrc: L_JAVASCRIPT,
            skillName: "JavaScript",
        },
    ],

    databases: [
        {
            link: "https://www.mysql.com",
            imgAltText: "MySql",
            imgSrc: L_MYSQL,
            skillName: "MySql",
        },
        {
            link: "https://www.mongodb.com",
            imgAltText: "MongoDB",
            imgSrc: L_MONGO,
            skillName: "MongoDB",
        },
    ],

    versionControl: [
        {
          link: "https://git-scm.com/",
          imgAltText: "GIT",
          imgSrc: L_GIT,
          skillName: "GIT",
        },
    ],
};