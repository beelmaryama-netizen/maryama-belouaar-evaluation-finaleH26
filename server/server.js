require("dotenv").config();

const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const specs = require("./config/swagger");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Swagger documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// Routes API
const livresRoutes = require("./routes/livresRoutes");
app.use("/api/livres", livresRoutes);

// Route test
app.get("/", (req, res) => {
  res.send("API Bibliothèque fonctionne correctement");
});

// Lancement du serveur
if (process.env.NODE_ENV !== "test") {
  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
  });
}

module.exports = app;