document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById('language-toggle');
    let currentLanguage = 'ua';

    button.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'ua' ? 'ru' : 'ua';
        updateLanguage(currentLanguage);
    });

    const updateLanguage = (lang) => {
        document.querySelectorAll('[data-ua]').forEach((element) => {
            element.textContent = element.getAttribute(`data-${lang}`);
        });
    };

    // Initial language setting
    updateLanguage(currentLanguage);
});


// burger
$('.menu-icon').on('click', function(){
    $('.menu-icon, .menu').toggleClass("active");
    // $('body').toggleClass("overlay");
  })
  
  $(document).click(function(e) {
    if (!$(e.target).hasClass("active") &&
        $(e.target).parents(".site-nav").length === 0) {
          $('.menu-icon, .menu').removeClass("active");
          // $('body').removeClass("overlay");
    }
  });
  $('.menu-item').on('click', function(){
    $('.menu-icon, .menu').removeClass("active");
    // $('body').removeClass("overlay");
  }) 
