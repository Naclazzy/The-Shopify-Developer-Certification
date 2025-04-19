const calculateHeaderHeight = () => {
  const header = document.querySelector("header");
  const headerHeight = header.offsetHeight;
  return headerHeight;
};

const isDesktop = () => {
  return window.innerWidth > 1024;
};
// TOC - Table of Contents
const setTocTop = () => {
  const nav = document.querySelector(".content-navigation");

  if (!nav) return;

  if (!isDesktop()) {
    nav.style.top = "0px";
    return;
  }

  const headerHeight = calculateHeaderHeight();
  nav.style.top = `${headerHeight}px`;
};

window.addEventListener("resize", setTocTop);

setTocTop();
