
<br />
<p align="center">
  <a href="https://commits-web.vercel.app">
    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">COMMIT HISTORY API</h3>

  <p align="center">
    API Backend for commits-web project
    <br />
    <a href="https://api-commits.vercel.app/api/v1/docs"><strong>API Docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/GuidoClas/commits-web/issues">Report Bug/Feature</a>
  </p>
   
</p>



<!-- Index -->
<details open="open">
  <summary><h2 style="display: inline-block">Index</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About</a>
      <ul>
            <li><a href="#features">Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="run-on-localhost">Run on Localhost</a></li>
      </ul>
    </li>
    <li><a href="#author">Author</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About

[![COMMIT_API][product-screenshot]](https://api-commits.vercel.app/api/v1/docs)

API for Git Commit history viewer

<!-- Features -->
## Features
Displaying current and next features:

- [x] Get all Branches
- [x] Get commits by Branch
- [x] Get commits by SHA
- [ ] Get User Repositories
- [ ] Get commits by User repository

See the [open issues](https://github.com/GuidoClas/api-commits/issues) for a list of proposed features, known issues or request a feature.

## Built With These Technologies

* [Nest.js](https://docs.nestjs.com/)
* [OpenAPI](https://swagger.io/specification/)
* [Node.js](https://nodejs.org/es)
* [Jest](https://jestjs.io/)
* [axios](https://axios-http.com/docs/intro)
* [Github API](https://docs.github.com/es/rest)


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

To run this project on your local machine or deploy it to a server we need to use or have the following tools:
* ***Nest.js***
  ```sh
  npm i -g @nestjs/cli
  ```
* ***Node.js > 17.10***

  https://nodejs.org/es/download/

* ***git*** 

  https://git-scm.com/

### Run on Localhost 

1. First we need to clone this repository
    ```sh
   git clone https://github.com/GuidoClas/api-commits.git
   ```
2. Navigate to the root folder of the project and create an environment file with this variables
    ```sh
   .env
    PORT=3000
    GITHUB_API_URL=https://api.github.com/repos/GuidoClas/commits-web
   ```
3. Install dependencies opening a terminal of your choice
    ```sh
   npm install | yarn install
   ```
4. Run the project on development mode
    ```sh
   npm run start:dev
   ```
5. Run the tests
    ```sh
   npm run test
   ```
<!-- Author -->
## Author

***Guido Clas***

* Website: [guidoclas.com](https://guidoclas.com)
*	Github: [@GuidoClas](https://github.com/GuidoClas)
*	LinkedIn: [Guido Clas](https://www.linkedin.com/in/guido-clas/)

[product-screenshot]: assets/back_swagger.png