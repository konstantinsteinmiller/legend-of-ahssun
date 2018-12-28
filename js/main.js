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
  const queries = location.search ? location.search.split('=') : [];
  const newQueries = queries.map(q => {
    return (q === 'de' || q === 'en')? locale : q;
  }).join('=');
  if (newQueries !== location.search) location.search = newQueries;
  localStorage.lang = locale;
}

function onLoad() {
  const queries = location.search ? location.search.split('=') : [];
  const lang = queries.filter(q => q === 'de' || q === 'en').pop();
  const storedLocale = lang ? lang : localStorage.lang
  if (lang === 'en') {
    setLanguage('en')
  } else if (storedLocale){
    setLanguage(storedLocale)
  } else {
    setLanguage('de')
  }
}