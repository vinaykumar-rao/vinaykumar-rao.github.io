const portfolioData = {
  skillGroups: {
    "Data Analytics": ["Python", "Pandas", "NumPy", "SQL", "Data Cleaning", "EDA"],
    Programming: ["Python", "SQL", "JavaScript", "HTML5/CSS3", "Firebase"],
    Visualization: ["Power BI", "Matplotlib", "Plotly", "Streamlit", "Excel", "Dashboards", "Data Storytelling"],
    "Cloud & Tools": ["GCP", "Git & GitHub", "VS Code", "Jupyter", "AI Tools"],
    "AI & ML": ["Python", "NumPy", "Pandas", "Matplotlib", "Jupyter", "Machine Learning", "Agentic AI", "LLMs", "AI Automation", "Statistical Modeling", "Generative AI"],
  },
  projects: [
    {
      title: "Employee Performance Analysis",
      category: "Analytics",
      eyebrow: "01 / INSIGHT SYSTEM",
      description:
        "A focused analytics workflow that turns employee data into clear performance trends and productivity signals.",
      tags: ["Excel", "SQL", "Data Visualization"],
      visual: "employee",
      number: "01",
    },
    {
      title: "IPL Advanced Analytics Dashboard",
      category: "Analytics",
      eyebrow: "02 / SPORTS DATA",
      description:
        "An interactive IPL dashboard exploring 1,095 matches from 2008–2024, with player comparisons, batting and bowling analysis, and season champions.",
      tags: ["Python", "Pandas", "Plotly", "Streamlit", "Matplotlib"],
      url: "https://ipl-analytic-dashboard-jdwd7dmq5ppybnrnmfynfp.streamlit.app/",
      visual: "ipl",
      number: "02",
    },
    {
      title: "CareSync",
      category: "Applications",
      eyebrow: "03 / HUMAN-CENTERED APP",
      description:
        "A smart medicine reminder concept designed to help elderly users stay on schedule with caregiver support.",
      tags: ["Reminders", "Missed-dose alerts", "Care tracking"],
      visual: "caresync",
      number: "03",
    },
  ],
  certifications: [
    ["2026", "Google Cloud Skills Arcade", "Google"],
    ["2026", "Generate reports with AI research agents", "Microsoft"],
    ["2025", "Generative AI Mastermind", "OutSkill"],
    ["2025", "Data Analytics Internship Certificate", "Alethe Labs"],
    ["2025", "Excel Using AI Workshop", "OfficeMaster"],
    ["2024", "Information Technology Fundamentals", "IBM SkillsBuild"],
  ],
};
("use strict");
const $ = (s) => document.querySelector(s),
  $$ = (s) => [...document.querySelectorAll(s)];
const menu = $(".desktop-nav"),
  menuButton = $(".mobile-menu-button");
menu.id = "main-navigation";
menuButton.setAttribute("aria-controls", menu.id);
menuButton.setAttribute("aria-expanded", "false");
function closeMenu() {
  menu.classList.remove("desktop-nav--open");
  menuButton.setAttribute("aria-expanded", "false");
}
function go(id) {
  document
    .getElementById(id)
    ?.scrollIntoView({
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  closeMenu();
}
$$('[data-testid^="nav-"]').forEach((b) =>
  b.addEventListener("click", () => go(b.dataset.testid.split("-")[1])),
);
for (const [test, id] of Object.entries({
  "brand-home-button": "home",
  "hero-projects-button": "projects",
  "hero-contact-button": "contact",
  "about-contact-link": "contact",
  "footer-back-to-top": "home",
}))
  $('[data-testid="' + test + '"]').addEventListener("click", () => go(id));
menuButton.addEventListener("click", () => {
  const open = menu.classList.toggle("desktop-nav--open");
  menuButton.setAttribute("aria-expanded", String(open));
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});
const theme = $(".theme-toggle");
function setTheme(light) {
  $(".portfolio-shell").classList.toggle("light-mode", light);
  theme.innerHTML =
    '<span aria-hidden="true">' +
    (light ? "☾" : "☼") +
    "</span><span>" +
    (light ? "Dark" : "Light") +
    "</span>";
  theme.setAttribute("aria-label", light ? "Switch to dark theme" : "Switch to light theme");
}
try {
  setTheme(localStorage.getItem("portfolio-theme") === "light");
} catch {}
theme.addEventListener("click", () => {
  const light = !$(".portfolio-shell").classList.contains("light-mode");
  setTheme(light);
  try {
    localStorage.setItem("portfolio-theme", light ? "light" : "dark");
  } catch {}
});
function selectTab(button, all) {
  all.forEach((b) => {
    const active = b === button;
    b.classList.toggle("is-active", active);
    b.setAttribute("aria-selected", String(active));
    b.tabIndex = active ? 0 : -1;
  });
}
function keyboardTabs(tabs) {
  tabs.forEach((b, i) =>
    b.addEventListener("keydown", (e) => {
      let n;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") n = (i + 1) % tabs.length;
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") n = (i + tabs.length - 1) % tabs.length;
      if (e.key === "Home") n = 0;
      if (e.key === "End") n = tabs.length - 1;
      if (n !== undefined) {
        e.preventDefault();
        tabs[n].focus();
        tabs[n].click();
      }
    }),
  );
  selectTab(tabs[0], tabs);
}
const skillTabs = $$(".skill-tabs button");
skillTabs.forEach((b, i) =>
  b.addEventListener("click", () => {
    selectTab(b, skillTabs);
    const name = Object.keys(portfolioData.skillGroups)[i];
    $(".skill-cloud__header strong").textContent = name;
    $(".skill-tags").replaceChildren(
      ...portfolioData.skillGroups[name].map((t) => {
        const span = document.createElement("span");
        span.className = 'tool-tile';
        const icons={Python:'python',Pandas:'pandas',NumPy:'numpy',Matplotlib:'matplotlib',JavaScript:'javascript','HTML5/CSS3':'html5',Firebase:'firebase',GCP:'googlecloud','Git & GitHub':'git','VS Code':'vscode',Jupyter:'jupyter'};
        if(icons[t]){const img=document.createElement('img');img.src='assets/icons/'+icons[t]+'.svg';img.alt='';img.width=36;img.height=36;span.append(img)}
        else {const mark=document.createElement('b');mark.className='tool-symbol';mark.textContent=({'Power BI':'▥',SQL:'▤',Excel:'X','Machine Learning':'ML','Agentic AI':'✧',LLMs:'LLM','AI Automation':'⚙','Generative AI':'✦'})[t]||'◈';span.append(mark)}
        const label=document.createElement('small');label.textContent=t;span.append(label);
        if(!matchMedia('(prefers-reduced-motion: reduce)').matches)span.animate([{opacity:0,transform:'translateY(14px) scale(.95)'},{opacity:1,transform:'none'}],{duration:380,easing:'ease-out'});
        return span;
      }),
    );
  }),
);
keyboardTabs(skillTabs);
skillTabs[0].click();
const filters = $$(".filter-row button");
filters.forEach((b) =>
  b.addEventListener("click", () => {
    selectTab(b, filters);
    $$(".project-card").forEach(
      (card, i) =>
        (card.hidden =
          b.textContent.trim() !== "All" &&
          portfolioData.projects[i].category !== b.textContent.trim()),
    );
  }),
);
keyboardTabs(filters);
const points = [
  [
    "Analyzed employee datasets to identify performance trends and productivity factors.",
    "Used Excel and SQL for data processing and visualization.",
  ],
  [
    "Cleaned and validated 1,095 matches and 260,920 delivery records using Python and pandas.",
    "Built an interactive Streamlit dashboard with Plotly charts and Matplotlib analysis reports.",
    "Compared players within the same season using runs, strike rate, wickets and economy.",
    "Added season champions, team photos, final-match leaders and filtered CSV downloads.",
    "Applied data cleaning, exploratory data analysis, aggregation and visual storytelling.",
  ],
  [
    "Developed medication reminders, missed-dose alerts and caregiver notifications.",
    "Designed tracking to help elderly users manage medication.",
  ],
];
const dialog = $("#project-dialog");
$$('[data-testid^="project-details-button"]').forEach((b, i) =>
  b.addEventListener("click", () => {
    $("#dialog-title").textContent = portfolioData.projects[i].title;
    $("#dialog-description").textContent = portfolioData.projects[i].description;
    $("#dialog-points").replaceChildren(
      ...points[i].map((t) => {
        let li = document.createElement("li");
        li.textContent = t;
        return li;
      }),
    );
        const project = portfolioData.projects[i];
    const dialogLink = dialog.querySelector("a.button");
    dialogLink.href = project.url || "https://github.com/vinaykumar-rao";
    dialogLink.textContent = project.url
      ? "Visit project ↗"
      : "GitHub profile ↗";

    dialog.showModal();
  }),
);
$(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (e) => {
  if (e.target === dialog) {
    const r = dialog.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom)
      dialog.close();
  }
});

// Keep contact submissions on this page; show success only after provider acceptance.
const submissionDialog = $("#submission-dialog");
const contactForm = $(".contact-form");
const submitButton = contactForm.querySelector('[type="submit"]');
let submissionPending = false;
$("#submission-close").addEventListener("click", () => submissionDialog.close());
$("#submission-done").addEventListener("click", () => submissionDialog.close());
submissionDialog.addEventListener("close", () => submitButton.focus());
contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (submissionPending) return;
  const status = $("#form-status");
  if (contactForm.elements._honey.value) return;
  for (const name of ["name", "email", "message"]) {
    contactForm.elements[name].value = contactForm.elements[name].value.trim();
  }
  if (!contactForm.reportValidity()) return;
  submissionPending = true;
  submitButton.disabled = true;
  submitButton.textContent = "Sending…";
  contactForm.setAttribute("aria-busy", "true");
  status.textContent = "Sending your message securely…";
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 25000);
  try {
    const payload = Object.fromEntries(new FormData(contactForm));
    payload._replyto = payload.email;
    const response = await fetch("https://formsubmit.co/ajax/raoovinayyy@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    const result = await response.json();
    const providerMessage = typeof result.message === "string" ? result.message : "";
    if (/activat|confirm.{0,25}email|verify.{0,25}email/i.test(providerMessage)) {
      status.textContent =
        "The contact service needs email verification. Please contact Vinay using the email link below.";
      return;
    }
    if (!response.ok || !(result.success === true || result.success === "true")) {
      status.textContent =
        "Your message was not submitted. " +
        (providerMessage.slice(0, 250) || "Please try again or use the email link.");
      return;
    }
    status.textContent = "Message sent. Thank you for getting in touch.";
    contactForm.reset();
    submissionDialog.classList.toggle(
      "submission-dialog--light",
      $(".portfolio-shell").classList.contains("light-mode"),
    );
    submissionDialog.showModal();
  } catch (error) {
    status.textContent =
      error.name === "AbortError"
        ? "The service took too long to respond, so submission could not be confirmed. Please try again later."
        : "Submission could not be confirmed. Check your connection and try again, or use the email link.";
  } finally {
    clearTimeout(timeout);
    submissionPending = false;
    submitButton.disabled = false;
    submitButton.textContent = "Send message ↗";
    contactForm.setAttribute("aria-busy", "false");
  }
});
