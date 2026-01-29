const overlay = document.getElementById("modalOverlay");
const content = document.getElementById("modalContent");
const closeBtn = document.getElementById("modalClose");

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    const templateId = card.getAttribute("data-modal");
    const template = document.getElementById(templateId);
    if (!template) return;

    content.innerHTML = "";
    content.appendChild(template.content.cloneNode(true));
    overlay.classList.remove("hidden");
  });
});

closeBtn.addEventListener("click", () => {
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", e => {
  if (e.target === overlay) {
    overlay.classList.add("hidden");
  }
});
