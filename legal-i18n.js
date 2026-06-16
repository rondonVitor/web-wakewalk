/* WakeWalk — legal pages i18n (PT-BR default + EN), TOC builder, scrollspy, reveal.
   Shares the ww_lang key with the landing page so the choice persists across pages. */
(function () {
  const STR = {
    pt: {
      /* shared chrome */
      nav_how: "Como funciona", nav_features: "Recursos", nav_sleep: "Sono", nav_pricing: "Assinatura",
      hdr_cta: "Baixar app",
      back_home: "Voltar para a página inicial",
      toc_title: "Nesta página",
      footer_tag: "O único despertador que garante que você levanta — acorde com movimento, comece o dia melhor.",
      footer_product: "Produto", footer_legal: "Legal", footer_features: "Recursos",
      footer_pricing: "Assinatura", footer_download: "Baixar",
      privacy: "Política de Privacidade", terms: "Termos de Uso", account_del: "Exclusão de Conta",
      footer_contact: "Contato", footer_rights: "© 2025 WakeWalk. Todos os direitos reservados.",

      /* ---------- PRIVACY ---------- */
      pv_eyebrow: "Privacidade",
      pv_title: "Política de Privacidade",
      pv_lead: "Como o WakeWalk coleta, usa e protege as suas informações. Em resumo: sem conta, sem login, e seus dados ficam no seu aparelho.",
      pv_updated: "Última atualização: 1 de Janeiro de 2025",

      pv_s1_h: "Introdução",
      pv_s1_p: "Obrigado por usar o WakeWalk. Esta Política de Privacidade descreve como coletamos, usamos e compartilhamos suas informações quando você usa nosso aplicativo de alarme com detecção de movimento. O WakeWalk oferece um período de teste gratuito de 3 dias seguido por um modelo de assinatura para acesso contínuo.",

      pv_s2_h: "Informações que coletamos",
      pv_s2_p: "Nós coletamos as seguintes categorias de informações:",
      pv_s2_1: "Sem conta: o WakeWalk não exige cadastro nem login e não pede seu nome ou e-mail para funcionar.",
      pv_s2_2: "Dados no aparelho: seus alarmes, preferências, estatísticas, sequências e status do teste/assinatura ficam armazenados apenas no seu dispositivo.",
      pv_s2_3: "Análises de uso anônimas: usamos o Firebase Analytics (Google) para registrar eventos como alarme criado, missão concluída ou conquista desbloqueada, sem identificar você pessoalmente.",
      pv_s2_4: "Diagnóstico de falhas: usamos o Firebase Crashlytics (Google) para coletar relatórios de erro e dados técnicos do aparelho e corrigir problemas.",
      pv_s2_5: "Câmera e sensores de movimento: para validar as missões, o app usa a câmera e os sensores de passos/movimento do aparelho. As fotos são analisadas no próprio dispositivo e descartadas em seguida — nunca são enviadas ou armazenadas. O app pode pedir permissão de localização para apoiar a detecção de movimento; esses dados não são coletados nem compartilhados por nós.",
      pv_s2_6: "Compras: as assinaturas são processadas pela Google Play e pela App Store; não recebemos nem armazenamos os dados do seu pagamento.",

      pv_s3_h: "Como usamos suas informações",
      pv_s3_p: "Usamos suas informações para:",
      pv_s3_1: "Operar e melhorar o aplicativo e seus recursos.",
      pv_s3_2: "Entender, de forma agregada e anônima, como os recursos são usados.",
      pv_s3_3: "Diagnosticar e corrigir falhas e problemas técnicos.",
      pv_s3_4: "Processar e validar sua assinatura.",

      pv_s4_h: "Compartilhamento de informações",
      pv_s4_p: "Não compartilhamos suas informações pessoais com terceiros, exceto nas seguintes circunstâncias:",
      pv_s4_1: "Com provedores de serviços que nos ajudam a operar o aplicativo.",
      pv_s4_2: "Quando exigido por lei ou para proteger nossos direitos legais.",
      pv_s4_3: "Em caso de fusão, venda ou transferência de ativos.",

      pv_s5_h: "Seus direitos e escolhas",
      pv_s5_p: "Você tem certos direitos sobre suas informações pessoais, incluindo:",
      pv_s5_1: "Acessar e obter uma cópia de suas informações.",
      pv_s5_2: "Corrigir informações imprecisas.",
      pv_s5_3: "Excluir suas informações em certas circunstâncias.",
      pv_s5_4: "Recusar o processamento de seus dados para marketing.",

      pv_s6_h: "Segurança de dados",
      pv_s6_p: "Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra acesso não autorizado, perda ou alteração.",

      pv_s7_h: "Alterações nesta política",
      pv_s7_p: "Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre mudanças significativas por meio do aplicativo ou por e-mail.",

      pv_s8_h: "Contato",
      pv_s8_p_html: "Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco em <a href=\"mailto:givoxmobile@gmail.com\">givoxmobile@gmail.com</a>.",

      /* ---------- TERMS ---------- */
      tm_eyebrow: "Termos",
      tm_title: "Termos de Uso",
      tm_lead: "As regras para usar o WakeWalk. Ao instalar e usar o app, você concorda com os termos abaixo.",
      tm_updated: "Última atualização: 1 de Janeiro de 2025",

      tm_s1_h: "Aceitação dos termos",
      tm_s1_p: "Ao baixar, instalar ou usar o aplicativo WakeWalk, você concorda com estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não use o aplicativo.",

      tm_s2_h: "Descrição do serviço",
      tm_s2_p: "O WakeWalk é um despertador que exige completar uma missão para ser desativado. O aplicativo inclui:",
      tm_s2_1: "Alarmes com missões de movimento (passos) ou de foto.",
      tm_s2_2: "Período de teste gratuito de 3 dias.",
      tm_s2_3: "Assinatura necessária após o período de teste.",

      tm_s3_h: "Sem necessidade de conta",
      tm_s3_p: "O WakeWalk funciona sem cadastro ou login. Não criamos contas nem pedimos nome, e-mail ou senha — suas configurações e dados ficam no seu próprio aparelho. Saiba mais na nossa Política de Privacidade.",

      tm_s4_h: "Assinaturas e pagamentos",
      tm_s4_p: "O WakeWalk está disponível através de assinaturas pagas:",
      tm_s4_1: "Oferecemos um período de teste gratuito de 3 dias.",
      tm_s4_2: "Após o teste, a assinatura é necessária para usar o aplicativo.",
      tm_s4_3: "As assinaturas são renovadas automaticamente a menos que canceladas.",
      tm_s4_4: "Você pode cancelar a qualquer momento através das configurações da sua loja de aplicativos.",
      tm_s4_5: "Os reembolsos são processados de acordo com as políticas da Google Play ou App Store.",

      tm_s5_h: "Uso aceitável",
      tm_s5_p: "Você concorda em não:",
      tm_s5_1: "Modificar, descompilar ou fazer engenharia reversa do aplicativo.",
      tm_s5_2: "Usar o aplicativo para qualquer finalidade ilegal ou não autorizada.",
      tm_s5_3: "Interferir no funcionamento adequado do serviço.",
      tm_s5_4: "Tentar contornar quaisquer medidas de segurança.",

      tm_s6_h: "Propriedade intelectual",
      tm_s6_p: "O aplicativo WakeWalk e todo o seu conteúdo são propriedade exclusiva nossa e são protegidos por leis de propriedade intelectual. Você não tem permissão para reproduzir, distribuir ou criar trabalhos derivados sem autorização.",

      tm_s7_h: "Isenção de responsabilidade",
      tm_s7_p: "O aplicativo é fornecido \"como está\", sem garantias de qualquer tipo. Não garantimos que o alarme funcionará perfeitamente em todas as situações, especialmente em casos de problemas com sensores, bateria baixa ou falhas de hardware.",

      tm_s8_h: "Limitação de responsabilidade",
      tm_s8_p: "Em nenhuma circunstância seremos responsáveis por danos indiretos, incidentais ou consequenciais relacionados ao uso ou incapacidade de usar o aplicativo, incluindo mas não limitado a perdas devido a alarmes que não funcionaram conforme esperado.",

      tm_s9_h: "Alterações nos termos",
      tm_s9_p: "Reservamo-nos o direito de modificar estes termos a qualquer momento. Notificaremos os usuários sobre alterações significativas. O uso contínuo do aplicativo após tais modificações constitui aceitação dos novos termos.",

      tm_s10_h: "Lei aplicável",
      tm_s10_p: "Estes termos são regidos pelas leis do Brasil, sem consideração aos princípios de conflitos de leis.",

      tm_s11_h: "Contato",
      tm_s11_p_html: "Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco em <a href=\"mailto:givoxmobile@gmail.com\">givoxmobile@gmail.com</a>.",

      /* ---------- ACCOUNT DELETION ---------- */
      ad_eyebrow: "Seus dados",
      ad_title: "Exclusão de Conta e Dados",
      ad_lead: "O WakeWalk funciona sem conta: você não cria cadastro nem login, e não pedimos nome ou e-mail. Por isso, não existe uma \"conta\" em nossos servidores para excluir. Seus dados — alarmes, preferências, estatísticas e sequências — ficam armazenados apenas no seu aparelho.",

      ad_s1_h: "Como apagar seus dados",
      ad_s1_p: "Como tudo é guardado localmente, basta remover os dados do app no seu dispositivo:",
      ad_and_h: "Android",
      ad_and_p_html: "Configurações → Aplicativos → WakeWalk → Armazenamento → <strong>Limpar dados</strong>; ou desinstale o aplicativo.",
      ad_ios_h: "iPhone / iPad",
      ad_ios_p_html: "Mantenha o ícone do WakeWalk pressionado → Remover app → <strong>Excluir app</strong>. Isso apaga todos os dados locais.",

      ad_s2_h: "Cancelar a assinatura",
      ad_s2_p: "Apagar os dados não cancela sua assinatura. Cancele pela loja onde assinou: Google Play (Assinaturas) ou App Store (Assinaturas). Sem renovação, a cobrança encerra ao fim do período já pago.",

      ad_s3_h: "Dados de análise e falhas",
      ad_s3_p_html: "As análises de uso e os relatórios de falhas anônimos são processados pelo Firebase (Google) e tratados conforme as políticas do Google. Eles não identificam você pessoalmente. Para solicitar a remoção desses dados, escreva para <a href=\"mailto:givoxmobile@gmail.com\">givoxmobile@gmail.com</a>.",

      ad_cta_h: "Precisa de ajuda?",
      ad_cta_p_html: "Fale com a gente em <a href=\"mailto:givoxmobile@gmail.com\">givoxmobile@gmail.com</a> e ajudamos com a remoção dos seus dados.",
    },

    en: {
      nav_how: "How it works", nav_features: "Features", nav_sleep: "Sleep", nav_pricing: "Pricing",
      hdr_cta: "Get the app",
      back_home: "Back to home",
      toc_title: "On this page",
      footer_tag: "The only alarm that guarantees you get up — wake with movement, start the day better.",
      footer_product: "Product", footer_legal: "Legal", footer_features: "Features",
      footer_pricing: "Pricing", footer_download: "Download",
      privacy: "Privacy Policy", terms: "Terms of Use", account_del: "Account Deletion",
      footer_contact: "Contact", footer_rights: "© 2025 WakeWalk. All rights reserved.",

      /* ---------- PRIVACY ---------- */
      pv_eyebrow: "Privacy",
      pv_title: "Privacy Policy",
      pv_lead: "How WakeWalk collects, uses and protects your information. In short: no account, no login, and your data stays on your device.",
      pv_updated: "Last updated: January 1, 2025",

      pv_s1_h: "Introduction",
      pv_s1_p: "Thank you for using WakeWalk. This Privacy Policy describes how we collect, use and share your information when you use our motion-detection alarm app. WakeWalk offers a 3-day free trial followed by a subscription model for continued access.",

      pv_s2_h: "Information we collect",
      pv_s2_p: "We collect the following categories of information:",
      pv_s2_1: "No account: WakeWalk requires no sign-up or login and does not ask for your name or email to work.",
      pv_s2_2: "On-device data: your alarms, preferences, statistics, streaks and trial/subscription status are stored only on your device.",
      pv_s2_3: "Anonymous usage analytics: we use Firebase Analytics (Google) to log events such as alarm created, mission completed or achievement unlocked, without identifying you personally.",
      pv_s2_4: "Crash diagnostics: we use Firebase Crashlytics (Google) to collect error reports and technical device data to fix problems.",
      pv_s2_5: "Camera and motion sensors: to validate missions, the app uses the camera and the device's step/motion sensors. Photos are analyzed on the device itself and discarded right after — never uploaded or stored. The app may request location permission to support motion detection; that data is not collected or shared by us.",
      pv_s2_6: "Purchases: subscriptions are processed by Google Play and the App Store; we do not receive or store your payment data.",

      pv_s3_h: "How we use your information",
      pv_s3_p: "We use your information to:",
      pv_s3_1: "Operate and improve the app and its features.",
      pv_s3_2: "Understand, in an aggregated and anonymous way, how features are used.",
      pv_s3_3: "Diagnose and fix crashes and technical problems.",
      pv_s3_4: "Process and validate your subscription.",

      pv_s4_h: "Information sharing",
      pv_s4_p: "We do not share your personal information with third parties, except in the following circumstances:",
      pv_s4_1: "With service providers who help us operate the app.",
      pv_s4_2: "When required by law or to protect our legal rights.",
      pv_s4_3: "In the event of a merger, sale or transfer of assets.",

      pv_s5_h: "Your rights and choices",
      pv_s5_p: "You have certain rights over your personal information, including:",
      pv_s5_1: "Access and obtain a copy of your information.",
      pv_s5_2: "Correct inaccurate information.",
      pv_s5_3: "Delete your information in certain circumstances.",
      pv_s5_4: "Opt out of processing your data for marketing.",

      pv_s6_h: "Data security",
      pv_s6_p: "We implement technical and organizational security measures to protect your information against unauthorized access, loss or alteration.",

      pv_s7_h: "Changes to this policy",
      pv_s7_p: "We may update this Privacy Policy from time to time. We will notify you of significant changes through the app or by email.",

      pv_s8_h: "Contact",
      pv_s8_p_html: "If you have questions about this Privacy Policy, contact us at <a href=\"mailto:givoxmobile@gmail.com\">givoxmobile@gmail.com</a>.",

      /* ---------- TERMS ---------- */
      tm_eyebrow: "Terms",
      tm_title: "Terms of Use",
      tm_lead: "The rules for using WakeWalk. By installing and using the app, you agree to the terms below.",
      tm_updated: "Last updated: January 1, 2025",

      tm_s1_h: "Acceptance of terms",
      tm_s1_p: "By downloading, installing or using the WakeWalk app, you agree to these Terms of Use. If you do not agree with any part of these terms, do not use the app.",

      tm_s2_h: "Service description",
      tm_s2_p: "WakeWalk is an alarm that requires completing a mission to be dismissed. The app includes:",
      tm_s2_1: "Alarms with movement (steps) or photo missions.",
      tm_s2_2: "A 3-day free trial period.",
      tm_s2_3: "A subscription required after the trial period.",

      tm_s3_h: "No account needed",
      tm_s3_p: "WakeWalk works without sign-up or login. We don't create accounts or ask for your name, email or password — your settings and data stay on your own device. Learn more in our Privacy Policy.",

      tm_s4_h: "Subscriptions and payments",
      tm_s4_p: "WakeWalk is available through paid subscriptions:",
      tm_s4_1: "We offer a 3-day free trial period.",
      tm_s4_2: "After the trial, a subscription is required to use the app.",
      tm_s4_3: "Subscriptions renew automatically unless canceled.",
      tm_s4_4: "You can cancel at any time through your app store settings.",
      tm_s4_5: "Refunds are processed according to Google Play or App Store policies.",

      tm_s5_h: "Acceptable use",
      tm_s5_p: "You agree not to:",
      tm_s5_1: "Modify, decompile or reverse-engineer the app.",
      tm_s5_2: "Use the app for any illegal or unauthorized purpose.",
      tm_s5_3: "Interfere with the proper functioning of the service.",
      tm_s5_4: "Attempt to bypass any security measures.",

      tm_s6_h: "Intellectual property",
      tm_s6_p: "The WakeWalk app and all its content are our exclusive property and are protected by intellectual property laws. You may not reproduce, distribute or create derivative works without authorization.",

      tm_s7_h: "Disclaimer",
      tm_s7_p: "The app is provided \"as is\", without warranties of any kind. We do not guarantee that the alarm will work perfectly in all situations, especially in cases of sensor issues, low battery or hardware failures.",

      tm_s8_h: "Limitation of liability",
      tm_s8_p: "Under no circumstances will we be liable for indirect, incidental or consequential damages related to the use or inability to use the app, including but not limited to losses due to alarms that did not work as expected.",

      tm_s9_h: "Changes to the terms",
      tm_s9_p: "We reserve the right to modify these terms at any time. We will notify users of significant changes. Continued use of the app after such modifications constitutes acceptance of the new terms.",

      tm_s10_h: "Governing law",
      tm_s10_p: "These terms are governed by the laws of Brazil, without regard to conflict-of-law principles.",

      tm_s11_h: "Contact",
      tm_s11_p_html: "If you have questions about these Terms of Use, contact us at <a href=\"mailto:givoxmobile@gmail.com\">givoxmobile@gmail.com</a>.",

      /* ---------- ACCOUNT DELETION ---------- */
      ad_eyebrow: "Your data",
      ad_title: "Account & Data Deletion",
      ad_lead: "WakeWalk works without an account: you don't create a sign-up or login, and we don't ask for your name or email. So there is no \"account\" on our servers to delete. Your data — alarms, preferences, statistics and streaks — is stored only on your device.",

      ad_s1_h: "How to erase your data",
      ad_s1_p: "Since everything is stored locally, just remove the app's data on your device:",
      ad_and_h: "Android",
      ad_and_p_html: "Settings → Apps → WakeWalk → Storage → <strong>Clear data</strong>; or uninstall the app.",
      ad_ios_h: "iPhone / iPad",
      ad_ios_p_html: "Press and hold the WakeWalk icon → Remove App → <strong>Delete App</strong>. This erases all local data.",

      ad_s2_h: "Cancel the subscription",
      ad_s2_p: "Erasing your data does not cancel your subscription. Cancel through the store where you subscribed: Google Play (Subscriptions) or App Store (Subscriptions). Without renewal, billing ends at the close of the period already paid.",

      ad_s3_h: "Analytics and crash data",
      ad_s3_p_html: "Anonymous usage analytics and crash reports are processed by Firebase (Google) and handled according to Google's policies. They do not identify you personally. To request removal of that data, write to <a href=\"mailto:givoxmobile@gmail.com\">givoxmobile@gmail.com</a>.",

      ad_cta_h: "Need help?",
      ad_cta_p_html: "Reach us at <a href=\"mailto:givoxmobile@gmail.com\">givoxmobile@gmail.com</a> and we'll help you remove your data.",
    },
  };

  function apply(lang) {
    const dict = STR[lang] || STR.pt;
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const k = el.getAttribute("data-i18n");
      if (dict[k] != null) el.textContent = dict[k];
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const k = el.getAttribute("data-i18n-html");
      if (dict[k] != null) el.innerHTML = dict[k];
    });
    document.querySelectorAll(".lang button").forEach((b) => b.classList.toggle("on", b.dataset.lang === lang));
    try { localStorage.setItem("ww_lang", lang); } catch (e) {}
    buildTOC();
  }

  function buildTOC() {
    const toc = document.querySelector(".legal-toc ol");
    const article = document.querySelector(".legal-article");
    if (!toc || !article) return;
    const heads = article.querySelectorAll("h2");
    toc.innerHTML = "";
    heads.forEach((h, i) => {
      if (!h.id) h.id = "sec-" + (i + 1);
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = "#" + h.id;
      a.textContent = h.textContent;
      a.dataset.target = h.id;
      li.appendChild(a);
      toc.appendChild(li);
    });
  }

  function initLang() {
    let lang = "pt";
    try {
      const saved = localStorage.getItem("ww_lang");
      if (saved === "pt" || saved === "en") lang = saved;
      else if ((navigator.language || "").toLowerCase().startsWith("en")) lang = "en";
    } catch (e) {}
    apply(lang);
    document.querySelectorAll(".lang button").forEach((b) => {
      b.addEventListener("click", () => apply(b.dataset.lang));
    });
  }

  function initScrollSpy() {
    const links = () => Array.from(document.querySelectorAll(".legal-toc a"));
    const heads = () => Array.from(document.querySelectorAll(".legal-article h2"));
    function onScroll() {
      const hs = heads();
      let current = hs[0];
      for (const h of hs) {
        if (h.getBoundingClientRect().top <= 120) current = h;
      }
      links().forEach((a) => a.classList.toggle("active", current && a.dataset.target === current.id));
    }
    document.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("click", (e) => {
      const a = e.target.closest(".legal-toc a");
      if (!a) return;
      e.preventDefault();
      const el = document.getElementById(a.dataset.target);
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 96, behavior: "smooth" });
    });
    onScroll();
  }

  function init() {
    initLang();
    initScrollSpy();
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
      }, { threshold: 0.1 });
      document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    } else {
      document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
