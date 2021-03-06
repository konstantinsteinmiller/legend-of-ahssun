function closeNavigation() {
  let toggle = document.querySelector('#navi-toggle');
  toggle.checked = false
}

function setLanguage(locale) {
  const queries = location.search ? location.search.split('=') : [];
  const newQueries = queries.map(q => {
    return (q === 'de' || q === 'en')? locale : q;
  }).join('=');
  
  const $clearLocales = document.querySelector('.header__locale--selected');
  $clearLocales && $clearLocales.classList.remove('header__locale--selected');
  const $locale = document.querySelector('.header__locale--' + locale);
  $locale && $locale.classList.add('header__locale--selected')

  const $dataTNodes = document.querySelectorAll('[data-'+locale+']');
  $dataTNodes.forEach(node => {
    const translation = node.dataset[locale];
    node.innerHTML = translation;
  });

  if (newQueries !== location.search) location.search = newQueries;
  localStorage.lang = locale;
}

function onLoad() {
  const queries = location.search ? location.search.split('=') : [];
  const lang = queries.filter(q => q === 'de' || q === 'en').pop();
  const storedLocale = lang ? lang : localStorage.lang
  if (storedLocale){
    setLanguage(storedLocale)
  } else {
    setLanguage('de')
  }

  getNotificationSetting()
}

function downloadImage(event, img) {
  const link = document.createElement('a');
  link.href = img;
  link.download = img.split('/').pop();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  event.stopPropagation();
  event.preventDefault();
}

function showNotification(show) {
  console.log('show', show)
  const $notification = document.querySelector('.notification');
  if (localStorage.hideNotification
    && localStorage.hideNotification === "true"
    && show) {
    return
  }

  if (!show) {
    $notification.parentNode.removeChild($notification)
  } else {
    $notification.style.opacity = "1";
    $notification.style.visibility = "visible";
    $notification.style.height = "auto";
  }
}

function toggleNeverShowNotification() {
  const $notificationCheckbox = document.querySelector('.notification__input');
  localStorage.hideNotification = Boolean($notificationCheckbox.checked)
}

function getNotificationSetting() {
  return localStorage.hideNotification;
}

setTimeout(function () { showNotification(true) }, 30000);