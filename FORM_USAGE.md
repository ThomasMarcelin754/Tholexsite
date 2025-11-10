# Utilisation du Formulaire de Contact Tholex

## Vue d'ensemble

Le système de formulaire de contact Tholex permet d'ouvrir un overlay de formulaire depuis n'importe quel CTA du site. Le formulaire apparaît au centre de l'écran avec une animation fluide.

## Architecture

Le système est composé de 3 éléments principaux :

1. **ContactFormContext** - Gère l'état global du formulaire
2. **ContactFormOverlay** - Le composant overlay avec le formulaire
3. **ContactCTAButton** - Un bouton CTA réutilisable (optionnel)

## Installation

Le système est déjà configuré dans le layout principal :

```tsx
// src/app/layout.tsx
<ContactFormProvider>
  {children}
  <ContactFormOverlay />
</ContactFormProvider>
```

## Utilisation

### Méthode 1 : Utiliser le hook directement

Pour n'importe quel composant React :

```tsx
'use client';

import { useContactForm } from '@/contexts/ContactFormContext';

export function MonComposant() {
  const { openForm } = useContactForm();

  return (
    <button onClick={openForm}>
      Ouvrir le formulaire
    </button>
  );
}
```

### Méthode 2 : Utiliser le composant ContactCTAButton

Pour un bouton stylisé selon la charte Tholex :

```tsx
import { ContactCTAButton } from '@/components/ContactCTAButton';

export function MonComposant() {
  return (
    <>
      {/* Bouton par défaut */}
      <ContactCTAButton />

      {/* Avec texte personnalisé */}
      <ContactCTAButton>Parlons de votre projet</ContactCTAButton>

      {/* Variante secondaire */}
      <ContactCTAButton variant="secondary" size="lg">
        Contactez-nous
      </ContactCTAButton>

      {/* Avec classes CSS personnalisées */}
      <ContactCTAButton className="my-custom-class">
        Discutons →
      </ContactCTAButton>
    </>
  );
}
```

### Props du ContactCTAButton

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `children` | ReactNode | "Nous contacter" | Texte du bouton |
| `className` | string | "" | Classes CSS additionnelles |
| `variant` | "default" \| "secondary" \| "outline" | "default" | Style du bouton |
| `size` | "default" \| "sm" \| "lg" | "default" | Taille du bouton |

## Exemples d'intégration

### Dans le Header (déjà implémenté)

```tsx
'use client';

import { useContactForm } from '@/contexts/ContactFormContext';

export function Header() {
  const { openForm } = useContactForm();

  return (
    <header>
      <button onClick={openForm}>
        Discutons →
      </button>
    </header>
  );
}
```

### Dans une section CTA

```tsx
'use client';

import { ContactCTAButton } from '@/components/ContactCTAButton';

export function CTASection() {
  return (
    <section>
      <h2>Prêt à transformer votre entreprise ?</h2>
      <ContactCTAButton variant="default" size="lg">
        Commencer la discussion
      </ContactCTAButton>
    </section>
  );
}
```

### Dans le Footer

```tsx
'use client';

import { useContactForm } from '@/contexts/ContactFormContext';

export function FooterSection() {
  const { openForm } = useContactForm();

  return (
    <footer>
      <button onClick={openForm}>Contact</button>
    </footer>
  );
}
```

## Fonctionnalités du formulaire

### Champs validés

1. **Prénom** - Minimum 3 caractères
2. **Nom** - Minimum 3 caractères
3. **Email** - Validation regex stricte
4. **Téléphone** - Minimum 8 chiffres (accepte +, espaces, parenthèses, tirets)
5. **Société** - Minimum 3 caractères
6. **Chiffre d'affaires** - Sélection obligatoire parmi 4 options

### Validation

- Validation en temps réel après le premier blur sur chaque champ
- Messages d'erreur clairs et contextuels
- Impossible de soumettre tant que tous les champs ne sont pas valides
- Accessibilité complète (aria-invalid, aria-describedby, role="alert")

### Animations

- **Ouverture** : Fade-in de l'overlay (0.2s) + Slide-up de la carte (0.3s)
- **Confirmation** : Scale-in de l'icône de succès (0.5s)
- **Fermeture** : Fade-out de l'overlay

### Responsive

- Desktop : carte centrée, max-width 520px
- Mobile : carte adaptée, grille de champs sur 1 colonne
- Scrollable si le viewport est trop petit

## Customisation

Pour personnaliser les styles du formulaire, éditez le bloc `<style jsx>` dans :
- `/src/components/ContactFormOverlay.tsx`

Les variables CSS Tholex sont utilisées automatiquement :
- `--primary` : #030213 (noir)
- `--muted-foreground` : #717182 (gris)
- `--destructive` : #d4183d (rouge erreur)
- `--radius` : 0.625rem (border-radius)

## Notes importantes

- ✅ Le formulaire est déjà intégré au layout principal
- ✅ Le Header utilise déjà le système (bouton "Discutons →")
- ✅ Tous les composants doivent avoir `'use client'` pour utiliser le hook
- ✅ Le formulaire se ferme automatiquement au clic sur le fond ou le bouton X
- ✅ Le formulaire se réinitialise automatiquement à la fermeture
