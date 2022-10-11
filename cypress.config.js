const { defineConfig } = require("cypress");
const { Pool } = require("pg");

module.exports = defineConfig({
  e2e: {
   baseUrl: 'http://localhost:3000',
   viewportWidth: 1920,
   viewportHeight: 1080
  }
})
