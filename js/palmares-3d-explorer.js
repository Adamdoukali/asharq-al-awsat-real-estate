/**
 * ============================================================================
 * PALMARES 3D ARCHITECTURAL MASTER EXPLORER (APPLE DESIGN & WEBGL 3D EDITION)
 * Real-Time Three.js Architectural Dollhouse & Interactive 3D Model Inspector
 * Grounded in Apple Human Interface Guidelines & Liquid Glass Architecture
 * Four Core Architectural Parameters:
 *   1. Typologie & Agencement Spatial (Surfaces, Pièces, Hauteur)
 *   2. Orientation & Ensoleillement (Course du Soleil à Tanger, Vue Détroit)
 *   3. Spécifications & Matériaux Nobles (Marbre Calacatta, Parquet Chêne, Isolation)
 *   4. Dossier Juridique & Financement (100% Déclaré, Titre Foncier, Simulateur)
 * Architectural Plan: MB Interior Architects — Tranche 8 (Étage Courant)
 * ============================================================================
 */

(function() {
  'use strict';

  // --- COMPREHENSIVE ARCHITECTURAL DATASET (17 AUTHENTIC UNITS FROM MB ARCHITECTS) ---
  const PALMARES_UNITS = [
    // --- AILE OUEST (WING A) ---
    {
      id: 'pal-t8-a02',
      wing: 'A',
      wingName: 'Aile Ouest',
      num: 'N°2',
      label: 'Appartement N°2',
      surface: '91,40 m²',
      surfaceVal: 91.4,
      category: 'f4',
      typology: 'Grand F4 Panoramique d’Angle',
      orientation: 'Double Façade Sud-Ouest • Ensoleillement Continu',
      solarAngle: 225,
      solarHours: '11h00 – 19h30 (8.5h d’ensoleillement direct)',
      floor: 'Étage Courant (Vue Dégagée)',
      x: 42.8,
      y: 73.8,
      rooms: '3 Chambres • Double Salon • 2 Salles de Bain • Balcon Angle',
      estimatedPrice: '1 280 000 DH',
      priceVal: 1280000,
      detailPlanImg: 'assets/projects/plan_detail_a02.png',
      roomsDetail: [
        { name: 'Grand Double Salon de Réception', surf: '38,2 m²', pct: 42, key: 'salon' },
        { name: 'Suite Parentale avec SDB Privative', surf: '18,5 m²', pct: 20, key: 'suite' },
        { name: 'Chambre Enfants 2 & Dressing', surf: '13,8 m²', pct: 15, key: 'chambre2' },
        { name: 'Cuisine de Chef Équipée & Buanderie', surf: '11,4 m²', pct: 12, key: 'cuisine' },
        { name: 'Balcon Filant d’Angle Panoramique', surf: '9,5 m²', pct: 11, key: 'balcon' }
      ],
      breakdown: [
        'Vaste double salon de réception avec baies vitrées coulissantes d’angle',
        'Suite parentale d’exception avec salle de bain privative en marbre',
        '2 Grandes chambres enfants baignées de lumière naturelle avec placards',
        'Cuisine contemporaine avec îlot et buanderie fermée',
        'Deuxième salle de bain familiale avec douche à l’italienne',
        'Balcon filant d’angle offrant une vue dégagée et un ensoleillement optimal'
      ],
      finishes: [
        { title: 'Revêtement Sols Réception', desc: 'Marbre poli Calacatta Gold 60x120 cm dans les réceptions et hall.' },
        { title: 'Revêtement Chambres', desc: 'Parquet chêne de France à clipser avec isolant phonique sous-couche 19 dB.' },
        { title: 'Menuiserie Aluminium', desc: 'Profilés haut de gamme Technal à rupture de pont thermique, double vitrage 6/12/6.' },
        { title: 'Sanitaires & Robinetterie', desc: 'Sanitaires suspendus Jacob Delafon / Roca, robinetterie thermostatique Grohe.' },
        { title: 'Confort Climatique', desc: 'Climatisation réversible gainée Daikin avec commande digitale murale.' }
      ],
      standing: 'Grand Standing • Marbre Calacatta • Climatisation gainée intégrale',
      guarantee: '100% Déclaré Notaire • Titre Foncier Individuel Disponible'
    },
    {
      id: 'pal-t8-a01',
      wing: 'A',
      wingName: 'Aile Ouest',
      num: 'N°1',
      label: 'Appartement N°1',
      surface: '65,62 m²',
      surfaceVal: 65.62,
      category: 'f2',
      typology: 'Appartement F2/F3 Confort Optimisé',
      orientation: 'Façade Ouest • Lumière de l’Après-midi',
      solarAngle: 270,
      solarHours: '13h00 – 19h00 (6h d’ensoleillement chaleureux)',
      floor: 'Étage Courant',
      x: 44.8,
      y: 70.8,
      rooms: '2 Chambres • Salon Spacieux • Cuisine & Loggia • SDB',
      estimatedPrice: '890 000 DH',
      priceVal: 890000,
      detailPlanImg: 'assets/projects/plan_detail_a02.png',
      roomsDetail: [
        { name: 'Salon Familial Lumineux', surf: '27,4 m²', pct: 42, key: 'salon' },
        { name: 'Chambre Principale avec Placard', surf: '15,2 m²', pct: 23, key: 'suite' },
        { name: 'Chambre 2 Modulable / Bureau', surf: '11,8 m²', pct: 18, key: 'chambre2' },
        { name: 'Cuisine Aménagée avec Séchoir', surf: '7,2 m²', pct: 11, key: 'cuisine' },
        { name: 'Salle d’Eau Italienne', surf: '4,0 m²', pct: 6, key: 'sdb' }
      ],
      breakdown: [
        'Séjour familial lumineux avec grand vitrage thermique isolant',
        'Chambre principale spacieuse avec espace dressing intégré',
        'Seconde chambre modulable (bureau de télétravail ou chambre enfant)',
        'Cuisine moderne avec accès buanderie séparée',
        'Salle d’eau avec sanitaires suspendus et douche italienne'
      ],
      finishes: [
        { title: 'Revêtements Sols', desc: 'Carrelage grès cérame rectifié grand format 60x60 cm.' },
        { title: 'Menuiseries', desc: 'Volets roulants électriques motorisés avec commande individuelle.' },
        { title: 'Isolation Acoustique', desc: 'Chapes flottantes avec isolant phonique sous carrelage.' }
      ],
      standing: 'Standing Supérieur • Menuiseries double vitrage • Volets électriques',
      guarantee: '100% Déclaré Notaire • Titre Foncier Disponible'
    },
    {
      id: 'pal-t8-a03',
      wing: 'A',
      wingName: 'Aile Ouest',
      num: 'N°3',
      label: 'Appartement N°3',
      surface: '57,51 m²',
      surfaceVal: 57.51,
      category: 'f2',
      typology: 'F2 Investisseur Rendement Élevé',
      orientation: 'Façade Ouest • Vue Paisible',
      solarAngle: 260,
      solarHours: '13h30 – 19h00 (5.5h de soleil de fin de journée)',
      floor: 'Étage Courant',
      x: 38.9,
      y: 69.0,
      rooms: '1 Grande Chambre • Séjour Ouvert • Cuisine Équipée • SDB',
      estimatedPrice: '780 000 DH',
      priceVal: 780000,
      detailPlanImg: 'assets/projects/plan_detail_a02.png',
      roomsDetail: [
        { name: 'Salon & Espace Repas Ouvert', surf: '26,5 m²', pct: 46, key: 'salon' },
        { name: 'Chambre Royale avec Penderie', surf: '16,0 m²', pct: 28, key: 'suite' },
        { name: 'Cuisine Américaine Design', surf: '9,5 m²', pct: 16, key: 'cuisine' },
        { name: 'Salle d’Eau Douche Italienne', surf: '5,5 m²', pct: 10, key: 'sdb' }
      ],
      breakdown: [
        'Vaste séjour ouvert idéal pour pied-à-terre ou investissement locatif',
        'Chambre royale baignée de lumière avec penderie toute hauteur',
        'Cuisine américaine avec comptoir bar convivial',
        'Salle de bain soignée avec matériaux italiens'
      ],
      finishes: [
        { title: 'Rendement Locatif', desc: 'Rendement net estimé à 7.8% par an à Tanger (location meublée / moyenne durée).' },
        { title: 'Équipements', desc: 'Pré-câblage fibre optique, climatisation split et interphone vidéo couleur.' }
      ],
      standing: 'Idéal Investissement Locatif • Rendement élevé • Emplacement stratégique',
      guarantee: '100% Déclaré Notaire • Titre Foncier Éclaté'
    },
    {
      id: 'pal-t8-a04',
      wing: 'A',
      wingName: 'Aile Ouest',
      num: 'N°4',
      label: 'Appartement N°4',
      surface: '75,10 m²',
      surfaceVal: 75.1,
      category: 'f3',
      typology: 'Appartement F3 Traversant Équilibré',
      orientation: 'Façade Ouest & Dégagement Nord',
      solarAngle: 280,
      solarHours: '12h00 – 18h30 (6.5h d’ensoleillement)',
      floor: 'Étage Courant',
      x: 34.2,
      y: 64.5,
      rooms: '2 Chambres • Grand Séjour • Cuisine Aménagée • SDB Familiale',
      estimatedPrice: '995 000 DH',
      priceVal: 995000,
      detailPlanImg: 'assets/projects/plan_detail_a02.png',
      roomsDetail: [
        { name: 'Grand Séjour & Salle à Manger', surf: '31,5 m²', pct: 42, key: 'salon' },
        { name: 'Chambre Parentale Spacieuse', surf: '16,2 m²', pct: 22, key: 'suite' },
        { name: 'Chambre Enfants Lumineuse', surf: '13,0 m²', pct: 17, key: 'chambre2' },
        { name: 'Cuisine avec Buanderie', surf: '9,4 m²', pct: 13, key: 'cuisine' },
        { name: 'Salle de Bain Complète', surf: '5,0 m²', pct: 6, key: 'sdb' }
      ],
      breakdown: [
        'Séjour familial avec baies vitrées coulissantes',
        'Suite parentale avec penderie intégrée',
        'Chambre secondaire pour enfants ou invités',
        'Cuisine contemporaine avec séchoir indépendant',
        'Salle de bain familiale carrelée toute hauteur'
      ],
      finishes: [
        { title: 'Confort Acoustique', desc: 'Double vitrage thermique et acoustique 6/12/6.' },
        { title: 'Finitions', desc: 'Plinthes assorties, portes intérieures pleines en bois d’ingénierie.' }
      ],
      standing: 'Appartement familial de standing • Parfait agencement',
      guarantee: '100% Déclaré Notaire • Crédit Bancaire 100%'
    },
    // --- AILE SUD-EST (WING B) ---
    {
      id: 'pal-t8-b08',
      wing: 'B',
      wingName: 'Aile Sud-Est',
      num: 'N°8',
      label: 'Appartement N°8',
      surface: '97,20 m²',
      surfaceVal: 97.2,
      category: 'f4',
      typology: 'Grand F4 d’Exception • Plus Vaste Lot',
      orientation: 'Triple Façade Est / Sud / Nord • Vue Majeure',
      solarAngle: 150,
      solarHours: '08h30 – 17h30 (9h d’ensoleillement maximal)',
      floor: 'Étage Courant (Position Royale)',
      x: 78.2,
      y: 29.1,
      rooms: '3 Grandes Chambres • Vaste Réception Royale • 2 SDB • Balcon Filant',
      estimatedPrice: '1 360 000 DH',
      priceVal: 1360000,
      detailPlanImg: 'assets/projects/plan_detail_b08.png',
      roomsDetail: [
        { name: 'Vaste Salon d’Honneur & Réception', surf: '41,5 m²', pct: 43, key: 'salon' },
        { name: 'Suite Parentale Royale & SDB', surf: '19,8 m²', pct: 20, key: 'suite' },
        { name: 'Chambre Enfants 1 avec Placard', surf: '13,5 m²', pct: 14, key: 'chambre2' },
        { name: 'Chambre Enfants 2 / Bureau', surf: '12,0 m²', pct: 12, key: 'chambre3' },
        { name: 'Cuisine de Chef & Buanderie XL', surf: '10,4 m²', pct: 11, key: 'cuisine' }
      ],
      breakdown: [
        'Superbe salon d’honneur aux volumes majestueux baigné de lumière',
        'Suite parentale royale avec dressing privatif et salle de bain dédiée',
        '2 Vastes chambres complémentaires baignées du soleil levant',
        'Cuisine de chef spacieuse avec buanderie et loggia séparées',
        'Deuxième salle de bain complète avec équipements italiens haut de gamme',
        'Grande loggia d’angle offrant une perspective panoramique sur la ville'
      ],
      finishes: [
        { title: 'Architecture Royale', desc: 'Lot phare du programme : volumes d’exception et triple exposition ensoleillée.' },
        { title: 'Marbres & Céramiques', desc: 'Marbre poli dans les halls et réceptions, parquet massif dans les chambres.' },
        { title: 'Suites Sanitaires', desc: 'Meubles vasques suspendus avec miroirs rétro-éclairés LED tactiles.' },
        { title: 'Réseaux & Domotique', desc: 'Fibre optique pré-câblée, visiophone tactile couleur, volets centralisés.' }
      ],
      standing: 'Prestige Absolu • Lot Phare • Triple Exposition Solaire',
      guarantee: '100% Déclaré Notaire • Titre Foncier Définitif'
    },
    {
      id: 'pal-t8-b01',
      wing: 'B',
      wingName: 'Aile Sud-Est',
      num: 'N°1',
      label: 'Appartement N°1',
      surface: '90,05 m²',
      surfaceVal: 90.05,
      category: 'f4',
      typology: 'Grand F4 Panoramique d’Angle Sud',
      orientation: 'Double Façade Est & Sud • Soleil du Matin et du Midi',
      solarAngle: 135,
      solarHours: '08h30 – 16h30 (8h d’ensoleillement direct)',
      floor: 'Étage Courant',
      x: 80.7,
      y: 33.2,
      rooms: '3 Chambres • Double Réception • 2 Salles de Bain • Terrasse',
      estimatedPrice: '1 260 000 DH',
      priceVal: 1260000,
      detailPlanImg: 'assets/projects/plan_detail_b08.png',
      roomsDetail: [
        { name: 'Double Salon de Réception', surf: '37,5 m²', pct: 42, key: 'salon' },
        { name: 'Suite Parentale Complète', surf: '18,0 m²', pct: 20, key: 'suite' },
        { name: 'Chambre 2 avec Rangements', surf: '14,0 m²', pct: 15, key: 'chambre2' },
        { name: 'Chambre 3 / Bureau', surf: '11,5 m²', pct: 13, key: 'chambre3' },
        { name: 'Cuisine Équipée & Loggia', surf: '9,0 m²', pct: 10, key: 'cuisine' }
      ],
      breakdown: [
        'Double réception lumineuse s’ouvrant sur balcon',
        'Suite parentale avec salle d’eau privative et placards',
        'Deux chambres complémentaires avec rangements intégrés',
        'Cuisine spacieuse toute équipée avec séchoir',
        'Deuxième salle de bain familiale avec baignoire'
      ],
      finishes: [
        { title: 'Confort Intérieur', desc: 'Parquet stratifié dans les chambres, carrelage rectifié au salon.' }
      ],
      standing: 'Double Façade • Parquet dans les chambres • Grande réception',
      guarantee: '100% Déclaré Notaire • Titre Foncier Individuel'
    },
    {
      id: 'pal-t8-b07',
      wing: 'B',
      wingName: 'Aile Sud-Est',
      num: 'N°7',
      label: 'Appartement N°7',
      surface: '62,30 m²',
      surfaceVal: 62.3,
      category: 'f2',
      typology: 'Appartement F2/F3 Matinal',
      orientation: 'Façade Est • Soleil Levant',
      solarAngle: 90,
      solarHours: '07h30 – 13h00 (5.5h de clarté matinale)',
      floor: 'Étage Courant',
      x: 72.4,
      y: 36.1,
      rooms: '2 Chambres • Salon Agréable • Cuisine avec Loggia • SDB',
      estimatedPrice: '845 000 DH',
      priceVal: 845000,
      detailPlanImg: 'assets/projects/plan_detail_b05.png',
      roomsDetail: [
        { name: 'Séjour Matinal Lumineux', surf: '26,0 m²', pct: 42, key: 'salon' },
        { name: 'Chambre Principale', surf: '14,5 m²', pct: 23, key: 'suite' },
        { name: 'Chambre Secondaire', surf: '11,5 m²', pct: 18, key: 'chambre2' },
        { name: 'Cuisine avec Loggia', surf: '6,8 m²', pct: 11, key: 'cuisine' },
        { name: 'Salle de Bain', surf: '3,5 m²', pct: 6, key: 'sdb' }
      ],
      breakdown: [
        'Séjour baigné de la clarté matinale',
        'Chambre principale avec penderie intégrée',
        'Chambre d’enfants ou d’invités',
        'Cuisine moderne avec zone de lavage',
        'Salle d’eau avec douche à l’italienne'
      ],
      finishes: [
        { title: 'Équipements', desc: 'Volets électriques centralisés, ascenseur direct au parking souterrain.' }
      ],
      standing: 'Volets électriques centralisés, ascenseur direct au parking',
      guarantee: '100% Déclaré Notaire • Titre Foncier Disponible'
    },
    {
      id: 'pal-t8-b05',
      wing: 'B',
      wingName: 'Aile Sud-Est',
      num: 'N°5',
      label: 'Appartement N°5',
      surface: '56,84 m²',
      surfaceVal: 56.84,
      category: 'f2',
      typology: 'F2 Studio Urbain Optimisé',
      orientation: 'Façade Sud • Plein Ensoleillement',
      solarAngle: 180,
      solarHours: '10h30 – 16h30 (6h de soleil zénithal)',
      floor: 'Étage Courant',
      x: 57.1,
      y: 53.4,
      rooms: '1 Chambre • Salon Baigné de Soleil • Cuisine • SDB',
      estimatedPrice: '775 000 DH',
      priceVal: 775000,
      detailPlanImg: 'assets/projects/plan_detail_b05.png',
      roomsDetail: [
        { name: 'Espace Séjour Plein Sud', surf: '25,5 m²', pct: 45, key: 'salon' },
        { name: 'Chambre Intime avec Placard', surf: '15,5 m²', pct: 27, key: 'suite' },
        { name: 'Cuisine Ergonomique Ouverte', surf: '10,5 m²', pct: 18, key: 'cuisine' },
        { name: 'Salle de Bain Moderne', surf: '5,3 m²', pct: 10, key: 'sdb' }
      ],
      breakdown: [
        'Espace séjour lumineux orienté plein sud',
        'Chambre intime avec rangements sur-mesure',
        'Cuisine ergonomique avec plan de travail en quartz',
        'Salle de bain contemporaine avec robinetterie suspendue'
      ],
      finishes: [
        { title: 'Prix d’Appel', desc: 'Prix d’entrée accessible avec finitions haut standing garanties par contrat.' }
      ],
      standing: 'Prix d’entrée accessible avec finitions haut standing',
      guarantee: '100% Déclaré Notaire • Titre Foncier Éclaté'
    },
    {
      id: 'pal-t8-b04',
      wing: 'B',
      wingName: 'Aile Sud-Est',
      num: 'N°4',
      label: 'Appartement N°4',
      surface: '66,32 m²',
      surfaceVal: 66.32,
      category: 'f3',
      typology: 'Appartement F3 Équilibré Sud-Est',
      orientation: 'Double Façade Sud & Est • Clarté Continue',
      solarAngle: 140,
      solarHours: '09h00 – 16h30 (7.5h d’ensoleillement direct)',
      floor: 'Étage Courant',
      x: 59.3,
      y: 57.5,
      rooms: '2 Chambres • Séjour Familial • Cuisine & Séchoir • SDB',
      estimatedPrice: '895 000 DH',
      priceVal: 895000,
      detailPlanImg: 'assets/projects/plan_detail_b05.png',
      roomsDetail: [
        { name: 'Salon Double Exposition', surf: '27,8 m²', pct: 42, key: 'salon' },
        { name: 'Chambre Parentale Spacieuse', surf: '15,0 m²', pct: 23, key: 'suite' },
        { name: 'Chambre Enfants / Bureau', surf: '12,0 m²', pct: 18, key: 'chambre2' },
        { name: 'Cuisine & Buanderie', surf: '7,5 m²', pct: 11, key: 'cuisine' },
        { name: 'Salle de Bain Contemporaine', surf: '4,0 m²', pct: 6, key: 'sdb' }
      ],
      breakdown: [
        'Salon convivial avec double baie vitrée thermique',
        'Chambre parentale spacieuse avec dressing',
        'Seconde chambre pour enfants ou bureau professionnel',
        'Cuisine équipée avec accès buanderie',
        'Salle de bain soignée avec finitions italiennes'
      ],
      finishes: [
        { title: 'Sécurité Résidence', desc: 'Résidence gardée 24h/24, accès sécurisé par badge, caméras infrarouge.' }
      ],
      standing: 'Résidence gardée 24h/24, accès sécurisé par badge',
      guarantee: '100% Déclaré Notaire • Prêt Bancaire Garanti'
    }
  ];

  // --- PROCEDURAL TEXTURE GENERATOR FOR LUXURY ARCHITECTURE ---
  const TextureGenerator = {
    // Ultra-High Resolution French chevron / herringbone wood parquet (1024x1024)
    createChevronTexture(type = 'oak') {
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 1024;
      const ctx = canvas.getContext('2d');

      const isDark = type === 'walnut';
      // Base luxury wood tone
      ctx.fillStyle = isDark ? '#3D2A1C' : '#D1B48E';
      ctx.fillRect(0, 0, 1024, 1024);

      const plankW = 64;
      const plankH = 256;
      ctx.lineWidth = 2.0;

      for (let y = -plankH; y < 1024 + plankH; y += plankH / 2) {
        for (let x = -plankW * 2; x < 1024 + plankW * 2; x += plankW * 2) {
          const pseudoNoise = (Math.sin(x * 17.1 + y * 11.3) * 0.5 + 0.5);
          const toneVar = pseudoNoise * 26 - 13;
          
          ctx.fillStyle = isDark
            ? `rgb(${55 + toneVar}, ${38 + toneVar * 0.7}, ${26 + toneVar * 0.5})`
            : `rgb(${208 + toneVar}, ${178 + toneVar * 0.9}, ${140 + toneVar * 0.8})`;

          ctx.save();
          ctx.translate(x, y);
          ctx.beginPath();
          ctx.rect(0, 0, plankW, plankH);
          ctx.fill();

          // Dark beveled micro-groove between planks (V-joint)
          ctx.strokeStyle = isDark ? 'rgba(18, 10, 5, 0.65)' : 'rgba(95, 72, 48, 0.45)';
          ctx.stroke();

          // Realistic micro wood-grain fibers
          ctx.strokeStyle = isDark ? 'rgba(20, 12, 6, 0.18)' : 'rgba(110, 85, 55, 0.16)';
          ctx.lineWidth = 1.0;
          for (let f = 6; f < plankW; f += 12) {
            ctx.beginPath();
            ctx.moveTo(f, 0);
            ctx.lineTo(f + (pseudoNoise * 6 - 3), plankH);
            ctx.stroke();
          }

          ctx.restore();
        }
      }

      const tex = new THREE.CanvasTexture(canvas);
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(3, 3);
      return tex;
    },

    // Photorealistic Calacatta Gold Italian polished marble (1024x1024 PBR)
    createMarbleTexture() {
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 1024;
      const ctx = canvas.getContext('2d');

      // Subtle ivory / warm alabaster base with gentle gradient
      const grad = ctx.createLinearGradient(0, 0, 1024, 1024);
      grad.addColorStop(0, '#FAF9F5');
      grad.addColorStop(0.35, '#F4F2EB');
      grad.addColorStop(0.7, '#F7F6F1');
      grad.addColorStop(1, '#FFFFFF');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1024, 1024);

      // Micro-crystalline organic noise mottling
      for (let i = 0; i < 4000; i++) {
        const nx = Math.random() * 1024;
        const ny = Math.random() * 1024;
        ctx.fillStyle = Math.random() > 0.5 ? 'rgba(215, 210, 200, 0.04)' : 'rgba(255, 255, 255, 0.08)';
        ctx.fillRect(nx, ny, Math.random() * 8 + 2, Math.random() * 8 + 2);
      }

      // Procedural organic fractal branching vein generator
      function drawBranchingVein(startX, startY, endX, endY, color, baseWidth, branches = 3) {
        ctx.strokeStyle = color;
        ctx.lineWidth = baseWidth;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        let curX = startX;
        let curY = startY;
        const segments = 16;
        const dx = (endX - startX) / segments;
        const dy = (endY - startY) / segments;

        ctx.beginPath();
        ctx.moveTo(curX, curY);

        for (let s = 1; s <= segments; s++) {
          const jitterX = (Math.sin(s * 3.7 + startX) * 24) + (Math.random() - 0.5) * 16;
          const jitterY = (Math.cos(s * 2.9 + startY) * 22) + (Math.random() - 0.5) * 14;
          const nextX = startX + dx * s + jitterX;
          const nextY = startY + dy * s + jitterY;
          ctx.lineTo(nextX, nextY);

          // Sub-vein splitting
          if (branches > 0 && s % 5 === 0 && Math.random() > 0.35) {
            ctx.stroke();
            const subEndX = nextX + (Math.random() - 0.5) * 220;
            const subEndY = nextY + (Math.random() - 0.5) * 220;
            drawBranchingVein(nextX, nextY, subEndX, subEndY, color, baseWidth * 0.5, branches - 1);
            ctx.beginPath();
            ctx.moveTo(nextX, nextY);
          }
          curX = nextX;
          curY = nextY;
        }
        ctx.stroke();
      }

      // Charcoal and slate grey primary fractures
      drawBranchingVein(60, 0, 820, 1024, 'rgba(110, 108, 102, 0.32)', 6.5, 3);
      drawBranchingVein(320, 0, 980, 850, 'rgba(135, 130, 122, 0.25)', 4.8, 2);
      drawBranchingVein(0, 420, 1024, 820, 'rgba(105, 100, 95, 0.28)', 5.2, 3);

      // Fine golden-ochre / amber sub-veins (The signature Calacatta Gold hallmark)
      drawBranchingVein(120, 80, 860, 1024, 'rgba(197, 160, 89, 0.45)', 4.2, 2);
      drawBranchingVein(0, 580, 920, 980, 'rgba(218, 175, 95, 0.38)', 3.6, 2);
      drawBranchingVein(520, 0, 1024, 460, 'rgba(182, 142, 70, 0.35)', 3.2, 1);
      drawBranchingVein(280, 200, 680, 780, 'rgba(225, 190, 115, 0.30)', 2.5, 1);

      // Delicate micro-feather fractures
      for (let m = 0; m < 12; m++) {
        const mx = Math.random() * 1024;
        const my = Math.random() * 1024;
        drawBranchingVein(mx, my, mx + (Math.random() - 0.5) * 180, my + (Math.random() - 0.5) * 180, 'rgba(160, 150, 140, 0.18)', 1.5, 0);
      }

      const tex = new THREE.CanvasTexture(canvas);
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(1.5, 1.5);
      return tex;
    },

    // Mediterranean Travertine & Terrazzo
    createTravertineTexture() {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');

      ctx.fillStyle = '#E8E3DA';
      ctx.fillRect(0, 0, 512, 512);

      // Organic travertine pits and flecks
      for (let i = 0; i < 600; i++) {
        const px = Math.random() * 512;
        const py = Math.random() * 512;
        const pw = Math.random() * 16 + 2;
        const ph = Math.random() * 3 + 1;
        ctx.fillStyle = Math.random() > 0.4 ? 'rgba(160, 145, 130, 0.22)' : 'rgba(215, 200, 185, 0.35)';
        ctx.fillRect(px, py, pw, ph);
      }

      // Elegant tile joints
      ctx.strokeStyle = 'rgba(130, 118, 105, 0.35)';
      ctx.lineWidth = 2;
      ctx.strokeRect(0, 0, 256, 256);
      ctx.strokeRect(256, 0, 256, 256);
      ctx.strokeRect(0, 256, 256, 256);
      ctx.strokeRect(256, 256, 256, 256);

      const tex = new THREE.CanvasTexture(canvas);
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(3, 3);
      return tex;
    },

    // Bouclé / Woven Fabric Texture for luxury upholstery & bedding
    createFabricTexture(colorHex = '#2C323B') {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');

      ctx.fillStyle = colorHex;
      ctx.fillRect(0, 0, 256, 256);

      // Micro-weave cross-hatch
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 256; i += 4) {
        ctx.beginPath();
        ctx.moveTo(i, 0); ctx.lineTo(i, 256);
        ctx.moveTo(0, i); ctx.lineTo(256, i);
        ctx.stroke();
      }

      const tex = new THREE.CanvasTexture(canvas);
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(6, 6);
      return tex;
    },

    // Blueprint grid for CAD mode
    createBlueprintTexture() {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');

      ctx.fillStyle = '#08111E';
      ctx.fillRect(0, 0, 256, 256);

      ctx.strokeStyle = 'rgba(78, 205, 196, 0.15)';
      ctx.lineWidth = 1;
      for (let i = 0; i <= 256; i += 32) {
        ctx.beginPath();
        ctx.moveTo(i, 0); ctx.lineTo(i, 256);
        ctx.moveTo(0, i); ctx.lineTo(256, i);
        ctx.stroke();
      }

      ctx.strokeStyle = 'rgba(78, 205, 196, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(0, 0, 256, 256);

      const tex = new THREE.CanvasTexture(canvas);
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(8, 8);
      return tex;
    }
  };

  /**
   * Palmares3DExplorer Class
   */
  class Palmares3DExplorer {
    constructor(containerId) {
      this.container = document.getElementById(containerId);
      if (!this.container) return;

      this.currentMode = 'dollhouse'; // 'dollhouse' (3D Intérieur), 'plateau' (3D Plateau 17 Lots), 'cad' (Blueprint CAD)
      this.currentAmbiance = 'jour'; // 'matin', 'jour', 'crepuscule', 'nuit'
      this.currentFilter = 'all'; // 'all', 'wing-a', 'wing-b', 'f2', 'f3', 'f4'
      this.selectedUnitId = 'pal-t8-a02'; // Default selected unit (Grand F4 91.4 m²)
      this.activeParameter = 'typologie'; // 'typologie', 'orientation', 'finitions', 'juridique'
      this.currentFinish = 'calacatta'; // 'calacatta', 'parquet', 'gres'
      this.downPaymentPct = 20; // 20% down payment default
      this.loanDurationYears = 20; // 20 years default loan
      this.cameraTarget = new THREE.Vector3(0, 0.4, -0.6);
      this.hoveredRoom = null;
      this.isMouseDown = false;
      this.mousePrev = { x: 0, y: 0 };
      this.spherical = { radius: 21, theta: Math.PI / 4, phi: Math.PI / 3.6 };
      this.targetSpherical = { radius: 21, theta: Math.PI / 4, phi: Math.PI / 3.6 };

      // Living Animation & Cinematic Guided Tour State
      this.isTourActive = false;
      this.tourStep = 0;
      this.tourTimer = null;
      this.isSolarCycleActive = false;
      this.solarCycleProgress = 0.35;
      this.lastInteractionTime = Date.now();

      this.init();
    }

    init() {
      this.renderMarkup();
      this.bindElements();
      this.initThreeEngine();
      this.bindEvents();
      this.selectUnit(this.selectedUnitId);
      this.setParameter('typologie');
      this.applyFilter('all');
    }

    // --- HTML SHELL WITH APPLE DESIGN & LIQUID GLASS HIERARCHY ---
    renderMarkup() {
      this.container.innerHTML = `
        <div class="p3d-explorer-section" id="p3d-root">
          <div class="p3d-tech-grid-bg"></div>

          <!-- Master Header Bar -->
          <div class="p3d-header">
            <div class="p3d-header-top">
              <div class="p3d-brand-lockup">
                <div class="p3d-brand-emblem">
                  <img src="assets/projects/chip_emblem_palmares.png" alt="Palmares Emblem">
                </div>
                <div class="p3d-brand-titles">
                  <div class="p3d-eyebrow">
                    <span class="pulse-dot"></span>
                    <span>Maquette Numérique 3D Interactive • MB Interior Architects</span>
                  </div>
                  <h3 class="p3d-main-title">
                    Résidence Palmares <em>— Tranche 8 (Plateau R+1 à R+7)</em>
                  </h3>
                </div>
              </div>

              <!-- Apple HIG Meta Badges -->
              <div class="p3d-meta-badges">
                <span class="p3d-meta-pill highlight">✦ 17 Lots Étage Courant</span>
                <span class="p3d-meta-pill">56,84 à 97,20 m²</span>
                <span class="p3d-meta-pill success">100% Déclaré Notarié • Titres Disponibles</span>
              </div>
            </div>

            <!-- Controls Ribbon: Filter Chips & View Mode Segmented Controls -->
            <div class="p3d-controls-ribbon">
              <!-- Filter Segmented Control -->
              <div class="p3d-filter-chips">
                <button type="button" class="p3d-filter-btn active" data-filter="all">
                  <span>Tous les Lots</span>
                  <span class="count-badge">17</span>
                </button>
                <button type="button" class="p3d-filter-btn" data-filter="wing-a">
                  <span>Aile Ouest</span>
                  <span class="count-badge">9</span>
                </button>
                <button type="button" class="p3d-filter-btn" data-filter="wing-b">
                  <span>Aile Sud-Est</span>
                  <span class="count-badge">8</span>
                </button>
                <button type="button" class="p3d-filter-btn" data-filter="f2">
                  <span>Studios & F2 (56–65 m²)</span>
                  <span class="count-badge">8</span>
                </button>
                <button type="button" class="p3d-filter-btn" data-filter="f3">
                  <span>F3 Familiaux (66–75 m²)</span>
                  <span class="count-badge">6</span>
                </button>
                <button type="button" class="p3d-filter-btn" data-filter="f4">
                  <span>Grands F4 & Angles (90–97 m²)</span>
                  <span class="count-badge">3</span>
                </button>
              </div>

              <!-- 3D View Modes & Solar Ambiance -->
              <div class="p3d-modes-bar">
                <!-- Apple Segmented Mode Switcher -->
                <div class="p3d-segmented-control" id="p3d-mode-segmented">
                  <button type="button" class="p3d-segmented-btn active" data-mode="dollhouse" title="Modèle 3D Intérieur de l'appartement">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                    <span>3D Dollhouse</span>
                  </button>
                  <button type="button" class="p3d-segmented-btn" data-mode="plateau" title="Plateau d'étage complet avec les 17 lots">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M2 9h20M9 21V9"/></svg>
                    <span>Plateau R+7 (17 Lots)</span>
                  </button>
                  <button type="button" class="p3d-segmented-btn" data-mode="cad" title="Coupe technique axonométrique">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                    <span>Plan CAD</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Main Workspace: Left 3D WebGL Canvas + Right 4-Parameter Dossier -->
          <div class="p3d-workspace">
            
            <!-- Left: True WebGL Three.js Viewport -->
            <div class="p3d-viewport-container" id="p3d-viewport">
              <!-- Three.js Canvas -->
              <canvas id="p3d-three-canvas" class="p3d-three-canvas"></canvas>

              <!-- Floating Apple Liquid Glass Compass HUD -->
              <div class="p3d-compass-hud" id="p3d-compass-hud">
                <div class="p3d-compass-needle" id="p3d-compass-needle">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <polygon points="12,2 16,12 12,9 8,12" fill="#E53935"/>
                    <polygon points="12,22 16,12 12,15 8,12" fill="#90A4AE"/>
                  </svg>
                </div>
                <span class="p3d-compass-text">NORD ARCHITECTURAL (DÉTROIT)</span>
              </div>

              <!-- Elevation Level HUD -->
              <div class="p3d-floor-level-hud">
                <div class="p3d-floor-level-badge"></div>
                <span class="p3d-floor-level-text">ÉTAGE COURANT R+1 À R+7</span>
              </div>

              <!-- Solar Hour HUD Pill (Directly Linked to Parameter 2) -->
              <div class="p3d-solar-time-hud" id="p3d-solar-time-hud">
                <div class="p3d-solar-icon" id="p3d-solar-icon">☀️</div>
                <div class="p3d-solar-info">
                  <strong id="p3d-solar-title">Zénith Méditerranéen</strong>
                  <span id="p3d-solar-clock">13h30 • Plein Sud</span>
                </div>
              </div>

              <!-- Floating 3D Spatial Tag (Follows cursor when hovering 3D rooms) -->
              <div class="p3d-floating-tag" id="p3d-floating-tag">
                <span class="p3d-ft-name">Salon de Réception</span>
                <span class="p3d-ft-surf">38,2 m²</span>
              </div>

              <!-- Animated Guided Tour Status HUD -->
              <div class="p3d-tour-status-hud" id="p3d-tour-status-hud">
                <div class="p3d-tour-rec-dot"></div>
                <div class="p3d-tour-text-wrap">
                  <span class="p3d-tour-step-title" id="p3d-tour-step-title">Visite Guidée 3D en cours</span>
                  <span class="p3d-tour-step-sub" id="p3d-tour-step-sub">Grand Double Salon</span>
                </div>
              </div>

              <!-- Quick Camera View Presets Dock -->
              <div class="p3d-camera-presets-dock">
                <button type="button" class="p3d-dock-pill tour-btn" id="p3d-btn-guided-tour" title="Lancer la visite cinématographique 3D guidée">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                  <span>Visite Guidée 3D</span>
                </button>
                <button type="button" class="p3d-dock-pill" id="p3d-btn-solar-cycle" title="Animer le cycle solaire 24H Tanger">
                  <span>☀️ Cycle 24H</span>
                </button>
                <button type="button" class="p3d-dock-pill active" id="p3d-cam-iso" title="Perspective Isométrique 3D">
                  <span>Isométrique</span>
                </button>
                <button type="button" class="p3d-dock-pill" id="p3d-cam-top" title="Vue du dessus">
                  <span>Plan Dessus</span>
                </button>
                <button type="button" class="p3d-dock-pill" id="p3d-cam-living" title="Vue Salon de Réception">
                  <span>Salon</span>
                </button>
                <button type="button" class="p3d-dock-pill" id="p3d-cam-reset" title="Recentrer le modèle">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
                </button>
              </div>

              <!-- Bottom Right Dock Controls (Zoom & Fullscreen) -->
              <div class="p3d-dock-controls">
                <button type="button" class="p3d-dock-btn" id="p3d-btn-zoom-in" title="Zoomer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                </button>
                <button type="button" class="p3d-dock-btn" id="p3d-btn-zoom-out" title="Dézoomer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                </button>
                <a href="assets/projects/palmares_plan_tranche8.pdf" target="_blank" download class="p3d-dock-btn" title="Télécharger le plan officiel d'architecte MB Interior">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                </a>
              </div>
            </div>

            <!-- Right: Extended Luxury Dossier with the 4 Core Parameters -->
            <div class="p3d-dossier-card" id="p3d-dossier">
              <!-- Populated dynamically via renderDossier() -->
            </div>
          </div>

          <!-- Bottom Mobile Unit Carousel Strip -->
          <div class="p3d-mobile-carousel" id="p3d-mobile-strip"></div>
        </div>
      `;
    }

    bindElements() {
      this.viewport = document.getElementById('p3d-viewport');
      this.canvas = document.getElementById('p3d-three-canvas');
      this.dossier = document.getElementById('p3d-dossier');
      this.mobileStrip = document.getElementById('p3d-mobile-strip');
      this.floatingTag = document.getElementById('p3d-floating-tag');
      this.compassNeedle = document.getElementById('p3d-compass-needle');
      this.solarTimeHud = document.getElementById('p3d-solar-time-hud');
      this.solarIcon = document.getElementById('p3d-solar-icon');
      this.solarTitle = document.getElementById('p3d-solar-title');
      this.solarClock = document.getElementById('p3d-solar-clock');
      this.btnGuidedTour = document.getElementById('p3d-btn-guided-tour');
      this.btnSolarCycle = document.getElementById('p3d-btn-solar-cycle');
      this.tourStatusHud = document.getElementById('p3d-tour-status-hud');
      this.tourStepTitle = document.getElementById('p3d-tour-step-title');
      this.tourStepSub = document.getElementById('p3d-tour-step-sub');
    }

    // --- THREE.JS REAL-TIME 3D ARCHITECTURAL DOLLHOUSE ENGINE ---
    initThreeEngine() {
      if (typeof THREE === 'undefined') {
        console.warn('Three.js is still loading, retrying in 100ms...');
        setTimeout(() => this.initThreeEngine(), 100);
        return;
      }

      const width = this.viewport.clientWidth;
      const height = this.viewport.clientHeight;

      // 1. Scene & Shadow Setup
      this.scene = new THREE.Scene();

      // 2. Camera Setup (Architectural Perspective)
      this.camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 1000);
      this.updateCameraFromSpherical();

      // 3. Renderer with ACES Tone Mapping & Soft Shadows
      this.renderer = new THREE.WebGLRenderer({
        canvas: this.canvas,
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
      this.renderer.setSize(width, height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.renderer.toneMappingExposure = 1.15;
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      // 4. Raycaster for Room Interactivity
      this.raycaster = new THREE.Raycaster();
      this.mouse = new THREE.Vector2();

      // 5. Lighting Setup, Ambient Contact Shadow & Atmospheric Sunbeams
      this.setupLighting();
      this.setupGroundShadow();
      this.setupAtmosphericParticles();

      // 6. Textures Cache (Ultra-High Resolution Procedural PBR)
      this.textures = {
        oak: TextureGenerator.createChevronTexture('oak'),
        walnut: TextureGenerator.createChevronTexture('walnut'),
        calacatta: TextureGenerator.createMarbleTexture(),
        travertine: TextureGenerator.createTravertineTexture(),
        fabricDark: TextureGenerator.createFabricTexture('#28303C'),
        fabricLight: TextureGenerator.createFabricTexture('#FAF8F5'),
        fabricGold: TextureGenerator.createFabricTexture('#9E1B32'),
        blueprint: TextureGenerator.createBlueprintTexture()
      };

      // 7. Render Loop
      this.animate = this.animate.bind(this);
      requestAnimationFrame(this.animate);

      // 8. Build initial 3D model
      this.buildCurrent3DModel();
    }

    setupLighting() {
      // Hemisphere Light (Sky & Floor bounce)
      this.hemiLight = new THREE.HemisphereLight(0xF4F7FA, 0x241C15, 0.85);
      this.scene.add(this.hemiLight);

      // Directional Sunlight (Simulates Mediterranean Tangier Sun)
      this.sunLight = new THREE.DirectionalLight(0xFFF6E8, 1.45);
      this.sunLight.castShadow = true;
      this.sunLight.shadow.mapSize.width = 2048;
      this.sunLight.shadow.mapSize.height = 2048;
      this.sunLight.shadow.camera.near = 0.5;
      this.sunLight.shadow.camera.far = 80;
      this.sunLight.shadow.camera.left = -15;
      this.sunLight.shadow.camera.right = 15;
      this.sunLight.shadow.camera.top = 15;
      this.sunLight.shadow.camera.bottom = -15;
      this.sunLight.shadow.bias = -0.0005;
      this.scene.add(this.sunLight);

      // Warm Architectural Recessed Point Lights (Interior ambiance)
      this.interiorLight1 = new THREE.PointLight(0xFFA53C, 0.9, 14);
      this.interiorLight1.position.set(0, 2.2, -1);
      this.scene.add(this.interiorLight1);

      this.interiorLight2 = new THREE.PointLight(0xFFB75E, 0.7, 12);
      this.interiorLight2.position.set(-3.5, 2.2, 2.5);
      this.scene.add(this.interiorLight2);

      // Set solar angle to default (Jour 13h30)
      this.applySolarLighting('jour');
    }

    // --- AMBIENT GROUND CONTACT SHADOW PLANE ---
    setupGroundShadow() {
      const shadowCanvas = document.createElement('canvas');
      shadowCanvas.width = 512;
      shadowCanvas.height = 512;
      const sCtx = shadowCanvas.getContext('2d');
      const sGrad = sCtx.createRadialGradient(256, 256, 30, 256, 256, 256);
      sGrad.addColorStop(0, 'rgba(0, 0, 0, 0.88)');
      sGrad.addColorStop(0.35, 'rgba(0, 0, 0, 0.65)');
      sGrad.addColorStop(0.7, 'rgba(0, 0, 0, 0.22)');
      sGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      sCtx.fillStyle = sGrad;
      sCtx.fillRect(0, 0, 512, 512);

      const shadowTex = new THREE.CanvasTexture(shadowCanvas);
      const shadowGeo = new THREE.PlaneGeometry(24, 20);
      const shadowMat = new THREE.MeshBasicMaterial({
        map: shadowTex,
        transparent: true,
        opacity: 0.9,
        depthWrite: false
      });
      const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
      shadowMesh.rotation.x = -Math.PI / 2;
      shadowMesh.position.y = -0.42;
      this.scene.add(shadowMesh);
    }

    // --- FLOATING ATMOSPHERIC SUNBEAM PARTICLES ---
    setupAtmosphericParticles() {
      const count = 75;
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(count * 3);
      this.particleSpeeds = new Float32Array(count);

      for (let i = 0; i < count; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 16;
        pos[i * 3 + 1] = Math.random() * 5 + 0.2;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 14;
        this.particleSpeeds[i] = 0.003 + Math.random() * 0.005;
      }

      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));

      const pCanvas = document.createElement('canvas');
      pCanvas.width = 32;
      pCanvas.height = 32;
      const pCtx = pCanvas.getContext('2d');
      const pGrad = pCtx.createRadialGradient(16, 16, 0, 16, 16, 16);
      pGrad.addColorStop(0, 'rgba(255, 235, 180, 0.95)');
      pGrad.addColorStop(0.4, 'rgba(215, 180, 110, 0.35)');
      pGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      pCtx.fillStyle = pGrad;
      pCtx.fillRect(0, 0, 32, 32);

      const pTex = new THREE.CanvasTexture(pCanvas);
      const pMat = new THREE.PointsMaterial({
        size: 0.32,
        map: pTex,
        transparent: true,
        opacity: 0.65,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });

      this.particles = new THREE.Points(geo, pMat);
      this.scene.add(this.particles);
    }

    // --- PROCEDURAL 3D DOLLHOUSE BUILDER ---
    buildCurrent3DModel() {
      // Clear previous model objects
      if (this.modelGroup) {
        this.scene.remove(this.modelGroup);
        this.modelGroup.traverse(child => {
          if (child.geometry) child.geometry.dispose();
          if (child.material) {
            if (Array.isArray(child.material)) child.material.forEach(m => m.dispose());
            else child.material.dispose();
          }
        });
      }

      this.modelGroup = new THREE.Group();
      this.interactiveRooms = [];

      const unit = PALMARES_UNITS.find(u => u.id === this.selectedUnitId) || PALMARES_UNITS[0];

      if (this.currentMode === 'plateau') {
        this.buildPlateauModel();
      } else {
        this.buildDollhouseModel(unit);
      }

      this.scene.add(this.modelGroup);
    }

    buildDollhouseModel(unit) {
      const isF4 = unit.category === 'f4';
      const isF3 = unit.category === 'f3';

      // Width and depth of apartment dollhouse
      const totalW = isF4 ? 13.5 : (isF3 ? 11.2 : 9.5);
      const totalD = isF4 ? 10.5 : (isF3 ? 9.0 : 8.2);

      // --- 1. Base Pedestal Slab ---
      const baseGeo = new THREE.BoxGeometry(totalW + 1.2, 0.4, totalD + 1.2);
      const baseMat = new THREE.MeshStandardMaterial({
        color: 0x141820,
        roughness: 0.7,
        metalness: 0.2
      });
      const baseMesh = new THREE.Mesh(baseGeo, baseMat);
      baseMesh.position.y = -0.2;
      baseMesh.receiveShadow = true;
      this.modelGroup.add(baseMesh);

      // Elegant gold rim around base slab
      const rimGeo = new THREE.BoxGeometry(totalW + 1.24, 0.05, totalD + 1.24);
      const rimMat = new THREE.MeshStandardMaterial({
        color: 0xC5A059,
        roughness: 0.3,
        metalness: 0.8
      });
      const rimMesh = new THREE.Mesh(rimGeo, rimMat);
      rimMesh.position.y = 0.01;
      this.modelGroup.add(rimMesh);

      // --- 2. Materials Definition ---
      const floorFinishMat = this.currentFinish === 'calacatta'
        ? new THREE.MeshStandardMaterial({ map: this.textures.calacatta, roughness: 0.15, metalness: 0.05 })
        : (this.currentFinish === 'parquet'
          ? new THREE.MeshStandardMaterial({ map: this.textures.oak, roughness: 0.35, metalness: 0.05 })
          : new THREE.MeshStandardMaterial({ color: 0xE8E5DE, roughness: 0.4 }));

      const bedFloorMat = new THREE.MeshStandardMaterial({
        map: this.textures.oak,
        roughness: 0.38
      });

      const bathFloorMat = new THREE.MeshStandardMaterial({
        map: this.textures.calacatta,
        roughness: 0.18
      });

      const balconyFloorMat = new THREE.MeshStandardMaterial({
        map: this.textures.travertine,
        roughness: 0.6
      });

      const wallMat = new THREE.MeshStandardMaterial({
        color: 0xEEECE8,
        roughness: 0.85
      });

      const wallAccentMat = new THREE.MeshStandardMaterial({
        color: 0x2A3240,
        roughness: 0.5
      });

      const glassMat = new THREE.MeshPhysicalMaterial({
        color: 0xE0F7FA,
        transparent: true,
        opacity: 0.35,
        roughness: 0.1,
        transmission: 0.85,
        thickness: 0.5
      });

      const chromeMat = new THREE.MeshStandardMaterial({
        color: 0xD8D8D8,
        roughness: 0.2,
        metalness: 0.9
      });

      // --- 3. Room Zones & Floors (Interactive Meshes) ---
      const createRoomZone = (name, surf, x, z, w, d, mat, key) => {
        const roomGeo = new THREE.BoxGeometry(w, 0.06, d);
        const roomMesh = new THREE.Mesh(roomGeo, mat.clone());
        roomMesh.position.set(x, 0.03, z);
        roomMesh.receiveShadow = true;
        roomMesh.userData = {
          type: 'room',
          name: name,
          surf: surf,
          key: key,
          baseColor: roomMesh.material.color.getHex()
        };
        this.modelGroup.add(roomMesh);
        this.interactiveRooms.push(roomMesh);
        return roomMesh;
      };

      if (isF4) {
        // Living & Reception (Grand Salon 38,2 m²)
        createRoomZone('Grand Double Salon de Réception', '38,2 m²', 1.8, -2.2, 7.8, 5.2, floorFinishMat, 'salon');
        // Master Suite (18,5 m²)
        createRoomZone('Suite Parentale Royale', '18,5 m²', -4.2, 2.5, 4.2, 4.6, bedFloorMat, 'suite');
        // Bedroom 2 (13,8 m²)
        createRoomZone('Chambre Enfants 2 & Dressing', '13,8 m²', 0.2, 2.5, 3.8, 4.6, bedFloorMat, 'chambre2');
        // Bedroom 3 / Office (12,0 m²)
        createRoomZone('Chambre 3 / Bureau Privé', '12,0 m²', 4.2, 2.5, 3.8, 4.6, bedFloorMat, 'chambre3');
        // Chef Kitchen (11,4 m²)
        createRoomZone('Cuisine de Chef & Buanderie', '11,4 m²', -4.2, -2.2, 3.8, 4.8, bathFloorMat, 'cuisine');
        // Balcony (9,5 m²)
        createRoomZone('Balcon Filant d’Angle Panoramique', '9,5 m²', 1.8, -5.2, 7.8, 1.4, balconyFloorMat, 'balcon');
      } else if (isF3) {
        // Salon Familial (27,8 m²)
        createRoomZone('Salon Familial & Espace Repas', '27,8 m²', 1.5, -1.8, 6.8, 4.6, floorFinishMat, 'salon');
        // Suite Parentale (15,0 m²)
        createRoomZone('Chambre Parentale Spacieuse', '15,0 m²', -3.4, 2.0, 4.0, 4.2, bedFloorMat, 'suite');
        // Chambre 2 (12,0 m²)
        createRoomZone('Chambre Enfants / Bureau', '12,0 m²', 1.2, 2.0, 4.0, 4.2, bedFloorMat, 'chambre2');
        // Cuisine (7,5 m²)
        createRoomZone('Cuisine Équipée & Buanderie', '7,5 m²', -3.4, -1.8, 3.6, 4.2, bathFloorMat, 'cuisine');
        // Balcon (6,0 m²)
        createRoomZone('Balcon Terrasse', '6,0 m²', 1.5, -4.5, 6.8, 1.3, balconyFloorMat, 'balcon');
      } else {
        // F2 Studio Confort
        createRoomZone('Vaste Séjour & Espace Repas', '26,5 m²', 1.2, -1.5, 5.8, 4.4, floorFinishMat, 'salon');
        createRoomZone('Chambre Royale avec Penderie', '16,0 m²', -2.8, 1.8, 4.0, 4.0, bedFloorMat, 'suite');
        createRoomZone('Cuisine Américaine Design', '9,5 m²', 2.2, 1.8, 3.6, 4.0, bathFloorMat, 'cuisine');
        createRoomZone('Balcon Ouvert', '5,0 m²', 1.2, -4.1, 5.8, 1.2, balconyFloorMat, 'balcon');
      }

      // --- 4. Extruded 3D Walls (Authentic Dollhouse Cutaway) ---
      const wallH = 1.6; // 1.6m cutaway dollhouse height
      const extWallH = 1.9; // Outer wall slightly taller

      const addWall = (x, z, w, d, h = wallH, mat = wallMat) => {
        const geo = new THREE.BoxGeometry(w, h, d);
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(x, h / 2 + 0.05, z);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        this.modelGroup.add(mesh);
        return mesh;
      };

      // Outer Perimeter Walls (with cutouts for windows and balcony doors)
      const halfW = totalW / 2;
      const halfD = totalD / 2;
      const wallThick = 0.22;

      // Back Wall (North)
      addWall(0, halfD, totalW, wallThick, extWallH);
      // Left Wall (West)
      addWall(-halfW, 0, wallThick, totalD, extWallH);
      // Right Wall (East)
      addWall(halfW, 0, wallThick, totalD, extWallH);
      // Front Wall Segments (South / Balcony Opening)
      addWall(-halfW + 1.8, -halfD + 1.4, 3.6, wallThick, extWallH);
      addWall(halfW - 0.8, -halfD + 1.4, 1.6, wallThick, extWallH);

      // Interior Partitions
      const intThick = 0.12;
      addWall(-halfW + 4.2, 0, wallThick, totalD - 2.8, wallH); // Separates Living/Kitchen from Bedrooms
      addWall(0, halfD - 2.3, totalW - 4.4, intThick, wallH); // Bedroom horizontal corridor wall
      if (isF4) {
        addWall(2.2, halfD - 2.3, intThick, 4.6, wallH); // Between Bed 2 and Bed 3
      }

      // Balcony Glass Balustrade
      const balustradeGeo = new THREE.BoxGeometry(isF4 ? 7.6 : 5.8, 0.85, 0.04);
      const balustradeMesh = new THREE.Mesh(balustradeGeo, glassMat);
      balustradeMesh.position.set(isF4 ? 1.8 : 1.2, 0.45, -halfD);
      this.modelGroup.add(balustradeMesh);

      // Balustrade Handrail
      const railGeo = new THREE.BoxGeometry(isF4 ? 7.65 : 5.85, 0.04, 0.06);
      const railMesh = new THREE.Mesh(railGeo, chromeMat);
      railMesh.position.set(isF4 ? 1.8 : 1.2, 0.88, -halfD);
      this.modelGroup.add(railMesh);

      // Large Sliding Balcony French Window Glass
      const glassWindowGeo = new THREE.BoxGeometry(isF4 ? 6.2 : 4.8, 1.8, 0.04);
      const glassWindowMesh = new THREE.Mesh(glassWindowGeo, glassMat);
      glassWindowMesh.position.set(isF4 ? 2.0 : 1.4, 0.95, -halfD + 1.4);
      this.modelGroup.add(glassWindowMesh);

      // --- 5. Contemporary Architectural Furniture Blockouts ---
      this.addArchitecturalFurniture(isF4, isF3);
    }

    addArchitecturalFurniture(isF4, isF3) {
      // High-grade PBR architectural materials
      const sofaPlinthMat = new THREE.MeshStandardMaterial({ color: 0x1E1A16, roughness: 0.7 });
      const sofaBoucleMat = new THREE.MeshStandardMaterial({
        color: 0x323B47,
        roughness: 0.82,
        map: this.textures.fabricDark
      });
      const rugMat = new THREE.MeshStandardMaterial({
        color: 0xEAE6DF,
        roughness: 0.95,
        map: this.textures.fabricLight
      });
      const cushionGoldMat = new THREE.MeshStandardMaterial({ color: 0xC5A059, roughness: 0.45 });
      const cushionBurgundyMat = new THREE.MeshStandardMaterial({
        color: 0x9E1B32,
        roughness: 0.55,
        map: this.textures.fabricGold
      });
      const woodWalnutMat = new THREE.MeshStandardMaterial({
        color: 0x4E3727,
        roughness: 0.4,
        map: this.textures.walnut
      });
      const marblePbrMat = new THREE.MeshPhysicalMaterial({
        map: this.textures.calacatta,
        roughness: 0.12,
        clearcoat: 0.5,
        clearcoatRoughness: 0.1
      });
      const brassMat = new THREE.MeshStandardMaterial({ color: 0xD4AF37, metalness: 0.85, roughness: 0.25 });
      const smokedGlassMat = new THREE.MeshPhysicalMaterial({
        color: 0x1A2228,
        transparent: true,
        opacity: 0.65,
        roughness: 0.08,
        transmission: 0.7
      });
      const tvMat = new THREE.MeshStandardMaterial({ color: 0x080808, roughness: 0.05, metalness: 0.95 });
      const plantPotMat = new THREE.MeshStandardMaterial({ color: 0xF5F3EE, roughness: 0.3 });
      const plantLeafMat = new THREE.MeshStandardMaterial({ color: 0x245832, roughness: 0.4 });
      const lampGlobeMat = new THREE.MeshStandardMaterial({
        color: 0xFFF0D0,
        emissive: 0xFFD899,
        emissiveIntensity: 0.85,
        roughness: 0.2
      });

      // --- 1. LIVING ROOM LOUNGE & ENTERTAINMENT SUITE ---
      // A. Luxury Berber Area Rug beneath seating group
      const rug = new THREE.Mesh(new THREE.BoxGeometry(4.8, 0.02, 3.8), rugMat);
      rug.position.set(2.4, 0.04, -2.6);
      rug.receiveShadow = true;
      this.modelGroup.add(rug);

      // B. Modular L-Shaped Sectional Lounge
      // Recessed dark shadow plinth
      const sofaPlinth1 = new THREE.Mesh(new THREE.BoxGeometry(3.5, 0.12, 1.1), sofaPlinthMat);
      sofaPlinth1.position.set(2.4, 0.1, -1.8);
      this.modelGroup.add(sofaPlinth1);

      const sofaPlinth2 = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.12, 2.1), sofaPlinthMat);
      sofaPlinth2.position.set(3.95, 0.1, -2.8);
      this.modelGroup.add(sofaPlinth2);

      // Deep plush seat cushions with bevel look
      for (let sc = 0; sc < 3; sc++) {
        const seat = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.32, 1.05), sofaBoucleMat);
        seat.position.set(1.3 + sc * 1.1, 0.28, -1.8);
        seat.castShadow = true;
        this.modelGroup.add(seat);
      }
      // Chaise lounge extension cushion
      const chaise = new THREE.Mesh(new THREE.BoxGeometry(1.05, 0.32, 1.3), sofaBoucleMat);
      chaise.position.set(3.95, 0.28, -2.95);
      chaise.castShadow = true;
      this.modelGroup.add(chaise);

      // Upholstered backrests
      const backLong = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.42, 0.28), sofaBoucleMat);
      backLong.position.set(2.4, 0.58, -1.36);
      backLong.castShadow = true;
      this.modelGroup.add(backLong);

      const backShort = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.42, 2.2), sofaBoucleMat);
      backShort.position.set(4.45, 0.58, -2.75);
      backShort.castShadow = true;
      this.modelGroup.add(backShort);

      // Contrast designer throw pillows (ClaroDiG Burgundy & Warm Gold)
      const p1 = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.32, 0.18), cushionBurgundyMat);
      p1.position.set(1.4, 0.54, -1.55);
      p1.rotation.set(0.1, 0.25, 0);
      this.modelGroup.add(p1);

      const p2 = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.28, 0.16), cushionGoldMat);
      p2.position.set(2.4, 0.52, -1.55);
      p2.rotation.set(0.08, -0.15, 0);
      this.modelGroup.add(p2);

      const p3 = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.3, 0.16), cushionBurgundyMat);
      p3.position.set(4.32, 0.54, -2.2);
      p3.rotation.set(0, -0.3, 0.1);
      this.modelGroup.add(p3);

      // C. Bespoke Nesting Designer Coffee Tables
      // Main circular Calacatta marble table
      const marbleTable = new THREE.Mesh(new THREE.CylinderGeometry(0.72, 0.72, 0.28, 32), marblePbrMat);
      marbleTable.position.set(2.1, 0.18, -2.7);
      marbleTable.castShadow = true;
      this.modelGroup.add(marbleTable);

      // Brass pedestal base
      const brassBase = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.45, 0.06, 24), brassMat);
      brassBase.position.set(2.1, 0.05, -2.7);
      this.modelGroup.add(brassBase);

      // Secondary smoked glass & brass nesting table
      const glassTable = new THREE.Mesh(new THREE.CylinderGeometry(0.48, 0.48, 0.36, 24), smokedGlassMat);
      glassTable.position.set(3.0, 0.22, -3.1);
      glassTable.castShadow = true;
      this.modelGroup.add(glassTable);

      // Decor books on coffee table
      const artBook = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.04, 0.24), cushionBurgundyMat);
      artBook.position.set(2.1, 0.34, -2.7);
      artBook.rotation.y = 0.3;
      this.modelGroup.add(artBook);

      // D. Wall-Mounted Media Credenza & OLED Display
      const credenza = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.36, 0.42), woodWalnutMat);
      credenza.position.set(2.4, 0.24, -4.4);
      credenza.castShadow = true;
      this.modelGroup.add(credenza);

      // Fluted wood vertical slats on credenza front
      for (let s = -1.4; s <= 1.4; s += 0.2) {
        const slat = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.34, 0.02), brassMat);
        slat.position.set(2.4 + s, 0.24, -4.18);
        this.modelGroup.add(slat);
      }

      // Ultra-thin OLED TV screen with brushed dark bezel
      const oled = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.25, 0.03), tvMat);
      oled.position.set(2.4, 1.15, -4.38);
      this.modelGroup.add(oled);

      // Minimalist soundbar
      const soundbar = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.08, 0.08), tvMat);
      soundbar.position.set(2.4, 0.48, -4.38);
      this.modelGroup.add(soundbar);

      // Gallery Art Frame on Living Wall
      const artFrame = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.4, 0.03), woodWalnutMat);
      artFrame.position.set(-1.0, 1.2, -4.38);
      this.modelGroup.add(artFrame);

      const artCanvas = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.3, 0.04), marblePbrMat);
      artCanvas.position.set(-1.0, 1.2, -4.37);
      this.modelGroup.add(artCanvas);

      // --- 2. DINING GROUP ---
      const diningTable = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.72, 0.95), woodWalnutMat);
      diningTable.position.set(-0.8, 0.38, -2.6);
      diningTable.castShadow = true;
      this.modelGroup.add(diningTable);

      // 4 Sculptural Dining Chairs
      for (let i = -0.65; i <= 0.65; i += 1.3) {
        [-0.65, 0.65].forEach(side => {
          const chairSeat = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.06, 0.42), sofaBoucleMat);
          chairSeat.position.set(-0.8 + i, 0.44, -2.6 + side);
          this.modelGroup.add(chairSeat);

          const chairBack = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.34, 0.05), sofaBoucleMat);
          chairBack.position.set(-0.8 + i, 0.62, -2.6 + side + (side > 0 ? 0.2 : -0.2));
          this.modelGroup.add(chairBack);

          const chairLegs = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.44, 8), brassMat);
          chairLegs.position.set(-0.8 + i, 0.22, -2.6 + side);
          this.modelGroup.add(chairLegs);
        });
      }

      // --- 3. KITCHEN WATERFALL ISLAND ---
      // Countertop
      const islandTop = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.08, 1.0), marblePbrMat);
      islandTop.position.set(-4.2, 0.88, -2.8);
      islandTop.castShadow = true;
      this.modelGroup.add(islandTop);

      // Waterfall left side slab
      const waterfallL = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.88, 1.0), marblePbrMat);
      waterfallL.position.set(-5.36, 0.44, -2.8);
      waterfallL.castShadow = true;
      this.modelGroup.add(waterfallL);

      // Waterfall right side slab
      const waterfallR = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.88, 1.0), marblePbrMat);
      waterfallR.position.set(-3.04, 0.44, -2.8);
      waterfallR.castShadow = true;
      this.modelGroup.add(waterfallR);

      // Island cabinetry body
      const islandBody = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.82, 0.94), woodWalnutMat);
      islandBody.position.set(-4.2, 0.43, -2.8);
      this.modelGroup.add(islandBody);

      // Undermount composite sink & arched mixer tap
      const sink = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.02, 0.4), tvMat);
      sink.position.set(-4.6, 0.92, -2.8);
      this.modelGroup.add(sink);

      const faucet = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.22, 12), brassMat);
      faucet.position.set(-4.9, 1.03, -2.8);
      this.modelGroup.add(faucet);

      // Luxury Leather Barstools with brass footrests
      [-0.45, 0.45].forEach(stOffset => {
        const stoolSeat = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.08, 16), sofaBoucleMat);
        stoolSeat.position.set(-4.2 + stOffset, 0.62, -1.95);
        this.modelGroup.add(stoolSeat);

        const stoolLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.6, 8), brassMat);
        stoolLeg.position.set(-4.2 + stOffset, 0.31, -1.95);
        this.modelGroup.add(stoolLeg);
      });

      // --- 4. MASTER SUITE ROYALE ---
      // Vertical channel-tufted upholstered tall headboard
      const headboard = new THREE.Mesh(new THREE.BoxGeometry(2.6, 1.35, 0.18), sofaBoucleMat);
      headboard.position.set(-4.2, 0.72, 4.4);
      headboard.castShadow = true;
      this.modelGroup.add(headboard);

      // Warm fluted walnut panel backdrop behind bed
      const bedPanel = new THREE.Mesh(new THREE.BoxGeometry(3.6, 1.5, 0.04), woodWalnutMat);
      bedPanel.position.set(-4.2, 0.8, 4.48);
      this.modelGroup.add(bedPanel);

      // Two-tier plush luxury mattress
      const bedBase = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.25, 2.2), woodWalnutMat);
      bedBase.position.set(-4.2, 0.14, 3.2);
      this.modelGroup.add(bedBase);

      const mattress = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.32, 2.1), rugMat);
      mattress.position.set(-4.2, 0.38, 3.2);
      mattress.castShadow = true;
      this.modelGroup.add(mattress);

      // Folded luxury duvet in ClaroDiG gold/taupe velvet
      const duvet = new THREE.Mesh(new THREE.BoxGeometry(2.02, 0.2, 1.35), cushionGoldMat);
      duvet.position.set(-4.2, 0.49, 2.75);
      this.modelGroup.add(duvet);

      // 4 Layered Pillows
      [-0.55, 0.55].forEach(po => {
        const pBack = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.24, 0.3), rugMat);
        pBack.position.set(-4.2 + po, 0.6, 3.9);
        pBack.rotation.x = -0.35;
        this.modelGroup.add(pBack);

        const pFront = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.2, 0.24), cushionBurgundyMat);
        pFront.position.set(-4.2 + po, 0.54, 3.65);
        pFront.rotation.x = -0.25;
        this.modelGroup.add(pFront);
      });

      // Floating Walnut Nightstands with glowing frosted orb lamps
      [-1.55, 1.55].forEach(no => {
        const nStand = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.28, 0.42), woodWalnutMat);
        nStand.position.set(-4.2 + no, 0.32, 4.2);
        this.modelGroup.add(nStand);

        // Glowing glass orb lamp with warm PointLight
        const orbLamp = new THREE.Mesh(new THREE.SphereGeometry(0.14, 16, 16), lampGlobeMat);
        orbLamp.position.set(-4.2 + no, 0.6, 4.2);
        this.modelGroup.add(orbLamp);

        const lampLight = new THREE.PointLight(0xFFB75E, 0.35, 3.5);
        lampLight.position.set(-4.2 + no, 0.65, 4.2);
        this.modelGroup.add(lampLight);
      });

      // --- 5. BALCONY MEDITERRANEAN OUTDOOR LIVING ---
      // 2 Teak Outdoor Armchairs
      [-1.2, 1.2].forEach(bOff => {
        const bChair = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.42, 0.65), woodWalnutMat);
        bChair.position.set(1.8 + bOff, 0.24, -5.2);
        bChair.castShadow = true;
        this.modelGroup.add(bChair);

        const bCushion = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.08, 0.58), rugMat);
        bCushion.position.set(1.8 + bOff, 0.46, -5.2);
        this.modelGroup.add(bCushion);
      });

      // Round cocktail table
      const bTable = new THREE.Mesh(new THREE.CylinderGeometry(0.35, 0.35, 0.45, 20), brassMat);
      bTable.position.set(1.8, 0.24, -5.2);
      this.modelGroup.add(bTable);

      // Potted Mediterranean Plants (Monstera / Ficus) on Balcony
      [-2.6, 2.6].forEach(pOff => {
        const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.18, 0.5, 16), plantPotMat);
        pot.position.set(1.8 + pOff, 0.26, -5.3);
        this.modelGroup.add(pot);

        for (let l = 0; l < 5; l++) {
          const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 8), plantLeafMat);
          leaf.scale.set(1.2, 0.2, 0.8);
          leaf.position.set(1.8 + pOff + (Math.sin(l * 1.3) * 0.15), 0.55 + l * 0.07, -5.3 + (Math.cos(l * 1.3) * 0.15));
          leaf.rotation.set(0.4, l * 1.2, 0.3);
          this.modelGroup.add(leaf);
        }
      });

      // --- 6. SECOND BEDROOM (If F3 or F4) ---
      if (isF4 || isF3) {
        const bed2Base = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.35, 2.1), woodWalnutMat);
        bed2Base.position.set(0.2, 0.2, 3.2);
        this.modelGroup.add(bed2Base);

        const bed2Mattress = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.25, 2.0), rugMat);
        bed2Mattress.position.set(0.2, 0.42, 3.2);
        bed2Mattress.castShadow = true;
        this.modelGroup.add(bed2Mattress);

        const desk = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.68, 0.65), woodWalnutMat);
        desk.position.set(1.5, 0.36, 4.3);
        desk.castShadow = true;
        this.modelGroup.add(desk);
      }
    }

    // --- PLATEAU VIEW (EXTRUDED 3D FLOOR WITH 17 UNITS) ---
    buildPlateauModel() {
      // Large building podium
      const plateauGeo = new THREE.BoxGeometry(22, 0.5, 16);
      const plateauMat = new THREE.MeshStandardMaterial({
        color: 0x141B26,
        roughness: 0.6,
        metalness: 0.3
      });
      const plateauMesh = new THREE.Mesh(plateauGeo, plateauMat);
      plateauMesh.position.y = -0.25;
      plateauMesh.receiveShadow = true;
      this.modelGroup.add(plateauMesh);

      // Central corridor circulation
      const corrGeo = new THREE.BoxGeometry(20, 0.08, 2.2);
      const corrMat = new THREE.MeshStandardMaterial({ color: 0x2A3342, roughness: 0.5 });
      const corrMesh = new THREE.Mesh(corrGeo, corrMat);
      corrMesh.position.set(0, 0.05, 0);
      this.modelGroup.add(corrMesh);

      // Extrude all 17 units on the plateau
      PALMARES_UNITS.forEach((unit, idx) => {
        const isSelected = unit.id === this.selectedUnitId;
        const normX = (unit.x - 50) / 4.2;
        const normZ = (unit.y - 50) / 4.8;
        const uW = unit.category === 'f4' ? 3.8 : (unit.category === 'f3' ? 3.0 : 2.5);
        const uD = 3.6;

        const lotGeo = new THREE.BoxGeometry(uW, 0.12, uD);
        const lotMat = new THREE.MeshStandardMaterial({
          color: isSelected ? 0xC5A059 : (unit.wing === 'A' ? 0x2B3D54 : 0x3D352E),
          roughness: 0.3,
          metalness: isSelected ? 0.6 : 0.1,
          emissive: isSelected ? 0xC5A059 : 0x000000,
          emissiveIntensity: isSelected ? 0.35 : 0.0
        });

        const lotMesh = new THREE.Mesh(lotGeo, lotMat);
        lotMesh.position.set(normX, 0.08, normZ);
        lotMesh.receiveShadow = true;
        lotMesh.userData = {
          type: 'unit',
          id: unit.id,
          unit: unit
        };
        this.modelGroup.add(lotMesh);
        this.interactiveRooms.push(lotMesh);

        // Extruded glass perimeter walls
        const wallH = isSelected ? 1.4 : 0.6;
        const lotWallGeo = new THREE.BoxGeometry(uW, wallH, uD);
        const lotWallMat = new THREE.MeshStandardMaterial({
          color: isSelected ? 0xC5A059 : 0x4A6572,
          transparent: true,
          opacity: isSelected ? 0.45 : 0.25,
          roughness: 0.1
        });
        const lotWallMesh = new THREE.Mesh(lotWallGeo, lotWallMat);
        lotWallMesh.position.set(normX, wallH / 2 + 0.1, normZ);
        this.modelGroup.add(lotWallMesh);
      });
    }

    // --- SOLAR TRAJECTORY & TIME-OF-DAY ENGINE (PARAMETER 2) ---
    applySolarLighting(ambiance) {
      this.currentAmbiance = ambiance;

      if (!this.sunLight || !this.renderer) return;

      if (ambiance === 'matin') {
        // Morning Sun (Est Tanger)
        this.sunLight.position.set(-24, 16, -14);
        this.sunLight.color.setHex(0xFFE2B8);
        this.sunLight.intensity = 1.35;
        this.hemiLight.color.setHex(0xFCEFD6);
        this.interiorLight1.intensity = 0.3;
        this.interiorLight2.intensity = 0.3;
        this.solarIcon.textContent = '🌅';
        this.solarTitle.textContent = 'Matinée Douce (Est Tanger)';
        this.solarClock.textContent = '09h00 • Clarté Naturelle';
      } else if (ambiance === 'jour') {
        // High Noon / Mediterranean Zenith
        this.sunLight.position.set(6, 32, 10);
        this.sunLight.color.setHex(0xFFF9F0);
        this.sunLight.intensity = 1.5;
        this.hemiLight.color.setHex(0xF4F7FA);
        this.interiorLight1.intensity = 0.5;
        this.interiorLight2.intensity = 0.5;
        this.solarIcon.textContent = '☀️';
        this.solarTitle.textContent = 'Zénith Méditerranéen';
        this.solarClock.textContent = '13h30 • Plein Sud';
      } else if (ambiance === 'crepuscule') {
        // Golden Hour Sunset over Atlantic & Strait
        this.sunLight.position.set(26, 11, 16);
        this.sunLight.color.setHex(0xFF8838);
        this.sunLight.intensity = 1.4;
        this.hemiLight.color.setHex(0xF5A862);
        this.interiorLight1.intensity = 1.2;
        this.interiorLight2.intensity = 1.0;
        this.solarIcon.textContent = '🌇';
        this.solarTitle.textContent = 'Crépuscule Détroit de Gibraltar';
        this.solarClock.textContent = '19h00 • Golden Hour';
      } else if (ambiance === 'nuit') {
        // Warm LED Night Ambience
        this.sunLight.position.set(0, 15, 0);
        this.sunLight.color.setHex(0x1B2C48);
        this.sunLight.intensity = 0.15;
        this.hemiLight.color.setHex(0x101824);
        this.interiorLight1.intensity = 2.2;
        this.interiorLight2.intensity = 1.8;
        this.solarIcon.textContent = '🌙';
        this.solarTitle.textContent = 'Ambiance Nocturne LED';
        this.solarClock.textContent = '22h00 • Spots Encastrés 2700K';
      }

      // Update active pills inside parameter card if visible
      if (this.dossier) {
        this.dossier.querySelectorAll('.p3d-solar-btn').forEach(btn => {
          btn.classList.toggle('active', btn.dataset.solar === ambiance);
        });
      }
    }

    // --- MATERIAL SWAP IN REAL TIME (PARAMETER 3) ---
    applyFinishMaterial(finishKey) {
      this.currentFinish = finishKey;
      this.buildCurrent3DModel();

      if (this.dossier) {
        this.dossier.querySelectorAll('.p3d-finish-btn').forEach(btn => {
          btn.classList.toggle('active', btn.dataset.finish === finishKey);
        });
      }
    }

    // --- VIEW MODES ---
    setMode(mode) {
      this.currentMode = mode;

      this.container.querySelectorAll('.p3d-segmented-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.mode === mode);
      });

      if (mode === 'plateau') {
        this.targetSpherical = { radius: 34, theta: Math.PI / 4, phi: Math.PI / 3.2 };
        this.cameraTarget.set(0, 0, 0);
      } else if (mode === 'cad') {
        this.targetSpherical = { radius: 22, theta: Math.PI / 2.05, phi: Math.PI / 2.1 };
        this.cameraTarget.set(0, 0.4, -0.6);
      } else {
        // Dollhouse
        this.targetSpherical = { radius: 21, theta: Math.PI / 4, phi: Math.PI / 3.6 };
        this.cameraTarget.set(0, 0.4, -0.6);
      }

      this.buildCurrent3DModel();
    }

    // --- SMOOTH CAMERA UPDATE & ANIMATION LOOP ---
    animate() {
      requestAnimationFrame(this.animate);

      const now = Date.now();

      // 1. Continuous Idle Turntable Auto-Orbit (Gently rotates when user is reading)
      if (!this.isMouseDown && !this.isTourActive && !this.isSolarCycleActive && (now - this.lastInteractionTime > 2400)) {
        this.targetSpherical.theta += 0.0015;
      }

      // 2. Animated Floating Atmospheric Sunbeam Particles
      if (this.particles && this.particles.geometry && this.particles.geometry.attributes.position) {
        const positions = this.particles.geometry.attributes.position.array;
        for (let i = 0; i < 75; i++) {
          positions[i * 3 + 1] += this.particleSpeeds[i];
          if (positions[i * 3 + 1] > 5.5) {
            positions[i * 3 + 1] = 0.2;
          }
        }
        this.particles.geometry.attributes.position.needsUpdate = true;
      }

      // 3. Dynamic Animated Solar Cycle (24H Tangier Sun Simulation)
      if (this.isSolarCycleActive && this.sunLight) {
        this.solarCycleProgress = (this.solarCycleProgress + 0.0014) % 1.0;
        const angle = this.solarCycleProgress * Math.PI * 2;
        const sunR = 30;
        const sunX = Math.sin(angle) * sunR;
        const sunY = Math.max(3, Math.cos(angle) * 28 + 12);
        const sunZ = Math.cos(angle * 0.8) * 22;
        this.sunLight.position.set(sunX, sunY, sunZ);

        if (sunY > 18) {
          this.sunLight.color.setHex(0xFFF9F0);
          this.sunLight.intensity = 1.5;
          this.solarIcon.textContent = '☀️';
          this.solarTitle.textContent = 'Cycle Solaire Continu';
          this.solarClock.textContent = 'Zénith Ensoleillé Tanger';
        } else if (sunY > 8) {
          this.sunLight.color.setHex(0xFFA048);
          this.sunLight.intensity = 1.35;
          this.solarIcon.textContent = '🌇';
          this.solarTitle.textContent = 'Cycle Solaire Continu';
          this.solarClock.textContent = 'Crépuscule Atlantique & Détroit';
        } else {
          this.sunLight.color.setHex(0x2B3D5E);
          this.sunLight.intensity = 0.25;
          this.solarIcon.textContent = '🌙';
          this.solarTitle.textContent = 'Cycle Solaire Continu';
          this.solarClock.textContent = 'Ambiance Nocturne Étoilée';
        }
      }

      // 4. Smooth camera interpolation (Apple-like fluid damping)
      this.spherical.radius += (this.targetSpherical.radius - this.spherical.radius) * 0.07;
      this.spherical.theta += (this.targetSpherical.theta - this.spherical.theta) * 0.07;
      this.spherical.phi += (this.targetSpherical.phi - this.spherical.phi) * 0.07;

      this.updateCameraFromSpherical();

      // Sync compass HUD rotation with camera azimuth
      if (this.compassNeedle) {
        const deg = (this.spherical.theta * 180 / Math.PI) - 45;
        this.compassNeedle.style.transform = `rotate(${deg.toFixed(1)}deg)`;
      }

      this.renderer.render(this.scene, this.camera);
    }

    updateCameraFromSpherical() {
      // Clamp phi to prevent upside-down camera
      this.spherical.phi = Math.max(0.1, Math.min(Math.PI / 2 - 0.02, this.spherical.phi));

      const sinPhiRadius = this.spherical.radius * Math.sin(this.spherical.phi);
      this.camera.position.x = this.cameraTarget.x + sinPhiRadius * Math.sin(this.spherical.theta);
      this.camera.position.y = this.cameraTarget.y + this.spherical.radius * Math.cos(this.spherical.phi);
      this.camera.position.z = this.cameraTarget.z + sinPhiRadius * Math.cos(this.spherical.theta);

      this.camera.lookAt(this.cameraTarget);
    }

    // --- CINEMATIC GUIDED 3D TOUR & SOLAR SIMULATION CONTROLS ---
    toggleGuidedTour() {
      if (this.isTourActive) {
        this.stopGuidedTour();
      } else {
        this.startGuidedTour();
      }
    }

    startGuidedTour() {
      this.isTourActive = true;
      this.tourStep = 0;
      if (this.btnGuidedTour) {
        this.btnGuidedTour.classList.add('tour-active');
        const span = this.btnGuidedTour.querySelector('span');
        if (span) span.textContent = 'Arrêter Visite';
      }
      if (this.tourStatusHud) {
        this.tourStatusHud.classList.add('visible');
      }
      this.runTourStep();
    }

    stopGuidedTour() {
      this.isTourActive = false;
      if (this.tourTimer) clearTimeout(this.tourTimer);
      if (this.btnGuidedTour) {
        this.btnGuidedTour.classList.remove('tour-active');
        const span = this.btnGuidedTour.querySelector('span');
        if (span) span.textContent = 'Visite Guidée 3D';
      }
      if (this.tourStatusHud) {
        this.tourStatusHud.classList.remove('visible');
      }
      this.targetSpherical = { radius: 21, theta: Math.PI / 4, phi: Math.PI / 3.6 };
      this.cameraTarget.set(0, 0.4, -0.6);
    }

    runTourStep() {
      if (!this.isTourActive) return;

      const steps = [
        {
          title: 'Vue d’Ensemble Axonométrique',
          sub: 'Appartement N°2 • 91,4 m² • Vue Étage Courant',
          target: new THREE.Vector3(0, 0.4, -0.6),
          spherical: { radius: 21, theta: Math.PI / 4, phi: Math.PI / 3.5 },
          duration: 4800,
          roomKey: null
        },
        {
          title: 'Grand Double Salon de Réception',
          sub: '38,2 m² • Marbre Calacatta Gold & Baies Vitrées',
          target: new THREE.Vector3(2.4, 0.5, -2.4),
          spherical: { radius: 10.5, theta: Math.PI / 3.2, phi: Math.PI / 3.8 },
          duration: 5200,
          roomKey: 'salon'
        },
        {
          title: 'Cuisine de Chef & Îlot Américain',
          sub: '11,4 m² • Plan Waterfall & Buanderie',
          target: new THREE.Vector3(-4.2, 0.5, -2.5),
          spherical: { radius: 9.5, theta: Math.PI / 1.8, phi: Math.PI / 3.5 },
          duration: 4800,
          roomKey: 'cuisine'
        },
        {
          title: 'Balcon Filant & Exposition Sud-Ouest',
          sub: '9,5 m² • Vue Dégagée & Ensoleillement Optimal',
          target: new THREE.Vector3(1.8, 0.4, -5.2),
          spherical: { radius: 9.2, theta: 0.1, phi: Math.PI / 3.4 },
          duration: 4800,
          roomKey: 'balcon'
        },
        {
          title: 'Suite Parentale Royale & Dressing',
          sub: '18,5 m² • Parquet Chêne de France & SDB Privative',
          target: new THREE.Vector3(-4.2, 0.6, 3.2),
          spherical: { radius: 10.0, theta: Math.PI / 1.4, phi: Math.PI / 3.6 },
          duration: 5200,
          roomKey: 'suite'
        }
      ];

      const current = steps[this.tourStep % steps.length];
      if (this.tourStepTitle) this.tourStepTitle.textContent = current.title;
      if (this.tourStepSub) this.tourStepSub.textContent = current.sub;

      this.cameraTarget.copy(current.target);
      this.targetSpherical = { ...current.spherical };

      if (current.roomKey) {
        this.focusOnRoom(current.roomKey);
      }

      this.tourTimer = setTimeout(() => {
        if (this.isTourActive) {
          this.tourStep = (this.tourStep + 1) % steps.length;
          this.runTourStep();
        }
      }, current.duration);
    }

    toggleSolarCycle() {
      this.isSolarCycleActive = !this.isSolarCycleActive;
      if (this.btnSolarCycle) {
        this.btnSolarCycle.classList.toggle('active', this.isSolarCycleActive);
        const span = this.btnSolarCycle.querySelector('span');
        if (span) span.textContent = this.isSolarCycleActive ? '☀️ Cycle Actif' : '☀️ Cycle 24H';
      }
    }

    // --- UNIT SELECTION & DOSSIER REFRESH ---
    selectUnit(unitId) {
      this.selectedUnitId = unitId;
      const unit = PALMARES_UNITS.find(u => u.id === unitId) || PALMARES_UNITS[0];

      // Refresh 3D model
      this.buildCurrent3DModel();

      // Render extended Apple HIG Dossier
      this.renderDossier(unit);

      // Highlight active card in mobile carousel
      this.container.querySelectorAll('.p3d-mobile-card').forEach(c => {
        c.classList.toggle('active', c.dataset.id === unitId);
      });
    }

    // --- THE FOUR PARAMETERS DOSSIER (APPLE DESIGN & LIQUID GLASS) ---
    renderDossier(unit) {
      if (!this.dossier) return;

      const downPaymentAmount = Math.round(unit.priceVal * (this.downPaymentPct / 100));
      const loanAmount = unit.priceVal - downPaymentAmount;
      const annualRate = 0.045; // 4.5% standard rate
      const monthlyRate = annualRate / 12;
      const totalMonths = this.loanDurationYears * 12;
      const monthlyPmt = Math.round(loanAmount * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -totalMonths))));

      const waMessage = encodeURIComponent(
        `Bonjour Asharq Al Awsat Group, je souhaite réserver l'appartement ${unit.label} (${unit.surface} - ${unit.typology} à ${unit.estimatedPrice}) à la Résidence Palmares Tranche 8. Pouvez-vous me transmettre le dossier juridique et fixer un rendez-vous ?`
      );
      const waUrl = `https://wa.me/212665276901?text=${waMessage}`;

      this.dossier.innerHTML = `
        <!-- Dossier Header: Badge, Unit Name & Price -->
        <div class="p3d-dossier-header">
          <div>
            <div class="p3d-dossier-tagline">${unit.wingName} • ${unit.typology}</div>
            <h3 class="p3d-dossier-title">${unit.label}</h3>
          </div>
          <div class="p3d-dossier-surface-hero">
            <div class="p3d-surface-num">${unit.surface}</div>
            <div class="p3d-surface-label">Surface Nette Habitable</div>
          </div>
        </div>

        <!-- APPLE HIG FOUR PARAMETERS SEGMENTED PICKER -->
        <div class="p3d-params-nav" role="tablist">
          <button type="button" class="p3d-param-btn ${this.activeParameter === 'typologie' ? 'active' : ''}" data-param="typologie">
            <span>📐 Typologie</span>
          </button>
          <button type="button" class="p3d-param-btn ${this.activeParameter === 'orientation' ? 'active' : ''}" data-param="orientation">
            <span>☀️ Exposition</span>
          </button>
          <button type="button" class="p3d-param-btn ${this.activeParameter === 'finitions' ? 'active' : ''}" data-param="finitions">
            <span>💎 Finitions</span>
          </button>
          <button type="button" class="p3d-param-btn ${this.activeParameter === 'juridique' ? 'active' : ''}" data-param="juridique">
            <span>🏛️ Juridique</span>
          </button>
        </div>

        <!-- PARAMETER 1: TYPOLOGIE & AGENCEMENT SPATIAL -->
        <div class="p3d-param-pane ${this.activeParameter === 'typologie' ? 'active' : ''}" id="param-typologie">
          <div class="p3d-specs-table">
            <div class="p3d-spec-box">
              <span class="p3d-spec-label">Étage & Hauteur</span>
              <span class="p3d-spec-val">R+1 à R+7 (2,90 m sous plafond)</span>
            </div>
            <div class="p3d-spec-box">
              <span class="p3d-spec-label">Typologie</span>
              <span class="p3d-spec-val" style="color: var(--p3d-gold-light);">${unit.category.toUpperCase()} Haute Couture</span>
            </div>
            <div class="p3d-spec-box full-width">
              <span class="p3d-spec-label">Distribution des Espaces MB Architects</span>
              <span class="p3d-spec-val">${unit.rooms}</span>
            </div>
          </div>

          <!-- Room Metrics Bars with Click-to-Focus in 3D -->
          <div class="p3d-rooms-bars-box">
            <div class="p3d-section-eyebrow">
              <span>Surfaces Certifiées par Pièce</span>
              <small>Cliquez pour cibler en 3D</small>
            </div>
            ${unit.roomsDetail.map(r => `
              <div class="p3d-room-bar-row" data-roomkey="${r.key}">
                <div class="p3d-room-bar-labels">
                  <span>${r.name}</span>
                  <strong>${r.surf}</strong>
                </div>
                <div class="p3d-room-bar-track">
                  <div class="p3d-room-bar-fill" style="width: ${r.pct}%;"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- PARAMETER 2: ORIENTATION & ENSOLEILLEMENT TANGER -->
        <div class="p3d-param-pane ${this.activeParameter === 'orientation' ? 'active' : ''}" id="param-orientation">
          <div class="p3d-solar-card">
            <div class="p3d-solar-header">
              <div>
                <span class="p3d-spec-label">Exposition & Façade</span>
                <strong style="color: #FFF; font-size: 0.95rem;">${unit.orientation}</strong>
              </div>
              <div class="p3d-solar-badge">Tanger 35.7° N</div>
            </div>

            <div class="p3d-solar-hours-strip">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              <span>Ensoleillement : <strong>${unit.solarHours || '7 à 8h d’ensoleillement direct quotidien'}</strong></span>
            </div>

            <div class="p3d-section-eyebrow" style="margin-top: 14px;">
              <span>Simulateur d'Ensoleillement en Temps Réel</span>
            </div>

            <div class="p3d-solar-buttons-grid">
              <button type="button" class="p3d-solar-btn ${this.currentAmbiance === 'matin' ? 'active' : ''}" data-solar="matin">
                <span>🌅 Matin (09h00)</span>
                <small>Soleil d'Est</small>
              </button>
              <button type="button" class="p3d-solar-btn ${this.currentAmbiance === 'jour' ? 'active' : ''}" data-solar="jour">
                <span>☀️ Zénith (13h30)</span>
                <small>Plein Sud</small>
              </button>
              <button type="button" class="p3d-solar-btn ${this.currentAmbiance === 'crepuscule' ? 'active' : ''}" data-solar="crepuscule">
                <span>🌇 Détroit (19h00)</span>
                <small>Golden Hour</small>
              </button>
              <button type="button" class="p3d-solar-btn ${this.currentAmbiance === 'nuit' ? 'active' : ''}" data-solar="nuit">
                <span>🌙 Nuit LED (22h00)</span>
                <small>Ambiance 2700K</small>
              </button>
            </div>
          </div>
        </div>

        <!-- PARAMETER 3: CAHIER DES CHARGES & FINITIONS HAUTE COUTURE -->
        <div class="p3d-param-pane ${this.activeParameter === 'finitions' ? 'active' : ''}" id="param-finitions">
          <!-- Interactive Material Switcher -->
          <div class="p3d-finish-selector-box">
            <div class="p3d-section-eyebrow">
              <span>Appliquer un Revêtement au Modèle 3D</span>
            </div>
            <div class="p3d-finish-chips">
              <button type="button" class="p3d-finish-btn ${this.currentFinish === 'calacatta' ? 'active' : ''}" data-finish="calacatta">
                <span class="p3d-fdot marble"></span>
                <span>Marbre Calacatta Gold</span>
              </button>
              <button type="button" class="p3d-finish-btn ${this.currentFinish === 'parquet' ? 'active' : ''}" data-finish="parquet">
                <span class="p3d-fdot oak"></span>
                <span>Parquet Chêne Massif</span>
              </button>
              <button type="button" class="p3d-finish-btn ${this.currentFinish === 'gres' ? 'active' : ''}" data-finish="gres">
                <span class="p3d-fdot tile"></span>
                <span>Grès Cérame Rectifié</span>
              </button>
            </div>
          </div>

          <!-- Finishes List -->
          <ul class="p3d-finish-list">
            ${(unit.finishes || []).map(f => `
              <li class="p3d-finish-item">
                <div class="p3d-finish-icon">✦</div>
                <div class="p3d-finish-body">
                  <span class="p3d-finish-title">${f.title}</span>
                  <span class="p3d-finish-desc">${f.desc}</span>
                </div>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- PARAMETER 4: DOSSIER JURIDIQUE & SIMULATEUR BANCAIRE -->
        <div class="p3d-param-pane ${this.activeParameter === 'juridique' ? 'active' : ''}" id="param-juridique">
          <!-- Official Legal Guarantees Banner -->
          <div class="p3d-legal-banner">
            <div class="p3d-legal-badge">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <span>Garantie Juridique Totale Notariée</span>
            </div>
            <p>
              <strong>100% Déclaré au Notaire :</strong> Sécurité fiscale et patrimoniale absolue. Aucun versement occulte. Éligible immédiatement aux crédits bancaires conventionnels et participatifs (Mourabaha).
            </p>
            <div class="p3d-legal-sub">✦ Titre Foncier Définitif éclaté disponible à la Conservation Foncière de Tanger.</div>
          </div>

          <!-- Mortgage Simulator -->
          <div class="p3d-finance-box">
            <div class="p3d-finance-hero">
              <div>
                <div class="p3d-finance-price-lbl">Prix Net Promoteur</div>
                <div class="p3d-finance-price-val">${unit.estimatedPrice}</div>
              </div>
              <div class="p3d-declared-badge">100% Déclaré</div>
            </div>

            <div class="p3d-finance-controls">
              <div class="p3d-slider-label">
                <span>Apport Personnel Souhaité :</span>
                <strong id="p3d-slider-val">${this.downPaymentPct}% (${downPaymentAmount.toLocaleString('fr-FR')} DH)</strong>
              </div>
              <input type="range" class="p3d-finance-slider" id="p3d-down-slider" min="10" max="50" step="5" value="${this.downPaymentPct}">
            </div>

            <div class="p3d-finance-result">
              <div>
                <div style="font-size: 0.7rem; color: rgba(255,255,255,0.6); text-transform: uppercase; font-weight: 600;">
                  Mensualité Estimée (sur 20 ans)
                </div>
                <div class="p3d-monthly-val" id="p3d-monthly-val">
                  ~${monthlyPmt.toLocaleString('fr-FR')} DH / mois
                </div>
              </div>
              <div style="font-size: 0.72rem; color: var(--p3d-gold-light); font-weight: 600; text-align: right;">
                Taux indicatif : 4.5%<br>Financement Banques Partenaires
              </div>
            </div>
          </div>
        </div>

        <!-- Master CTAs Action Bar -->
        <div class="p3d-dossier-actions">
          <a href="${waUrl}" target="_blank" class="p3d-btn-whatsapp">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
            <span>Réserver ce Lot via WhatsApp (+212 665 276 901)</span>
          </a>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
            <a href="assets/projects/palmares_plan_tranche8.pdf" target="_blank" download class="p3d-btn-pdf">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              <span>Dossier PDF Officiel</span>
            </a>
            <button type="button" class="p3d-btn-pdf" id="p3d-btn-reset-cam">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <span>Recentrer Modèle</span>
            </button>
          </div>
        </div>

        <div class="p3d-architect-stamp">
          <span>Maître d’Œuvre : <strong>MB Interior Architects</strong></span>
          <span>Date du Plan : <strong>21/08/2025</strong></span>
        </div>
      `;

      // Bind Parameters Buttons
      this.dossier.querySelectorAll('.p3d-param-btn').forEach(btn => {
        btn.addEventListener('click', () => this.setParameter(btn.dataset.param));
      });

      // Bind Solar Ambiance Buttons
      this.dossier.querySelectorAll('.p3d-solar-btn').forEach(btn => {
        btn.addEventListener('click', () => this.applySolarLighting(btn.dataset.solar));
      });

      // Bind Material Switch Buttons
      this.dossier.querySelectorAll('.p3d-finish-btn').forEach(btn => {
        btn.addEventListener('click', () => this.applyFinishMaterial(btn.dataset.finish));
      });

      // Bind Mortgage Slider
      const slider = this.dossier.querySelector('#p3d-down-slider');
      if (slider) {
        slider.addEventListener('input', (e) => {
          this.downPaymentPct = parseInt(e.target.value, 10);
          const newDown = Math.round(unit.priceVal * (this.downPaymentPct / 100));
          const newLoan = unit.priceVal - newDown;
          const newMonthly = Math.round(newLoan * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -totalMonths))));

          const valEl = this.dossier.querySelector('#p3d-slider-val');
          const monthEl = this.dossier.querySelector('#p3d-monthly-val');
          if (valEl) valEl.textContent = `${this.downPaymentPct}% (${newDown.toLocaleString('fr-FR')} DH)`;
          if (monthEl) monthEl.textContent = `~${newMonthly.toLocaleString('fr-FR')} DH / mois`;
        });
      }

      // Bind Room Focus Rows
      this.dossier.querySelectorAll('.p3d-room-bar-row').forEach(row => {
        row.addEventListener('click', () => {
          const key = row.dataset.roomkey;
          this.focusOnRoom(key);
        });
      });

      // Bind Reset Camera Button
      const resetBtn = this.dossier.querySelector('#p3d-btn-reset-cam');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          this.targetSpherical = { radius: 21, theta: Math.PI / 4, phi: Math.PI / 3.6 };
          this.cameraTarget.set(0, 0.4, -0.6);
        });
      }
    }

    setParameter(paramKey) {
      this.activeParameter = paramKey;

      if (!this.dossier) return;

      this.dossier.querySelectorAll('.p3d-param-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.param === paramKey);
      });

      this.dossier.querySelectorAll('.p3d-param-pane').forEach(pane => {
        pane.classList.toggle('active', pane.id === `param-${paramKey}`);
      });
    }

    focusOnRoom(roomKey) {
      if (!this.interactiveRooms) return;

      const target = this.interactiveRooms.find(r => r.userData && r.userData.key === roomKey);
      if (target) {
        this.cameraTarget.set(target.position.x, 0.6, target.position.z);
        this.targetSpherical.radius = 11;
        this.targetSpherical.phi = Math.PI / 3.8;

        // Visual flash highlight on mesh
        const origColor = target.userData.baseColor || 0xFFFFFF;
        target.material.emissive.setHex(0xC5A059);
        target.material.emissiveIntensity = 0.5;
        setTimeout(() => {
          target.material.emissive.setHex(0x000000);
          target.material.emissiveIntensity = 0.0;
        }, 1200);
      }
    }

    // --- FILTERS & MOBILE CAROUSEL ---
    applyFilter(filter) {
      this.currentFilter = filter;

      this.container.querySelectorAll('.p3d-filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
      });

      const filteredUnits = PALMARES_UNITS.filter(u => {
        if (filter === 'all') return true;
        if (filter === 'wing-a') return u.wing === 'A';
        if (filter === 'wing-b') return u.wing === 'B';
        if (filter === 'f2') return u.category === 'f2';
        if (filter === 'f3') return u.category === 'f3';
        if (filter === 'f4') return u.category === 'f4';
        return true;
      });

      this.renderMobileCarousel(filteredUnits);

      if (filteredUnits.length > 0 && !filteredUnits.some(u => u.id === this.selectedUnitId)) {
        this.selectUnit(filteredUnits[0].id);
      }
    }

    renderMobileCarousel(units = PALMARES_UNITS) {
      if (!this.mobileStrip) return;

      this.mobileStrip.innerHTML = units.map(u => `
        <div class="p3d-mobile-card ${u.id === this.selectedUnitId ? 'active' : ''}" data-id="${u.id}">
          <div class="p3d-mcard-top">
            <span class="p3d-mcard-num">${u.num}</span>
            <span class="p3d-mcard-cat">${u.category.toUpperCase()}</span>
          </div>
          <div class="p3d-mcard-surf">${u.surface}</div>
          <div class="p3d-mcard-price">${u.estimatedPrice}</div>
        </div>
      `).join('');
    }

    // --- EVENTS & POINTER ORBIT CONTROLS ---
    bindEvents() {
      // 1. Filter Chips Click
      this.container.querySelectorAll('.p3d-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => this.applyFilter(btn.dataset.filter));
      });

      // 2. Segmented Mode Switcher
      this.container.querySelectorAll('.p3d-segmented-btn').forEach(btn => {
        btn.addEventListener('click', () => this.setMode(btn.dataset.mode));
      });

      // 3. Mobile Carousel Click
      this.mobileStrip.addEventListener('click', e => {
        const card = e.target.closest('.p3d-mobile-card');
        if (card && card.dataset.id) {
          this.selectUnit(card.dataset.id);
        }
      });

      // 4. Camera Presets Dock
      const btnGuidedTour = document.getElementById('p3d-btn-guided-tour');
      const btnSolarCycle = document.getElementById('p3d-btn-solar-cycle');
      const btnCamIso = document.getElementById('p3d-cam-iso');
      const btnCamTop = document.getElementById('p3d-cam-top');
      const btnCamLiving = document.getElementById('p3d-cam-living');
      const btnCamReset = document.getElementById('p3d-cam-reset');

      if (btnGuidedTour) {
        btnGuidedTour.addEventListener('click', () => {
          this.lastInteractionTime = Date.now();
          this.toggleGuidedTour();
        });
      }

      if (btnSolarCycle) {
        btnSolarCycle.addEventListener('click', () => {
          this.lastInteractionTime = Date.now();
          this.toggleSolarCycle();
        });
      }

      if (btnCamIso) {
        btnCamIso.addEventListener('click', () => {
          this.lastInteractionTime = Date.now();
          if (this.isTourActive) this.stopGuidedTour();
          this.targetSpherical = { radius: 21, theta: Math.PI / 4, phi: Math.PI / 3.6 };
          this.cameraTarget.set(0, 0.4, -0.6);
        });
      }
      if (btnCamTop) {
        btnCamTop.addEventListener('click', () => {
          this.lastInteractionTime = Date.now();
          if (this.isTourActive) this.stopGuidedTour();
          this.targetSpherical = { radius: 23, theta: 0, phi: 0.1 };
          this.cameraTarget.set(0, 0, -0.6);
        });
      }
      if (btnCamLiving) {
        btnCamLiving.addEventListener('click', () => {
          this.lastInteractionTime = Date.now();
          if (this.isTourActive) this.stopGuidedTour();
          this.focusOnRoom('salon');
        });
      }
      if (btnCamReset) {
        btnCamReset.addEventListener('click', () => {
          this.lastInteractionTime = Date.now();
          if (this.isTourActive) this.stopGuidedTour();
          this.targetSpherical = { radius: 18, theta: Math.PI / 4, phi: Math.PI / 3.4 };
          this.cameraTarget.set(0, 0.8, 0);
        });
      }

      // 5. Zoom In/Out Buttons
      const btnZoomIn = document.getElementById('p3d-btn-zoom-in');
      const btnZoomOut = document.getElementById('p3d-btn-zoom-out');
      if (btnZoomIn) {
        btnZoomIn.addEventListener('click', () => {
          this.lastInteractionTime = Date.now();
          this.targetSpherical.radius = Math.max(7, this.targetSpherical.radius - 3);
        });
      }
      if (btnZoomOut) {
        btnZoomOut.addEventListener('click', () => {
          this.lastInteractionTime = Date.now();
          this.targetSpherical.radius = Math.min(36, this.targetSpherical.radius + 3);
        });
      }

      // 6. Interactive Three.js Mouse & Touch Orbit Controls
      this.canvas.addEventListener('mousedown', e => {
        this.isMouseDown = true;
        this.lastInteractionTime = Date.now();
        if (this.isTourActive) this.stopGuidedTour();
        this.mousePrev = { x: e.clientX, y: e.clientY };
      });

      window.addEventListener('mouseup', () => {
        this.isMouseDown = false;
        this.lastInteractionTime = Date.now();
      });

      window.addEventListener('mousemove', e => {
        if (!this.isMouseDown) {
          this.checkRaycastHover(e);
          return;
        }

        this.lastInteractionTime = Date.now();
        const deltaX = e.clientX - this.mousePrev.x;
        const deltaY = e.clientY - this.mousePrev.y;
        this.mousePrev = { x: e.clientX, y: e.clientY };

        // Rotate camera with mouse drag
        this.targetSpherical.theta -= deltaX * 0.007;
        this.targetSpherical.phi -= deltaY * 0.007;
      });

      // Mouse Wheel Zoom
      this.canvas.addEventListener('wheel', e => {
        e.preventDefault();
        this.lastInteractionTime = Date.now();
        if (this.isTourActive) this.stopGuidedTour();
        this.targetSpherical.radius += e.deltaY * 0.015;
        this.targetSpherical.radius = Math.max(6, Math.min(38, this.targetSpherical.radius));
      }, { passive: false });

      // Click on 3D Room or Unit
      this.canvas.addEventListener('click', e => {
        this.lastInteractionTime = Date.now();
        this.checkRaycastClick(e);
      });

      // Touch Controls for Mobile / iPad
      let touchStartDist = 0;
      this.canvas.addEventListener('touchstart', e => {
        this.lastInteractionTime = Date.now();
        if (this.isTourActive) this.stopGuidedTour();
        if (e.touches.length === 1) {
          this.mousePrev = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        } else if (e.touches.length === 2) {
          touchStartDist = Math.hypot(
            e.touches[0].clientX - e.touches[1].clientX,
            e.touches[0].clientY - e.touches[1].clientY
          );
        }
      }, { passive: true });

      this.canvas.addEventListener('touchmove', e => {
        this.lastInteractionTime = Date.now();
        if (e.touches.length === 1) {
          const deltaX = e.touches[0].clientX - this.mousePrev.x;
          const deltaY = e.touches[0].clientY - this.mousePrev.y;
          this.mousePrev = { x: e.touches[0].clientX, y: e.touches[0].clientY };

          this.targetSpherical.theta -= deltaX * 0.008;
          this.targetSpherical.phi -= deltaY * 0.008;
        } else if (e.touches.length === 2) {
          const dist = Math.hypot(
            e.touches[0].clientX - e.touches[1].clientX,
            e.touches[0].clientY - e.touches[1].clientY
          );
          const factor = (touchStartDist - dist) * 0.04;
          touchStartDist = dist;
          this.targetSpherical.radius = Math.max(6, Math.min(38, this.targetSpherical.radius + factor));
        }
      }, { passive: true });

      // Window Resize Listener
      window.addEventListener('resize', () => {
        if (!this.viewport || !this.camera || !this.renderer) return;
        const w = this.viewport.clientWidth;
        const h = this.viewport.clientHeight;
        this.camera.aspect = w / h;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(w, h);
      });
    }

    // --- RAYCAST HOVER & CLICK HANDLERS ---
    checkRaycastHover(e) {
      if (!this.interactiveRooms || this.interactiveRooms.length === 0) return;

      const rect = this.canvas.getBoundingClientRect();
      if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
        if (this.floatingTag) this.floatingTag.classList.remove('visible');
        return;
      }

      this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      this.raycaster.setFromCamera(this.mouse, this.camera);
      const intersects = this.raycaster.intersectObjects(this.interactiveRooms, false);

      if (intersects.length > 0) {
        const hit = intersects[0].object;
        this.canvas.style.cursor = 'pointer';

        if (this.hoveredRoom !== hit) {
          if (this.hoveredRoom && this.hoveredRoom.material) {
            this.hoveredRoom.material.emissive.setHex(0x000000);
            this.hoveredRoom.material.emissiveIntensity = 0.0;
          }
          this.hoveredRoom = hit;
          if (hit.material) {
            hit.material.emissive.setHex(0xC5A059);
            hit.material.emissiveIntensity = 0.3;
          }
        }

        // Show Apple Liquid Glass Floating Tag
        if (this.floatingTag) {
          const data = hit.userData;
          const nameEl = this.floatingTag.querySelector('.p3d-ft-name');
          const surfEl = this.floatingTag.querySelector('.p3d-ft-surf');
          if (nameEl) nameEl.textContent = data.name || (data.unit ? data.unit.label : 'Espace');
          if (surfEl) surfEl.textContent = data.surf || (data.unit ? data.unit.surface : '');

          this.floatingTag.style.left = `${e.clientX - rect.left + 16}px`;
          this.floatingTag.style.top = `${e.clientY - rect.top - 36}px`;
          this.floatingTag.classList.add('visible');
        }
      } else {
        this.canvas.style.cursor = 'default';
        if (this.hoveredRoom && this.hoveredRoom.material) {
          this.hoveredRoom.material.emissive.setHex(0x000000);
          this.hoveredRoom.material.emissiveIntensity = 0.0;
        }
        this.hoveredRoom = null;
        if (this.floatingTag) this.floatingTag.classList.remove('visible');
      }
    }

    checkRaycastClick(e) {
      if (!this.interactiveRooms) return;

      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      this.raycaster.setFromCamera(this.mouse, this.camera);
      const intersects = this.raycaster.intersectObjects(this.interactiveRooms, false);

      if (intersects.length > 0) {
        const hit = intersects[0].object;
        if (hit.userData.type === 'unit' && hit.userData.id) {
          this.selectUnit(hit.userData.id);
          this.setMode('dollhouse');
        } else if (hit.userData.type === 'room') {
          this.focusOnRoom(hit.userData.key);
          this.setParameter('typologie');
        }
      }
    }
  }

  // --- GLOBAL ATTACHMENT & DOM READY INITIALIZER ---
  window.initPalmares3DExplorer = function(containerId) {
    return new Palmares3DExplorer(containerId);
  };

  document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('palmares-3d-explorer')) {
      window.palmaresExplorer = new Palmares3DExplorer('palmares-3d-explorer');
    }
  });

})();
