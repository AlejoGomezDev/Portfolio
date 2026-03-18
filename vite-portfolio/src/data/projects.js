export const PROJECTS = [
  {
    title: "Portfolio Web",
    subtitle: "Mi (antiguo) portfolio web",
    description: "Mi (antiguo) portfolio web es una demostración del aprendizaje tecnológico que alcancé en el último tiempo. Apliqué conocimientos de proyectos anteriores, priorizando rendimiento, escalabilidad y estructura.",
    imageUrl: "/assets/Imagenes/Proyectos/PortfolioWeb2.png",
    driveUrl: "https://drive.google.com/drive/folders/13NMxndRt0_SmGCm81oToAhaJUNfxUgJI?usp=sharing",
    GitHubUrl: "https://github.com/AlejoGomezDev/Portfolio-Astro-React.git",
    techs: [
      { alt: "React", iconUrl: "/assets/logos/skills/react.png" },
      { alt: "Astro", iconUrl: "/assets/logos/skills/astro.png" },
      { alt: "Tailwind CSS", iconUrl: "/assets/logos/skills/tailwind.png" }
    ],
    features: [
      "Diseño responsive y moderno con Tailwind CSS.",
      "Uso de React para interactividad y manejo de estados.",
      "Generación de contenido dinámico con Astro.",
      "Arquitectura de componentes reutilizables.",
    ]
  },
  {
    title: "Banco Honse",
    subtitle: "Sistema de gestión bancaria",
    description: "Sistema de gestión bancaria enfocado en la administración de clientes, cuentas y operaciones financieras con lógica de negocio compleja.",
    imageUrl: "/assets/Imagenes/Proyectos/bancoHonse.png",
    driveUrl: "https://drive.google.com/drive/folders/1t8DK7pkJbPGbzHIlmLR53qEWtzNX_Gxe?usp=sharing",
    GitHubUrl: "https://github.com/AlejoGomezDev/BancoHonse",
    techs: [
      { alt: "Java", iconUrl: "/assets/logos/skills/java.png" },
      { alt: "MySQL", iconUrl: "/assets/logos/skills/mysql.png" },
      { alt: "JavaScript", iconUrl: "/assets/logos/skills/js.png" }
    ],
    features: [
      "Autenticación con login por tipo de usuario.",
      "Gestión de sesión mediante Cookies.",
      "ABML de clientes, cuentas y préstamos.",
      "Transferencias y gestión de préstamos.",
      "Validaciones de negocio y reportes."
    ]
  },
  {
    title: "Reactive Search",
    subtitle: "Biblioteca de películas reactiva",
    description: "Aplicación SPA desarrollada con React que permite buscar películas en tiempo real mediante una API externa.",
    imageUrl: "/assets/Imagenes/Proyectos/ReactiveSearch2.png",
    driveUrl: "https://drive.google.com/drive/folders/1rJDNOde9oeIJnAYOWgGE047xEivRVy7K?usp=sharing",
    GitHubUrl: "https://github.com/AlejoGomezDev/ReactiveSearch.git",
    techs: [
      { alt: "React", iconUrl: "/assets/logos/skills/react.png" },
      { alt: "JavaScript", iconUrl: "/assets/logos/skills/js.png" },
      { alt: "CSS3", iconUrl: "/assets/logos/skills/css3.png" },
      { alt: "HTML5", iconUrl: "/assets/logos/skills/html5.png" }
    ],
    features: [
      "Búsqueda en tiempo real con debounce.",
      "Paginación de resultados.",
      "Gestión de estado con Context API.",
      "Navegación con React Router DOM.",
      "Consumo de API REST externa."
    ]
  },
  {
    title: "The Chained Dungeon",
    subtitle: "Juego de mazmorras",
    description: "Juego con mecánicas de exploración en mazmorras y sistema de combate progresivo desarrollado en C++ con SFML.",
    imageUrl: "/assets/Imagenes/Proyectos/TheCD.png",
    driveUrl: "https://drive.google.com/drive/folders/1TbB_2g_o13Wu9z8yuZpmMJQFqrDO1rDR?usp=sharing",
    GitHubUrl: "https://github.com/AlejoGomezDev/TheChainedDungeon.git",
    techs: [
      { alt: "C++", iconUrl: "/assets/logos/skills/c++.png" },
      { alt: "SFML", iconUrl: "/assets/logos/skills/sfml.png" }
    ],
    features: [
      "Enemigos normales, mini jefes y jefes finales.",
      "Sistema de ítems y mejoras.",
      "Progresión por niveles basada en experiencia (XP).",
      "Mecánicas de combate en tiempo real.",
      "Diseño de niveles y sprites personalizados."
    ]
  },
  {
    title: "Gestión para Clínica",
    subtitle: "Sistema de gestión clínica",
    description: "Sistema de gestión integral diseñado para administrar una clínica médica.",
    imageUrl: "/assets/Imagenes/Proyectos/Clinica1.png",
    driveUrl: "https://drive.google.com/drive/folders/1cqnZapKfmqFRs4z3m3U-GHEs79RyamSz?usp=sharing",
    GitHubUrl: "https://github.com/AlejoGomezDev/SistemaGestionClinica.git",
    techs: [
      { alt: "C#", iconUrl: "/assets/logos/skills/cSharp.png" },
      { alt: "SQL Server", iconUrl: "/assets/logos/skills/sqlServer.png" },
      { alt: ".NET", iconUrl: "/assets/logos/skills/net.png" }
    ],
    features: [
      "Autenticación mediante sistema de login diferenciado por tipo de usuario.",
      "Manejo de la sesión mediante Cookies y/o SessionStorage.",
      "Manejo del alta, baja, modificación y listado (ABML) de médicos, pacientes y turnos.",
      "Generación de informes basados en datos almacenados en la base de datos",
      "Arquitectura en capas: Vistas, Negocio, Conexión a base de datos y Entidades."
    ]
  },
  {
    title: "CodeFlix",
    subtitle: "Plataforma de streaming",
    description: "Aplicación web que permite gestionar una biblioteca de películas mediante el consumo de una API externa.",
    imageUrl: "/assets/Imagenes/Proyectos/CodeFlix1.png",
    driveUrl: "https://drive.google.com/drive/folders/1VgIciZZLKRH8c-jHnSiDECDPHDSvqFil?usp=sharing",
    GitHubUrl: "https://github.com/AlejoGomezDev/CodeFlix.git",
    techs: [
      { alt: "JavaScript", iconUrl: "/assets/logos/skills/js.png" },
      { alt: "MySQL", iconUrl: "/assets/logos/skills/mysql.png" },
      { alt: "NodeJS", iconUrl: "/assets/logos/skills/node.png" },
      { alt: "Express", iconUrl: "/assets/logos/skills/express.png" }
    ],
    features: [
      "Backend con Node.js y Express.",
      "Base de datos MySQL para almacenamiento.",
      "Autenticación de usuarios.",
      "CRUD de películas y listas personalizadas.",
    ]
  },
  {
    title: "Burguer::Code",
    subtitle: "Sitio web de hamburguesería",
    description: "Sitio web estático para una hamburguesería con diseño atractivo y funcionalidades interactivas.",
    imageUrl: "/assets/Imagenes/Proyectos/BurguerCode1.png",
    driveUrl: "https://drive.google.com/drive/folders/1AhBDPoYYdZZByxVOd6jMHMNGDZENAHst?usp=sharing",
    GitHubUrl: "https://github.com/AlejoGomezDev/Burguer--Code.git",
    techs: [
      { alt: "JavaScript", iconUrl: "/assets/logos/skills/js.png" },
      { alt: "HTML5", iconUrl: "/assets/logos/skills/html5.png" },
      { alt: "CSS3", iconUrl: "/assets/logos/skills/css3.png" },
      { alt: "Bootstrap", iconUrl: "/assets/logos/skills/bootstrap.png" }
    ],
    features: [
      "Diseño responsive con Bootstrap.",
      "Menú interactivo de productos.",
      "Formulario de contacto y reservas.",
      "Animaciones y efectos visuales con CSS3."
    ]
  }
];