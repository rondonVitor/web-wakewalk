/* WakeWalk landing — idiomas (PT-BR padrão, EN, ES) + interações da página.
   O português vive no próprio HTML: na inicialização ele é lido do DOM e vira o dicionário "pt",
   então EN e ES são as únicas cópias extras. Chaves:
   [data-i18n] → textContent · [data-i18n-content] → atributo content (meta) · [data-i18n-aria] → aria-label.
   Idioma: ?lang= > escolha salva > idioma do navegador > pt. */
(function () {
  "use strict";
  const EXTRA_PT = { ms_tier_free: "Grátis", ms_tier_premium: "Premium", footer_legal_lang: "" };

  const EN = {
    meta_title: "WakeWalk — the alarm that only stops when you get up",
    meta_desc: "Bip rings and only stops when you finish a mission: walk, shake, solve a sum, type or say a phrase. Free to start, no ads.",
    skip: "Skip to content",
    nav_label: "Main",
    nav_missions: "Missions",
    nav_how: "How it works",
    nav_night: "At night",
    nav_pricing: "Premium",
    lang_label: "Language",
    hdr_cta: "Download free",

    hero_title: "Bip only stops ringing once you're out of bed.",
    hero_sub: "WakeWalk is the alarm clock with missions. To turn it off, you walk, shake your phone, solve a sum or say a phrase out loud. By the time you're done, you're up.",
    hero_cta: "Download free",
    hero_cta_2: "See the missions",
    hero_note: "Free to start, no ads. For iPhone and Android.",
    hero_day: "Tomorrow",
    hero_mission: "Walk 25 steps to turn it off",

    how_title: "A morning with Bip",
    bip_sleeping: "Bip sleeping",
    bip_ringing: "Bip ringing",
    bip_walking: "Bip walking",
    bip_celebrate: "Bip celebrating",
    how_1_t: "At night, you pick the mission",
    how_1_d: "Set the time, the weekdays, the mission and the difficulty. It takes half a minute.",
    how_2_t: "In the morning, Bip rings",
    how_2_d: "With gradual wake, the sound starts low and builds while the sun rises on screen. The only way to turn it off is the mission.",
    how_3_t: "You get up and do it",
    how_3_d: "A few steps around the house, a sum, a phrase. When the alarm goes quiet, you're already out of bed.",

    ms_title: "Choose how you want to get up",
    ms_sub: "Five missions are free forever. Premium adds the camera ones and lets you chain up to three in one morning.",
    ms_free: "Free",
    ms_premium: "Premium",
    ms_tier_free: "Free",
    ms_tier_premium: "Premium",
    m_walk: "Walk",
    m_walk_d: "Count real steps around the house. You choose how many.",
    m_shake: "Shake",
    m_shake_d: "Shake your phone until the bar fills up. Hard to do while asleep.",
    m_math: "Math",
    m_math_d: "Solve sums that wake your brain up, from easy to extreme.",
    m_typing: "Typing",
    m_typing_d: "Type the phrase exactly as it shows on screen.",
    m_voice: "Say the phrase",
    m_voice_d: "Say “Today I get up on the first try” out loud. Works offline: your voice never leaves the phone.",
    m_pushup: "Push-ups",
    m_pushup_d: "The camera counts every full push-up. Half reps don't count.",
    m_squat: "Squats",
    m_squat_d: "Go down and up in front of the camera. Your phone checks the movement.",
    m_dance: "Dance",
    m_dance_d: "Dance in front of the camera until the move meter fills up, with its own soundtrack.",
    m_photo: "Photo",
    m_photo_d: "Take a photo of the object you picked when you set the alarm.",
    m_sky: "Sky photo",
    m_sky_d: "Go to the window and snap the sky. If the photo doesn't pass, switch missions: the alarm never gets stuck.",
    m_qr: "QR code",
    m_qr_d: "Stick a QR code far from your bed. To turn the alarm off, you have to walk to it.",
    m_combo: "Combos",
    m_combo_d: "Chain up to three missions: steps, then a sum, then a photo.",
    ms_privacy: "Camera and voice are analyzed on your phone. No photo, video or audio is uploaded.",

    snd_title: "You decide the volume while you do the mission",
    snd_sub: "Some people need the alarm at full blast until the end. Others don't want to wake the whole house. You choose for each alarm.",
    snd_normal: "Normal",
    snd_low: "Low",
    snd_mute: "Silent",
    snd_hint_normal: "Keeps ringing at full volume until you finish.",
    snd_hint_low: "Drops to about 30% while you do the mission.",
    snd_hint_mute: "Goes quiet during the mission and rings again if you stop halfway.",
    sun_title: "Gradual wake",
    sun_desc: "The sound grows little by little while the sun rises on screen. Less of a jolt, same result: you, standing up.",

    rc_kicker: "I'm up with WakeWalk",
    rc_date: "Tue, Oct 21",
    rc_woke: "Up at",
    rc_alarm: "Alarm",
    rc_mission: "Mission",
    rc_mission_v: "25 steps",
    rc_streak: "Streak",
    rc_streak_v: "3 days",
    rc_proof: "Out of bed on the first try.",
    rc_style_label: "Card style",
    rc_night: "Night",
    rc_sunrise: "Sunrise",
    rc_minimal: "Minimal",
    st_title: "Got up? That deserves a card",
    st_sub: "Every finished mission makes an “I'm up” card with the time you got out of bed. Three styles, ready for your story or the family group chat.",
    st_1_t: "A streak of mornings",
    st_1_d: "Every morning you complete adds to your streak. It shows in the app, on the card and on the widget.",
    st_2_t: "Freezes for the bad day",
    st_2_d: "Missed a morning? A saved freeze protects your streak. You earn more as you keep the habit.",

    ng_title: "A good morning starts the night before",
    ng_sub: "WakeWalk also looks after bedtime and what you see when you get up.",
    ng_1_t: "Sleep sounds",
    ng_1_d: "Looping sounds with a sleep timer. At the end, the volume fades out slowly.",
    ng_2_t: "Bedtime",
    ng_2_d: "Suggested bedtimes based on sleep cycles, plus a reminder before you go to bed.",
    ng_3_t: "Morning briefing",
    ng_3_d: "Right after you get up: today's weather, your streak and your next alarm.",
    ng_4_t: "Home screen widget",
    ng_4_d: "Next alarm and streak without opening the app. Available on Android.",

    pr_title: "Free forever. Premium if you want more.",
    pr_sub: "The free plan never expires and has no ads. Premium unlocks the camera missions, unlimited alarms and combos.",
    pl_free: "Free",
    pl_free_per: "Forever, no card",
    pl_free_1: "Up to 2 alarms",
    pl_free_2: "Walk, shake, math, typing and “Say the phrase”",
    pl_free_3: "Streak, freezes and the “I'm up” card",
    pl_free_4: "Sleep sounds and morning briefing",
    pl_free_cta: "Download free",
    pl_prem: "Premium",
    pl_prem_per: "Monthly, yearly or lifetime. The price shows in the store, based on your region.",
    pl_prem_1: "Everything in the free plan",
    pl_prem_2: "Push-ups, squats, dance, photo, sky photo and QR code",
    pl_prem_3: "Unlimited alarms",
    pl_prem_4: "Combos of up to 3 missions",
    tr_title: "7-day trial on the yearly plan, no surprises",
    tr_1: "Today",
    tr_1_d: "Full access",
    tr_2: "Day 5",
    tr_2_d: "We remind you",
    tr_3: "Day 7",
    tr_3_d: "First charge",
    tr_cancel: "Reminder 2 days before you're charged. Cancel in 2 taps in the store.",
    pl_prem_cta: "Try Premium",
    price_note: "The 7-day free trial is for new subscribers to the yearly plan. The store asks for a payment method to start it and, if you cancel before it ends, you're not charged. The subscription is billed by Google Play or the App Store and renews automatically; cancel anytime in your store settings. Lifetime is a one-time purchase with no renewal.",

    fq_title: "Questions we hear a lot",
    fq_1_q: "Do I have to pay?",
    fq_1_a: "No. The free plan never expires, has no ads and includes five missions, up to 2 alarms, streaks and sleep sounds.",
    fq_2_q: "Do the camera or the microphone upload anything?",
    fq_2_a: "No. Push-ups, squats, dance, photos and the spoken phrase are analyzed on your phone. Nothing is sent to servers.",
    fq_3_q: "What if the mission doesn't work right then?",
    fq_3_a: "The alarm never gets stuck. If the sky photo doesn't pass, for example, you pick another mission to turn it off.",
    fq_4_q: "How do I cancel the Premium trial?",
    fq_4_a: "In the App Store or Google Play: Manage, then Cancel subscription. The app reminds you 2 days before the first charge.",
    fq_5_q: "Does the sound keep playing during the mission?",
    fq_5_a: "You choose for each alarm: normal volume, low or silent. On silent, the alarm rings again if you stop halfway through the mission.",

    dl_title: "Tomorrow, get up on the first try.",
    dl_sub: "Download WakeWalk and let Bip handle the rest.",
    store_ios_1: "Download on the",
    store_and_1: "Get it on",

    footer_tag: "The alarm clock that only stops when you get out of bed.",
    footer_product: "Product",
    footer_download: "Download",
    footer_legal: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Use",
    account_del: "Account Deletion",
    footer_contact: "Contact",
    footer_rights: "© 2026 WakeWalk. All rights reserved.",
    footer_legal_lang: "",
  };

  const ES = {
    meta_title: "WakeWalk — el despertador que solo se apaga cuando te levantas",
    meta_desc: "Bip suena y solo para cuando cumples una misión: caminar, agitar el móvil, resolver una cuenta, escribir o decir una frase. Gratis para empezar, sin anuncios.",
    skip: "Saltar al contenido",
    nav_label: "Principal",
    nav_missions: "Misiones",
    nav_how: "Cómo funciona",
    nav_night: "De noche",
    nav_pricing: "Premium",
    lang_label: "Idioma",
    hdr_cta: "Descargar gratis",

    hero_title: "Bip solo deja de sonar cuando sales de la cama.",
    hero_sub: "WakeWalk es el despertador con misiones. Para apagarlo, caminas, agitas el móvil, resuelves una cuenta o dices una frase en voz alta. Cuando terminas, ya estás de pie.",
    hero_cta: "Descargar gratis",
    hero_cta_2: "Ver las misiones",
    hero_note: "Gratis para empezar y sin anuncios. Para iPhone y Android. Por ahora, la app está en inglés y portugués.",
    hero_day: "Mañana",
    hero_mission: "Camina 25 pasos para apagarlo",

    how_title: "Una mañana con Bip",
    bip_sleeping: "Bip durmiendo",
    bip_ringing: "Bip sonando",
    bip_walking: "Bip caminando",
    bip_celebrate: "Bip celebrando",
    how_1_t: "De noche, eliges la misión",
    how_1_d: "Define la hora, los días de la semana, la misión y la dificultad. Toma medio minuto.",
    how_2_t: "Por la mañana, Bip suena",
    how_2_d: "Con el despertar gradual, el sonido empieza bajo y crece mientras el sol sale en la pantalla. Solo se apaga cumpliendo la misión.",
    how_3_t: "Te levantas y la cumples",
    how_3_d: "Unos pasos por la casa, una cuenta, una frase. Cuando la alarma se calla, ya saliste de la cama.",

    ms_title: "Elige cómo quieres levantarte",
    ms_sub: "Cinco misiones son gratis para siempre. Premium suma las de cámara y te deja juntar hasta tres en una misma mañana.",
    ms_free: "Gratis",
    ms_premium: "Premium",
    ms_tier_free: "Gratis",
    ms_tier_premium: "Premium",
    m_walk: "Caminar",
    m_walk_d: "Cuenta pasos de verdad por la casa. Tú eliges cuántos.",
    m_shake: "Agitar",
    m_shake_d: "Agita el móvil hasta llenar la barra. Difícil hacerlo dormido.",
    m_math: "Matemáticas",
    m_math_d: "Resuelve cuentas que despiertan el cerebro, de fácil a extremo.",
    m_typing: "Escritura",
    m_typing_d: "Escribe la frase exactamente como aparece en la pantalla.",
    m_voice: "Di la frase",
    m_voice_d: "Di en voz alta la frase que aparece en la pantalla. Funciona sin conexión: tu voz no sale del móvil.",
    m_pushup: "Flexiones",
    m_pushup_d: "La cámara cuenta cada flexión completa. Media flexión no vale.",
    m_squat: "Sentadillas",
    m_squat_d: "Baja y sube frente a la cámara. El móvil comprueba el movimiento.",
    m_dance: "Baile",
    m_dance_d: "Baila frente a la cámara hasta llenar el medidor de movimiento, con su propia música.",
    m_photo: "Foto",
    m_photo_d: "Fotografía el objeto que elegiste al crear la alarma.",
    m_sky: "Foto del cielo",
    m_sky_d: "Ve a la ventana y fotografía el cielo. Si la foto no pasa, cambias de misión: la alarma nunca se traba.",
    m_qr: "Código QR",
    m_qr_d: "Pega un código QR lejos de la cama. Para apagar la alarma, tienes que ir hasta él.",
    m_combo: "Combos",
    m_combo_d: "Junta hasta tres misiones seguidas: pasos, luego una cuenta, luego una foto.",
    ms_privacy: "La cámara y la voz se analizan en el propio móvil. No se envía ninguna foto, video ni audio.",

    snd_title: "Tú decides el volumen mientras cumples la misión",
    snd_sub: "Hay quien necesita la alarma a todo volumen hasta el final. Hay quien no quiere despertar a toda la casa. Lo eliges en cada alarma.",
    snd_normal: "Normal",
    snd_low: "Bajo",
    snd_mute: "Silencio",
    snd_hint_normal: "Sigue sonando a todo volumen hasta que termines.",
    snd_hint_low: "Baja a cerca del 30% mientras haces la misión.",
    snd_hint_mute: "Se queda en silencio durante la misión y vuelve a sonar si te detienes a la mitad.",
    sun_title: "Despertar gradual",
    sun_desc: "El sonido crece poco a poco mientras el sol sale en la pantalla. Menos susto, mismo resultado: tú, de pie.",

    rc_kicker: "Me levanté con WakeWalk",
    rc_date: "mar, 21 oct",
    rc_woke: "Despertó",
    rc_alarm: "Alarma",
    rc_mission: "Misión",
    rc_mission_v: "25 pasos",
    rc_streak: "Racha",
    rc_streak_v: "3 días",
    rc_proof: "Salí de la cama a la primera.",
    rc_style_label: "Estilo de la tarjeta",
    rc_night: "Nocturno",
    rc_sunrise: "Amanecer",
    rc_minimal: "Minimal",
    st_title: "¿Te levantaste? Eso merece una tarjeta",
    st_sub: "Cada misión cumplida genera la tarjeta “Me levanté”, con la hora en que saliste de la cama. Tres estilos, listos para tu historia o para el grupo de la familia.",
    st_1_t: "Racha de mañanas",
    st_1_d: "Cada mañana cumplida suma a tu racha. Aparece en la app, en la tarjeta y en el widget.",
    st_2_t: "Congelamientos para el mal día",
    st_2_d: "¿Perdiste una mañana? Un congelamiento guardado protege tu racha. Ganas más mientras mantienes el hábito.",

    ng_title: "Una buena mañana empieza la noche anterior",
    ng_sub: "WakeWalk también cuida la hora de dormir y lo que ves al levantarte.",
    ng_1_t: "Sonidos para dormir",
    ng_1_d: "Sonidos en bucle con temporizador. Al final, el volumen baja poco a poco.",
    ng_2_t: "Hora de dormir",
    ng_2_d: "Horarios sugeridos según los ciclos de sueño y un recordatorio antes de acostarte.",
    ng_3_t: "Resumen matutino",
    ng_3_d: "Apenas te levantas: el clima del día, tu racha y la próxima alarma.",
    ng_4_t: "Widget en la pantalla de inicio",
    ng_4_d: "Próxima alarma y racha sin abrir la app. Disponible en Android.",

    pr_title: "Gratis para siempre. Premium si quieres más.",
    pr_sub: "El plan gratis no caduca y no tiene anuncios. Premium desbloquea las misiones de cámara, alarmas ilimitadas y combos.",
    pl_free: "Gratis",
    pl_free_per: "Para siempre, sin tarjeta",
    pl_free_1: "Hasta 2 alarmas",
    pl_free_2: "Caminar, agitar, matemáticas, escritura y “Di la frase”",
    pl_free_3: "Racha, congelamientos y tarjeta “Me levanté”",
    pl_free_4: "Sonidos para dormir y resumen matutino",
    pl_free_cta: "Descargar gratis",
    pl_prem: "Premium",
    pl_prem_per: "Mensual, anual o de por vida. El precio aparece en la tienda, según tu región.",
    pl_prem_1: "Todo lo del plan gratis",
    pl_prem_2: "Flexiones, sentadillas, baile, foto, foto del cielo y código QR",
    pl_prem_3: "Alarmas ilimitadas",
    pl_prem_4: "Combos de hasta 3 misiones",
    tr_title: "Prueba de 7 días en el plan anual, sin sorpresas",
    tr_1: "Hoy",
    tr_1_d: "Acceso total",
    tr_2: "Día 5",
    tr_2_d: "Te avisamos",
    tr_3: "Día 7",
    tr_3_d: "Primer cobro",
    tr_cancel: "Recordatorio 2 días antes del cobro. Cancela en 2 toques en la tienda.",
    pl_prem_cta: "Probar Premium",
    price_note: "La prueba gratis de 7 días es para nuevos suscriptores del plan anual. La tienda pide un método de pago para iniciarla y, si cancelas antes de que termine, no se cobra nada. La suscripción la cobra Google Play o App Store y se renueva automáticamente; cancela cuando quieras en los ajustes de la tienda. El plan de por vida es una compra única, sin renovación.",

    fq_title: "Preguntas que escuchamos seguido",
    fq_1_q: "¿Tengo que pagar para usarla?",
    fq_1_a: "No. El plan gratis no caduca, no tiene anuncios e incluye cinco misiones, hasta 2 alarmas, racha y sonidos para dormir.",
    fq_2_q: "¿La cámara o el micrófono envían algo?",
    fq_2_a: "No. Flexiones, sentadillas, baile, fotos y la frase hablada se analizan en el propio móvil. No se envía nada a servidores.",
    fq_3_q: "¿Y si la misión no funciona en ese momento?",
    fq_3_a: "La alarma nunca se traba. Si la foto del cielo no pasa, por ejemplo, eliges otra misión para apagarla.",
    fq_4_q: "¿Cómo cancelo la prueba de Premium?",
    fq_4_a: "En App Store o Google Play: Gestionar y luego Cancelar suscripción. La app te avisa 2 días antes del primer cobro.",
    fq_5_q: "¿El sonido sigue durante la misión?",
    fq_5_a: "Lo eliges en cada alarma: volumen normal, bajo o silencio. En silencio, la alarma vuelve a sonar si te detienes a mitad de la misión.",

    dl_title: "Mañana, levántate a la primera.",
    dl_sub: "Descarga WakeWalk y deja que Bip se encargue del resto.",
    store_ios_1: "Descárgalo en el",
    store_and_1: "Disponible en",

    footer_tag: "El despertador que solo se apaga cuando sales de la cama.",
    footer_product: "Producto",
    footer_download: "Descargar",
    footer_legal: "Legal",
    privacy: "Política de Privacidad",
    terms: "Términos de Uso",
    account_del: "Eliminación de Cuenta",
    footer_contact: "Contacto",
    footer_rights: "© 2026 WakeWalk. Todos los derechos reservados.",
    footer_legal_lang: "Las páginas legales están disponibles en portugués e inglés.",
  };

  const STR = { pt: null, en: EN, es: ES };
  const HTML_LANG = { pt: "pt-BR", en: "en", es: "es" };
  const OG_LOCALE = { pt: "pt_BR", en: "en_US", es: "es_ES" };
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  let current = "pt";

  // Lê o português do HTML uma única vez (antes de qualquer troca).
  function readPt() {
    const pt = Object.assign({}, EXTRA_PT);
    $$("[data-i18n]").forEach((el) => { pt[el.dataset.i18n] = el.textContent; });
    $$("[data-i18n-content]").forEach((el) => { pt[el.dataset.i18nContent] = el.getAttribute("content"); });
    $$("[data-i18n-aria]").forEach((el) => { pt[el.dataset.i18nAria] = el.getAttribute("aria-label"); });
    return pt;
  }

  function apply(lang) {
    if (!STR[lang]) lang = "pt";
    current = lang;
    const dict = STR[lang];
    const t = (k) => (dict[k] != null ? dict[k] : STR.pt[k]);
    document.documentElement.lang = HTML_LANG[lang];
    $$("[data-i18n]").forEach((el) => { const v = t(el.dataset.i18n); if (v != null) el.textContent = v; });
    $$("[data-i18n-content]").forEach((el) => { const v = t(el.dataset.i18nContent); if (v != null) el.setAttribute("content", v); });
    $$("[data-i18n-aria]").forEach((el) => { const v = t(el.dataset.i18nAria); if (v != null) el.setAttribute("aria-label", v); });
    const og = document.querySelector('meta[property="og:locale"]');
    if (og) og.setAttribute("content", OG_LOCALE[lang]);
    // cada variante (?lang=) é canônica de si mesma, senão o hreflang é ignorado
    const canon = document.querySelector('link[rel="canonical"]');
    if (canon) {
      const base = canon.href.split("?")[0];
      canon.href = lang === "pt" ? base : base + "?lang=" + lang;
    }
    const note = document.querySelector(".legal-lang");
    if (note) note.hidden = !t("footer_legal_lang");
    $$(".lang button").forEach((b) => {
      const on = b.dataset.lang === lang;
      b.classList.toggle("on", on);
      b.setAttribute("aria-pressed", String(on));
    });
    syncMission();
    try { localStorage.setItem("ww_lang", lang); } catch (e) {}
  }

  function pickLang() {
    try {
      const q = new URLSearchParams(location.search).get("lang");
      if (STR[q] !== undefined) return q;
    } catch (e) {}
    try {
      const saved = localStorage.getItem("ww_lang");
      if (STR[saved] !== undefined) return saved;
    } catch (e) {}
    const nav = (navigator.language || "").toLowerCase();
    if (nav.startsWith("es")) return "es";
    if (nav.startsWith("en")) return "en";
    return "pt";
  }

  // ------------------------------------------------ missões: a lista conduz o palco (Bip + texto)
  function syncMission() {
    const sel = document.querySelector('.ms-btn[aria-pressed="true"]');
    if (!sel) return;
    const dict = STR[current] || STR.pt;
    const tier = sel.dataset.tier;
    const tierEl = document.getElementById("ms-tier");
    tierEl.dataset.tier = tier;
    tierEl.textContent = (dict["ms_tier_" + tier] != null ? dict : STR.pt)["ms_tier_" + tier];
    document.getElementById("ms-name").textContent = sel.querySelector(".ms-n").textContent;
    document.getElementById("ms-desc").textContent = sel.querySelector(".ms-d").textContent;
  }
  function initMissions() {
    const bip = document.getElementById("ms-bip");
    $$(".ms-btn").forEach((btn) => btn.addEventListener("click", () => {
      $$(".ms-btn").forEach((b) => b.setAttribute("aria-pressed", String(b === btn)));
      if (window.WWBip && bip) window.WWBip.play(bip, btn.dataset.anim);
      const icon = document.getElementById("ms-icon");
      icon.textContent = btn.querySelector(".ww-icon").textContent;
      const bubble = icon.parentElement;
      bubble.classList.remove("pop"); void bubble.offsetWidth; bubble.classList.add("pop");
      syncMission();
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
    STR.pt = readPt();
    apply(pickLang());
    $$(".lang button").forEach((b) => b.addEventListener("click", () => {
      apply(b.dataset.lang);
      try {
        const u = new URL(location.href);
        u.searchParams.set("lang", b.dataset.lang);
        history.replaceState(null, "", u);
      } catch (e) {}
    }));
    initMissions();
    radioGroup(document.getElementById("snd-seg"), (it) => {
      $$("[data-snd-hint]").forEach((p) => { p.hidden = p.dataset.sndHint !== it.dataset.snd; });
    });
    const receipt = document.getElementById("receipt");
    radioGroup(document.getElementById("rc-styles"), (it) => { receipt.dataset.style = it.dataset.style; });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
