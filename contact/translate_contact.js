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
    bigTitle1: "Interested?",
    bigTitle2: "Let’s talk!",
    bigDesc:
      "Just fill this simple form in and we will contact you promptly to discuss your project. Hate forms? Drop us a line at  ",
    // ------------------------------------------
    // estimate section
    // ------------------------------------------
    estimateBtnLink: "Estimate Project",
    estimateTitle: "Ready to proceed with business?",
    estimateDesc:
      "Fill out the form: tell us about your business, tasks and deadlines, and we'll get back to you soon to discuss the details.",
    estimateToolTitle: "Work with us",
    estimateToolNeeds: "I need",
    estimateToolBudget: "Budget",
    inputsOnePhone: "Phone",
    inputsOneDirectMsg: "Direct Message",
    estimateToolAttachment: "Add Attachments",
    estimateToolSend: "send",
    // ------------------------------------------
    // footer
    // ------------------------------------------
    copyRightTxt: "inovi group. All rights reserved.",
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
    bigTitle1: "Intéressé?",
    bigTitle2: "Parlons!",
    bigDesc:
      "Remplissez simplement ce formulaire et nous vous contacterons rapidement pour discuter de votre projet. Des formes de haine ? Écrivez-nous à",
    // ------------------------------------------
    // estimate section
    // ------------------------------------------
    estimateBtnLink: "Estimer le projet",
    estimateTitle: "Prêt à aller de l'avant ?",
    estimateDesc:
      "Remplissez le formulaire : parlez-nous de votre entreprise, de vos tâches et de vos échéances, et nous vous répondrons rapidement pour discuter des détails.",
    estimateToolTitle: "Travaille avec nous",
    estimateToolNeeds: "j'ai besoin",
    estimateToolBudget: "Budget",
    inputsOnePhone: "Telephone",
    inputsOneDirectMsg: "Message Direct",
    estimateToolAttachment: "Ajouter des pièces jointes",
    estimateToolSend: "Envoyer",

    // ------------------------------------------
    // footer
    // ------------------------------------------
    copyRightTxt: "inovi group. Tous les droits réservés.",
    policyTxt: "Politique de confidentialité",
  },
};

const lang = document.querySelector(".lang").querySelectorAll("a");
const navLink1 = document.querySelector(".nav-link-1");
const navLink2 = document.querySelector(".nav-link-2");
const navLink3 = document.querySelector(".nav-link-3");
const navLink4 = document.querySelector(".nav-link-4");
const navLink5 = document.querySelector(".nav-link-5");
// ------------------------------------------
// hero section
// ------------------------------------------
const bigTitle1El = document.querySelector(".big-title-1");
const bigTitle2El = document.querySelector(".big-title-2");
const bigDescEl = document.querySelector(".description-txt");
// ------------------------------------------
// estimate section
// ------------------------------------------

estimateBtnLinkEl = document.querySelector(".estimate-btn-link");
estimateTitleEl = document.querySelector(".estimate-title");
estimateDescEl = document.querySelector(".estimate-desc");
estimateToolTitleEl = document.querySelector(".estimate-tool-title");
estimateToolNeedsEl = document.querySelector(".estimate-tool-needs");
estimateToolBudgetEl = document.querySelector(".estimate-tool-budget");
inputsOnePhoneEl = document.querySelector(".inputs-one-phone");
inputsOneDirectMsgEl = document.querySelector(".inputs-one-direct-msg");
estimateToolAttachmentEl = document.querySelector(".estimate-tool-attachment");
estimateToolSendEl = document.querySelector(".estimate-tool-send");
// ------------------------------------------
// footer
// ------------------------------------------
const copyEl = document.querySelector(".copy-right-p");
const privacyEl = document.querySelector(".policy-p");
// ------------------------------------------
// INIT
// ------------------------------------------
navLink1.textContent = data[language].nav_link_1;
navLink2.textContent = data[language].nav_link_2;
navLink3.textContent = data[language].nav_link_3;
navLink4.textContent = data[language].nav_link_4;
navLink5.textContent = data[language].nav_link_5;
// ------------------------------------------
// hero section
// ------------------------------------------
bigTitle1El.textContent = data[language].bigTitle1;
bigTitle2El.textContent = data[language].bigTitle2;
bigDescEl.textContent = data[language].bigDesc;
// ------------------------------------------
// estimate section
// ------------------------------------------
// estimateBtnLinkEl.textContent = data[language].estimateBtnLink;
estimateTitleEl.textContent = data[language].estimateTitle;
estimateDescEl.textContent = data[language].estimateDesc;
estimateToolTitleEl.textContent = data[language].estimateToolTitle;
estimateToolNeedsEl.textContent = data[language].estimateToolNeeds;
estimateToolBudgetEl.textContent = data[language].estimateToolBudget;
inputsOnePhoneEl.setAttribute("placeholder", data[language].inputsOnePhone);
inputsOneDirectMsgEl.setAttribute(
  "placeholder",
  data[language].inputsOneDirectMsg
);
estimateToolAttachmentEl.textContent = data[language].estimateToolAttachment;
estimateToolSendEl.textContent = data[language].estimateToolSend;

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
    navLink2.textContent = data[attr].nav_link_2;
    navLink3.textContent = data[attr].nav_link_3;
    navLink4.textContent = data[attr].nav_link_4;
    navLink5.textContent = data[attr].nav_link_5;
    // ------------------------------------------
    // hero section
    // ------------------------------------------
    bigTitle1El.textContent = data[attr].bigTitle1;
    bigTitle2El.textContent = data[attr].bigTitle2;
    bigDescEl.textContent = data[attr].bigDesc;
    // ------------------------------------------
    // estimate section
    // ------------------------------------------
    // estimateBtnLinkEl.textContent = data[attr].estimateBtnLink;
    estimateTitleEl.textContent = data[attr].estimateTitle;
    estimateDescEl.textContent = data[attr].estimateDesc;
    estimateToolTitleEl.textContent = data[attr].estimateToolTitle;
    estimateToolNeedsEl.textContent = data[attr].estimateToolNeeds;
    estimateToolBudgetEl.textContent = data[attr].estimateToolBudget;
    inputsOnePhoneEl.setAttribute("placeholder", data[attr].inputsOnePhone);
    inputsOneDirectMsgEl.setAttribute(
      "placeholder",
      data[attr].inputsOneDirectMsg
    );
    estimateToolAttachmentEl.textContent = data[attr].estimateToolAttachment;
    estimateToolSendEl.textContent = data[attr].estimateToolSend;

    // ------------------------------------------
    // footer
    // ------------------------------------------
    copyEl.textContent = data[attr].copyRightTxt;
    privacyEl.textContent = data[attr].policyTxt;
  });
});
