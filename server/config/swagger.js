const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Bibliothèque",
      version: "1.0.0",
      description: "Documentation de l'API Bibliothèque",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
      {
        url: "https://maryama-belouaar-evaluation-finaleh26.onrender.com",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);

module.exports = specs;