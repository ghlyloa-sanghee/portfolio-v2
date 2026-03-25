// ── 다크모드 ──
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// ── 햄버거 메뉴 ──
const hamburger = document.getElementById("hamburger");
const mainNav = document.getElementById("mainNav");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  mainNav.classList.toggle("open");
});
mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    mainNav.classList.remove("open");
  });
});

// ── 작업물 데이터 ──
const works = [
  { title: "브랜드 아이덴티티", desc: "UI/UX 디자인", badge: "FEATURED", type: "featured" },
  { title: "앱 UI 디자인", desc: "모바일 앱 UX", badge: "", type: "" },
  { title: "웹사이트 퍼블리싱", desc: "HTML/CSS", badge: "NEW", type: "" },
  { title: "디자인 시스템", desc: "Figma + CSS", badge: "", type: "" },
];

const worksGrid = document.getElementById("worksGrid");
works.forEach((work) => {
  const card = document.createElement("div");
  card.className = "work-card " + work.type;
  card.innerHTML = `
    <div class="work-thumb"></div>
    <div class="work-info">
      ${work.badge ? `<span class="work-badge">${work.badge}</span>` : ""}
      <div class="work-title">${work.title}</div>
      <div class="work-desc">${work.desc}</div>
    </div>
  `;
  worksGrid.appendChild(card);
});

// ── 스킬바 애니메이션 ──
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".skill-fill").forEach((bar) => {
          bar.style.width = bar.getAttribute("style").match(/\d+%/)[0];
        });
      }
    });
  },
  { threshold: 0.3 },
);

// 스크롤 애니메이션
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

document.querySelectorAll(".reveal").forEach((el) => {
  revealObserver.observe(el);
});
