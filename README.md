# 🎂 Atelier Dharma — Site Vitrine

Site vitrine pour **Atelier Dharma**, pâtisserie artisanale.

## 🚀 Démarrage rapide

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Build production
npm run build

# Prévisualiser le build
npm run preview
```

## 🔧 Configuration

Créez un fichier `.env` à la racine du projet :

```env
# Token Facebook Graph API (pour récupérer les publications)
VITE_TOKEN=votre_token_ici

# URL Formspree (pour le formulaire de contact)
VITE_FORMSPREE_URL=https://formspree.io/f/votre_id
```

**Sans token Facebook**, le site charge des données de démonstration avec les images du site existant.

## 📄 Pages

| Route      | Description                                      |
|------------|--------------------------------------------------|
| `/`        | Page d'accueil avec présentation et galerie      |
| `/vitrine` | Vitrine avec toutes les créations par catégorie  |
| `/ateliers`| Ateliers pâtisserie et bars à desserts           |
| `/contact` | Formulaire de contact avec envoi d'email         |

## 🎨 Charte graphique

| Couleur        | Hex       | Usage                    |
|----------------|-----------|--------------------------|
| Chocolat       | `#2A0800` | Textes, footer           |
| Caramel        | `#934B00` | Sous-titres, accents     |
| Doré           | `#FBB13C` | Badges, boutons gold     |
| Framboise      | `#D81159` | CTA, liens actifs        |
| Crème          | `#F6E8EA` | Backgrounds, tags        |

## 🏗️ Stack technique

- **React 19** + **TypeScript**
- **Vite** (bundler)
- **React Router** (navigation)
- **Facebook Graph API** (données des publications)
- **CSS pur** (pas de framework, charte custom)
- **Formspree** (envoi d'emails)

## 📁 Structure

```
src/
├── components/
│   ├── Navbar.tsx / .css
│   ├── Footer.tsx / .css
│   └── ScrollToTop.tsx
├── pages/
│   ├── Home.tsx / .css
│   ├── Vitrine.tsx / .css
│   ├── Ateliers.tsx / .css
│   └── Contact.tsx / .css
├── utils/
│   ├── Cake.ts           # Classe Cake
│   ├── CategoryManager.ts # Gestion des données + fetch Facebook
│   └── parsePost.ts      # Extraction titres/catégories des posts
├── App.tsx
├── main.tsx
└── index.css             # Styles globaux + variables
```
