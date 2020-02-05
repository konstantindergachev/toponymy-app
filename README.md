# Toponymy is a dynamic site
> Toponymy was written with Express.js framework.
> Site styles was written with SASS preprocessor (https://sass-lang.com/), SCSS syntax.
> HTML layout was created with PUG preprocessor (https://pugjs.org/api/getting-started.html).
> Website text is Russian.

## Quick Start

```bash
# Step 1 Clone repo
git clone git@gitlab.com:KonstantinDergachev/toponymy-app.git

# Step 2 Install dependencies
yarn install -i or npm install
# Step 3 You need create a config file for data store. In my case, data stored in MongoDB Atlas and project hosting in Heroku. For example, config_dev.js such like this: app/server/config/config_dev.js:
module.exports = {
  localPort: '5000',
  herokuDepl:
    'mongodb://[your name]:[your password]@***************-*****-**-**-*****.mongodb.net:27017,***************-*****-**-**-*****.mongodb.net:27017,***************-*****-**-**-*****.mongodb.net:27017/*****?ssl=true&replicaSet=[name of cluster]-*****-*&**********=*****&***********=true',
  mapApiKey: '***************************************',
};

# Step 4 Use your own social icons
# Step 5 Use your own favicon.ico such like this: app/public/favicon.ico and favicon directory such like this: app/public/img/favicon
# Step 6 Start this project on developer mode on localhost:5000
yarn run dev or npm run dev

# Procfile is a file for start project on production

## Info
### Author
Konstantin Dergachev

### Version
1.0.0

### License
This project is licensed under the MIT License