chrome.storage.sync.get(['disabled'], (result) => {
  console.log(result)

  if (result && result.disabled) {
    let BGGStyles = document.getElementById('BGGcustomStyles');
    if (BGGStyles) BGGStyles.remove();
  } else {
    var css = 'gg-thumbs { display: none !important; }',
      head = document.head || document.getElementsByTagName('head')[0],
      style = document.createElement('style');
    style.setAttribute('id', 'BGGcustomStyles');
    head.appendChild(style);

    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
  }
});


