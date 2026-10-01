# 🚀 Guide de redéploiement autonome — Portfolio Laurent Leynaud

Ce guide permet de **récupérer, sauvegarder et redéployer** le site sans dépendre de
l'outil de création initial (Genspark). Le site est **100 % statique** (HTML / CSS /
JavaScript) : il fonctionne sur n'importe quel hébergement de fichiers statiques.

---

## 1. 📦 Contenu du projet (liste complète des fichiers)

Voici **tous** les fichiers nécessaires au fonctionnement du site. Si vous avez ceux-ci,
vous avez l'intégralité du projet.

```
portfolio-laurent-leynaud/
│
├── index.html                      ← Page principale du portfolio
├── cv-laurent-leynaud-fr.html      ← CV français (HTML, imprimable en PDF)
├── cv-laurent-leynaud-en.html      ← CV anglais (HTML, imprimable en PDF)
├── thank-you.html                  ← Page de confirmation (si formulaire email activé)
│
├── css/
│   └── theme.css                   ← Charte graphique (palette ardoise/ambre)
│
├── js/
│   ├── main.js                     ← Interactions (nav, animations, formulaire)
│   └── translations.js             ← Système bilingue FR/EN
│
├── images/
│   ├── laurent-portrait-v4.jpg     ← Photo de profil (hero)
│   ├── banc-de-test.jpg            ← Photo laboratoire
│   ├── laboratoire.jpg             ← Photo laboratoire (oscilloscope)
│   └── batterie.jpg                ← Photo batterie 14,5 kWh
│
├── documents/
│   └── CV_Laurent_Leynaud_2025.docx ← CV source Word (optionnel)
│
├── README.md                       ← Documentation du projet
├── DEPLOYMENT-GUIDE.md             ← Ce guide
└── EMAIL-SETUP-GUIDE.md            ← Guide pour activer un vrai formulaire email
```

> ⚠️ **Aucune dépendance à installer, aucun build.** Toutes les librairies (Tailwind CSS,
> Font Awesome, Google Fonts, Chart.js) sont chargées depuis des CDN publics directement
> dans les pages HTML. Une simple connexion Internet suffit côté visiteur.

---

## 2. 💾 Sauvegarder le code (recommandé : GitHub)

### Méthode 100 % navigateur (sans logiciel)
1. Créez un compte sur [github.com](https://github.com) si besoin.
2. Cliquez sur **New repository** → nommez-le `portfolio-laurent-leynaud` → **Create**.
3. Sur la page du dépôt : **Add file → Upload files**.
4. Glissez-déposez **tous les fichiers et dossiers** de la liste ci-dessus.
5. Cliquez sur **Commit changes**. ✅ Votre code est sauvegardé à vie.

### Méthode avec Git installé (ligne de commande)
```bash
cd portfolio-laurent-leynaud        # dossier contenant les fichiers
git init
git add .
git commit -m "Portfolio Laurent Leynaud - version initiale"
git branch -M main
git remote add origin https://github.com/VOTRE-COMPTE/portfolio-laurent-leynaud.git
git push -u origin main
```

---

## 3. 🌐 Redéployer le site (plusieurs options au choix)

Le site étant statique, **n'importe lequel** de ces hébergeurs gratuits fonctionne.

### Option A — Cloudflare Pages connecté à GitHub (recommandé)
1. [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers et Pages** → **Créer une application** → **Pages**.
2. **Connect to Git** → sélectionnez votre dépôt GitHub.
3. Réglages de build :
   - **Framework preset** : `None`
   - **Build command** : *(laisser vide)*
   - **Build output directory** : `/` (la racine)
4. **Save and Deploy**.
5. ✅ À chaque `git push`, le site se met à jour automatiquement.
6. Pour un domaine personnalisé : onglet **Custom domains** du projet Pages.

### Option B — Cloudflare Pages par glisser-déposer (sans Git)
1. **Workers et Pages** → **Créer une application** → **Pages** → **Upload assets**.
2. Glissez tout le contenu du projet.
3. **Deploy**. (À refaire manuellement à chaque mise à jour.)

### Option C — Netlify
1. [app.netlify.com](https://app.netlify.com) → **Add new site** → **Deploy manually**.
2. Glissez le dossier complet du projet. ✅ Site en ligne immédiatement.
   *(Ou « Import from Git » pour un déploiement automatique depuis GitHub.)*

### Option D — GitHub Pages (gratuit, intégré à GitHub)
1. Dépôt GitHub → **Settings → Pages**.
2. **Source** : branche `main`, dossier `/root` → **Save**.
3. ✅ Site accessible sur `https://VOTRE-COMPTE.github.io/portfolio-laurent-leynaud/`.

### Option E — Tester en local (sur votre ordinateur)
Ouvrir simplement `index.html` dans un navigateur fonctionne. Pour un rendu identique
à la production (chemins relatifs), lancez un petit serveur local :
```bash
# Avec Python (déjà installé sur Mac/Linux)
python3 -m http.server 8000
# puis ouvrez http://localhost:8000
```

---

## 4. ✅ Checklist de vérification après déploiement

- [ ] La page d'accueil s'affiche avec la photo de profil (fond ardoise + halo ambre)
- [ ] La navigation entre sections fonctionne (ancres)
- [ ] Le bouton de langue **FR / EN** bascule tout le contenu
- [ ] Les boutons **Télécharger CV** ouvrent les CV (FR et EN selon la langue)
- [ ] Les 4 photos du laboratoire s'affichent
- [ ] Le rendu est correct sur mobile (menu hamburger)

---

## 5. 📝 Notes techniques importantes

- **Chemins relatifs** : toutes les ressources utilisent des chemins relatifs
  (`./images/...`, `css/theme.css`, `js/...`). Gardez l'arborescence des dossiers
  intacte lors de la copie.
- **Formulaire de contact** : il est actuellement en **mode démonstration** (pas d'envoi
  réel d'email). Pour l'activer, suivez `EMAIL-SETUP-GUIDE.md` (service Formspree
  recommandé, ~5 min de configuration).
- **Pas de base de données** : le site ne stocke aucune donnée côté serveur ; rien à
  configurer de ce côté.
- **CDN** : si vous voulez une autonomie totale même sans Internet pour les librairies,
  il faudrait télécharger Tailwind / Font Awesome / Chart.js en local — non nécessaire
  pour un site public classique.

---

*Site statique — HTML5, Tailwind CSS (CDN), JavaScript natif. Aucune dépendance de build.*
