export const navLinks = [
  {
    id: 1,
    name: 'Ana Sayfa',
    href: '#home',
  },
  {
    id: 2,
    name: 'Hakkımda',
    href: '#about',
  },
  {
    id: 3,
    name: 'Projeler',
    href: '#projects',
  },
  {
    id: 4,
    icon: '/assets/profileme.png',
    alt: 'Test',
    href: '#test',
  },
  {
    id: 5,
    name: 'Deneyimler',
    href: '#work',
  },
  {
    id: 6,
    name: 'İletişim',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'Flalingo Kids',
    desc: 'Çocuğunuz Profesyonel Öğretmenlerle İngilizce Öğrensin',
    subdesc:
      "Flalingo Kids platformunun geliştirilme sürecinde Frontend Developer olarak görev aldım. React.js, Next.js ve SCSS ile geliştirilen bu platform, çocuklara özel eğitsel içerikleri modern ve erişilebilir bir arayüzle sunar. Responsive tasarım, hızlı sayfa yükleme ve güvenli yapı ön planda tutulmuştur.",
    href: 'https://flalingo.com/tr/kids',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/flalingo.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Next.js',
        path: 'assets/nextjs.svg',
      },
      {
        id: 3,
        name: 'Typescript',
        path: '/assets/typescript.svg',
      },
      {
        id: 4,
        name: 'Sass/SCSS',
        path: '/assets/sass.png',
      },
    ],
  },
  {
    title: 'Hyper E-Ticaret Platformu',
    desc: 'Epin ve e-ticaret çözümleri sunar.',
    subdesc:
      "Hyper Teknoloji firmasının kurumsal e-ticaret platformunun yeni arayüzü üzerine çalıştım. Frontend Developer olarak görev aldım. PHP, JavaScript ve Bootstrap kullanılarak geliştirdim. Projede, oyun içi dijital ürünlerin satışı, çoklu pazaryeri entegrasyonları, blog, sipariş ve stok yönetimi gibi modüllerin tasarımı üzerinde çalıştım.",
    href: 'https://www.hyperteknoloji.com/',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/hypericon.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D'
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'PHP',
        path: '/assets/php.png',
      },
      {
        id: 2,
        name: 'JavaScript',
        path: 'assets/js.svg',
      },
      {
        id: 3,
        name: 'Bootstrap',
        path: '/assets/bootstrap.png',
      },
      {
        id: 4,
        name: 'Figma',
        path: '/assets/figma.svg',
      },
    ],
  },
  {
    title: 'Gerçek Zamanlı At Yarışı Oyunu',
    desc: 'Düz bir parkurda 8 farklı kulvarda koşan atların gerçek zamanlı yarışı.',
    subdesc:
      'Vue.js ile geliştirilen bu at yarışı simülasyonu, JavaScript tabanlı animasyonlar ve kontrollerle 8 kulvarda gerçek zamanlı yarış deneyimi sunar. Vite ile derlenip Firebase Hosting üzerinden yayınlanmıştır. Figma ile tasarlanan arayüz, intro, sesli anlatım, geri sayım, lider tablosu ve sonuç listesi gibi özellikler içerir.',
    href: 'https://horseracingvue.web.app/',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Vue.js',
        path: '/assets/vue.svg',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/css.svg',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/js.svg',
      },
      {
        id: 4,
        name: 'Firebase',
        path: '/assets/firebase.svg',
      },
      {
        id: 5,
        name: 'Figma',
        path: '/assets/figma.svg',
      }
    ],
  },
  {
    title: 'Kelimelerle İngilizce Öğren',
    desc: 'Kullanıcıların dil öğrenme sürecini desteklemeyi amaçlamaktadır.',
    subdesc:
      "Vue.js ile geliştirilen bu uygulama, Axios kullanılarak iki farklı API'den çekilen İngilizce kelimeler ve anlamlarıyla kullanıcıya kelime önerileri sunar. Kullanıcılar hesap oluşturarak kelime öğrenmeye başlayabilir, öğrendikleri kelimeleri kelime tablosuna ekleyebilir ve profil bilgilerini güncelleyebilirler.",
    href: 'https://learn-english-word.netlify.app/',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Vue.js',
        path: '/assets/vue.svg',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/css.svg',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/js.svg',
      },
      {
        id: 4,
        name: 'Axios',
        path: '/assets/axios.png',
      },
    ],
  },
  {
    title: 'Çocuklar İçin Eğlenceli Matematik Oyunu',
    desc: 'Çocuklar matematikle eğlenerek öğrenir.',
    subdesc:
      'Bu proje, React.js kullanılarak geliştirilmiş interaktif bir matematik alıştırma oyunudur. Kullanıcılar dört temel matematik işlemi (toplama, çıkarma, çarpma, bölme) üzerinde pratik yapabilirler. Context API ile global durum yönetimi sağlanmıştır. CSS ile modern ve responsive bir arayüz tasarlanmıştır. Skor ve tur özellikleri mevcuttur.',
    href: 'https://flalingo-task.vercel.app/',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, rgb(0 211 223 / 31%), rgb(12 12 12 / 31%)), linear-gradient(rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/css.svg',
      },
      {
        id: 3,
        name: 'JavaScript',
        path: '/assets/js.svg',
      },
      {
        id: 4,
        name: 'React Router',
        path: '/assets/react-router.svg',
      },
    ],
  }
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Hyper',
    pos: 'Frontend Geliştirici & UI Tasarımcısı',
    duration: '08/2024 - 02/2025',
    title: 'PHP tabanlı e-ticaret siteleri için müşteriye özel tasarımlar ve arayüz yazılımları geliştirerek, site düzenlemelerini ve kullanıcı deneyimini iyileştirdim.\n\nYetenekler: PHP, JavaScript, HTML, CSS, Bootstrap, Figma',
    icon: '/assets/hyperlogo.webp',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'CarrefourSA (nNarsoft Bilişim çatısı altında)',
    pos: 'Frontend Geliştirici',
    duration: '12/2023 - 05/2024',
    title: "Global bir proje kapsamında, CarrefourSA’nın Yazar Kasa ve Jet Kasa uygulamalarında Electron.js, React.js ve React Native ile frontend geliştirmeler yaptım; çevre birimi entegrasyonları ve kullanıcı dostu çözümler sundum. \n\nYetenekler: React, React Native, Electron.js, JavaScript, SCSS, SQL, Figma, Postman, Docker, Jira",
    icon: '/assets/carrefoursa.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Flalingo',
    pos: 'Frontend Geliştirici',
    duration: '04/2023 - 12/2023',
    title: "Global bir proje kapsamında, PHP tabanlı sayfa geliştirme, güncelleme ve performans iyileştirmeleri yaptım. Ayrıca, Next.js kullanarak SEO uyumlu geliştirme gerçekleştirdim ve tasarım ekibiyle iş birliği içinde çalıştım. \n\nYetenekler: Next.js, React.js, Redux, Laravel, CSS, SCSS, Figma",
    icon: '/assets/flalingo.png',
    animation: 'salute',
  }
];