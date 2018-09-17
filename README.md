# Two Baldies Static Website

## Running Locally ##
* Execute `npm install`
* Execute `npm run start`
* Visit `localhost:3100`

## Managing assets ##

### Assets Source

* _SASS_ files are located under `/src/scss/`
* _JavaScript_ files with support of _ES6_ files are located under `/src/js/`
* _Images_ are located in `/src/images/`
* _Fonts_ are located in `/src/fonts/`

### Build Assets

* Execute `npm install`
* Execute `npm run build`
* Optimize assets for production with `npm run production`

### Processed Assets

* _CSS_ files are located under `/dist/css/`
* _JavaScript_ files with support of _ES6_ files are located under `/dist/js/`
* _Images_ are located in `/dist/images/`
    * Any images under 8kb will be base64 encoded and have the src replaced within CSS and the HTML through url-loader
* _Fonts_ are located in `/dist/fonts/`
