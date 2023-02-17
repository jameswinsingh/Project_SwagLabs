const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'wj1oij',
  e2e: {

    "reporter": "mochawesome",
     
      "reporterOptions":{
                           "chats":true,
                 "overwrite":false,
                 "html":false,
                 "json":true,
                 "reportDir": "cypress/reports",
                 
                 
                },
                

    setupNodeEvents(on, config) {


      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/testScripts/*.js'
  },
});
