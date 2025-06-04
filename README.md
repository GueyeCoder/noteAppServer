# NoteServer - API Backend

## Description du projet

NoteServer est un backend API pour une application de prise de notes développé avec Node.js et Express. Ce serveur fournit les fonctionnalités CRUD (Create, Read, Update, Delete) nécessaires pour gérer des notes et communique avec une base de données MongoDB pour la persistance des données.

## Prérequis

- Node.js (v14 ou supérieur)
- MongoDB 
- npm 

## Installation

1. Clonez ce dépôt sur votre machine locale
2. Naviguez dans le répertoire du projet
3. Installez les dépendances:

```bash
npm install
```

## Configuration

Le serveur est configuré pour:
- Fonctionner sur le port 8081
- Se connecter à une base de données MongoDB locale nommée `noteDB`
- Écouter sur l'adresse IP Votre ip

Pour modifier ces paramètres, vous pouvez éditer les configurations dans le fichier `server.js`.

Pour démarrer le serveur:

```bash
npm start
```

## Points d'accès API

### Créer une note
- **Endpoint**: `/create`
- **Méthode**: POST
- **Headers**:
  - `title`: Titre de la note
  - `note`: Contenu de la note
  - `date`: Date de création

### Récupérer toutes les notes
- **Endpoint**: `/getAll`
- **Méthode**: GET
- **Réponse**: Liste de toutes les notes au format JSON

### Supprimer une note
- **Endpoint**: `/delete`
- **Méthode**: POST
- **Headers**:
  - `id`: Identifiant de la note à supprimer

### Mettre à jour une note
- **Endpoint**: `/update`
- **Méthode**: POST
- **Headers**:
  - `id`: Identifiant de la note à mettre à jour
  - `title`: Nouveau titre
  - `note`: Nouveau contenu
  - `date`: Nouvelle date

## Structure du projet

- `server.js` - Point d'entrée de l'application qui définit le serveur Express et les routes API
- `noteSchema.js` - Définit le schéma Mongoose pour les objets "note"
- `package.json` - Fichier de configuration npm avec les dépendances et scripts
- `node_modules/` - Dossier contenant les packages installés

## Modèle de données

Chaque note contient:
- `title` (String): Titre de la note
- `date` (String): Date de création/modification
- `note` (String): Contenu textuel de la note

