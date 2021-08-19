# Barbago

The Barber Comes to You!

## Structure

This project is a monorepository with both frontend and backend code.

```bash
client
├───assets # assets used by app
├───resources # logo, splash image
└───src
    ├───components # reusable components here
    ├───config # environment vars and such
    ├───context # state management here
    ├───screens # complex page components here
    ├───services # api calls
    ├───types # typescript helper files
    └───utils # helper functions
docs # automatic api documentation by apidoc
functions # firebase cloud functions backend
└───src # contains source code express app
```

## Stack

### Frontend:

- TypeScript
- React
- Context API
- Capacitor (Compiles to iOS/Android WebView)
- Ionic (UI Framework for iOS and Android)

### Backend:

- Firebase
- NodeJS
- Express

### Mobile

Application is compiled to mobile Android and iOS using React Native and Expo.

<!-- ## How to use

You can run this project locally on your own machine.

1. Download or clone the repository to your filesystem.
2. Run `npm install` in the project's root directory. This will install all dependencies.
3. There are several environment variables that must be configured for the project to work. Please include them in a `.env` file as shown in `server/.env.example`.
4. You may need to synchronize the database. To do this, connect to the database and run `sequelize.sync({force: true})` (JavaScript) to synchronize models to the database.
5. Finally, you can start developing! run `npm run dev` in the root to simultaneously run dev servers for the front and back end.
6. To build for production, run `npm run build` to build server, client, and even mobile.
7. To deploy to production, make a pull request to the master branch which will automatically be deployed to Heroku and start running using the `npm start` script. -->

## Features

To do: Write features, checklist. Maybe use Trello instead.
Todo: Create editorconfig, prettierconfig files for collaborating

## Contributing

To learn about contributing to this project, please view the [Contributing](./contributing.md) document.

## Resources

- [Structuring React Projects](https://www.freecodecamp.org/news/a-better-way-to-structure-react-projects/)
