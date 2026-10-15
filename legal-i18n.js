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
      footer_contact: "Contato", footer_rights: "© 2026 WakeWalk. Todos os direitos reservados.",

      /* ---------- PRIVACY ---------- */
      pv_eyebrow: "Privacidade",
      pv_title: "Política de Privacidade",
      pv_lead: "Como o WakeWalk coleta, usa e protege as suas informações. Em resumo: sem conta, sem login, e seus alarmes e estatísticas ficam no seu aparelho.",
      pv_updated: "Última atualização: 15 de outubro de 2026",

      pv_s1_h: "Introdução",
      pv_s1_p: "Obrigado por usar o WakeWalk. Esta Política de Privacidade descreve quais informações o aplicativo coleta, como elas são usadas e com quem são compartilhadas. O WakeWalk tem um plano grátis permanente e um plano Premium opcional, por assinatura ou compra única.",

      pv_s2_h: "Informações que coletamos",
      pv_s2_p: "O WakeWalk coleta apenas o necessário para funcionar e melhorar:",
      pv_s2_1: "Sem conta: o WakeWalk não exige cadastro nem login e não pede seu nome ou e-mail para funcionar.",
      pv_s2_2: "Dados no aparelho: seus alarmes, preferências, estatísticas, sequências e status do Premium ficam armazenados apenas no seu dispositivo.",
      pv_s2_3: "Análises de uso: usamos o Firebase Analytics (Google) para registrar eventos como alarme criado, missão concluída ou conquista desbloqueada. Esses eventos são associados a identificadores do aparelho e da instalação do app (e, no Android, ao ID de publicidade), usados só para estatísticas de uso — não para rastrear você em apps ou sites de outras empresas nem para exibir anúncios. Eles não são vinculados ao seu nome nem a outro dado que identifique você.",
      pv_s2_4: "Diagnóstico de falhas: usamos o Firebase Crashlytics (Google) para coletar relatórios de erro e dados técnicos do aparelho (como modelo e versão do sistema) e corrigir problemas.",
      pv_s2_5: "Câmera e sensores de movimento: para validar as missões, o app usa a câmera e os sensores de passos/movimento do aparelho. As imagens da câmera são analisadas no próprio dispositivo e descartadas em seguida — nunca são gravadas nem enviadas. Os dados de passos e movimento também ficam no aparelho.",
      pv_s2_6: "Localização (opcional): só se você permitir, o app envia sua localização aproximada — arredondada a cerca de 1 km — ao serviço de clima Open-Meteo para mostrar a previsão do tempo no briefing matinal. Essa localização não é armazenada por nós nem vinculada a você. Sem a permissão, o briefing aparece sem o clima.",
      pv_s2_7: "Compras: as assinaturas e a compra vitalícia são processadas pela Google Play e pela App Store; não recebemos nem armazenamos dados de pagamento. No Android, o comprovante (token) da compra pode ser verificado no nosso servidor (Firebase Cloud Functions, do Google) junto à Google Play, para prevenir fraude.",
      pv_s2_8: "O que não coletamos: nome, e-mail, contatos, fotos ou vídeos, gravações de áudio e dados de passos ou movimento.",

      pv_s3_h: "Como usamos suas informações",
      pv_s3_p: "Usamos suas informações para:",
      pv_s3_1: "Operar e melhorar o aplicativo e seus recursos.",
      pv_s3_2: "Entender, de forma agregada, como os recursos são usados.",
      pv_s3_3: "Diagnosticar e corrigir falhas e problemas técnicos.",
      pv_s3_4: "Verificar compras e liberar o Premium.",
      pv_s3_5: "Mostrar a previsão do tempo no briefing matinal, quando você permite a localização.",

      pv_s4_h: "Compartilhamento de informações",
      pv_s4_p: "Não vendemos suas informações nem as usamos para publicidade. Elas só são compartilhadas nas situações abaixo:",
      pv_s4_1: "Com provedores que operam partes do app: Google (Firebase Analytics, Crashlytics e Cloud Functions), Open-Meteo (previsão do tempo) e as lojas Google Play e App Store (compras).",
      pv_s4_2: "Quando exigido por lei ou para proteger nossos direitos legais.",
      pv_s4_3: "O app não tem anúncios e não compartilha dados com redes de publicidade.",

      pv_s5_h: "Seus direitos e escolhas",
      pv_s5_p: "Você tem direitos sobre seus dados pessoais, inclusive os previstos na Lei Geral de Proteção de Dados (LGPD). Como o WakeWalk não tem conta, a maior parte deles você exerce no próprio aparelho:",
      pv_s5_1: "Apagar os dados do app a qualquer momento, limpando os dados ou desinstalando o aplicativo (veja a página Exclusão de Conta).",
      pv_s5_2: "Negar ou revogar as permissões de câmera, localização, atividade física e notificações nas configurações do aparelho.",
      pv_s5_3: "No Android, redefinir ou excluir o ID de publicidade nas configurações do sistema.",
      pv_s5_4: "Pedir informações ou a remoção dos dados de análise e falhas pelo e-mail de contato abaixo.",

      pv_s6_h: "Segurança de dados",
      pv_s6_p: "Toda a comunicação com os serviços citados acima usa conexão criptografada (HTTPS). Os dados guardados no aparelho ficam protegidos pelos mecanismos de segurança do próprio sistema operacional.",

      pv_s7_h: "Alterações nesta política",
      pv_s7_p: "Podemos atualizar esta Política de Privacidade periodicamente. Como não temos o seu e-mail, avisaremos sobre mudanças significativas no aplicativo ou nesta página, e a data de \"Última atualização\" acima será alterada.",

      pv_s8_h: "Contato",
      pv_s8_p_html: "Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco em <a href=\"mailto:givoxmobile@gmail.com\">givoxmobile@gmail.com</a>.",

      /* ---------- TERMS ---------- */
      tm_eyebrow: "Termos",
      tm_title: "Termos de Uso",
      tm_lead: "As regras para usar o WakeWalk. Ao instalar e usar o app, você concorda com os termos abaixo.",
      tm_updated: "Última atualização: 15 de outubro de 2026",

      tm_s1_h: "Aceitação dos termos",
      tm_s1_p: "Ao baixar, instalar ou usar o aplicativo WakeWalk, você concorda com estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não use o aplicativo.",

      tm_s2_h: "Descrição do serviço",
      tm_s2_p: "O WakeWalk é um despertador que exige completar uma missão para ser desativado. O aplicativo inclui:",
      tm_s2_1: "Alarmes com missões para desligar: passos, matemática, digitação e chacoalhar e, no Premium, flexão, agachamento, foto e QR code pela câmera.",
      tm_s2_2: "Um plano grátis permanente, com até 2 alarmes e as missões de passos, matemática, digitação e chacoalhar, sem anúncios.",
      tm_s2_3: "Um plano Premium opcional, com alarmes ilimitados, missões com câmera e até 3 missões em sequência no mesmo alarme.",

      tm_s3_h: "Sem necessidade de conta",
      tm_s3_p: "O WakeWalk funciona sem cadastro ou login. Não criamos contas nem pedimos nome, e-mail ou senha — suas configurações e dados ficam no seu próprio aparelho. Saiba mais na nossa Política de Privacidade.",

      tm_s4_h: "Assinaturas e pagamentos",
      tm_s4_p: "O plano grátis não tem prazo para acabar. O Premium é opcional e pode ser obtido de duas formas:",
      tm_s4_1: "Por assinatura (semanal, mensal ou anual, conforme os planos disponíveis na loja), cobrada pela Google Play ou pela App Store e renovada automaticamente ao fim de cada período, a menos que seja cancelada antes da renovação, conforme as regras da loja.",
      tm_s4_2: "O plano anual tem 7 dias de teste grátis para novos assinantes elegíveis. A loja pode pedir uma forma de pagamento para iniciar o teste; se você cancelar antes do fim do teste, não é cobrado. Sem cancelamento, a assinatura anual começa ao fim do teste e é cobrada automaticamente.",
      tm_s4_3: "Por compra única vitalícia, que libera o Premium sem renovação nem cobranças recorrentes.",
      tm_s4_4: "Os preços são exibidos na loja e no app antes da compra e podem variar por país. Você pode cancelar a renovação a qualquer momento nas configurações de assinaturas da sua loja; o acesso continua até o fim do período já pago.",
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
      footer_contact: "Contact", footer_rights: "© 2026 WakeWalk. All rights reserved.",

      /* ---------- PRIVACY ---------- */
      pv_eyebrow: "Privacy",
      pv_title: "Privacy Policy",
      pv_lead: "How WakeWalk collects, uses and protects your information. In short: no account, no login, and your alarms and statistics stay on your device.",
      pv_updated: "Last updated: October 15, 2026",

      pv_s1_h: "Introduction",
      pv_s1_p: "Thank you for using WakeWalk. This Privacy Policy describes what information the app collects, how it is used and who it is shared with. WakeWalk has a permanent free plan and an optional Premium plan, available as a subscription or a one-time purchase.",

      pv_s2_h: "Information we collect",
      pv_s2_p: "WakeWalk collects only what it needs to work and improve:",
      pv_s2_1: "No account: WakeWalk requires no sign-up or login and does not ask for your name or email to work.",
      pv_s2_2: "On-device data: your alarms, preferences, statistics, streaks and Premium status are stored only on your device.",
      pv_s2_3: "Usage analytics: we use Firebase Analytics (Google) to log events such as alarm created, mission completed or achievement unlocked. These events are associated with device and app-installation identifiers (and, on Android, the advertising ID), used only for usage statistics — not to track you across other companies' apps or websites, and not to show ads. They are not linked to your name or any other data that identifies you.",
      pv_s2_4: "Crash diagnostics: we use Firebase Crashlytics (Google) to collect error reports and technical device data (such as model and OS version) to fix problems.",
      pv_s2_5: "Camera and motion sensors: to validate missions, the app uses the camera and the device's step/motion sensors. Camera images are analyzed on the device itself and discarded right after — never recorded or uploaded. Step and motion data also stay on the device.",
      pv_s2_6: "Location (optional): only if you allow it, the app sends your approximate location — rounded to about 1 km — to the Open-Meteo weather service to show the forecast in the morning briefing. This location is not stored by us or linked to you. Without the permission, the briefing is shown without the weather.",
      pv_s2_7: "Purchases: subscriptions and the lifetime purchase are processed by Google Play and the App Store; we do not receive or store payment data. On Android, the purchase receipt (token) may be verified by our server (Firebase Cloud Functions, by Google) with Google Play to prevent fraud.",
      pv_s2_8: "What we don't collect: name, email, contacts, photos or videos, audio recordings, and step or motion data.",

      pv_s3_h: "How we use your information",
      pv_s3_p: "We use your information to:",
      pv_s3_1: "Operate and improve the app and its features.",
      pv_s3_2: "Understand, in aggregate, how features are used.",
      pv_s3_3: "Diagnose and fix crashes and technical problems.",
      pv_s3_4: "Verify purchases and unlock Premium.",
      pv_s3_5: "Show the weather forecast in the morning briefing, when you allow location access.",

      pv_s4_h: "Information sharing",
      pv_s4_p: "We do not sell your information or use it for advertising. It is shared only in the situations below:",
      pv_s4_1: "With providers that run parts of the app: Google (Firebase Analytics, Crashlytics and Cloud Functions), Open-Meteo (weather forecast) and the Google Play and App Store (purchases).",
      pv_s4_2: "When required by law or to protect our legal rights.",
      pv_s4_3: "The app has no ads and does not share data with advertising networks.",

      pv_s5_h: "Your rights and choices",
      pv_s5_p: "You have rights over your personal data, including those under applicable data-protection laws such as Brazil's LGPD. Since WakeWalk has no account, you exercise most of them on your own device:",
      pv_s5_1: "Erase the app's data at any time by clearing its data or uninstalling the app (see the Account Deletion page).",
      pv_s5_2: "Deny or revoke camera, location, physical activity and notification permissions in your device settings.",
      pv_s5_3: "On Android, reset or delete the advertising ID in the system settings.",
      pv_s5_4: "Request information about, or removal of, analytics and crash data via the contact email below.",

      pv_s6_h: "Data security",
      pv_s6_p: "All communication with the services listed above uses an encrypted connection (HTTPS). Data stored on your device is protected by the operating system's own security mechanisms.",

      pv_s7_h: "Changes to this policy",
      pv_s7_p: "We may update this Privacy Policy from time to time. Since we don't have your email, we will announce significant changes in the app or on this page, and the \"Last updated\" date above will change.",

      pv_s8_h: "Contact",
      pv_s8_p_html: "If you have questions about this Privacy Policy, contact us at <a href=\"mailto:givoxmobile@gmail.com\">givoxmobile@gmail.com</a>.",

      /* ---------- TERMS ---------- */
      tm_eyebrow: "Terms",
      tm_title: "Terms of Use",
      tm_lead: "The rules for using WakeWalk. By installing and using the app, you agree to the terms below.",
      tm_updated: "Last updated: October 15, 2026",

      tm_s1_h: "Acceptance of terms",
      tm_s1_p: "By downloading, installing or using the WakeWalk app, you agree to these Terms of Use. If you do not agree with any part of these terms, do not use the app.",

      tm_s2_h: "Service description",
      tm_s2_p: "WakeWalk is an alarm that requires completing a mission to be dismissed. The app includes:",
      tm_s2_1: "Alarms with missions to dismiss them: steps, math, typing and shake and, with Premium, push-ups, squats, photo and QR code via the camera.",
      tm_s2_2: "A permanent free plan, with up to 2 alarms and the steps, math, typing and shake missions, with no ads.",
      tm_s2_3: "An optional Premium plan, with unlimited alarms, camera missions and up to 3 chained missions per alarm.",

      tm_s3_h: "No account needed",
      tm_s3_p: "WakeWalk works without sign-up or login. We don't create accounts or ask for your name, email or password — your settings and data stay on your own device. Learn more in our Privacy Policy.",

      tm_s4_h: "Subscriptions and payments",
      tm_s4_p: "The free plan never expires. Premium is optional and is available in two ways:",
      tm_s4_1: "As a subscription (weekly, monthly or yearly, depending on the plans available in the store), billed by Google Play or the App Store and automatically renewed at the end of each period unless canceled before the renewal, according to the store's rules.",
      tm_s4_2: "The yearly plan includes a 7-day free trial for eligible new subscribers. The store may ask for a payment method to start the trial; if you cancel before the trial ends, you are not charged. Unless canceled, the yearly subscription starts when the trial ends and is billed automatically.",
      tm_s4_3: "As a one-time lifetime purchase, which unlocks Premium with no renewal or recurring charges.",
      tm_s4_4: "Prices are shown in the store and in the app before purchase and may vary by country. You can cancel the renewal at any time in your store's subscription settings; access continues until the end of the period already paid.",
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
