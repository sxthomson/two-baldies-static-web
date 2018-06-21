# Two Baldies Website

## Managing assets ##

### Assets Source

* _SASS_ files are located under `/src/scss/`
* _JavaScript_ files with support of _ES6_ files are located under `/src/js/`
* _Images_ are located in `/src/images/`
* _Fonts_ are located in `/src/fonts/`

### Build Assets

* Execute `npm install`
* Execute `npm run build`
* Enable source files watching `npm run watch` (*Define any other files that needs syncing in `files:[]` section under `BrowserSyncPlugin` in `webpack.config.js`*)
* Optimize assets for production with `npm run production`

### Processed Assets

* _CSS_ files are located under `/dist/css/`
* _JavaScript_ files with support of _ES6_ files are located under `/dist/js/`
* _Images_ are located in `/dist/images/`
* _Fonts_ are located in `/dist/fonts/`
