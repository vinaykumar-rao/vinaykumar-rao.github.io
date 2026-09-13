(() => {
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const frame = document.querySelector(".portrait-frame");
  const hero = document.querySelector("#home");

  // Add download links beneath PDF certificates.
  document
    .querySelectorAll('.certification-row[href$=".pdf"]')
    .forEach((link) => {
      const actions = document.createElement("div");
      actions.className = "certificate-actions";

      const download = document.createElement("a");
      download.href = link.getAttribute("href");
      download.download = "";
      download.textContent = "Download certificate PDF ↓";

      actions.append(download);
      link.after(actions);
    });

  // Add decorative eyes to the portrait.
  const eyes = document.createElement("div");
  eyes.className = "avatar-eyes";
  eyes.setAttribute("aria-hidden", "true");
  eyes.innerHTML =
    '<span class="avatar-eye eye-left"><i></i></span>' +
    '<span class="avatar-eye eye-right"><i></i></span>';

  frame.append(eyes);

  // Move the portrait and eyes in response to the mouse.
  let pending = 0;

  function reset() {
    const properties = [
      "--rx",
      "--ry",
      "--px",
      "--py",
      "--eye-x",
      "--eye-y",
    ];

    for (const property of properties) {
      frame.style.removeProperty(property);
    }
  }

  window.addEventListener("pointermove", (event) => {
    if (reduced.matches || event.pointerType !== "mouse") {
      return;
    }

    cancelAnimationFrame(pending);

    pending = requestAnimationFrame(() => {
      const bounds = frame.getBoundingClientRect();

      const x = Math.max(
        -1,
        Math.min(
          1,
          (event.clientX - bounds.left - bounds.width / 2) /
            (bounds.width / 2)
        )
      );

      const y = Math.max(
        -1,
        Math.min(
          1,
          (event.clientY - bounds.top - bounds.height / 2) /
            (bounds.height / 2)
        )
      );

      frame.style.setProperty("--rx", `${-y * 5}deg`);
      frame.style.setProperty("--ry", `${x * 9}deg`);
      frame.style.setProperty("--px", `${x * 5}px`);
      frame.style.setProperty("--py", `${y * 3}px`);
      frame.style.setProperty("--eye-x", `${x * 17}%`);
      frame.style.setProperty("--eye-y", `${y * 12}%`);
    });
  });

  document.documentElement.addEventListener("pointerleave", () => {
    cancelAnimationFrame(pending);
    reset();
  });

  reduced.addEventListener("change", reset);

  // Display reading progress at the top of the page.
  const progress = document.createElement("div");
  progress.className = "reading-progress";
  progress.setAttribute("aria-hidden", "true");

  document.body.append(progress);

  let scrollPending = false;

  function updateScroll() {
    scrollPending = false;

    const max = document.documentElement.scrollHeight - innerHeight;
    const fraction = max > 0 ? scrollY / max : 0;

    progress.style.transform = `scaleX(${fraction})`;
  }

  addEventListener(
    "scroll",
    () => {
      if (!scrollPending) {
        scrollPending = true;
        requestAnimationFrame(updateScroll);
      }
    },
    { passive: true }
  );

  updateScroll();

  // Position the hover glow within project and skill cards.
  document.querySelectorAll(".project-card, .skill-cloud").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      if (reduced.matches || event.pointerType !== "mouse") {
        return;
      }

      const bounds = card.getBoundingClientRect();

      card.style.setProperty("--spot-x", `${event.clientX - bounds.left}px`);
      card.style.setProperty("--spot-y", `${event.clientY - bounds.top}px`);
    });
  });

  // Reveal page elements as they enter the viewport.
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else if (entry.boundingClientRect.top > innerHeight) {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.04 }
    );

    const revealSelectors = [
      ".section-label",
      ".about-avatar",
      ".about-lead h2",
      ".about-lead p",
      ".about-lead button",
      ".note-card",
      ".section-heading-row",
      ".skill-tabs",
      ".skill-cloud",
      ".experience-item",
      ".project-card",
      ".education-card",
      ".certification-row",
      ".contact-copy h2",
      ".contact-copy > p",
      ".contact-links a",
      ".contact-form",
      ".site-footer",
    ];

    document.querySelectorAll(revealSelectors.join(", ")).forEach((element) => {
      element.classList.add("reveal");
      observer.observe(element);
    });

    document.querySelectorAll(".contact-links a").forEach((element, index) => {
      element.style.setProperty("--reveal-delay", `${index * 100}ms`);
    });

    document.querySelectorAll(".note-card").forEach((element, index) => {
      element.style.setProperty("--step-delay", `${index * 180}ms`);
    });

    document.documentElement.classList.add("motion-ready");
  }

  // Use a gentle idle gaze and touch response on touch screens.
  const touch = matchMedia("(hover: none)");
  let idleTimer;

  function touchMotion() {
    clearInterval(idleTimer);

    frame.classList.toggle(
      "touch-avatar",
      touch.matches && !reduced.matches
    );

    if (touch.matches && !reduced.matches) {
      let step = 0;

      idleTimer = setInterval(() => {
        if (document.hidden || frame.getBoundingClientRect().bottom < 0) {
          return;
        }

        step++;

        frame.style.setProperty("--eye-x", `${Math.sin(step) * 12}%`);
        frame.style.setProperty("--eye-y", `${Math.cos(step) * 6}%`);
      }, 1600);
    }
  }

  touchMotion();

  reduced.addEventListener("change", touchMotion);
  touch.addEventListener("change", touchMotion);

  frame.addEventListener("pointerdown", (event) => {
    if (reduced.matches || event.pointerType === "mouse") {
      return;
    }

    const bounds = frame.getBoundingClientRect();

    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 32;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 22;

    frame.style.setProperty("--eye-x", `${x}%`);
    frame.style.setProperty("--eye-y", `${y}%`);
  });

  // Animate the contact confirmation dialog when it opens.
  const submission = document.querySelector("#submission-dialog");

  const submissionObserver = new MutationObserver(() => {
    if (submission.open && !reduced.matches) {
      submission.animate(
        [
          {
            opacity: 0,
            transform: "translateY(20px) scale(.94)",
          },
          {
            opacity: 1,
            transform: "none",
          },
        ],
        {
          duration: 400,
          easing: "cubic-bezier(.2,.8,.2,1)",
        }
      );
    }
  });

  submissionObserver.observe(submission, {
    attributes: true,
    attributeFilter: ["open"],
  });
})();
