# :tada: Sausage party

Boilerplate for creating multiplayer game server. Players can join into game room and control their own game with a smartphone.

## Installing

Clone from Github.

```
git clone git@github.com:Scionar/sausage-party.git
```

Install dependencies and build package.

```
cd sausage-party
npm install
```

## Start server

Server uses PORT environment variable to decide used port. If port not specified, 3000 is used instead.

Start production server.

```
npm start
```

Start deployment server. Deployment server uses [Webpack serve](https://github.com/webpack-contrib/webpack-serve). This enables hot reload of UI components.

```
npm run start:dev
```

**NOTICE** : Development server still is used only for UI deployment and does not include support for backend state handling.
