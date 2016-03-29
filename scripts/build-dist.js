var Builder = require('systemjs-builder');
var sass = require('node-sass');
var sassJspm = require('sass-jspm-importer');
var fs = require('fs');

sass.render({
  file: './src/main.scss',
  importer: sassJspm.importer
}, function(error, result) { // node-style callback from v3.0.0 onwards
  if(!error){
    fs.writeFile('./dist/main.css', result.css, function(err){
      if(!err){
        console.log('file written to disk')
      }
    });
  }
});


new Builder('./', './config.js')
  .bundle('./src/FancyButton', './dist/component.js')
  .then(() => {
    console.log('Build complete');
  })
  .catch(err => {
    console.log('Build error');
    console.log(err);
  });
