# SportSee

SportSee, a start-up dedicated to sport coaching, is launching a new version of its application.

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

### Front-end

1. Clone the repository

```sh
git clone https://github.com/aurelianeg/AurelianeGailliegue_12_16052022.git
```

2. Install the dependencies

```sh
npm install
```

3. Launch the project

```sh
npm start
```

It runs the app in the development mode, and opens [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes. You may also see any lint errors in the console.

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

In _app/index.js_, change port variable to **3001** to launch the back-end on a different port than the front-end.
Then:

```sh
yarn dev
```

Data are now accessible at http://localhost:3001/user/${userId}/ in your browser.

#### Mocked data

1. Install json-server

```sh
npm install -g json-server
```

2. Launch json-server in front-end folder

```sh
json-server --watch ./src/utils/mock/serverMock.json --port 8000
```

Mocked data are now accessible at http://localhost:8000/ in your browser.

3. Change mock variable to true

In _src/index.jsx_, change mock variable to **true** to visualize mocked data in the launched application.
