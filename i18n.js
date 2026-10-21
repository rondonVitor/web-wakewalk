/* WakeWalk landing — idioma + interações da página.
   Cada idioma é uma página estática própria (/ = PT, /en/, /es/), gerada por tools/build-pages.mjs
   a partir de index.html + tools/strings.mjs. Assim título, descrição e prévia social (OG/Twitter)
   saem certos por idioma mesmo para robôs que não rodam JS. Aqui só fica:
   - lembrar o idioma escolhido no seletor (a raiz usa isso para redirecionar);
   - o palco de missões (a lista troca o clipe do Bip e o texto);
   - os grupos de rádio (som durante a missão, estilo do card "Levantei"). */
(function () {
  "use strict";
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  function initLang() {
    $$(".lang a[data-lang]").forEach((a) => a.addEventListener("click", () => {
      try { localStorage.setItem("ww_lang", a.dataset.lang); } catch (e) {}
    }));
  }

  // ------------------------------------------------ missões: a lista conduz o palco (Bip + texto)
  function initMissions() {
    const bip = $("#ms-bip"), icon = $("#ms-icon"), tierEl = $("#ms-tier");
    // rótulos já traduzidos na própria página (títulos dos dois grupos)
    const tierLabel = { free: $('[data-i18n="ms_free"]', $(".ms-lists")), premium: $('[data-i18n="ms_premium"]') };
    $$(".ms-btn").forEach((btn) => btn.addEventListener("click", () => {
      $$(".ms-btn").forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
      if (window.WWBip && bip) window.WWBip.play(bip, btn.dataset.anim);
      icon.textContent = btn.querySelector(".ww-icon").textContent;
      const bubble = icon.parentElement;
      bubble.classList.remove("pop"); void bubble.offsetWidth; bubble.classList.add("pop");
      const tier = btn.dataset.tier;
      tierEl.dataset.tier = tier;
      tierEl.textContent = tierLabel[tier].textContent;
      $("#ms-name").textContent = btn.querySelector(".ms-n").textContent;
      $("#ms-desc").textContent = btn.querySelector(".ms-d").textContent;
    }));
  }

  // ------------------------------------------------ grupos de rádio (som da missão, estilo do card)
  function radioGroup(root, onPick) {
    if (!root) return;
    const items = $$('[role="radio"]', root);
    const pick = (it, focus) => {
      items.forEach((x) => { const on = x === it; x.setAttribute("aria-checked", String(on)); x.tabIndex = on ? 0 : -1; });
      if (focus) it.focus();
      onPick(it);
    };
    items.forEach((it, i) => {
      it.addEventListener("click", () => pick(it));
      it.addEventListener("keydown", (e) => {
        const d = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 0;
        if (!d) return;
        e.preventDefault();
        pick(items[(i + d + items.length) % items.length], true);
      });
    });
  }

  function init() {
    initLang();
    initMissions();
    radioGroup($("#snd-seg"), (it) => {
      $$("[data-snd-hint]").forEach((p) => { p.hidden = p.dataset.sndHint !== it.dataset.snd; });
    });
    const receipt = $("#receipt");
    radioGroup($("#rc-styles"), (it) => { receipt.dataset.style = it.dataset.style; });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
