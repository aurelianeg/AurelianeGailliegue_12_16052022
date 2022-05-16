# SportSee

SportSee, une startup dédiée au coaching sportif, lance une nouvelle version de la page profil de l’utilisateur. Cette page va notamment permettre à l’utilisateur de suivre le nombre de sessions réalisées ainsi que le nombre de calories brûlées.

- Les maquettes à intégrer se trouvent au lien suivant : https://www.figma.com/file/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?node-id=0%3A1
- Le kanban avec les user stories à intégrer se trouve ici : https://www.notion.so/Tableau-de-bord-SportSee-6686aa4b5f44417881a4884c9af5669e
Pour ce sprint, seulement les user stories de la partie TO-DO doivent être intégrées.

### Objectifs techniques

L’objectif est de refaire la page profil avec React.

- Le projet intègre des graphiques sur l’activité sportive de l’utilisateur : D3 ou Recharts peuvent être utilisés, au choix.
- Concernant l’intégration CSS du projet, pas besoin de travailler sur la version mobile et tablette du projet, seule la partie desktop est demandée (au minimum 1024 x 720 px).
- Concernant les données, un backend utilisant NodeJS a été créé, et est disponible ici : https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard. Il va permettre de réaliser des calls HTTP et de récupérer des données d’exemple. Tout y est décrit : les étapes d’installation ainsi que les calls HTTP mis en place.
- Pour la gestion des calls en eux-mêmes, Fetch ou Axios peuvent être utilisés. Par contre, il est important que les calls soient réalisés en dehors des composants React: un service à part qui se chargera de faire les calls doit être créé.

### Documentation

- L’ensemble de la documentation doit être réalisée en anglais.
- Le fichier README ne doit comporter que les étapes d’installation ainsi que les prérequis du projet. Dans ce fichier, tu devras dire comment installer et lancer le projet.
- Le projet va utiliser React : des Proptypes doivent être intégrés pour chacun des components. 
- En dehors des méthodes de cycle de vie (componentDidMount par exemple), le projet doit avoir des fonctions et méthodes documentées (JsDoc).


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
