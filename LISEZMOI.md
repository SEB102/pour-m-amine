# Pour M. Amine

Version simplifiée de SEB-ROULPIANO (https://github.com/SEB102/seb-roulpiano) : l'application d'origine est conservée telle quelle.
Elle ne contient qu'une partition, « Grille cool de Dorian » (`partition.musicxml`, avec ses doigtés), chargée au démarrage.

En ligne : https://seb102.github.io/pour-m-amine/ — ou en local : ouvrir `index.html` dans Chrome / Safari (double-clic). Internet requis au 1er lancement (échantillons de piano + Tone.js) ; sans connexion, un synthé de secours prend le relais.

## Commandes (barre du haut)
- **⏮** retour au début · **▶ Lecture / ⏸ Pause** (Espace) · ← → : mesure précédente / suivante.
- **Vitesse** : curseur de ¼× à 1× (1× au départ ; ↑ ↓ pour affiner).
- **Tempo ♩ =** : tempo de départ de la partition, modifiable (↺ pour le retrouver).
- **M.G.** et **M.D.** : deux boutons, allumés au départ, qu'on éteint / rallume séparément (une main éteinte n'apparaît ni sur le rouleau ni sur le clavier) ; le son des deux mains reste toujours audible.
- **Mesures visibles** : 1 (au départ) ou 2 mesures dans le rouleau.
- **supprimer mains virtuelles** : masque / réaffiche les mains virtuelles (les mains d'origine, doigts tendus, sans trajectoires ni repères d'anticipation).
- **Curseur de position** (sous la barre) : glisser pour rembobiner ou avancer ; une bulle indique le numéro de mesure correspondant (au survol comme pendant le déplacement). **⛶ Plein écran**.
- Le rouleau est toujours affiché ; le zoom automatique du clavier est toujours actif ; doigtés simples (M.D. / M.G. + doigt) uniquement.

## Ce qui a été retiré par rapport à SEB-ROULPIANO
Pas à pas et boucles (code compris), anticipation, pré-écoute, décompte, export vidéo, ouverture de fichiers et exemples, glisser-déposer, édition / import / export des doigtés, doigtés automatiques, réglage de synchro, taille des mains, boutons de zoom et de rouleau.

## Licence et crédits
Licence **CC BY-NC 4.0** (Attribution - Pas d'Utilisation Commerciale), © 2026 Sébastien Gay (fichier `LICENSE`).
Sons de piano : Salamander Grand Piano V3 par Alexander Holm, CC BY 3.0, chargés depuis Internet via Tone.js (MIT).

Fichiers : `index.html` (généré : `node construire.js`), `index.template.html` (source), `core.js` (lecture MusicXML), `hands.js` et `hands_legacy.js` (mains virtuelles), `partition.musicxml`, `test_core.js`, `test_hands.js` et `exemples.js` (tests : `node test_core.js && node test_hands.js`).

- **Vue 3D** : bouton « vue 3D » (touche V) : clavier en perspective, rouleau qui s'éloigne derrière le clavier, mains en volume ; glisser pour tourner ; zoom par les boutons + / − (coin en haut à droite), les touches + / −, la molette ou le pincement à deux doigts ; double-clic ou bouton ⟲ pour revenir à la vue de départ. Nécessite Internet (bibliothèque Three.js). En vue 3D, le bouton « supprimer mains virtuelles » et le nombre de mesures visibles sont grisés. Les doigtés apparaissent en pastilles sur les bouts de doigts et sur les notes du rouleau. Mains en traits épais (style MediaPipe) au départ ; bouton ✋ pour passer aux mains en volume.
