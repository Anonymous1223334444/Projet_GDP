export const projectTasks = [
  {
    phase: "Phase 1: Analyse et Conception",
    tasks: [
      {
        id: 1,
        name: "Analyse des besoins et objectifs",
        duration: "1 semaine",
        predecessors: [],
        description: "Identifier et documenter les objectifs principaux et les besoins des utilisateurs"
      },
      {
        id: 2,
        name: "Analyse fonctionnelle",
        duration: "2 semaines",
        predecessors: [1],
        description: "Détailler toutes les fonctionnalités requises et leurs interactions"
      },
      {
        id: 3,
        name: "Conception technique",
        duration: "2 semaines",
        predecessors: [2],
        description: "Définir l'architecture, les technologies et la structure de données"
      }
    ]
  },
  {
    phase: "Phase 2: Développement Core",
    tasks: [
      {
        id: 4,
        name: "Base de données et API",
        duration: "3 semaines",
        predecessors: [3],
        description: "Mise en place de la base de données et développement des API REST"
      },
      {
        id: 5,
        name: "Système d'authentification",
        duration: "2 semaines",
        predecessors: [4],
        description: "Implémentation de l'authentification et gestion des utilisateurs"
      },
      {
        id: 6,
        name: "Éditeur de code",
        duration: "4 semaines",
        predecessors: [4],
        description: "Développement de l'éditeur de code en ligne avec support multi-langages"
      }
    ]
  },
  {
    phase: "Phase 3: Fonctionnalités Principales",
    tasks: [
      {
        id: 7,
        name: "Gestion des problèmes",
        duration: "3 semaines",
        predecessors: [4],
        description: "Système de création, catégorisation et gestion des problèmes"
      },
      {
        id: 8,
        name: "Exécution du code",
        duration: "4 semaines",
        predecessors: [6],
        description: "Système d'exécution sécurisée et validation des solutions"
      },
      {
        id: 9,
        name: "Système de progression",
        duration: "2 semaines",
        predecessors: [7],
        description: "Suivi de progression, statistiques et badges"
      }
    ]
  },
  {
    phase: "Phase 4: Fonctionnalités Sociales",
    tasks: [
      {
        id: 10,
        name: "Forums et discussions",
        duration: "2 semaines",
        predecessors: [5],
        description: "Implémentation des forums et système de commentaires"
      },
      {
        id: 11,
        name: "Classements et compétitions",
        duration: "2 semaines",
        predecessors: [8, 9],
        description: "Système de classement et organisation des compétitions"
      }
    ]
  },
  {
    phase: "Phase 5: Finalisation",
    tasks: [
      {
        id: 12,
        name: "Tests et optimisation",
        duration: "3 semaines",
        predecessors: [8, 9, 10, 11],
        description: "Tests d'intégration, performance et sécurité"
      },
      {
        id: 13,
        name: "Déploiement",
        duration: "2 semaines",
        predecessors: [12],
        description: "Mise en production et configuration des environnements"
      }
    ]
  }
];