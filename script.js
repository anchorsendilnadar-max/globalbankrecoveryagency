// GBRA - Global Bank Recovery Agency

// Mobile menu
const menuBtn = document.getElementById("menu");
const nav = document.getElementById("nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  document.querySelectorAll("#nav a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  });
}

// Footer year
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// Case enquiry form
const caseForm = document.getElementById("caseForm");

if (caseForm) {
  caseForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(caseForm);

    const client = formData.get("client") || "";
    const caseRef = formData.get("case") || "New Enquiry";
    const asset = formData.get("asset") || "";
    const location = formData.get("location") || "";
    const details = formData.get("details") || "";

    const subject = encodeURIComponent(
      "GBRA Case Enquiry - " + caseRef
    );

    const body = encodeURIComponent(
      `Client / Organization: ${client}
Case / Reference: ${caseRef}
Asset Type: ${asset}
Location: ${location}

Case Details:
${details}`
    );

    const formMsg = document.getElementById("formMsg");

    if (formMsg) {
      formMsg.textContent = "Opening your email app…";
    }

    window.location.href =
      `mailto:contact@globalbankrecoveryagency.com?subject=${subject}&body=${body}`;
  });
}
