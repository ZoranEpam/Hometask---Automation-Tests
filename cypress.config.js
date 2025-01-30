const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('./cypress/plugins/index.js')(on, config);
      // return the updated config object
      return config;
    },
    // other e2e config options here
    e2e: {
      baseUrl: "https://www.epam.com/.com",
      downloadsFolder: 'cypress/downloads',
       },
       
  }
  
});


