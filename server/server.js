require("dotenv").config();

const express = require("express");
const cors = require("cors");

// Swagger
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const livresRoutes = require("./routes/livresRoutes");

// Configuration Swagger
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Bibliothèque",
      version: "1.0.0",
      description: "Documentation de l'API de la bibliothèque numérique",
    },
    servers: [
      {
        url: "https://maryama-belouaar-evaluation-finaleh26.onrender.com",
      },
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

// Génération de la documentation Swagger
const specs = swaggerJsdoc(options);

// Route Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// Route API livres
app.use("/api/livres", livresRoutes);

// Démarrage du serveur
if (process.env.NODE_ENV !== "test") {
  app.listen(process.env.PORT, () => {
    console.log(`Serveur lancé sur le port ${process.env.PORT}`);
  });
}

module.exports = app;