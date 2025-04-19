const handleScrollingToSection = () => {
  const sections = Array.from(
    document.querySelectorAll(".article-template__section__inner")
  );

  sections.forEach((section) => {
    const sectionId = section.id;
    const sectionLink = document.querySelector(`a[href="#${sectionId}"]`);

    if (sectionLink && section) {
      sectionLink.addEventListener("click", () => {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "start",
        });
      });
    }
  });
};

handleScrollingToSection();
