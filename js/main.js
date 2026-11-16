/* =========================================================
   IT Track Institute — interactions
   ========================================================= */

// ---- EDIT THIS: your WhatsApp number in international format, digits only ----
const WHATSAPP_NUMBER = "920000000000";

document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- Mobile nav ---------- */
const nav = document.getElementById("nav");
document.getElementById("burger").addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll("#navLinks a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

/* ---------- Reveal on scroll ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("in");
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${(i % 4) * 80}ms`;
  io.observe(el);
});

/* ---------- Neural network hero canvas ---------- */
(function neural() {
  const canvas = document.getElementById("neural");
  const ctx = canvas.getContext("2d");
  let w, h, pts = [], dpr = Math.min(window.devicePixelRatio || 1, 2);
  const mouse = { x: -999, y: -999 };

  function resize() {
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(90, Math.floor((w * h) / 14000));
    pts = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.6 + 0.6, hue: Math.random() < 0.5 ? 210 : 285
    }));
  }
  canvas.parentElement.addEventListener("mousemove", e => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
  });
  canvas.parentElement.addEventListener("mouseleave", () => { mouse.x = mouse.y = -999; });

  function frame() {
    ctx.clearRect(0, 0, w, h);
    for (const p of pts) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      const dx = p.x - mouse.x, dy = p.y - mouse.y, md = Math.hypot(dx, dy);
      if (md < 120) { p.x += dx / md; p.y += dy / md; }
    }
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const a = pts[i], b = pts[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 130) {
          ctx.strokeStyle = `hsla(${(a.hue + b.hue) / 2}, 90%, 65%, ${0.22 * (1 - d / 130)})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
    }
    for (const p of pts) {
      ctx.fillStyle = `hsla(${p.hue}, 95%, 70%, .9)`;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
    }
    requestAnimationFrame(frame);
  }
  resize();
  window.addEventListener("resize", resize);
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) frame();
})();

/* ---------- Typing code (Python tile) ---------- */
(function typing() {
  const el = document.getElementById("typeCode");
  const lines = [
    ['<span class="c"># your first AI agent</span>'],
    ['<span class="k">from</span> langgraph.graph <span class="k">import</span> StateGraph'],
    [''],
    ['<span class="k">def</span> <span class="f">think</span>(state):'],
    ['    task = state[<span class="s">"task"</span>]'],
    ['    <span class="k">return</span> {<span class="s">"plan"</span>: llm.invoke(task)}'],
    [''],
    ['graph = StateGraph(dict)'],
    ['graph.add_node(<span class="s">"think"</span>, think)'],
    ['<span class="f">print</span>(<span class="s">"Agent ready 🚀"</span>)']
  ].map(l => l[0]);

  // type character by character while keeping HTML tags intact
  const full = lines.join("\n");
  let i = 0;
  function step() {
    if (i <= full.length) {
      // skip over tags/entities instantly
      if (full[i] === "<") i = full.indexOf(">", i) + 1;
      else i++;
      el.innerHTML = full.slice(0, i);
      setTimeout(step, full[i - 1] === "\n" ? 180 : 28);
    } else {
      setTimeout(() => { i = 0; step(); }, 3500);
    }
  }
  const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { step(); obs.disconnect(); } });
  obs.observe(el);
})();

/* ---------- Course carousel ---------- */
const carousel = document.getElementById("carousel");
const scrollBy = dir => carousel.scrollBy({ left: dir * 340, behavior: "smooth" });
document.getElementById("prev").addEventListener("click", () => scrollBy(-1));
document.getElementById("next").addEventListener("click", () => scrollBy(1));

document.querySelectorAll(".filter").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");
    const f = btn.dataset.filter;
    carousel.querySelectorAll(".card").forEach(card => {
      const show = f === "all" || card.dataset.cat.split(" ").includes(f);
      card.classList.toggle("is-hidden", !show);
    });
    carousel.scrollTo({ left: 0, behavior: "smooth" });
  });
});

/* ---------- Counters ---------- */
const counterObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, end = +el.dataset.count, dur = 1600, t0 = performance.now();
    const tick = now => {
      const p = Math.min((now - t0) / dur, 1);
      el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    counterObs.unobserve(el);
  });
}, { threshold: 0.6 });
document.querySelectorAll("[data-count]").forEach(el => counterObs.observe(el));

/* ---------- Parallax photo band ---------- */
const par = document.querySelector(".parallax");
window.addEventListener("scroll", () => {
  const r = par.parentElement.getBoundingClientRect();
  if (r.bottom > 0 && r.top < innerHeight) {
    par.style.transform = `translateY(${(r.top / innerHeight) * -60}px)`;
  }
}, { passive: true });

/* ---------- Enroll form -> WhatsApp ---------- */
document.getElementById("enrollForm").addEventListener("submit", e => {
  e.preventDefault();
  const d = new FormData(e.target);
  const msg =
`Assalam o Alaikum IT Track Institute!
I want to enroll.

Name: ${d.get("name")}
Phone: ${d.get("phone")}
Course: ${d.get("course")}
Batch: ${d.get("batch")}

Please share fees and timings.`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
});

/* floating button opens a general WhatsApp chat */
document.getElementById("waFloat").addEventListener("click", e => {
  e.preventDefault();
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Assalam o Alaikum! I want to know about your courses.")}`, "_blank");
});
