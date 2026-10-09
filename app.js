(() => {
  "use strict";

  const STORAGE_KEY = "lmu-dashboard-v2-settings";
  const STORAGE_VERSION = 2;
  const LANGUAGES = ["de", "en", "zh"];
  const THEMES = ["system", "light", "dark"];
  const CATEGORY_ORDER = ["study", "student", "library", "campus", "info"];

  const SERVICES = [
    {
      id: "lsf",
      category: "study",
      icon: "calendar",
      url: "https://lsf.verwaltung.uni-muenchen.de/",
      title: { de: "LSF", en: "LSF", zh: "LSF" },
      description: {
        de: "Vorlesungsverzeichnis, Belegung und Prüfungsanmeldung.",
        en: "Course catalog, registration and exam sign-up.",
        zh: "课程目录、选课和考试报名入口。"
      }
    },
    {
      id: "moodle",
      category: "study",
      icon: "cap",
      url: "https://moodle.lmu.de/",
      title: { de: "Moodle", en: "Moodle", zh: "Moodle" },
      description: {
        de: "Lernplattform für Kurse, Materialien und Abgaben.",
        en: "Learning platform for courses, materials and submissions.",
        zh: "课程资料、作业提交和在线学习平台。"
      }
    },
    {
      id: "mailbox",
      category: "student",
      icon: "mail",
      url: "https://webmail.lrz.de/",
      title: { de: "Mailbox", en: "Mailbox", zh: "学生邮箱" },
      description: {
        de: "Campus-Mailbox direkt im Webmail-Service des LRZ öffnen.",
        en: "Open your campus mailbox directly in LRZ Webmail.",
        zh: "直接通过 LRZ Webmail 打开校园邮箱。"
      }
    },
    {
      id: "qissos",
      category: "student",
      icon: "fileCheck",
      url: "https://qissos.verwaltung.uni-muenchen.de/qisserversos/rds?application=lsf&state=user&type=0",
      title: { de: "Studienverwaltung", en: "Studienverwaltung", zh: "Studienverwaltung" },
      description: {
        de: "Bescheinigungen, Beitragskonto und Selbstbedienung.",
        en: "Certificates, fee account and self-service functions.",
        zh: "在读证明、缴费账户和学生自助服务。"
      }
    },
    {
      id: "account",
      category: "student",
      icon: "user",
      url: "https://www.portal.lmu.de/benutzerkonto/",
      title: { de: "Benutzerkonto", en: "User account", zh: "用户账户" },
      description: {
        de: "LMU-Benutzerkennung, Passwort und Kontoeinstellungen.",
        en: "LMU user ID, password and account settings.",
        zh: "LMU 用户名、密码和账户设置。"
      }
    },
    {
      id: "cloudprinting",
      category: "campus",
      icon: "printer",
      url: "https://www.printservice.uni-muenchen.de/",
      title: { de: "CloudPrinting", en: "CloudPrinting", zh: "CloudPrinting" },
      description: {
        de: "Drucken, Kopieren und Scannen an LMU-Standorten.",
        en: "Printing, copying and scanning at LMU locations.",
        zh: "LMU 校内打印、复印和扫描服务。"
      }
    },
    {
      id: "ub",
      category: "library",
      icon: "book",
      url: "https://www.ub.lmu.de/de/",
      title: { de: "UB", en: "Library", zh: "大学图书馆" },
      description: {
        de: "Katalog, E-Medien, Arbeitsplätze und Bibliothekskonto.",
        en: "Catalog, e-media, workspaces and library account.",
        zh: "馆藏目录、电子资源、座位和图书馆账户。"
      }
    },
    {
      id: "mensa",
      category: "campus",
      icon: "utensils",
      url: "https://www.studierendenwerk-muenchen-oberbayern.de/gastronomie/standorte-und-oeffnungszeiten/muenchen/",
      title: { de: "Mensa", en: "Mensa", zh: "食堂" },
      description: {
        de: "Standorte, Öffnungszeiten und Speisepläne in München.",
        en: "Locations, opening hours and menus in Munich.",
        zh: "慕尼黑食堂位置、开放时间和菜单。"
      }
    },
    {
      id: "zhs",
      category: "campus",
      icon: "sport",
      url: "https://kurse.zhs-muenchen.de/de",
      title: { de: "ZHS", en: "ZHS", zh: "ZHS" },
      description: {
        de: "Hochschulsport München, Kurse und Anmeldung.",
        en: "University sports in Munich, courses and registration.",
        zh: "慕尼黑高校体育课程和报名入口。"
      }
    },
    {
      id: "lmu",
      category: "campus",
      icon: "building",
      url: "https://www.lmu.de/de/",
      title: { de: "LMU", en: "LMU", zh: "LMU 官网" },
      description: {
        de: "Offizielle LMU-Webseite, Suche und zentrale Informationen.",
        en: "Official LMU website, search and central information.",
        zh: "LMU 官方网站、搜索和学校信息。"
      }
    },
    {
      id: "it",
      category: "student",
      icon: "headset",
      url: "https://www.lmu.de/de/die-lmu/struktur/zentrale-universitaetsverwaltung/it-services-division/it-servicedesk/",
      title: { de: "IT-Servicedesk", en: "IT Service Desk", zh: "IT 服务台" },
      description: {
        de: "Hilfe zu Benutzerkennung, Mailbox, LMUcard und IT-Diensten.",
        en: "Help with user ID, mailbox, LMUcard and IT services.",
        zh: "LMU 用户、邮箱、LMUcard 和 IT 服务支持。"
      }
    },
    {
      id: "raumfinder",
      category: "campus",
      icon: "mapPin",
      url: "https://www.lmu.de/raumfinder/",
      title: { de: "Raumfinder", en: "Raumfinder", zh: "Raumfinder" },
      description: {
        de: "Gebäude, Hörsäle und Räume auf dem LMU-Campus finden.",
        en: "Find campus buildings, lecture halls and rooms.",
        zh: "查找校园楼栋、教室和楼层平面图。"
      }
    },
    {
      id: "opac",
      category: "library",
      icon: "search",
      url: "https://opac.ub.lmu.de/",
      title: { de: "OPAC", en: "OPAC", zh: "OPAC" },
      description: {
        de: "Bücher, Aufsätze und elektronische Medien der UB suchen.",
        en: "Search the library's books, articles and electronic resources.",
        zh: "搜索图书馆的书籍、论文和电子资源。"
      }
    },
    {
      id: "library-account",
      category: "library",
      icon: "bookOpenText",
      url: "https://opac.ub.lmu.de/MyResearch/Home?lng=de",
      title: { de: "Bibliothekskonto", en: "Bibliothekskonto", zh: "Bibliothekskonto" },
      description: {
        de: "Ausleihen, Verlängerungen und Vormerkungen verwalten.",
        en: "Manage loans, renewals and holds.",
        zh: "查看借阅、续借和图书预约。"
      }
    },
    {
      id: "e-medien",
      category: "library",
      icon: "fileText",
      url: "https://login.emedien.ub.uni-muenchen.de/login",
      title: { de: "E-Medien-Login", en: "E-Medien-Login", zh: "E-Medien-Login" },
      description: {
        de: "Für lizenzierte E-Books, Zeitschriften und Datenbanken anmelden.",
        en: "Sign in to access licensed e-books, journals and databases.",
        zh: "登录访问授权电子书、期刊和数据库。"
      }
    },
    {
      id: "platzfinder",
      category: "library",
      icon: "armchair",
      url: "https://www.ub.lmu.de/de/standorte/platzfinder/",
      title: { de: "Platzfinder", en: "Platzfinder", zh: "Platzfinder" },
      description: {
        de: "Aktuelle Auslastung und freie Leseplätze der UB ansehen.",
        en: "Check library occupancy and available reading seats.",
        zh: "查看图书馆当前空位和使用情况。"
      }
    },
    {
      id: "seat-booking",
      category: "library",
      icon: "calendarCheck",
      url: "https://auth.anny.eu/start-session?entityId=https%3A%2F%2Flmuidp.lrz.de%2Fidp%2Fshibboleth",
      title: { de: "Leseplatzreservierung", en: "Leseplatzreservierung", zh: "Leseplatzreservierung" },
      description: {
        de: "Reservierbare Lese- und Arbeitsplätze über Anny buchen.",
        en: "Book reservable library reading and study seats through Anny.",
        zh: "通过 Anny 预约图书馆可预订的阅读和学习座位。"
      }
    },
    {
      id: "lmucard",
      category: "student",
      icon: "creditCard",
      url: "https://www.lmu.de/de/die-lmu/struktur/zentrale-universitaetsverwaltung/it-services-division/it-servicedesk/zentrale-it-angebote/lmucard/",
      title: { de: "LMUcard", en: "LMUcard", zh: "LMUcard" },
      description: {
        de: "Informationen zur Beantragung, Abholung und Nutzung der LMUcard.",
        en: "Information about applying for, collecting and using your LMUcard.",
        zh: "校园卡申请、领取和使用说明。"
      }
    },
    {
      id: "eduroam",
      category: "info",
      icon: "wifi",
      url: "https://www.lmu.de/de/die-lmu/struktur/zentrale-universitaetsverwaltung/it-services-division/it-servicedesk/zentrale-it-angebote/wlan-eduroam/",
      title: { de: "eduroam", en: "eduroam", zh: "eduroam" },
      description: {
        de: "Campus-WLAN auf Smartphone, Tablet und Computer einrichten.",
        en: "Set up campus Wi-Fi on your phone, tablet or computer.",
        zh: "在手机、平板和电脑上配置校园 Wi-Fi。"
      }
    },
    {
      id: "eduvpn",
      category: "info",
      icon: "shieldCheck",
      url: "https://www.lmu.de/de/die-lmu/struktur/zentrale-universitaetsverwaltung/it-services-division/it-servicedesk/zentrale-it-angebote/vpn-zugang-zum-muenchner-wissenschaftsnetz/",
      title: { de: "eduVPN", en: "eduVPN", zh: "eduVPN" },
      description: {
        de: "Zugang zum Münchner Wissenschaftsnetz von unterwegs einrichten.",
        en: "Set up remote access to the Munich Scientific Network.",
        zh: "配置校外访问慕尼黑科研网络的 VPN。"
      }
    },
    {
      id: "vorlesungszeiten",
      category: "info",
      icon: "calendar",
      url: "https://www.lmu.de/de/workspace-fuer-studierende/1x1-des-studiums/vorlesungszeiten/",
      title: { de: "Vorlesungszeiten", en: "Vorlesungszeiten", zh: "Vorlesungszeiten" },
      description: {
        de: "Vorlesungsbeginn, Vorlesungsende und vorlesungsfreie Tage nachsehen.",
        en: "Check teaching dates and lecture-free days.",
        zh: "查看开课、结课和停课日期。"
      }
    },
    {
      id: "rueckmeldung",
      category: "info",
      icon: "calendarCheck",
      url: "https://www.lmu.de/de/workspace-fuer-studierende/1x1-des-studiums/rueckmeldung/",
      title: { de: "Rückmeldung", en: "Rückmeldung", zh: "Rückmeldung" },
      description: {
        de: "Fristen, Semesterbeiträge und Ablauf der Rückmeldung nachsehen.",
        en: "Check re-enrollment deadlines, semester fees and procedures.",
        zh: "查看下学期注册期限、学期费用和办理流程。"
      }
    },
    {
      id: "semesterticket",
      category: "info",
      icon: "trainFront",
      url: "https://www.lmu.de/de/workspace-fuer-studierende/1x1-des-studiums/semesterticket/",
      title: { de: "Semesterticket", en: "Semesterticket", zh: "Semesterticket" },
      description: {
        de: "Hinweise zum ausgesetzten Semesterticket und zu Ticketalternativen.",
        en: "Information about the suspended semester ticket and alternatives.",
        zh: "学期交通票暂停实施的说明及替代票种信息。"
      }
    },
    {
      id: "beratung",
      category: "info",
      icon: "messagesSquare",
      url: "https://www.lmu.de/de/workspace-fuer-studierende/support-angebote/",
      title: { de: "Beratung", en: "Beratung", zh: "Beratung" },
      description: {
        de: "Anlaufstellen für Studienfragen, soziale Anliegen und persönliche Unterstützung.",
        en: "Find study advice, social support and personal counseling contacts.",
        zh: "查找学业咨询、社会支持和个人心理辅导的联系入口。"
      }
    },
    {
      id: "studienfinanzierung",
      category: "info",
      icon: "banknote",
      url: "https://www.lmu.de/de/workspace-fuer-studierende/support-angebote/studienfinanzierung/",
      title: { de: "Studienfinanzierung", en: "Studienfinanzierung", zh: "Studienfinanzierung" },
      description: {
        de: "Informationen zu BAföG, Stipendien und weiteren Finanzierungsmöglichkeiten.",
        en: "Information about BAföG, scholarships and other study funding options.",
        zh: "查看 BAföG、奖学金和其他学习资助渠道。"
      }
    },
    {
      id: "wohnen",
      category: "info",
      icon: "house",
      url: "https://www.lmu.de/de/workspace-fuer-studierende/studieren-und-leben/wohnen/",
      title: { de: "Wohnen", en: "Wohnen", zh: "Wohnen" },
      description: {
        de: "Wohnheime, Zimmervermittlung und Tipps zur Wohnungssuche in München.",
        en: "Student residences, room listings and housing search advice in Munich.",
        zh: "查找慕尼黑学生宿舍、房源渠道和租房建议。"
      }
    }
  ];

  const SERVICE_IDS = SERVICES.map((service) => service.id);
  const SERVICE_TAGS = {
    lsf: { de: "Kurs- und Prüfungsanmeldung", en: "Course and exam registration", zh: "课程和考试报名" },
    moodle: { de: "Kursmaterial und Abgaben", en: "Materials and submissions", zh: "课程资料与作业提交" },
    mailbox: { de: "Campus-E-Mails lesen", en: "Read campus email", zh: "收发校园邮件" },
    qissos: { de: "Bescheinigungen und Beiträge", en: "Certificates and fees", zh: "在读证明与缴费记录" },
    account: { de: "Kennung und Passwort verwalten", en: "Manage user ID and password", zh: "账号与密码管理" },
    cloudprinting: { de: "Drucken, Kopieren und Scannen", en: "Print, copy and scan", zh: "打印、复印与扫描" },
    ub: { de: "Bibliotheksangebote im Überblick", en: "Library services overview", zh: "图书馆服务总览" },
    mensa: { de: "Speisepläne und Öffnungszeiten", en: "Menus and opening hours", zh: "食堂菜单与开放时间" },
    zhs: { de: "Sportkurse und Anmeldung", en: "Sports courses and registration", zh: "体育课程与报名" },
    lmu: { de: "Universität und Aktuelles", en: "University news and information", zh: "学校官网与最新资讯" },
    it: { de: "Hilfe bei IT-Problemen", en: "Help with IT issues", zh: "账号、邮箱与 IT 问题支持" },
    raumfinder: { de: "Räume und Gebäude finden", en: "Find rooms and buildings", zh: "教室与校园楼栋查询" },
    opac: { de: "Bücher und E-Medien suchen", en: "Search books and e-resources", zh: "书籍与电子资源检索" },
    "library-account": { de: "Ausleihen, Verlängern, Vormerken", en: "Loans, renewals and holds", zh: "借阅、续借与图书预约" },
    "e-medien": { de: "E-Books, Zeitschriften, Datenbanken", en: "E-books, journals and databases", zh: "电子书、期刊与数据库登录" },
    platzfinder: { de: "Freie Bibliotheksplätze prüfen", en: "Check available library seats", zh: "图书馆空位查询" },
    "seat-booking": { de: "Lese- und Arbeitsplätze buchen", en: "Book library study seats", zh: "图书馆学习座位预约" },
    lmucard: { de: "Beantragung und Kartennutzung", en: "Card application and use", zh: "校园卡申请与使用" },
    eduroam: { de: "Campus-WLAN einrichten", en: "Set up campus Wi-Fi", zh: "校园 Wi-Fi 配置" },
    eduvpn: { de: "Campusnetz von unterwegs nutzen", en: "Access the campus network remotely", zh: "校外访问校园网络" },
    vorlesungszeiten: { de: "Vorlesungs- und freie Tage", en: "Teaching and lecture-free dates", zh: "开课、结课与停课日期" },
    rueckmeldung: { de: "Fristen und Semesterbeiträge", en: "Re-enrollment dates and fees", zh: "下学期注册与缴费期限" },
    semesterticket: { de: "Ticketstatus und Alternativen", en: "Ticket status and alternatives", zh: "交通票与替代方案" },
    beratung: { de: "Studienberatung und Unterstützung", en: "Study advice and support", zh: "学业咨询与支持渠道" },
    studienfinanzierung: { de: "BAföG und Stipendien", en: "BAföG and scholarships", zh: "学习资助与奖学金" },
    wohnen: { de: "Wohnheime und Wohnungssuche", en: "Residences and housing search", zh: "学生宿舍与租房信息" }
  };

  const DEPARTMENTS = [
    { id: "sociology", name: "Soziologie", url: "https://www.soziologie.lmu.de/de/", group: "Social Sciences", keywords: "sociology sozialwissenschaft gesellschaft ifs" },
    { id: "statistics", name: "Statistik", url: "https://www.stat.lmu.de/", group: "Mathematics, Informatics and Statistics", keywords: "statistics statistik data science" },
    { id: "politics", name: "Politikwissenschaft", url: "https://www.gsi.uni-muenchen.de/", group: "Social Sciences", keywords: "political science politics gsi politik" },
    { id: "ifkw", name: "Kommunikationswissenschaft / IfKW", url: "https://www.ifkw.lmu.de/", group: "Social Sciences", keywords: "communication media kommunikation medien ifkw" },
    { id: "philosophy", name: "Philosophie", url: "https://www.philosophie.lmu.de/", group: "Philosophy", keywords: "philosophy philosophie wissenschaftstheorie" },
    { id: "physics", name: "Physik", url: "https://www.physik.lmu.de/", group: "Physics", keywords: "physics physik astronomy astrophysics" },
    { id: "math", name: "Mathematik", url: "https://www.math.lmu.de/de/", group: "Mathematics, Informatics and Statistics", keywords: "mathematics mathematik math" },
    { id: "informatics", name: "Informatik", url: "https://www.ifi.lmu.de/", group: "Mathematics, Informatics and Statistics", keywords: "computer science informatik ifi cip" },
    { id: "business", name: "BWL / School of Management", url: "https://www.som.lmu.de/de/", group: "Business Administration", keywords: "bwl management business som" },
    { id: "economics", name: "VWL / Economics", url: "https://www.econ.lmu.de/de/", group: "Economics", keywords: "economics vwl volkswirtschaft econ" },
    { id: "law", name: "Jura", url: "https://www.jura.lmu.de/", group: "Law", keywords: "law rechtswissenschaft jura juristische" },
    { id: "medicine", name: "Medizin", url: "https://www.med.lmu.de/de/", group: "Medicine", keywords: "medicine medizin humanmedizin zahnmedizin" },
    { id: "psychology", name: "Psychologie", url: "https://www.lmu.de/psyedu/de/", group: "Psychology and Educational Sciences", keywords: "psychology psychologie psyedu" },
    { id: "education", name: "Pädagogik", url: "https://www.edu.lmu.de/", group: "Psychology and Educational Sciences", keywords: "education pädagogik paedagogik rehabilitation lehramt" },
    { id: "history", name: "Geschichte", url: "https://www.geschichte.lmu.de/", group: "History and the Arts", keywords: "history geschichte historicum" },
    { id: "art-history", name: "Kunstgeschichte", url: "https://www.kunstgeschichte.uni-muenchen.de/", group: "History and the Arts", keywords: "art history kunstgeschichte kunst" },
    { id: "german", name: "Germanistik", url: "https://www.sprachlit.lmu.de/germanistik", group: "Languages and Literatures", keywords: "germanistik deutsch german deutsche philologie" },
    { id: "english", name: "Anglistik", url: "https://www.sprachlit.lmu.de/anglistik/de/", group: "Languages and Literatures", keywords: "english anglistik amerikanistik" },
    { id: "romance", name: "Romanistik", url: "https://www.sprachlit.lmu.de/de/die-fakultaet/abteilungen-und-institute/", group: "Languages and Literatures", keywords: "romanistik romance french spanish italian" },
    { id: "culture", name: "Kulturwissenschaften", url: "https://www.kulturwissenschaften.lmu.de/", group: "Cultural Studies", keywords: "culture kulturwissenschaft ethnologie" },
    { id: "biology", name: "Biologie", url: "https://www.bio.lmu.de/", group: "Biology", keywords: "biology biologie bio" },
    { id: "chemistry", name: "Chemie und Pharmazie", url: "https://www.cup.lmu.de/", group: "Chemistry and Pharmacy", keywords: "chemie chemistry pharmazie pharmacy cup" },
    { id: "geosciences", name: "Geowissenschaften", url: "https://www.geo.lmu.de/", group: "Geosciences", keywords: "geoscience geowissenschaft geographie geology" },
    { id: "veterinary", name: "Tiermedizin", url: "https://www.vetmed.uni-muenchen.de/", group: "Veterinary Medicine", keywords: "veterinary vetmed tiermedizin" },
    { id: "catholic-theology", name: "Katholische Theologie", url: "https://www.kaththeol.uni-muenchen.de/", group: "Theology", keywords: "catholic theology katholische theologie" },
    { id: "protestant-theology", name: "Evangelische Theologie", url: "https://www.evtheol.lmu.de/de/", group: "Theology", keywords: "protestant evangelical evangelische theologie" }
  ];

  const POPULAR_DEPARTMENT_IDS = ["sociology", "statistics", "politics", "ifkw", "psychology", "business", "economics", "law"];

  const I18N = {
    de: {
      brandSubtitle: "Personalisierter Startpunkt für Studium und Campus.",
      unofficial: "Unofficial",
      setupTitle: "Dashboard einrichten",
      setupIntro: "Wähle dein Hauptfach und optional dein Nebenfach. Es gibt keine voreingestellten Fächer; deine Auswahl bleibt nur in diesem Browser.",
      setupPanelTitle: "Was studierst du?",
      setupPanelText: "Suche nach deinem Fach oder deiner Fakultät. Du kannst später jederzeit weitere Fächer hinzufügen.",
      majorLabel: "Hauptfach",
      minorLabel: "Nebenfach",
      optional: "optional",
      searchPlaceholder: "Fach suchen, z. B. Soziologie",
      popular: "Schnellauswahl",
      noResults: "Kein Treffer. Du kannst später einen eigenen Link als Fachkarte hinzufügen.",
      createDashboard: "Dashboard erstellen",
      startWithoutSubject: "Ohne Fach starten",
      localOnly: "Einstellungen werden nur lokal in diesem Browser gespeichert. Bitte keine LMU-Zugangsdaten in dieses Dashboard eingeben.",
      statLocal: "Lokal",
      statLocalText: "Speichert nur Geräteeinstellungen",
      statPwa: "PWA",
      statPwaText: "Für iPhone-Startbildschirm vorbereitet",
      statNoLogin: "Kein Login",
      statNoLoginText: "Keine LMU-Zugangsdaten",
      settings: "Einstellungen",
      theme: "Darstellung",
      themes: { system: "System", light: "Hell", dark: "Dunkel" },
      dashboardTitle: "LMU Dashboard",
      dashboardSubtitle: "Schneller Zugriff auf Studium, Verwaltung und Campus-Links.",
      arrange: "Sortieren",
      done: "Fertig",
      subjects: "Meine Fächer",
      subjectsHint: "Hauptfach, Nebenfach und weitere Fachkarten.",
      addSubject: "Fach hinzufügen",
      addSelectedSubject: "Ausgewähltes Fach hinzufügen",
      noSubjectsTitle: "Noch keine Fächer ausgewählt",
      noSubjectsText: "Starte den Einrichtungsdialog oder füge ein Fach über die Suche hinzu.",
      openSetup: "Einrichtung öffnen",
      profileTitle: "Profil",
      profileText: "Fächer und Dienste lassen sich jederzeit ändern.",
      noSubjectChip: "Noch kein Fach",
      categories: { study: "Studium", student: "Studierendenservice", library: "Bibliothek", campus: "Campus", info: "Informationen" },
      roles: { major: "Hauptfach", minor: "Nebenfach", extra: "Fach" },
      settingsTitle: "Dashboard anpassen",
      settingsText: "Sprache, Darstellung, Fächer, sichtbare Dienste und Reihenfolge.",
      language: "Sprache",
      profileSection: "Studienprofil",
      profileSectionText: "Diese Angaben bleiben nur auf diesem Gerät.",
      saveProfile: "Profil speichern",
      extraSubjects: "Weitere Fächer",
      serviceSection: "Dienste anzeigen und sortieren",
      serviceSectionText: "Ziehe Einträge zum Sortieren oder blende einzelne Karten aus.",
      showCardDescriptions: "Kartenbeschreibungen anzeigen",
      privacySection: "Datenschutz",
      privacyText: "Dieses Dashboard speichert nur Sprache, Darstellung, Fächer, Reihenfolge und ausgeblendete Karten in localStorage. Es speichert keine Matrikelnummer, keine LMU-Benutzerkennung und kein Passwort.",
      resetSettings: "Alles zurücksetzen",
      close: "Schließen",
      open: "Öffnen",
      moveUp: "Nach oben",
      moveDown: "Nach unten",
      hide: "Ausblenden",
      show: "Anzeigen",
      remove: "Entfernen",
      noMajorToast: "Bitte wähle ein Hauptfach oder starte ohne Fach.",
      savedToast: "Gespeichert.",
      addedToast: "Fach hinzugefügt.",
      duplicateToast: "Dieses Fach ist bereits hinzugefügt.",
      resetConfirm: "Alle lokalen Dashboard-Einstellungen zurücksetzen?",
      footerNote: "Nicht offiziell von LMU München. Links führen zu öffentlichen LMU- und Partnerseiten."
    },
    en: {
      brandSubtitle: "Personal start point for study and campus.",
      unofficial: "Unofficial",
      setupTitle: "Set up dashboard",
      setupIntro: "Choose your major and optional minor. No subject is preselected; your choices stay only in this browser.",
      setupPanelTitle: "What are you studying?",
      setupPanelText: "Search for your subject or faculty. You can add more subjects later.",
      majorLabel: "Major",
      minorLabel: "Minor",
      optional: "optional",
      searchPlaceholder: "Search subject, e.g. Sociology",
      popular: "Quick choices",
      noResults: "No match. You can add a custom subject card later.",
      createDashboard: "Create dashboard",
      startWithoutSubject: "Start without subject",
      localOnly: "Settings are stored only in this browser. Do not enter LMU credentials into this dashboard.",
      statLocal: "Local",
      statLocalText: "Stores device settings only",
      statPwa: "PWA",
      statPwaText: "Ready for iPhone Home Screen",
      statNoLogin: "No login",
      statNoLoginText: "No LMU credentials",
      settings: "Settings",
      theme: "Theme",
      themes: { system: "System", light: "Light", dark: "Dark" },
      dashboardTitle: "LMU Dashboard",
      dashboardSubtitle: "Fast access to study, administration and campus links.",
      arrange: "Arrange",
      done: "Done",
      subjects: "My subjects",
      subjectsHint: "Major, minor and additional subject cards.",
      addSubject: "Add subject",
      addSelectedSubject: "Add selected subject",
      noSubjectsTitle: "No subjects selected yet",
      noSubjectsText: "Open setup or add a subject through search.",
      openSetup: "Open setup",
      profileTitle: "Profile",
      profileText: "Subjects and services can be changed anytime.",
      noSubjectChip: "No subject yet",
      categories: { study: "Study", student: "Student Services", library: "Library", campus: "Campus", info: "Information" },
      roles: { major: "Major", minor: "Minor", extra: "Subject" },
      settingsTitle: "Customize dashboard",
      settingsText: "Language, theme, subjects, visible services and order.",
      language: "Language",
      profileSection: "Study profile",
      profileSectionText: "These details stay only on this device.",
      saveProfile: "Save profile",
      extraSubjects: "Additional subjects",
      serviceSection: "Show and sort services",
      serviceSectionText: "Drag entries to sort or hide individual cards.",
      showCardDescriptions: "Show card descriptions",
      privacySection: "Privacy",
      privacyText: "This dashboard stores only language, theme, subjects, order and hidden cards in localStorage. It does not store matriculation numbers, LMU user IDs or passwords.",
      resetSettings: "Reset everything",
      close: "Close",
      open: "Open",
      moveUp: "Move up",
      moveDown: "Move down",
      hide: "Hide",
      show: "Show",
      remove: "Remove",
      noMajorToast: "Choose a major or start without a subject.",
      savedToast: "Saved.",
      addedToast: "Subject added.",
      duplicateToast: "This subject is already added.",
      resetConfirm: "Reset all local dashboard settings?",
      footerNote: "Not official LMU Munich. Links lead to public LMU and partner pages."
    },
    zh: {
      brandSubtitle: "学习与校园服务的个人入口。",
      unofficial: "非官方",
      setupTitle: "设置 Dashboard",
      setupIntro: "请选择 Hauptfach 和可选的 Nebenfach。系统不会默认使用任何专业；你的选择只保存在当前浏览器。",
      setupPanelTitle: "你在 LMU 学什么？",
      setupPanelText: "搜索专业、院系或 Fakultät。以后也可以继续添加更多专业卡片。",
      majorLabel: "Hauptfach / 主专业",
      minorLabel: "Nebenfach / 副专业",
      optional: "可选",
      searchPlaceholder: "搜索专业，例如 Soziologie",
      popular: "常用选择",
      noResults: "没有找到。之后可以把自己的链接作为专业卡片添加。",
      createDashboard: "生成 Dashboard",
      startWithoutSubject: "先不选择专业",
      localOnly: "设置只保存在当前浏览器。请不要在这个 Dashboard 里输入任何 LMU 登录信息。",
      statLocal: "本地",
      statLocalText: "只保存设备设置",
      statPwa: "PWA",
      statPwaText: "已适配 iPhone 主屏幕",
      statNoLogin: "无登录",
      statNoLoginText: "不保存 LMU 凭据",
      settings: "设置",
      theme: "外观",
      themes: { system: "跟随系统", light: "浅色", dark: "深色" },
      dashboardTitle: "LMU Dashboard",
      dashboardSubtitle: "快速进入学习、学生事务和校园服务。",
      arrange: "排序",
      done: "完成",
      subjects: "我的专业",
      subjectsHint: "Hauptfach、Nebenfach 和其他专业卡片。",
      addSubject: "添加专业",
      addSelectedSubject: "添加选中的专业",
      noSubjectsTitle: "还没有选择专业",
      noSubjectsText: "可以重新打开设置向导，或直接用搜索添加专业。",
      openSetup: "打开设置向导",
      profileTitle: "个人配置",
      profileText: "专业和服务卡片都可以随时修改。",
      noSubjectChip: "还没有专业",
      categories: { study: "学习", student: "学生事务", library: "图书馆", campus: "校园", info: "信息" },
      roles: { major: "Hauptfach", minor: "Nebenfach", extra: "专业" },
      settingsTitle: "自定义 Dashboard",
      settingsText: "语言、外观、专业、显示的服务和卡片顺序。",
      language: "语言",
      profileSection: "学习信息",
      profileSectionText: "这些信息只保存在当前设备。",
      saveProfile: "保存专业",
      extraSubjects: "其他专业",
      serviceSection: "显示与排序服务",
      serviceSectionText: "拖动条目排序，也可以隐藏不常用的卡片。",
      showCardDescriptions: "显示卡片说明",
      privacySection: "隐私",
      privacyText: "这个 Dashboard 只把语言、外观、专业、卡片顺序和隐藏状态保存在 localStorage。不会保存学号、LMU 用户名或密码。",
      resetSettings: "全部重置",
      close: "关闭",
      open: "打开",
      moveUp: "上移",
      moveDown: "下移",
      hide: "隐藏",
      show: "显示",
      remove: "移除",
      noMajorToast: "请选择 Hauptfach，或选择先不设置专业。",
      savedToast: "已保存。",
      addedToast: "已添加专业。",
      duplicateToast: "这个专业已经添加过。",
      resetConfirm: "确定重置本地所有 Dashboard 设置吗？",
      footerNote: "非 LMU München 官方项目。卡片链接会跳转到公开的 LMU 或合作方页面。"
    }
  };

  const ICONS = {
    // New service icons use Lucide; attribution is in assets/icons/lucide-LICENSE.txt.
    trainFront: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3.1V7a4 4 0 0 0 8 0V3.1m-7 11.9-1-1m7 1 1-1M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Zm-1 0-2 3m10-3 2 3"/></svg>',
    messagesSquare: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2zM20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"/></svg>',
    banknote: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>',
    house: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
    mapPin: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>',
    search: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>',
    creditCard: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>',
    wifi: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h.01M2 8.82a15 15 0 0 1 20 0M5 12.859a10 10 0 0 1 14 0M8.5 16.429a5 5 0 0 1 7 0"/></svg>',
    shieldCheck: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>',
    armchair: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0zM5 18v2M19 18v2"/></svg>',
    bookOpenText: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 7v14M16 12h2M16 8h2M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3zM6 12h2M6 8h2"/></svg>',
    calendarCheck: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v4M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18M9 16l2 2 4-4"/></svg>',
    fileText: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2zM14 2v5a1 1 0 0 0 1 1h5M10 9H8M16 13H8M16 17H8"/></svg>',
    languages: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m5 8 6 6m-7 0 6-6 2-3M2 5h12M7 2h1m14 20-5-10-5 10M14 18h6"/></svg>',
    settings: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 8.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Z" fill="none" stroke="currentColor" stroke-width="1.9"/><path d="M19.4 13.6v-3.2l-2.1-.7a6.2 6.2 0 0 0-.7-1.6l1-2-2.2-2.2-2 .9a6.9 6.9 0 0 0-1.7-.7L10.9 2H7.8l-.7 2.1a6.9 6.9 0 0 0-1.7.7l-2-.9-2.2 2.2 1 2a6.2 6.2 0 0 0-.7 1.6l-2.1.7v3.2l2.1.7c.2.6.4 1.1.7 1.6l-1 2 2.2 2.2 2-.9c.5.3 1.1.5 1.7.7l.7 2.1h3.1l.8-2.1c.6-.2 1.1-.4 1.7-.7l2 .9 2.2-2.2-1-2c.3-.5.5-1 .7-1.6l2.2-.7Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.4" transform="translate(2)"/></svg>',
    sun: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 2.8v2.4M12 18.8v2.4M4.2 4.2l1.7 1.7m12.2 12.2 1.7 1.7M2.8 12h2.4m13.6 0h2.4M4.2 19.8l1.7-1.7M18.1 5.9l1.7-1.7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.8"/></svg>',
    moon: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20.5 15.4A8.5 8.5 0 0 1 8.6 3.5 8.7 8.7 0 1 0 20.5 15.4Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.8"/></svg>',
    monitor: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3" y="4" width="18" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 20h8M12 16v4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.8"/></svg>',
    external: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M8 7h9v9M7 17 17 7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.9"/></svg>',
    grip: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M9 5h.01M15 5h.01M9 12h.01M15 12h.01M9 19h.01M15 19h.01" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="3"/></svg>',
    up: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m6 15 6-6 6 6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>',
    down: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>',
    x: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>',
    eyeOff: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m3 3 18 18M10.6 10.6A2 2 0 0 0 13.4 13.4M7.5 7.8C5.6 8.9 4.1 10.5 3 12c2.2 3.1 5.2 5 9 5 1.3 0 2.5-.3 3.6-.8M11 5.1c.3 0 .7-.1 1-.1 3.8 0 6.8 1.9 9 5a12.4 12.4 0 0 1-2.5 2.8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/></svg>',
    plus: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="4" y="5" width="16" height="15" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M8 3v4M16 3v4M4 10h16M8 14h3M13 14h3M8 17h3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.8"/></svg>',
    cap: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m3 8.5 9-4 9 4-9 4-9-4Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.8"/><path d="M7 11v4.2c0 1.4 2.2 2.6 5 2.6s5-1.2 5-2.6V11M20 9v5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.8"/></svg>',
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="3.5" y="5.5" width="17" height="13" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m5 8 7 5 7-5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/></svg>',
    fileCheck: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.8"/><path d="M14 3v5h5M8.5 14l2.2 2.2 4.8-5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/></svg>',
    user: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="8" r="3.3" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M5 20c.8-3.5 3.2-5.2 7-5.2s6.2 1.7 7 5.2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.8"/></svg>',
    workspace: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="4" y="6" width="16" height="13" rx="2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1M4 12h16M9 15h6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.8"/></svg>',
    printer: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M7 8V3h10v5M7 17H5a2 2 0 0 1-2-2v-4a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v4a2 2 0 0 1-2 2h-2M7 14h10v7H7v-7Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.8"/><path d="M17 11h.01M9 17h6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.8"/></svg>',
    book: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 4.8A2.8 2.8 0 0 1 7.8 2H20v17H7.8A2.8 2.8 0 0 0 5 21.8V4.8Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.8"/><path d="M5 19a2.8 2.8 0 0 1 2.8-2H20M9 6h6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.8"/></svg>',
    utensils: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M7 3v8M4.5 3v5.5A2.5 2.5 0 0 0 7 11a2.5 2.5 0 0 0 2.5-2.5V3M7 11v10M16 3c2.4 1.7 3.5 4 3.5 7.2 0 2.2-.8 3.7-2.4 4.6V21" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.8"/></svg>',
    sport: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="7" cy="17" r="2.2" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17" cy="17" r="2.2" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M9 17h3.2l2.1-5.6M14.3 11.4l1.9 2.2H19M11.8 9.5l1.7-1.5 2.3 1.4M10.2 11.2l-2.4 2.4H5M16.4 5.3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/></svg>',
    building: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6M8 11h.01M12 11h.01M16 11h.01" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/></svg>',
    headset: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 13a8 8 0 0 1 16 0v3a2 2 0 0 1-2 2h-2v-6h4M4 16a2 2 0 0 0 2 2h2v-6H4v4ZM16 18c0 1.7-1.3 3-3 3h-2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/></svg>',
    bookmark: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 4.5A2.5 2.5 0 0 1 8.5 2h7A2.5 2.5 0 0 1 18 4.5V21l-6-3.8L6 21V4.5Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.8"/></svg>',
    shield: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3 5 6v5.5c0 4.3 2.8 7.5 7 9.5 4.2-2 7-5.2 7-9.5V6l-7-3Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.8"/><path d="m8.8 12.1 2.2 2.2 4.4-5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/></svg>'
  };

  const app = document.getElementById("app");
  const topbar = document.getElementById("topbar");
  const dialog = document.getElementById("settingsDialog");
  const toastNode = document.getElementById("toast");
  const pendingSelections = {};
  let draggedServiceId = null;
  let toastTimer = null;
  let settings = loadSettings();

  function detectLanguage() {
    const language = (navigator.language || "de").toLowerCase();
    if (language.startsWith("zh")) return "zh";
    if (language.startsWith("en")) return "en";
    return "de";
  }

  function createDefaultSettings() {
    return {
      version: STORAGE_VERSION,
      language: detectLanguage(),
      theme: "system",
      setupComplete: false,
      profile: {
        majorId: null,
        minorId: null,
        additionalIds: []
      },
      serviceOrder: [...SERVICE_IDS],
      hiddenServiceIds: [],
      showCardDescriptions: true,
      editMode: false
    };
  }

  function loadSettings() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return createDefaultSettings();
      return normalizeSettings(JSON.parse(raw));
    } catch (error) {
      return createDefaultSettings();
    }
  }

  function normalizeSettings(raw) {
    const base = createDefaultSettings();
    if (!raw || typeof raw !== "object") return base;

    const profile = raw.profile && typeof raw.profile === "object" ? raw.profile : {};
    const serviceOrder = Array.isArray(raw.serviceOrder)
      ? raw.serviceOrder.filter((id) => SERVICE_IDS.includes(id))
      : [];
    SERVICE_IDS.forEach((id) => {
      if (!serviceOrder.includes(id)) serviceOrder.push(id);
    });

    return {
      ...base,
      version: STORAGE_VERSION,
      language: LANGUAGES.includes(raw.language) ? raw.language : base.language,
      theme: THEMES.includes(raw.theme) ? raw.theme : base.theme,
      setupComplete: Boolean(raw.setupComplete),
      profile: {
        majorId: validDepartmentId(profile.majorId),
        minorId: validDepartmentId(profile.minorId),
        additionalIds: Array.isArray(profile.additionalIds)
          ? unique(profile.additionalIds.map(validDepartmentId).filter(Boolean))
          : []
      },
      serviceOrder,
      hiddenServiceIds: Array.isArray(raw.hiddenServiceIds)
        ? unique(raw.hiddenServiceIds.filter((id) => SERVICE_IDS.includes(id)))
        : [],
      showCardDescriptions: typeof raw.showCardDescriptions === "boolean"
        ? raw.showCardDescriptions
        : base.showCardDescriptions,
      editMode: Boolean(raw.editMode)
    };
  }

  function saveSettings() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch (error) {
      console.warn("Unable to save local dashboard settings.", error);
    }
  }

  function validDepartmentId(id) {
    return DEPARTMENTS.some((department) => department.id === id) ? id : null;
  }

  function unique(items) {
    return [...new Set(items)];
  }

  function t(key) {
    return key.split(".").reduce((value, part) => value && value[part], I18N[settings.language]) || key;
  }

  function localize(value) {
    if (typeof value === "string") return value;
    return value[settings.language] || value.de || value.en || "";
  }

  function serviceTitle(service) {
    return service.title.de || localize(service.title);
  }

  function icon(name) {
    return ICONS[name] || ICONS.external;
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[char]));
  }

  function escapeAttr(value) {
    return escapeHtml(value);
  }

  function normalizeSearch(value) {
    return String(value || "")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/ß/g, "ss")
      .trim();
  }

  function effectiveTheme() {
    if (settings.theme === "system") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return settings.theme;
  }

  function applyTheme() {
    const theme = effectiveTheme();
    document.documentElement.dataset.theme = theme;
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    if (themeMeta) themeMeta.setAttribute("content", theme === "dark" ? "#07100c" : "#00883A");
  }

  function renderShell() {
    applyTheme();
    document.documentElement.lang = settings.language === "zh" ? "zh-Hans" : settings.language;
    document.title = t("dashboardTitle");
    renderTopbar();
    if (settings.setupComplete) {
      renderDashboard();
    } else {
      renderSetup();
    }
    renderSettingsDialog();
  }

  function renderTopbar() {
    const themeIcon = settings.theme === "dark" ? "moon" : settings.theme === "light" ? "sun" : "monitor";
    topbar.innerHTML = `
      <div class="brand" aria-label="LMU Dashboard">
        <img class="lmu-logo" src="./assets/icons/Logo_LMU.svg" width="362" height="171" alt="LMU">
      </div>
      <div class="top-actions">
        <div class="segmented" aria-label="${escapeAttr(t("language"))}">
          ${LANGUAGES.map((language) => `
            <button type="button" data-language="${language}" aria-pressed="${settings.language === language}">
              ${language === "zh" ? "中文" : language.toUpperCase()}
            </button>
          `).join("")}
        </div>
        <button type="button" class="icon-button" data-cycle-theme aria-label="${escapeAttr(t("theme"))}" title="${escapeAttr(t("theme"))}">
          ${icon(themeIcon)}
        </button>
        <button type="button" class="text-button" data-open-settings>
          ${icon("settings")}
          <span>${escapeHtml(t("settings"))}</span>
        </button>
      </div>
    `;
  }

  function renderSetup() {
    app.innerHTML = `
      <section class="setup-shell">
        <div class="setup-copy">
          <div>
            <h2>${escapeHtml(t("setupTitle"))}</h2>
            <p>${escapeHtml(t("setupIntro"))}</p>
          </div>
          <div class="status-strip" aria-label="PWA status">
            ${renderStatusTile(t("statLocal"), t("statLocalText"))}
            ${renderStatusTile(t("statPwa"), t("statPwaText"))}
            ${renderStatusTile(t("statNoLogin"), t("statNoLoginText"))}
          </div>
        </div>
        <form class="setup-panel" id="setupForm">
          <div class="panel-heading">
            <div>
              <h2>${escapeHtml(t("setupPanelTitle"))}</h2>
              <p class="panel-description">${escapeHtml(t("setupPanelText"))}</p>
            </div>
          </div>
          <div class="form-grid">
            ${renderDepartmentSearch("setup-major", t("majorLabel"), settings.profile.majorId, false)}
            ${renderDepartmentSearch("setup-minor", `${t("minorLabel")} (${t("optional")})`, settings.profile.minorId, true)}
          </div>
          <div class="popular-row" aria-label="${escapeAttr(t("popular"))}">
            ${POPULAR_DEPARTMENT_IDS.map((id) => renderPopularButton(id, "setup-major")).join("")}
          </div>
          <div class="form-actions">
            <button type="submit" class="primary-button">${escapeHtml(t("createDashboard"))}</button>
            <button type="button" class="secondary-button" data-skip-setup>${escapeHtml(t("startWithoutSubject"))}</button>
          </div>
          <p class="privacy-copy">${icon("shield")}<span>${escapeHtml(t("localOnly"))}</span></p>
        </form>
      </section>
    `;
  }

  function renderStatusTile(title, body) {
    return `
      <div class="status-tile">
        <strong>${escapeHtml(title)}</strong>
        <span>${escapeHtml(body)}</span>
      </div>
    `;
  }

  function renderDashboard() {
    const orderedServices = getOrderedServices();
    const visibleServices = orderedServices.filter((service) => !settings.hiddenServiceIds.includes(service.id));
    const subjects = getSelectedSubjects();
    const serviceSections = CATEGORY_ORDER
      .map((category) => renderServiceSection(category, visibleServices.filter((service) => service.category === category)))
      .filter(Boolean)
      .join("");

    app.innerHTML = `
      <section class="dashboard-page">
        <div class="content-stack">
          <div class="dashboard-hero">
            <div>
              <h2>${escapeHtml(t("dashboardTitle"))}</h2>
              <p class="section-copy">${escapeHtml(t("dashboardSubtitle"))}</p>
            </div>
          </div>

          <section aria-label="Dashboard">
            ${visibleServices.length ? `<div class="section-stack">${serviceSections}</div>` : renderNoServices()}
          </section>

          <section aria-labelledby="subjectsHeading">
            <div class="section-heading compact-heading">
              <h2 id="subjectsHeading">${escapeHtml(t("subjects"))}</h2>
            </div>
            ${subjects.length ? `<div class="subject-grid">${subjects.map(renderSubjectCard).join("")}</div>` : renderNoSubjects()}
          </section>

          <footer class="privacy-copy">${icon("shield")}<span>${escapeHtml(t("footerNote"))}</span></footer>
        </div>
      </section>
    `;
  }

  function renderServiceSection(category, services) {
    if (!services.length) return "";
    return `
      <section class="service-section" aria-label="${escapeAttr(t(`categories.${category}`))}">
        <h3>${escapeHtml(t(`categories.${category}`))}</h3>
        <div class="service-grid">${services.map(renderServiceCard).join("")}</div>
      </section>
    `;
  }

  function renderNoServices() {
    return `
      <div class="empty-state">
        <h3>${escapeHtml(t("serviceSection"))}</h3>
        <p class="muted">${escapeHtml(t("serviceSectionText"))}</p>
        <div class="form-actions">
          <button type="button" class="secondary-button" data-open-settings>${escapeHtml(t("settings"))}</button>
        </div>
      </div>
    `;
  }

  function renderNoSubjects() {
    return `
      <div class="empty-state">
        <h3>${escapeHtml(t("noSubjectsTitle"))}</h3>
        <p class="muted">${escapeHtml(t("noSubjectsText"))}</p>
        <div class="form-actions">
          <button type="button" class="secondary-button" data-run-setup>${escapeHtml(t("openSetup"))}</button>
        </div>
      </div>
    `;
  }

  function renderProfileChips(subjects) {
    if (!subjects.length) return `<span class="profile-chip">${escapeHtml(t("noSubjectChip"))}</span>`;
    return subjects.map((entry) => `
      <span class="profile-chip">${escapeHtml(t(`roles.${entry.role}`))}: ${escapeHtml(entry.department.name)}</span>
    `).join("");
  }

  function renderServiceCard(service) {
    const title = serviceTitle(service);
    const description = localize(service.description);
    const tag = localize(SERVICE_TAGS[service.id] || { de: "", en: "", zh: "" });
    return `
      <a class="service-card" href="${escapeAttr(service.url)}" target="_blank" rel="noopener noreferrer" title="${escapeAttr(description)}" aria-label="${escapeAttr(`${title}: ${description}`)}">
        <span class="icon-wrap">${icon(service.icon)}</span>
        <span class="service-card-content">
          <strong lang="de">${escapeHtml(title)}</strong>
          ${settings.showCardDescriptions ? `<span class="category-pill">${escapeHtml(tag)}</span>` : ""}
        </span>
        <span class="card-action">${icon("external")}<span class="sr-only">${escapeHtml(t("open"))}</span></span>
      </a>
    `;
  }

  function renderSubjectCard(entry) {
    return `
      <a class="subject-card" href="${escapeAttr(entry.department.url)}" target="_blank" rel="noopener noreferrer">
        <span class="icon-wrap">${icon("bookmark")}</span>
        <span class="subject-card-content">
          <strong>${escapeHtml(entry.department.name)}</strong>
          <span class="category-pill">${escapeHtml(t(`roles.${entry.role}`))}</span>
        </span>
        <span class="card-action">${icon("external")}<span class="sr-only">${escapeHtml(t("open"))}</span></span>
      </a>
    `;
  }

  function renderSettingsDialog() {
    const wasOpen = dialog.open;
    dialog.innerHTML = `
      <div class="dialog-shell">
        <div class="dialog-header">
          <div>
            <h2 id="settingsTitle">${escapeHtml(t("settingsTitle"))}</h2>
            <p class="panel-description">${escapeHtml(t("settingsText"))}</p>
          </div>
          <button type="button" class="icon-button" data-close-settings aria-label="${escapeAttr(t("close"))}">${icon("x")}</button>
        </div>
        <div class="dialog-body">
          <section class="settings-section">
            <h3>${escapeHtml(t("language"))}</h3>
            <div class="settings-row">
              <div class="field">
                <label>${escapeHtml(t("language"))}</label>
                <div class="segmented" aria-label="${escapeAttr(t("language"))}">
                  ${LANGUAGES.map((language) => `
                    <button type="button" data-language="${language}" aria-pressed="${settings.language === language}">
                      ${language === "zh" ? "中文" : language.toUpperCase()}
                    </button>
                  `).join("")}
                </div>
              </div>
              <div class="field">
                <label>${escapeHtml(t("theme"))}</label>
                <div class="segmented" aria-label="${escapeAttr(t("theme"))}">
                  ${THEMES.map((theme) => `
                    <button type="button" data-theme-choice="${theme}" aria-pressed="${settings.theme === theme}">
                      ${escapeHtml(t(`themes.${theme}`))}
                    </button>
                  `).join("")}
                </div>
              </div>
            </div>
            <label class="switch-row" for="cardDescriptionsToggle">
              <span>${escapeHtml(t("showCardDescriptions"))}</span>
              <input id="cardDescriptionsToggle" type="checkbox" role="switch" data-toggle-card-descriptions ${settings.showCardDescriptions ? "checked" : ""}>
            </label>
          </section>

          <section class="settings-section">
            <h3>${escapeHtml(t("profileSection"))}</h3>
            <p class="section-copy">${escapeHtml(t("profileSectionText"))}</p>
            <form id="profileForm">
              <div class="settings-row">
                ${renderDepartmentSearch("settings-major", t("majorLabel"), settings.profile.majorId, true)}
                ${renderDepartmentSearch("settings-minor", `${t("minorLabel")} (${t("optional")})`, settings.profile.minorId, true)}
              </div>
              <div class="form-actions">
                <button type="submit" class="primary-button">${escapeHtml(t("saveProfile"))}</button>
                <button type="button" class="secondary-button" data-run-setup>${escapeHtml(t("openSetup"))}</button>
              </div>
            </form>
            <div class="quick-add">
              ${renderDepartmentSearch("settings-add", t("extraSubjects"), null, true)}
              <button type="button" class="secondary-button" data-add-subject-from="settings-add">
                ${icon("plus")}
                <span>${escapeHtml(t("addSelectedSubject"))}</span>
              </button>
            </div>
            <div class="subject-list">${renderSubjectTokens()}</div>
          </section>

          <section class="settings-section">
            <h3>${escapeHtml(t("serviceSection"))}</h3>
            <p class="section-copy">${escapeHtml(t("serviceSectionText"))}</p>
            ${CATEGORY_ORDER.map((category) => `
              <section class="service-control-group" aria-labelledby="settings-services-${category}">
                <h4 id="settings-services-${category}">${escapeHtml(t(`categories.${category}`))}</h4>
                <div class="service-list">${getOrderedServices().filter((service) => service.category === category).map(renderServiceControl).join("")}</div>
              </section>
            `).join("")}
          </section>

          <section class="settings-section">
            <h3>${escapeHtml(t("privacySection"))}</h3>
            <p class="section-copy">${escapeHtml(t("privacyText"))}</p>
            <div class="form-actions">
              <button type="button" class="secondary-button danger-button" data-reset-settings>${escapeHtml(t("resetSettings"))}</button>
              <button type="button" class="secondary-button" data-close-settings>${escapeHtml(t("close"))}</button>
            </div>
          </section>
        </div>
      </div>
    `;
    if (wasOpen) dialog.setAttribute("open", "");
  }

  function renderServiceControl(service, index, services) {
    const checked = !settings.hiddenServiceIds.includes(service.id);
    const title = serviceTitle(service);
    return `
      <div class="service-control" draggable="true" data-drag-service="${escapeAttr(service.id)}">
        <input type="checkbox" data-toggle-service="${escapeAttr(service.id)}" ${checked ? "checked" : ""} aria-label="${escapeAttr(title)}">
        <span class="icon-wrap">${icon(service.icon)}</span>
        <span>
          <strong lang="de">${escapeHtml(title)}</strong>
          <span>${escapeHtml(t(`categories.${service.category}`))}</span>
        </span>
        <span class="service-control-actions">
          <button type="button" class="drag-button" data-move-service="${escapeAttr(service.id)}" data-direction="-1" aria-label="${escapeAttr(`${t("moveUp")}: ${title}`)}" title="${escapeAttr(t("moveUp"))}" ${index === 0 ? "disabled" : ""}>${icon("up")}</button>
          <button type="button" class="drag-button" data-move-service="${escapeAttr(service.id)}" data-direction="1" aria-label="${escapeAttr(`${t("moveDown")}: ${title}`)}" title="${escapeAttr(t("moveDown"))}" ${index === services.length - 1 ? "disabled" : ""}>${icon("down")}</button>
        </span>
      </div>
    `;
  }

  function renderSubjectTokens() {
    const subjects = getSelectedSubjects();
    if (!subjects.length) return "";
    return subjects.map((entry) => `
      <span class="subject-token">
        ${escapeHtml(t(`roles.${entry.role}`))}: ${escapeHtml(entry.department.name)}
        <button type="button" data-remove-subject="${escapeAttr(entry.department.id)}" data-role="${escapeAttr(entry.role)}" aria-label="${escapeAttr(t("remove"))}">
          ${icon("x")}
        </button>
      </span>
    `).join("");
  }

  function renderDepartmentSearch(role, label, selectedId, optional) {
    pendingSelections[role] = selectedId || null;
    const selected = departmentById(selectedId);
    return `
      <div class="field">
        <label for="${escapeAttr(role)}-search">${escapeHtml(label)}</label>
        <div class="combo" data-combo="${escapeAttr(role)}">
          <input
            id="${escapeAttr(role)}-search"
            type="search"
            data-department-input="${escapeAttr(role)}"
            value="${escapeAttr(selected ? selected.name : "")}"
            placeholder="${escapeAttr(t("searchPlaceholder"))}"
            role="combobox"
            aria-expanded="false"
            aria-controls="${escapeAttr(role)}-results"
            autocomplete="off"
          >
          <div class="results" id="${escapeAttr(role)}-results" role="listbox"></div>
        </div>
      </div>
    `;
  }

  function renderPopularButton(id, role) {
    const department = departmentById(id);
    if (!department) return "";
    return `
      <button type="button" class="chip-button" data-select-department="${escapeAttr(id)}" data-target-role="${escapeAttr(role)}">
        ${escapeHtml(department.name)}
      </button>
    `;
  }

  function getOrderedServices() {
    return settings.serviceOrder
      .map((id) => SERVICES.find((service) => service.id === id))
      .filter(Boolean);
  }

  function getSelectedSubjects() {
    const profile = settings.profile;
    const entries = [];
    const seen = new Set();
    [
      [profile.majorId, "major"],
      [profile.minorId, "minor"],
      ...(profile.additionalIds || []).map((id) => [id, "extra"])
    ].forEach(([id, role]) => {
      const department = departmentById(id);
      if (department && !seen.has(department.id)) {
        entries.push({ department, role });
        seen.add(department.id);
      }
    });
    return entries;
  }

  function departmentById(id) {
    return DEPARTMENTS.find((department) => department.id === id) || null;
  }

  function searchDepartments(query) {
    const normalized = normalizeSearch(query);
    const source = normalized
      ? DEPARTMENTS
      : POPULAR_DEPARTMENT_IDS.map(departmentById).filter(Boolean);

    return source
      .map((department) => {
        const haystack = normalizeSearch(`${department.name} ${department.group} ${department.keywords}`);
        let score = 0;
        if (!normalized) score = 1;
        else if (normalizeSearch(department.name) === normalized) score = 100;
        else if (normalizeSearch(department.name).startsWith(normalized)) score = 80;
        else if (haystack.includes(normalized)) score = 50;
        return { department, score };
      })
      .filter((entry) => entry.score > 0)
      .sort((a, b) => b.score - a.score || a.department.name.localeCompare(b.department.name))
      .slice(0, 7)
      .map((entry) => entry.department);
  }

  function renderSuggestions(role, query) {
    const combo = document.querySelector(`[data-combo="${role}"]`);
    if (!combo) return;
    const input = combo.querySelector("[data-department-input]");
    const results = combo.querySelector(".results");
    const matches = searchDepartments(query);

    input.setAttribute("aria-expanded", "true");
    results.classList.add("is-open");
    if (!matches.length) {
      results.innerHTML = `<div class="result-button" role="option">${escapeHtml(t("noResults"))}</div>`;
      return;
    }

    results.innerHTML = matches.map((department) => `
      <button type="button" class="result-button" role="option" data-select-department="${escapeAttr(department.id)}" data-target-role="${escapeAttr(role)}">
        <strong>${escapeHtml(department.name)}</strong>
        <span>${escapeHtml(department.group)}</span>
      </button>
    `).join("");
  }

  function closeSuggestions() {
    document.querySelectorAll(".combo").forEach((combo) => {
      const input = combo.querySelector("[data-department-input]");
      const results = combo.querySelector(".results");
      if (input) input.setAttribute("aria-expanded", "false");
      if (results) {
        results.classList.remove("is-open");
        results.innerHTML = "";
      }
    });
  }

  function selectDepartment(role, id) {
    const department = departmentById(id);
    const input = document.querySelector(`[data-department-input="${role}"]`);
    if (!department || !input) return;
    pendingSelections[role] = department.id;
    input.value = department.name;
    closeSuggestions();
  }

  function resolveDepartmentSelection(role) {
    if (pendingSelections[role]) return pendingSelections[role];
    const input = document.querySelector(`[data-department-input="${role}"]`);
    const query = input ? input.value.trim() : "";
    if (!query) return null;

    const exact = DEPARTMENTS.find((department) => normalizeSearch(department.name) === normalizeSearch(query));
    if (exact) return exact.id;
    const first = searchDepartments(query)[0];
    return first ? first.id : null;
  }

  function completeSetup(allowEmpty) {
    const majorId = resolveDepartmentSelection("setup-major");
    const minorId = resolveDepartmentSelection("setup-minor");
    if (!allowEmpty && !majorId) {
      showToast(t("noMajorToast"));
      const majorInput = document.querySelector('[data-department-input="setup-major"]');
      if (majorInput) majorInput.focus();
      return;
    }

    settings.profile.majorId = majorId;
    settings.profile.minorId = minorId && minorId !== majorId ? minorId : null;
    settings.setupComplete = true;
    settings.editMode = false;
    saveSettings();
    renderShell();
    focusApp();
  }

  function saveProfile() {
    const majorId = resolveDepartmentSelection("settings-major");
    const minorId = resolveDepartmentSelection("settings-minor");
    settings.profile.majorId = majorId;
    settings.profile.minorId = minorId && minorId !== majorId ? minorId : null;
    settings.setupComplete = true;
    saveSettings();
    renderShell();
    showToast(t("savedToast"));
  }

  function addSubjectFrom(role) {
    const id = resolveDepartmentSelection(role);
    const department = departmentById(id);
    if (!department) return;

    const used = new Set([settings.profile.majorId, settings.profile.minorId, ...(settings.profile.additionalIds || [])].filter(Boolean));
    if (used.has(department.id)) {
      showToast(t("duplicateToast"));
      return;
    }

    settings.profile.additionalIds = [...(settings.profile.additionalIds || []), department.id];
    settings.setupComplete = true;
    saveSettings();
    renderShell();
    showToast(t("addedToast"));
  }

  function removeSubject(id, role) {
    if (role === "major") settings.profile.majorId = null;
    if (role === "minor") settings.profile.minorId = null;
    settings.profile.additionalIds = (settings.profile.additionalIds || []).filter((subjectId) => subjectId !== id);
    saveSettings();
    renderShell();
    showToast(t("savedToast"));
  }

  function setLanguage(language) {
    if (!LANGUAGES.includes(language)) return;
    settings.language = language;
    saveSettings();
    renderShell();
  }

  function setTheme(theme) {
    if (!THEMES.includes(theme)) return;
    settings.theme = theme;
    saveSettings();
    renderShell();
  }

  function cycleTheme() {
    const currentIndex = THEMES.indexOf(settings.theme);
    settings.theme = THEMES[(currentIndex + 1) % THEMES.length];
    saveSettings();
    renderShell();
  }

  function moveService(id, direction) {
    const service = SERVICES.find((entry) => entry.id === id);
    if (!service) return;
    const group = getOrderedServices().filter((entry) => entry.category === service.category);
    const index = group.findIndex((entry) => entry.id === id);
    const neighbor = group[index + Number(direction)];
    if (!neighbor) return;
    const order = [...settings.serviceOrder];
    const sourceIndex = order.indexOf(id);
    const targetIndex = order.indexOf(neighbor.id);
    [order[sourceIndex], order[targetIndex]] = [order[targetIndex], order[sourceIndex]];
    settings.serviceOrder = order;
    saveSettings();
    renderShell();
  }

  function canReorderServices(sourceId, targetId) {
    if (!sourceId || !targetId || sourceId === targetId) return false;
    const source = SERVICES.find((service) => service.id === sourceId);
    const target = SERVICES.find((service) => service.id === targetId);
    return Boolean(source && target && source.category === target.category);
  }

  function reorderService(sourceId, targetId) {
    if (!canReorderServices(sourceId, targetId)) return;
    const order = settings.serviceOrder.filter((id) => id !== sourceId);
    const targetIndex = order.indexOf(targetId);
    if (targetIndex < 0) return;
    order.splice(targetIndex, 0, sourceId);
    settings.serviceOrder = order;
    saveSettings();
    renderShell();
  }

  function setServiceVisible(id, visible) {
    const hidden = new Set(settings.hiddenServiceIds);
    if (visible) hidden.delete(id);
    else hidden.add(id);
    settings.hiddenServiceIds = [...hidden].filter((serviceId) => SERVICE_IDS.includes(serviceId));
    saveSettings();
    renderShell();
  }

  function setCardDescriptionsVisible(visible) {
    settings.showCardDescriptions = Boolean(visible);
    saveSettings();
    if (settings.setupComplete) renderDashboard();
    const toggle = document.getElementById("cardDescriptionsToggle");
    if (toggle) toggle.checked = settings.showCardDescriptions;
  }

  function openSettings() {
    if (typeof dialog.showModal === "function" && !dialog.open) {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
  }

  function closeSettingsDialog() {
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
  }

  function focusApp() {
    requestAnimationFrame(() => app.focus({ preventScroll: true }));
  }

  function showToast(message) {
    clearTimeout(toastTimer);
    toastNode.textContent = message;
    toastNode.classList.add("is-visible");
    toastTimer = setTimeout(() => toastNode.classList.remove("is-visible"), 1800);
  }

  function resetSettings() {
    if (!window.confirm(t("resetConfirm"))) return;
    settings = createDefaultSettings();
    saveSettings();
    closeSettingsDialog();
    renderShell();
  }

  function handleClick(event) {
    const selectButton = event.target.closest("[data-select-department]");
    if (selectButton) {
      selectDepartment(selectButton.dataset.targetRole, selectButton.dataset.selectDepartment);
      return;
    }

    const languageButton = event.target.closest("[data-language]");
    if (languageButton) {
      setLanguage(languageButton.dataset.language);
      return;
    }

    const themeButton = event.target.closest("[data-theme-choice]");
    if (themeButton) {
      setTheme(themeButton.dataset.themeChoice);
      return;
    }

    if (event.target.closest("[data-cycle-theme]")) {
      cycleTheme();
      return;
    }

    if (event.target.closest("[data-open-settings]")) {
      openSettings();
      return;
    }

    if (event.target.closest("[data-close-settings]")) {
      closeSettingsDialog();
      return;
    }

    if (event.target.closest("[data-skip-setup]")) {
      completeSetup(true);
      return;
    }

    if (event.target.closest("[data-toggle-edit]")) {
      settings.editMode = !settings.editMode;
      saveSettings();
      renderShell();
      return;
    }

    const addSubject = event.target.closest("[data-add-subject-from]");
    if (addSubject) {
      addSubjectFrom(addSubject.dataset.addSubjectFrom);
      return;
    }

    const removeSubjectButton = event.target.closest("[data-remove-subject]");
    if (removeSubjectButton) {
      removeSubject(removeSubjectButton.dataset.removeSubject, removeSubjectButton.dataset.role);
      return;
    }

    const hideServiceButton = event.target.closest("[data-hide-service]");
    if (hideServiceButton) {
      setServiceVisible(hideServiceButton.dataset.hideService, false);
      return;
    }

    const moveServiceButton = event.target.closest("[data-move-service]");
    if (moveServiceButton) {
      moveService(moveServiceButton.dataset.moveService, moveServiceButton.dataset.direction);
      return;
    }

    if (event.target.closest("[data-run-setup]")) {
      settings.setupComplete = false;
      settings.editMode = false;
      saveSettings();
      closeSettingsDialog();
      renderShell();
      focusApp();
      return;
    }

    if (event.target.closest("[data-reset-settings]")) {
      resetSettings();
      return;
    }

    if (!event.target.closest(".combo")) closeSuggestions();
  }

  function handleInput(event) {
    const input = event.target.closest("[data-department-input]");
    if (!input) return;
    const role = input.dataset.departmentInput;
    pendingSelections[role] = null;
    renderSuggestions(role, input.value);
  }

  function handleFocus(event) {
    const input = event.target.closest("[data-department-input]");
    if (!input) return;
    renderSuggestions(input.dataset.departmentInput, input.value);
  }

  function handleKeydown(event) {
    const input = event.target.closest("[data-department-input]");
    if (!input) return;
    const role = input.dataset.departmentInput;
    if (event.key === "Escape") {
      closeSuggestions();
      return;
    }
    if (event.key === "Enter") {
      const firstOption = document.querySelector(`[data-combo="${role}"] [data-select-department]`);
      if (firstOption) {
        event.preventDefault();
        selectDepartment(role, firstOption.dataset.selectDepartment);
      }
    }
  }

  function handleSubmit(event) {
    if (event.target.id === "setupForm") {
      event.preventDefault();
      completeSetup(false);
      return;
    }

    if (event.target.id === "profileForm") {
      event.preventDefault();
      saveProfile();
    }
  }

  function handleChange(event) {
    const descriptionsToggle = event.target.closest("[data-toggle-card-descriptions]");
    if (descriptionsToggle) {
      setCardDescriptionsVisible(descriptionsToggle.checked);
      return;
    }
    const toggle = event.target.closest("[data-toggle-service]");
    if (toggle) {
      setServiceVisible(toggle.dataset.toggleService, toggle.checked);
    }
  }

  function dragSourceAllowed(target) {
    return target.classList.contains("service-control") || settings.editMode;
  }

  function handleDragStart(event) {
    const source = event.target.closest("[data-drag-service]");
    if (!source || !dragSourceAllowed(source)) return;
    draggedServiceId = source.dataset.dragService;
    source.classList.add("is-dragging");
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", draggedServiceId);
  }

  function handleDragOver(event) {
    const target = event.target.closest("[data-drag-service]");
    if (!target || !canReorderServices(draggedServiceId, target.dataset.dragService)) return;
    event.preventDefault();
    target.classList.add("is-drop-target");
    event.dataTransfer.dropEffect = "move";
  }

  function handleDragLeave(event) {
    const target = event.target.closest("[data-drag-service]");
    if (target) target.classList.remove("is-drop-target");
  }

  function handleDrop(event) {
    const target = event.target.closest("[data-drag-service]");
    if (!target || !draggedServiceId) return;
    event.preventDefault();
    reorderService(draggedServiceId, target.dataset.dragService);
    draggedServiceId = null;
  }

  function handleDragEnd() {
    draggedServiceId = null;
    document.querySelectorAll(".is-dragging, .is-drop-target").forEach((node) => {
      node.classList.remove("is-dragging", "is-drop-target");
    });
  }

  function registerServiceWorker() {
    if (!("serviceWorker" in navigator) || location.protocol === "file:") return;
    navigator.serviceWorker.register("./sw.js").catch((error) => {
      console.info("Service worker registration skipped.", error);
    });
  }

  document.addEventListener("click", handleClick);
  document.addEventListener("input", handleInput);
  document.addEventListener("focusin", handleFocus);
  document.addEventListener("keydown", handleKeydown);
  document.addEventListener("submit", handleSubmit);
  document.addEventListener("change", handleChange);
  document.addEventListener("dragstart", handleDragStart);
  document.addEventListener("dragover", handleDragOver);
  document.addEventListener("dragleave", handleDragLeave);
  document.addEventListener("drop", handleDrop);
  document.addEventListener("dragend", handleDragEnd);

  const colorSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
  if (typeof colorSchemeQuery.addEventListener === "function") {
    colorSchemeQuery.addEventListener("change", applyTheme);
  } else if (typeof colorSchemeQuery.addListener === "function") {
    colorSchemeQuery.addListener(applyTheme);
  }
  window.addEventListener("load", () => {
    document.body.classList.add("app-ready");
  });

  renderShell();
  registerServiceWorker();
})();
