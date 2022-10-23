const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
   baseUrl: 'http://localhost:3000',
   viewportWidth: 1920,
   viewportHeight: 1080,
   dbConfig: {
    host: 'drona.db.elephantsql.com',
    user: 'reatlggk',
    password: 'ipzBb2y7-aZq1WWnb3aiWernwy3Boaf3',
    database: 'reatlggk',
    port: 5432
   }
  }
})
