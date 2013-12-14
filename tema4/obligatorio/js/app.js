
document.querySelector('#btn-opt3').addEventListener('click', function() {
    
     document.querySelector('#opt-menu3').className = 'current';
    document.querySelector('[data-position="current"]').className = 'left';
});

document.querySelector('#btn-back-home').addEventListener('click', function() {
   
   document.querySelector('#opt-menu3').className = 'right';
   
   document.querySelector('[data-position="current"]').className = 'current';
});