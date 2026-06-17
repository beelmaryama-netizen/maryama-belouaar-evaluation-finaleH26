# Bibliothèque Numérique – Maryem Belouaar

## Présentation du projet

### Nom du projet
Bibliothèque Numérique

### Description générale
Cette application web permet aux utilisateurs de consulter les livres disponibles dans une bibliothèque et de rechercher leurs emprunts à partir de leur adresse courriel.

### Objectifs du système
- Consulter les livres disponibles.
- Rechercher les emprunts d'un utilisateur.
- Utiliser une API REST développée avec Express.
- Stocker les données dans une base de données MySQL.

### Fonctionnalités principales
- Affichage des livres disponibles.
- Recherche des emprunts par courriel.
- Communication entre React et Express.
- Gestion des données avec MySQL.

### Public cible
- Étudiants
- Bibliothécaires
- Utilisateurs de la bibliothèque

---

## Architecture du système

### Description globale

- **Client (React + Vite)** : gère l'interface utilisateur.
- **Server (Express)** : traite les requêtes HTTP et applique la logique métier.
- **MySQL** : stocke les données de l'application.
- **Railway** : héberge la base de données.
- **Render** : héberge l'API backend.
- **Vercel** : héberge le frontend.

### Interaction entre les composants

Utilisateur → React → API Express → MySQL → API Express → React → Utilisateur

---

## Technologies utilisées

| Technologie | Utilisation |
|------------|-------------|
| React | Interface utilisateur |
| Vite | Frontend |
| Node.js | Backend |
| Express | API REST |
| MySQL | Base de données |
| Axios | Requêtes HTTP |
| Railway | Hébergement BD |
| Render | Hébergement Backend |
| Vercel | Hébergement Frontend |
| GitHub | Gestion du code |
| Jest | Tests |

---

## Structure du projet

```text
client/
│
├── public/
├── src/
│   ├── assets/
│   ├── pages/
│   │   ├── Livres.jsx
│   │   └── MesEmprunts.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── vite.config.js

server/
│
├── config/
│   └── db.js
├── controllers/
├── routes/
│   └── livresRoutes.js
├── tests/
├── server.js
├── package.json
└── .env
```

---

## API REST

### Obtenir les livres disponibles

```http
GET /api/livres
```

### Obtenir les emprunts d'un utilisateur

```http
GET /api/livres/emprunts?email=test@test.com
```

---

## Installation du projet

### Cloner le projet

```bash
git clone https://github.com/beelmaryama-netizen/maryama-belouaar-evaluation-finaleH26.git
```

### Installation du backend

```bash
cd server
npm install
npm start
```

### Installation du frontend

```bash
cd client
npm install
npm run dev
```

---

## Déploiement

### Frontend (Vercel)

https://maryama-belouaar-evaluation-finale.vercel.app

### Backend (Render)

https://maryama-belouaar-evaluation-finaleh26.onrender.com

### Base de données (Railway)

Base de données MySQL hébergée sur Railway.

---

## Tests réalisés

- Validation des routes API.
- Vérification de l'affichage des livres.
- Vérification de la recherche des emprunts.
- Validation de la connexion MySQL.
- Déploiement sur Render et Vercel.

---

## Auteur

**Maryem Belouaar**

Cours : Programmation Web avancée (420-WA6-AG)

Projet final – Bibliothèque Numérique
