# Documentation pour l'API AdonisJS

## Introduction

Cette documentation explique comment utiliser l'API AdonisJS pour créer un utilisateur. L'API est définie dans le fichier `routes.ts`.

## Prérequis

- Node.js installé version 22.0.0
- AdonisJS installé
- Base de données configurée postgresql dans .env

## Installation

1. Clonez le dépôt de l'application.

   ```bash
   git clone <url-du-repo>
   cd <nom-du-repo>
   ```

2. Installez les dépendances.

   ```bash
   npm install
   ```

3. Configurez votre fichier `.env` pour la connexion à la base de données.

## Démarrage de l'application

Pour démarrer l'application, utilisez la commande suivante :

- **node ace generate:key**
- **node ace migration:run**
- **node ace serve**

## Routes disponibles

### 1. Récupérer tous les utilisateurs

- **Méthode HTTP**: GET
- **URL**: `/`
- **Description**: Cette route permet de récupérer la liste de tous les utilisateurs.

### 2. Créer un utilisateur

- **Méthode HTTP**: POST
- **URL**: `/users`
- **Description**: Cette route permet de créer un utilisateur.

#### Exemple de requête

```bash
curl -X POST http://localhost:3333/users -H "Content-Type: application/json" -d '{
  "username": "test",
"email": "test@example.com",
"age": 20
}'
```

## Contrôleurs

Les routes utilisent le `UsersController` pour gérer les requêtes.

- **index**: Méthode pour récupérer tous les utilisateurs.
- **store**: Méthode pour créer un nouvel utilisateur.

## Conclusion

Cette documentation couvre les bases pour démarrer avec l'API AdonisJS pour la gestion des utilisateurs. Pour plus de détails, consultez la documentation officielle d'AdonisJS.
