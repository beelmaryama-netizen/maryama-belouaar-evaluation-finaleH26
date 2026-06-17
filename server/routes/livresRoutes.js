const express = require("express");
const router = express.Router();

const {
  getLivres,
  getLivresEmpruntesByEmail,
} = require("../controllers/livresController");

/**
 * @swagger
 * /api/livres:
 *   get:
 *     summary: Récupérer la liste des livres disponibles
 *     tags:
 *       - Livres
 *     responses:
 *       200:
 *         description: Liste des livres récupérée avec succès
 */
router.get("/", getLivres);

/**
 * @swagger
 * /api/livres/emprunts:
 *   get:
 *     summary: Récupérer les emprunts d'un utilisateur
 *     tags:
 *       - Emprunts
 *     parameters:
 *       - in: query
 *         name: email
 *         required: true
 *         schema:
 *           type: string
 *         description: Adresse courriel de l'utilisateur
 *     responses:
 *       200:
 *         description: Liste des emprunts récupérée avec succès
 */
router.get("/emprunts", getLivresEmpruntesByEmail);
module.exports = router;