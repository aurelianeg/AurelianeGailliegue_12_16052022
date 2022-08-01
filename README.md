# SportSee

SportSee[^1] is a start-up dedicated to sports coaching. Users can follow on their page the number of sessions they carried out as well as the number of calories burned.

**Goal of this project**: API integration in a React app, use of JSDoc and PropTypes, and use of a graphic library.

## Load specifications

### Website designs

The desktop design is available on [Figma](https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR).

![Design for the home page](./src/assets/design/homepage.png 'Design for the home page')

### Technical constraints

-  Application development with React.
-  Use of a graphic library: Recharts.
-  HTTP calls (with Fetch) outside of React components.
-  Use of mocked data before API integration.
-  Documentation with JSDoc and PropTypes.

## Prerequisites

-  [NodeJS](https://nodejs.org/en/)
-  [npm](https://www.npmjs.com/)
-  [Yarn](https://yarnpkg.com/)
-  [React](https://fr.reactjs.org/) v17.0.2
-  [React Router](https://reactrouter.com/) v6.3.0
-  [Recharts](https://recharts.org/en-US/) v2.1.9 - _React 17 has been installed to avoid ResponsiveContainer CSS problems._
-  [PropTypes](https://www.npmjs.com/package/prop-types) v15.8.1
-  [StyledComponents](https://www.npmjs.com/package/styled-components) v5.3.5

## Installation

### Back-end

#### Back-end repository

The back-end repository using NodeJS is available on [this link](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard). It allows to make HTTP calls and to retrieve example data.

1. Clone the repository

```sh
git clone https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git
```

2. Install the dependencies

```sh
yarn
```

3. Run the micro API

In `app/index.js`, change port variable to `3001` to launch the back-end on a different port than the front-end.
Then:

```sh
yarn dev
```

API data are now accessible at <http://localhost:3001/user/${userId}/> in your browser.

#### Mocked data

1. Install json-server

```sh
npm install -g json-server
```

2. Launch json-server in front-end folder

```sh
json-server --watch ./src/utils/mock/serverMock.json --port 8000
```

Mocked data are now accessible at <http://localhost:8000/> in your browser.

3. Change mock variable to true

In `src/index.jsx`, change mock variable to `true` to visualize mocked data (insted of API data) in the launched application.

### Front-end

1. Clone the repository

```sh
git clone https://github.com/aurelianeg/sportsee.git
```

2. Install the dependencies

```sh
npm install
```

3. Launch the project

```sh
npm start
```

It runs the app in the development mode, and the website is opened on [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload when changes are made in the code, and any lint errors can be seen in the console.

[^1]: This is the 9th project of the "Front-end developer (JS - React)" training by OpenClassrooms.
