if (
  localStorage.getItem("language") !== "english" &&
  localStorage.getItem("language") !== "french"
) {
  localStorage.setItem("language", "english");
}
const language = localStorage.getItem("language");
let data = {
  english: {
    nav_link_1: "Services",
    nav_link_2: "Products",
    nav_link_3: "Contact",
    nav_link_4: "About",
    nav_link_5: "Estimate Project",
    // ------------------------------------------
    // hero section
    // ------------------------------------------
    bigTitle: "Design. Development. Consulting.",
    bigDescriptionTitle: "What We Do",
    bigDescription:
      "We design, build and maintain apps since 2019. We run a full product lifecycle from planning and idea evaluation to implementation.",
    // ------------------------------------------
    // design section
    // ------------------------------------------
    designTitle:
      "Establishing the right visual connection with your customers and users by creating eye-catching and memorable designs as well as meaningful user experience.",
    designCardTitle1: "Websites and Platforms",
    designCardBody1:
      "We design projects of different complexity and size. No matter if it is a simple single-page website or a complex admin panel with numerous dashboards – we will make it visually pleasing, consistent, and user-friendly",

    designCardTitle2: "Mobile Apps",
    designCardBody2:
      "We don’t simply design beautiful interfaces but craft them in accordance with each platforms’ guidelines to make the use of your app intuitive to users",

    designCardTitle3: "Strategy and Branding",
    designCardBody3:
      "We identify your brand by developing a logo, corporate identity, user manuals, any mockups, and souvenir products",
    designCardTitle4: "Design Concept",
    designCardBody4:
      "We’ll make a design concept for a websites or mobile application to attract your audience and make your awesome product even more awesome",
    // ------------------------------------------
    // development section
    // ------------------------------------------
    developmentTitleBig: "Development",
    developmentTitle:
      "Implementing your project with scalable architecture design, modern technology, and an excellent level of data security.",

    developmentCardTitle1: "Web Services",
    developmentCardBody1:
      "We create web products tailored exclusively for your business goals, be it a high converting landing page, a complex web app to automate your processes or a high-load platform with sensitive data.",

    developmentCardTitle2: "Native Mobile Development",
    developmentCardBody2:
      "We build custom mobile applications for both iOS (with Swift) and Android (with Kotlin) according to Apple and Google guidelines and can get them released to stores quickly.",

    developmentCardTitle3: "Hybrid Mobile Development",
    developmentCardBody3:
      "with this approach we develop a single app for use on multiple platforms like Android and iOS (with React Native and Flutter).",

    developmentCardTitle4: "Quality Assurance",
    developmentCardBody4:
      "We safeguard your product’s quality and succes and with manual and automated testing",
    // ------------------------------------------
    // tech section
    // ------------------------------------------
    techTitle: "DIGITAL TECHNOLOGY INTEGRATION",

    techCard1:
      "The “always on” economy requires that businesses meet the demands of digital customers while at the same time making a successful  to a digital business. inovi group’s technology consulting team seamlessly integrates all IT components, such as analytics, mobile and CRM, so our can become a connected digital enterprise.",

    techCard2:
      "Digital helps our clients to increase profitable growth and customer satisfaction across segments of their business, including: Customer experience, sales and marketing, customer acquisition and campaign management,  management, commerce, and customer service and loyalty.",

    techCard3:
      "inovi group offers complete, integrated digital business and technology services—digital marketing, mobility and analytics—to deliver tangible results for the virtual world.",
    // ------------------------------------------
    // work section
    // ------------------------------------------
    workBigTitle: "BENEFITS OF WORKING WITH US",
    workTitle:
      "We love our jobs, we love our customers, and we love providing absolutely outstanding customer service.",

    workCardTitle1: "Flexible work terms",
    workCardBody1:
      "We can adjust our terms according to your project needs and goals – fixed budget basis, Time and Materials framework, weekly budget, etc. Let’s discuss and find what would work best for you.",

    workCardTitle2: "Full spectrum of services",
    workCardBody2:
      "From an idea’s evaluation to its implementation. From a quick logo design concept to a complex development project.",

    workCardTitle3: "We don’t outsource work to others",
    workCardBody3:
      "All team members are our full-time employees. It allows us to be sure of the quality of work we deliver, stick to internal standards, and decrease the cost of communication.",

    workCardTitle4: "We take the most out of technology",
    workCardBody4:
      "Unit and integration testing, automated CI/CD workflow, free access to our project -management system as well as development and staging environments – these are only some of the bonuses of working with us.",
    workEstimateTxt: "Now let’s see your project together...",
    workEstimateBtn: "Estimate project",
    // ------------------------------------------
    // footer
    // ------------------------------------------
    copyRightTxt: "2021 inovi group. All rights reserved.",
    policyTxt: "Privacy Policy",
  },
  // -----------------------------------------------------------
  // -----------------------------------------------------------
  // French
  // -----------------------------------------------------------
  // -----------------------------------------------------------
  french: {
    nav_link_1: "Nos Services",
    nav_link_2: "Nos Produits",
    nav_link_3: "Contact",
    nav_link_4: "À propos de nous",
    nav_link_5: "Estimer le projet",
    // ------------------------------------------
    // hero section
    // ------------------------------------------
    bigTitle: "Design. Développement. Consultant.",
    bigDescriptionTitle: "Ce que nous faisons",
    bigDescription:
      "Nous concevons, construisons et maintenons des applications depuis 2019. Nous gérons un cycle de vie complet du produit, de la planification et de l'évaluation des idées à la mise en œuvre.",
    // ------------------------------------------
    // design section
    // ------------------------------------------
    designTitle:
      "Établir la bonne connexion visuelle avec vos clients et utilisateurs en créant des designs accrocheurs et mémorables ainsi qu'une expérience utilisateur significative.",
    designCardTitle1: "Sites Web et plateformes",
    designCardBody1:
      "Nous concevons des projets de complexité et de taille différentes. Qu'il s'agisse d'un simple site Web d'une seule page ou d'un panneau d'administration complexe avec de nombreux tableaux de bord, nous le rendrons visuellement agréable, cohérent et convivial.",
    designCardTitle2: "Application mobile",
    designCardBody2:
      "Nous ne concevons pas simplement de belles interfaces, mais les concevons conformément aux directives de chaque plate-forme pour rendre l'utilisation de votre application intuitive pour les utilisateurs",
    designCardTitle3: "Stratégie et image de marque",
    designCardBody3:
      "Nous identifions votre marque en développant un logo, une identité visuelle, des manuels d'utilisation, des maquettes et des produits souvenirs",
    designCardTitle4: "Concept design",
    designCardBody4:
      "Nous allons créer un concept de design pour un site Web ou une application mobile afin d'attirer votre public et de rendre votre produit génial encore plus génial",
    // ------------------------------------------
    // development section
    // ------------------------------------------
    developmentTitleBig: "Développement",
    developmentTitle:
      "Mettre en œuvre votre projet avec une conception d'architecture évolutive, une technologie moderne et un excellent niveau de sécurité des données.",

    developmentCardTitle1: "Services Web",
    developmentCardBody1:
      "Nous créons des produits Web adaptés exclusivement à vos objectifs commerciaux, qu'il s'agisse d'une page de destination à fort taux de conversion, d'une application Web complexe pour automatiser vos processus ou d'une plate-forme à forte charge avec des données sensibles.",

    developmentCardTitle2: "Développement mobile natif",
    developmentCardBody2:
      "Nous créons des applications mobiles personnalisées pour iOS (avec Swift) et Android (avec Kotlin) conformément aux directives d'Apple et de Google et pouvons les publier rapidement dans les magasins.",

    developmentCardTitle3: "Développement mobile hybride",
    developmentCardBody3:
      "avec cette approche, nous développons une seule application à utiliser sur plusieurs plates-formes comme Android et iOS (avec React Native et Flutter).",

    developmentCardTitle4: "Assurance qualité",
    developmentCardBody4:
      "Nous protégeons la qualité et le succès de votre produit et avec des tests manuels et automatisés",
    // ------------------------------------------
    // tech section
    // ------------------------------------------
    techTitle: "INTÉGRATION DE LA TECHNOLOGIE NUMÉRIQUE",

    techCard1:
      "L'économie « always on » exige que les entreprises répondent aux demandes des clients numériques tout en effectuant une transition réussie vers une entreprise numérique. L'équipe de conseil en technologie du groupe inovi intègre de manière transparente tous les composants informatiques, tels que l'analyse, le mobile et le CRM, afin que nos clients puissent devenir une entreprise numérique connectée.",

    techCard2:
      "Le numérique aide nos clients à accroître leur croissance rentable et la satisfaction de leurs clients dans tous les segments de leur entreprise, notamment : l'expérience client, les ventes et le marketing, l'acquisition de clients et la gestion de campagnes, la gestion de contenu, le commerce, le service client et la fidélisation.",

    techCard3:
      "Le groupe inovi propose des services commerciaux et technologiques numériques complets et intégrés (marketing numérique, mobilité et analyse) pour fournir des résultats tangibles pour le monde virtuel.",
    // ------------------------------------------
    // work section
    // ------------------------------------------
    workBigTitle: "AVANTAGES DE TRAVAILLER AVEC NOUS",
    workTitle:
      "Nous aimons notre travail, nous aimons nos clients et nous aimons fournir un service client absolument exceptionnel.",

    workCardTitle1: "Conditions de travail flexibles",
    workCardBody1:
      "Nous pouvons ajuster nos conditions en fonction des besoins et des objectifs de votre projet - base de budget fixe, cadre Temps et Matériel, budget hebdomadaire, etc. Discutons et trouvons ce qui fonctionnerait le mieux pour vous.",

    workCardTitle2: "Gamme complète de services",
    workCardBody2:
      "De l'évaluation d'une idée à sa mise en œuvre. D'un concept de conception de logo rapide à un projet de développement complexe.",

    workCardTitle3: "Nous ne sous-traitons pas le travail à d'autres",
    workCardBody3:
      "Tous les membres de l'équipe sont nos employés à temps plein. Cela nous permet d'être sûrs de la qualité du travail que nous livrons, de respecter les normes internes et de diminuer le coût de la communication.",

    workCardTitle4: "Nous tirons le meilleur parti de la technologie",
    workCardBody4:
      "Tests unitaires et d'intégration, flux de travail CI/CD automatisé, accès gratuit à notre système de gestion de projet ainsi qu'aux environnements de développement et de mise en scène - ce ne sont que quelques-uns des avantages de travailler avec nous.",

    workEstimateTxt: "Voyons maintenant ensemble votre projet...",
    workEstimateBtn: "Estimer le projet",
    // ------------------------------------------
    // footer
    // ------------------------------------------
    copyRightTxt: "2021 inovi group. Tous les droits réservés.",
    policyTxt: "Politique de confidentialité",
  },
};

const lang = document.querySelector(".lang").querySelectorAll("a");
const navLink1 = document.querySelector(".nav-link-1");
// const navLink2 = document.querySelector(".nav-link-2");
const navLink3 = document.querySelector(".nav-link-3");
const navLink4 = document.querySelector(".nav-link-4");
const navLink5 = document.querySelector(".nav-link-5");
// ------------------------------------------
// hero section
// ------------------------------------------
const bigTitleH3 = document.querySelector(".big-title-h3");
const bigDescTitle = document.querySelector(".big-desc-h4");
const bigDesc = document.querySelector(".big-desc-p");
// ------------------------------------------
// design section
// ------------------------------------------
const designTitleEl = document.querySelector(".design-title-p");
const designCardTitle1El = document.querySelector(".design-card-title-1");
const designCardTitle2El = document.querySelector(".design-card-title-2");
const designCardTitle3El = document.querySelector(".design-card-title-3");
const designCardTitle4El = document.querySelector(".design-card-title-4");
const designCardBody1El = document.querySelector(".design-card-body-1");
const designCardBody2El = document.querySelector(".design-card-body-2");
const designCardBody3El = document.querySelector(".design-card-body-3");
const designCardBody4El = document.querySelector(".design-card-body-4");
// ------------------------------------------
// development section
// ------------------------------------------
const developmentTitleBigEl = document.querySelector(".development-title-big");
const developmentTitleEl = document.querySelector(".development-title-p");
const developmentCardTitle1El = document.querySelector(
  ".development-card-title-1"
);
const developmentCardTitle2El = document.querySelector(
  ".development-card-title-2"
);
const developmentCardTitle3El = document.querySelector(
  ".development-card-title-3"
);
const developmentCardTitle4El = document.querySelector(
  ".development-card-title-4"
);
const developmentCardBody1El = document.querySelector(
  ".development-card-body-1"
);
const developmentCardBody2El = document.querySelector(
  ".development-card-body-2"
);
const developmentCardBody3El = document.querySelector(
  ".development-card-body-3"
);
const developmentCardBody4El = document.querySelector(
  ".development-card-body-4"
);
// ------------------------------------------
// tech section
// ------------------------------------------
const techTitleEl = document.querySelector(".tech-title-big");
const techCard1El = document.querySelector(".tech-card-1");
const techCard2El = document.querySelector(".tech-card-2");
const techCard3El = document.querySelector(".tech-card-3");
// ------------------------------------------
// work section
// ------------------------------------------
const workBigTitleEl = document.querySelector(".working-with-us-title-big");
const workTitleEl = document.querySelector(
  ".working-with-us-description-title"
);
const workCardTitle1El = document.querySelector(
  ".working-with-us-card-title-1"
);
const workCardBody1El = document.querySelector(".working-with-us-card-body-1");
const workCardTitle2El = document.querySelector(
  ".working-with-us-card-title-2"
);
const workCardBody2El = document.querySelector(".working-with-us-card-body-2");
const workCardTitle3El = document.querySelector(
  ".working-with-us-card-title-3"
);
const workCardBody3El = document.querySelector(".working-with-us-card-body-3");
const workCardTitle4El = document.querySelector(
  ".working-with-us-card-title-4"
);
const workCardBody4El = document.querySelector(".working-with-us-card-body-4");

const workEstimateTxtEl = document.querySelector(".estimate-txt-p");
const workEstimateBtnEl = document.querySelector(".estimate-txt-btn");
// ------------------------------------------
// footer
// ------------------------------------------
const copyEl = document.querySelector(".copy-right-p");
const privacyEl = document.querySelector(".policy-p");
// -----------------------------------------------
// INIT
// -----------------------------------------------
navLink1.textContent = data[language].nav_link_1;
// navLink2.textContent = data[language].nav_link_2;
navLink3.textContent = data[language].nav_link_3;
navLink4.textContent = data[language].nav_link_4;
navLink5.textContent = data[language].nav_link_5;
// ------------------------------------------
// hero section
// ------------------------------------------
bigTitleH3.textContent = data[language].bigTitle;
bigDescTitle.textContent = data[language].bigDescriptionTitle;
bigDesc.textContent = data[language].bigDescription;
// ------------------------------------------
// design section
// ------------------------------------------
designTitleEl.textContent = data[language].designTitle;
designCardTitle1El.textContent = data[language].designCardTitle1;
designCardTitle2El.textContent = data[language].designCardTitle2;
designCardTitle3El.textContent = data[language].designCardTitle3;
designCardTitle4El.textContent = data[language].designCardTitle4;
designCardBody1El.textContent = data[language].designCardBody1;
designCardBody2El.textContent = data[language].designCardBody2;
designCardBody3El.textContent = data[language].designCardBody3;
designCardBody4El.textContent = data[language].designCardBody4;
// ------------------------------------------
// development section
// ------------------------------------------
developmentTitleBigEl.textContent = data[language].developmentTitleBig;
developmentTitleEl.textContent = data[language].developmentTitle;
developmentCardTitle1El.textContent = data[language].developmentCardTitle1;
developmentCardBody1El.textContent = data[language].developmentCardBody1;
developmentCardTitle2El.textContent = data[language].developmentCardTitle2;
developmentCardBody2El.textContent = data[language].developmentCardBody2;
developmentCardTitle3El.textContent = data[language].developmentCardTitle3;
developmentCardBody3El.textContent = data[language].developmentCardBody3;
developmentCardTitle4El.textContent = data[language].developmentCardTitle4;
developmentCardBody4El.textContent = data[language].developmentCardBody4;
// ------------------------------------------
// tech section
// ------------------------------------------
techTitleEl.textContent = data[language].techTitle;
techCard1El.textContent = data[language].techCard1;
techCard2El.textContent = data[language].techCard2;
techCard3El.textContent = data[language].techCard3;
// ------------------------------------------
// work section
// ------------------------------------------
workBigTitleEl.textContent = data[language].workBigTitle;
workTitleEl.textContent = data[language].workTitle;
workCardTitle1El.textContent = data[language].workCardTitle1;
workCardBody1El.textContent = data[language].workCardBody1;
workCardTitle2El.textContent = data[language].workCardTitle2;
workCardBody2El.textContent = data[language].workCardBody2;
workCardTitle3El.textContent = data[language].workCardTitle3;
workCardBody3El.textContent = data[language].workCardBody3;
workCardTitle4El.textContent = data[language].workCardTitle4;
workCardBody4El.textContent = data[language].workCardBody4;

workEstimateTxtEl.textContent = data[language].workEstimateTxt;
workEstimateBtnEl.textContent = data[language].workEstimateBtn;
// ------------------------------------------
// footer
// ------------------------------------------
copyEl.textContent = data[language].copyRightTxt;
privacyEl.textContent = data[language].policyTxt;

// -----------------------------------------------

lang.forEach((el) => {
  el.addEventListener("click", () => {
    localStorage.setItem("language", el.getAttribute("language"));
    const attr = el.getAttribute("language");
    navLink1.textContent = data[attr].nav_link_1;
    // navLink2.textContent = data[attr].nav_link_2;
    navLink3.textContent = data[attr].nav_link_3;
    navLink4.textContent = data[attr].nav_link_4;
    navLink5.textContent = data[attr].nav_link_5;
    // ------------------------------------------
    // hero section
    // ------------------------------------------
    bigTitleH3.textContent = data[attr].bigTitle;
    bigDescTitle.textContent = data[attr].bigDescriptionTitle;
    bigDesc.textContent = data[attr].bigDescription;
    // ------------------------------------------
    // design section
    // ------------------------------------------
    designTitleEl.textContent = data[attr].designTitle;
    designCardTitle1El.textContent = data[attr].designCardTitle1;
    designCardTitle2El.textContent = data[attr].designCardTitle2;
    designCardTitle3El.textContent = data[attr].designCardTitle3;
    designCardTitle4El.textContent = data[attr].designCardTitle4;
    designCardBody1El.textContent = data[attr].designCardBody1;
    designCardBody2El.textContent = data[attr].designCardBody2;
    designCardBody3El.textContent = data[attr].designCardBody3;
    designCardBody4El.textContent = data[attr].designCardBody4;
    // ------------------------------------------
    // development section
    // ------------------------------------------
    developmentTitleBigEl.textContent = data[attr].developmentTitleBig;
    developmentTitleEl.textContent = data[attr].developmentTitle;
    developmentCardTitle1El.textContent = data[attr].developmentCardTitle1;
    developmentCardBody1El.textContent = data[attr].developmentCardBody1;
    developmentCardTitle2El.textContent = data[attr].developmentCardTitle2;
    developmentCardBody2El.textContent = data[attr].developmentCardBody2;
    developmentCardTitle3El.textContent = data[attr].developmentCardTitle3;
    developmentCardBody3El.textContent = data[attr].developmentCardBody3;
    developmentCardTitle4El.textContent = data[attr].developmentCardTitle4;
    developmentCardBody4El.textContent = data[attr].developmentCardBody4;
    // ------------------------------------------
    // tech section
    // ------------------------------------------
    techTitleEl.textContent = data[attr].techTitle;
    techCard1El.textContent = data[attr].techCard1;
    techCard2El.textContent = data[attr].techCard2;
    techCard3El.textContent = data[attr].techCard3;
    // ------------------------------------------
    // work section
    // ------------------------------------------
    workBigTitleEl.textContent = data[attr].workBigTitle;
    workTitleEl.textContent = data[attr].workTitle;
    workCardTitle1El.textContent = data[attr].workCardTitle1;
    workCardBody1El.textContent = data[attr].workCardBody1;
    workCardTitle2El.textContent = data[attr].workCardTitle2;
    workCardBody2El.textContent = data[attr].workCardBody2;
    workCardTitle3El.textContent = data[attr].workCardTitle3;
    workCardBody3El.textContent = data[attr].workCardBody3;
    workCardTitle4El.textContent = data[attr].workCardTitle4;
    workCardBody4El.textContent = data[attr].workCardBody4;

    workEstimateTxtEl.textContent = data[attr].workEstimateTxt;
    workEstimateBtnEl.textContent = data[attr].workEstimateBtn;
    // ------------------------------------------
    // footer
    // ------------------------------------------
    copyEl.textContent = data[attr].copyRightTxt;
    privacyEl.textContent = data[attr].policyTxt;
  });
});
