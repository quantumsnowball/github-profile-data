import { linkToMyWork } from './common'


export const items =
  `## Web Dev

Web dev is easy but also can be difficult. It is easy when you have a boilerplate to start with, but can be difficult when you need to build everything from scratch. I have built some starter projects, while trying to include some most common web dev technologies into them.

- ### [Quotes](https://github.com/quantumsnowball/quotes.quantumsnowball) - a beautiful mobile-friendly react app, fetching famous quotes by celebrities 
  ![typescript](https://img.shields.io/badge/typescript-white?logo=typescript)
  ![react](https://img.shields.io/badge/react-white?logo=react)
  ![redux](https://img.shields.io/badge/redux-white?logo=redux&logoColor=black)
  ![mui](https://img.shields.io/badge/mui-white?logo=mui)
  
  This project has been built and hosting at [quotes.quantumsnowball.ml](https://quotes.quantumsnowball.ml/). It is mobile-friendly, can be installed as a PWA using mobile Chrome browser.

- ### [Todos](https://github.com/quantumsnowball/todos-domain) - a todos-list app with login and OAuth2 authentication based on JWT
  ![typescript](https://img.shields.io/badge/typescript-white?logo=typescript)
  ![nextjs](https://img.shields.io/badge/next.js-white?logo=next.js&logoColor=black)
  ![OAuth2.0](https://img.shields.io/badge/OAuth2.0-white?logo=google)
  ![react](https://img.shields.io/badge/react-white?logo=react)
  ![mongodb](https://img.shields.io/badge/mongodb-white?logo=mongodb)
  ![redis](https://img.shields.io/badge/redis-white?logo=redis)
  ![serverless](https://img.shields.io/badge/serverless-white?logo=vercel&logoColor=black)
  
  This project is a rewrite serverless version of the former MERN boilerplate project [todos-domain--serverful](https://github.com/quantumsnowball/todos-domain--serverful). Now the project is in production and deployed as [todos.quantumsnowball.ml](https://todos.quantumsnowball.ml). The main reason to rewrite this app is to convert the backend to serverless functions. Instead of relying on centralized servers, being serverless means distributing the backend api endpoints into pieces and run them as stateless functions, providing much bigger scaling potential for any apps. The rewrite version also make use of \`Next.js\` implementing server-side rendering (SSR), further enhancing the app experience. 

  Todos is a todo-list app with a authentication system using React and JWT. User can register an account, login to his account, and then add todo checklist items. The state should be saved into a database and user should be able to authenticate using JWT token and get back the checklist. You can also login using a Google account through OAuth2.0.

  Currently only the serverless version of this app is in production. Both serverless and serverful version of this app are ready-to-use boilerplates for starter login app. The serverless version can be easily deployed to cloud platforms like \`Vercel\`, while the serverful version needs a dedicated Node server to host the express app or its docker container.

- ### [github.io](https://github.com/quantumsnowball/quantumsnowball.github.io) - github user page repo, holding the source code of the current website
  ![typescript](https://img.shields.io/badge/typescript-white?logo=typescript)
  ![react](https://img.shields.io/badge/react-white?logo=react)
  ![redux](https://img.shields.io/badge/redux-white?logo=redux&logoColor=black)
  ![tailwindcss](https://img.shields.io/badge/tailwindcss-white?logo=tailwindcss)
  
  This project is the source code for my github user page. The production version is currently hosting at [quantumsnowball.github.io](https://quantumsnowball.github.io). The content of this website is based on the git submodule [github-profile-data](https://github.com/quantumsnowball/github-profile-data), which is also the content generator of my github profile page.

- ### [js_todo_list_app](https://github.com/quantumsnowball/js_todo_list_app) - a pure javascript todos starter
  ![css](https://img.shields.io/badge/html5-white?logo=html5)
  ![javascript](https://img.shields.io/badge/javascript-white?logo=javascript)
  ![css](https://img.shields.io/badge/css-white?logo=css3&logoColor=blue)

  Sometimes you just want to code something using pure js, just to learn the basics.

`

const markdown = items + `${linkToMyWork}

`

export default markdown
