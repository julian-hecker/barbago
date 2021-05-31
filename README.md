# Barbago

The Barber Comes to You!

## Structure

This project is a monorepository with both frontend and backend code.

```bash
client
├───android # compiled android app (no touch)
├───public # static assets
├───resources # logo, splash image
└───src
    ├───assets # images, etc
    ├───components # reusable components here
    ├───config # environment vars and such
    ├───context # state management here
    ├───pages # complex page components here
    ├───services # api calls
    └───utils # helper functions

server
└───src # contains source code
    ├───auth # modules pertaining to authentication
    ├───config # environment vars and database
    ├───controllers # methods called by routes
    ├───models # interfaces to database
    ├───routes # visitable routes
    └───utils # helper functions
```

## Stack

### Frontend:

- TypeScript
- React
- Context API
- Capacitor (Compiles to iOS/Android WebView)
- Ionic (UI Framework for iOS and Android)

### Backend:

- Node
- TypeScript
- Express
- Sequelize

### Mobile

Application is compiled to a iOS or Android WebView using Capacitor. Don't touch!

## How to use

You can run this project locally on your own machine.

1. Download or clone the repository to your filesystem.
2. Run `npm install` in the project's root directory. This will install all dependencies.
3. There are several environment variables that must be configured for the project to work. Please include them in a `.env` file as shown in `server/.env.example`.
4. You may need to synchronize the database. To do this, connect to the database and run `sequelize.sync({force: true})` (JavaScript) to synchronize models to the database.
5. Finally, you can start developing! run `npm run dev` in the root to simultaneously run dev servers for the front and back end.
6. To build for production, run `npm run build` to build server, client, and even mobile.
7. To deploy to production, make a pull request to the master branch which will automatically be deployed to Heroku and start running using the `npm start` script.

## Features

To do: Write features, checklist. Maybe use Trello instead.
Todo: Create editorconfig, prettierconfig files for collaborating

## Contributing

To learn about contributing to this project, please view the [Contributing](./contributing.md) document.

## Resources

- [Structuring React Projects](https://www.freecodecamp.org/news/a-better-way-to-structure-react-projects/)
