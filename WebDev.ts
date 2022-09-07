import { linkToMyWork } from './common'


export const items =
  `## Web Dev

Web dev is easy but also can be difficult. It is easy when you have a boilerplate to start with, but can be difficult when you need to build everything from scratch. I have built some starter projects, while trying to include some most common web dev technologies into them.

- ### [Quotes](https://github.com/quantumsnowball/quotes.quantumsnowball) - a beautiful mobile-friendly react app, fetching famous quotes by celebrities 
  ![typescript](https://img.shields.io/badge/typescript-white?logo=typescript) ![react](https://img.shields.io/badge/react-white?logo=react) ![redux](https://img.shields.io/badge/redux-white?logo=redux&logoColor=black) ![mui](https://img.shields.io/badge/mui-white?logo=mui)
  
  This project has been built and hosting at [quotes.quantumsnowball.ml](https://quotes.quantumsnowball.ml/). It is mobile-friendly, can be installed as a PWA using mobile Chrome browser.

- ### [Todos](https://github.com/quantumsnowball/todos-domain) - a todos app built using the MERN stack 
  ![typescript](https://img.shields.io/badge/typescript-white?logo=typescript) ![react](https://img.shields.io/badge/react-white?logo=react) ![mongodb](https://img.shields.io/badge/mongodb-white?logo=mongodb) ![express](https://img.shields.io/badge/express-white?logo=express&logoColor=black)
  
  This project is still under development. When finished, it should be a ready-to-use boilerplate for a starter login app using the MERN stack.

- ### [github.io](https://github.com/quantumsnowball/quantumsnowball.github.io) - github user page repo, holding the source code of the current website
  ![typescript](https://img.shields.io/badge/typescript-white?logo=typescript) ![react](https://img.shields.io/badge/react-white?logo=react) ![redux](https://img.shields.io/badge/redux-white?logo=redux&logoColor=black) ![tailwindcss](https://img.shields.io/badge/tailwindcss-white?logo=tailwindcss)
  
  This project is the source code for my github user page. The production version is currently hosting at [quantumsnowball.github.io](https://quantumsnowball.github.io). The content of this website is based on the git submodule [github-profile-data](https://github.com/quantumsnowball/github-profile-data), which is also the content generator of my github profile page.

- ### [js_todo_list_app](https://github.com/quantumsnowball/js_todo_list_app) - a pure javascript todos starter
  ![css](https://img.shields.io/badge/html5-white?logo=html5) ![javascript](https://img.shields.io/badge/javascript-white?logo=javascript) ![css](https://img.shields.io/badge/css-white?logo=css3&logoColor=blue)

  Sometimes you just want to code something using pure js, just to learn the basics.

`

const markdown = items + `${linkToMyWork}

`

export default markdown
