import dice from "../assets/img/diceGame.png"
import pig from "../assets/img/pigGame.png"
import number from "../assets/img/numberGuessing.png"
import piiv1 from "../assets/img/piiv1.png"
import login from "../assets/img/login.png"
import scandi from "../assets/img/scandi.png"
import weather from "../assets/img/weather.png"
import pimcalc from "../assets/img/pimcalc.png"
import taskmanager from "../assets/img/taskmanager.png"
import utility from "../assets/img/utility.png"
import memgen from "../assets/img/memgen.png"

const techs = [
    {
        id: 1,
        text: "Figma",
        alt: "figma",
    },
    {
        id: 2,
        text: "Html",
        alt: "html"
    },
    {
        id: 3,
        text: "Css",
        alt: "css"
    },
    {
        id: 4,
        text: "Javascript",
        alt: "js"
    },
    {
        id: 6,
        text: "React",
        alt: "react"
    },
    {
        id: 7,
        text: "Bootstrap",
        alt: "bs"
    },
    {
        id: 8,
        text: "Material Ui",
        alt: "mui"
    },
    {
        id: 9,
        text: "Tailwind Css",
        alt: "tw"
    },
    {
        id: 10,
        text: "SQL",
        alt: "sql"
    },
    {
        id: 11,
        text: "Python",
        alt: "python"
    },
    {
        id: 12,
        text: "MySql",
        alt: "mysql"
    },
    {
        id: 13,
        text: "MongoDb",
        alt: "mdb"
    },
    {
        id: 14,
        text: "JWT",
        alt: "jwt"
    },
    {
        id: 15,
        text: "Express",
        alt: "express"
    },
    {
        id: 16,
        text: "Node.Js",
    },
    {
        id: 17,
        text: "Api's",
    },
    {
        id: 18,
        text: "GitHub",
    },
    {
        id: 19,
        text: "Jira",
    },
    {
        id: 20,
        text: "Confluence",
    },
    {
        id: 21,
        text: "Bitbucket",
    },
    {
        id: 22,
        text: "Redux",
    },
]

const courses = [
    {
        id: 1,
        course: "FullStack Web Development"
    },
    {
        id: 2,
        course: "Javascript Complete"
    },
    {
        id: 3,
        course: "Git and GitHub"
    },
    {
        id: 4,
        course: "Web Development with HTML, CSS and Javascript"
    },
]

const workflows = [
    {
        id: 1,
        course: " Mobile - First, Responsive Design"
    },
    {
        id: 2,
        course: "Cross Browser Testing & Debugging"
    },
    {
        id: 3,
        course: "Cross Functional Teams"
    },
    {
        id: 4,
        course: "Agile Development & Scrum"
    },
]

const project = [
    {
        id: 1,
        img: piiv1,
        alt: "piiv1",
        name: "First Portfolio",
        link: "http://piiv1.netlify.app",
        techStack: "Html - Css - Javascript - Bootstrap",
        about: "My first portfolio showcasing my projects and things i learnt from tutorials and courses i took"
    },
    {
        id: 2,
        img: weather,
        alt: "weather",
        name: "Weather App",
        link: "http://piiweather.netlify.app",
        techStack: "React - CSS - MaterialUi - API",
        about: "Fully responsive weather app, that gets your estimated location and pulls the necessary data through Open weather api"
    },
    {
        id: 3,
        img: taskmanager,
        alt: "taskmanager",
        name: "My Task Manager App",
        link: "http://piitask.netlify.app",
        techStack: "React - CSS - Material Ui - Express - MongoDb - Mongoose - NodeJs",
        about: "My first project after learning react, styled and personalized to keep tract of what projects to work on, more features to come :)"
    },
    {
        id: 4,
        img: login,
        alt: "login",
        name: "Login App",
        link: "http://pimunip.netlify.app",
        techStack: "React - Css - NodeJs - Express - MongoDb",
        about: "A simple app to register user and verify login information, more features to come :)"
    },
    {
        id: 5,
        img: utility,
        alt: "utility",
        name: "Utility App",
        link: "http://piiutilities.netlify.app",
        techStack: "React - Css - Api",
        about: "A simple utility app where you can shorten url links, generate qrcodes and generate random users. More features to come"
    },
    {
        id: 6,
        img: pimcalc,
        alt: "pimcalc",
        name: "Pim Calculator",
        link: "http://pimcalculator.netlify.app",
        techStack: "React - Css",
        about: "Developed to help student calculate thier aggregated university score"
    },
    {
        id: 7,
        img: scandi,
        alt: "scandi",
        name: "Scadiweb Interview",
        link: "http://piiscandiweb.netlify.app",
        techStack: "React - Css - NodeJs - Express - MySql",
        about: "A fullstack app developed with react and node for scandiweb technical interview"
    },
    {
        id: 8,
        img: memgen,
        alt: "memgen",
        name: "Meme Generator",
        link: "http://piimemgen.netlify.app",
        techStack: "React - Css",
        about: "Meme generator app"
    },
    {
        id: 9,
        img: dice,
        alt: "dice",
        name: "Dice Game",
        link: "http://piidicegame.netlify.app",
        techStack: "Html - Css - Javascript",
        about: "A simple dice game"
    },
    {
        id: 10,
        img: pig,
        alt: "pig",
        name: "Pig Game",
        link: "http://piipiggame.netlify.app",
        techStack: "React - Css",
        about: "A simple game"
    },
    {
        id: 11,
        img: number,
        alt: "number",
        name: "Number Guessing Game",
        link: "http://piiguessinggame.netlify.app",
        techStack: "React - Css",
        about: "A simple guessing game"
    },
]
const work = [
    {
        id: 1,
        company: "E-Core",
        date: "2023 - Present",
        location: "Sao Paulo",
        role: "Software consultant",
        about: "As a software consultant, it is important to think of solutions to existing problems, and problems that may arise. Come up with effective solutions with efficiency in mind.",
        stack: ["NodeJs", "Github", "Jira", "Javascript", "React", "Agile"]
    },
    {
        id: 2,
        company: "99",
        date: "2022 - 2023",
        location: "Sao Paulo",
        role: "Operations Analyst",
        about: "As an operations analyst, critical thinking was key in coming up with solution on the day to day activities of the company.",
        stack: ["Excel", "Word", "Power point", "Budget Management", "Root cause analysis"]
    },
    {
        id: 3,
        company: "MBG Financial",
        date: "2019 - 2022",
        location: "Sao Paulo",
        role: "Telemarketing Specialist",
        about: "As a web developer with more than 2 years of experience, I have honed my skills in various aspects of web development.",
        stack: ["Customer support", "Negoiations", "Client Management",]
    },
]


export { techs, courses, workflows, project, work }

