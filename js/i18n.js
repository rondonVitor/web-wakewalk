// Funções de internacionalização

// Linguagem padrão e linguagem atual
let currentLanguage = 'pt'; // Linguagem padrão (português)

// Inicializa a tradução
function initializeI18n() {
  // Verifica se há uma linguagem salva no localStorage
  const savedLanguage = localStorage.getItem('wakewalk_language');
  if (savedLanguage && translations[savedLanguage]) {
    currentLanguage = savedLanguage;
  } else {
    // Tenta detectar o idioma do navegador
    const browserLanguage = navigator.language.split('-')[0]; // Ex: 'pt-BR' => 'pt'
    if (translations[browserLanguage]) {
      currentLanguage = browserLanguage;
    }
  }

  // Atualiza o seletor de idioma
  const languageSelector = document.getElementById('language-selector');
  if (languageSelector) {
    languageSelector.value = currentLanguage;
  }

  // Aplica as traduções iniciais
  applyTranslations();
}

// Altera o idioma e salva no localStorage
function changeLanguage(language) {
  if (translations[language]) {
    currentLanguage = language;
    localStorage.setItem('wakewalk_language', language);
    applyTranslations();
  }
}

// Aplica as traduções na página
function applyTranslations() {
  const elements = document.querySelectorAll('[data-i18n]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    
    if (translations[currentLanguage][key]) {
      // Verifica se o elemento é um input placeholder
      if (element.hasAttribute('placeholder')) {
        element.setAttribute('placeholder', translations[currentLanguage][key]);
      } else {
        // Caso contrário, atualiza o conteúdo interno
        element.textContent = translations[currentLanguage][key];
      }
    }
  });

  // Atualiza o atributo lang do HTML
  document.documentElement.setAttribute('lang', currentLanguage);
}

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initializeI18n); 