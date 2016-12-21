// Selenium driver download

var selenium = require('selenium-download');
var path = require('path');
var binPath = path.join(__dirname, '..', '.selenium');

selenium.ensure(binPath, function (error) {
  if (error){
    console.error(error.stack);
  } else {
     console.log('√ Selenium & Chromedriver downloaded to:', binPath);
  }
});
