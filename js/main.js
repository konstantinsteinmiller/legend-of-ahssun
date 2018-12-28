function closeNavigation() {
  let toggle = document.querySelector('#navi-toggle');
  toggle.checked = false
}

function setLanguage(locale) {
  const $clearLocales = document.querySelector('.header__locale--selected');
  $clearLocales && $clearLocales.classList.remove('header__locale--selected');
  const $locale = document.querySelector('.header__locale--' + locale);
  $locale.classList.add('header__locale--selected')

  const $dataTNodes = document.querySelectorAll('[data-'+locale+']');
  $dataTNodes.forEach(node => {
    const translation = node.dataset[locale];
    node.innerHTML = translation;
  });
}

function onLoad() {
  const queries = location.search ? location.search.split('=') : [];
  const lang = queries.filter((q) => q === 'de' || q === 'en').pop();

  if (lang === 'de') {
    setLanguage('de')
  } else {
    setLanguage('en')
  }
}