function goToLink (event, url) {
  var type = event.type;

  if (
    (type === 'click') ||
    (type === 'keydown' && event.keyCode === 13)
  ) {
    window.location.href = url;

    // event.preventDefault();
    event.stopPropagation();
  }
}

function closeNavigation(url) {
  var toggle = document.querySelector('#navi-toggle')
  toggle.checked = false
}