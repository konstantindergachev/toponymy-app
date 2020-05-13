# Toponymy is a dynamic site
> Toponymy was written with Express.js framework.
> Site styles was written with [SASS preprocessor](https://sass-lang.com/), SCSS syntax.
> HTML layout was created with [PUG preprocessor](https://pugjs.org/api/getting-started.html).
> Website text is Russian.

- [Website](https://kharkiv.herokuapp.com/)

## Quick Start

# Step 1 Clone repo
```bash
git clone git@gitlab.com:KonstantinDergachev/toponymy-app.git
```
# Step 2 Install dependencies
```bash
yarn install -i or npm install
```
> In this project data stored in [MongoDB Atlas Cloud](https://www.mongodb.com/).
> Project hosting in [Heroku Cloud](https://www.heroku.com/).
# Step 3 For development mode, you need to create config_dev.js in the config folder:

```bash
module.exports = {
  localPort: '5000',
  herokuDepl:
    'mongodb://[your name]:[your password]@***************-*****-**-**-*****.mongodb.net:27017,***************-*****-**-**-*****.mongodb.net:27017,***************-*****-**-**-*****.mongodb.net:27017/*****?ssl=true&replicaSet=[name of cluster]-*****-*&**********=*****&***********=true',
  mapApiKey: '***************************************',
};
```
# Step 4 Use your own social icons
# Step 5 Use your own favicon.ico:
```bash
app/public/favicon.ico
```
and favicon directory:
```bash
app/public/img/favicon
```
# Step 6 Start this project on developer mode on localhost:5000
```bash
yarn run dev or npm run dev
```
# Procfile is a file for start project on production

## Info
### Author
Konstantin Dergachev [portfolio](http://dergachevkonstantin.surge.sh/)
