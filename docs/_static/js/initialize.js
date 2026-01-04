// Dependencies: ./utils.js

let mode = getColorMode();
const loadedSvgs = {};

const onDOMContentLoaded = () => {
  preloadFonts();
  rearrangeDom();
  updateEditButtonLabel();
  preloadColorModeIcons();
  cleanSearchInput();
  addHrUnderSearchForm();
  updateMode();
  buildHeader();
  addFooterNote();
  updateFooterButtonIcons();
  toggleMobileMenu({ expanded: false });
  updateFlyoverMenu();
  setTimeout(hideFlyoverMenu, 250);

  const nav = document.querySelector("nav.nav-bar");
  if (nav) {
    nav.style.paddingBottom = "0px"; // fix misaligned nav
  }
};

function main() {
  document.addEventListener("DOMContentLoaded", onDOMContentLoaded);
  document.addEventListener("click", handleGeneralClick);
  document.addEventListener("keydown", handleKeyDown);
}

main();
