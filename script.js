function toggleTheme() {
  const e =
    "dark" === document.documentElement.getAttribute("data-theme")
      ? "light"
      : "dark";
  document.documentElement.setAttribute("data-theme", e),
    localStorage.setItem("theme", e);
}
const savedTheme = localStorage.getItem("theme") || "dark";
function toggleMobileMenu() {
  const e = document.getElementById("navLinks"),
    t = document.querySelector(".mobile-menu-btn");
  e.classList.toggle("active"), t.classList.toggle("active");
}
function closeMobileMenu() {
  const e = document.getElementById("navLinks"),
    t = document.querySelector(".mobile-menu-btn");
  e.classList.remove("active"), t.classList.remove("active");
}
document.documentElement.setAttribute("data-theme", savedTheme),
  window.addEventListener("resize", () => {
    (window.innerWidth >= 1024 || window.innerWidth < 1024) &&
      closeMobileMenu();
  }
  ),
  document.querySelectorAll('a[data-target^="#"]').forEach((e) => {
    e.addEventListener("click", function (e) {
      e.preventDefault();
      const t = document.querySelector(this.getAttribute("data-target"));
      if (t) {
        const e = t.offsetTop,
          o = t.offsetHeight,
          n =
            e -
            window.innerHeight / 2 +
            o / 2 -
            (window.innerWidth >= 1024 ? 0 : 80);
        window.scrollTo({
          top: Math.max(0, n), behavior: "smooth"
        }
        );
      }

    }
    );
  }
  );
const observerOptions = {
  threshold: 0.1, rootMargin: "0px 0px -50px 0px"
}
  ,
  observer = new IntersectionObserver((e) => {
    e.forEach((e, t) => {
      e.isIntersecting &&
        setTimeout(() => {
          e.target.classList.add("visible");
        }
          , 100 * t);
    }
    );
  }
    , observerOptions);
function closeModal() {
  const e = document.getElementById("successModal");
  e && (e.style.display = "none");
}
function handleSubmit(e) {
  e.preventDefault();
  const t = new FormData(e.target),
    o = Object.fromEntries(t);
  console.log("Form submitted:", o);
  const n = document.getElementById("successModal"),
    r = document.getElementById("modalMessage");
  n &&
    r &&
    ((r.textContent =
      "Thank you for your message! I will get back to you soon."),
      (n.style.display = "flex")),
    e.target.reset();
}
function openProjectModal(e) {
  const t = e.dataset.title,
    o = e.dataset.description,
    n = e.dataset.repo,
    r = e.dataset.demo,
    l = e.dataset.tech.split(",");
  (document.getElementById("projectTitle").textContent = t),
    (document.getElementById("projectDescription").textContent = o),
    (document.getElementById("projectRepo").href = n);
  const s = document.getElementById("projectDemo");
  r
    ? ((s.href = r), (s.style.display = "inline-flex"))
    : (s.style.display = "none");
  const a = document.getElementById("projectTech");
  (a.innerHTML = ""),
    l.forEach((e) => {
      const t = document.createElement("div");
      (t.className = "tech-label"),
        (t.innerHTML =
          getTechSVG(e) + '<span class="tech-text">' + e + "</span>"),
        a.appendChild(t);
    }
    ),
    (document.getElementById("projectModal").style.display = "flex");
}
function closeProjectModal() {
  document.getElementById("projectModal").style.display = "none";
}
function getTechSVG(e) {
  return ({
    Python:
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M12 9H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3m4-2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3"/><path d="M8 9V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4m-5-9v.01M13 18v.01"/></g></svg>',
    Pandas:
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M5 12V5a2 2 0 0 1 2-2h7l5 5v4M8 16.5a1.5 1.5 0 0 0-3 0v3a1.5 1.5 0 0 0 3 0m3 .75c0 .414.336.75.75.75H13a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1.25a.75.75 0 0 1 .75.75m3 4.5c0 .414.336.75.75.75H19a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1.25a.75.75 0 0 1 .75.75"/></g></svg>',
    Matplotlib:
      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M4 4a2 2 0 0 1 2-2h4.586a1.5 1.5 0 0 1 1.06.44l3.915 3.914A1.5 1.5 0 0 1 16 7.414V16a2 2 0 0 1-2 2H8.5c.219-.29.375-.63.45-1H14a1 1 0 0 0 1-1V8h-3.5A1.5 1.5 0 0 1 10 6.5V3H6a1 1 0 0 0-1 1v7.5q-.123.091-.232.198A1.5 1.5 0 0 0 4 11.085zm7.5 3h3.293L11 3.207V6.5a.5.5 0 0 0 .5.5m-8 5a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0V16a.5.5 0 0 0-1 0v.5a1.5 1.5 0 0 0 3 0v-4a.5.5 0 0 0-.5-.5M5 13.5a1.5 1.5 0 0 1 3 0a.5.5 0 0 1-1 0a.5.5 0 0 0-1 0v.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 8 16.118v.382a1.5 1.5 0 0 1-3 0a.5.5 0 0 1 1 0a.5.5 0 0 0 1 0v-.382a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 5 13.882z"/></svg>',
    HTML: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m20 4l-2 14.5l-6 2l-6-2L4 4z"/><path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5.75l-2.5-.75l-.1-.5"/></g></svg>',
    CSS: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m20 4l-2 14.5l-6 2l-6-2L4 4z"/><path d="M8.5 8h7L11 12h4l-.5 3.5l-2.5.75l-2.5-.75l-.1-.5"/></g></svg>',
    JavaScript:
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="m20 4l-2 14.5l-6 2l-6-2L4 4z"/><path d="M7.5 8h3v8l-2-1m8-7H14a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.423a.5.5 0 0 1 .495.57L15.5 15.5l-2 .5"/></g></svg>',
  }
  [e] ||
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>'
  );
}
document.addEventListener("DOMContentLoaded", () => {
  const e = document.querySelector(".about-content"),
    t = document.querySelectorAll(".skill-card"),
    o = document.querySelectorAll(".project-card"),
    n = document.querySelectorAll(".form-group");
  e && observer.observe(e),
    t.forEach((e) => observer.observe(e)),
    o.forEach((e) => observer.observe(e)),
    n.forEach((e) => observer.observe(e));
  const r = document.getElementById("successModal");
  r &&
    r.addEventListener("click", function (e) {
      e.target === r && closeModal();
    }
    ),
    document.querySelectorAll(".project-card").forEach((e) => {
      e.addEventListener("click", () => openProjectModal(e));
    }
    );
  const l = document.getElementById("projectModal");
  l &&
    l.addEventListener("click", function (e) {
      e.target === l && closeProjectModal();
    }
    );
  document.querySelectorAll("[data-href]").forEach(item => {
    item.addEventListener("click", () => {
      window.open(item.getAttribute("data-href"), "_blank");
    }
    );
  }
  );
  document.querySelectorAll('.svg-wrapper').forEach(wrapper => {
    wrapper.addEventListener('mouseenter', () => {
      wrapper.closest('a').classList.add('svg-hovered');
    }
    );
    wrapper.addEventListener('mouseleave', () => {
      wrapper.closest('a').classList.remove('svg-hovered');
    }
    );
  }
  );

  // Prevent text selection, copying, pasting, and Tab key navigation
  document.addEventListener('selectstart', (e) => e.preventDefault());
  document.addEventListener('copy', (e) => e.preventDefault());
  document.addEventListener('paste', (e) => e.preventDefault());
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
    }
  });
}
),
  window.addEventListener("scroll", () => {
    const e = document.querySelectorAll("section[id]"),
      t = window.pageYOffset;
    let o = "";
    e.forEach((e) => {
      const n = e.offsetHeight,
        r = e.offsetTop - 100,
        l = e.getAttribute("id");
      t > r && t <= r + n && (o = l);
    }
    ),
      document.querySelectorAll(".nav-links a").forEach((e) => {
        (e.style.fontWeight = "500"),
          e.getAttribute("data-target") === `#$ {
    o
}
` && (e.style.fontWeight = "700");
      }
      );
  }
  );