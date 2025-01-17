# BodyTracker


![image](https://github.com/user-attachments/assets/09a0c44d-f0ee-4058-99ee-3bdc4c82e974)


**BodyTracker** est une application mobile de suivi de santé personnelle conçue pour gérer les informations utilisateur, suivre les progrès corporels et créer des vidéos de progression. L'application combine des calculs avancés, une gestion de photos, et des graphiques interactifs pour une expérience intuitive et personnalisée.

## 🌟 Fonctionnalités principales

### 1. **Gestion du profil utilisateur**
- Création et mise à jour des informations utilisateur : 
  - Nom, Prénom, Âge, Nationalité, Poids, Taille, Adresse.
- **Calcul automatique de l'IMC** (Indice de Masse Corporelle) à partir du poids et de la taille.
- Sauvegarde des données utilisateur avec **AsyncStorage** ou une base de données.

### 2. **Calcul du pourcentage de graisse corporelle**
- Formulaire de saisie des mesures corporelles : 
  - Tour de taille, tour de cou, tour de hanche, etc.
- Calcul basé sur des formules reconnues comme celle de la **US Navy**.
- **Graphique de suivi hebdomadaire** des résultats.

### 3. **Prise de photos et organisation**
- Utilisation de la caméra pour capturer des photos de progression.
- Organisation automatique des photos par **date** et **semaine**.
- **Génération d’un timelapse vidéo** à partir des photos.

### 4. **Application de filtres sur les images**
- Ajout de filtres pour améliorer les photos avant de générer le timelapse :
  - Filtres noir et blanc, contraste, luminosité, etc.

---

## 📱 Les activités principales de l'application

1. **Écran d'accueil**
   - Affichage des informations de base : IMC, poids, taille, etc.
   - Boutons pour accéder aux fonctionnalités principales.

2. **Écran de calcul de graisse corporelle**
   - Formulaire de saisie des mesures corporelles.
   - Affichage du pourcentage calculé et d’un graphique de suivi hebdomadaire.

3. **Écran de prise de photos**
   - Interface pour capturer des photos avec des options d’organisation automatique.

4. **Écran de génération de timelapse**
   - Sélection et prévisualisation des photos.
   - Application de filtres et génération d’un timelapse vidéo.

---

## 🛠️ Technologies utilisées

- **React Native** avec Expo : Pour un développement mobile rapide et efficace.
- **React Navigation** : Gestion des écrans et des onglets.
- **AsyncStorage** ou **SQLite** : Persistance locale des données utilisateur.
- **expo-camera** : Capture de photos.
- **react-native-chart-kit** / **react-native-svg** : Affichage de graphiques interactifs.
- **react-native-image-filter-kit** : Application de filtres sur les images.
- **react-native-video-processing** : Génération de vidéos timelapse.

---

## 🚀 Installation et utilisation

### Prérequis
- Node.js (version 16 ou supérieure)
- Expo CLI installé globalement : `npm install -g expo-cli`

### Étapes d'installation
1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/yassineelmiri/BodyTracker.git
   cd BodyTracker
   ```
2. Installez les dépendances :
   ```bash
   npm install
   ```
3. Démarrez l'application avec Expo :
   ```bash
   expo start
   ```

### Tester sur un appareil
- Installez l'application Expo Go sur votre téléphone (iOS ou Android).
- Scannez le QR code généré après avoir démarré Expo.

---

## 📊 Fonctionnalités avancées (Bonus)
- **Recherche avancée** dans les données utilisateur.
- **Statistiques détaillées** :
  - Suivi hebdomadaire.
  - Évolution de l’IMC et du pourcentage de graisse corporelle.
- **Notifications intelligentes** pour rappeler les prises de mesures ou l’ajout de photos.

---

## 🤝 Contribution
Les contributions sont les bienvenues ! Si vous avez une idée pour améliorer le projet, n’hésitez pas à :
1. Forker le dépôt.
2. Créer une branche pour vos modifications :
   ```bash
   git checkout -b feature/nom-fonctionnalite
   ```
3. Soumettre une pull request.

---

## 📝 Licence
Ce projet est sous licence [MIT](./LICENSE).

---

## 📧 Contact
Pour toute question ou suggestion, contactez-moi à : miriyassine123@gmail.com
```

### Points inclus :
1. **Contexte du projet** : Fonctionnalités et description des écrans.
2. **Instructions détaillées** : Comment cloner, installer, et exécuter l'application.
3. **Technologies** : Liste claire des bibliothèques et outils utilisés.
4. **Bonus et extension** : Mettez en avant des fonctionnalités avancées pour motiver les contributions.
5. **Structure GitHub-friendly** : Liens pour la licence et contribution.
