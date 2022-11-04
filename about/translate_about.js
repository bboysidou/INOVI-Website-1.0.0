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
    bigTitleH3: "About",
    bigDesc:
      "We design and develop web and mobile apps for startups, small and medium businesses",
    // ------------------------------------------
    // goal section
    // ------------------------------------------
    estimateBtnLink: "Estimate Project",
    aboutDescriptionTitle: "Our Goal",
    aboutDescription1:
      "We like to see our clients as partners and we do our best to deliver the product they and their users are 100% satisfied with. Agile principles, ongoing communication, transparency are the cornerstones of each of our projects.",
    // ------------------------------------------
    // engagement section
    // ------------------------------------------
    estimateEngagementBtnLink: "Estimate Project",
    engagementTitle: "Engagement",
    engagementDesc:
      "Even though our team members have the freedom to choose from where to work, our offices are never empty and always open not only to the employees but to our clients as well.",

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
    bigTitleH3: "À propos de",
    bigDesc:
      "Nous concevons et développons des applications web et mobiles pour les startups, les petites et moyennes entreprises",
    // ------------------------------------------
    // goal section
    // ------------------------------------------
    estimateBtnLink: "Estimer le projet",
    aboutDescriptionTitle: "Notre objectif",
    aboutDescription1:
      "Nous aimons voir nos clients comme des partenaires et nous faisons de notre mieux pour fournir le produit dont eux et leurs utilisateurs sont satisfaits à 100 %. Principes agiles, communication permanente, transparence sont les pierres angulaires de chacun de nos projets.",
    // ------------------------------------------
    // engagement section
    // ------------------------------------------
    estimateEngagementBtnLink: "Estimer le projet",
    engagementTitle: "Engagement",
    engagementDesc:
      "Même si les membres de notre équipe ont la liberté de choisir où travailler, nos bureaux ne sont jamais vides et toujours ouverts non seulement aux employés mais aussi à nos clients.",
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
const bigTitleH3El = document.querySelector(".big-title-h3");
const bigDescEl = document.querySelector(".big-desc");
// ------------------------------------------
// goal section
// ------------------------------------------
const estimateBtnLinkEl = document.querySelector(".estimate-btn-link");
const aboutDescriptionTitleEl = document.querySelector(
  ".about-description-title"
);
const aboutDescription1El = document.querySelector(".about-description-1");
// ------------------------------------------
// engagement section
// ------------------------------------------
const estimateEngagementBtnLinkEl = document.querySelector(
  ".estimate-engagement-btn-link"
);
const engagementTitleEl = document.querySelector(".engagement-title");
const engagementDescEl = document.querySelector(".engagement-desc");
// ------------------------------------------
// footer
// ------------------------------------------
const copyEl = document.querySelector(".copy-right-p");
const privacyEl = document.querySelector(".policy-p");
// ------------------------------------------
// INIT
// ------------------------------------------
navLink1.textContent = data[language].nav_link_1;
// navLink2.textContent = data[language].nav_link_2;
navLink3.textContent = data[language].nav_link_3;
navLink4.textContent = data[language].nav_link_4;
navLink5.textContent = data[language].nav_link_5;
// ------------------------------------------
// hero section
// ------------------------------------------
bigTitleH3El.textContent = data[language].bigTitleH3;
bigDescEl.textContent = data[language].bigDesc;
// ------------------------------------------
// goal section
// ------------------------------------------
// estimateBtnLinkEl.textContent = data[language].estimateBtnLink;
aboutDescriptionTitleEl.textContent = data[language].aboutDescriptionTitle;
aboutDescription1El.textContent = data[language].aboutDescription1;
// ------------------------------------------
// engagement section
// ------------------------------------------
// estimateEngagementBtnLinkEl.textContent = data[attr].estimateEngagementBtnLink;
engagementTitleEl.textContent = data[language].engagementTitle;
engagementDescEl.textContent = data[language].engagementDesc;

// ------------------------------------------
// footer
// ------------------------------------------
copyEl.textContent = data[language].copyRightTxt;
privacyEl.textContent = data[language].policyTxt;
// ------------------------------------------

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
    bigTitleH3El.textContent = data[attr].bigTitleH3;
    bigDescEl.textContent = data[attr].bigDesc;
    // ------------------------------------------
    // goal section
    // ------------------------------------------
    // estimateBtnLinkEl.textContent = data[attr].estimateBtnLink;
    aboutDescriptionTitleEl.textContent = data[attr].aboutDescriptionTitle;
    aboutDescription1El.textContent = data[attr].aboutDescription1;
    // ------------------------------------------
    // engagement section
    // ------------------------------------------
    // estimateEngagementBtnLinkEl.textContent =
    // data[attr].estimateEngagementBtnLink;
    engagementTitleEl.textContent = data[attr].engagementTitle;
    engagementDescEl.textContent = data[attr].engagementDesc;

    // ------------------------------------------
    // footer
    // ------------------------------------------
    copyEl.textContent = data[attr].copyRightTxt;
    privacyEl.textContent = data[attr].policyTxt;
  });
});
