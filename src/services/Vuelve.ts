let TituloAnterior = document.title; window.addEventListener('blur', () => { TituloAnterior = document.title; document.title = '¡No te Vayas! 😭'; }); window.addEventListener('focus', () => { document.title = TituloAnterior; })