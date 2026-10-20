document.addEventListener("DOMContentLoaded", () => {
  // Universelle Helferfunktion zur Vermeidung jeglicher Code-Redundanz
  const createEl = (tag, className = "", text = "", children = []) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text) el.textContent = text;
    children.forEach((child) => el.appendChild(child));
    return el;
  };

  // Generiert das Creator-Banner dynamisch und fügt es in #level2 ein
  const targetContainer = document.getElementById("level2");
  if (!targetContainer) return;

  const banner = createEl("div", "creator-banner", "", [
    createEl("div", "creator-info", "", [
      createEl("h2", "", "Gesetzestexte lesefreundlich gestaltet ", [
        createEl("span", "", "von Ivan"),
      ]),
    ]),
    createEl("div", "creator-tag", "Ivans Bahnsachen"),
  ]);

  // Als erstes Element in #level2 einfügen
  targetContainer.insertBefore(banner, targetContainer.firstChild);
});