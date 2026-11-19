# Pour M. Amine TEL (version téléphone, sans écriture)

En ligne : https://seb102.github.io/pour-m-amine/ — même moteur que « Pour M. Amine » (lecture des partitions, rouleau, doigtés), interface pensée pour un téléphone tenu d'une main, en portrait. **Pas de mode Écriture** dans cette version.

- **Barre du bas** à gros boutons : ☰ Menu, ⏮ Début, ▶ Lecture / ⏸ Pause, curseur de vitesse (de ¼× à 1×).
- **Menu** : le bandeau devient une feuille qui monte du bas (☰), fermée par ✕ ou en touchant ailleurs ; boutons de 44 px au moins.
- **Mes partitions** : chaque partition ouverte ou exportée est gardée dans le téléphone (liste en haut du menu, ✕ pour la retirer).
- **Clavier** : environ un quart de l'écran ; touches **Grandes** d'emblée sur un petit écran (menu Zoom −/+ et ◀ ▶ en haut à droite du rouleau).
- **Export** : feuille de partage du téléphone (« Enregistrer dans Fichiers », AirDrop, mail…).
- **Installable et hors connexion** : « Partager › Sur l'écran d'accueil » (iPhone) ; après une première ouverture, l'app fonctionne sans réseau.
- Le mode d'emploi joint décrit encore les commandes de la version ordinateur (sans la partie écriture).

---

# Pour M. Amine

Version simplifiée de SEB-ROULPIANO (https://github.com/SEB102/seb-roulpiano-tel) : l'application d'origine est conservée telle quelle.
Elle ne contient qu'une partition, « Grille cool de Dorian » (`partition.musicxml`, avec ses doigtés), chargée au démarrage.

Mode d'emploi illustré : `MODE-D-EMPLOI.html` (autonome, images intégrées) et `MODE-D-EMPLOI.pdf` (même contenu, imprimable) ; lien « Mode d'emploi » en bas de l'application.

En ligne : https://seb102.github.io/pour-m-amine-tel/ — ou en local : ouvrir `index.html` dans Chrome / Safari (double-clic). Internet requis au 1er lancement (échantillons de piano + Tone.js) ; sans connexion, un synthé de secours prend le relais.

## Commandes (barre du haut)
- **⏮** retour au début · **▶ Lecture / ⏸ Pause** (Espace) · ← → : mesure précédente / suivante.
- **Vitesse** : curseur de ¼× à 1× (1× au départ ; ↑ ↓ pour affiner).
- **Tempo ♩ =** : tempo de départ de la partition, modifiable (↺ pour le retrouver).
- **M.G.** et **M.D.** : deux boutons, allumés au départ, qu'on éteint / rallume séparément (une main éteinte n'apparaît ni sur le rouleau ni sur le clavier) ; le son des deux mains reste toujours audible.
- **Mesures visibles** : 1 (au départ) ou 2 mesures dans le rouleau.
- **afficher / masquer les mains virtuelles** (masquées au départ) : les mains d'origine, doigts tendus, sans trajectoires ni repères d'anticipation.
- **afficher / masquer les doigtés** (masqués au départ) ; clic sur une note pour saisir ou corriger un doigté, Maj + glisser pour sélectionner un groupe de notes (main, copier / coller les doigtés).
- **📂 Ouvrir une partition** (ou glisser-déposer : .mid, .musicxml, .mxl, .mscz) et **Exporter la partition** (MusicXML avec les doigtés). Si des doigtés ont été modifiés sans export, la fermeture de la page, le changement de site ou l'ouverture d'un autre fichier déclenche un rappel « Voulez-vous enregistrer la partition avec vos doigtés ? » (Oui = export automatique). Pour Safari (qui quitte la page même après « Rester », par exemple sur un signet), un brouillon de la partition est gardé dans le navigateur et la même question est posée à la prochaine ouverture.
- **Curseur de position** (sous la barre) : glisser pour rembobiner ou avancer ; une bulle indique le numéro de mesure correspondant (au survol comme pendant le déplacement). **⛶ Plein écran**.
- Le rouleau est toujours affiché ; le zoom automatique du clavier est toujours actif ; doigtés simples (M.D. / M.G. + doigt) uniquement.

## Ce qui a été retiré par rapport à SEB-ROULPIANO
Pas à pas et boucles (code compris), anticipation, pré-écoute, décompte, export vidéo, exemples, réglage de synchro, taille des mains, boutons de zoom et de rouleau, panneau Réglages.

## Licence et crédits
Licence **CC BY-NC 4.0** (Attribution - Pas d'Utilisation Commerciale), © 2026 Sébastien Gay (fichier `LICENSE`).
Sons de piano : Salamander Grand Piano V3 par Alexander Holm, CC BY 3.0, chargés depuis Internet via Tone.js (MIT).

Fichiers : `index.html` (généré : `node construire.js`), `index.template.html` (source), `core.js` (lecture MusicXML), `hands.js` et `hands_legacy.js` (mains virtuelles), `partition.musicxml`, `test_core.js`, `test_hands.js` et `exemples.js` (tests : `node test_core.js && node test_hands.js`).

- **Vue 3D** : bouton « vue 3D » (touche V) : clavier en perspective, rouleau qui s'éloigne derrière le clavier, mains en volume ; glisser pour tourner sur 360° (on peut voir les mains de face) ; zoom par les boutons + / − (coin en haut à droite), les touches + / −, la molette ou le pincement à deux doigts ; double-clic ou bouton ⟲ pour revenir à la vue de départ. Nécessite Internet (bibliothèque Three.js). En vue 3D, le bouton « supprimer mains virtuelles » et le nombre de mesures visibles sont grisés. Les doigtés apparaissent en pastilles sur les bouts de doigts et sur les notes du rouleau. Les mains sont dessinées en traits épais (squelette, à la manière de MediaPipe).
